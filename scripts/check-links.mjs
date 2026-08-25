// 데이터에 등록된 모든 외부 링크의 응답을 확인합니다.
//   npm run check-links
// 봇을 차단하는 사이트는 403/503 으로 잡힐 수 있으므로, 결과는 "확인 대상" 목록으로만 쓰세요.

import { allSites } from '../src/data/sites.js'

const CONCURRENCY = 8
const TIMEOUT = 12000

async function check(site) {
  const url = site.url.startsWith('http') ? site.url : `https://${site.url}`
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT)
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
      },
    })
    return { ...site, status: res.status, finalUrl: res.url }
  } catch (err) {
    return { ...site, status: 0, error: err.name === 'AbortError' ? 'timeout' : err.message }
  } finally {
    clearTimeout(timer)
  }
}

const queue = [...allSites]
const results = []

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const site = queue.shift()
      results.push(await check(site))
    }
  })
)

const ok = results.filter((r) => r.status >= 200 && r.status < 400)
const blocked = results.filter((r) => [401, 403, 405, 406, 429, 503].includes(r.status))
const broken = results.filter((r) => !ok.includes(r) && !blocked.includes(r))

const line = (r) =>
  `  ${String(r.status || r.error).padEnd(8)} ${r.name.padEnd(24)} ${r.url}` +
  (r.finalUrl && !r.finalUrl.includes(r.url.split('/')[0]) ? `\n           -> ${r.finalUrl}` : '')

console.log(`\n총 ${results.length}개 확인\n`)
console.log(`정상 ${ok.length}개`)
console.log(`\n확인 필요 — 응답 없음 / 4xx / 5xx (${broken.length}개)`)
broken.sort((a, b) => a.name.localeCompare(b.name)).forEach((r) => console.log(line(r)))
console.log(`\n봇 차단으로 추정 — 직접 열어서 확인 (${blocked.length}개)`)
blocked.sort((a, b) => a.name.localeCompare(b.name)).forEach((r) => console.log(line(r)))

process.exit(0)
