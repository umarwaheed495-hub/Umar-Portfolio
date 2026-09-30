import { marqueeTechnologies } from '../data/skills'

export default function TechMarquee() {
  const items = [...marqueeTechnologies, ...marqueeTechnologies]

  return (
    <div className="border-y border-white/10 bg-white/[0.02] py-5 overflow-hidden">
      <div className="flex w-max animate-marquee gap-8 px-4">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="shrink-0 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
