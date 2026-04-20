import type { PredmetVyuka } from "@/types/vyuka";
import type { JednotkaSpojPar } from "./jednotkySpojovani";
import { jednotkySpojovaciPary } from "./jednotkySpojovani";

/** Konfigurace spojovačky u konkrétní lekce (levý sloupec × pravý). */
export type SpojovaciTemaKonfig = {
  pary: JednotkaSpojPar[];
  levyNadpis?: string;
  pravyNadpis?: string;
  /** Pravý sloupec jako monospace (výchozí true). */
  pravyMonospace?: boolean;
  nadpisHry?: string;
  podnadpisHry?: string;
  hotovoDoplneni?: string;
  tipBehemHry?: string;
};

const fyzHustota: JednotkaSpojPar[] = [
  {
    id: "rho-def",
    pojem: "Hustota — hmotnost na objem",
    jednotkaZnak: "kg·m⁻³",
    vysvetleni: "ρ = m/V v SI dává kilogramy na metr krychlový.",
  },
  {
    id: "rho-gcm",
    pojem: "Hustota v častém laboratorním zápisu",
    jednotkaZnak: "g·cm⁻³",
    vysvetleni: "Gram na centimetr krychlový — převody přes základní jednotky.",
  },
  {
    id: "hmotnost",
    pojem: "Základní veličina hmotnosti",
    jednotkaZnak: "kg",
    vysvetleni: "Kilogram je základní jednotka hmotnosti v SI.",
  },
  {
    id: "objem",
    pojem: "Objem v soustavě SI",
    jednotkaZnak: "m³",
    vysvetleni: "Metr krychlový — prostor, který těleso „zabírá“.",
  },
  {
    id: "lit",
    pojem: "Objem o velikosti jednoho decimetru krychlového",
    jednotkaZnak: "l (lit)",
    vysvetleni: "1 l = 1 dm³ — praktická jednotka pro kapaliny.",
  },
  {
    id: "voda-hust",
    pojem: "Řádově hustota čisté vody u pokojové teploty",
    jednotkaZnak: "≈ 1000 kg/m³",
    vysvetleni: "Proto větší těleso ve vodě často plave, když je méně husté.",
  },
  {
    id: "vzduch",
    pojem: "Řádově hustota vzduchu",
    jednotkaZnak: "≈ 1,2 kg/m³",
    vysvetleni: "Tři řády méně než voda — proto balón s héliem stoupá.",
  },
  {
    id: "objem-dm",
    pojem: "Objem v dm³ (stejné jako litr)",
    jednotkaZnak: "dm³",
    vysvetleni: "Krychlový decimetr je přesně jeden litr.",
  },
];

const fyzTlak: JednotkaSpojPar[] = [
  {
    id: "tlak-def",
    pojem: "Tlak — síla na jednotku plochy",
    jednotkaZnak: "Pa",
    vysvetleni: "1 pascal = 1 newton na metr čtvereční.",
  },
  {
    id: "sila",
    pojem: "Síla v SI",
    jednotkaZnak: "N",
    vysvetleni: "Newton z hmotnosti a zrychlení: 1 N = 1 kg·m·s⁻².",
  },
  {
    id: "plocha",
    pojem: "Plocha v SI",
    jednotkaZnak: "m²",
    vysvetleni: "Metr čtvereční ve jmenovateli u tlaku.",
  },
  {
    id: "kpa",
    pojem: "Tisíc pascalů — častá jednotka v praxi",
    jednotkaZnak: "kPa",
    vysvetleni: "Kilopascal: tlak v pneumatikách, počasí apod.",
  },
  {
    id: "hydro",
    pojem: "Hydrostatický tlak v kapalině (model)",
    jednotkaZnak: "ρ g h",
    vysvetleni: "Sloupec kapaliny — po kontrole jednotek vyjde tlak v pascalech.",
  },
  {
    id: "atm",
    pojem: "Řádově tlak vzduchu u povrchu",
    jednotkaZnak: "≈ 100 kPa",
    vysvetleni: "Standardně kolem 101 kPa — řádově sto kilopascalů.",
  },
  {
    id: "bar",
    pojem: "Starší tlaková jednotka (mimo SI, ale běžná)",
    jednotkaZnak: "bar",
    vysvetleni: "1 bar ≈ 10⁵ Pa — blízko „jedné atmosféře“.",
  },
  {
    id: "hloubka",
    pojem: "Hloubka ve vzorci p = ρ g h",
    jednotkaZnak: "m",
    vysvetleni: "Výška sloupce kapaliny musí být ve stejných jednotkách jako g a ρ.",
  },
];

const fyzPraceVykon: JednotkaSpojPar[] = [
  {
    id: "prace",
    pojem: "Práce mechanického přenosu energie",
    jednotkaZnak: "J",
    vysvetleni: "Joule = newtonkrát metr ve směru síly.",
  },
  {
    id: "vykon",
    pojem: "Výkon — práce za čas",
    jednotkaZnak: "W",
    vysvetleni: "1 watt = 1 joule za sekundu.",
  },
  {
    id: "cas",
    pojem: "Čas v SI",
    jednotkaZnak: "s",
    vysvetleni: "Ve vztahu P = W/t nebo W = P·t.",
  },
  {
    id: "energie",
    pojem: "Energie (schopnost konat práci) v jednoduchém modelu",
    jednotkaZnak: "J",
    vysvetleni: "Stejná jednotka jako práce — energie se měří v joulech.",
  },
  {
    id: "kwh",
    pojem: "Energie spotřebiče za hodinu při výkonu 1 kW",
    jednotkaZnak: "kW·h",
    vysvetleni: "Kilowatthodina — praktická jednotka na účtech za elektřinu.",
  },
  {
    id: "vkon-vz",
    pojem: "Výkon z práce a času",
    jednotkaZnak: "P = W / t",
    vysvetleni: "Čím kratší čas při stejné práci, tím větší výkon.",
  },
  {
    id: "siladr",
    pojem: "Práce při konstantní síle ve směru dráhy",
    jednotkaZnak: "W = F·s",
    vysvetleni: "Součin síly a dráhy v jednotkách dá joule.",
  },
  {
    id: "dráha",
    pojem: "Dráha v mechanickém výpočtu práce",
    jednotkaZnak: "m",
    vysvetleni: "Metr ve směru síly při výpočtu W = F s cos α (α = 0).",
  },
];

const fyzObvody: JednotkaSpojPar[] = [
  {
    id: "u",
    pojem: "Elektrické napětí",
    jednotkaZnak: "V",
    vysvetleni: "Volt — „tlak“ pro pohyb náboje v modelu obvodu.",
  },
  {
    id: "i",
    pojem: "Elektrický proud",
    jednotkaZnak: "A",
    vysvetleni: "Ampér — coulomb za sekundu.",
  },
  {
    id: "r",
    pojem: "Elektrický odpor",
    jednotkaZnak: "Ω",
    vysvetleni: "Ohm — vztah U = R I v jednoduchém obvodu.",
  },
  {
    id: "p",
    pojem: "Elektrický výkon",
    jednotkaZnak: "W",
    vysvetleni: "U obvodu často P = U I.",
  },
  {
    id: "q",
    pojem: "Náboj",
    jednotkaZnak: "C",
    vysvetleni: "Kulomb — množství elektřiny.",
  },
  {
    id: "ser",
    pojem: "V sériovém obvodu je všude stejný",
    jednotkaZnak: "proud I",
    vysvetleni: "Jediná smyčka — jedna hodnota proudu.",
  },
  {
    id: "ohm",
    pojem: "Ohmův zákon (veličiny)",
    jednotkaZnak: "U, R, I",
    vysvetleni: "Propojuje napětí, odpor a proud.",
  },
  {
    id: "joul",
    pojem: "Teplo odporu za čas (Jouleovo teplo, zjednodušeně)",
    jednotkaZnak: "J",
    vysvetleni: "Energie vydaná v odporu má jednotku joule.",
  },
];

