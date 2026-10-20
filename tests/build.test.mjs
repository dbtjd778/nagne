import test from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync,existsSync} from 'node:fs'
import {allCategories,allSites} from '../src/data/sites.js'
import {guides} from '../src/data/guides.js'
import {site} from '../src/site.config.js'
const production = process.env.CONTEXT ? process.env.CONTEXT === 'production' : process.env.SITE_ENV === 'production'
const read=p=>readFileSync(`out/${p}`,'utf8')
test('static export provides every category and guide as meaningful HTML',()=>{
 for(const c of allCategories){
  const html=read(`c/${c.id}/index.html`)
  for(const s of c.sites)assert.ok(html.includes(s.name.replaceAll('&','&amp;')),`${c.id}: ${s.name}`)
  assert.ok(html.includes('application/ld+json'))
  for(const s of c.sites) {
   const href = /^https?:\/\//.test(s.url) ? s.url : `https://${s.url}`
   assert.ok(html.includes(`href="${href.replaceAll('&','&amp;')}"`),`Missing HTTPS link: ${s.url}`)
  }
 }
 for(const g of guides){const html=read(`guide/${g.slug}/index.html`);assert.ok(html.includes(g.title));assert.ok(html.includes(g.sections[0].heading))}
})
test('metadata uses the current brand, canonical domain and context-specific indexing',()=>{
 const html=read('index.html')
 assert.ok(html.includes(`<title>${site.title}</title>`))
 assert.ok(html.includes(`name="robots" content="${production ? 'index, follow' : 'noindex, nofollow'}"`))
 assert.ok(html.includes('rel="canonical" href="https://vsites.co.kr/"'))
 assert.equal(read('_headers').includes('X-Robots-Tag: noindex, nofollow'),!production)
 assert.ok(!html.includes('나그네'))
 assert.ok(!html.includes('pagead2.googlesyndication.com'))
 assert.ok(html.includes('data-ad-placement="directory-middle"'))
})
test('sitemap includes all detail pages and old SPA catch-all is gone',()=>{
 const sitemap=read('sitemap.xml')
 for(const c of allCategories)assert.ok(sitemap.includes(`/c/${c.id}/`))
 for(const g of guides)assert.ok(sitemap.includes(`/guide/${g.slug}/`))
 assert.ok(!existsSync('out/_redirects'))
 assert.ok(existsSync('out/404.html'))
})
test('every assigned logo is a local existing asset',()=>{
 for(const s of allSites.filter(s=>s.icon)){assert.ok(s.icon.startsWith('/icons/'));assert.ok(existsSync(`public${s.icon}`),s.icon)}
})
test('advertising readiness preserves seller identity without enabling ad requests',()=>{
 assert.equal(site.adsEnabled,false)
 assert.equal(read('ads.txt').trim(),`google.com, ${site.adsensePublisherId.replace(/^ca-/,'')}, DIRECT, f08c47fec0942fa0`)
 for(const path of ['index.html','about/index.html','privacy/index.html','contact/index.html','terms/index.html','404.html',...allCategories.map(c=>`c/${c.id}/index.html`),...guides.map(g=>`guide/${g.slug}/index.html`)]){
  const html=read(path)
  assert.ok(!/adsbygoogle|pagead2\.googlesyndication\.com/.test(html),path)
  assert.ok(!html.includes('나그네'),path)
 }
 for(const path of ['privacy/index.html','contact/index.html'])assert.ok(read(path).includes(`mailto:${site.email}`))
 assert.ok(read('privacy/index.html').includes('Netlify'))
 assert.ok(!read('404.html').includes('data-ad-placement'))
})
