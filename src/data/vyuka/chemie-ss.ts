import type { StrankaRocniku } from "@/types/vyuka";
import { mc, tf } from "./helpers";

export const chemieSsPages: Record<number, StrankaRocniku> = {
  1: {
    nadpis: "Chemie — 1. ročník SŠ",
    podnadpis: "Vazba, struktura, termodynamické směry",
    uvod:
      "První ročník SŠ zpřesňuje modely vazby a souvislost energie s průběhem reakce.",
    lekce: [
      {
        id: "vazba",
        nazev: "Kovalentní vs. iontová vazba",
        odstavce: [
          "Kovalentní vazba sdílí elektrony mezi atomy podobné elektronegativity. Iontová přenáší elektron výrazně na jeden atom a vznikají ionty.",
          "Elektronegativita roste zhruba směrem k pravému hornímu rohu tabulky (fluor jako extrém).",
        ],
        cviceni: [
          mc(
            "Která látka je spíše iontová?",
            ["NaCl", "H₂", "Cl₂", "CH₄"],
            0,
            "Kov + nekov s velkým rozdílem EN.",
          ),
          tf("Dvojná vazba je kratší než jednoduchá mezi stejnými atomy.", true,
            "Více sdílených elektronů přitahuje jádna silněji.",
          ),
        ],
      },
      {
        id: "entalpie",
        nazev: "Exotermní a endotermní reakce",
        odstavce: [
          "Když reakce uvolňuje teplo do okolí, entalpie produktů je nižší než reaktantů v daném uspořádání — exotermní děj.",
          "Endotermní reakce potřebuje dodanou energii — rozklad některých solí při zahřívání.",
        ],
        cviceni: [
          tf("Hoření paliva v kyslíku je typicky exotermní.", true,
            "Uvolňuje tepelnou energii.",
          ),
          mc(
            "ΔH < 0 znamená:",
            ["exotermní reakci", "endotermní reakci", "žádnou změnu", "jen katalýzu"],
            0,
            "Proces uvolňuje entalpii (značení dle konvence).",
          ),
        ],
      },
    ],
  },
  2: {
    nadpis: "Chemie — 2. ročník SŠ",
    podnadpis: "Kinetika a rovnováha",
    uvod:
      "Druhý ročník přidává rychlostní zákon a chemickou rovnováhu jako dynamický stav.",
    lekce: [
      {
        id: "rychlost",
        nazev: "Rychlost reakce a srážkový model",
        odstavce: [
          "Čím častější účinné srážky částic, tím rychleji přibývají produkty. Koncentrace a teplota to ovlivňují nejvíc v úvodních modelech.",
          "Aktivační energie je bariéra, kterou musí částice překonat — katalyzátor ji snižuje.",
        ],
        cviceni: [
          mc(
            "Zdvojnásobení koncentrace reaktantu A často u reakce prvního řádu vůči A zdvojnáší počáteční rychlost:",
            ["ano", "ne", "vždy na nulu", "vždy na čtvrtinu"],
            0,
            "r ∝ [A] v prvním řádu.",
          ),
          tf("V rovnováze se dopředná a zpětná rychlost rovnají.", true,
            "Koncentrace se už nemění makroskopicky.",
          ),
        ],
      },
      {
        id: "rovnovaha",
        nazev: "Konstanta rovnováhy K",
        odstavce: [
          "Pro reakce aA + bB ⇌ cC + dD je K = ([C]^c[D]^d)/([A]^a[B]^b) při rovnovážných koncentracích (v ideálním modelu).",
          "Velké K znamená převahu produktů v rovnováze, malé K převahu reaktantů.",
        ],
        cviceni: [
          tf("Konstanta rovnováhy závisí na teplotě.", true,
            "Změna teploty mění K, pokud ΔH ≠ 0.",
          ),
          mc(
            "Když K >> 1, v rovnováze převládají:",
            ["produkty", "reaktanty", "vždy plyny", "vždy jen voda"],
            0,
            "Velký podíl produktů.",
          ),
        ],
      },
    ],
  },
  3: {
    nadpis: "Chemie — 3. ročník SŠ",
    podnadpis: "Kyseliny, pH, redox",
    uvod:
      "Třetí ročník formalizuje Brønstedovu teorii a přidává elektronový přenos.",
    lekce: [
      {
        id: "ph",
        nazev: "pH a autoprotolýza vody",
        odstavce: [
          "pH = −log₁₀[H⁺], kde [H⁺] je aktivita vodíkového iontu (v úvodu ber jako koncentraci). V neutrální vodě při 25 °C je pH 7.",
          "Silná kyselina disociuje prakticky úplně v ředění, slabá jen částečně — proto stejná koncentrace nemusí znamenat stejné pH.",
        ],
        cviceni: [
          mc(
            "Které pH odpovíduje silně kyselému roztoku?",
            ["1", "7", "13", "0"],
            0,
            "Velké [H⁺] → malé pH.",
          ),
          tf("Slabá kyselina má nízký stupeň disociace.", true,
            "Rovnováha mezi nedisociovanou formou a ionty.",
          ),
        ],
      },
      {
        id: "redox",
        nazev: "Oxidace a redukce",
        odstavce: [
          "Oxidace zvyšuje oxidační číslo (ztráta elektronů v účetním modelu), redukce ho snižuje. Vždy probíhají spolu.",
          "Určení oxidačních čísel u iontů a molekul je první krok k vyvážení redox rovnice.",
        ],
        cviceni: [
          mc(
            "V čistém prvku je oxidační číslo:",
            ["0", "+1", "−1", "vždy +2"],
            0,
            "Definice pro elementární látku.",
          ),
          tf("Reduktor se oxiduje.", true,
            "Předává elektrony jinému členu.",
          ),
        ],
      },
    ],
  },
  4: {
    nadpis: "Chemie — 4. ročník SŠ",
    podnadpis: "Organická syntéza a shrnutí",
    uvod:
      "Čtvrtý ročník často spojuje mechanismy a bezpečnou strategii syntézy v laboratoři.",
    lekce: [
      {
        id: "nukleofil",
        nazev: "Nukleofilní substituce — slovní obraz",
        odstavce: [
          "Nukleofil „miluje“ jádro — donáší elektronový pár na málo obsazený uhlík. Odcházející skupina bere elektronový pár s sebou.",
          "SN1 má meziprodukt karbokation, SN2 jde koncertně v jednom kroku — polarita rozpouštědla hraje roli.",
        ],
        cviceni: [
          tf("Polaritní protické rozpouštědlo často podporuje SN1 u terciálních halogenidů.", true,
            "Stabilizuje ion.",
          ),
          mc(
            "Který ion je častý nukleofil?",
            ["OH⁻", "Na⁺", "Mg²⁺", "Ar"],
            0,
            "Donor elektronového páru.",
          ),
        ],
      },
      {
        id: "bezpecnost-lab",
        nazev: "Plánování experimentu",
        odstavce: [
          "Před syntézou si přečti bezpečnostní listy, připrav hašení a ventilaci. Měj záložní plán, když teplota přeskočí mez.",
          "Dokumentuj množství a časy — při nehodě pomůže záchranářům.",
        ],
        cviceni: [
          tf("Nosič ochranných pomůcek můžeš sundat hned po odchodu z laboratoře, pokud už necítíš výpar.", false,
            "Kontaminace může být neviditelná; sundej až po kontrole.",
          ),
          mc(
            "První pomoc při poleptání kyselinou začíná:",
            ["proplachováním vodou a voláním pomoci", "neutralizací louhem", "čekáním", "pouze studeným obkladem bez vody"],
            0,
            "Voda a lékařská pomoc.",
          ),
        ],
      },
    ],
  },
};
