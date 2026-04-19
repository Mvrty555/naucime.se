import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matematika",
  description:
    "Matematika pro ZŠ a SŠ — témata, vysvětlení a cvičení. Obsah postupně doplňujeme.",
};

export default function MatematikaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
      >
        ← Zpět na úvod
      </Link>
      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-cyan-400/90">
        Předmět
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Matematika
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-400">
        Sekce pro druhý stupeň základní školy a střední školy: čísla, algebra,
        geometrie, funkce, pravděpodobnost a další témata podle osnov —
        srozumitelná vysvětlení a interaktivní cvičení.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href="/procvicovani"
          className="font-semibold text-fuchsia-400 hover:text-fuchsia-300 hover:underline"
        >
          Procvičování →
        </Link>
        <Link
          href="/matematika/zs"
          className="font-medium text-cyan-400 hover:underline"
        >
          Kapitoly pro ZŠ →
        </Link>
        <Link
          href="/zakladni-skola#matematika"
          className="font-medium text-slate-500 hover:text-slate-300 hover:underline"
        >
          Mapa témat 5.–9. třída →
        </Link>
      </div>
      <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
        <h2 className="text-lg font-semibold text-white">Obsah připravujeme</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Jednotlivá témata, stránky s výkladem a generátory úloh budeme přidávat
          postupně. Tato stránka je výchozí rozcestník pro celou matematiku na
          Naučíme.se.
        </p>
      </div>
    </div>
  );
}
