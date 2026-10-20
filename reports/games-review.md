# 웹게임 추가 점검

확인일: 2026-10-20 (한국 시간)

게임 제작자·공식 운영 페이지를 우선으로 선정했습니다. 복제 게임 포털, ROM 다운로드, 도박, 토큰 보상 게임은 추가하지 않았습니다. 신규 후보 25개 중 인증서가 만료된 Hextris와 DNS가 해석되지 않은 Duomoji를 제외해 23개를 편집 목록에 준비했습니다. 기존 Sandspiel은 중복 추가하지 않습니다.

## 선정한 게임

| 게임 | 종류 | 공식 주소 |
| --- | --- | --- |
| HexGL | 미래형 레이싱 | https://hexgl.bkcore.com/play/ |
| A Dark Room | 텍스트 어드벤처 | https://adarkroom.doublespeakgames.com/ |
| Gridland | 생존·매치 퍼즐 | https://gridland.doublespeakgames.com/ |
| Cookie Clicker | 방치형 | https://orteil.dashnet.org/cookieclicker/ |
| Universal Paperclips | 방치형·경영 | https://www.decisionproblem.com/paperclips/index2.html |
| Lichess | 체스 | https://lichess.org/ |
| Jstris | 블록 퍼즐 | https://jstris.jezevec10.com/ |
| OpenGuessr | 위치 추리 | https://openguessr.com/ |
| Gartic Phone | 그림 파티 게임 | https://garticphone.com/ |
| Tetris | 공식 블록 퍼즐 | https://play.tetris.com/ |
| Little War Game | 실시간 전략 | https://littlewargame.com/ |
| PolyTrack | 레이싱 | https://www.kodub.com/apps/polytrack |
| Slow Roads | 드라이빙 | https://slowroads.io/ |
| Townscaper | 마을 건설 체험판 | https://oskarstalberg.com/Townscaper/ |
| Line Rider | 선 그리기·물리 | https://www.linerider.com/ |
| HaxBall | 온라인 축구 | https://www.haxball.com/play |
| Bonk.io | 물리 대전 | https://bonk.io/ |
| Quento | 암산 퍼즐 | https://quento.com/game/ |
| QWOP | 물리 달리기 | https://www.foddy.net/legacy/Athletics.html |
| Entanglement | 경로 퍼즐 | https://entanglement.gopherwoodstudios.com/ |
| 0h h1 | 논리 퍼즐 | https://0hh1.com/ |
| 0h n0 | 논리 퍼즐 | https://0hn0.com/ |
| ZType | 타이핑 슈팅 | https://zty.pe/ |

## 검증 범위

- HTTPS GET 요청, 리디렉션과 최종 페이지 제목, 공식 사이트의 소개를 확인했습니다.
- 17개는 HTTP 응답이 정상이며, 6개는 자동 요청에 봇 차단을 반환했습니다. 이 6개(Cookie Clicker, Lichess, Jstris, OpenGuessr, Gartic Phone, Slow Roads)는 모두 브라우저에서 게임 화면 또는 시작 로비가 정상 표시되는 것을 별도로 확인했습니다. HTTP 차단 상태는 기록에 그대로 남겼습니다.
- 게임의 첫 화면과 조작 안내 확인을 기준으로 삼습니다. 모든 레벨·멀티플레이 서버·모든 모바일 기기의 동작을 검증했다는 의미는 아닙니다.
- 사이트 로고 20개를 공식 페이지에서 얻어 최대 64px WebP로 변환했습니다. 사용할 수 있는 공식 아이콘을 얻지 못한 게임은 문자 표식을 유지합니다.
- 로그인, 결제, 다운로드 설치, 공개 대전 참여를 요구하지 않았습니다.

개별 상태·아이콘 출처·브라우저 확인 증거는 `games-audit.json`에 보관합니다. 앱에 넣을 항목은 `games-additions.json`에 별도로 정리했습니다.

## 제외한 후보와 이유

| 후보 | 결과 |
| --- | --- |
| Hextris (`hextris.io`) | HTTPS 인증서 만료. 공식 GitHub 주소도 같은 인증서 오류에 도달하여 제외 |
| Duomoji (`duomoji.com`) | DNS 조회 실패 |
| 구 Freeciv Web 주소 (`www.freecivweb.org`) | 현재 페이지가 Indoslot303 도박 홍보로 바뀌어 제외 |
| Sandspiel | 이미 목록에 있어 신규 항목으로 중복 추가하지 않음 |

## 제작자·운영 주체 확인에 사용한 자료

- [doublespeak games](https://doublespeakgames.com/) — A Dark Room, Gridland 제작자와 공식 게임 링크
- [HexGL 제작자 소개](https://hexgl.bkcore.com/) — 제작자, 게임 설명 및 실행 링크
- [Cookie Clicker 공식 안내](https://www.cookieclicker.com/) — 공식 무료 웹 버전 링크
- [QWOP 제작자 글](https://www.foddy.net/blog/2010/10/qwop/) — HTML5 전환 및 공식 실행 링크
- [Quento 공식 소개](https://quento.com/) — 숫자·기호를 연결하는 규칙과 웹 버전
- [HaxBall 공식 소개](https://www.haxball.com/) — 물리 기반 멀티플레이 축구와 실행 링크
- [Bonk.io 공식 소개](https://bonk.io/) — 이동·무게 조절, 물리 대전, HTML5 버전 설명
- 그 외 표에 명시한 게임 자체의 공식 첫 화면과 규칙 안내
