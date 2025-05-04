"use client"

import { useEffect, useState } from "react"
import { ProductCard } from "./product-card"
import { getFeaturedProducts } from "@/lib/products"

export function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching products from an API
    const loadProducts = async () => {
      setIsLoading(true)
      // In a real app, this would be an API call
      const featuredProducts = getFeaturedProducts()
      setProducts(featuredProducts)
      setIsLoading(false)
    }

    loadProducts()
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="aspect-square w-full bg-muted rounded-md animate-pulse" />
            <div className="mt-4 h-4 w-3/4 bg-muted rounded animate-pulse" />
            <div className="mt-2 h-4 w-1/2 bg-muted rounded animate-pulse" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
