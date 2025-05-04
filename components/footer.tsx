import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Contact */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/logo.svg" alt="Organic Logo" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <address className="not-italic text-sm text-gray-600 mb-6">
              <p className="mb-2">123 Organic Lane, Farmville</p>
              <p className="mb-2">+1 (555) 123-4567</p>
              <p>info@organicfarm.com</p>
            </address>
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6">Contact Us</Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/careers" className="hover:text-green-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-green-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-green-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-green-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/delivery-information" className="hover:text-green-500 transition-colors">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            &copy; Organic Farm LLC. All rights reserved {new Date().getFullYear()}
          </p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="text-gray-600 hover:text-green-500 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://twitter.com" className="text-gray-600 hover:text-green-500 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://instagram.com" className="text-gray-600 hover:text-green-500 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://linkedin.com" className="text-gray-600 hover:text-green-500 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
