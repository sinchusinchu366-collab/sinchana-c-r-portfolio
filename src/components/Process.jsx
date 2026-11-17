import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

// ─────────────────────────────────────────────────────────────────────────────
// SVG path shared between the desktop animation layers
// ─────────────────────────────────────────────────────────────────────────────
const DESKTOP_PATH = 'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'
const MOBILE_PATH  = 'M 2,0 L 2,100'

// ─────────────────────────────────────────────────────────────────────────────
// TagCard — a single hanging-tag card that activates when the scroll line
// tip passes its position inside the sticky container.
// ─────────────────────────────────────────────────────────────────────────────
function TagCard({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) {
  const cardRef  = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Listen to every change of the spring-animated pathLength (0 → 1)
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!containerRef.current || !cardRef.current) return

    const containerHeight = containerRef.current.offsetHeight
    // How far the line tip has travelled in pixels inside the container
    const lineTip = latest * containerHeight

    // Position of this card's top edge relative to the container
    const cardTop = cardRef.current.offsetTop

    setIsActive(lineTip > cardTop + 50)
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 cursor-default transition-colors duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_8px_60px_rgba(255,42,42,0.45)]'
          : 'bg-white shadow-[0_4px_30px_rgba(0,0,0,0.10)]'
      } ${className}`}
    >
      {/* Punched hole at top */}
      <div className="flex justify-center pt-1 pb-0">
        <div className={`w-5 h-5 rounded-full border-4 transition-colors duration-700 ${
          isActive ? 'border-red-300/60 bg-red-600' : 'border-gray-200 bg-gray-100'
        }`} />
      </div>

      {/* Inner panel */}
      <div className={`rounded-[1.5rem] mt-2 p-8 min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        {/* Number — serif italic */}
        <p className={`font-serif italic text-lg mb-1 transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>
          {number}
        </p>

        {/* Title */}
        <h3 className={`text-2xl font-black mb-3 transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>

        {/* Body text */}
        <p className={`text-sm leading-relaxed transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>
          {text}
        </p>
      </div>
    </div>
  )
}

// Desktop positions / tilts / AOS config for each card index
const CARD_META = [
  { className: 'md:absolute md:top-[10px]   md:right-[5%]  lg:right-[10%]  rotate-2  md:rotate-6',  aosType: 'fade-left',  aosDelay: 100 },
  { className: 'md:absolute md:top-[450px]  md:left-[5%]   lg:left-[10%]  -rotate-2 md:-rotate-6', aosType: 'fade-right', aosDelay: 200 },
  { className: 'md:absolute md:top-[700px]  md:right-[5%]  lg:right-[15%]  rotate-1  md:rotate-3',  aosType: 'fade-left',  aosDelay: 300 },
  { className: 'md:absolute md:top-[1050px] md:left-[15%]  lg:left-[25%]  -rotate-1 md:-rotate-3', aosType: 'fade-right', aosDelay: 400 },
]

// ─────────────────────────────────────────────────────────────────────────────
// Process — main section export
// ─────────────────────────────────────────────────────────────────────────────
export default function Process() {
  const containerRef = useRef(null)

  // Track scroll progress of the section relative to the viewport centre
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Smooth the raw scroll value so the line animates fluidly
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
      style={{
        // Faint grid overlay using an inline background so no extra CSS file is needed
        backgroundImage: `
          linear-gradient(to right,  #8080800a 1px, transparent 1px),
          linear-gradient(to bottom, #8080800a 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    >
      {/* ── Inner wrapper ─────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">

        {/* ── Header block ──────────────────────────────────────────────── */}
        <div
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
          data-aos="fade-up"
        >
          {/* Badge pill */}
          <span className="inline-flex px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-widest mb-5">
            {skillsContent.badge}
          </span>

          {/* Heading with hand-drawn arrow */}
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 mb-4">
              {skillsContent.heading}
            </h2>

            {/* Tiny hand-drawn arrow, bottom-right of the heading */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="#ff2a2a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -bottom-2 -right-6 w-5 h-5 opacity-70 rotate-12"
              aria-hidden="true"
            >
              <path d="M4 10h12M12 4l6 6-6 6" />
            </svg>
          </div>

          {/* Subtitle */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-2">
            {skillsContent.description}
          </p>
        </div>

        {/* ── Desktop animated SVG path ──────────────────────────────────── */}
        <svg
          viewBox="0 0 1000 1350"
          fill="none"
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
          aria-hidden="true"
        >
          {/* Layer 1 — faint static guide line */}
          <path
            d={DESKTOP_PATH}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Layer 2 — mask: the spring-driven line tip */}
          <defs>
            <mask id="path-mask">
              <motion.path
                d={DESKTOP_PATH}
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Layer 3 — real dashed path, revealed by the mask */}
          <path
            d={DESKTOP_PATH}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* ── Mobile animated SVG path ───────────────────────────────────── */}
        <div
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            {/* Layer 1 — faint guide */}
            <path
              d={MOBILE_PATH}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
            />

            {/* Layer 2 — mask */}
            <defs>
              <mask id="path-mask-mobile">
                <motion.path
                  d={MOBILE_PATH}
                  fill="none"
                  stroke="white"
                  strokeWidth="20"
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength }}
                />
              </mask>
            </defs>

            {/* Layer 3 — black revealed line */}
            <path
              d={MOBILE_PATH}
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
              mask="url(#path-mask-mobile)"
            />
          </svg>
        </div>

        {/* ── Cards ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 pt-[380px] md:pt-0">
          {skillsContent.cards.map((card, i) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={CARD_META[i].className}
              aosType={CARD_META[i].aosType}
              aosDelay={CARD_META[i].aosDelay}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}

          {/* Hand-written end note — desktop only */}
          <p
            className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none"
            aria-hidden="true"
          >
            {skillsContent.endText}
          </p>
        </div>

      </div>
    </section>
  )
}
