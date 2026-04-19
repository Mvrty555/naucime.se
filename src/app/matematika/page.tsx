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
        className="text-sm font-medium text-sky-700 hover:underline"
      >
        ← Zpět na úvod
      </Link>
      <p className="mt-6 text-sm font-medium uppercase tracking-wide text-sky-700">
        Předmět
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Matematika
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        Sekce pro druhý stupeň základní školy a střední školy: čísla, algebra,
        geometrie, funkce, pravděpodobnost a další témata podle osnov — srozumitelná
        vysvětlení a připravovaná interaktivní cvičení.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href="/matematika/zs"
          className="font-medium text-sky-700 hover:underline"
        >
          Kapitoly pro ZŠ →
        </Link>
        <Link
          href="/zakladni-skola#matematika"
          className="font-medium text-slate-600 hover:text-sky-700 hover:underline"
        >
          Mapa témat 5.–9. třída →
        </Link>
      </div>
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Obsah připravujeme</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Jednotlivá témata, stránky s výkladem a generátory úloh budeme přidávat
          postupně. Tato stránka je výchozí rozcestník pro celou matematiku na
          Naučíme.se.
        </p>
      </div>
    </div>
  );
}
