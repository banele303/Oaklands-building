"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, Award } from "lucide-react"

export default function NewBuildsPage() {
  const features = [
    "Complete project management from concept to completion",
    "Quality materials sourcing and workmanship standards",
    "Full building regulations compliance and approvals",
    "Transparent cost control and regular progress updates",
    "Structural engineering and architectural design support",
    "Environmental impact assessments and sustainability features"
  ]

  const projectTypes = [
    {
      title: "Residential Homes",
      description: "Custom-built family homes with modern design and energy efficiency",
      image: "/building.jpeg"
    },
    {
      title: "Commercial Buildings", 
      description: "Office buildings, retail spaces, and mixed-use developments",
      image: "/building2.jpeg"
    },
    {
      title: "Multi-Storey Developments",
      description: "Apartment complexes, condominiums, and high-rise buildings",
      image: "/construction.jpeg"
    }
  ]

  const process = [
    { step: 1, title: "Initial Consultation", description: "Discuss your vision, requirements, and budget" },
    { step: 2, title: "Design & Planning", description: "Architectural design, engineering, and permit applications" },
    { step: 3, title: "Construction Phase", description: "Professional building with quality control and updates" },
    { step: 4, title: "Final Handover", description: "Completion inspection, documentation, and key handover" }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800">
        <div className="absolute inset-0">
          <Image
            src="/building4.jpeg"
            alt="New Builds & Developments"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Turnkey Construction Services
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            New Builds & 
            <span className="block text-cyan-300">Developments</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete turnkey construction from foundations to handover. We specialize in residential homes, 
            commercial buildings, and multi-storey developments across KZN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              View Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures your new build project is completed to the highest standards, 
              on time, and within budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Our New Build Services</h3>
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
                src="/building5.jpeg"
                alt="Construction Process"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Types of New Build Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all types of new construction projects, from single-family homes to large commercial developments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our New Build Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step process that ensures your project is delivered on time, within budget, and to your exact specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your New Build Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get a free consultation and detailed quote for your construction project. 
            Our expert team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call (084) 657 8338
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