const fyzRychlost: JednotkaSpojPar[] = [
  {
    id: "v",
    pojem: "Rychlost (velikost) v SI",
    jednotkaZnak: "m·s⁻¹",
    vysvetleni: "Metr za sekundu.",
  },
  {
    id: "a",
    pojem: "Zrychlení",
    jednotkaZnak: "m·s⁻²",
    vysvetleni: "Změna rychlosti za sekundu.",
  },
  {
    id: "t",
    pojem: "Časová interval",
    jednotkaZnak: "s",
    vysvetleni: "V definici průměrného zrychlení Δv/Δt.",
  },
  {
    id: "s",
    pojem: "Dráha",
    jednotkaZnak: "m",
    vysvetleni: "V průměrné rychlosti v/t.",
  },
  {
    id: "prum",
    pojem: "Průměrná rychlost z dráhy a času",
    jednotkaZnak: "v = s/t",
    vysvetleni: "Podíl dráhy a doby.",
  },
  {
    id: "kmh",
    pojem: "Rychlost v km za hodinu (mimo SI, běžná)",
    jednotkaZnak: "km·h⁻¹",
    vysvetleni: "Převod přes metry a sekundy.",
  },
  {
    id: "delta",
    pojem: "Změna rychlosti",
    jednotkaZnak: "Δv",
    vysvetleni: "V čitateli zrychlení při konstantním zrychlení v modelu.",
  },
  {
    id: "graf",
    pojem: "Sklon grafu x(t) v čase",
    jednotkaZnak: "rychlost",
    vysvetleni: "Okamžitá rychlost souvisí se směrnicí polohy v čase.",
  },
];

const fyzVlny: JednotkaSpojPar[] = [
  {
    id: "f",
    pojem: "Frekvence kmitů",
    jednotkaZnak: "Hz",
    vysvetleni: "Herz = jeden kmit za sekundu.",
  },
  {
    id: "T",
    pojem: "Perioda kmitu",
    jednotkaZnak: "s",
    vysvetleni: "Čas jedné periody; f = 1/T.",
  },
  {
    id: "lam",
    pojem: "Vlnová délka",
    jednotkaZnak: "m",
    vysvetleni: "Vzdálenost mezi stejnými fázemi vlny.",
  },
  {
    id: "c",
    pojem: "Rychlost šíření vlny",
    jednotkaZnak: "m·s⁻¹",
    vysvetleni: "Pro v = f λ musí sedět jednotky.",
  },
  {
    id: "vfl",
    pojem: "Vztah rychlosti, frekvence a vlnové délky",
    jednotkaZnak: "v = f λ",
    vysvetleni: "Základní vzorec pro periodické vlnění.",
  },
  {
    id: "zvuk",
    pojem: "Mechanické vlnění ve vzduchu (zvuk)",
    jednotkaZnak: "longitudinální",
    vysvetleni: "Hustoty a tlak se kmitají ve směru šíření.",
  },
  {
    id: "am",
    pojem: "Maximální výchylka od rovnovážné polohy",
    jednotkaZnak: "amplituda",
    vysvetleni: "Určuje energii kmitu v jednoduchém modelu.",
  },
  {
    id: "med",
    pojem: "Vlna potřebuje k šíření",
    jednotkaZnak: "prostředí",
    vysvetleni: "Ve vakuu nešíříme běžný zvuk.",
  },
];

const fyzMechE: JednotkaSpojPar[] = [
  {
    id: "ek",
    pojem: "Kinetická energie bodu",
    jednotkaZnak: "Eₖ = mv²/2",
    vysvetleni: "Roste s druhou mocninou rychlosti.",
  },
  {
    id: "ep",
    pojem: "Gravitační potenciální energie (model u povrchu)",
    jednotkaZnak: "Eₚ ≈ m g h",
    vysvetleni: "Hmotnost krát tíhové zrychlení krát výška.",
  },
  {
    id: "j",
    pojem: "Energie a práce v SI",
    jednotkaZnak: "J",
    vysvetleni: "Joule.",
  },
  {
    id: "m",
    pojem: "Hmotnost tělesa",
    jednotkaZnak: "kg",
    vysvetleni: "V energiích Eₖ i Eₚ.",
  },
  {
    id: "g",
    pojem: "Tíhové zrychlení (přibližně u Země)",
    jednotkaZnak: "≈ 9,8 m·s⁻²",
    vysvetleni: "Ve školních úlohách často 10 m·s⁻².",
  },
  {
    id: "v2",
    pojem: "Závislost Eₖ na rychlosti",
    jednotkaZnak: "∝ v²",
    vysvetleni: "Dvakrát rychleji ⇒ čtyřikrát větší Eₖ při stejné hmotnosti.",
  },
  {
    id: "konz",
    pojem: "Mechanická energie v konzervativním poli bez tření",
    jednotkaZnak: "součet Eₖ + Eₚ",
    vysvetleni: "Při ideálních předpokladech může přecházet mezi tvary.",
  },
  {
    id: "vkon2",
    pojem: "Výkon jako změna energie za čas",
    jednotkaZnak: "W",
    vysvetleni: "Watt — energie za sekundu.",
  },
];

const fyzSoco: JednotkaSpojPar[] = [
  {
    id: "spoj",
    pojem: "Čočka, která sbírá rovnoběžné paprsky do ohniska",
    jednotkaZnak: "spojná",
    vysvetleni: "Konvexní čočka.",
  },
  {
    id: "roz",
    pojem: "Čočka, která paprsky rozbíhá",
    jednotkaZnak: "rozptylka",
    vysvetleni: "Konkávní čočka.",
  },
  {
    id: "ohn",
    pojem: "Bod, kam míří paprsky rovnoběžné s osou u spojné čočky",
    jednotkaZnak: "ohnisko",
    vysvetleni: "Vzdálenost ohniska od středu čočky souvisí s optickou mohutností.",
  },
  {
    id: "f",
    pojem: "Vzdálenost ohniska od středu tenké čočky (model)",
    jednotkaZnak: "f",
    vysvetleni: "Značka ohniskové vzdálenosti.",
  },
  {
    id: "odraz",
    pojem: "Úhel dopadu na rovinné zrcadlo a úhel odrazu",
    jednotkaZnak: "rovnají se",
    vysvetleni: "Měřeno vůči kolmici v rovině odrazu.",
  },
  {
    id: "krat",
    pojem: "Krátkozraké oko — obraz předmětu",
    jednotkaZnak: "před sítnicí",
    vysvetleni: "Korekce rozptylkou nebo čočkou dle návodu lékaře/optika.",
  },
  {
    id: "diop",
    pojem: "Optická mohutnost čočky",
    jednotkaZnak: "dpt (dioptrie)",
    vysvetleni: "Převrácená hodnota ohniskové vzdálenosti v metrech.",
  },
  {
    id: "pap",
    pojem: "Směr šíření světla v homogenním prostředí (model)",
    jednotkaZnak: "paprsek",
    vysvetleni: "Zjednodušený model paprsku.",
  },
];

