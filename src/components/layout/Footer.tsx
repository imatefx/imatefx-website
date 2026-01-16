import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { footerNav } from "@/data/navigation"
import { siteConfig } from "@/data/site"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-muted/30">
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-muted/50" />

      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  ix
                </span>
              </div>
              <span className="text-xl font-bold group-hover:text-primary transition-colors">
                {siteConfig.handle}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building tools that solve real problems for developers and users.
            </p>
            <div className="flex space-x-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/80 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/80 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.email}
                className="p-2 rounded-lg bg-muted/80 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerNav.products.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.links.email}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/40" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" />{" "}
            using React, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}
