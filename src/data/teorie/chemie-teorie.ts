import type { TeorieClanek } from "@/types/teorie";

export const chemieTeorieClanky: TeorieClanek[] = [
  {
    id: "mol-a-latkove-mnozstvi",
    nazev: "Mol a látkové množství: spojení mikrosvěta s makropoměry",
    perex:
      "Chemie pracuje s obrovským počtem částic. Mol je měřítko „balení“ částic, látkové množství n je počet molů. Když to spojíš s hmotností přes molární hmotnost, přestaneš plést g a mol.",
    uroven: "ZŠ 2. stupeň / začátek SŠ",
    motivace: [
      "Recepty v kuchyni počítají „lžíce“ — v laboratoři je mol podobný návyk: přenášíš mezi světem částic a světem měřitelných hmotností.",
      "Didakticky: vždy si napiš, co je známé (hmotnost, vzorec látky) a co hledáš (n, N, m…) — tabulka jednotek ti ušetří zmatek.",
    ],
    veliciny: [
      {
        nazev: "Látkové množství",
        znacka: "n",
        jednotkaSI: "mol",
        jednotkaZnak: "mol",
        definice:
          "1 mol obsahuje přesně Avogadrovu konstantu částic (základní definice přes konstanty; ve škole často jako počítací jednotka).",
        vzorce: [
          { nazev: "Vztah k hmotnosti", vztah: "n = m / M" },
          { nazev: "Počet částic (modelově)", vztah: "N ≈ n · NA" },
        ],
        variantyVzorca: [
          { situace: "Hmotnost z n", vztah: "m = n · M" },
        ],
        procToTakJe:
          "Molární hmotnost M je „hmotnost jednoho molu“ dané látky — je to konstanta pro čistou látku. Proto dělením hmotnosti m touto konstantou dostaneš, kolik „balení po jednom molu“ jsi vzal.",
      },
      {
        nazev: "Molární hmotnost",
        znacka: "M",
        jednotkaSI: "kilogram na mol (ve škole často g/mol)",
        jednotkaZnak: "g·mol⁻¹",
        definice:
          "Součet příspěvků atomů ve vzorci podle tabulky relativních atomových hmotností. Jednotky si hlídej: tabulky bývají v g/mol.",
        vzorce: [
          { nazev: "Příklad logiky", vztah: "M(H₂O) ≈ 2·1 + 16 (g/mol)" },
        ],
        procToTakJe:
          "Protože atomy mají charakteristické hmotnosti, molekula je jejich součet. Proto stejný mol různých látek váží jinak — ale pořád jde o stejný počet základních jednotek (modelově molekul u molekulové látky).",
      },
    ],
    aktivita:
      "Spočítej M pro CO₂ z atomových hmotností (C, O), pak n pro 44 g CO₂. Ověř, že n vyjde 1 mol — je to kontrolní příklad, který si pamatuješ jako kotvu.",
    omyly: [
      "Plést hmotnost m a látkové množství n — jsou to různé veličiny spojené přes M.",
      "Zapomenout na stechiometrické koeficienty ve vzorci — 2 H₂O znamená dvakrát větší počet molekul než 1 H₂O při stejném n pro H₂O jako vzorec jedné molekuly (učebnicová péče o zápisu).",
    ],
    navaznost:
      "Koncentrace roztoku přidává objem roztoku — viz článek o molární koncentraci.",
  },
  {
    id: "koncentrace-roztoku",
    nazev: "Molární koncentrace: kolik molu v jednom litru roztoku",
    perex:
      "Koncentrace c říká, jak „hustý“ je roztok z pohledu rozpuštěné látky. Spolu s objemem V ti dá látkové množství rozpuštěné látky.",
    uroven: "ZŠ 2. stupeň / začátek SŠ",
    motivace: [
      "Stejný objem může nést jiné množství soli — proto chuť i vodivost závisí na c, nejen na hmotnosti „nasypané do vody“.",
      "Piš si jednotku mol·dm⁻³ (nebo mol/L) a kontroluj převody dm³ na litr.",
    ],
    veliciny: [
      {
        nazev: "Molární koncentrace",
        znacka: "c",
        jednotkaSI: "mol na metr krychlový (ve škole často mol·dm⁻³)",
        jednotkaZnak: "mol·dm⁻³",
        definice:
          "Látkové množství rozpuštěné látky dělené objemem roztoku (v jednotkách, které si zvolíš konzistentně).",
        vzorce: [
          { nazev: "Základní vztah", vztah: "c = n / V" },
          { nazev: "Látkové množství z roztoku", vztah: "n = c · V" },
        ],
        variantyVzorca: [
          { situace: "Ředění (model)", vztah: "c₁V₁ = c₂V₂ při přenesení látky" },
        ],
        procToTakJe:
          "Koncentrace je hustota látky v prostoru roztoku. Když ředíš, objem roste, ale množství rozpuštěné látky zůstává (dokud nepřidáš další sůl), takže c klesá.",
      },
    ],
    aktivita:
      "Vezmi sáček s označením koncentrace nápoje (např. sirup) a spočítej, kolik molu cukru by bylo v 200 ml, pokud bys znal c (odhadni řád). Cílem je trénink jednotek, ne přesnost na desetinné místo.",
    omyly: [
      "Zaměnit objem roztoku a objem rozpouštědla ve slovní úloze bez přečtení.",
      "Přičítat koncentrace dvou různých látek v jednom roztoku jako čísla bez chemického smyslu.",
    ],
  },
];

export function getChemieTeorieClanek(id: string) {
  return chemieTeorieClanky.find((c) => c.id === id) ?? null;
}

export function getChemieTeorieIds() {
  return chemieTeorieClanky.map((c) => c.id);
}
