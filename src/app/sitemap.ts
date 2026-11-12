import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/clinic";
import { BLOG_ARTICLES } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about-us", changeFrequency: "monthly", priority: 0.9 },
    { path: "/treatments", changeFrequency: "monthly", priority: 0.9 },
    {
      path: "/dental-implants-kanpur",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/orthodontic-treatment-kanpur",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/braces-treatment-kanpur",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/general-dental-care-kanpur",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { path: "/gallery", changeFrequency: "monthly", priority: 0.8 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.85 },
    { path: "/contact-us", changeFrequency: "monthly", priority: 0.9 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_ARTICLES.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries];
}
