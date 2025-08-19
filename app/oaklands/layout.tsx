import type { Metadata } from "next"
import { OaklandsHeader } from "@/components/oaklands/header"
import { OaklandsFooter } from "@/components/oaklands/footer"

export const metadata: Metadata = {
  title: "Oaklands Building | Construction & Renovations",
  description: "Professional building, renovations, and project management.",
}

export default function OaklandsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased">
      <OaklandsHeader />
      {children}
      <OaklandsFooter />
    </div>
  )
}
