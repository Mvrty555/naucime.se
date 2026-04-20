import type { PredmetVyuka, StupeVyuka } from "@/types/vyuka";
import { chemieGenerators } from "./chemieGenerators";
import { fyzikaGenerators } from "./fyzikaGenerators";
import { mathGenerators } from "./mathGenerators";
import type { QuestionGenerator } from "./types";

/** Sloučí matematiku pro všechny ročníky — generátory jsou vhodné napříč ZŠ/SŠ. */
export function getPracticePool(
  predmet: PredmetVyuka,
  stupe: StupeVyuka,
  rocnik: number,
): QuestionGenerator[] {
  void stupe;
  void rocnik;
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

function isSameQuestion(
  a: ReturnType<QuestionGenerator>,
  b: ReturnType<QuestionGenerator>,
): boolean {
  if (a.prompt !== b.prompt) return false;
  return a.options.every((o, i) => o === b.options[i]);
}

/**
 * Náhodná otázka z poolu. Pokud je `predchozi` uvedená, snaží se vygenerovat jinou
 * (stejný text i možnosti působí jako „nic se nezměnilo“ — typické u statických chem. otázek).
 */
export function pickRandomQuestion(
  pool: QuestionGenerator[],
  predchozi?: ReturnType<QuestionGenerator> | null,
): ReturnType<QuestionGenerator> {
  if (pool.length === 0) {
    return {
      prompt: "V této sadě zatím nejsou generované úlohy.",
      options: ["—", "—", "—", "—"],
      correctIndex: 0,
      explanation: "Zkus jiné téma nebo obecné procvičování bez filtru.",
    };
  }
  if (pool.length === 1 || !predchozi) {
    return pool[Math.floor(Math.random() * pool.length)]();
  }
  let q = pool[Math.floor(Math.random() * pool.length)]();
  for (let n = 0; n < 40 && isSameQuestion(q, predchozi); n += 1) {
    q = pool[Math.floor(Math.random() * pool.length)]();
  }
  return q;
}
