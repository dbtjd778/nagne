// src/site.config.js 의 도메인과 데이터를 읽어 sitemap.xml / robots.txt 를 생성합니다.
// npm run build 시 자동 실행됩니다 (package.json 의 prebuild).

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import { site } from '../src/site.config.js'
import { allCategories } from '../src/data/sites.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const base = site.url.replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

const staticPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.4' },
  { path: '/terms', changefreq: 'yearly', priority: '0.4' },
]

const categoryPages = allCategories.map((c) => ({
  path: `/c/${c.id}`,
  changefreq: 'monthly',
  priority: '0.9',
}))

const urls = [...staticPages, ...categoryPages]
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')

writeFileSync(
  resolve(root, 'public/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  'utf8'
)

writeFileSync(
  resolve(root, 'public/robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`,
  'utf8'
)

console.log(`sitemap.xml / robots.txt 생성 완료 — ${urls.split('<url>').length - 1}개 URL (${base})`)
