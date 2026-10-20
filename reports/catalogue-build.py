"""Reproducible editorial merge. Run from the repository root."""
import hashlib
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
regions = json.loads((root / "reports/catalogue-original.json").read_text())
audit_path = root / "reports/catalogue-candidate-audit.json"
audit = json.loads(audit_path.read_text()) if audit_path.exists() else None
overrides = dict(line.split("|", 1) for line in (root / "reports/catalogue-descriptions.txt").read_text().splitlines() if "|" in line)
exclude = {
    "balancegame.net", "kwordle.kr", "tajawang.com", "dbtjd778.github.io/box-finder",
    "todayquit.com", "chlngers.com", "sadari.net", "font.toss.im", "speller.cs.pusan.ac.kr",
    "pushoong.com", "asked.kr", "littlely.com", "jjal.studio",
    "dbtjd778.github.io/cheongnyeondaum-club", "dbtjd778.github.io/weaone",
    "namu.wiki", "theuselessweb.com", "boredbutton.com", "donothingfor2minutes.com",
    "mapcrunch.com", "noisli.com", "store.steampowered.com/app/1366180", "timetimer.com",
    "emojiwiki.com", "emojitranslate.com", "10minutemail.com", "character.ai",
    "glitch.com", "summarize.tech", "archive.ph", "reddit.com", "office.naver.com",
}
url_changes = {
    "deepbrain.io": "aistudios.com",
    "myroutine.kr": "myroutine.today",
    "vrew.voyens.com": "vrew.ai",
    "notion.so": "notion.com",
    "runwayml.com": "runway.com",
    "v0.dev": "v0.app",
    "draw.io": "app.diagrams.net",
    "archive.org/web": "web.archive.org",
}
category_copy = {
    "kr-test": ("테스트 · 놀이", "가볍게, 나를 알아가는 시간", "취향과 성향을 소재로 한 짧은 테스트와 언어 놀이를 모았습니다. 전문적인 심리 진단이 필요한 상황과 구분해 가벼운 재미로 즐겨 보세요."),
    "kr-text": ("타자 · 습관", "작은 반복이 만드는 하루", "키보드를 두드리며 타자를 연습하고 하루의 루틴을 정리하는 도구입니다. 잠깐의 빈 시간을 원하는 습관으로 채워 보세요."),
    "kr-utility": ("한국어 도구", "일상의 작은 일을 가볍게", "한국어 문서와 이미지, 설문을 다루는 도구를 모았습니다. 필요한 작업부터 골라 각 서비스의 파일 처리 방식과 이용 조건을 확인하세요."),
    "kr-builder": ("개발 · AI", "배우고 직접 만드는 즐거움", "한국어 강좌와 기술 글, 제작 도구를 함께 모았습니다. 기초 개념을 익히거나 작은 프로젝트를 시작하는 데 필요한 길을 찾아보세요."),
    "kr-data": ("정보 · 데이터", "궁금한 것을 근거로 살펴보기", "공공 통계와 지도, 검색 흐름을 살펴보는 자료입니다. 숫자를 비교할 때는 지표의 정의와 조사 시점, 원출처를 함께 읽어 보세요."),
    "gl-detox": ("작은 웹 실험", "잠깐 다른 곳에 머무르기", "풍경을 바라보거나 소리를 섞고, 화면 속 작은 실험을 만지는 공간입니다. 목적 없이 둘러보다 흥미로운 아이디어를 발견해 보세요."),
    "gl-quiz": ("게임 · 퍼즐", "한 번 더 생각하는 재미", "단어와 지도, 숫자와 그림으로 즐기는 게임을 모았습니다. 짧은 퍼즐부터 친구와 함께하는 놀이까지 기분에 맞게 골라 보세요."),
    "gl-design": ("디자인 · 이미지", "좋은 시선이 시작되는 곳", "디자인 사례와 서체, 색과 이미지 자료를 모았습니다. 영감을 얻은 뒤 파일별 라이선스와 사용 조건을 확인해 작업에 활용하세요."),
    "gl-utility": ("도구 · 생산성", "복잡한 일을 간단하게", "이미지와 문서를 다듬고 아이디어와 할 일을 정리하는 도구입니다. 필요한 기능과 개인정보 처리 방식을 살펴본 뒤 이용해 보세요."),
    "gl-ai": ("AI · 창작", "생각의 초안을 만드는 도구", "글과 이미지, 소리와 영상을 만드는 AI 도구를 모았습니다. 기능과 요금, 결과물 이용 조건을 비교하고 생성된 내용은 직접 검토하세요."),
    "gl-builder": ("코딩 · 만들기", "아이디어를 작동하게", "기술 문서와 연습 과제, 개발 도구를 함께 모았습니다. 읽고 실험하고 구현하는 과정을 오가며 자신만의 프로젝트를 만들어 보세요."),
    "gl-data": ("지식 · 데이터", "숫자와 기록으로 보는 세계", "세계의 변화와 사람들의 움직임을 자료로 살펴보는 목록입니다. 그래프와 수치의 산출 방식과 출처를 확인하며 탐구해 보세요."),
}
for region in regions:
    region["lead"] = "한국어로 배우고 만들고, 생활의 새로운 장소를 발견하는 사이트입니다." if region["id"] == "kr" else "언어와 국경을 넘어 흥미로운 아이디어와 지식을 만나는 사이트입니다."
    for category in region["categories"]:
        category["category"], category["tagline"], category["blurb"] = category_copy[category["id"]]
        category["sites"] = [site for site in category["sites"] if site["url"] not in exclude]
        for site in category["sites"]:
            site["desc"] = overrides.get(site["url"], site["desc"])
            site["url"] = url_changes.get(site["url"], site["url"])
            if site["name"] == "딥브레인":
                site["name"] = "AI Studios"
            if site["name"] == "v0":
                site["name"] = "v0"
