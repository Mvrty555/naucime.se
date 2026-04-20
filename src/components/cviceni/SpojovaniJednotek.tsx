"use client";

import { useCallback, useMemo, useState } from "react";
import { jednotkySpojovaciPary } from "@/data/cviceni/jednotkySpojovani";

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

export function SpojovaniJednotek() {
  const [hraSeed, setHraSeed] = useState(0);
  const [vybranyPojemId, setVybranyPojemId] = useState<string | null>(null);
  const [spojeno, setSpojeno] = useState<Set<string>>(() => new Set());
  const [posledniVysvetleni, setPosledniVysvetleni] = useState<string | null>(null);
  const [chyba, setChyba] = useState<string | null>(null);

  const mapa = useMemo(
    () => new Map(jednotkySpojovaciPary.map((p) => [p.id, p] as const)),
    [],
  );
  const pojmyRadka = useMemo(() => {
    void hraSeed;
    return shuffle(jednotkySpojovaciPary.map((p) => ({ id: p.id, text: p.pojem })));
  }, [hraSeed]);
  const jednotkyRadka = useMemo(() => {
    void hraSeed;
    return shuffle(jednotkySpojovaciPary.map((p) => ({ id: p.id, text: p.jednotkaZnak })));
  }, [hraSeed]);

  const novaHra = useCallback(() => {
    setHraSeed((s) => s + 1);
    setVybranyPojemId(null);
    setSpojeno(new Set());
    setPosledniVysvetleni(null);
    setChyba(null);
  }, []);

  const hotovo = spojeno.size === jednotkySpojovaciPary.length;

  const klikPojem = (id: string) => {
    if (spojeno.has(id)) return;
    setChyba(null);
    setPosledniVysvetleni(null);
    setVybranyPojemId(id);
  };

  const klikJednotka = (id: string) => {
    if (spojeno.has(id)) return;
    if (vybranyPojemId === null) {
      setChyba("Nejdřív vyber pojem v levém sloupci, pak klikni na jednotku vpravo.");
      return;
    }
    if (vybranyPojemId === id) {
      const par = mapa.get(id);
      setSpojeno((prev) => new Set(prev).add(id));
      setVybranyPojemId(null);
      setChyba(null);
      setPosledniVysvetleni(par?.vysvetleni ?? null);
    } else {
      setChyba("Tahle jednotka k vybranému pojmu nepatří. Zkus jinou.");
      setVybranyPojemId(null);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Spojování pojmů a jednotek</h2>
          <p className="mt-1 text-sm text-slate-400">
            Klikni <strong className="text-slate-200">pojem</strong>, pak{" "}
            <strong className="text-slate-200">správnou jednotku</strong>. Pořadí: vždy nejdřív
            vlevo.
          </p>
        </div>
        <div className="text-right text-sm text-slate-400">
          Spojeno:{" "}
          <span className="font-mono text-cyan-300">
            {spojeno.size}/{jednotkySpojovaciPary.length}
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Pojem</h3>
          <ul className="mt-3 space-y-2">
            {pojmyRadka.map(({ id, text }) => {
              const done = spojeno.has(id);
              const sel = vybranyPojemId === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    disabled={done || hotovo}
                    onClick={() => klikPojem(id)}
                    className={`w-full rounded-xl border px-3 py-3 text-left text-sm transition disabled:cursor-default disabled:opacity-55 ${
                      done
                        ? "border-emerald-500/50 bg-emerald-950/30 text-emerald-100"
                        : sel
                          ? "border-cyan-400 bg-cyan-950/40 text-white ring-2 ring-cyan-500/40"
                          : "border-white/10 bg-slate-900/60 text-slate-200 hover:border-cyan-500/40"
                    }`}
                  >
                    {done ? <span className="mr-2 text-emerald-400">✓</span> : null}
                    {text}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Jednotka (symbol)
          </h3>
          <ul className="mt-3 space-y-2">
            {jednotkyRadka.map(({ id, text }) => {
              const done = spojeno.has(id);
              return (
                <li key={`u-${id}`}>
                  <button
                    type="button"
                    disabled={done || hotovo}
                    onClick={() => klikJednotka(id)}
                    className={`w-full rounded-xl border px-3 py-3 text-left font-mono text-sm transition disabled:cursor-default disabled:opacity-55 ${
                      done
                        ? "border-emerald-500/50 bg-emerald-950/30 text-emerald-100"
                        : "border-white/10 bg-slate-900/60 text-fuchsia-100 hover:border-fuchsia-500/40"
                    }`}
                  >
                    {done ? <span className="mr-2 font-sans text-emerald-400">✓</span> : null}
                    {text}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {chyba ? (
        <p className="mt-4 rounded-lg border border-rose-500/30 bg-rose-950/30 px-3 py-2 text-sm text-rose-100">
          {chyba}
        </p>
      ) : null}

      {posledniVysvetleni ? (
        <p className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-950/25 px-3 py-2 text-sm text-emerald-50">
          {posledniVysvetleni}
        </p>
      ) : null}

      {hotovo ? (
        <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-5 text-center">
          <p className="font-semibold text-cyan-100">Hotovo — všechny páry sedí.</p>
          <p className="mt-2 text-sm text-slate-400">
            Watt není totéž co joule: watt měří „rychlost“ přenosu energie, joule „kolik“ jí
            bylo přeneseno celkem.
          </p>
          <button
            type="button"
            onClick={novaHra}
            className="mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:brightness-110"
          >
            Nová hra (jiné pořadí)
          </button>
        </div>
      ) : (
        <p className="mt-6 text-center text-xs text-slate-500">
          Tip: po přečtení teorie u veličin si jednotku odvoď z definice — pak tě cvičení
          přestane strašit.
        </p>
      )}

      {!hotovo ? (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={novaHra}
            className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-300 hover:border-slate-500"
          >
            Zamíchat znovu
          </button>
        </div>
      ) : null}
    </div>
  );
}
