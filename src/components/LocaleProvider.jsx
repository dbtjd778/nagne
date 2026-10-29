'use client';

import { createContext, useContext, useMemo } from "react";
import { translator, localizedPath } from "../i18n/routing";
const LocaleContext = createContext(null);
const CatalogueContext = createContext([]);
export function LocaleProvider({
  locale,
  messages,
  categories,
  guideSummaries,
  validUrls,
  countByRegion,
  children
}) {
  const value = useMemo(() => ({
    locale,
    t: translator(messages),
    path: href => localizedPath(href, locale),
    allCategories: categories,
    guides: guideSummaries,
    allowedUrls: new Set(validUrls),
    totalSiteCount: validUrls.length,
    countByRegion
  }), [locale, messages, categories, guideSummaries, validUrls, countByRegion]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
export function CatalogueProvider({
  sites,
  children
}) {
  return <CatalogueContext.Provider value={sites}>{children}</CatalogueContext.Provider>;
}
export function useLocale() {
  const settings = useContext(LocaleContext);
  const allSites = useContext(CatalogueContext);
  return {
    ...settings,
    allSites
  };
}
