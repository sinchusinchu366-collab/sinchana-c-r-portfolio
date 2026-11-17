import { softSkillsList } from '../data/portfolioData'

// ── SkillCard — one soft-skill card ──────────────────────────────────────────
function SkillCard({ name, icon, desc, index }) {
  return (
    <div
      className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4
                 hover:border-red-500/30 hover:bg-white/8 hover:shadow-[0_8px_40px_rgba(255,42,42,0.08)]
                 transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Icon */}
      <span className="text-3xl" role="img" aria-label={name}>
        {icon}
      </span>

      {/* Title */}
      <h3 className="text-white font-black text-lg">{name}</h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

// ── SoftSkills — main section ─────────────────────────────────────────────────
export default function SoftSkills() {
  return (
    <section
      id="softskills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-flex px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Soft Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
            How I Work
          </h2>

          <p className="text-white/50 text-sm md:text-base max-w-md mx-auto">
            The personal qualities I bring to every project and team.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              desc={skill.desc}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