const fyzPohyb: JednotkaSpojPar[] = [
  {
    id: "draha",
    pojem: "Dráha uražená za čas",
    jednotkaZnak: "m",
    vysvetleni: "Metr — základní jednotka délky v SI.",
  },
  {
    id: "cas",
    pojem: "Časový interval",
    jednotkaZnak: "s",
    vysvetleni: "Sekunda.",
  },
  {
    id: "rychl",
    pojem: "Průměrná rychlost z dráhy a času",
    jednotkaZnak: "m/s",
    vysvetleni: "Podíl metrů a sekund.",
  },
  {
    id: "klid",
    pojem: "Těleso bez změny polohy vůči zvolenému referenčnímu tělesu",
    jednotkaZnak: "v klidu",
    vysvetleni: "Klid je vždy relativní k referenci.",
  },
  {
    id: "pohyb",
    pojem: "Změna polohy v čase vůči referenci",
    jednotkaZnak: "pohyb",
    vysvetleni: "Základní popis mechaniky.",
  },
  {
    id: "ref",
    pojem: "Vůči čemu popisuješ pohyb",
    jednotkaZnak: "soustava",
    vysvetleni: "Referenční těleso nebo soustava souřadnic.",
  },
];

const fyzSvetlo: JednotkaSpojPar[] = [
  {
    id: "c",
    pojem: "Rychlost elektromagnetického vlnění ve vakuu (řádově)",
    jednotkaZnak: "3·10⁸ m/s",
    vysvetleni: "Přibližně tři sta milionů metrů za sekundu.",
  },
  {
    id: "prim",
    pojem: "Světlo v homogenním prostředí (geometrická optika)",
    jednotkaZnak: "přímka",
    vysvetleni: "Paprsek v modelu přímky.",
  },
  {
    id: "stin",
    pojem: "Místo, kde světlo nepadá kvůli neprůhledné překážce",
    jednotkaZnak: "stín",
    vysvetleni: "Hranice světlo–tma.",
  },
  {
    id: "zdroj",
    pojem: "Malý rozměr zdroje světla",
    jednotkaZnak: "ostřejší stín",
    vysvetleni: "Bodový zdroj dává ostřejší geometrický stín.",
  },
  {
    id: "barva",
    pojem: "Barva předmětu závisí na odražených",
    jednotkaZnak: "vlnových délkách",
    vysvetleni: "Předmět odráží jiné složky spektra.",
  },
  {
    id: "uh",
    pojem: "Úhel dopadu u odrazu od zrcadla vůči kolmici",
    jednotkaZnak: "°",
    vysvetleni: "Stejný jako úhel odrazu.",
  },
];

const fyzNewton: JednotkaSpojPar[] = [
  {
    id: "f-ma",
    pojem: "Druhý Newtonův zákon (veličiny)",
    jednotkaZnak: "F = m a",
    vysvetleni: "Síla jako příčina změny hybnosti v čase v jednoduchém tvaru.",
  },
  {
    id: "n",
    pojem: "Jednotka síly",
    jednotkaZnak: "N",
    vysvetleni: "kg·m·s⁻².",
  },
  {
    id: "setr",
    pojem: "První zákon — setrvání bez výsledné síly",
    jednotkaZnak: "inerciální soustava",
    vysvetleni: "Klid nebo přímočarý pohyb konstantní rychlostí.",
  },
  {
    id: "akce",
    pojem: "Třetí zákon — vzájemné síly dvou těles",
    jednotkaZnak: "stejně velké, opačné",
    vysvetleni: "Akce a reakce působí na různá tělesa.",
  },
  {
    id: "hyb",
    pojem: "Hybnost",
    jednotkaZnak: "kg·m/s",
    vysvetleni: "Součin hmotnosti a rychlosti.",
  },
  {
    id: "tih",
    pojem: "Tíha na povrchu Země (model Fg = m g)",
    jednotkaZnak: "N",
    vysvetleni: "Síla v newtonech.",
  },
  {
    id: "zrych",
    pojem: "Zrychlení",
    jednotkaZnak: "m·s⁻²",
    vysvetleni: "V F = m a musí jednotky sedět.",
  },
  {
    id: "hm",
    pojem: "Setrvačná hmotnost ve F = m a",
    jednotkaZnak: "kg",
    vysvetleni: "Odpor vůči změně rychlosti při dané síle.",
  },
];

const fyzHybnost: JednotkaSpojPar[] = [
  {
    id: "p",
    pojem: "Hybnost",
    jednotkaZnak: "p = m v",
    vysvetleni: "Vektor ve směru rychlosti (v jedné ose stačí znaménko).",
  },
  {
    id: "jed",
    pojem: "Jednotka hybnosti v SI",
    jednotkaZnak: "kg·m·s⁻¹",
    vysvetleni: "Stejné jako kg·m/s.",
  },
  {
    id: "zach",
    pojem: "Celková hybnost izolované soustavy",
    jednotkaZnak: "zachována",
    vysvetleni: "Pokud je součet vnějších impulsů nulový.",
  },
  {
    id: "sraz",
    pojem: "Pružná srážka na přímce — model zákona",
    jednotkaZnak: "hybnost",
    vysvetleni: "Před a po srážce stejná celková hybnost.",
  },
  {
    id: "imp",
    pojem: "Impuls síly",
    jednotkaZnak: "N·s",
    vysvetleni: "Rovná změně hybnosti v čase působení síly.",
  },
  {
    id: "kg",
    pojem: "Hmotnost",
    jednotkaZnak: "kg",
    vysvetleni: "V součinu p = m v.",
  },
  {
    id: "v",
    pojem: "Rychlost",
    jednotkaZnak: "m·s⁻¹",
    vysvetleni: "Velikost rychlosti ve skaláru v jedné ose.",
  },
  {
    id: "smer",
    pojem: "Směr hybnosti",
    jednotkaZnak: "směr rychlosti",
    vysvetleni: "Vektor p má stejný směr jako v (pro kladné m).",
  },
];

const fyzCoulomb: JednotkaSpojPar[] = [
  {
    id: "q",
    pojem: "Náboj",
    jednotkaZnak: "C",
    vysvetleni: "Kulomb.",
  },
  {
    id: "fe",
    pojem: "Coulombova síla mezi bodovými náboji (symbol vzorce)",
    jednotkaZnak: "F ∝ Q₁ Q₂ / r²",
    vysvetleni: "Klesá se čtvercem vzdálenosti.",
  },
  {
    id: "stej",
    pojem: "Stejnojmenné náboje",
    jednotkaZnak: "odpuzují se",
    vysvetleni: "Kladný–kladný i záporný–záporný.",
  },
  {
    id: "opa",
    pojem: "Různojmenné náboje",
    jednotkaZnak: "přitahují se",
    vysvetleni: "Základní pravidlo elektrostatiky.",
  },
  {
    id: "el",
    pojem: "Elementární náboj (řádově)",
    jednotkaZnak: "1,6·10⁻¹⁹ C",
    vysvetleni: "Velikost náboje elektronu nebo protonu.",
  },
  {
    id: "vak",
    pojem: "Permitivita vakua (symbol)",
    jednotkaZnak: "ε₀",
    vysvetleni: "Konstanta ve vztahu pro sílu v vakuu.",
  },
  {
    id: "pole",
    pojem: "Intenzita elektrického pole",
    jednotkaZnak: "V·m⁻¹",
    vysvetleni: "N·C⁻¹ je ekvivalentní zápis.",
  },
  {
    id: "pot",
    pojem: "Elektrický potenciál",
    jednotkaZnak: "V",
    vysvetleni: "Volt — energie na jednotku náboje v modelu.",
  },
];

