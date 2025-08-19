"use client"

import { OaklandsHero } from "@/components/oaklands/hero"
import { OaklandsServicesGrid } from "@/components/oaklands/services-grid"
import { OaklandsFeatures } from "@/components/oaklands/features"
import { OaklandsProcess } from "@/components/oaklands/process"
import ProjectShowcase from "@/components/oaklands/project-showcase"
import Credentials from "@/components/oaklands/credentials"
import TestimonialsSection from "@/components/oaklands/testimonials"
import { OaklandsCta } from "@/components/oaklands/cta"
import { OaklandsFaqs } from "@/components/oaklands/faqs"

export default function OaklandsHomePage() {
  return (
    <main className="min-h-screen">
      <OaklandsHero />
      <OaklandsFeatures />
      <OaklandsServicesGrid />
      <OaklandsProcess />
      <ProjectShowcase />
      <Credentials />
      <TestimonialsSection />
      <OaklandsCta />
      <OaklandsFaqs />
    </main>
  )
}
