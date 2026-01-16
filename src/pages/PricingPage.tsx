import { Link } from "react-router-dom"
import {
  Check,
  Download,
  Shield,
  RefreshCw,
  Monitor,
  HelpCircle,
  CreditCard,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { usePaddle } from "@/hooks/usePaddle"
import { getProductBySlug } from "@/data/products"

const features = [
  "Lifetime license - pay once, own forever",
  "All future updates included",
  "Use on up to 3 personal computers",
  "Windows, macOS, and Linux support",
  "RAW file format support",
  "100% offline - your files stay private",
  "Email support",
]

const faqs = [
  {
    question: "Is this a subscription?",
    answer:
      "No. One-time purchase, lifetime license. You own it forever and receive all future updates at no additional cost.",
  },
  {
    question: "Does it upload my photos anywhere?",
    answer:
      "No. Curate is 100% offline. Your files never leave your computer. We have no servers to upload to.",
  },
  {
    question: "What if a file doesn't have EXIF data?",
    answer:
      "Curate falls back to the file's modification date, so nothing gets left behind. You can also customize how undated files are handled.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes! We offer a 14-day money-back guarantee, no questions asked. See our refund policy for details.",
  },
  {
    question: "Do I need to be technical to use it?",
    answer:
      "Not at all. Pick your source folder, pick your destination, choose a template (or use the default), and click Process. It's that simple.",
  },
]

export default function PricingPage() {
  const { loading, error, openCheckout } = usePaddle()
  const curate = getProductBySlug("curate")

  const handlePurchase = () => {
    if (curate?.price?.paddleProductId) {
      openCheckout(curate.price.paddleProductId)
    }
  }

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
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <CreditCard className="h-4 w-4" />
            One-Time Purchase
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, Fair Pricing
          </h1>
          <p className="max-w-[600px] text-muted-foreground text-lg">
            Pay once, use forever. No subscriptions, no hidden fees.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto mb-16">
          <Card className="relative overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/80 hover:border-primary/30 transition-all">
            {/* Popular badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-primary to-primary/80">
                <Sparkles className="h-3 w-3 mr-1" />
                Popular
              </Badge>
            </div>

            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Curate</CardTitle>
              <CardDescription>Media organizer for everyone</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-8">
                <span className="text-6xl font-bold">$29</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>

              <ul className="space-y-4 text-left mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-green-500/10 mt-0.5">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                size="lg"
                className="w-full h-12 text-base"
                onClick={handlePurchase}
                disabled={loading || !!error}
              >
                {loading ? (
                  "Loading..."
                ) : error ? (
                  "Coming Soon"
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Buy Now - $29
                  </>
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                14-day free trial available. No credit card required.
              </p>
            </CardFooter>
          </Card>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted/50 border border-border/50">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm">Secure Payment via Paddle</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted/50 border border-border/50">
            <RefreshCw className="h-5 w-5 text-primary" />
            <span className="text-sm">14-Day Money Back</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted/50 border border-border/50">
            <Monitor className="h-5 w-5 text-primary" />
            <span className="text-sm">Win, Mac, Linux</span>
          </div>
        </div>

        {/* Free Trial */}
        <Card className="max-w-2xl mx-auto mb-16 border-border/50 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-semibold text-lg mb-2">Try Before You Buy</h3>
                <p className="text-muted-foreground text-sm">
                  Download the free trial and organize up to 100 files. All
                  features included. No credit card required.
                </p>
              </div>
              <Button
                variant="outline"
                asChild
                className="border-border/50 hover:bg-background"
              >
                <Link to="/products/curate">Download Free Trial</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQs */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Legal links */}
        <div className="flex justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <Link
            to="/terms"
            className="hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/refund"
            className="hover:text-foreground transition-colors"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
