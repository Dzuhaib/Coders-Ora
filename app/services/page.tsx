"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, MessageSquare, BarChart3, Palette, TrendingUp, Database } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We build custom websites and web applications using the latest technologies like React, Next.js, and Vue.js. Our web solutions are responsive, performant, and designed to provide exceptional user experiences across all devices.",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Progressive Web Apps (PWAs)",
      "Content Management Systems",
      "API development and integration",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Our mobile app development services cover both native and cross-platform solutions. We create intuitive, feature-rich applications that engage users and drive business growth on iOS and Android platforms.",
    features: [
      "Native iOS and Android apps",
      "Cross-platform development with React Native",
      "App UI/UX design",
      "App maintenance and updates",
      "App Store optimization",
    ],
  },
  {
    icon: MessageSquare,
    title: "Chatbots",
    description:
      "We develop intelligent chatbots and conversational interfaces that enhance customer engagement and streamline business operations. Our AI-powered chatbots provide personalized experiences and 24/7 support for your customers.",
    features: [
      "AI-powered conversational interfaces",
      "Integration with messaging platforms",
      "Natural language processing",
      "Custom chatbot development",
      "Analytics and performance tracking",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description:
      "Our custom dashboard solutions transform complex data into actionable insights. We design and develop intuitive dashboards that help businesses monitor performance, track KPIs, and make data-driven decisions.",
    features: [
      "Custom dashboard development",
      "Real-time data visualization",
      "Interactive charts and graphs",
      "KPI tracking and reporting",
      "Data integration from multiple sources",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Our design team creates beautiful, intuitive interfaces that enhance user experience and drive engagement. We follow a user-centered design approach to ensure your digital products are both visually appealing and easy to use.",
    features: [
      "User interface design",
      "User experience design",
      "Wireframing and prototyping",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "We offer comprehensive digital marketing services to help businesses increase their online presence and drive growth. Our strategies are tailored to your specific goals and target audience to maximize ROI.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics and Reporting",
    ],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "We design and implement scalable, secure database architectures tailored to your business needs. Our database solutions ensure efficient data management, high performance, and data integrity.",
    features: [
      "Database design and architecture",
      "Data migration and integration",
      "Performance optimization",
      "Database security",
      "Backup and recovery solutions",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Services Header */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">
              We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.
              From web and app development to UI/UX design and digital marketing, we have the expertise to bring your
              vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-block p-3 rounded-lg bg-primary/10 text-primary mb-6">
                    <service.icon size={40} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 bg-secondary/30 p-8 rounded-lg border border-border/50">
                  <div className="aspect-video rounded-lg bg-primary/5 flex items-center justify-center">
                    <service.icon size={80} className="text-primary/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              You've come this far. Don't let your dream project stay an idea.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's turn your vision into reality with our expertise and passion for creating exceptional digital
              experiences.
            </p>
            <Button asChild size="lg" className="text-lg px-8 hover:text-primary-foreground">
              <Link href="https://calendly.com/myselfzuhaib">Book a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
