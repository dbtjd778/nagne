// src/routes.meta.js 의 라우트 목록으로 sitemap.xml / robots.txt 를 생성합니다.
// npm run build 시 자동 실행됩니다 (package.json 의 prebuild).

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import { site } from '../src/site.config.js'
import { routeMeta, canonicalUrl } from '../src/routes.meta.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const base = site.url.replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

const urls = routeMeta
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${canonicalUrl(path)}</loc>
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

console.log(`sitemap.xml / robots.txt 생성 완료 — ${routeMeta.length}개 URL (${base})`)
