import Link from 'next/link'
import { guides } from '../data/guides'
import { Icon } from './Icons'

export default function GuideCards({ all = false }) {
  return <div className="guide-grid">{guides.slice(0,all?guides.length:3).map((guide,i)=><Link href={`/guide/${guide.slug}/`} className={`guide-card guide-color-${i%3} reveal`} key={guide.slug}>
    <div className="guide-art" aria-hidden="true"><span className="guide-no">0{i+1}</span><div className={`guide-drawing drawing-${i%3}`}><span/><span/><span/><span/></div><span className="guide-art-label">{['DISCOVER','SLOW DOWN','MAKE SOMETHING'][i%3]}</span></div>
    <div className="guide-card-body"><span>{guide.eyebrow} · {guide.readTime}</span><h3>{guide.title}</h3><p>{guide.description}</p><Icon name="arrow" size={20}/></div>
  </Link>)}</div>
}
