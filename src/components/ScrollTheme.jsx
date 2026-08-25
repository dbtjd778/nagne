import { useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

/**
 * 스크롤 위치에 따라 어두운 톤(#111111) → 밝은 톤(#FAFAFA) 으로
 * 배경색과 전경색을 부드럽게 보간(interpolate)하는 테마 레이어.
 *
 * 색상은 CSS 변수로 자식 트리에 내려가므로, 하위 컴포넌트는
 * var(--fg) / var(--line) 등을 참조하기만 하면 자동으로 함께 변합니다.
 */

const DARK = {
  bg: '#111111',
  fg: '#f2f2f2',
  muted: '#8a8a8a',
  line: 'rgba(255, 255, 255, 0.14)',
  surface: 'rgba(255, 255, 255, 0.035)',
  surfaceHover: 'rgba(255, 255, 255, 0.075)',
}

const LIGHT = {
  bg: '#fafafa',
  fg: '#111111',
  muted: '#6f6f6f',
  line: 'rgba(17, 17, 17, 0.13)',
  surface: 'rgba(17, 17, 17, 0.025)',
  surfaceHover: 'rgba(17, 17, 17, 0.055)',
}

// 스크롤 진행도 0 → 0.42 구간에서 색 전환이 완료됩니다.
const RANGE = [0, 0.42]

export default function ScrollTheme({ children, animate = true }) {
  const { scrollYProgress } = useScroll()

  const bg = useTransform(scrollYProgress, RANGE, [DARK.bg, LIGHT.bg])
  const fg = useTransform(scrollYProgress, RANGE, [DARK.fg, LIGHT.fg])
  const muted = useTransform(scrollYProgress, RANGE, [DARK.muted, LIGHT.muted])
  const line = useTransform(scrollYProgress, RANGE, [DARK.line, LIGHT.line])
  const surface = useTransform(scrollYProgress, RANGE, [DARK.surface, LIGHT.surface])
  const surfaceHover = useTransform(scrollYProgress, RANGE, [
    DARK.surfaceHover,
    LIGHT.surfaceHover,
  ])
  const vignette = useTransform(scrollYProgress, RANGE, [1, 0])

  const theme = animate
    ? { bg, fg, muted, line, surface, surfaceHover, vignette }
    : { ...LIGHT, surfaceHover: LIGHT.surfaceHover, vignette: 0 }

  // <body> 자체 배경도 함께 바꿔 오버스크롤 영역까지 색이 이어지게 합니다.
  useMotionValueEvent(bg, 'change', (v) => {
    if (animate) document.body.style.backgroundColor = v
  })

  useEffect(() => {
    document.body.style.backgroundColor = animate ? DARK.bg : LIGHT.bg
    document.documentElement.style.colorScheme = animate ? 'dark' : 'light'
  }, [animate])

  return (
    <motion.div
      style={{
        '--bg': theme.bg,
        '--fg': theme.fg,
        '--muted': theme.muted,
        '--line': theme.line,
        '--surface': theme.surface,
        '--surface-hover': theme.surfaceHover,
        color: 'var(--fg)',
      }}
      className="relative min-h-screen"
    >
      {/* 고정 배경 레이어 */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20"
        style={{ backgroundColor: theme.bg }}
      />
      {/* 어두울 때만 은은하게 깔리는 비네트 */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          opacity: theme.vignette,
          background:
            'radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 55%)',
        }}
      />
      {children}
    </motion.div>
  )
}
