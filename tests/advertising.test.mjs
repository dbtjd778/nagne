import test from 'node:test'
import assert from 'node:assert/strict'
import { canLoadAdvertising } from '../src/lib/advertising.js'

test('advertising is restricted to production and known pages, including after navigation', () => {
  const production = { enabled: true, productionOrigin: 'https://vsites.co.kr', knownPaths: ['/', '/c/gl-games/', '/privacy/'] }
  for (const pathname of ['/', '/c/gl-games', '/c/gl-games/', '/privacy/']) {
    assert.equal(canLoadAdvertising({ ...production, origin: production.productionOrigin, pathname }), true)
  }
  for (const origin of ['http://127.0.0.1:5173', 'http://localhost:5173', 'https://preview--allsites-mine.netlify.app', 'https://vsites.co.kr.example.com', 'http://vsites.co.kr']) {
    assert.equal(canLoadAdvertising({ ...production, origin, pathname: '/' }), false)
  }
  for (const pathname of ['/404/', '/missing/', '/c/missing/']) {
    assert.equal(canLoadAdvertising({ ...production, origin: production.productionOrigin, pathname }), false)
  }
  assert.equal(canLoadAdvertising({ ...production, enabled: false, origin: production.productionOrigin, pathname: '/' }), false)
})
