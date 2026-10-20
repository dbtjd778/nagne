#!/usr/bin/env python3
"""Audit the public catalogue and optionally cache its published site icons.

An HTTP bot challenge is recorded as restricted, never mistaken for a dead site.
No cookies, credentials, private URLs, or third-party favicon service are used.
"""
import argparse
import concurrent.futures
import datetime
import hashlib
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
import tempfile
import time
from urllib.parse import urljoin, urlparse

ROOT = Path(__file__).resolve().parents[1]
UA = "Mozilla/5.0 (compatible; NagneLinkCheck/1.0; public website directory)"


class PageInfo(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.title = ""
        self.icons = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == "title":
            self.in_title = True
        if tag == "link" and "icon" in values.get("rel", "").lower() and values.get("href"):
            self.icons.append(values["href"])

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data


def fetch(url, timeout=18, max_size=2097152):
    with tempfile.NamedTemporaryFile() as body:
        started = time.monotonic()
        proc = subprocess.run(
            ["curl", "--silent", "--show-error", "--location", "--max-redirs", "6",
             "--compressed", "--connect-timeout", "7", "--max-time", str(timeout),
             "--max-filesize", str(max_size), "--user-agent", UA, "--proto", "=https,http",
             "--output", body.name, "--write-out", "%{http_code}\n%{url_effective}\n%{content_type}",
             url],
            capture_output=True, text=True,
        )
        parts = proc.stdout.split("\n")
        return {
            "status": int(parts[0]) if parts and parts[0].isdigit() else 0,
            "finalUrl": parts[1] if len(parts) > 1 else url,
            "contentType": parts[2] if len(parts) > 2 else "",
            "curlExit": proc.returncode,
            "error": proc.stderr.strip()[:400],
            "durationMs": round((time.monotonic() - started) * 1000),
            "body": Path(body.name).read_bytes(),
        }


def image_extension(data):
    if data.startswith(b"\x89PNG\r\n\x1a\n"):
        return ".png"
    if data.startswith(b"\x00\x00\x01\x00"):
        return ".ico"
    if data.startswith(b"\xff\xd8\xff"):
        return ".jpg"
    if data.startswith((b"GIF87a", b"GIF89a")):
        return ".gif"
    if data.startswith(b"RIFF") and data[8:12] == b"WEBP":
        return ".webp"
    text = data[:1000000].decode("utf-8", errors="ignore")
    if "<svg" in text and not re.search(r"<script|<foreignObject|onload\s*=|javascript:", text, re.I):
        return ".svg"
    return None


def audit(site, icons, timeout):
    url = site["url"]
    if not url.startswith(("https://", "http://")):
        url = "https://" + url
    result = fetch(url, timeout)
    body = result.pop("body")
    parser = PageInfo()
    if "html" in result["contentType"] or body.lstrip().startswith(b"<"):
        try:
            parser.feed(body.decode("utf-8", errors="replace"))
        except Exception:
            pass
    status = result["status"]
    classification = (
        "reachable" if 200 <= status < 300 else
        "restricted" if status in (401, 403, 429) else
        "dead" if status in (404, 410) or result["curlExit"] in (5, 6) else
        "redirect" if 300 <= status < 400 else "unverified"
    )
    title = html.unescape(re.sub(r"\s+", " ", parser.title)).strip()[:240]
    if re.search(r"client challenge|making sure you.re not a bot|just a moment|security checkpoint|captcha challenge|request verification", title, re.I):
        classification = "restricted"
    if status == 202 and not title:
        classification = "restricted"
    if re.search(r"서비스\s*종료|service (has )?(ended|closed)|permanently closed", title, re.I):
        classification = "retired"
    if "지원 중단된 브라우저" in title:
        classification = "restricted"
    suspicious = bool(re.search(
        r"domain (is )?for sale|buy this domain|this domain is parked|sedo domain parking|hugedomains",
        title, re.I,
    ))
    entry = {
        "id": site.get("id"),
        "name": site["name"],
        "url": site["url"],
        **result,
        "classification": classification,
        "title": title,
        "redirected": url.rstrip("/") != result["finalUrl"].rstrip("/"),
        "reviewRedirect": urlparse(url).hostname != urlparse(result["finalUrl"]).hostname,
        "suspectedParking": suspicious,
    }
    if icons and classification in ("reachable", "restricted"):
        candidates = []
        for href in parser.icons:
            resolved = urljoin(result["finalUrl"], href)
            if urlparse(resolved).scheme in ("http", "https"):
                candidates.append(resolved)
        parsed = urlparse(result["finalUrl"])
        candidates.append(f"{parsed.scheme}://{parsed.netloc}/favicon.ico")
        for icon_url in list(dict.fromkeys(candidates))[:4]:
            icon = fetch(icon_url, min(timeout, 10), 1000000)
            extension = image_extension(icon["body"])
            if 200 <= icon["status"] < 300 and extension:
                key = hashlib.sha256(site["url"].encode()).hexdigest()[:14]
                target = ROOT / "public" / "icons" / f"{key}{extension}"
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(icon["body"])
                entry["icon"] = "/icons/" + target.name
                entry["iconSource"] = icon["finalUrl"]
                break
    return entry


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", help="JSON array of sites; default imports src/data/sites.js")
    ap.add_argument("--output", default="reports/catalogue-audit.json")
    ap.add_argument("--icons", action="store_true")
    ap.add_argument("--workers", type=int, default=16)
    ap.add_argument("--timeout", type=int, default=18)
    args = ap.parse_args()
    if args.input:
        sites = json.loads(Path(args.input).read_text())
    else:
        proc = subprocess.run(
            ["node", "--input-type=module", "-e",
             "import { allSites } from './src/data/sites.js'; console.log(JSON.stringify(allSites));"],
            cwd=ROOT, check=True, capture_output=True, text=True,
        )
        sites = json.loads(proc.stdout)
    started = datetime.datetime.now(datetime.timezone.utc).isoformat()
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(audit, site, args.icons, args.timeout): site for site in sites}
        for future in concurrent.futures.as_completed(futures):
            site = futures[future]
            try:
                result = future.result()
            except Exception as error:
                result = {"name": site["name"], "url": site["url"], "classification": "unverified", "error": str(error)}
            results.append(result)
            if len(results) % 25 == 0:
                print(f"Checked {len(results)}/{len(sites)}", flush=True)
    order = {site["url"]: index for index, site in enumerate(sites)}
    results.sort(key=lambda item: order[item["url"]])
    summary = {}
    for item in results:
        key = item["classification"]
        summary[key] = summary.get(key, 0) + 1
    output = ROOT / args.output
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps({
        "checkedAt": started, "finishedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "method": "HTTPS GET; redirects followed; no authentication; restricted responses are not dead links",
        "summary": summary, "icons": sum(bool(item.get("icon")) for item in results), "results": results,
    }, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"output": str(output), **summary, "icons": sum(bool(item.get("icon")) for item in results)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
