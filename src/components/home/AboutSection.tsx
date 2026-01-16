import { MapPin, Mail, Award, User, Code2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/data/site"
import { skillIcons } from "@/data/skillIcons"

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
                Engineering Manager and Software Architect with{" "}
                <span className="font-medium text-foreground">13+ years</span>{" "}
                of experience building scalable, cost-effective cloud solutions.
                Proven leadership in driving{" "}
                <span className="font-medium text-foreground">AI/ML integration</span>,
                streamlining development, and consistently delivering complex
                projects ahead of schedule.
              </p>
              <p>
                From TUI utilities and desktop applications to enterprise microservices
                and data pipelines, I focus on building tools that solve real problems.
                Active open-source contributor with projects featured in official
                documentation (Typesense) and contributions to GNOME.
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
                  {siteConfig.skills.map((skill) => {
                    const Icon = skillIcons[skill]
                    return (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="inline-flex items-center gap-1.5 bg-muted/50 border-border/50 hover:bg-muted hover:border-primary/30 transition-colors"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5" />}
                        {skill}
                      </Badge>
                    )
                  })}
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
                  <div className="text-3xl font-bold text-primary">13+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-gradient-to-br from-card to-card/80">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
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
