import { MetadataRoute } from "next";

// Tiedosto sijaitsee: app/sitemap.ts
// Next.js generoi automaattisesti /sitemap.xml tästä

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.abomarineservice.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/huollot`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/meista`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}