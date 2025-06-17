"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Redesign",
    subtitle: "React + Stripe + Tailwind",
    image:
      "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/portfolio",
  },
  {
    title: "Finance Dashboard",
    subtitle: "Next.js + Chart.js + Supabase",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/portfolio",
  },
  {
    title: "Mobile Fitness App",
    subtitle: "React Native + Firebase",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/portfolio",
  },
]

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-background" id="portfolio">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our featured projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl text-primary-foreground font-bold mb-1">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.subtitle}</p>
                <Link
                  href={project.link}
                  className="text-primary-foreground font-medium hover:underline inline-flex items-center"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
