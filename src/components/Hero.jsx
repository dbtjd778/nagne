import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { totalSiteCount, totalCategoryCount, countByRegion } from '../data/sites'

const EASE = [0.16, 1, 0.3, 1]

const line = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: '0%',
    transition: { duration: 1.1, ease: EASE, delay: 0.15 + i * 0.12 },
  }),
}

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: 0.5 + i * 0.1 },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 90])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between pb-10 pt-28 md:pb-14 md:pt-32"
    >
      <motion.div style={{ y, opacity }} className="wrap flex flex-1 flex-col justify-center">
        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0}
          className="eyebrow mb-8 md:mb-10"
        >
          Web Directory — {totalCategoryCount} Categories, {totalSiteCount} Sites
        </motion.p>

        <h1 className="font-display text-[clamp(2.15rem,7.2vw,5.75rem)] font-normal leading-[1.18] tracking-tightest">
          <span className="block overflow-hidden pb-[0.12em]">
            <motion.span variants={line} initial="hidden" animate="show" custom={0} className="block">
              심심한 나그네여..
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <motion.span variants={line} initial="hidden" animate="show" custom={1} className="block">
              웹 서핑 하다가 잠드소서
            </motion.span>
          </span>
        </h1>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-10 max-w-[46ch] md:mt-14"
        >
          <p className="text-[15px] leading-[1.8] md:text-base" style={{ color: 'var(--muted)' }}>
            할 일은 없고 시간은 남을 때 열어보는 목록입니다. 창밖 풍경을 훔쳐보는 곳부터 파일 하나
            변환하려고 급하게 찾게 되는 곳까지, 한국 사이트 {countByRegion.kr}개와 외국 사이트{' '}
            {countByRegion.global}개를 {totalCategoryCount}개의 카테고리로 나눠 두었습니다.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        custom={3}
        style={{ opacity }}
        className="wrap"
      >
        <div className="flex items-end justify-between gap-6 border-t pt-5 rule">
          <span className="eyebrow">Scroll — 아래로 내려갈수록 밤이 걷힙니다</span>
          <motion.span
            aria-hidden
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="font-mono text-[11px]"
            style={{ color: 'var(--muted)' }}
          >
            ↓
          </motion.span>
        </div>
      </motion.div>
    </section>
  )
}
