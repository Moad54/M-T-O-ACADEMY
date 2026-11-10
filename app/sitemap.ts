import type { MetadataRoute } from "next";
import { formations } from "@/data/formations";

const URL_SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Plan du site généré automatiquement à partir du catalogue. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/formations", "/quiz", "/glossaire", "/tarifs", "/a-propos", "/contact", "/connexion", "/inscription"];
  const statiques = pages.map((p) => ({ url: `${URL_SITE}${p}`, lastModified: new Date() }));
  const formationsPages = formations.map((f) => ({
    url: `${URL_SITE}/formations/${f.slug}`,
    lastModified: new Date(),
  }));
  return [...statiques, ...formationsPages];
}
