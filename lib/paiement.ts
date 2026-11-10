/**
 * Préparation de l'achat des formations premium.
 *
 * ⚠️ Aucun paiement n'est simulé ici. Tant que la passerelle n'est pas configurée
 * (NEXT_PUBLIC_PAIEMENT_ACTIF=true + intégration côté serveur), l'achat est refusé
 * avec un message explicite. Voir README.md, section « Activer les paiements ».
 *
 * Passerelles envisagées : Stripe (cartes internationales) ou une solution locale
 * marocaine (CMI, PayZone, etc.) selon les besoins de l'académie.
 */

export type ResultatAchat =
  | { statut: "non-configure"; message: string }
  | { statut: "redirige"; url: string };

export function demarrerAchat(slugFormation: string): ResultatAchat {
  const actif = process.env.NEXT_PUBLIC_PAIEMENT_ACTIF === "true";

  if (!actif) {
    return {
      statut: "non-configure",
      message:
        "Le paiement en ligne n'est pas encore activé sur cette plateforme. L'intégration de la passerelle de paiement reste à configurer par l'administrateur.",
    };
  }

  // Lorsque la passerelle est branchée : appeler ici une route serveur (ex. /api/paiement)
  // qui crée une session de paiement et renvoie son URL. Ne jamais valider un achat côté client.
  return {
    statut: "redirige",
    url: `/api/paiement?formation=${encodeURIComponent(slugFormation)}`,
  };
}
