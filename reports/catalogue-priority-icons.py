"""Exact icon URLs observed by the parent agent in the live official page DOM."""
import hashlib
import importlib.util
import json
from pathlib import Path
root = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("audit", root / "scripts/audit-links.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
sources = {
    "neal.fun": "https://neal.fun/favicons/home.png",
    "chatgpt.com": "https://chatgpt.com/unauth-mweb/images/favicon-48x48.png",
}
results = {}
for url, icon_url in sources.items():
    image = module.fetch(icon_url, 12, 600000)
    ext = module.image_extension(image["body"])
    result = {"source": icon_url, "status": image["status"]}
    if 200 <= image["status"] < 300 and ext:
        name = hashlib.sha256(url.encode()).hexdigest()[:14] + ext
        (root / "public/icons" / name).write_bytes(image["body"])
        result.update({"icon": "/icons/" + name, "iconSource": image["finalUrl"]})
    results[url] = result
file = root / "reports/catalogue-candidate-audit.json"
data = json.loads(file.read_text())
for row in data["results"]:
    if row["url"] in results and results[row["url"]].get("icon"):
        row["icon"] = results[row["url"]]["icon"]
        row["iconSource"] = results[row["url"]]["iconSource"]
file.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
(root / "reports/catalogue-priority-icons.json").write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n")
print(json.dumps(results, ensure_ascii=False))
