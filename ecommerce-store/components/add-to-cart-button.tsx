"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    category: string
  }
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a small delay for better UX
    setTimeout(() => {
      addToCart(product)

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })

      setIsAdding(false)
    }, 500)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isAdding} className="flex-1">
      <ShoppingCart className="mr-2 h-4 w-4" />
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  )
}
