"use client"

import { faqs } from "./content"

export function OaklandsFaqs() {
  return (
    <section className="relative bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">FAQs</h2>
        <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {faqs.map((f, i) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-base font-medium text-neutral-900">{f.q}</span>
                <span className="text-neutral-500 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-sm text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
