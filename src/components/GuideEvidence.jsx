import Link from './SiteLink'
import { editorialLabels, getGuideNotes, localizeEditorial } from '../data/guide-notes'
import { localizedPath } from '../i18n/routing'

export function GuideComparison({ slug, locale }) {
  const notes = getGuideNotes(slug, locale)
  const labels = localizeEditorial(editorialLabels, locale)
  if (!notes) return null
  return <section className="guide-comparison" id="choose">
    <h2>{labels.comparison}</h2>
    <div className="comparison-scroll" role="region" aria-label={labels.comparison} tabIndex={0}>
      <table><thead><tr><th scope="col">{labels.task}</th><th scope="col">{labels.choice}</th><th scope="col">{labels.limit}</th></tr></thead>
        <tbody>{notes.rows.map(row => <tr key={row.name}><th scope="row">{row.goal}</th><td><a href={row.href} target="_blank" rel="noopener noreferrer">{row.name} ↗</a></td><td>{row.limit}</td></tr>)}</tbody>
      </table>
    </div>
  </section>
}

export function GuideEvidence({ slug, locale }) {
  const notes = getGuideNotes(slug, locale)
  const labels = localizeEditorial(editorialLabels, locale)
  if (!notes) return null
  return <>
    <section className="guide-exercise" id="try-it"><span className="eyebrow">{labels.exercise}</span><h2>{notes.exerciseTitle}</h2><ol>{notes.steps.map(step => <li key={step}>{step}</li>)}</ol></section>
    <section className="guide-sources" id="sources"><h2>{labels.sources}</h2><p>{labels.checked}: <time dateTime={notes.checkedAt}>{notes.checkedAt}</time></p><ul>{notes.sources.map(([name, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{name} ↗</a></li>)}</ul><p>{labels.note}</p><Link href={localizedPath('/about/#editorial-policy', locale)}>{labels.method} →</Link></section>
  </>
}
