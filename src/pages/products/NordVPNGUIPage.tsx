import { ProductPageTemplate } from "@/components/products/ProductPageTemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProductBySlug } from "@/data/products"

const plannedFeatures = [
  "Advanced settings (kill switch, DNS, auto-connect)",
  "Favorites and recent servers",
  "Connection statistics",
  "System tray integration",
]

export default function NordVPNGUIPage() {
  const product = getProductBySlug("nordvpn-gui")

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <ProductPageTemplate product={product}>
      {/* Requirements */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Requirements</h2>
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Badge variant="outline">Required</Badge>
                <span className="text-sm">NordVPN CLI installed</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline">OS</Badge>
                <span className="text-sm">Linux (Ubuntu, Fedora, Arch, etc.)</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline">Account</Badge>
                <span className="text-sm">Active NordVPN subscription</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Planned Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Planned Features</h2>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-lg">Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {plannedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </ProductPageTemplate>
  )
}
