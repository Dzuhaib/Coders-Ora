"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-xl"
      >
        <motion.div
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex justify-center mb-8"
        >
          <CheckCircle size={100} className="text-green-500" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-gray-300">
          Your message has been successfully sent. We will get back to you as soon as possible.
        </p>
      </motion.div>
    </div>
  )
}
