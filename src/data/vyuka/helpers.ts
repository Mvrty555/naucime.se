import type { CviceniAnoNe, CviceniVyber } from "@/types/vyuka";

export function mc(
  otazka: string,
  moznosti: [string, string, string, string],
  spravnyIndex: 0 | 1 | 2 | 3,
  vysvetleni: string,
): CviceniVyber {
  return { typ: "vyber", otazka, moznosti, spravnyIndex, vysvetleni };
}

export function tf(otazka: string, spravne: boolean, vysvetleni: string): CviceniAnoNe {
  return { typ: "ano-ne", otazka, spravne, vysvetleni };
}
