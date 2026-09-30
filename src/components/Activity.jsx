import { activitySection, topLanguages } from '../data/activity'
import { useInView } from '../hooks/useInView'

const LEVEL_COLORS = [
  'bg-white/5',
  'bg-emerald-900/80',
  'bg-emerald-700/80',
  'bg-emerald-500/80',
  'bg-emerald-400/90',
]

export default function Activity() {
  const [ref, inView] = useInView()

  return (
    <section id="activity" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-subtitle mb-12">
          Contribution patterns and language focus (editable in data files).
        </p>

        <div
          ref={ref}
          className={`grid gap-8 lg:grid-cols-[1.4fr_1fr] ${inView ? 'reveal-visible' : 'opacity-0'}`}
        >
          <div className="card-glass p-6 overflow-x-auto">
            <h3 className="text-lg font-semibold text-white">
              {activitySection.title}
            </h3>
            <p className="mt-1 text-xs text-slate-500">{activitySection.note}</p>
            <div className="mt-6 flex gap-1">
              {activitySection.contributionWeeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((level, di) => (
                    <div
                      key={di}
                      className={`h-2.5 w-2.5 rounded-sm ${LEVEL_COLORS[level]}`}
                      title={`Level ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="card-glass p-6">
            <h3 className="text-lg font-semibold text-white">Top Languages</h3>
            <ul className="mt-6 space-y-4">
              {topLanguages.map((lang) => (
                <li key={lang.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-300">{lang.name}</span>
                    <span className="text-slate-500">{lang.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: inView ? `${lang.percent}%` : '0%',
                        backgroundColor: lang.color,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
