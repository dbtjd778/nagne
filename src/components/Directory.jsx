'use client';

import { useLocale } from "./LocaleProvider";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { filterSites } from "../lib/directory";
import { defaultDirectoryState, readDirectoryState, directorySearch } from "../lib/directory-state";
import { useBookmarks } from "./Bookmarks";
import SiteCard, { SiteLogo, siteHref } from "./SiteCard";
import AdSlot from "./AdSlot";
import { Icon } from "./Icons";

// Only this URL listener needs client navigation state; the catalogue remains
// fully rendered in exported HTML for the first visit and search engines.
function DirectoryUrlState({
  onChange
}) {
  const {
    allSites,
    allCategories
  } = useLocale();
  const params = useSearchParams();
  useEffect(() => {
    onChange(readDirectoryState(location.search, allCategories, allSites.length));
  }, [params, onChange, allCategories, allSites.length]);
  return null;
}
export default function Directory() {
  const {
    t,
    path,
    locale,
    allSites,
    allCategories,
    countByRegion
  } = useLocale();
  const [state, setState] = useState(defaultDirectoryState);
  const {
    query,
    region,
    category,
    savedOnly,
    limit,
    sort,
    view
  } = state;
  const {
    saved,
    toggleSave
  } = useBookmarks();
  const [randomSite, setRandomSite] = useState(null);
  const searchRef = useRef(null);
  const dialogRef = useRef(null);
  const randomButtonRef = useRef(null);
  const moreButtonRef = useRef(null);
  useEffect(() => {
    const keyboard = e => {
      if (e.key === "/" && !dialogRef.current?.open && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName) && !document.activeElement?.isContentEditable) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", keyboard);
    return () => window.removeEventListener("keydown", keyboard);
  }, []);
  useEffect(() => {
    if (randomSite && dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  }, [randomSite]);
  function update(patch, resetLimit = true) {
    const next = {
      ...state,
      ...(resetLimit ? {
        limit: 24
      } : {}),
      ...patch
    };
    setState(next);
    // Let Next.js copy its own history metadata so same-page menu navigation
    // also updates useSearchParams instead of leaving stale filters behind.
    history.replaceState(null, "", `${location.pathname}${directorySearch(next)}${location.hash}`);
  }
  function reset() {
    update({
      query: "",
      region: "all",
      category: "all",
      savedOnly: false
    });
  }
  function showSaved() {
    update({
      query: "",
      region: "all",
      category: "all",
      savedOnly: !savedOnly
    });
  }
  function clearFilters() {
    update({
      query: "",
      region: "all",
      category: "all"
    });
  }
  function pickRandom() {
    const pool = results.length > 1 ? results.filter(s => s.url !== randomSite?.url) : results;
    if (pool.length) setRandomSite(pool[Math.floor(Math.random() * pool.length)]);
  }
  function loadMore() {
    const previousCount = Math.min(limit, results.length);
    const keyboard = document.activeElement === moreButtonRef.current && moreButtonRef.current.matches(":focus-visible");
    update({
      limit: limit + 24
    }, false);
    if (keyboard) requestAnimationFrame(() => {
      document.querySelectorAll("#directory .site-title-link")[previousCount]?.focus();
    });
  }
  const results = useMemo(() => filterSites(allSites, {
    query,
    region,
    category,
    savedOnly,
    saved,
    sort,
    locale
  }), [allSites, locale, query, region, category, savedOnly, saved, sort]);
  const categories = allCategories.filter(c => region === "all" || c.regionId === region).sort((a, b) => Number(b.id === "gl-games") - Number(a.id === "gl-games"));
  const selectedCategory = allCategories.find(c => c.id === category);
  const hasFilters = Boolean(query || region !== "all" || category !== "all");
  const emptySaved = savedOnly && !saved.length;
  return <section id="directory" className="directory-section">
    <Suspense fallback={null}><DirectoryUrlState onChange={setState} /></Suspense>
    <div className="wrap">
      <div className="directory-search-row">
        <div className="search-box">
          <Icon name="search" size={21} /><label className="sr-only" htmlFor="site-search">{t("사이트 검색")}</label>
          <input ref={searchRef} id="site-search" type="search" maxLength={200} placeholder={t("이름·관심사로 검색")} value={query} onChange={e => update({
            query: e.target.value
          })} onKeyDown={e => {
            if (e.key === "Escape") update({
              query: ""
            });
          }} />
          {query ? <button className="clear-search" aria-label={t("검색어 지우기")} onClick={() => {
            update({
              query: ""
            });
            searchRef.current?.focus();
          }}><Icon name="close" size={18} /></button> : <kbd>/</kbd>}
        </div>
        <button ref={randomButtonRef} className="random-button" aria-label={t("랜덤 사이트 추천")} onClick={pickRandom} disabled={!results.length}><Icon name="shuffle" size={18} /><span>{t("랜덤 탐방")}</span></button>
      </div>
      <div className="directory-layout">
        <aside className="directory-sidebar" aria-label={t("사이트 필터")}>
          <button className={`sidebar-all ${!savedOnly && !hasFilters ? "selected" : ""}`} onClick={reset}><Icon name="compass" size={18} />{t("전체 탐방")}<span>{allSites.length}</span></button>
          <button className={savedOnly ? "sidebar-saved selected" : "sidebar-saved"} aria-pressed={savedOnly} onClick={showSaved}><Icon name="bookmark" size={18} />{t("저장한 사이트")}<span>{saved.length}</span></button>
          <p className="sidebar-label">{t("카테고리")}</p>
          <div className="category-list">{categories.map(c => <button key={c.id} className={category === c.id ? "selected" : ""} aria-pressed={category === c.id} onClick={() => update({
              category: category === c.id ? "all" : c.id
            })}><span>{c.category}</span><small>{c.count}</small></button>)}</div>
          <Link href={path("/guides/")} className="sidebar-guide"><span>{t("무엇부터 볼지 고민이라면")}</span><strong>{t("탐방 가이드")}<Icon name="right" size={16} /></strong></Link>
        </aside>
        <div className="directory-main">
          <div className="directory-topline">
            <div className="region-tabs" role="group" aria-label={t("지역 선택")}>{[["all", t("전체"), allSites.length], ["kr", t("한국"), countByRegion.kr], ["global", t("전세계"), countByRegion.global]].map(([id, label, count]) => <button key={id} aria-pressed={region === id} className={region === id ? "active" : ""} onClick={() => update({
                region: id,
                category: "all"
              })}>{label}<span>{count}</span></button>)}</div>
            <div className="view-options"><button onClick={() => update({
                view: "grid"
              }, false)} aria-label={t("격자 보기")} aria-pressed={view === "grid"}><Icon name="grid" size={17} /></button><button onClick={() => update({
                view: "list"
              }, false)} aria-label={t("목록 보기")} aria-pressed={view === "list"}><Icon name="list" size={19} /></button></div>
          </div>
          <div className="mobile-category"><label className="sr-only" htmlFor="category-select">{t("카테고리")}</label><select id="category-select" aria-label={t("카테고리")} value={category} onChange={e => update({
              category: e.target.value
            })}><option value="all">{t("전체 카테고리")}</option>{categories.map(c => <option key={c.id} value={c.id}>{c.regionId === "kr" ? t("한국") : t("세계")} · {c.category}</option>)}</select><button aria-pressed={savedOnly} onClick={showSaved}><Icon name="bookmark" size={16} />{t("저장")}{saved.length}</button></div>
          <div className="results-heading"><h2>{savedOnly ? t("저장한 사이트") : selectedCategory?.category || (query ? t("검색 결과") : t("사이트 둘러보기"))} <span>{results.length}</span></h2><label className="sort-label"><span className="sr-only">{t("정렬 방식")}</span><select value={sort} onChange={e => update({
                sort: e.target.value
              })}><option value="recommended">{t("추천순")}</option><option value="name">{t("이름순")}</option></select></label></div>
          <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{query ? t("{0} 검색 결과", {
              "0": query
            }) : t("현재 목록")} {t("{0}개 중 {1}개 표시 중",{0:results.length,1:Math.min(limit,results.length)})}</p>
          {hasFilters && <div className="active-filters" aria-label={t("적용 중인 필터")}>
            {query && <button onClick={() => update({
              query: ""
            })} aria-label={t("검색어 {0} 해제", {
              "0": query
            })}><span>“{query}”</span><Icon name="close" size={13} /></button>}
            {region !== "all" && <button onClick={() => update({
              region: "all"
            })} aria-label={t("지역 필터 해제")}>{region === "kr" ? t("한국") : t("전세계")}<Icon name="close" size={13} /></button>}
            {selectedCategory && <button onClick={() => update({
              category: "all"
            })} aria-label={t("카테고리 필터 해제")}>{selectedCategory.category}<Icon name="close" size={13} /></button>}
            <button className="reset-filters" onClick={clearFilters}>{t("필터 초기화")}</button>
          </div>}
          {savedOnly && <p className="saved-hint">{t("이 브라우저에 저장된 목록입니다.")}</p>}
          {selectedCategory && <div className="category-intro"><p>{selectedCategory.blurb}</p><Link href={path(`/c/${category}/`)}>{t("카테고리 자세히 보기")}<Icon name="arrow" size={13} /></Link></div>}
          {!results.length ? <div className="empty-state">
            <Icon name={emptySaved ? "bookmark" : "search"} size={32} />
            <h3>{emptySaved ? t("마음에 드는 곳을 저장해 보세요.") : savedOnly ? t("조건에 맞는 저장한 사이트가 없습니다.") : t("검색 결과가 없습니다.")}</h3>
            <p>{emptySaved ? t("사이트 옆의 책갈피를 누르면 여기에 모입니다.") : t("검색어를 바꾸거나 선택한 필터를 해제해 보세요.")}</p>
            {!emptySaved && hasFilters && <button onClick={clearFilters}>{savedOnly ? t("저장한 사이트 모두 보기") : t("검색·필터 초기화")} <Icon name="right" size={16} /></button>}
            {(emptySaved || !hasFilters) && <button onClick={reset}>{t("전체 사이트 보기")}<Icon name="right" size={16} /></button>}
          </div> : <>
            <div className={`site-grid ${view === "list" ? "site-list" : ""}`}>{results.slice(0, Math.min(12, limit)).map(s => <SiteCard key={s.url} site={s} />)}</div>
            {results.length > 12 && <AdSlot placement="directory-middle" />}
            {limit > 12 && <div className={`site-grid ${view === "list" ? "site-list" : ""}`}>{results.slice(12, limit).map(s => <SiteCard key={s.url} site={s} />)}</div>}
            <div className="load-more-row">{limit < results.length ? <button ref={moreButtonRef} className="load-more" onClick={loadMore}>{t("사이트 더 보기")}<Icon name="down" size={16} /><span>{Math.min(limit, results.length)} / {results.length}</span></button> : <span>{t("전체 {0}개 사이트를 확인했어요.",{0:results.length})}</span>}</div>
          </>}
        </div>
      </div>
    </div>
    <dialog ref={dialogRef} className="random-dialog" aria-labelledby="random-site-title" onClose={() => {
      setRandomSite(null);
      randomButtonRef.current?.focus();
    }}>
      {randomSite && <>
        <button className="dialog-close" aria-label={t("닫기")} onClick={() => dialogRef.current.close()}><Icon name="close" /></button>
        <span className="eyebrow">{t("이번 탐방지는")}</span><SiteLogo key={randomSite.url} site={randomSite} /><h2 id="random-site-title">{randomSite.name}</h2><p>{randomSite.desc}</p><span className="random-domain">{randomSite.url}</span>
        <a className="primary-button" href={path(siteHref(randomSite))} target="_blank" rel="noopener noreferrer">{t("사이트 열기")}<Icon name="arrow" size={18} /><span className="sr-only">{t("새 탭")}</span></a>
        <div className="random-actions"><button aria-pressed={saved.includes(randomSite.url)} onClick={() => toggleSave(randomSite.url)}><Icon name="bookmark" size={16} />{saved.includes(randomSite.url) ? t("저장됨") : t("저장하기")}</button>{results.length > 1 && <button onClick={pickRandom}><Icon name="shuffle" size={16} />{t("다른 곳 보기")}</button>}</div>
      </>}
    </dialog>
  </section>;
}
