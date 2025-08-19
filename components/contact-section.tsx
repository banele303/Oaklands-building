"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, Send, MessageCircle, Calendar, Star } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "076 688 5958",
    action: "Call Now",
    available: "Mon-Fri 7AM-6PM, Sat 8AM-4PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your project details",
    contact: "info@zulupoolsbuilders.co.za",
    action: "Send Email",
    available: "24/7 Response within 2 hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick chat and photo sharing",
    contact: "076 688 5958",
    action: "WhatsApp",
    available: "Instant messaging available",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/cool-pool2.jpg')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-cyan-50/95" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-cyan-600 border-cyan-600">
            Get In Touch
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Pool Project?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and personalized quote. We're here to answer your questions and
            bring your pool dreams to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Send className="mr-3 w-6 h-6 text-cyan-600" />
                  Get Your Free Quote
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <Input placeholder="John" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <Input placeholder="Smith" className="w-full" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input type="email" placeholder="john@example.com" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="076 123 4567" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Area</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option value="">Select your area</option>
                    <option value="akasia">Akasia</option>
                    <option value="montana">Montana</option>
                    <option value="annlin">Annlin</option>
                    <option value="pretoria-north">Pretoria North</option>
                    <option value="pretoria-east">Pretoria East</option>
                    <option value="centurion">Centurion</option>
                    <option value="other">Other (please specify in message)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="new-installation">New Pool Installation</option>
                    <option value="maintenance">Pool Maintenance</option>
                    <option value="renovation">Pool Renovation</option>
                    <option value="lapa">Lapa Construction</option>
                    <option value="fish-pond">Fish Pond</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <Textarea
                    placeholder="Tell us about your project, timeline, budget range, and any specific requirements..."
                    className="w-full h-32 resize-none"
                  />
                </div>

                <Button className="w-full gradient-blue text-white hover:opacity-90 py-3">
                  <Send className="mr-2 w-5 h-5" />
                  Send My Request
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information with
                  third parties.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full">
                          <method.icon className="w-6 h-6 text-cyan-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                          <p className="font-medium text-gray-900 mb-2">{method.contact}</p>
                          <p className="text-xs text-gray-500 mb-3">{method.available}</p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-600 bg-transparent"
                          >
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="mr-2 w-5 h-5 text-cyan-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-medium text-gray-900">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-medium text-gray-900">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-medium text-gray-900">Emergency Only</span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <strong>Emergency Services:</strong> Available 24/7 for urgent pool issues
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Guarantee */}
            <Card className="shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full w-fit">
                  <Star className="w-8 h-8 text-yellow-500 fill-current" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Our Service Promise</h3>
                <p className="text-gray-700 text-sm mb-4">
                  We guarantee a response within 24 hours and provide detailed, transparent quotes with no hidden fees.
                </p>
                <div className="flex justify-center space-x-4 text-xs text-gray-600">
                  <span>✓ Free Consultations</span>
                  <span>✓ Detailed Quotes</span>
                  <span>✓ No Hidden Fees</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Action */}
            <Card className="shadow-lg gradient-blue text-white">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Need Immediate Assistance?</h3>
                <p className="text-cyan-100 text-sm mb-4">
                  Call us now for urgent pool issues or to schedule a same-day consultation.
                </p>
                <Button variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100">
                  <Phone className="mr-2 w-4 h-4" />
                  Call 076 688 5958
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
