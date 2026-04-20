"use client";

import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { jednotkySpojovaciPary } from "@/data/cviceni/jednotkySpojovani";

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/** Odsazení konců čáry od okraje tlačítka směrem do mezery mezi sloupci (px). */
const KOTVA_ODSAZENI = 14;

function pathD(p1: { x: number; y: number }, p2: { x: number; y: number }): string {
  const dx = p2.x - p1.x;
  const bow = Math.min(56, Math.max(28, dx * 0.12));
  const cx1 = p1.x + dx * 0.42;
  const cy1 = p1.y - bow;
  const cx2 = p2.x - dx * 0.42;
  const cy2 = p2.y - bow;
  return `M ${p1.x} ${p1.y} C ${cx1} ${cy1} ${cx2} ${cy2} ${p2.x} ${p2.y}`;
}

function anchor(
  el: HTMLElement,
  container: HTMLElement,
  side: "left" | "right",
): { x: number; y: number } {
  const c = container.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  const x =
    side === "right"
      ? r.right - c.left - KOTVA_ODSAZENI
      : r.left - c.left + KOTVA_ODSAZENI;
  const y = r.top - c.top + r.height / 2;
  return { x, y };
}

type Props = {
  /** Menší okraje k vložení do karty procvičování */
  kompaktni?: boolean;
};

