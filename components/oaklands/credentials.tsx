'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Shield, FileCheck } from "lucide-react"

const credentials = [
  {
    icon: CheckCircle,
    title: "Fully Registered Contractor",
    description: "Registered with all relevant construction industry bodies and authorities",
    status: "Verified"
  },
  {
    icon: Shield,
    title: "Safety Compliance",
    description: "Adherence to all occupational health and safety standards and regulations",
    status: "Certified"
  },
  {
    icon: FileCheck,
    title: "Building Standards",
    description: "Compliance with National Building Regulations and SANS standards",
    status: "Compliant"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Recognized expertise in multi-storey and complex construction projects",
    status: "Proven"
  }
]

const certifications = [
  "Construction Industry Development Board (CIDB) Registration",
  "National Home Builders Registration Council (NHBRC)",
  "Occupational Health & Safety Act Compliance",
  "Professional Indemnity Insurance",
  "Public Liability Insurance",
  "Workmen's Compensation Coverage"
]

export default function Credentials() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Credentials & Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a fully registered and compliant construction company, we maintain the highest standards 
            of professionalism, safety, and quality in all our projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((credential, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <credential.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {credential.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-3">
                  {credential.description}
                </p>
                <Badge 
                  variant="secondary" 
                  className="bg-green-100 text-green-800 hover:bg-green-200"
                >
                  {credential.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 text-center">
              Professional Certifications & Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            All certifications and registrations are current and regularly updated to ensure ongoing compliance.
          </p>
        </div>
      </div>
    </section>
  )
}
