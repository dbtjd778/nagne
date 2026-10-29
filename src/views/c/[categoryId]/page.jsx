import { languageTags } from "../../../i18n/routing";
import { getLocaleData } from "../../../i18n/server";
import { localizedPath } from "../../../i18n/routing";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allCategories } from "../../../data/sites";
import SiteCard from "../../../components/SiteCard";
import AdSlot from "../../../components/AdSlot";
import PageHeading from "../../../components/PageHeading";
import { JsonLd, canonical, pageMetadata } from "../../../lib/metadata";
import { categoryEditorial } from "../../../data/category-editorial";
export const dynamicParams = false;
export function generateStaticParams() {
  return allCategories.map(c => ({
    categoryId: c.id
  }));
}
export async function generateMetadata({
  params,
  locale = "ko"
}) {
  const {
    t,
    fullCategories: allCategories,
    editorial: categoryEditorial
  } = await getLocaleData(locale);
  const path = href => localizedPath(href, locale);
  const {
    categoryId
  } = await params;
  const c = allCategories.find(c => c.id === categoryId);
  const editorial = categoryEditorial[categoryId];
  return c ? pageMetadata(c.id === "gl-games" ? t("웹게임 추천 {0}개 · 심심할 때 즐기는 브라우저 게임 - 사이트 맛집", {
    "0": c.sites.length
  }) : t("{0} {1}곳 - 사이트 맛집", {
    "0": editorial?.title || t("{0} {1} 사이트 추천", {
      "0": c.regionLabel,
      "1": c.category
    }),
    "1": c.sites.length
  }), editorial?.description || c.blurb, `/c/${c.id}`, locale) : {};
}
export default async function Category({
  params,
  locale = "ko"
}) {
  const {
    t,
    fullCategories: allCategories,
    editorial: categoryEditorial
  } = await getLocaleData(locale);
  const path = href => localizedPath(href, locale);
  const {
    categoryId
  } = await params;
  const c = allCategories.find(c => c.id === categoryId);
  if (!c) notFound();
  const editorial = categoryEditorial[categoryId];
  const heading = editorial?.heading || t("{0} 사이트", {
    "0": c.category
  });
  const description = editorial?.description || c.blurb;
  const items = c.sites.map(s => ({
    ...s,
    categoryName: c.category,
    regionId: c.regionId
  }));
  return <article className="wrap content-page category-page">
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: heading,
      url: canonical(`/c/${c.id}`, locale),
      description,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: items.length,
        itemListElement: items.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          url: /^https?:\/\//.test(s.url) ? s.url : `https://${s.url}`
        }))
      }
    }} />
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{
        "@type": "ListItem",
        position: 1,
        name: t("사이트 맛집"),
        item: canonical("/", locale)
      }, {
        "@type": "ListItem",
        position: 2,
        name: heading,
        item: canonical(`/c/${c.id}`, locale)
      }]
    }} />
    <PageHeading title={heading} description={description} eyebrow={c.id === "gl-games" ? t("설치 없이 즐기는 · {0}개 게임", {
      "0": items.length
    }) : t("{0} · {1}곳", {
      "0": c.regionLabel,
      "1": items.length
    })} />
    <nav className="category-tools" aria-label={t("목록 도구")}><Link href={path(`/?category=${c.id}#directory`)}>{t("이 카테고리에서 검색")}</Link><Link href={path("/?saved=1#directory")}>{t("저장한 사이트 보기 ↗")}</Link></nav>
    <div className="site-grid">{items.slice(0, 12).map(s => <SiteCard key={s.url} site={s} />)}</div>
    <AdSlot placement={`category-${c.id}`} />
    <div className="site-grid">{items.slice(12).map(s => <SiteCard key={s.url} site={s} />)}</div>
    {editorial && <section className="category-reading article-body" aria-label={editorial.sectionTitle}>
      <h2>{editorial.sectionTitle}</h2>
      <div className="category-reading-grid">{editorial.tips.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      {editorial.note && <p>{editorial.note}</p>}
      <nav className="topic-links" aria-label={t("함께 볼 가이드")}>{editorial.links.map(([href, label]) => <Link key={href} href={path(href)}>{label} →</Link>)}</nav>
    </section>}
    <nav className="related-categories" aria-label={t("다른 카테고리")}>{allCategories.filter(v => v.regionId === c.regionId && v.id !== c.id).map(v => <Link key={v.id} href={path(`/c/${v.id}/`)}>{v.category} ↗</Link>)}</nav>
  </article>;
}
