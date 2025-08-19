"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone, Mail, Building, Users, Shield, Award } from "lucide-react"

export default function MultiStoreyPage() {
  const features = [
    "Advanced structural engineering and design expertise",
    "Comprehensive safety compliance and regulations adherence",
    "Specialized equipment and construction methodologies",
    "Experienced project coordination and management teams",
    "Quality control systems for complex construction phases",
    "Risk management and insurance coverage for high-rise projects"
  ]

  const projectTypes = [
    {
      title: "Residential Apartments",
      description: "Multi-storey apartment complexes and condominium developments",
      image: "/construction2.jpeg",
      specs: ["2-6 story buildings", "Multiple unit configurations", "Shared amenities", "Parking solutions"]
    },
    {
      title: "Commercial High-Rise", 
      description: "Office buildings, mixed-use developments, and commercial towers",
      image: "/construction3.jpeg",
      specs: ["Office complexes", "Retail & commercial", "Mixed-use developments", "Corporate headquarters"]
    },
    {
      title: "Industrial Multi-Level",
      description: "Multi-storey warehouses, manufacturing facilities, and logistics centers",
      image: "/building5.jpeg",
      specs: ["Multi-level warehouses", "Manufacturing facilities", "Distribution centers", "Logistics hubs"]
    }
  ]

  const capabilities = [
    { icon: Building, title: "Structural Expertise", description: "Advanced engineering for complex multi-storey structures" },
    { icon: Users, title: "Specialized Teams", description: "Experienced crews trained in high-rise construction methods" },
    { icon: Shield, title: "Safety First", description: "Comprehensive safety protocols for elevated construction work" },
    { icon: Award, title: "Quality Assurance", description: "Rigorous quality control at every construction phase" }
  ]

  const challenges = [
    "Foundation design for multi-storey loads",
    "Structural steel and concrete framework",
    "Elevator and mechanical systems integration",
    "Fire safety and emergency egress planning",
    "Building envelope and weatherproofing",
    "Crane operations and logistics coordination"
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-800">
        <div className="absolute inset-0">
          <Image
            src="/plan.jpeg"
            alt="Multi-Storey Projects"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Complex Construction Specialists
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Multi-Storey
            <span className="block text-purple-300">Projects</span>
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert construction of complex multi-level residential, commercial, and industrial buildings. 
            Advanced engineering and safety compliance for high-rise construction challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Discuss Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
              View High-Rise Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Multi-Storey Construction Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise in multi-storey construction ensures your complex project 
              is completed safely, efficiently, and to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Types of Multi-Storey Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all types of multi-storey construction, from residential apartments to commercial high-rises.
            </p>
          </div>

          <div className="space-y-16">
            {projectTypes.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{project.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {project.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Image
                    src={project.image}
                    alt={project.title}
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

      {/* Features & Challenges */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Our Expertise */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Multi-Storey Expertise
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complex Challenges We Handle */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Complex Challenges We Handle
              </h2>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Building className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">Multi-Storey Project Statistics</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100">Multi-Storey Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20</div>
              <div className="text-purple-100">Max Floors Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Safety Record</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-purple-100">Years Experience</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">
            Ready for Your Multi-Storey Project?
          </h3>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Complex multi-storey construction requires specialized expertise. 
            Let our experienced team handle your high-rise project with precision and safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call (084) 657 8338
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
