import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Lock } from "lucide-react";
import { formations, getFormation } from "@/data/formations";
import type { Formation } from "@/lib/types";
import { BoutonTerminerLecon } from "@/components/BoutonTerminerLecon";

interface Props {
  params: { slug: string; chapitre: string; lecon: string };
}

/** Aplatit les leçons d'une formation dans l'ordre pédagogique. */
function leconsDeFormation(formation: Formation) {
  return formation.chapitres.flatMap((chapitre) =>
    chapitre.lecons.map((lecon) => ({ chapitre, lecon })),
  );
}

export function generateStaticParams() {
  return formations.flatMap((formation) =>
    leconsDeFormation(formation).map(({ chapitre, lecon }) => ({
      slug: formation.slug,
      chapitre: chapitre.slug,
      lecon: lecon.slug,
    })),
  );
}

export function generateMetadata({ params }: Props) {
  const formation = getFormation(params.slug);
  const trouvee = formation && leconsDeFormation(formation).find((x) => x.lecon.slug === params.lecon);
  return { title: trouvee ? `${trouvee.lecon.titre} — ${formation?.titre}` : "Leçon introuvable" };
}

export default function PageLecon({ params }: Props) {
  const formation = getFormation(params.slug);
  if (!formation) notFound();

  const liste = leconsDeFormation(formation);
  const index = liste.findIndex((x) => x.lecon.slug === params.lecon && x.chapitre.slug === params.chapitre);
  if (index < 0) notFound();

  const { chapitre, lecon } = liste[index];
  const precedente = liste[index - 1];
  const suivante = liste[index + 1];
  const identifiant = `${formation.slug}/${chapitre.slug}/${lecon.slug}`;

  // Les formations premium restent en aperçu pour leur première leçon.
  const verrouillee = formation.acces === "premium" && index > 0;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <nav aria-label="Fil d'Ariane" className="text-sm text-[var(--texte-doux)]">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/formations" className="hover:text-soleil-500">Formations</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/formations/${formation.slug}`} className="hover:text-soleil-500">{formation.titre}</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[var(--texte)]" aria-current="page">{chapitre.titre}</li>
        </ol>
      </nav>

      <header className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-soleil-500">{chapitre.titre}</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{lecon.titre}</h1>
        <p className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--texte-doux)]">
          <Clock className="h-4 w-4" aria-hidden="true" /> Durée estimée : {lecon.duree}
        </p>
      </header>

      {verrouillee ? (
        <div className="carte mt-10 p-8 text-center">
          <Lock className="mx-auto h-10 w-10 text-soleil-500" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold">Leçon réservée aux abonnés</h2>
          <p className="mt-3 text-[var(--texte-doux)]">
            Cette formation premium est accessible après achat. La première leçon reste disponible en aperçu.
          </p>
          <Link href={`/formations/${formation.slug}`} className="bouton-secondaire mt-6">
            Retour à la formation
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-10 space-y-6 text-lg leading-relaxed">
            {lecon.contenu.map((paragraphe, i) => (
              <p key={i}>{paragraphe}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-[var(--bordure)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <BoutonTerminerLecon identifiant={identifiant} />
            {index === liste.length - 1 && (
              <Link href={`/quiz/${formation.slug}`} className="bouton-primaire">
                Passer le quiz final
              </Link>
            )}
          </div>
        </>
      )}

      <nav className="mt-16 grid gap-4 sm:grid-cols-2" aria-label="Navigation entre les leçons">
        {precedente ? (
          <Link
            href={`/formations/${formation.slug}/${precedente.chapitre.slug}/${precedente.lecon.slug}`}
            className="carte carte-survol flex items-center gap-3 p-5"
          >
            <ArrowLeft className="h-5 w-5 shrink-0 text-ciel-500" aria-hidden="true" />
            <span className="text-sm">
              <span className="block text-[var(--texte-doux)]">Précédente</span>
              <span className="font-semibold">{precedente.lecon.titre}</span>
            </span>
          </Link>
        ) : <span />}
        {suivante && (
          <Link
            href={`/formations/${formation.slug}/${suivante.chapitre.slug}/${suivante.lecon.slug}`}
            className="carte carte-survol flex items-center justify-end gap-3 p-5 text-right sm:col-start-2"
          >
            <span className="text-sm">
              <span className="block text-[var(--texte-doux)]">Suivante</span>
              <span className="font-semibold">{suivante.lecon.titre}</span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-ciel-500" aria-hidden="true" />
          </Link>
        )}
      </nav>
    </article>
  );
}
