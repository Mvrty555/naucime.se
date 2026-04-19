import { buildQuestion, randInt } from "./random";
import type { QuestionGenerator } from "./types";

function genRychlost(): ReturnType<typeof buildQuestion> {
  const s = randInt(10, 200);
  const t = randInt(2, 20);
  const v = s / t;
  const ok = Number.isInteger(v) ? String(v) : String(Math.round(v * 100) / 100);
  return buildQuestion(
    `Průměrná rychlost při dráze ${s} m za ${t} s je (v m/s):`,
    ok,
    [String(s + t), String(s * t), String(Math.round(s / (t + 1)))],
    "v = s/t.",
  );
}

function genHmotnostHustota(): ReturnType<typeof buildQuestion> {
  const m = randInt(2, 20) * 100;
  const v = randInt(2, 10) * 50;
  const rho = m / v;
  const ok = Number.isInteger(rho) ? String(rho) : String(Math.round(rho * 1000) / 1000);
  return buildQuestion(
    `Hustota, když hmotnost je ${m} g a objem ${v} cm³, je (g/cm³):`,
    ok,
    [String(m + v), String(m * v), String(Math.round(rho + 1))],
    "ρ = m/V.",
  );
}

function genPrace(): ReturnType<typeof buildQuestion> {
  const f = randInt(2, 20);
  const s = randInt(1, 10);
  return buildQuestion(
    `Práce při konstantní síle ${f} N a dráze ${s} m je:`,
    String(f * s),
    [String(f + s), String(f / s), String(f * s + 10)],
    "W = F·s ve směru síly.",
  );
}

function genTlakSloupec(): ReturnType<typeof buildQuestion> {
  const h = randInt(1, 5);
  const rho = 1000;
  const g = 10;
  const pPa = rho * g * h;
  const kpa = pPa / 1000;
  return buildQuestion(
    `Hydrostatický tlak ve vodě v hloubce ${h} m (ρ=1000 kg/m³, g=10) je zhruba:`,
    `${kpa} kPa`,
    [`${kpa + 5} kPa`, `${h * 100} Pa`, `${kpa / 2} kPa`],
    "p = ρgh, v kPa dělíš pascaly tisícem.",
  );
}

function genVlna(): ReturnType<typeof buildQuestion> {
  const f = randInt(2, 10);
  const lambda = randInt(2, 8);
  const c = f * lambda;
  return buildQuestion(
    `Vlna má frekvenci ${f} Hz a vlnovou délku ${lambda} m. Rychlost šíření je:`,
    `${c} m/s`,
    [`${c + 2} m/s`, `${f + lambda} m/s`, `${lambda / f} m/s`],
    "c = f·λ.",
  );
}

function genElektrina(): ReturnType<typeof buildQuestion> {
  const u = randInt(3, 24);
  const r = randInt(2, 12);
  const i = u / r;
  const ok = Number.isInteger(i) ? String(i) : String(Math.round(i * 100) / 100);
  return buildQuestion(
    `Proud při napětí ${u} V a odporu ${r} Ω je:`,
    `${ok} A`,
    [`${u + r} A`, `${u * r} A`, `1 A`],
    "Ohmův zákon I = U/R.",
  );
}

function genTeplo(): ReturnType<typeof buildQuestion> {
  const m = randInt(1, 5);
  const c = 4200;
  const dt = randInt(1, 10);
  const q = m * c * dt;
  return buildQuestion(
    `Teplo potřebné k ohřátí ${m} kg vody (4200 J/(kg·K)) o ${dt} °C je:`,
    `${q} J`,
    [`${m + dt} J`, `${m * dt} J`, `${q / 10} J`],
    "Q = m·c·ΔT.",
  );
}

function genKmitocet(): ReturnType<typeof buildQuestion> {
  const T = randInt(2, 20) / 10;
  const f = 1 / T;
  const ok = Number.isInteger(f) ? String(f) : String(Math.round(f * 100) / 100);
  return buildQuestion(
    `Perioda kmitání je ${T} s. Frekvence je:`,
    `${ok} Hz`,
    [`${T} Hz`, `${T * 2} Hz`, `10 Hz`],
    "f = 1/T.",
  );
}

function genEnergiePad(): ReturnType<typeof buildQuestion> {
  const m = randInt(1, 8);
  const h = randInt(2, 15);
  const g = 10;
  const ep = m * g * h;
  return buildQuestion(
    `Gravitační potenciální energie tělesa ${m} kg ve výšce ${h} m (g=10) je:`,
    `${ep} J`,
    [`${m + h} J`, `${m * h} J`, `${ep + 50} J`],
    "Eₚ = mgh.",
  );
}

function genZrcadlo(): ReturnType<typeof buildQuestion> {
  const u = randInt(10, 50);
  return buildQuestion(
    `Úhel dopadu na rovinné zrcadlo je ${u}°. Úhel odrazu je:`,
    `${u}°`,
    [`${180 - u}°`, `${90 - u}°`, `0°`],
    "Zákon odrazu: úhel dopadu = úhel odrazu vůči kolmici.",
  );
}

function genVykon(): ReturnType<typeof buildQuestion> {
  const w = randInt(60, 300);
  const t = randInt(2, 10);
  const p = w / t;
  const ok = Number.isInteger(p) ? String(p) : String(Math.round(p * 10) / 10);
  return buildQuestion(
    `Výkon, když se za ${t} s vykoná práce ${w} J, je:`,
    `${ok} W`,
    [`${w + t} W`, `${w * t} W`, `1 W`],
    "P = W/t.",
  );
}

export const fyzikaGenerators: QuestionGenerator[] = [
  genRychlost,
  genHmotnostHustota,
  genPrace,
  genTlakSloupec,
  genVlna,
  genElektrina,
  genTeplo,
  genKmitocet,
  genEnergiePad,
  genZrcadlo,
  genVykon,
  genRychlost,
  genElektrina,
];

function zdvojFyz(g: QuestionGenerator[]): QuestionGenerator[] {
  return [...g, ...g];
}

/** Klíče = `lekce.id` ve výuce fyziky. */
const FYZ_TOPIC_POOLS: Record<string, QuestionGenerator[]> = {
  "mereni-si": [genRychlost, genVykon, genPrace],
  "pohyb-klid": [genRychlost, genVykon],
  "svetlo-stin": [genZrcadlo, genVlna],
  hustota: [genHmotnostHustota, genTlakSloupec],
  tlak: [genTlakSloupec, genHmotnostHustota],
  "prace-vykon": [genPrace, genVykon, genEnergiePad],
  "jednoduche-obvody": [genElektrina, genVykon],
  "rychlost-zrychleni": [genRychlost, genEnergiePad],
  vlny: [genVlna, genKmitocet],
  "mechanicka-energie": [genEnergiePad, genPrace, genVykon],
  "soco-cta": [genTeplo, genPrace],
  "newtonovy-zakony": [genRychlost, genPrace, genEnergiePad],
  hybnost: [genRychlost, genVykon, genPrace],
  coulomb: [genElektrina, genPrace],
  "magneticke-pole": [genElektrina, genVlna],
  "harmonicky-pohyb": [genKmitocet, genVlna, genRychlost],
  "tepelna-rovnova": [genTeplo, genHmotnostHustota],
  foton: [genVlna, genZrcadlo],
  "relativita-nastin": [genRychlost, genEnergiePad],
};

export function getFyzikaTopicPool(temaId: string): QuestionGenerator[] {
  const b = FYZ_TOPIC_POOLS[temaId];
  return b ? zdvojFyz(b) : [];
}
