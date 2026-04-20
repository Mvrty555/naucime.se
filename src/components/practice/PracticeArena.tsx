"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { startTransition, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SpojovaniJednotek } from "@/components/cviceni/SpojovaniJednotek";
import { getPracticePool, pickRandomQuestion } from "@/lib/practice/pools";
import { getSpojovaciKonfig } from "@/lib/practice/spojovaniRegistry";
import { getTopicPracticePool } from "@/lib/practice/topicPools";
import type { PracticeQuestion, QuestionGenerator } from "@/lib/practice/types";
import type { PredmetVyuka, StupeVyuka } from "@/types/vyuka";

type Props = {
  predmet: PredmetVyuka;
  stupe: StupeVyuka;
  rocnik: number;
  /** Jen příklady navázané na konkrétní lekci (`lekce.id`). */
  temaId?: string;
  /** Kratší varianta do vložené stránky */
  kompaktni?: boolean;
};

type InnerProps = {
  pool: QuestionGenerator[];
  temaId: string | undefined;
  kompaktni: boolean | undefined;
  predmet: PredmetVyuka;
  stupe: StupeVyuka;
  rocnik: number;
};

function PracticeArenaSession({
  pool,
  temaId,
  kompaktni,
  predmet,
  stupe,
  rocnik,
}: InnerProps) {
  /** První otázka až po mountu — `pickRandomQuestion` používá `Math.random` (jinak SSR ≠ klient). */
  const [otazka, setOtazka] = useState<PracticeQuestion | null>(() =>
    pool.length === 0 ? pickRandomQuestion(pool) : null,
  );
  const [vybrano, setVybrano] = useState<number | null>(null);
  const [hotovo, setHotovo] = useState(0);
  const [spravneCelkem, setSpravneCelkem] = useState(0);
  const [serie, setSerie] = useState(0);
  const [nejSerie, setNejSerie] = useState(0);
  const { data: session, status } = useSession();
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (pool.length === 0) return;
    startTransition(() => {
      setOtazka(pickRandomQuestion(pool, null));
      setVybrano(null);
    });
  }, [pool]);

  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.id || pool.length === 0) {
      return;
    }
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      const scope = `arena:${predmet}:${stupe}:${rocnik}:${temaId ?? "vse"}`;
      const data = { hotovo, spravneCelkem, serie, nejSerie };
      void fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scope, data }),
      });
    }, 900);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [
    hotovo,
    spravneCelkem,
    serie,
    nejSerie,
    predmet,
    stupe,
    rocnik,
    temaId,
    pool.length,
    session?.user?.id,
    status,
  ]);

  const dalsi = useCallback(() => {
    if (pool.length === 0) return;
    setOtazka((prev) => pickRandomQuestion(pool, prev));
    setVybrano(null);
  }, [pool]);

  const vyber = (i: number) => {
    if (otazka === null || vybrano !== null) return;
    setVybrano(i);
    setHotovo((h) => h + 1);
    if (i === otazka.correctIndex) {
      setSpravneCelkem((s) => s + 1);
      setSerie((s) => {
        const n = s + 1;
        setNejSerie((m) => Math.max(m, n));
        return n;
      });
    } else {
      setSerie(0);
    }
  };

  const jeSpravne =
    otazka !== null && vybrano !== null && vybrano === otazka.correctIndex;

  const sectionClass =
    kompaktni
      ? "rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-5 sm:p-6"
      : "mx-auto max-w-2xl rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6 shadow-xl shadow-cyan-950/20 sm:p-8";

  if (otazka === null) {
    return (
      <section className={sectionClass}>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              {temaId ? "Procvičení tématu" : "Procvičování"}
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              {temaId
                ? "Příklady jen z okruhu zvolené lekce — náhodná čísla, stejná pravidla."
                : "Nekonečná sada náhodných příkladů — pokaždé jiná čísla."}
            </p>
          </div>
          <dl className="flex gap-4 text-right text-xs text-slate-400">
            <div>
              <dt className="uppercase tracking-wide">Hotovo</dt>
              <dd className="font-mono text-base text-cyan-300">0</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wide">Správně</dt>
              <dd className="font-mono text-base text-emerald-300">0</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wide">Serie</dt>
              <dd className="font-mono text-base text-amber-300">0</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wide">Rekord</dt>
              <dd className="font-mono text-base text-fuchsia-300">0</dd>
            </div>
          </dl>
        </div>
        <div className="mt-6 animate-pulse rounded-xl border border-slate-700/80 bg-slate-950/60 p-4 sm:p-5">
          <div className="h-6 rounded-md bg-slate-700/60 sm:h-7" />
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-12 rounded-xl bg-slate-800/70 sm:h-[3.25rem]" />
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-600">Načítám příklad…</p>
        </div>
      </section>
    );
  }

  return (
    <section className={sectionClass}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            {temaId ? "Procvičení tématu" : "Procvičování"}
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            {temaId
              ? "Příklady jen z okruhu zvolené lekce — náhodná čísla, stejná pravidla."
              : "Nekonečná sada náhodných příkladů — pokaždé jiná čísla."}
          </p>
        </div>
        <dl className="flex gap-4 text-right text-xs text-slate-400">
          <div>
            <dt className="uppercase tracking-wide">Hotovo</dt>
            <dd className="font-mono text-base text-cyan-300">{hotovo}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-wide">Správně</dt>
            <dd className="font-mono text-base text-emerald-300">{spravneCelkem}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-wide">Serie</dt>
            <dd className="font-mono text-base text-amber-300">{serie}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-wide">Rekord</dt>
            <dd className="font-mono text-base text-fuchsia-300">{nejSerie}</dd>
          </div>
        </dl>
      </div>
      {status === "authenticated" ? (
        <p className="mt-2 text-xs text-emerald-400/90">
          Jsi přihlášen — statistiky arény se průběžně ukládají na účet.
        </p>
      ) : null}

      <div className="mt-6 rounded-xl border border-slate-700/80 bg-slate-950/60 p-4 sm:p-5">
        <p className="text-base font-medium leading-relaxed text-slate-100 sm:text-lg">
          {otazka.prompt}
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {otazka.options.map((text, i) => {
            const stisknuto = vybrano === i;
            const spravna = i === otazka.correctIndex;
            let třída =
              "rounded-xl border px-4 py-3 text-left text-sm font-medium transition ";
            if (vybrano === null) {
              třída +=
                "border-slate-600 bg-slate-800/80 text-slate-100 hover:border-cyan-500/60 hover:bg-slate-800";
            } else if (spravna) {
              třída += stisknuto
                ? "border-emerald-500 bg-emerald-950/50 text-emerald-100"
                : "border-emerald-600/50 bg-emerald-950/30 text-emerald-200";
            } else if (stisknuto) {
              třída += "border-rose-500 bg-rose-950/40 text-rose-100";
            } else {
              třída += "border-slate-700 text-slate-500 opacity-60";
            }
            return (
              <button
                key={i}
                type="button"
                disabled={vybrano !== null}
                onClick={() => vyber(i)}
                className={třída}
              >
                {text}
              </button>
            );
          })}
        </div>

        {vybrano !== null ? (
          <div className="mt-4 space-y-3">
            <p
              className={`rounded-lg px-3 py-2 text-sm ${
                jeSpravne
                  ? "bg-emerald-950/60 text-emerald-100 ring-1 ring-emerald-500/40"
                  : "bg-rose-950/50 text-rose-100 ring-1 ring-rose-500/40"
              }`}
            >
              {jeSpravne ? "Správně. " : "Zkus to znovu — "}
              {otazka.explanation}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={dalsi}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
              >
                Další příklad →
              </button>
              <button
                type="button"
                onClick={() => {
                  setHotovo(0);
                  setSpravneCelkem(0);
                  setSerie(0);
                  setNejSerie(0);
                  dalsi();
                }}
                className="rounded-full border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:border-slate-500"
              >
                Reset statistik
              </button>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-xs text-slate-500">
            Vyber odpověď. Po vyhodnocení dostaneš další náhodný příklad z aktuální
            sady generátorů.
          </p>
        )}
      </div>
    </section>
  );
}

