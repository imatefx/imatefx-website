import { MapPin, Mail, Award, User, Code2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/data/site"

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
                <User className="h-4 w-4" />
                About Me
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Passionate About Building
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a software developer passionate about building efficient,
                user-friendly applications. With expertise in{" "}
                <span className="font-medium text-foreground">Rust</span>,{" "}
                <span className="font-medium text-foreground">TypeScript</span>,
                and modern web technologies, I focus on creating tools that make
                developers' and users' lives easier.
              </p>
              <p>
                My work spans from TUI utilities and desktop applications to
                monitoring tools and automation scripts. I believe in writing
                clean, maintainable code and shipping products that people
                actually want to use.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-muted">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-muted">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  href={siteConfig.links.email}
                  className="hover:text-foreground transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">GitHub Achievements</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.achievements.map((achievement) => (
                    <Badge
                      key={achievement}
                      variant="secondary"
                      className="bg-muted/80 hover:bg-muted border-border/50"
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-muted/50 border-border/50 hover:bg-muted hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="border-border/50 bg-gradient-to-br from-card to-card/80">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">49+</div>
                  <div className="text-sm text-muted-foreground">Repositories</div>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-gradient-to-br from-card to-card/80">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Coding</div>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-gradient-to-br from-card to-card/80">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">7</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
