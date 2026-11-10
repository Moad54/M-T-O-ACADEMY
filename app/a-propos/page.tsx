import Link from "next/link";
import { Compass, GraduationCap, Target, Users } from "lucide-react";

export const metadata = {
  title: "À propos",
  description: "Découvrez la mission de MÉTÉO ACADEMY, l'académie numérique de météorologie en français.",
};

const valeurs = [
  {
    icone: GraduationCap,
    titre: "Une pédagogie progressive",
    texte: "Chaque notion s'appuie sur la précédente, du fonctionnement de l'atmosphère jusqu'à la présentation d'un bulletin.",
  },
  {
    icone: Target,
    titre: "Des contenus exacts",
    texte: "Les cours décrivent des phénomènes et des méthodes établis. Aucune donnée météo en temps réel n'est inventée.",
  },
  {
    icone: Users,
    titre: "Une académie accessible",
    texte: "Tout est en français, sans prérequis scientifique pour les formations de niveau débutant.",
  },
  {
    icone: Compass,
    titre: "Pour aller plus loin",
    texte: "Les formations avancées abordent les modèles numériques et l'interprétation experte des cartes.",
  },
];

export default function PageAPropos() {
  return (
    <>
      <section className="bg-gradient-to-br from-nuit-900 to-ciel-600 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-soleil-400">À propos</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Une académie pour comprendre le ciel</h1>
          <p className="mt-6 text-lg text-white/85">
            MÉTÉO ACADEMY réunit les connaissances nécessaires pour observer, expliquer et annoncer le temps.
            Notre objectif : rendre la météorologie accessible à tous, sans rien sacrifier à la rigueur.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="mission-titre">
        <h2 id="mission-titre" className="titre-section">Notre mission</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--texte-doux)]">
          Comprendre le temps, c&apos;est mieux se préparer aux épisodes qu&apos;il nous réserve. Nous proposons des
          formations structurées, des quiz corrigés et un glossaire pour accompagner les apprenants, qu&apos;ils soient
          passionnés, étudiants ou futurs présentateurs de bulletin.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {valeurs.map(({ icone: Icone, titre, texte }) => (
            <div key={titre} className="carte carte-survol p-6">
              <Icone className="h-7 w-7 text-soleil-500" aria-hidden="true" />
              <h3 className="mt-4 font-bold">{titre}</h3>
              <p className="mt-2 text-sm text-[var(--texte-doux)]">{texte}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link href="/formations" className="bouton-primaire">Découvrir les formations</Link>
          <Link href="/contact" className="bouton-secondaire">Nous contacter</Link>
        </div>
      </section>
    </>
  );
}
