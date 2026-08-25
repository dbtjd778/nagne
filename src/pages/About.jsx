import { Link } from 'react-router-dom'
import PageShell, { useDocumentMeta } from '../components/PageShell'
import { regions, totalSiteCount, totalCategoryCount, countByRegion } from '../data/sites'

export default function About() {
  useDocumentMeta(
    '소개 — 나그네',
    `나그네는 심심할 때 열어보라고 만든 웹사이트 큐레이션입니다. ${totalCategoryCount}개 카테고리 ${totalSiteCount}개 링크를 어떤 기준으로 골랐는지 설명합니다.`
  )

  return (
    <PageShell
      eyebrow="About"
      title="이 목록은 무엇인가"
      lead={`나그네는 인터넷에서 시간을 보낼 곳을 찾는 사람을 위한 큐레이션 디렉토리입니다. 한국 사이트 ${countByRegion.kr}개와 외국 사이트 ${countByRegion.global}개, 모두 ${totalSiteCount}개의 웹사이트를 ${totalCategoryCount}개의 카테고리로 정리해 두었습니다.`}
    >
      <h2>시작한 이유</h2>
      <p>
        브라우저를 열었는데 갈 곳이 없는 순간이 있습니다. 늘 보던 커뮤니티는 이미 다 봤고, 영상은
        보고 나면 시간만 사라져 있습니다. 그럴 때 열어볼 목록이 하나쯤 있으면 좋겠다는 생각에서
        시작했습니다.
      </p>
      <p>
        검색엔진은 무언가를 찾고 있는 사람에게는 완벽하지만, 무엇을 찾아야 할지 모르는 사람에게는
        도움이 되지 않습니다. 이 사이트는 후자를 위한 것입니다.
      </p>

      <h2>어떻게 고르는가</h2>
      <p>
        모든 링크는 목록에 올리기 전에 직접 열어보고, 어떤 곳인지 한 문장으로 정리한 뒤에 추가합니다.
        아래 세 가지를 기준으로 삼고 있습니다.
      </p>
      <ul>
        <li>회원가입이나 결제 없이 첫 화면에서 바로 무언가를 해볼 수 있을 것</li>
        <li>무엇을 하는 곳인지 한 줄로 설명될 것</li>
        <li>유행이 지나도 같은 주소에서 계속 열릴 가능성이 높을 것</li>
      </ul>
      <p>
        어떤 대가를 받고 특정 사이트를 목록에 넣지 않습니다. 만약 그런 제휴가 생긴다면 해당 항목에
        분명히 표기하겠습니다.
      </p>

      <h2>한국과 외국을 나눈 이유</h2>
      <p>
        같은 목적의 도구라도 한국어로 만들어진 것과 아닌 것은 쓰임새가 다릅니다. 맞춤법 검사나 한글
        폰트처럼 해외 서비스로는 대체되지 않는 영역이 있고, 반대로 언어와 상관없이 화면만 보면 되는
        곳들도 있습니다. 그래서 지역 탭을 먼저 고르고 카테고리로 들어가는 구조로 만들었습니다.
      </p>

      <h2>카테고리 구성</h2>
      {regions.map((region) => (
        <div key={region.id}>
          <h3>
            {region.label} — {countByRegion[region.id]}개
          </h3>
          <ul>
            {region.categories.map((c) => (
              <li key={c.id}>
                <strong style={{ color: 'var(--fg)' }}>{c.category}</strong> — {c.tagline} (
                {c.sites.length}개)
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2>외부 링크에 대하여</h2>
      <p>
        이 사이트는 다른 웹사이트로 향하는 링크를 모아둔 곳입니다. 링크된 사이트의 내용, 서비스,
        개인정보 처리 방식은 각 사이트 운영자의 책임이며 나그네가 관리하지 않습니다. 자세한 내용은{' '}
        <Link to="/terms">이용약관</Link>과 <Link to="/privacy">개인정보처리방침</Link>을 확인해
        주세요.
      </p>

      <h2>제보와 문의</h2>
      <p>
        추천하고 싶은 사이트가 있거나, 목록에서 연결되지 않는 링크를 발견하셨다면{' '}
        <Link to="/contact">문의 페이지</Link>를 통해 알려주세요. 확인 후 반영합니다.
      </p>
    </PageShell>
  )
}
