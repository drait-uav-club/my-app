"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plane, Users, Trophy, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-sky-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-32 h-32 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src="/club-logo.jpg"  // make sure this is inside your /public folder
                    alt="UAV club logo featuring a stylized drone in flight, set against a circular background with blue gradients. The logo conveys innovation and teamwork, surrounded by a vibrant, energetic atmosphere. No visible text."
                    className="w-full h-full object-cover"
                  />
                </motion.div>


             <img
              src="/drait-logo.png"
              alt="DRAIT Logo"
              width={128}
              height={128}
              className="fixed top-16 left-4 w-16 h-16 object-contain z-50"
              />

            </div>
            <h3 className="text-6xl md:text-6xl  text-white mb-4 ">DR AIT </h3>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">UAV CLUB</h1>
            <p className="text-xl md:text-2xl text-sky-200 mb-8 max-w-3xl mx-auto">
              Soaring Beyond Limits -  Where Innovation Meets the Sky
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
              <Link href="/projects">
                Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-sky-900 bg-transparent"
            >
              <Link href="/team">Join Our Team</Link>
            </Button>
          </motion.div>
        </div>

        {/* Floating animation */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-sky-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sky-300 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "50+", label: "Active Members" },
              { icon: Plane, number: "25+", label: "UAV Projects" },
              { icon: Trophy, number: "15+", label: "Competitions Won" },
              { icon: Calendar, number: "3+", label: "Years Active" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-sky-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              Discover our latest innovations in unmanned aerial vehicle technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Autonomous Surveillance Drone",
                description: "AI-powered surveillance system with real-time object detection",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Racing Quadcopter",
                description: "High-speed racing drone with advanced flight controls",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Delivery UAV System",
                description: "Automated package delivery system for urban environments",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-sky-300/20"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sky-200 mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-sky-900 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}