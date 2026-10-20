import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allCategories } from '../../../data/sites'
import SiteCard from '../../../components/SiteCard'
import AdSlot from '../../../components/AdSlot'
import PageHeading from '../../../components/PageHeading'
import { JsonLd, canonical, pageMetadata } from '../../../lib/metadata'

export const dynamicParams = false
export function generateStaticParams() { return allCategories.map(c=>({categoryId:c.id})) }
export async function generateMetadata({params}) {
  const { categoryId } = await params
  const c = allCategories.find(c=>c.id===categoryId)
  return c ? pageMetadata(c.id==='gl-games' ? `웹게임 추천 ${c.sites.length}개 · 심심할 때 즐기는 브라우저 게임 - 사이트 맛집` : `${c.regionLabel} ${c.category} 사이트 추천 ${c.sites.length}곳 - 사이트 맛집`,c.blurb,`/c/${c.id}`) : {}
}
export default async function Category({params}) {
  const { categoryId } = await params
  const c=allCategories.find(c=>c.id===categoryId)
  if(!c) notFound()
  const items=c.sites.map(s=>({...s,categoryName:c.category,regionId:c.regionId}))
  return <article className="wrap content-page category-page">
    <JsonLd data={{'@context':'https://schema.org','@type':'CollectionPage',name:`${c.category} 사이트 추천`,url:canonical(`/c/${c.id}`),description:c.blurb,mainEntity:{'@type':'ItemList',numberOfItems:items.length,itemListElement:items.map((s,i)=>({'@type':'ListItem',position:i+1,name:s.name,url:/^https?:\/\//.test(s.url)?s.url:`https://${s.url}`}))}}}/>
    <PageHeading title={c.id==='gl-games' ? '웹게임' : `${c.category} 사이트`} description={c.blurb} eyebrow={c.id==='gl-games' ? `설치 없이 즐기는 · ${items.length}개 게임` : `${c.regionLabel} · ${items.length}곳`}/>
    <nav className="category-tools" aria-label="목록 도구"><Link href={`/?category=${c.id}#directory`}>이 카테고리에서 검색</Link><Link href="/?saved=1#directory">저장한 사이트 보기 ↗</Link></nav>
    <div className="site-grid">{items.slice(0,12).map(s=><SiteCard key={s.url} site={s}/>)}</div>
    <AdSlot placement={`category-${c.id}`}/>
    <div className="site-grid">{items.slice(12).map(s=><SiteCard key={s.url} site={s}/>)}</div>
    <nav className="related-categories" aria-label="다른 카테고리">{allCategories.filter(v=>v.regionId===c.regionId && v.id!==c.id).map(v=><Link key={v.id} href={`/c/${v.id}/`}>{v.category} ↗</Link>)}</nav>
  </article>
}
