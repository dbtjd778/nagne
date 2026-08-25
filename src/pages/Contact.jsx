import PageShell, { useDocumentMeta } from '../components/PageShell'
import { site } from '../site.config'

const REASONS = [
  {
    label: '사이트 제보',
    body: '목록에 넣을 만한 곳을 알고 계신가요. 주소와 함께 어떤 점이 좋았는지 한 줄만 적어주시면 확인 후 반영합니다.',
  },
  {
    label: '오류 신고',
    body: '연결되지 않는 링크, 잘못된 설명, 이미 종료된 서비스를 발견하셨다면 알려주세요. 확인되는 대로 수정하거나 삭제합니다.',
  },
  {
    label: '삭제 요청',
    body: '본인이 운영하는 사이트가 이 목록에 실려 있고 삭제를 원하신다면, 해당 사이트의 운영자임을 확인할 수 있는 내용과 함께 요청해 주세요.',
  },
  {
    label: '제휴 및 광고',
    body: '협업이나 광고 관련 제안도 같은 주소로 보내주시면 됩니다. 대가를 받고 목록의 순서나 구성을 바꾸지는 않습니다.',
  },
]

export default function Contact() {
  useDocumentMeta(
    '문의 — 나그네',
    '사이트 제보, 오류 신고, 삭제 요청, 제휴 문의를 받는 곳입니다.'
  )

  return (
    <PageShell
      eyebrow="Contact"
      title="문의하기"
      lead="아래 주소로 메일을 보내주시면 확인 후 순서대로 회신드립니다. 별도의 문의 양식은 두지 않았습니다."
    >
      <p className="!mb-10">
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-[15px] tracking-tight no-underline"
          style={{ color: 'var(--fg)' }}
        >
          {site.email}
        </a>
      </p>

      <h2>이런 내용을 받습니다</h2>
      <div className="mb-4 mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border sm:grid-cols-2" style={{ borderColor: 'var(--line)' }}>
        {REASONS.map((r) => (
          <div key={r.label} className="border-b border-r p-5 last:border-b-0 rule">
            <p className="mb-2 text-[14px] font-semibold tracking-tight" style={{ color: 'var(--fg)' }}>
              {r.label}
            </p>
            <p className="!mb-0 text-[13px] leading-[1.8]">{r.body}</p>
          </div>
        ))}
      </div>

      <h2>회신에 걸리는 시간</h2>
      <p>
        1인이 운영하는 사이트라 회신까지 며칠이 걸릴 수 있습니다. 삭제 요청이나 오류 신고는 다른
        문의보다 먼저 처리합니다.
      </p>

      <h2>보내주실 때</h2>
      <ul>
        <li>제보하시는 사이트의 정확한 주소를 함께 적어주세요.</li>
        <li>오류 신고는 어떤 카테고리의 어떤 항목인지 알려주시면 빠릅니다.</li>
        <li>회신을 원하시면 답장 가능한 이메일 주소로 보내주세요.</li>
      </ul>
    </PageShell>
  )
}
