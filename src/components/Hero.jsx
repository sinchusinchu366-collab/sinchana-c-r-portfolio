import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroVideo from '../assets/hero/hero.mp4'
import heroPoster from '../assets/about/profile.png'
import { heroContent, socialLinks } from '../data/portfolioData'

// ── Inline SVG icons ──────────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

// Social links list — only entries with a non-empty URL are shown
const socialItems = [
  { href: socialLinks.github,    label: 'GitHub',    Icon: GithubIcon    },
  { href: socialLinks.linkedin,  label: 'LinkedIn',  Icon: LinkedinIcon  },
  { href: socialLinks.instagram, label: 'Instagram', Icon: InstagramIcon },
].filter((s) => s.href)

export default function Hero() {
  const videoRef  = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Initialise AOS once; also refresh it after all assets have loaded
  // so elements shifted by images/video get the correct scroll position.
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })

    const refresh = () => AOS.refresh()
    window.addEventListener('load', refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  // Play / pause the background video on demand (no autoplay)
  function toggleVideo(e) {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#ff2a2a]">

      {/* ── Background video — object-contain so the full portrait is always visible ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain object-top md:object-right z-0"
        playsInline
        poster={heroPoster}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient overlay — improves text readability over the video */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

      {/* ── Left floating social bar (desktop only) ─────────────────────────── */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-5 mix-blend-difference">
        {socialItems.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white/60 hover:text-white hover:scale-125 transition-all duration-200"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-[8%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end">

        {/* Left block — greeting, title, subtitle, CTAs */}
        <div className="max-w-2xl flex flex-col gap-4">

          {/* Mobile-only inline social icons (shown above the title on small screens) */}
          <div className="flex items-center gap-4 lg:hidden" data-aos="fade-up" data-aos-delay="100">
            {socialItems.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/60 hover:text-white hover:scale-125 transition-all duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-tight"
            data-aos="fade-up"
          >
            {heroContent.greeting},
            <br />
            {/* Title in solid black so it pops against the red background */}
            <span className="text-black">{heroContent.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white text-sm md:text-lg font-semibold max-w-md leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {heroContent.subtitle}
          </p>

          {/* CTA pill buttons */}
          <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="400">

            {/* Primary — View My Work */}
            <a
              href={heroContent.ctaPrimary.href}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform duration-200"
            >
              {heroContent.ctaPrimary.text}
            </a>

            {/* Secondary — Contact Me */}
            <a
              href={heroContent.ctaSecondary.href}
              className="px-6 py-2.5 rounded-full bg-black/40 border border-white text-white font-semibold text-sm backdrop-blur-md hover:bg-black/60 transition-colors duration-200"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume download — only rendered if ctaResume is set */}
            {heroContent.ctaResume && (
              <a
                href={heroContent.ctaResume.href}
                download
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/50 text-white font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
              >
                {/* Download document icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {heroContent.ctaResume.text}
              </a>
            )}
          </div>
        </div>

        {/* Right block — Play Reel control */}
        <div
          className="flex flex-col items-center gap-2 mt-8 md:mt-0"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          {/* Circle play / pause button */}
          <button
            onClick={toggleVideo}
            aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
            className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 hover:bg-[#ff2a2a] hover:shadow-[0_0_30px_rgba(255,42,42,0.6)] transition-all duration-300"
          >
            {isPlaying ? (
              /* Pause icon — two vertical bars */
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
            ) : (
              /* Play icon — solid triangle */
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-8 md:h-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            )}
          </button>

          {/* Label below the button */}
          <span className="text-white text-[10px] md:text-xs font-semibold uppercase tracking-widest">
            {isPlaying ? 'Pause' : 'Play Reel'}
          </span>
        </div>
      </div>

      {/* ── Scroll-down bouncing arrow (desktop only) ─────────────────────── */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  )
}
