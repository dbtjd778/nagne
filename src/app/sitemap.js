import { allCategories } from '../data/sites'
import { guides } from '../data/guides'
import { locales } from '../i18n/routing'
import { canonical, languageAlternates } from '../lib/metadata'
import { catalogueUpdatedAt, homeUpdatedAt, aboutUpdatedAt, privacyUpdatedAt, originalPublishedAt, guideUpdatedAt, localizedContentDate } from '../data/content-dates'
export const dynamic='force-static'
export default function sitemap(){
  const entries = [
    ['/', homeUpdatedAt],
    ['/guides', guides.map(guideUpdatedAt).sort().at(-1)],
    ['/about', aboutUpdatedAt],
    ['/privacy', privacyUpdatedAt],
    ...['/contact', '/terms'].map(path => [path, originalPublishedAt]),
    ...allCategories.map(c => [`/c/${c.id}`, catalogueUpdatedAt]),
    ...guides.map(g => [`/guide/${g.slug}`, guideUpdatedAt(g)]),
  ]
  return entries.flatMap(([path, lastModified]) => locales.map(locale => ({url:canonical(path,locale),lastModified:localizedContentDate(lastModified,locale),alternates:{languages:languageAlternates(path)},changeFrequency:path==='/'?'weekly':'monthly',priority:path==='/'?1:path.startsWith('/guide/')?.8:.6})))
}
