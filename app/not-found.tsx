import Link from "next/link";

export default function PageIntrouvable() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-soleil-500">Erreur 404</p>
      <h1 className="mt-3 text-4xl font-extrabold">Cette page s&apos;est dissipée</h1>
      <p className="mt-4 text-[var(--texte-doux)]">
        La page demandée n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="bouton-primaire">Retour à l&apos;accueil</Link>
        <Link href="/formations" className="bouton-secondaire">Voir les formations</Link>
      </div>
    </section>
  );
}
