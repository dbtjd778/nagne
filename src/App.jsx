import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'

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

        {/*
          페이지 전환에 AnimatePresence 를 쓰지 않습니다.
          mode="wait" 는 이전 페이지의 퇴장 애니메이션이 끝났다는 신호를 받아야
          새 페이지를 마운트하는데, 그 신호가 오지 않으면(탭이 백그라운드로 내려가
          requestAnimationFrame 이 멈추는 경우 등) 새 페이지가 영원히 뜨지 않습니다.
          각 페이지가 자체 등장 애니메이션을 갖고 있으므로 전환 효과는 그대로입니다.
        */}
        <main>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/c/:categoryId" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </ScrollTheme>
    </MotionConfig>
  )
}
