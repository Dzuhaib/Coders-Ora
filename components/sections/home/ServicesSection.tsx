"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, Smartphone, MessageSquare, BarChart3, Palette, TrendingUp, Database } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites built with the latest technologies for optimal performance and user experience.",
    link: "/services",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences.",
    link: "/services",
  },
  {
    icon: MessageSquare,
    title: "Chatbots",
    description: "Intelligent conversational interfaces powered by AI to enhance customer engagement.",
    link: "/services",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Data visualization and analytics dashboards that provide actionable insights.",
    link: "/services",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    link: "/services",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to increase your online presence and drive growth.",
    link: "/services",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Scalable and secure database architectures tailored to your business needs.",
    link: "/services",
  },
]

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50"
            >
              <div className="mb-4 text-foreground">
                <service.icon size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="text-foreground font-medium hover:text-foreground/70 inline-flex items-center"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
