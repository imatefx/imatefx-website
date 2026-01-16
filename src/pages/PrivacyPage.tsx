import { Link } from "react-router-dom"
import { ArrowLeft, Shield } from "lucide-react"
import { siteConfig } from "@/data/site"

export default function PrivacyPage() {
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
            <Shield className="h-4 w-4" />
            Privacy
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <h2>Our Commitment to Privacy</h2>
          <p>
            At {siteConfig.name}, we believe your data belongs to you. Curate is
            designed with privacy as a core principle. This Privacy Policy
            explains what data we collect (spoiler: almost none) and how we handle
            it.
          </p>

          <h2>1. Data Collection by the Software</h2>
          <h3>What Curate Does NOT Collect</h3>
          <p>The Curate desktop application:</p>
          <ul>
            <li>Does NOT upload your photos or files to any server</li>
            <li>Does NOT collect usage analytics or telemetry</li>
            <li>Does NOT track your activities</li>
            <li>Does NOT access the internet during operation</li>
            <li>Does NOT store any personal information</li>
          </ul>

          <h3>What Curate Accesses Locally</h3>
          <p>
            Curate only accesses files and folders that you explicitly select
            within the application. This data:
          </p>
          <ul>
            <li>Remains entirely on your local computer</li>
            <li>Is never transmitted to any external service</li>
            <li>Is processed locally to read EXIF metadata</li>
          </ul>

          <h2>2. Data Collection by Our Website</h2>
          <p>Our website (imatefx.com) may collect:</p>
          <ul>
            <li>
              <strong>Contact Information:</strong> If you contact us via email,
              we retain your email address and message content to respond to your
              inquiry.
            </li>
          </ul>

          <h2>3. Payment Processing</h2>
          <p>
            All purchases are processed by{" "}
            <a
              href="https://www.paddle.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paddle.com
            </a>
            , our authorized reseller and Merchant of Record. When you make a
            purchase:
          </p>
          <ul>
            <li>
              Paddle collects your payment information, email address, and billing
              details
            </li>
            <li>
              We receive your email address and order details from Paddle to
              fulfill your license
            </li>
            <li>
              We do NOT have access to your full payment card details
            </li>
          </ul>
          <p>
            Please review{" "}
            <a
              href="https://www.paddle.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paddle's Privacy Policy
            </a>{" "}
            for information on how they handle your data.
          </p>

          <h2>4. How We Use Your Information</h2>
          <p>The limited information we receive is used to:</p>
          <ul>
            <li>Deliver your software license</li>
            <li>Provide customer support</li>
            <li>Send important product updates (optional, you can opt out)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>We do NOT sell, rent, or share your personal information with third parties, except:</p>
          <ul>
            <li>
              <strong>Paddle:</strong> As our payment processor and reseller
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required by law or to protect
              our rights
            </li>
          </ul>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect any personal information we process. However, no method of
            transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your purchase information (email and order details) for as
            long as necessary to provide you with license support and comply with
            legal obligations. You may request deletion of your data at any time.
          </p>

          <h2>8. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a href={siteConfig.links.email}>{siteConfig.email}</a>.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our Software and website are not intended for children under 13. We do
            not knowingly collect personal information from children under 13.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new Privacy Policy on this
            page and updating the "Last updated" date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={siteConfig.links.email}>{siteConfig.email}</a>
          </p>
        </div>
      </div>
    </div>
  )
}
