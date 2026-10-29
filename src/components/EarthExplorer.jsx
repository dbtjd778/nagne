'use client';

import { useLocale } from "./LocaleProvider";
import dynamic from "next/dynamic";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { countryName, groupCountries, globeSummary, filterCountrySites, searchCountries } from "../lib/world";
import { useBookmarks } from "./Bookmarks";
import { SiteLogo, siteHref } from "./SiteCard";
import { Icon } from "./Icons";
function EarthLoading() {
  const {
    t
  } = useLocale();
  return <div className="earth-loading" role="status">{t("지구를 불러오는 중")}<span /></div>;
}
const EarthCanvas = dynamic(() => import("./EarthCanvas"), {
  ssr: false,
  loading: EarthLoading
});
const names = {
  saved: "저장한 사이트",
  unknown: "국가 미확인"
};
function EarthUrlState({
  onChange
}) {
  const params = useSearchParams();
  useEffect(() => {
    onChange(params.get("country"));
  }, [params, onChange]);
  return null;
}
export default function EarthExplorer() {
  const {
    t,
    path,
    locale,
    allSites,
    allCategories
  } = useLocale();
  const allCountries = useMemo(() => groupCountries(allSites, locale), [allSites, locale]);
  const [selected, setSelected] = useState(null);
  const [countryQuery, setCountryQuery] = useState("");
  const [countryList, setCountryList] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [globeCategory, setGlobeCategory] = useState("all");
  const [mountGlobe, setMountGlobe] = useState(false);
  const [limit, setLimit] = useState(12);
  const [rotating, setRotating] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [focusPoint, setFocusPoint] = useState({
    lat: 24,
    lng: 113,
    revision: 0
  });
  const {
    saved,
    toggleSave
  } = useBookmarks();
  const panelTitle = useRef(null);
  const returnFocus = useRef(null);
  const countryPicker = useRef(null);
  const section = useRef(null);
  const {
    countries,
    siteCount,
    unknownCount
  } = useMemo(() => globeSummary(allSites, globeCategory, locale), [allSites, globeCategory, locale]);
  useEffect(() => {
    const stage = section.current.querySelector(".planet-stage");
    const intentEvents = ["pointerdown", "keydown", "wheel", "touchstart", "hashchange", "popstate"];
    const removeIntentListeners = () => intentEvents.forEach(name => window.removeEventListener(name, begin));
    const observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio >= .15) {
        setMountGlobe(true);
        observer.disconnect();
      }
    }, {
      threshold: .15
    });
    function begin() {
      removeIntentListeners();
      observer.observe(stage);
    }
    // An initial hash jump can briefly expose the hero before the browser
    // reaches the list. Do not download WebGL for that transient visibility.
    if (location.hash && !["#top", "#explore"].includes(location.hash)) {
      intentEvents.forEach(name => window.addEventListener(name, begin, {
        passive: true
      }));
    } else begin();
    return () => {
      observer.disconnect();
      removeIntentListeners();
    };
  }, []);
  const readCountry = useCallback(code => {
    if (allCountries.some(c => c.code === code) || ["unknown", "saved"].includes(code)) {
      setSelected(code);
      const country = allCountries.find(c => c.code === code);
      if (country) setFocusPoint({
        lat: country.lat,
        lng: country.lng,
        revision: Date.now()
      });
    } else setSelected(null);
  }, [allCountries]);
  useEffect(() => {
    const read = () => readCountry(new URL(location.href).searchParams.get("country"));
    read();
    window.addEventListener("popstate", read);
    const leaveGlobe = () => {
      if (location.hash && location.hash !== "#explore") {
        setSelected(null);
        setCountryList(false);
        updateUrl(null);
      }
    };
    window.addEventListener("hashchange", leaveGlobe);
    return () => {
      window.removeEventListener("popstate", read);
      window.removeEventListener("hashchange", leaveGlobe);
    };
  }, [readCountry]);
  useEffect(() => {
    if (selected) panelTitle.current?.focus({
      preventScroll: true
    });
  }, [selected]);
  useEffect(() => {
    const escape = event => {
      if (event.key === "Escape") {
        if (countryList) setCountryList(false);else close();
      }
    };
    const outside = event => {
      if (countryList && !countryPicker.current?.contains(event.target)) setCountryList(false);
    };
    window.addEventListener("keydown", escape);
    window.addEventListener("pointerdown", outside);
    return () => {
      window.removeEventListener("keydown", escape);
      window.removeEventListener("pointerdown", outside);
    };
  }, [countryList]);
  function updateUrl(code) {
    const url = new URL(location.href);
    if (code) url.searchParams.set("country", code);else url.searchParams.delete("country");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }
  function choose(code) {
    returnFocus.current = document.activeElement;
    setSelected(code);
    setQuery("");
    setCategory(globeCategory);
    setLimit(12);
    setRotating(false);
    setCountryList(false);
    setCountryQuery("");
    updateUrl(code);
    const country = countries.find(c => c.code === code);
    if (country) {
      setFocusPoint({
        lat: country.lat,
        lng: country.lng,
        revision: Date.now()
      });
      setZoom(1.12);
    }
  }
  function changeGlobeCategory(value) {
    setGlobeCategory(value);
    setCountryQuery("");
    setCountryList(false);
    // The globe sets the initial country filter; the drawer can still explore
    // other categories independently without changing every country's count.
    setCategory(value);
    setQuery("");
    setLimit(12);
    const nextCountries = globeSummary(allSites, value, locale).countries;
    const destination = nextCountries.find(country => country.code === selected) || nextCountries[0];
    if (destination) {
      setRotating(false);
      setFocusPoint({
        lat: destination.lat,
        lng: destination.lng,
        revision: Date.now()
      });
    }
  }
  function close() {
    setSelected(null);
    updateUrl(null);
    requestAnimationFrame(() => returnFocus.current?.isConnected && returnFocus.current.focus({
      preventScroll: true
    }));
  }
  function reset() {
    close();
    setZoom(1);
    setRotating(false);
    setFocusPoint({
      lat: 24,
      lng: 113,
      revision: Date.now()
    });
  }
  function randomCountry() {
    const choices = countries.filter(country => country.code !== selected);
    if (choices.length) choose(choices[Math.floor(Math.random() * choices.length)].code);
  }
  const countrySites = useMemo(() => selected ? filterCountrySites(allSites, selected, "", "all", saved) : [], [allSites, selected, saved]);
  const results = useMemo(() => selected ? filterCountrySites(countrySites, selected, query, category, saved) : [], [countrySites, selected, query, category, saved]);
  const availableCategories = useMemo(() => {
    const ids = new Set(countrySites.map(site => site.categoryId));
    return allCategories.filter(c => ids.has(c.id) || c.id === category);
  }, [countrySites, category]);
  const visibleCountries = searchCountries(countries, countryQuery);
  const title = t(names[selected] || "") || countryName(selected, locale);
  return <section ref={section} className={`earth-explorer ${selected ? "has-country" : ""}`} id="explore" aria-label={t("지구본으로 웹사이트 탐방")}>
    <Suspense fallback={null}><EarthUrlState onChange={readCountry} /></Suspense>
    <div className="space-stars" aria-hidden="true" />
    <div className="earth-heading"><div className="earth-kicker"><span /> THE INTERNET, AROUND THE WORLD</div><h1>{t("다음 발견은,")}<br />{t("어느 나라일까요")}<span>?</span></h1><p>{t("지구를 돌리고, 숫자를 눌러보세요.")}</p></div>
    <div className="earth-category"><label htmlFor="globe-category">{t("어떤 사이트를 찾으세요?")}</label><select id="globe-category" aria-label={t("지구본 카테고리")} value={globeCategory} onChange={e => changeGlobeCategory(e.target.value)}><option value="all">{t("전체 카테고리")}</option>{allCategories.map(c => <option key={c.id} value={c.id}>{c.category} · {c.count}</option>)}</select><p role="status">{t("{0}개 사이트 · {1}개 국가·지역",{0:siteCount.toLocaleString(locale),1:countries.length})}</p>{globeCategory !== "all" && unknownCount > 0 && <button onClick={() => choose("unknown")}>{t("국가 미확인 {0}개도 보기 ↗",{0:unknownCount})}</button>}</div>
    <div className="earth-top-tools">
      <div className="country-picker" ref={countryPicker}><div className="earth-search"><Icon name="search" size={17} /><input aria-label={t("나라 검색")} placeholder={t("어느 나라가 궁금하세요?")} value={countryQuery} maxLength={80} onFocus={() => setCountryList(true)} onChange={e => {
            setCountryQuery(e.target.value);
            setCountryList(true);
          }} /><button aria-label={countryList ? t("나라 목록 닫기") : t("나라 목록 열기")} onClick={() => setCountryList(v => !v)}><Icon name={countryList ? "close" : "grid"} size={16} /></button></div>
      {countryList && <div className="country-options" aria-label={t("나라 목록")}><div className="country-options-heading">{t("나라별 웹사이트")}<span>{countries.length}</span></div>{visibleCountries.map(c => <button key={c.code} onClick={() => choose(c.code)}><span>{c.name}<small>{c.en}</small></span><strong>{c.count}</strong></button>)}{!visibleCountries.length && <p>{t("일치하는 나라가 없습니다.")}</p>}<button className="country-unverified" onClick={() => choose("unknown")}>{t("국가 미확인")}<span>{unknownCount}</span></button></div>}
      </div>
      <button className="earth-saved" onClick={() => choose("saved")} aria-label={t("저장한 사이트 {0}개 보기", {
        "0": saved.length
      })}><Icon name="bookmark" size={17} /><span>{saved.length}</span></button>
    </div>
    <div className="planet-stage">
      {mountGlobe && !failed && <EarthCanvas countries={countries} selected={selected} focusPoint={focusPoint} rotating={rotating} zoom={zoom} onChoose={choose} onInteract={() => setRotating(false)} onReady={() => setReady(true)} onError={() => setFailed(true)} />}
      {failed && <div className="earth-fallback"><h2>{t("이 환경에서는 3D 지구본을 표시할 수 없어요.")}</h2><p>{t("나라 목록에서 똑같이 탐방할 수 있습니다.")}</p><button onClick={() => setCountryList(true)}>{t("나라 목록 열기")}</button><a href="#directory">{t("전체 사이트 보기")}</a></div>}
      {!ready && !failed && <div className="planet-loading-text" role="status">{t("위성 지도를 준비하고 있습니다.")}</div>}
    </div>
    <div className="earth-coordinate" aria-hidden="true"><span>EARTH / 01</span><i /><span>A WORLD TO DISCOVER</span></div>
    <div className="earth-controls" aria-label={t("지구본 조작")}><button aria-label={t("지구본 축소")} disabled={zoom <= .85} onClick={() => setZoom(z => Math.max(.85, +(z - .2).toFixed(2)))}>−</button><span>{Math.round(zoom * 100)}%</span><button aria-label={t("지구본 확대")} disabled={zoom >= 2} onClick={() => setZoom(z => Math.min(2, +(z + .2).toFixed(2)))}>+</button><i /><button aria-label={rotating ? t("자동 회전 정지") : t("자동 회전 시작")} aria-pressed={rotating} onClick={() => setRotating(v => !v)}>{rotating ? "Ⅱ" : "▷"}</button><button aria-label={t("처음 위치로")} onClick={reset}>↺</button></div>
    <div className="earth-bottom"><div className="earth-stats"><strong>{siteCount.toLocaleString(locale)}</strong><span>{t("개의 발견")}</span><i /><strong>{countries.length}</strong><span>{t("개 국가·지역")}</span></div><button className="earth-random" onClick={randomCountry} disabled={!countries.length}><Icon name="shuffle" size={15} />{t("새로운 나라 탐방")}</button><a href="#directory" className="earth-all">{t("전체 사이트 보기")}<span>↓</span></a></div>
    <div className="earth-instructions">{t("드래그로 회전 · 숫자를 눌러 탐방 · 방향키로 회전")}<span>{globeCategory === "all" ? t("숫자는 등록된 사이트 수입니다.") : t("선택한 카테고리의 사이트 수입니다.")}</span></div>
    {selected && <aside className="country-panel" aria-labelledby="country-panel-title">
      <div className="country-panel-head"><div><span className="country-panel-code">{["unknown", "saved"].includes(selected) ? "YOUR DISCOVERIES" : `${selected} / WEBSITE ATLAS`}</span><h2 id="country-panel-title" ref={panelTitle} tabIndex={-1}>{title}</h2><p>{t("전체 {0}개의 웹사이트",{0:countrySites.length})}</p></div><button onClick={close} aria-label={t("국가 사이트 패널 닫기")}><Icon name="close" size={21} /></button></div>
      <div className="country-panel-filters"><div><Icon name="search" size={16} /><input aria-label={t("선택한 나라의 사이트 검색")} placeholder={t("사이트 이름이나 관심사")} value={query} onChange={e => {
            setQuery(e.target.value);
            setLimit(12);
          }} /></div><select aria-label={t("국가 내 카테고리")} value={category} onChange={e => {
          setCategory(e.target.value);
          setLimit(12);
        }}><option value="all">{t("모든 카테고리")}</option>{availableCategories.map(c => <option key={c.id} value={c.id}>{c.category}</option>)}</select></div>
      <div className="country-panel-list"><p className="country-result-count" role="status">{t("{0}개의 발견",{0:results.length})}</p>{results.slice(0, limit).map(site => <article className="country-site" key={site.id}><div className="country-site-heading"><SiteLogo site={site} /><a href={path(siteHref(site))} target="_blank" rel="noopener noreferrer" aria-label={t("{0} — 새 탭에서 열기", {
              "0": site.name
            })}><h3>{site.name}</h3><span>{new URL(siteHref(site)).hostname.replace(/^www\./, "")}</span></a><button onClick={() => toggleSave(site.url)} aria-pressed={saved.includes(site.url)} aria-label={`${site.name} ${saved.includes(site.url) ? t("저장 취소") : t("저장")}`}><Icon name="bookmark" size={17} /></button></div><p>{site.desc}</p><div className="country-site-meta"><span>{site.categoryName}</span>{site.countrySource && <a href={path(site.countrySource)} target="_blank" rel="noopener noreferrer" title={site.countryBasis}>{t("국가 근거 ↗")}</a>}</div></article>)}{!results.length && <div className="country-empty"><Icon name="search" size={28} /><p>{selected === "saved" && !saved.length ? t("마음에 드는 사이트의 책갈피를 눌러보세요.") : t("조건에 맞는 사이트가 없습니다.")}</p>{(query || category !== "all") && <button onClick={() => {
            setQuery("");
            setCategory("all");
          }}>{t("필터 초기화")}</button>}</div>}{limit < results.length && <button className="country-more" onClick={() => setLimit(v => v + 12)}>{t("12개 더 보기")}<span>↓</span></button>}</div>
      <div className="country-panel-note">{t("운영사·제작자의 공개 소재지 기준입니다.")}<br />{t("여러 나라에서 이용할 수 있으며, 서비스 언어와 다를 수 있습니다.")}</div>
    </aside>}
    <div className="earth-credits"><a href="https://www.solarsystemscope.com/textures/" target="_blank" rel="noopener noreferrer">Earth textures: Solar System Scope</a><span> · </span><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a><span> · </span><a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener noreferrer">Natural Earth</a></div>
  </section>;
}
