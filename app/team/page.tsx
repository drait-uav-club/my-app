"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Linkedin, Github, Mail, Star, Award, Code, Wrench } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const leadership = [
    {
      name: "Alex Chen",
      role: "President",
      specialization: "Autonomous Systems",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading UAV innovation with 5+ years in autonomous flight systems",
      achievements: ["National Champion 2023", "AI Innovation Award"],
      skills: ["Machine Learning", "Flight Control", "Team Leadership"],
    },
    {
      name: "Sarah Johnson",
      role: "Vice President",
      specialization: "Aerodynamics",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in aerodynamic design and performance optimization",
      achievements: ["Best Design Award 2023", "Research Publication"],
      skills: ["CFD Analysis", "Design Optimization", "Project Management"],
    },
    {
      name: "Mike Rodriguez",
      role: "Technical Lead",
      specialization: "Electronics & Control",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specializing in flight control systems and embedded programming",
      achievements: ["Innovation in Controls 2022", "Patent Holder"],
      skills: ["Embedded Systems", "PCB Design", "Control Theory"],
    },
  ]

  const teams = [
    {
      name: "Design Team",
      icon: Wrench,
      members: 12,
      description: "Responsible for mechanical design, aerodynamics, and structural analysis",
      projects: ["Racing Drone Frame", "Delivery System Design", "Weather-Resistant Housing"],
    },
    {
      name: "Software Team",
      icon: Code,
      members: 15,
      description: "Develops flight control software, AI algorithms, and ground station applications",
      projects: ["Autonomous Navigation", "Computer Vision", "Mission Planning Software"],
    },
    {
      name: "Electronics Team",
      icon: Star,
      members: 10,
      description: "Handles PCB design, sensor integration, and power systems",
      projects: ["Flight Controller PCB", "Sensor Fusion System", "Power Management"],
    },
    {
      name: "Competition Team",
      icon: Award,
      members: 8,
      description: "Focuses on competition preparation and performance optimization",
      projects: ["Racing Optimization", "Competition Strategy", "Performance Analysis"],
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
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Team</h1>
            <p className="text-xl text-sky-200 max-w-3xl mx-auto">
              Meet the passionate innovators driving the future of unmanned aerial vehicles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Leadership Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-sky-300">
                        <Image
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                      <p className="text-sky-300 font-semibold">{leader.role}</p>
                      <Badge className="mt-2 bg-sky-500">{leader.specialization}</Badge>
                    </div>

                    <p className="text-sky-200 text-sm mb-4">{leader.bio}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-sky-300 mb-2">Achievements</h4>
                      <div className="space-y-1">
                        {leader.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Award className="w-3 h-3 text-yellow-400" />
                            <span className="text-xs text-sky-200">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-sky-300 mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {leader.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-sky-300 text-sky-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-sky-900 bg-transparent"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-sky-900 bg-transparent"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-sky-900 bg-transparent"
                      >
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Team Structure
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teams.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                        <team.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{team.name}</h3>
                        <p className="text-sky-300">{team.members} Members</p>
                      </div>
                    </div>

                    <p className="text-sky-200 mb-4">{team.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-sky-300 mb-2">Current Projects</h4>
                      <ul className="space-y-1">
                        {team.projects.map((project, i) => (
                          <li key={i} className="text-sm text-sky-200 flex items-center space-x-2">
                            <div className="w-1 h-1 bg-sky-400 rounded-full"></div>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-sky-200 mb-8">
              Ready to be part of something extraordinary? We're always looking for passionate individuals to join our
              mission of pushing the boundaries of UAV technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-300/20">
                <h3 className="text-lg font-semibold text-white mb-2">Open Positions</h3>
                <p className="text-sky-200">Software Engineer, Mechanical Designer, Electronics Specialist</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-300/20">
                <h3 className="text-lg font-semibold text-white mb-2">Requirements</h3>
                <p className="text-sky-200">Passion for UAVs, Technical skills, Team collaboration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-300/20">
                <h3 className="text-lg font-semibold text-white mb-2">Benefits</h3>
                <p className="text-sky-200">Hands-on experience, Networking, Competition opportunities</p>
              </div>
            </div>

            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}