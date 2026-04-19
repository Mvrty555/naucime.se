import { getVyukaStranka } from "@/data/vyuka/registry";
import type { PredmetVyuka, StupeVyuka } from "@/types/vyuka";
import { getChemieTopicPool } from "./chemieGenerators";
import { getFyzikaTopicPool } from "./fyzikaGenerators";
import { getMathTopicPool } from "./mathGenerators";
import type { QuestionGenerator } from "./types";

export function getTopicPracticePool(
  predmet: PredmetVyuka,
  temaId: string,
): QuestionGenerator[] {
  switch (predmet) {
    case "matematika":
      return getMathTopicPool(temaId);
    case "fyzika":
      return getFyzikaTopicPool(temaId);
    case "chemie":
      return getChemieTopicPool(temaId);
    default:
      return [];
  }
}

export function getTemataNaRocniku(
  predmet: PredmetVyuka,
  stupe: StupeVyuka,
  rocnik: number,
): { id: string; nazev: string }[] {
  const str = getVyukaStranka(predmet, stupe, rocnik);
  if (!str) return [];
  return str.lekce.map((l) => ({ id: l.id, nazev: l.nazev }));
}
