"use client"

import { useEffect, useState } from "react"
import { ProductCard } from "./product-card"
import { getAllProducts } from "@/lib/products"
import { useSearchParams } from "next/navigation"

export function ProductGrid() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()
  const category = searchParams.get("category")

  useEffect(() => {
    // Simulate fetching products from an API
    const loadProducts = async () => {
      setIsLoading(true)
      // In a real app, this would be an API call with filters
      const allProducts = getAllProducts()

      // Filter by category if provided
      const filteredProducts = category
        ? allProducts.filter((p) => p.category.toLowerCase() === category.replace("-", " "))
        : allProducts

      setProducts(filteredProducts)
      setIsLoading(false)
    }

    loadProducts()
  }, [category])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="aspect-square w-full bg-muted rounded-md animate-pulse" />
            <div className="mt-4 h-4 w-3/4 bg-muted rounded animate-pulse" />
            <div className="mt-2 h-4 w-1/2 bg-muted rounded animate-pulse" />
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h2 className="text-xl font-semibold mb-4">No products found</h2>
        <p className="text-muted-foreground">
          {category
            ? `No products found in the "${category.replace("-", " ")}" category.`
            : "No products match your current filters."}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
