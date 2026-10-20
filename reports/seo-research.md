# 나그네 검색 의도와 검색 노출 준비

확인일: 2026-10-20 (Asia/Seoul)

이 문서는 공개 검색 결과와 공식 검색엔진 문서에 근거한 편집·구현 제안이다. 월간 검색량, 광고 경쟁도, 실제 나그네 유입 통계는 조회하지 않았다. 아래의 우선순위는 사이트와 검색 의도의 적합도이며 검색량 순위가 아니다. 특정 검색어의 상위 노출이나 표시 제목을 보장하지 않는다.

## 1. 검색 의도 조사

한국어 공개 검색으로 `웹사이트`, `웹사이트 탐구`, `웹서핑 뭐하지 사이트 추천`, `심심할 때 사이트`, `심심할때 사이트 추천 모음`, `재미있는 사이트`, `유용한 사이트`를 확인했다. 검색 결과는 시점·지역·검색엔진에 따라 달라지며, 이번 도구의 일부 결과는 관련성이 낮아 유효한 근거에서 제외했다.

| 검색어군 | 관찰한 공개 자료 | 편집상 해석과 적용 |
| --- | --- | --- |
| 심심할 때 사이트, 재미있는 사이트 | [심심할때 보는 즐겨찾기 사이트 모음](https://www.knowhowgeeks.com/2017/11/sanamomo.html), [재미있는 웹사이트 소개](https://diginuri.tistory.com/6)처럼 놀이·테스트·인터랙션을 묶은 글이 확인됨. 오래된 글이므로 현재 추천 목록의 출처로는 사용하지 않음 | 바로 열 수 있는 목록이 필요하다는 의도로 해석. 홈에서 목록을 먼저 보여주고 `/guide/boredom-websites/`에서 선택 기준과 구체적 활용법 제공 |
| 유용한 사이트, 사이트 모음 | [한국외국어대학교의 철학 자료 안내](https://dep.hufs.ac.kr/philosophy/20206/subview.do), [알아두면 유용한 사이트 57개](https://www.i-boss.co.kr/ab-6141-55279)처럼 학술·자료·업무 용도로 범주화한 문서가 확인됨 | 목적이 매우 넓으므로 한국 생활정보, 디자인, 생산성, 학습으로 나누어 각각 설명. 전체 홈에 모든 키워드를 반복하지 않음 |
| 웹사이트 | [웹사이트 제작 서비스](https://www.isweb.co.kr/)도 노출됨 | 제작·개념·탐색 의도가 섞인 넓은 말. 핵심 설명에는 사용하되 단독 키워드 하나를 위한 전용 페이지는 만들지 않음 |
| 웹사이트 탐구, 웹서핑 | 이번 공개 검색에서는 최근의 일관된 관련 결과를 충분히 확보하지 못함 | 나그네의 서비스 설명과 탐색 방식에 자연스럽게 사용. “자주 검색하는 표현”이라고 단정하지 않음 |
| 뭐하지 | 단어만으로는 온라인 활동과 오프라인 활동을 구별할 수 없음 | “심심할 때 뭐하지?”라는 문맥 안에서 첫 가이드에 사용. 같은 글을 표현만 바꿔 여러 URL로 만들지 않음 |
| 랜선 여행, 디자인 도구, 공부 사이트, 생산성 도구 | 이번 작업에서는 개별 서비스의 공식 페이지를 확인하여 실제로 안내 가능한 주제를 선정 | 검색량이 검증된 인기어가 아니라 관련성이 있는 확장 후보. 콘텐츠의 실제 범위와 맞을 때만 제목·본문에 사용 |

`웹사이트`, `웹서핑`, `뭐하지`처럼 넓은 검색어만으로 사이트 전체를 설명하면 사용자가 원하는 결과가 모호해진다. “심심할 때 열어볼 곳”, “이미지 용량을 줄이는 도구”, “공식 통계를 찾는 곳”처럼 바로 할 수 있는 행동을 알려주는 편이 이 디렉터리의 목적에 맞는다.

### 검색량을 확인할 때의 조건

네이버 데이터랩 API는 선택 기간의 최대치를 100으로 놓은 **상대 비율**을 제공한다. 월간 절대 검색량이 아니다. API 사용에는 발급받은 클라이언트 인증 정보가 필요하며 이번 작업에서 계정 연결이나 API 호출은 수행하지 않았다. [네이버 통합 검색어 트렌드 공식 문서](https://developers.naver.com/docs/serviceapi/datalab/search/search.md)

Google Trends도 표본과 정규화된 관심도 지표를 사용하므로 수치를 실제 검색 횟수로 표기하지 않는다. 검색량이 적으면 데이터가 나타나지 않을 수도 있다. [Google 트렌드 데이터 FAQ](https://support.google.com/trends/answer/4365533?hl=ko)

배포 후에는 Search Console의 실제 노출 검색어·클릭·노출·CTR을 페이지별로 살펴보는 것이 우선이다. 다음 단계에서 외부 키워드 데이터를 확보하면 한국/최근 12개월/웹 검색/기기 범위를 통일하고, 띄어쓰기 변형을 묶어 비교한다. 데이터가 없는 키워드는 “미확인”으로 남긴다.

## 2. 페이지별 키워드와 메타데이터

### 홈

- `<title>`: **전세계의 모든 웹사이트 탐방 - 나그네**
- `og:title`, `twitter:title`: 홈 제목과 동일하게 설정
- description 제안: **한국과 세계의 재미있는 웹사이트, 생활에 유용한 도구, 디자인·학습 사이트를 한곳에서 탐방하세요. 관심 분야별 목록과 활용 가이드로 오늘의 웹서핑을 시작해 보세요.**
- 목록 수가 본문에 표시되면 실제 데이터 개수로 계산한다. 검증되지 않은 “최고”, “가장 인기”, “모두 무료”, “직접 써본” 표현은 넣지 않는다.
- 홈의 시각적 주제와 주요 제목에도 “전세계의 모든 웹사이트 탐방”과 “나그네”의 관계가 분명하게 드러나도록 한다.

요청한 문구는 홈의 **검색 결과 제목 후보**로 설정할 수 있다. Google은 제목 요소뿐 아니라 본문 제목·링크 텍스트 등을 이용해 최종 제목을 만들며, 상황에 따라 수정하거나 잘라 표시한다. 같은 긴 문구를 모든 글 제목에 반복하지 않는다. [Google 제목 링크 지침](https://developers.google.com/search/docs/appearance/title-link)

검색 결과의 작은 **사이트명**과 클릭하는 **페이지 제목**은 별개다. `WebSite` 구조화 데이터의 브랜드 이름은 `나그네`로 일관되게 유지하고, 요청한 전체 문구는 홈의 제목에 사용한다. `og:site_name`, 로고 옆 이름, 소개 문구도 브랜드와 일치시킨다. 사이트명 역시 최종 표시는 검색엔진이 판단한다. [Google 사이트명 지침](https://developers.google.com/search/docs/appearance/site-names)

### 가이드

아래 제목 뒤에 ` - 나그네`를 붙인다. 설명은 `src/data/guides.js`의 `description`을 사용한다. `keywords` 배열은 콘텐츠 분류·연관 링크용이며, Google 순위를 위한 `meta keywords` 용도로 쓰지 않는다.

| 경로 | 제목 | 중심 의도 | 권장 내부 연결 |
| --- | --- | --- | --- |
| `/guide/boredom-websites/` | 심심할 때 뭐하지? 짧게 시작하는 웹사이트 탐구 | 심심할 때 사이트, 재미있는 사이트, 웹사이트 탐구 | 놀이·실험·예술 목록, 랜선 여행 글 |
| `/guide/virtual-travel/` | 화면 너머로 잠깐 떠나는 랜선 여행 | 랜선 여행, 멍때리기 사이트 | 지도·자연·라디오 목록 |
| `/guide/design-toolkit/` | 디자인이 막힐 때, 도구를 여는 순서 | 디자인 사이트 추천, 색 조합, 폰트 | 디자인·이미지·글꼴 목록 |
| `/guide/learning-online/` | 온라인 공부 사이트, 끝까지 활용하는 고르는 법 | 공부 사이트, 온라인 강의, 코딩 공부 | 교육·과학·개발 목록 |
| `/guide/korean-useful-websites/` | 알아두면 쓸모 있는 한국 공공 웹사이트 | 한국 사이트 모음, 유용한 사이트, 공식 자료 | 한국 공공정보·통계 목록 |
| `/guide/productive-browser/` | 일을 줄여주는 웹 도구, 네 가지 역할로 고르기 | 생산성 도구, 업무 사이트, 이미지 용량 줄이기 | 생산성·이미지 편집 목록 |

사이트마다 짧은 소개가 있고 가이드에는 사용 상황·고르는 기준·실제 시작 방법을 더한다. 같은 형식의 문장을 사이트명만 바꿔 늘리지 않는다. 여섯 편이라는 수 자체가 검색 노출이나 AdSense 승인의 기준은 아니다. [Google의 사람을 위한 콘텐츠 지침](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

페이지별 설명은 본문 내용을 짧고 정확하게 요약한다. Google이 반드시 meta description을 그대로 표시하는 것은 아니다. 문맥에 더 맞는 본문을 요약으로 선택할 수 있다. [Google 검색 스니펫 지침](https://developers.google.com/search/docs/appearance/snippet)

## 3. Next.js 정적 출력과 색인

이번 개편은 Next.js App Router의 정적 출력으로 진행한다. 구현·빌드 확인은 담당 작업에서 수행하며 아래는 필요한 결과 기준이다.

- 홈, 카테고리, 각 가이드, 소개, 연락, 개인정보, 약관에 고유 제목과 설명을 둔다.
- 초기 HTML에 목록과 본문을 포함한다. 가이드의 핵심 문단을 클릭 후에만 불러오지 않는다.
- 내부 링크는 실제 경로의 `<a href>`로 연결한다. 지역·키워드·정렬 필터의 모든 조합을 별도 색인 URL로 대량 생성하지 않는다.
- canonical과 사이트맵은 실제 production 호스트와 슬래시 규칙을 일치시킨다. 현재 저장소의 기본 production 주소는 `https://allsites-mine.netlify.app`이며, 새 도메인은 운영자 확정 후 한곳에서 변경한다.
- 구조화 데이터는 실제 화면과 일치하는 `WebSite`, `CollectionPage`, `BreadcrumbList`, 가이드의 `Article` 정도로 구성한다. 가짜 평점, 미검증 작성자 경력, 허구의 검수 이력을 추가하지 않는다.
- 읽을거리와 소개에 사이트 선정 기준과 링크 신고 경로를 둔다. 링크 수보다 사용자가 원하는 사이트를 찾는 기능이 먼저다.
- 모바일에서 본문과 링크를 가리지 않고 사용할 수 있게 한다. 광고 자리에는 크기를 미리 확보하고, 모션 감소 설정에 따라 스크롤 효과를 줄인다.

검색엔진은 canonical을 단독 명령으로 취급하지 않고 다른 신호와 함께 판단한다. 페이지·내부 링크·사이트맵을 같은 정규 URL로 맞춘다. [Google 중복 URL 통합 지침](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

### 테스트와 production을 구분

1. 로컬 테스트와 향후 미리보기 환경은 `noindex` meta를 넣는다. HTTP 서버를 통제할 수 있는 공개 미리보기에는 `X-Robots-Tag: noindex`도 적용할 수 있다.
2. 테스트 주소를 production canonical이나 공개 사이트맵에 넣지 않는다. canonical은 production 주소를 유지하되 **canonical 자체를 테스트 색인 차단 수단으로 쓰지 않는다**.
3. 공개 미리보기에서 `noindex`를 쓰는 경우 robots.txt로 해당 HTML의 크롤링까지 막으면 검색엔진이 noindex를 못 읽을 수 있다. 비공개가 필요하면 별도의 접근 제어를 사용한다. 로컬 서버는 외부에서 접근되지 않도록 둔다.
4. 사용자가 배포를 승인한 후 production 빌드에서만 noindex를 제거하고 최종 HTML과 응답 헤더를 확인한다. 테스트 빌드가 그대로 배포되지 않도록 구분한다.

robots.txt의 Disallow만으로는 검색 결과에서 URL이 사라진다고 보장할 수 없다. 이번 단계에서는 검색엔진 등록·사이트맵 제출·AdSense 심사 요청을 하지 않는다. [Google noindex 문서](https://developers.google.com/search/docs/crawling-indexing/block-indexing)

## 4. 글 작성 근거와 확인 범위

가이드의 활용 순서와 선택 기준은 나그네를 위해 새로 작성했다. 서비스 기능은 아래 공식 공개 페이지를 참고했다. 직접 사용·결제·계정 생성·강의 수강을 했다는 의미는 아니며, 무료 범위·로그인 조건·지역별 가용성을 일괄 단정하지 않았다.

| 글 | 공식 참고 페이지 |
| --- | --- |
| 웹사이트 탐구 | [Neal.fun](https://neal.fun/), [Little Alchemy 2 공식 안내](https://hints.littlealchemy2.com/), [Quick, Draw!](https://quickdraw.withgoogle.com/), [Google Arts & Culture](https://artsandculture.google.com/) |
| 랜선 여행 | [Google Earth](https://earth.google.com/), [Radio Garden](https://radio.garden/), [Explore.org](https://explore.org/), [Earth Nullschool](https://earth.nullschool.net/) |
| 디자인 | [Figma](https://www.figma.com/), [Canva](https://www.canva.com/), [Adobe Color](https://color.adobe.com/), [Google Fonts](https://fonts.google.com/) |
| 학습 | [K-MOOC](https://www.kmooc.kr/), [Khan Academy](https://www.khanacademy.org/), [TED](https://www.ted.com/), [MDN](https://developer.mozilla.org/ko/) |
| 한국 공공정보 | [정부24](https://www.gov.kr/), [KOSIS](https://kosis.kr/), [공공데이터포털](https://www.data.go.kr/), [국립중앙도서관 자료 검색 안내](https://www.nl.go.kr/NL/contents/N10400000000.do) |
| 생산성 | [Notion 도움말](https://www.notion.com/help), [Todoist](https://www.todoist.com/), [Photopea 사용 안내](https://www.photopea.com/learn/), [Squoosh](https://squoosh.app/) |

JavaScript가 필요한 서비스는 텍스트 수집에 내용이 적거나 브라우저 지원 안내만 반환했다. 국립중앙도서관 홈은 웹 수집 도구에서 오류가 났지만 공식 자료 검색 안내는 확인되었다. 이런 결과를 종료된 서비스나 접속 정상의 증거로 단정하지 않는다. 전체 목록의 접속 점검 결과와 브라우저 확인 범위는 별도 링크 감사 보고서를 따른다.

## 5. 배포 승인을 받은 뒤의 점검

- 확정 도메인의 소유권, canonical, 사이트맵, robots, HTML의 noindex 부재 확인
- Search Console과 네이버 서치어드바이저의 기존 등록 상태를 확인한 뒤 필요한 등록·사이트맵 제출 수행
- 초기 색인 상태와 실제 검색어를 보고 잘못된 제목·빈 페이지·오류를 고침
- 방문자가 많이 찾는 범주에 필요한 고유 설명과 가이드를 보강
- 광고 활성화는 도메인·게시자·연락처·동의 설정을 확인한 별도 단계로 진행

근거 없는 검색량·승인 확률·검색 순위·콘텐츠 최소 개수는 보고서나 사용자 화면에 표시하지 않는다.

## 2026-10-20 이름 및 도메인 확정

- 이름: 사이트 맛집
- 부제: 유용하고 재미있는 웹사이트 모음집
- 홈 제목: 사이트 맛집 - 유용하고 재미있는 웹사이트 모음집
- 기본 주소: https://vsites.co.kr
- “웹사이트 모음집”은 서비스의 내용을 직접 설명하는 검색 의도 표현이다. 월간 검색량 도구 데이터가 없으므로 가장 많이 검색하는 키워드라고 주장하지 않는다.
- 홈과 검색 제목·OG·WebSite name은 같은 이름을 사용한다. 웹게임과 심심할 때라는 주제는 해당 카테고리·가이드에서 구체적으로 설명한다.
- 참고: [Google 제목 링크 안내](https://developers.google.com/search/docs/appearance/title-link?hl=ko), [사이트 이름 안내](https://developers.google.com/search/docs/appearance/site-names?hl=ko). 최종 검색 표시와 순위는 검색엔진이 결정한다.
