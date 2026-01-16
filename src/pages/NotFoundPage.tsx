import { Link } from "react-router-dom"
import { Home, ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="relative py-20 flex items-center justify-center min-h-[70vh]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        }}
      />

      <div className="container px-4 md:px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Search className="h-10 w-10 text-primary/60" />
        </div>

        <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-b from-foreground to-muted-foreground/30 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-3 tracking-tight">
          Page Not Found
        </h2>

        <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved to a new location.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="px-8">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 border-border/50 hover:bg-muted"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}
