import { education, certificates } from '../data/portfolioData'

// ── Education section ─────────────────────────────────────────────────────────
export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-72 bg-red-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section header ───────────────────────────────────── */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-flex px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Education &amp; Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
            Academic Background
          </h2>
        </div>

        {/* ── Two-column: degree card + certificate card ───────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Degree card */}
          <div
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/30 hover:shadow-[0_8px_40px_rgba(255,42,42,0.08)] transition-all duration-300"
            data-aos="fade-right"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
              {/* Graduation cap SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            {/* Degree name */}
            <h3 className="text-white text-xl font-black mb-1">{education.degree}</h3>

            {/* Institution */}
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-5">
              {education.institution}
            </p>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono">
                {education.years}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono">
                {education.cgpa}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono">
                Graduating {education.graduation}
              </span>
            </div>
          </div>

          {/* Certificate card */}
          <div
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/30 hover:shadow-[0_8px_40px_rgba(255,42,42,0.08)] transition-all duration-300"
            data-aos="fade-left"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
              {/* Award / certificate SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <circle cx="12" cy="8" r="6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>

            <h3 className="text-white text-xl font-black mb-4">Certifications</h3>

            {/* Featured certificates list */}
            <ul className="flex flex-col gap-3 mb-6">
              {certificates.featured.map((cert) => (
                <li key={cert.name} className="flex items-center gap-3">
                  <span className="text-lg">{cert.icon}</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{cert.name}</p>
                    <p className="text-white/40 text-xs">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* View all on LinkedIn */}
            {certificates.viewAllUrl && (
              <a
                href={certificates.viewAllUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-400 text-xs font-semibold hover:text-red-300 transition-colors duration-200"
              >
                View all on LinkedIn
                {/* External link icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
