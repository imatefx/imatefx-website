import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProductBySlug } from "@/data/products"

const supportedFormats = {
  images: ["JPEG", "PNG", "TIFF", "HEIC", "HEIF", "WebP", "GIF", "BMP"],
  raw: [
    "NEF (Nikon)",
    "CR2/CR3 (Canon)",
    "ARW (Sony)",
    "DNG (Adobe)",
    "ORF (Olympus)",
    "RAF (Fujifilm)",
    "RW2 (Panasonic)",
  ],
  video: ["MP4", "MOV", "AVI", "MKV", "WebM", "M4V"],
}

export default function CuratePage() {
  const product = getProductBySlug("curate")
  const paymentButtonRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (paymentButtonRef.current && !paymentButtonRef.current.querySelector("script")) {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/payment-button.js"
      script.setAttribute("data-payment_button_id", "pl_S5HtStRX6M7aoJ")
      script.async = true
      paymentButtonRef.current.appendChild(script)
    }
  }, [])

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <ProductPageTemplate product={product}>
      {/* Supported Formats */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Supported Formats</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {supportedFormats.images.map((format) => (
                  <span
                    key={format}
                    className="px-2 py-1 text-xs bg-secondary rounded"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">RAW Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {supportedFormats.raw.map((format) => (
                  <span
                    key={format}
                    className="px-2 py-1 text-xs bg-secondary rounded"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Video</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {supportedFormats.video.map((format) => (
                  <span
                    key={format}
                    className="px-2 py-1 text-xs bg-secondary rounded"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to organize your media?</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          One-time purchase of $29. Lifetime license with all future updates
          included. No subscription required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <form ref={paymentButtonRef}></form>
          <Button asChild size="lg" variant="outline">
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Check className="h-4 w-4 text-green-500" />
            14-day free trial
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-4 w-4 text-green-500" />
            Windows, macOS, Linux
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-4 w-4 text-green-500" />
            No subscription
          </span>
        </div>
      </div>
    </ProductPageTemplate>
  )
}
