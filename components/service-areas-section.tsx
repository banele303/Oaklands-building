"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react"

const serviceAreas = [
  {
    name: "Akasia",
    description: "Comprehensive pool services in Akasia and surrounding neighborhoods",
    features: ["New Installations", "Maintenance", "Renovations"],
    travelTime: "15 min",
    projects: "50+",
  },
  {
    name: "Montana",
    description: "Premium pool construction and maintenance services in Montana",
    features: ["Pool Construction", "Lapa Building", "Fish Ponds"],
    travelTime: "20 min",
    projects: "75+",
  },
  {
    name: "Annlin",
    description: "Expert pool services for Annlin residents and businesses",
    features: ["Renovations", "Maintenance", "Repairs"],
    travelTime: "25 min",
    projects: "40+",
  },
  {
    name: "Pretoria North",
    description: "Full-service pool solutions for Pretoria North communities",
    features: ["Custom Pools", "Automation", "Landscaping"],
    travelTime: "18 min",
    projects: "100+",
  },
  {
    name: "Pretoria East",
    description: "Luxury pool installations and services in Pretoria East",
    features: ["Infinity Pools", "Smart Systems", "Premium Features"],
    travelTime: "22 min",
    projects: "80+",
  },
  {
    name: "Centurion",
    description: "Complete pool services for Centurion's upmarket areas",
    features: ["Resort-Style Pools", "Outdoor Entertainment", "Water Features"],
    travelTime: "30 min",
    projects: "120+",
  },
]

export function ServiceAreasSection() {
  return (
    <section id="areas" className="py-20 bg-white">
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
            Service Coverage
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Areas We Proudly Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive pool services across Pretoria and surrounding areas, bringing our expertise
            directly to your doorstep with reliable, professional service.
          </p>
        </motion.div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                      {area.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{area.travelTime}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-cyan-600" />
                      <span className="text-sm font-medium text-gray-700">{area.projects} Projects</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Active Area
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coverage Map Placeholder */}
        <motion.div
          className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Coverage Across Greater Pretoria</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strategically located team ensures quick response times and efficient service delivery across all our
              service areas.
            </p>
          </div>

          <div className="relative bg-white rounded-xl p-8 shadow-lg">
            <img
              src="/placeholder.svg?height=300&width=800"
              alt="Service Areas Map"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
                <MapPin className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Service Coverage Map</h4>
                <p className="text-sm text-gray-600">We serve all major areas across Greater Pretoria</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Guarantee */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full w-fit">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Same-Day Response</h4>
            <p className="text-gray-600 text-sm">Quick response to all service calls within our coverage areas</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full w-fit">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Local Expertise</h4>
            <p className="text-gray-600 text-sm">Deep knowledge of local conditions and requirements</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full w-fit">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Flexible Scheduling</h4>
            <p className="text-gray-600 text-sm">Convenient appointment times that work with your schedule</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Not Sure If We Service Your Area?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to confirm service availability in your location. We're always expanding our coverage to
            serve more communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-blue text-white hover:opacity-90">
              <Phone className="mr-2 w-5 h-5" />
              Call 076 688 5958
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent"
            >
              Check Service Area
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