categories = {cat["id"]: cat for reg in regions for cat in reg["categories"]}
current = None
for line in (root / "reports/catalogue-additions.txt").read_text().splitlines():
    if not line:
        continue
    if line.startswith("# "):
        values = line[2:].split("|")
        cat_id = values[0]
        if cat_id not in categories:
            current = {"id": cat_id, "category": values[1], "tagline": values[2], "blurb": values[3], "sites": []}
            categories[cat_id] = current
            regions[0 if cat_id.startswith("kr-") else 1]["categories"].append(current)
        current = categories[cat_id]
        continue
    name, url, desc = line.split("|", 2)
    if url not in exclude:
        if url == "doda.app":
            name = "도다"
        if url == "tally.so":
            categories["gl-utility"]["sites"].append({"name": "Tally", "url": url, "desc": desc})
        else:
            current["sites"].append({"name": name, "url": url, "desc": desc})
corrections_path = root / "reports/catalogue-corrections.json"
if corrections_path.exists():
    corrections = json.loads(corrections_path.read_text())
    for region in regions:
        for category in region["categories"]:
            for site in category["sites"]:
                correction = corrections.get(site["url"])
                if correction:
                    site.update(correction)
sites = [site for region in regions for cat in region["categories"] for site in cat["sites"]]
if len({site["url"] for site in sites}) != len(sites):
    raise ValueError("Duplicate URL")
for region in regions:
    for cat in region["categories"]:
        for site in cat["sites"]:
            site["id"] = hashlib.sha256(site["url"].encode()).hexdigest()[:14]
            site["tags"] = [cat["category"], "한국어" if region["id"] == "kr" else "세계"]
if audit:
    checks = {item["url"]: item for item in audit["results"]}
    selected_path = root / "reports/catalogue-selected.json"
    selected = set(json.loads(selected_path.read_text())) if selected_path.exists() else None
    for region in regions:
        for cat in region["categories"]:
            if selected:
                cat["sites"] = [site for site in cat["sites"] if site["url"] in selected]
            for site in cat["sites"]:
                check = checks.get(site["url"])
                if check:
                    site["linkStatus"] = check["classification"]
                    site["verifiedAt"] = audit["checkedAt"][:10]
                    if check.get("browserVerification"):
                        site["browserVerifiedAt"] = check["browserVerification"]["checkedAt"]
                    if check.get("icon"):
                        site["icon"] = check["icon"]
output = "// 나그네 편집 큐레이션. 원출처·접속 검사: reports/catalogue-audit.json\n"
output += "export const regions = " + json.dumps(regions, ensure_ascii=False, indent=2) + "\n\n"
output += """export const countByRegion = Object.fromEntries(
  regions.map((r) => [r.id, r.categories.reduce((sum, c) => sum + c.sites.length, 0)])
)
export const allCategories = regions.flatMap((r) =>
  r.categories.map((c) => ({ ...c, regionId: r.id, regionLabel: r.label }))
)
export const allSites = regions.flatMap((r) =>
  r.categories.flatMap((c) =>
    c.sites.map((s) => ({
      ...s, regionId: r.id, regionLabel: r.label,
      categoryId: c.id, categoryName: c.category,
    }))
  )
)
export const totalSiteCount = allSites.length
export const totalCategoryCount = allCategories.length
"""
(root / "src/data/sites.js").write_text(output)
all_sites = [site for region in regions for cat in region["categories"] for site in cat["sites"]]
if not audit:
    (root / "reports/catalogue-candidates.json").write_text(json.dumps(all_sites, ensure_ascii=False, indent=2))
print(len(all_sites), "sites;", len(categories), "categories")
