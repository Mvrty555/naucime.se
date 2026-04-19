import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fyzika",
  description:
    "Fyzika pro ZŠ a SŠ — témata, vysvětlení a cvičení. Obsah postupně doplňujeme.",
};

export default function FyzikaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="text-sm font-medium text-sky-700 hover:underline"
      >
        ← Zpět na úvod
      </Link>
      <p className="mt-6 text-sm font-medium uppercase tracking-wide text-violet-700">
        Předmět
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Fyzika
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        Od kinematiky a dynamiky přes energii, vlny a elektřinu až po střípky
        moderní fyziky — vždy s důrazem na intuici, jednotky a souvislosti mezi
        pojmy.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href="/vyuka/fyzika/zs/5"
          className="font-medium text-sky-700 hover:underline"
        >
          Výuka po ročnících (ZŠ + SŠ) →
        </Link>
        <Link
          href="/zakladni-skola#fyzika"
          className="font-medium text-slate-600 hover:text-sky-700 hover:underline"
        >
          Mapa témat 5.–9. třída →
        </Link>
      </div>
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Obsah připravujeme</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Kapitoly podle školních témat, ilustrace a úlohy s kontrolou řešení
          doplníme v dalších iteracích webu.
        </p>
      </div>
    </div>
  );
}
