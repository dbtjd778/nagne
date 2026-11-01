import test from 'node:test'
import assert from 'node:assert/strict'
import { advertisingContentPaths, canLoadAdvertising, needsDocumentNavigation } from '../src/lib/advertising.js'
import { locales, localizedPath } from '../src/i18n/routing.js'

test('advertising is limited to editorial content in every language and the production origin', () => {
  const eligible = locales.flatMap(locale => advertisingContentPaths.map(path => localizedPath(path, locale)))
  const excluded = locales.flatMap(locale => ['/', '/guides/', '/about/', '/contact/', '/privacy/', '/terms/', '/c/gl-art/'].map(path => localizedPath(path, locale)))
  const production = { enabled: true, productionOrigin: 'https://vsites.co.kr', knownPaths: [...eligible, ...excluded] }
  for (const pathname of eligible.flatMap(path => [path, path.replace(/\/$/, '')])) {
    assert.equal(canLoadAdvertising({ ...production, origin: production.productionOrigin, pathname }), true, pathname)
  }
  for (const pathname of [...excluded, '/404/', '/missing/', '/c/missing/', '/en/guide/missing/', '/fr/guide/productive-browser/']) {
    assert.equal(canLoadAdvertising({ ...production, origin: production.productionOrigin, pathname }), false, pathname)
  }
  for (const origin of ['http://127.0.0.1:5173', 'http://localhost:5173', 'https://preview--allsites-mine.netlify.app', 'https://vsites.co.kr.example.com', 'http://vsites.co.kr']) {
    assert.equal(canLoadAdvertising({ ...production, origin, pathname: '/guide/productive-browser/' }), false)
  }
  assert.equal(canLoadAdvertising({ ...production, enabled: false, origin: production.productionOrigin, pathname: '/guide/productive-browser/' }), false)
})

test('document boundaries prevent an executed ad tag following visitors into policy, search or empty saved pages', () => {
  for (const locale of locales) {
    const article = localizedPath('/guide/productive-browser/', locale)
    for (const target of ['/privacy/', '/contact/', '/?q=notfound#directory', '/?saved=1#directory', '/c/gl-art/']) {
      const page = localizedPath(target, locale)
      assert.equal(needsDocumentNavigation(article, page), true, page)
      assert.equal(needsDocumentNavigation(page, article), true, article)
    }
    assert.equal(needsDocumentNavigation(article, localizedPath('/c/gl-games/', locale)), false)
    assert.equal(needsDocumentNavigation(article, '#sources'), false)
    assert.equal(needsDocumentNavigation(localizedPath('/',locale), localizedPath('/about/',locale)), false)
  }
  assert.equal(needsDocumentNavigation('/', 'https://squoosh.app/'), false)
})
