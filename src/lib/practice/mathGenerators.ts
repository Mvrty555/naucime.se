import { buildQuestion, randInt } from "./random";
import type { QuestionGenerator } from "./types";

function genPoradi1(): ReturnType<typeof buildQuestion> {
  const a = randInt(1, 12);
  const b = randInt(2, 9);
  const c = randInt(2, 9);
  const ok = a + b * c;
  const chybaLevo = (a + b) * c;
  const chybaPlus = a + b + c;
  const chybaKrat = a * b + c;
  return buildQuestion(
    `Kolik je ${a} + ${b} × ${c}?`,
    String(ok),
    [String(chybaLevo), String(chybaPlus), String(chybaKrat)],
    `Nejdřív násobení: ${b}×${c}=${b * c}, pak přičti ${a}.`,
  );
}

function genPoradi2(): ReturnType<typeof buildQuestion> {
  const sub = randInt(2, 9);
  const div = randInt(2, 6);
  const prod = sub * div;
  const start = randInt(20, 60);
  const ok2 = start - sub;
  return buildQuestion(
    `Kolik je ${start} − ${prod} ÷ ${div}?`,
    String(ok2),
    [String(start - prod - div), String(start + sub), String(start)],
    `Nejdřív dělení: ${prod}÷${div}=${sub}, pak ${start}−${sub}.`,
  );
}

function genZlomekVetsi(): ReturnType<typeof buildQuestion> {
  const a = randInt(2, 8);
  const b = a + randInt(1, 4);
  const c = randInt(2, 8);
  const d = c + randInt(1, 4);
  const left = a / b;
  const right = c / d;
  const vetsiVlevo = left >= right;
  const okText = vetsiVlevo ? `Větší je ${a}/${b}` : `Větší je ${c}/${d}`;
  const wrong1 = vetsiVlevo ? `Větší je ${c}/${d}` : `Větší je ${a}/${b}`;
  const wrong2 = "Jsou stejně velké";
  const wrong3 = "Nelze porovnat";
  return buildQuestion(
    `Který zlomek je větší: ${a}/${b} nebo ${c}/${d}?`,
    okText,
    [wrong1, wrong2, wrong3],
    "Porovnej rozšířením na společného jmenovatele nebo přibliž desetinně.",
  );
}

function genRovnice(): ReturnType<typeof buildQuestion> {
  const x = randInt(1, 15);
  const k = randInt(2, 9);
  const b = randInt(1, 20);
  const rhs = k * x + b;
  return buildQuestion(
    `Řešení rovnice ${k}x + ${b} = ${rhs} je:`,
    `x = ${x}`,
    [`x = ${x + 1}`, `x = ${rhs}`, `x = 0`],
    `Odečti ${b} a vyděl ${k}: ${rhs}−${b}=${rhs - b}, pak ÷${k}.`,
  );
}

function genProcenta(): ReturnType<typeof buildQuestion> {
  const p = [10, 20, 25, 50][randInt(0, 3)];
  const zaklad = randInt(4, 40) * (100 / gcd100(p));
  const cast = (zaklad * p) / 100;
  return buildQuestion(
    `Kolik je ${p} % z ${zaklad}?`,
    String(cast),
    [String(cast + 5), String(zaklad + p), String(Math.max(1, cast - 7))],
    `Výpočet: ${zaklad}·${p}/100 = ${cast}.`,
  );
}

function gcd100(p: number): number {
  const g = gcd(p, 100);
  return g === 0 ? 1 : g;
}

function genMocnina(): ReturnType<typeof buildQuestion> {
  const n = randInt(2, 5);
  const k = randInt(2, 4);
  const val = k ** n;
  return buildQuestion(
    `Kolik je ${k}^${n}?`,
    String(val),
    [String(k * n), String(k + n), String(k ** (n + 1))],
    "Opakované násobení stejného základu.",
  );
}

function genObsahCtverec(): ReturnType<typeof buildQuestion> {
  const a = randInt(2, 12);
  return buildQuestion(
    `Obsah čtverce se stranou ${a} je:`,
    String(a * a),
    [String(4 * a), String(a + a), String(2 * a)],
    "Obsah = strana krát strana.",
  );
}

function genObvodObdelnik(): ReturnType<typeof buildQuestion> {
  const a = randInt(3, 12);
  const b = randInt(3, 12);
  return buildQuestion(
    `Obvod obdélníka ${a}×${b} je:`,
    String(2 * (a + b)),
    [String(a * b), String(a + b), String(4 * a)],
    "Obvod = 2·(a+b).",
  );
}

