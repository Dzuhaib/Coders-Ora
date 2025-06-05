"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Lightbulb, Rocket, Shield, Clock, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Who We Are Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
              <p className="text-muted-foreground mb-6">
                Coders Ora is a team of passionate developers, designers, and digital strategists dedicated to creating
                exceptional digital experiences. Founded in 2020, we've helped businesses of all sizes transform their
                ideas into powerful digital solutions.
              </p>
              <p className="text-muted-foreground mb-6">
                Our approach combines technical expertise with creative thinking to deliver projects that not only meet
                but exceed our clients' expectations. We believe in building long-term relationships with our clients,
                becoming partners in their digital journey.
              </p>
              <p className="text-muted-foreground">
                With a focus on quality, innovation, and user experience, we strive to create digital products that make
                a real impact for our clients and their customers.
              </p>
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Coders Ora Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Coders Ora?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative thinking to deliver exceptional digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Our team consists of experienced developers, designers, and strategists with diverse skills.",
              },
              {
                icon: Lightbulb,
                title: "Innovative Solutions",
                description:
                  "We stay at the forefront of technology to provide cutting-edge solutions for your business.",
              },
              {
                icon: Rocket,
                title: "Fast Delivery",
                description: "We work efficiently to deliver high-quality projects within agreed timeframes.",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Security is built into everything we create, ensuring your digital assets are protected.",
              },
              {
                icon: Clock,
                title: "Ongoing Support",
                description: "Our relationship doesn't end at launch - we provide continuous support and maintenance.",
              },
              {
                icon: Award,
                title: "Quality Focused",
                description: "We maintain high standards in every aspect of our work, from code to design.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-md border border-border/50"
              >
                <div className="mb-4 text-primary">
                  <item.icon size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-2xl md:text-3xl font-light mb-8">
              "To empower businesses through innovative digital solutions that drive growth, enhance user experiences,
              and create lasting impact in an ever-evolving digital landscape."
            </p>
            <p className="text-lg">
              We're committed to pushing the boundaries of what's possible in digital technology while maintaining a
              focus on creating meaningful experiences for users.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
