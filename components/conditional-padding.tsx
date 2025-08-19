"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ConditionalPadding() {
  const pathname = usePathname()
  
  useEffect(() => {
    const body = document.body
    
    // Add bottom padding only if NOT on Oaklands pages (since they don't have floating buttons)
    if (!pathname?.startsWith('/oaklands')) {
      body.classList.add('pb-20', 'md:pb-0', 'pb-safe')
    } else {
      body.classList.remove('pb-20', 'md:pb-0', 'pb-safe')
    }
    
    // Cleanup function
    return () => {
      body.classList.remove('pb-20', 'md:pb-0', 'pb-safe')
    }
  }, [pathname])
  
  return null
}
