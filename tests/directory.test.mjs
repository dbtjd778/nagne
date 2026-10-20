import test from 'node:test'
import assert from 'node:assert/strict'
import {filterSites,readBookmarks} from '../src/lib/directory.js'
import {allSites,allCategories,totalSiteCount} from '../src/data/sites.js'
import {searchAliases} from '../src/data/search-aliases.js'
import {defaultDirectoryState,readDirectoryState,directorySearch} from '../src/lib/directory-state.js'
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
test('familiar Korean names find their official destinations without inventing entries',()=>{
 for(const [name,aliases] of Object.entries(searchAliases)){
  assert.ok(allSites.some(s=>s.name===name),name)
  for(const alias of aliases) assert.ok(filterSites(allSites,{query:alias}).some(s=>s.name===name),`${name}: ${alias}`)
 }
 assert.ok(filterSites(allSites,{query:'챗 지피티'}).some(s=>s.name==='ChatGPT'))
 assert.ok(filterSites(allSites,{query:'테트리스'}).some(s=>s.name==='Tetris'))
 assert.ok(filterSites(allSites,{query:'ＣｈａｔＧＰＴ'}).some(s=>s.name==='ChatGPT'))
})
test('directory links restore filters, sort, view and expanded results',()=>{
 const state={query:'한글 & 폰트',region:'kr',category:'kr-tools',savedOnly:true,sort:'name',view:'list',limit:72}
 const category=allCategories.find(c=>c.regionId==='kr')
 state.category=category.id
 assert.deepEqual(readDirectoryState(directorySearch(state),allCategories,totalSiteCount),state)
 assert.equal(directorySearch(defaultDirectoryState),'')
 assert.deepEqual(readDirectoryState('',allCategories,totalSiteCount),defaultDirectoryState)
})
test('invalid or contradictory directory URLs fall back safely',()=>{
 const state=readDirectoryState('?region=kr&category=gl-games&limit=999999&view=bad&sort=bad&saved=true',allCategories,totalSiteCount)
 assert.equal(state.category,'all')
 assert.equal(state.view,'grid')
 assert.equal(state.sort,'recommended')
 assert.equal(state.savedOnly,false)
 assert.ok(state.limit<=totalSiteCount+23)
 for(const limit of ['-100','NaN','Infinity','0','23'])assert.equal(readDirectoryState(`?limit=${limit}`,allCategories,totalSiteCount).limit,24)
 assert.equal(readDirectoryState(`?q=${'가'.repeat(500)}`,allCategories,totalSiteCount).query.length,200)
})
