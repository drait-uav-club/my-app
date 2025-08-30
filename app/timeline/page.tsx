"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Users, Rocket, Award, Star, Target, Zap } from "lucide-react"

export default function TimelinePage() {
  const timelineEvents = [
    {
      year: "2025",
      title: "Advanced AI Integration",
      description: "Launched our most sophisticated autonomous navigation system with machine learning capabilities",
      type: "milestone",
      icon: Rocket,
      achievements: ["AI-powered obstacle avoidance", "Real-time path optimization", "Predictive maintenance system"],
      status: "current",
    },
    {
      year: "2025",
      title: "payload delivery",
      description: "Launched our most sophisticated autonomous navigation system with machine learning capabilities",
      type: "milestone",
      icon: Rocket,
      achievements: ["AI-powered obstacle avoidance", "Real-time path optimization", "Predictive maintenance system"],
      status: "current",
    },
    {
      year: "2024",
      title: "modular fixed wing uav",
      description: "Won first place at the National UAV Racing Championship with our custom-built racing drone",
      type: "achievement",
      icon: Trophy,
      achievements: ["1st Place - National Championship", "$25,000 prize money", "Featured in Tech Weekly"],
      status: "completed",
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Grew our team to 50+ active members across multiple specialized divisions",
      type: "milestone",
      icon: Users,
      achievements: ["50+ active members", "4 specialized teams", "New leadership structure"],
      status: "completed",
    },
    {
      year: "2022",
      title: "Innovation Award",
      description: "Received the Innovation in Aerospace Award for our search and rescue drone system",
      type: "achievement",
      icon: Award,
      achievements: ["Innovation Award Winner", "Patent application filed", "Industry recognition"],
      status: "completed",
    },
    {
      year: "2022",
      title: "First Commercial Partnership",
      description: "Established partnership with local emergency services for search and rescue operations",
      type: "milestone",
      icon: Target,
      achievements: ["Emergency services partnership", "5 successful rescue missions", "Media coverage"],
      status: "completed",
    },
    {
      year: "2021",
      title: "Competition Debut",
      description: "Made our first appearance in competitive UAV racing, placing 3rd in regional championships",
      type: "achievement",
      icon: Star,
      achievements: ["3rd Place - Regional Championship", "Best newcomer award", "Team recognition"],
      status: "completed",
    },
    {
      year: "2021",
      title: "UAV Club Founded",
      description: "Official establishment of the UAV Club with 12 founding members and our first workshop",
      type: "milestone",
      icon: Zap,
      achievements: ["Club officially founded", "12 founding members", "First workshop established"],
      status: "completed",
    },
  ]

  const upcomingEvents = [
    {
      date: "September 2025",
      title: "NIDAR",
      description: "Showcasing our latest autonomous systems at the world's largest UAV exhibition",
    },
    {
      date: "November 2025",
      title: "AEROTHON",
      description: "Hosting our first inter-university UAV competition with 20+ participating teams",
    },
    {
      date: "December 2025",
      title: "Research Publication",
      description: "Publishing our research on swarm intelligence in the Journal of Autonomous Systems",
    },
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
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Timeline</h1>
            <p className="text-xl text-sky-200 max-w-3xl mx-auto">
              Our journey from a small group of enthusiasts to a leading UAV innovation team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-600"></div>

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full border-4 border-sky-900 z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                            <event.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <Badge className={`${event.type === "achievement" ? "bg-yellow-500" : "bg-sky-500"}`}>
                              {event.type === "achievement" ? "Achievement" : "Milestone"}
                            </Badge>
                            <p className="text-sky-300 text-sm mt-1">{event.year}</p>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                        <p className="text-sky-200 mb-4">{event.description}</p>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-sky-300">Key Highlights:</h4>
                          {event.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-sky-400 rounded-full"></div>
                              <span className="text-sky-200 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Year badge for larger screens */}
                  <div className={`hidden md:block w-2/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="text-2xl font-bold text-sky-300">{event.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Upcoming Events
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white h-full">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Badge className="mb-4 bg-green-500">{event.date}</Badge>
                      <h3 className="text-lg font-bold text-white mb-3">{event.title}</h3>
                      <p className="text-sky-200">{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Our Journey in Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "3+", label: "Years Active", description: "Since 2021" },
              { number: "50+", label: "Team Members", description: "And growing" },
              { number: "25+", label: "Projects Completed", description: "Innovation driven" },
              { number: "15+", label: "Awards Won", description: "Recognition earned" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sky-300 font-semibold mb-1">{stat.label}</div>
                <div className="text-sky-200 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}