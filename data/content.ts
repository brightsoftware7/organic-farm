import type { Product } from "@/types/product";
import type { Feature } from "@/types/feature";
import type { Testimonial } from "@/types/testimonial";
import { Leaf, CheckCircle, Truck, Users } from "lucide-react";

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Cherry Tomato",
    price: "3.99",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop",
    description: "Fresh, locally grown cherry tomatoes",
  },
  {
    id: 2,
    name: "Fresh Basil Leaves",
    price: "2.99",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    description: "Aromatic basil leaves, perfect for cooking",
  },
  {
    id: 3,
    name: "Organic Kale",
    price: "3.99",
    image:
      "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?q=80&w=800&auto=format&fit=crop",
    description: "Nutrient-rich, locally grown organic kale",
  },
  {
    id: 4,
    name: "Pure Honey",
    price: "5.99",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=800&auto=format&fit=crop",
    description: "Raw, unfiltered honey from our own beehives",
  },
  {
    id: 5,
    name: "Organic Carrots",
    price: "2.99",
    image:
      "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=800&auto=format&fit=crop",
    description: "Sweet and crunchy organic carrots",
  },
  {
    id: 6,
    name: "Organic Strawberry",
    price: "3.99",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800&auto=format&fit=crop",
    description: "Juicy and sweet organic strawberries",
  },
];

export const features: Feature[] = [
  {
    id: 1,
    title: "100% Organic Products",
    description: "All products are certified organic with no harmful chemicals",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Farm-to-Table Freshness",
    description:
      "Our produce goes from our farm to your table in under 24 hours",
    icon: Truck,
  },
  {
    id: 3,
    title: "Sustainable Farming",
    description:
      "Environmentally-friendly farming practices that preserve our planet",
    icon: CheckCircle,
  },
  {
    id: 4,
    title: "Local & Trusted",
    description: "Supporting community health and trusted by local families",
    icon: Users,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Regular Customer",
    quote:
      "The freshest vegetables I've ever tasted, and consistent trust their produce. Their weekly delivery service has made healthy eating so much easier for my family!",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Chef at Harvest Restaurant",
    quote:
      "As a professional chef, I'm extremely particular about my ingredients. Organic Farm consistently delivers the highest quality produce that makes my dishes stand out.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Emily Chen",
    title: "Health Coach",
    quote:
      "I recommend Organic Farm to all my clients. The difference in taste and nutritional value compared to supermarket produce is remarkable. My clients notice the difference!",
    image:
      "https://images.unsplash.com/photo-1651592278720-fd9479be2a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
];
