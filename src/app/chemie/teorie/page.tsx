import type { Metadata } from "next";
import Link from "next/link";
import { chemieTeorieClanky } from "@/data/teorie/chemie-teorie";

export const metadata: Metadata = {
  title: "Teoretické minimum — chemie",
  description:
    "Mol, látkové množství, koncentrace: značky, jednotky a vysvětlení vztahů pro ZŠ a začátek SŠ.",
};

export default function ChemieTeorieHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/chemie"
        className="text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
      >
        ← Chemie
      </Link>
      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-emerald-400/90">
        Teoretické minimum
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Chemie — veličiny a modely
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-400">
        Spojení mikrosvěta (částice, mol) s tím, co měříš na váze a v odměrném válci.
        U každého tématu je prostor pro aktivitu a typické záměny.
      </p>

      <ul className="mt-10 space-y-3">
        {chemieTeorieClanky.map((c) => (
          <li key={c.id}>
            <Link
              href={`/chemie/teorie/${c.id}`}
              className="block rounded-2xl border border-white/10 bg-slate-900/50 p-5 transition hover:border-emerald-500/35 hover:bg-slate-900/80"
            >
              <span className="font-semibold text-white">{c.nazev}</span>
              <p className="mt-2 text-sm text-slate-400">{c.perex}</p>
              <span className="mt-3 inline-block text-sm font-medium text-emerald-400">
                Číst teorii →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
