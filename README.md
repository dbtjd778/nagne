# 나그네 (nagne)

심심할 때 열어보는 웹사이트 큐레이션 디렉토리.
한국 사이트 42개, 외국 사이트 166개 — 총 **208개**를 12개 카테고리로 정리했습니다.

## 기술 스택

| 항목 | 사용 기술 |
| --- | --- |
| 프레임워크 | React 18 + Vite 5 |
| 스타일 | Tailwind CSS 3 |
| 애니메이션 | Framer Motion 11 |
| 라우팅 | React Router 6 |
| 배포 | Netlify |

## 실행

```bash
npm install
npm run dev
```

`http://localhost:5173` 에서 열립니다.

```bash
npm run build     # sitemap 자동 생성 후 dist/ 로 빌드
npm run preview   # 빌드 결과 미리보기
```

## 폴더 구조

```
nagne/
├─ index.html                  메타 태그, 폰트, 애드센스 스크립트 자리
├─ netlify.toml                빌드 설정 + SPA 리다이렉트 + 캐시 헤더
├─ scripts/
│  └─ generate-sitemap.mjs     site.config 도메인 기준 sitemap/robots 생성
├─ public/
│  ├─ _redirects               SPA 라우팅 (Netlify)
│  ├─ ads.txt                  애드센스 승인 후 게시자 ID 기입
│  ├─ robots.txt               빌드 시 자동 생성
│  ├─ sitemap.xml              빌드 시 자동 생성 (17개 URL)
│  └─ favicon.svg
└─ src/
   ├─ site.config.js           도메인·이메일·애드센스 ID (배포 전 필수 수정)
   ├─ data/sites.js            큐레이션 데이터베이스
   ├─ App.jsx                  라우팅 + 페이지 전환
   ├─ components/
   │  ├─ ScrollTheme.jsx       스크롤에 따른 다크 → 라이트 색 보간
   │  ├─ Hero.jsx              메인 타이포그래피 + 패럴랙스
   │  ├─ RegionTabs.jsx        한국/외국 탭 (layoutId 슬라이딩)
   │  ├─ Directory.jsx         지역 전환 + 검색 + 카테고리 그리드
   │  ├─ CategoryCard.jsx      클릭 시 확장되는 모핑 박스
   │  ├─ SiteCard.jsx          사이트 카드 (새 창 열기)
   │  ├─ Header.jsx / Footer.jsx
   │  └─ PageShell.jsx         정적 페이지 레이아웃 + 메타 훅
   └─ pages/
      ├─ Home.jsx              Hero + 선정 기준 + Directory
      ├─ Category.jsx          /c/:categoryId 단독 페이지
      ├─ About / Contact / Privacy / Terms / NotFound
```

## 구현된 인터랙션

**스크롤 색 보간** — `ScrollTheme.jsx` 가 `useScroll` 진행도 0 → 0.42 구간에서
배경 `#111111 → #FAFAFA`, 전경 `#F2F2F2 → #111111` 을 보간합니다. 색은 CSS 변수
(`--bg`, `--fg`, `--muted`, `--line`, `--surface`)로 하위 트리에 전달되므로 테두리와
보조 텍스트까지 한꺼번에 따라 변합니다. `<body>` 배경도 함께 갱신해 오버스크롤
영역에서 색이 끊기지 않습니다.

**지역 탭 슬라이딩** — `RegionTabs.jsx` 에서 선택된 탭에만 `layoutId="region-pill"`
배경을 렌더링합니다. 선택이 바뀌면 Framer Motion 이 두 위치를 같은 요소로 인식해
스프링으로 이동시킵니다.

**카테고리 모핑** — `CategoryCard.jsx` 의 `<motion.article layout>` 이 열릴 때
`sm:col-span-2 lg:col-span-3` 으로 그리드 폭을 넓히고, 나머지 카드들도 `layout` 으로
새 위치로 흘러갑니다. 내부 목록은 `AnimatePresence` 로 살짝 늦게 페이드인되며
카드들은 `staggerChildren` 으로 순차 등장합니다.

**전환 커브** — 모든 크기·위치 변화는 스프링
(`stiffness: 210, damping: 30`), 페이드는 `cubic-bezier(0.16, 1, 0.3, 1)` 을 씁니다.
`MotionConfig reducedMotion="user"` 로 OS 의 «동작 줄이기» 설정을 존중합니다.

## 배포 전 반드시 수정할 것

1. **`src/site.config.js`** — `url`(구매한 도메인), `email`(실제 문의 주소)
2. **`index.html`** — `<link rel="canonical">`, `og:url` 의 도메인
3. **`public/ads.txt`** — 애드센스 승인 후 게시자 ID
4. `npm run build` 를 한 번 실행하면 sitemap/robots 가 새 도메인으로 갱신됩니다

애드센스 준비 사항은 [ADSENSE.md](ADSENSE.md) 를 참고하세요.

## 데이터 수정

`src/data/sites.js` 하나만 고치면 홈, 카테고리 페이지, 검색, 푸터, 사이트맵이 모두
따라갑니다. 개수(`totalSiteCount` 등)는 배열에서 자동 계산되므로 손댈 필요가 없습니다.

```js
{
  id: 'kr-test',              // URL 이 됩니다 (/c/kr-test) — 바꾸면 링크가 깨집니다
  category: '카테고리 이름',
  tagline: '한 줄 부제',
  blurb: '펼쳤을 때 목록 위에 나오는 소개문',
  sites: [
    { name: '이름', url: 'example.com', desc: '한 줄 설명' },
  ],
}
```
