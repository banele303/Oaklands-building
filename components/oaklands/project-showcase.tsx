'use client'

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  MapPin, 
  Users, 
  Building2, 
  Star, 
  Clock, 
  Award,
  ArrowRight,
  Filter,
  Grid3X3,
  List,
  Eye,
  Zap
} from "lucide-react"

const portfolioProjects = [
  {
    title: "Durban North Residential Complex",
    category: "Multi-Storey Residential",
    location: "Durban North, KZN",
    year: "2023",
    duration: "14 months",
    budget: "R12.5M",
    description: "Luxurious 12-unit residential complex featuring modern architectural design, sustainable building practices, and premium amenities including rooftop gardens and underground parking.",
    image: "/contruction6.jpeg",
    details: ["3 floors", "12 residential units", "Underground parking", "Rooftop garden", "Solar panels", "Smart home systems"],
    client: "Durban Properties Ltd",
    rating: 5,
    featured: true
  },
  {
    title: "Umhlanga Commercial Center",
    category: "Commercial Development", 
    location: "Umhlanga, KZN",
    year: "2023",
    duration: "18 months",
    budget: "R18.2M",
    description: "State-of-the-art mixed-use commercial development combining retail spaces, office suites, and recreational facilities in the heart of Umhlanga's business district.",
    image: "/contruction7.jpeg",
    details: ["4 floors", "15 retail units", "Office spaces", "Parking facilities", "Conference center", "24/7 security"],
    client: "Umhlanga Developments",
    rating: 5,
    featured: true
  },
  {
    title: "Pinetown Industrial Warehouse",
    category: "Industrial Construction",
    location: "Pinetown, KZN", 
    year: "2022",
    duration: "10 months",
    budget: "R8.7M",
    description: "Cutting-edge warehouse facility designed for maximum efficiency with advanced logistics infrastructure, climate control, and modern loading systems.",
    image: "/contruction9.jpeg",
    details: ["5000m² floor area", "High bay storage", "Loading docks", "Office complex", "Climate control", "Security systems"],
    client: "LogiTech Industries",
    rating: 5,
    featured: false
  },
  {
    title: "Westville Family Home",
    category: "Residential New Build",
    location: "Westville, KZN",
    year: "2023", 
    duration: "8 months",
    budget: "R3.2M",
    description: "Contemporary family residence featuring open-plan design, energy-efficient systems, luxury finishes, and seamless indoor-outdoor living spaces.",
    image: "/contruction10.jpeg",
    details: ["4 bedrooms", "3 bathrooms", "Open plan living", "Sustainable features", "Pool & entertainment area", "Double garage"],
    client: "The Johnson Family",
    rating: 5,
    featured: false
  },
  {
    title: "Chatsworth School Extension",
    category: "Educational Facility",
    location: "Chatsworth, KZN",
    year: "2022",
    duration: "12 months", 
    budget: "R6.8M",
    description: "Modern educational facility expansion featuring contemporary classrooms, advanced technology integration, and improved accessibility for students and staff.",
    image: "/contruction11.jpeg",
    details: ["8 new classrooms", "Administration block", "Library extension", "Sports facilities", "Computer lab", "Accessibility features"],
    client: "Chatsworth Primary School",
    rating: 5,
    featured: false
  },
  {
    title: "Phoenix Shopping Center Renovation",
    category: "Commercial Renovation",
    location: "Phoenix, KZN",
    year: "2023",
    duration: "16 months",
    budget: "R9.5M", 
    description: "Complete transformation of existing shopping center with modern facade, improved accessibility, expanded retail spaces, and enhanced customer experience.",
    image: "/building4.jpeg",
    details: ["Facade upgrade", "Interior renovation", "Accessibility improvements", "New food court", "Parking expansion", "LED lighting"],
    client: "Phoenix Retail Group",
    rating: 5,
    featured: false
  },
  {
    title: "Verulam Office Park",
    category: "Commercial Development",
    location: "Verulam, KZN",
    year: "2022",
    duration: "20 months",
    budget: "R15.3M",
    description: "Premium office park development featuring Grade A office spaces, landscaped gardens, advanced security, and sustainable building technologies.",
    image: "/building5.jpeg",
    details: ["5 office buildings", "Grade A specifications", "Landscaped gardens", "Advanced security", "Fiber connectivity", "Backup power"],
    client: "Corporate Estates",
    rating: 5,
    featured: true
  },
  {
    title: "Hillcrest Luxury Apartments",
    category: "Multi-Storey Residential",
    location: "Hillcrest, KZN", 
    year: "2023",
    duration: "22 months",
    budget: "R28.7M",
    description: "Exclusive luxury apartment complex with panoramic views, premium finishes, resort-style amenities, and 24/7 concierge services.",
    image: "/building8.jpeg",
    details: ["6 floors", "24 luxury units", "Panoramic views", "Resort amenities", "Concierge services", "Private balconies"],
    client: "Hillcrest Luxury Living",
    rating: 5,
    featured: true
  },
  {
    title: "Durban South Industrial Complex",
    category: "Industrial Construction",
    location: "Durban South, KZN",
    year: "2022",
    duration: "15 months", 
    budget: "R22.1M",
    description: "Large-scale industrial complex with multiple warehouse units, administrative offices, and specialized manufacturing facilities for automotive industry.",
    image: "/construction3.jpeg",
    details: ["Multiple warehouse units", "Manufacturing facilities", "Administrative offices", "Automotive specialized", "Heavy-duty infrastructure", "Rail access"],
    client: "AutoTech Manufacturing",
    rating: 5,
    featured: false
  }
]

