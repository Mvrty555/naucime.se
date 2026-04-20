"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PracticeArena } from "@/components/practice/PracticeArena";
import { getTemataNaRocniku, getTopicPracticePool } from "@/lib/practice/topicPools";
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
  const [temaId, setTemaId] = useState<string | null>(null);

  const rocniky = useMemo(
    () => (stupe === "zs" ? [5, 6, 7, 8, 9] : [1, 2, 3, 4]),
    [stupe],
  );

  const temataVRocniku = useMemo(
    () => getTemataNaRocniku(predmet, stupe, rocnik),
    [predmet, stupe, rocnik],
  );

  const temataSGeneratory = useMemo(
    () =>
      temataVRocniku.filter((t) => getTopicPracticePool(predmet, t.id).length > 0),
    [predmet, temataVRocniku],
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
          <strong className="text-slate-200">Obecný mix</strong> náhodně střídá typy
          úloh z celého předmětu. <strong className="text-slate-200">Téma z výuky</strong>{" "}
          drží generátory u konkrétní kapitoly — stejná logika jako pod lekcí na stránkách
          ročníku.
        </p>
        <p className="mt-4">
          <Link
            href="/procvicovani/jednotky"
            className="inline-flex rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-100 transition hover:bg-fuchsia-500/20"
          >
            Cvičení: spojuj pojmy a jednotky (W, J, Pa…) →
          </Link>
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {predmety.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setPredmet(p.id);
                setTemaId(null);
              }}
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
              setTemaId(null);
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
              setTemaId(null);
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
              onClick={() => {
                setRocnik(r);
                setTemaId(null);
              }}
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

        <div className="mt-8">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Téma (stejné jako lekce v /vyuka)
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setTemaId(null)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold sm:text-sm ${
                temaId === null
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "border border-slate-600 text-slate-300 hover:border-cyan-500/40"
              }`}
            >
              Obecný mix
            </button>
            {temataSGeneratory.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTemaId(t.id)}
                className={`max-w-full truncate rounded-full px-3 py-1.5 text-left text-xs font-medium sm:text-sm ${
                  temaId === t.id
                    ? "bg-fuchsia-600 text-white"
                    : "border border-slate-600 text-slate-300 hover:border-fuchsia-500/50"
                }`}
                title={t.nazev}
              >
                {t.nazev}
              </button>
            ))}
          </div>
          {temataSGeneratory.length === 0 ? (
            <p className="mt-2 text-xs text-slate-500">
              Pro tento ročník zatím nemáme namapovaná témata generátorů — použij obecný
              mix.
            </p>
          ) : null}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <PracticeArena
          predmet={predmet}
          stupe={stupe}
          rocnik={rocnik}
          temaId={temaId ?? undefined}
        />
        <p className="mt-8 text-center text-xs text-slate-500">
          Didaktika: u náročnějších látek dává smysl střídat krátký výklad, jednu
          kontrolní úlohu a teprve pak další výklad — přesně tak jsou stavěné nové
          lekce s polem <code className="text-slate-400">postup</code> ve výukových
          datech.
        </p>
      </div>
    </div>
  );
}
