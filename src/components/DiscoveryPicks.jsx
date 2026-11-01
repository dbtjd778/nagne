import Link from './SiteLink'
import { discoveryPicks } from '../data/editorial-policy'
import { localizeEditorial } from '../data/guide-notes'
import { localizedPath } from '../i18n/routing'

export default function DiscoveryPicks({ locale }) {
  const picks = localizeEditorial(discoveryPicks, locale)
  return <section className="discovery-picks wrap" id="start-here" aria-labelledby="picks-title">
    <div><h2 id="picks-title">{picks.title}</h2><p>{picks.description}</p></div>
    <div className="discovery-pick-grid">{picks.items.map((item, index) => <Link key={item.slug} href={localizedPath(`/guide/${item.slug}/`, locale)}><span aria-hidden="true">0{index + 1}</span><h3>{item.title} ↗</h3><p>{item.text}</p></Link>)}</div>
  </section>
}
