"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Waves, Home, Fish, CheckCircle, ArrowRight, Droplets, Settings, Sparkles } from "lucide-react"

const services = [
  {
    icon: Waves,
    title: "New Pool Installations",
    description:
      "Custom-designed swimming pools built to your exact specifications with premium materials and expert craftsmanship.",
    features: [
      "Custom design consultation",
      "Premium materials & equipment",
      "Professional excavation",
      "Quality filtration systems",
      "Lighting & automation",
      "Landscaping integration",
    ],
    image: "/images/pool-construction.jpg",
  },
  {
    icon: Droplets,
    title: "Pool Maintenance",
    description:
      "Comprehensive monthly maintenance service at R1000 per month. We visit 4 times monthly with our own chemicals.",
    features: [
      "4 visits per month",
      "Chemical balancing included",
      "Equipment inspection",
      "Cleaning & skimming",
      "Filter maintenance",
      "Problem diagnosis",
    ],
    image: "/images/cool-pool.jpg",
  },
  {
    icon: Settings,
    title: "Pool Renovations",
    description:
      "Transform your existing pool with modern upgrades, repairs, and complete makeovers to enhance functionality and aesthetics.",
    features: [
      "Surface refinishing",
      "Equipment upgrades",
      "Tile & coping replacement",
      "Lighting modernization",
      "Automation systems",
      "Energy-efficient solutions",
    ],
    image: "/images/pool1.jpg",
  },
  {
    icon: Home,
    title: "Lapas & Outdoor Structures",
    description:
      "Beautiful outdoor entertainment areas including lapas, gazebos, and poolside structures to complete your backyard oasis.",
    features: [
      "Custom lapa designs",
      "Thatched & modern roofing",
      "Built-in braai areas",
      "Outdoor kitchens",
      "Pergolas & gazebos",
      "Poolside bars",
    ],
    image: "/images/decking.jpg",
  },
  {
    icon: Fish,
    title: "Fish Ponds & Water Features",
    description:
      "Serene koi ponds, decorative water features, and aquatic landscapes that add tranquility to your outdoor space.",
    features: [
      "Koi pond construction",
      "Filtration systems",
      "Waterfall features",
      "Aquatic plant integration",
      "Pond maintenance",
      "Fish care consultation",
    ],
    image: "/images/pool3.jpg",
  },
  {
    icon: Sparkles,
    title: "Premium Add-ons",
    description:
      "Enhance your pool experience with luxury features including heating, automation, and advanced water treatment systems.",
    features: [
      "Pool heating systems",
      "Smart automation",
      "LED lighting packages",
      "Water treatment upgrades",
      "Safety covers",
      "Pool decking",
    ],
    image: "/images/pool6.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial design to ongoing maintenance, we provide comprehensive pool services that exceed expectations
            and create lasting value for your property.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Service Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full mt-4 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-all duration-300 bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Pool Project?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and personalized quote. Let's bring your dream pool to life!
          </p>
          <Button size="lg" className="gradient-blue text-white hover:opacity-90">
            Get Your Free Quote Today
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
