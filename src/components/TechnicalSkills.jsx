import { technicalSkills } from '../data/portfolioData'

// ── SkillBadge — single skill pill ───────────────────────────────────────────
function SkillBadge({ name }) {
  return (
    <span className="inline-flex rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition-colors duration-200 cursor-default">
      {name}
    </span>
  )
}

// ── SkillCard — one category card ────────────────────────────────────────────
function SkillCard({ category, index }) {
  return (
    <div
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_8px_40px_rgba(239,68,68,0.12)] transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Category title */}
      <h3 className="text-white uppercase font-black text-sm tracking-widest mb-4 pb-3 border-b border-white/10">
        {category.title}
      </h3>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  )
}

// ── TechnicalSkills — main section ───────────────────────────────────────────
export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* ── Decorative blurred red glow circles ──────────────── */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section header ───────────────────────────────────── */}
        <div className="text-center mb-14" data-aos="fade-up">
          {/* Pill label */}
          <span className="inline-flex px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Technical Stack
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
            My Skillset
          </h2>

          <p className="text-white/50 text-sm md:text-base">
            Tools and technologies I use to build full-stack applications.
          </p>
        </div>

        {/* ── Skills grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
