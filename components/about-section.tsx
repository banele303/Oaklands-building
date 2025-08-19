"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Shield, Star, CheckCircle2, Heart, Target, Zap } from "lucide-react"

const stats = [
  { icon: Users, number: "500+", label: "Happy Clients" },
  { icon: Award, number: "10+", label: "Years Experience" },
  { icon: Clock, number: "24/7", label: "Support Available" },
  { icon: Shield, number: "100%", label: "Insured & Licensed" },
]

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description:
      "We're passionate about creating exceptional pools that exceed expectations and bring families together.",
  },
  {
    icon: Target,
    title: "Precision & Quality",
    description: "Every project is executed with meticulous attention to detail and the highest quality materials.",
  },
  {
    icon: Zap,
    title: "Innovation & Technology",
    description: "We stay ahead of industry trends, incorporating the latest technology and sustainable practices.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-cyan-600 border-cyan-600">
            About Zulu Pool's Builder
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Dreams, Creating Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, Zulu Pool's Builder has been the trusted name in premium pool construction and
            maintenance across Pretoria and surrounding areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Your Trusted Pool Specialists</h3>

            <div className="space-y-6 mb-8">
              <p className="text-gray-600 leading-relaxed">
                At Zulu Pool's Builder, we understand that a swimming pool is more than just a water feature – it's the
                centerpiece of your outdoor lifestyle, a place where memories are made and families come together to
                relax and enjoy life.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our team of experienced professionals combines traditional craftsmanship with modern technology to
                deliver pools that are not only beautiful but also built to last. From the initial design consultation
                to ongoing maintenance, we're committed to providing exceptional service at every step.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Fully licensed and insured for your peace of mind",
                "Custom designs tailored to your space and lifestyle",
                "Premium materials and equipment from trusted suppliers",
                "Comprehensive warranty on all workmanship",
                "Ongoing support and maintenance services",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/pool-building2.jpg"
                alt="Zulu Pool's Builder team at work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Star className="w-6 h-6 text-yellow-600 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5.0</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full w-fit">
                <stat.icon className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and ensure every client receives the exceptional service they
            deserve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full w-fit">
                    <value.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
