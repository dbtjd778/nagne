import { Link } from 'react-router-dom'
import PageShell, { useDocumentMeta } from '../components/PageShell'
import { regions, totalSiteCount, totalCategoryCount, countByRegion } from '../data/sites'
import { site, otherSites } from '../site.config'

export default function About() {
  useDocumentMeta(
    '소개 — 나그네',
    `나그네는 심심할 때 열어보라고 만든 웹사이트 큐레이션입니다. ${totalCategoryCount}개 카테고리 ${totalSiteCount}개 링크를 어떤 기준으로 골랐는지, 어떻게 관리하는지 설명합니다.`
  )

  return (
    <PageShell
      eyebrow="About"
      title="이 목록은 무엇인가"
      lead={`나그네는 인터넷에서 시간을 보낼 곳을 찾는 사람을 위한 큐레이션 디렉토리입니다. 한국 사이트 ${countByRegion.kr}개와 외국 사이트 ${countByRegion.global}개, 모두 ${totalSiteCount}개의 웹사이트를 ${totalCategoryCount}개의 카테고리로 정리해 두었습니다.`}
      updated={site.policyUpdatedAt}
    >
      <h2>왜 만들었나요</h2>
      <p>
        브라우저를 열었는데 갈 곳이 없는 순간이 있습니다. 늘 보던 커뮤니티는 이미 다 봤고, 영상은
        보고 나면 시간만 사라져 있습니다. 그럴 때 열어볼 목록이 하나쯤 있으면 좋겠다는 생각에서
        시작했습니다.
      </p>
      <p>
        검색엔진은 <strong style={{ color: 'var(--fg)' }}>무언가를 찾고 있는 사람</strong>에게는
        완벽하지만, <strong style={{ color: 'var(--fg)' }}>무엇을 찾아야 할지 모르는 사람</strong>
        에게는 도움이 되지 않습니다. 검색창은 이미 답을 알고 있는 사람의 도구이기 때문입니다. 이
        사이트는 후자를 위한 것입니다. 그래서 첫 화면에 검색창 대신 카테고리 상자를 두었습니다.
      </p>

      <h2>어떻게 고르나요</h2>
      <p>
        모든 링크는 목록에 올리기 전에 직접 열어보고, 어떤 곳인지 한 문장으로 정리한 뒤에 추가합니다.
        아래 세 가지를 기준으로 삼고 있습니다.
      </p>
      <ul>
        <li>
          <strong style={{ color: 'var(--fg)' }}>가입 없이 열리는가</strong> — 첫 화면에서 로그인부터
          요구하는 곳은 대부분 뺐습니다. 궁금해서 눌렀는데 회원가입 폼이 뜨면 그 흥미는 대개 거기서
          끝나기 때문입니다.
        </li>
        <li>
          <strong style={{ color: 'var(--fg)' }}>한 줄로 설명되는가</strong> — 무엇을 하는 곳인지 한
          문장으로 정리되지 않으면 넣지 않았습니다. 설명이 길어진다는 것은 대체로 그 사이트가 무엇을
          하는 곳인지 스스로도 정하지 못했다는 뜻이었습니다.
        </li>
        <li>
          <strong style={{ color: 'var(--fg)' }}>오래 살아남을 것인가</strong> — 유행을 타고 사라지는
          서비스보다, 몇 년 뒤에도 같은 주소에서 열릴 확률이 높은 곳을 우선했습니다.
        </li>
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
      <p>
        한국 사이트 쪽에는 심리테스트나 한글 타자 게임처럼 국내에서만 유행한 형식이 많고, 외국 사이트
        쪽에는 설명 없이 화면만 봐도 되는 인터랙티브 실험이 많습니다.
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
                <Link to={`/c/${c.id}`}>{c.category}</Link> — {c.tagline} ({c.sites.length}개)
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2>어떻게 관리하나요</h2>
      <p>
        링크가 살아 있는지 정기적으로 자동 점검합니다. 응답이 없거나 주소가 바뀐 곳은 확인 후
        수정하거나 목록에서 뺍니다. 실제로 첫 공개 전에도 이 점검으로 이미 종료된 서비스 몇 곳을
        걸러냈습니다.
      </p>
      <p>
        그럼에도 인터넷에서는 어제까지 멀쩡하던 사이트가 오늘 사라지는 일이 흔합니다. 열리지 않는
        링크를 발견하시면 <Link to="/contact">문의</Link>로 알려주세요. 확인되는 대로 고치겠습니다.
      </p>

      <h2>한계와 주의사항</h2>
      <p>
        여기 실린 설명은 «이 사이트는 이런 곳이다»를 한 줄로 압축한 것일 뿐, 품질을 보증하는 평가가
        아닙니다. 같은 사이트라도 사람에 따라 전혀 다르게 느낄 수 있습니다.
      </p>
      <p>
        또한 링크된 사이트의 내용, 서비스, 개인정보 처리 방식은 각 사이트 운영자의 책임이며 나그네가
        관리하지 않습니다. 특히 파일을 올리거나 계정을 만들 때는 해당 사이트의 정책을 직접 확인해
        주세요. 자세한 내용은 <Link to="/terms">이용약관</Link>과{' '}
        <Link to="/privacy">개인정보처리방침</Link>에 정리해 두었습니다.
      </p>

      <h2>운영 방식</h2>
      <p>
        이 사이트는 개인이 운영하며 회원가입 없이 누구나 무료로 사용할 수 있습니다. 운영 비용을
        충당하기 위해 페이지 일부에 광고가 표시될 수 있으며, 광고와 관련한 데이터 처리 내용은{' '}
        <Link to="/privacy">개인정보처리방침</Link>에 정리해 두었습니다. 소스 코드와 큐레이션 데이터는{' '}
        <a href={site.repo} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        에 공개되어 있습니다.
      </p>

      <h2>만든 사람</h2>
      <p>
        웹에서 쓸모 있는 작은 도구를 만들어 공개하고 있습니다. 이 사이트 외에 아래 두 곳을 함께
        운영합니다.
      </p>
      <ul>
        {otherSites.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.name}
            </a>{' '}
            — {s.desc}
          </li>
        ))}
      </ul>
      <p>
        추천하고 싶은 사이트가 있거나 고쳤으면 하는 점이 있다면{' '}
        <Link to="/contact">문의</Link>로 알려주세요.
      </p>
    </PageShell>
  )
}
