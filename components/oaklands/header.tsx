"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react"
import { site } from "./content"

export function OaklandsHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Close mobile menu on scroll and outside click
    const handleScrollClose = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMenuOpen(false)
      }
    }
    
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.height = "100%"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.height = ""
    }
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", handleScrollClose)
    document.addEventListener("click", handleOutsideClick)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleScrollClose)
      document.removeEventListener("click", handleOutsideClick)
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.height = ""
    }
  }, [isMenuOpen])

  const navItems = [
    { href: "/oaklands", label: "Home" },
    { href: "/oaklands/services", label: "Services", hasDropdown: true },
    { href: "/oaklands/portfolio", label: "Portfolio" },
    { href: "/oaklands/about", label: "About" },
    { href: "/oaklands/contact", label: "Contact" },
  ]

  const services = [
    { href: "/oaklands/services/new-builds", label: "New Builds & Developments" },
    { href: "/oaklands/services/additions-alterations", label: "Additions & Alterations" },
    { href: "/oaklands/services/multi-storey", label: "Multi-Storey Projects" },
    { href: "/oaklands/services/maintenance", label: "Building Maintenance" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm shadow-sm"
      } ${isMenuOpen ? "z-[60]" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/oaklands" className="flex items-center space-x-2 sm:space-x-3 group">
            <Image
              src="/Oakland-logo.png"
              alt="Oakland Building"
              width={168}
              height={56}
              className="h-11 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isServicesOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-[70]"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="font-medium">{site.phonePrimary}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="font-medium">{site.email}</span>
              </div>
            </div>
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/oaklands/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Contact & Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="hidden xs:flex items-center space-x-1 text-xs text-gray-600">
              <Phone className="w-3 h-3 text-blue-600" />
              <span className="font-medium text-xs">{site.phonePrimary}</span>
            </div>
            <button 
              className="p-3 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-mobile-menu
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Mobile Menu Overlay */}
            <div 
              className="fixed inset-0 bg-black/50 z-[55] lg:hidden backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Content */}
            <div 
              className="fixed top-0 left-0 right-0 bottom-0 bg-white z-[60] lg:hidden"
              data-mobile-menu
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between h-16 sm:h-20 px-4 border-b border-gray-200 bg-white">
                <Link href="/oaklands" className="flex items-center space-x-2 group" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">O</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900 leading-none">Oaklands</span>
                    <span className="text-xs font-medium text-blue-600 leading-none">Building</span>
                  </div>
                </Link>
                <button 
                  className="p-3 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center bg-white" 
                  onClick={() => setIsMenuOpen(false)}
                  data-mobile-menu
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 bg-white">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium text-lg touch-manipulation bg-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown && <ChevronDown className="w-5 h-5 text-gray-400" />}
                      </Link>
                      {item.hasDropdown && (
                        <div className="ml-4 mt-2 space-y-1 bg-white">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block px-4 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors pl-8 touch-manipulation bg-white"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Mobile Contact Info */}
                <div className="mt-8 px-4 py-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a href={`tel:${site.phonePrimary}`} className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors touch-manipulation bg-white rounded-lg p-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-base font-medium">{site.phonePrimary}</span>
                    </a>
                    <a href={`mailto:${site.email}`} className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors touch-manipulation bg-white rounded-lg p-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-base">{site.email}</span>
                    </a>
                    <div className="flex items-start space-x-3 text-gray-600 bg-white rounded-lg p-2">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-base">{site.address}</span>
                    </div>
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full py-4 mt-6 text-lg touch-manipulation"
                    >
                      <Link href="/oaklands/contact" onClick={() => setIsMenuOpen(false)}>
                        Get Free Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
