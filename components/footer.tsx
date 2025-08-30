"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Plane, Facebook, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <>
      <footer className="bg-black/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">UAV CLUB</span>
              </div>
              <p className="text-sky-200 mb-6 max-w-md">
                Pioneering the future of unmanned aerial vehicles through innovation, collaboration, and cutting-edge
                technology. Join us as we soar beyond limits.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-sky-300 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-sky-300 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-sky-300 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-sky-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-sky-300">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About Us", "Projects", "Team", "Blog", "Competitions"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sky-200 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-sky-300">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-sky-300" />
                  <span className="text-sky-200">uav.club@drait.edu.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-sky-300" />
                  <span className="text-sky-200">+91 63634 98101</span>
                </div>
                 <span className="text-sky-200">    +91 97402 21613</span>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-sky-300" />
                  <span className="text-sky-200">Dr Ambedkar Institute of Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sky-200">Bangalore,560056</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-sky-300/20 mt-12 pt-8 text-center">
            <p className="text-sky-200">
              © {new Date().getFullYear()} UAV Club. All rights reserved. Soaring Beyond Limits.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}