"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Award, Clock, Users, Zap, Star } from "lucide-react"
import { features } from "./content"

const featureIcons = [
  CheckCircle, // Registered & Compliant
  Users,       // KZN-wide Coverage
  Award,       // Multi-storey Expertise
  Star,        // Transparent Pricing
  Clock,       // On-time Delivery
  Shield,      // Quality Assured
]

export function OaklandsFeatures() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built on
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Trust & Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart as KZN's leading construction company. 
            Our commitment to quality, compliance, and customer satisfaction drives everything we do.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = featureIcons[index] || CheckCircle
            return (
              <Card key={feature.title} className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">
                      Key Feature
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.body}
                  </p>

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-3xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100 font-medium">Safety Compliance</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
