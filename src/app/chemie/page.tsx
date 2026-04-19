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
        className="text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
      >
        ← Zpět na úvod
      </Link>
      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-emerald-400/90">
        Předmět
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Chemie
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-400">
        Periodická soustava, chemické reakce, látkové množství, roztoky i úvod do
        organické chemie — srozumitelně pro studenty, kteří chtějí pochopit „proč“,
        ne jen nazpamovat.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href="/chemie/teorie"
          className="font-semibold text-emerald-400 hover:text-emerald-300 hover:underline"
        >
          Teoretické minimum →
        </Link>
        <Link
          href="/procvicovani"
          className="font-semibold text-fuchsia-400 hover:text-fuchsia-300 hover:underline"
        >
          Procvičování →
        </Link>
        <Link
          href="/vyuka/chemie/zs/5"
          className="font-medium text-cyan-400 hover:underline"
        >
          Výuka po ročnících (ZŠ + SŠ) →
        </Link>
        <Link
          href="/zakladni-skola#chemie"
          className="font-medium text-slate-500 hover:text-slate-300 hover:underline"
        >
          Mapa témat 5.–9. třída →
        </Link>
      </div>
      <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
        <h2 className="text-lg font-semibold text-white">Obsah připravujeme</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Tématické okruhy, bezpečnost v laboratoři a procvičování stechiometrie
          a názvosloví přidáme postupně.
        </p>
      </div>
    </div>
  );
}
