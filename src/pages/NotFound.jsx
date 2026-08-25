import { Link } from 'react-router-dom'
import PageShell, { useDocumentMeta } from '../components/PageShell'

export default function NotFound() {
  useDocumentMeta('페이지를 찾을 수 없습니다 — 나그네', '요청하신 주소에 해당하는 페이지가 없습니다.')

  return (
    <PageShell
      eyebrow="404"
      title="길을 잘못 드셨습니다"
      lead="요청하신 주소에 해당하는 페이지가 없습니다. 주소가 바뀌었거나, 처음부터 없던 곳일 수 있습니다."
    >
      <p>
        <Link to="/">첫 화면으로 돌아가기</Link>
      </p>
    </PageShell>
  )
}
