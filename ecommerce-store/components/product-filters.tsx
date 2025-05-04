"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { useRouter, useSearchParams } from "next/navigation"

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState([0, 1000])

  const categories = [
    { id: "electronics", label: "Electronics" },
    { id: "clothing", label: "Clothing" },
    { id: "home-kitchen", label: "Home & Kitchen" },
    { id: "books", label: "Books" },
    { id: "toys", label: "Toys & Games" },
  ]

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("category", category)
    router.push(`/products?${params.toString()}`)
  }

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values)
  }

  const applyPriceFilter = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())
    router.push(`/products?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push("/products")
    setPriceRange([0, 1000])
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={searchParams.get("category") === category.id}
                onCheckedChange={() => handleCategoryChange(category.id)}
              />
              <label
                htmlFor={category.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider defaultValue={[0, 1000]} max={1000} step={10} value={priceRange} onValueChange={handlePriceChange} />
          <div className="flex items-center justify-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <Button onClick={applyPriceFilter} size="sm" className="w-full">
            Apply
          </Button>
        </div>
      </div>

      <Button onClick={clearFilters} variant="outline" size="sm" className="w-full">
        Clear Filters
      </Button>
    </div>
  )
}
