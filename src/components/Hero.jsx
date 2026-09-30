import { contact } from '../data/contact'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
              {profile.title}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="mt-4 flex items-center gap-2 text-slate-400">
              <span aria-hidden>📍</span>
              {profile.location}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {profile.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href={contact.email.href}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 text-4xl font-bold text-white shadow-2xl shadow-blue-500/20 md:h-48 md:w-48 md:text-5xl">
              {profile.avatarInitials}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/40 to-cyan-500/40 blur-xl -z-10" />
            </div>
            <div className="grid w-full max-w-xs grid-cols-2 gap-3">
              {profile.heroHighlights.map((item) => (
                <div
                  key={item.name}
                  className="card-glass px-4 py-3 text-center"
                >
                  <p className="text-2xl font-bold text-white">{item.percent}%</p>
                  <p className="text-xs text-slate-400">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
