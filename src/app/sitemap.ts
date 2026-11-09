import type { MetadataRoute } from "next";
import { profile } from "@/content/portfolio";
import { languagePaths } from "./portfolio-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [languagePaths.es, languagePaths.en].map((path) => ({
    url: new URL(path, profile.url).href,
  }));
}
