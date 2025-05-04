import Link from "next/link"
import { AddToCartButton } from "./add-to-cart-button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    category: string
    isNew?: boolean
    isSale?: boolean
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>

        {(product.isNew || product.isSale) && (
          <div className="absolute left-2 top-2">
            {product.isNew && <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>}
            {product.isSale && <Badge className="bg-red-500 hover:bg-red-600 ml-1">Sale</Badge>}
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
        </Link>
        <div className="mt-2 font-bold">${product.price.toFixed(2)}</div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  )
}
