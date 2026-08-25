// 라우트 목록과 각 페이지의 title / description.
// sitemap 생성기와 프리렌더 스크립트가 함께 사용합니다.

import { allCategories, totalSiteCount, totalCategoryCount, countByRegion } from './data/sites.js'
import { site } from './site.config.js'

const staticRoutes = [
  {
    path: '/',
    title: `${site.name} — 심심할 때 들어가는 웹사이트 큐레이션`,
    description: `멍때리기, 두뇌 자극, 디자인 영감, 일상 유틸리티, AI 도구까지. 한국 사이트 ${countByRegion.kr}개와 외국 사이트 ${countByRegion.global}개를 ${totalCategoryCount}개 카테고리로 정리한 큐레이션 디렉토리.`,
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/about',
    title: `소개 — ${site.name}`,
    description: `${site.name}는 심심할 때 열어보라고 만든 웹사이트 큐레이션입니다. ${totalCategoryCount}개 카테고리 ${totalSiteCount}개 링크를 어떤 기준으로 골랐는지 설명합니다.`,
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/contact',
    title: `문의 — ${site.name}`,
    description: '사이트 제보, 오류 신고, 삭제 요청, 제휴 문의를 받는 곳입니다.',
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/privacy',
    title: `개인정보처리방침 — ${site.name}`,
    description: `${site.name}가 수집하는 정보, 쿠키 및 광고 관련 정책, 이용자의 권리와 문의 방법을 안내합니다.`,
    changefreq: 'yearly',
    priority: '0.4',
  },
  {
    path: '/terms',
    title: `이용약관 — ${site.name}`,
    description: `${site.name} 사이트 이용에 관한 조건, 저작권, 외부 링크에 대한 책임 범위를 안내합니다.`,
    changefreq: 'yearly',
    priority: '0.4',
  },
]

const categoryRoutes = allCategories.map((c) => ({
  path: `/c/${c.id}`,
  title: `${c.category} — ${site.name}`,
  description: `${c.blurb.split('.')[0]}. ${c.sites.length}개 사이트를 정리했습니다.`,
  changefreq: 'monthly',
  priority: '0.9',
}))

export const routeMeta = [...staticRoutes, ...categoryRoutes]
