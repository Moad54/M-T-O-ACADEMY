import Link from "next/link";
import { Check } from "lucide-react";
import { formations } from "@/data/formations";
import { BoutonAchat } from "@/components/BoutonAchat";

export const metadata = {
  title: "Tarifs",
  description: "Formations gratuites et formations premium de MÉTÉO ACADEMY, avec leurs tarifs en dirhams.",
};

const premium = formations.filter((f) => f.acces === "premium");
const gratuites = formations.filter((f) => f.acces === "gratuit");

export default function PageTarifs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="titre-section">Tarifs</h1>
        <p className="mt-3 text-[var(--texte-doux)]">
          Commencez gratuitement, puis achetez les formations premium qui vous intéressent.
        </p>
      </header>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* Offre gratuite */}
        <div className="carte flex flex-col p-8">
          <h2 className="text-xl font-bold">Accès gratuit</h2>
          <p className="mt-2 text-4xl font-extrabold">0 MAD</p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Création d'un compte",
              `${gratuites.length} formations gratuites`,
              "Quiz corrigés des formations gratuites et glossaire complet",
              "Suivi de progression sur votre tableau de bord",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/inscription" className="bouton-secondaire mt-auto pt-0">
            Créer mon compte
          </Link>
        </div>

        {/* Formations premium */}
        <div className="carte p-8">
          <h2 className="text-xl font-bold">Formations premium</h2>
          <p className="mt-2 text-sm text-[var(--texte-doux)]">Achat à l&apos;unité, prix indiqués en dirhams (MAD).</p>
          <ul className="mt-6 divide-y divide-[var(--bordure)]">
            {premium.map((formation) => (
              <li key={formation.slug} className="py-4">
                <div className="flex items-center justify-between gap-4">
                  <Link href={`/formations/${formation.slug}`} className="font-semibold hover:text-soleil-500">
                    {formation.titre}
                  </Link>
                  <span className="shrink-0 font-bold text-soleil-500">{formation.prix} MAD</span>
                </div>
                <div className="mt-3">
                  <BoutonAchat formation={formation} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-xs text-[var(--texte-doux)]">
        Les paiements ne sont pas encore activés sur cette version du site. Aucun montant ne sera débité tant que la passerelle de paiement n&apos;est pas configurée.
      </p>
    </section>
  );
}
