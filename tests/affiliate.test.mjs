import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { affiliateDisclosure, affiliateProducts, affiliateCollections, affiliatePolicy } from '../src/data/affiliate-products.js'
import { guides } from '../src/data/guides.js'
import { allCategories } from '../src/data/sites.js'
import { locales, localizedPath } from '../src/i18n/routing.js'
import { privacyUpdatedAt } from '../src/data/content-dates.js'

const read = path => readFileSync(`out${path}index.html`, 'utf8')

test('only contextual Korean guides expose affiliate ads, with disclosure and sponsored links', () => {
  const actualLinks = new Set()
  for (const locale of locales) {
    for (const guide of guides) {
      const html = read(localizedPath(`/guide/${guide.slug}/`, locale))
      const links = [...html.matchAll(/<a\b[^>]*href="(https:\/\/link\.coupang\.com[^\"]+)"[^>]*>/g)]
      const collection = locale === 'ko' && affiliateCollections[guide.slug]
      assert.equal(links.length, collection ? collection.items.length : 0)
      if (!collection) continue
      assert.ok(html.indexOf(affiliateDisclosure) < html.indexOf('class="intro"'), 'Disclosure must appear before article content')
      for (const [tag, href] of links) {
        assert.ok(tag.includes('rel="sponsored noopener"'))
        assert.ok(tag.includes('referrerPolicy="strict-origin-when-cross-origin"') || tag.includes('referrerpolicy="strict-origin-when-cross-origin"'))
        assert.ok(tag.includes('제휴 광고, 새 탭'))
        assert.ok(collection.items.some(({ id }) => affiliateProducts[id].href === href))
        assert.equal(new URL(href).search, '', 'Do not add visitor queries to affiliate links')
        actualLinks.add(href)
      }
      assert.ok(!/<(?:script|iframe|img)[^>]+(?:coupang|coupa\.ng)/i.test(html), 'Affiliate ads must not load external scripts, frames or product images')
    }
    for (const path of ['/', '/about/', '/privacy/', '/contact/', '/terms/', ...allCategories.map(c => `/c/${c.id}/`)]) {
      assert.ok(!read(localizedPath(path, locale)).includes('href="https://link.coupang.com/'), `${locale}${path}: no affiliate ads`)
    }
  }
  assert.equal(actualLinks.size, Object.keys(affiliateProducts).length)
})

test('affiliate data handling and privacy change date are published in all languages', () => {
  const sitemap = readFileSync('out/sitemap.xml', 'utf8')
  for (const locale of locales) {
    const path = localizedPath('/privacy/', locale)
    const html = read(path)
    assert.ok(html.includes(affiliatePolicy.privacyText[locale]))
    assert.ok(html.includes(privacyUpdatedAt.replaceAll('-', '.')))
    const entry = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(([, value]) => value.includes(`<loc>https://vsites.co.kr${path}</loc>`))
    assert.ok(entry?.[1].includes(`<lastmod>${privacyUpdatedAt}</lastmod>`))
  }
})
