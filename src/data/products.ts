export type ProductType = "commercial" | "open-source"

export interface ProductFeature {
  title: string
  description: string
  icon: string
}

export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  type: ProductType
  price?: {
    amount: number
    currency: string
  }
  techStack: string[]
  features: ProductFeature[]
  screenshots: string[]
  githubUrl?: string
  downloadUrl?: string
  featured: boolean
  order: number
}

export const products: Product[] = [
  {
    id: "curate",
    slug: "curate",
    name: "Curate",
    tagline: "Organize your media library with precision",
    description:
      "Curate automatically organizes your photos and videos into a clean folder structure based on EXIF metadata. No cloud, no subscriptions, just your files sorted perfectly.",
    longDescription: `Tired of scrolling through thousands of unsorted photos? Curate is a powerful desktop application that brings order to your media chaos.

Simply point Curate at your source folder (camera imports, downloads, or that dreaded "Unsorted" folder), define your preferred folder structure using smart templates, and let it do the heavy lifting. Curate reads EXIF metadata from your photos and videos to automatically sort them by date, camera, or any combination you choose.

**Preview before you commit** — see exactly where each file will go in an interactive tree view. Select specific files or entire folders. Curate shows you existing files in your destination so you never lose track of what's already organized.

No cloud uploads. No monthly fees. No AI training on your photos. Just a fast, native app that respects your privacy and gets the job done.`,
    type: "commercial",
    price: {
      amount: 29,
      currency: "USD",
    },
    techStack: ["Rust", "Tauri", "TypeScript", "React"],
    features: [
      {
        title: "EXIF-Powered",
        description: "Reads camera metadata to sort by actual capture date",
        icon: "Camera",
      },
      {
        title: "Preview First",
        description: "See exactly where files will go before processing",
        icon: "Eye",
      },
      {
        title: "RAW Support",
        description: "Works with all major camera RAW formats (NEF, CR2, ARW, DNG)",
        icon: "FileImage",
      },
      {
        title: "100% Offline",
        description: "Your photos never leave your computer",
        icon: "Shield",
      },
      {
        title: "Flexible Templates",
        description: "Create custom folder structures with smart variables",
        icon: "FolderTree",
      },
      {
        title: "Fast & Native",
        description: "Built with Rust for blazing performance",
        icon: "Zap",
      },
    ],
    screenshots: ["/products/curate/screenshot-1.png"],
    featured: true,
    order: 1,
  },
  {
    id: "port-checker",
    slug: "port-checker",
    name: "Port Checker",
    tagline: "TUI utility for listing TCP ports with process details",
    description:
      "A fast, lightweight TUI utility to list all listening TCP ports with full process details. Built with Rust and ratatui.",
    longDescription: `When running multiple instances of the same application (e.g., multiple Node.js servers), it's hard to tell which process is using which port. Port Checker shows the working directory and full command line, making it easy to identify each process.

Features include:
- List all listening TCP ports with PID, process name, and executable path
- View working directory and full command line arguments
- Horizontal scrolling for long paths
- Process details popup with terminate/force kill actions
- Vim-style keybindings (j/k/h/l)
- Status bar with action feedback`,
    type: "open-source",
    techStack: ["Rust", "ratatui", "crossterm"],
    features: [
      {
        title: "Terminal Native",
        description: "Beautiful TUI built with ratatui",
        icon: "Terminal",
      },
      {
        title: "Process Details",
        description: "See working directory and full command line",
        icon: "Info",
      },
      {
        title: "Vim Keybindings",
        description: "Navigate with j/k/h/l like a pro",
        icon: "Keyboard",
      },
      {
        title: "Process Control",
        description: "Terminate or force kill processes directly",
        icon: "Power",
      },
    ],
    screenshots: ["/products/port-checker/screenshot-1.png"],
    githubUrl: "https://github.com/imatefx/process-port-check-tui",
    featured: true,
    order: 2,
  },
  {
    id: "typesense-exporter",
    slug: "typesense-exporter",
    name: "Typesense Prometheus Exporter",
    tagline: "Prometheus metrics for Typesense search engine",
    description:
      "Export Typesense search engine metrics to Prometheus for monitoring. Includes Grafana dashboard templates.",
    longDescription: `A Prometheus exporter that fetches metrics from Typesense instances and converts them to Prometheus-readable format. Perfect for monitoring your Typesense cluster health, query performance, and resource utilization.

Features:
- Fetches comprehensive metrics from Typesense instances
- Docker deployment support with configurable environment variables
- Customizable bind address and port settings
- Includes 3 Grafana dashboard templates for visualization
- Command-line and environment variable configuration`,
    type: "open-source",
    techStack: ["Rust", "Prometheus", "Docker", "Grafana"],
    features: [
      {
        title: "Comprehensive Metrics",
        description: "Export stats and metrics from Typesense",
        icon: "BarChart3",
      },
      {
        title: "Grafana Ready",
        description: "Includes 3 dashboard templates for visualization",
        icon: "LayoutDashboard",
      },
      {
        title: "Docker Support",
        description: "Easy deployment with Docker",
        icon: "Container",
      },
      {
        title: "Configurable",
        description: "CLI flags and environment variable support",
        icon: "Settings",
      },
    ],
    screenshots: ["/products/typesense-exporter/grafana-dashboard.png"],
    githubUrl: "https://github.com/imatefx/typesense-prometheus-exporter",
    featured: false,
    order: 3,
  },
  {
    id: "nordvpn-gui",
    slug: "nordvpn-gui",
    name: "NordVPN GUI",
    tagline: "User-friendly GUI for NordVPN on Linux",
    description:
      "A native Linux desktop application providing a graphical interface for NordVPN's command-line client.",
    longDescription: `NordVPN GUI provides a user-friendly graphical interface for NordVPN on Linux, wrapping the NordVPN CLI in a beautiful, intuitive interface.

Features:
- Intuitive interface with easy navigation
- Server selection from global NordVPN locations
- Connection management (establish, disconnect, manage)
- Real-time connection status display
- Built with Rust, Svelte, and Tauri for native performance`,
    type: "open-source",
    techStack: ["Rust", "Svelte", "Tauri", "TypeScript"],
    features: [
      {
        title: "Intuitive Interface",
        description: "Easy navigation and server selection",
        icon: "Globe",
      },
      {
        title: "Connection Management",
        description: "Connect, disconnect, and monitor status",
        icon: "Wifi",
      },
      {
        title: "Native Performance",
        description: "Built with Tauri for lightweight desktop experience",
        icon: "Rocket",
      },
      {
        title: "Linux Native",
        description: "Designed specifically for Linux users",
        icon: "Monitor",
      },
    ],
    screenshots: ["/products/nordvpn-gui/screenshot-1.png"],
    githubUrl: "https://github.com/imatefx/nordvpn-gui",
    featured: true,
    order: 4,
  },
  {
    id: "autofilebackup",
    slug: "autofilebackup",
    name: "AutoFileBackup",
    tagline: "Automated file backup utility",
    description:
      "A lightweight application that monitors files for modifications and automatically creates backups of updated versions.",
    longDescription: `AutoFileBackup is a cross-platform desktop utility built with C++ and Qt that monitors files for modifications and automatically creates backups.

Features:
- File modification monitoring across all file types
- Automatic backup creation upon file changes
- Customizable backup naming with prefixes, suffixes, and timestamp insertion
- Flexible backup destination (specific location or subdirectory)
- Tab-based user interface for easy configuration
- Event logging capabilities`,
    type: "open-source",
    techStack: ["C++", "Qt", "QMake"],
    features: [
      {
        title: "File Monitoring",
        description: "Watch files for any modifications",
        icon: "Eye",
      },
      {
        title: "Auto Backup",
        description: "Automatically backup changed files",
        icon: "Save",
      },
      {
        title: "Custom Naming",
        description: "Configure backup file naming patterns",
        icon: "FileText",
      },
      {
        title: "Event Logging",
        description: "Track all backup activities",
        icon: "List",
      },
    ],
    screenshots: ["/products/autofilebackup/screenshot-1.png"],
    githubUrl: "https://github.com/imatefx/auto-file-backup",
    featured: false,
    order: 5,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured).sort((a, b) => a.order - b.order)
}

export function getCommercialProducts(): Product[] {
  return products.filter((p) => p.type === "commercial")
}
