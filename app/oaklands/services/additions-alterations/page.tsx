"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone, Mail, Home, PlusCircle, Wrench } from "lucide-react"

export default function AdditionsAlterationsPage() {
  const features = [
    "Structural engineering assessments and modifications",
    "Planning applications and building permit management",
    "Minimal disruption construction methods",
    "Quality finishes matching existing architecture",
    "Timeline coordination with your daily routine",
    "Budget-conscious approach with transparent pricing"
  ]

  const serviceTypes = [
    {
      title: "Home Extensions",
      description: "Add bedrooms, bathrooms, kitchens, or living spaces to your existing home",
      image: "/building2.jpeg",
      services: ["Room additions", "Second story additions", "Kitchen extensions", "Garage conversions"]
    },
    {
      title: "Structural Modifications", 
      description: "Wall removals, beam installations, and structural changes to open up spaces",
      image: "/construction2.jpeg",
      services: ["Load-bearing wall removal", "Beam installations", "Floor plan modifications", "Ceiling height changes"]
    },
    {
      title: "Complete Renovations",
      description: "Whole-house transformations including layout changes and modern updates",
      image: "/construction3.jpeg",
      services: ["Full house renovations", "Bathroom renovations", "Kitchen remodels", "Flooring upgrades"]
    }
  ]

  const benefits = [
    { icon: Home, title: "Increase Property Value", description: "Quality additions can significantly boost your home's market value" },
    { icon: PlusCircle, title: "More Living Space", description: "Expand your home to meet your growing family's needs" },
    { icon: Wrench, title: "Modern Updates", description: "Bring older homes up to modern standards and efficiency" }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-teal-800">
        <div className="absolute inset-0">
          <Image
            src="/drawing2.jpeg"
            alt="Additions & Alterations"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Home Improvement Specialists
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Additions &
            <span className="block text-teal-300">Alterations</span>
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your existing space with professional home extensions, structural modifications, 
            and complete renovations. From single rooms to whole-house transformations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
              View Before & After
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Home Additions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Home additions and alterations offer a cost-effective alternative to moving, 
              allowing you to create the perfect space for your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Addition & Alteration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive home improvement services designed to maximize your space and enhance your lifestyle.
            </p>
          </div>

          <div className="space-y-16">
            {serviceTypes.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Our Addition & Alteration Approach
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/drawing3.jpeg"
                alt="Home Addition Process"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Get a free consultation and assessment for your home addition or alteration project. 
            Our team will help you design the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call (084) 657 8338
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
