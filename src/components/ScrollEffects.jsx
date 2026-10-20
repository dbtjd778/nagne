'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// A single passive listener + one animation frame; no work when motion is reduced.
export default function ScrollEffects() {
  const pathname = usePathname()
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      document.documentElement.style.setProperty('--scroll-progress', `${Math.min(1, y / Math.max(1, document.documentElement.scrollHeight - innerHeight))}`)
      document.documentElement.style.setProperty('--orb-rotate', `${media.matches ? 0 : y * .035}deg`)
      document.documentElement.style.setProperty('--journey-light', media.matches ? '1' : `${Math.min(1, Math.max(0, (y - 900) / 1500))}`)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    let observer
    const observe = () => {
      observer?.disconnect()
      document.querySelectorAll('.reveal').forEach(el => el.classList.remove('reveal-ready'))
      if (media.matches || !('IntersectionObserver' in window)) return
      observer = new IntersectionObserver(entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target) }
      }), { threshold: .06, rootMargin: '0px 0px -20px 0px' })
      document.querySelectorAll('.reveal').forEach(el => { el.classList.add('reveal-ready'); observer.observe(el) })
    }
    observe()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    media.addEventListener('change', observe)
    return () => { cancelAnimationFrame(frame); observer?.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); media.removeEventListener('change', observe) }
  }, [pathname])
  return <div className="reading-progress" aria-hidden="true" />
}