export function SpojovaniJednotek({ kompaktni }: Props) {
  const [hraSeed, setHraSeed] = useState(0);
  const [vybranyPojemId, setVybranyPojemId] = useState<string | null>(null);
  const [spojeno, setSpojeno] = useState<Set<string>>(() => new Set());
  const [posledniVysvetleni, setPosledniVysvetleni] = useState<string | null>(null);
  const [chyba, setChyba] = useState<string | null>(null);
  const [previewEnd, setPreviewEnd] = useState<{ x: number; y: number } | null>(null);

  const boardRef = useRef<HTMLDivElement>(null);
  const pojemBtnRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const jednotkaBtnRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

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

  const [linkSvg, setLinkSvg] = useState<{
    hotove: string[];
    preview: string | null;
  }>({ hotove: [], preview: null });

  const novaHra = useCallback(() => {
    setHraSeed((s) => s + 1);
    setVybranyPojemId(null);
    setSpojeno(new Set());
    setPosledniVysvetleni(null);
    setChyba(null);
    setPreviewEnd(null);
  }, []);

  const hotovo = spojeno.size === jednotkySpojovaciPary.length;

  const syncLines = useCallback(() => {
    const board = boardRef.current;
    if (!board) {
      setLinkSvg({ hotove: [], preview: null });
      return;
    }

    const hotove: string[] = [];
    for (const id of spojeno) {
      const L = pojemBtnRefs.current.get(id);
      const R = jednotkaBtnRefs.current.get(id);
      if (!L || !R) continue;
      hotove.push(pathD(anchor(L, board, "right"), anchor(R, board, "left")));
    }

    let preview: string | null = null;
    if (vybranyPojemId && !spojeno.has(vybranyPojemId) && previewEnd) {
      const L = pojemBtnRefs.current.get(vybranyPojemId);
      if (L) {
        preview = pathD(anchor(L, board, "right"), previewEnd);
      }
    }
    setLinkSvg((prev) => {
      if (
        prev.hotove.length === hotove.length &&
        prev.hotove.every((d, i) => d === hotove[i]) &&
        prev.preview === preview
      ) {
        return prev;
      }
      return { hotove, preview };
    });
  }, [spojeno, vybranyPojemId, previewEnd]);

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => syncLines());
    return () => cancelAnimationFrame(id);
  }, [syncLines, hraSeed]);

  useLayoutEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(() => syncLines());
    });
    ro.observe(board);
    const onScroll = () => {
      requestAnimationFrame(() => syncLines());
    };
    window.addEventListener("scroll", onScroll, true);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [syncLines]);

  const onBoardPointerMove = (e: React.PointerEvent) => {
    if (vybranyPojemId === null || spojeno.has(vybranyPojemId)) return;
    const board = boardRef.current;
    if (!board) return;
    const c = board.getBoundingClientRect();
    setPreviewEnd({ x: e.clientX - c.left, y: e.clientY - c.top });
  };

  const onBoardPointerLeave = () => {
    setPreviewEnd(null);
  };

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
      setPreviewEnd(null);
      setPosledniVysvetleni(par?.vysvetleni ?? null);
    } else {
      setChyba("Tahle jednotka k vybranému pojmu nepatří. Zkus jinou.");
      setVybranyPojemId(null);
      setPreviewEnd(null);
    }
  };

  const wrap = kompaktni
    ? "rounded-xl border border-fuchsia-500/20 bg-slate-950/50 p-4 sm:p-5"
    : "rounded-2xl border border-fuchsia-500/25 bg-slate-900/50 p-5 sm:p-6";

  return (
    <div className={wrap}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-white sm:text-lg">
            Spojovačka: pojem ↔ jednotka
          </h3>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            Vyber <strong className="text-slate-200">pojem</strong>, pak{" "}
            <strong className="text-slate-200">správný symbol</strong> — mezi správnými
            páry se nakreslí čára.
          </p>
        </div>
        <div className="text-right text-xs text-slate-400 sm:text-sm">
          Spojeno:{" "}
          <span className="font-mono text-fuchsia-300">
            {spojeno.size}/{jednotkySpojovaciPary.length}
          </span>
        </div>
      </div>

      <div
        ref={boardRef}
        className="relative mt-5"
        onPointerMove={onBoardPointerMove}
        onPointerLeave={onBoardPointerLeave}
      >
        <div className="relative z-20 grid gap-8 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Pojem
            </p>
            <ul className="mt-3 space-y-4 sm:space-y-5">
              {pojmyRadka.map(({ id, text }) => {
                const done = spojeno.has(id);
                const sel = vybranyPojemId === id;
                return (
                  <li key={id}>
                    <button
                      type="button"
                      ref={(el) => {
                        if (el) pojemBtnRefs.current.set(id, el);
                        else pojemBtnRefs.current.delete(id);
                      }}
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
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Jednotka (symbol)
            </p>
            <ul className="mt-3 space-y-4 sm:space-y-5">
              {jednotkyRadka.map(({ id, text }) => {
                const done = spojeno.has(id);
                return (
                  <li key={`u-${id}`}>
                    <button
                      type="button"
                      ref={(el) => {
                        if (el) jednotkaBtnRefs.current.set(id, el);
                        else jednotkaBtnRefs.current.delete(id);
                      }}
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

        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
          aria-hidden
        >
          {linkSvg.hotove.map((d, i) => (
            <path
              key={`m-${i}`}
              d={d}
              fill="none"
              stroke="rgb(52 211 153 / 0.85)"
              strokeWidth={2.5}
              strokeLinecap="round"
            />
          ))}
          {linkSvg.preview ? (
            <path
              d={linkSvg.preview}
              fill="none"
              stroke="rgb(34 211 238 / 0.65)"
              strokeWidth={2.25}
              strokeDasharray="6 5"
              strokeLinecap="round"
            />
          ) : null}
        </svg>
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
        <div className="mt-5 rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 text-center">
          <p className="text-sm font-semibold text-cyan-100 sm:text-base">
            Hotovo — všechny páry sedí.
          </p>
          <p className="mt-2 text-xs text-slate-400 sm:text-sm">
            Watt není totéž co joule: watt měří „rychlost“ přenosu energie, joule „kolik“ jí
            bylo přeneseno celkem.
          </p>
          <button
            type="button"
            onClick={novaHra}
            className="mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-5 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:brightness-110"
          >
            Nová hra (jiné pořadí)
          </button>
        </div>
      ) : (
        <p className="mt-4 text-center text-xs text-slate-500">
          Tip: po přečtení teorie u veličin si jednotku odvoď z definice — pak tě cvičení
          přestane strašit.
        </p>
      )}

      {!hotovo ? (
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={novaHra}
            className="rounded-full border border-slate-600 px-4 py-2 text-xs text-slate-300 hover:border-slate-500 sm:text-sm"
          >
            Zamíchat znovu
          </button>
        </div>
      ) : null}
    </div>
  );
}
