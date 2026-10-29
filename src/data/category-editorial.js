// Editorial context shared by visible headings and search metadata.
export const categoryEditorial = {
  'gl-games': {
    title: '웹게임 추천',
    heading: '웹게임 추천 · 브라우저 게임 모음',
    description: '설치 없이 즐기는 웹게임을 골라보세요. 2048 같은 짧은 퍼즐, Slow Roads의 드라이빙, 친구와 함께하는 Gartic Phone까지 장르와 조작 방식으로 비교할 수 있습니다.',
    sectionTitle: '지금 할 만한 웹게임 고르기',
    tips: [
      ['잠깐 혼자 즐기고 싶을 때', '2048은 숫자 타일을 합치는 퍼즐이고, 0h h1은 칸의 색을 채우는 논리 퍼즐입니다. 한 번에 긴 시간을 쓰기보다 한 판의 목표를 정하고 시작해 보세요.'],
      ['친구와 같이 하고 싶을 때', 'Gartic Phone과 Skribbl.io는 그림과 단어를 주고받는 게임입니다. 함께 들어갈 방과 사용할 언어를 먼저 맞추면 진행하기 편합니다.'],
      ['풍경을 보거나 무언가 만들고 싶을 때', 'Slow Roads에서는 드라이빙을, Sandspiel에서는 재료를 놓고 반응을 관찰하는 놀이를 할 수 있습니다. 운전·레이싱 게임은 키보드가 있는 PC가 편하고, 모바일 지원 여부는 게임마다 다릅니다.'],
    ],
    note: '웹게임은 브라우저에서 실행되지만 회원가입, 광고, 유료 기능, 조작 환경은 각각 다릅니다. 링크를 열어 현재 이용 조건을 확인하세요.',
    links: [['/guide/boredom-websites/', '심심할 때 가는 사이트 추천'], ['/c/gl-quiz/', '퍼즐·퀴즈 사이트 더 보기']],
  },
  'gl-science': {
    title: '우주·과학 사이트 추천',
    heading: '우주 탐험·과학 사이트 모음',
    description: 'NASA의 우주 사진, NASA Eyes의 태양계 탐험, PhET 과학 실험부터 세계 연구기관과 과학관까지. 보고 싶은 주제에 맞는 과학·우주 사이트를 찾아보세요.',
    sectionTitle: '우주와 과학, 어디서부터 볼까요?',
    tips: [
      ['우주 사진과 해설을 보고 싶다면', 'NASA Astronomy Picture of the Day는 사진과 해설을 함께 읽는 출발점입니다. 망원경으로 관측한 모습을 더 살펴보려면 ESA Hubble과 Webb Telescope의 자료를 찾아보세요.'],
      ['태양계와 탐사선을 움직여 보고 싶다면', 'NASA Eyes는 천체와 탐사 임무를 입체 화면으로 살펴보는 도구입니다. 한 임무를 고른 뒤 NASA Science의 설명을 함께 읽으면 화면 속 장면을 이해하는 데 도움이 됩니다.'],
      ['직접 실험하며 이해하고 싶다면', 'PhET에서는 시뮬레이션의 조건을 바꾸며 변화를 관찰할 수 있습니다. 수치 하나를 바꿔 결과를 비교해 보고, 연구기관의 해설로 원리를 확인해 보세요.'],
    ],
    links: [['/guide/virtual-travel/', '랜선 여행 사이트 활용법'], ['/c/gl-nature/', '자연·지도 사이트 모음']],
  },
  'gl-ai': {
    title: 'AI 사이트 모음',
    heading: 'AI 사이트 모음 · 글쓰기부터 이미지·영상까지',
    description: 'ChatGPT, Claude, Gemini 등 대화형 AI와 이미지·영상·음악 제작 도구를 모았습니다. 필요한 작업, 요금과 결과물 이용 조건을 비교하며 AI 사이트를 찾아보세요.',
    sectionTitle: '작업에 맞는 AI 도구 고르기',
    tips: [
      ['글과 자료를 정리할 때', 'ChatGPT, Claude, Google Gemini 같은 대화형 도구부터 살펴보세요. 초안을 만들거나 문서 구조를 비교하는 데 쓰되, 사실과 인용은 원문으로 확인하는 과정이 필요합니다.'],
      ['이미지·영상·소리를 만들 때', '이미지는 Krea AI와 Midjourney, 영상은 Runway와 Luma Dream Machine, 음악은 Suno AI처럼 작업 종류로 후보를 좁힐 수 있습니다. 출력 품질뿐 아니라 수정 방식과 결과물의 이용 조건도 비교해 보세요.'],
      ['도구를 정하기 전에', '같은 짧은 작업을 여러 도구에 시도하면 차이를 알아보기 쉽습니다. 무료 사용량, 구독 요금, 업로드한 자료의 처리 조건은 바뀔 수 있으므로 각 서비스의 현재 안내를 확인하세요.'],
    ],
    links: [['/c/kr-builder/', '한국어 개발·AI 서비스'], ['/c/gl-builder/', '코딩·웹사이트 만들기 도구']],
  },
  'gl-utility': {
    title: '유용한 사이트 모음',
    heading: '유용한 사이트 모음 · 파일·문서·생산성 도구',
    description: '이미지 압축, PDF 편집, 파일 변환, 메모와 협업까지. TinyPNG, PDF24 Tools, Photopea 등 브라우저에서 쓰는 유용한 도구를 용도별로 찾아보세요.',
    sectionTitle: '필요한 일부터 정하면 도구가 보입니다',
    tips: [
      ['이미지와 문서를 손볼 때', '이미지 용량을 줄이는 작업은 TinyPNG와 Squoosh, 사진 편집은 Photopea, PDF 작업은 PDF24 Tools와 I Love PDF에서 시작할 수 있습니다. 원본을 따로 보관하고 변환 결과를 확인하세요.'],
      ['생각과 할 일을 정리할 때', '메모를 모으려면 Notion이나 Obsidian, 작업 흐름을 보려면 Trello, 도형과 관계를 그리려면 Draw.io나 Excalidraw를 살펴보세요. 기능의 수보다 다시 찾아보기 쉬운 방식인지가 중요합니다.'],
    ],
    note: '파일을 올리는 도구를 쓸 때는 업로드 방식과 보관 기간을 확인하세요. 민감한 문서는 브라우저 안에서 처리되는지, 외부 서버로 전송되는지도 살펴보는 편이 좋습니다.',
    links: [['/guide/productive-browser/', '생산성 도구를 고르는 방법'], ['/guide/design-toolkit/', '디자인 도구 활용 가이드']],
  },
}
