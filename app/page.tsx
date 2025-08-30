"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900">
      {/* Hero Section with video background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video1_drone.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay for dark tint */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        {/* Foreground Content */}
        <div className="container mx-auto px-4 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <Image
                src="/club-logo.png"
                alt="UAV club logo"
                width={128}
                height={128}
                className="w-32 h-32 object-contain"
                priority
              />
              <Image
                src="/drait-logo.png"
                alt="DRAIT Logo"
                width={64}
                height={64}
                className="fixed top-16 left-4 w-16 h-16 object-contain z-50"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="text-6xl md:text-8xl font-bold text-white mb-4"
            >
              DR AIT
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-6xl md:text-8xl font-bold text-white mb-4"
            >
              UAV CLUB
            </motion.h1>
            <p className="text-xl md:text-2xl text-sky-200 mb-8 max-w-3xl mx-auto">
              Soaring Beyond Limits - Where Innovation Meets the Sky
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
      </section>

      {/* About Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              We are a passionate team dedicated to advancing UAV technology and fostering innovation in the field of unmanned aerial vehicles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-300/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-sky-200">
                To push the boundaries of UAV technology and create innovative solutions that benefit society and the environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-300/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Join Us</h3>
              <p className="text-sky-200">
                Become a part of our community and contribute to exciting UAV projects. Whether you're a student or a professional, there's a place for you here.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Sponsors</h2>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              We are grateful to our sponsors for their support in advancing UAV innovation.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {[
              { name: "Sponsor 1", logo: "/sponsor1_logo.png" },
              { name: "Sponsor 2", logo: "/sponsor2_logo.png" },
              { name: "Sponsor 3", logo: "/sponsor3_logo.png" },
              { name: "Sponsor 4", logo: "/sponsor4_logo.png" },
              { name: "Sponsor 5", logo: "/sponsor5_logo.png" },
              { name: "Sponsor 6", logo: "/sponsor6_logo.png" },
            ].map((sponsor, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-sky-300/20 text-center"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} Logo`}
                  width={150}
                  height={150}
                  className="w-24 h-24 mx-auto object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-white">{sponsor.name}</h3>
              </motion.div>
            ))}
          </motion.div>
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
                image: "/placeholder.svg",
              },
              {
                title: "Racing Quadcopter",
                description: "High-speed racing drone with advanced flight controls",
                image: "/placeholder.svg",
              },
              {
                title: "Delivery UAV System",
                description: "Automated package delivery system for urban environments",
                image: "/placeholder.svg",
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
                  src={project.image}
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
  );
}
