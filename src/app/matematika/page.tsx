import type { Metadata } from "next";
import Link from "next/link";
import { TeorieClankyList } from "@/components/teorie/TeorieClankyList";
import { matematikaTeorieClanky } from "@/data/teorie/matematika-teorie";

export const metadata: Metadata = {
  title: "Matematika",
  description:
    "Matematika pro ZŠ a SŠ — teoretické lekce (poměry, procenta, lineární funkce), výuka po ročnících a procvičování.",
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
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Teoretické lekce</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Každá kapitola má perex, strukturované pojmy a vysvětlení „proč to tak je“.
          Delší společný úvod je na stránce{" "}
          <Link href="/matematika/teorie" className="font-medium text-cyan-400 hover:underline">
            Teoretické minimum
          </Link>
          .
        </p>
        <TeorieClankyList
          clanky={matematikaTeorieClanky}
          basePath="/matematika/teorie"
          accent="cyan"
          className="mt-6 space-y-3"
        />
      </section>

      <p className="mt-10 text-sm text-slate-500">
        <Link href="/vyuka/matematika/zs/5" className="text-cyan-400 hover:underline">
          Výuka podle ročníku
        </Link>
        {" · "}
        <Link href="/procvicovani" className="text-fuchsia-400 hover:underline">
          Procvičování
        </Link>
        {" · "}
        <Link href="/matematika/zs" className="text-cyan-400 hover:underline">
          Články pro ZŠ
        </Link>
        {" · "}
        <Link href="/matematika/zs/poradi-operaci" className="text-cyan-400 hover:underline">
          Pořadí operací
        </Link>
        {" · "}
        <Link href="/zakladni-skola#matematika" className="text-slate-400 hover:text-slate-300 hover:underline">
          Mapa témat ZŠ
        </Link>
      </p>
    </div>
  );
}
