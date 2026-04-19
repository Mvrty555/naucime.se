import type { Metadata } from "next";
import Link from "next/link";
import { predmetyZakladniSkola } from "@/data/zakladniSkola";

export const metadata: Metadata = {
  title: "Základní škola",
  description:
    "Přehled témat matematiky, fyziky a chemie pro 5.–9. třídu ZŠ na Naučíme.se.",
};

export default function ZakladniSkolaPage() {
  return (
    <div className="relative border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300 hover:underline"
        >
          ← Zpět na úvod
        </Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/90">
          2. stupeň ZŠ
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Základní škola
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
          Orientační mapa témat pro 5.–9. třídu — vlastní struktura pro Naučíme.se,
          kterou postupně rozšiřujeme o výklady a cvičení. Slouží jako rozcestník,
          ne jako doslovná kopie konkrétní učebnice.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl space-y-12 px-4 pb-20 sm:px-6">
        {predmetyZakladniSkola.map((predmet) => (
          <section
            key={predmet.id}
            id={predmet.id}
            className="scroll-mt-24 rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur sm:p-8"
          >
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {predmet.nazev}
              </h2>
              <p className="mt-2 text-slate-400">{predmet.popis}</p>
              {predmet.id === "matematika" ? (
                <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <Link
                    href="/matematika/zs"
                    className="font-medium text-cyan-400 hover:underline"
                  >
                    Všechny kapitoly ZŠ →
                  </Link>
                  <Link
                    href="/matematika/zs/poradi-operaci"
                    className="font-medium text-slate-500 hover:text-cyan-400 hover:underline"
                  >
                    Pořadí operací (5. třída) →
                  </Link>
                </p>
              ) : null}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {predmet.rocniky.map((r) => (
                <div
                  key={r.rocnik}
                  className="flex flex-col rounded-xl border border-white/10 bg-slate-950/50 p-4 transition duration-200 ease-out hover:border-cyan-500/25 hover:bg-slate-900/80 motion-reduce:transition-none"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {r.rocnik}. třída
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
                    {r.temata.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
