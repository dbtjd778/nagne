import { writeFileSync } from 'node:fs'
import { site } from '../src/site.config.js'
const production = process.env.CONTEXT ? process.env.CONTEXT === 'production' : process.env.SITE_ENV === 'production'
const headers = `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n${production ? '' : '  X-Robots-Tag: noindex, nofollow\n'}/_next/static/*\n  Cache-Control: public, max-age=31536000, immutable\n/icons/*\n  Cache-Control: public, max-age=86400\n/fonts/*\n  Cache-Control: public, max-age=86400\n`
writeFileSync('out/_headers',headers)
console.log(`Static export ready: ${production?'production':'preview · noindex'} · advertising ${production && site.adsEnabled ? 'production-domain only' : 'disabled'}`)
