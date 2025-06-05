import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/30 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground font-heading">Coders Ora</h3>
            <p className="text-muted-foreground mb-4">
              Turn your idea into a powerful digital experience with our expert team of developers and designers.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground hover:text-foreground/70 transition-colors no-underline">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-foreground/70 transition-colors no-underline">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-foreground/70 transition-colors no-underline">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-foreground/70 transition-colors no-underline">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors no-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  Chatbots
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-foreground" />
                <a
                  href="mailto:info@codersora.com"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  codersaura467@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-foreground" />
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  +92 (306) 3213-951
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Coders Ora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

  )
}
