"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowUp, Star, Shield, Award } from "lucide-react"
import Image from "next/image"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#areas", label: "Service Areas" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "New Pool Installations",
  "Pool Maintenance",
  "Pool Renovations",
  "Lapa Construction",
  "Fish Ponds",
  "Pool Repairs",
]

const serviceAreas = ["Akasia", "Montana", "Annlin", "Pretoria North", "Pretoria East", "Centurion"]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pool6.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/zulu-pools.png"
                  alt="Zulu Pool's Builder"
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-cyan-400">Zulu Pool's Builder</h3>
                  <p className="text-gray-400">Builders</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Creating exceptional swimming pool experiences across Pretoria and surrounding areas for over a decade.
                Your trusted partner in pool construction, renovation, and maintenance.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">10+ Years</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-gray-300">5-Star Rated</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-300 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Service Areas */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">076 688 5958</p>
                      <p className="text-gray-400 text-sm">Mon-Fri 7AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">info@zulupool9.co.za</p>
                      <p className="text-gray-400 text-sm">24/7 Email Support</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Service Areas:</p>
                      <div className="grid grid-cols-2 gap-1 text-sm text-gray-300">
                        {serviceAreas.map((area) => (
                          <span key={area}>{area}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="font-medium text-white mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-cyan-600 hover:border-cyan-600 hover:text-white bg-transparent"
                  >
                    <a
                      href="https://www.facebook.com/p/Zulu-pools-100075909987098/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Zulu Pool's Builder Facebook page"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-cyan-600 hover:border-cyan-600 hover:text-white bg-transparent"
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-cyan-600 hover:border-cyan-600 hover:text-white bg-transparent"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">© 2024 Zulu Pool's Builder. All rights reserved.</p>
                <p className="text-gray-500 text-xs mt-1">
                  Professional pool construction and maintenance services in Pretoria
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex space-x-4 text-xs text-gray-400">
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Sitemap
                  </a>
                </div>

                <Button size="sm" onClick={scrollToTop} className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
