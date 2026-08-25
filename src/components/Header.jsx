import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const NAV = [
  { to: '/about', label: '소개' },
  { to: '/contact', label: '문의' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className="transition-[border-color,backdrop-filter] duration-500 ease-out-expo"
        style={{
          borderBottom: '1px solid',
          borderColor: scrolled ? 'var(--line)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
        }}
      >
        <div className="wrap flex h-16 items-center justify-between md:h-[72px]">
          <Link
            to="/"
            className="font-display text-[17px] tracking-tight transition-opacity hover:opacity-60"
          >
            나그네
          </Link>

          <nav className="flex items-center gap-7">
            {pathname !== '/' && (
              <Link
                to="/"
                className="font-mono text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
                style={{ color: 'var(--muted)' }}
              >
                Home
              </Link>
            )}
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[13px] transition-opacity hover:opacity-60"
                style={{ color: pathname === item.to ? 'var(--fg)' : 'var(--muted)' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
