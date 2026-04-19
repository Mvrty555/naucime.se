import type { Lekce, VyukovyKrok } from "@/types/vyuka";

/** Sjednotí lekci do seznamu kroků pro vykreslení (postup nebo odstavce + cvicení). */
export function getVyukoveKroky(lekce: Lekce): VyukovyKrok[] {
  if (lekce.postup && lekce.postup.length > 0) return lekce.postup;

  const kroky: VyukovyKrok[] = [];
  if (lekce.odstavce && lekce.odstavce.length > 0) {
    kroky.push({ typ: "text", odstavce: lekce.odstavce });
  }
  if (lekce.cviceni && lekce.cviceni.length > 0) {
    let i = 0;
    for (const c of lekce.cviceni) {
      i += 1;
      kroky.push({
        typ: "cviceni",
        nazev: lekce.cviceni.length > 1 ? `Úloha ${i}` : undefined,
        polozka: c,
      });
    }
  }
  return kroky;
}
