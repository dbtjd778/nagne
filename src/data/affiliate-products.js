// Links issued in Coupang Partners with the dedicated channel `vsiteskr`.
// Site registration confirmed on 2026-11-01. No API keys or visitor identifiers.
export const affiliateDisclosure = '이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.'

export const affiliateProducts = {
  mouse: {
    name: '로지텍 M240 블루투스 마우스',
    option: '블랙',
    kind: '마우스',
    href: 'https://link.coupang.com/a/ikjlsxxbvU',
    checkedAt: '2026-11-01',
    consideration: '사용 기기의 블루투스 지원과 운영체제 호환 여부를 확인하세요.',
  },
  keyboard: {
    name: '로지텍 K380S 무선 키보드',
    option: '스모키블랙 · 텐키리스',
    kind: '키보드',
    href: 'https://link.coupang.com/a/ikjttWcYsm',
    checkedAt: '2026-11-01',
    consideration: '숫자 키패드가 필요한지, 키 배열과 기기 연결 방식이 맞는지 살펴보세요.',
  },
  headset: {
    name: '로지텍 H390 헤드셋',
    option: '혼합 색상',
    kind: '헤드셋',
    href: 'https://link.coupang.com/a/ikjwc2ytwa',
    checkedAt: '2026-11-01',
    consideration: '기기의 연결 단자와 호환성을 확인하세요. 착용감은 개인마다 다릅니다.',
  },
  notepad: {
    name: 'OXFORD A5 리갈패드',
    option: '노랑 · 80매 · 5개 구성',
    kind: '기록 도구',
    href: 'https://link.coupang.com/a/ikjyKf6bwO',
    checkedAt: '2026-11-01',
    consideration: 'A5 크기와 줄 간격을 살펴보고, 5개 묶음이 필요한 분량인지 확인하세요.',
  },
}

export const affiliateCollections = {
  'productive-browser': {
    title: '웹 작업을 위한 작은 도구',
    intro: '메모를 입력하거나 이미지를 편집할 때 쓸 주변기기입니다. 이미 편한 장비가 있다면 새로 살 필요는 없습니다.',
    items: [
      { id: 'mouse', reason: 'Photopea에서 영역을 선택하거나 여러 웹 문서를 오가며 작업할 때 살펴볼 입력 도구입니다.' },
      { id: 'keyboard', reason: 'Notion에 긴 메모를 적거나 Todoist에 할 일을 정리할 때, 별도 키보드가 필요한 경우 비교해 보세요.' },
    ],
  },
  'design-toolkit': {
    title: '화면을 만들기 전, 책상 위 도구',
    intro: '정교하게 선택할 입력 도구와 아이디어를 적을 종이입니다. 소개한 웹 도구를 이용하는 데 구매가 필수인 것은 아닙니다.',
    items: [
      { id: 'mouse', reason: 'Canva나 Figma에서 요소를 선택하고 위치를 옮길 때 사용할 마우스 후보입니다.' },
      { id: 'notepad', reason: '색의 역할, 필요한 문구, 화면의 이동 순서를 먼저 적어 두고 디지털 작업으로 옮겨 보세요.' },
    ],
  },
  'learning-online': {
    title: '강의를 듣고, 내 것으로 기록하기',
    intro: '온라인 공부에 쓸 수 있는 보조 도구입니다. 손에 있는 이어폰과 노트로 시작해도 충분합니다.',
    items: [
      { id: 'headset', reason: 'TED나 온라인 강의를 들을 때, 스피커 대신 개인 청취용 기기가 필요한 경우 살펴보세요.' },
      { id: 'notepad', reason: '강의의 핵심 한 문장과 스스로 풀어 본 문제를 화면 밖에 남기는 학습 기록에 사용할 수 있습니다.' },
    ],
  },
}

export function getAffiliateCollection(slug, locale = 'ko') {
  // Coupang links target the Korean store; international guides retain their own content.
  if (locale !== 'ko') return null
  const collection = affiliateCollections[slug]
  if (!collection) return null
  return { ...collection, items: collection.items.map(({ id, reason }) => ({ ...affiliateProducts[id], id, reason })) }
}

