import type { PredmetVyuka, StupeVyuka } from "@/types/vyuka";
import { chemieGenerators } from "./chemieGenerators";
import { fyzikaGenerators } from "./fyzikaGenerators";
import { mathGenerators } from "./mathGenerators";
import type { QuestionGenerator } from "./types";

/** Sloučí matematiku pro všechny ročníky — generátory jsou vhodné napříč ZŠ/SŠ. */
export function getPracticePool(
  predmet: PredmetVyuka,
  _stupe: StupeVyuka,
  _rocnik: number,
): QuestionGenerator[] {
  switch (predmet) {
    case "matematika":
      return [...mathGenerators, ...mathGenerators, ...mathGenerators];
    case "fyzika":
      return [...fyzikaGenerators, ...fyzikaGenerators];
    case "chemie":
      return [...chemieGenerators, ...chemieGenerators];
    default:
      return mathGenerators;
  }
}

export function pickRandomQuestion(
  pool: QuestionGenerator[],
): ReturnType<QuestionGenerator> {
  if (pool.length === 0) {
    return {
      prompt: "V této sadě zatím nejsou generované úlohy.",
      options: ["—", "—", "—", "—"],
      correctIndex: 0,
      explanation: "Zkus jiné téma nebo obecné procvičování bez filtru.",
    };
  }
  const gen = pool[Math.floor(Math.random() * pool.length)];
  return gen();
}
