import type { Metadata } from "next";
import Link from "next/link";
import { TeorieClankyList } from "@/components/teorie/TeorieClankyList";
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

      <TeorieClankyList
        clanky={chemieTeorieClanky}
        basePath="/chemie/teorie"
        accent="emerald"
        className="mt-10 space-y-3"
      />
    </div>
  );
}
