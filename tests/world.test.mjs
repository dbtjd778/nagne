import test from 'node:test'
import assert from 'node:assert/strict'
import { allSites, allCategories } from '../src/data/sites.js'
import countryInfo from '../src/data/country-info.json' with { type: 'json' }
import extraSites from '../src/data/extra-sites.json' with { type: 'json' }
import { groupCountries, globeSummary, filterCountrySites, searchCountries } from '../src/lib/world.js'

test('the expanded catalogue has over 1000 unique sites and evidence for every country', () => {
  assert.ok(allSites.length > 1000)
  assert.equal(new Set(allSites.map(site => site.id)).size, allSites.length)
  for (const site of allSites.filter(site => site.countryCode)) {
    assert.ok(countryInfo[site.countryCode], `${site.name}: ${site.countryCode}`)
    assert.match(site.countrySource, /^https?:\/\//, site.name)
    assert.ok(site.countryBasis.length > 5, site.name)
  }
  assert.equal(new Set(extraSites.map(site => new URL(site.url).hostname.replace(/^www\./, ''))).size, extraSites.length)
  for (const site of extraSites) assert.ok(['reachable','restricted'].includes(site.linkStatus), site.name)
})

test('country markers and unknown list partition the catalogue without losing sites', () => {
  const countries = groupCountries(allSites)
  assert.ok(countries.length > 50)
  const known = countries.reduce((sum, country) => sum + country.count, 0)
  assert.equal(known + filterCountrySites(allSites, 'unknown').length, allSites.length)
  for (const country of countries) {
    assert.equal(filterCountrySites(allSites, country.code).length, country.count)
    assert.ok(Math.abs(country.lat) <= 90 && Math.abs(country.lng) <= 180)
  }
})

test('country search accepts familiar Korean names and full-width country codes', () => {
  const countries = groupCountries(allSites)
  for (const [query, code] of [['한국','KR'],['호주','AU'],['ＵＳＡ','US'],['uk','GB']]) {
    assert.ok(searchCountries(countries, query).some(country => country.code === code))
  }
  assert.deepEqual(searchCountries(countries, '존재하지않는나라'), [])
})

test('country filtering combines aliases, category, and saved sites', () => {
  const us = filterCountrySites(allSites, 'US')
  assert.ok(us.every(site => site.countryCode === 'US'))
  assert.ok(filterCountrySites(allSites, 'US', '챗 지피티').some(site => site.name === 'ChatGPT'))
  assert.ok(filterCountrySites(allSites, 'US', '', 'gl-ai').every(site => site.categoryId === 'gl-ai'))
  const saved = [us[0].url]
  assert.equal(filterCountrySites(allSites, 'saved', '', 'all', saved)[0].url, saved[0])
  assert.deepEqual(filterCountrySites(allSites, 'saved', '', 'all', []), [])
  assert.deepEqual(filterCountrySites(allSites, 'INVALID'), [])
})

test('every globe category matches its country drawer counts and preserves unassigned sites', () => {
  for (const category of allCategories) {
    const summary = globeSummary(allSites, category.id)
    assert.equal(summary.siteCount, category.sites.length, category.id)
    assert.equal(summary.countries.reduce((n, c) => n + c.count, 0) + summary.unknownCount, summary.siteCount, category.id)
    for (const country of summary.countries) {
      assert.ok(country.count > 0)
      assert.equal(country.count, filterCountrySites(allSites, country.code, '', category.id).length)
    }
  }
  assert.equal(globeSummary(allSites).siteCount, allSites.length)
  assert.deepEqual(globeSummary(allSites).countries, groupCountries(allSites))
  const games = globeSummary(allSites, 'gl-games')
  assert.equal(filterCountrySites(allSites, 'US', '', 'gl-games').length, games.countries.find(c => c.code === 'US').count)
  assert.ok(filterCountrySites(allSites, 'US').length > games.countries.find(c => c.code === 'US').count)
})
