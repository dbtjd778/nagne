import Link from 'next/link'
import Directory from '../components/Directory'
import GuideCards from '../components/GuideCards'
import AdSlot from '../components/AdSlot'
import { Icon } from '../components/Icons'
import { JsonLd, canonical } from '../lib/metadata'
import { totalSiteCount } from '../data/sites'
import { site } from '../site.config'

export default function Home() {
  return <>
    <JsonLd data={{'@context':'https://schema.org','@type':'WebSite',name:site.name,alternateName:['사이트맛집','vsites'],url:canonical(),description:site.description,inLanguage:'ko-KR'}}/>
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy"><h1>유용하고 재미있는<br/><span>웹사이트 모음집</span></h1><p>웹게임부터 생활 도구까지, 한국과 전세계 {totalSiteCount}곳.</p></div>
        <div className="hero-orbit" aria-hidden="true"><svg viewBox="0 0 240 240"><circle cx="120" cy="120" r="96"/><ellipse cx="120" cy="120" rx="48" ry="96"/><ellipse cx="120" cy="120" rx="81" ry="96"/><ellipse cx="120" cy="120" rx="96" ry="37"/><ellipse cx="120" cy="120" rx="96" ry="70"/><path d="M24 120h192M120 24v192"/></svg><span className="orbit-point point-one"/><span className="orbit-point point-two"/></div>
      </div>
    </section>
    <Directory/>
    <section className="journal-section" id="guides"><div className="wrap">
      <div className="section-heading reveal"><div><span className="eyebrow">탐방 가이드</span><h2>취향에 맞는 출발점.</h2></div><Link href="/guides/">탐방 가이드 전체 <Icon name="right" size={19}/></Link></div>
      <GuideCards/>
    </div></section>
    <section className="journey-section"><div className="wrap journey-inner reveal">
      <div className="journey-title"><Icon name="compass" size={38}/><h2>익숙한 탭을 닫고,<br/>새로운 세상을 열어보세요.</h2><Link href="#directory">다시 탐방하기 <Icon name="right" size={18}/></Link></div>
      <div className="principles"><div><span>01</span><h3>무엇을 하는 곳인지, 한눈에</h3><p>사이트마다 용도와 특징을 정리했습니다. 놀이부터 공부, 디자인과 생활 도구까지 관심사로 골라보세요.</p></div><div><span>02</span><h3>알려진 서비스와 공식 출처를 중심으로</h3><p>사칭 사이트, 불법 복제, 성인물과 도박을 목적으로 하는 사이트는 싣지 않습니다. 접속이 끊기거나 용도가 달라진 주소는 점검해 정리합니다.</p></div><div><span>03</span><h3>좋은 발견은, 다음에도</h3><p>다시 오고 싶은 곳은 책갈피로 저장하세요. 저장한 목록은 회원가입 없이 현재 브라우저에 남습니다.</p></div></div>
    </div></section>
    <div className="wrap bottom-ad"><AdSlot placement="home-bottom" compact/></div>
  </>
}
