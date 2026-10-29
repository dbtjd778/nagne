import test from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync,existsSync} from 'node:fs'
import {getLocaleData} from '../src/i18n/server.js'
import {localizedPath,languageTags,foreignLocales} from '../src/i18n/routing.js'
import {filterSites} from '../src/lib/directory.js'
import {groupCountries,searchCountries} from '../src/lib/world.js'
import {allSites} from '../src/data/sites.js'
const read=path=>readFileSync(`out/${path}`,'utf8')

test('all 148 language pages have reciprocal search alternates and valid structured data assets',()=>{
 const entries=[...read('sitemap.xml').matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([,xml])=>({url:xml.match(/<loc>(.*?)<\/loc>/)[1],date:xml.match(/<lastmod>(.*?)<\/lastmod>/)[1]}))
 assert.equal(entries.length,148)
 const known=new Set(entries.map(e=>e.url))
 for(const {url,date} of entries){
  const path=new URL(url).pathname
  const locale=foreignLocales.find(lang=>path.startsWith(`/${lang}/`))||'ko'
  const html=read(`${path.slice(1)}index.html`)
  assert.ok(html.includes(`<html lang="${languageTags[locale]}"`),url)
  const alternates=[...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)]
  assert.equal(alternates.length,5,url)
  for(const [,tag,href] of alternates){
   assert.ok(known.has(href),`${url}: invalid ${tag} alternate`)
   assert.ok(read(`${new URL(href).pathname.slice(1)}index.html`).includes(`hrefLang="${languageTags[locale]}" href="${url}"`),`${url}: missing return link`)
  }
  for(const [,json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)){
   const data=JSON.parse(json)
   if(data.inLanguage)assert.equal(data.inLanguage,languageTags[locale])
   if(data.image)assert.ok(existsSync(`out${new URL(data.image).pathname}`),`${url}: broken schema image`)
   if(data['@type']==='Article')assert.equal(data.dateModified,date,url)
  }
 }
})

test('every language translates catalogue descriptions without losing destinations or placeholder values',async()=>{
 const source=JSON.parse(readFileSync('src/i18n/source-strings.json','utf8'))
 for(const locale of foreignLocales){
  const {sites,dictionary,messages}=await getLocaleData(locale)
  assert.equal(sites.length,1083)
  assert.deepEqual(sites.map(s=>s.url),allSites.map(s=>s.url))
  for(const key of source){
   assert.ok(dictionary[key]?.trim(),`${locale}: missing ${key}`)
   const tokens=value=>[...value.matchAll(/\{\d+\}/g)].map(m=>m[0]).sort()
   assert.deepEqual(tokens(dictionary[key]),tokens(key),`${locale}: invalid placeholders in ${key}`)
  }
  for(const site of sites){
   const original=allSites.find(s=>s.url===site.url)
   assert.ok(site.desc.length>10)
   assert.notEqual(site.desc,original.desc,`${locale}: untranslated ${site.name}`)
  }
  assert.ok(Object.keys(messages).length<250,'Only interface translations belong in the shared client context')
 }
})

test('localized searches find translated interests, original site names and local country names',async()=>{
 for(const [locale,word,country] of [['en','space','Japan'],['ja','宇宙','日本'],['zh','宇宙','日本']]){
  const {sites}=await getLocaleData(locale)
  assert.ok(filterSites(sites,{query:word}).some(s=>s.name==='NASA'),`${locale}: space search`)
  assert.ok(filterSites(sites,{query:'눈누'}).some(s=>s.name==='Noonnu'),`${locale}: original name alias`)
  assert.ok(searchCountries(groupCountries(sites,locale),country).some(c=>c.code==='JP'))
 }
})

test('switching language preserves the current page and URL filters',()=>{
 assert.equal(localizedPath('/en/c/gl-games/','ja'),'/ja/c/gl-games/')
 assert.equal(localizedPath('/zh/?q=NASA&country=US#directory','en'),'/en/?q=NASA&country=US#directory')
 assert.equal(localizedPath('/ja/guide/boredom-websites/','ko'),'/guide/boredom-websites/')
 assert.equal(localizedPath('https://nasa.gov/','ja'),'https://nasa.gov/')
 assert.equal(localizedPath('/icons/nasa.webp','ko'),'/icons/nasa.webp')
})