const fyzMag: JednotkaSpojPar[] = [
  {
    id: "b",
    pojem: "Magnetická indukce",
    jednotkaZnak: "T",
    vysvetleni: "Tesla.",
  },
  {
    id: "wb",
    pojem: "Magnetický tok",
    jednotkaZnak: "Wb",
    vysvetleni: "Weber = T·m².",
  },
  {
    id: "i",
    pojem: "Proud přímého vodiče a pole v okolí",
    jednotkaZnak: "A",
    vysvetleni: "Pravítko pravé ruky pro směr.",
  },
  {
    id: "pravidlo",
    pojem: "Pravidlo pravé ruky u přímého vodiče",
    jednotkaZnak: "směr B",
    vysvetleni: "Palec = proud, prsty = obvodová magnetická indukce.",
  },
  {
    id: "civ",
    pojem: "Cívka s proudem",
    jednotkaZnak: "magnet dipól",
    vysvetleni: "Chová se jako magnet.",
  },
  {
    id: "sil",
    pojem: "Síla na vodič v magnetickém poli (příčný proud)",
    jednotkaZnak: "F = B I l",
    vysvetleni: "Závisí na kolmosti vektorů v jednoduchém modelu.",
  },
  {
    id: "jedt",
    pojem: "Jednotka B",
    jednotkaZnak: "kg·A⁻¹·s⁻²",
    vysvetleni: "Odvozená jednotka tesla.",
  },
  {
    id: "zem",
    pojem: "Magnetické pole Země (zjednodušeně)",
    jednotkaZnak: "dipól",
    vysvetleni: "Model podobný tyči magnetu.",
  },
];

const fyzHarm: JednotkaSpojPar[] = [
  {
    id: "omega",
    pojem: "Úhlová frekvence",
    jednotkaZnak: "rad·s⁻¹",
    vysvetleni: "ω = 2πf v jednoduchém modelu.",
  },
  {
    id: "f",
    pojem: "Frekvence",
    jednotkaZnak: "Hz",
    vysvetleni: "Počet kmitů za sekundu.",
  },
  {
    id: "t",
    pojem: "Perioda",
    jednotkaZnak: "s",
    vysvetleni: "T = 1/f.",
  },
  {
    id: "x",
    pojem: "Výchylka harmonického oscilátoru",
    jednotkaZnak: "x(t)",
    vysvetleni: "Funkce času v modelu x = A sin(ωt+φ).",
  },
  {
    id: "a-har",
    pojem: "Amplituda kmitu",
    jednotkaZnak: "A",
    vysvetleni: "Maximální výchylka.",
  },
  {
    id: "faz",
    pojem: "Počáteční fáze v argumentu sinu",
    jednotkaZnak: "φ",
    vysvetleni: "Posun v čase fáze kmitu.",
  },
  {
    id: "pru",
    pojem: "Pružina a Hookův zákon (síla)",
    jednotkaZnak: "F = −k x",
    vysvetleni: "Vratná síla úměrná výchylce.",
  },
  {
    id: "ekin",
    pojem: "Energie kmitu (max. rychlost v jednoduchém modelu)",
    jednotkaZnak: "Eₖ",
    vysvetleni: "Přeměňuje se s potenciální energií pružiny.",
  },
];

const fyzTep: JednotkaSpojPar[] = [
  {
    id: "teplo",
    pojem: "Teplo předané mezi soustavami",
    jednotkaZnak: "J",
    vysvetleni: "Stejná jednotka jako práce.",
  },
  {
    id: "q",
    pojem: "Teplo při konstantním tepelném toku Q = m c ΔT (model)",
    jednotkaZnak: "J",
    vysvetleni: "Specifická tepelná kapacita krát hmotnost krát změna teploty.",
  },
  {
    id: "temp",
    pojem: "Teplotní rozdíl",
    jednotkaZnak: "K nebo °C",
    vysvetleni: "Rozdíl stupňů má stejnou velikost v kelvinech i stupních Celsia.",
  },
  {
    id: "mol",
    pojem: "Látkové množství",
    jednotkaZnak: "mol",
    vysvetleni: "Spojuje makro s mikrosvětem.",
  },
  {
    id: "r",
    pojem: "Molární plynová konstanta (symbol)",
    jednotkaZnak: "R",
    vysvetleni: "Objevuje se ve stavové rovnici ideálního plynu.",
  },
  {
    id: "p",
    pojem: "Tlak plynu",
    jednotkaZnak: "Pa",
    vysvetleni: "V p V = n R T po kontrole jednotek.",
  },
  {
    id: "v",
    pojem: "Objem plynu",
    jednotkaZnak: "m³",
    vysvetleni: "Nebo dm³ při převodech.",
  },
  {
    id: "ent",
    pojem: "Entropie (základní symbol)",
    jednotkaZnak: "S",
    vysvetleni: "Stavová veličina v termodynamice.",
  },
];

const fyzFoton: JednotkaSpojPar[] = [
  {
    id: "e-hf",
    pojem: "Energie fotonu",
    jednotkaZnak: "E = h f",
    vysvetleni: "Planckova konstanta krát frekvence.",
  },
  {
    id: "h",
    pojem: "Planckova konstanta (jednotka)",
    jednotkaZnak: "J·s",
    vysvetleni: "Joulekrátsekunda.",
  },
  {
    id: "c",
    pojem: "Rychlost světla ve vakuu",
    jednotkaZnak: "c",
    vysvetleni: "Konstanta v relaci mezi λ a f.",
  },
  {
    id: "ev",
    pojem: "Energie na atomární měřítko (častá jednotka)",
    jednotkaZnak: "eV",
    vysvetleni: "Elektronvolt.",
  },
  {
    id: "lambda",
    pojem: "Vlnová délka fotonu",
    jednotkaZnak: "λ",
    vysvetleni: "Souvisí s hybností a energií v korpuskulárno-vlnní dualitě.",
  },
  {
    id: "f",
    pojem: "Frekvence elektromagnetického vlnění",
    jednotkaZnak: "Hz",
    vysvetleni: "V E = h f.",
  },
  {
    id: "dual",
    pojem: "Vlna i částice u světla",
    jednotkaZnak: "dualita",
    vysvetleni: "Komplementární modely.",
  },
  {
    id: "foto",
    pojem: "Kvantum elektromagnetického pole",
    jednotkaZnak: "foton",
    vysvetleni: "Energetický „balíček“ s frekvencí f.",
  },
];

