import Link from "next/link";
import { CloudSun } from "lucide-react";

/**
 * Pied de page : navigation secondaire et mentions de l'académie.
 */
export function PiedDePage() {
  const annee = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-[var(--bordure)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <CloudSun className="h-5 w-5 text-soleil-500" aria-hidden="true" />
            MÉTÉO ACADEMY
          </div>
          <p className="mt-3 text-sm text-[var(--texte-doux)]">
            Comprendre le temps, anticiper l&apos;avenir.
          </p>
        </div>

        <nav aria-label="Liens du pied de page">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--texte-doux)]">Académie</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><Link className="hover:text-soleil-500" href="/formations">Formations</Link></li>
            <li><Link className="hover:text-soleil-500" href="/quiz">Quiz</Link></li>
            <li><Link className="hover:text-soleil-500" href="/glossaire">Glossaire</Link></li>
            <li><Link className="hover:text-soleil-500" href="/tarifs">Tarifs</Link></li>
            <li><Link className="hover:text-soleil-500" href="/a-propos">À propos</Link></li>
          </ul>
        </nav>

        <nav aria-label="Compte et assistance">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--texte-doux)]">Mon espace</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><Link className="hover:text-soleil-500" href="/connexion">Connexion</Link></li>
            <li><Link className="hover:text-soleil-500" href="/inscription">Inscription</Link></li>
            <li><Link className="hover:text-soleil-500" href="/tableau-de-bord">Tableau de bord</Link></li>
            <li><Link className="hover:text-soleil-500" href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-[var(--bordure)] py-4 text-center text-xs text-[var(--texte-doux)]">
        © {annee} MÉTÉO ACADEMY. Tous droits réservés.
      </div>
    </footer>
  );
}
