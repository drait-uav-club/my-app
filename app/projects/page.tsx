"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Eye, Zap, Package, Shield, Camera, Cpu, Battery } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = {
    current: [
      {
        title: "Autonomous Surveillance Drone",
        category: "AI & Surveillance",
        status: "In Development",
        progress: 75,
        description:
          "Advanced AI-powered surveillance system with real-time object detection and tracking capabilities",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Computer Vision", "Machine Learning", "Real-time Processing"],
        features: ["Object Detection", "Facial Recognition", "Path Planning", "Live Streaming"],
        icon: Eye,
      },
      {
        title: "High-Speed Racing Quadcopter",
        category: "Racing & Performance",
        status: "Testing Phase",
        progress: 90,
        description:
          "Ultra-lightweight racing drone designed for maximum speed and agility in competitive environments",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Carbon Fiber", "High-Performance Motors", "Advanced ESCs"],
        features: ["200+ mph Speed", "Aerodynamic Design", "Precision Control", "Crash Resistance"],
        icon: Zap,
      },
      {
        title: "Delivery UAV System",
        category: "Commercial Applications",
        status: "Prototype",
        progress: 60,
        description: "Automated package delivery system optimized for urban environments and last-mile logistics",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["GPS Navigation", "Payload Management", "Weather Resistance"],
        features: ["5kg Payload", "30km Range", "Weather Resistant", "Automated Landing"],
        icon: Package,
      },
    ],
    completed: [
      {
        title: "Search and Rescue Drone",
        category: "Emergency Response",
        status: "Completed",
        progress: 100,
        description:
          "Specialized drone for search and rescue operations with thermal imaging and emergency communication",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Thermal Imaging", "Emergency Comms", "Long Range"],
        features: ["Thermal Camera", "Emergency Beacon", "60min Flight Time", "All-Weather"],
        icon: Shield,
        achievements: ["Deployed in 5 rescue missions", "Saved 3 lives", "Award Winner 2023"],
      },
      {
        title: "Agricultural Monitoring System",
        category: "Agriculture",
        status: "Completed",
        progress: 100,
        description: "Precision agriculture drone for crop monitoring, health assessment, and yield optimization",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Multispectral Imaging", "Data Analytics", "Precision Agriculture"],
        features: ["Crop Health Analysis", "Yield Prediction", "Pest Detection", "Irrigation Mapping"],
        icon: Camera,
        achievements: ["Increased crop yield by 15%", "Reduced pesticide use by 30%", "Farmer's Choice Award"],
      },
    ],
    research: [
      {
        title: "Swarm Intelligence Platform",
        category: "Research & Development",
        status: "Research Phase",
        progress: 30,
        description: "Multi-drone coordination system using swarm intelligence for complex mission execution",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Swarm AI", "Distributed Computing", "Mesh Networking"],
        features: ["Multi-Drone Coordination", "Adaptive Behavior", "Fault Tolerance", "Scalable Architecture"],
        icon: Cpu,
      },
      {
        title: "Solar-Powered Endurance Drone",
        category: "Sustainable Technology",
        status: "Concept",
        progress: 15,
        description: "Long-endurance drone powered by solar energy for continuous monitoring applications",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Solar Panels", "Energy Management", "Lightweight Materials"],
        features: ["Solar Charging", "24/7 Operation", "Ultra-Light Design", "Energy Efficient"],
        icon: Battery,
      },
    ],
  }

  const ProjectCard = ({ project, showAchievements = false }: { project: any; showAchievements?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white h-full">
        <div className="relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge className="absolute top-4 right-4 bg-sky-500">{project.status}</Badge>
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
              <project.icon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl text-white">{project.title}</CardTitle>
              <CardDescription className="text-sky-300">{project.category}</CardDescription>
            </div>
          </div>

          {project.progress < 100 && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-sky-200 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-sky-900/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-sky-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sky-200 text-sm">{project.description}</p>

          <div>
            <h4 className="text-sm font-semibold text-sky-300 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech: string, i: number) => (
                <Badge key={i} variant="outline" className="text-xs border-sky-300 text-sky-300">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-sky-300 mb-2">Key Features</h4>
            <ul className="space-y-1">
              {project.features.map((feature: string, i: number) => (
                <li key={i} className="text-xs text-sky-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-sky-400 rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {showAchievements && project.achievements && (
            <div>
              <h4 className="text-sm font-semibold text-sky-300 mb-2">Achievements</h4>
              <ul className="space-y-1">
                {project.achievements.map((achievement: string, i: number) => (
                  <li key={i} className="text-xs text-yellow-400 flex items-center space-x-2">
                    <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button
            variant="outline"
            size="sm"
            className="w-full border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-sky-900 bg-transparent"
          >
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )

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
              <Plane className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Projects</h1>
            <p className="text-xl text-sky-200 max-w-3xl mx-auto">
              Explore our cutting-edge UAV projects spanning from racing drones to life-saving rescue systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm border border-sky-300/20">
              <TabsTrigger
                value="current"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white text-sky-300"
              >
                Current Projects
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white text-sky-300"
              >
                Completed
              </TabsTrigger>
              <TabsTrigger
                value="research"
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white text-sky-300"
              >
                Research
              </TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.current.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.completed.map((project, index) => (
                  <ProjectCard key={index} project={project} showAchievements={true} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.research.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Project Impact
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Total Projects", description: "Completed and ongoing" },
              { number: "15+", label: "Awards Won", description: "Recognition for innovation" },
              { number: "100+", label: "Flight Hours", description: "Testing and operations" },
              { number: "50+", label: "Team Members", description: "Contributing to projects" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-300/20"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-sky-300 font-semibold mb-1">{stat.label}</p>
                <p className="text-sky-200 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}