import { contact } from '../data/contact'
import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-500 md:flex-row md:px-6 md:text-left">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>{contact.location.value}</p>
      </div>
    </footer>
  )
}
