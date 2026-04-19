import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chemie",
  description:
    "Chemie pro ZŠ a SŠ — témata, vysvětlení a cvičení. Obsah postupně doplňujeme.",
};

export default function ChemiePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="text-sm font-medium text-sky-700 hover:underline"
      >
        ← Zpět na úvod
      </Link>
      <p className="mt-6 text-sm font-medium uppercase tracking-wide text-emerald-700">
        Předmět
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Chemie
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        Periodická soustava, chemické reakce, látkové množství, roztoky i úvod do
        organické chemie — srozumitelně pro studenty, kteří chtějí pochopit „proč“,
        ne jen nazpamovat.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href="/vyuka/chemie/zs/5"
          className="font-medium text-sky-700 hover:underline"
        >
          Výuka po ročnících (ZŠ + SŠ) →
        </Link>
        <Link
          href="/zakladni-skola#chemie"
          className="font-medium text-slate-600 hover:text-emerald-700 hover:underline"
        >
          Mapa témat 5.–9. třída →
        </Link>
      </div>
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Obsah připravujeme</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Tématické okruhy, bezpečnost v laboratoři a procvičování stechiometrie
          a názvosloví přidáme postupně.
        </p>
      </div>
    </div>
  );
}
