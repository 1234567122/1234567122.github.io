import type { MetadataRoute } from "next";
import { getAllPages, siteProfile } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllPages().map((page) => ({
    url: `${siteProfile.url}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date("2026-06-08"),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8
  }));
}
