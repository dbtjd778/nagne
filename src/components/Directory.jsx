'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { allSites, allCategories, countByRegion } from '../data/sites'
import { filterSites, readBookmarks } from '../lib/directory'
import SiteCard, { SiteLogo, siteHref } from './SiteCard'
import AdSlot from './AdSlot'
import { Icon } from './Icons'

const BOOKMARK_KEY = 'nagne:saved:v1'
const urlSet = new Set(allSites.map(s => s.url))

export default function Directory() {
  const [query,setQuery] = useState('')
  const [region,setRegion] = useState('all')
  const [category,setCategory] = useState('all')
  const [saved,setSaved] = useState([])
  const [savedOnly,setSavedOnly] = useState(false)
  const [limit,setLimit] = useState(24)
  const [sort,setSort] = useState('recommended')
  const [view,setView] = useState('grid')
  const [notice,setNotice] = useState('')
  const [randomSite,setRandomSite] = useState(null)
  const searchRef = useRef(null)
  const dialogRef = useRef(null)
  const randomButtonRef = useRef(null)
  useEffect(() => {
    try { setSaved(readBookmarks(localStorage.getItem(BOOKMARK_KEY),urlSet)) } catch { /* In-memory saves remain available. */ }
    const params = new URLSearchParams(location.search)
    if (params.get('q')) setQuery(params.get('q').slice(0,200))
    const keyboard = e => {
      if(e.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName) && !document.activeElement?.isContentEditable) { e.preventDefault(); searchRef.current?.focus() }
    }
    const sync = e => { if(e.key === BOOKMARK_KEY) setSaved(readBookmarks(e.newValue,urlSet)) }
    window.addEventListener('keydown',keyboard)
    window.addEventListener('storage',sync)
    return () => { window.removeEventListener('keydown',keyboard); window.removeEventListener('storage',sync) }
  },[])
  useEffect(() => {
    if(randomSite && dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal()
  },[randomSite])
  const results = useMemo(() => filterSites(allSites,{query,region,category,savedOnly,saved,sort}),[query,region,category,savedOnly,saved,sort])
  const categories = allCategories.filter(c => region === 'all' || c.regionId === region).sort((a,b) => Number(b.id==='gl-games') - Number(a.id==='gl-games'))
  function changeFilter(setter,value) { setter(value); setLimit(24) }
  function toggleSave(url) {
    const next = saved.includes(url) ? saved.filter(v => v!==url) : [...saved,url]
    setSaved(next)
    try { localStorage.setItem(BOOKMARK_KEY,JSON.stringify(next)); setNotice(next.includes(url) ? '저장했습니다.' : '저장을 취소했습니다.') } catch { setNotice('이 탭에서만 저장됩니다. 브라우저 저장 공간을 확인해 주세요.') }
  }
  function pickRandom() {
    const pool = results.length > 1 ? results.filter(s => s.url !== randomSite?.url) : results
    if(pool.length) setRandomSite(pool[Math.floor(Math.random()*pool.length)])
  }
  function reset() { setQuery(''); setRegion('all'); setCategory('all'); setSavedOnly(false); setLimit(24) }
  const selectedCategory = allCategories.find(c => c.id === category)
  return <section id="directory" className="directory-section">
    <div className="wrap">
      <div className="directory-search-row">
        <div className="search-box"><Icon name="search" size={21} /><label className="sr-only" htmlFor="site-search">사이트 검색</label><input ref={searchRef} id="site-search" type="search" maxLength={200} placeholder="어떤 사이트를 찾으세요?" value={query} onChange={e=>changeFilter(setQuery,e.target.value)} onKeyDown={e=>{ if(e.key==='Escape') setQuery('') }} /><kbd>/</kbd></div>
        <button ref={randomButtonRef} className="random-button" aria-label="어디든 떠나기" onClick={pickRandom} disabled={!results.length}><Icon name="shuffle" size={18}/><span>어디든 떠나기</span><Icon name="arrow" size={15}/></button>
      </div>
      <div className="directory-layout">
        <aside className="directory-sidebar" aria-label="사이트 필터">
          <button className={`sidebar-all ${!savedOnly && category==='all' ? 'selected' : ''}`} onClick={reset}><Icon name="compass" size={18}/>전체 탐방<span>{allSites.length}</span></button>
          <button className={savedOnly ? 'sidebar-saved selected' : 'sidebar-saved'} onClick={()=>{changeFilter(setSavedOnly,!savedOnly)}}><Icon name="bookmark" size={18}/>저장한 사이트<span>{saved.length}</span></button>
          <p className="sidebar-label">카테고리</p>
          <div className="category-list">{categories.map(c=><button key={c.id} className={category===c.id ? 'selected' : ''} aria-pressed={category===c.id} onClick={()=>changeFilter(setCategory,category===c.id?'all':c.id)}><span>{c.category}</span><small>{c.sites.length}</small></button>)}</div>
          <Link href="/guides/" className="sidebar-guide"><span>무엇부터 볼지 고민이라면</span><strong>탐방 가이드 <Icon name="right" size={16}/></strong></Link>
        </aside>
        <div className="directory-main">
          <div className="directory-topline">
            <div className="region-tabs" role="group" aria-label="지역 선택">{[['all','전체',allSites.length],['kr','한국',countByRegion.kr],['global','전세계',countByRegion.global]].map(([id,label,count])=><button key={id} aria-pressed={region===id} className={region===id?'active':''} onClick={()=>{changeFilter(setRegion,id);setCategory('all')}}>{label}<span>{count}</span></button>)}</div>
            <div className="view-options"><button onClick={()=>setView('grid')} aria-label="격자 보기" aria-pressed={view==='grid'}><Icon name="grid" size={17}/></button><button onClick={()=>setView('list')} aria-label="목록 보기" aria-pressed={view==='list'}><Icon name="list" size={19}/></button></div>
          </div>
          <div className="mobile-category"><label className="sr-only" htmlFor="category-select">카테고리</label><select id="category-select" aria-label="카테고리" value={category} onChange={e=>changeFilter(setCategory,e.target.value)}><option value="all">전체 카테고리</option>{categories.map(c=><option key={c.id} value={c.id}>{c.regionId==='kr'?'한국':'세계'} · {c.category}</option>)}</select><button aria-pressed={savedOnly} onClick={()=>changeFilter(setSavedOnly,!savedOnly)}><Icon name="bookmark" size={16}/>저장 {saved.length}</button></div>
          <div className="results-heading"><h2>{savedOnly?'저장한 사이트':selectedCategory?.category || (query?'검색 결과':'사이트 둘러보기')} <span aria-live="polite">{results.length}</span></h2><label className="sort-label"><span className="sr-only">정렬 방식</span><select value={sort} onChange={e=>changeFilter(setSort,e.target.value)}><option value="recommended">추천순</option><option value="name">이름순</option></select></label></div>
          {selectedCategory && <div className="category-intro"><p>{selectedCategory.blurb}</p><Link href={`/c/${category}/`}>카테고리 자세히 보기 <Icon name="arrow" size={13}/></Link></div>}
          {!results.length ? <div className="empty-state"><Icon name={savedOnly?'bookmark':'search'} size={32}/><h3>{savedOnly?'마음에 드는 곳을 저장해 보세요.':'검색 결과가 없습니다.'}</h3><p>{savedOnly?'사이트 이름 옆의 책갈피를 누르면 여기에 모입니다.':'다른 검색어를 입력하거나 필터를 초기화해 보세요.'}</p><button onClick={reset}>전체 사이트 보기 <Icon name="right" size={16}/></button></div> : <>
            <div className={`site-grid ${view==='list'?'site-list':''}`}>{results.slice(0,Math.min(12,limit)).map(s=><SiteCard key={s.url} site={s} saved={saved.includes(s.url)} onSave={toggleSave}/>)}</div>
            {results.length>12 && <AdSlot placement="directory-middle" />}
            {limit>12 && <div className={`site-grid ${view==='list'?'site-list':''}`}>{results.slice(12,limit).map(s=><SiteCard key={s.url} site={s} saved={saved.includes(s.url)} onSave={toggleSave}/>)}</div>}
            <div className="load-more-row">{limit<results.length ? <button className="load-more" onClick={()=>setLimit(n=>n+24)}>사이트 더 보기 <Icon name="down" size={16}/><span>{Math.min(limit,results.length)} / {results.length}</span></button> : <span>전체 {results.length}개 사이트를 확인했어요.</span>}</div>
          </>}
          <p className="bookmark-notice" role="status">{notice}</p>
        </div>
      </div>
    </div>
    <dialog ref={dialogRef} className="random-dialog" aria-labelledby="random-site-title" onCancel={()=>setRandomSite(null)} onClose={()=>{setRandomSite(null);randomButtonRef.current?.focus()}}>
      {randomSite && <><button className="dialog-close" aria-label="닫기" onClick={()=>dialogRef.current.close()}><Icon name="close"/></button><span className="eyebrow">이번 탐방지는</span><SiteLogo site={randomSite}/><h2 id="random-site-title">{randomSite.name}</h2><p>{randomSite.desc}</p><span className="random-domain">{randomSite.url}</span><a className="primary-button" href={siteHref(randomSite)} target="_blank" rel="noopener noreferrer">사이트 열기 <Icon name="arrow" size={18}/></a><button className="another-button" onClick={pickRandom}><Icon name="shuffle" size={16}/>다른 곳 발견하기</button></>}
    </dialog>
  </section>
}
