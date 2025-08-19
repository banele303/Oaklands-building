"use client"

import { useState, useEffect } from "react"
import { hero } from "./content"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const backgroundImages = [
  "/building.jpeg",
  "/building2.jpeg", 
  "/construction.jpeg",
  "/construction2.jpeg",
  "/construction3.jpeg",
  "/construction4.jpeg",
  "/building4.jpeg",
  "/building5.jpeg",
  "/building8.jpeg"
]

export function OaklandsHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? backgroundImages.length - 1 : currentImageIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === backgroundImages.length - 1 ? 0 : currentImageIndex + 1
    )
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white touch-manipulation"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white touch-manipulation"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Play/Pause Control */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-20 sm:bottom-24 lg:bottom-8 right-4 sm:right-8 z-30 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white touch-manipulation"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 sm:bottom-24 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-1 sm:space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentImageIndex 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-white pt-20 sm:pt-24 pb-24 sm:pb-32">
        <div className="animate-fadeIn">
          {/* Company Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/Oakland-logo.png"
              alt="Oakland Building"
              width={200}
              height={80}
              className="w-32 h-auto md:w-40"
            />
          </div>
          
          <p className="text-xs sm:text-sm uppercase tracking-widest text-cyan-300 font-medium mb-4 animate-slideInUp">
            {hero.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slideInUp animation-delay-200">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              {hero.title}
            </span>
            <br />
            <span className="font-light text-cyan-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {hero.highlight}
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-slideInUp animation-delay-400 px-4">
            {hero.subtitle}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slideInUp animation-delay-600 px-4">
            {hero.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={
                  cta.primary
                    ? "group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center touch-manipulation"
                    : "group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center touch-manipulation"
                }
              >
                {cta.label}
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}
