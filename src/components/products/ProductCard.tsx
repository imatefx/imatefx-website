import { Link } from "react-router-dom"
import { ArrowRight, Github } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group relative flex flex-col h-full overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="relative">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
              {product.name}
            </CardTitle>
            <CardDescription className="text-sm">
              {product.tagline}
            </CardDescription>
          </div>
          <Badge
            variant={product.type === "commercial" ? "default" : "secondary"}
            className={
              product.type === "commercial"
                ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                : "bg-muted hover:bg-muted/80"
            }
          >
            {product.type === "commercial"
              ? `$${product.price?.amount}`
              : "Open Source"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="relative flex-grow">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {product.techStack.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs bg-muted/50 border-border/50 hover:bg-muted transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="relative flex gap-2 pt-4">
        <Button asChild className="flex-1 group/btn">
          <Link to={`/products/${product.slug}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
        {product.githubUrl && (
          <Button
            variant="outline"
            size="icon"
            asChild
            className="border-border/50 hover:bg-muted hover:border-primary/30"
          >
            <a
              href={product.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
