"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Home, Settings, Hammer } from "lucide-react"

const services = [
  {
    title: "New Builds & Developments",
    description: "Complete turnkey construction from foundations to handover. Residential homes, commercial buildings, and multi-storey developments.",
    image: "/drawing2.jpeg",
    href: "/oaklands/services/new-builds",
    icon: Building,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Additions & Alterations",
    description: "Home extensions, structural modifications, and complete renovations. From single rooms to whole-house transformations.",
    image: "/drawing3.jpeg",
    href: "/oaklands/services/additions-alterations",
    icon: Home,
    color: "from-green-600 to-teal-600"
  },
  {
    title: "Multi-Storey Projects",
    description: "Complex multi-level residential and commercial buildings. Experienced in high-rise construction and structural challenges.",
    image: "/plan.jpeg",
    href: "/oaklands/services/multi-storey",
    icon: Building,
    color: "from-purple-600 to-indigo-600"
  },
  {
    title: "Building Maintenance",
    description: "Ongoing maintenance, repairs, and upgrades for residential and commercial properties with 24/7 emergency service.",
    image: "/survey.jpeg",
    href: "/oaklands/services/maintenance",
    icon: Settings,
    color: "from-orange-600 to-red-600"
  }
]

export default function OaklandsServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0">
          <Image
            src="/construction.jpeg"
            alt="Our Services"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Professional Construction Services
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our
            <span className="block text-cyan-300">Services</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction services across KZN and neighboring provinces. 
            From new builds to maintenance, we deliver exceptional results with integrity and craftsmanship.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of construction services designed to meet 
              all your building needs with professional expertise and reliable execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  >
                    <Link href={service.href}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Oaklands Building
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Registered & Compliant</h3>
                    <p className="text-gray-600">All necessary registrations and compliance certifications for professional construction work.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">KZN-Wide Coverage</h3>
                    <p className="text-gray-600">Serving all of KZN and neighboring provinces with local expertise and regional reach.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hammer className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Workmanship</h3>
                    <p className="text-gray-600">Experienced, reliable team delivering honest workmanship on every project.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/construction2.jpeg"
                alt="Quality Construction"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            No matter the size or complexity of your construction project, 
            our experienced team is ready to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Our Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
