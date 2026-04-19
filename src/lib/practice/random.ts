import type { PracticeQuestion } from "./types";

export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Zamíchá pole a vrátí nový index správné odpovědi. */
export function shuffleOptions(
  options: [string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3,
): { options: [string, string, string, string]; correctIndex: 0 | 1 | 2 | 3 } {
  const entries = options.map((text, i) => ({
    text,
    wasCorrect: i === correctIndex,
  }));
  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  const newCorrect = entries.findIndex((e) => e.wasCorrect) as 0 | 1 | 2 | 3;
  return {
    options: entries.map((e) => e.text) as [string, string, string, string],
    correctIndex: newCorrect,
  };
}

export function buildQuestion(
  prompt: string,
  correct: string,
  wrong: [string, string, string],
  explanation: string,
): PracticeQuestion {
  const raw: [string, string, string, string] = [correct, ...wrong];
  const correctIdx = 0 as const;
  const shuffled = shuffleOptions(raw, correctIdx);
  return {
    prompt,
    options: shuffled.options,
    correctIndex: shuffled.correctIndex,
    explanation,
  };
}
