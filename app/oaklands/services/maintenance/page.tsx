"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone, Mail, Hammer, Wrench, Settings, Zap } from "lucide-react"

export default function MaintenancePage() {
  const features = [
    "24/7 emergency repair response service",
    "Preventive maintenance scheduling and programs",
    "Building compliance updates and inspections",
    "Professional repairs with quality warranties",
    "Ongoing maintenance contracts available",
    "Modern upgrade and improvement services"
  ]

  const serviceTypes = [
    {
      title: "Emergency Repairs",
      description: "Rapid response for urgent building repairs and emergency maintenance",
      image: "/construction4.jpeg",
      services: ["Roof leak repairs", "Structural emergency fixes", "Electrical emergency work", "Plumbing emergency repairs"],
      icon: Zap
    },
    {
      title: "Preventive Maintenance", 
      description: "Scheduled maintenance programs to prevent costly repairs and extend building life",
      image: "/building.jpeg",
      services: ["Annual building inspections", "HVAC system maintenance", "Roof maintenance", "Exterior maintenance"],
      icon: Settings
    },
    {
      title: "Building Upgrades",
      description: "Modern improvements and compliance updates for existing buildings",
      image: "/building8.jpeg",
      services: ["Accessibility improvements", "Energy efficiency upgrades", "Safety system updates", "Modern technology integration"],
      icon: Wrench
    }
  ]

  const benefits = [
    { title: "Cost Savings", description: "Preventive maintenance costs less than emergency repairs" },
    { title: "Extended Building Life", description: "Regular maintenance significantly extends building lifespan" },
    { title: "Safety Compliance", description: "Stay compliant with current building codes and safety standards" },
    { title: "Property Value", description: "Well-maintained buildings retain and increase their value" }
  ]

  const maintenanceAreas = [
    "Structural components and foundations",
    "Roofing systems and waterproofing",
    "Electrical systems and safety equipment",
    "Plumbing and drainage systems",
    "HVAC and ventilation systems",
    "Exterior walls and building envelope",
    "Flooring and interior finishes",
    "Safety and security systems"
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-orange-900 via-orange-800 to-red-800">
        <div className="absolute inset-0">
          <Image
            src="/survey.jpeg"
            alt="Building Maintenance"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Professional Maintenance Services
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Building
            <span className="block text-orange-300">Maintenance</span>
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive building maintenance services including emergency repairs, preventive maintenance, 
            and modern upgrades for residential and commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              24/7 Emergency Service
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-900">
              Schedule Maintenance
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Regular Building Maintenance Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proactive building maintenance protects your investment, ensures safety, 
              and prevents costly emergency repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Hammer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
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
              Our Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive building maintenance solutions designed to keep your property in optimal condition.
            </p>
          </div>

          <div className="space-y-16">
            {serviceTypes.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                    Request Service
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

      {/* Maintenance Areas */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                What We Maintain
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our comprehensive maintenance services cover every aspect of your building, 
                ensuring optimal performance and longevity.
              </p>
              <div className="space-y-4">
                {maintenanceAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Image
                src="/building8.jpeg"
                alt="Building Maintenance"
                width={600}
                height={300}
                className="rounded-2xl shadow-xl"
              />
              <Image
                src="/building.jpeg"
                alt="Maintenance Work"
                width={600}
                height={300}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Maintenance Services
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/building2.jpeg"
                alt="Professional Maintenance"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Keep Your Building in Perfect Condition
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Don't wait for problems to become expensive repairs. Schedule regular maintenance 
            or get immediate help with our 24/7 emergency service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: (084) 657 8338
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Maintenance
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
