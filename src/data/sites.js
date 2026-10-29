// Curated official destinations. Link checks and sources are retained in reports/.
import extraSites from './extra-sites.json' with { type: 'json' }
import countryRecords from './site-countries.json' with { type: 'json' }
export const regions = [
  {
    "id": "kr",
    "label": "한국 사이트",
    "short": "Korea",
    "lead": "한국어로 배우고 만들고, 생활의 새로운 장소를 발견하는 사이트입니다.",
    "categories": [
      {
        "id": "kr-test",
        "category": "테스트 · 놀이",
        "tagline": "가볍게, 나를 알아가는 시간",
        "blurb": "취향과 성향을 소재로 한 짧은 테스트와 언어 놀이를 모았습니다. 전문적인 심리 진단이 필요한 상황과 구분해 가벼운 재미로 즐겨 보세요.",
        "sites": [
          {
            "name": "방구석연구소",
            "url": "banggooso.com",
            "desc": "짧은 질문에 답하며 취향과 성향을 가볍게 살펴보는 콘텐츠를 제공합니다. 결과를 친구와 비교하며 즐겨 보세요.",
            "id": "77fafd92d48108",
            "tags": [
              "테스트 · 놀이",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/77fafd92d48108.webp"
          },
          {
            "name": "푸망",
            "url": "poomang.com",
            "desc": "성격과 취향을 주제로 한 여러 테스트를 모았습니다. 심리 진단 대신 가벼운 놀이로 즐기는 공간입니다.",
            "id": "396814c7c1edd2",
            "tags": [
              "테스트 · 놀이",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/396814c7c1edd2.webp"
          },
          {
            "name": "스모어",
            "url": "smore.im",
            "desc": "설문과 퀴즈, 인터랙티브한 테스트를 만드는 도구입니다. 질문을 구성하고 응답을 수집할 수 있습니다.",
            "id": "4f0f5170ec1749",
            "tags": [
              "테스트 · 놀이",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4f0f5170ec1749.webp"
          },
          {
            "name": "끄투코리아",
            "url": "kkutu.co.kr",
            "desc": "끝말잇기 등 단어를 활용한 온라인 게임을 제공합니다. 방과 게임 방식을 선택해 참여할 수 있습니다.",
            "id": "6665b3df539cfd",
            "tags": [
              "테스트 · 놀이",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6665b3df539cfd.webp"
          },
          {
            "name": "케이테스트",
            "url": "ktestone.com",
            "desc": "취향과 일상을 소재로 한 짧은 성향 테스트를 제공합니다. 결과의 표현을 가벼운 재미로 읽어 보세요.",
            "id": "098fd69bc7ed03",
            "tags": [
              "테스트 · 놀이",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/098fd69bc7ed03.webp"
          },
          {
            "name": "내 트리를 꾸며줘!",
            "url": "colormytree.me",
            "desc": "온라인 나무에 메시지를 남기고 주고받는 공간입니다. 운영 기간과 메시지 공개 방식을 확인해 이용할 수 있습니다.",
            "id": "73bf896e304a2e",
            "tags": [
              "테스트 · 놀이",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/73bf896e304a2e.webp"
          }
        ]
      },
      {
        "id": "kr-text",
        "category": "타자 · 습관",
        "tagline": "작은 반복이 만드는 하루",
        "blurb": "키보드를 두드리며 타자를 연습하고 하루의 루틴을 정리하는 도구입니다. 잠깐의 빈 시간을 원하는 습관으로 채워 보세요.",
        "sites": [
          {
            "name": "MapTyping",
            "url": "maptyping.com",
            "desc": "지도를 배경으로 지명과 문장을 입력하며 타자를 연습합니다. 키보드를 두드리며 새로운 장소를 발견해 보세요.",
            "id": "d1f1c8c207c731",
            "tags": [
              "타자 · 습관",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d1f1c8c207c731.webp"
          },
          {
            "name": "Typing.works",
            "url": "typing.works",
            "desc": "간결한 화면에서 문장을 입력하며 타자를 연습합니다. 입력 정확도와 속도를 확인하며 차분히 이어갈 수 있습니다.",
            "id": "8610c8bf7c7536",
            "tags": [
              "타자 · 습관",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8610c8bf7c7536.webp"
          },
          {
            "name": "마이루틴",
            "url": "myroutine.today",
            "desc": "반복되는 할 일과 습관을 기록하는 서비스를 소개합니다. 하루의 루틴을 정리하고 진행 상황을 확인할 수 있습니다.",
            "id": "ca163f0d0386be",
            "tags": [
              "타자 · 습관",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ca163f0d0386be.webp"
          },
          {
            "name": "루티너리",
            "url": "routinery.app",
            "desc": "순서와 시간을 정해 일상의 루틴을 관리하는 앱을 소개합니다. 원하는 습관의 흐름을 구성할 수 있습니다.",
            "id": "7f1f50c51563d3",
            "tags": [
              "타자 · 습관",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7f1f50c51563d3.webp"
          }
        ]
      },
      {
        "id": "kr-utility",
        "category": "한국어 도구",
        "tagline": "일상의 작은 일을 가볍게",
        "blurb": "한국어 문서와 이미지, 설문을 다루는 도구를 모았습니다. 필요한 작업부터 골라 각 서비스의 파일 처리 방식과 이용 조건을 확인하세요.",
        "sites": [
          {
            "name": "미리캔버스",
            "url": "miricanvas.com",
            "desc": "템플릿을 편집해 이미지와 발표 자료를 만드는 도구입니다. 디자인 요소별 이용 조건을 확인해 활용하세요.",
            "id": "36c9ab1c4cd4a6",
            "tags": [
              "한국어 도구",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/36c9ab1c4cd4a6.webp"
          },
          {
            "name": "눈누",
            "url": "noonnu.cc",
            "desc": "한글 폰트의 모양과 이용허락 정보를 비교합니다. 사용 전 원저작자의 최신 라이선스를 확인할 수 있습니다.",
            "id": "432c80d6f76ce5",
            "tags": [
              "한국어 도구",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/432c80d6f76ce5.webp"
          },
          {
            "name": "사람인 글자수 세기",
            "url": "saramin.co.kr/zf_user/tools/character-counter",
            "desc": "작성한 글의 글자 수와 맞춤법을 확인하는 도구입니다. 분량이 정해진 지원서나 소개문을 다듬을 때 유용합니다.",
            "id": "ad99ede4982727",
            "tags": [
              "한국어 도구",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ad99ede4982727.webp"
          },
          {
            "name": "파파고",
            "url": "papago.naver.com",
            "desc": "여러 언어의 문장과 문서를 번역하는 도구입니다. 번역 결과를 원문과 비교하며 표현을 확인할 수 있습니다.",
            "id": "1f580b03b7fa3b",
            "tags": [
              "한국어 도구",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1f580b03b7fa3b.webp"
          },
          {
            "name": "클로바노트",
            "url": "clovanote.naver.com",
            "desc": "녹음한 음성을 텍스트로 정리하는 서비스입니다. 기록 내용을 확인하고 필요한 부분을 찾아볼 수 있습니다.",
            "id": "62afc238a3d520",
            "tags": [
              "한국어 도구",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/62afc238a3d520.webp"
          },
          {
            "name": "네이버 폼",
            "url": "form.naver.com",
            "desc": "설문과 신청서를 만들고 응답을 모으는 도구입니다. 질문 구성과 응답 결과를 한곳에서 관리할 수 있습니다.",
            "id": "74d3273f22d5bd",
            "tags": [
              "한국어 도구",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/74d3273f22d5bd.webp"
          },
          {
            "name": "스티비",
            "url": "stibee.com",
            "desc": "이메일 뉴스레터를 제작하고 발송하는 도구입니다. 템플릿과 구독자 관리 기능을 살펴볼 수 있습니다.",
            "id": "db7f01170302fb",
            "tags": [
              "한국어 도구",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/db7f01170302fb.webp"
          },
          {
            "name": "망고보드",
            "url": "mangoboard.net",
            "desc": "템플릿으로 이미지와 발표 자료를 만드는 디자인 도구입니다. 소스별 이용 조건을 확인해 활용하세요.",
            "id": "478c39777a77f0",
            "tags": [
              "한국어 도구",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/478c39777a77f0.webp"
          },
          {
            "name": "비즈하우스",
            "url": "bizhows.com",
            "desc": "인쇄물과 디자인 템플릿을 살펴보고 제작을 주문하는 서비스입니다. 용도별 규격과 제작 조건을 확인할 수 있습니다.",
            "id": "7c77d082ed709a",
            "tags": [
              "한국어 도구",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7c77d082ed709a.webp"
          }
        ]
      },
      {
        "id": "kr-builder",
        "category": "개발 · AI",
        "tagline": "배우고 직접 만드는 즐거움",
        "blurb": "한국어 강좌와 기술 글, 제작 도구를 함께 모았습니다. 기초 개념을 익히거나 작은 프로젝트를 시작하는 데 필요한 길을 찾아보세요.",
        "sites": [
          {
            "name": "뤼튼",
            "url": "wrtn.ai",
            "desc": "글쓰기와 대화 등 AI 서비스를 한국어로 이용할 수 있습니다. 기능별 이용 조건을 확인하며 활용해 보세요.",
            "id": "26888ec418dda0",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/26888ec418dda0.webp"
          },
          {
            "name": "타입캐스트",
            "url": "typecast.ai",
            "desc": "대본을 음성으로 바꾸고 콘텐츠를 제작하는 도구입니다. 목소리와 표현을 비교하며 음성을 만들 수 있습니다.",
            "id": "024665194369f5",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/024665194369f5.webp"
          },
          {
            "name": "AI Studios",
            "url": "aistudios.com",
            "desc": "AI 아바타와 음성으로 영상을 만드는 서비스를 제공합니다. 제작 과정과 기능별 조건을 살펴볼 수 있습니다.",
            "id": "dba5c9381772a4",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/dba5c9381772a4.webp"
          },
          {
            "name": "가비아",
            "url": "domain.gabia.com",
            "desc": "도메인의 등록 가능 여부와 이용 요금을 확인합니다. 웹사이트 이름을 정할 때 후보 주소를 비교해 보세요.",
            "id": "3e04f4dd7531d6",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3e04f4dd7531d6.webp"
          },
          {
            "name": "프로그래머스",
            "url": "programmers.co.kr",
            "desc": "코딩 문제와 학습 과정, 채용 정보를 제공합니다. 기술과 수준에 맞는 문제를 골라 풀 수 있습니다.",
            "id": "2be6e577aa0eb3",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2be6e577aa0eb3.webp"
          },
          {
            "name": "생활코딩",
            "url": "opentutorials.org",
            "desc": "프로그래밍과 웹의 기초를 설명하는 공개 강의를 제공합니다. 처음 배우는 개념을 예제와 함께 익혀 보세요.",
            "id": "f1e70b8f154caa",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "인프런",
            "url": "inflearn.com",
            "desc": "개발과 디자인, 업무 기술에 관한 온라인 강좌를 제공합니다. 커리큘럼과 수강 후기를 살펴보고 선택할 수 있습니다.",
            "id": "5a8705568fefc1",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5a8705568fefc1.webp"
          },
          {
            "name": "우피",
            "url": "oopy.io",
            "desc": "노션 페이지를 웹사이트로 운영하는 서비스를 제공합니다. 도메인과 디자인 등 제공 기능을 확인할 수 있습니다.",
            "id": "47d99a383f1c79",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/47d99a383f1c79.webp"
          },
          {
            "name": "왈라",
            "url": "walla.my",
            "desc": "설문과 신청서를 만들고 응답을 관리하는 도구입니다. 질문의 흐름과 공유 방식을 구성할 수 있습니다.",
            "id": "f6c5d67f8537fe",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f6c5d67f8537fe.webp"
          },
          {
            "name": "웨이브온",
            "url": "waveon.io",
            "desc": "웹페이지와 마케팅 콘텐츠 제작 도구를 제공합니다. 원하는 결과물에 맞는 기능과 요금제를 살펴보세요.",
            "id": "b4d58628eb2375",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b4d58628eb2375.webp"
          },
          {
            "name": "구름",
            "url": "goorm.io",
            "desc": "온라인 개발과 교육에 필요한 서비스를 제공합니다. 코딩 학습과 개발 환경을 목적에 맞게 살펴보세요.",
            "id": "addd5327c76bad",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/addd5327c76bad.webp"
          },
          {
            "name": "구름EDU",
            "url": "edu.goorm.io",
            "desc": "프로그래밍 강의와 실습 과정을 제공합니다. 브라우저에서 학습을 이어갈 수 있는 강좌를 찾아보세요.",
            "id": "8976dd6658002c",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8976dd6658002c.webp"
          },
          {
            "name": "엘리스",
            "url": "elice.io",
            "desc": "코딩과 디지털 역량 교육, 실습 환경을 제공합니다. 학습 과정과 서비스별 이용 조건을 확인할 수 있습니다.",
            "id": "83b1d5f23cce28",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/83b1d5f23cce28.webp"
          },
          {
            "name": "코드잇",
            "url": "codeit.kr",
            "desc": "프로그래밍과 데이터 분석 등 온라인 강의를 제공합니다. 주제별 커리큘럼과 수강 방식을 살펴보세요.",
            "id": "6b14e830cfb056",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6b14e830cfb056.webp"
          },
          {
            "name": "패스트캠퍼스",
            "url": "fastcampus.co.kr",
            "desc": "직무와 기술 분야의 교육 과정을 제공합니다. 강의 구성과 대상 수준을 비교해 볼 수 있습니다.",
            "id": "dae0079df80bc6",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/dae0079df80bc6.webp"
          },
          {
            "name": "노마드 코더",
            "url": "nomadcoders.co",
            "desc": "웹과 앱 개발을 프로젝트로 배우는 강좌를 제공합니다. 만들고 싶은 결과물에 맞는 과정을 찾아보세요.",
            "id": "416f2a65253851",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/416f2a65253851.webp"
          },
          {
            "name": "드림코딩",
            "url": "academy.dream-coding.com",
            "desc": "개발 기초와 실무 프로젝트 강좌를 제공합니다. 커리큘럼과 요구되는 사전 지식을 확인할 수 있습니다.",
            "id": "7fa6e2e61f313f",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7fa6e2e61f313f.webp"
          },
          {
            "name": "코딩애플",
            "url": "codingapple.com",
            "desc": "웹 개발과 프로그래밍 강좌를 제공합니다. 예제 프로젝트를 중심으로 배우는 과정을 살펴보세요.",
            "id": "0734ab0412ece2",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0734ab0412ece2.webp"
          },
          {
            "name": "위니브",
            "url": "weniv.co.kr",
            "desc": "개발 교육과 관련 콘텐츠, 서비스를 소개합니다. 학습 목적에 맞는 자료와 프로그램을 찾아볼 수 있습니다.",
            "id": "5c5bba3a2d736a",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5c5bba3a2d736a.webp"
          },
          {
            "name": "벨로그",
            "url": "velog.io",
            "desc": "개발자들이 작성한 기술 글과 학습 기록을 읽습니다. 작성 시점과 코드 환경을 확인하며 참고하세요.",
            "id": "d839c000dc8c46",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d839c000dc8c46.webp"
          },
          {
            "name": "데보션",
            "url": "devocean.sk.com",
            "desc": "기술 전문가의 개발 경험과 기술 소식을 공유합니다. 분야별 글과 교육 행사를 살펴볼 수 있습니다.",
            "id": "cd30ecfa776aa6",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cd30ecfa776aa6.webp"
          },
          {
            "name": "카카오 기술 블로그",
            "url": "tech.kakao.com",
            "desc": "카카오 개발 조직의 기술과 서비스 운영 경험을 읽습니다. 구현 과정과 문제 해결 사례를 찾아보세요.",
            "id": "6f625a6649040e",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6f625a6649040e.webp"
          },
          {
            "name": "네이버 D2",
            "url": "d2.naver.com",
            "desc": "네이버 개발자들의 기술 글과 발표 자료를 제공합니다. 웹과 서버, 데이터 관련 경험을 읽을 수 있습니다.",
            "id": "7f9c3cee4fed3a",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7f9c3cee4fed3a.webp"
          },
          {
            "name": "우아한형제들 기술블로그",
            "url": "techblog.woowahan.com",
            "desc": "서비스 개발과 운영, 조직의 기술 경험을 공유합니다. 실제 문제를 해결한 과정을 살펴보세요.",
            "id": "42e5df1c1060c7",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/42e5df1c1060c7.webp"
          },
          {
            "name": "토스 기술 블로그",
            "url": "toss.tech",
            "desc": "토스 팀의 개발과 기술, 제품 경험을 소개합니다. 구현 사례와 운영 과정의 생각을 읽을 수 있습니다.",
            "id": "b724c7012a8923",
            "tags": [
              "개발 · AI",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b724c7012a8923.webp"
          }
        ]
      },
      {
        "id": "kr-data",
        "category": "정보 · 데이터",
        "tagline": "궁금한 것을 근거로 살펴보기",
        "blurb": "공공 통계와 지도, 검색 흐름을 살펴보는 자료입니다. 숫자를 비교할 때는 지표의 정의와 조사 시점, 원출처를 함께 읽어 보세요.",
        "sites": [
          {
            "name": "네이버 데이터랩",
            "url": "datalab.naver.com",
            "desc": "네이버 검색어와 쇼핑 분야의 상대적 관심도 추이를 살펴봅니다. 기간과 조건을 맞춰 키워드를 비교할 수 있습니다.",
            "id": "3fc2ce3443c26c",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3fc2ce3443c26c.webp"
          },
          {
            "name": "KOSIS 국가통계포털",
            "url": "kosis.kr",
            "desc": "한국의 인구와 경제, 사회에 관한 공식 통계를 검색합니다. 통계표의 정의와 기준 시점을 확인하며 읽어 보세요.",
            "id": "0716dbca671836",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0716dbca671836.webp"
          },
          {
            "name": "공공데이터포털",
            "url": "data.go.kr",
            "desc": "공공기관이 제공하는 데이터와 API를 검색합니다. 자료별 갱신 주기와 이용 조건을 확인할 수 있습니다.",
            "id": "024e57fcf02105",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/024e57fcf02105.webp"
          },
          {
            "name": "서울 열린데이터광장",
            "url": "data.seoul.go.kr",
            "desc": "서울시의 공공데이터와 통계, API를 제공합니다. 지역과 생활 주제별 자료를 찾아볼 수 있습니다.",
            "id": "6136289cff81f2",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6136289cff81f2.webp"
          },
          {
            "name": "한국은행 경제통계시스템",
            "url": "ecos.bok.or.kr",
            "desc": "한국은행의 경제·금융 통계를 검색합니다. 지표의 정의와 기간을 확인하며 데이터를 비교할 수 있습니다.",
            "id": "961c785286f3b0",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/961c785286f3b0.webp"
          },
          {
            "name": "국가데이터처",
            "url": "kostat.go.kr",
            "desc": "국가 통계와 데이터 정책, 조사 정보를 제공합니다. 공식 통계의 발표와 연구 자료를 살펴볼 수 있습니다.",
            "id": "5b5a4a1cd95b01",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5b5a4a1cd95b01.webp"
          },
          {
            "name": "국가지표체계",
            "url": "index.go.kr",
            "desc": "사회와 경제의 주요 국가 지표를 정리해 제공합니다. 지표별 설명과 추이를 함께 읽을 수 있습니다.",
            "id": "7baf6f1b27e2fe",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7baf6f1b27e2fe.webp"
          },
          {
            "name": "SGIS 통계지리정보서비스",
            "url": "sgis.kostat.go.kr",
            "desc": "인구와 지역 통계를 지도에서 살펴봅니다. 공간에 따라 달라지는 생활 환경을 비교해 보세요.",
            "id": "c7a585f382eaa5",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c7a585f382eaa5.webp"
          },
          {
            "name": "국토정보플랫폼",
            "url": "map.ngii.go.kr",
            "desc": "지도와 항공사진 등 국토 공간정보를 제공합니다. 자료별 제작 시점과 이용 안내를 확인할 수 있습니다.",
            "id": "a6a8c589e348bc",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a6a8c589e348bc.webp"
          },
          {
            "name": "브이월드",
            "url": "vworld.kr",
            "desc": "국가 공간정보를 지도와 입체 화면에서 탐색합니다. 지형과 건물, 관련 데이터 서비스를 살펴보세요.",
            "id": "60e42cb0356b23",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/60e42cb0356b23.webp"
          },
          {
            "name": "기상자료개방포털",
            "url": "data.kma.go.kr",
            "desc": "기상 관측과 기후 통계를 검색합니다. 관측소와 기간별 데이터를 비교할 수 있습니다.",
            "id": "90caadcd27fbb5",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/90caadcd27fbb5.webp"
          },
          {
            "name": "문화 빅데이터 플랫폼",
            "url": "bigdata-culture.kr",
            "desc": "문화와 관광 분야의 데이터와 분석 콘텐츠를 제공합니다. 데이터별 제공 기관과 이용 조건을 확인하세요.",
            "id": "1bbb0026c4aa7e",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "빅카인즈",
            "url": "www.bigkinds.or.kr",
            "desc": "언론 기사와 뉴스의 흐름을 검색·분석합니다. 시기별 키워드와 관련 보도를 함께 살펴볼 수 있습니다.",
            "id": "9326030f86fbfa",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9326030f86fbfa.webp"
          },
          {
            "name": "KIPRIS",
            "url": "kipris.or.kr",
            "desc": "특허와 상표 등 산업재산권 정보를 검색합니다. 공개된 출원 정보와 문서를 찾아볼 수 있습니다.",
            "id": "e8fe9736ba67cc",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e8fe9736ba67cc.webp"
          },
          {
            "name": "DART 전자공시시스템",
            "url": "dart.fss.or.kr",
            "desc": "기업이 제출한 공시와 보고서를 검색합니다. 회사와 제출일, 보고서 종류를 확인하며 읽을 수 있습니다.",
            "id": "21bad217f01963",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/21bad217f01963.webp"
          },
          {
            "name": "한국거래소 정보데이터시스템",
            "url": "data.krx.co.kr",
            "desc": "국내 증권시장의 공개 통계와 데이터를 제공합니다. 지표의 기준과 시점을 확인해 참고하세요.",
            "id": "5f46126360cae0",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "국가기록원",
            "url": "archives.go.kr",
            "desc": "국가기록과 역사 자료를 검색하고 주제별 콘텐츠를 읽습니다. 기록의 생산 기관과 연도를 확인할 수 있습니다.",
            "id": "baf18abfe92eb7",
            "tags": [
              "정보 · 데이터",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/baf18abfe92eb7.webp"
          }
        ]
      },
      {
        "id": "kr-learn",
        "category": "배움 · 한국어",
        "tagline": "알아가는 즐거움",
        "blurb": "강의와 사전, 학술 자료를 한곳에 모았습니다. 짧은 교양 강의부터 대학 공개 수업까지 관심과 학습 단계에 맞춰 골라 보세요.",
        "sites": [
          {
            "name": "EBS",
            "url": "ebs.co.kr",
            "desc": "방송 강의와 교양 콘텐츠를 주제별로 살펴보는 교육 포털입니다. 어린이부터 성인까지 학습 대상을 선택할 수 있습니다.",
            "id": "1aff11a5499dc2",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "EBSi",
            "url": "ebsi.co.kr",
            "desc": "고등학교 교과 강의와 수능 학습 자료를 제공합니다. 과목별 강좌와 기출문제를 함께 찾아볼 수 있습니다.",
            "id": "c3b8e96e5c2338",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "K-MOOC",
            "url": "kmooc.kr",
            "desc": "국내 대학과 기관의 온라인 공개 강좌를 모았습니다. 분야와 운영 기간을 확인해 수강할 수 있습니다.",
            "id": "b2b79449e88e81",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "KOCW",
            "url": "kocw.net",
            "desc": "대학 강의와 교육 자료를 공개하는 지식 나눔 서비스입니다. 전공명이나 강의 주제로 검색해 보세요.",
            "id": "a82a5a305b6bc7",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "RISS",
            "url": "www.riss.kr",
            "desc": "학위논문과 학술지, 대학 소장 자료를 검색합니다. 원문 이용 범위는 자료와 소속 기관에 따라 다릅니다.",
            "id": "fdfb9a7ba34c72",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/fdfb9a7ba34c72.webp"
          },
          {
            "name": "DBpia",
            "url": "dbpia.co.kr",
            "desc": "국내 학술논문을 분야별로 검색하는 서비스입니다. 초록과 참고문헌을 살펴보고 원문 이용 조건을 확인할 수 있습니다.",
            "id": "1f069176cb77da",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1f069176cb77da.webp"
          },
          {
            "name": "KISS",
            "url": "kiss.kstudy.com",
            "desc": "국내 학술지의 논문과 간행물을 검색합니다. 관심 연구 주제의 선행 자료를 찾을 때 유용합니다.",
            "id": "f4c433037216ad",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f4c433037216ad.webp"
          },
          {
            "name": "국립중앙도서관",
            "url": "nl.go.kr",
            "desc": "국가 대표 도서관의 소장 자료와 디지털 컬렉션을 찾아봅니다. 자료 이용과 방문 안내도 확인할 수 있습니다.",
            "id": "a82ba906e08f44",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a82ba906e08f44.webp"
          },
          {
            "name": "국회도서관",
            "url": "nanet.go.kr",
            "desc": "정책과 학술 연구에 필요한 도서·논문·의회 정보를 검색합니다. 자료별 공개 범위를 확인해 이용하세요.",
            "id": "e3d561932e6e97",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e3d561932e6e97.webp"
          },
          {
            "name": "국립국어원",
            "url": "korean.go.kr",
            "desc": "한국어 어문 규범과 언어 자료, 온라인 질의응답을 살펴봅니다. 글을 쓸 때 맞춤법의 근거를 찾아보기 좋습니다.",
            "id": "1bbf7484dd3239",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1bbf7484dd3239.webp"
          },
          {
            "name": "표준국어대사전",
            "url": "stdict.korean.go.kr",
            "desc": "표준어의 뜻과 발음, 용례를 검색하는 국립국어원 사전입니다. 비슷한 단어의 정확한 쓰임을 비교해 보세요.",
            "id": "470e86e8e1230c",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "우리말샘",
            "url": "opendict.korean.go.kr",
            "desc": "새말과 전문 용어, 지역어까지 함께 다루는 개방형 한국어 사전입니다. 단어의 다양한 사용 맥락을 찾아볼 수 있습니다.",
            "id": "31f8df655e66c6",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "국립국어원 한국어기초사전",
            "url": "krdict.korean.go.kr",
            "desc": "한국어 학습자를 위한 단어 설명과 예문을 제공합니다. 발음과 문법 정보를 함께 볼 수 있습니다.",
            "id": "e1cf2478c8bcdd",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e1cf2478c8bcdd.webp"
          },
          {
            "name": "온라인 세종학당",
            "url": "www.iksi.or.kr",
            "desc": "한국어를 배우는 온라인 강좌와 학습 자료를 제공합니다. 수준과 수강 방식에 맞는 과정을 찾아볼 수 있습니다.",
            "id": "34ec2f5670bc13",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/34ec2f5670bc13.webp"
          },
          {
            "name": "네이버 사전",
            "url": "dict.naver.com",
            "desc": "한국어와 여러 외국어의 단어 뜻, 발음, 예문을 검색합니다. 읽다가 만난 표현을 바로 확인하기 좋습니다.",
            "id": "216a88b987ced1",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/216a88b987ced1.webp"
          },
          {
            "name": "네이버 지식백과",
            "url": "terms.naver.com",
            "desc": "출판사와 전문 기관이 제공하는 백과사전 자료를 검색합니다. 문서별 출처를 확인하며 읽을 수 있습니다.",
            "id": "42d727b9e6b871",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/42d727b9e6b871.webp"
          },
          {
            "name": "에듀넷",
            "url": "edunet.net",
            "desc": "학교 수업과 학습에 필요한 교육 자료를 제공합니다. 교과와 학년에 맞는 콘텐츠를 찾아볼 수 있습니다.",
            "id": "879e233e50586e",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/879e233e50586e.webp"
          },
          {
            "name": "GSEEK",
            "url": "gseek.kr",
            "desc": "경기도의 온라인 평생학습 강좌를 제공합니다. 생활 지식과 취미, 직무 학습을 주제별로 탐색할 수 있습니다.",
            "id": "3abf367bb9fdf7",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "서울시평생학습포털",
            "url": "sll.seoul.go.kr",
            "desc": "서울시의 온라인 강좌와 학습 프로그램을 안내합니다. 관심 주제와 참여 방식을 골라 이용할 수 있습니다.",
            "id": "4688a6d87a57c2",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4688a6d87a57c2.webp"
          },
          {
            "name": "한국사데이터베이스",
            "url": "db.history.go.kr",
            "desc": "한국사 사료와 연구 자료를 검색하고 읽을 수 있습니다. 원문과 해제를 함께 살펴보며 역사적 맥락을 이해해 보세요.",
            "id": "34fe18098d0dee",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/34fe18098d0dee.webp"
          },
          {
            "name": "한국민족문화대백과사전",
            "url": "encykorea.aks.ac.kr",
            "desc": "한국의 역사·문화·인물에 관한 전문 백과사전입니다. 항목별 집필 정보와 참고문헌을 확인할 수 있습니다.",
            "id": "b31d2dd93a8d87",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b31d2dd93a8d87.webp"
          },
          {
            "name": "한국고전종합DB",
            "url": "db.itkc.or.kr",
            "desc": "한국 고전의 원문과 번역문을 검색합니다. 문집과 역사 문헌을 함께 읽으며 옛 기록을 탐구해 보세요.",
            "id": "a1603606167d9f",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a1603606167d9f.webp"
          },
          {
            "name": "ScienceAll",
            "url": "scienceall.com",
            "desc": "과학 실험과 지식, 교육 콘텐츠를 모은 과학문화 포털입니다. 일상에서 생긴 과학 질문을 넓혀 보기 좋습니다.",
            "id": "0a6fa58653f416",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0a6fa58653f416.webp"
          },
          {
            "name": "사이언스타임즈",
            "url": "sciencetimes.co.kr",
            "desc": "과학과 기술의 연구 소식 및 해설을 읽습니다. 새로운 발견을 교양 기사로 접할 수 있습니다.",
            "id": "805bc8311775a5",
            "tags": [
              "배움 · 한국어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/805bc8311775a5.webp"
          }
        ]
      },
      {
        "id": "kr-culture",
        "category": "문화 · 읽을거리",
        "tagline": "오늘의 문화 산책",
        "blurb": "박물관 소장품과 전시, 책과 공연 정보를 함께 묶었습니다. 온라인에서 작품을 발견하고 실제 방문이나 다음 독서로 이어가 보세요.",
        "sites": [
          {
            "name": "국립중앙박물관",
            "url": "museum.go.kr",
            "desc": "전시와 소장품, 교육 프로그램을 안내하는 국립 박물관입니다. 문화유산의 사진과 해설을 온라인에서도 볼 수 있습니다.",
            "id": "9c88e091750383",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9c88e091750383.webp"
          },
          {
            "name": "국립현대미술관",
            "url": "mmca.go.kr",
            "desc": "현대미술 전시와 작가, 소장품 정보를 제공합니다. 전시 일정과 온라인 콘텐츠를 함께 살펴보세요.",
            "id": "2c17ed8a5a46f9",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2c17ed8a5a46f9.webp"
          },
          {
            "name": "서울시립미술관",
            "url": "sema.seoul.go.kr",
            "desc": "서울시립미술관의 전시와 소장품, 프로그램을 소개합니다. 여러 분관에서 열리는 전시를 한곳에서 확인할 수 있습니다.",
            "id": "374797a90613b4",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/374797a90613b4.webp"
          },
          {
            "name": "국립한글박물관",
            "url": "hangeul.go.kr",
            "desc": "한글의 역사와 문화를 전시 및 디지털 자료로 소개합니다. 글자와 기록에 관한 교육 콘텐츠도 살펴보세요.",
            "id": "457397fa70bfd4",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/457397fa70bfd4.webp"
          },
          {
            "name": "국가유산청",
            "url": "khs.go.kr",
            "desc": "국가유산 정책과 보존 소식, 방문 정보를 제공합니다. 문화유산에 관한 공식 자료를 확인할 수 있습니다.",
            "id": "a83f39f9153e1f",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a83f39f9153e1f.webp"
          },
          {
            "name": "국가유산포털",
            "url": "heritage.go.kr",
            "desc": "지역과 종류별로 국가유산을 찾아봅니다. 유산의 위치와 설명을 읽고 답사 계획에 활용할 수 있습니다.",
            "id": "06c18d351a90ec",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/06c18d351a90ec.webp"
          },
          {
            "name": "문화포털",
            "url": "culture.go.kr",
            "desc": "공연·전시·문화행사와 문화 자료를 모아 제공합니다. 지역과 일정에 맞는 문화생활을 찾아보세요.",
            "id": "8c1e5a6d7008f5",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "예술의전당",
            "url": "sac.or.kr",
            "desc": "공연과 전시 일정을 확인하고 시설 정보를 살펴봅니다. 관심 장르의 프로그램을 미리 알아보기 좋습니다.",
            "id": "f7b46b1e9525d9",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f7b46b1e9525d9.webp"
          },
          {
            "name": "세종문화회관",
            "url": "sejongpac.or.kr",
            "desc": "공연과 전시, 예술 교육 프로그램을 안내합니다. 서울 도심의 문화 일정을 계획할 때 활용해 보세요.",
            "id": "026a396eed24a7",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/026a396eed24a7.webp"
          },
          {
            "name": "국립극장",
            "url": "ntok.go.kr",
            "desc": "국립 예술단체 공연과 전통예술 프로그램을 소개합니다. 공연 해설과 관람 안내를 함께 볼 수 있습니다.",
            "id": "38e6bd877f90a7",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "국립국악원",
            "url": "gugak.go.kr",
            "desc": "국악 공연과 교육, 전통음악 자료를 제공합니다. 악기와 음악의 배경을 알아가는 데 도움이 됩니다.",
            "id": "520e7c699d7a53",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/520e7c699d7a53.webp"
          },
          {
            "name": "한국영상자료원",
            "url": "koreafilm.or.kr",
            "desc": "한국 영화의 보존·상영·전시 정보를 안내합니다. 영화 자료와 기획 프로그램을 찾아볼 수 있습니다.",
            "id": "476f7f8f6b110d",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "KMDb 한국영화데이터베이스",
            "url": "kmdb.or.kr",
            "desc": "한국 영화의 작품과 인물, 관련 자료를 검색합니다. 오래된 작품의 제작 정보와 기록을 찾아보기 좋습니다.",
            "id": "3c42da857bde6f",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3c42da857bde6f.webp"
          },
          {
            "name": "영화진흥위원회",
            "url": "kofic.or.kr",
            "desc": "영화 산업의 정책과 통계, 지원 사업을 안내합니다. 국내 영화 시장 자료를 확인할 수 있습니다.",
            "id": "04f5298d2e2067",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/04f5298d2e2067.webp"
          },
          {
            "name": "KOBIS 영화관입장권통합전산망",
            "url": "kobis.or.kr",
            "desc": "박스오피스와 영화 관객 수 등 공식 통계를 조회합니다. 기간별 흥행 흐름을 숫자로 살펴볼 수 있습니다.",
            "id": "4d7387de2d8774",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4d7387de2d8774.webp"
          },
          {
            "name": "교보문고",
            "url": "kyobobook.co.kr",
            "desc": "책 소개와 목차, 독자 반응을 보며 읽을거리를 찾습니다. 분야별 신간과 추천 도서를 둘러보기 좋습니다.",
            "id": "873b57b98533b9",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/873b57b98533b9.webp"
          },
          {
            "name": "알라딘",
            "url": "aladin.co.kr",
            "desc": "도서 정보와 독자 리뷰, 중고 도서 정보를 찾아봅니다. 관심 분야의 책을 비교하며 읽기 목록을 만들 수 있습니다.",
            "id": "b6f84c87616eec",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b6f84c87616eec.webp"
          },
          {
            "name": "YES24",
            "url": "yes24.com",
            "desc": "도서와 공연 정보를 함께 살펴보는 문화 플랫폼입니다. 신간 소개와 책 관련 콘텐츠를 읽을 수 있습니다.",
            "id": "f8f973f89b5eb6",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f8f973f89b5eb6.webp"
          },
          {
            "name": "브런치스토리",
            "url": "brunch.co.kr",
            "desc": "여러 작가의 에세이와 주제별 글을 읽는 공간입니다. 마음에 드는 작가의 연재를 따라가 보세요.",
            "id": "eb38afbe6317bf",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/eb38afbe6317bf.webp"
          },
          {
            "name": "문학동네",
            "url": "munhak.com",
            "desc": "출판사의 신간과 작가, 문학 관련 소식을 소개합니다. 문학 작품의 배경과 출간 정보를 찾아볼 수 있습니다.",
            "id": "77ae42054c5111",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/77ae42054c5111.webp"
          },
          {
            "name": "창비",
            "url": "www.changbi.com",
            "desc": "문학과 인문·사회 분야의 책과 저자 소식을 전합니다. 도서 소개와 관련 글을 함께 읽어 보세요.",
            "id": "e76f123a93b897",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e76f123a93b897.webp"
          },
          {
            "name": "민음사",
            "url": "minumsa.com",
            "desc": "문학과 인문 분야의 도서 및 작가 정보를 제공합니다. 세계문학과 국내 소설의 읽기 목록을 살펴보세요.",
            "id": "3ef52e34a4a36d",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3ef52e34a4a36d.webp"
          },
          {
            "name": "서울도서관",
            "url": "lib.seoul.go.kr",
            "desc": "도서 검색과 서울의 도서관, 독서문화 프로그램을 안내합니다. 이용 가능한 자료와 행사를 찾아보세요.",
            "id": "6ca6dea570c848",
            "tags": [
              "문화 · 읽을거리",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6ca6dea570c848.webp"
          }
        ]
      },
      {
        "id": "kr-travel",
        "category": "여행 · 동네",
        "tagline": "가까운 곳부터 멀리까지",
        "blurb": "공식 관광 안내와 교통, 숲과 공원 정보를 모았습니다. 지역의 숨은 장소를 발견한 뒤 운영 시간과 예약 조건을 확인해 보세요.",
        "sites": [
          {
            "name": "대한민국 구석구석",
            "url": "korean.visitkorea.or.kr",
            "desc": "한국관광공사가 국내 여행지와 테마 여행 코스를 소개합니다. 계절과 지역에 맞는 여행 아이디어를 찾아보세요.",
            "id": "974b6d19eb4e88",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/974b6d19eb4e88.webp"
          },
          {
            "name": "Visit Seoul",
            "url": "korean.visitseoul.net",
            "desc": "서울의 명소와 행사, 여행 코스를 안내합니다. 동네별로 걷고 싶은 장소를 찾아볼 수 있습니다.",
            "id": "aa83ef5ad203bf",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/aa83ef5ad203bf.webp"
          },
          {
            "name": "Visit Jeju",
            "url": "visitjeju.net",
            "desc": "제주의 자연과 문화, 여행 코스를 소개하는 공식 관광 사이트입니다. 지역별 여행 정보를 지도와 함께 살펴보세요.",
            "id": "2c37bc2ea0bf16",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2c37bc2ea0bf16.webp"
          },
          {
            "name": "Visit Busan",
            "url": "visitbusan.net",
            "desc": "부산의 관광 명소와 축제, 여행 정보를 제공합니다. 바다와 도시를 함께 즐길 코스를 찾아보세요.",
            "id": "d190498db1f10f",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d190498db1f10f.webp"
          },
          {
            "name": "강원관광",
            "url": "gwto.or.kr",
            "desc": "강원 지역의 관광 소식과 여행 콘텐츠를 안내합니다. 계절별 방문 아이디어를 살펴볼 수 있습니다.",
            "id": "46be780ae3b859",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/46be780ae3b859.webp"
          },
          {
            "name": "인천투어",
            "url": "itour.incheon.go.kr",
            "desc": "인천의 관광 명소와 섬, 테마 여행을 소개합니다. 교통과 관광 정보를 함께 확인할 수 있습니다.",
            "id": "7b22db1ab547f9",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7b22db1ab547f9.webp"
          },
          {
            "name": "경기관광",
            "url": "ggtour.or.kr",
            "desc": "경기도의 여행지와 축제, 추천 코스를 모았습니다. 주말에 다녀올 가까운 여행을 찾아보세요.",
            "id": "a108c57f2d98dd",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a108c57f2d98dd.webp"
          },
          {
            "name": "국립공원공단",
            "url": "knps.or.kr",
            "desc": "국립공원의 탐방 코스와 공원 소식을 안내합니다. 방문 전 탐방 통제와 안전 정보를 확인할 수 있습니다.",
            "id": "f82219804ded8b",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f82219804ded8b.webp"
          },
          {
            "name": "숲나들e",
            "url": "foresttrip.go.kr",
            "desc": "자연휴양림을 검색하고 시설과 이용 정보를 살펴봅니다. 숲에서 쉬는 여행의 예약 조건을 확인해 보세요.",
            "id": "ea1d485e1afc90",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ea1d485e1afc90.webp"
          },
          {
            "name": "산림청",
            "url": "forest.go.kr",
            "desc": "산림과 수목원, 숲길에 관한 공식 정보를 제공합니다. 산과 숲을 찾기 전 관련 안내를 살펴볼 수 있습니다.",
            "id": "672cf5ca7e8d15",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/672cf5ca7e8d15.webp"
          },
          {
            "name": "국립수목원",
            "url": "kna.forest.go.kr",
            "desc": "식물과 산림 생물 연구, 수목원 관람 정보를 소개합니다. 방문 예약과 교육 프로그램을 확인해 보세요.",
            "id": "631541eba9d51f",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/631541eba9d51f.webp"
          },
          {
            "name": "코레일",
            "url": "letskorail.com",
            "desc": "기차 노선과 시간표, 승차권 정보를 확인합니다. 철도 여행을 계획할 때 출발지와 목적지를 비교할 수 있습니다.",
            "id": "d581782738a30d",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d581782738a30d.webp"
          },
          {
            "name": "SRT",
            "url": "etk.srail.kr",
            "desc": "SRT 열차의 승차권과 시간표를 조회합니다. 노선과 역 이용 정보를 함께 확인할 수 있습니다.",
            "id": "8efa71a3e670ad",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8efa71a3e670ad.webp"
          },
          {
            "name": "고속버스통합예매",
            "url": "kobus.co.kr",
            "desc": "고속버스 노선과 운행 시간, 승차권을 조회합니다. 도시 간 이동 계획을 세울 때 활용해 보세요.",
            "id": "9bed7ebbc7a42b",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9bed7ebbc7a42b.webp"
          },
          {
            "name": "버스타고",
            "url": "bustago.or.kr",
            "desc": "시외버스 운행 정보와 승차권 예매를 제공합니다. 출발 터미널과 목적지를 선택해 일정을 확인할 수 있습니다.",
            "id": "f6aa1b5c0bb9d3",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "인천국제공항",
            "url": "airport.kr",
            "desc": "항공편과 공항 시설, 교통 정보를 안내합니다. 출국 전 터미널과 이동 동선을 확인해 보세요.",
            "id": "3e29163398d659",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3e29163398d659.webp"
          },
          {
            "name": "한국공항공사",
            "url": "airport.co.kr",
            "desc": "국내 공항의 운항과 시설, 접근 교통 정보를 제공합니다. 공항별 안내 페이지로 연결됩니다.",
            "id": "7fbf1d014bda23",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7fbf1d014bda23.webp"
          },
          {
            "name": "네이버 지도",
            "url": "map.naver.com",
            "desc": "장소 검색과 길찾기, 거리뷰를 제공하는 지도 서비스입니다. 방문할 동네의 이동 동선과 주변 장소를 살펴보세요.",
            "id": "ea59d92f8c03e9",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ea59d92f8c03e9.webp"
          },
          {
            "name": "카카오맵",
            "url": "map.kakao.com",
            "desc": "지도와 길찾기, 로드뷰로 장소를 탐색합니다. 목적지 주변의 거리 모습을 미리 확인할 수 있습니다.",
            "id": "9b7a2732cd255e",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9b7a2732cd255e.webp"
          },
          {
            "name": "기상청 날씨누리",
            "url": "www.weather.go.kr",
            "desc": "기상 예보와 특보, 관측 자료를 제공합니다. 야외 일정 전 지역별 날씨 변화를 확인해 보세요.",
            "id": "dd795119e9ad59",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/dd795119e9ad59.webp"
          },
          {
            "name": "에어코리아",
            "url": "airkorea.or.kr",
            "desc": "지역별 대기질 관측과 예보를 제공합니다. 외출 계획에 필요한 미세먼지 정보를 확인할 수 있습니다.",
            "id": "9aeeba0387f60b",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "두루누비",
            "url": "durunubi.kr",
            "desc": "걷기 여행길과 자전거길 정보를 지도에서 찾아봅니다. 코스 거리와 주요 지점을 확인하며 일정을 계획하세요.",
            "id": "f587be0c0b05c8",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f587be0c0b05c8.webp"
          },
          {
            "name": "고캠핑",
            "url": "gocamping.or.kr",
            "desc": "캠핑장의 시설과 위치 정보를 검색합니다. 캠핑 스타일에 맞는 장소와 이용 조건을 찾아볼 수 있습니다.",
            "id": "03876265a625f9",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/03876265a625f9.webp"
          },
          {
            "name": "서울의 공원",
            "url": "parks.seoul.go.kr",
            "desc": "서울의 공원과 행사, 이용 안내를 모았습니다. 일상에서 쉬어갈 녹지와 산책 프로그램을 찾아보세요.",
            "id": "ccd314be82395a",
            "tags": [
              "여행 · 동네",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ccd314be82395a.webp"
          }
        ]
      },
      {
        "id": "kr-life",
        "category": "생활 · 공공정보",
        "tagline": "필요할 때 찾는 정확한 안내",
        "blurb": "공공기관이 제공하는 생활 정보와 행정 서비스를 모았습니다. 제도와 이용 조건은 각 기관의 최신 안내에서 확인하세요.",
        "sites": [
          {
            "name": "정부24",
            "url": "gov.kr",
            "desc": "민원과 정부 서비스, 행정 정보를 검색합니다. 필요한 증명서나 생활 지원 서비스의 이용 방법을 확인할 수 있습니다.",
            "id": "08f939e441fedd",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "복지로",
            "url": "bokjiro.go.kr",
            "desc": "복지 서비스의 대상과 신청 방법을 안내합니다. 상황에 맞는 지원 제도를 검색해 살펴볼 수 있습니다.",
            "id": "7cbf14582a2935",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7cbf14582a2935.webp"
          },
          {
            "name": "국가법령정보센터",
            "url": "law.go.kr",
            "desc": "현행 법령과 행정규칙, 판례 등 법령 정보를 검색합니다. 조문과 시행일을 직접 확인할 수 있습니다.",
            "id": "8ad0186b76a011",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "국민건강보험",
            "url": "www.nhis.or.kr",
            "desc": "건강보험 제도와 민원, 건강검진 정보를 안내합니다. 개인 서비스 이용에는 본인 인증이 필요할 수 있습니다.",
            "id": "1958083d9f6962",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1958083d9f6962.webp"
          },
          {
            "name": "국민연금공단",
            "url": "nps.or.kr",
            "desc": "국민연금 제도와 가입·납부 관련 안내를 제공합니다. 제도 설명과 개인 민원 서비스를 구분해 이용할 수 있습니다.",
            "id": "1babd3dc27e390",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1babd3dc27e390.webp"
          },
          {
            "name": "국세청",
            "url": "nts.go.kr",
            "desc": "세금 제도와 신고 안내, 국세 관련 공지를 제공합니다. 세목별 공식 설명과 자료를 찾아보세요.",
            "id": "3c4495be5e5394",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3c4495be5e5394.webp"
          },
          {
            "name": "홈택스",
            "url": "hometax.go.kr",
            "desc": "국세 신고와 납부, 증명 발급을 제공하는 전자 서비스입니다. 업무별 이용 안내와 신청 경로를 확인할 수 있습니다.",
            "id": "762679ab877f91",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/762679ab877f91.webp"
          },
          {
            "name": "위택스",
            "url": "wetax.go.kr",
            "desc": "지방세 관련 조회와 납부, 신고 서비스를 제공합니다. 세목별 안내와 처리 절차를 확인해 보세요.",
            "id": "879d41239969ba",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/879d41239969ba.webp"
          },
          {
            "name": "한국소비자원",
            "url": "kca.go.kr",
            "desc": "소비자 피해 예방 정보와 상품 시험 결과를 제공합니다. 구매 전 알아둘 소비자 정보를 찾아볼 수 있습니다.",
            "id": "e43de20f6e1ff8",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e43de20f6e1ff8.webp"
          },
          {
            "name": "소비자24",
            "url": "consumer.go.kr",
            "desc": "상품 안전과 리콜, 소비자 피해 구제 정보를 모았습니다. 제품과 서비스의 공식 안내를 확인해 보세요.",
            "id": "a847f40e409b04",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a847f40e409b04.webp"
          },
          {
            "name": "안전신문고",
            "url": "safetyreport.go.kr",
            "desc": "생활 속 안전 위험을 신고하고 처리 결과를 확인하는 공공 서비스입니다. 신고 대상과 이용 방법을 안내합니다.",
            "id": "fecb0b87a27a2d",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/fecb0b87a27a2d.webp"
          },
          {
            "name": "국민재난안전포털",
            "url": "safekorea.go.kr",
            "desc": "재난 정보와 상황별 행동 요령을 제공합니다. 가까운 대피시설과 안전 안내를 찾아볼 수 있습니다.",
            "id": "30e780d1108dca",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "도로교통공단",
            "url": "koroad.or.kr",
            "desc": "교통안전 교육과 운전면허, 교통 관련 정보를 안내합니다. 필요한 교육과 민원 경로를 확인해 보세요.",
            "id": "bd2b8d32c4081e",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/bd2b8d32c4081e.webp"
          },
          {
            "name": "도로명주소 안내시스템",
            "url": "juso.go.kr",
            "desc": "도로명주소와 우편번호를 검색합니다. 주소를 정확한 형식으로 확인하거나 영문 표기를 찾아볼 수 있습니다.",
            "id": "0c80abb142b69f",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0c80abb142b69f.webp"
          },
          {
            "name": "인터넷우체국",
            "url": "epost.go.kr",
            "desc": "우편물 배송과 우편 서비스 정보를 제공합니다. 등기 조회와 우편번호, 이용 요금을 확인할 수 있습니다.",
            "id": "ad8a2d9d72f92d",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ad8a2d9d72f92d.webp"
          },
          {
            "name": "우체국택배",
            "url": "parcel.epost.go.kr",
            "desc": "소포 배송과 방문 접수 안내를 제공합니다. 배송 상태와 발송 방법을 확인할 수 있습니다.",
            "id": "89ea4cf7e582a0",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/89ea4cf7e582a0.webp"
          },
          {
            "name": "서울시",
            "url": "seoul.go.kr",
            "desc": "서울시의 정책과 공공서비스, 생활 소식을 안내합니다. 분야별 행정 정보와 참여 프로그램을 찾아보세요.",
            "id": "14514d37b6147e",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/14514d37b6147e.webp"
          },
          {
            "name": "부산광역시",
            "url": "www.busan.go.kr",
            "desc": "부산의 생활 행정과 정책, 지역 소식을 제공합니다. 시민 서비스와 행사 정보를 검색할 수 있습니다.",
            "id": "597c4219a90e5f",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/597c4219a90e5f.webp"
          },
          {
            "name": "경기도청",
            "url": "gg.go.kr",
            "desc": "경기도의 정책과 생활 서비스, 지역 정보를 제공합니다. 도민 대상 프로그램과 공지를 확인해 보세요.",
            "id": "d8143c16481207",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d8143c16481207.webp"
          },
          {
            "name": "기후에너지환경부",
            "url": "me.go.kr",
            "desc": "기후와 에너지, 환경 분야의 정책과 공공 자료를 제공합니다. 제도 안내와 공식 발표를 찾아볼 수 있습니다.",
            "id": "530ecb7decddfb",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "식품안전나라",
            "url": "foodsafetykorea.go.kr",
            "desc": "식품 안전과 회수·판매중지, 식품 관련 정보를 제공합니다. 제품 정보를 확인할 때 공식 안내를 살펴보세요.",
            "id": "649c8f44338e2c",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/649c8f44338e2c.webp"
          },
          {
            "name": "질병관리청",
            "url": "kdca.go.kr",
            "desc": "감염병과 예방, 보건 관련 공식 정보를 제공합니다. 공지와 통계의 발표 시점을 확인하며 읽을 수 있습니다.",
            "id": "93080ae49e3b7d",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/93080ae49e3b7d.webp"
          },
          {
            "name": "건강보험심사평가원",
            "url": "www.hira.or.kr",
            "desc": "병원·약국과 의료 이용 관련 정보를 안내합니다. 기관 검색과 공개된 평가 정보를 확인할 수 있습니다.",
            "id": "bfb6433c37e30d",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/bfb6433c37e30d.webp"
          },
          {
            "name": "국립중앙의료원",
            "url": "www.nmc.or.kr",
            "desc": "공공의료와 진료, 의료 관련 소식을 안내합니다. 기관의 공식 자료와 이용 정보를 찾아볼 수 있습니다.",
            "id": "f2e452b3c17ce2",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f2e452b3c17ce2.webp"
          },
          {
            "name": "한국전력공사",
            "url": "www.kepco.co.kr",
            "desc": "전기 이용과 요금 제도, 에너지 관련 정보를 제공합니다. 고객 서비스와 절전 안내를 확인해 보세요.",
            "id": "bc22ddd8e3855c",
            "tags": [
              "생활 · 공공정보",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/bc22ddd8e3855c.webp"
          }
        ]
      },
      {
        "id": "kr-work",
        "category": "일 · 커리어",
        "tagline": "일하는 방식의 다음 장",
        "blurb": "직무와 채용, 산업 소식과 창업 자료를 모았습니다. 새로운 일을 찾거나 지금 하는 일의 시야를 넓힐 때 둘러보세요.",
        "sites": [
          {
            "name": "원티드",
            "url": "wanted.co.kr",
            "desc": "직무별 채용 공고와 커리어 콘텐츠를 제공합니다. 관심 기업의 역할과 요구 조건을 비교할 수 있습니다.",
            "id": "66f8ce465d019a",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/66f8ce465d019a.webp"
          },
          {
            "name": "사람인",
            "url": "saramin.co.kr",
            "desc": "기업과 채용 공고, 취업 준비 자료를 검색합니다. 직무와 지역 조건을 정해 채용 정보를 찾아보세요.",
            "id": "417d86292a0926",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/417d86292a0926.webp"
          },
          {
            "name": "잡코리아",
            "url": "jobkorea.co.kr",
            "desc": "채용 공고와 기업 정보, 취업 관련 콘텐츠를 제공합니다. 관심 직무의 채용 흐름을 살펴볼 수 있습니다.",
            "id": "2e43aac01548e9",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2e43aac01548e9.webp"
          },
          {
            "name": "점핏",
            "url": "jumpit.saramin.co.kr",
            "desc": "개발 직군의 채용 공고와 커리어 정보를 제공합니다. 기술 스택과 역할을 기준으로 탐색할 수 있습니다.",
            "id": "11bc53934cf477",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/11bc53934cf477.webp"
          },
          {
            "name": "리멤버",
            "url": "rememberapp.co.kr",
            "desc": "경력직 채용 공고와 커리어 서비스를 제공합니다. 직무와 기업별 기회를 찾아보고 채용 조건을 확인할 수 있습니다.",
            "id": "95b8cfa1b93c9d",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/95b8cfa1b93c9d.webp"
          },
          {
            "name": "고용24",
            "url": "work24.go.kr",
            "desc": "채용과 직업훈련, 고용 관련 공공서비스를 모았습니다. 필요한 제도와 신청 경로를 찾아볼 수 있습니다.",
            "id": "96186d0f6711de",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/96186d0f6711de.webp"
          },
          {
            "name": "링커리어",
            "url": "linkareer.com",
            "desc": "대외활동과 공모전, 인턴 채용 정보를 모았습니다. 일정과 지원 조건을 확인하며 기회를 찾아보세요.",
            "id": "225485190334f0",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/225485190334f0.webp"
          },
          {
            "name": "캐치",
            "url": "www.catch.co.kr",
            "desc": "채용 공고와 기업 분석, 취업 콘텐츠를 제공합니다. 지원할 기업의 정보를 비교해 볼 수 있습니다.",
            "id": "c09aede05e2c25",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c09aede05e2c25.webp"
          },
          {
            "name": "올콘",
            "url": "all-con.co.kr",
            "desc": "공모전과 대외활동 정보를 분야별로 소개합니다. 마감일과 참가 조건을 확인해 도전할 기회를 찾아보세요.",
            "id": "6ee1db530a3af4",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6ee1db530a3af4.webp"
          },
          {
            "name": "씽굿",
            "url": "thinkcontest.com",
            "desc": "공모전 소식과 수상 사례, 관련 콘텐츠를 제공합니다. 관심 분야의 아이디어 공모를 탐색할 수 있습니다.",
            "id": "fd46637623940e",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/fd46637623940e.webp"
          },
          {
            "name": "디스콰이엇",
            "url": "disquiet.io",
            "desc": "메이커들이 만든 디지털 제품과 개발 과정을 공유합니다. 새로운 서비스와 창업 아이디어를 발견해 보세요.",
            "id": "f3094e3a06ffcb",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f3094e3a06ffcb.webp"
          },
          {
            "name": "요즘IT",
            "url": "yozm.wishket.com",
            "desc": "개발과 디자인, 기획 등 IT 실무 글을 읽습니다. 직무별 경험과 도구 활용 사례를 찾아보기 좋습니다.",
            "id": "985439144b2c8f",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/985439144b2c8f.webp"
          },
          {
            "name": "서핏",
            "url": "surfit.io",
            "desc": "디자인과 개발, 비즈니스 분야의 읽을거리를 모았습니다. 관심 직무의 콘텐츠를 둘러보며 읽기 목록을 만들 수 있습니다.",
            "id": "71f8c3cf5b5e93",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/71f8c3cf5b5e93.webp"
          },
          {
            "name": "디지털 인사이트",
            "url": "ditoday.com",
            "desc": "디지털 디자인과 마케팅, 기술 관련 소식을 전합니다. 업계 인터뷰와 사례를 살펴볼 수 있습니다.",
            "id": "156125d87d2bb9",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/156125d87d2bb9.webp"
          },
          {
            "name": "플래텀",
            "url": "platum.kr",
            "desc": "스타트업과 투자, 창업 생태계 소식을 다룹니다. 기업의 제품과 성장 과정을 기사로 읽을 수 있습니다.",
            "id": "222f3ebe640e40",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/222f3ebe640e40.webp"
          },
          {
            "name": "벤처스퀘어",
            "url": "venturesquare.net",
            "desc": "스타트업과 창업, 투자 관련 소식을 제공합니다. 새로운 사업과 산업 흐름을 살펴보기 좋습니다.",
            "id": "4c04cdf49bcfe1",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4c04cdf49bcfe1.webp"
          },
          {
            "name": "바이라인네트워크",
            "url": "byline.network",
            "desc": "IT와 플랫폼, 산업 동향을 취재하는 매체입니다. 서비스의 변화와 비즈니스 맥락을 읽을 수 있습니다.",
            "id": "01ea9605fb02c0",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/01ea9605fb02c0.webp"
          },
          {
            "name": "K-Startup",
            "url": "k-startup.go.kr",
            "desc": "창업 지원 사업과 교육, 정책 정보를 모았습니다. 사업별 대상과 모집 일정을 확인해 보세요.",
            "id": "98012de731d154",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/98012de731d154.webp"
          },
          {
            "name": "중소벤처기업부",
            "url": "mss.go.kr",
            "desc": "중소기업과 창업 관련 정책 및 지원 소식을 제공합니다. 공식 공고와 제도 안내를 찾아볼 수 있습니다.",
            "id": "bd423ac6707d8a",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/bd423ac6707d8a.webp"
          },
          {
            "name": "소상공인시장진흥공단",
            "url": "www.semas.or.kr",
            "desc": "소상공인 지원과 교육, 전통시장 관련 정보를 안내합니다. 사업별 신청 조건을 살펴보세요.",
            "id": "b1eaa0603b3846",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "KOTRA",
            "url": "kotra.or.kr",
            "desc": "해외 시장과 무역, 기업 지원 정보를 제공합니다. 국가별 시장 조사와 행사 자료를 찾아볼 수 있습니다.",
            "id": "e422df8adbe947",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e422df8adbe947.webp"
          },
          {
            "name": "한국무역협회",
            "url": "kita.net",
            "desc": "무역 통계와 해외 시장, 수출입 실무 정보를 제공합니다. 산업과 국가별 자료를 검색해 보세요.",
            "id": "09cf1364985247",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/09cf1364985247.webp"
          },
          {
            "name": "디자인DB",
            "url": "designdb.com",
            "desc": "디자인 산업의 소식과 자료, 공모전 정보를 제공합니다. 국내외 디자인 동향을 찾아볼 수 있습니다.",
            "id": "3992fe2b08324c",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3992fe2b08324c.webp"
          },
          {
            "name": "한국콘텐츠진흥원",
            "url": "kocca.kr",
            "desc": "콘텐츠 산업의 연구와 지원 사업, 교육 정보를 안내합니다. 분야별 보고서와 공고를 확인해 보세요.",
            "id": "a1f23b011c973a",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a1f23b011c973a.webp"
          },
          {
            "name": "한국산업인력공단",
            "url": "hrdkorea.or.kr",
            "desc": "국가자격과 직업능력개발 관련 정보를 제공합니다. 자격과 교육 제도의 공식 안내를 확인할 수 있습니다.",
            "id": "3440574348aa68",
            "tags": [
              "일 · 커리어",
              "한국어"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3440574348aa68.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "global",
    "label": "외국 사이트",
    "short": "Global",
    "lead": "언어와 국경을 넘어 흥미로운 아이디어와 지식을 만나는 사이트입니다.",
    "categories": [
      {
        "id": "gl-games",
        "category": "웹게임",
        "tagline": "심심할 때, 가볍게 한 판",
        "blurb": "설치 없이 브라우저에서 즐기는 웹게임을 모았습니다. 짧은 퍼즐부터 레이싱, 마을 만들기와 친구들과 함께하는 그림 게임까지 골라보세요. 조작 방식과 이용 조건은 게임마다 다릅니다.",
        "sites": [
          {
            "name": "Slow Roads",
            "url": "slowroads.io",
            "desc": "이어지는 산길과 풍경 속을 자유롭게 달리는 드라이빙 게임입니다. 키보드로 직접 운전하거나 자동 주행으로 풍경을 즐겨 보세요.",
            "gameGenre": "드라이빙",
            "tags": [
              "웹게임",
              "운전",
              "휴식",
              "혼자"
            ],
            "id": "6c965bc6a0e039",
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6c965bc6a0e039.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "2048",
            "url": "play2048.co",
            "desc": "같은 숫자의 타일을 합쳐 더 큰 숫자를 만드는 퍼즐입니다. 방향키로 움직이며 다음 수를 생각해 보세요.",
            "id": "b67bc6815991cf",
            "tags": [
              "웹게임",
              "세계",
              "숫자 퍼즐",
              "심심할 때",
              "브라우저 게임"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b67bc6815991cf.webp",
            "gameGenre": "숫자 퍼즐"
          },
          {
            "name": "PolyTrack",
            "url": "www.kodub.com/apps/polytrack",
            "desc": "루프와 점프가 있는 작은 트랙에서 기록을 줄이는 레이싱 게임입니다. 코스를 익히고 더 빠른 주행 경로를 찾아보세요.",
            "gameGenre": "레이싱",
            "tags": [
              "웹게임",
              "레이싱",
              "타임어택",
              "혼자"
            ],
            "id": "9becb635529085",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9becb635529085.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Little Alchemy 2",
            "url": "littlealchemy2.com",
            "desc": "기본 원소를 조합해 새로운 재료와 사물을 발견합니다. 조합 결과를 모으며 가볍게 탐험할 수 있습니다.",
            "id": "b038169f1c5d25",
            "tags": [
              "웹게임",
              "세계",
              "조합 게임",
              "심심할 때",
              "브라우저 게임"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b038169f1c5d25.webp",
            "gameGenre": "조합 게임"
          },
          {
            "name": "Gartic Phone",
            "url": "garticphone.com",
            "desc": "문장을 그림으로, 그림을 다시 문장으로 전하며 결과를 비교하는 파티 게임입니다. 친구들과 방을 만들어 함께 즐겨 보세요.",
            "gameGenre": "그림 게임",
            "tags": [
              "웹게임",
              "그리기",
              "친구와",
              "파티 게임"
            ],
            "id": "23399133255a72",
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/23399133255a72.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Quick, Draw!",
            "url": "quickdraw.withgoogle.com",
            "desc": "짧은 시간에 그린 그림을 AI가 알아맞히는 실험입니다. 그림 데이터와 인식 방식도 살펴볼 수 있습니다.",
            "id": "5024def84c49e2",
            "tags": [
              "웹게임",
              "세계",
              "그림 게임",
              "심심할 때",
              "브라우저 게임"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5024def84c49e2.webp",
            "gameGenre": "그림 게임"
          },
          {
            "name": "Tetris",
            "url": "play.tetris.com",
            "desc": "공식 테트리스 웹게임입니다. 떨어지는 블록을 회전하고 빈틈없이 줄을 채우며 점수를 쌓아 보세요.",
            "gameGenre": "블록 퍼즐",
            "tags": [
              "웹게임",
              "퍼즐",
              "아케이드",
              "혼자"
            ],
            "id": "272f3f3b8cb3a3",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/272f3f3b8cb3a3.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Cookie Clicker",
            "url": "orteil.dashnet.org/cookieclicker/",
            "desc": "쿠키를 눌러 생산을 시작하고 건물과 업그레이드를 늘리는 방치형 게임입니다. 작은 클릭이 커다란 쿠키 공장으로 자라납니다.",
            "gameGenre": "방치형",
            "tags": [
              "웹게임",
              "클리커",
              "경영",
              "혼자"
            ],
            "id": "3d782074816aeb",
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3d782074816aeb.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Line Rider",
            "url": "www.linerider.com",
            "desc": "직접 그린 선을 따라 썰매가 달리는 물리 게임입니다. 경사와 점프 구간을 만들고 재생하며 코스를 다듬어 보세요.",
            "gameGenre": "창작 게임",
            "tags": [
              "웹게임",
              "그리기",
              "물리",
              "혼자"
            ],
            "id": "5440bdf9a84079",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5440bdf9a84079.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Sandspiel",
            "url": "sandspiel.club",
            "desc": "모래와 물, 불 등 픽셀 재료를 배치하는 시뮬레이션입니다. 재료를 섞으며 화면에서 일어나는 반응을 관찰할 수 있습니다.",
            "id": "3ee230a987552a",
            "tags": [
              "웹게임",
              "세계",
              "샌드박스",
              "심심할 때",
              "브라우저 게임"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3ee230a987552a.webp",
            "gameGenre": "샌드박스"
          },
          {
            "name": "Lichess",
            "url": "lichess.org",
            "desc": "친구나 컴퓨터와 체스를 두고 전술 퍼즐을 풀 수 있습니다. 기초 규칙 연습부터 다양한 시간제한 대국까지 제공합니다.",
            "gameGenre": "보드게임",
            "tags": [
              "웹게임",
              "체스",
              "친구와",
              "두뇌 게임"
            ],
            "id": "2f4b00ff8584ad",
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2f4b00ff8584ad.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "ZType",
            "url": "zty.pe",
            "desc": "다가오는 적 위의 영단어를 타이핑해 격추하는 슈팅 게임입니다. 키보드로 정확하고 빠르게 입력하며 연속 기록에 도전해 보세요.",
            "gameGenre": "타이핑 게임",
            "tags": [
              "웹게임",
              "영문 타자",
              "슈팅",
              "혼자"
            ],
            "id": "4e69b7f735150f",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4e69b7f735150f.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "HexGL",
            "url": "hexgl.bkcore.com/play/",
            "desc": "공중 트랙을 달리는 미래형 레이싱 게임입니다. 키보드로 기체를 조종하며 벽을 피하고 기록을 줄여 보세요.",
            "gameGenre": "레이싱",
            "tags": [
              "웹게임",
              "레이싱",
              "키보드",
              "혼자"
            ],
            "id": "d1e585d1e7a9f9",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d1e585d1e7a9f9.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "A Dark Room",
            "url": "adarkroom.doublespeakgames.com",
            "desc": "불을 피우는 일에서 시작해 자원을 모으고 세계를 탐험하는 텍스트 어드벤처입니다. 천천히 드러나는 이야기를 따라가 보세요.",
            "gameGenre": "어드벤처",
            "tags": [
              "웹게임",
              "텍스트 게임",
              "탐험",
              "혼자"
            ],
            "id": "9ef4fad2968e39",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9ef4fad2968e39.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Gridland",
            "url": "gridland.doublespeakgames.com",
            "desc": "같은 그림을 세 개 이상 맞추며 자원을 모으는 생존 퍼즐입니다. 낮의 준비가 밤의 전투로 이어집니다.",
            "gameGenre": "퍼즐",
            "tags": [
              "웹게임",
              "매치3",
              "전략",
              "혼자"
            ],
            "id": "9e4d0755a64eaf",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9e4d0755a64eaf.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Universal Paperclips",
            "url": "www.decisionproblem.com/paperclips/index2.html",
            "desc": "종이 클립을 만들고 가격과 자동 생산을 조절하는 경영 게임입니다. 컴퓨터 화면에서 변화하는 생산 시스템을 살펴보세요.",
            "gameGenre": "방치형",
            "tags": [
              "웹게임",
              "경영",
              "전략",
              "혼자"
            ],
            "id": "51d7e5ccf96055",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Jstris",
            "url": "jstris.jezevec10.com",
            "desc": "떨어지는 블록으로 줄을 채우는 빠른 퍼즐 게임입니다. 혼자 기록을 연습하거나 다른 이용자와 실시간으로 겨룰 수 있습니다.",
            "gameGenre": "블록 퍼즐",
            "tags": [
              "웹게임",
              "퍼즐",
              "키보드",
              "멀티플레이"
            ],
            "id": "2bb668a086bc94",
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "OpenGuessr",
            "url": "openguessr.com",
            "desc": "거리 풍경의 표지판과 지형을 단서로 지도 위 위치를 맞히는 게임입니다. 낯선 장소를 관찰하며 지리 감각을 시험해 보세요.",
            "gameGenre": "지리 게임",
            "tags": [
              "웹게임",
              "여행",
              "추리",
              "지리"
            ],
            "id": "e7f0fe1d94777e",
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e7f0fe1d94777e.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Little War Game",
            "url": "littlewargame.com",
            "desc": "자원을 채집하고 기지를 건설해 유닛을 지휘하는 실시간 전략 게임입니다. 컴퓨터 상대나 여러 플레이어와 전술을 겨뤄 보세요.",
            "gameGenre": "전략",
            "tags": [
              "웹게임",
              "RTS",
              "전략",
              "멀티플레이"
            ],
            "id": "59ae58b10b6782",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/59ae58b10b6782.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Townscaper",
            "url": "oskarstalberg.com/Townscaper/",
            "desc": "물 위를 클릭해 색색의 집과 골목을 만드는 마을 건설 체험판입니다. 정해진 목표 없이 작은 도시의 모양을 바꿔 보세요.",
            "gameGenre": "샌드박스",
            "tags": [
              "웹게임",
              "건설",
              "창작",
              "체험판"
            ],
            "id": "2f1f6a194e014e",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "HaxBall",
            "url": "www.haxball.com/play",
            "desc": "작은 원형 선수를 움직여 공을 골대에 넣는 온라인 축구 게임입니다. 친구와 같은 방에 들어가 패스와 협동 플레이를 즐겨 보세요.",
            "gameGenre": "스포츠",
            "tags": [
              "웹게임",
              "축구",
              "친구와",
              "멀티플레이"
            ],
            "id": "968284a7aeb1d3",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/968284a7aeb1d3.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Bonk.io",
            "url": "bonk.io",
            "desc": "공을 움직여 상대를 발판 밖으로 밀어내는 물리 대전 게임입니다. 키보드로 이동하고 무게를 조절하며 끝까지 살아남아 보세요.",
            "gameGenre": "아케이드",
            "tags": [
              "웹게임",
              "물리",
              "친구와",
              "멀티플레이"
            ],
            "id": "bc8166f5644683",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/bc8166f5644683.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Quento",
            "url": "quento.com/game/",
            "desc": "숫자와 더하기·빼기 기호를 이어 목표 숫자를 만드는 암산 퍼즐입니다. 짧은 문제를 한 판씩 풀며 머리를 가볍게 써 보세요.",
            "gameGenre": "숫자 퍼즐",
            "tags": [
              "웹게임",
              "암산",
              "두뇌 게임",
              "혼자"
            ],
            "id": "97338c4b5d31f3",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/97338c4b5d31f3.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "QWOP",
            "url": "www.foddy.net/legacy/Athletics.html",
            "desc": "Q·W·O·P 키로 달리기 선수의 다리를 각각 움직이는 물리 게임입니다. 넘어지지 않고 몇 미터를 나아갈 수 있는지 도전해 보세요.",
            "gameGenre": "아케이드",
            "tags": [
              "웹게임",
              "물리",
              "키보드",
              "혼자"
            ],
            "id": "5d8fceac0e552e",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5d8fceac0e552e.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Entanglement",
            "url": "entanglement.gopherwoodstudios.com",
            "desc": "육각형 타일을 돌려 선을 길게 이어 가는 퍼즐입니다. 바깥 벽과 중앙에 닿지 않도록 경로를 계획해 보세요.",
            "gameGenre": "퍼즐",
            "tags": [
              "웹게임",
              "경로 퍼즐",
              "두뇌 게임",
              "혼자"
            ],
            "id": "8f196e95c43ee2",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8f196e95c43ee2.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "0h h1",
            "url": "0hh1.com",
            "desc": "두 가지 색으로 격자를 채우는 논리 퍼즐입니다. 같은 색이 세 칸 연속 놓이지 않도록 행과 열의 균형을 맞춰 보세요.",
            "gameGenre": "논리 퍼즐",
            "tags": [
              "웹게임",
              "두뇌 게임",
              "퍼즐",
              "혼자"
            ],
            "id": "b055914430a25b",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b055914430a25b.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "0h n0",
            "url": "0hn0.com",
            "desc": "숫자가 바라보는 파란 점의 개수에 맞춰 격자를 완성하는 논리 퍼즐입니다. 빨간 점으로 시야를 막으며 답을 추리해 보세요.",
            "gameGenre": "논리 퍼즐",
            "tags": [
              "웹게임",
              "두뇌 게임",
              "퍼즐",
              "혼자"
            ],
            "id": "3e3c287b10cfa6",
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3e3c287b10cfa6.webp",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Skribbl.io",
            "url": "skribbl.io",
            "desc": "그림을 보고 단어를 맞히는 온라인 게임입니다. 친구와 방을 만들거나 공개 게임에 참여할 수 있습니다.",
            "id": "cae0678229b7ac",
            "tags": [
              "웹게임",
              "세계",
              "그림 게임",
              "심심할 때",
              "브라우저 게임"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cae0678229b7ac.webp",
            "gameGenre": "그림 게임"
          },
          {
            "name": "TypeRacer",
            "url": "play.typeracer.com",
            "desc": "문장을 빠르고 정확하게 입력하며 타자 경주를 즐깁니다. 다른 참가자의 진행 상황과 함께 연습할 수 있습니다.",
            "id": "b0bd72c098ed3a",
            "tags": [
              "웹게임",
              "세계",
              "타이핑 게임",
              "심심할 때",
              "브라우저 게임"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b0bd72c098ed3a.webp",
            "gameGenre": "타이핑 게임"
          },
          {
            "name": "Chess.com",
            "url": "chess.com",
            "desc": "체스 대국과 퍼즐, 학습 콘텐츠를 제공합니다. 초보자 강의부터 다양한 상대와의 대국까지 탐색할 수 있습니다.",
            "id": "a55e98856d24d1",
            "tags": [
              "웹게임",
              "세계",
              "보드게임",
              "심심할 때",
              "브라우저 게임"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a55e98856d24d1.webp",
            "gameGenre": "보드게임"
          },
          {
            "name": "Tetr.io",
            "url": "tetr.io",
            "desc": "떨어지는 블록을 맞추는 온라인 퍼즐 게임입니다. 연습 모드와 대전 모드를 선택해 즐길 수 있습니다.",
            "id": "63258c5c730f79",
            "tags": [
              "웹게임",
              "세계",
              "블록 퍼즐",
              "심심할 때",
              "브라우저 게임"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/63258c5c730f79.webp",
            "gameGenre": "블록 퍼즐"
          }
        ]
      },
      {
        "id": "gl-detox",
        "category": "작은 웹 실험",
        "tagline": "잠깐 다른 곳에 머무르기",
        "blurb": "풍경을 바라보거나 소리를 섞고, 화면 속 작은 실험을 만지는 공간입니다. 목적 없이 둘러보다 흥미로운 아이디어를 발견해 보세요.",
        "sites": [
          {
            "name": "WindowSwap",
            "url": "window-swap.com",
            "desc": "세계 여러 사람이 공유한 창밖 풍경을 감상합니다. 낯선 동네의 일상을 잠시 바라볼 수 있습니다.",
            "id": "6e6d072272ddb3",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6e6d072272ddb3.webp"
          },
          {
            "name": "Radio Garden",
            "url": "radio.garden",
            "desc": "지구본 위의 장소를 선택해 현지 라디오를 듣습니다. 도시를 옮기며 음악과 언어의 분위기를 느껴 보세요.",
            "id": "e1e6accb962f5d",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e1e6accb962f5d.webp"
          },
          {
            "name": "Drive & Listen",
            "url": "driveandlisten.com",
            "desc": "여러 도시의 주행 영상과 소리를 감상합니다. 화면을 따라 낯선 거리의 풍경을 둘러볼 수 있습니다.",
            "id": "a10177f675b275",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "A Soft Murmur",
            "url": "asoftmurmur.com",
            "desc": "비와 파도 등 주변 소리를 섞어 배경음을 만듭니다. 각 소리의 크기를 조절해 편한 조합을 찾아보세요.",
            "id": "b829ff505aaac5",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b829ff505aaac5.webp"
          },
          {
            "name": "Neal.fun",
            "url": "neal.fun",
            "desc": "아이디어를 직접 눌러 보고 조작하는 웹 실험을 모았습니다. 작은 게임과 시각화에서 새로운 재미를 발견할 수 있습니다.",
            "id": "789fa9e32be17b",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "browserVerifiedAt": "2026-10-20",
            "icon": "/icons/789fa9e32be17b.webp"
          },
          {
            "name": "Pointer Pointer",
            "url": "pointerpointer.com",
            "desc": "마우스를 멈춘 위치를 가리키는 사진을 찾아 보여줍니다. 단순한 상호작용의 재미를 즐겨 보세요.",
            "id": "f34ff14e20119e",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f34ff14e20119e.webp"
          },
          {
            "name": "Zoom Quilt",
            "url": "zoomquilt.org",
            "desc": "그림 속으로 계속 확대되어 들어가는 애니메이션을 감상합니다. 장면과 장면이 이어지는 세부를 찾아보세요.",
            "id": "a5c412d6dbb911",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "Lofi Girl",
            "url": "lofigirl.com",
            "desc": "로파이 음악과 아티스트, 관련 채널을 소개합니다. 집중하거나 쉬는 시간에 맞는 음악을 찾아볼 수 있습니다.",
            "id": "0394ec7fe63c7b",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0394ec7fe63c7b.webp"
          },
          {
            "name": "WebGL Fluid",
            "url": "paveldogreat.github.io/WebGL-Fluid-Simulation",
            "desc": "마우스 움직임에 따라 색과 흐름이 변하는 유체 시뮬레이션입니다. 설정을 바꾸며 다른 질감을 만들어 보세요.",
            "id": "aa0bbe8835669a",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/aa0bbe8835669a.webp"
          },
          {
            "name": "City Guesser",
            "url": "virtualvacation.us/guess",
            "desc": "거리 영상을 보고 촬영된 도시를 추리하는 게임입니다. 건물과 표지판, 풍경을 단서로 삼아 보세요.",
            "id": "3e3a89fad8db16",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3e3a89fad8db16.webp"
          },
          {
            "name": "My Noise",
            "url": "mynoise.net",
            "desc": "여러 배경음을 주파수별로 조절해 듣는 도구입니다. 소리의 균형을 바꿔 편안한 환경을 만들어 볼 수 있습니다.",
            "id": "e9155864079c58",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e9155864079c58.webp"
          },
          {
            "name": "Hacker Typer",
            "url": "hackertyper.com",
            "desc": "키보드를 누르면 코드가 나타나는 장난감 같은 웹 실험입니다. 영화 속 컴퓨터 화면의 분위기를 가볍게 즐겨 보세요.",
            "id": "c7f35e29125dff",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c7f35e29125dff.webp"
          },
          {
            "name": "Weave Silk",
            "url": "weavesilk.com",
            "desc": "마우스 움직임으로 대칭적인 빛의 선을 그립니다. 색과 방향을 바꾸며 추상적인 패턴을 만들어 보세요.",
            "id": "bcdc68ed5b1c8e",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/bcdc68ed5b1c8e.webp"
          },
          {
            "name": "Koalas to the Max",
            "url": "koalastothemax.com",
            "desc": "마우스를 올릴수록 원이 잘게 나뉘며 그림을 드러냅니다. 단순한 도형이 이미지가 되는 과정을 즐겨 보세요.",
            "id": "db10fb13e344dd",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/db10fb13e344dd.webp"
          },
          {
            "name": "Rainy Mood",
            "url": "rainymood.com",
            "desc": "비와 천둥 소리를 배경음으로 듣는 공간입니다. 읽거나 쉬는 시간의 소리 환경을 만들어 볼 수 있습니다.",
            "id": "575d7be7a7ed50",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/575d7be7a7ed50.webp"
          },
          {
            "name": "Patatap",
            "url": "patatap.com",
            "desc": "키보드 입력에 맞춰 소리와 도형 애니메이션이 나옵니다. 여러 키를 조합해 자신만의 리듬을 만들어 보세요.",
            "id": "61e59ba7266821",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/61e59ba7266821.webp"
          },
          {
            "name": "Scale of the Universe",
            "url": "htwins.net/scale2",
            "desc": "아주 작은 입자부터 우주의 구조까지 크기를 비교합니다. 눈금을 움직이며 규모의 차이를 체감할 수 있습니다.",
            "id": "eace8f4aca9e1a",
            "tags": [
              "작은 웹 실험",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/eace8f4aca9e1a.webp"
          }
        ]
      },
      {
        "id": "gl-quiz",
        "category": "퍼즐 · 퀴즈",
        "tagline": "한 번 더 생각하는 재미",
        "blurb": "단어와 지도, 숫자를 단서로 정답을 추리하는 퍼즐과 퀴즈를 모았습니다. 하루 한 문제를 풀거나 관심 있는 주제에 도전해 보세요.",
        "sites": [
          {
            "name": "GeoGuessr",
            "url": "geoguessr.com",
            "desc": "거리의 모습을 단서로 지도 위 위치를 추리합니다. 제공 모드와 이용 조건을 확인해 지리 감각을 시험해 보세요.",
            "id": "d7308dd5282949",
            "tags": [
              "퍼즐 · 퀴즈",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d7308dd5282949.webp"
          },
          {
            "name": "Wordle",
            "url": "nytimes.com/games/wordle",
            "desc": "글자 위치의 단서를 이용해 다섯 글자 영어 단어를 추리합니다. 하루에 하나의 퍼즐을 풀어볼 수 있습니다.",
            "id": "f412b36be14005",
            "tags": [
              "퍼즐 · 퀴즈",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f412b36be14005.webp"
          },
          {
            "name": "Sporcle",
            "url": "sporcle.com",
            "desc": "지리와 문화, 상식 등 다양한 주제의 퀴즈를 제공합니다. 관심 분야를 선택해 지식을 시험해 보세요.",
            "id": "e0b66f5f643d09",
            "tags": [
              "퍼즐 · 퀴즈",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e0b66f5f643d09.webp"
          },
          {
            "name": "Higher or Lower",
            "url": "higherorlowergame.com",
            "desc": "두 항목의 수치를 비교해 높고 낮음을 추리합니다. 주제별 게임의 기준과 규칙을 확인하고 시작해 보세요.",
            "id": "3e908616ba7f95",
            "tags": [
              "퍼즐 · 퀴즈",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3e908616ba7f95.webp"
          },
          {
            "name": "Sudoku",
            "url": "sudoku.com",
            "desc": "빈칸에 숫자를 채워 행과 열, 구역의 규칙을 맞춥니다. 원하는 난이도의 스도쿠를 풀어볼 수 있습니다.",
            "id": "ea8b6e0385849a",
            "tags": [
              "퍼즐 · 퀴즈",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ea8b6e0385849a.webp"
          },
          {
            "name": "Puzzmo",
            "url": "puzzmo.com",
            "desc": "단어와 논리를 활용한 일일 퍼즐을 제공합니다. 짧은 시간에 풀 수 있는 다양한 형식을 만나 보세요.",
            "id": "9501cfe95e6dad",
            "tags": [
              "퍼즐 · 퀴즈",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9501cfe95e6dad.webp"
          },
          {
            "name": "Seterra",
            "url": "seterra.com",
            "desc": "나라와 도시, 지형을 맞추며 지리를 익힙니다. 지역별 퀴즈를 반복하며 지도를 읽는 감각을 기를 수 있습니다.",
            "id": "7a3f5a28c2376b",
            "tags": [
              "퍼즐 · 퀴즈",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7a3f5a28c2376b.webp"
          },
          {
            "name": "Worldle",
            "url": "worldle.teuteuf.fr",
            "desc": "국가의 윤곽과 거리 힌트로 정답을 추리합니다. 하루 한 번 세계 지도를 떠올려 볼 수 있습니다.",
            "id": "f8d05a7379cdea",
            "tags": [
              "퍼즐 · 퀴즈",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f8d05a7379cdea.webp"
          },
          {
            "name": "Flagle",
            "url": "flagle.io",
            "desc": "조금씩 드러나는 국기를 보고 나라를 맞힙니다. 색과 형태를 단서로 정답을 추리해 보세요.",
            "id": "2edec1700bf481",
            "tags": [
              "퍼즐 · 퀴즈",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2edec1700bf481.webp"
          }
        ]
      },
      {
        "id": "gl-design",
        "category": "디자인 · 이미지",
        "tagline": "좋은 시선이 시작되는 곳",
        "blurb": "디자인 사례와 서체, 색과 이미지 자료를 모았습니다. 영감을 얻은 뒤 파일별 라이선스와 사용 조건을 확인해 작업에 활용하세요.",
        "sites": [
          {
            "name": "Pinterest",
            "url": "pinterest.com",
            "desc": "이미지와 아이디어를 보드로 모으고 탐색합니다. 주제별 레퍼런스와 작업 방향을 찾아보세요.",
            "id": "e220ecbe25007b",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e220ecbe25007b.webp"
          },
          {
            "name": "Coolors",
            "url": "coolors.co",
            "desc": "색상 팔레트를 만들고 조합을 비교하는 도구입니다. 원하는 색을 고정한 뒤 다른 조합을 탐색할 수 있습니다.",
            "id": "f5793bc82d5a83",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f5793bc82d5a83.webp"
          },
          {
            "name": "Mobbin",
            "url": "mobbin.com",
            "desc": "실제 제품의 화면과 사용자 흐름을 모은 디자인 자료입니다. 서비스와 패턴별로 인터페이스를 비교할 수 있습니다.",
            "id": "81c1354454b8f9",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/81c1354454b8f9.webp"
          },
          {
            "name": "Fonts In Use",
            "url": "fontsinuse.com",
            "desc": "서체가 실제 인쇄물과 화면에 쓰인 사례를 소개합니다. 폰트와 레이아웃의 조합을 살펴보세요.",
            "id": "38c3a037116013",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/38c3a037116013.webp"
          },
          {
            "name": "Remove.bg",
            "url": "remove.bg",
            "desc": "이미지에서 배경을 분리하는 도구입니다. 결과의 가장자리를 확인하고 필요한 형식으로 저장할 수 있습니다.",
            "id": "2cf8b7596ab015",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2cf8b7596ab015.webp"
          },
          {
            "name": "Canva",
            "url": "canva.com",
            "desc": "템플릿과 디자인 요소로 이미지와 문서를 만듭니다. 콘텐츠별 이용 조건과 요금제 기능을 확인할 수 있습니다.",
            "id": "0f93367c8ec168",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "browserVerifiedAt": "2026-10-20",
            "icon": "/icons/0f93367c8ec168.webp"
          },
          {
            "name": "Figma",
            "url": "figma.com",
            "desc": "화면과 그래픽을 설계하고 함께 편집하는 디자인 도구입니다. 프로토타입과 협업 기능을 살펴볼 수 있습니다.",
            "id": "acb4ffda1a668b",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/acb4ffda1a668b.webp"
          },
          {
            "name": "Color Hunt",
            "url": "colorhunt.co",
            "desc": "네 가지 색으로 구성된 팔레트를 탐색합니다. 원하는 분위기의 조합을 저장해 디자인에 참고할 수 있습니다.",
            "id": "e908b3ff0f940c",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e908b3ff0f940c.webp"
          },
          {
            "name": "DaFont",
            "url": "dafont.com",
            "desc": "여러 스타일의 폰트를 미리 보고 내려받을 수 있습니다. 서체마다 다른 상업적 사용 조건을 꼭 확인하세요.",
            "id": "a9392b7e09ab5e",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a9392b7e09ab5e.webp"
          },
          {
            "name": "LottieFiles",
            "url": "lottiefiles.com",
            "desc": "벡터 애니메이션을 검색하고 미리 보는 도구를 제공합니다. 파일별 라이선스와 제작 정보를 확인할 수 있습니다.",
            "id": "cc1b212fcd543b",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cc1b212fcd543b.webp"
          },
          {
            "name": "Awwwards",
            "url": "awwwards.com",
            "desc": "웹사이트의 디자인과 상호작용 사례를 소개합니다. 분야와 스타일별로 웹 표현의 아이디어를 찾아보세요.",
            "id": "ad345243016ea3",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ad345243016ea3.webp"
          },
          {
            "name": "Muzli",
            "url": "muz.li",
            "desc": "디자인과 제품 관련 영감과 읽을거리를 모았습니다. 최근 작업과 다양한 시각적 표현을 둘러볼 수 있습니다.",
            "id": "bcc154eb1c0ede",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/bcc154eb1c0ede.webp"
          },
          {
            "name": "Designspiration",
            "url": "designspiration.com",
            "desc": "그래픽과 타이포그래피 등 시각 자료를 수집하고 탐색합니다. 색과 주제별 레퍼런스를 찾아보세요.",
            "id": "c49a91e9dc3928",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c49a91e9dc3928.webp"
          },
          {
            "name": "Noun Project",
            "url": "thenounproject.com",
            "desc": "개념을 표현하는 아이콘과 사진을 검색합니다. 각 파일의 이용허락과 출처 표시 조건을 확인하세요.",
            "id": "1e2b93dd2079dd",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1e2b93dd2079dd.webp"
          },
          {
            "name": "Google Fonts",
            "url": "fonts.google.com",
            "desc": "웹과 디자인에 쓸 글꼴을 검색하고 비교합니다. 글꼴별 라이선스와 언어 지원을 확인하세요.",
            "id": "c8ac366a7c7f19",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c8ac366a7c7f19.webp"
          },
          {
            "name": "Adobe Color",
            "url": "color.adobe.com",
            "desc": "색상 조합을 만들고 테마를 탐색하는 도구입니다. 이미지에서 팔레트를 추출하거나 색의 관계를 비교할 수 있습니다.",
            "id": "2d797b5320d1e3",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "Happy Hues",
            "url": "happyhues.co",
            "desc": "색상 팔레트가 실제 화면에 적용된 예시를 보여줍니다. 배경과 글자, 강조색의 조합을 비교해 보세요.",
            "id": "a37f324c5653a4",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a37f324c5653a4.webp"
          },
          {
            "name": "Realtime Colors",
            "url": "realtimecolors.com",
            "desc": "색과 글꼴을 바꾸며 웹 화면의 인상을 미리 봅니다. 팔레트가 실제 레이아웃에서 어떻게 보이는지 확인하기 좋습니다.",
            "id": "8ed5d98f60a3cb",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8ed5d98f60a3cb.webp"
          },
          {
            "name": "ColorSpace",
            "url": "mycolor.space",
            "desc": "기준 색에서 팔레트와 그라데이션을 만들어 봅니다. 디자인을 시작할 때 색 조합을 탐색할 수 있습니다.",
            "id": "2cfcf80fa4c67f",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2cfcf80fa4c67f.webp"
          },
          {
            "name": "Fontshare",
            "url": "fontshare.com",
            "desc": "다양한 서체를 미리 보고 내려받을 수 있습니다. 글꼴별 사용 조건을 확인해 디자인에 활용하세요.",
            "id": "321ca2de0272bb",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/321ca2de0272bb.webp"
          },
          {
            "name": "Font Squirrel",
            "url": "fontsquirrel.com",
            "desc": "폰트와 웹폰트 관련 도구를 제공합니다. 서체의 스타일과 라이선스를 확인하며 선택할 수 있습니다.",
            "id": "826df2978d0099",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/826df2978d0099.webp"
          },
          {
            "name": "Typewolf",
            "url": "typewolf.com",
            "desc": "웹사이트의 타이포그래피와 폰트 조합을 소개합니다. 실제 화면에서 서체가 쓰인 사례를 살펴보세요.",
            "id": "6bcd82786236bb",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6bcd82786236bb.webp"
          },
          {
            "name": "Lucide",
            "url": "lucide.dev",
            "desc": "일관된 선 스타일의 아이콘과 구현 자료를 제공합니다. 필요한 아이콘을 검색하고 사용법을 확인할 수 있습니다.",
            "id": "00e2a3ce1fbf3c",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/00e2a3ce1fbf3c.webp"
          },
          {
            "name": "Heroicons",
            "url": "heroicons.com",
            "desc": "웹 인터페이스용 SVG 아이콘을 제공합니다. 굵기와 스타일을 골라 프로젝트에 적용할 수 있습니다.",
            "id": "e814c0d335fa46",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e814c0d335fa46.webp"
          },
          {
            "name": "Tabler Icons",
            "url": "tabler.io/icons",
            "desc": "여러 주제의 인터페이스 아이콘을 검색합니다. 스타일과 크기를 미리 확인해 볼 수 있습니다.",
            "id": "87f14b7615c269",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/87f14b7615c269.webp"
          },
          {
            "name": "Phosphor Icons",
            "url": "phosphoricons.com",
            "desc": "여러 굵기와 스타일의 아이콘 세트를 제공합니다. 인터페이스의 인상에 맞는 아이콘을 찾아보세요.",
            "id": "8011939be11b99",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8011939be11b99.webp"
          },
          {
            "name": "Iconify",
            "url": "iconify.design",
            "desc": "여러 아이콘 세트를 검색하고 활용하는 도구입니다. 원본 세트의 라이선스를 확인해 사용하세요.",
            "id": "b00e4b9656c462",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b00e4b9656c462.webp"
          },
          {
            "name": "unDraw",
            "url": "undraw.co",
            "desc": "디지털 서비스에 쓰기 좋은 일러스트를 제공합니다. 색상과 사용 조건을 확인해 필요한 이미지를 찾아보세요.",
            "id": "3e5b6add1075c7",
            "tags": [
              "디자인 · 이미지",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3e5b6add1075c7.webp"
          }
        ]
      },
      {
        "id": "gl-utility",
        "category": "도구 · 생산성",
        "tagline": "복잡한 일을 간단하게",
        "blurb": "이미지와 문서를 다듬고 아이디어와 할 일을 정리하는 도구입니다. 필요한 기능과 개인정보 처리 방식을 살펴본 뒤 이용해 보세요.",
        "sites": [
          {
            "name": "TinyPNG",
            "url": "tinypng.com",
            "desc": "이미지 파일의 용량을 줄이는 압축 도구입니다. 압축 결과의 화질과 크기를 확인하며 활용할 수 있습니다.",
            "id": "b31e3af4b79633",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b31e3af4b79633.webp"
          },
          {
            "name": "I Love PDF",
            "url": "ilovepdf.com",
            "desc": "PDF 병합과 분할, 변환 등 문서 도구를 제공합니다. 파일 제한과 요금제별 기능을 확인해 이용하세요.",
            "id": "2be02653095b14",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2be02653095b14.webp"
          },
          {
            "name": "123apps",
            "url": "123apps.com",
            "desc": "영상과 음원, PDF 작업을 위한 웹 도구를 모았습니다. 필요한 기능을 선택해 파일을 편집할 수 있습니다.",
            "id": "6abd4d583e0409",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6abd4d583e0409.webp"
          },
          {
            "name": "Namelix",
            "url": "namelix.com",
            "desc": "키워드에서 브랜드 이름 후보를 생성하는 도구입니다. 생성된 이름의 의미와 실제 사용 가능 여부를 별도로 확인하세요.",
            "id": "d25504ac40b91b",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d25504ac40b91b.webp"
          },
          {
            "name": "Wayback Machine",
            "url": "web.archive.org",
            "desc": "과거에 보관된 웹페이지를 날짜별로 살펴봅니다. 사이트가 시간에 따라 어떻게 변했는지 비교할 수 있습니다.",
            "id": "c76cfdb07db8ba",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c76cfdb07db8ba.webp"
          },
          {
            "name": "Speedtest",
            "url": "speedtest.net",
            "desc": "인터넷 연결의 속도와 지연 시간을 측정합니다. 측정 환경과 시간에 따른 차이를 비교해 볼 수 있습니다.",
            "id": "0ebd9864e21545",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0ebd9864e21545.webp"
          },
          {
            "name": "Photopea",
            "url": "photopea.com",
            "desc": "브라우저에서 레이어와 여러 이미지 형식을 편집합니다. 사진 보정과 간단한 그래픽 작업을 시작할 수 있습니다.",
            "id": "f485b12bdf463b",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f485b12bdf463b.webp"
          },
          {
            "name": "Cleanup.pictures",
            "url": "cleanup.pictures",
            "desc": "이미지에서 선택한 부분을 지우고 주변을 채우는 도구입니다. 결과를 확인하며 작은 요소를 정리해 볼 수 있습니다.",
            "id": "ac9074122866c1",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ac9074122866c1.webp"
          },
          {
            "name": "Trello",
            "url": "trello.com",
            "desc": "카드와 보드로 할 일과 진행 상태를 정리합니다. 개인 계획과 팀 프로젝트의 흐름을 한눈에 볼 수 있습니다.",
            "id": "2545d6f01d83ab",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2545d6f01d83ab.webp"
          },
          {
            "name": "Ezgif",
            "url": "ezgif.com",
            "desc": "GIF와 이미지, 짧은 영상을 변환하고 편집합니다. 크기와 프레임, 압축 설정을 조절할 수 있습니다.",
            "id": "495252b939b927",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/495252b939b927.webp"
          },
          {
            "name": "CloudConvert",
            "url": "cloudconvert.com",
            "desc": "여러 형식의 파일을 변환하는 도구입니다. 지원 형식과 파일 제한, 처리 조건을 확인할 수 있습니다.",
            "id": "84f73801df8046",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/84f73801df8046.webp"
          },
          {
            "name": "PDF24 Tools",
            "url": "tools.pdf24.org",
            "desc": "PDF 편집과 변환, 병합 등 여러 문서 도구를 제공합니다. 작업별 안내와 파일 처리 정보를 확인해 보세요.",
            "id": "61bb574d6017d2",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/61bb574d6017d2.webp"
          },
          {
            "name": "VirusTotal",
            "url": "virustotal.com",
            "desc": "파일과 URL에 대한 여러 보안 엔진의 분석 결과를 조회합니다. 공개 업로드의 공유 정책을 확인한 뒤 이용하세요.",
            "id": "0e56e4ac8a8c97",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0e56e4ac8a8c97.webp"
          },
          {
            "name": "Notion",
            "url": "notion.com",
            "desc": "문서와 표, 할 일을 한 작업 공간에서 관리합니다. 개인 기록부터 팀 문서까지 구조를 만들어 볼 수 있습니다.",
            "id": "880f7ff4c26138",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/880f7ff4c26138.webp"
          },
          {
            "name": "Bitly",
            "url": "bitly.com",
            "desc": "긴 링크를 짧게 만들고 링크의 사용 현황을 관리합니다. 기능별 제공 범위와 이용 조건을 확인해 보세요.",
            "id": "5a3025eaf8ca27",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5a3025eaf8ca27.webp"
          },
          {
            "name": "WeTransfer",
            "url": "wetransfer.com",
            "desc": "파일을 업로드하고 다운로드 링크로 전달합니다. 용량과 보관 기간 등 이용 조건을 확인하세요.",
            "id": "6076f0bc769bbe",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6076f0bc769bbe.webp"
          },
          {
            "name": "Draw.io",
            "url": "app.diagrams.net",
            "desc": "도형과 연결선으로 순서도와 구조도를 만듭니다. 다양한 저장 방식을 골라 문서를 정리할 수 있습니다.",
            "id": "c981c8dff87423",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c981c8dff87423.webp"
          },
          {
            "name": "Calculator.net",
            "url": "calculator.net",
            "desc": "생활과 수학, 여러 주제의 계산기를 제공합니다. 계산식의 가정과 단위를 확인하며 참고해 보세요.",
            "id": "55ab1f730c725a",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/55ab1f730c725a.webp"
          },
          {
            "name": "Omni Calculator",
            "url": "omnicalculator.com",
            "desc": "다양한 상황에 쓰는 계산기와 계산 원리를 제공합니다. 입력 단위와 전제를 확인해 결과를 읽어 보세요.",
            "id": "59a97625ee842d",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/59a97625ee842d.webp"
          },
          {
            "name": "Tally",
            "url": "tally.so",
            "desc": "문서처럼 작성하는 온라인 폼 제작 도구입니다. 설문과 신청서의 질문을 구성하고 공유할 수 있습니다.",
            "id": "fcede0d84b50d4",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/fcede0d84b50d4.webp"
          },
          {
            "name": "Squoosh",
            "url": "squoosh.app",
            "desc": "브라우저에서 이미지 형식과 압축 품질을 비교합니다. 원본과 결과를 나란히 보며 파일 크기를 조절할 수 있습니다.",
            "id": "c5be490d0ee2f2",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c5be490d0ee2f2.webp"
          },
          {
            "name": "Excalidraw",
            "url": "excalidraw.com",
            "desc": "손으로 그린 듯한 도형으로 다이어그램을 만듭니다. 아이디어와 흐름을 빠르게 정리해 공유할 수 있습니다.",
            "id": "5add68a65bc0b7",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5add68a65bc0b7.webp"
          },
          {
            "name": "tldraw",
            "url": "tldraw.com",
            "desc": "브라우저에서 메모와 도형을 배치하는 화이트보드입니다. 생각을 시각적으로 정리하고 함께 살펴볼 수 있습니다.",
            "id": "cd7a4cbaf5de2f",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cd7a4cbaf5de2f.webp"
          },
          {
            "name": "Miro",
            "url": "miro.com",
            "desc": "팀이 보드 위에서 아이디어와 작업을 정리합니다. 회의와 기획에 맞는 템플릿을 찾아볼 수 있습니다.",
            "id": "beca91bf6fb5bc",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/beca91bf6fb5bc.webp"
          },
          {
            "name": "FigJam",
            "url": "figma.com/figjam",
            "desc": "메모와 도형, 연결선으로 생각을 모으는 협업 보드입니다. 회의와 아이디어 정리에 활용할 수 있습니다.",
            "id": "1f3650f9cae47f",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1f3650f9cae47f.webp"
          },
          {
            "name": "Todoist",
            "url": "todoist.com",
            "desc": "할 일을 정리하고 일정과 우선순위를 관리합니다. 반복되는 업무와 개인 계획을 목록으로 만들 수 있습니다.",
            "id": "3da74ddb9a732e",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3da74ddb9a732e.webp"
          },
          {
            "name": "TickTick",
            "url": "ticktick.com",
            "desc": "할 일과 일정, 습관을 관리하는 도구입니다. 필요한 작업을 묶고 진행 상태를 확인할 수 있습니다.",
            "id": "7cdd44812879b4",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7cdd44812879b4.webp"
          },
          {
            "name": "Obsidian",
            "url": "obsidian.md",
            "desc": "메모를 서로 연결해 지식을 정리하는 앱을 소개합니다. 기록 방식과 확장 기능을 살펴볼 수 있습니다.",
            "id": "0154820e0d55e5",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0154820e0d55e5.webp"
          },
          {
            "name": "Joplin",
            "url": "joplinapp.org",
            "desc": "노트와 할 일을 관리하는 오픈소스 앱입니다. 동기화와 저장 방식, 이용 안내를 확인해 보세요.",
            "id": "f144db3dea58c4",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f144db3dea58c4.webp"
          },
          {
            "name": "Simplenote",
            "url": "simplenote.com",
            "desc": "간단한 텍스트 메모를 작성하고 여러 기기에서 확인합니다. 태그를 붙여 기록을 정리할 수 있습니다.",
            "id": "4b4e40c769868a",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4b4e40c769868a.webp"
          },
          {
            "name": "Standard Notes",
            "url": "standardnotes.com",
            "desc": "메모 작성과 동기화를 제공하는 서비스입니다. 보안과 저장 방식, 요금제별 기능을 살펴보세요.",
            "id": "f22513f7dbf3ab",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f22513f7dbf3ab.webp"
          },
          {
            "name": "PairDrop",
            "url": "pairdrop.net",
            "desc": "기기 사이에서 파일을 주고받는 웹 도구입니다. 접속 환경에 맞는 전송 안내를 확인해 이용할 수 있습니다.",
            "id": "0e3f7b9577c6d1",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0e3f7b9577c6d1.webp"
          },
          {
            "name": "Send Anywhere",
            "url": "send-anywhere.com",
            "desc": "기기 간 파일 전송과 공유 기능을 제공합니다. 전송 방식과 용량 조건을 확인해 보세요.",
            "id": "52a348d5954d27",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/52a348d5954d27.webp"
          },
          {
            "name": "SwissTransfer",
            "url": "swisstransfer.com",
            "desc": "파일을 업로드해 다운로드 링크로 공유합니다. 용량과 보관 기간을 확인해 이용할 수 있습니다.",
            "id": "b92c5bf9c524f5",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b92c5bf9c524f5.webp"
          },
          {
            "name": "Fast.com",
            "url": "fast.com",
            "desc": "현재 인터넷 연결의 다운로드 속도를 측정합니다. 추가 정보를 열어 지연 시간과 업로드 속도를 볼 수 있습니다.",
            "id": "0cc10144615bc7",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0cc10144615bc7.webp"
          },
          {
            "name": "Pomofocus",
            "url": "pomofocus.io",
            "desc": "집중과 휴식 시간을 나누어 쓰는 웹 타이머입니다. 작업 목록과 시간 설정으로 일의 흐름을 정리할 수 있습니다.",
            "id": "0b0b1a4cb34365",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0b0b1a4cb34365.webp"
          },
          {
            "name": "Wheel of Names",
            "url": "wheelofnames.com",
            "desc": "입력한 항목 중 하나를 회전판으로 고릅니다. 모임의 순서나 가벼운 선택을 정할 때 활용할 수 있습니다.",
            "id": "f44569b6cbe179",
            "tags": [
              "도구 · 생산성",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f44569b6cbe179.webp"
          }
        ]
      },
      {
        "id": "gl-ai",
        "category": "AI · 창작",
        "tagline": "생각의 초안을 만드는 도구",
        "blurb": "글과 이미지, 소리와 영상을 만드는 AI 도구를 모았습니다. 기능과 요금, 결과물 이용 조건을 비교하고 생성된 내용은 직접 검토하세요.",
        "sites": [
          {
            "name": "ChatGPT",
            "url": "chatgpt.com",
            "desc": "대화로 글쓰기와 아이디어 정리, 정보 탐색을 돕는 서비스입니다. 중요한 내용은 원자료와 함께 확인해 활용하세요.",
            "id": "c6240ca88eed5b",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "browserVerifiedAt": "2026-10-20"
          },
          {
            "name": "Claude",
            "url": "claude.ai",
            "desc": "대화와 문서 읽기, 글쓰기 등을 돕는 AI 서비스입니다. 자료를 검토하고 초안을 다듬는 데 활용할 수 있습니다.",
            "id": "743e483ae01f1f",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "browserVerifiedAt": "2026-10-20",
            "icon": "/icons/743e483ae01f1f.webp"
          },
          {
            "name": "Google Gemini",
            "url": "gemini.google.com",
            "desc": "텍스트와 이미지 등으로 질문하고 작업을 돕는 AI 서비스입니다. 기능과 계정별 이용 범위를 확인할 수 있습니다.",
            "id": "f8226d80a7c25a",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f8226d80a7c25a.webp"
          },
          {
            "name": "Perplexity",
            "url": "perplexity.ai",
            "desc": "질문에 대한 답변과 관련 출처를 함께 탐색합니다. 연결된 원문을 읽어 근거를 확인해 보세요.",
            "id": "cf0f4f756728eb",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cf0f4f756728eb.webp"
          },
          {
            "name": "Suno AI",
            "url": "suno.com",
            "desc": "텍스트로 설명한 아이디어에서 음악을 생성하는 도구입니다. 결과물의 이용 조건을 확인하며 실험할 수 있습니다.",
            "id": "0e68a172fd3d0a",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0e68a172fd3d0a.webp"
          },
          {
            "name": "DeepL",
            "url": "deepl.com",
            "desc": "여러 언어의 글과 문서를 번역하는 도구입니다. 문맥과 전문 용어를 원문과 비교하며 다듬을 수 있습니다.",
            "id": "1be487756ae7e1",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1be487756ae7e1.webp"
          },
          {
            "name": "Luma Dream Machine",
            "url": "lumalabs.ai/dream-machine",
            "desc": "텍스트와 이미지를 바탕으로 영상을 생성하는 도구입니다. 기능별 제한과 결과물 이용 조건을 확인하세요.",
            "id": "a57ecc3a146268",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a57ecc3a146268.webp"
          },
          {
            "name": "ElevenLabs",
            "url": "elevenlabs.io",
            "desc": "텍스트 음성 변환과 오디오 제작 도구를 제공합니다. 음성과 콘텐츠의 이용 조건을 확인하며 활용할 수 있습니다.",
            "id": "e2d214894af79b",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e2d214894af79b.webp"
          },
          {
            "name": "Runway",
            "url": "runway.com",
            "desc": "영상과 이미지 생성 및 편집 도구를 제공합니다. 제작 기능과 콘텐츠 이용 조건을 살펴보세요.",
            "id": "7727cf7e4b1f8d",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7727cf7e4b1f8d.webp"
          },
          {
            "name": "Krea AI",
            "url": "krea.ai",
            "desc": "이미지와 영상의 생성 및 편집 기능을 제공합니다. 표현 방식과 설정을 바꾸며 시각적 아이디어를 실험할 수 있습니다.",
            "id": "d25d265deba467",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d25d265deba467.webp"
          },
          {
            "name": "Vrew",
            "url": "vrew.ai",
            "desc": "음성 인식과 자막을 활용해 영상을 편집하는 도구입니다. 대본과 자막을 확인하며 편집을 이어갈 수 있습니다.",
            "id": "92a51e7537f3d0",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/92a51e7537f3d0.webp"
          },
          {
            "name": "Copy.ai",
            "url": "copy.ai",
            "desc": "마케팅과 영업 관련 글쓰기 및 업무 도구를 제공합니다. 제공 기능과 업무 흐름에 맞는 활용법을 살펴보세요.",
            "id": "a88ee06198a2aa",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a88ee06198a2aa.webp"
          },
          {
            "name": "You.com",
            "url": "you.com",
            "desc": "AI 검색과 개발용 검색 API를 제공하는 플랫폼입니다. 기능별 문서와 제공 범위를 확인할 수 있습니다.",
            "id": "ac6d8223186f78",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ac6d8223186f78.webp"
          },
          {
            "name": "Hugging Face",
            "url": "huggingface.co",
            "desc": "AI 모델과 데이터셋, 실행 예제를 공유하는 플랫폼입니다. 각 프로젝트의 문서와 라이선스를 확인할 수 있습니다.",
            "id": "ae1f45a5b387e1",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ae1f45a5b387e1.webp"
          },
          {
            "name": "Descript",
            "url": "descript.com",
            "desc": "대본과 텍스트를 활용해 오디오와 영상을 편집합니다. 녹음 내용과 화면을 함께 다듬을 수 있습니다.",
            "id": "4a30b668edbe9c",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4a30b668edbe9c.webp"
          },
          {
            "name": "Synthesia",
            "url": "synthesia.io",
            "desc": "대본과 아바타로 영상을 제작하는 도구입니다. 언어와 목소리, 콘텐츠 이용 조건을 확인할 수 있습니다.",
            "id": "cb3e7999445cbf",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cb3e7999445cbf.webp"
          },
          {
            "name": "D-ID",
            "url": "d-id.com",
            "desc": "이미지와 음성으로 말하는 아바타 영상을 만드는 도구입니다. 제작 기능과 이용 조건을 살펴보세요.",
            "id": "0537c821d997a7",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0537c821d997a7.webp"
          },
          {
            "name": "사운드로우",
            "url": "soundraw.io",
            "desc": "분위기와 길이 등을 정해 음악을 생성하는 도구입니다. 다운로드와 콘텐츠 사용의 라이선스를 확인하세요.",
            "id": "f1f7883d07f7c9",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f1f7883d07f7c9.webp"
          },
          {
            "name": "챗PDF",
            "url": "chatpdf.com",
            "desc": "PDF 내용에 관해 질문하며 자료를 읽는 도구입니다. 답변과 원문의 위치를 비교해 확인할 수 있습니다.",
            "id": "8b265567204d1b",
            "tags": [
              "AI · 창작",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8b265567204d1b.webp"
          }
        ]
      },
      {
        "id": "gl-builder",
        "category": "코딩 · 만들기",
        "tagline": "아이디어를 작동하게",
        "blurb": "기술 문서와 연습 과제, 개발 도구를 함께 모았습니다. 읽고 실험하고 구현하는 과정을 오가며 자신만의 프로젝트를 만들어 보세요.",
        "sites": [
          {
            "name": "GitHub",
            "url": "github.com",
            "desc": "코드를 저장하고 공개 프로젝트에 협업하는 플랫폼입니다. 관심 있는 소프트웨어의 문서와 변경 과정을 살펴보세요.",
            "id": "3aeb002460381c",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3aeb002460381c.webp"
          },
          {
            "name": "Slack",
            "url": "slack.com",
            "desc": "채널과 대화로 팀의 소통을 정리하는 도구입니다. 업무에 맞는 연동과 검색 기능을 확인할 수 있습니다.",
            "id": "03caecac84f7d4",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/03caecac84f7d4.webp"
          },
          {
            "name": "Vercel",
            "url": "vercel.com",
            "desc": "웹 프로젝트를 배포하고 운영하는 플랫폼입니다. 프레임워크별 안내와 요금제의 사용 한도를 확인하세요.",
            "id": "9baad27eab20fb",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9baad27eab20fb.webp"
          },
          {
            "name": "Product Hunt",
            "url": "producthunt.com",
            "desc": "새로운 디지털 제품과 서비스를 소개하는 공간입니다. 제품 설명과 이용자 의견을 함께 살펴보세요.",
            "id": "94a534379572a8",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/94a534379572a8.webp"
          },
          {
            "name": "Hacker News",
            "url": "news.ycombinator.com",
            "desc": "기술과 창업 관련 링크와 토론이 모이는 커뮤니티입니다. 원문과 다양한 관점을 함께 읽을 수 있습니다.",
            "id": "7caff9e64d565c",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7caff9e64d565c.webp"
          },
          {
            "name": "MDN Web Docs",
            "url": "developer.mozilla.org",
            "desc": "웹 기술의 개념과 API, 사용 예제를 설명합니다. 브라우저 호환성 정보와 함께 구현을 참고할 수 있습니다.",
            "id": "adaafd8d683312",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/adaafd8d683312.webp"
          },
          {
            "name": "Roadmap.sh",
            "url": "roadmap.sh",
            "desc": "개발 분야별 학습 주제와 경로를 정리합니다. 현재 수준에서 이어 배울 개념을 찾아보세요.",
            "id": "6089ea47c68524",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6089ea47c68524.webp"
          },
          {
            "name": "DevDocs",
            "url": "devdocs.io",
            "desc": "여러 개발 도구와 언어의 문서를 모아 검색합니다. 사용할 문서 버전을 선택해 필요한 API를 찾을 수 있습니다.",
            "id": "5616b8277a6655",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5616b8277a6655.webp"
          },
          {
            "name": "AWS",
            "url": "aws.amazon.com",
            "desc": "클라우드 컴퓨팅과 저장소, 개발 서비스를 제공합니다. 제품별 문서와 사용 요금을 확인할 수 있습니다.",
            "id": "4741979b08a615",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4741979b08a615.webp"
          },
          {
            "name": "Firebase",
            "url": "firebase.google.com",
            "desc": "앱과 웹 개발에 필요한 데이터와 인증 등의 도구를 제공합니다. 기능별 문서와 이용 조건을 살펴보세요.",
            "id": "6b218b009a97f7",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6b218b009a97f7.webp"
          },
          {
            "name": "Supabase",
            "url": "supabase.com",
            "desc": "데이터베이스와 인증 등 개발 기반 서비스를 제공합니다. 프로젝트 구성과 사용 범위를 문서에서 확인할 수 있습니다.",
            "id": "fc590e5b569b65",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/fc590e5b569b65.webp"
          },
          {
            "name": "Netlify",
            "url": "netlify.com",
            "desc": "웹사이트의 빌드와 배포, 운영 도구를 제공합니다. 프로젝트에 맞는 사용 방법과 요금제를 확인하세요.",
            "id": "28ad9919fb9239",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/28ad9919fb9239.webp"
          },
          {
            "name": "Heroku",
            "url": "heroku.com",
            "desc": "코드를 배포하고 실행 환경을 운영하는 플랫폼입니다. 지원 언어와 서비스별 이용 조건을 살펴볼 수 있습니다.",
            "id": "70ea4180040773",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/70ea4180040773.webp"
          },
          {
            "name": "Postman",
            "url": "postman.com",
            "desc": "API 요청을 만들고 응답과 문서를 관리하는 도구입니다. 협업과 테스트의 흐름을 구성할 수 있습니다.",
            "id": "668fe961a8207b",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/668fe961a8207b.webp"
          },
          {
            "name": "CSS-Tricks",
            "url": "css-tricks.com",
            "desc": "CSS와 웹 인터페이스 구현의 설명과 예제를 읽습니다. 글의 작성 시점과 브라우저 지원을 함께 확인하세요.",
            "id": "879aed84dc6721",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/879aed84dc6721.webp"
          },
          {
            "name": "Codecademy",
            "url": "codecademy.com",
            "desc": "프로그래밍을 실습하며 배우는 온라인 교육 플랫폼입니다. 언어와 목표에 맞는 과정을 찾아볼 수 있습니다.",
            "id": "e0dcfb9c7c8e5a",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e0dcfb9c7c8e5a.webp"
          },
          {
            "name": "Stack Exchange",
            "url": "stackexchange.com",
            "desc": "주제별 질문과 답변 커뮤니티를 연결합니다. 관심 분야의 토론과 답변 근거를 살펴볼 수 있습니다.",
            "id": "eb3a3a64672f39",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/eb3a3a64672f39.webp"
          },
          {
            "name": "Cursor",
            "url": "cursor.com",
            "desc": "코드 작성과 이해를 돕는 AI 개발 도구를 소개합니다. 기능과 사용 환경, 이용 조건을 확인할 수 있습니다.",
            "id": "7a4dc0a14dd972",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7a4dc0a14dd972.webp"
          },
          {
            "name": "v0",
            "url": "v0.app",
            "desc": "설명과 참조 자료에서 웹 인터페이스와 코드를 만드는 도구입니다. 생성 결과를 검토하고 편집하며 개발할 수 있습니다.",
            "id": "75b136319665e8",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/75b136319665e8.webp"
          },
          {
            "name": "Bolt",
            "url": "bolt.new",
            "desc": "브라우저에서 AI와 함께 웹 프로젝트를 만드는 도구입니다. 실행 결과와 코드를 확인하며 작업을 이어갈 수 있습니다.",
            "id": "6b78a481bff4ea",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6b78a481bff4ea.webp"
          },
          {
            "name": "freeCodeCamp",
            "url": "freecodecamp.org",
            "desc": "프로그래밍 학습과 실습, 기술 글을 제공합니다. 단계별 과정을 따라 프로젝트를 만들어 볼 수 있습니다.",
            "id": "3bcc7ddeeba469",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3bcc7ddeeba469.webp"
          },
          {
            "name": "The Odin Project",
            "url": "theodinproject.com",
            "desc": "웹 개발을 프로젝트로 배우는 공개 커리큘럼입니다. 기초부터 학습 자료와 과제를 따라갈 수 있습니다.",
            "id": "cf920c7eb51382",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cf920c7eb51382.webp"
          },
          {
            "name": "Exercism",
            "url": "exercism.org",
            "desc": "여러 프로그래밍 언어의 연습문제를 제공합니다. 코드를 작성하고 풀이를 개선하며 배우는 공간입니다.",
            "id": "1760a197ab823f",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1760a197ab823f.webp"
          },
          {
            "name": "Frontend Mentor",
            "url": "frontendmentor.io",
            "desc": "제공된 디자인을 코드로 구현하는 연습 과제를 제공합니다. 완성한 작업을 공유하고 피드백을 받을 수 있습니다.",
            "id": "c657829b81d1fb",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c657829b81d1fb.webp"
          },
          {
            "name": "JavaScript.info",
            "url": "javascript.info",
            "desc": "자바스크립트의 기본 개념과 브라우저 동작을 설명합니다. 예제와 과제로 이해를 확인할 수 있습니다.",
            "id": "1dc42b22ef19af",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1dc42b22ef19af.webp"
          },
          {
            "name": "web.dev",
            "url": "web.dev",
            "desc": "웹 성능과 접근성, 웹 개발 주제를 다룹니다. 설명과 예제로 웹사이트를 개선하는 방법을 배워 보세요.",
            "id": "859bc83c065923",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/859bc83c065923.webp"
          },
          {
            "name": "Can I Use",
            "url": "caniuse.com",
            "desc": "웹 기능의 브라우저 지원 현황을 비교합니다. 기능을 적용하기 전 사용자 환경을 점검할 때 유용합니다.",
            "id": "4d59338f48ef5d",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4d59338f48ef5d.webp"
          },
          {
            "name": "Regex101",
            "url": "regex101.com",
            "desc": "정규식을 입력하고 문자열 매칭 결과를 확인합니다. 패턴 설명과 디버깅 도구로 표현식을 다듬을 수 있습니다.",
            "id": "a9b6b0452d4156",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a9b6b0452d4156.webp"
          },
          {
            "name": "RegExr",
            "url": "regexr.com",
            "desc": "정규식 패턴을 실험하고 문법을 찾아보는 도구입니다. 예시 문자열을 바꿔 동작을 확인할 수 있습니다.",
            "id": "00aad3016426c6",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/00aad3016426c6.webp"
          },
          {
            "name": "JSON Editor Online",
            "url": "jsoneditoronline.org",
            "desc": "JSON 데이터를 편집하고 구조를 살펴봅니다. 문법 오류를 확인하고 트리 형태로 탐색할 수 있습니다.",
            "id": "f9e3b53d4d0867",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f9e3b53d4d0867.webp"
          },
          {
            "name": "Hoppscotch",
            "url": "hoppscotch.io",
            "desc": "브라우저에서 API 요청과 응답을 살펴보는 도구입니다. 엔드포인트와 요청 값을 바꿔 테스트할 수 있습니다.",
            "id": "784ab9b726918b",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/784ab9b726918b.webp"
          },
          {
            "name": "HTTP Cats",
            "url": "http.cat",
            "desc": "HTTP 상태 코드를 고양이 사진과 함께 보여줍니다. 익숙하지 않은 코드 번호를 가볍게 기억해 보세요.",
            "id": "9215fd75c9394b",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9215fd75c9394b.webp"
          },
          {
            "name": "GitLab",
            "url": "gitlab.com",
            "desc": "코드 저장소와 개발 협업, 배포 흐름을 관리합니다. 프로젝트와 공개 코드를 탐색할 수 있습니다.",
            "id": "20a83b42cd540c",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/20a83b42cd540c.webp"
          },
          {
            "name": "Docker",
            "url": "docker.com",
            "desc": "애플리케이션 실행 환경을 컨테이너로 다루는 도구를 소개합니다. 사용 안내와 학습 자료를 확인할 수 있습니다.",
            "id": "26b9cccfe247fd",
            "tags": [
              "코딩 · 만들기",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/26b9cccfe247fd.webp"
          }
        ]
      },
      {
        "id": "gl-data",
        "category": "지식 · 데이터",
        "tagline": "숫자와 기록으로 보는 세계",
        "blurb": "세계의 변화와 사람들의 움직임을 자료로 살펴보는 목록입니다. 그래프와 수치의 산출 방식과 출처를 확인하며 탐구해 보세요.",
        "sites": [
          {
            "name": "Google Trends",
            "url": "trends.google.com",
            "desc": "검색어의 상대적인 관심도와 지역별 추이를 비교합니다. 기간과 검색 조건을 맞춰 결과를 읽어 보세요.",
            "id": "8381e3b19f36fe",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8381e3b19f36fe.webp"
          },
          {
            "name": "EarthCam",
            "url": "earthcam.com",
            "desc": "여러 도시와 명소의 라이브 카메라를 모았습니다. 시간대에 따라 달라지는 현지 풍경을 구경해 보세요.",
            "id": "26f574b6cf00b6",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/26f574b6cf00b6.webp"
          },
          {
            "name": "Internet Live Stats",
            "url": "internetlivestats.com",
            "desc": "인터넷 관련 수치의 추정치와 통계 설명을 제공합니다. 산출 방식과 원자료의 시점을 함께 확인하세요.",
            "id": "bb50e5aab6e640",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/bb50e5aab6e640.webp"
          },
          {
            "name": "TED",
            "url": "ted.com",
            "desc": "과학과 예술, 사회 등 여러 분야의 강연을 제공합니다. 주제와 자막 언어를 골라 새로운 생각을 만나 보세요.",
            "id": "8bf423abeb4754",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8bf423abeb4754.webp"
          },
          {
            "name": "Our World in Data",
            "url": "ourworldindata.org",
            "desc": "세계의 변화와 문제를 데이터와 해설로 설명합니다. 그래프의 출처와 방법론을 함께 확인할 수 있습니다.",
            "id": "7bbeb523fc1099",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7bbeb523fc1099.webp"
          },
          {
            "name": "Statista",
            "url": "statista.com",
            "desc": "산업과 사회에 관한 통계와 보고서를 검색합니다. 각 자료의 원출처와 열람 조건을 확인하세요.",
            "id": "f52185718cb8dd",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f52185718cb8dd.webp"
          },
          {
            "name": "Gapminder",
            "url": "gapminder.org",
            "desc": "국가와 시대에 따른 통계 변화를 움직이는 차트로 보여줍니다. 여러 지표를 비교하며 세계의 변화를 살펴보세요.",
            "id": "69ef1cb8c396a4",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/69ef1cb8c396a4.webp"
          },
          {
            "name": "Time.is",
            "url": "time.is",
            "desc": "현재 시각과 여러 지역의 시간대를 확인합니다. 기기의 시간 차이와 도시별 시각을 비교할 수 있습니다.",
            "id": "bc7f7d7f5d77bb",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/bc7f7d7f5d77bb.webp"
          },
          {
            "name": "Wolfram Alpha",
            "url": "wolframalpha.com",
            "desc": "수식과 다양한 분야의 질문을 계산해 답하는 지식 도구입니다. 입력 조건과 계산 결과의 의미를 확인할 수 있습니다.",
            "id": "9dcbc6dc415d44",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9dcbc6dc415d44.webp"
          },
          {
            "name": "Snopes",
            "url": "snopes.com",
            "desc": "온라인 소문과 주장에 관한 사실 확인 기사를 제공합니다. 검증에 사용한 근거와 판정 내용을 읽어 보세요.",
            "id": "8818ba9074a11b",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8818ba9074a11b.webp"
          },
          {
            "name": "Worldometer",
            "url": "worldometers.info",
            "desc": "인구와 여러 세계 지표의 추정치와 통계를 보여줍니다. 수치의 출처와 계산 방법을 확인하며 읽을 수 있습니다.",
            "id": "ce5f017be34a06",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ce5f017be34a06.webp"
          },
          {
            "name": "Google Earth",
            "url": "earth.google.com",
            "desc": "위성 이미지와 입체 지형으로 지구를 탐험합니다. 장소를 검색하고 도시와 자연의 모습을 살펴보세요.",
            "id": "d812fd841fc718",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d812fd841fc718.webp"
          },
          {
            "name": "Numbeo",
            "url": "numbeo.com",
            "desc": "사용자가 기여한 도시별 생활비 등의 데이터를 비교합니다. 표본과 집계 조건을 확인해 참고 자료로 이용하세요.",
            "id": "c9825d2abd6518",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c9825d2abd6518.webp"
          },
          {
            "name": "Wikipedia",
            "url": "wikipedia.org",
            "desc": "여러 언어로 작성된 백과사전의 항목을 읽습니다. 문서의 출처와 편집 이력을 함께 살펴볼 수 있습니다.",
            "id": "da6b3876018343",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/da6b3876018343.webp"
          },
          {
            "name": "World Bank Data",
            "url": "data.worldbank.org",
            "desc": "세계은행의 국가별 개발 지표를 조회합니다. 지표의 정의와 출처, 기간을 확인하며 비교할 수 있습니다.",
            "id": "94ac7c30457777",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/94ac7c30457777.webp"
          },
          {
            "name": "OECD Data Explorer",
            "url": "data-explorer.oecd.org",
            "desc": "OECD의 경제와 사회 통계를 탐색합니다. 국가와 기간, 지표를 골라 데이터를 비교할 수 있습니다.",
            "id": "0ee98b673112f7",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0ee98b673112f7.webp"
          },
          {
            "name": "UN Data",
            "url": "data.un.org",
            "desc": "유엔 기관의 통계 자료를 검색합니다. 여러 나라의 인구와 사회, 경제 지표를 찾아볼 수 있습니다.",
            "id": "5d65045d84a2ed",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5d65045d84a2ed.webp"
          },
          {
            "name": "UNESCO",
            "url": "unesco.org",
            "desc": "교육과 과학, 문화 분야의 국제 활동과 자료를 제공합니다. 보고서와 세계유산 관련 정보를 살펴보세요.",
            "id": "492581655f2e49",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/492581655f2e49.webp"
          },
          {
            "name": "WHO Data",
            "url": "data.who.int",
            "desc": "세계보건기구의 보건 통계와 지표를 탐색합니다. 출처와 정의를 확인하며 국가별 데이터를 살펴보세요.",
            "id": "0117372482b9d2",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0117372482b9d2.webp"
          },
          {
            "name": "Eurostat",
            "url": "ec.europa.eu/eurostat",
            "desc": "유럽의 경제와 사회 통계를 제공합니다. 주제별 지표와 시각화 자료를 탐색할 수 있습니다.",
            "id": "6a7c4faa261152",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6a7c4faa261152.webp"
          },
          {
            "name": "Datawrapper",
            "url": "datawrapper.de",
            "desc": "데이터를 차트와 지도, 표로 시각화하는 도구입니다. 내용을 읽기 쉽게 전달할 표현 방식을 실험할 수 있습니다.",
            "id": "90a97ce7d23c11",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/90a97ce7d23c11.webp"
          },
          {
            "name": "Flourish",
            "url": "flourish.studio",
            "desc": "여러 템플릿으로 데이터 시각화를 만드는 도구입니다. 그래프와 지도에 데이터를 넣어 탐색해 보세요.",
            "id": "5a7c5d822f9b7a",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5a7c5d822f9b7a.webp"
          },
          {
            "name": "Information is Beautiful",
            "url": "informationisbeautiful.net",
            "desc": "숫자와 정보를 시각적으로 풀어낸 프로젝트를 소개합니다. 데이터가 이야기로 정리되는 방식을 살펴보세요.",
            "id": "ce2f3c1ec7da9b",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ce2f3c1ec7da9b.webp"
          },
          {
            "name": "Data Is Plural",
            "url": "data-is-plural.com",
            "desc": "다양한 주제의 공개 데이터셋을 소개하는 뉴스레터 아카이브입니다. 조사와 프로젝트에 쓸 자료를 발견할 수 있습니다.",
            "id": "52867fdaa99153",
            "tags": [
              "지식 · 데이터",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/52867fdaa99153.webp"
          }
        ]
      },
      {
        "id": "gl-science",
        "category": "과학 · 우주",
        "tagline": "화면 너머의 거대한 세계",
        "blurb": "우주와 자연을 다루는 연구기관, 실험과 시각화 도구를 모았습니다. 직접 조작하고 관찰하면서 과학의 규모와 원리를 느껴 보세요.",
        "sites": [
          {
            "name": "NASA",
            "url": "nasa.gov",
            "desc": "미국 항공우주국의 탐사 소식과 우주 사진을 만납니다. 임무와 주제별로 자료를 탐색할 수 있습니다.",
            "id": "a68202a9e3005a",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a68202a9e3005a.webp"
          },
          {
            "name": "NASA Science",
            "url": "science.nasa.gov",
            "desc": "태양계와 지구, 우주의 연구를 사진과 해설로 소개합니다. 탐사선과 천체의 이야기를 따라가 보세요.",
            "id": "341d47c7ee34dc",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/341d47c7ee34dc.webp"
          },
          {
            "name": "NASA Eyes",
            "url": "eyes.nasa.gov",
            "desc": "태양계와 우주 임무를 입체 화면에서 탐험합니다. 천체와 탐사선의 위치를 시각적으로 살펴볼 수 있습니다.",
            "id": "824224ef72e770",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/824224ef72e770.webp"
          },
          {
            "name": "NASA Astronomy Picture of the Day",
            "url": "apod.nasa.gov",
            "desc": "날마다 소개되는 천문 사진과 전문가의 해설을 읽습니다. 지난 날짜의 이미지도 아카이브에서 찾아볼 수 있습니다.",
            "id": "f8c94dc7082f59",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f8c94dc7082f59.webp"
          },
          {
            "name": "ESA",
            "url": "esa.int",
            "desc": "유럽우주국의 임무와 연구, 우주 사진을 소개합니다. 지구 관측부터 심우주 탐사까지 살펴보세요.",
            "id": "c54c33ffb2636a",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c54c33ffb2636a.webp"
          },
          {
            "name": "ESA Hubble",
            "url": "esahubble.org",
            "desc": "허블 우주망원경의 사진과 과학 이야기를 공개합니다. 고해상도 이미지와 천체 해설을 함께 볼 수 있습니다.",
            "id": "a378c7ec43c987",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a378c7ec43c987.webp"
          },
          {
            "name": "Webb Telescope",
            "url": "webbtelescope.org",
            "desc": "제임스 웹 우주망원경의 관측 이미지와 설명을 제공합니다. 적외선으로 드러난 우주의 모습을 탐험해 보세요.",
            "id": "21d3074c2dde58",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/21d3074c2dde58.webp"
          },
          {
            "name": "ESO",
            "url": "eso.org",
            "desc": "유럽남방천문대의 우주 사진과 연구 소식을 제공합니다. 지상 망원경이 관측한 천체를 살펴볼 수 있습니다.",
            "id": "786f5e079dace8",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/786f5e079dace8.webp"
          },
          {
            "name": "CERN",
            "url": "home.cern",
            "desc": "입자물리 연구와 가속기, 연구소의 소식을 소개합니다. 물질의 기본 구조를 탐구하는 과정을 읽어 보세요.",
            "id": "2b6ec26c57dbf4",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2b6ec26c57dbf4.webp"
          },
          {
            "name": "PhET",
            "url": "phet.colorado.edu",
            "desc": "물리와 화학, 수학 개념을 조작형 시뮬레이션으로 배웁니다. 값을 바꿔 결과가 어떻게 달라지는지 실험할 수 있습니다.",
            "id": "0cc89cfad044f8",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0cc89cfad044f8.webp"
          },
          {
            "name": "Exploratorium",
            "url": "exploratorium.edu",
            "desc": "과학과 예술을 연결하는 체험 콘텐츠를 제공합니다. 일상 재료로 시도할 수 있는 실험도 찾아보세요.",
            "id": "c8191e63f3c452",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c8191e63f3c452.webp"
          },
          {
            "name": "Science Museum",
            "url": "sciencemuseum.org.uk",
            "desc": "과학기술의 역사와 전시, 소장품 이야기를 소개합니다. 발명과 발견이 생활을 바꾼 과정을 읽을 수 있습니다.",
            "id": "26e2624e548145",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/26e2624e548145.webp"
          },
          {
            "name": "Natural History Museum",
            "url": "nhm.ac.uk",
            "desc": "런던 자연사박물관의 생물과 지구과학 자료를 읽습니다. 공룡부터 작은 곤충까지 다양한 주제를 다룹니다.",
            "id": "f1c98646f16bbb",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f1c98646f16bbb.webp"
          },
          {
            "name": "NOAA",
            "url": "noaa.gov",
            "desc": "해양과 대기, 기후 연구에 관한 공식 자료를 제공합니다. 관측과 연구 소식을 함께 살펴볼 수 있습니다.",
            "id": "006d7c8e77140e",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/006d7c8e77140e.webp"
          },
          {
            "name": "USGS",
            "url": "www.usgs.gov",
            "desc": "지질과 지진, 물과 생태계에 관한 관측 자료를 제공합니다. 지도와 데이터를 통해 지구 환경을 탐구해 보세요.",
            "id": "1d18418d41360b",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "USGS Earthquake Map",
            "url": "earthquake.usgs.gov",
            "desc": "최근 지진의 위치와 규모를 지도에서 확인합니다. 관측 시점과 사건별 상세 정보를 함께 살펴보세요.",
            "id": "3d2644e269c53c",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3d2644e269c53c.webp"
          },
          {
            "name": "National Geographic",
            "url": "nationalgeographic.com",
            "desc": "자연과 과학, 역사와 문화에 관한 사진과 기사를 제공합니다. 일부 콘텐츠는 구독이 필요합니다.",
            "id": "40126b6e630ae2",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/40126b6e630ae2.webp"
          },
          {
            "name": "Scientific American",
            "url": "scientificamerican.com",
            "desc": "과학 연구와 기술, 환경에 관한 해설 기사를 읽습니다. 연구 결과의 배경과 쟁점을 살펴볼 수 있습니다.",
            "id": "710b61bee0ff04",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/710b61bee0ff04.webp"
          },
          {
            "name": "Science News",
            "url": "sciencenews.org",
            "desc": "과학 분야의 연구 소식을 기사와 해설로 소개합니다. 관심 주제의 새로운 발견을 따라가 보세요.",
            "id": "a5047e4357e698",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a5047e4357e698.webp"
          },
          {
            "name": "Quanta Magazine",
            "url": "quantamagazine.org",
            "desc": "수학과 물리학, 생물학의 연구를 깊이 있는 글과 그림으로 풀이합니다. 질문이 연구로 이어지는 과정을 읽기 좋습니다.",
            "id": "4d8fdab6c14468",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4d8fdab6c14468.webp"
          },
          {
            "name": "Nautilus",
            "url": "nautil.us",
            "desc": "과학과 철학, 문화를 연결하는 긴 글을 읽습니다. 익숙한 주제를 다른 시각에서 바라보게 하는 이야기를 만날 수 있습니다.",
            "id": "c726d0edc78fe9",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c726d0edc78fe9.webp"
          },
          {
            "name": "The Conversation",
            "url": "theconversation.com",
            "desc": "연구자와 전문가가 자신의 분야를 설명하는 기사를 제공합니다. 글의 저자와 근거 자료를 확인하며 읽어 보세요.",
            "id": "97b68392168642",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/97b68392168642.webp"
          },
          {
            "name": "Zooniverse",
            "url": "zooniverse.org",
            "desc": "이미지 분류 등 연구 과정에 참여하는 시민과학 플랫폼입니다. 관심 있는 프로젝트의 안내를 읽고 기여할 수 있습니다.",
            "id": "ad8b51da77d7eb",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ad8b51da77d7eb.webp"
          },
          {
            "name": "100,000 Stars",
            "url": "stars.chromeexperiments.com",
            "desc": "태양 주변의 별을 입체 공간에서 둘러보는 실험입니다. 별 사이의 거리와 위치를 시각적으로 느껴 보세요.",
            "id": "4dd4d3f7cf3174",
            "tags": [
              "과학 · 우주",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4dd4d3f7cf3174.webp"
          }
        ]
      },
      {
        "id": "gl-art",
        "category": "미술 · 아카이브",
        "tagline": "작품 앞에 오래 머무르기",
        "blurb": "미술관과 문화기관이 공개한 작품과 기록을 모았습니다. 작가, 시대, 재료를 따라 이동하며 나만의 작은 전시를 만들어 보세요.",
        "sites": [
          {
            "name": "Google Arts & Culture",
            "url": "artsandculture.google.com",
            "desc": "세계 문화기관의 작품과 전시 이야기를 둘러봅니다. 고해상도 이미지와 온라인 전시를 통해 문화유산을 탐험할 수 있습니다.",
            "id": "7642068eebecac",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7642068eebecac.webp"
          },
          {
            "name": "Tate",
            "url": "tate.org.uk",
            "desc": "영국과 국제 현대미술의 작품 및 작가 정보를 제공합니다. 미술 용어 해설도 작품 이해에 도움이 됩니다.",
            "id": "6cde59cde67762",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6cde59cde67762.webp"
          },
          {
            "name": "Rijksmuseum",
            "url": "rijksmuseum.nl",
            "desc": "네덜란드 국립미술관의 소장품을 온라인으로 살펴봅니다. 회화와 역사 자료의 세부를 확대해 볼 수 있습니다.",
            "id": "af2062ad32803a",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/af2062ad32803a.webp"
          },
          {
            "name": "Van Gogh Museum",
            "url": "vangoghmuseum.nl",
            "desc": "반 고흐의 작품과 생애, 편지에 관한 자료를 읽습니다. 작가의 작업 과정을 작품과 함께 살펴보세요.",
            "id": "fd5a450b82fd30",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/fd5a450b82fd30.webp"
          },
          {
            "name": "Louvre",
            "url": "louvre.fr",
            "desc": "루브르 박물관의 전시와 소장품, 방문 정보를 제공합니다. 작품의 배경과 박물관의 이야기를 읽을 수 있습니다.",
            "id": "773d1ea1ad1e04",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/773d1ea1ad1e04.webp"
          },
          {
            "name": "National Gallery",
            "url": "nationalgallery.org.uk",
            "desc": "런던 내셔널 갤러리의 회화와 작가 정보를 제공합니다. 작품 해설과 온라인 콘텐츠를 살펴볼 수 있습니다.",
            "id": "a7767490f45cb7",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a7767490f45cb7.webp"
          },
          {
            "name": "Victoria and Albert Museum",
            "url": "vam.ac.uk",
            "desc": "디자인과 공예, 패션 분야의 작품과 이야기를 소개합니다. 일상 사물의 디자인 역사를 발견할 수 있습니다.",
            "id": "699f222933eeb3",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/699f222933eeb3.webp"
          },
          {
            "name": "Getty",
            "url": "getty.edu",
            "desc": "미술 작품과 보존 연구, 미술사 자료를 제공합니다. 소장품과 연구 콘텐츠를 함께 읽어 보세요.",
            "id": "08992169f9f1e2",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/08992169f9f1e2.webp"
          },
          {
            "name": "Guggenheim",
            "url": "guggenheim.org",
            "desc": "구겐하임 미술관의 현대미술 전시와 소장품을 소개합니다. 작가와 작품의 연결을 따라 탐색할 수 있습니다.",
            "id": "2cc14979bf95e4",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2cc14979bf95e4.webp"
          },
          {
            "name": "Whitney Museum",
            "url": "whitney.org",
            "desc": "미국 현대미술의 작가와 작품, 전시를 소개합니다. 소장품과 공개 프로그램을 살펴보세요.",
            "id": "55f22a3239a874",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/55f22a3239a874.webp"
          },
          {
            "name": "Cooper Hewitt",
            "url": "cooperhewitt.org",
            "desc": "디자인 박물관의 소장품과 전시, 교육 콘텐츠를 제공합니다. 생활과 기술을 바꾼 디자인을 찾아볼 수 있습니다.",
            "id": "f4185063bdbdf5",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f4185063bdbdf5.webp"
          },
          {
            "name": "Library of Congress",
            "url": "loc.gov",
            "desc": "미국 의회도서관의 지도와 사진, 문헌 컬렉션을 검색합니다. 역사 자료를 원본 이미지와 함께 살펴보세요.",
            "id": "fef69d841fc465",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/fef69d841fc465.webp"
          },
          {
            "name": "Digital Public Library of America",
            "url": "dp.la",
            "desc": "미국 도서관과 박물관의 디지털 자료를 함께 검색합니다. 사진과 문서, 주제별 전시를 찾아볼 수 있습니다.",
            "id": "9cfb6813aadb5d",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9cfb6813aadb5d.webp"
          },
          {
            "name": "Wikimedia Commons",
            "url": "commons.wikimedia.org",
            "desc": "사진과 도표, 음원 등 공개 미디어 자료를 검색합니다. 파일별 출처와 이용허락 조건을 확인하세요.",
            "id": "2e8fe4a2c0cad2",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2e8fe4a2c0cad2.webp"
          },
          {
            "name": "The Public Domain Review",
            "url": "publicdomainreview.org",
            "desc": "공공 영역의 오래된 작품과 자료를 해설과 함께 소개합니다. 잊힌 이미지와 흥미로운 기록을 발견하기 좋습니다.",
            "id": "4e57d5b6802b01",
            "tags": [
              "미술 · 아카이브",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4e57d5b6802b01.webp"
          }
        ]
      },
      {
        "id": "gl-learn",
        "category": "학습 · 언어",
        "tagline": "새로운 것을 배울 시간",
        "blurb": "공개 강의와 언어 학습, 개념 설명을 모았습니다. 짧게 익히고 직접 풀어 보며 관심을 배움으로 연결해 보세요.",
        "sites": [
          {
            "name": "Khan Academy",
            "url": "khanacademy.org",
            "desc": "수학과 과학 등 여러 과목의 설명과 연습문제를 제공합니다. 학습 단계를 나누어 공부할 수 있습니다.",
            "id": "8ff7b738443111",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "restricted",
            "verifiedAt": "2026-10-20",
            "browserVerifiedAt": "2026-10-20",
            "icon": "/icons/8ff7b738443111.webp"
          },
          {
            "name": "Coursera",
            "url": "coursera.org",
            "desc": "대학과 기업의 온라인 강좌를 탐색합니다. 강좌별 수강 방식과 비용, 인증서 조건을 확인해 보세요.",
            "id": "6a4f054d7c9f61",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6a4f054d7c9f61.webp"
          },
          {
            "name": "edX",
            "url": "edx.org",
            "desc": "대학과 기관의 온라인 강의를 분야별로 찾아봅니다. 무료 청강과 유료 과정의 조건은 강좌마다 다릅니다.",
            "id": "dc81de607d05e3",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/dc81de607d05e3.webp"
          },
          {
            "name": "MIT OpenCourseWare",
            "url": "ocw.mit.edu",
            "desc": "MIT 수업의 강의 자료와 영상, 과제를 공개합니다. 관심 전공의 실제 대학 수업을 따라가 볼 수 있습니다.",
            "id": "a0d6a2953f1932",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a0d6a2953f1932.webp"
          },
          {
            "name": "Alison",
            "url": "alison.com",
            "desc": "직무와 생활 지식을 배우는 온라인 과정을 제공합니다. 수강과 인증서 발급 조건은 과정에서 확인하세요.",
            "id": "7fa4f331e091f5",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7fa4f331e091f5.webp"
          },
          {
            "name": "Saylor University",
            "url": "saylor.org",
            "desc": "대학 수준의 온라인 학습 과정과 교육 안내를 제공합니다. 과정별 학습 내용과 이수 조건을 살펴보세요.",
            "id": "167e33397f6d23",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/167e33397f6d23.webp"
          },
          {
            "name": "OpenStax",
            "url": "openstax.org",
            "desc": "여러 교과의 공개 교재를 읽고 내려받을 수 있습니다. 과목별 목차와 연습문제를 활용해 보세요.",
            "id": "2689a466fb48d0",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2689a466fb48d0.webp"
          },
          {
            "name": "LibreTexts",
            "url": "libretexts.org",
            "desc": "다양한 분야의 공개 교육 자료와 교재를 모았습니다. 주제별 설명을 찾아 참고하기 좋습니다.",
            "id": "c1439378f7eb1a",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c1439378f7eb1a.webp"
          },
          {
            "name": "Brilliant",
            "url": "brilliant.org",
            "desc": "수학과 과학, 컴퓨터 개념을 문제를 풀며 배웁니다. 인터랙티브한 설명으로 생각하는 과정을 연습할 수 있습니다.",
            "id": "732004f237f041",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/732004f237f041.webp"
          },
          {
            "name": "Duolingo",
            "url": "duolingo.com",
            "desc": "짧은 단위의 언어 학습 활동을 제공합니다. 수준과 목표에 맞춰 학습을 이어갈 수 있습니다.",
            "id": "a846c8062a35aa",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a846c8062a35aa.webp"
          },
          {
            "name": "Memrise",
            "url": "memrise.com",
            "desc": "외국어 표현과 어휘를 학습하는 서비스입니다. 실제 표현과 반복 학습 콘텐츠를 살펴볼 수 있습니다.",
            "id": "cc62d8dcf46104",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cc62d8dcf46104.webp"
          },
          {
            "name": "Busuu",
            "url": "busuu.com",
            "desc": "언어별 학습 과정과 연습 활동을 제공합니다. 단계에 맞는 표현을 차근차근 익혀 보세요.",
            "id": "47e7174f929eba",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/47e7174f929eba.webp"
          },
          {
            "name": "Babbel",
            "url": "babbel.com",
            "desc": "회화 중심의 언어 학습 과정을 제공합니다. 언어와 수강 방식, 이용 요금을 확인해 볼 수 있습니다.",
            "id": "688a8c9c52baa5",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/688a8c9c52baa5.webp"
          },
          {
            "name": "BBC Learning English",
            "url": "bbc.co.uk/learningenglish",
            "desc": "영어 학습자를 위한 영상과 발음, 뉴스 영어 자료를 제공합니다. 짧은 콘텐츠로 꾸준히 공부하기 좋습니다.",
            "id": "4befb5aed0cefd",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4befb5aed0cefd.webp"
          },
          {
            "name": "Cambridge Dictionary",
            "url": "dictionary.cambridge.org",
            "desc": "영단어의 뜻과 발음, 예문을 검색합니다. 학습자용 설명과 번역 사전을 함께 이용할 수 있습니다.",
            "id": "223977c88b4d0f",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/223977c88b4d0f.webp"
          },
          {
            "name": "Oxford Learner's Dictionaries",
            "url": "oxfordlearnersdictionaries.com",
            "desc": "영어 학습자를 위한 정의와 예문, 발음을 제공합니다. 단어의 실제 쓰임을 비교해 보세요.",
            "id": "93e3f51c1ded89",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/93e3f51c1ded89.webp"
          },
          {
            "name": "LanguageTool",
            "url": "languagetool.org",
            "desc": "여러 언어의 문법과 철자, 문체를 점검하는 글쓰기 도구입니다. 제안의 근거를 읽고 표현을 다듬어 보세요.",
            "id": "8df7992099e0db",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8df7992099e0db.webp"
          },
          {
            "name": "Grammarly",
            "url": "grammarly.com",
            "desc": "영문 작성과 문법 점검을 돕는 도구입니다. 글의 목적에 맞춰 수정 제안을 검토할 수 있습니다.",
            "id": "a8b63360acbee6",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a8b63360acbee6.webp"
          },
          {
            "name": "ReadWriteThink",
            "url": "readwritethink.org",
            "desc": "읽기와 쓰기 수업 자료 및 학습 활동을 제공합니다. 글쓰기 아이디어와 연습 과제를 찾아보세요.",
            "id": "2192c8b22f03d8",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "Kahoot!",
            "url": "kahoot.com",
            "desc": "참가자가 함께 답하는 퀴즈를 만들고 진행합니다. 수업과 모임에 맞는 질문을 구성할 수 있습니다.",
            "id": "0be6b8580a795d",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0be6b8580a795d.webp"
          },
          {
            "name": "Typing.com",
            "url": "typing.com",
            "desc": "단계별 타자 수업과 연습, 게임을 제공합니다. 정확도와 손가락 위치를 익혀 보세요.",
            "id": "6c8c2fb68daa85",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6c8c2fb68daa85.webp"
          },
          {
            "name": "Monkeytype",
            "url": "monkeytype.com",
            "desc": "집중하기 편한 화면에서 타자 속도와 정확도를 연습합니다. 시간과 단어 설정을 바꿔 자신에게 맞출 수 있습니다.",
            "id": "c1d3a99e00e5c0",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c1d3a99e00e5c0.webp"
          },
          {
            "name": "Keybr",
            "url": "keybr.com",
            "desc": "입력 기록을 바탕으로 타자 연습을 제공합니다. 자주 틀리는 글자와 정확도를 확인하며 연습할 수 있습니다.",
            "id": "78a9b8917b4472",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/78a9b8917b4472.webp"
          },
          {
            "name": "TypingClub",
            "url": "typingclub.com",
            "desc": "단계별 타자 수업과 연습 활동을 제공합니다. 손가락 위치와 정확도를 차근차근 익힐 수 있습니다.",
            "id": "c514ed4a0eaf8b",
            "tags": [
              "학습 · 언어",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c514ed4a0eaf8b.webp"
          }
        ]
      },
      {
        "id": "gl-books",
        "category": "책 · 생각",
        "tagline": "읽다가 다른 세계로",
        "blurb": "책과 에세이, 철학과 역사 자료를 모았습니다. 관심 있는 문장 하나에서 출발해 저자와 주제를 따라 더 읽어 보세요.",
        "sites": [
          {
            "name": "Project Gutenberg",
            "url": "gutenberg.org",
            "desc": "저작권 보호 기간이 지난 전자책을 공개합니다. 작품별 적용 지역과 이용 조건을 확인하며 읽을 수 있습니다.",
            "id": "3c217918e3bee4",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3c217918e3bee4.webp"
          },
          {
            "name": "Standard Ebooks",
            "url": "standardebooks.org",
            "desc": "고전 전자책을 정돈된 편집과 서식으로 제공합니다. 기기에 맞는 형식을 골라 읽을 수 있습니다.",
            "id": "a25523277548d0",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a25523277548d0.webp"
          },
          {
            "name": "Internet Archive",
            "url": "archive.org",
            "desc": "책과 영상, 음원, 웹 기록 등 디지털 자료를 보존합니다. 자료별 공개 범위와 이용 조건을 확인해 보세요.",
            "id": "b83974d09bef2f",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b83974d09bef2f.webp"
          },
          {
            "name": "Open Library",
            "url": "openlibrary.org",
            "desc": "책의 서지 정보와 판본을 찾아보는 온라인 도서 목록입니다. 읽고 싶은 책을 목록으로 정리할 수 있습니다.",
            "id": "c2160ffb03bcd5",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c2160ffb03bcd5.webp"
          },
          {
            "name": "WorldCat",
            "url": "worldcat.org",
            "desc": "여러 도서관의 소장 자료를 통합 검색합니다. 책과 자료를 보유한 도서관을 찾아볼 수 있습니다.",
            "id": "c8c540c75d98f5",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c8c540c75d98f5.webp"
          },
          {
            "name": "Google Books",
            "url": "books.google.com",
            "desc": "책의 서지 정보와 일부 본문을 검색합니다. 제목을 몰라도 문구와 주제로 자료를 찾아볼 수 있습니다.",
            "id": "12a13a90e5e45b",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/12a13a90e5e45b.webp"
          },
          {
            "name": "Goodreads",
            "url": "goodreads.com",
            "desc": "책의 독자 리뷰와 읽기 목록을 살펴봅니다. 관심 장르의 작품을 찾고 독서 기록을 남길 수 있습니다.",
            "id": "14325930310426",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/14325930310426.webp"
          },
          {
            "name": "Five Books",
            "url": "fivebooks.com",
            "desc": "전문가가 주제별 책을 추천하고 이유를 설명합니다. 관심 분야의 입문 도서를 고르기 좋습니다.",
            "id": "a6068d562b7ecf",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a6068d562b7ecf.webp"
          },
          {
            "name": "The Marginalian",
            "url": "themarginalian.org",
            "desc": "문학과 예술, 과학에서 삶의 질문을 찾아 읽습니다. 작품과 저자를 연결하는 긴 에세이를 제공합니다.",
            "id": "f686e8e484f31c",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f686e8e484f31c.webp"
          },
          {
            "name": "Aeon",
            "url": "aeon.co",
            "desc": "철학과 과학, 문화에 관한 에세이와 영상을 제공합니다. 하나의 질문을 여러 관점에서 생각해 보기 좋습니다.",
            "id": "8811cdf9fb84bd",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8811cdf9fb84bd.webp"
          },
          {
            "name": "Psyche",
            "url": "psyche.co",
            "desc": "마음과 일상, 철학에 관한 글과 짧은 가이드를 읽습니다. 저자의 관점과 출처를 살펴보며 생각을 넓혀 보세요.",
            "id": "4c4e0ce6158e7f",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4c4e0ce6158e7f.webp"
          },
          {
            "name": "JSTOR Daily",
            "url": "daily.jstor.org",
            "desc": "학술 연구를 바탕으로 역사와 문화, 사회 이야기를 풀이합니다. 기사에서 관련 연구로 이어질 수 있습니다.",
            "id": "2f08d7cb695f50",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2f08d7cb695f50.webp"
          },
          {
            "name": "arXiv",
            "url": "arxiv.org",
            "desc": "물리학과 수학, 컴퓨터과학 등의 사전공개 논문을 읽습니다. 동료평가 여부와 게시 버전을 확인해 참고하세요.",
            "id": "1e7b5582c92072",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1e7b5582c92072.webp"
          },
          {
            "name": "Google Scholar",
            "url": "scholar.google.com",
            "desc": "학술논문과 저서 등 연구 자료를 검색합니다. 인용 관계와 관련 문헌을 따라 탐색할 수 있습니다.",
            "id": "eddb7ce2994063",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/eddb7ce2994063.webp"
          },
          {
            "name": "Semantic Scholar",
            "url": "semanticscholar.org",
            "desc": "연구 논문과 인용 관계를 검색하는 학술 도구입니다. 관심 논문의 개요와 관련 연구를 찾아볼 수 있습니다.",
            "id": "29a60b3e89002b",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/29a60b3e89002b.webp"
          },
          {
            "name": "Stanford Encyclopedia of Philosophy",
            "url": "plato.stanford.edu",
            "desc": "철학의 개념과 인물을 전문가가 설명하는 백과사전입니다. 긴 해설과 참고문헌으로 주제를 깊게 살펴보세요.",
            "id": "cf31deaf2e02d0",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cf31deaf2e02d0.webp"
          },
          {
            "name": "Internet Encyclopedia of Philosophy",
            "url": "iep.utm.edu",
            "desc": "철학의 주요 사상과 인물, 논점을 해설합니다. 입문 단계에서 개념의 배경을 정리하기 좋습니다.",
            "id": "cef01837140fa9",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cef01837140fa9.webp"
          },
          {
            "name": "World History Encyclopedia",
            "url": "worldhistory.org",
            "desc": "세계사의 사건과 문명, 인물을 해설하는 백과사전입니다. 지도와 이미지, 참고 자료를 함께 제공합니다.",
            "id": "f7c3d68eee2ca6",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f7c3d68eee2ca6.webp"
          },
          {
            "name": "Lapham's Quarterly",
            "url": "laphamsquarterly.org",
            "desc": "역사 속 글과 사상을 주제별로 엮어 소개합니다. 서로 다른 시대의 목소리를 비교하며 읽어 보세요.",
            "id": "70c492ec0b3a49",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20"
          },
          {
            "name": "Literary Hub",
            "url": "lithub.com",
            "desc": "문학과 책, 작가에 관한 에세이와 인터뷰를 제공합니다. 새로운 작품과 독서의 관점을 발견할 수 있습니다.",
            "id": "b8d4225e37d420",
            "tags": [
              "책 · 생각",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b8d4225e37d420.webp"
          }
        ]
      },
      {
        "id": "gl-music",
        "category": "음악 · 소리",
        "tagline": "귀로 시작하는 탐험",
        "blurb": "음악을 듣고 배우고 직접 만들어 보는 공간입니다. 악기와 악보, 라디오와 소리 자료를 오가며 취향을 넓혀 보세요.",
        "sites": [
          {
            "name": "Bandcamp",
            "url": "bandcamp.com",
            "desc": "독립 음악가와 레이블의 음악을 발견하는 플랫폼입니다. 장르별 추천과 앨범 소개를 읽고 감상할 수 있습니다.",
            "id": "76314760962441",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/76314760962441.webp"
          },
          {
            "name": "SoundCloud",
            "url": "soundcloud.com",
            "desc": "뮤지션과 크리에이터가 공유한 음원과 믹스를 탐색합니다. 마음에 드는 제작자의 새 작업을 따라가 보세요.",
            "id": "5bf8b58f6a7bc9",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5bf8b58f6a7bc9.webp"
          },
          {
            "name": "Spotify",
            "url": "open.spotify.com",
            "desc": "아티스트와 앨범, 팟캐스트를 검색해 듣습니다. 지역과 이용 요금제에 따라 제공 기능이 다를 수 있습니다.",
            "id": "52c062f8400a8d",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/52c062f8400a8d.webp"
          },
          {
            "name": "NPR Music",
            "url": "npr.org/music",
            "desc": "음악 공연과 인터뷰, 새 음반 이야기를 제공합니다. 작은 공연 영상과 장르별 추천을 살펴보세요.",
            "id": "54fb650f4752b8",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/54fb650f4752b8.webp"
          },
          {
            "name": "KEXP",
            "url": "kexp.org",
            "desc": "라디오 방송과 스튜디오 라이브, 음악 이야기를 제공합니다. 다양한 장르의 새로운 아티스트를 발견하기 좋습니다.",
            "id": "1d53187f5fb541",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1d53187f5fb541.webp"
          },
          {
            "name": "NTS",
            "url": "nts.live",
            "desc": "세계 여러 DJ와 아티스트가 만든 라디오 프로그램을 듣습니다. 장르와 진행자를 따라 아카이브를 탐색할 수 있습니다.",
            "id": "667f95d376ae8f",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/667f95d376ae8f.webp"
          },
          {
            "name": "Radio France",
            "url": "radiofrance.fr",
            "desc": "프랑스 공영 라디오의 방송과 음악 프로그램을 제공합니다. 채널과 프로그램별로 청취할 수 있습니다.",
            "id": "96df805d1f94b8",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/96df805d1f94b8.webp"
          },
          {
            "name": "BBC Sounds",
            "url": "bbc.co.uk/sounds",
            "desc": "BBC의 라디오와 팟캐스트, 음악 프로그램을 모았습니다. 지역과 콘텐츠별 이용 가능 여부를 확인해 보세요.",
            "id": "ce8c93c8274f77",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ce8c93c8274f77.webp"
          },
          {
            "name": "Radio Swiss Jazz",
            "url": "radioswissjazz.ch",
            "desc": "재즈 중심의 라디오 방송과 곡 정보를 제공합니다. 방송 중인 음악과 편성 정보를 살펴볼 수 있습니다.",
            "id": "72af04191cb7d8",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/72af04191cb7d8.webp"
          },
          {
            "name": "Radio Swiss Classic",
            "url": "radioswissclassic.ch",
            "desc": "클래식 음악 라디오와 작품 정보를 제공합니다. 작곡가와 곡 이름을 확인하며 감상해 보세요.",
            "id": "d59f8a044c92ba",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d59f8a044c92ba.webp"
          },
          {
            "name": "IMSLP",
            "url": "imslp.org",
            "desc": "고전 음악 악보와 관련 자료를 검색합니다. 국가별 저작권 조건과 판본 정보를 확인하세요.",
            "id": "ad438e9b1fc760",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ad438e9b1fc760.webp"
          },
          {
            "name": "MuseScore",
            "url": "musescore.org",
            "desc": "악보 작성 프로그램과 사용 안내를 제공합니다. 악보를 직접 만들고 재생해 볼 때 살펴보세요.",
            "id": "0d152544cefe6d",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0d152544cefe6d.webp"
          },
          {
            "name": "Flat",
            "url": "flat.io",
            "desc": "브라우저에서 악보를 만들고 함께 편집하는 도구입니다. 작곡과 음악 수업에 활용할 수 있습니다.",
            "id": "1bc724239ab720",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/1bc724239ab720.webp"
          },
          {
            "name": "Noteflight",
            "url": "noteflight.com",
            "desc": "온라인 악보 작성과 공유 기능을 제공합니다. 음표를 입력하고 연주 결과를 들어볼 수 있습니다.",
            "id": "3b928cde2ddbb7",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/3b928cde2ddbb7.webp"
          },
          {
            "name": "BandLab",
            "url": "bandlab.com",
            "desc": "브라우저와 앱에서 음악을 녹음하고 편집하는 플랫폼입니다. 다른 제작자와 작업을 공유할 수 있습니다.",
            "id": "e56e244c4e86bc",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e56e244c4e86bc.webp"
          },
          {
            "name": "Soundtrap",
            "url": "soundtrap.com",
            "desc": "온라인에서 음원을 녹음하고 여러 트랙을 편집합니다. 협업과 제작 기능의 이용 조건을 확인해 보세요.",
            "id": "31f86447878c15",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/31f86447878c15.webp"
          },
          {
            "name": "BeepBox",
            "url": "beepbox.co",
            "desc": "브라우저에서 음표를 배치해 짧은 음악을 만듭니다. 패턴을 바꾸며 멜로디와 리듬을 실험할 수 있습니다.",
            "id": "5362c457fbb6c8",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/5362c457fbb6c8.webp"
          },
          {
            "name": "Learning Music",
            "url": "learningmusic.ableton.com",
            "desc": "비트와 멜로디, 화음의 원리를 직접 조작하며 배웁니다. 별도 악기 없이 음악의 구조를 실험할 수 있습니다.",
            "id": "0da0c2e026a077",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0da0c2e026a077.webp"
          },
          {
            "name": "Learning Synths",
            "url": "learningsynths.ableton.com",
            "desc": "신시사이저의 소리 합성 원리를 조작형 설명으로 배웁니다. 파형과 필터를 바꾸며 차이를 들어보세요.",
            "id": "7214a0f764a707",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7214a0f764a707.webp"
          },
          {
            "name": "Music Theory",
            "url": "musictheory.net",
            "desc": "악보와 음정, 화음의 기초를 설명하고 연습문제를 제공합니다. 음악 이론을 단계별로 익힐 수 있습니다.",
            "id": "da10ce2bb4db44",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/da10ce2bb4db44.webp"
          },
          {
            "name": "Teoria",
            "url": "teoria.com",
            "desc": "음악 이론 설명과 귀 훈련, 악보 읽기 연습을 제공합니다. 주제별 문제를 풀며 개념을 확인할 수 있습니다.",
            "id": "cb3c72e31bc418",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cb3c72e31bc418.webp"
          },
          {
            "name": "Freesound",
            "url": "freesound.org",
            "desc": "사용자가 공유한 효과음과 현장 녹음을 검색합니다. 소리마다 다른 이용허락과 출처 표시 조건을 확인하세요.",
            "id": "fc3603d552f20b",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/fc3603d552f20b.webp"
          },
          {
            "name": "Chrome Music Lab",
            "url": "musiclab.chromeexperiments.com",
            "desc": "리듬과 멜로디, 소리의 원리를 직접 조작하며 배웁니다. 음악 지식 없이도 여러 실험을 즐길 수 있습니다.",
            "id": "72330b7ba4329f",
            "tags": [
              "음악 · 소리",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/72330b7ba4329f.webp"
          }
        ]
      },
      {
        "id": "gl-nature",
        "category": "자연 · 지도",
        "tagline": "지구를 천천히 둘러보기",
        "blurb": "지도와 생물 관찰, 환경 데이터를 통해 지구를 살펴봅니다. 가까운 산책길부터 바다와 숲의 큰 변화까지 관심을 넓혀 보세요.",
        "sites": [
          {
            "name": "OpenStreetMap",
            "url": "openstreetmap.org",
            "desc": "사람들이 함께 만드는 공개 지도입니다. 지역의 길과 장소를 살펴보고 지도 제작에도 참여할 수 있습니다.",
            "id": "14b6734d6c2a81",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/14b6734d6c2a81.webp"
          },
          {
            "name": "Google Maps",
            "url": "maps.google.com",
            "desc": "세계의 장소와 이동 경로, 거리 풍경을 탐색합니다. 여행 후보지의 주변 환경을 미리 살펴보세요.",
            "id": "349a00105e0fb5",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/349a00105e0fb5.webp"
          },
          {
            "name": "OpenTopoMap",
            "url": "opentopomap.org",
            "desc": "지형과 등고선을 강조한 공개 지도를 제공합니다. 산과 골짜기의 형태를 읽으며 지형을 이해해 보세요.",
            "id": "104c60eb205e45",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/104c60eb205e45.webp"
          },
          {
            "name": "NASA Worldview",
            "url": "worldview.earthdata.nasa.gov",
            "desc": "위성 관측 이미지를 날짜와 주제별로 지도에서 살펴봅니다. 구름과 산불, 지표의 변화를 비교할 수 있습니다.",
            "id": "fc12ea05348628",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/fc12ea05348628.webp"
          },
          {
            "name": "Copernicus Browser",
            "url": "browser.dataspace.copernicus.eu",
            "desc": "유럽의 지구 관측 위성 영상을 검색하고 시각화합니다. 지역과 날짜를 바꿔 지표 변화를 살펴보세요.",
            "id": "7cff722ec63131",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7cff722ec63131.webp"
          },
          {
            "name": "Earth Nullschool",
            "url": "earth.nullschool.net",
            "desc": "바람과 해양, 대기 데이터를 움직이는 지구본으로 표현합니다. 층과 시점을 바꾸며 흐름을 비교할 수 있습니다.",
            "id": "f7bbc6ce9dd861",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f7bbc6ce9dd861.webp"
          },
          {
            "name": "Windy",
            "url": "windy.com",
            "desc": "바람과 강수, 기상 예측을 지도 위에서 살펴봅니다. 예보 모델과 갱신 시점을 함께 확인하세요.",
            "id": "de0e6f8d0ba82e",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/de0e6f8d0ba82e.webp"
          },
          {
            "name": "Ventusky",
            "url": "ventusky.com",
            "desc": "기온과 바람, 강수 예측을 지도에서 시각화합니다. 지역과 시간을 바꿔 날씨의 흐름을 살펴보세요.",
            "id": "4ef0de2547c8d7",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/4ef0de2547c8d7.webp"
          },
          {
            "name": "Stellarium Web",
            "url": "stellarium-web.org",
            "desc": "브라우저에서 밤하늘과 별자리를 탐색합니다. 관측 장소와 시간을 바꿔 보이는 천체를 확인해 보세요.",
            "id": "c6cda9a690be79",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c6cda9a690be79.webp"
          },
          {
            "name": "iNaturalist",
            "url": "inaturalist.org",
            "desc": "생물 관찰 사진을 기록하고 이름을 알아가는 시민과학 플랫폼입니다. 주변에서 발견된 종을 지도에서 찾아볼 수 있습니다.",
            "id": "9f6e7f2f18aa77",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/9f6e7f2f18aa77.webp"
          },
          {
            "name": "Birds of the World",
            "url": "birdsoftheworld.org",
            "desc": "세계 조류의 생태와 분포를 다루는 전문 자료입니다. 상세 콘텐츠의 이용 조건을 확인해 보세요.",
            "id": "f02490080ba3ea",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/f02490080ba3ea.webp"
          },
          {
            "name": "Ocean Biodiversity Information System",
            "url": "obis.org",
            "desc": "해양 생물의 관측과 분포 데이터를 검색합니다. 바다와 종별로 기록을 탐색할 수 있습니다.",
            "id": "18e9730fdceb8d",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/18e9730fdceb8d.webp"
          },
          {
            "name": "Ocean Conservancy",
            "url": "oceanconservancy.org",
            "desc": "해양 환경과 보전 활동에 관한 자료를 제공합니다. 바다의 생태와 환경 문제를 알아볼 수 있습니다.",
            "id": "e679da7de82fad",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e679da7de82fad.webp"
          },
          {
            "name": "The Nature Conservancy",
            "url": "nature.org",
            "desc": "자연 보전 프로젝트와 환경 자료를 제공합니다. 숲과 바다, 기후에 관한 활동을 찾아보세요.",
            "id": "0ca9b45395c960",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0ca9b45395c960.webp"
          },
          {
            "name": "Audubon",
            "url": "audubon.org",
            "desc": "조류와 서식지 보전에 관한 기사와 자료를 제공합니다. 새 관찰과 자연에 관한 이야기를 만날 수 있습니다.",
            "id": "c9e8c8fe825ffc",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/c9e8c8fe825ffc.webp"
          },
          {
            "name": "Global Nature Watch",
            "url": "globalforestwatch.org",
            "desc": "산림과 토지 이용, 자연의 변화를 지도에서 살펴봅니다. 지역과 기간별 관측 정보를 비교할 수 있습니다.",
            "id": "fb69d34a0420ab",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/fb69d34a0420ab.webp"
          },
          {
            "name": "Explore.org",
            "url": "explore.org",
            "desc": "자연과 야생동물의 라이브 카메라를 모았습니다. 장소와 계절마다 달라지는 풍경을 관찰해 보세요.",
            "id": "2b2a010a213c75",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/2b2a010a213c75.webp"
          },
          {
            "name": "The True Size",
            "url": "thetruesize.com",
            "desc": "지도 위에서 나라의 윤곽을 옮겨 실제 크기를 비교합니다. 지도 투영법에 따른 왜곡을 이해하는 데 도움이 됩니다.",
            "id": "7134d33be1b339",
            "tags": [
              "자연 · 지도",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/7134d33be1b339.webp"
          }
        ]
      },
      {
        "id": "gl-food",
        "category": "음식 · 생활의 발견",
        "tagline": "오늘은 직접 해보기",
        "blurb": "요리와 정원, 공예와 생활 아이디어를 모았습니다. 결과를 구경하는 데서 한 걸음 더 나아가 작은 무언가를 직접 만들어 보세요.",
        "sites": [
          {
            "name": "BBC Good Food",
            "url": "bbcgoodfood.com",
            "desc": "요리법과 식재료, 식사 아이디어를 제공합니다. 재료와 조리 시간에 맞는 레시피를 찾아볼 수 있습니다.",
            "id": "b8b5acecdcb79b",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b8b5acecdcb79b.webp"
          },
          {
            "name": "Epicurious",
            "url": "epicurious.com",
            "desc": "다양한 요리법과 조리 기술, 식재료 정보를 제공합니다. 메뉴와 재료를 기준으로 탐색할 수 있습니다.",
            "id": "39b8e0857a7047",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/39b8e0857a7047.webp"
          },
          {
            "name": "Bon Appétit",
            "url": "bonappetit.com",
            "desc": "요리법과 식문화, 식당 이야기를 읽습니다. 일상 식사를 위한 아이디어를 찾아보세요.",
            "id": "37e9d843cb3f80",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/37e9d843cb3f80.webp"
          },
          {
            "name": "Budget Bytes",
            "url": "budgetbytes.com",
            "desc": "재료와 비용을 고려한 요리 아이디어를 제공합니다. 간단한 식사와 남은 재료 활용법을 찾아볼 수 있습니다.",
            "id": "505d6dad1e45fe",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/505d6dad1e45fe.webp"
          },
          {
            "name": "Smitten Kitchen",
            "url": "smittenkitchen.com",
            "desc": "가정 요리와 베이킹 레시피를 사진과 글로 소개합니다. 요리 과정의 설명과 경험을 함께 읽어 보세요.",
            "id": "781209f28a83e7",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/781209f28a83e7.webp"
          },
          {
            "name": "King Arthur Baking",
            "url": "kingarthurbaking.com",
            "desc": "빵과 과자 레시피, 베이킹 기술을 제공합니다. 재료와 반죽 원리를 이해하며 연습하기 좋습니다.",
            "id": "d72b1068b64242",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/d72b1068b64242.webp"
          },
          {
            "name": "Sally's Baking",
            "url": "sallysbakingaddiction.com",
            "desc": "케이크와 쿠키, 빵 등 베이킹 레시피를 소개합니다. 단계별 사진과 제작 팁을 참고할 수 있습니다.",
            "id": "56cb63d32d233e",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/56cb63d32d233e.webp"
          },
          {
            "name": "Minimalist Baker",
            "url": "minimalistbaker.com",
            "desc": "재료와 과정을 간소화한 요리법을 제공합니다. 식단과 재료별 필터로 메뉴를 찾아보세요.",
            "id": "a9690ead5e5ce4",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/a9690ead5e5ce4.webp"
          },
          {
            "name": "Love and Lemons",
            "url": "loveandlemons.com",
            "desc": "채소를 활용한 요리와 계절별 레시피를 소개합니다. 샐러드부터 따뜻한 식사까지 아이디어를 얻을 수 있습니다.",
            "id": "ce3f474f64ff3e",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/ce3f474f64ff3e.webp"
          },
          {
            "name": "My Korean Kitchen",
            "url": "mykoreankitchen.com",
            "desc": "한국 요리의 레시피와 식재료 정보를 영어로 소개합니다. 해외에서 한식을 만드는 아이디어를 찾아보세요.",
            "id": "e961a9225c438c",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e961a9225c438c.webp"
          },
          {
            "name": "Instructables",
            "url": "instructables.com",
            "desc": "사람들이 만든 공예와 제작 프로젝트의 과정을 공유합니다. 준비물과 난이도를 살펴보고 직접 시도해 보세요.",
            "id": "0c51ac65e9f21c",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/0c51ac65e9f21c.webp"
          },
          {
            "name": "Make",
            "url": "makezine.com",
            "desc": "전자공작과 제작 문화, 프로젝트 아이디어를 소개합니다. 도구와 기술을 활용한 만들기를 탐색할 수 있습니다.",
            "id": "e4a3bbbbe7e4e3",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/e4a3bbbbe7e4e3.webp"
          },
          {
            "name": "Hackaday",
            "url": "hackaday.com",
            "desc": "전자공학과 하드웨어 제작 프로젝트를 소개합니다. 기술 문제를 해결하는 다양한 접근을 읽어 보세요.",
            "id": "b9532d499cccc7",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b9532d499cccc7.webp"
          },
          {
            "name": "Ravelry",
            "url": "ravelry.com",
            "desc": "뜨개질과 코바늘 패턴, 실과 프로젝트 정보를 검색합니다. 패턴별 이용 조건과 난이도를 확인하세요.",
            "id": "8de01cc312eeed",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/8de01cc312eeed.webp"
          },
          {
            "name": "Craftsy",
            "url": "craftsy.com",
            "desc": "공예와 요리, 창작 분야의 강좌를 제공합니다. 배울 분야와 수강 조건을 비교할 수 있습니다.",
            "id": "b4de3b164ef8ea",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/b4de3b164ef8ea.webp"
          },
          {
            "name": "RHS",
            "url": "rhs.org.uk",
            "desc": "식물과 정원 관리, 원예 정보를 제공합니다. 식물별 특성과 계절의 관리 방법을 찾아보세요.",
            "id": "6f79d785452ee8",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/6f79d785452ee8.webp"
          },
          {
            "name": "Gardeners' World",
            "url": "gardenersworld.com",
            "desc": "원예와 식물 관리, 정원 만들기 아이디어를 제공합니다. 계절과 환경에 맞는 식물을 알아볼 수 있습니다.",
            "id": "cc2b2654c8b903",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/cc2b2654c8b903.webp"
          },
          {
            "name": "Apartment Therapy",
            "url": "apartmenttherapy.com",
            "desc": "집 꾸미기와 공간 활용, 생활 아이디어를 소개합니다. 실제 주거 사례에서 작은 변화를 찾아보세요.",
            "id": "99c10d7e41ce79",
            "tags": [
              "음식 · 생활의 발견",
              "세계"
            ],
            "linkStatus": "reachable",
            "verifiedAt": "2026-10-20",
            "icon": "/icons/99c10d7e41ce79.webp"
          }
        ]
      }
    ]
  }
]

const countryById = new Map(countryRecords.map(record => [record.id, record]))
for (const region of regions) for (const category of region.categories) {
  category.sites.push(...extraSites.filter(site => site.categoryId === category.id))
  for (const site of category.sites) {
    const record = countryById.get(site.id) || site
    site.countryCode = record.countryCode || null
    site.countrySource = record.sourceUrl || null
    site.countryBasis = record.basis || '공식 소재지 미확인'
  }
}

export const countByRegion = Object.fromEntries(
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
