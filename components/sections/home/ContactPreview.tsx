"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react"

export default function ContactPreview() {
  const [success, setSuccess] = useState(false)

  return (
    <section className="section-padding bg-secondary/30" id="contact">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Mail size={20} className="text-foreground" />
                    <a
                      href="mailto:codersaura467@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      codersaura467@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={20} className="text-foreground" />
                    <a
                      href="tel:+923390349804"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +92 (306) 3213-951
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              action="https://formsubmit.co/myselfzuhaib@gmail.com"
              method="POST"
              className="space-y-6"
              onSubmit={() => setSuccess(true)}
            >
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="h-12"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="h-12"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                className="min-h-[150px]"
              />

              {/* Hidden FormSubmit config fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://coders-ora.vercel.app/thank-you" />

              <Button type="submit" size="lg" className="w-full">
                Make It Happen
              </Button>

              {success && (
                <p className="text-green-600 text-sm mt-2">
                  Thank you for your message! We will get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
