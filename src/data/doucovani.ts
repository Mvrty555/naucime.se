export type UcitelDoucovani = {
  id: string;
  jmeno: string;
  predmety: ("matematika" | "fyzika" | "chemie")[];
  popis: string;
  /** Kde / jak probíhá výuka */
  format: string;
};

export const predmetLabelsDoucovani: Record<
  UcitelDoucovani["predmety"][number],
  string
> = {
  matematika: "Matematika",
  fyzika: "Fyzika",
  chemie: "Chemie",
};
