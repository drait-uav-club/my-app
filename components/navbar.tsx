"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, Search, Plane, Facebook, Linkedin, Youtube, Instagram } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "COMPETITIONS", href: "/competitions" },
    { name: "TEAM", href: "/team" },
    { name: "BLOG", href: "/blog" },
    { name: "PROJECTS", href: "/projects" },
    { name: "TIMELINE", href: "/timeline" },
    { name: "ABOUT US", href: "/about" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">UAV CLUB</span>
          </Link>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Facebook className="w-5 h-5 text-sky-300 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-sky-300 hover:text-white cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 text-sky-300 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-sky-300 hover:text-white cursor-pointer transition-colors" />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sky-300" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-white/10 border-sky-300/30 text-white placeholder-sky-300 focus:border-sky-300"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-sky-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sky-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-sky-300/20">
              <Facebook className="w-5 h-5 text-sky-300" />
              <Linkedin className="w-5 h-5 text-sky-300" />
              <Youtube className="w-5 h-5 text-sky-300" />
              <Instagram className="w-5 h-5 text-sky-300" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}