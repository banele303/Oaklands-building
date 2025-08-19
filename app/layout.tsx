import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { FloatingActions } from "@/components/floating-actions"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Oaklands Building | Turnkey Construction in KZN",
  description:
    "Fully registered and compliant turnkey construction company based in Verulam, KZN. We cover KZN and neighboring provinces. Developments, multi-storey projects, additions, and alterations.",
  keywords:
    "construction, building, renovations, developments, multi-storey, additions, alterations, KZN, Verulam, project management",
  authors: [{ name: "Oaklands Building" }],
  creator: "Oaklands Building",
  publisher: "Oaklands Building",
  robots: "index, follow",
  openGraph: {
    title: "Oaklands Building | Turnkey Construction",
    description:
      "Registered and compliant turnkey construction serving KZN and neighboring provinces.",
    url: "/",
  siteName: "Oaklands Building",
    images: [
      {
        url: "/images/placeholder-logo.png",
        width: 1200,
        height: 630,
  alt: "Oaklands Building - Turnkey Construction",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oaklands Building | Turnkey Construction",
    description:
      "Registered and compliant turnkey construction in KZN.",
  images: ["/images/placeholder-logo.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#0891b2",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
    <link rel="canonical" href="/" />
      </head>
  <body className="antialiased pb-20 md:pb-0 pb-safe">
        {children}
        <FloatingActions />
      </body>
    </html>
  )
}
