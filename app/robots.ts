import { MetadataRoute } from "next";

// Tiedosto sijaitsee: app/robots.ts
// Next.js generoi automaattisesti /robots.txt tästä

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Estetään turhat reitit indeksoinnista jos niitä on (API, admin jne.)
        // disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://www.abomarineservice.com/sitemap.xml",
    host: "https://www.abomarineservice.com",
  };
}