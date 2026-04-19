import type { StrankaRocniku } from "@/types/vyuka";
import { mc, tf } from "./helpers";

export const fyzikaSsPages: Record<number, StrankaRocniku> = {
  1: {
    nadpis: "Fyzika — 1. ročník SŠ",
    podnadpis: "Mechanika a přechod na formalismus",
    uvod:
      "První ročník SŠ zpřesňuje pohybové zákony a měření — z odhadů k soustavnému zápisu.",
    lekce: [
      {
        id: "newtonovy-zakony",
        nazev: "Newtonovy zákony v souvislostech",
        odstavce: [
          "První zákon: bez výsledné síly setrváš v přímocarém pohybu nebo klidu vůči zvolené inerciální soustavě. Druhý zákon F = ma propojuje příčinu a změnu pohybu.",
          "Třetí zákon říká, že síly vzájemného působení jsou stejně velké a opačně orientované — nezmizí, jen se přesunou na jiné těleso.",
        ],
        cviceni: [
          mc(
            "Jednotka síly v SI je:",
            ["newton", "joule", "pascal", "watt"],
            0,
            "1 N = 1 kg·m/s².",
          ),
          tf("Setrvačnost závisí na hmotnosti tělesa.", true, "Větší hmotnost — větší odpor vůči změně rychlosti při stejné síle."),
        ],
      },
      {
        id: "hybnost",
        nazev: "Hybnost",
        odstavce: [
          "Hybnost p = mv má směr rychlosti. Při malých rychlostech ji sčítáš vektorově při srážkách v jedné rovině.",
          "Izolovaná soustava má zachovanou celkovou hybnost — praktické při odhadech po nárazu.",
        ],
        cviceni: [
          mc(
            "Jednotka hybnosti je:",
            ["kg·m/s", "N·m", "J/s", "kg/m"],
            0,
            "Hmotnost krát rychlost.",
          ),
          tf("Při pružné srážce dvou kuliček na ose může hybnost přejít z jedné na druhou.", true,
            "Celková hybnost se zachová, pokud jsou vnější síly zanedbatelné.",
          ),
        ],
      },
    ],
  },
  2: {
    nadpis: "Fyzika — 2. ročník SŠ",
    podnadpis: "Elektrostatika a magnetismus",
    uvod:
      "Druhý ročník často přidává pole a síly na náboj — příprava na obvody a indukci.",
    lekce: [
      {
        id: "coulomb",
        nazev: "Síla mezi náboji",
        odstavce: [
          "Stejné znaménka se odpuzují, opačná přitahují. Velikost síly klesá se čtvercem vzdálenosti v bodovém modelu.",
          "Permitivita prostředí mění sílu — v kapalinách jinak než ve vzduchu.",
        ],
        cviceni: [
          tf("Elektron má záporný elementární náboj.", true,
            "Značka e u protonu je kladná, elektron má −e.",
          ),
          mc(
            "Jednotka náboje v SI je:",
            ["kulomb", "volt", "farad", "henry"],
            0,
            "Symbol C.",
          ),
        ],
      },
      {
        id: "magneticke-pole",
        nazev: "Magnetické pole vodiče",
        odstavce: [
          "Přímý vodič s proudem vytváří magnetické pole v okolí; pravidlo pravé ruky ti pomůže s orientací.",
          "Cívka se chová jako magnet, když jí proud „navine“ pole.",
        ],
        cviceni: [
          mc(
            "Jednotka magnetické indukce B je:",
            ["tesla", "weber", "ampér", "ohm"],
            0,
            "Symbol T.",
          ),
          tf("Země má magnetické pole podobné velkému magnetu.", true, "Zjednodušený model dipólu."),
        ],
      },
    ],
  },
  3: {
    nadpis: "Fyzika — 3. ročník SŠ",
    podnadpis: "Kmitání, vlny, základy termodynamiky",
    uvod:
      "Třetí ročník spojuje harmonický pohyb s energií a přidává makroskopickou tepelnou obrazovku.",
    lekce: [
      {
        id: "harmonicky-pohyb",
        nazev: "Harmonický oscilátor",
        odstavce: [
          "U pružiny s malými výkyvy platí přibližně Hookův zákon F = −kx. Energie přechází mezi kinetickou a pružnou.",
          "Perioda závisí na hmotnosti a tuhosti — těžší kyvadlo kýve pomaleji při stejné délce.",
        ],
        cviceni: [
          tf("U ideálního netlumeného oscilátoru je celková mechanická energie konstantní.", true,
            "Přeskakuje mezi Eₖ a Eₚ.",
          ),
          mc(
            "Jednotka frekvence je:",
            ["herz", "radián", "sekunda", "newton"],
            0,
            "1 Hz = 1 s⁻¹.",
          ),
        ],
      },
      {
        id: "tepelna-rovnova",
        nazev: "První zákon termodynamiky (slovy)",
        odstavce: [
          "Vnitřní energie soustavy se mění prací a teplem dodaným z okolí. Tepelný stroj převádí část tepla na práci, ale vždy existují ztráty.",
          "Entropie přijde podrobněji později — už teď si pamatuj, že tepelné děje mají směr.",
        ],
        cviceni: [
          mc(
            "Jednotka tepla v SI je stejná jako u energie:",
            ["joule", "stupeň", "kelvin", "watt"],
            0,
            "Teplo je přenos energie.",
          ),
          tf("Perpetuum mobile prvního druhu je v rozporu se zákonem zachování energie.", true,
            "Nelze trvale dodávat práci bez vstupu energie.",
          ),
        ],
      },
    ],
  },
  4: {
    nadpis: "Fyzika — 4. ročník SŠ",
    podnadpis: "Moderní fyzika v nástinu",
    uvod:
      "Čtvrtý ročník často ukáže limity klasické fyziky a otevře kvanta nebo relativity jako příběh.",
    lekce: [
      {
        id: "foton",
        nazev: "Kvantum energie světla",
        odstavce: [
          "Energii fotonu E = hf spojuješ s barvou světla — vyšší frekvence (modrá) nese větší energii na foton než nižší (červená) při stejném počtu fotonů za sekundu.",
          "Fotoefekt ukázal, že světlo se při interakci chová i jako částice.",
        ],
        cviceni: [
          tf("Planckova konstanta h má jednotku J·s.", true,
            "E = hf dává h = E/f.",
          ),
          mc(
            "Zvýšení frekvence světla při stejném počtu fotonů za sekundu znamená:",
            ["větší přenos energie", "menší energii", "vždy nulový jas", "snížení vlnové délky vždy o polovinu"],
            0,
            "Energii určuje f·h na foton.",
          ),
        ],
      },
      {
        id: "relativita-nastin",
        nazev: "Relativita v jedné větě plus důsledek",
        odstavce: [
          "Speciální teorie relativity říká, že rychlost světla ve vakuu je pro všechny inerciální pozorovatele stejná — z toho plyne, že čas a délka se měří jinak při velkých rychlostech.",
          "V každodennosti jsou efekty u běžných rychlostí zanedbatelné, ale GPS je musí počítat.",
        ],
        cviceni: [
          tf("Rychlost světla ve vakuu závisí na barvě světla.", false,
            "c je konstantní, frekvence a vlnová délka se vztahují přes c = fλ.",
          ),
          mc(
            "Rychlost světla ve vakuu je řádově:",
            ["3·10⁸ m/s", "340 m/s", "1 m/s", "10⁶ m/s"],
            0,
            "Základní konstanta optiky.",
          ),
        ],
      },
    ],
  },
};
