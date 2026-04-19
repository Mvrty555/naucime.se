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
        className="text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
      >
        ← Zpět na úvod
      </Link>
      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-fuchsia-400/90">
        Předmět
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Fyzika
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-400">
        Od kinematiky a dynamiky přes energii, vlny a elektřinu až po střípky
        moderní fyziky — vždy s důrazem na intuici, jednotky a souvislosti mezi
        pojmy.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href="/fyzika/teorie"
          className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
        >
          Teoretické minimum (veličiny, vzorce, proč) →
        </Link>
        <Link
          href="/procvicovani"
          className="font-semibold text-fuchsia-400 hover:text-fuchsia-300 hover:underline"
        >
          Procvičování →
        </Link>
        <Link
          href="/vyuka/fyzika/zs/5"
          className="font-medium text-cyan-400 hover:underline"
        >
          Výuka po ročnících (ZŠ + SŠ) →
        </Link>
        <Link
          href="/zakladni-skola#fyzika"
          className="font-medium text-slate-500 hover:text-slate-300 hover:underline"
        >
          Mapa témat 5.–9. třída →
        </Link>
      </div>
      <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
        <h2 className="text-lg font-semibold text-white">Další obsah</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Rozšiřujeme výuku po ročnících, ilustrace a další kapitoly teorie. Začni u
          odkazu „Teoretické minimum“ — je to samostatná větev webu vedle procvičování.
        </p>
      </div>
    </div>
  );
}
