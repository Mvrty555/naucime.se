/** Páry pojem ↔ jednotka SI (nebo odvozená) pro cvičení spojování. */
export type JednotkaSpojPar = {
  id: string;
  /** Co veličina znamená (bez značky vpravo) */
  pojem: string;
  /** Symbol jednotky */
  jednotkaZnak: string;
  /** Krátké vysvětlení po správném spojení */
  vysvetleni: string;
};

export const jednotkySpojovaciPary: JednotkaSpojPar[] = [
  {
    id: "vykon",
    pojem: "Výkon — jak rychle přibývá energie nebo práce",
    jednotkaZnak: "W (watt)",
    vysvetleni: "1 W = 1 J za sekundu: říká „tempo“, ne kolik energie celkem máš.",
  },
  {
    id: "prace-energie",
    pojem: "Práce nebo přenesená energie (základní mechanický model)",
    jednotkaZnak: "J (joule)",
    vysvetleni: "Joule je newtonkrát metr — síla po dráze ve směru síly.",
  },
  {
    id: "sila",
    pojem: "Síla — interakce, která umí měnit pohyb",
    jednotkaZnak: "N (newton)",
    vysvetleni: "1 N = 1 kg·m·s⁻²: hmotnost krát zrychlení v jednoduchém modelu F = m·a.",
  },
  {
    id: "tlak",
    pojem: "Tlak — síla rozložená na plochu",
    jednotkaZnak: "Pa (pascal)",
    vysvetleni: "1 Pa = 1 N na m² — malá jednotka, běžný tlak vzduchu je řádově 10⁵ Pa.",
  },
  {
    id: "rychlost",
    pojem: "Rychlost (velikost) po přímce",
    jednotkaZnak: "m·s⁻¹",
    vysvetleni: "Metr za sekundu: kolik dráhy přibyde za jednu sekundu při daném tempu.",
  },
  {
    id: "zrychleni",
    pojem: "Zrychlení — jak rychle se mění rychlost",
    jednotkaZnak: "m·s⁻²",
    vysvetleni: "Čte se „metr za sekundu za sekundu“ = změna rychlosti za sekundu.",
  },
  {
    id: "napeti",
    pojem: "Elektrické napětí mezi dvěma body",
    jednotkaZnak: "V (volt)",
    vysvetleni: "Ve školním Ohmově zákonu propojuje proud a odpor: U = R·I.",
  },
  {
    id: "proud",
    pojem: "Elektrický proud — tok náboje",
    jednotkaZnak: "A (ampér)",
    vysvetleni: "1 A je 1 coulomb za sekundu — ampérmetr v sérii měří, kolik „teče“.",
  },
  {
    id: "odpor",
    pojem: "Elektrický odpor prvku",
    jednotkaZnak: "Ω (ohm)",
    vysvetleni: "Říká, jak prvek brzdí proud při daném napětí v jednoduchém modelu.",
  },
  {
    id: "latkove-mnozstvi",
    pojem: "Látkové množství látky",
    jednotkaZnak: "mol",
    vysvetleni: "Spojuje mikrosvět částic s makro hmotností přes molární hmotnost M.",
  },
  {
    id: "koncentrace",
    pojem: "Molární koncentrace rozpuštěné látky v roztoku",
    jednotkaZnak: "mol·dm⁻³",
    vysvetleni: "Mol na decimetr krychlový — často se píše jako mol/l nebo M ve starších textech.",
  },
  {
    id: "frekvence",
    pojem: "Frekvence periodického děje",
    jednotkaZnak: "Hz (hertz)",
    vysvetleni: "1 Hz = jedna perioda za sekundu: f = 1/T.",
  },
];
