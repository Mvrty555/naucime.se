import type { Metadata } from "next";
import Link from "next/link";
import {
  predmetLabels,
  stupeLabels,
  vsechnyVyukaStatickeCesty,
} from "@/data/vyuka/registry";
import type { PredmetVyuka, StupeVyuka } from "@/types/vyuka";

export const metadata: Metadata = {
  title: "Výuka podle ročníku",
  description:
    "Matematika, fyzika a chemie pro ZŠ (5.–9.) a SŠ (1.–4.) s výkladem a interaktivními úlohami na Naučíme.se.",
};

function slug(p: PredmetVyuka, s: StupeVyuka, r: string) {
  return `/vyuka/${p}/${s}/${r}`;
}

export default function VyukaHubPage() {
  const predmety: PredmetVyuka[] = ["matematika", "fyzika", "chemie"];
  const staticke = vsechnyVyukaStatickeCesty();

  return (
    <div className="border-b border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-wider text-sky-700">
          Kompletní výuka
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Podle ročníku
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          Pro každý předmět najdeš stránky pro{" "}
          <strong>5.–9. třídu ZŠ</strong> a <strong>1.–4. ročník SŠ</strong>. Každá
          stránka obsahuje dvě lekce s vlastním textem a několik interaktivních
          úloh (výběr odpovědi / ano–ne).
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-12 px-4 pb-20 sm:px-6">
        {predmety.map((predmet) => (
          <section
            key={predmet}
            className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              {predmetLabels[predmet]}
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {(["zs", "ss"] as const).map((stupe) => (
                <div key={stupe}>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {stupeLabels[stupe]}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {staticke
                      .filter((x) => x.predmet === predmet && x.stupe === stupe)
                      .map(({ rocnik }) => (
                        <li key={rocnik}>
                          <Link
                            href={slug(predmet, stupe, rocnik)}
                            className="inline-flex min-h-9 min-w-[2.75rem] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900"
                          >
                            {stupe === "zs" ? `${rocnik}. tř.` : `${rocnik}. r.`}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <p className="text-sm text-slate-600">
          Starší rozcestník kapitoly „Pořadí operací“ zůstává na{" "}
          <Link href="/matematika/zs/poradi-operaci" className="font-medium text-sky-700 hover:underline">
            /matematika/zs/poradi-operaci
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
