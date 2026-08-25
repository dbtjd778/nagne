// 배포 전에 이 파일의 값만 바꾸면 사이트 전반에 반영됩니다.
export const site = {
  name: '나그네',
  // 도메인 구매 후 실제 주소로 교체 (마지막 슬래시 없이)
  url: 'https://allsites-mine.netlify.app',
  // 이 사이트 전용 문의 주소 — 반드시 실제로 받을 수 있는 계정이어야 합니다
  email: 'allsites.mine@gmail.com',
  // 소스 코드 저장소 (문의 페이지의 GitHub 이슈 링크에 사용)
  repo: 'https://github.com/dbtjd778/nagne',
  // 애드센스 게시자 ID — index.html, public/ads.txt 와 동일해야 합니다
  adsensePublisherId: 'ca-pub-5211829862421684',
  // 정책 문서 최종 수정일
  policyUpdatedAt: '2026년 8월 25일',
}

// 운영자가 만든 다른 사이트 — 소개 페이지에서 함께 안내합니다.
export const otherSites = [
  {
    name: '옷 색깔 꿀조합',
    url: 'https://you-color.co.kr',
    desc: '가진 옷의 색을 누르면 어울리는 색만 남는 옷 색 조합표',
  },
  {
    name: '오늘만 하고 끊을게',
    url: 'https://todayquit.com',
    desc: '금연과 금주 일수를 세고 아낀 돈을 계산해 주는 카운터',
  },
]