const l = (ko, en, ja, zh) => ({ ko, en, ja, zh })
export const affiliatePolicy = {
  title: l('상품 제휴 안내', 'Product affiliate links', '商品アフィリエイトについて', '商品推广链接说明'),
  text: l(
    '일부 한국어 가이드에는 쿠팡파트너스 상품 제휴 링크가 있습니다. 해당 영역에 광고와 경제적 이해관계를 표시하며, 구매가 인정되면 운영자에게 수수료가 지급됩니다. 상품은 글의 용도와 연결해 소개하고 실사용 후기나 최저가 보장으로 표현하지 않습니다. 가격·재고·배송·반품 조건은 판매처에서 확인해야 합니다. 제휴 여부가 웹사이트 목록의 순서를 바꾸지는 않습니다.',
    'Some Korean guides contain Coupang Partners product links. These sections are labeled as advertising and disclose the commission relationship. The operator may earn a commission on qualifying purchases. Products are selected for the article’s purpose, not presented as hands-on reviews or lowest-price guarantees. Check price, stock, delivery and returns with the retailer. Affiliate relationships do not change the website directory order.',
    '一部の韓国語ガイドにはCoupang Partnersの商品リンクがあります。該当欄には広告と報酬関係を明示し、対象となる購入により運営者に手数料が支払われます。記事の用途に合わせた紹介であり、実使用レビューや最安値の保証ではありません。価格・在庫・配送・返品条件は販売店でご確認ください。提携の有無でサイト一覧の順番は変わりません。',
    '部分韩语指南包含Coupang Partners商品推广链接，并标明广告及佣金关系。符合条件的购买可使运营者获得佣金。商品按文章用途介绍，不代表亲身评测或最低价保证。价格、库存、配送及退货条件请向销售方确认。推广合作不改变网站目录的排列顺序。',
  ),
  privacyTitle: l('상품 제휴 링크와 정보 처리', 'Affiliate links and data', '商品リンクと情報の取り扱い', '推广链接与数据处理'),
  privacyText: l(
    '일부 한국어 가이드의 쿠팡파트너스 상품 링크를 누르면 쿠팡의 제휴 링크 서비스와 판매 페이지로 이동합니다. 이때 쿠팡은 IP 주소, 브라우저 정보, 링크의 제휴 식별자 등을 처리하고 쿠키 등을 이용해 구매 실적을 확인할 수 있습니다. 사이트 맛집은 이 링크에 검색어·책갈피·개인 식별자를 추가하지 않으며 쿠팡의 상품 광고 스크립트, 추적 픽셀, 외부 상품 이미지를 자동으로 불러오지 않습니다. 링크 클릭 이후의 정보 처리는 쿠팡의 개인정보 처리방침에 따릅니다.',
    'Clicking a Coupang Partners product link in a Korean guide opens Coupang’s affiliate link service and retail page. Coupang may process your IP address, browser information and the link’s affiliate identifier, and use cookies to attribute purchases. Vsites does not append searches, bookmarks or personal identifiers to these links, or automatically load Coupang product ad scripts, tracking pixels or external product images. Data processing after the click is governed by Coupang’s privacy policy.',
    '韓国語ガイドの商品リンクを押すと、Coupangのアフィリエイトリンクサービスと販売ページに移動します。CoupangはIPアドレス、ブラウザ情報、リンクの提携識別子などを処理し、Cookie等で購入実績を確認する場合があります。Vsitesは検索語・ブックマーク・個人識別子をリンクに追加せず、Coupangの商品広告スクリプト、追跡ピクセル、外部商品画像を自動で読み込みません。クリック後の情報処理にはCoupangのプライバシーポリシーが適用されます。',
    '点击韩语指南中的Coupang Partners商品链接后，会进入Coupang推广链接服务及销售页面。Coupang可能处理IP地址、浏览器信息、链接中的推广标识，并使用Cookie等确认购买归属。Vsites不在链接中添加搜索词、收藏或个人标识，也不自动加载Coupang商品广告脚本、追踪像素或外部商品图片。点击后的数据处理遵循Coupang隐私政策。',
  ),
  privacyLink: l('쿠팡 개인정보 처리방침', 'Coupang privacy policy', 'Coupangプライバシーポリシー', 'Coupang隐私政策'),
}
