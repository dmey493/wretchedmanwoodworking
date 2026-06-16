import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Works from './pages/Works.jsx'

// Scroll to top on route change, but not on first load, and not when a hash
// anchor is present (so "/#quote" still scrolls to the right section).
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const first = useRef(true)
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Works />} />
      </Routes>
      <Footer />
    </>
  )
}
