import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { ThemeProvider } from "@/components/theme-provider"

// Define fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Coders Aura | Creative Web & AI Solutions for the Modern Digital World",
  description: `Coders Aura is a future-focused web and AI development agency delivering stunning websites, intelligent applications, and seamless digital experiences for businesses ready to lead. Innovation, speed, and design — all in one aura.`,
=======
  title: "Coders Ora | Digital Solutions",
  description: "Turn your idea into a powerful digital experience with Coders Ora.",
>>>>>>> 48199491d7c0e3b46f6847ea6bb60203537d7487
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
