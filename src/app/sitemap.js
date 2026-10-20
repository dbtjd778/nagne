import { allCategories } from '../data/sites'
import { guides } from '../data/guides'
import { canonical } from '../lib/metadata'
export const dynamic='force-static'
export default function sitemap(){
  return ['/', '/guides','/about','/contact','/privacy','/terms',...allCategories.map(c=>`/c/${c.id}`),...guides.map(g=>`/guide/${g.slug}`)].map(path=>({url:canonical(path),lastModified:'2026-10-20',changeFrequency:path==='/'?'weekly':'monthly',priority:path==='/'?1:path.startsWith('/guide/')?.8:.6}))
}
