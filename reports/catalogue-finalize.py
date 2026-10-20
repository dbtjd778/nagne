import datetime
import json
from pathlib import Path
import re
root = Path(__file__).resolve().parents[1]
report = root / "reports"
data = json.loads((report / "catalogue-candidate-audit.json").read_text())
retry = json.loads((report / "catalogue-retry-audit.json").read_text())
corrections = {}
for row in retry["results"]:
    if row["classification"] == "reachable":
        old = row["url"].removeprefix("www.")
        corrections[old] = {"url": row["url"]}
for row in data["results"]:
    title = row.get("title", "")
    if re.search(r"client challenge|making sure you.re not a bot|just a moment|security checkpoint|captcha challenge", title, re.I):
        row["classification"] = "restricted"
        row["reviewNote"] = "HTTP 200 body is a bot challenge, not a completed page load."
    if row.get("status") == 202 and not title:
        row["classification"] = "restricted"
        row["reviewNote"] = "HTTP 202 has no page title; full page access is not confirmed."
    if "지원 중단된 브라우저" in title:
        row["classification"] = "restricted"
        row["reviewNote"] = "The server requires a supported interactive browser."
    if re.search(r"서비스\s*종료", title):
        row["classification"] = "retired"
        row["reviewNote"] = "HTTP 200 is a service-closure notice."
data["results"] = [row for row in data["results"] if not row["url"].startswith("www.") or row["url"] not in {r["url"] for r in retry["results"]}]
data["results"].extend(retry["results"])
data["finishedAt"] = retry["finishedAt"]
corrections.update({
    "kostat.go.kr": {"name": "국가데이터처", "desc": "국가 통계와 데이터 정책, 조사 정보를 제공합니다. 공식 통계의 발표와 연구 자료를 살펴볼 수 있습니다."},
    "me.go.kr": {"name": "기후에너지환경부", "desc": "기후와 에너지, 환경 분야의 정책과 공공 자료를 제공합니다. 제도 안내와 공식 발표를 찾아볼 수 있습니다."},
    "globalforestwatch.org": {"name": "Global Nature Watch", "desc": "산림과 토지 이용, 자연의 변화를 지도에서 살펴봅니다. 지역과 기간별 관측 정보를 비교할 수 있습니다."},
    "saylor.org": {"name": "Saylor University", "desc": "대학 수준의 온라인 학습 과정과 교육 안내를 제공합니다. 과정별 학습 내용과 이수 조건을 살펴보세요."},
    "iksi.or.kr": {"name": "온라인 세종학당", "url": "www.iksi.or.kr", "desc": "한국어를 배우는 온라인 강좌와 학습 자료를 제공합니다. 수준과 수강 방식에 맞는 과정을 찾아볼 수 있습니다."},
    "colormytree.me": {"name": "내 트리를 꾸며줘!"},
    "durunubi.kr": {"name": "두루누비"},
    "inaturalist.org": {"name": "iNaturalist"},
    "pomofocus.io": {"name": "Pomofocus"},
    "wheelofnames.com": {"name": "Wheel of Names"},
    "routinery.app": {"name": "루티너리"},
    "cursor.com": {"name": "Cursor"},
    "bolt.new": {"name": "Bolt"},
    "you.com": {"desc": "AI 검색과 개발용 검색 API를 제공하는 플랫폼입니다. 기능별 문서와 제공 범위를 확인할 수 있습니다."},
    "rememberapp.co.kr": {"desc": "경력직 채용 공고와 커리어 서비스를 제공합니다. 직무와 기업별 기회를 찾아보고 채용 조건을 확인할 수 있습니다."},
})
excluded = {
    "doda.app": "스모어로 리디렉션되어 기존 항목과 중복",
    "acmicpc.net": "HTTP 200이지만 공식 페이지 제목이 BOJ 서비스 종료",
    "keep.google.com": "Google 로그인 화면만 확인되어 이번 추천에서 제외",
    "search.naver.com/search.naver?query=글자수세기": "검색 결과 URL 대신 직접 도구 링크를 우선",
    "littlealchemy.com": "Little Alchemy 2와 유사해 큐레이션 중복 축소",
    "snapdrop.net": "PairDrop 등 파일 전송 도구와 유사해 중복 축소",
    "picrew.me": "이용자가 만든 이미지별 내용과 권리 검증 범위가 넓어 제외",
}
restricted_keep = {"neal.fun", "canva.com", "khanacademy.org", "chatgpt.com", "claude.ai"}
candidates = json.loads((report / "catalogue-candidates.json").read_text())
checks = {row["url"]: row for row in data["results"]}
selected = []
for site in candidates:
    old_url = site["url"]
    url = corrections.get(old_url, {}).get("url", old_url)
    if old_url in excluded:
        continue
    status = checks[url]["classification"]
    if status == "reachable" or old_url in restricted_keep:
        selected.append(url)
print("Selected", len(selected), "sites")
if len(selected) != 500:
    raise ValueError(f"Expected 500, got {len(selected)}")
data["summary"] = {}
for row in data["results"]:
    status = row["classification"]
    data["summary"][status] = data["summary"].get(status, 0) + 1
data["icons"] = sum(bool(row.get("icon")) for row in data["results"])
data["editorialExclusions"] = excluded
data["restrictedRetained"] = sorted(restricted_keep)
final = dict(data)
final["results"] = [checks[url] for url in selected]
final["summary"] = {}
for row in final["results"]:
    status = row["classification"]
    final["summary"][status] = final["summary"].get(status, 0) + 1
final["icons"] = sum(bool(row.get("icon")) for row in final["results"])
(report / "catalogue-corrections.json").write_text(json.dumps(corrections, ensure_ascii=False, indent=2) + "\n")
(report / "catalogue-candidate-audit.json").write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
(report / "catalogue-audit.json").write_text(json.dumps(final, ensure_ascii=False, indent=2) + "\n")
(report / "catalogue-selected.json").write_text(json.dumps(selected, ensure_ascii=False, indent=2) + "\n")
print("Final:", final["summary"], "local icons:", final["icons"])