const fyzRel: JednotkaSpojPar[] = [
  {
    id: "c",
    pojem: "Mezní rychlost hmotných těles ve speciální teorii relativity",
    jednotkaZnak: "c",
    vysvetleni: "Ve vakuu pro světlo.",
  },
  {
    id: "gamma",
    pojem: "Lorentzův faktor při rychlosti v blízkosti c",
    jednotkaZnak: "γ",
    vysvetleni: "Roste nad 1 při v → c.",
  },
  {
    id: "cas",
    pojem: "Dilatace času (stručně)",
    jednotkaZnak: "Δt′",
    vysvetleni: "Pohybující se hodiny jdou jinak než v klidu v modelu STR.",
  },
  {
    id: "delka",
    pojem: "Kontrakce délky ve směru pohybu",
    jednotkaZnak: "L = L₀/γ",
    vysvetleni: "Zkrácení vlastní délky při relativním pohybu.",
  },
  {
    id: "hyb",
    pojem: "Relativistická hybnost roste s rychlostí silněji než",
    jednotkaZnak: "m v",
    vysvetleni: "Newtonovský limit pro malé rychlosti.",
  },
  {
    id: "e-mc",
    pojem: "Ekvivalence hmotnosti a energie",
    jednotkaZnak: "E = m c²",
    vysvetleni: "Slavný vztah.",
  },
  {
    id: "inv",
    pojem: "Invariantní mezi soustavami u světla",
    jednotkaZnak: "c",
    vysvetleni: "Všechny inerciální pozorovatelé měří stejně.",
  },
  {
    id: "ssr",
    pojem: "Teorie omezená na inerciální soustavy bez zrychlení",
    jednotkaZnak: "STR",
    vysvetleni: "Speciální teorie relativity — zjednodušená zkratka.",
  },
];

const chemPrvky: JednotkaSpojPar[] = [
  { id: "h", pojem: "Vodík", jednotkaZnak: "H", vysvetleni: "Atomová jednička v tabulce." },
  { id: "he", pojem: "Helium", jednotkaZnak: "He", vysvetleni: " vzácný plyn." },
  { id: "li", pojem: "Lithium", jednotkaZnak: "Li", vysvetleni: "Alkali kov." },
  { id: "c", pojem: "Uhlík", jednotkaZnak: "C", vysvetleni: "Základ organických sloučenin." },
  { id: "n", pojem: "Dusík", jednotkaZnak: "N", vysvetleni: "V molekule N₂ ve vzduchu." },
  { id: "o", pojem: "Kyslík", jednotkaZnak: "O", vysvetleni: "V molekule O₂." },
  { id: "na", pojem: "Sodík", jednotkaZnak: "Na", vysvetleni: "Reaktivní kov." },
  { id: "cl", pojem: "Chlór", jednotkaZnak: "Cl", vysvetleni: "Halogen." },
  { id: "fe", pojem: "Železo", jednotkaZnak: "Fe", vysvetleni: "Latinské ferrum." },
  { id: "cu", pojem: "Měď", jednotkaZnak: "Cu", vysvetleni: "Latinské cuprum." },
];

const chemAtom: JednotkaSpojPar[] = [
  {
    id: "atom",
    pojem: "Nejmenší částice prvku s jeho vlastnostmi",
    jednotkaZnak: "atom",
    vysvetleni: "Jádro + elektronový obal.",
  },
  {
    id: "mol",
    pojem: "Nejmenší částice sloučeniny se stejným složením",
    jednotkaZnak: "molekula",
    vysvetleni: "Skupina atomů vázaných vazbou.",
  },
  {
    id: "ion",
    pojem: "Atom nebo skupina s celkovým nábojem",
    jednotkaZnak: "ion",
    vysvetleni: "Kation + nebo anion −.",
  },
  {
    id: "prot",
    pojem: "Kladně nabité jádro vodíku",
    jednotkaZnak: "proton",
    vysvetleni: "H⁺ v jednoduchém modelu.",
  },
  {
    id: "ele",
    pojem: "Částice s elementárním záporným nábojem",
    jednotkaZnak: "elektron",
    vysvetleni: "Symbol e⁻.",
  },
  {
    id: "stav",
    pojem: "Počet protonů v jádře",
    jednotkaZnak: "atomové číslo Z",
    vysvetleni: "Určuje prvek v tabulce.",
  },
  {
    id: "hm",
    pojem: "Součet protonů a neutronů v jádře",
    jednotkaZnak: "hmotnostní číslo A",
    vysvetleni: "Přibližná hmotnost jádra v u.",
  },
  {
    id: "vaz",
    pojem: "Síla držící atomy v molekule",
    jednotkaZnak: "chemická vazba",
    vysvetleni: "Kovalentní, iontová…",
  },
];

const chemLatka: JednotkaSpojPar[] = [
  {
    id: "mol",
    pojem: "Látkové množství",
    jednotkaZnak: "mol",
    vysvetleni: "Základní jednotka v chemii.",
  },
  {
    id: "na",
    pojem: "Částic v jednom molu (Avogadrova konstanta, řádově)",
    jednotkaZnak: "6,02·10²³ mol⁻¹",
    vysvetleni: "Počet atomů v 1 molu u ¹²C definice.",
  },
  {
    id: "m",
    pojem: "Molární hmotnost",
    jednotkaZnak: "g·mol⁻¹",
    vysvetleni: "Hmotnost jednoho molu látky.",
  },
  {
    id: "n",
    pojem: "Vzorec látkového množství z hmotnosti",
    jednotkaZnak: "n = m/M",
    vysvetleni: "Hmotnost dělená molární hmotností.",
  },
  {
    id: "mhm",
    pojem: "Hmotnost vzorku",
    jednotkaZnak: "g",
    vysvetleni: "Běžná jednotka v laboratoři.",
  },
  {
    id: "stej",
    pojem: "Počet atomů v molu daného prvku",
    jednotkaZnak: "stejný (NA)",
    vysvetleni: "Avogadrovo číslo pro všechny prvky v molu.",
  },
  {
    id: "c",
    pojem: "Molární koncentrace",
    jednotkaZnak: "mol·dm⁻³",
    vysvetleni: "Mol na decimetr krychlový.",
  },
  {
    id: "v",
    pojem: "Objem roztoku v n = c V",
    jednotkaZnak: "dm³",
    vysvetleni: "Litry = dm³.",
  },
];

const chemRoztok: JednotkaSpojPar[] = [
  {
    id: "c",
    pojem: "Molární koncentrace",
    jednotkaZnak: "mol·dm⁻³",
    vysvetleni: "Často značka c.",
  },
  {
    id: "n",
    pojem: "Látkové množství rozpuštěné látky",
    jednotkaZnak: "mol",
    vysvetleni: "n = c · V.",
  },
  {
    id: "v",
    pojem: "Objem roztoku",
    jednotkaZnak: "dm³",
    vysvetleni: "Decimetr krychlový.",
  },
  {
    id: "rozp",
    pojem: "Látka, která se rozpouští",
    jednotkaZnak: "rozpustná látka",
    vysvetleni: "Sůl, cukr…",
  },
  {
    id: "dis",
    pojem: "Látka, ve které se rozpouští (často voda)",
    jednotkaZnak: "rozpouštědlo",
    vysvetleni: "Např. H₂O.",
  },
  {
    id: "nas",
    pojem: "Roztok, který už nemůže přijmout více rozpuštěné látky při dané teplotě",
    jednotkaZnak: "nasycený",
    vysvetleni: "Rovnováha s pevnou fází.",
  },
  {
    id: "ph",
    pojem: "Logaritmická měřítková veličina kyselosti",
    jednotkaZnak: "pH",
    vysvetleni: "pH = −log[H⁺] v jednoduchém modelu.",
  },
  {
    id: "h",
    pojem: "Koncentrace H⁺ ovlivňuje",
    jednotkaZnak: "kyselost",
    vysvetleni: "Nižší pH = kyselejší.",
  },
];

