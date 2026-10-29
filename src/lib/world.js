import countryInfo from '../data/country-info.json' with { type: 'json' }
import { filterSites } from './directory.js'

const displayNames = new Map()
export function countryName(code, locale = 'ko') {
  if (!countryInfo[code]) return {ko:'국가 미확인',en:'Country unverified',ja:'国・地域未確認',zh:'国家或地区未确认'}[locale] || 'Country unverified'
  if (locale === 'ko') return countryInfo[code].name
  if (!displayNames.has(locale)) displayNames.set(locale,new Intl.DisplayNames([locale],{type:'region'}))
  return displayNames.get(locale).of(code) || countryInfo[code].en
}
const countryAliases = { KR: ['한국', '코리아', 'korea'], AU: ['오스트레일리아'], CN: ['중화인민공화국'], TW: ['중화민국'], TR: ['터키'], GB: ['uk', 'britain', '브리튼'], US: ['usa', 'america', '아메리카'] }
export function searchCountries(countries, query = '') {
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase('ko').replace(/\s+/g, '')
  return countries.filter(country => normalize([country.name, country.en, country.code, ...(countryAliases[country.code] || [])].join(' ')).includes(normalize(query)))
}
export function groupCountries(sites, locale = 'ko') {
  const grouped = new Map()
  for (const site of sites) {
    if (!site.countryCode || !countryInfo[site.countryCode]) continue
    if (!grouped.has(site.countryCode)) grouped.set(site.countryCode, { code: site.countryCode, ...countryInfo[site.countryCode], name:countryName(site.countryCode,locale), count: 0 })
    grouped.get(site.countryCode).count++
  }
  return [...grouped.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'ko'))
}
export function globeSummary(sites, category = 'all', locale = 'ko') {
  const pool = category === 'all' ? sites : sites.filter(site => site.categoryId === category)
  return {
    countries: groupCountries(pool, locale),
    siteCount: pool.length,
    unknownCount: pool.filter(site => !site.countryCode).length,
  }
}
export function filterCountrySites(sites, code, query = '', category = 'all', saved = []) {
  const pool = sites.filter(site => code === 'saved' ? saved.includes(site.url) : code === 'unknown' ? !site.countryCode : site.countryCode === code)
  return filterSites(pool, { query, category })
}
