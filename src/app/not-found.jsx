import Link from 'next/link'
export default function NotFound(){return <div className="wrap not-found"><span className="eyebrow">404</span><h1>아직 발견하지 못한 곳이에요.</h1><p>주소를 확인하거나 다른 사이트를 탐방해 보세요.</p><Link href="/" className="primary-button">사이트 맛집 홈으로 →</Link></div>}
