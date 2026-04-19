import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matematika — základní škola",
  description:
    "Výukové kapitoly z matematiky pro žáky 2. stupně ZŠ na Naučíme.se — od pořadí operací po další témata.",
};

const kapitoly = [
  {
    href: "/matematika/zs/poradi-operaci",
    nazev: "Pořadí operací a závorky",
    rocnik: "5. třída",
    popis:
      "Jak si rozumně seřadíš sčítání, odčítání, násobení a dělení v jednom výrazu — bez zbytečného stressu.",
  },
] as const;

export default function MatematikaZsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/matematika"
        className="text-sm font-medium text-sky-700 transition hover:underline"
      >
        ← Matematika
      </Link>
      <p className="mt-6 text-sm font-medium uppercase tracking-wide text-sky-700">
        Základní škola
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Matematika pro ZŠ
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        Krátké kapitoly, které můžeš číst po kouscích. Každá má příklady z vlastní
        hlavy (žádné přepsané učebnice) a na závěr pár úloh na zkoušku pochopení.
      </p>
      <p className="mt-6">
        <Link
          href="/vyuka/matematika/zs/5"
          className="inline-flex rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
        >
          Všechny ročníky s interaktivními úlohami →
        </Link>
      </p>

      <ul className="mt-10 space-y-4">
        {kapitoly.map((k) => (
          <li key={k.href}>
            <Link
              href={k.href}
              className="block rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-slate-900/[0.03] transition hover:border-sky-200 hover:shadow-md"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-900">{k.nazev}</h2>
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {k.rocnik}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{k.popis}</p>
              <span className="mt-3 inline-block text-sm font-medium text-sky-700">
                Číst kapitolu →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-slate-500">
        Další kapitoly přidáme postupně. Kompletní mapu témat podle ročníků najdeš
        na{" "}
        <Link href="/zakladni-skola#matematika" className="text-sky-700 hover:underline">
          přehledu ZŠ
        </Link>
        .
      </p>
    </div>
  );
}
