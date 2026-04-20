import type { Metadata } from "next";
import Link from "next/link";
import { TeorieClankyList } from "@/components/teorie/TeorieClankyList";
import { chemieTeorieClanky } from "@/data/teorie/chemie-teorie";

export const metadata: Metadata = {
  title: "Chemie",
  description:
    "Chemie pro ZŠ a SŠ — teoretické lekce (mol, koncentrace…), výuka po ročnících a procvičování.",
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
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Teoretické lekce</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Mol, látkové množství a koncentrace v souvislostech. Společný úvod:{" "}
          <Link href="/chemie/teorie" className="font-medium text-emerald-400 hover:underline">
            Teoretické minimum
          </Link>
          .
        </p>
        <TeorieClankyList
          clanky={chemieTeorieClanky}
          basePath="/chemie/teorie"
          accent="emerald"
          className="mt-6 space-y-3"
        />
      </section>

      <p className="mt-10 text-sm text-slate-500">
        <Link href="/vyuka/chemie/zs/5" className="text-emerald-400 hover:underline">
          Výuka podle ročníku
        </Link>
        {" · "}
        <Link href="/procvicovani" className="text-fuchsia-400 hover:underline">
          Procvičování
        </Link>
        {" · "}
        <Link href="/zakladni-skola#chemie" className="text-slate-400 hover:text-slate-300 hover:underline">
          Mapa témat ZŠ
        </Link>
      </p>
    </div>
  );
}
