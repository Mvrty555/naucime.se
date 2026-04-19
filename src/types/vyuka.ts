export type PredmetVyuka = "matematika" | "fyzika" | "chemie";
export type StupeVyuka = "zs" | "ss";

export type CviceniVyber = {
  typ: "vyber";
  otazka: string;
  moznosti: [string, string, string, string];
  spravnyIndex: 0 | 1 | 2 | 3;
  vysvetleni: string;
};

export type CviceniAnoNe = {
  typ: "ano-ne";
  otazka: string;
  spravne: boolean;
  vysvetleni: string;
};

export type Cviceni = CviceniVyber | CviceniAnoNe;

/** Jedna „karta“ výuky: výklad, didaktická metoda, nebo krátká kontrola. */
export type VyukovyKrokText = {
  typ: "text";
  odstavce: string[];
};

export type VyukovyKrokCviceni = {
  typ: "cviceni";
  /** Krátký podnadpis kroku (např. „Rychlá kontrola“) */
  nazev?: string;
  polozka: Cviceni;
};

/** Doporučený postup učitele / žáka (bez nahrazování výkladu). */
export type VyukovyKrokMetoda = {
  typ: "metoda";
  nazev: string;
  body: string[];
};

export type VyukovyKrok = VyukovyKrokText | VyukovyKrokCviceni | VyukovyKrokMetoda;

export type Lekce = {
  id: string;
  nazev: string;
  /** Volitelná vazba na oblast RVP (parafráze, ne doslovná citace dokumentu). */
  rvpOdkaz?: string;
  /**
   * Postupné prolínání výkladu a krátkých úloh (mikrokroky).
   * Pokud chybí, použijí se `odstavce` a `cviceni` níže (klasické pořadí).
   */
  postup?: VyukovyKrok[];
  odstavce?: string[];
  /** Volitelný odkaz na delší článek na webu */
  odkazNaClanek?: { href: string; label: string };
  cviceni?: Cviceni[];
};

export type StrankaRocniku = {
  nadpis: string;
  podnadpis: string;
  uvod: string;
  lekce: Lekce[];
};
