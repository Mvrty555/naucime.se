import type { StrankaRocniku } from "@/types/vyuka";
import { mc, tf } from "./helpers";

export const matematikaZsPages: Record<number, StrankaRocniku> = {
  5: {
    nadpis: "Matematika — 5. třída",
    podnadpis: "ZŠ · základy čísel a výrazů",
    uvod:
      "Pátá třída často spojuje „počítání“ s reálnými situacemi: nakupování, sport, měření. Tady si ujasníme pravidla, která platí všude stejně.",
    lekce: [
      {
        id: "poradi-operaci",
        nazev: "Pořadí operací",
        odstavce: [
          "Než začneš počítat, rozhlédni se po výrazu: jsou závorky? Je tam násobení vedle sčítání? Pravidlo „závorky → krát a děleno → plus a mínus“ ti dá stejný výsledek jako v příkladech v učebnici — jen si ho musíš zkusit na vlastních číslech.",
          "Když si nejsi jistý, přepiš výraz pod sebe a podtrhni, co počítáš jako první malý krok. Klidně mluv nahodou: „nejdřív tohle, pak tamto.“",
        ],
        odkazNaClanek: {
          href: "/matematika/zs/poradi-operaci",
          label: "Delší článek s dalšími příklady",
        },
        cviceni: [
          mc(
            "Kolik je 4 + 2 × 3?",
            ["18", "10", "24", "9"],
            1,
            "Nejdřív 2 × 3 = 6, pak 4 + 6 = 10.",
          ),
          mc(
            "Který výraz dává 8?",
            ["(2 + 2) × 2", "2 + 2 × 2", "2 × 2 + 2 × 2", "2 + 2 + 2"],
            0,
            "V první možnosti se nejdřív sečte závorka: 4 × 2 = 8.",
          ),
        ],
      },
      {
        id: "zlomky-zaklady",
        nazev: "Zlomky: část celku",
        odstavce: [
          "Zlomek je zkratka pro rozdělení celku. Čitatel říká „kolik částí bereme“, jmenovatel „na kolik dílů jsme celkem dělili“. Když je dílů víc, je každý díl menší — to není magie, jen rozumné dělení.",
          "Rozšíření znamená, že každý díl rozkrojíš na menší stejné dílky; zlomek vypadá jinak, ale hodnota může zůstat stejná. Zkraťování je opačný krok: sloučíš stejné dílky do větších.",
        ],
        cviceni: [
          tf(
            "Je pravda, že 1/2 a 2/4 popisují stejnou část celku?",
            true,
            "Obojí je polovina — druhý zlomek je jen rozšířený tvar.",
          ),
          mc(
            "Který zlomek je největší?",
            ["1/5", "1/3", "1/8", "1/10"],
            1,
            "Čím menší jmenovatel u stejného čitatele, tím větší díl.",
          ),
        ],
      },
      {
        id: "desetinne-a-odhad",
        nazev: "Desetinná čísla a rozumný odhad",
        rvpOdkaz:
          "RVP ZV – Matematika: číselné představy a desetinná čísla (shrnutí oblasti, ne doslovný citát).",
        postup: [
          {
            typ: "text",
            odstavce: [
              "Desetinná čárka odděluje celou část od desetin. První číslice za čárkou jsou desetiny, druhé setiny — stejný princip jako u peněz: 0,3 Kč je tři desetiny koruny.",
              "Při sčítání desetin si zarovnej čárky pod sebe; počítáš stejné řády jako u celých čísel, jen hlídáš přenos do vyššího řádu.",
            ],
          },
          {
            typ: "metoda",
            nazev: "Efektivní postup (mikrokroky)",
            body: [
              "Nejdřív odhadni řád výsledku: bude to větší než 1, nebo mezi 0 a 1?",
              "Spočíti přesně druhým krokem a porovnej s odhadem — nesoulad tě upozorní na překlep v čárce.",
              "Jednotky piš vždy ke zdrojovým údajům ve slovní úloze.",
            ],
          },
          {
            typ: "cviceni",
            nazev: "Rychlá kontrola",
            polozka: mc(
              "Který zápis je největší?",
              ["0,7", "0,07", "0,707", "0,007"],
              2,
              "0,707 má největší hodnotu v řádu desetin i setin.",
            ),
          },
          {
            typ: "text",
            odstavce: [
              "Zlomky a desetiny jsou dva zápisy téže myšlenky „části celku“. Umíš-li převést 1/4 na 0,25, snáze porovnáš velikosti v reálném kontextu (slevy, měření).",
            ],
          },
          {
            typ: "cviceni",
            nazev: "Spojení se zlomky",
            polozka: tf(
              "Číslo 0,25 je stejné jako zlomek 1/4.",
              true,
              "Čtvrtina celku — stejná hodnota, jiný zápis.",
            ),
          },
        ],
      },
    ],
  },
  6: {
    nadpis: "Matematika — 6. třída",
    podnadpis: "ZŠ · celá čísla a poměry",
    uvod:
      "Šestá třída přidává znaménka, měřítko map a práci s poměry. Cílem je přestat se bát „mínus“ a umět si situaci nakreslit nebo zapsat.",
    lekce: [
      {
        id: "cela-cisla",
        nazev: "Celá čísla na ose",
        odstavce: [
          "Záporná čísla nejsou „něco špatného“ — jsou směr nebo dluh oproti nule. Na ose vlevo od nuly jdou záporné hodnoty, vpravo kladné. Součet dvou záporných čísel zůstane v záporných vodách, protože oba kroky táhnou doleva.",
          "Když přičítáš číslo s opačným znaménkem, představ si to jako souboj kroků: část kroků se vyruší a zůstane rozdíl ve směru silnějšího.",
        ],
        cviceni: [
          mc(
            "Kolik je −3 + 5?",
            ["2", "−2", "8", "−8"],
            0,
            "Od −3 o pět doprava dorazíš na 2.",
          ),
          tf("Je součet −4 a −6 kladný?", false, "Dva záporné součty dávají −10."),
        ],
      },
      {
        id: "pomer-meritko",
        nazev: "Poměr a měřítko",
        odstavce: [
          "Poměr a:b říká, že pro každé a jednotek prvního typu připadá b jednotek druhého — často strany u modelu, díly barvy nebo čas strávený dvěma běžci.",
          "Měřítko 1 : 50 000 znamená: jeden centimetr na mapě odpovídá padesáti tisícům centimetrů v terénu. Převody dělej po krocích a kontroluj jednotky.",
        ],
        cviceni: [
          mc(
            "Mapa má měřítko 1 : 100 000. Dva centimetry na mapě odpovídají v terénu:",
            ["200 m", "2 km", "20 km", "200 km"],
            1,
            "1 cm → 1 km, tedy 2 cm → 2 km.",
          ),
          tf(
            "Poměr 2 : 3 je totéž co 4 : 6.",
            true,
            "Obě dvojice mají stejný vztah — druhá je rozšířená.",
          ),
        ],
      },
      {
        id: "delitelnost",
        nazev: "Dělitelnost a rozklad na prvočinitele",
        rvpOdkaz:
          "RVP ZV – Matematika: vlastnosti přirozených čísel, dělitelnost (obecná orientace v tématech 2. stupně).",
        postup: [
          {
            typ: "text",
            odstavce: [
              "Číslo dělí druhé beze zbytku, když po dělení „nic nezbývá“. Hledání společného dělitele nebo násobku pomáhá při krácení zlomků i při rozvrhu skupin do stejně velkých týmů.",
              "Prvočíslo má jen dva dělitele: jedničku a sebe sama. Rozklad na prvočinitele je jako rozložit stavebnici na nejmenší typy kostek — výsledek je jednoznačný až na pořadí.",
            ],
          },
          {
            typ: "metoda",
            nazev: "Postup „krok za krokem“",
            body: [
              "Nejdřív zkus malé dělitele 2, 3, 5, 7 — často stačí.",
              "Piš rozklad jako součin mocnin prvočísel (např. 12 = 2²·3).",
              "Zkontroluj násobením zpět, že sedíš na původním čísle.",
            ],
          },
          {
            typ: "cviceni",
            nazev: "Kontrola pojmů",
            polozka: mc(
              "Které číslo je dělitelné 3 beze zbytku?",
              ["27", "28", "29", "31"],
              0,
              "Součet číslic 27 je dělitelný třemi.",
            ),
          },
          {
            typ: "cviceni",
            nazev: "Prvočíslo",
            polozka: tf("Číslo 1 je prvočíslo.", false, "Prvočíslo musí mít přesně dva dělitele; u 1 to neplatí."),
          },
        ],
      },
    ],
  },
  7: {
    nadpis: "Matematika — 7. třída",
    podnadpis: "ZŠ · rovnice a procenta",
    uvod:
      "Sedmá třída často přináší první větší algebraické návyky: rovnice jako rovnováha vah a procenta jako jazyk slev a růstu.",
    lekce: [
      {
        id: "linearni-rovnice",
        nazev: "Lineární rovnice",
        odstavce: [
          "Rovnice říká: dva zápisy popisují stejnou hodnotu. Co uděláš na jedné straně, musíš udělat i na druhé, aby rovnováha zůstala. Cílem je dostat neznámou samotnou na jednu stranu.",
          "Při přenášení přes rovnítko si pamatuj změnu znaménka — je to stejné jako při rušení stejných částí z obou misek vah.",
        ],
        cviceni: [
          mc(
            "Řešení rovnice x + 7 = 10 je:",
            ["x = 3", "x = 17", "x = −3", "x = 70"],
            0,
            "Odečti 7 od obou stran: x = 3.",
          ),
          tf("Rovnice 2x = 8 má řešení x = 4.", true, "Vyděl obě strany dvěma."),
        ],
      },
      {
        id: "procenta",
        nazev: "Procenta v praxi",
        odstavce: [
          "Procento je „část ze sta“. Když víš celkem 400 Kč a slevu 25 %, spočítáš nejdřív jedno procento nebo čtvrtinu přímo — obě cesty jsou v pořádku, vyber tu, která ti méně mate.",
          "„O tolik % více“ a „o tolik % méně“ mají různé výchozí body: vždy si řekni, jestli počítáš z původní ceny, z nové hodnoty nebo z meziročního srovnání.",
        ],
        cviceni: [
          mc(
            "10 % z 250 je:",
            ["25", "2,5", "2500", "0,25"],
            0,
            "Desetina z 250 je 25.",
          ),
          mc(
            "Po zdražení o 100 % se cena:",
            ["zdvojnásobí", "nez mění", "vyrovná nule", "sníží na polovinu"],
            0,
            "100 % navíc znamená přidat celou původní hodnotu.",
          ),
        ],
      },
      {
        id: "soustavy-uvod",
        nazev: "Dvě neznámé: úvod k soustavám rovnic",
        rvpOdkaz:
          "RVP ZV – Matematika: lineární rovnice a jejich soustavy (první intuitivní kroky před formální metodou).",
        postup: [
          {
            typ: "text",
            odstavce: [
              "Ve slovní úloze často hledáš dvě neznámé najednou (např. počet jablek a hrušek). Jedna rovnice zřídka stačí — potřebuješ druhou informaci, která vytvoří soustavu.",
              "Geometricky si soustavu představ jako průnik dvou přímek v rovině: společný bod (x, y) musí splnit obě rovnice najednou.",
            ],
          },
          {
            typ: "metoda",
            nazev: "Substituční myšlenka (bez vzorců navíc)",
            body: [
              "Vyber jednodušší rovnici a vyjádři jednu neznámou pomocí druhé.",
              "Dosad do druhé rovnice — zůstane jedna neznámá, kterou už umíš.",
              "Zpětně dosad a ověř oběma rovnicemi.",
            ],
          },
          {
            typ: "cviceni",
            nazev: "Rozhodnutí",
            polozka: tf(
              "Součet dvou rovnic vždy dá správné řešení soustavy bez další úpravy.",
              false,
              "Sčítání rovnic je užitečný trik, ale musíš ho dělat uváženě (ekvivalentní úpravy).",
            ),
          },
        ],
      },
    ],
  },
  8: {
    nadpis: "Matematika — 8. třída",
    podnadpis: "ZŠ · mnohočleny a funkce",
    uvod:
      "Osmá třída spojuje symbolickou manipulaci s grafy — začneš vidět funkce jako příběh „co se děje, když měním vstup“.",
    lekce: [
      {
        id: "mnohocleny",
        nazev: "Mnohočleny",
        odstavce: [
          "Mnohočlen je součet členů s proměnnou a mocninami. Při sčítání přenášíš podobné tvary stejně jako „tři jablka plus dvě jablka“.",
          "Násobení dvou závorek znamená rozdělit každý člen z první závorky ke každému ve druhé — systematicky, abys nic nepřeskočil.",
        ],
        cviceni: [
          mc(
            "Součet (3x + 1) + (2x − 4) je:",
            ["5x − 3", "5x + 5", "x − 3", "6x − 3"],
            0,
            "Sečti koeficienty u x a konstanty: 3x+2x = 5x, 1−4 = −3.",
          ),
          tf("Výraz x² + x lze zapsat jako x(x + 1).", true, "Vytkni společný faktor x."),
        ],
      },
      {
        id: "linearni-funkce",
        nazev: "Lineární funkce",
        odstavce: [
          "Lineární funkce y = kx + q mění výstup konstantním sklonem k. Graf je přímka; k říká, jak strmě stoupá nebo klesá, q kam ji posuneš nahoru či dolů.",
          "Z tabulky hodnot poznáš sklon: kolik se y změní, když x přidáš o 1.",
        ],
        cviceni: [
          mc(
            "Pro y = 2x + 1: když x = 3, pak y je:",
            ["7", "6", "5", "9"],
            0,
            "Dosazení: 2·3 + 1 = 7.",
          ),
          tf("Graf y = −x + 4 klesá směrem doprava.", true, "Záporný koeficient u x klesá."),
        ],
      },
    ],
  },
  9: {
    nadpis: "Matematika — 9. třída",
    podnadpis: "ZŠ · příprava na SŠ",
    uvod:
      "Devátá třída shrnuje a přidává nástroje pro střední školu: mocniny, základy kvadratických rovnic a práci s daty.",
    lekce: [
      {
        id: "mocniny",
        nazev: "Mocniny a vědecký zápis",
        odstavce: [
          "Mocnina je opakované násobení stejného základu. Záporný exponent znamená převrácenou hodnotu — přejdeš na druhou stranu zlomkové čáry.",
          "Vědecký zápis slouží k přehledným velmi velkým nebo malým číslům: posuneš desetinnou čárku a doplníš řád desítky.",
        ],
        cviceni: [
          mc(
            "2⁻³ je rovno:",
            ["1/8", "−8", "8", "1/−8"],
            0,
            "2³ = 8, převrácená hodnota dá 1/8.",
          ),
          tf("10⁴ · 10² = 10⁶.", true, "Při stejném základu sečteš exponenty."),
        ],
      },
      {
        id: "statistika",
        nazev: "Průměr a medián",
        odstavce: [
          "Průměr citlivě reaguje na extrémní hodnoty, medián víc vydrží „úlet“ jednoho měření. Užitečné je mít oba nástroje a umět říct, který dává v příběhu smysl.",
          "Grafy a tabulky si vždy přečti jako kontext — stejná čísla mohou znamenat různé věci v různých oborech.",
        ],
        cviceni: [
          mc(
            "U dat 2, 2, 10 je medián:",
            ["2", "10", "4,67", "6"],
            0,
            "Seřazeno 2,2,10 — prostřední hodnota je 2.",
          ),
          tf(
            "Průměr těchto tří čísel je větší než medián.",
            true,
            "Průměr je (2+2+10)/3 = 14/3 ≈ 4,67 > 2.",
          ),
        ],
      },
    ],
  },
};
