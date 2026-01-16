import { ProductPageTemplate } from "@/components/products/ProductPageTemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProductBySlug } from "@/data/products"

const keybindings = {
  main: [
    { key: "q / Esc", action: "Quit" },
    { key: "r", action: "Refresh port list" },
    { key: "Enter / t", action: "Open process details popup" },
    { key: "↑ / k", action: "Move up" },
    { key: "↓ / j", action: "Move down" },
    { key: "← / h", action: "Scroll path left" },
    { key: "→ / l", action: "Scroll path right" },
    { key: "Home", action: "Reset scroll" },
  ],
  popup: [
    { key: "t", action: "Terminate process (SIGTERM)" },
    { key: "k", action: "Force kill process (SIGKILL)" },
    { key: "q / Esc", action: "Cancel and close" },
    { key: "← / →", action: "Navigate buttons" },
    { key: "Enter", action: "Execute selected action" },
  ],
}

export default function PortCheckerPage() {
  const product = getProductBySlug("port-checker")

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <ProductPageTemplate product={product}>
      {/* Keybindings */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Keybindings</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Main View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {keybindings.main.map((kb) => (
                  <div key={kb.key} className="flex justify-between text-sm">
                    <code className="px-2 py-1 bg-muted rounded">{kb.key}</code>
                    <span className="text-muted-foreground">{kb.action}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Popup Shortcuts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {keybindings.popup.map((kb) => (
                  <div key={kb.key} className="flex justify-between text-sm">
                    <code className="px-2 py-1 bg-muted rounded">{kb.key}</code>
                    <span className="text-muted-foreground">{kb.action}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Installation */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Installation</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Install (macOS & Linux)</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
              <code>
                curl -fsSL
                https://raw.githubusercontent.com/imatefx/process-port-check-tui/main/install.sh
                | sh
              </code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </ProductPageTemplate>
  )
}
