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
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href="/matematika/teorie"
          className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
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
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Teoretické lekce</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Každá kapitola má perex, strukturované pojmy a vysvětlení „proč to tak je“.
          Kompletní rozcestník s úvodem je na stránce{" "}
          <Link href="/matematika/teorie" className="font-medium text-cyan-400 hover:underline">
            Teoretické minimum — matematika
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

      <section className="mt-10 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
        <h2 className="text-lg font-semibold text-white">Články a výuka po ročnících</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          U prvního stupně druhého stupně máme samostatnou kapitolu{" "}
          <Link href="/matematika/zs/poradi-operaci" className="text-cyan-400 hover:underline">
            Pořadí operací
          </Link>
          . Interaktivní úlohy podle učebních témat jsou ve{" "}
          <Link href="/vyuka/matematika/zs/5" className="text-cyan-400 hover:underline">
            výuce podle ročníku
          </Link>{" "}
          a v obecném{" "}
          <Link href="/procvicovani" className="text-fuchsia-400 hover:underline">
            procvičování
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
