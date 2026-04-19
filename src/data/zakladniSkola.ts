/**
 * Přehled témat pro 2. stupeň ZŠ — vlastní didaktická struktura
 * (obecně známé učební oblasti, formulace pro Naučíme.se).
 */

export type RocnikBlok = {
  rocnik: number;
  temata: string[];
};

export type PredmetZs = {
  id: "matematika" | "fyzika" | "chemie";
  nazev: string;
  popis: string;
  rocniky: RocnikBlok[];
};

export const predmetyZakladniSkola: PredmetZs[] = [
  {
    id: "matematika",
    nazev: "Matematika",
    popis:
      "Čísla, rovnice, geometrie i funkce — budujeme jistotu v počtech a v tom, jak si úlohu rozdělit na kroky.",
    rocniky: [
      {
        rocnik: 5,
        temata: [
          "přirozená čísla, desetinná čísla a pořadí operací",
          "zlomky: rozšíření, zkrácení, součet a rozdíl",
          "jednotky délky, hmotnosti a času",
          "trojúhelník, obvod a obsah jednoduchých tvarů",
        ],
      },
      {
        rocnik: 6,
        temata: [
          "celá čísla na číselné ose, součet a rozdíl se znaménky",
          "poměr a měřítko",
          "kruh, výseč a souvislost úhlu s otáčením",
          "vyhodnocování výrazů se závorkami",
        ],
      },
      {
        rocnik: 7,
        temata: [
          "lineární rovnice a slovní úlohy k nim",
          "procenta, základ, část a celku",
          "úhly u přímek, rovnoběžky a kolmice",
          "objem a povrch kvádru a válce (úvod)",
        ],
      },
      {
        rocnik: 8,
        temata: [
          "mnohočleny: sčítání, odčítání, násobení jednoduchých tvarů",
          "soustavy dvou rovnic o dvou neznámých (graficky i algebraicky)",
          "Pythagorova věta a praktické úlohy",
          "lineární funkce: tabulka, graf, čtení z grafu",
        ],
      },
      {
        rocnik: 9,
        temata: [
          "mocniny, základní vlastnosti a vědecký zápis malých/velkých čísel",
          "kvadratické rovnice (faktorizace, diskriminant jako úvod)",
          "shodná zobrazení a jednoduché konstrukce",
          "základní statistika: průměr, medián, výběr vhodné míry",
        ],
      },
    ],
  },
  {
    id: "fyzika",
    nazev: "Fyzika",
    popis:
      "Od kývání kyvadla po jednoduché obvody — důraz na měření, jednotky a bezpečné myšlení o energii.",
    rocniky: [
      {
        rocnik: 5,
        temata: [
          "pohyb a klid, dráha a časové měření",
          "síla jako příčina změny pohybu (intuitivně)",
          "světlo a stín, zdroje světla",
          "teplota vs. tepelná energie v každodennosti",
        ],
      },
      {
        rocnik: 6,
        temata: [
          "hustota a plování těles",
          "tlak v kapalinách a plynech (jednoduché modely)",
          "zvuk: zdroj, šíření, hlasitost",
          "magnety a magnetic pole bez formalismu vektorů",
        ],
      },
      {
        rocnik: 7,
        temata: [
          "práce, výkon a energie — jednotky a příklady z kola/štafety",
          "teplo, měření teploty, tání a tuhnutí",
          "jednoduché elektrické obvody: článek, žárovka, spínač",
          "odraz světla na rovném rozhraní",
        ],
      },
      {
        rocnik: 8,
        temata: [
          "rychlost, zrychlení a grafy závislostí",
          "Newtonovy zákony v ilustrativních úlohách",
          "mechanické vlny a kmitání struny",
          "Ohmův zákon a sériové zapojení rezistorů",
        ],
      },
      {
        rocnik: 9,
        temata: [
          "hmotnost vs. tíha, tíhové zrychlení",
          "mechanická energie a neúplný přenos (tření)",
          "zakřivení paprsku u čočky a zjednodušený model oka",
          "střídavý proud jen jako fakt a bezpečnost v zásuvce",
        ],
      },
    ],
  },
  {
    id: "chemie",
    nazev: "Chemie",
    popis:
      "Prvky, reakce a bezpečné chápání látek kolem nás — od tabulky prvků po jednoduché rovnice.",
    rocniky: [
      {
        rocnik: 5,
        temata: [
          "látky a směsi v domácnosti a v přírodě",
          "fyzikální a chemické jevy — rozlišení v příkladech",
          "bezpečné zacházení s chemikáliemi (symboly varování)",
          "vzduch jako směs plynů (kvalitativně)",
        ],
      },
      {
        rocnik: 6,
        temata: [
          "periodická soustava jako mapa prvků",
          "atomy a molekuly v modelu kuliček a spojů",
          "chemické rovnice: vyvažování jednoduchých reakcí",
          "kyseliny a zásady v bezpečných příkladech (pH jako škála)",
        ],
      },
      {
        rocnik: 7,
        temata: [
          "látkové množství a mol jako „balení částic“",
          "stechiometrie u reakce typu hoření",
          "roztoky: rozpouštědlo, rozpuštěná látka, koncentrace",
          "oxidace a redukce jako přenos elektronů (slovně)",
        ],
      },
      {
        rocnik: 8,
        temata: [
          "rychlost reakce a vliv teploty (Arrhenius jen slovně)",
          "kyslíkaté soli a jednoduché názvosloví",
          "uhlovodíky: řetěz, větev, základní názvy",
          "kyselé deště a neutralizace jako souvislost",
        ],
      },
      {
        rocnik: 9,
        temata: [
          "vodík, kyslík, uhlík v klíčových sloučeninách",
          "alkoholy a karboxylové kyseliny na úrovni vzorců a vlastností",
          "polymery v plastech — co recyklace znamená chemicky",
          "příprava na chemii na SŠ: souhrn základních dovedností",
        ],
      },
    ],
  },
];
