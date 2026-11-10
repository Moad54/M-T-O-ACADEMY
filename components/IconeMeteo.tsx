import {
  AlertTriangle,
  BookOpen,
  CloudFog,
  CloudLightning,
  CloudRain,
  Cpu,
  FileText,
  Layers,
  Map,
  Mic,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { Formation } from "@/lib/types";

/**
 * Correspondance entre l'identifiant d'icône d'une formation et son pictogramme Lucide.
 */
const icones: Record<Formation["icone"], LucideIcon> = {
  nuages: CloudRain,
  orage: CloudLightning,
  depression: CloudFog,
  "masse-air": Layers,
  vent: Wind,
  carte: Map,
  modele: Cpu,
  alerte: AlertTriangle,
  micro: Mic,
  bulletin: FileText,
};

interface Props {
  nom: Formation["icone"];
  className?: string;
}

/** Pictogramme météorologique utilisé sur les cartes de formation. */
export function IconeMeteo({ nom, className = "h-6 w-6" }: Props) {
  const Icone = icones[nom] ?? BookOpen;
  return <Icone className={className} aria-hidden="true" />;
}
