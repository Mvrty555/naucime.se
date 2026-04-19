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

export type Lekce = {
  id: string;
  nazev: string;
  odstavce: string[];
  /** Volitelný odkaz na delší článek na webu */
  odkazNaClanek?: { href: string; label: string };
  cviceni: Cviceni[];
};

export type StrankaRocniku = {
  nadpis: string;
  podnadpis: string;
  uvod: string;
  lekce: Lekce[];
};
