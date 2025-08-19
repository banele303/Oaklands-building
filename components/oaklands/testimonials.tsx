'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight } from "lucide-react"
import { testimonials } from "./content"

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with Oaklands Building. 
            Their success stories reflect our commitment to quality and excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-600 opacity-20" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Verified Client
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Clients</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience the same level of professionalism, quality, and reliability that has earned us 
              these glowing testimonials. Let's discuss your construction project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                Get Your Quote Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
