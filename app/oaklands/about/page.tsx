"use client"

import Image from "next/image"
import { about } from "@/components/oaklands/content"

export default function OaklandsAboutPage() {
  return (
    <main className="min-h-screen">
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{about.heading}</h1>
            <p className="mt-4 text-neutral-700 leading-relaxed">{about.body}</p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {about.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-neutral-50 p-4 border border-neutral-200">
                  <dt className="text-sm text-neutral-500">{s.label}</dt>
                  <dd className="text-2xl font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200">
            <Image src={about.image} alt={about.heading} fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  )
}
