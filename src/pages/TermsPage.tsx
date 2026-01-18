import { Link } from "react-router-dom"
import { ArrowLeft, FileText } from "lucide-react"
import { siteConfig } from "@/data/site"

export default function TermsPage() {
  const lastUpdated = "January 2026"

  return (
    <div className="relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <FileText className="h-4 w-4" />
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <h2>1. Agreement to Terms</h2>
          <p>
            By purchasing, downloading, or using Curate ("Software"), you agree to
            be bound by these Terms of Service ("Terms"). If you do not agree to
            these Terms, do not use the Software.
          </p>

          <h2>2. License Grant</h2>
          <p>
            Subject to these Terms and payment of the applicable license fee,{" "}
            {siteConfig.name} ("Licensor", "we", "us") grants you a non-exclusive,
            non-transferable, limited license to:
          </p>
          <ul>
            <li>
              Install and use the Software on up to three (3) personal computers
              that you own or control
            </li>
            <li>
              Use the Software for personal and commercial purposes
            </li>
            <li>
              Receive all updates to the Software at no additional cost
            </li>
          </ul>

          <h2>3. License Restrictions</h2>
          <p>You may not:</p>
          <ul>
            <li>
              Redistribute, sell, lease, sublicense, or otherwise transfer the
              Software to third parties
            </li>
            <li>
              Modify, adapt, translate, reverse engineer, decompile, or
              disassemble the Software
            </li>
            <li>
              Remove or alter any proprietary notices, labels, or marks on the
              Software
            </li>
            <li>
              Use the Software in any way that violates applicable laws or
              regulations
            </li>
          </ul>

          <h2>4. Payment and Billing</h2>
          <p>
            All payments are processed by Razorpay, our payment processor.
            By making a purchase, you also agree to{" "}
            <a
              href="https://razorpay.com/terms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Razorpay's Terms of Service
            </a>
            .
          </p>
          <p>
            Prices are listed in USD and may be subject to applicable taxes based
            on your location.
          </p>

          <h2>5. Refunds</h2>
          <p>
            We offer a 14-day money-back guarantee. If you are not satisfied with
            the Software for any reason, you may request a full refund within 14
            days of purchase. See our{" "}
            <Link to="/refund">Refund Policy</Link> for details.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            The Software and all related materials, including but not limited to
            code, documentation, graphics, and trademarks, are owned by{" "}
            {siteConfig.name} and are protected by intellectual property laws.
            This license does not grant you any ownership rights in the Software.
          </p>

          <h2>7. Privacy</h2>
          <p>
            The Software operates entirely offline and does not collect, transmit,
            or store any user data. See our{" "}
            <Link to="/privacy">Privacy Policy</Link> for more information.
          </p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS
            OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NONINFRINGEMENT. WE DO NOT WARRANT THAT THE SOFTWARE WILL BE
            ERROR-FREE OR UNINTERRUPTED.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL {siteConfig.name.toUpperCase()} BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR
            OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SOFTWARE.
          </p>
          <p>
            OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE
            SOFTWARE.
          </p>

          <h2>10. Termination</h2>
          <p>
            This license is effective until terminated. Your rights under this
            license will terminate automatically without notice if you fail to
            comply with any of its terms. Upon termination, you must cease all use
            of the Software and destroy all copies.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify
            users of any material changes by posting the new Terms on our website.
            Your continued use of the Software after such modifications
            constitutes your acceptance of the updated Terms.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of India, without regard to its conflict of law provisions.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href={siteConfig.links.email}>{siteConfig.email}</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
