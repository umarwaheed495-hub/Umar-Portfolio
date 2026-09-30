import { testimonials } from '../data/testimonials'
import { useInView } from '../hooks/useInView'

export default function Testimonials() {
  const [ref, inView] = useInView()

  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle mb-12">
          What colleagues and clients say about working together.
        </p>
        <div ref={ref} className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <blockquote
              key={item.id}
              className={`card-glass p-6 md:p-8 ${inView ? 'reveal-visible' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-lg leading-relaxed text-slate-300">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-sm text-slate-500">
                  {item.role}, {item.company}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
