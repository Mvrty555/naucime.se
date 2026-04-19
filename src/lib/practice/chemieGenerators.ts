import { buildQuestion, randInt } from "./random";
import type { QuestionGenerator } from "./types";

function genMolH2O(): ReturnType<typeof buildQuestion> {
  return buildQuestion(
    "Molární hmotnost vody H₂O je zhruba:",
    "18 g/mol",
    ["17 g/mol", "44 g/mol", "32 g/mol"],
    "2·1 + 16 = 18.",
  );
}

function genMolCO2(): ReturnType<typeof buildQuestion> {
  return buildQuestion(
    "Molární hmotnost CO₂ je zhruba:",
    "44 g/mol",
    ["28 g/mol", "12 g/mol", "32 g/mol"],
    "12 + 2·16 = 44.",
  );
}

function genLatkoveMnozstvi(): ReturnType<typeof buildQuestion> {
  const m = randInt(9, 54);
  const M = 18;
  const n = m / M;
  const ok = Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100);
  return buildQuestion(
    `Látkové množství ${m} g vody (M=18 g/mol) je:`,
    `${ok} mol`,
    [`${m} mol`, `${m + M} mol`, `1 mol`],
    "n = m/M.",
  );
}

function genPh(): ReturnType<typeof buildQuestion> {
  return buildQuestion(
    "Čistá voda při 25 °C má pH zhruba:",
    "7",
    ["0", "14", "1"],
    "Neutrální roztok.",
  );
}

function genOxidace(): ReturnType<typeof buildQuestion> {
  return buildQuestion(
    "Oxidační číslo kyslíku v peroxidu vodíku H₂O₂ je:",
    "−1",
    ["−2", "0", "+1"],
    "V peroxidech může být kyslík −1.",
  );
}

function genReakceTyp(): ReturnType<typeof buildQuestion> {
  return buildQuestion(
    "Hoření dřeva v kyslíku je převážně:",
    "exotermní reakce",
    ["fyzikální změna", "endotermní reakce", "fázový přechod"],
    "Uvolňuje se teplo a vznikají nové látky.",
  );
}

function genPocetAtomu(): ReturnType<typeof buildQuestion> {
  return buildQuestion(
    "Kolik atomů obsahuje jedna molekula ethanolu C₂H₅OH?",
    "9",
    ["6", "8", "7"],
    "2 C + 6 H + 1 O = 9 atomů.",
  );
}

function genRoztok(): ReturnType<typeof buildQuestion> {
  const c = randInt(1, 5);
  const v = 2;
  const n = c * v;
  return buildQuestion(
    `Kolik molu soli je v ${v} dm³ roztoku o koncentraci ${c} mol/dm³?`,
    `${n} mol`,
    [`${c + v} mol`, `${c / v} mol`, `1 mol`],
    "n = c·V.",
  );
}

function genKyselina(): ReturnType<typeof buildQuestion> {
  return buildQuestion(
    "Který ion vzniká disociací kyseliny v roztoku (zjednodušeně)?",
    "H⁺ (hydron)",
    ["OH⁻", "Na⁺", "Cl₂"],
    "Arrhenius/Brønsted: kyselina dává H⁺.",
  );
}

function genRedox(): ReturnType<typeof buildQuestion> {
  return buildQuestion(
    "Při redukci se oxidační číslo redukovaného prvku:",
    "sníží",
    ["zvýší", "nemění", "vždy je 0"],
    "Redukce = přírůstek elektronů v účetním modelu.",
  );
}

export const chemieGenerators: QuestionGenerator[] = [
  genMolH2O,
  genMolCO2,
  genLatkoveMnozstvi,
  genPh,
  genOxidace,
  genReakceTyp,
  genPocetAtomu,
  genRoztok,
  genKyselina,
  genRedox,
  genMolH2O,
  genLatkoveMnozstvi,
];

function zdvojChem(g: QuestionGenerator[]): QuestionGenerator[] {
  return [...g, ...g, ...g];
}

const CHEM_TOPIC_POOLS: Record<string, QuestionGenerator[]> = {
  "smesi-ciste": [genReakceTyp, genPh, genMolH2O],
  bezpecnost: [genKyselina, genReakceTyp, genPh],
  periodicka: [genMolH2O, genMolCO2, genPocetAtomu],
  "atom-molekula": [genPocetAtomu, genMolH2O, genMolCO2],
  "chemicka-rovnice": [genReakceTyp, genOxidace, genRedox],
  "latkove-mnozstvi": [genLatkoveMnozstvi, genRoztok, genMolH2O],
  roztoky: [genRoztok, genPh, genLatkoveMnozstvi],
  katalyzator: [genReakceTyp, genRedox],
  uhlovodiky: [genPocetAtomu, genMolCO2, genReakceTyp],
  "kyseliny-alkoholy": [genKyselina, genPocetAtomu, genMolH2O],
  vazba: [genPocetAtomu, genMolH2O, genReakceTyp],
  entalpie: [genReakceTyp, genPh, genRedox],
  rychlost: [genRoztok, genLatkoveMnozstvi],
  rovnovaha: [genPh, genRedox, genOxidace],
  ph: [genPh, genKyselina],
  redox: [genRedox, genOxidace],
  nukleofil: [genKyselina, genReakceTyp, genPocetAtomu],
  "bezpecnost-lab": [genKyselina, genPh, genReakceTyp],
};

export function getChemieTopicPool(temaId: string): QuestionGenerator[] {
  const b = CHEM_TOPIC_POOLS[temaId];
  return b ? zdvojChem(b) : [];
}
