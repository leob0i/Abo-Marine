import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── GLOBAALI METADATA ──────────────────────────────────────────────────────
// Jokainen sivu perii tämän. Per-sivu metadata (page.tsx) ylikirjoittaa tarvittaessa.

export const metadata: Metadata = {
  // title.template näkyy alasivuilla: "Huollot ja korjaukset | Åbo Marine Service"
  title: {
    default: "Åbo Marine Service Oy – Liikkuva venehuolto Turku",
    template: "%s | Åbo Marine Service Oy",
  },
  description:
    "Ammattitaitoista veneiden ja venemoottoreiden huoltoa sekä korjausta Turun alueella. Liikkuva palvelu – tulemme sinne missä veneesi on. Volvo Penta, Yanmar, Yamaha ja muut merkit. Lähes 20 vuoden kokemus.",
  keywords: [
    "venehuolto Turku",
    "venekorjaus Turku",
    "liikkuva venehuolto",
    "venemoottori huolto",
    "Volvo Penta huolto Turku",
    "Yanmar huolto Turku",
    "venehuolto Kaarina",
    "venehuolto Naantali",
    "venehuolto Raisio",
    "veneiden talvisäilytys Turku",
    "veneen nosto ja kuljetus",
    "Åbo Marine Service",
    "merialan huolto Turku",
  ],
  authors: [{ name: "Åbo Marine Service Oy" }],
  creator: "Åbo Marine Service Oy",
  publisher: "Åbo Marine Service Oy",

  // Canonical URL — tärkeä kun domainilla on useita versioita (www / ei-www / vercel)
  alternates: {
    canonical: "https://www.abomarineservice.com",
  },

  // Open Graph — Facebook, LinkedIn, WhatsApp esikatselut
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: "https://www.abomarineservice.com",
    siteName: "Åbo Marine Service Oy",
    title: "Åbo Marine Service Oy – Liikkuva venehuolto Turku",
    description:
      "Ammattitaitoista veneiden ja venemoottoreiden huoltoa Turun alueella. Liikkuva palvelu lähes 20 vuoden kokemuksella. Volvo Penta, Yanmar, Yamaha ja muut merkit.",
    images: [
      {
        url: "https://www.abomarineservice.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Åbo Marine Service Oy – Liikkuva venehuolto Turku",
      },
    ],
  },

  // Twitter / X -kortti
  twitter: {
    card: "summary_large_image",
    title: "Åbo Marine Service Oy – Liikkuva venehuolto Turku",
    description:
      "Ammattitaitoista veneiden ja venemoottoreiden huoltoa Turun alueella lähes 20 vuoden kokemuksella.",
    images: ["https://www.abomarineservice.com/opengraph-image.png"],
  },

  // Robots: sallitaan indeksointi täysin
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification — lisää Google Search Console -koodi tähän kun saat sen
  // verification: {
  //   google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  // },
};

