import type { StrankaRocniku } from "@/types/vyuka";
import { mc, tf } from "./helpers";

export const fyzikaZsPages: Record<number, StrankaRocniku> = {
  5: {
    nadpis: "Fyzika — 5. třída",
    podnadpis: "ZŠ · pozorování a měření",
    uvod:
      "Pátá třída buduje slovník pro pohyb, sílu a světlo — bez zbytečné matematiky, ale s pořádným měřením a odhady.",
    lekce: [
      {
        id: "pohyb-klid",
        nazev: "Pohyb a klid",
        odstavce: [
          "Pohyb je změna polohy v čase. Klid znamená, že vybraný bod zůstává ve stejné poloze vůči okolí — ale „úplný klid“ ve vesmíru nehledej, vždy záleží na tom, co považuješ za pevný bod.",
          "Dráha může být rovná i zakřivená; důležité je umět ji vyznačit a porovnat s časem, který cesta trvala.",
        ],
        cviceni: [
          tf("Rychlost jízdy kola závisí jen na tom, jak rychle se otáčí pedály.", false, "Záleží i na převodu a obvodu kola."),
          mc(
            "Když tělo držíš v klidu vůči stolu, jsi v klidu vůči:",
            ["stolu", "Slunci", "Měsíci", "vždy všemu"],
            0,
            "Klid je relativní k referenčnímu tělesu.",
          ),
        ],
      },
      {
        id: "svetlo-stin",
        nazev: "Světlo a stín",
        odstavce: [
          "Světlo se v prvním přiblížení šíří přímkově. Stín vzniká, když neprůhledné těleso část paprsků zastaví.",
          "Barvy předmětů souvisí s tím, které složky světla odráží — detailněji na střední škole, už teď ale můžeš experimentovat s filtrem.",
        ],
        cviceni: [
          mc(
            "Úplné zatmění Měsíce nastává, když:",
            ["Měsíc vstoupí do stínu Země", "Zemi zastane Měsíc", "Slunce zhasne", "prší"],
            0,
            "Země stíní Měsíc — jde o stín Země.",
          ),
          tf("Čím menší zdroj světla, ostřejší stín na ostrých hranách.", true, "Bodový zdroj dává ostré penumbry méně."),
        ],
      },
      {
        id: "mereni-si",
        nazev: "Měření a jednotky SI",
        rvpOdkaz:
          "RVP ZV – Fyzika: experimentování, měření a práce s jednotkami (obecná vazba na oblast přírodopisu/fyziky).",
        postup: [
          {
            typ: "text",
            odstavce: [
              "Metr, kilogram, sekunda a odvozené jednotky (např. newton jako kg·m/s²) tvoří společný jazyk fyziky. Když si jednotky doplníš už ve slovníku úlohy, méně často „vypadne“ o řád jiný výsledek.",
              "Převody dělej přes základní jednotku: např. kilometry na metry vynásobením tisícem — krok za krokem, bez skákání „od oka“.",
            ],
          },
          {
            typ: "metoda",
            nazev: "Kontrola rozumnosti",
            body: [
              "Po výpočtu se zeptej: dává řád odpovědi smysl? (rychlost chůže řádově m/s, ne tisíce).",
              "Zkontroluj, zda sčítáš jen stejné veličiny (nelze sčítat metry a sekundy).",
            ],
          },
          {
            typ: "cviceni",
            nazev: "Jednotky",
            polozka: mc(
              "Základní jednotka délky v SI je:",
              ["metr", "kilometr", "centimetr", "lit"],
              0,
              "Metr je základ; ostatní jsou násobky nebo díly.",
            ),
          },
        ],
      },
    ],
  },
  6: {
    nadpis: "Fyzika — 6. třída",
    podnadpis: "ZŠ · tlak a hustota",
    uvod:
      "Šestá třída propojuje hmotnost, objem a síly v kapalinách — dobrý základ pro hydrostatiku později.",
    lekce: [
      {
        id: "hustota",
        nazev: "Hustota látky",
        odstavce: [
          "Hustota ρ = m/V říká, kolik hmotnosti je v jednotce objemu. Voda má řádově 1000 kg/m³, vzduch mnohem méně — proto tělo vydrží ve vodě jinak než ve vzduchu.",
          "Při porovnávání těles stejného objemu vyhrává větší hmotnost větší hustotou.",
        ],
        cviceni: [
          mc(
            "Jednotka hustoty v soustavě SI je:",
            ["kg/m³", "m/s", "N·kg", "J/K"],
            0,
            "Hmotnost dělená objemem.",
          ),
          tf("Led má větší hustotu než voda.", false, "Led plave — je méně hustý než kapalná voda."),
        ],
      },
      {
        id: "tlak",
        nazev: "Tlak v kapalině",
        odstavce: [
          "Tlak je síla na plochu. V kapalině roste s hloubkou, protože nad tebou je víc sloupce vody.",
          "Hydrostatický tlak p = ρgh používej jen po kontrole jednotek: h musí být ve stejných jednotkách jako g a souhlasit s ρ.",
        ],
        cviceni: [
          tf("Čím hlouběji ve vodě, obvykle větší tlak.", true, "Větší sloupec kapaliny nad tebou."),
          mc(
            "Tlak vzduchu kolem nás je zhruba:",
            ["řádově 100 kPa", "0 Pa", "10⁶ Pa", "1 Pa"],
            0,
            "Atmosféra je kolem 101 kPa.",
          ),
        ],
      },
    ],
  },
  7: {
    nadpis: "Fyzika — 7. třída",
    podnadpis: "ZŠ · práce, energie, jednoduché obvody",
    uvod:
      "Sedmá třída propojuje „kolik práce odvedu“ s elektrickými žárovkami a bateriemi.",
    lekce: [
      {
        id: "prace-vykon",
        nazev: "Práce a výkon",
        odstavce: [
          "Práce W má jednotku joule (J), výkon P = W/t udává jouly za sekundu, tedy watt (W). Když zvedneš bednu pomalu, výkon je menší než při rychlém zdvihu se stejnou prací.",
          "Energie je schopnost konat práci; v každodennosti ji měříš často v kilowatthodinách u spotřebičů.",
        ],
        cviceni: [
          mc(
            "Výkon 60 W za 10 s vykoná práci:",
            ["600 J", "6 J", "6000 J", "6 kJ"],
            0,
            "W = P·t = 60·10 = 600 J.",
          ),
          tf("Když držíš závaží ve vzduchu bez pohybu, konáš nulovou mechanickou práci.", true, "Posun bez složky síly po dráze v daném směru."),
        ],
      },
      {
        id: "jednoduche-obvody",
        nazev: "Sériový obvod",
        odstavce: [
          "V sérii je všude stejný proud, napětí se dělí na díly podle odporů. Přepínač v řetězu znamená, že bez uzavření obvodu proud neuteče.",
          "Žárovka přeměňuje část energie na světlo, větší část často na teplo — účinnost není 100 %.",
        ],
        cviceni: [
          tf("V sériovém obvodu dvou žárovek je proud v obou stejný.", true,
            "Jediná smyčka — jeden proud.",
          ),
          mc(
            "Jednotka elektrického proudu je:",
            ["ampér", "volt", "ohm", "joule"],
            0,
            "Symbol A.",
          ),
        ],
      },
    ],
  },
  8: {
    nadpis: "Fyzika — 8. třída",
    podnadpis: "ZŠ · pohyb a vlny",
    uvod:
      "Osmá třída přidává rychlost, zrychlení a jednoduché vlny — mostem k mechanice na SŠ.",
    lekce: [
      {
        id: "rychlost-zrychleni",
        nazev: "Rychlost a zrychlení",
        odstavce: [
          "Průměrná rychlost je podíl dráhy a času. Okamžitá rychlost je limita malých úseků — na grafu s časem je sklon křivky x(t).",
          "Zrychlení říká, jak rychle se mění rychlost; jednotka m/s² znamená změnu rychlosti o 1 m/s každou sekundu.",
        ],
        cviceni: [
          mc(
            "Auto zrychlí z 0 na 20 m/s za 4 s. Průměrné zrychlení je:",
            ["5 m/s²", "80 m/s²", "4 m/s²", "0,2 m/s²"],
            0,
            "a = Δv/Δt = 20/4.",
          ),
          tf("Záporné zrychlení znamená brždění.", true, "Rychlost klesá."),
        ],
      },
      {
        id: "vlny",
        nazev: "Mechanické vlny",
        odstavce: [
          "Vlna přenáší energii, ne vždy hmotný transport ve velké vzdálenosti. Frekvence říká, kolik kmitů za sekundu, vlnová délka vzdálenost mezi „stejnými“ fázemi.",
          "Rychlost vlnění v = fλ platí pro periodické vlny v prostředí.",
        ],
        cviceni: [
          mc(
            "Vyšší frekvence zvuku obvykle znamená:",
            ["vyšší tón", "tišší zvuk", "pomalejší šíření", "delší vlnovou délku při stejném médiu"],
            0,
            "Vnímáme jako výšku tónu.",
          ),
          tf("Vakuum přenáší zvukové vlny.", false, "Zvuk potřebuje prostředí."),
        ],
      },
    ],
  },
  9: {
    nadpis: "Fyzika — 9. třída",
    podnadpis: "ZŠ · energie a optika",
    uvod:
      "Devátá třída shrnuje mechanickou energii a základy optiky pro přechod na gymnázium.",
    lekce: [
      {
        id: "mechanicka-energie",
        nazev: "Kinetická a potenciální energie",
        odstavce: [
          "Kinetická energie roste s druhou mocninou rychlosti — proto má rychlost v nehodách tak velký vliv.",
          "Gravitační potenciální energie u povrchu Eₚ ≈ mgh platí v dobrém přiblížení, když h není extrémní.",
        ],
        cviceni: [
          mc(
            "Dvakrát rychlejší auto má při stejné hmotnosti kinetickou energii:",
            ["čtyřikrát větší", "dvakrát větší", "stejnou", "poloviční"],
            0,
            "Eₖ ∝ v².",
          ),
          tf("Tření vždy zvyšuje mechanickou energii soustavy.", false, "Tření energii odebírá a mění v teplo."),
        ],
      },
      {
        id: "soco-cta",
        nazev: "Čočka a zjednodušený model oka",
        odstavce: [
          "Spojná čočka sbírá rovnoběžné paprsky do jednoho bodu (v ideálním případě). Rozptylka je rozšíří.",
          "Oko mění zakřivení čočky, aby ostřilo na různé vzdálenosti — zjednodušený model, ale užitečný.",
        ],
        cviceni: [
          tf("Krátkozrakost často znamená, že obraz spadá před sítnici.", true,
            "Přidává se rozptylka nebo chirurgická korekce.",
          ),
          mc(
            "Po dopadu na rovinné zrcadlo se úhel dopadu a odrazu:",
            ["rovnají", "sčítají na 90°", "ignorují se", "vždy 0"],
            0,
            "Zákon odrazu.",
          ),
        ],
      },
    ],
  },
};
