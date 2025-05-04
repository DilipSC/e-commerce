import { notFound } from "next/navigation"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/lib/products"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link href="/products" className="inline-flex items-center gap-1 mb-6 text-sm font-medium hover:underline">
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border bg-background">
          <img
            alt={product.name}
            className="aspect-square object-cover w-full"
            height="600"
            src={product.image || "/placeholder.svg"}
            width="600"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-bold text-primary mt-2">${product.price.toFixed(2)}</p>
          </div>

          <div className="prose max-w-none">
            <p>{product.description}</p>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <AddToCartButton product={product} />
            <Button variant="outline">Add to Wishlist</Button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Product Details</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="font-medium">Category:</div>
              <div>{product.category}</div>
              <div className="font-medium">In Stock:</div>
              <div>{product.stock > 0 ? "Yes" : "No"}</div>
              <div className="font-medium">Rating:</div>
              <div>{product.rating}/5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