// ─── JSON-LD STRUCTURED DATA ─────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // LocalBusiness – Marine Service
    {
      "@type": ["LocalBusiness", "MarineService"],
      "@id": "https://www.abomarineservice.com/#business",
      name: "Åbo Marine Service Oy",
      url: "https://www.abomarineservice.com",
      telephone: "+358400242789",
      email: "info@abomarineservice.com",
      description:
        "Ammattitaitoista veneiden ja venemoottoreiden huoltoa sekä korjausta Turun alueella. Liikkuva palvelu – tulemme sinne missä veneesi on. Volvo Penta, Yanmar, Yamaha ja muut merkit. Lähes 20 vuoden kokemus.",
      serviceType: "Venehuolto ja venekorjaus",
      priceRange: "€€",
      image: "https://www.abomarineservice.com/opengraph-image.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ravurinkatu 29",
        addressLocality: "Turku",
        postalCode: "20380",
        addressCountry: "FI",
      },
      areaServed: [
        { "@type": "City", name: "Turku" },
        { "@type": "City", name: "Kaarina" },
        { "@type": "City", name: "Raisio" },
        { "@type": "City", name: "Naantali" },
      ],
      hasOfferCatalog: { "@id": "https://www.abomarineservice.com/#offerCatalog" },
    },

    // Organization
    {
      "@type": "Organization",
      "@id": "https://www.abomarineservice.com/#organization",
      name: "Åbo Marine Service Oy",
      url: "https://www.abomarineservice.com",
      telephone: "+358400242789",
      email: "info@abomarineservice.com",
      description:
        "Liikkuva venehuolto- ja korjausyritys Turun alueella. Lähes 20 vuoden kokemus venemoottoreiden ja veneiden huollosta.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ravurinkatu 29",
        addressLocality: "Turku",
        postalCode: "20380",
        addressCountry: "FI",
      },
      areaServed: ["Turku", "Kaarina", "Raisio", "Naantali", "Turun saaristo"],
    },

    // OfferCatalog
    {
      "@type": "OfferCatalog",
      "@id": "https://www.abomarineservice.com/#offerCatalog",
      name: "Åbo Marine Service – Palvelut",
      provider: { "@id": "https://www.abomarineservice.com/#business" },
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.abomarineservice.com/#service-venehuolto",
            name: "Venehuolto",
            description:
              "Ammattitaitoinen venehuolto kaikille merkeille. Vuosihuollot, öljynvaihdot ja tekniset tarkastukset.",
            serviceType: "Venehuolto",
            provider: { "@id": "https://www.abomarineservice.com/#business" },
            areaServed: ["Turku", "Kaarina", "Raisio", "Naantali"],
            url: "https://www.abomarineservice.com/huollot",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.abomarineservice.com/#service-liikkuva-venehuolto",
            name: "Liikkuva venehuolto",
            description:
              "Tulemme sinne missä veneesi on – kotisatamaan, talvisäilytyspaikkaan tai muualle Turun alueella ja saaristossa.",
            serviceType: "Liikkuva venehuolto",
            provider: { "@id": "https://www.abomarineservice.com/#business" },
            areaServed: ["Turku", "Kaarina", "Raisio", "Naantali", "Turun saaristo"],
            url: "https://www.abomarineservice.com/huollot",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.abomarineservice.com/#service-volvo-penta",
            name: "Volvo Penta huolto",
            description:
              "Volvo Penta -moottoreiden ja vetolaitteiden huolto ja korjaus alkuperäisosilla valmistajan ohjeiden mukaisesti.",
            serviceType: "Volvo Penta venemoottorihuolto",
            provider: { "@id": "https://www.abomarineservice.com/#business" },
            areaServed: ["Turku", "Kaarina", "Raisio", "Naantali"],
            url: "https://www.abomarineservice.com/huollot",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.abomarineservice.com/#service-yanmar",
            name: "Yanmar huolto",
            description:
              "Yanmar-venemoottoreiden vuosihuolto ja korjaukset ammattitaitoisesti Turun alueella.",
            serviceType: "Yanmar venemoottorihuolto",
            provider: { "@id": "https://www.abomarineservice.com/#business" },
            areaServed: ["Turku", "Kaarina", "Raisio", "Naantali"],
            url: "https://www.abomarineservice.com/huollot",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.abomarineservice.com/#service-venekorjaus",
            name: "Turku venekorjaus",
            description:
              "Veneiden korjaukset moottorityypistä ja iästä riippumatta. Yli 20 vuoden kokemus erilaisista venekorjauksista.",
            serviceType: "Venekorjaus",
            provider: { "@id": "https://www.abomarineservice.com/#business" },
            areaServed: ["Turku", "Kaarina", "Raisio", "Naantali"],
            url: "https://www.abomarineservice.com/huollot",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.abomarineservice.com/#service-varaosat",
            name: "Veneen varaosat",
            description:
              "Alkuperäiset varaosat Volvo Penta-, Yanmar-, Yamaha- ja muihin venemoottoreihin.",
            serviceType: "Veneen varaosat",
            provider: { "@id": "https://www.abomarineservice.com/#business" },
            areaServed: ["Turku", "Kaarina", "Raisio", "Naantali"],
            url: "https://www.abomarineservice.com",
          },
        },
      ],
    },
  ],
};

// ─── ROOT LAYOUT ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <head>
        {/* JSON-LD rakennepäätelmä */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}