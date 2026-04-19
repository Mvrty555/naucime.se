import type { StrankaRocniku } from "@/types/vyuka";
import { mc, tf } from "./helpers";

/** 1.–4. ročník střední školy (obecný matematický okruh). */
export const matematikaSsPages: Record<number, StrankaRocniku> = {
  1: {
    nadpis: "Matematika — 1. ročník SŠ",
    podnadpis: "Funkce, výrazy, základy logiky",
    uvod:
      "První ročník střední školy utuží algebraické návyky a začne funkce vnímat jako nástroj modelování.",
    lekce: [
      {
        id: "vyrazy-vztahy",
        nazev: "Algebraické výrazy",
        odstavce: [
          "Úpravy výrazů jsou dohoda o tom, jak přepisovat zápis bez změny hodnoty. Roznásobení závorky a vytknutí společného faktoru jsou opačné směry stejné myšlenky.",
          "Doporučujeme po každé úpravě zkontrolovat dosazením jednoduchého čísla (např. x = 0 nebo x = 1), jestli se nic nerozbilo — ne jako důkaz, ale jako rychlý test.",
        ],
        cviceni: [
          mc(
            "Zjednoduš (x + 2)(x − 2):",
            ["x² − 4", "x² + 4", "x² − 2x", "x² − 4x"],
            0,
            "Rozdíl druhých mocnin: a² − b².",
          ),
          tf("Pro každé x platí (x + 1)² = x² + 1.", false, "Chybí dvojnásobný člen 2x."),
        ],
      },
      {
        id: "funkce-vlastnosti",
        nazev: "Funkce: doména a růst",
        odstavce: [
          "Funkce přiřazuje každému přípustnému vstupu nejvýše jeden výstup. Doména říká, které vstupy dávají smysl v příběhu (dělení nulou ne, záporný čas někdy také ne).",
          "Růst a klesání čti z grafu zleva doprava: stoupá-li graf, roste výstup.",
        ],
        cviceni: [
          mc(
            "Pro f(x) = 1/x je problém v bodě:",
            ["x = 0", "x = 1", "x = −1", "žádný"],
            0,
            "Dělení nulou nedává smysl.",
          ),
          tf(
            "Každá přímka v rovině je grafem nějaké funkce.",
            false,
            "Svislá přímka neprochází „funkčním testem“: jednomu x by odpovídalo více y.",
          ),
        ],
      },
    ],
  },
  2: {
    nadpis: "Matematika — 2. ročník SŠ",
    podnadpis: "Goniometrie a posloupnosti",
    uvod:
      "Druhý ročník propojuje trojúhelníky, kruh a periodické jevy — hodi se i pro fyziku vln.",
    lekce: [
      {
        id: "goniometrie",
        nazev: "Sin, cos, jednotková kružnice",
        odstavce: [
          "Na jednotkové kružnici je cos úhelu vodorovná složka, sin svislá. Proto platí základní identita sin²α + cos²α = 1 — jde o Pythagorovu větu v trojúhelníku z bodu na kružnici.",
          "Úhel můžeš měřit ve stupních nebo radiánech; důležité je v jedné úloze neměnit soustavu uprostřed.",
        ],
        cviceni: [
          mc(
            "cos 0° je:",
            ["1", "0", "−1", "1/2"],
            0,
            "Na ose x vpravo od počátku.",
          ),
          tf("sin 90° = 1.", true, "Horní bod jednotkové kružnice."),
        ],
      },
      {
        id: "posloupnosti",
        nazev: "Aritmetická posloupnost",
        odstavce: [
          "Aritmetická posloupnost přidává stále stejný rozdíl d. N-tý člen umíš zapsat jako aₙ = a₁ + (n−1)d.",
          "Součet prvních n členů má kompaktní vzorec — odvodíš ho později z „symetrického párování“ prvního a posledního členu.",
        ],
        cviceni: [
          mc(
            "Posloupnost 3, 7, 11, … má rozdíl:",
            ["4", "3", "7", "1"],
            0,
            "7 − 3 = 4.",
          ),
          tf(
            "Číslo 11 je členem aritmetické posloupnosti 2, 5, 8, …",
            true,
            "Obecný člen 2 + (n−1)·3, pro n = 4 dostaneš 11.",
          ),
        ],
      },
    ],
  },
  3: {
    nadpis: "Matematika — 3. ročník SŠ",
    podnadpis: "Logaritmy a derivace (úvod)",
    uvod:
      "Třetí ročník často přidává nástroje pro popis růstu a křivky — logaritmy komprimují řády velikosti, derivace říkají okamžitou změnu.",
    lekce: [
      {
        id: "logaritmy",
        nazev: "Logaritmus jako opak mocniny",
        odstavce: [
          "Logₐ b = c znamená aᶜ = b. Desítkový logaritmus je pohodlný pro řády velikosti, přirozený logaritmus ln má příjemné vlastnosti v analýze.",
          "Pravidla log(a·b) = log a + log b a log(a/b) = log a − log b odpovídají pravidlům pro mocniny.",
        ],
        cviceni: [
          mc(
            "log₁₀ 1000 je:",
            ["3", "10", "100", "30"],
            0,
            "10³ = 1000.",
          ),
          tf("ln 1 = 0.", true, "e⁰ = 1."),
        ],
      },
      {
        id: "derivace-uvod",
        nazev: "Derivace jako sklon",
        odstavce: [
          "U funkce f(x) je derivace f′(x) limita průměrných změn — intuitivně sklon tečny. Pro lineární f(x)=kx+q je f′(x)=k.",
          "Pravidla součtu a násobení konstantou odpovídají tomu, že skládání lineárních kroků zůstává přehledné.",
        ],
        cviceni: [
          mc(
            "Derivace x² je:",
            ["2x", "x", "x²/2", "2"],
            0,
            "Standardní pravidlo mocninné funkce.",
          ),
          tf("Konstantní funkce má všude derivaci 0.", true, "Graf je vodorovná přímka."),
        ],
      },
    ],
  },
  4: {
    nadpis: "Matematika — 4. ročník SŠ",
    podnadpis: "Integrál a shrnutí před maturitou",
    uvod:
      "Čtvrtý ročník často integruje znalosti: nejen vzorce, ale i strategie — co zkusit, když úloha vypadá neznámě.",
    lekce: [
      {
        id: "integral-uvod",
        nazev: "Určitý integrál jako součet dílků",
        odstavce: [
          "Určitý integrál z funkce na intervalu souvisí s plochou pod grafem (se znaménkem pod osou). Představ si jemné svislé pruhy, jejichž součet ploch aproximuje celkovou hodnotu.",
          "Základní věta analýzy propojuje integrál a derivaci — zjednodušeně: „integrál je opak derivace až na konstantu“.",
        ],
        cviceni: [
          tf(
            "Plocha pod konstantní funkcí f(x)=3 na intervalu [0,2] je 6.",
            true,
            "Obdélník šířky 2 a výšky 3.",
          ),
          mc(
            "Primitivní funkce k 2x je:",
            ["x² + C", "2 + C", "x²", "2x² + C"],
            0,
            "Derivace x² je 2x.",
          ),
        ],
      },
      {
        id: "strategie-reseni",
        nazev: "Strategie řešení úloh",
        odstavce: [
          "Než začneš počítat, přepiš zadání vlastními slovy. Zvol jednotky a zkontroluj rozměrovou souhlasnost u fyzikálních úloh.",
          "Rozděl složitý problém na dílčí kroky a ověř mezivýsledky odhadem řádu velikosti.",
        ],
        cviceni: [
          tf(
            "Kontrola dosazením je užitečná i u slovních úloh s proměnnou.",
            true,
            "Ověříš konzistenci modelu.",
          ),
          mc(
            "Když výsledek vypadá absurdně, první krok je:",
            ["zkontrolovat jednotky a předpoklady", "smazat úlohu", "zvýšit hlasitost", "ignorovat"],
            0,
            "Rychlá reflexe šetří čas.",
          ),
        ],
      },
    ],
  },
};
