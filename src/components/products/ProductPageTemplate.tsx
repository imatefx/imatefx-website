import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Github,
  Download,
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
  return (
    <div className="py-12">
      <div className="container px-4 md:px-6">
        {/* Back link */}
        <Link
          to="/products"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        {/* Hero section */}
        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                {product.name}
              </h1>
              <Badge
                variant={product.type === "commercial" ? "default" : "secondary"}
                className="text-sm"
              >
                {product.type === "commercial"
                  ? `$${product.price?.amount}`
                  : "Open Source"}
              </Badge>
            </div>

            <p className="text-xl text-muted-foreground">{product.tagline}</p>

            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {product.type === "commercial" && (
                <Button asChild size="lg">
                  <Link to="/pricing">
                    <Download className="mr-2 h-4 w-4" />
                    Buy Now - ${product.price?.amount}
                  </Link>
                </Button>
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
          <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center border">
            <span className="text-muted-foreground">Screenshot</span>
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

        <Separator className="mb-16" />

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => {
              const IconComponent = iconMap[feature.icon] || Zap
              return (
                <Card key={feature.title}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
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
