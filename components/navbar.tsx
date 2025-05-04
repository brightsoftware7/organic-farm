"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Organic Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-medium hover:text-green-500 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-green-500 transition-colors"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-green-500 transition-colors"
            >
              Why Choose Us
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-green-500 transition-colors"
            >
              Testimonials
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button
              aria-label="Search"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link href="#">
              <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full h-9 w-9 p-0 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#"
              className="block text-sm font-medium hover:text-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#"
              className="block text-sm font-medium hover:text-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#"
              className="block text-sm font-medium hover:text-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="#"
              className="block text-sm font-medium hover:text-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
