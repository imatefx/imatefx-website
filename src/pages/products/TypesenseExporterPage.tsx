import { ProductPageTemplate } from "@/components/products/ProductPageTemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProductBySlug } from "@/data/products"

export default function TypesenseExporterPage() {
  const product = getProductBySlug("typesense-exporter")

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <ProductPageTemplate product={product}>
      {/* Usage */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Quick Start</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Docker</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                <code>{`docker run -d \\
  -e TYPESENSE_URL=http://typesense:8108 \\
  -e TYPESENSE_API_KEY=your_api_key \\
  -p 9090:9090 \\
  imatefx/typesense-prometheus-exporter`}</code>
              </pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Binary</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                <code>{`./typesense-prometheus-exporter \\
  --typesense-url http://localhost:8108 \\
  --typesense-api-key your_api_key \\
  --bind-address 0.0.0.0:9090`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Grafana Dashboards */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Included Grafana Dashboards
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Typesense Metrics</h3>
              <p className="text-sm text-muted-foreground">
                Overview of cluster health and performance metrics
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Metrics By Collection</h3>
              <p className="text-sm text-muted-foreground">
                Per-collection statistics and document counts
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Typesense Stats</h3>
              <p className="text-sm text-muted-foreground">
                Detailed statistics and resource utilization
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProductPageTemplate>
  )
}
