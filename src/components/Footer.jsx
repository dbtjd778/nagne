import Link from 'next/link'
import { allCategories, totalSiteCount } from '../data/sites'
import { Icon } from './Icons'
import PrivacyChoices from './PrivacyChoices'

export default function Footer() {
  return <footer className="footer">
    <div className="wrap">
      <div className="footer-top">
        <div><Link href="/" className="wordmark"><Icon name="compass" size={28} />사이트 맛집.</Link><span className="foot-count">{totalSiteCount}개의 웹사이트를 탐방하세요</span></div>
        <div className="footer-links"><Link href="/about/">사이트 맛집 소개</Link><Link href="/guides/">탐방 가이드</Link><Link href="/contact/">문의 · 사이트 제보</Link><Link href="/privacy/">개인정보처리방침</Link><Link href="/terms/">이용약관</Link><PrivacyChoices/></div>
      </div>
      <details className="footer-categories"><summary>카테고리 전체 보기</summary><nav aria-label="전체 카테고리">{allCategories.map(c => <Link key={c.id} href={`/c/${c.id}/`}>{c.regionId === 'kr' ? '한국' : '세계'} · {c.category}</Link>)}</nav></details>
      <div className="footer-bottom"><span>© 2026 사이트 맛집</span><span>각 사이트의 이름과 로고는 해당 권리자에게 귀속됩니다.</span><a href="#top">맨 위로 ↑</a></div>
    </div>
  </footer>
}
