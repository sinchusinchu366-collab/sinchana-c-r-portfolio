import SplashCursor   from './components/SplashCursor'
import Preloader      from './components/Preloader'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Process        from './components/Process'
import Projects       from './components/Projects'
import Internships    from './components/Internships'
import Education      from './components/Education'
import SoftSkills     from './components/SoftSkills'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import ScrollToTop    from './components/ScrollToTop'

// ── App ───────────────────────────────────────────────────────────────────────
// Sections are mounted in page order. Preloader manages its own visibility and
// slides off automatically — no lifted state needed here.
export default function App() {
  return (
    <>
      <SplashCursor VELOCITY_DISSIPATION={3} SPLAT_FORCE={3500} COLOR_UPDATE_SPEED={18} COLOR="#ffffff" RAINBOW_MODE={false} />

      {/* Self-contained preloader — shows for ~2.2 s then exits */}
      <Preloader />

      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Process />
      <Projects />
      <Internships />
      <Education />
      <SoftSkills />   {/* ← sits immediately before Contact */}
      <Contact />
      <Footer />

      {/* Fixed scroll-to-top button */}
      <ScrollToTop />
    </>
  )
}
