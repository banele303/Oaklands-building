"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export function FloatingActions() {
  // Oaklands contact
  const rawPhone = "0846578338" // primary (cell & WhatsApp)
  const telPhone = "+27" + rawPhone.replace(/^0/, "") // +27846578338
  const whatsappPhone = telPhone.replace(/^\+/, "") // 27846578338 for wa.me
  const whatsappMessage = encodeURIComponent("Hi Oaklands Building, I'd like a quote.")

  return (
    <>
      {/* Mobile bottom bar (sm and down) */}
  <div className="fixed inset-x-0 bottom-0 z-40 flex md:hidden">
        <div className="mx-auto mb-safe bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-2xl w-full max-w-screen-sm rounded-t-2xl border-t border-gray-200">
          <div className="grid grid-cols-2">
            <a
              href={`https://wa.me/${whatsappPhone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-gray-900 hover:bg-gray-50 touch-manipulation"
              aria-label="Chat on WhatsApp"
            >
              <span className="inline-flex items-center justify-center size-8 rounded-full bg-[#25D366] text-white">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                  <path d="M20.52 3.48A11.83 11.83 0 0 0 12.06 0C5.46.03.1 5.39.1 12A11.85 11.85 0 0 0 2.4 18.4L0 24l5.76-2.35A11.92 11.92 0 0 0 12.06 24C18.66 24 24 18.64 24 12.03a11.83 11.83 0 0 0-3.48-8.55ZM12.06 22a9.86 9.86 0 0 1-5-1.36l-.36-.2-3.42 1.4 1.3-3.5-.24-.38a9.9 9.9 0 1 1 7.72 4.04Zm5.7-7.37c-.31-.16-1.84-.9-2.13-1.01-.29-.11-.5-.16-.72.16-.21.31-.83 1.01-1.02 1.22-.19.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.53-.72-.54l-.62-.01c-.21 0-.55.08-.83.4s-1.1 1.08-1.1 2.64 1.13 3.06 1.29 3.28c.16.21 2.23 3.4 5.4 4.76.75.32 1.34.51 1.8.66.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z"/>
                </svg>
              </span>
              WhatsApp
            </a>
            <a
              href={`tel:${telPhone}`}
              className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 touch-manipulation"
              aria-label="Call now"
            >
              <span className="inline-flex items-center justify-center size-8 rounded-full bg-white/20">
                <Phone className="size-4 text-white" />
              </span>
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Floating icons on md+ screens */}
  <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
        <motion.a
          href={`https://wa.me/${whatsappPhone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center h-14 w-14 rounded-full shadow-xl bg-[#25D366] text-white"
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-8 right-0 translate-x-2 rounded-full bg-black/80 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            WhatsApp
          </span>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 fill-current drop-shadow-sm">
            <path d="M20.52 3.48A11.83 11.83 0 0 0 12.06 0C5.46.03.1 5.39.1 12A11.85 11.85 0 0 0 2.4 18.4L0 24l5.76-2.35A11.92 11.92 0 0 0 12.06 24C18.66 24 24 18.64 24 12.03a11.83 11.83 0 0 0-3.48-8.55ZM12.06 22a9.86 9.86 0 0 1-5-1.36l-.36-.2-3.42 1.4 1.3-3.5-.24-.38a9.9 9.9 0 1 1 7.72 4.04Zm5.7-7.37c-.31-.16-1.84-.9-2.13-1.01-.29-.11-.5-.16-.72.16-.21.31-.83 1.01-1.02 1.22-.19.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.53-.72-.54l-.62-.01c-.21 0-.55.08-.83.4s-1.1 1.08-1.1 2.64 1.13 3.06 1.29 3.28c.16.21 2.23 3.4 5.4 4.76.75.32 1.34.51 1.8.66.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z"/>
          </svg>
          <span className="absolute inset-0 rounded-full ring-2 ring-white/10 group-hover:ring-white/20 transition" />
        </motion.a>

        <motion.a
          href={`tel:${telPhone}`}
          className="group relative inline-flex items-center justify-center h-14 w-14 rounded-full shadow-xl bg-cyan-600 text-white"
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Call now"
        >
          <span className="absolute -top-8 right-0 translate-x-2 rounded-full bg-black/80 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            Call
          </span>
          <Phone className="w-7 h-7 drop-shadow-sm" />
          <span className="absolute inset-0 rounded-full ring-2 ring-white/10 group-hover:ring-white/20 transition" />
        </motion.a>
      </div>
    </>
  )
}
