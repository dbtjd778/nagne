// vite build 이후 실행됩니다.
// 각 라우트를 정적 HTML 로 미리 렌더링해 dist/<경로>/index.html 로 저장합니다.
// 브라우저가 JavaScript 를 실행하지 않아도 본문 전체가 마크업에 존재하게 됩니다.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { routeMeta } from '../src/routes.meta.js'
import { site } from '../src/site.config.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const base = site.url.replace(/\/$/, '')

const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href)
const template = readFileSync(resolve(root, 'dist/index.html'), 'utf8')

const escapeAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

for (const route of routeMeta) {
  const appHtml = render(route.path)
  const canonical = `${base}${route.path}`

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(route.title)}</title>`)
    .replace(
      /<meta\s+name="description"[^>]*>/,
      `<meta name="description" content="${escapeAttr(route.description)}" />`
    )
    .replace(/<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(
      /<meta\s+property="og:title"[^>]*>/,
      `<meta property="og:title" content="${escapeAttr(route.title)}" />`
    )
    .replace(
      /<meta\s+property="og:description"[^>]*>/,
      `<meta property="og:description" content="${escapeAttr(route.description)}" />`
    )
    .replace(/<meta\s+property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const dir = route.path === '/' ? resolve(root, 'dist') : resolve(root, `dist${route.path}`)
  mkdirSync(dir, { recursive: true })
  writeFileSync(resolve(dir, 'index.html'), html, 'utf8')
}

console.log(`프리렌더 완료 — ${routeMeta.length}개 페이지 (${base})`)
