"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Target, Eye, Users, Lightbulb, Shield, Globe, Rocket } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing the boundaries of UAV technology through creative problem-solving and cutting-edge research",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building a diverse community where every member contributes to our collective success",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Prioritizing safety in all our operations, from design to deployment",
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Creating solutions that make a positive difference in the world",
    },
  ]

  const achievements = [
    "National UAV Racing Champions 2023",
    "Innovation in Aerospace Award Winner",
    "50+ Active Members Across 4 Specialized Teams",
    "25+ Successful Projects Completed",
    "5 Lives Saved Through Search & Rescue Operations",
    "Published Research in Autonomous Systems",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-sky-200 max-w-3xl mx-auto">
              Discover the passion, innovation, and dedication that drives our UAV Club forward
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                  </div>
                  <p className="text-sky-200 text-lg leading-relaxed">
                    To advance the field of unmanned aerial vehicles through innovative research, collaborative
                    development, and practical applications that benefit society. We strive to create a community where
                    students and professionals can explore, learn, and push the boundaries of what's possible with UAV
                    technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                  </div>
                  <p className="text-sky-200 text-lg leading-relaxed">
                    To be the leading student organization in UAV innovation, recognized globally for our contributions
                    to autonomous systems, safety protocols, and real-world applications. We envision a future where our
                    technologies help solve critical challenges in search and rescue, environmental monitoring, and
                    beyond.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              Our Story
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-sky-300/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-sky-200 text-lg leading-relaxed mb-6">
                    Founded in 2021 by a group of 12 passionate engineering students, the UAV Club began as a small
                    workshop in a garage. What started as weekend experiments with basic quadcopters has evolved into a
                    sophisticated research and development organization.
                  </p>
                  <p className="text-sky-200 text-lg leading-relaxed mb-6">
                    Our breakthrough came in 2022 when our search and rescue drone successfully located missing hikers,
                    leading to our first partnership with emergency services. This real-world impact validated our
                    mission and attracted talented individuals from diverse backgrounds.
                  </p>
                  <p className="text-sky-200 text-lg leading-relaxed">
                    Today, we're proud to be a 50+ member organization with specialized teams in design, software,
                    electronics, and competition. Our projects have saved lives, won national competitions, and
                    contributed to the advancement of UAV technology.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="UAV Club team working on drone"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 to-transparent rounded-lg"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-sky-200">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Key Achievements
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-sky-300/20"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sky-200">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Soar with Us?</h2>
            <p className="text-xl text-sky-200 mb-8">
              Whether you're a student, professional, or simply passionate about UAV technology, there's a place for you
              in our community. Join us in shaping the future of flight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                Join Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-sky-900 bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}