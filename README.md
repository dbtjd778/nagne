# 나그네 (nagne)

심심할 때 열어보는 웹사이트 큐레이션 디렉토리.
한국 사이트 41개, 외국 사이트 165개 — 총 **206개**를 12개 카테고리로 정리했습니다.

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
npm run build        # sitemap 생성 → 클라이언트 빌드 → SSR 빌드 → 17개 페이지 프리렌더
npm run preview      # 빌드 결과 미리보기 (아래 주의 참고)
npm run check-links  # 등록된 외부 링크 206개의 응답 확인
```

> `npm run preview` 로 확인할 때는 `/c/gl-quiz/` 처럼 **끝에 슬래시를 붙여야** 합니다.
> `vite preview` 는 확장자 없는 경로에 SPA 폴백(홈 HTML)을 내려주기 때문에 슬래시가
> 없으면 엉뚱한 페이지가 뜹니다. Netlify 는 `/c/gl-quiz` 를 `c/gl-quiz/index.html` 로
> 정상 처리하므로 실제 배포에서는 문제가 없습니다.

## 프리렌더링

`npm run build` 는 세 단계로 동작합니다.

1. `vite build` — 브라우저용 번들
2. `vite build --ssr src/entry-server.jsx` — Node 에서 실행할 렌더 함수
3. `scripts/prerender.mjs` — 17개 라우트를 `renderToString` 으로 렌더해
   `dist/<경로>/index.html` 로 저장하고, 페이지별 `title` / `description` /
   `canonical` / `og:` 태그를 주입

덕분에 JavaScript 를 실행하지 않는 크롤러도 본문 전체를 읽을 수 있습니다.
브라우저에서는 `main.jsx` 가 `#root` 에 내용이 있으면 `hydrateRoot` 로 이어받습니다.
(서버 출력과 클라이언트 렌더 결과가 정확히 일치하는지 확인 완료 — 하이드레이션 경고 없음)

라우트를 추가할 때는 `src/routes.meta.js` 에 항목을 넣으면 sitemap 과 프리렌더가
함께 따라갑니다.

## 폴더 구조

```
nagne/
├─ index.html                  메타 태그, 폰트, 애드센스 스크립트 자리
├─ netlify.toml                빌드 설정 + SPA 리다이렉트 + 캐시 헤더
├─ scripts/
│  ├─ generate-sitemap.mjs     routes.meta 기준 sitemap/robots 생성
│  ├─ prerender.mjs            17개 라우트를 정적 HTML 로 렌더링
│  └─ check-links.mjs          외부 링크 응답 점검
├─ public/
│  ├─ _redirects               SPA 라우팅 (Netlify)
│  ├─ ads.txt                  애드센스 승인 후 게시자 ID 기입
│  ├─ robots.txt               빌드 시 자동 생성
│  ├─ sitemap.xml              빌드 시 자동 생성 (17개 URL)
│  └─ favicon.svg
└─ src/
   ├─ site.config.js           도메인·이메일·애드센스 ID (배포 전 필수 수정)
   ├─ routes.meta.js           라우트 목록 + 페이지별 title/description
   ├─ data/sites.js            큐레이션 데이터베이스
   ├─ entry-server.jsx         프리렌더용 SSR 엔트리
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

## 배포

Netlify: https://allsites-mine.netlify.app

`netlify.toml` 에 빌드 명령(`npm run build`)과 배포 폴더(`dist`)가 들어 있어 저장소를
연결하면 그대로 동작합니다.

### 도메인을 새로 연결할 때

1. **`src/site.config.js`** — `url` 을 새 도메인으로
2. **`index.html`** — `<link rel="canonical">`, `og:url` 의 도메인
3. `npm run build` → sitemap, robots, 17개 페이지의 메타 태그가 함께 갱신됩니다

### 사이트 전역 설정

`src/site.config.js` 한 파일에 모여 있습니다.

| 키 | 쓰이는 곳 |
| --- | --- |
| `url` | canonical, og:url, sitemap, robots |
| `email` | 문의 페이지, 개인정보처리방침, 이용약관 |
| `repo` | 문의 페이지의 GitHub 이슈 링크, 소개 페이지 |
| `adsensePublisherId` | `index.html` 광고 스크립트 및 `public/ads.txt` 와 일치해야 함 |
| `policyUpdatedAt` | 정책 문서 최종 수정일 |
| `otherSites` | 소개 페이지의 «만든 사람» 항목 |

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
