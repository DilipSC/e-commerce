import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16 md:px-6 md:py-24 text-center">
      <div className="flex flex-col items-center gap-6 max-w-md">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Order Successful!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
        </div>

        <div className="w-full max-w-sm rounded-lg border bg-card p-6 shadow-sm">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Order Number</p>
              <p className="font-mono text-sm">#ORD-{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Date</p>
              <p className="text-sm">{new Date().toLocaleDateString()}</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm">customer@example.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link href="/products">
            <Button>Continue Shopping</Button>
          </Link>
          <Link href="/account/orders">
            <Button variant="outline">View Order</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
