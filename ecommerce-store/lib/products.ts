// This file simulates a product database
// In a real application, this would be fetched from a database

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  stock: number
  rating: number
  isNew?: boolean
  isSale?: boolean
}

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 129.99,
    description:
      "Premium wireless headphones with noise cancellation technology, providing crystal clear sound and comfort for extended use.",
    image: "/placeholder.svg?height=400&width=400&text=Headphones",
    category: "Electronics",
    stock: 15,
    rating: 4.5,
    isNew: true,
  },
  {
    id: "2",
    name: "Smartphone X Pro",
    price: 899.99,
    description: "The latest smartphone with a stunning display, powerful processor, and an amazing camera system.",
    image: "/placeholder.svg?height=400&width=400&text=Smartphone",
    category: "Electronics",
    stock: 10,
    rating: 4.8,
  },
  {
    id: "3",
    name: "Men's Casual T-Shirt",
    price: 24.99,
    description: "Comfortable cotton t-shirt perfect for everyday wear. Available in multiple colors and sizes.",
    image: "/placeholder.svg?height=400&width=400&text=T-Shirt",
    category: "Clothing",
    stock: 50,
    rating: 4.2,
    isSale: true,
  },
  {
    id: "4",
    name: "Women's Running Shoes",
    price: 89.99,
    description: "Lightweight and comfortable running shoes designed for maximum performance and durability.",
    image: "/placeholder.svg?height=400&width=400&text=Running+Shoes",
    category: "Clothing",
    stock: 25,
    rating: 4.6,
  },
  {
    id: "5",
    name: "Smart Home Speaker",
    price: 79.99,
    description:
      "Voice-controlled smart speaker that can play music, answer questions, and control your smart home devices.",
    image: "/placeholder.svg?height=400&width=400&text=Smart+Speaker",
    category: "Electronics",
    stock: 20,
    rating: 4.4,
    isNew: true,
  },
  {
    id: "6",
    name: "Coffee Maker",
    price: 49.99,
    description: "Programmable coffee maker that brews delicious coffee with the touch of a button.",
    image: "/placeholder.svg?height=400&width=400&text=Coffee+Maker",
    category: "Home & Kitchen",
    stock: 30,
    rating: 4.3,
  },
  {
    id: "7",
    name: "Stainless Steel Cookware Set",
    price: 149.99,
    description: "Complete cookware set including pots and pans made from high-quality stainless steel.",
    image: "/placeholder.svg?height=400&width=400&text=Cookware+Set",
    category: "Home & Kitchen",
    stock: 15,
    rating: 4.7,
  },
  {
    id: "8",
    name: "Fitness Tracker",
    price: 59.99,
    description: "Track your steps, heart rate, sleep, and more with this advanced fitness tracker.",
    image: "/placeholder.svg?height=400&width=400&text=Fitness+Tracker",
    category: "Electronics",
    stock: 40,
    rating: 4.1,
    isSale: true,
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function getFeaturedProducts(): Product[] {
  // Return products marked as new or on sale
  return products.filter((product) => product.isNew || product.isSale)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}
