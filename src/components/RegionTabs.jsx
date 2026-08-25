import { motion } from 'framer-motion'
import { regions, countByRegion } from '../data/sites'

const PILL = { type: 'spring', stiffness: 380, damping: 34, mass: 0.7 }

/**
 * 한국 / 외국 지역 전환 탭.
 * layoutId 를 공유하는 배경 알약(pill)이 선택된 탭으로 부드럽게 슬라이딩합니다.
 */
export default function RegionTabs({ value, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="지역 선택"
      className="inline-flex items-center gap-1 rounded-full border p-1"
      style={{ borderColor: 'var(--line)', backgroundColor: 'var(--surface)' }}
    >
      {regions.map((region) => {
        const active = region.id === value
        return (
          <button
            key={region.id}
            role="tab"
            aria-selected={active}
            type="button"
            onClick={() => onChange(region.id)}
            className="relative rounded-full px-5 py-2.5 text-[13px] transition-colors duration-300 md:px-6"
          >
            {active && (
              <motion.span
                layoutId="region-pill"
                transition={PILL}
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: 'var(--fg)' }}
              />
            )}
            <span
              className="relative z-10 flex items-center gap-2 whitespace-nowrap"
              style={{ color: active ? 'var(--bg)' : 'var(--muted)' }}
            >
              {region.label}
              <span className="font-mono text-[11px] opacity-60">{countByRegion[region.id]}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
