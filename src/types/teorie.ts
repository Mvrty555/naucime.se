/**
 * Teoretické materiály — struktura inspirovaná tabulkami veličin,
 * ale rozšířená o „proč to tak je“ a didaktické prvky (aktivita, omyly).
 */
export type TeorieVzorec = {
  nazev: string;
  /** Vztah (např. v = s/t); píšeme Unicode místo LaTeX kde to stačí */
  vztah: string;
};

export type TeorieVelicina = {
  nazev: string;
  /** Fyzikální / matematická značka */
  znacka: string;
  /** Slovně: např. „metr za sekundu“ */
  jednotkaSI: string;
  /** Zkratka jednotky v SI, např. m·s⁻¹ nebo mol·dm⁻³ */
  jednotkaZnak: string;
  /** Stručná definice nebo význam */
  definice: string;
  vzorce: TeorieVzorec[];
  /** Stejný vztah v jiné situaci / přepis */
  variantyVzorca?: { situace: string; vztah: string }[];
  /** Intuice, příčina, souvislost — ne jen „tak se to učí“ */
  procToTakJe: string;
};

export type TeorieClanek = {
  id: string;
  nazev: string;
  perex: string;
  /** Pro koho je text primárně mířen */
  uroven: string;
  motivace: string[];
  veliciny: TeorieVelicina[];
  /** Krátká činnost bez laboratoře / „zkus si doma“ */
  aktivita: string;
  /** Časté omyly — adresně, bez shazování žáka */
  omyly: string[];
  /** Volitelné propojení s další látkou */
  navaznost?: string;
};
