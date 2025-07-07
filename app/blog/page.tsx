"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Calendar, User, Search, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Autonomous UAVs: AI-Powered Flight Systems",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing unmanned aerial vehicles and shaping the future of autonomous flight technology.",
    author: "Alex Chen",
    date: "December 15, 2023",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["AI", "Autonomous Systems", "Future Tech"],
  }

  const blogPosts = [
    {
      title: "Building Your First Racing Drone: A Complete Guide",
      excerpt:
        "Step-by-step guide to building a high-performance racing drone from scratch, including component selection and assembly tips.",
      author: "Sarah Johnson",
      date: "December 10, 2023",
      readTime: "12 min read",
      category: "Tutorial",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Racing", "DIY", "Tutorial"],
    },
    {
      title: "UAV Regulations: What Every Pilot Should Know",
      excerpt:
        "Understanding the latest FAA regulations and compliance requirements for commercial and recreational UAV operations.",
      author: "Mike Rodriguez",
      date: "December 5, 2023",
      readTime: "6 min read",
      category: "Regulations",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Regulations", "Safety", "Legal"],
    },
    {
      title: "Computer Vision in Drones: Object Detection and Tracking",
      excerpt:
        "Implementing advanced computer vision algorithms for real-time object detection and tracking in UAV applications.",
      author: "Emily Davis",
      date: "November 28, 2023",
      readTime: "10 min read",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Computer Vision", "AI", "Programming"],
    },
    {
      title: "Drone Photography: Tips for Stunning Aerial Shots",
      excerpt:
        "Professional techniques and settings for capturing breathtaking aerial photography with your drone camera.",
      author: "David Wilson",
      date: "November 22, 2023",
      readTime: "7 min read",
      category: "Photography",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Photography", "Tips", "Creative"],
    },
    {
      title: "Battery Technology: Maximizing Flight Time",
      excerpt:
        "Understanding LiPo batteries, charging techniques, and optimization strategies for extended flight duration.",
      author: "Lisa Chang",
      date: "November 15, 2023",
      readTime: "9 min read",
      category: "Hardware",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Battery", "Hardware", "Optimization"],
    },
    {
      title: "Swarm Robotics: Coordinating Multiple UAVs",
      excerpt: "Exploring the fascinating world of swarm intelligence and multi-drone coordination systems.",
      author: "James Park",
      date: "November 8, 2023",
      readTime: "11 min read",
      category: "Research",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Swarm", "Research", "Coordination"],
    },
  ]

  const categories = ["All", "Technology", "Tutorial", "Regulations", "Photography", "Hardware", "Research"]

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
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Blog</h1>
            <p className="text-xl text-sky-200 max-w-3xl mx-auto">
              Insights, tutorials, and the latest developments in UAV technology
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sky-300" />
              <Input
                placeholder="Search articles..."
                className="pl-12 bg-white/10 border-sky-300/30 text-white placeholder-sky-300 focus:border-sky-300"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-sky-900 bg-transparent"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Featured Article</h2>

            <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-sky-500">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>

                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-blue-500">{featuredPost.category}</Badge>
                  <CardTitle className="text-2xl md:text-3xl text-white mb-4">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-sky-200 text-lg mb-6">{featuredPost.excerpt}</CardDescription>

                  <div className="flex items-center space-x-4 text-sky-300 text-sm mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-sky-300 text-sky-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="bg-sky-500 hover:bg-sky-600 text-white w-fit">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Latest Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-sky-300/20 text-white h-full">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-blue-500">{post.category}</Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg text-white line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="text-sky-200 line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sky-300 text-sm">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-sky-300 text-sm">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-sky-300 text-sky-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-sky-900 bg-transparent"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-sky-200 mb-8">
              Subscribe to our newsletter for the latest UAV insights, tutorials, and industry news
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-sky-300/30 text-white placeholder-sky-300 focus:border-sky-300"
              />
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">Subscribe</Button>
            </div>

            <p className="text-sky-300 text-sm mt-4">Join 1,000+ UAV enthusiasts. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}