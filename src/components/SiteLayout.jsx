import "../app/globals.css";
import "../app/earth.css";
import Header from "./Header";
import Footer from "./Footer";
import ScrollEffects from "./ScrollEffects";
import { BookmarkProvider } from "./Bookmarks";
import { LocaleProvider } from "./LocaleProvider";
import { getLocaleData } from "../i18n/server";
import { locales, localizedPath, languageTags } from "../i18n/routing";
import { site } from "../site.config";
import { isProduction, pageMetadata } from "../lib/metadata";
import Advertising from "./Advertising";
import { allCategories, allSites, countByRegion } from "../data/sites";
import { guides } from "../data/guides";
const basePaths = ["/", "/guides/", "/about/", "/contact/", "/privacy/", "/terms/", ...allCategories.map(c => `/c/${c.id}/`), ...guides.map(g => `/guide/${g.slug}/`)];
const knownPaths = locales.flatMap(locale => basePaths.map(path => localizedPath(path, locale)));
export async function layoutMetadata(locale = "ko") {
  const {
    t
  } = await getLocaleData(locale);
  return {
    ...pageMetadata(t(site.title), t(site.description), "/", locale),
    metadataBase: new URL(site.url),
    applicationName: t(site.name),
    verification: {
      other: {
        "naver-site-verification": "0f0bebae78c1b2563ddfc0368798cdba86d27bee"
      }
    },
    icons: {
      icon: [{
        url: "/favicon.ico",
        sizes: "16x16 32x32 48x48 64x64",
        type: "image/x-icon"
      }, {
        url: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }],
      apple: "/apple-icon.png"
    }
  };
}
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070a0f"
};
export default async function SiteLayout({
  children,
  locale = "ko"
}) {
  const {
    t,
    messages,
    categories,
    guides: translatedGuides
  } = await getLocaleData(locale);
  const guideSummaries = translatedGuides.map(({
    slug,
    title,
    description,
    eyebrow,
    readTime
  }) => ({
    slug,
    title,
    description,
    eyebrow,
    readTime
  }));
  return <html lang={languageTags[locale]} data-scroll-behavior="smooth"><body id="top"><a className="skip-link" href="#main-content">{t("본문 바로가기")}</a><ScrollEffects /><LocaleProvider locale={locale} messages={messages} categories={categories} guideSummaries={guideSummaries} validUrls={allSites.map(s => s.url)} countByRegion={countByRegion}><BookmarkProvider><Header /><main id="main-content">{children}</main><Footer /></BookmarkProvider></LocaleProvider><Advertising enabled={isProduction && site.adsEnabled} productionOrigin={site.url} publisherId={site.adsensePublisherId} knownPaths={knownPaths} /></body></html>;
}
