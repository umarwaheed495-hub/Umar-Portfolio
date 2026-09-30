import { experience } from '../data/experience'
import { useInView } from '../hooks/useInView'

function ExperienceCard({ job, index }) {
  const [ref, inView] = useInView()

  return (
    <article
      ref={ref}
      className={`relative pl-8 md:pl-10 ${inView ? 'reveal-visible' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-blue-500/80 to-transparent md:left-1" />
      <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full border-2 border-blue-400 bg-[#0c0c14] md:left-[-3px]" />

      <div className="card-glass p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-cyan-400">{job.period}</p>
            <h3 className="mt-1 text-xl font-bold text-white">{job.role}</h3>
            <p className="text-slate-400">
              {job.company}
              <span className="mx-2 text-slate-600">·</span>
              {job.location}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Key Responsibilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-blue-400">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Achievements
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {job.achievements.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-cyan-400">★</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle mb-12">
          Roles where I shipped production software and led technical work.
        </p>
        <div className="space-y-10">
          {experience.map((job, index) => (
            <ExperienceCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
