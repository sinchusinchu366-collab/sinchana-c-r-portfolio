import { personalInfo, socialLinks, footerContent, academy } from '../data/portfolioData'

// Computed once at module load — safe to use in render
const year = new Date().getFullYear()

// ── Inline SVG social icons ───────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* ── Top row ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1 — taglines */}
        <div className="flex flex-col gap-1">
          {footerContent.taglines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {/* Column 2 — credential + view work link */}
        <div className="flex flex-col gap-2 md:items-center">
          <p>{footerContent.credential}</p>
          <a
            href="#projects"
            className="underline underline-offset-4 hover:text-white transition-colors duration-200"
          >
            View Work
          </a>
        </div>

        {/* Column 3 — availability + year */}
        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for opportunities</p>
          <p>{year}</p>
        </div>
      </div>

      {/* ── Huge brand name (middle) ─────────────────────────────── */}
      <div className="py-20 md:py-24 overflow-hidden">
        <h2
          className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-center"
          style={{ color: '#f4f4f4' }}
        >
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* ── Bottom row ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">

        {/* Column 1 — contact link + copyright + academy credit */}
        <div className="flex flex-col gap-2">
          <a
            href="#contact"
            className="underline underline-offset-4 hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
          <p className="text-white/60">{footerContent.copyright}</p>
          {/* TAP Academy credit — required by project rules */}
          <p className="text-white/60">
            Trained at{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-white transition-colors duration-200"
            >
              {academy.name}
            </a>
          </p>
        </div>

        {/* Column 2 — email + social icons */}
        <div className="flex flex-col gap-3 md:items-center">
          {/* Primary email as mailto link */}
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="underline underline-offset-4 hover:text-white transition-colors duration-200"
          >
            {personalInfo.emails.primary}
          </a>

          {/* Social icon row */}
          <div className="flex items-center gap-4">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-white transition-colors duration-200"
              >
                <GithubIcon />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-white transition-colors duration-200"
              >
                <LinkedinIcon />
              </a>
            )}
            {/* Instagram only shown when a URL is provided */}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="hover:text-white transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
            )}
          </div>
        </div>

        {/* Column 3 — GitHub explore link */}
        <div className="flex flex-col md:items-end">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white transition-colors duration-200"
          >
            Explore My GitHub
          </a>
        </div>

      </div>
    </footer>
  )
}
