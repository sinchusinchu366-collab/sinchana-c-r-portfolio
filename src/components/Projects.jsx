import { projects, socialLinks } from '../data/portfolioData'

// ── Inline SVG icons ──────────────────────────────────────────────────────────
function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

// ── ProjectCard ───────────────────────────────────────────────────────────────
function ProjectCard({ project, aosDelay }) {
  // Flagship gets a vivid red gradient border; others get a subtle white border
  const outerBorder = project.isFlagship
    ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/60'
    : 'bg-white/10 hover:bg-white/20'

  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay}>
      {/* 1 px gradient border trick: outer div is the border, inner div is the background */}
      <div className={`p-[1px] rounded-2xl transition-all duration-300 ${outerBorder}`}>

        {/* Inner panel */}
        <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90">

          {/* Optional badge pill */}
          {project.badge && (
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
              {project.badge}
            </span>
          )}

          {/* Number + title row */}
          <div className="flex items-baseline gap-4 mb-3 flex-wrap">
            <span className="text-5xl font-black text-white/10 font-serif italic leading-none">
              {project.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech tag pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white/70 hover:text-[#ff2a2a] hover:border-red-500/40 hover:bg-red-500/5 transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">

            {/* GitHub — only shown when a link exists */}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                <GitHubIcon />
                GitHub
              </a>
            )}

            {/* Demo — live button when demo URL exists, greyed-out pill when not */}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-semibold hover:bg-red-600 transition-colors duration-200"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
            ) : (
              /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/30 text-sm font-semibold cursor-not-allowed select-none">
                Demo Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Projects section ──────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:80px_80px]"
    >
      <div className="max-w-4xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="mb-14" data-aos="fade-up">
          {/* Pill label */}
          <span className="inline-flex px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Featured Projects
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            Work that speaks<br className="hidden md:block" /> for itself
          </h2>

          <p className="text-white/50 text-sm md:text-base">
            A selection of full-stack projects I&apos;ve designed, built and shipped.
          </p>
        </div>

        {/* ── Project cards ───────────────────────────────────── */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* ── Bottom CTA ──────────────────────────────────────── */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-200 group"
          >
            <GitHubIcon />
            Explore All My Repositories
            <ArrowRightIcon />
          </a>
        </div>

      </div>
    </section>
  )
}