const categories = ["All Projects", "Multi-Storey Residential", "Commercial Development", "Industrial Construction", "Residential New Build", "Educational Facility", "Commercial Renovation"]

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All Projects")
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [showFeatured, setShowFeatured] = useState(false)

  const filteredProjects = portfolioProjects.filter(project => {
    const categoryMatch = activeCategory === "All Projects" || project.category === activeCategory
    const featuredMatch = !showFeatured || project.featured
    return categoryMatch && featuredMatch
  })

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Exceptional Projects
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Across KZN
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Discover our extensive portfolio of successful construction projects spanning residential, 
            commercial, and industrial developments. Each project represents our unwavering commitment 
            to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  size="sm"
                  className={`${
                    activeCategory === category 
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white" 
                      : "hover:bg-blue-50 hover:border-blue-300"
                  } transition-all duration-300 text-xs sm:text-sm`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFeatured(!showFeatured)}
                  className={`${showFeatured ? "bg-blue-50 border-blue-300" : ""} text-xs sm:text-sm`}
                >
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Featured Only
                </Button>
              </div>
              
              <div className="flex border rounded-lg p-1 bg-white">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                >
                  <Grid3X3 className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                >
                  <List className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Counter */}
          <div className="text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-blue-600">{filteredProjects.length}</span> projects
              {activeCategory !== "All Projects" && ` in ${activeCategory}`}
              {showFeatured && " (Featured)"}
            </p>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div className={`grid gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 ${
          viewMode === "grid" 
            ? "sm:grid-cols-1 lg:grid-cols-2" 
            : "grid-cols-1"
        }`}>
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className={`relative ${viewMode === "grid" ? "h-64 sm:h-80" : "h-48 sm:h-64 lg:h-48"} overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.year}
                  </Badge>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-8">
                {/* Project Info Row */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-blue-600" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-1 text-blue-600" />
                    <span>{project.budget}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-blue-600" />
                    <span>{project.client}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Project Details */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Rating & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">Client Rating</span>
                  </div>
                  
                  <Button variant="outline" className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-12 rounded-3xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Portfolio at a Glance</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our track record speaks for itself. Here's what we've accomplished across KZN and neighboring provinces.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-100 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">R500M+</div>
              <div className="text-blue-100 font-medium">Total Project Value</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-100 font-medium">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Join our growing list of satisfied clients. From initial consultation to final handover, 
              we're committed to delivering exceptional results that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="hover:bg-blue-50 hover:border-blue-300 font-semibold px-8 py-4"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
