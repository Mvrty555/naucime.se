/**
 * Didaktický přehled podle oblastí RVP ZV (matematika, 2. stupeň) a obecné návaznosti na SŠ.
 * Nejedná se o doslovný citát dokumentu — vychází z běžné výstavby učiva v ČR (ŠVP z RVP ZV).
 */

export type RvpOdkaz = {
  text: string;
  href: string;
};

export type RvpOblast = {
  /** Oblast učiva v terminologii blízké RVP (čísla, geometrie, závislosti…) */
  nazev: string;
  /** Co má žák typicky zvládnout — očekávání výstupů v praxi */
  vystupy: string[];
  /** Materiály na Naučíme.se (doplňujeme průběžně) */
  odkazy?: RvpOdkaz[];
};

export type RvpRocnikMat = {
  stupen: "zs" | "ss";
  rocnik: number;
  rvpPoznamka: string;
  oblasti: RvpOblast[];
};

export const matematikaRvpRocniky: RvpRocnikMat[] = [
  {
    stupen: "zs",
    rocnik: 5,
    rvpPoznamka:
      "RVP ZV – Matematika: číselné představy, početní operace a algoritmy; část z celku (zlomky, desetinná čísla); jednoduchá geometrie a měření.",
    oblasti: [
      {
        nazev: "Čísla a výrazy",
        vystupy: [
          "rozumět pořadí operací a závorkám ve výrazu",
          "pracovat s přirozenými a desetinnými čísly v kontextu",
        ],
        odkazy: [
          { text: "Lekce: Pořadí operací", href: "/vyuka/matematika/zs/5#poradi-operaci" },
          { text: "Článek s příklady", href: "/matematika/zs/poradi-operaci" },
          { text: "Zlomky: část celku", href: "/vyuka/matematika/zs/5#zlomky-zaklady" },
          { text: "Desetinná čísla a odhad", href: "/vyuka/matematika/zs/5#desetinne-a-odhad" },
        ],
      },
      {
        nazev: "Geometrie a měření",
        vystupy: [
          "modelovat jednoduché tvary, odhadovat a počítat obvod a obsah v běžných jednotkách",
        ],
        odkazy: [{ text: "Mapa témat ZŠ (5. tř.)", href: "/zakladni-skola#matematika" }],
      },
    ],
  },
  {
    stupen: "zs",
    rocnik: 6,
    rvpPoznamka:
      "RVP ZV – Matematika: celá čísla; poměr, měřítko; vlastnosti přirozených čísel (dělitelnost); geometrie a souřadnice.",
    oblasti: [
      {
        nazev: "Čísla a poměry",
        vystupy: [
          "zapisovat a sčítat celá čísla na číselné ose",
          "interpretovat poměr a měřítko mapy nebo modelu",
          "používat dělitelnost při krácení zlomků a rozkladu čísel",
        ],
        odkazy: [
          { text: "Celá čísla", href: "/vyuka/matematika/zs/6#cela-cisla" },
          { text: "Poměr a měřítko", href: "/vyuka/matematika/zs/6#pomer-meritko" },
          { text: "Dělitelnost a prvočísla", href: "/vyuka/matematika/zs/6#delitelnost" },
        ],
      },
      {
        nazev: "Geometrie",
        vystupy: ["úhly, kruh, výseč v návaznosti na měření a odhad"],
        odkazy: [{ text: "Mapa témat ZŠ", href: "/zakladni-skola#matematika" }],
      },
    ],
  },
  {
    stupen: "zs",
    rocnik: 7,
    rvpPoznamka:
      "RVP ZV – Matematika: lineární rovnice a soustavy v jednoduché podobě; procenta; geometrické vztahy v rovině.",
    oblasti: [
      {
        nazev: "Závislosti a algebra",
        vystupy: [
          "řešit lineární rovnice a jednoduché soustavy ve slovních úlohách",
          "modelovat situace s procenty (část, základ, přírůstek)",
        ],
        odkazy: [
          { text: "Lineární rovnice", href: "/vyuka/matematika/zs/7#linearni-rovnice" },
          { text: "Procenta v praxi", href: "/vyuka/matematika/zs/7#procenta" },
          { text: "Úvod k soustavám rovnic", href: "/vyuka/matematika/zs/7#soustavy-uvod" },
          { text: "Teorie: poměr a procenta", href: "/matematika/teorie/pomer-procenta-prakticky" },
        ],
      },
      {
        nazev: "Geometrie v rovině",
        vystupy: ["úhly u rovnoběžek, trojúhelník, odhad a výpočty v souvislostech"],
        odkazy: [{ text: "Mapa témat ZŠ", href: "/zakladni-skola#matematika" }],
      },
    ],
  },
  {
    stupen: "zs",
    rocnik: 8,
    rvpPoznamka:
      "RVP ZV – Matematika: výrazy s proměnnou; lineární funkce; soustavy rovnic; Pythagorova věta a geometrické úlohy.",
    oblasti: [
      {
        nazev: "Výrazy a funkce",
        vystupy: [
          "upravovat mnohočleny a chápat násobení závorek",
          "číst a kreslit graf lineární funkce, interpretovat směrnici a posun",
        ],
        odkazy: [
          { text: "Mnohočleny", href: "/vyuka/matematika/zs/8#mnohocleny" },
          { text: "Lineární funkce", href: "/vyuka/matematika/zs/8#linearni-funkce" },
          { text: "Teorie: lineární funkce", href: "/matematika/teorie/linearni-funkce-zapis" },
        ],
      },
      {
        nazev: "Geometrie a soustavy",
        vystupy: [
          "řešit soustavy dvou rovnic o dvou neznámých (nástin metod)",
          "uplatnit Pythagorovu větu v praktických úlohách",
        ],
        odkazy: [{ text: "Mapa témat ZŠ", href: "/zakladni-skola#matematika" }],
      },
    ],
  },
  {
    stupen: "zs",
    rocnik: 9,
    rvpPoznamka:
      "RVP ZV – Matematika: mocniny a odmocniny; reprezentace dat; příprava na rozšířenou algebru a geometrii v SŠ.",
    oblasti: [
      {
        nazev: "Čísla v obecnějším tvaru",
        vystupy: [
          "pracovat s mocninami, základem vědeckého zápisu",
          "chápat rozdíl mezi průměrem a mediánem a umět data popsat",
        ],
        odkazy: [
          { text: "Mocniny a vědecký zápis", href: "/vyuka/matematika/zs/9#mocniny" },
          { text: "Průměr a medián", href: "/vyuka/matematika/zs/9#statistika" },
        ],
      },
      {
        nazev: "Geometrie a kombinatorika (nástin)",
        vystupy: ["shodná zobrazení, jednoduché konstrukce; základy kombinatorického myšlení"],
        odkazy: [{ text: "Mapa témat ZŠ", href: "/zakladni-skola#matematika" }],
      },
    ],
  },
  {
    stupen: "ss",
    rocnik: 1,
    rvpPoznamka:
      "Návaznost na RVP ZV a rámcové vzdělávací programy SŠ: algebraické výrazy, vlastnosti funkcí, logické odůvodnění.",
    oblasti: [
      {
        nazev: "Algebra a funkce",
        vystupy: [
          "zjednodušovat výrazy včetně rozkladů typu a² − b²",
          "číst doménu, růst a klesání z grafu i ze slovního popisu",
        ],
        odkazy: [
          { text: "Algebraické výrazy", href: "/vyuka/matematika/ss/1#vyrazy-vztahy" },
          { text: "Funkce: doména a růst", href: "/vyuka/matematika/ss/1#funkce-vlastnosti" },
        ],
      },
    ],
  },
  {
    stupen: "ss",
    rocnik: 2,
    rvpPoznamka: "Goniometrické funkce, jednotková kružnice; posloupnosti a vzorce pro n-tý člen.",
    oblasti: [
      {
        nazev: "Goniometrie a posloupnosti",
        vystupy: [
          "vázat sin a cos na jednotkovou kružnici a pravoúhlý trojúhelník",
          "modelovat aritmetickou posloupnost a odhadovat součty",
        ],
        odkazy: [
          { text: "Sin, cos, kružnice", href: "/vyuka/matematika/ss/2#goniometrie" },
          { text: "Aritmetická posloupnost", href: "/vyuka/matematika/ss/2#posloupnosti" },
        ],
      },
    ],
  },
  {
    stupen: "ss",
    rocnik: 3,
    rvpPoznamka: "Logaritmy jako nástroj řádů velikosti; derivace jako model okamžité změny.",
    oblasti: [
      {
        nazev: "Analýza — úvod",
        vystupy: [
          "přepínat mezi mocninou a logaritmem v jednoduchých případech",
          "interpretovat derivaci jako sklon tečny u známých funkcí",
        ],
        odkazy: [
          { text: "Logaritmus", href: "/vyuka/matematika/ss/3#logaritmy" },
          { text: "Derivace jako sklon", href: "/vyuka/matematika/ss/3#derivace-uvod" },
        ],
      },
    ],
  },
  {
    stupen: "ss",
    rocnik: 4,
    rvpPoznamka: "Shrnutí před maturitou: integrál jako geometrická představa; strategie řešení složitějších úloh.",
    oblasti: [
      {
        nazev: "Shrnutí a strategie",
        vystupy: [
          "chápat určitý integrál jako součet příspěvků pod grafem (základní představa)",
          "plánovat postup řešení a kontrolovat rozumnost výsledku",
        ],
        odkazy: [
          { text: "Určitý integrál — úvod", href: "/vyuka/matematika/ss/4#integral-uvod" },
          { text: "Strategie řešení", href: "/vyuka/matematika/ss/4#strategie-reseni" },
        ],
      },
    ],
  },
];
