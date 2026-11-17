import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

// ── Preloader ─────────────────────────────────────────────────────────────────
// Self-contained: manages its own isLoading state.
// A red "shutter" panel slides upward to reveal the page (exit animation).
// Inside, the brand name fills up from the bottom like rising water.
export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Dismiss after 2200 ms; clean up the timer if the component unmounts early
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        // ── Red shutter panel ─────────────────────────────────────────────────
        // Slides up and off-screen on exit
        <motion.div
          key="preloader"
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ── Text wrapper — fades + shrinks before the shutter slides up ── */}
          <motion.div
            className="relative text-5xl md:text-7xl font-black tracking-tighter"
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Ghost / background copy — dim red-on-red so the shape is hinted */}
            <span className="text-red-900/30 select-none" aria-hidden="true">
              {personalInfo.brandName}.
            </span>

            {/* Foreground copy — clips up from the bottom like a water fill */}
            <motion.span
              className="absolute inset-0 text-white whitespace-nowrap select-none"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
            >
              {personalInfo.brandName}
              {/* Period uses black so it pops against the red background */}
              <span className="text-black">.</span>
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
