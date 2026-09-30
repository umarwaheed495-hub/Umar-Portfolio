import { education } from '../data/education'
import { useInView } from '../hooks/useInView'

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="py-20 md:py-28 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle mb-12">Academic background.</p>
        <div ref={ref} className="space-y-6">
          {education.map((item, index) => (
            <article
              key={item.id}
              className={`card-glass p-6 md:p-8 ${inView ? 'reveal-visible' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm font-medium text-cyan-400">{item.period}</p>
              <h3 className="mt-1 text-xl font-bold text-white">{item.degree}</h3>
              <p className="mt-1 text-slate-400">{item.institution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
