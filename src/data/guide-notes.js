// Editorial additions are authored in all four languages, rendered on the server.
// Sources describe capabilities; the exercises and selection criteria are ours.
const l = (ko, en, ja, zh) => ({ ko, en, ja, zh })
export function localizeEditorial(value, locale = 'ko') {
  if (Array.isArray(value)) return value.map(item => localizeEditorial(item, locale))
  if (value && typeof value === 'object') {
    if (Object.hasOwn(value, 'ko')) return value[locale]
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localizeEditorial(item, locale)]))
  }
  return value
}
export const editorialLabels = {
  comparison: l('어떤 일을 하고 싶은가요?', 'What do you want to do?', '何をしたいですか？', '你想完成什么？'),
  task: l('목적', 'Goal', '目的', '目的'),
  choice: l('출발점', 'Start here', '出発点', '从这里开始'),
  limit: l('선택할 때 알아둘 점', 'What to consider', '選ぶときの注意点', '选择时需注意'),
  exercise: l('이렇게 시작해 보세요', 'Try this first', 'まず試してみましょう', '可以这样开始'),
  sources: l('확인한 공식 자료', 'Official sources consulted', '確認した公式資料', '参考的官方资料'),
  checked: l('자료 확인', 'Sources checked', '資料確認日', '资料核对日期'),
  method: l('작성·번역 방식과 정정 안내', 'Writing, translation and corrections', '執筆・翻訳方針と訂正について', '编写、翻译与更正说明'),
  byline: l('편집·운영: 사이트 맛집', 'Published by Vsites', '編集・運営：Vsites', '编辑与运营：Vsites'),
  note: l('아래 선택 기준과 연습은 사이트 맛집의 활용 제안입니다. 공식 자료는 기능 설명의 근거이며, 모든 서비스의 가입·결제·전체 기능을 시험했다는 뜻은 아닙니다.', 'The choices and exercises below are suggestions from Vsites. Official sources support the feature descriptions; they do not mean we tested registration, payment or every feature of each service.', '以下の選び方と練習はVsitesからの提案です。公式資料は機能説明の根拠であり、各サービスの登録・支払い・全機能を試したことを意味しません。', '以下选择标准与练习是Vsites的使用建议。官方资料用于支持功能说明，不代表我们测试了各服务的注册、付款或全部功能。'),
}
export const guideNotes = {
  'boredom-websites': {
    checkedAt: '2026-11-01',
    rows: [
      { goal: l('짧은 시간에 직접 그리기', 'Draw something in a short burst', '短時間で自分で描く', '用短暂时间画一画'), name: 'Quick, Draw!', href: 'https://quickdraw.withgoogle.com/', limit: l('제한 시간은 20초입니다. 느긋한 그림 연습보다 즉각 반응하는 놀이에 맞고, 그린 그림은 공개 연구 데이터에 기여할 수 있습니다.', 'Each drawing has a 20-second limit. Choose it for quick feedback rather than relaxed sketching; drawings can contribute to a public research dataset.', '1つの絵の制限時間は20秒。ゆっくり描く練習より、すぐに反応が返る遊び向けです。絵は公開研究データに使われることがあります。', '每幅画限时20秒，更适合快速互动而非慢慢练画。画作可能用于公开的研究数据集。') },
      { goal: l('시간 제한 없이 공간 둘러보기', 'Explore a space at your own pace', '自分のペースで空間を巡る', '按自己的节奏参观空间'), name: 'Google Arts & Culture · Museum Views', href: 'https://artsandculture.google.com/project/streetviews', limit: l('전시 공간을 360도로 둘러보는 출발점입니다. 현장 실시간 영상이나 현재 전시 상태를 보장하는 화면은 아닙니다.', 'A starting point for 360-degree museum tours. These views are not a guarantee of live footage or the current exhibition layout.', '展示空間を360度で巡る出発点です。ライブ映像や現在の展示配置を保証するものではありません。', '适合360度参观博物馆，但画面不保证是直播或当前的展陈状态。') },
    ],
    exerciseTitle: l('그림 맞히기를 관찰 놀이로 바꾸기', 'Turn drawing into an observation game', 'お絵描きを観察ゲームにする', '把猜画游戏变成观察练习'),
    steps: [
      l('Quick, Draw!에서 첫 제시어를 읽고, 가장 구별되는 외곽선부터 그려보세요.', 'Read the first prompt in Quick, Draw! and start with the outline that best distinguishes the object.', 'Quick, Draw!の最初のお題を読み、その物を見分ける輪郭から描きましょう。', '读完Quick, Draw!的第一个题目，先画出最有辨识度的轮廓。'),
      l('정답 여부와 별개로 기계가 혼동한 대상을 기억해 두세요. 다음 그림에서는 세부 묘사보다 특징 하나를 먼저 그려보세요.', 'Notice what the model confuses it with. In the next drawing, try one distinctive feature before adding details.', '正解かどうかだけでなく、何と間違えたかも観察。次は細部より特徴を1つ先に描きます。', '留意模型把它误认成了什么。下一幅先画一个关键特征，再补细节。'),
      l('결과에서 다른 그림을 비교하며 “왜 이것이 비슷해 보일까?”를 한 문장으로 적어보세요. 인식 결과를 그림 실력 점수로 받아들일 필요는 없습니다.', 'Compare the drawings shown in the results and write one sentence about why they look similar. Recognition is not a score for your drawing ability.', '結果の絵を比較し、似て見える理由を一文で書いてみましょう。認識結果は絵の上手さの点数ではありません。', '比较结果中的其他画作，用一句话解释相似之处。识别结果并不是绘画水平评分。'),
    ],
    sources: [['Quick, Draw! · About', 'https://quickdraw.withgoogle.com/'], ['Google Arts & Culture · Museum Views', 'https://artsandculture.google.com/project/streetviews']],
  },
  'virtual-travel': {
    checkedAt: '2026-11-01',
    rows: [
      { goal: l('건물 내부와 작품의 맥락 보기', 'See interiors and the context of art', '建物内部や作品の背景を見る', '看建筑内部与作品背景'), name: 'Google Arts & Culture · Museum Views', href: 'https://artsandculture.google.com/project/streetviews', limit: l('전시실을 이동하며 공간 관계를 볼 때 유용합니다. 작품 해설이 필요하면 해당 기관의 컬렉션 자료도 함께 읽으세요.', 'Useful for seeing how rooms relate to each other. For interpretation of a work, also read the museum’s collection record.', '展示室同士の位置関係を見るのに便利です。作品の解説は、その館のコレクション資料も読みましょう。', '适合了解展厅之间的空间关系。需要作品解说时，请同时查看馆方的藏品资料。') },
      { goal: l('바람 흐름을 넓은 범위에서 보기', 'See wind patterns across a wide area', '広い範囲の風の流れを見る', '观察大范围风场'), name: 'earth.nullschool.net', href: 'https://earth.nullschool.net/', limit: l('기상 모델 등을 시각화한 지도입니다. 관측 카메라가 아니며, 색을 비교하기 전에 날짜·고도·변수를 먼저 맞춰야 합니다.', 'A visualization of weather models and other data, not a camera feed. Match the time, altitude and variable before comparing colors.', '気象モデルなどの可視化で、観測カメラではありません。色を比べる前に日時・高度・変数をそろえましょう。', '这是气象模型等数据的可视化，并非摄像头画面。比较颜色前，先统一时间、高度和变量。') },
    ],
    exerciseTitle: l('한 도시를 두 가지 화면으로 읽기', 'Read one city through two different views', '1つの都市を2つの画面から読む', '用两种画面了解一座城市'),
    steps: [
      l('가보고 싶은 도시 하나를 정하고 Museum Views에서 그 지역의 전시 공간을 찾아보세요. 눈에 들어온 방의 이름이나 기관명을 기록합니다.', 'Choose a city and look for a museum space in Museum Views. Record the name of the room or institution that catches your attention.', '訪れたい都市を決め、Museum Viewsで展示空間を探します。気になった部屋や施設の名前を記録しましょう。', '选一座想去的城市，在Museum Views中寻找当地展馆，记下感兴趣的展厅或机构名称。'),
      l('바람 지도에서 같은 지역을 찾아 표시 시각과 고도를 읽습니다. 위성 사진을 본 것처럼 해석하지 말고, 어떤 데이터를 표시하는지 확인하세요.', 'Find the same area on the wind map and read the displayed time and altitude. Check the data being shown instead of treating it as satellite photography.', '風の地図で同じ地域を探し、表示日時と高度を読みます。衛星写真と捉えず、何のデータか確認してください。', '在风场地图中找到同一区域，读取显示时间与高度。先确认数据类型，不要把它当成卫星照片。'),
      l('실내에서 궁금했던 것 하나와 지도에서 발견한 패턴 하나를 적어보세요. 서로 다른 시점의 화면을 같은 순간의 풍경처럼 연결하지 않는 것이 핵심입니다.', 'Write down one question about the interior and one pattern from the map. Keep the timestamps separate rather than assuming both show the same moment.', '室内で気になったことと地図のパターンを1つずつ記録。異なる時点の画面を同じ瞬間の景色として結び付けないことが大切です。', '分别记录一个展馆问题和一个地图规律。两者可能来自不同时刻，不要当成同一瞬间的景象。'),
    ],
    sources: [['Google Arts & Culture · Museum Views', 'https://artsandculture.google.com/project/streetviews'], ['earth · About and data sources', 'https://earth.nullschool.net/about.html']],
  },
  'design-toolkit': {
    checkedAt: '2026-11-01',
    rows: [
      { goal: l('글자와 배경의 색을 결정하기', 'Choose text and background colors', '文字と背景の色を決める', '确定文字与背景色'), name: 'Adobe Color / Adobe Express', href: 'https://color.adobe.com/create/color-accessibility', limit: l('팔레트의 조화와 글자의 대비는 다른 문제입니다. 색각 시뮬레이션을 본 뒤 대비 검사도 별도로 확인하세요.', 'Palette harmony and readable text contrast are different checks. Use the color-vision simulation and also inspect text contrast.', '配色の調和と文字のコントラストは別の確認項目です。色覚シミュレーションに加え、文字のコントラストも確認しましょう。', '配色和谐与文字对比度是两回事。查看色觉模拟后，也要单独检查文字对比度。') },
      { goal: l('이미지 일부를 자르고 전달하기', 'Crop an image and share it', '画像の一部を切り抜いて渡す', '裁剪图片并交付'), name: 'Photopea', href: 'https://www.photopea.com/', limit: l('크기 조정은 전체를 확대·축소하고, 자르기는 남길 영역을 고르는 작업입니다. 레이어 보관용 PSD와 전달용 이미지를 구분하세요.', 'Resizing scales the content; cropping chooses the area to retain. Keep the layered PSD separate from the exported image you share.', 'サイズ変更は全体の拡大・縮小、切り抜きは残す範囲の選択です。レイヤー保存用PSDと共有用画像を分けましょう。', '调整尺寸会缩放内容，裁剪则选择保留的区域。保留图层的PSD应与交付图片分开保存。') },
    ],
    exerciseTitle: l('작은 행사 안내 이미지 한 장 만들기', 'Prepare one small event announcement', '小さなイベント告知を1枚作る', '制作一张小型活动通知图'),
    steps: [
      l('제목·날짜·장소 세 가지를 먼저 적습니다. 배경색 하나와 글자색 하나만 골라 대비를 확인하세요.', 'Write the title, date and venue first. Choose one background color and one text color, then check their contrast.', '最初にタイトル・日時・場所を書きます。背景色と文字色を1色ずつ選び、コントラストを確認しましょう。', '先写标题、日期和地点。只选一种背景色与一种文字色，然后检查对比度。'),
      l('사진을 쓴다면 Photopea에서 File → Open으로 열고 Crop 도구로 주제가 남는 영역을 고릅니다. Image → Image Size로 크기를 조정할 때는 비율이 찌그러지지 않았는지 확인합니다.', 'If you use a photo, open it with File → Open in Photopea and use Crop to retain the subject. If resizing with Image → Image Size, check that the proportions remain intact.', '写真を使うならPhotopeaのFile → Openで開き、Cropで主題を残します。Image → Image Sizeで変更するときは縦横比を確認しましょう。', '如需照片，在Photopea中选择File → Open，使用Crop保留主体。通过Image → Image Size缩放时，检查比例是否变形。'),
      l('편집용은 PSD로 보관하고 전달용은 File → Export As로 내보냅니다. 휴대전화에서 실제 크기로 열어 날짜와 장소가 읽히면 첫 결과물로 충분합니다.', 'Keep a PSD for editing and use File → Export As for sharing. Open the result at its actual size on a phone and check the date and venue are readable.', '編集用はPSDで保存し、共有用はFile → Export Asで書き出します。スマホで実際の大きさで開き、日時と場所が読めるか確認してください。', '编辑版保存为PSD，交付版通过File → Export As导出。在手机上按实际大小打开，确认日期与地点清晰可读。'),
    ],
    sources: [['Adobe · Color accessibility', 'https://color.adobe.com/create/color-accessibility'], ['Photopea · Open and Save', 'https://www.photopea.com/learn/opening-saving'], ['Photopea · Image size', 'https://www.photopea.com/learn/index.php?page=image-size']],
  },
  'learning-online': {
    checkedAt: '2026-11-01',
    rows: [
      { goal: l('개념을 이해하고 문제로 확인하기', 'Understand a concept, then practise', '概念を理解して問題で確かめる', '理解概念，再做题验证'), name: 'Khan Academy', href: 'https://www.khanacademy.org/', limit: l('설명과 연습을 함께 찾는 출발점입니다. 과목과 언어별 제공 범위가 다르므로 공부할 단원부터 확인하세요.', 'A starting point for explanations and practice. Check the specific unit because coverage varies by subject and language.', '解説と練習を探す出発点です。科目や言語で範囲が異なるため、学ぶ単元を確認してください。', '适合寻找讲解与练习，但不同学科和语言的内容范围不同，请先查看目标章节。') },
      { goal: l('웹페이지를 직접 만들기', 'Build a web page yourself', '自分でウェブページを作る', '亲手制作网页'), name: 'MDN · Your first website', href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content', limit: l('문서를 읽는 것에서 작은 HTML 파일을 만드는 단계로 이어집니다. 디자인 도구를 고르기 전에 제목·본문·링크가 하는 일을 구분해 보세요.', 'Move from reading to making a small HTML file. Before choosing design tools, distinguish what headings, paragraphs and links do.', '読むだけでなく小さなHTMLファイルを作る段階へ進めます。デザインツールの前に、見出し・本文・リンクの役割を区別しましょう。', '从阅读走向制作一个小HTML文件。选择设计工具之前，先区分标题、段落和链接的作用。') },
    ],
    exerciseTitle: l('배운 내용을 링크 세 개로 설명하기', 'Explain what you learned with three links', '学んだことを3つのリンクで説明する', '用三个链接解释所学内容'),
    steps: [
      l('MDN의 첫 웹사이트 수업에서 HTML 구조를 읽고, 제목 하나·문단 하나·링크 세 개가 있는 페이지를 만들어보세요.', 'Read the HTML structure in MDN’s first-website lesson. Make a page with one heading, one paragraph and three links.', 'MDNの初めてのウェブサイトの教材でHTML構造を読み、見出し1つ・段落1つ・リンク3つのページを作りましょう。', '阅读MDN入门课程的HTML结构，制作包含一个标题、一个段落和三个链接的页面。'),
      l('세 링크는 자료 모음이 아니라 서로 다른 질문의 답으로 고릅니다. 예를 들면 “개념은 무엇인가”, “어떻게 쓰는가”, “내가 만든 결과는 무엇인가”입니다.', 'Choose links that answer different questions: what the concept means, how it is used, and what you made with it.', 'リンクはそれぞれ別の問いへの答えにします。「概念は何か」「どう使うか」「自分は何を作ったか」などです。', '让三个链接分别回答不同问题，例如“概念是什么”“如何使用”“我做出了什么”。'),
      l('페이지를 브라우저에서 열고 링크가 예상한 자료로 가는지 확인하세요. 태그 하나를 바꿔 결과가 왜 달라지는지 설명할 수 있으면 다음 단계로 넘어갑니다.', 'Open the page in a browser and check each destination. Change one tag and explain the effect before moving on.', 'ブラウザで開き、各リンク先を確認します。タグを1つ変えて結果の違いを説明できたら次へ進みましょう。', '在浏览器中打开页面并逐一检查链接。修改一个标签，能解释变化原因后再进入下一步。'),
    ],
    sources: [['Khan Academy · About', 'https://www.khanacademy.org/about'], ['MDN · HTML: Creating the content', 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content']],
  },
  'korean-useful-websites': {
    checkedAt: '2026-11-01',
    rows: [
      { goal: l('인용할 통계 수치 찾기', 'Find a statistic to cite', '引用する統計数値を探す', '查找可引用的统计数据'), name: 'KOSIS', href: 'https://kosis.kr/', limit: l('통계표를 찾았다면 수치와 단위를 함께 읽으세요. 주민등록 인구와 조사 인구처럼 정의가 다르면 같은 지역도 수치가 다를 수 있습니다.', 'Read the unit alongside the value. Different population definitions, such as resident registration versus a survey, can produce different figures for the same area.', '数値と単位を一緒に読みます。住民登録人口と調査人口など、定義が違えば同じ地域でも数値は変わります。', '数值应与单位一起阅读。登记人口与调查人口等定义不同，即使同一地区也可能出现不同数字。') },
      { goal: l('분석에 쓸 파일이나 API 찾기', 'Find a file or API for analysis', '分析用ファイルやAPIを探す', '寻找用于分析的文件或API'), name: 'DATA.GO.KR', href: 'https://www.data.go.kr/', limit: l('데이터 유형·제공 기관·갱신 주기로 후보를 좁히세요. 파일 내려받기와 API 활용 신청은 다른 경로이며, 제공 조건은 항목별로 확인해야 합니다.', 'Narrow by data type, provider and update schedule. File downloads and API access follow different paths; check each dataset’s conditions.', '種類・提供機関・更新頻度で絞ります。ファイル取得とAPI利用申請は別の手順なので、各データの条件を確認してください。', '按数据类型、提供机构和更新周期筛选。文件下载与API申请是不同流程，需逐项确认使用条件。') },
    ],
    exerciseTitle: l('“우리 동네 인구”를 재현 가능한 메모로', 'Make a reproducible note about local population', '地域の人口を再確認できるメモにする', '为本地区人口做一份可复核的笔记'),
    steps: [
      l('KOSIS에서 지역명과 인구를 검색한 뒤, 사용할 표가 어떤 인구를 세는지 설명과 주석을 읽습니다.', 'Search KOSIS for the area and population, then read the table’s definitions and notes to identify what it counts.', 'KOSISで地域名と人口を検索し、表の説明・注記から何を数えているか確認します。', '在KOSIS搜索地区名与人口，阅读统计表定义和注释，确认其统计对象。'),
      l('지역·기준 시점·단위·표 이름·작성 기관·주소를 같은 메모에 남기세요. 숫자만 옮기면 다음 달에 같은 자료를 다시 찾기 어렵습니다.', 'Record the area, reference date, unit, table title, producing agency and URL together. A number alone is hard to trace next month.', '地域・基準時点・単位・表名・作成機関・URLを一緒に記録。数字だけでは翌月に同じ資料を探しにくくなります。', '一起记录地区、基准日期、单位、表名、编制机构和网址。只记数字，下个月很难追溯原资料。'),
      l('다른 자료와 비교할 때는 기준 시점과 정의가 일치하는지 먼저 확인하세요. 차이가 있으면 평균을 내기보다 두 수치의 조건을 나란히 적습니다.', 'Before comparing another source, check the date and definition match. If they differ, record both conditions rather than averaging the figures.', '別資料との比較前に時点と定義が同じか確認。違う場合は平均せず、それぞれの条件を並べて記録します。', '比较其他资料前，确认日期与定义是否一致。如不一致，分别注明条件，不要直接取平均值。'),
    ],
    sources: [['KOSIS · National statistics portal', 'https://kosis.kr/'], ['DATA.GO.KR · User guide', 'https://www.data.go.kr/ugs/selectPublicDataUseGuideView.do']],
  },
  'productive-browser': {
    checkedAt: '2026-11-01',
    rows: [
      { goal: l('내용이나 구도를 바꾸기', 'Change the content or composition', '内容や構図を変える', '修改内容或构图'), name: 'Photopea', href: 'https://www.photopea.com/', limit: l('자르기·레이어 편집이 필요할 때 고르세요. 편집용 PSD를 남기고 공유용 파일을 따로 내보내면 수정하기 쉽습니다.', 'Choose it when you need cropping or layer editing. Keep an editable PSD and export a separate file for sharing.', '切り抜きやレイヤー編集が必要なときに。編集用PSDを残し、共有用ファイルを別に書き出すと後で修正しやすくなります。', '需要裁剪或图层编辑时可选它。保留可编辑PSD，再单独导出交付文件，方便日后修改。') },
      { goal: l('완성된 이미지의 용량 줄이기', 'Reduce the size of a finished image', '完成した画像の容量を減らす', '压缩已完成的图片'), name: 'Squoosh', href: 'https://squoosh.app/', limit: l('형식과 품질을 비교할 때 고르세요. 공식 설명상 이미지 압축은 기기 안에서 처리되지만, 사이트 이용 통계 수집과는 별개입니다.', 'Choose it to compare formats and quality. Its documentation says image compression runs locally; that is separate from site analytics.', '形式と品質を比較するときに。公式説明では画像圧縮は端末内で行われますが、サイトの利用統計収集とは別の話です。', '适合比较格式与画质。官方说明称图片压缩在本机完成，但这与网站使用统计的收集是两回事。') },
    ],
    exerciseTitle: l('공개 예제로 확인한 압축 결과', 'Compression checked with a public sample', '公開サンプルで確認した圧縮結果', '使用公开示例核对压缩结果'),
    steps: [
      l('2026년 11월 1일 데스크톱 브라우저에서 Squoosh의 Device screen 예제(pixel3.png)를 열었습니다. 화면에 표시된 원본 크기는 1.62 MB였습니다.', 'On 1 November 2026, we opened Squoosh’s Device screen sample (pixel3.png) in a desktop browser. The original size displayed was 1.62 MB.', '2026年11月1日、デスクトップブラウザでSquooshのDevice screenサンプル（pixel3.png）を開きました。元の表示容量は1.62 MBでした。', '2026年11月1日，我们在桌面浏览器中打开Squoosh的Device screen示例（pixel3.png），显示的原始大小为1.62 MB。'),
      l('크기 조정을 끈 기본 MozJPEG·품질 75에서는 154 kB, 감소율 90%가 표시됐습니다. 이는 이 예제의 표시값이며 다른 이미지나 브라우저에서 같은 결과를 보장하지 않습니다.', 'With resizing off and the default MozJPEG quality of 75, the display showed 154 kB and a 90% reduction. These are the sample’s displayed values, not a promise for other images or browsers.', 'サイズ変更なし、標準のMozJPEG・品質75では154 kB、90%削減と表示されました。このサンプルの表示値であり、他の画像やブラウザの結果を保証しません。', '关闭尺寸调整、采用默认MozJPEG与75画质时，显示154 kB、缩小90%。这是该示例的显示值，不保证其他图片或浏览器得到相同结果。'),
      l('같은 예제를 열고 가운데 비교선을 움직여 작은 글자와 화면 테두리를 확인해 보세요. 용량뿐 아니라 읽을 수 있는지로 결과를 고르고, 투명 배경이 필요하면 JPEG 대신 지원하는 형식을 비교하세요.', 'Open the same sample and move the comparison divider over small text and screen edges. Judge readability as well as file size; if you need transparency, compare a supporting format instead of JPEG.', '同じサンプルを開き、比較線を小さな文字や画面の縁に動かしてください。容量だけでなく読みやすさで判断し、透過が必要ならJPEG以外の対応形式を比べましょう。', '打开同一示例，移动对比分隔线查看小字与屏幕边缘。除文件大小外也要判断可读性；如需透明背景，请比较支持透明的格式而非JPEG。'),
    ],
    sources: [['Squoosh · Public sample', 'https://squoosh.app/'], ['Squoosh · Privacy and source', 'https://github.com/GoogleChromeLabs/squoosh#privacy'], ['Photopea · Open and Save', 'https://www.photopea.com/learn/opening-saving']],
  },
}
export function getGuideNotes(slug, locale = 'ko') {
  return localizeEditorial(guideNotes[slug], locale)
}
