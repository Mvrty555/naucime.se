import type { Metadata } from "next";
import Link from "next/link";
import { TeorieClankyList } from "@/components/teorie/TeorieClankyList";
import { fyzikaTeorieClanky } from "@/data/teorie/fyzika-teorie";

export const metadata: Metadata = {
  title: "Teoretické minimum — fyzika",
  description:
    "Přehled veličin: značky, jednotky SI, vzorce, varianty a vysvětlení „proč to tak je“ — srozumitelně pro ZŠ a začátek SŠ.",
};

export default function FyzikaTeorieHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/fyzika"
        className="text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
      >
        ← Fyzika
      </Link>
      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-fuchsia-400/90">
        Teoretické minimum
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Fyzika — veličiny a vzorce
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-400">
        Každá kapitola spojuje název, značku, jednotku, zápis v SI, základní vzorce a
        krátké vysvětlení příčiny. Uprostřed je aktivita (něco zkusit) a sekce o častých
        omylech — učení funguje líp, když víš, kde většina lidí zakopne.
      </p>

      <TeorieClankyList
        clanky={fyzikaTeorieClanky}
        basePath="/fyzika/teorie"
        accent="fuchsia"
        className="mt-10 space-y-3"
      />
    </div>
  );
}
