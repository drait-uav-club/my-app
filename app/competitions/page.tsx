"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, MapPin, Users, Award } from "lucide-react"
import Image from "next/image"

export default function CompetitionsPage() {
  const competitions = [
    {
      title: "International UAV Racing Championship",
      date: "March 15-17, 2024",
      location: "Tech Arena, Silicon Valley",
      status: "upcoming",
      prize: "$50,000",
      participants: "200+",
      description: "The ultimate test of speed and precision in drone racing",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Autonomous Flight Challenge",
      date: "April 22-24, 2024",
      location: "Innovation Center, Boston",
      status: "registration-open",
      prize: "$30,000",
      participants: "150+",
      description: "Showcase your AI-powered autonomous navigation systems",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Delivery Drone Olympics",
      date: "May 10-12, 2024",
      location: "Logistics Hub, Chicago",
      status: "upcoming",
      prize: "$40,000",
      participants: "180+",
      description: "Precision delivery challenges in urban environments",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const achievements = [
    { year: "2023", competition: "National UAV Championship", position: "1st Place", prize: "$25,000" },
    { year: "2023", competition: "Autonomous Systems Challenge", position: "2nd Place", prize: "$15,000" },
    { year: "2022", competition: "Innovation in Aerospace", position: "1st Place", prize: "$20,000" },
    { year: "2022", competition: "Student Drone Racing", position: "3rd Place", prize: "$10,000" },
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
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Competitions</h1>
            <p className="text-xl text-sky-200 max-w-3xl mx-auto">
              Compete at the highest level and showcase your UAV innovations on the global stage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Competitions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Upcoming Competitions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white h-full">
                  <div className="relative">
                    <Image
                      src={comp.image || "/placeholder.svg"}
                      alt={comp.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge
                      className={`absolute top-4 right-4 ${comp.status === "upcoming" ? "bg-sky-500" : "bg-green-500"}`}
                    >
                      {comp.status === "upcoming" ? "Upcoming" : "Registration Open"}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{comp.title}</CardTitle>
                    <CardDescription className="text-sky-200">{comp.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2 text-sky-200">
                      <Calendar className="w-4 h-4" />
                      <span>{comp.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sky-200">
                      <MapPin className="w-4 h-4" />
                      <span>{comp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sky-200">
                      <Trophy className="w-4 h-4" />
                      <span>Prize Pool: {comp.prize}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sky-200">
                      <Users className="w-4 h-4" />
                      <span>{comp.participants} Expected</span>
                    </div>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">Register Now</Button>
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
            Our Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-300/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{achievement.competition}</h3>
                    <p className="text-sky-200">{achievement.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-yellow-400">{achievement.position}</p>
                    <p className="text-sky-200">{achievement.prize}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Rules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Competition Guidelines</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white">
                <CardHeader>
                  <CardTitle className="text-sky-300">Eligibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sky-200">• Open to all students and professionals</p>
                  <p className="text-sky-200">• Team size: 2-6 members</p>
                  <p className="text-sky-200">• Valid registration required</p>
                  <p className="text-sky-200">• Safety certification mandatory</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white">
                <CardHeader>
                  <CardTitle className="text-sky-300">Technical Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sky-200">• Maximum weight: 5kg</p>
                  <p className="text-sky-200">• Flight time: 15-30 minutes</p>
                  <p className="text-sky-200">• Safety features required</p>
                  <p className="text-sky-200">• Documentation needed</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}