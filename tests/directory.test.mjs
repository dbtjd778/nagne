import test from 'node:test'
import assert from 'node:assert/strict'
import {filterSites,readBookmarks} from '../src/lib/directory.js'
import {allSites,allCategories,totalSiteCount} from '../src/data/sites.js'
const sample=[
 {name:'눈누',url:'noonnu.cc',desc:'한글 글꼴을 찾아보는 곳',regionId:'kr',categoryId:'font',categoryName:'디자인',tags:['폰트']},
 {name:'Radio Garden',url:'radio.garden',desc:'전세계 라디오 방송',regionId:'global',categoryId:'travel',categoryName:'여행'},
 {name:'한국 도구',url:'tools.kr',desc:'작업 도구',regionId:'kr',categoryId:'tools',categoryName:'도구'}
]
test('Korean and case-insensitive multi-token search includes tags and URLs',()=>{
 assert.equal(filterSites(sample,{query:'한글 폰트'})[0].name,'눈누')
 assert.equal(filterSites(sample,{query:'RADIO garden'})[0].url,'radio.garden')
 assert.equal(filterSites(sample,{query:'tools.kr'})[0].name,'한국 도구')
 assert.equal(filterSites(sample,{query:'없는것'}).length,0)
})
test('region, category and bookmarks filter together',()=>{
 assert.equal(filterSites(sample,{region:'kr'}).length,2)
 assert.equal(filterSites(sample,{region:'global',category:'font'}).length,0)
 assert.equal(filterSites(sample,{savedOnly:true,saved:['noonnu.cc']})[0].name,'눈누')
 assert.equal(filterSites(sample,{savedOnly:true,saved:[]}).length,0)
})
test('malformed or stale persisted bookmarks cannot break the page',()=>{
 const allowed=new Set(sample.map(s=>s.url))
 for(const v of [null,'{}','null','broken','42'])assert.deepEqual(readBookmarks(v,allowed),[])
 assert.deepEqual(readBookmarks('["noonnu.cc","noonnu.cc",2,"deleted.com"]',allowed),['noonnu.cc'])
})
test('catalogue contains unique safe https destinations and nonempty descriptions',()=>{
 assert.ok(totalSiteCount>=500)
 assert.equal(new Set(allSites.map(s=>s.url)).size,allSites.length)
 assert.equal(new Set(allCategories.map(c=>c.id)).size,allCategories.length)
 for(const s of allSites){
  assert.ok(s.name.length>0 && s.desc.length>=15,s.name)
  const u=new URL(/^https?:\/\//.test(s.url)?s.url:`https://${s.url}`)
  assert.equal(u.protocol,'https:',s.url)
  assert.ok(!u.username&&!u.password,s.url)
 }
})
