import type { MetadataRoute } from "next";

const URL_SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Règles d'indexation pour les moteurs de recherche. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/tableau-de-bord"] }],
    sitemap: `${URL_SITE}/sitemap.xml`,
  };
}
