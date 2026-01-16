import { createBrowserRouter } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import HomePage from "@/pages/HomePage"
import ProductsPage from "@/pages/ProductsPage"
import PricingPage from "@/pages/PricingPage"
import TermsPage from "@/pages/TermsPage"
import PrivacyPage from "@/pages/PrivacyPage"
import RefundPage from "@/pages/RefundPage"
import CuratePage from "@/pages/products/CuratePage"
import PortCheckerPage from "@/pages/products/PortCheckerPage"
import TypesenseExporterPage from "@/pages/products/TypesenseExporterPage"
import NordVPNGUIPage from "@/pages/products/NordVPNGUIPage"
import AutoFileBackupPage from "@/pages/products/AutoFileBackupPage"
import NotFoundPage from "@/pages/NotFoundPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/curate", element: <CuratePage /> },
      { path: "products/port-checker", element: <PortCheckerPage /> },
      { path: "products/typesense-exporter", element: <TypesenseExporterPage /> },
      { path: "products/nordvpn-gui", element: <NordVPNGUIPage /> },
      { path: "products/autofilebackup", element: <AutoFileBackupPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "refund", element: <RefundPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])
