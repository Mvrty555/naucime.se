import type { Metadata } from "next";
import Link from "next/link";
import { TeorieClankyList } from "@/components/teorie/TeorieClankyList";
import { fyzikaTeorieClanky } from "@/data/teorie/fyzika-teorie";

export const metadata: Metadata = {
  title: "Fyzika",
  description:
    "Fyzika pro ZŠ a SŠ — teoretické lekce (rychlost, síla, energie…), výuka po ročnících a procvičování.",
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
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Teoretické lekce</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Veličiny, jednotky SI, vzorce a časté omyly. Společný úvod ke všem kapitolám:{" "}
          <Link href="/fyzika/teorie" className="font-medium text-cyan-400 hover:underline">
            Teoretické minimum
          </Link>
          .
        </p>
        <TeorieClankyList
          clanky={fyzikaTeorieClanky}
          basePath="/fyzika/teorie"
          accent="fuchsia"
          className="mt-6 space-y-3"
        />
      </section>

      <p className="mt-10 text-sm text-slate-500">
        <Link href="/vyuka/fyzika/zs/5" className="text-cyan-400 hover:underline">
          Výuka podle ročníku
        </Link>
        {" · "}
        <Link href="/procvicovani" className="text-fuchsia-400 hover:underline">
          Procvičování
        </Link>
        {" · "}
        <Link href="/zakladni-skola#fyzika" className="text-slate-400 hover:text-slate-300 hover:underline">
          Mapa témat ZŠ
        </Link>
      </p>
    </div>
  );
}
