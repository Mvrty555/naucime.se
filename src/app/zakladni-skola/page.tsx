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
    <div className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/90">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="text-sm font-medium text-sky-700 transition hover:text-sky-800 hover:underline"
        >
          ← Zpět na úvod
        </Link>
        <p className="mt-6 text-sm font-medium uppercase tracking-wider text-sky-700">
          2. stupeň ZŠ
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Základní škola
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          Níže je orientační mapa témat pro 5.–9. třídu — vlastní struktura pro
          Naučíme.se, kterou budeme postupně rozšiřovat o výklady a cvičení. Slouží
          jako rozcestník, ne jako doslovná kopie konkrétní učebnice.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-16 px-4 pb-20 sm:px-6">
        {predmetyZakladniSkola.map((predmet) => (
          <section
            key={predmet.id}
            id={predmet.id}
            className="scroll-mt-24 rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-sm ring-1 ring-slate-100/80 sm:p-8"
          >
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {predmet.nazev}
              </h2>
              <p className="mt-2 text-slate-600">{predmet.popis}</p>
              {predmet.id === "matematika" ? (
                <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <Link
                    href="/matematika/zs"
                    className="font-medium text-sky-700 hover:underline"
                  >
                    Všechny kapitoly ZŠ →
                  </Link>
                  <Link
                    href="/matematika/zs/poradi-operaci"
                    className="font-medium text-slate-600 hover:text-sky-700 hover:underline"
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
                  className="flex flex-col rounded-xl border border-slate-100 bg-slate-50/80 p-4 transition duration-200 ease-out hover:border-slate-200 hover:bg-white hover:shadow-md motion-reduce:transition-none"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {r.rocnik}. třída
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                    {r.temata.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
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
