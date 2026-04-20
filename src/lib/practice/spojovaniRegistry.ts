import {
  SPOJOVACI_KONFIG,
  type SpojovaciTemaKonfig,
} from "@/data/cviceni/spojovaciTemaData";
import type { PredmetVyuka } from "@/types/vyuka";

export type { SpojovaciTemaKonfig } from "@/data/cviceni/spojovaciTemaData";

/** Spojovačka u lekce, pokud pro dané téma existují páry. */
export function getSpojovaciKonfig(
  predmet: PredmetVyuka,
  temaId: string | undefined,
): SpojovaciTemaKonfig | null {
  if (!temaId) return null;
  const k = SPOJOVACI_KONFIG[predmet]?.[temaId];
  return k && k.pary.length > 0 ? k : null;
}
