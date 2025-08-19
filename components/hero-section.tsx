"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, Award } from "lucide-react"

export function HeroSection() {
  return (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24 md:pb-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50" />
        <div className="absolute inset-0 bg-[url('/images/real-pool-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20" />
      </div>

  {/* Floating Elements (desktop only) */}
  <div className="absolute inset-0 z-10 hidden md:block">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-cyan-200/30 rounded-full animate-float"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-200/30 rounded-full animate-float"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-teal-200/30 rounded-full animate-float"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
        
        {/* Floating Images */}
        <motion.div
          className="absolute top-32 right-32 w-24 h-24 rounded-2xl overflow-hidden shadow-xl opacity-70"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        >
          <img src="/images/pool1.jpg" alt="Pool" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-40 w-20 h-20 rounded-xl overflow-hidden shadow-xl opacity-60"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
        >
          <img src="/images/cool-pool3.jpg" alt="Pool" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div
          className="absolute top-60 left-32 w-16 h-16 rounded-lg overflow-hidden shadow-xl opacity-50"
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2.5 }}
        >
          <img src="/images/decking.jpg" alt="Pool" className="w-full h-full object-cover" />
        </motion.div>
      </div>

  <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
    className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
    <span className="text-xs sm:text-sm font-medium text-gray-700">Premium Pool Builders in Pretoria</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your
            <span className="block">Backyard Paradise</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional pool construction, renovation, and maintenance services across Pretoria, Centurion, and
            surrounding areas. Creating luxury swimming experiences since day one.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="gradient-blue text-white hover:opacity-90 group">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">10+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">5-Star Rated</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
