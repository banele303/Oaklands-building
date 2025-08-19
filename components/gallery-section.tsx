"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    category: "New Installations",
    title: "Modern Pool Construction",
    location: "Pretoria East",
    image: "/images/pool-construction.jpg",
  },
  {
    id: 2,
    category: "New Installations",
    title: "Luxury Pool Build",
    location: "Centurion",
    image: "/images/pool-construction2.jpg",
  },
  {
    id: 3,
    category: "New Installations",
    title: "Contemporary Pool Design",
    location: "Montana",
    image: "/images/pool-building2.jpg",
  },
  {
    id: 4,
    category: "New Installations",
    title: "Premium Pool Installation",
    location: "Akasia",
    image: "/images/pool-buildingtwo.jpg",
  },
  {
    id: 5,
    category: "Completed Projects",
    title: "Cool Modern Pool",
    location: "Pretoria North",
    image: "/images/cool-pool.jpg",
  },
  {
    id: 6,
    category: "Completed Projects",
    title: "Stylish Pool Design",
    location: "Annlin",
    image: "/images/cool-pool2.jpg",
  },
  {
    id: 7,
    category: "Completed Projects",
    title: "Premium Pool Finish",
    location: "Centurion",
    image: "/images/cool-pool3.jpg",
  },
  {
    id: 8,
    category: "Completed Projects",
    title: "Beautiful Pool Installation",
    location: "Pretoria East",
    image: "/images/pool1.jpg",
  },
  {
    id: 9,
    category: "Completed Projects",
    title: "Elegant Pool Design",
    location: "Menlyn",
    image: "/images/pool3.jpg",
  },
  {
    id: 10,
    category: "Completed Projects",
    title: "Luxury Pool Project",
    location: "Waterkloof",
    image: "/images/pool6.jpg",
  },
  {
    id: 11,
    category: "Decking & Features",
    title: "Premium Pool Decking",
    location: "Lynnwood",
    image: "/images/decking.jpg",
  },
  {
    id: 12,
    category: "Completed Projects",
    title: "Stunning Pool Feature",
    location: "Garsfontein",
    image: "/images/anotherone.jpg",
  },
]

const categories = ["All", "New Installations", "Completed Projects", "Decking & Features"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredItems[newIndex].id)
  }

  const selectedItem = selectedImage ? galleryItems.find((item) => item.id === selectedImage) : null

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-cyan-600 border-cyan-600">
            Our Portfolio
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Stunning Pool Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects across Pretoria and surrounding areas. Each pool tells a unique
            story of craftsmanship and attention to detail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "gradient-blue text-white"
                  : "hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-600"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16" layout>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
              onClick={() => openLightbox(item.id)}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge variant="secondary" className="mb-2 text-xs bg-white/20 backdrop-blur-sm text-white border-none">
                    {item.category}
                  </Badge>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Project Showcase */}
        <motion.div
          className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Featured Project Spotlight</h3>
              <p className="text-cyan-100 mb-6 leading-relaxed">
                This stunning modern pool installation showcases our commitment to excellence and attention to detail. 
                From initial design to final completion, we transformed this backyard into a luxury oasis.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold">8 weeks</div>
                  <div className="text-cyan-200 text-sm">Project Duration</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Premium</div>
                  <div className="text-cyan-200 text-sm">Materials Used</div>
                </div>
              </div>
              <Button variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100">
                View Full Case Study
              </Button>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/images/real-pool-hero.jpg"
                  alt="Featured Pool Project"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lightbox */}
        {selectedImage && selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <Badge variant="secondary" className="mb-2">
                  {selectedItem.category}
                </Badge>
                <h3 className="text-xl font-bold mb-1">{selectedItem.title}</h3>
                <p className="opacity-90">{selectedItem.location}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your Own Masterpiece?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your vision and create a custom pool design that perfectly complements your lifestyle and
            property.
          </p>
          <Button size="lg" className="gradient-blue text-white hover:opacity-90">
            Start Your Project Today
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