const chemRovnice: JednotkaSpojPar[] = [
  {
    id: "reak",
    pojem: "Změna látek za vzniku nových",
    jednotkaZnak: "chemická reakce",
    vysvetleni: "Přeházení atomů mezi molekulami.",
  },
  {
    id: "exo",
    pojem: "Reakce uvolňující teplo do okolí",
    jednotkaZnak: "exotermní",
    vysvetleni: "ΔH < 0 v běžném zápisu.",
  },
  {
    id: "endo",
    pojem: "Reakce odebírající teplo z okolí",
    jednotkaZnak: "endotermní",
    vysvetleni: "Potřebuje dodanou energii.",
  },
  {
    id: "ox",
    pojem: "Ztráta elektronů (účetní model)",
    jednotkaZnak: "oxidace",
    vysvetleni: "Oxidační číslo roste.",
  },
  {
    id: "red",
    pojem: "Získání elektronů (účetní model)",
    jednotkaZnak: "redukce",
    vysvetleni: "Oxidační číslo klesá.",
  },
  {
    id: "kat",
    pojem: "Elektroda, kde probíhá redukce v galvanickém článku",
    jednotkaZnak: "katoda",
    vysvetleni: "Kationty přijímají elektrony.",
  },
  {
    id: "ano",
    pojem: "Elektroda, kde probíhá oxidace v galvanickém článku",
    jednotkaZnak: "anoda",
    vysvetleni: "Elektrony „odcházejí“ do obvodu.",
  },
  {
    id: "stej",
    pojem: "Počet atomů každého prvku na obou stranách rovnice",
    jednotkaZnak: "stejný",
    vysvetleni: "Zákon zachování hmoty v chemické rovnici.",
  },
];

const chemPh: JednotkaSpojPar[] = [
  {
    id: "ph-neut",
    pojem: "Čistá voda při 25 °C",
    jednotkaZnak: "pH ≈ 7",
    vysvetleni: "Neutrální roztok.",
  },
  {
    id: "ph-kys",
    pojem: "Roztok s vyšší koncentrací H⁺ než v čisté vodě",
    jednotkaZnak: "pH < 7",
    vysvetleni: "Kyselejší než 7.",
  },
  {
    id: "ph-zas",
    pojem: "Roztok s nižší koncentrací H⁺ než v čisté vodě",
    jednotkaZnak: "pH > 7",
    vysvetleni: "Zásaditější než 7.",
  },
  {
    id: "ph-def",
    pojem: "Definice pH (zjednodušeně)",
    jednotkaZnak: "−log [H⁺]",
    vysvetleni: "Desetinný logaritmus koncentrace.",
  },
  {
    id: "ph-skal",
    pojem: "Běžný rozsah stupnice pH ve vodných roztocích",
    jednotkaZnak: "0 až 14",
    vysvetleni: "Praktický interval.",
  },
  {
    id: "ph-ind",
    pojem: "Látka měnící barvu podle pH",
    jednotkaZnak: "indikátor",
    vysvetleni: "Např. lakmus, fenolftalein.",
  },
  {
    id: "ph-buf",
    pojem: "Roztok odolávající malé změně pH",
    jednotkaZnak: "pufr",
    vysvetleni: "Buffer.",
  },
  {
    id: "ph-sil",
    pojem: "Silná kyselina ve vodě (model)",
    jednotkaZnak: "téměř úplná disociace",
    vysvetleni: "Např. HCl v ředění.",
  },
];

const chemRedox: JednotkaSpojPar[] = [
  {
    id: "rx-ox",
    pojem: "Ztráta elektronů v účetním modelu",
    jednotkaZnak: "oxidace",
    vysvetleni: "Oxidační číslo roste.",
  },
  {
    id: "rx-red",
    pojem: "Získání elektronů v účetním modelu",
    jednotkaZnak: "redukce",
    vysvetleni: "Oxidační číslo klesá.",
  },
  {
    id: "rx-oxc",
    pojem: "Činidlo oxidující ostatní látky",
    jednotkaZnak: "oxidant",
    vysvetleni: "Sám se redukuje.",
  },
  {
    id: "rx-redc",
    pojem: "Činidlo redukující ostatní látky",
    jednotkaZnak: "reduktant",
    vysvetleni: "Sám se oxiduje.",
  },
  {
    id: "rx-pol",
    pojem: "Součet oxidačních čísel v neutrální molekule",
    jednotkaZnak: "0",
    vysvetleni: "Celkový náboj nuly.",
  },
  {
    id: "rx-ion",
    pojem: "Součet oxidačních čísel v iontu",
    jednotkaZnak: "náboj iontu",
    vysvetleni: "Musí odpovídat značce iontu.",
  },
  {
    id: "rx-bal",
    pojem: "Vyvážení přenosu elektronů v rovnici",
    jednotkaZnak: "bilance elektronů",
    vysvetleni: "Metoda půlreakcí.",
  },
  {
    id: "rx-gal",
    pojem: "Přeměna chemické energie na elektrickou",
    jednotkaZnak: "galvanický článek",
    vysvetleni: "Baterie, článek.",
  },
];

const matPoradi: JednotkaSpojPar[] = [
  {
    id: "plus",
    pojem: "Sečti dvě čísla",
    jednotkaZnak: "+",
    vysvetleni: "Operace sčítání.",
  },
  {
    id: "krat",
    pojem: "Vynásob dvě čísla",
    jednotkaZnak: "×",
    vysvetleni: "Násobení má přednost před sčítáním bez závorek.",
  },
  {
    id: "del",
    pojem: "Rozděl číslo číslem",
    jednotkaZnak: "÷",
    vysvetleni: "Dělení ve stejné skupině priority jako násobení.",
  },
  {
    id: "minus",
    pojem: "Odečti druhé od prvního",
    jednotkaZnak: "−",
    vysvetleni: "Odčítání ve skupině s +.",
  },
  {
    id: "zav",
    pojem: "Nejdřív spočítej obsah závorky",
    jednotkaZnak: "( )",
    vysvetleni: "Závorky mají nejvyšší prioritu.",
  },
  {
    id: "por",
    pojem: "Po závorkách počítej násobení a dělení — pak",
    jednotkaZnak: "+ a −",
    vysvetleni: "Pořadí operací.",
  },
  {
    id: "moc",
    pojem: "Opakované násobení stejného činitele",
    jednotkaZnak: "mocnina",
    vysvetleni: "Např. a³ = a·a·a.",
  },
  {
    id: "rov",
    pojem: "Hodnoty na obou stranách jsou stejné",
    jednotkaZnak: "=",
    vysvetleni: "Rovnost.",
  },
];

const matZlomky: JednotkaSpojPar[] = [
  { id: "pol", pojem: "Polovina celku", jednotkaZnak: "1/2", vysvetleni: "Jmenovatel 2." },
  { id: "ctv", pojem: "Čtvrt celku", jednotkaZnak: "1/4", vysvetleni: "Čtyři stejné díly." },
  { id: "tre", pojem: "Třetina celku", jednotkaZnak: "1/3", vysvetleni: "Tři stejné díly." },
  { id: "pet", pojem: "Pětina celku", jednotkaZnak: "1/5", vysvetleni: "Čím větší jmenovatel, tím menší díl při čitateli 1." },
  { id: "des", pojem: "Desetina celku", jednotkaZnak: "1/10", vysvetleni: "Desetinně 0,1." },
  { id: "tri", pojem: "Dvě třetiny celku", jednotkaZnak: "2/3", vysvetleni: "Větší než polovina." },
  { id: "cel", pojem: "Celý celek ve zlomku", jednotkaZnak: "3/3", vysvetleni: "Rovná se 1." },
  {
    id: "sou",
    pojem: "Součet zlomků se stejným jmenovatelem",
    jednotkaZnak: "sčítají se čitatele",
    vysvetleni: "Jmenovatel zůstane.",
  },
];

