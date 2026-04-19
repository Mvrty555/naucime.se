import type { TeorieClanek } from "@/types/teorie";

/** Teoretické minimum — fyzika (ZŠ / začátek SŠ). Texty jsou originální, didakticky členěné. */
export const fyzikaTeorieClanky: TeorieClanek[] = [
  {
    id: "rychlost",
    nazev: "Rychlost: co vlastně měříme",
    perex:
      "Rychlost není „jak rychle cítím“, ale vztah dráhy a času. Když si ujasníš průměr a okamžitou hodnotu, přestaneš je náhodně zaměňovat.",
    uroven: "ZŠ 2. stupeň / začátek SŠ",
    motivace: [
      "Každý sport nebo doprava mluví o rychlosti — ale ve fyzice chceme zápis, který platí vždy stejně: stejná značka, stejné jednotky, stejná logika u auta i u planety.",
      "Než sáhneš po vzorcích, zkontroluj: mám dráhu ve stejných jednotkách jako výsledek, který chci? Čas v sekundách? Pak teprve dělíš nebo sčítáš kroky.",
    ],
    veliciny: [
      {
        nazev: "Průměrná rychlost (vektorová velikost v 1D)",
        znacka: "v",
        jednotkaSI: "metr za sekundu",
        jednotkaZnak: "m·s⁻¹ (často m/s)",
        definice:
          "Průměrná rychlost na úseku říká: celková dráha za celkový čas. Je to „účetní“ hodnota za celý interval — neříká, co se dělo uvnitř mezi startem a cílem.",
        vzorce: [
          { nazev: "Základní vztah", vztah: "v = Δs / Δt" },
          {
            nazev: "Když už znáš dráhu a čas",
            vztah: "v = s / t (pro konstantní rychlost po celou dobu)",
          },
        ],
        variantyVzorca: [
          { situace: "Dráha z rychlosti a času", vztah: "s = v · t" },
          { situace: "Čas z dráhy a rychlosti", vztah: "t = s / v" },
        ],
        procToTakJe:
          "Rychlost vzniká jako poměr: čím víc dráhy urazíš za stejný čas, tím větší číslo dostaneš. Je to stejné myšlení jako „kolik za hodinu“ u peněz — jen místo korun metry a místo hodin sekundy. Když čas v denominatoru roste, rychlost klesá: déle na stejné dráze znamená pomaleji.",
      },
      {
        nazev: "Okamžitá rychlost (myšlenkový model)",
        znacka: "v",
        jednotkaSI: "metr za sekundu",
        jednotkaZnak: "m·s⁻¹",
        definice:
          "Okamžitá rychlost je limita, kdyby ses díval na strašně krátký kousek dráhy a strašně krátký kousek času kolem jednoho okamžiku. V praxi ji odhaduješ z průměru na hodně krátkém úseku.",
        vzorce: [
          {
            nazev: "Intuitivní přepis (neformálně)",
            vztah: "v ≈ malé Δs / malé Δt",
          },
        ],
        variantyVzorca: [
          {
            situace: "Rovnoměrný pohyb po přímce",
            vztah: "okamžitá = průměrná (stejné číslo pořád)",
          },
        ],
        procToTakJe:
          "Svět se nemění po velkých skocích, ale pořád. Proto potřebujeme „okamžik“: auto může zrychlovat, brzdit, zastavit — průměr z celé trasy ti neřekne, co se dělo před zatáčkou. Okamžitá rychlost propojuje graf dráhy s časem: sklon grafu s(t) je rychlost.",
      },
    ],
    aktivita:
      "Změř si krokem vzdálenost mezi dvěma pevnými body (odhadni metrák), změř čas chůze mobilem a spočítej průměrnou rychlost. Pak zkus stejnou dráhu „pomalu vs. rychle“ a porovnej čísla: co se změnilo — dráha, čas, nebo obojí?",
    omyly: [
      "Zaměnit km/h a m/s bez přepočtu — vždy si napiš, v jakých jednotkách máš zadání.",
      "Myslet si, že větší průměrná rychlost automaticky znamená větší okamžitou rychlost všude po cestě (můžeš jet chvíli suprově rychle a chvíli stát v koloně).",
    ],
    navaznost:
      "Další krok: zrychlení popisuje, jak se rychlost mění v čase — viz kapitola Zrychlení.",
  },
  {
    id: "zrychleni",
    nazev: "Zrychlení: změna rychlosti rozumně krok za krokem",
    perex:
      "Zrychlení není „jak moc to bolí“, ale jak rychle se mění rychlost. Když to chápeš jako Δv/Δt, přestaneš zbytečně básnit kolem slov „náhlé“ nebo „prudké“ bez čísel.",
    uroven: "ZŠ 2. stupeň / začátek SŠ",
    motivace: [
      "Zrychlení je důvod, proč tě při startu auta tlačí sedačka: rychlost roste, a to má svůj poměr vůči času.",
      "Jednotka m·s⁻² vypadá divně — ale je to „(m·s⁻¹) za sekundu“, tedy změna rychlosti za sekundu. Když ji tak čteš, přestane být magická.",
    ],
    veliciny: [
      {
        nazev: "Průměrné zrychlení",
        znacka: "a",
        jednotkaSI: "metr za sekundu na druhou",
        jednotkaZnak: "m·s⁻²",
        definice:
          "Průměrné zrychlení na intervalu říká, o kolik se změnila rychlost za daný čas. Záporné zrychlení znamená brždění — rychlost klesá.",
        vzorce: [{ nazev: "Základní vztah", vztah: "a = Δv / Δt" }],
        variantyVzorca: [
          { situace: "Znám změnu rychlosti a čas", vztah: "Δv = a · Δt" },
        ],
        procToTakJe:
          "Zrychlení měří „tempo změny rychlosti“. Stejně jako rychlost byla tempo změny polohy. Když je a = 0, rychlost je konstantní (rovnovážný pohyb po přímce). Když je a konstantní a nenulové, rychlost roste nebo klesá lineárně v čase v jednoduchém modelu.",
      },
    ],
    aktivita:
      "Zapiš si dvě rychlosti (začátek a konec) při rozjezdu na kole nebo v MHD (odhadni v m/s). Spočítej Δv a odhadni Δt. Vyděl. Porovnej s tím, jestli jsi cítil „ostřejší“ rozjezd — číslo sedí s pocitem?",
    omyly: [
      "Zaměnit zrychlení s rychlostí: velká rychlost neznamená velké zrychlení (letadlo v letu může mít obrovskou rychlost a zrychlení kolem nuly vůči kabině).",
      "Zapomenout vektorový charakter ve 2D/3D — na přímce stačí znaménko, v rovině už musíš přidat směr (to přijde později systematicky).",
    ],
    navaznost:
      "Síla je ten „proč“ zrychlení u tělesa s hmotností — viz Newtonův zákon níže.",
  },
  {
    id: "sila-a-newton",
    nazev: "Síla a Newtonův pohybový zákon (startovací verze)",
    perex:
      "Síla není jen „námaha“, ale měřitelná veličina: co dokáže změnit pohybový stav. U hladkého modelu hmotného bodu začínáme vztahem F = m · a.",
    uroven: "ZŠ 2. stupeň / začátek SŠ",
    motivace: [
      "Když tlačíš stolem, stůl tlačí na tebe — soustava sil je symetrická. U učebnicových úloh často začínáme jednou výslednicí ve směru pohybu, ale v hlavě měj: síly mají zdroj (kdo tlačí) a příjemce (kdo se mění).",
      "Jednotka newton je odvozená: 1 N = 1 kg · m · s⁻². Když si ji přečteš jako „kilogram krát zrychlení“, přestane být abstraktní písmeno.",
    ],
    veliciny: [
      {
        nazev: "Síla",
        znacka: "F",
        jednotkaSI: "newton",
        jednotkaZnak: "N (= kg·m·s⁻²)",
        definice:
          "Síla popisuje interakci: gravitace, pružina, tření, tah lana… V jednoduchém modelu výslednice síly ve směru pohybu souvisí se zrychlením a hmotností.",
        vzorce: [
          {
            nazev: "Newtonův zákon (nejjednodušší tvar)",
            vztah: "F = m · a",
          },
        ],
        variantyVzorca: [
          { situace: "Hledáš zrychlení", vztah: "a = F / m" },
          { situace: "Vysvětlení jednotky", vztah: "1 N = 1 kg · 1 m·s⁻²" },
        ],
        procToTakJe:
          "Hmotnost m je „setrvačnost“: větší tělo se hůře rozhýbe stejnou silou. Proto stejná síla dá menšímu tělesu větší zrychlení. F = m·a není kouzlo — je to definice měřitelné souvislosti mezi příčinou (síla) a následkem (změna pohybu přes zrychlení) v modelu, kde ostatní síly zanedbáš nebo už máš ve výslednici.",
      },
    ],
    aktivita:
      "Zvaž dvě knihy stejného formátu, ale jednu těžší. Polož je na kluzký papír a stejně tlač: která dřív „naskočí“? Zapiš hypotézu před měřením — pak čísla z váhy a odhad síly (kdo má kuchyňskou váhu, vyhraje).",
    omyly: [
      "Myslet si, že „větší rychlost“ automaticky znamená „větší síla“ — záleží, jestli zrychluješ, brzdíš, nebo jedeš setrvačně.",
      "Zapomenout, že F v úloze často znamená výslednici složených sil, ne jednu ruku z diagramu.",
    ],
    navaznost:
      "Práce a výkon říkají, kolik energie se přenese za pohyb síly — viz kapitola Práce a výkon.",
  },
  {
    id: "prace-a-vykon",
    nazev: "Práce, energie a výkon: co se „odehraje“ za čas",
    perex:
      "Práce spojuje sílu a dráhu ve směru síly. Výkon říká, jak rychle práce přibývá. Když to čteš jako „kolik za sekundu“, je to stejný návyk jako u rychlosti.",
    uroven: "ZŠ 2. stupeň / začátek SŠ",
    motivace: [
      "Stejná síla může udělat velkou práci, když působí dlouhou dráhou — nebo malou, když se skoro nehne. Proto potřebujeme obě veličiny: sílu i dráhu ve správném směru.",
      "Výkon uvidíš na spotřebičích: watty říkají, jak rychle přibývá energie (nebo se přenáší mechanicky).",
    ],
    veliciny: [
      {
        nazev: "Práce (základní special case)",
        znacka: "W",
        jednotkaSI: "joule",
        jednotkaZnak: "J (= N·m)",
        definice:
          "Pro konstantní sílu ve směru pohybu je práce součin velikosti síly a dráhy. Obecněji vstupuje úhel mezi silou a dráhou — tady začínáme nejjednodušším případem.",
        vzorce: [
          {
            nazev: "Síla ve směru dráhy",
            vztah: "W = F · s",
          },
        ],
        variantyVzorca: [
          {
            situace: "Síla pod úhlem α k dráze (připomeň si cosinus později systematicky)",
            vztah: "W = F · s · cos α",
          },
        ],
        procToTakJe:
          "Práce říká, kolik „síly po dráze“ jsme „nasčítali“. Joule jako newtonkrát metr je přímo definice: když konstantní 1 N táhne 1 m ve svém směru, vznikne 1 J práce. Proto je jednotka odvozená a dává smysl.",
      },
      {
        nazev: "Výkon",
        znacka: "P",
        jednotkaSI: "watt",
        jednotkaZnak: "W (= J/s)",
        definice:
          "Výkon je práce za čas (nebo obecněji energie za čas v daném mechanismu).",
        vzorce: [{ nazev: "Průměrný výkon", vztah: "P = W / Δt" }],
        variantyVzorca: [
          { situace: "Mechanický výkon při konstantní síle ve směru rychlosti", vztah: "P = F · v" },
        ],
        procToTakJe:
          "Když stejnou práci uděláš dvakrát rychleji, výkon je dvojnásobný: stejná energie, polovina času. Proto výkon citlivě souvisí s tím, jak „intenzivně“ probíhá přenos energie.",
      },
    ],
    aktivita:
      "Vyjdi schody: spočítej výšku patra (odhad), svou hmotnost, použij g ≈ 10 N/kg a odhadni práci proti tíze. Změř čas výstupu a výkon. Zkus stejné patro pomaleji — co se stane s výkonem, i když „dřina“ je podobná?",
    omyly: [
      "Držet těžký kufřík v klidu a myslet si, že děláš velkou mechanickou práci ve smyslu W = F·s — dráha v směru síly je nulová.",
      "Zaměnit watt (výkon) za watthodinu (energie) — u učebnic často záměna při spotřebičích.",
    ],
    navaznost:
      "U kapalin a plynů přidáme tlak jako „sílu na plochu“ — viz kapitola Tlak.",
  },
  {
    id: "tlak",
    nazev: "Tlak: síla rozložená na plochu (a hydrostatický náběh)",
    perex:
      "Tlak je „jak moc tlačíme na jednotku plochy“. V kapalině přibývá s hloubkou — proto cítíš tlak v uších při potápění a proč má potrubí jiné tlaky nahoře a dole.",
    uroven: "ZŠ 2. stupeň / začátek SŠ",
    motivace: [
      "Velká síla na malé ploše dělá obrovský tlak — proto špička jehly pronikne snáz než tupá strana stejné síly.",
      "V kapalině máš nad sebou „sloupec“ hmoty — čím hlouběji, tím větší tíha toho sloupce na jednotku plochy.",
    ],
    veliciny: [
      {
        nazev: "Tlak (obecně)",
        znacka: "p",
        jednotkaSI: "pascal",
        jednotkaZnak: "Pa (= N/m²)",
        definice:
          "Tlak je velikost síly kolmé na plochu, dělená tou plochou. Pascal je malá jednotka v běžném životě — atmosférický tlak je řádově 10⁵ Pa.",
        vzorce: [{ nazev: "Definice tlaku", vztah: "p = F / S" }],
        variantyVzorca: [
          { situace: "Síla z tlaku a plochy", vztah: "F = p · S" },
        ],
        procToTakJe:
          "Když rozložíš stejnou sílu na větší plochu, tlak klesá — proto sněžnice nebo široké koberce. Stejná logika platí u kapalin: plocha pod sloupcem kapaliny nese tíhu nad ní.",
      },
      {
        nazev: "Hydrostatický tlak (model kapaliny v klidu)",
        znacka: "p",
        jednotkaSI: "pascal",
        jednotkaZnak: "Pa",
        definice:
          "V kapalině s hustotou ρ v hloubce h pod hladinou (v jednoduchém modelu) roste tlak lineárně s h, protože přibývá hmotnost sloupce nad tebou.",
        vzorce: [
          {
            nazev: "Často používaný vztah (g bereme jako konstantní v úlohách)",
            vztah: "p = ρ · g · h",
          },
        ],
        variantyVzorca: [
          {
            situace: "Stejná hloubka, větší hustota → větší tlak",
            vztah: "p závisí lineárně na ρ",
          },
        ],
        procToTakJe:
          "Hmotnost sloupce kapaliny je m = ρ·V, objem sloupce je S·h, tíha je úměrná m. Když dělíš tíhou plochu S, vyjde ρgh. Proto jednotky sedí: kg·m⁻³ krát m·s⁻² krát m dá Pa.",
      },
    ],
    aktivita:
      "Udělej díru do krabice od mléka, zahraj si na „fontánu“ s vodou a měř výšku hladiny nad dírou (odhad). Proč voda vystřikuje výš, když je krabice plnější? Nakresli si síly na malou plochu u otvoru.",
    omyly: [
      "Myslet si, že tlak v kapalině „směřuje jen dolů“ — na stěnách nádoby působí tlak kolmo ke stěně všude kolem.",
      "Zaměnit hustotu a tlak: hustota je vlastnost látky, tlak je stav v místě (můžeš mít vodu stejné ρ a různé tlaky v nádrži pod čerpadlem).",
    ],
    navaznost:
      "U plynu je model složitější (teplota, objem), ale idea „síla na plochu“ zůstává.",
  },
  {
    id: "elektrina-ohm",
    nazev: "Proud, napětí, odpor: Ohmův zákon jako rozumný návyk",
    perex:
      "Ohmův zákon není magická formule, ale měřitelná souvislost v mnoha jednoduchých obvodech: napětí, proud a odpor se drží v jedné rovnici, pokud je materiál „ohmský“.",
    uroven: "ZŠ 2. stupeň / začátek SŠ",
    motivace: [
      "Napětí je „tlak“ elektrických nosičů v intuitivní analogii, proud je tok nosičů. Odpor říká, jak moc materiál brzdí tok.",
      "Vždy si u obvodu nakresli směr proudu a kde je zdroj — polovina chyb vzniká tím, že se člověk v grafu ztratí.",
    ],
    veliciny: [
      {
        nazev: "Elektrické napětí",
        znacka: "U",
        jednotkaSI: "volt",
        jednotkaZnak: "V",
        definice:
          "Napětí mezi dvěma body souvisí s prací na jednotkovém náboji v jednoduchém výkladu (podrobněji na SŠ). V úlohách ho čteš jako rozdíl „elektrických úrovní“ mezi body.",
        vzorce: [{ nazev: "Ohmův zákon (základ)", vztah: "U = R · I" }],
        variantyVzorca: [
          { situace: "Proud", vztah: "I = U / R" },
          { situace: "Odpor", vztah: "R = U / I" },
        ],
        procToTakJe:
          "Když odpor roste, při stejném napětí proud klesá — materiál víc „brzdí“. Když napětí roste při stejném odporu, proud roste lineárně v jednoduchém modelu. Proto je vztah multiplikativní, ne sčítací.",
      },
      {
        nazev: "Elektrický proud",
        znacka: "I",
        jednotkaSI: "ampér",
        jednotkaZnak: "A",
        definice:
          "Proud je množství náboje za čas skrz průřez vodiče. V praxi měříš ampérmetrem v sérii.",
        vzorce: [{ nazev: "Z náboje a času", vztah: "I = ΔQ / Δt" }],
        procToTakJe:
          "Proud je „jak rychle tečou nosiče“. Proto sériově musí být všude stejný proud (stejný tok jednou trubkou) v jednoduchém modelu sériového obvodu.",
      },
      {
        nazev: "Elektrický odpor",
        znacka: "R",
        jednotkaSI: "ohm",
        jednotkaZnak: "Ω",
        definice:
          "Odpor vyjadřuje, jak moc prvek brzdí proud. V rezistoru často předpokládáme Ohmův zákon jako rozumný model.",
        vzorce: [{ nazev: "Z Ohmova zákona", vztah: "R = U / I" }],
        procToTakJe:
          "Odpor závisí na materiálu, délce, průřezu a teplotě — v úlohách často bereme R jako dané číslo. Důležité je chápat, že R není „špatná věc“: rezistory řídí proud a dělají užitečnou práci (topení, LED s omezením proudu přes další prvky).",
      },
    ],
    aktivita:
      "Vezmi baterii, rezistor a multimetr (pokud máš). Změř U a I a ověř součin R·I. Zkus druhý rezistor: co se stane s proudem při stejné baterii?",
    omyly: [
      "Zapojit ampérmetr paralelně „jen na rychlo“ — riskuješ zkrat. Pamatuj: ampérmetr série, voltmetr paralelně ke zdroji/větvi.",
      "Počítat s jednotkami bez převodu (mA vs A) — piš si jednotky přímo do rovnice.",
    ],
    navaznost:
      "Výkon v obvodu: P = U·I (u rezistoru často i I²R nebo U²/R — odvodíš z Ohma).",
  },
];

export function getFyzikaTeorieClanek(id: string) {
  return fyzikaTeorieClanky.find((c) => c.id === id) ?? null;
}

export function getFyzikaTeorieIds() {
  return fyzikaTeorieClanky.map((c) => c.id);
}
