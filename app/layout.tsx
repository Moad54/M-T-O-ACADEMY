import type { Metadata, Viewport } from "next";
import "./globals.css";
import { EnTete } from "@/components/EnTete";
import { PiedDePage } from "@/components/PiedDePage";

const URL_SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITE),
  title: {
    default: "MÉTÉO ACADEMY — Formation en météorologie en français",
    template: "%s | MÉTÉO ACADEMY",
  },
  description:
    "MÉTÉO ACADEMY enseigne la météorologie en français, du niveau débutant au niveau avancé : nuages, orages, cartes, modèles numériques et bulletins.",
  keywords: ["météorologie", "formation météo", "cours météo", "prévision", "nuages", "cartes météo", "vigilance"],
  applicationName: "MÉTÉO ACADEMY",
  authors: [{ name: "MÉTÉO ACADEMY" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "MÉTÉO ACADEMY",
    title: "MÉTÉO ACADEMY — Comprendre le temps, anticiper l'avenir",
    description: "Une académie numérique de météorologie, professionnelle et accessible.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#060f24" },
  ],
  width: "device-width",
  initialScale: 1,
};

/**
 * Script exécuté avant le premier rendu : applique le thème mémorisé
 * (ou la préférence système) pour éviter tout clignotement.
 */
const scriptTheme = `
(function () {
  try {
    var t = localStorage.getItem('meteo-academy-theme');
    var sombre = t === 'sombre' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (sombre) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTheme }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-soleil-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>
        <EnTete />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <PiedDePage />
      </body>
    </html>
  );
}
