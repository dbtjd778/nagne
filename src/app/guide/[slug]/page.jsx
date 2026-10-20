import Link from 'next/link'
import { notFound } from 'next/navigation'
import { guides } from '../../../data/guides'
import { allSites } from '../../../data/sites'
import PageHeading from '../../../components/PageHeading'
import AdSlot from '../../../components/AdSlot'
import { Icon } from '../../../components/Icons'
import { JsonLd, canonical, pageMetadata } from '../../../lib/metadata'
export const dynamicParams=false
export function generateStaticParams() {return guides.map(g=>({slug:g.slug}))}
export async function generateMetadata({params}) {
  const {slug}=await params
  const g=guides.find(g=>g.slug===slug)
  return g?pageMetadata(`${g.title} - 사이트 맛집`,g.description,`/guide/${slug}`):{}
}
export default async function Guide({params}) {
  const {slug}=await params
  const g=guides.find(g=>g.slug===slug)
  if(!g)notFound()
  return <article className="wrap content-page">
    <JsonLd data={{'@context':'https://schema.org','@type':'Article',headline:g.title,description:g.description,url:canonical(`/guide/${slug}`),datePublished:'2026-10-20',dateModified:'2026-10-20',author:{'@type':'Organization',name:'사이트 맛집',url:canonical('/about')},publisher:{'@type':'Organization',name:'사이트 맛집',url:canonical()},image:canonical().replace(/\/$/,'')+'/og.png',inLanguage:'ko-KR'}}/>
    <PageHeading title={g.title} description={g.description} eyebrow={`${g.eyebrow} · ${g.readTime}`} updated="2026.10.20"/>
    <div className="article-layout"><div className="article-body"><p className="intro">{g.intro}</p>{g.sections.map((section,i)=><section id={`section-${i}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p,j)=><p key={j}>{p}</p>)}{section.sites?.map(s=>{
      const registered=allSites.find(v=>v.name===s.name)
      const url=registered?.url || s.url
      return <a className="guide-site-link" href={/^https?:\/\//.test(url)?url:`https://${url}`} target="_blank" rel="noopener noreferrer" key={s.name}><strong>{s.name}<Icon name="arrow" size={16}/></strong><span>{s.note}</span></a>
    })}{i===1 && <AdSlot placement={`article-${slug}`}/>}</section>)}<p>{g.conclusion}</p><Link href="/#directory">전체 사이트에서 더 찾아보기 →</Link></div><aside className="article-sidebar"><h2>이 글에서</h2>{g.sections.map((s,i)=><a key={s.heading} href={`#section-${i}`}>{s.heading}</a>)}<Link href="/guides/">다른 탐방 가이드 →</Link></aside></div>
  </article>
}
