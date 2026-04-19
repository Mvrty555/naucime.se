import type { TeorieClanek } from "@/types/teorie";

export const matematikaTeorieClanky: TeorieClanek[] = [
  {
    id: "pomer-procenta-prakticky",
    nazev: "Poměr a procenta: stejná myšlenka, dva zápisy",
    perex:
      "Poměr a: b říká vztah dvou množství. Procenta jsou poměr ke stovce. Když to vidíš jako jednu rodinu pojmů, přestaneš mechanicky přepínat „násobit dělit“ bez obrazu.",
    uroven: "ZŠ 2. stupeň",
    motivace: [
      "Slevy v obchodě, recepty v kuchyni, měřítko map — všude dělíš nebo násobíš, ale vždycky sleduješ stejný vztah: kolik jednoho typu připadá na jednotku druhého.",
      "Didaktický trik: nejdřív nakresli proužek (pás) a rozděl ho — procenta jsou jen jiné pojmenování dílů, když celý pás je 100 %.",
    ],
    veliciny: [
      {
        nazev: "Poměr",
        znacka: "a : b",
        jednotkaSI: "bezrozměrný vztah (čísla stejného druhu)",
        jednotkaZnak: "—",
        definice:
          "Poměr a:b znamená, že na každé a jednotky prvního druhu připadá b jednotek druhého. Můžeš ho zapisovat i jako zlomek a:b převedený na stejnou měřítkovou jednotku.",
        vzorce: [
          { nazev: "Rozšíření poměru", vztah: "a : b = (k·a) : (k·b)" },
          { nazev: "Část z celku", vztah: "podíl = a / (a + b) (u dvou částí)" },
        ],
        variantyVzorca: [
          { situace: "Procenta jako poměr ke 100", vztah: "p % = p/100 z celku" },
        ],
        procToTakJe:
          "Procento je zkratka: místo psát zlomek se jmenovatelem 100 píšeme symbol %. Proto 25 % znamená čtvrtinu celku — ne „magické číslo“, ale převod na společný jazyk „ze sta dílů beru tolik dílů“.",
      },
      {
        nazev: "Procentní část a základ",
        znacka: "část, základ",
        jednotkaSI: "stejná jednotka u části a základu",
        jednotkaZnak: "závisí na kontextu (Kč, kg, …)",
        definice:
          "Část je to, co počítáš. Základ je „celé“, z něhož bereme procenta. Pořadí slov ve větě určuje základ — stejná čísla, jiný základ, jiný výsledek.",
        vzorce: [
          { nazev: "Část z procent", vztah: "část = (p/100) · základ" },
          { nazev: "Procenta z části a základu", vztah: "p = (část / základ) · 100" },
        ],
        procToTakJe:
          "Když roste základ při stejné části, procenta klesají — proto „10 % slevy“ a „10 Kč slevy“ nejsou totéž, pokud není jasné, z čeho se počítá. Vždy si označ základ podtržením ve slovní úloze.",
      },
    ],
    aktivita:
      "Vezmi dvě ceny v akci (např. jogurt a mléko). Jedna sleva je v %, druhá v Kč. Přepočítej obě na „kolik zaplatím“ a porovnej, která sleva je pro tebe výhodnější — než začneš počítat, odhadni.",
    omyly: [
      "Sčítat procenta z různých základů (20 % + 30 % není 50 %, pokud základy nejsou stejné).",
      "Počítat procenta „z nové ceny“ stejně jako „ze staré“ bez přečtení zadání.",
    ],
    navaznost:
      "Lineární funkce popisují stejnou myšlenku růstu konstantní rychlostí — viz další článek.",
  },
  {
    id: "linearni-funkce-zapis",
    nazev: "Lineární funkce: zápis, graf a „co když přidám jedničku k x“",
    perex:
      "y = kx + q je jazyk pro rovnoměrnou změnu. k říká sklon, q posun nahoru nebo dolů. Když umíš číst graf zleva doprava, umíš číst příběh bez počítání.",
    uroven: "ZŠ 8.–9. / začátek SŠ",
    motivace: [
      "Graf přímky není „obrázek k vylepšení“, ale výstup stejných čísel jako tabulka. Tabulka a vzorec musí říkat totéž — jinak je chyba v přepisu.",
      "Didakticky: nejdřív tři body (x,y), pak teprve přímka — ověření je rychlejší než doufat v jeden přepočet.",
    ],
    veliciny: [
      {
        nazev: "Lineární funkce",
        znacka: "f(x) = kx + q",
        jednotkaSI: "y a x mají jednotky dané kontextem (Kč, km, s…)",
        jednotkaZnak: "—",
        definice:
          "k je směrnice (změna y při +1 k x), q je hodnota y pro x = 0 (průsečík s osou y v kartézské soustavě).",
        vzorce: [
          { nazev: "Hodnota ve x", vztah: "f(x) = kx + q" },
          { nazev: "Změna při kroku o 1", vztah: "f(x+1) − f(x) = k" },
        ],
        variantyVzorca: [
          { situace: "Rovnice přímky přes dva body (nápad)", vztah: "k = Δy/Δx" },
        ],
        procToTakJe:
          "Lineární znamená: přidáš-li k x jednotku, y se změní vždy o stejné k. Proto graf padá na přímku — žádné zakřivení, žádné „překvapení“ mezi body. q posune celou přímku nahoru nebo dolů, ale nezmění sklon.",
      },
    ],
    aktivita:
      "Zapiš si ceník: prvních 5 min hovoru zdarma, pak Kč za minutu jako lineární funkci času. Nakresli graf od 0 do 10 minut. Kde je q a kde k?",
    omyly: [
      "Zaměnit k a q: q je posun výš/níž, k je sklon.",
      "Dosazovat bez závorek — k·(x+1) není totéž co kx + 1.",
    ],
  },
];

export function getMatematikaTeorieClanek(id: string) {
  return matematikaTeorieClanky.find((c) => c.id === id) ?? null;
}

export function getMatematikaTeorieIds() {
  return matematikaTeorieClanky.map((c) => c.id);
}
