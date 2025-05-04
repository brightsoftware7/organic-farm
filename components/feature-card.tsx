"use client"

import { motion } from "framer-motion"
import type { Feature } from "@/types/feature"

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-sm h-full"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="mb-4">
        <feature.icon className="h-10 w-10 text-green-500" />
      </div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-sm text-gray-600">{feature.description}</p>
      <button className="mt-4 text-green-500 flex items-center text-sm font-medium">
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.div>
  )
}
