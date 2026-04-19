import type { PredmetVyuka, StupeVyuka, StrankaRocniku } from "@/types/vyuka";
import { chemieSsPages } from "./chemie-ss";
import { chemieZsPages } from "./chemie-zs";
import { fyzikaSsPages } from "./fyzika-ss";
import { fyzikaZsPages } from "./fyzika-zs";
import { matematikaSsPages } from "./matematika-ss";
import { matematikaZsPages } from "./matematika-zs";

const zsRocniky = [5, 6, 7, 8, 9] as const;
const ssRocniky = [1, 2, 3, 4] as const;

export function jePlatnyRocnik(stupe: StupeVyuka, rocnik: number): boolean {
  if (stupe === "zs") return zsRocniky.includes(rocnik as (typeof zsRocniky)[number]);
  return ssRocniky.includes(rocnik as (typeof ssRocniky)[number]);
}

export function getVyukaStranka(
  predmet: PredmetVyuka,
  stupe: StupeVyuka,
  rocnik: number,
): StrankaRocniku | null {
  if (!jePlatnyRocnik(stupe, rocnik)) return null;

  if (predmet === "matematika") {
    return stupe === "zs"
      ? matematikaZsPages[rocnik] ?? null
      : matematikaSsPages[rocnik] ?? null;
  }
  if (predmet === "fyzika") {
    return stupe === "zs" ? fyzikaZsPages[rocnik] ?? null : fyzikaSsPages[rocnik] ?? null;
  }
  return stupe === "zs" ? chemieZsPages[rocnik] ?? null : chemieSsPages[rocnik] ?? null;
}

export function vsechnyVyukaStatickeCesty(): {
  predmet: PredmetVyuka;
  stupe: StupeVyuka;
  rocnik: string;
}[] {
  const out: { predmet: PredmetVyuka; stupe: StupeVyuka; rocnik: string }[] = [];
  const predmety: PredmetVyuka[] = ["matematika", "fyzika", "chemie"];
  for (const predmet of predmety) {
    for (const rocnik of zsRocniky) {
      out.push({ predmet, stupe: "zs", rocnik: String(rocnik) });
    }
    for (const rocnik of ssRocniky) {
      out.push({ predmet, stupe: "ss", rocnik: String(rocnik) });
    }
  }
  return out;
}

export const predmetLabels: Record<PredmetVyuka, string> = {
  matematika: "Matematika",
  fyzika: "Fyzika",
  chemie: "Chemie",
};

export const stupeLabels: Record<StupeVyuka, string> = {
  zs: "Základní škola",
  ss: "Střední škola",
};
