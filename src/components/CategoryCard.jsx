import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import SiteCard from './SiteCard'

const EASE = [0.16, 1, 0.3, 1]

// 박스가 확장/축소될 때 쓰이는 공통 스프링
export const MORPH = { type: 'spring', stiffness: 210, damping: 30, mass: 0.9 }

export default function CategoryCard({ data, index, isOpen, onToggle }) {
  const ref = useRef(null)

  // 카드가 열리면 헤더 높이를 감안해 부드럽게 스크롤 정렬
  useEffect(() => {
    if (!isOpen || !ref.current) return
    const id = window.setTimeout(() => {
      const top = ref.current.getBoundingClientRect().top + window.scrollY - 96
      window.scrollTo({ top, behavior: 'smooth' })
    }, 220)
    return () => window.clearTimeout(id)
  }, [isOpen])

  return (
    <motion.article
      ref={ref}
      layout
      transition={MORPH}
      className={[
        'relative overflow-hidden rounded-2xl border',
        isOpen ? 'sm:col-span-2 lg:col-span-3' : '',
      ].join(' ')}
      style={{
        borderColor: 'var(--line)',
        backgroundColor: isOpen ? 'var(--surface)' : 'transparent',
      }}
    >
      <motion.button
        layout="position"
        transition={MORPH}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-start justify-between gap-6 p-6 text-left md:p-8"
      >
        <div className="min-w-0">
          <span className="eyebrow block">{String(index + 1).padStart(2, '0')}</span>
          <h2 className="mt-3 font-display text-[clamp(1.25rem,2.4vw,1.9rem)] leading-tight tracking-tight">
            {data.category}
          </h2>
          <p className="mt-2 text-[13px]" style={{ color: 'var(--muted)' }}>
            {data.tagline}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-3">
          <span className="font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
            {data.sites.length}
          </span>
          <motion.span
            aria-hidden
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={MORPH}
            className="grid h-8 w-8 place-items-center rounded-full border text-[15px] leading-none transition-colors duration-300"
            style={{ borderColor: 'var(--line)' }}
          >
            +
          </motion.span>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: EASE, delay: 0.12 } }}
            exit={{ opacity: 0, transition: { duration: 0.14, ease: 'easeOut' } }}
            className="px-6 pb-8 md:px-8"
          >
            <motion.p
              layout="position"
              className="mb-7 max-w-[62ch] border-t pt-6 text-[13.5px] leading-[1.85] rule"
              style={{ color: 'var(--muted)' }}
            >
              {data.blurb}
            </motion.p>

            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.025 } } }}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {data.sites.map((site, i) => (
                <SiteCard key={site.name} site={site} index={i} />
              ))}
            </motion.div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <Link
                to={`/c/${data.id}`}
                className="text-[13px] underline underline-offset-4 transition-opacity hover:opacity-60"
                style={{ color: 'var(--muted)' }}
              >
                이 카테고리만 따로 보기
              </Link>
              <button
                type="button"
                onClick={onToggle}
                className="font-mono text-[11px] uppercase tracking-[0.18em] underline underline-offset-4 transition-opacity hover:opacity-60"
                style={{ color: 'var(--muted)' }}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