const matProcenta: JednotkaSpojPar[] = [
  {
    id: "znak",
    pojem: "Zápis „ze sta“",
    jednotkaZnak: "%",
    vysvetleni: "Procenta.",
  },
  {
    id: "sto",
    pojem: "Základ pro výpočet procent",
    jednotkaZnak: "100 %",
    vysvetleni: "Celek odpovídá sto procentům.",
  },
  {
    id: "cast",
    pojem: "Část celku v procentech",
    jednotkaZnak: "část / základ · 100 %",
    vysvetleni: "Obecný vzorec.",
  },
  {
    id: "pol",
    pojem: "50 % celku",
    jednotkaZnak: "polovina",
    vysvetleni: "Stejné jako 1/2.",
  },
  {
    id: "ctv",
    pojem: "25 % celku",
    jednotkaZnak: "čtvrtina",
    vysvetleni: "25 ze sta.",
  },
  {
    id: "zv",
    pojem: "Zvýšení o 10 %",
    jednotkaZnak: "· 1,1",
    vysvetleni: "Nová hodnota je 110 % původní.",
  },
  {
    id: "sn",
    pojem: "Snížení o 20 %",
    jednotkaZnak: "· 0,8",
    vysvetleni: "Zbývá 80 % původní hodnoty.",
  },
  {
    id: "ppm",
    pojem: "Velmi malá část celku (miliontina)",
    jednotkaZnak: "ppm",
    vysvetleni: "Parts per million.",
  },
];

const matLinearni: JednotkaSpojPar[] = [
  {
    id: "k",
    pojem: "Směrnice přímky y = kx + q",
    jednotkaZnak: "k",
    vysvetleni: "Říká, o kolik roste y při +1 k x.",
  },
  {
    id: "q",
    pojem: "Průsečík s osou y",
    jednotkaZnak: "q",
    vysvetleni: "Hodnota y pro x = 0.",
  },
  {
    id: "rost",
    pojem: "K > 0 znamená funkci",
    jednotkaZnak: "rostoucí",
    vysvetleni: "Větší x ⇒ větší y.",
  },
  {
    id: "kol",
    pojem: "K = 0 znamená graf",
    jednotkaZnak: "konstantní",
    vysvetleni: "Vodorovná přímka y = q.",
  },
  {
    id: "prim",
    pojem: "Graf lineární funkce",
    jednotkaZnak: "přímka",
    vysvetleni: "Nepřerušený sklon.",
  },
  {
    id: "x",
    pojem: "Nezávislá proměnná",
    jednotkaZnak: "x",
    vysvetleni: "Vstup do předpisu f(x).",
  },
  {
    id: "y",
    pojem: "Závislá proměnná",
    jednotkaZnak: "y",
    vysvetleni: "Výstup f(x).",
  },
  {
    id: "bod",
    pojem: "Souřadnice bodu na grafu",
    jednotkaZnak: "[x, f(x)]",
    vysvetleni: "Bod leží na grafu funkce.",
  },
];

const matGonio: JednotkaSpojPar[] = [
  {
    id: "sin",
    pojem: "Poměr odvěsny protilehlé k přeponě v pravoúhlém trojúhelníku",
    jednotkaZnak: "sin α",
    vysvetleni: "Definice pro ostrý úhel v pravoúhlém trojúhelníku.",
  },
  {
    id: "cos",
    pojem: "Poměr přilehlé odvěsny k přeponě",
    jednotkaZnak: "cos α",
    vysvetleni: "Doplňuje sin při výpočtech.",
  },
  {
    id: "tg",
    pojem: "Poměr protilehlé k přilehlé odvěsně",
    jednotkaZnak: "tg α",
    vysvetleni: "sin α / cos α pro cos α ≠ 0.",
  },
  {
    id: "90",
    pojem: "Součet úhlů v pravoúhlém trojúhelníku (ne pravý)",
    jednotkaZnak: "90°",
    vysvetleni: "Dva ostré dohromady dávají 90°.",
  },
  {
    id: "180",
    pojem: "Součet vnitřních úhlů v trojúhelníku",
    jednotkaZnak: "180°",
    vysvetleni: "Platí v euklidovské geometrii.",
  },
  {
    id: "pre",
    pojem: "Nejdelší strana u pravoúhlého trojúhelníku proti pravému úhlu",
    jednotkaZnak: "přepona",
    vysvetleni: "Strana c při pravém úhlu u C.",
  },
  {
    id: "pyt",
    pojem: "Vztah stran a přepony",
    jednotkaZnak: "a² + b² = c²",
    vysvetleni: "Pythagorova věta.",
  },
  {
    id: "rad",
    pojem: "Úhlová míra oblouku k poloměru",
    jednotkaZnak: "radián",
    vysvetleni: "1 rad je oblouk délky r na kružnici poloměru r.",
  },
];

const matCela: JednotkaSpojPar[] = [
  {
    id: "zap",
    pojem: "Číslo menší než nula",
    jednotkaZnak: "záporné",
    vysvetleni: "Na číselné ose vlevo od nuly.",
  },
  {
    id: "abs",
    pojem: "Vzdálenost od nuly bez znaménka",
    jednotkaZnak: "|a|",
    vysvetleni: "Absolutní hodnota.",
  },
  {
    id: "soucet",
    pojem: "Součet kladného a záporného s větší absolutní hodnotou záporného",
    jednotkaZnak: "záporný výsledek",
    vysvetleni: "Příklad: 3 + (−8) = −5.",
  },
  {
    id: "sou2",
    pojem: "Součet dvou záporných",
    jednotkaZnak: "záporný",
    vysvetleni: "Ještě víc doleva na ose.",
  },
  {
    id: "krat",
    pojem: "Součin dvou záporných",
    jednotkaZnak: "kladný",
    vysvetleni: "Mínus krát mínus dá plus.",
  },
  {
    id: "nula",
    pojem: "Součet opačných čísel",
    jednotkaZnak: "0",
    vysvetleni: "a + (−a) = 0.",
  },
  {
    id: "osa",
    pojem: "Bod bez znaménka odpovídá",
    jednotkaZnak: "0",
    vysvetleni: "Počátek na číselné ose.",
  },
  {
    id: "por",
    pojem: "Záporné číslo je menší než kladné",
    jednotkaZnak: "vždy (na ose vlevo)",
    vysvetleni: "−1 < 1.",
  },
];

