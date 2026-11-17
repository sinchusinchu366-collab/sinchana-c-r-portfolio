import { useState, useEffect } from 'react'

// ── ScrollToTop — fixed button that appears after scrolling 400 px down ───────
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show the button once the user scrolls down more than 400 px
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full bg-[#ff2a2a] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,42,42,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,42,42,0.7)] focus:outline-none ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Upward chevron */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
