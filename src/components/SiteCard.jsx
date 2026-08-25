import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export default function SiteCard({ site, index, showCategory = false }) {
  const href = site.url.startsWith('http') ? site.url : `https://${site.url}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE, delay: Math.min(index, 14) * 0.028 },
        },
      }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
      className="group relative flex flex-col justify-between rounded-xl border p-5 transition-colors duration-300 ease-out-expo min-h-[152px]"
      style={{ borderColor: 'var(--line)' }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--surface-hover)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      <div>
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-semibold leading-snug tracking-tight">{site.name}</h3>
          <span
            aria-hidden
            className="mt-[3px] shrink-0 font-mono text-[11px] transition-transform duration-500 ease-out-expo group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
            style={{ color: 'var(--muted)' }}
          >
            ↗
          </span>
        </div>
        <p className="text-[13.5px] leading-[1.65]" style={{ color: 'var(--muted)' }}>
          {site.desc}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="truncate font-mono text-[11px] tracking-tight" style={{ color: 'var(--muted)' }}>
          {site.url}
        </span>
        {showCategory && (
          <span
            className="ml-auto shrink-0 rounded-full border px-2 py-[2px] font-mono text-[10px]"
            style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}
          >
            {site.categoryName}
          </span>
        )}
      </div>
    </motion.a>
  )
}
