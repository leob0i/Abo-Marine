import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const BASE_URL = "https://abomarineservice.com"

export const viewport: Viewport = {
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Åbo Marine Service Oy | Venehuolto Turku",
    template: "%s | Åbo Marine Service Oy",
  },
  description: "Liikkuva veneiden ja venemoottoreiden huoltopalvelu Turun alueella. Lähes 20 vuoden kokemus. Tule luoksemme tai me tulemme sinulle.",
  keywords: ["venehuolto", "Turku", "venekorjaamo", "venehuolto Turku", "venemoottori huolto", "liikkuva venehuolto"],
  authors: [{ name: "Åbo Marine Service Oy" }],
  creator: "Åbo Marine Service Oy",
  publisher: "Åbo Marine Service Oy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: BASE_URL,
    siteName: "Åbo Marine Service Oy",
    title: "Åbo Marine Service Oy | Venehuolto Turku",
    description: "Liikkuva veneiden ja venemoottoreiden huoltopalvelu Turun alueella. Lähes 20 vuoden kokemus.",
    images: [
      {
        url: "/og-image.jpg", // 1200x630px kuva
        width: 1200,
        height: 630,
        alt: "Åbo Marine Service Oy – Venehuolto Turku",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Åbo Marine Service Oy | Venehuolto Turku",
    description: "Liikkuva veneiden ja venemoottoreiden huoltopalvelu Turun alueella.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
}