function genPrumer(): ReturnType<typeof buildQuestion> {
  const a = randInt(1, 20);
  const b = randInt(1, 20);
  const c = randInt(1, 20);
  const pr = (a + b + c) / 3;
  const ok = Number.isInteger(pr) ? String(pr) : String(Math.round(pr * 100) / 100);
  return buildQuestion(
    `Průměr čísel ${a}, ${b}, ${c} je:`,
    ok,
    [String(a + b + c), String(Math.max(a, b, c)), String(pr + 2)],
    "Součet dělený třemi.",
  );
}

function genPythagoras(): ReturnType<typeof buildQuestion> {
  const u = randInt(3, 8);
  const v = randInt(3, 8);
  const c = Math.round(Math.sqrt(u * u + v * v));
  if (c * c !== u * u + v * v) return genPythagoras();
  return buildQuestion(
    `Přepona pravouhlého trojúhelníka s odvěsnami ${u} a ${v} má délku:`,
    String(c),
    [String(u + v), String(Math.abs(u - v)), String(u * v)],
    "Pythagorova věta: c² = a² + b².",
  );
}

function genDelitelnost(): ReturnType<typeof buildQuestion> {
  const d = randInt(2, 9);
  const k = randInt(5, 20);
  const n = d * k;
  const wrong = n + randInt(1, d - 1 || 1);
  return buildQuestion(
    `Které číslo je dělitelné ${d} beze zbytku?`,
    String(n),
    [String(wrong), String(n + 1), String(n - 1)],
    `${n} = ${d}·${k}.`,
  );
}

function genZapornaSecteni(): ReturnType<typeof buildQuestion> {
  const a = -randInt(1, 9);
  const b = randInt(1, 9);
  const ok = a + b;
  return buildQuestion(
    `Kolik je (${a}) + ${b}?`,
    String(ok),
    [String(a - b), String(Math.abs(a) + b), String(a * b)],
    `Na číselné ose o ${b} doprava od ${a}.`,
  );
}

