import { glossaire } from "@/data/glossaire";
import { GlossaireRecherche } from "@/components/GlossaireRecherche";

export const metadata = {
  title: "Glossaire météorologique",
  description: "Définitions des termes scientifiques de la météorologie : nuages, fronts, pressions, vigilance et plus.",
};

export default function PageGlossaire() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="titre-section">Glossaire météorologique</h1>
        <p className="mt-3 text-[var(--texte-doux)]">
          Les définitions des notions utilisées dans les cours, classées par ordre alphabétique.
        </p>
      </header>
      <div className="mt-10">
        <GlossaireRecherche termes={glossaire} />
      </div>
    </section>
  );
}
