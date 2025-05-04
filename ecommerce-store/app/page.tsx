import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to Our E-commerce Store
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover amazing products at unbeatable prices. Shop now and enjoy fast delivery!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg">Shop Now</Button>
                </Link>
                <Link href="/account">
                  <Button size="lg" variant="outline">
                    My Account
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Hero Image"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=550"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>

      {/* Categories */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Electronics", "Clothing", "Home & Kitchen"].map((category) => (
              <Link
                key={category}
                href={`/products?category=${category.toLowerCase().replace(" & ", "-")}`}
                className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-lg transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
                  <img
                    alt={category}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    height="300"
                    src={`/placeholder.svg?height=300&width=300&text=${category}`}
                    width="300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                    <h3 className="text-xl font-bold">{category}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container px-4 md:px-6 py-12 bg-muted rounded-lg">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">What Our Customers Say</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                text: "Great products and fast shipping! Will definitely shop here again.",
              },
              {
                name: "Sarah Williams",
                text: "The customer service is exceptional. They helped me find exactly what I needed.",
              },
              {
                name: "Michael Brown",
                text: "Quality products at reasonable prices. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <p className="text-muted-foreground">"{testimonial.text}"</p>
                <p className="font-medium">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
