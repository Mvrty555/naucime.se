import type { StrankaRocniku } from "@/types/vyuka";
import { mc, tf } from "./helpers";

export const chemieZsPages: Record<number, StrankaRocniku> = {
  5: {
    nadpis: "Chemie — 5. třída",
    podnadpis: "ZŠ · látky kolem nás",
    uvod:
      "Pátá třída rozlišuje směsi a čisté látky a učí se bezpečně pracovat v laboratoři.",
    lekce: [
      {
        id: "smesi-ciste",
        nazev: "Směs vs. čistá látka",
        odstavce: [
          "Vzduch je směs plynů, pitná voda často také obsahuje rozpuštěné minerály — pořád je to voda jako hlavní složka, ale není „chemicky čistá“ ve školním slova smyslu.",
          "Rozlišení fyzikální a chemické změny: tání ledu je fyzikální (stejná molekula), hoření je chemická (nové látky).",
        ],
        cviceni: [
          mc(
            "Která věta je chemická změna?",
            ["reznutí železa", "tání cukru v čaji", "hoření dřeva", "drcení křídy"],
            2,
            "Nové látky, plamen, oxidace.",
          ),
          tf("V laboratoři si nasadíš ochranné brýle, když pracuješ s neznámou kapalinou.", true,
            "Zásada opatrnosti.",
          ),
        ],
      },
      {
        id: "bezpecnost",
        nazev: "Piktogramy bezpečnosti",
        odstavce: [
          "GHS symboly varují před žíravinami, hořlavinami nebo zdravotními riziky. Přečti si větu H a doporučení P na etiketě.",
          "Nikdy nečichej přímo k otvoru nádoby — použij bezpečné množství a ventilaci podle pokynů učitele.",
        ],
        cviceni: [
          tf("Plamen nad nápisem znamená vždy nehořlavou látku.", false,
            "Plamen často značí hořlavost nebo reaktivitu.",
          ),
          mc(
            "Při přelévání kyseliny do vody platí pravidlo:",
            ["kyselinu do vody", "vodu do kyseliny", "je to jedno", "neřešit"],
            0,
            "Kvůli silnému uvolňování tepla u exotermního rozředění.",
          ),
        ],
      },
    ],
  },
  6: {
    nadpis: "Chemie — 6. třída",
    podnadpis: "Prvky a periodická soustava",
    uvod:
      "Šestá třída staví „mapu prvků“ a základní model atomu.",
    lekce: [
      {
        id: "periodicka",
        nazev: "Řádky a sloupce tabulky",
        odstavce: [
          "Periodická soustava řadí prvky podle atomového čísla. Sloupce (skupiny) často sdílejí podobné vlastnosti, protože valenční elektronová stavba se opakuje.",
          "Kovy jsou vlevo dole, nekovy vpravo nahoře, polokovy mezi nimi — hrubé pravidlo s výjimkami.",
        ],
        cviceni: [
          mc(
            "Atomové číslo říká:",
            ["počet protonů", "počet neutronů", "hmotnost molekuly", "jen náboj iontu"],
            0,
            "Definuje identitu prvku.",
          ),
          tf("Helium je vzácný plyn.", true,
            "Má uzavřenou slupku 1s², málo reaguje.",
          ),
        ],
      },
      {
        id: "atom-molekula",
        nazev: "Atom a molekula",
        odstavce: [
          "Atom má jádro (protony, neutrony) a elektronový obal. Molekula je spojení atomů chemickou vazbou.",
          "Vzorec H₂O říká dva atomy vodíku a jeden kyslíku v jedné molekule vody.",
        ],
        cviceni: [
          tf("O₂ je molekula kyslíku ve vzduchu.", true,
            "Dva atomy kyslíku spojené vazbou.",
          ),
          mc(
            "Náboj elektronu je ve srovnání s protonem:",
            ["opačný a stejně velký", "stejný", "dvojnásobný", "nulový"],
            0,
            "Elementární náboje ±e.",
          ),
        ],
      },
    ],
  },
  7: {
    nadpis: "Chemie — 7. třída",
    podnadpis: "Reakce a stechiometrie",
    uvod:
      "Sedmá třída propojuje makrosvět reakcí s počtem částic v molu.",
    lekce: [
      {
        id: "chemicka-rovnice",
        nazev: "Vyvažování rovnic",
        odstavce: [
          "Chemická rovnice zachovává počet atomů každého prvku na obou stranách. Koeficienty říkají, kolik „balíků“ molekul reaguje.",
          "Začni u prvků, které se vyskytují jen jednou na každé straně — často ušetříš slepé pokusy.",
        ],
        cviceni: [
          mc(
            "Pro hoření vodíku v kyslíku platí zjednodušeně:",
            ["2 H₂ + O₂ → 2 H₂O", "H + O → HO", "H₂O → H₂ + O", "H₂ + O₂ → H₂O₂"],
            0,
            "Zachování atomů vodíku a kyslíku.",
          ),
          tf("Mol je počet částic řádově 6,022·10²³.", true,
            "Avogadrova konstanta jako definice molu.",
          ),
        ],
      },
      {
        id: "latkove-mnozstvi",
        nazev: "Látkové množství n = m/M",
        odstavce: [
          "Molární hmotnost M najdeš v tabulce prvků pro prvky, pro sloučeniny sečteš příspěvky atomů.",
          "Látkové množství n propojuje hmotnost s počtem částic přes Avogadrovu konstantu.",
        ],
        cviceni: [
          mc(
            "Molární hmotnost vody H₂O je zhruba:",
            ["18 g/mol", "10 g/mol", "44 g/mol", "2 g/mol"],
            0,
            "2·1 + 16.",
          ),
          tf("Čím větší molární hmotnost plynu, tím hustší při stejném tlaku a teplotě (v přiblížení).", true,
            "Ideální plyn: hustota roste s M.",
          ),
        ],
      },
    ],
  },
  8: {
    nadpis: "Chemie — 8. třída",
    podnadpis: "Roztoky a rychlost reakce",
    uvod:
      "Osmá třída přidává koncentrace a faktory, které reakce zrychlují nebo zpomalují.",
    lekce: [
      {
        id: "roztoky",
        nazev: "Koncentrace roztoku",
        odstavce: [
          "Molární koncentrace c = n/V udává moly rozpuštěné látky v jednom litru roztoku. Vždy ber objem roztoku, ne jen vody, kterou jsi přilil na začátku.",
          "Ředěním snižuješ c — při zachování látky roste objem.",
        ],
        cviceni: [
          mc(
            "0,5 molu v 1 dm³ roztoku má koncentraci:",
            ["0,5 mol/dm³", "5 mol/dm³", "0,05 mol/dm³", "2 mol/dm³"],
            0,
            "c = n/V.",
          ),
          tf("Teplota často zvyšuje rychlost reakce.", true,
            "Častější srážky částic, vyšší energie.",
          ),
        ],
      },
      {
        id: "katalyzator",
        nazev: "Katalyzátor",
        odstavce: [
          "Katalyzátor mění dráhu reakce tak, aby byla rychlejší, ale na konci se chemicky vrátí do stejného stavu. Enzymy v těle dělají totéž v biologii.",
          "Katalyzátor neposune rovnováhu — jen k ní dojde rychleji.",
        ],
        cviceni: [
          tf("Katalyzátor se v ideálním modelu spotřebovává rovnovážně.", false,
            "Obnovuje se; nespotřebovává se čistě pro posun rovnováhy.",
          ),
          mc(
            "Větší povrch pevného reaktantu obvykle:",
            ["zrychlí reakci", "vždy ji zastaví", "nemá vliv", "sníží teplotu"],
            0,
            "Víc míst pro srážky.",
          ),
        ],
      },
    ],
  },
  9: {
    nadpis: "Chemie — 9. třída",
    podnadpis: "Organická chemie v nástinu",
    uvod:
      "Devátá třída propojuje uhlík, řetězce a jednoduché funkční skupiny.",
    lekce: [
      {
        id: "uhlovodiky",
        nazev: "Alkany a větev řetězce",
        odstavce: [
          "Alkany mají obecný vzorec CₙH₂ₙ₊₂. Větev na řetězci mění vlastnosti tání a hustoty, ale základ zůstává uhlíkový kostra.",
          "Názvosloví začíná nejdelším řetězcem a čísly označuje pozice substituentů.",
        ],
        cviceni: [
          mc(
            "Sumární vzorec ethanu je:",
            ["C₂H₆", "C₂H₄", "CH₄", "C₂H₂"],
            0,
            "Alkan se dvěma uhlíky.",
          ),
          tf("Benzen má tvar šestiúhelníku s konjugovanými vazbami.", true,
            "Zjednodušený model aromatického kruhu.",
          ),
        ],
      },
      {
        id: "kyseliny-alkoholy",
        nazev: "Kyselina octová a ethanol v kontextu",
        odstavce: [
          "Ethanol (C₂H₅OH) najdeš v dezinfekcích v určitých koncentracích, octová kyselina v octě je vodný roztok.",
          "Funkční skupina —OH dělá z alkenu alkohol jinou třídu sloučenin.",
        ],
        cviceni: [
          tf("Čistý ethanol je ve skutečnosti silně hygroskopický a hořlavý.", true,
            "Bezpečnostní předpisy v laboratoři.",
          ),
          mc(
            "Skupina —COOH označuje:",
            ["karboxylové kyseliny", "alkoholy", "halogenidy", "aminy"],
            0,
            "Kyselina má proton k uvolnění.",
          ),
        ],
      },
    ],
  },
};
