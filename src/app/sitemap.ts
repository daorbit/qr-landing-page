import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qrstudio.daorbit.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refunds`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/shipping-policy`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
