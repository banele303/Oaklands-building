"use client"

import { process } from "./content"

export function OaklandsProcess() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p) => (
            <li key={p.step} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-neutral-500">Step {p.step}</div>
              <div className="text-base font-semibold mt-1">{p.title}</div>
              <p className="mt-2 text-sm text-neutral-600">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
