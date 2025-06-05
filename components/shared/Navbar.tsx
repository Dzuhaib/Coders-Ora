"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 overflow-x-hidden overflow-hidden z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-black/90 backdrop-blur-none shadow-none"
      }`}
    >
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-heading no-underline">
            {/* <Image
              src="/public/logo.png"
              alt="Coders Ora Logo"
              width={40}
              height={40}
              style={{ objectFit: "cover" }} // Ensures the image covers the area without stretching
              unoptimized={true} // Use this if you're using a local image and want to avoid Next.js optimization
            /> */}
            <span className={scrolled ? "text-foreground" : "text-white"}>Coders Ora</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors no-underline ${
                      scrolled ? "text-foreground hover:text-foreground/70" : "text-white hover:text-white/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <div className={scrolled ? "" : "text-white"}>
                <ModeToggle />
              </div>
              <Button
                className={
                  scrolled
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-white text-black hover:bg-white/90"
                }
              >
                Book a Meeting
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <div className={scrolled ? "" : "text-white"}>
              <ModeToggle />
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${scrolled ? "text-foreground" : "text-white"}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container-custom py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block py-2 font-medium text-foreground hover:text-foreground/70 transition-colors no-underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  
                    <Button className="bg-foreground text-white hover:bg-foreground/90 w-full">
                    <Link href="https://calendly.com/myselfzuhaib">
                      Book a Meeting
                    </Link>
                    </Button>
            
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
