import type { MetadataRoute } from "next";
import { locales } from "@/content";

const siteUrl = "https://tryelsonmarques.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.8,
    alternates: { languages: { "pt-BR": `${siteUrl}/pt`, en: `${siteUrl}/en` } },
  }));
}
