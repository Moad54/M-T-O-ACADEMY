"use client";

import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import type { Formation } from "@/lib/types";
import { demarrerAchat } from "@/lib/paiement";

/**
 * Bouton d'achat d'une formation premium.
 * Sans passerelle configurée, il affiche un message explicite et ne simule aucun paiement.
 */
export function BoutonAchat({ formation }: { formation: Formation }) {
  const [message, setMessage] = useState<string | null>(null);

  function acheter() {
    const resultat = demarrerAchat(formation.slug);
    if (resultat.statut === "redirige") {
      window.location.href = resultat.url;
    } else {
      setMessage(resultat.message);
    }
  }

  return (
    <div className="space-y-3">
      <button type="button" onClick={acheter} className="bouton-primaire w-full">
        <ShoppingCart className="h-4 w-4" aria-hidden="true" />
        Acheter la formation
      </button>
      {message && (
        <p role="status" className="rounded-lg bg-soleil-500/10 p-3 text-xs leading-relaxed text-[var(--texte)]">
          {message}
        </p>
      )}
    </div>
  );
}
