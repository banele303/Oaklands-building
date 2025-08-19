"use client"

import Link from "next/link"
import { site } from "@/components/oaklands/content"

export default function OaklandsContactPage() {
  const primary = site.phonePrimary?.trim().replace(/\s+/g, "") || ""
  const alt = site.phoneAlt?.trim().replace(/\s+/g, "") || ""
  const telIntlPrimary = primary ? (primary.startsWith("0") ? "+27" + primary.slice(1) : primary) : ""
  const telIntlAlt = alt ? (alt.startsWith("0") ? "+27" + alt.slice(1) : alt) : ""
  const wa = (site.whatsapp || "").replace(/^\+/, "") || (telIntlPrimary || "").replace(/^\+/, "")
  const msg = encodeURIComponent("Hi Oaklands Building, I'd like a quote.")

  return (
    <main className="min-h-screen">
      <section className="relative">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-2 text-neutral-600">We'd love to hear about your project.</p>

          <div className="mt-8 grid gap-6">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h2 className="text-lg font-semibold">Get in touch</h2>
              <ul className="mt-3 text-neutral-700 space-y-2">
                {site.contact?.name && <li>Contact: {site.contact.name}</li>}
                {site.phonePrimary && (
                  <li>
                    Cell & WhatsApp: <a className="text-cyan-700 hover:underline" href={`tel:${telIntlPrimary}`}>{site.phonePrimary}</a>
                  </li>
                )}
                {site.phoneAlt && (
                  <li>
                    Cell (alt): <a className="text-cyan-700 hover:underline" href={`tel:${telIntlAlt}`}>{site.phoneAlt}</a>
                  </li>
                )}
                {site.email && (
                  <li>Email: <a className="text-cyan-700 hover:underline" href={`mailto:${site.email}`}>{site.email}</a></li>
                )}
                {site.address && <li>Address: {site.address}</li>}
              </ul>
              <div className="mt-4 flex gap-3">
                {telIntlPrimary && (
                  <a href={`tel:${telIntlPrimary}`} className="inline-flex rounded-full bg-cyan-600 hover:bg-cyan-700 text-white text-sm px-4 py-2">Call Primary</a>
                )}
                {telIntlAlt && (
                  <a href={`tel:${telIntlAlt}`} className="inline-flex rounded-full bg-cyan-600 hover:bg-cyan-700 text-white text-sm px-4 py-2">Call Alternate</a>
                )}
                {wa && (
                  <a href={`https://wa.me/${wa}?text=${msg}`} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2">WhatsApp</a>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6">
              <h2 className="text-lg font-semibold">Quick links</h2>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <Link href="/oaklands/services" className="rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-50">Services</Link>
                <Link href="/oaklands/portfolio" className="rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-50">Portfolio</Link>
                <Link href="/oaklands/about" className="rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-50">About</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
