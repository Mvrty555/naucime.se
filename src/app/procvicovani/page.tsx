"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PracticeArena } from "@/components/practice/PracticeArena";
import type { PredmetVyuka, StupeVyuka } from "@/types/vyuka";

const predmety: { id: PredmetVyuka; label: string }[] = [
  { id: "matematika", label: "Matematika" },
  { id: "fyzika", label: "Fyzika" },
  { id: "chemie", label: "Chemie" },
];

export default function ProcvicovaniPage() {
  const [predmet, setPredmet] = useState<PredmetVyuka>("matematika");
  const [stupe, setStupe] = useState<StupeVyuka>("zs");
  const [rocnik, setRocnik] = useState(5);

  const rocniky = useMemo(
    () => (stupe === "zs" ? [5, 6, 7, 8, 9] : [1, 2, 3, 4]),
    [stupe],
  );

  return (
    <div className="min-h-[70vh] border-b border-slate-800/80">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="text-sm font-medium text-cyan-400">
          <Link href="/" className="hover:text-cyan-300 hover:underline">
            ← Úvod
          </Link>
        </nav>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
          Trénink
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Procvičování
        </h1>
        <p className="mt-4 text-slate-400">
          Generované příklady z velkého souboru šablon — každé kliknutí na „Další
          příklad“ vytáří novou úlohu. Statistiky můžeš kdykoli vynulovat.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {predmety.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPredmet(p.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                predmet === p.id
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30"
                  : "border border-slate-600 bg-slate-900 text-slate-200 hover:border-cyan-500/50"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setStupe("zs");
              setRocnik(5);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              stupe === "zs"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ZŠ (5.–9.)
          </button>
          <button
            type="button"
            onClick={() => {
              setStupe("ss");
              setRocnik(1);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              stupe === "ss"
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            SŠ (1.–4.)
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {rocniky.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRocnik(r)}
              className={`min-h-9 min-w-[2.75rem] rounded-full px-3 text-sm font-semibold ${
                rocnik === r
                  ? "bg-fuchsia-600 text-white"
                  : "border border-slate-600 text-slate-300 hover:border-fuchsia-500/50"
              }`}
            >
              {stupe === "zs" ? `${r}. tř.` : `${r}. r.`}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <PracticeArena predmet={predmet} stupe={stupe} rocnik={rocnik} />
        <p className="mt-8 text-center text-xs text-slate-500">
          Matematika má nejvíc generátorů; fyzika a chemie se budou dál
          rozšiřovat. Chceš jiný typ úloh? Napiš nám téma.
        </p>
      </div>
    </div>
  );
}
