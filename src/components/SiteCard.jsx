'use client'
import { useState } from 'react'
import { Icon } from './Icons'

export const siteHref = (site) => /^https?:\/\//.test(site.url) ? site.url : `https://${site.url}`

export function SiteLogo({ site }) {
  const [failed, setFailed] = useState(false)
  return <span className="site-logo" aria-hidden="true">
    {site.icon && !failed ? <img src={site.icon} alt="" width="28" height="28" loading="lazy" decoding="async" onError={() => setFailed(true)} /> : <span className="logo-initial">{site.name.slice(0, 1)}</span>}
  </span>
}

export default function SiteCard({ site, saved = false, onSave, featured = false }) {
  return <article className={`site-card ${featured ? 'site-card-featured' : ''}`}>
    <div className="site-card-head">
      <a href={siteHref(site)} target="_blank" rel="noopener noreferrer" className="site-title-link" aria-label={`${site.name} — 새 탭에서 열기`}><SiteLogo site={site} /><h3>{site.name}</h3><Icon name="arrow" size={16} /></a>
      {onSave && <button className={`save-button ${saved ? 'is-saved' : ''}`} onClick={() => onSave(site.url)} aria-label={`${site.name} ${saved ? '저장 취소' : '저장'}`} aria-pressed={saved}><Icon name="bookmark" size={17} /></button>}
    </div>
    <p className="site-desc" title={site.desc}>{site.desc}</p>
    <div className="site-card-bottom">
      <span className="site-category">{site.gameGenre || site.categoryName || '웹사이트'}</span>
      <span className="site-region">{site.regionId === 'kr' ? '한국' : 'Global'}</span>
    </div>
  </article>
}
