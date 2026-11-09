import type { MetadataRoute } from "next";
import { profile } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/en"].map((path) => ({
    url: `${profile.url}${path}`,
    changeFrequency: "monthly",
    priority: 1,
  }));
}
