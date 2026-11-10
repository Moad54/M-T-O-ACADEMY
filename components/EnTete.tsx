"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloudSun, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const liens = [
  { href: "/", libelle: "Accueil" },
  { href: "/formations", libelle: "Formations" },
  { href: "/quiz", libelle: "Quiz" },
  { href: "/glossaire", libelle: "Glossaire" },
  { href: "/tarifs", libelle: "Tarifs" },
  { href: "/a-propos", libelle: "À propos" },
  { href: "/contact", libelle: "Contact" },
];

/**
 * En-tête du site : logo, navigation, bascule de thème et menu mobile.
 */
export function EnTete() {
  const [ouvert, setOuvert] = useState(false);
  const chemin = usePathname();

  function estActif(href: string) {
    return href === "/" ? chemin === "/" : chemin?.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--bordure)] bg-[var(--fond)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight" aria-label="MÉTÉO ACADEMY, accueil">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ciel-400 to-nuit-700 text-white shadow-md">
            <CloudSun className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg">
            MÉTÉO <span className="text-soleil-500">ACADEMY</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {liens.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              aria-current={estActif(lien.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:text-soleil-500 ${
                estActif(lien.href) ? "text-soleil-500" : "text-[var(--texte-doux)]"
              }`}
            >
              {lien.libelle}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/connexion" className="hidden rounded-xl border border-[var(--bordure)] px-4 py-2 text-sm font-semibold transition hover:border-ciel-400 sm:inline-flex">
            Connexion
          </Link>
          <Link href="/inscription" className="hidden rounded-xl bg-soleil-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-soleil-600 md:inline-flex">
            S'inscrire
          </Link>
          <button
            type="button"
            onClick={() => setOuvert((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--bordure)] lg:hidden"
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={ouvert}
            aria-controls="menu-mobile"
          >
            {ouvert ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {ouvert && (
        <nav id="menu-mobile" className="border-t border-[var(--bordure)] bg-[var(--surface)] px-4 py-4 lg:hidden" aria-label="Navigation mobile">
          <ul className="grid gap-1">
            {[...liens, { href: "/connexion", libelle: "Connexion" }, { href: "/tableau-de-bord", libelle: "Tableau de bord" }].map((lien) => (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  onClick={() => setOuvert(false)}
                  className="block rounded-lg px-3 py-3 font-medium hover:bg-ciel-50 hover:text-nuit-800 dark:hover:bg-nuit-800"
                >
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