const matPomer: JednotkaSpojPar[] = [
  {
    id: "pom",
    pojem: "Vztah dvou veličin stejného druhu",
    jednotkaZnak: "poměr",
    vysvetleni: "a : b nebo a/b.",
  },
  {
    id: "mer",
    pojem: "Délka na mapě k délce v terénu",
    jednotkaZnak: "měřítko",
    vysvetleni: "Např. 1 : 50 000.",
  },
  {
    id: "jed",
    pojem: "Poměr má smysl jen při",
    jednotkaZnak: "stejných jednotkách",
    vysvetleni: "Nesčítáš metry a sekundy.",
  },
  {
    id: "roz",
    pojem: "Rozšíření zlomku",
    jednotkaZnak: "stejná hodnota",
    vysvetleni: "Násobek čitatele i jmenovatele stejným číslem.",
  },
  {
    id: "zkr",
    pojem: "Zkrácení zlomku",
    jednotkaZnak: "stejná hodnota",
    vysvetleni: "Dělení čitatele i jmenovatele stejným číslem.",
  },
  {
    id: "proc",
    pojem: "Poměr části k celku se základem 100",
    jednotkaZnak: "procenta",
    vysvetleni: "Speciální zápis poměru.",
  },
  {
    id: "del",
    pojem: "Dělení dvou stejných jednotek dá",
    jednotkaZnak: "bezrozměrné číslo",
    vysvetleni: "Čisté číslo bez jednotky.",
  },
  {
    id: "map",
    pojem: "1 cm na mapě odpovídá 1 km v terénu u měřítka",
    jednotkaZnak: "1 : 100 000",
    vysvetleni: "1 cm je 10⁵ cm = 1 km.",
  },
];

export const SPOJOVACI_KONFIG: Record<
  PredmetVyuka,
  Partial<Record<string, SpojovaciTemaKonfig>>
> = {
  fyzika: {
    "mereni-si": {
      pary: jednotkySpojovaciPary,
      nadpisHry: "Spojovačka: veličina ↔ jednotka",
      podnadpisHry:
        "Vyber popis vlevo, pak správný symbol nebo jednotku vpravo — u správných párů se objeví čára.",
      hotovoDoplneni:
        "Jednotky si kontroluj přímo ve vzorcích — pak tě příklady pod tím budou méně matou.",
      tipBehemHry: "Po přečtení lekce si jednotku odvoď z definice veličiny.",
    },
    "pohyb-klid": {
      pary: fyzPohyb,
      levyNadpis: "Pojem",
      pravyNadpis: "Odpověď / jednotka",
      nadpisHry: "Spojovačka: pohyb a měření",
      pravyMonospace: false,
    },
    "svetlo-stin": {
      pary: fyzSvetlo,
      levyNadpis: "Jev / veličina",
      pravyNadpis: "Odpověď",
      nadpisHry: "Spojovačka: světlo a stín",
      pravyMonospace: false,
    },
    hustota: { pary: fyzHustota, nadpisHry: "Spojovačka: hustota a objemy" },
    tlak: { pary: fyzTlak, nadpisHry: "Spojovačka: tlak a souvislosti" },
    "prace-vykon": { pary: fyzPraceVykon, nadpisHry: "Spojovačka: práce a výkon" },
    "jednoduche-obvody": {
      pary: fyzObvody,
      nadpisHry: "Spojovačka: elektrické veličiny",
    },
    "rychlost-zrychleni": {
      pary: fyzRychlost,
      nadpisHry: "Spojovačka: rychlost a zrychlení",
    },
    vlny: { pary: fyzVlny, nadpisHry: "Spojovačka: vlny a kmitání" },
    "mechanicka-energie": {
      pary: fyzMechE,
      nadpisHry: "Spojovačka: mechanická energie",
    },
    "soco-cta": {
      pary: fyzSoco,
      levyNadpis: "Popis",
      pravyNadpis: "Pojem",
      nadpisHry: "Spojovačka: optika",
      pravyMonospace: false,
    },
    "newtonovy-zakony": { pary: fyzNewton, nadpisHry: "Spojovačka: Newtonovy zákony" },
    hybnost: { pary: fyzHybnost, nadpisHry: "Spojovačka: hybnost" },
    coulomb: { pary: fyzCoulomb, nadpisHry: "Spojovačka: elektrostatika" },
    "magneticke-pole": { pary: fyzMag, nadpisHry: "Spojovačka: magnetické pole" },
    "harmonicky-pohyb": { pary: fyzHarm, nadpisHry: "Spojovačka: harmonický pohyb" },
    "tepelna-rovnova": { pary: fyzTep, nadpisHry: "Spojovačka: termodynamika" },
    foton: { pary: fyzFoton, nadpisHry: "Spojovačka: fotony a kvanta" },
    "relativita-nastin": { pary: fyzRel, nadpisHry: "Spojovačka: relativita (úvod)" },
  },
  chemie: {
    periodicka: {
      pary: chemPrvky,
      levyNadpis: "Prvek",
      pravyNadpis: "Symbol",
      nadpisHry: "Spojovačka: prvek ↔ symbol",
      pravyMonospace: true,
    },
    "atom-molekula": {
      pary: chemAtom,
      levyNadpis: "Popis",
      pravyNadpis: "Pojem",
      nadpisHry: "Spojovačka: atom a molekula",
      pravyMonospace: false,
    },
    "latkove-mnozstvi": {
      pary: chemLatka,
      nadpisHry: "Spojovačka: látkové množství",
    },
    roztoky: {
      pary: chemRoztok,
      nadpisHry: "Spojovačka: roztoky a koncentrace",
    },
    "chemicka-rovnice": {
      pary: chemRovnice,
      levyNadpis: "Popis",
      pravyNadpis: "Pojem",
      nadpisHry: "Spojovačka: reakce a redox",
      pravyMonospace: false,
    },
    ph: {
      pary: chemPh,
      levyNadpis: "Popis",
      pravyNadpis: "Zápis / pojem",
      nadpisHry: "Spojovačka: pH a roztoky",
      pravyMonospace: false,
    },
    redox: {
      pary: chemRedox,
      levyNadpis: "Popis",
      pravyNadpis: "Pojem",
      nadpisHry: "Spojovačka: redoxní reakce",
      pravyMonospace: false,
    },
  },
  matematika: {
    "poradi-operaci": {
      pary: matPoradi,
      levyNadpis: "Význam",
      pravyNadpis: "Zápis",
      nadpisHry: "Spojovačka: pořadí operací",
      pravyMonospace: true,
    },
    "zlomky-zaklady": {
      pary: matZlomky,
      levyNadpis: "Slovně",
      pravyNadpis: "Zlomek",
      nadpisHry: "Spojovačka: zlomky jako část celku",
      pravyMonospace: true,
    },
    procenta: {
      pary: matProcenta,
      levyNadpis: "Popis",
      pravyNadpis: "Zápis / pojem",
      nadpisHry: "Spojovačka: procenta",
      pravyMonospace: false,
    },
    "linearni-funkce": {
      pary: matLinearni,
      levyNadpis: "Vlastnost grafu",
      pravyNadpis: "Odpověď",
      nadpisHry: "Spojovačka: lineární funkce",
      pravyMonospace: false,
    },
    goniometrie: {
      pary: matGonio,
      levyNadpis: "Popis",
      pravyNadpis: "Pojem / vztah",
      nadpisHry: "Spojovačka: goniometrie",
      pravyMonospace: true,
    },
    "cela-cisla": {
      pary: matCela,
      levyNadpis: "Pravidlo",
      pravyNadpis: "Výsledek / pojem",
      nadpisHry: "Spojovačka: celá a záporná čísla",
      pravyMonospace: false,
    },
    "pomer-meritko": {
      pary: matPomer,
      levyNadpis: "Popis",
      pravyNadpis: "Pojem",
      nadpisHry: "Spojovačka: poměr a měřítko",
      pravyMonospace: false,
    },
  },
};