function genZlomekSoucet(): ReturnType<typeof buildQuestion> {
  // 1/a + 1/b with same denominator
  const a = randInt(2, 7);
  const b = randInt(2, 7);
  const num = a + b;
  const den = a * b;
  const ok = `${num}/${den}`;
  const g = gcd(num, den);
  const simple = `${num / g}/${den / g}`;
  return buildQuestion(
    `Sečti: 1/${a} + 1/${b}`,
    simple,
    [`${num + 1}/${den}`, `${num}/${den + 1}`, `2/${a + b}`],
    `Společný jmenovatel ${a * b}.`,
  );
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function genNasobilka(): ReturnType<typeof buildQuestion> {
  const a = randInt(3, 12);
  const b = randInt(3, 12);
  return buildQuestion(
    `${a} × ${b} =`,
    String(a * b),
    [String(a + b), String(a * b + 1), String(Math.abs(a - b))],
    "Malá násobilice — trénuj paměť.",
  );
}

function genDesetinnePlus(): ReturnType<typeof buildQuestion> {
  const a = randInt(1, 9) / 10;
  const b = randInt(1, 9) / 10;
  const s = Math.round((a + b) * 10) / 10;
  return buildQuestion(
    `Kolik je ${a.toFixed(1)} + ${b.toFixed(1)}?`,
    s.toFixed(1),
    [(s + 0.1).toFixed(1), (s - 0.2).toFixed(1), (a + b + 1).toFixed(1)],
    "Sečti desetiny jako zlomky desetin.",
  );
}

function genPoradiSeZavorkou(): ReturnType<typeof buildQuestion> {
  const a = randInt(2, 6);
  const b = randInt(2, 6);
  const c = randInt(2, 5);
  const ok = (a + b) * c;
  return buildQuestion(
    `Kolik je (${a} + ${b}) × ${c}?`,
    String(ok),
    [String(a + b + c), String(a + b * c), String(a * b + c)],
    "Nejdřív závorka, pak násobení.",
  );
}

function genDruhaMocnina(): ReturnType<typeof buildQuestion> {
  const n = randInt(3, 15);
  return buildQuestion(
    `Kolik je ${n}²?`,
    String(n * n),
    [String(2 * n), String(n + n), String(n ** 3)],
    "Druhá mocnina = n·n.",
  );
}

function genObjemKvadr(): ReturnType<typeof buildQuestion> {
  const a = randInt(2, 8);
  return buildQuestion(
    `Objem krychle s hranou ${a} je:`,
    String(a ** 3),
    [String(6 * a * a), String(a * a), String(12 * a)],
    "Objem krychle = a³.",
  );
}

function genUhelTrojuhelnik(): ReturnType<typeof buildQuestion> {
  const a = randInt(20, 70);
  const b = randInt(20, 70);
  const c = 180 - a - b;
  if (c <= 0) return genUhelTrojuhelnik();
  return buildQuestion(
    `V trojúhelníku jsou úhly ${a}° a ${b}°. Třetí úhel je:`,
    `${c}°`,
    [`${c + 10}°`, `${180 - a}°`, `${90 - b}°`],
    "Součet úhlů v trojúhelníku je 180°.",
  );
}

function genLinearniFunkce(): ReturnType<typeof buildQuestion> {
  const k = randInt(2, 5);
  const q = randInt(0, 8);
  const x = randInt(1, 6);
  const y = k * x + q;
  return buildQuestion(
    `Pro f(x)=${k}x+${q} je f(${x}) rovno:`,
    String(y),
    [String(k + x + q), String(k * x), String(y + 1)],
    "Dosazení: k·x+q.",
  );
}

function genProcChyba(): ReturnType<typeof buildQuestion> {
  const a = randInt(2, 9);
  const b = randInt(2, 9);
  const c = randInt(2, 6);
  const sum = b + c;
  const ok = a * sum;
  const trap = a * b + c;
  return buildQuestion(
    `Kolik je ${a}·(${b}+${c})?`,
    String(ok),
    [String(trap), String(a + b + c), String(a + b * c)],
    `Nejdřív závorka: ${b}+${c}=${sum}, pak násobení ${a}·${sum}.`,
  );
}

export const mathGenerators: QuestionGenerator[] = [
  genPoradi1,
  genPoradi2,
  genZlomekVetsi,
  genRovnice,
  genProcenta,
  genMocnina,
  genObsahCtverec,
  genObvodObdelnik,
  genPrumer,
  genPythagoras,
  genDelitelnost,
  genZapornaSecteni,
  genZlomekSoucet,
  genNasobilka,
  genDesetinnePlus,
  genPoradiSeZavorkou,
  genDruhaMocnina,
  genObjemKvadr,
  genUhelTrojuhelnik,
  genLinearniFunkce,
  genProcChyba,
];

/** Klíče = `lekce.id` ve výukových datech. */
const MATH_TOPIC_POOLS: Record<string, QuestionGenerator[]> = {
  "poradi-operaci": [
    genPoradi1,
    genPoradi2,
    genPoradiSeZavorkou,
    genProcChyba,
    genNasobilka,
  ],
  "zlomky-zaklady": [genZlomekVetsi, genZlomekSoucet, genNasobilka],
  "cela-cisla": [genZapornaSecteni, genPoradi1, genDelitelnost],
  "pomer-meritko": [genProcenta, genNasobilka, genDelitelnost, genRovnice],
  "linearni-rovnice": [genRovnice, genPoradi1, genProcChyba],
  procenta: [genProcenta, genDesetinnePlus],
  mnohocleny: [genProcChyba, genPoradi1, genLinearniFunkce],
  "linearni-funkce": [genLinearniFunkce, genRovnice],
  mocniny: [genMocnina, genDruhaMocnina, genPoradiSeZavorkou],
  statistika: [genPrumer, genDelitelnost],
  "vyrazy-vztahy": [genProcChyba, genDruhaMocnina, genPoradiSeZavorkou, genZlomekSoucet],
  "funkce-vlastnosti": [genLinearniFunkce, genRovnice, genPoradi1],
  goniometrie: [genPythagoras, genUhelTrojuhelnik, genDruhaMocnina],
  posloupnosti: [genDelitelnost, genRovnice, genLinearniFunkce],
  logaritmy: [genMocnina, genPoradi2, genRovnice],
  "derivace-uvod": [genLinearniFunkce, genMocnina, genDruhaMocnina],
  "integral-uvod": [genObsahCtverec, genObjemKvadr, genObvodObdelnik],
  "strategie-reseni": [genPoradi1, genRovnice, genDelitelnost],
  "desetinne-a-odhad": [genDesetinnePlus, genPoradi1, genZlomekVetsi],
  delitelnost: [genDelitelnost, genNasobilka, genPoradi1],
  "soustavy-uvod": [genRovnice, genPoradi2, genProcChyba],
};

function zdvojPool(g: QuestionGenerator[]): QuestionGenerator[] {
  return [...g, ...g];
}

export function getMathTopicPool(temaId: string): QuestionGenerator[] {
  const base = MATH_TOPIC_POOLS[temaId];
  return base ? zdvojPool(base) : [];
}
