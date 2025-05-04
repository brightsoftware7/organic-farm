"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="relative h-64">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        <Button
          aria-label="Add to cart"
          className="absolute bottom-4 right-4 bg-black text-white rounded-full h-10 w-10 p-0 flex items-center justify-center"
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-green-500 font-bold mt-1">${product.price}</p>
        <p className="text-xs text-gray-500 mt-1">{product.description}</p>
      </div>
    </motion.div>
  )
}
