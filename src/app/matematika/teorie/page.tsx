import type { Metadata } from "next";
import Link from "next/link";
import { TeorieClankyList } from "@/components/teorie/TeorieClankyList";
import { matematikaTeorieClanky } from "@/data/teorie/matematika-teorie";

export const metadata: Metadata = {
  title: "Teoretické minimum — matematika",
  description:
    "Poměry, procenta, lineární funkce: zápisy, jednotky myšlení a vysvětlení souvislostí pro ZŠ.",
};

export default function MatematikaTeorieHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/matematika"
        className="text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
      >
        ← Matematika
      </Link>
      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-cyan-400/90">
        Teoretické minimum
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Matematika — pojmy a zápisy
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-400">
        Stejná struktura jako u fyziky: co značíme, v jakých „jednotkách myšlení“ počítáme
        a proč vztahy platí — ne jen jak je opsat.
      </p>

      <TeorieClankyList
        clanky={matematikaTeorieClanky}
        basePath="/matematika/teorie"
        accent="cyan"
        className="mt-10 space-y-3"
      />
    </div>
  );
}
