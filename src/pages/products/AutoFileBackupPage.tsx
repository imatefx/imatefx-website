import { ProductPageTemplate } from "@/components/products/ProductPageTemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProductBySlug } from "@/data/products"

const systemRequirements = [
  { label: "Windows", value: "Windows 7 or later" },
  { label: "macOS", value: "OS X 10.10 or later" },
  { label: "Qt", value: "Qt 5.x" },
]

export default function AutoFileBackupPage() {
  const product = getProductBySlug("autofilebackup")

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <ProductPageTemplate product={product}>
      {/* System Requirements */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">System Requirements</h2>
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="space-y-3">
              {systemRequirements.map((req) => (
                <div key={req.label} className="flex items-center gap-2">
                  <Badge variant="outline">{req.label}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {req.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </span>
                Select Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Choose the files you want to monitor for changes
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  2
                </span>
                Configure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Set backup destination and naming preferences
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3
                </span>
                Automatic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                AutoFileBackup creates backups whenever files change
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Downloads */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Downloads</h2>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-lg">Available On</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Available on Softpedia, SourceForge, and CNET</p>
              <p>Latest version: v1.5</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProductPageTemplate>
  )
}