export function PracticeArena({
  predmet,
  stupe,
  rocnik,
  temaId,
  kompaktni,
}: Props) {
  const topicPool = useMemo(
    () => (temaId ? getTopicPracticePool(predmet, temaId) : []),
    [predmet, temaId],
  );
  const generalPool = useMemo(
    () => getPracticePool(predmet, stupe, rocnik),
    [predmet, stupe, rocnik],
  );
  const pool = useMemo(() => {
    if (temaId && topicPool.length > 0) return topicPool;
    if (temaId) return [];
    return generalPool;
  }, [temaId, topicPool, generalPool]);

  const sessionKey = useMemo(
    () => `${predmet}-${stupe}-${rocnik}-${temaId ?? "vse"}`,
    [predmet, stupe, rocnik, temaId],
  );

  const spojKonfig = useMemo(
    () => getSpojovaciKonfig(predmet, temaId),
    [predmet, temaId],
  );
  const spojovaniAktivni = Boolean(spojKonfig && pool.length > 0);

  if (temaId && pool.length === 0) {
    return (
      <section
        className={
          kompaktni
            ? "rounded-2xl border border-amber-500/25 bg-slate-900/50 p-5"
            : "mx-auto max-w-2xl rounded-2xl border border-amber-500/25 bg-slate-900/50 p-6 sm:p-8"
        }
      >
        <p className="text-sm text-slate-300">
          Pro vybrané téma zatím nemáme generované příklady v této podobě.
        </p>
        <Link
          href="/procvicovani"
          className="mt-3 inline-flex text-sm font-semibold text-cyan-400 hover:underline"
        >
          Zkusit obecné procvičování →
        </Link>
      </section>
    );
  }

  return (
    <div
      className={
        kompaktni ? "space-y-4" : "mx-auto max-w-2xl space-y-6"
      }
    >
      {spojovaniAktivni && spojKonfig ? (
        <SpojovaniJednotek
          key={`spoj-${sessionKey}`}
          konfig={spojKonfig}
          kompaktni={kompaktni}
        />
      ) : null}
      <PracticeArenaSession
        key={sessionKey}
        pool={pool}
        temaId={temaId}
        kompaktni={kompaktni}
        predmet={predmet}
        stupe={stupe}
        rocnik={rocnik}
      />
    </div>
  );
}
