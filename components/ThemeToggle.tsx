"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Bascule entre le mode clair et le mode sombre.
 * Le choix est mémorisé dans le navigateur (localStorage).
 * Le script anti-clignotement dans le layout applique le thème avant le premier rendu.
 */
export function ThemeToggle() {
  const [sombre, setSombre] = useState(false);

  // Synchronise l'état visuel avec la classe posée sur <html>.
  useEffect(() => {
    setSombre(document.documentElement.classList.contains("dark"));
  }, []);

  function basculer() {
    const prochain = !sombre;
    setSombre(prochain);
    document.documentElement.classList.toggle("dark", prochain);
    try {
      localStorage.setItem("meteo-academy-theme", prochain ? "sombre" : "clair");
    } catch {
      // Stockage indisponible (navigation privée) : le thème reste actif pour la session.
    }
  }

  return (
    <button
      type="button"
      onClick={basculer}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--bordure)] bg-[var(--surface)] transition hover:border-ciel-400"
      aria-label={sombre ? "Activer le mode clair" : "Activer le mode sombre"}
      title={sombre ? "Mode clair" : "Mode sombre"}
    >
      {sombre ? (
        <Sun className="h-5 w-5 text-soleil-400" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 text-nuit-700" aria-hidden="true" />
      )}
    </button>
  );
}
