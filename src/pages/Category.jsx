import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { allCategories } from '../data/sites'
import SiteCard from '../components/SiteCard'
import { useDocumentMeta } from '../components/PageShell'
import NotFound from './NotFound'

const EASE = [0.16, 1, 0.3, 1]

/**
 * 카테고리 단독 페이지 (/c/:categoryId)
 * 홈의 모핑 아코디언과 달리, 목록 전체가 처음부터 마크업에 존재하므로
 * 검색엔진과 광고 심사 크롤러가 내용을 그대로 읽을 수 있습니다.
 */
export default function Category() {
  const { categoryId } = useParams()
  const data = allCategories.find((c) => c.id === categoryId)

  useDocumentMeta(
    data ? `${data.category} — 나그네` : '페이지를 찾을 수 없습니다 — 나그네',
    data ? `${data.blurb.split('.')[0]}. ${data.sites.length}개 사이트를 정리했습니다.` : ''
  )

  if (!data) return <NotFound />

  const siblings = allCategories.filter((c) => c.regionId === data.regionId && c.id !== data.id)

  return (
    <article className="wrap pb-28 pt-32 md:pt-40">
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: EASE }}
        className="border-b pb-10 rule"
      >
        <nav className="eyebrow mb-5 flex items-center gap-2">
          <Link to="/" className="transition-opacity hover:opacity-60">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span>{data.regionLabel}</span>
        </nav>

        <h1 className="font-display text-[clamp(1.9rem,4.6vw,3.2rem)] leading-tight tracking-tight">
          {data.category}
        </h1>
        <p className="mt-4 text-[15px]" style={{ color: 'var(--muted)' }}>
          {data.tagline}
        </p>
        <p
          className="mt-6 max-w-[62ch] text-[14px] leading-[1.85]"
          style={{ color: 'var(--muted)' }}
        >
          {data.blurb}
        </p>
        <p className="mt-6 font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
          {data.sites.length} sites
        </p>
      </motion.header>

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.025 } } }}
        initial="hidden"
        animate="show"
        className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {data.sites.map((site, i) => (
          <SiteCard key={site.name} site={site} index={i} />
        ))}
      </motion.div>

      {siblings.length > 0 && (
        <nav className="mt-20 border-t pt-8 rule">
          <p className="eyebrow mb-5">같은 지역의 다른 카테고리</p>
          <ul className="flex flex-wrap gap-2">
            {siblings.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/c/${c.id}`}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] transition-opacity hover:opacity-60"
                  style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}
                >
                  {c.category}
                  <span className="font-mono text-[11px] opacity-60">{c.sites.length}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </article>
  )
}
