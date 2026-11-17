import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

// ── Tiny inline SVG icons for the visiting-card rows ─────────────────────────
function IconEmail()    { return <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> }
function IconPhone()    { return <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16l.92.92z"/></svg> }
function IconLocation() { return <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> }
function IconLinkedIn() { return <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> }
function IconGithub()   { return <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> }

// Decorative 4-point star — reused twice
function Star({ size = 40, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="black" style={style} className="opacity-30 animate-pulse" aria-hidden="true">
      <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
    </svg>
  )
}

export default function About() {
  // Controls which face of the card is visible
  const [flipped, setFlipped] = useState(false)

  // QR code value: LinkedIn profile or fallback mailto
  const qrValue = socialLinks.linkedin || `mailto:${personalInfo.emails.primary}`

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden">

      {/* ── Decorative stars ──────────────────────────────────── */}
      <div className="absolute top-8 right-8 pointer-events-none"><Star size={44} /></div>
      <div className="absolute bottom-28 left-8 pointer-events-none"><Star size={26} style={{ animationDelay: '1s' }} /></div>

      {/* ── Inner layout ─────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* ── Left — lanyard + flip card ────────────────────── */}
        {/* pt-32 gives vertical room so the -top-32 lanyard string is never clipped */}
        <div className="md:w-[350px] shrink-0 relative pt-32 flex flex-col items-center">

          {/* Drop-in spring animation — fires ONCE and stays put on scroll-away */}
          <motion.div
            className="relative flex flex-col items-center w-full max-w-[280px]"
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
          >
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black rounded-b-sm" />

            {/* Grey metal clip */}
            <div className="relative z-10 w-12 h-4 bg-gray-400 rounded-sm shadow-inner" />

            {/* ── Flip card button ─────────────────────────── */}
            {/* Handles click (desktop) and tap (mobile); rotation lives here */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped((prev) => !prev)}
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer"
            >
              {/* Inner flip container — rotates around Y axis */}
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >

                {/* ── FRONT face — portrait badge ───────────── */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="bg-gray-900 w-full h-full rounded-2xl p-3 shadow-2xl shadow-black/60 flex flex-col">
                    {/* Slot cutout at the top */}
                    <div className="w-14 h-2 bg-gray-700 rounded-full mx-auto mb-3 shrink-0" />
                    {/* Portrait — fills remaining height */}
                    <img
                      src={stackImage}
                      alt="Sinchana C R — Java full stack Devloper, TAP Academy student"
                      className="w-full flex-1 rounded-xl object-cover object-top min-h-0"
                    />
                  </div>
                </div>

                {/* ── BACK face — visiting card ─────────────── */}
                {/* rotateY(180deg) pre-rotates the face so it appears correctly when parent flips */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-2xl shadow-black/60 flex flex-col">

                    {/* Red accent bar across the top */}
                    <div className="h-1.5 bg-[#ff2a2a] shrink-0" />

                    {/* Card content */}
                    <div className="flex-1 p-5 flex flex-col gap-3 text-white text-left overflow-hidden">

                      {/* Brand name + title */}
                      <div>
                        <p className="text-xl font-black text-white leading-tight">
                          {personalInfo.brandName}
                          <span className="text-[#ff2a2a]">.</span>
                        </p>
                        <p className="text-[10px] uppercase tracking-widest text-red-400 mt-0.5">
                          {personalInfo.title}
                        </p>
                      </div>

                      {/* Thin divider */}
                      <hr className="border-white/10" />

                      {/* Contact rows — each stops propagation so clicking a link won't flip */}
                      <div className="flex flex-col gap-2">

                        {personalInfo.emails.primary && (
                          <a
                            href={`mailto:${personalInfo.emails.primary}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                          >
                            <IconEmail />
                            <span className="truncate">{personalInfo.emails.primary}</span>
                          </a>
                        )}

                        {personalInfo.phone && (
                          <a
                            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                          >
                            <IconPhone />
                            <span>{personalInfo.phone}</span>
                          </a>
                        )}

                        {personalInfo.location && (
                          <div className="flex items-center gap-2 text-xs text-white/85">
                            <IconLocation />
                            <span>{personalInfo.location}</span>
                          </div>
                        )}

                        {socialLinks.linkedin && (
                          <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                          >
                            <IconLinkedIn />
                            <span>LinkedIn</span>
                          </a>
                        )}

                        {socialLinks.github && (
                          <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                          >
                            <IconGithub />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>

                      {/* QR code — pushed to the bottom */}
                      <div className="mt-auto flex items-center gap-3">
                        {/* White box so the QR modules are readable */}
                        <div className="bg-white rounded-lg p-2 shrink-0">
                          <QRCode value={qrValue} size={76} />
                        </div>
                        <p className="text-[10px] text-white/60 leading-relaxed">
                          Scan to<br />connect
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </button>

            {/* Flip hint */}
            <p className="text-xs font-bold text-black/60 mt-4 select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* ── Right — heading + bio ─────────────────────────── */}
        <div className="flex-1 pt-4" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          {/* Bio HTML includes a styled <span> for the name — our own trusted content */}
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* ── Torn-paper SVG wave divider ─────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" fill="white" aria-hidden="true">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
