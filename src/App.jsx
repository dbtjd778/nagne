import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'

import ScrollTheme from './components/ScrollTheme'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Contact from './pages/Contact'
import Category from './pages/Category'
import NotFound from './pages/NotFound'

const EASE = [0.16, 1, 0.3, 1]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      {/* 홈에서만 스크롤에 따라 어두운 톤 → 밝은 톤으로 배경이 전환됩니다. */}
      <ScrollTheme animate={isHome}>
        <Header />

        <main>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4, ease: EASE } }}
              exit={{ opacity: 0, transition: { duration: 0.18, ease: 'easeOut' } }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/c/:categoryId" element={<Category />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </ScrollTheme>
    </MotionConfig>
  )
}
