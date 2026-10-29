import { cache } from 'react'
import { allSites, allCategories } from '../data/sites.js'
import { guides } from '../data/guides.js'
import { categoryEditorial } from '../data/category-editorial.js'
import overrides from './overrides.json' with {type:'json'}
import uiKeys from './ui-keys.json' with {type:'json'}
import { translator } from './routing.js'
const loaders = {en:()=>import('./dictionaries/en.json', {with:{type:'json'}}),ja:()=>import('./dictionaries/ja.json', {with:{type:'json'}}),zh:()=>import('./dictionaries/zh.json', {with:{type:'json'}})}
export const getDictionary = cache(async locale => {
  if (locale === 'ko') return {}
  const index=['en','ja','zh'].indexOf(locale)
  return {...(await loaders[locale]()).default,...Object.fromEntries(Object.entries(overrides).map(([key,values])=>[key,values[index]]))}
})
export function translateObject(value, t) {
  if (typeof value === 'string') return t(value)
  if (Array.isArray(value)) return value.map(item => translateObject(item, t))
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateObject(item, t)]))
  return value
}
export const getLocaleData = cache(async (locale = 'ko') => {
  const dictionary = await getDictionary(locale)
  const t = translator(dictionary)
  const sites = allSites.map(site => ({...site, name:t(site.name), desc:t(site.desc), tags:site.tags?.map(t), gameGenre:site.gameGenre ? t(site.gameGenre) : undefined, categoryName:t(site.categoryName), regionLabel:t(site.regionLabel), countryBasis:t(site.countryBasis), originalName:site.name, searchTerms:[site.name,site.categoryName,...(site.tags || [])]}))
  // Client consumers need category labels and counts, not another copy of every site.
  const categories = allCategories.map(({sites:items,...category}) => ({...translateObject(category,t), count:items.length}))
  const fullCategories = categories.map(category => ({...category,sites:sites.filter(site=>site.categoryId===category.id)}))
  return {locale, dictionary, t, sites, categories, fullCategories, guides:translateObject(guides,t), editorial:translateObject(categoryEditorial,t), messages:Object.fromEntries(uiKeys.map(key=>[key,t(key)]))}
})
