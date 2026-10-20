const priorities = ['neal.fun','radio.garden','noonnu.cc','artsandculture.google.com','window-swap.com','coolors.co','typing.works','earth.google.com','musclewiki.com','excalidraw.com','sandspiel.club','miricanvas.com','nasa.gov','remove.bg','opentutorials.org','pomofocus.io','unsplash.com','myfridgefood.com','littlealchemy2.com','ourworldindata.org','kosis.kr','photopea.com','archive.org','musiclab.chromeexperiments.com']
const normalize = value => value.toLocaleLowerCase('ko').replace(/\s+/g, '')
export function filterSites(sites, { query = '', region = 'all', category = 'all', savedOnly = false, saved = [], sort = 'recommended' } = {}) {
  const terms = query.trim().toLocaleLowerCase('ko').split(/\s+/).filter(Boolean)
  const filtered = sites.filter(s => (region === 'all' || s.regionId === region) && (category === 'all' || s.categoryId === category) && (!savedOnly || saved.includes(s.url)) && terms.every(term => normalize([s.name, s.desc, s.url, s.categoryName, s.gameGenre, ...(s.tags || [])].join(' ')).includes(normalize(term))))
  return filtered.sort((a,b) => sort === 'name' ? a.name.localeCompare(b.name,'ko') : rank(a.url) - rank(b.url))
}
function rank(url) { const i = priorities.findIndex(p => url.replace(/^https?:\/\//,'').replace(/^www\./,'').replace(/\/$/,'') === p); return i < 0 ? 999 : i }
export function readBookmarks(value, allowedUrls) {
  try { const items = JSON.parse(value); return Array.isArray(items) ? [...new Set(items.filter(x => typeof x === 'string' && allowedUrls.has(x)))] : [] } catch { return [] }
}
