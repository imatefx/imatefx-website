export interface NavItem {
  title: string
  href: string
  description?: string
}

export const mainNav: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
]

export const footerNav = {
  products: [
    { title: "Curate", href: "/products/curate" },
    { title: "Port Checker", href: "/products/port-checker" },
    { title: "Typesense Exporter", href: "/products/typesense-exporter" },
    { title: "NordVPN GUI", href: "/products/nordvpn-gui" },
    { title: "AutoFileBackup", href: "/products/autofilebackup" },
  ],
  legal: [
    { title: "Terms of Service", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Refund Policy", href: "/refund" },
  ],
  social: [
    { title: "GitHub", href: "https://github.com/imatefx" },
    { title: "LinkedIn", href: "https://linkedin.com/in/stalin-pereira" },
  ],
}
