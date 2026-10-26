import type { MetadataRoute } from "next";
import { LEGAL_DOCS } from "@/lib/legal";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...LEGAL_DOCS.map((doc) => ({ url: `${site.url}/legal/${doc.slug}`, changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
