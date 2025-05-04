"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, User, Menu, Search, X } from "lucide-react"
import { useCart } from "./cart-provider"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const { cart } = useCart()
  const [showSearch, setShowSearch] = useState(false)
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-semibold">
                Home
              </Link>
              <Link href="/products" className="text-lg font-semibold">
                Products
              </Link>
              <Link href="/cart" className="text-lg font-semibold">
                Cart
              </Link>
              <Link href="/account" className="text-lg font-semibold">
                Account
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/" className="hidden md:block">
            <span className="text-xl font-bold">E-Store</span>
          </Link>
          <nav className="hidden md:flex gap-4 ml-4">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
          </nav>
        </div>

        <div className={cn("ml-auto flex items-center gap-2", showSearch && "hidden md:flex")}>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setShowSearch(true)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <div className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full rounded-lg pl-8 md:w-[300px] lg:w-[300px]"
            />
          </div>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {cartItemsCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
        </div>

        {showSearch && (
          <div className="absolute inset-x-0 top-0 z-50 flex h-16 items-center gap-2 bg-background px-4 md:hidden">
            <Input type="search" placeholder="Search products..." className="flex-1" autoFocus />
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
