import { Link } from "react-router-dom"
import { CheckCircle2, Download, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/data/site"

export default function ThankYouPage() {
  return (
    <div className="relative py-20 flex items-center justify-center min-h-[70vh]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
          <CheckCircle2 className="h-10 w-10 text-green-500" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Thank You!
        </h1>

        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Your purchase was successful. You'll receive an email with your license key and download instructions shortly.
        </p>

        <Card className="mb-8 border-border/50 bg-gradient-to-b from-card to-card/80">
          <CardContent className="pt-6">
            <h2 className="font-semibold text-lg mb-4">What's Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Check your email</p>
                  <p className="text-sm text-muted-foreground">
                    We've sent your license key and download link to your email address.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                  <Download className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Download & Install</p>
                  <p className="text-sm text-muted-foreground">
                    Download the app for your platform and enter your license key to activate.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="px-8">
            <Link to="/">
              <ArrowRight className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="px-8">
            <a href={siteConfig.links.email}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
