"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import ProductCard from "@/components/product-card";
import FeatureCard from "@/components/feature-card";
import TestimonialSlider from "@/components/testimonial-slider";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

import { products, features, testimonials } from "@/data/content";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 z-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block">Fresh.</span>
              <span className="block">Organic.</span>
              <span className="block">Sustainable.</span>
            </h1>
            <Button className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </motion.div>
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1545830790-68595959c491?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Organic farmer in greenhouse"
              width={700}
              height={500}
              className="rounded-lg object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Images Grid */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        <motion.div
          className="relative h-64 rounded-lg overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop"
            alt="Fresh produce"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative h-64 rounded-lg overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=800&auto=format&fit=crop"
            alt="Fresh vegetables"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white p-3">
            <p className="font-medium">100% AUTHENTIC</p>
            <p className="text-sm">ORGANIC FOOD</p>
          </div>
        </motion.div>
        <motion.div
          className="relative h-64 rounded-lg overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop"
            alt="Organic fruits"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white p-3">
            <p className="font-medium flex items-center">
              Organic Fruits
              <span className="ml-2">❤️🍎🍓</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop"
                  alt="Farm image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop"
                  alt="Farm image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-2/3 md:pl-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              At <span className="text-green-500">Organic</span>, we are
              passionate about growing fresh, chemical-free produce.
            </h2>
            <p className="mb-6">
              Nestled in the heart of nature, our farm uses{" "}
              <span className="text-green-500 font-medium">
                sustainable farming practices
              </span>{" "}
              and{" "}
              <span className="text-green-500 font-medium">
                delivers the healthiest food
              </span>{" "}
              to your table. Every seed we plant is a step toward a greener,
              healthier future.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              We are dedicated to providing you with the freshest organic
              produce through sustainable farming methods. Our commitment to
              quality ensures we're delivering healthy, high-quality foods to
              your table.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-green-500 font-medium">Products</span>
          <h2 className="text-3xl font-bold mt-2">Our Freshest Picks</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-green-500 font-medium">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold mt-2">
            Why Choose Our Organic Farm?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                alt="Farm landscape"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 flex items-center">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <span>⭐</span>
                </div>
                <div>
                  <p className="font-medium">Sunrise Organic Farm</p>
                  <p className="text-xs text-gray-500">Established 1995</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard feature={feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">What Say Our Customers</h2>
        </motion.div>

        <TestimonialSlider testimonials={testimonials} />
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Get Updates
              <br />& Offers
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=800&auto=format&fit=crop"
                  alt="Fresh produce"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
                  alt="Fresh vegetables"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Newsletter />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
