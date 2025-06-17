"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Contact Header */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Have a project in mind or want to learn more about our services? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-foreground/10 p-3 rounded-lg text-foreground">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <a
                        href="mailto:codersaura467@gmail.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        codersaura467@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-foreground/10 p-3 rounded-lg text-foreground">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +92 (306) 3213-951
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-foreground/10 p-3 rounded-lg text-foreground">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">
                        123 Tech Street, Digital City
                        <br />
                        Innovation State, 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-foreground/10 p-3 rounded-lg text-foreground">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Book a Meeting</h3>
                      <Button className="mt-2">Schedule Now</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-lg shadow-md border border-border/50"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form
                action="https://formsubmit.co/myselfzuhaib@gmail.com"
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                <input type="hidden" name="_next" value="https://coders-ora.vercel.app/thank-you" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input id="name" type="text" name="name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input id="email" type="email" name="email" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" name="phone" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" type="text" name="subject" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea id="message" name="message" rows={6} required className="min-h-[150px]" />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Make It Happen
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
