import { Link } from 'react-router-dom'
import PageShell, { useDocumentMeta } from '../components/PageShell'
import { site } from '../site.config'

const REASONS = [
  {
    label: '사이트 제보',
    body: '목록에 넣을 만한 곳을 알고 계신가요. 정확한 주소와 함께 어떤 점이 좋았는지 한 줄만 적어주시면 직접 열어본 뒤 반영합니다. 한국 사이트와 외국 사이트 중 어느 쪽인지도 알려주시면 분류가 빨라집니다.',
  },
  {
    label: '링크가 안 열려요',
    body: '어떤 카테고리의 어떤 항목인지 알려주세요. 이미 종료된 서비스라면 목록에서 빼고, 주소만 바뀐 경우라면 새 주소로 고칩니다.',
  },
  {
    label: '설명이 잘못됐어요',
    body: '한 줄 설명이 실제 서비스와 다르거나 오래된 정보라면 알려주세요. 어떤 부분이 어떻게 달라졌는지 함께 적어주시면 확인이 쉽습니다.',
  },
  {
    label: '화면이 깨져요',
    body: '사용 중인 기기와 브라우저(예: 아이폰 사파리, 윈도우 크롬)를 함께 알려주세요. 어느 화면에서 무엇이 이상했는지 적어주시면 재현이 빠릅니다.',
  },
  {
    label: '삭제 요청',
    body: '본인이 운영하는 사이트가 이 목록에 실려 있고 삭제를 원하신다면, 해당 사이트의 운영자임을 확인할 수 있는 내용과 함께 요청해 주세요. 다른 문의보다 먼저 처리합니다.',
  },
  {
    label: '제휴 및 광고',
    body: '협업이나 광고 제안도 같은 주소로 보내주시면 됩니다. 다만 대가를 받고 목록의 순서나 구성을 바꾸지는 않습니다.',
  },
]

export default function Contact() {
  useDocumentMeta(
    '문의 — 나그네',
    `나그네 문의는 ${site.email} 으로 보내주세요. 사이트 제보, 링크 오류 신고, 삭제 요청, 제휴 문의를 받고 있습니다.`
  )

  return (
    <PageShell
      eyebrow="Contact"
      title="문의하기"
      lead="사이트 제보, 오류 신고, 삭제 요청 모두 환영합니다. 아래 두 가지 방법 중 편한 쪽으로 연락 주세요."
    >
      <h2>1. 이메일</h2>
      <p>어떤 내용이든 아래 주소로 보내주세요. 이 사이트 전용 주소입니다.</p>

      <div
        className="my-6 rounded-xl border p-6"
        style={{ borderColor: 'var(--line)', backgroundColor: 'var(--surface)' }}
      >
        <p className="eyebrow !mb-2">Email</p>
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-[clamp(0.95rem,3.4vw,1.25rem)] tracking-tight no-underline"
          style={{ color: 'var(--fg)' }}
        >
          {site.email}
        </a>
        <p className="!mb-0 mt-3 text-[13px]">
          주소를 눌러 바로 메일을 쓰거나, 복사해서 사용하셔도 됩니다.
        </p>
      </div>

      <p>
        보통 며칠 안에 확인하지만, 개인이 운영하는 사이트라 답변이 늦어질 수 있는 점 양해
        부탁드립니다. 보내주신 메일은 문의 답변 목적으로만 사용하고, 답변이 끝나면 삭제합니다.
      </p>

      <h2>2. GitHub 이슈</h2>
      <p>
        개발이나 데이터 관련 내용이라면{' '}
        <a href={`${site.repo}/issues`} target="_blank" rel="noopener noreferrer">
          GitHub 이슈
        </a>
        에 남겨주셔도 됩니다. 이 사이트의 소스 코드와 큐레이션 데이터가 공개되어 있는 곳이며,
        남겨주신 내용이 그대로 수정 목록이 됩니다. GitHub 계정이 필요하고, 남긴 내용은 공개됩니다.
      </p>

      <h2>이런 내용을 보내주시면 좋습니다</h2>
      <div
        className="my-6 grid grid-cols-1 overflow-hidden rounded-xl border sm:grid-cols-2"
        style={{ borderColor: 'var(--line)' }}
      >
        {REASONS.map((r, i) => (
          <div
            key={r.label}
            className="border-b p-5 sm:[&:nth-child(odd)]:border-r"
            style={{ borderColor: 'var(--line)' }}
          >
            <p
              className="mb-2 text-[14px] font-semibold tracking-tight"
              style={{ color: 'var(--fg)' }}
            >
              {r.label}
            </p>
            <p className="!mb-0 text-[13px] leading-[1.8]">{r.body}</p>
          </div>
        ))}
      </div>

      <h2>개인정보 관련 요청</h2>
      <p>
        이 사이트는 회원가입 기능이 없고 이용자가 입력한 정보를 서버에 저장하지 않습니다. 따라서
        운영자에게 삭제를 요청해야 할 개인정보가 따로 존재하지 않습니다. 광고와 통계에 쓰이는 쿠키를
        지우는 방법은 <Link to="/privacy">개인정보처리방침</Link> 3항에 적어두었습니다. 그 밖에
        개인정보 처리에 관해 궁금한 점이 있으면 위 이메일로 문의해 주세요.
      </p>

      <h2>답장이 오지 않는다면</h2>
      <p>
        메일이 스팸함으로 분류됐을 수 있습니다. 일주일이 지나도 회신이 없다면 한 번 더 보내주세요.
        같은 내용으로 여러 번 보내셔도 괜찮습니다.
      </p>
    </PageShell>
  )
}
