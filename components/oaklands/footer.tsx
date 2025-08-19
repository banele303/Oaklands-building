import Link from "next/link"
import { site } from "./content"

export function OaklandsFooter() {
  return (
    <footer className="relative bg-neutral-950 text-neutral-100">
      <div className="absolute inset-0 bg-[url('/images/pool6.jpg')] bg-cover bg-center opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">{site.name}</h3>
          <p className="mt-2 text-neutral-300 max-w-sm">{site.tagline}</p>
          <div className="mt-4 text-sm text-neutral-300 space-y-1">
            {site.contact?.name && <p>Contact: {site.contact.name}</p>}
            {site.phonePrimary && (
              <p>Cell & WhatsApp: <a className="hover:underline" href={`tel:${site.phonePrimary}`}>{site.phonePrimary}</a></p>
            )}
            {site.phoneAlt && (
              <p>Cell (alt): <a className="hover:underline" href={`tel:${site.phoneAlt}`}>{site.phoneAlt}</a></p>
            )}
            {site.email && (
              <p>Email: <a className="hover:underline" href={`mailto:${site.email}`}>{site.email}</a></p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">Company</h4>
            <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
              <li><Link href="/oaklands/services" className="hover:underline">Services</Link></li>
              <li><Link href="/oaklands/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link href="/oaklands/about" className="hover:underline">About</Link></li>
              <li><Link href="/oaklands/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">Social</h4>
            <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
              {site.social.facebook && (
                <li><a href={site.social.facebook} target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
              )}
              {site.social.instagram && (
                <li><a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
              )}
              {site.social.linkedin && (
                <li><a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
              )}
            </ul>
          </div>
        </div>
        <div className="text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
