/** Jednoduchý slug pro URL (české znaky přibližně přemapuje). */
export function slugify(raw: string): string {
  const map: Record<string, string> = {
    á: "a",
    č: "c",
    ď: "d",
    é: "e",
    ě: "e",
    í: "i",
    ň: "n",
    ó: "o",
    ř: "r",
    š: "s",
    ť: "t",
    ú: "u",
    ů: "u",
    ý: "y",
    ž: "z",
  };
  let s = raw.trim().toLowerCase();
  for (const [k, v] of Object.entries(map)) {
    s = s.split(k).join(v);
  }
  s = s
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
  return s || "prispevek";
}
