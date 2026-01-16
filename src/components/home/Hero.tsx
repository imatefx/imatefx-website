import { Link } from "react-router-dom"
import { ArrowRight, Github, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Grid pattern - light mode (subtle, spacious grid following modern UI patterns) */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
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
        className="pointer-events-none absolute inset-0 hidden dark:block"
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
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 border border-border/50 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Building tools that matter</span>
          </div>

          <div className="space-y-6 max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Hi, I'm{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  {siteConfig.name.split(" ")[0]}
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8.5C50 2 150 2 198 8.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary/40"
                  />
                </svg>
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
              Software developer crafting high-performance desktop applications
              and developer tools with{" "}
              <span className="font-semibold text-foreground">Rust</span>,{" "}
              <span className="font-semibold text-foreground">TypeScript</span>,
              and modern frameworks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="group px-8 h-12 text-base">
              <Link to="/products">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group px-8 h-12 text-base border-border/50 hover:bg-muted"
            >
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub Profile
              </a>
            </Button>
          </div>

          {/* Skills badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {siteConfig.skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-muted to-muted/80 border border-border/50 hover:border-primary/30 transition-colors cursor-default"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
