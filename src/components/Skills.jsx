import { skillCategories } from '../data/skills'
import { useInView } from '../hooks/useInView'

function SkillBar({ name, level, animate }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300">{name}</span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function CategoryCard({ category, animate }) {
  return (
    <article className="card-glass p-6">
      <h3 className="mb-5 text-lg font-semibold text-white">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} animate={animate} />
        ))}
      </div>
    </article>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div ref={ref} className={inView ? 'reveal-visible' : 'opacity-0'}>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mb-12">
            Technologies and practices I use to build reliable products.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <CategoryCard key={category.title} category={category} animate={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
