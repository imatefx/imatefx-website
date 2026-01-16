import { Link } from "react-router-dom"
import { ArrowRight, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/products/ProductCard"
import { getFeaturedProducts } from "@/data/products"

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <Package className="h-4 w-4" />
            Featured Work
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Projects I've Built
          </h2>
          <p className="max-w-[600px] text-muted-foreground text-lg">
            A selection of tools and applications designed to solve real
            problems for developers and users alike.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group px-8 border-border/50 hover:bg-muted hover:border-primary/30"
          >
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
