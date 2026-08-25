import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { regions, allSites, totalSiteCount } from '../data/sites'
import RegionTabs from './RegionTabs'
import CategoryCard, { MORPH } from './CategoryCard'
import SiteCard from './SiteCard'

const EASE = [0.16, 1, 0.3, 1]

export default function Directory() {
  const [regionId, setRegionId] = useState(regions[0].id)
  const [openId, setOpenId] = useState(null)
  const [query, setQuery] = useState('')

  const region = regions.find((r) => r.id === regionId)

  const keyword = query.trim().toLowerCase()
  const searching = keyword.length > 0
  const results = useMemo(() => {
    if (!keyword) return []
    return allSites.filter((s) =>
      [s.name, s.desc, s.url, s.categoryName, s.regionLabel]
        .join(' ')
        .toLowerCase()
        .includes(keyword)
    )
  }, [keyword])

  const handleRegionChange = (id) => {
    setRegionId(id)
    setOpenId(null)
  }

  return (
    <section id="directory" className="wrap scroll-mt-24 pb-28 pt-10 md:pb-40">
      <div className="mb-9 border-t pt-8 rule">
        <span className="eyebrow">Directory</span>
        <h2 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.4rem)] tracking-tight">
          어디부터 열어볼까
        </h2>
        <p className="mt-3 max-w-[54ch] text-[14px] leading-[1.8]" style={{ color: 'var(--muted)' }}>
          지역을 고르고 상자를 누르면 그 안에 정리해 둔 사이트가 펼쳐집니다. 모든 링크는 새 창에서
          열립니다.
        </p>
      </div>

      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <RegionTabs value={regionId} onChange={handleRegionChange} />

        <div className="w-full md:w-[280px]">
          <div className="flex items-center gap-3 border-b pb-2 rule">
            <label htmlFor="site-search" className="sr-only">
              사이트 검색
            </label>
            <input
              id="site-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`${totalSiteCount}개 사이트 전체에서 찾기`}
              className="w-full bg-transparent text-[13.5px] outline-none placeholder:opacity-45"
              style={{ color: 'var(--fg)' }}
            />
            <span
              aria-live="polite"
              className="shrink-0 font-mono text-[11px] transition-opacity duration-300"
              style={{ color: 'var(--muted)', opacity: searching ? 1 : 0 }}
            >
              {searching ? results.length : ''}
            </span>
          </div>
        </div>
      </div>

      {/* mode="wait": 이전 목록이 완전히 사라진 뒤 새 목록이 올라옵니다. */}
      <AnimatePresence mode="wait" initial={false}>
        {searching ? (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.18, ease: 'easeOut' } }}
          >
            {results.length === 0 ? (
              <p className="py-24 text-center text-[14px]" style={{ color: 'var(--muted)' }}>
                “{query}” 와 일치하는 사이트가 없습니다.
              </p>
            ) : (
              <motion.div
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.02 } } }}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {results.map((site, i) => (
                  <SiteCard
                    key={`${site.categoryId}-${site.name}`}
                    site={site}
                    index={i}
                    showCategory
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key={regionId}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeOut' } }}
          >
            <p
              className="mb-7 max-w-[58ch] text-[13.5px] leading-[1.85]"
              style={{ color: 'var(--muted)' }}
            >
              {region.lead}
            </p>

            <LayoutGroup id={regionId}>
              <motion.div
                layout
                transition={MORPH}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
              >
                {region.categories.map((cat, i) => (
                  <CategoryCard
                    key={cat.id}
                    data={cat}
                    index={i}
                    isOpen={openId === cat.id}
                    onToggle={() => setOpenId((prev) => (prev === cat.id ? null : cat.id))}
                  />
                ))}
              </motion.div>
            </LayoutGroup>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
