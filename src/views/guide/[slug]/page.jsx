import { languageTags } from "../../../i18n/routing";
import { getLocaleData } from "../../../i18n/server";
import { localizedPath } from "../../../i18n/routing";
import Link from "../../../components/SiteLink";
import { notFound } from "next/navigation";
import { guides } from "../../../data/guides";
import { allSites } from "../../../data/sites";
import PageHeading from "../../../components/PageHeading";
import AffiliateProducts, { AffiliateDisclosure } from "../../../components/AffiliateProducts";
import { Icon } from "../../../components/Icons";
import { JsonLd, canonical, pageMetadata } from "../../../lib/metadata";
import { originalPublishedAt, guideUpdatedAt, localizedContentDate } from "../../../data/content-dates";
import { GuideComparison, GuideEvidence } from "../../../components/GuideEvidence";
import { editorialLabels, localizeEditorial } from "../../../data/guide-notes";
export const dynamicParams = false;
export function generateStaticParams() {
  return guides.map(g => ({
    slug: g.slug
  }));
}
export async function generateMetadata({
  params,
  locale = "ko"
}) {
  const {
    t,
    guides,
    sites: allSites
  } = await getLocaleData(locale);
  const path = href => localizedPath(href, locale);
  const {
    slug
  } = await params;
  const g = guides.find(g => g.slug === slug);
  return g ? pageMetadata(t("{0} - 사이트 맛집", {
    "0": g.title
  }), g.description, `/guide/${slug}`, locale) : {};
}
export default async function Guide({
  params,
  locale = "ko"
}) {
  const {
    t,
    guides,
    sites: allSites
  } = await getLocaleData(locale);
  const path = href => localizedPath(href, locale);
  const {
    slug
  } = await params;
  const g = guides.find(g => g.slug === slug);
  if (!g) notFound();
  const labels = localizeEditorial(editorialLabels, locale);
  return <article className="wrap content-page">
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.title,
      description: g.description,
      url: canonical(`/guide/${slug}`, locale),
      datePublished: locale === "ko" ? originalPublishedAt : "2026-10-29",
      dateModified: localizedContentDate(guideUpdatedAt(g), locale),
      author: {
        "@type": "Organization",
        name: t("사이트 맛집"),
        url: canonical("/about", locale)
      },
      publisher: {
        "@type": "Organization",
        name: t("사이트 맛집"),
        url: canonical("/", locale)
      },
      image: canonical("/").replace(/\/$/, "") + "/og.png",
      inLanguage: languageTags[locale]
    }} />
    <PageHeading title={g.title} description={g.description} eyebrow={`${g.eyebrow} · ${g.readTime}`} updated={(localizedContentDate(guideUpdatedAt(g), locale)).replaceAll("-", ".")} />
    <p className="editorial-byline"><Link href={path("/about/#editorial-policy")}>{labels.byline}</Link></p>
    <AffiliateDisclosure slug={slug} locale={locale} />
    <div className="article-layout"><div className="article-body"><p className="intro">{g.intro}</p><GuideComparison slug={slug} locale={locale} />{g.sections.map((section, i) => <section id={`section-${i}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}{section.sites?.map(s => {
            const registered = allSites.find(v => v.name === s.name);
            const url = registered?.url || s.url;
            return <a className="guide-site-link" href={path(/^https?:\/\//.test(url) ? url : `https://${url}`)} target="_blank" rel="noopener noreferrer" key={s.name}><strong>{s.name}<Icon name="arrow" size={16} /></strong><span>{s.note}</span></a>;
          })}{i === 1 && <AffiliateProducts slug={slug} locale={locale} />}</section>)}<p>{g.conclusion}</p><GuideEvidence slug={slug} locale={locale} />{g.relatedCategories && <nav className="topic-links" aria-label={t("관련 사이트 모음")}>{g.relatedCategories.map(([id, label]) => <Link key={id} href={path(`/c/${id}/`)}>{label} →</Link>)}</nav>}<Link href={path("/#directory")}>{t("전체 사이트에서 더 찾아보기 →")}</Link></div><aside className="article-sidebar"><h2>{t("이 글에서")}</h2><a href="#choose">{labels.comparison}</a><a href="#try-it">{labels.exercise}</a>{g.sections.map((s, i) => <a key={s.heading} href={path(`#section-${i}`)}>{s.heading}</a>)}<Link href={path("/guides/")}>{t("다른 탐방 가이드 →")}</Link></aside></div>
  </article>;
}
