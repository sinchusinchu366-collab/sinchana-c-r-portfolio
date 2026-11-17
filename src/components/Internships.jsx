import { internshipsList } from '../data/portfolioData'

// ── InternshipCard ────────────────────────────────────────────────────────────
function InternshipCard({ intern, index }) {
  return (
    <div
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 150}
    >
      {/* Top row — duration + badge */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
          {intern.duration}
        </span>
        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-[10px] font-bold uppercase tracking-widest">
          Internship
        </span>
      </div>

      {/* Role */}
      <h3 className="text-2xl font-black text-white leading-tight mb-1">
        {intern.role}
      </h3>

      {/* Organization */}
      <p className="text-sm uppercase tracking-widest text-red-200 font-semibold mb-6">
        {intern.organization}
        {intern.location ? ` · ${intern.location}` : ''}
      </p>

      {/* Skills gained */}
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-white/50 font-bold mb-2">
          Skills Gained:
        </p>
        <ul className="flex flex-col gap-1.5">
          {intern.skills.map((skill) => (
            <li key={skill} className="flex items-start gap-2 text-sm text-white/80">
              {/* Bullet */}
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies — separated by a top border */}
      <div className="border-t border-white/10 pt-5">
        <p className="text-xs uppercase tracking-widest text-white/50 font-bold mb-3">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-black/30 border border-white/10 text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Internships section ───────────────────────────────────────────────────────
export default function Internships() {
  return (
    <section id="experience" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">

      {/* ── Torn-paper top divider (flipped) — dark section flows into red ── */}
      {/* rotate-180 flips the wave; -translate-y-[1px] removes the 1px seam gap */}
      <div className="absolute top-0 left-0 right-0 leading-none pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20"
          fill="#0a0a0a"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* ── Decorative pulsing star — bottom-left ───────────────────────── */}
      <div className="absolute bottom-10 left-8 opacity-20 animate-pulse pointer-events-none" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="black">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section header ───────────────────────────────────── */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base">
            Hands-on internships where I built real products and sharpened my skills.
          </p>
        </div>

        {/* ── Cards grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization + intern.role} intern={intern} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
