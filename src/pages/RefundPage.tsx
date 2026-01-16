import { Link } from "react-router-dom"
import { ArrowLeft, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/data/site"

export default function RefundPage() {
  const lastUpdated = "January 2026"

  return (
    <div className="py-12">
      <div className="container px-4 md:px-6 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tighter mb-4">
          Refund Policy
        </h1>
        <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

        {/* Highlight box */}
        <Card className="mb-8 bg-green-500/10 border-green-500/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
              <div>
                <h2 className="font-semibold text-lg mb-2">
                  14-Day Money-Back Guarantee
                </h2>
                <p className="text-muted-foreground">
                  We offer a full refund within 14 days of purchase, no questions
                  asked. If Curate doesn't meet your needs, we'll refund your
                  payment in full.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Eligibility for Refund</h2>
          <p>You are eligible for a full refund if:</p>
          <ul>
            <li>Your purchase was made within the last 14 days</li>
            <li>This is your first refund request for Curate</li>
          </ul>

          <h2>How to Request a Refund</h2>
          <p>To request a refund:</p>
          <ol>
            <li>
              Send an email to{" "}
              <a href={siteConfig.links.email}>{siteConfig.email}</a> with the
              subject line "Refund Request"
            </li>
            <li>
              Include your order number or the email address used for the purchase
            </li>
            <li>
              Optionally, let us know why Curate didn't work for you (this helps
              us improve)
            </li>
          </ol>

          <h2>Processing Time</h2>
          <p>
            Refund requests are typically processed within 3-5 business days. The
            actual time for the refund to appear in your account depends on your
            payment method and financial institution, usually 5-10 business days.
          </p>

          <h2>Refund Method</h2>
          <p>
            Refunds are processed by Paddle, our payment processor, and will be
            issued to the original payment method used for the purchase.
          </p>

          <h2>After a Refund</h2>
          <p>Once a refund is processed:</p>
          <ul>
            <li>Your license will be deactivated</li>
            <li>
              You should uninstall the Software from all devices
            </li>
            <li>
              Any files organized by Curate will remain in their organized
              locations (we don't undo your work)
            </li>
          </ul>

          <h2>Exceptions</h2>
          <p>Refunds may not be granted in the following cases:</p>
          <ul>
            <li>Requests made more than 14 days after purchase</li>
            <li>Multiple refund requests from the same individual</li>
            <li>
              Evidence of abuse or fraudulent activity
            </li>
          </ul>

          <h2>Free Trial</h2>
          <p>
            We strongly encourage you to use our free trial before purchasing.
            The trial includes all features and allows you to organize up to 100
            files, giving you a complete picture of how Curate works.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have any questions about our refund policy, please contact us
            at <a href={siteConfig.links.email}>{siteConfig.email}</a>. We're
            happy to help!
          </p>
        </div>
      </div>
    </div>
  )
}
