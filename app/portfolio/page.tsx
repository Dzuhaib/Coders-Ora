"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Sample portfolio data
const projects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "Web Development",
    tags: ["React", "Stripe", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A complete redesign of an e-commerce platform with improved user experience and conversion rates.",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    category: "Dashboard",
    tags: ["Next.js", "Chart.js", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "An interactive dashboard for financial data visualization and analysis.",
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    category: "App Development",
    tags: ["React Native", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A fitness tracking app with personalized workout plans and progress tracking.",
  },
  {
    id: 4,
    title: "Restaurant Booking System",
    category: "Web Development",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "An online reservation system for restaurants with table management and customer notifications.",
  },
  {
    id: 5,
    title: "AI Chatbot Assistant",
    category: "Chatbot",
    tags: ["Python", "TensorFlow", "NLP"],
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "An intelligent chatbot for customer support with natural language processing capabilities.",
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Web Development",
    tags: ["React", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    description: "A comprehensive platform for real estate listings with advanced search and filtering options.",
  },
  {
    id: 7,
    title: "Marketing Analytics Dashboard",
    category: "Dashboard",
    tags: ["Next.js", "D3.js", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    description: "A dashboard for tracking marketing campaigns and analyzing performance metrics.",
  },
  {
    id: 8,
    title: "Healthcare Mobile App",
    category: "App Development",
    tags: ["Flutter", "Firebase", "RESTful API"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A mobile app for healthcare providers to manage patient records and appointments.",
  },
]

// Categories for filtering
const categories = ["All", "Web Development", "App Development", "Dashboard", "Chatbot", "UI/UX Design"]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-16">
      {/* Portfolio Header */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-white/90">
              Explore our diverse range of projects that showcase our expertise in creating exceptional digital
              experiences across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category ? "bg-primary text-white" : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer card-hover border border-border/50"
                onClick={() => setSelectedProject(project)}
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
                  <h3 className="text-xl text-white font-bold mb-1">{project.title}</h3>
                  <p className="text-white/80 mb-2">{project.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-primary/20 text-primary-foreground px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-muted-foreground mb-4">{selectedProject.category}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mb-6">{selectedProject.description}</p>

              <div className="flex justify-end">
                <button
                  className="bg-secondary px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
