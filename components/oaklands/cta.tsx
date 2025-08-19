"use client"

import Link from "next/link"
import { cta } from "./content"

export function OaklandsCta() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-cyan-600 to-cyan-800 p-10 text-white">
          <h2 className="text-2xl sm:text-3xl font-semibold">{cta.heading}</h2>
          <p className="mt-2 text-white/90">{cta.sub}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href={cta.primary.href} className="inline-flex rounded-full bg-white text-cyan-800 text-sm px-5 py-2.5 font-medium hover:bg-white/90">{cta.primary.label}</a>
            <a href={cta.secondary.href} className="inline-flex rounded-full bg-cyan-700 text-white text-sm px-5 py-2.5 font-medium hover:bg-cyan-600">{cta.secondary.label}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
