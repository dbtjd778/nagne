import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { guides } from '../src/data/guides.js'
import { guideNotes, getGuideNotes, editorialLabels } from '../src/data/guide-notes.js'
import { editorialPolicy, discoveryPicks } from '../src/data/editorial-policy.js'
import { locales, localizedPath } from '../src/i18n/routing.js'
import { site } from '../src/site.config.js'
const production = process.env.CONTEXT ? process.env.CONTEXT === 'production' : process.env.SITE_ENV === 'production'
const read = path => readFileSync(`out${path}index.html`, 'utf8')

test('editorial additions have complete explicit translations and real source links', () => {
  function check(value) {
    if (!value || typeof value !== 'object') return
    if (Object.hasOwn(value, 'ko')) {
      for (const locale of locales) assert.ok(typeof value[locale] === 'string' && value[locale].trim(), `Missing ${locale}: ${value.ko}`)
      return
    }
    Object.values(value).forEach(check)
  }
  [guideNotes, editorialLabels, editorialPolicy, discoveryPicks].forEach(check)
  for (const guide of guides) {
    const notes = guideNotes[guide.slug]
    assert.ok(notes.rows.length >= 2)
    assert.ok(notes.steps.length >= 3)
    assert.ok(notes.sources.length >= 2)
    for (const [, source] of notes.sources) assert.equal(new URL(source).protocol, 'https:')
    for (const locale of locales) {
      const html = read(localizedPath(`/guide/${guide.slug}/`, locale))
      assert.ok(html.includes('<table>'), `${locale}: accessible comparison table`)
      assert.ok(html.includes('id="sources"') && html.includes('id="try-it"'))
      assert.ok(html.includes(getGuideNotes(guide.slug, locale).exerciseTitle))
      for (const [, source] of notes.sources) assert.ok(html.includes(`href="${source}"`))
    }
  }
})

test('verification is present in initial production HTML without requesting ads on the homepage', () => {
  for (const locale of locales) {
    const html = read(localizedPath('/', locale))
    assert.equal(html.includes(`<meta name="google-adsense-account" content="${site.adsensePublisherId}"`), production)
    assert.ok(!html.includes('ad-placeholder'))
    assert.ok(!html.includes('class="ad-slot'))
    assert.ok(html.indexOf('id="start-here"') < html.indexOf('id="directory"'))
    assert.ok(read(localizedPath('/about/', locale)).includes(editorialPolicy.title[locale]))
  }
})
