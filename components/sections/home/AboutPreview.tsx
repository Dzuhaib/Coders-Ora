"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPreview() {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl text-white font-bold mb-4 leading-tight">
              Who We Are
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              At <span className="font-bold text-white">Coders Ora</span>, we’re a collective of developers and
              designers dedicated to building intuitive, high-impact digital solutions. We blend creativity and
              technology to empower businesses of every size.
            </p>
            <Button
              asChild
              className="transition-all duration-300 bg-white text-black hover:bg-white hover:text-black hover:shadow-md"
            >
              <Link href="/about">Learn More →</Link>
            </Button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="group relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
