import Link from "next/link";
import { Clock, Lock, Unlock } from "lucide-react";
import type { Formation } from "@/lib/types";
import { IconeMeteo } from "./IconeMeteo";

/**
 * Carte de présentation d'une formation : illustration, niveau, durée et accès.
 */
export function CarteFormation({ formation }: { formation: Formation }) {
  const premium = formation.acces === "premium";
  return (
    <article className="carte carte-survol group flex flex-col overflow-hidden">
      <div className={`relative flex h-36 items-end bg-gradient-to-br ${formation.couleur} p-5`}>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur transition group-hover:scale-110">
          <IconeMeteo nom={formation.icone} className="h-6 w-6" />
        </span>
        <span
          className={`absolute right-4 top-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
            premium ? "bg-soleil-500 text-white" : "bg-white/90 text-nuit-800"
          }`}
        >
          {premium ? <Lock className="h-3 w-3" aria-hidden="true" /> : <Unlock className="h-3 w-3" aria-hidden="true" />}
          {premium ? "Premium" : "Gratuit"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs font-medium text-[var(--texte-doux)]">
          <span>{formation.niveau}</span>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {formation.duree}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-bold leading-snug">{formation.titre}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-[var(--texte-doux)]">{formation.sousTitre}</p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="font-semibold text-soleil-500">
            {premium && formation.prix ? `${formation.prix} MAD` : "Accès libre"}
          </span>
          <Link
            href={`/formations/${formation.slug}`}
            className="text-sm font-semibold text-ciel-600 hover:text-soleil-500 dark:text-ciel-300"
            aria-label={`Voir la formation : ${formation.titre}`}
          >
            Découvrir →
          </Link>
        </div>
      </div>
    </article>
  );
}
