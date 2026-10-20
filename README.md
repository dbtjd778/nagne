# 사이트 맛집

한국과 전세계의 웹사이트를 찾는 디렉터리. Next.js App Router + React, 정적 HTML 출력, 브라우저 안에서 동작하는 검색·필터·책갈피.

## 로컬 확인

Node.js 24 권장.

```bash
npm ci
npm run build
npm run preview
```

테스트 주소: http://127.0.0.1:5173

- `npm run dev`: Next 개발 서버, 같은 포트 사용
- `npm run build`: 홈·모든 카테고리·가이드·안내 페이지를 `out/`에 생성
- `npm test`: 검색 조합, 저장 데이터 복구, 데이터 무결성, 정적 HTML·메타데이터·아이콘 검증. 빌드와 테스트에 같은 SITE_ENV/CONTEXT 사용
- `npm run check-links`: 전체 외부 링크 검사, `reports/catalogue-audit.json` 출력
- `npm run check-links -- --icons`: 공식 페이지의 아이콘 후보도 수집. 새 SVG는 배포 전에 반드시 안전한 래스터 이미지로 변환

검사 결과는 자동 접속 당시의 응답이다. 403·429·인증/봇 제한은 폐쇄와 구분하며, 결제·로그인·업로드 등 전체 기능을 보증하지 않는다. 검사는 데이터에서 사이트를 자동 삭제하지 않는다.

## 운영 및 배포

운영 도메인: **https://vsites.co.kr**. 2026-10-20 GitHub main 푸시와 Netlify 운영 배포를 완료했다. AdSense는 사이트 추가 및 ads.txt 소유 확인까지 준비했으며 심사 신청과 실제 광고 활성화는 진행하지 않았다. 실제 배포 검증은 `reports/deployment-validation.json`에 기록했다.

기본 빌드는 `noindex, nofollow` 메타와 HTTP 헤더를 포함한다. canonical은 `https://vsites.co.kr`을 사용한다. Netlify production 빌드(`CONTEXT=production`)만 검색 허용 설정을 생성한다. 별도 호스트의 production 빌드에는 `SITE_ENV=production npm run build`를 사용한다. 빌드 명령 자체로 배포되지는 않는다.

Netlify 설정은 `out/` 정적 출력 기준이다. 기존 SPA catch-all은 제거했다. GitHub main 변경 후 Netlify 빌드 결과를 확인한다. apex 도메인을 기본 주소로 사용하며 기존 netlify.app 주소와 www 주소를 301 리디렉션한다. HTTPS, robots, sitemap, ads.txt와 실제 HTML을 배포 후 확인한다. `.netlify/`와 환경 파일은 커밋하지 않는다.

## 구현

- `src/app/`: 페이지와 경로별 metadata, sitemap, robots, 404
- `src/components/Directory.jsx`: 지역·분류·검색·정렬·저장·랜덤 탐방, 24개씩 추가 표시
- `src/data/sites.js`: 큐레이션 목록·로컬 아이콘 경로
- `/c/gl-games/`: 웹게임 31개. 상단 메뉴와 홈 필터에서 접근하며 카드에 장르 표시. 신규 23개 접속 기록은 `reports/games-audit.json`, 브라우저 확인은 `reports/games-browser-validation.json`
- `src/data/guides.js`: 활용 기준과 사용 맥락을 설명하는 편집 글
- `src/lib/directory.js`: 검색 및 저장 데이터 검증
- `src/components/ScrollEffects.jsx`: 단일 passive 스크롤 이벤트, rAF, 화면 진입 효과, 모션 감소 설정
- `src/components/AdSlot.jsx`: 크기를 확보한 광고 영역. 광고 네트워크 요청 없음
- `src/site.config.js`: production 주소·운영자 지정 문의 주소·보존된 게시자 ID
- `scripts/postbuild.mjs`: 환경별 검색·보안·캐시 헤더 생성

서버가 필요한 기능을 사용하지 않아 각 페이지를 CDN에서 정적 파일로 제공할 수 있다. 폰트와 사이트 아이콘을 로컬에서 제공하고, 아이콘은 크기를 고정해 레이아웃 이동을 줄인다. 사이트 카드의 외부 링크는 새 탭으로 열리고 `noopener noreferrer`가 적용된다.

## 콘텐츠 및 광고

검색 키워드는 `reports/seo-research.md`에 정성적인 검색 의도별로 정리했다. 월간 검색량·순위·AdSense 승인을 보장하지 않는다. 요청한 홈 제목은 **사이트 맛집 - 유용하고 재미있는 웹사이트 모음집**이며 검색엔진이 최종 표시를 결정한다.

광고 영역은 홈 목록 12개 뒤, 홈 하단, 카테고리 목록 중간, 가이드 본문 중간에 있다. 게시자 ID 및 ads.txt는 원본 것을 보존했지만 광고 스크립트를 불러오지 않는다. 광고 활성화와 동의 절차는 `ADSENSE.md` 참고. 문의 이메일은 운영자가 지정한 `dbtjd779@gmail.com`이다. 테스트 이메일을 대신 발송하지 않았다.

## 폰트

Pretendard에서 사용 글자만 추출한 NagneWeb을 로컬 제공한다. OFL 라이선스는 `public/fonts/OFL.txt`. 글자가 추가될 때 선택적으로 `scripts/subset-font.py`를 실행하며, 포함되지 않은 문자는 시스템 글꼴로 대체된다. 이 작업은 fonttools와 brotli가 설치된 별도 Python 환경에서 수행한다. 일반 빌드에는 Python 폰트 도구가 필요하지 않다.
