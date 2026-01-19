import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Camera,
  Eye,
  FileImage,
  Shield,
  FolderTree,
  Zap,
  Terminal,
  Info,
  Keyboard,
  Power,
  BarChart3,
  LayoutDashboard,
  Container,
  Settings,
  Globe,
  Wifi,
  Rocket,
  Monitor,
  Save,
  FileText,
  List,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { Product } from "@/data/products"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Eye,
  FileImage,
  Shield,
  FolderTree,
  Zap,
  Terminal,
  Info,
  Keyboard,
  Power,
  BarChart3,
  LayoutDashboard,
  Container,
  Settings,
  Globe,
  Wifi,
  Rocket,
  Monitor,
  Save,
  FileText,
  List,
}

interface ProductPageTemplateProps {
  product: Product
  children?: React.ReactNode
}

export function ProductPageTemplate({ product, children }: ProductPageTemplateProps) {
  const paymentButtonRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (product.type === "commercial" && paymentButtonRef.current && !paymentButtonRef.current.querySelector("script")) {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/payment-button.js"
      script.setAttribute("data-payment_button_id", "pl_S5HtStRX6M7aoJ")
      script.async = true
      paymentButtonRef.current.appendChild(script)
    }
  }, [product.type])

  return (
    <div className="relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        {/* Back link */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        {/* Hero section */}
        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge
                variant={product.type === "commercial" ? "default" : "secondary"}
                className={
                  product.type === "commercial"
                    ? "bg-gradient-to-r from-primary to-primary/80"
                    : "bg-muted/80 border-border/50"
                }
              >
                {product.type === "commercial"
                  ? `₹${product.price?.amount}`
                  : "Open Source"}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {product.name}
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">{product.tagline}</p>

            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-muted/50 border-border/50 hover:border-primary/30 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              {product.type === "commercial" && (
                <form ref={paymentButtonRef}></form>
              )}
              {product.githubUrl && (
                <Button
                  variant={product.type === "commercial" ? "outline" : "default"}
                  size="lg"
                  asChild
                >
                  <a
                    href={product.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {product.downloadUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a
                    href={product.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 bg-gradient-to-br from-muted to-muted/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <Monitor className="h-12 w-12 text-primary/30 mx-auto" />
                <span className="text-sm text-muted-foreground">Screenshot coming soon</span>
              </div>
            </div>
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl font-bold mb-4">About {product.name}</h2>
          <div className="prose prose-neutral dark:prose-invert">
            {product.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <Separator className="mb-16 bg-border/40" />

        {/* Features */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Features</h2>
            <p className="text-muted-foreground mt-2">Everything you need, nothing you don't</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => {
              const IconComponent = iconMap[feature.icon] || Zap
              return (
                <Card
                  key={feature.title}
                  className="group border-border/50 bg-gradient-to-b from-card to-card/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Additional content slot */}
        {children}
      </div>
    </div>
  )
}
