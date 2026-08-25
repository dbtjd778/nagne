import { useEffect } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title
    const tag = document.querySelector('meta[name="description"]')
    if (tag && description) tag.setAttribute('content', description)
  }, [title, description])
}

export default function PageShell({ eyebrow, title, lead, updated, children }) {
  return (
    <article className="wrap min-h-[70vh] pb-28 pt-32 md:pt-40">
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: EASE }}
        className="max-w-[62ch] border-b pb-10 rule"
      >
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 font-display text-[clamp(1.9rem,4.6vw,3.2rem)] leading-tight tracking-tight">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 text-[15px] leading-[1.85]" style={{ color: 'var(--muted)' }}>
            {lead}
          </p>
        )}
        {updated && (
          <p className="mt-6 font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
            최종 수정일 — {updated}
          </p>
        )}
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
        className="prose-page max-w-[62ch]"
      >
        {children}
      </motion.div>
    </article>
  )
}
