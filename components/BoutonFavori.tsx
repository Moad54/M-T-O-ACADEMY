"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { basculerFavori, lireFavoris } from "@/lib/stockage";

/** Bouton d'ajout ou de retrait d'une formation des favoris. */
export function BoutonFavori({ slug }: { slug: string }) {
  const [favori, setFavori] = useState(false);
  const [pret, setPret] = useState(false);

  useEffect(() => {
    setFavori(lireFavoris().includes(slug));
    setPret(true);
  }, [slug]);

  return (
    <button
      type="button"
      onClick={() => setFavori(basculerFavori(slug))}
      disabled={!pret}
      aria-pressed={favori}
      className="bouton-secondaire w-full"
    >
      <Heart
        className={`h-4 w-4 transition ${favori ? "fill-soleil-500 text-soleil-500" : ""}`}
        aria-hidden="true"
      />
      {favori ? "Retirer des favoris" : "Ajouter aux favoris"}
    </button>
  );
}
