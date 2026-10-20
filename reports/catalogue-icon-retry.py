"""Check standard icon locations on the same official host, without a proxy."""
import concurrent.futures
import hashlib
import importlib.util
import json
from pathlib import Path
from urllib.parse import urlparse

root = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("audit", root / "scripts/audit-links.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
report = json.loads((root / "reports/catalogue-audit.json").read_text())
missing = [s for s in report["results"] if not s.get("icon")]

def retrieve(site):
    host = urlparse("https://" + site["url"]).hostname
    final_host = urlparse(site["finalUrl"]).hostname
    hosts = list(dict.fromkeys([final_host, host] + (["www." + host] if host.count(".") < 3 and not host.startswith("www.") else [])))
    paths = ["/favicon.ico", "/favicon.png", "/apple-touch-icon.png", "/favicon.svg"]
    for icon_host in hosts:
        for icon_path in paths:
            url = "https://" + icon_host + icon_path
            image = module.fetch(url, 7, 600000)
            ext = module.image_extension(image["body"])
            if 200 <= image["status"] < 300 and ext:
                name = hashlib.sha256(site["url"].encode()).hexdigest()[:14] + ext
                (root / "public/icons" / name).write_bytes(image["body"])
                return {"url": site["url"], "icon": "/icons/" + name, "iconSource": image["finalUrl"]}
    return {"url": site["url"]}

with concurrent.futures.ThreadPoolExecutor(max_workers=16) as pool:
    results = list(pool.map(retrieve, missing))
for filename in ["catalogue-candidate-audit.json", "catalogue-retry-audit.json", "catalogue-audit.json"]:
    file = root / "reports" / filename
    data = json.loads(file.read_text())
    match = {r["url"]: r for r in results if r.get("icon")}
    for row in data["results"]:
        if row["url"] in match:
            row.update(match[row["url"]])
    data["icons"] = sum(bool(r.get("icon")) for r in data["results"])
    file.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
(root / "reports/catalogue-icon-retry.json").write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n")
print(json.dumps({"checked": len(missing), "recovered": sum(bool(r.get("icon")) for r in results)}, ensure_ascii=False))
