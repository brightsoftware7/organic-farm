import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Organic Farm - Fresh, Organic, Sustainable",
  description: "Discover fresh, organic produce grown with sustainable farming practices. From our farm to your table.",
  metadataBase: new URL("https://organic-farm.example.com"),
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Organic Farm - Fresh, Organic, Sustainable",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
