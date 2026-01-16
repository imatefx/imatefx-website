import { Package } from "lucide-react"
import { ProductCard } from "@/components/products/ProductCard"
import { products } from "@/data/products"

export default function ProductsPage() {
  return (
    <div className="relative py-20">
      {/* Grid pattern - light mode */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 50%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 50%)',
        }}
      />
      {/* Grid pattern - dark mode */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 50%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 50%)',
        }}
      />
      {/* Gradient blurs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <Package className="h-4 w-4" />
            All Products
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Products
          </h1>
          <p className="max-w-[600px] text-muted-foreground text-lg">
            Tools and applications I've built to solve real-world problems for
            developers and users.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products
            .sort((a, b) => a.order - b.order)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  )
}
