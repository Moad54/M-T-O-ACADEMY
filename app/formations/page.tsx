import { formations } from "@/data/formations";
import { CatalogueFormations } from "@/components/CatalogueFormations";

export const metadata = {
  title: "Formations",
  description: "Catalogue complet des formations MÉTÉO ACADEMY : nuages, orages, cartes, modèles numériques et bulletins.",
};

export default function PageFormations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="titre-section">Catalogue des formations</h1>
        <p className="mt-3 text-[var(--texte-doux)]">
          {formations.length} formations, du niveau débutant au niveau avancé. Recherchez un thème ou filtrez par niveau.
        </p>
      </header>
      <div className="mt-10">
        <CatalogueFormations formations={formations} />
      </div>
    </section>
  );
}
