import { contact } from '../data/contact'
import { profile } from '../data/profile'

function buildContactItems() {
  const items = [contact.email, contact.phone, contact.location]
  if (contact.linkedin?.href) {
    items.push({
      label: contact.linkedin.label,
      value: contact.linkedin.display,
      href: contact.linkedin.href,
    })
  }
  if (contact.github?.href) {
    items.push({
      label: contact.github.label,
      value: contact.github.display,
      href: contact.github.href,
    })
  }
  return items
}

export default function Contact() {
  const items = buildContactItems()

  return (
    <section id="contact" className="py-20 md:py-28 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle mb-12">
          Open to full-time roles, contracts, and interesting collaborations.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
            <p className="mt-1 text-slate-400">{profile.title}</p>
            <ul className="mt-8 space-y-5">
              {items.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="w-24 shrink-0 text-sm font-medium text-slate-500">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-slate-200 hover:text-cyan-400 transition break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-slate-200">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-glass flex flex-col justify-center p-8 text-center">
            <p className="text-slate-400">
              Prefer email? Send a message and I&apos;ll get back to you.
            </p>
            <a
              href={contact.email.href}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:opacity-90"
            >
              {contact.email.value}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
