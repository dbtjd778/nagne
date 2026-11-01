import { affiliateDisclosure, getAffiliateCollection } from '../data/affiliate-products'
import { Icon } from './Icons'

export function AffiliateDisclosure({ slug, locale }) {
  if (!getAffiliateCollection(slug, locale)) return null
  return <p className="affiliate-disclosure"><strong>제휴 광고 안내</strong> {affiliateDisclosure}</p>
}

export default function AffiliateProducts({ slug, locale }) {
  const collection = getAffiliateCollection(slug, locale)
  if (!collection) return null
  return <aside className="affiliate-products" aria-labelledby="affiliate-title" id="related-products">
    <div className="affiliate-label">광고 <span aria-hidden="true">·</span> 쿠팡파트너스</div>
    <h2 id="affiliate-title">{collection.title}</h2>
    <p className="affiliate-intro">{collection.intro}</p>
    <p className="affiliate-disclosure">{affiliateDisclosure}</p>
    <div className="affiliate-grid">
      {collection.items.map(product => <div className="affiliate-card" key={product.id}>
        <span className="affiliate-kind">{product.kind}</span>
        <h3>{product.name}</h3>
        <p className="affiliate-option">{product.option}</p>
        <p>{product.reason}</p>
        <p className="affiliate-check"><strong>구매 전 확인</strong> {product.consideration}</p>
        <a href={product.href} target="_blank" rel="sponsored noopener" referrerPolicy="strict-origin-when-cross-origin" aria-label={`${product.name} — 쿠팡에서 보기 (제휴 광고, 새 탭)`}>쿠팡에서 보기 <Icon name="arrow" size={16} /></a>
      </div>)}
    </div>
    <p className="affiliate-footnote">상품명·구성 확인: <time dateTime="2026-11-01">2026.11.01</time> · 실사용 후기는 아닙니다. 현재 가격·재고·배송·반품 조건은 쿠팡에서 확인하세요.</p>
  </aside>
}
