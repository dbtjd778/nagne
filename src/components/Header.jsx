import Link from 'next/link'
import { Icon } from './Icons'

export default function Header() {
  return <header className="header">
    <div className="wrap header-inner">
      <Link href="/" className="wordmark" aria-label="사이트 맛집 홈"><Icon name="compass" size={29} /><span>사이트 맛집<span className="brand-dot">.</span></span></Link>
      <nav aria-label="주 메뉴">
        <Link href="/#directory">사이트 탐방</Link>
        <Link href="/c/gl-games/">웹게임</Link>
        <Link href="/guides/">탐방 가이드</Link>
        <Link href="/about/">소개</Link>
      </nav>
      <Link className="header-contact" href="/contact/">사이트 제보 <Icon name="arrow" size={14} /></Link>
    </div>
  </header>
}
