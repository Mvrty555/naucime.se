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
    <div className="relative border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/90">
          Kompletní výuka
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Podle ročníku
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
          Pro každý předmět najdeš stránky pro{" "}
          <strong className="text-slate-200">5.–9. třídu ZŠ</strong> a{" "}
          <strong className="text-slate-200">1.–4. ročník SŠ</strong>. Lekce jsou
          členěné do kroků (výklad → krátká kontrola → další výklad), u každé
          kapitoly je zvlášť generované procvičení jen k danému tématu; obecný mix je
          na stránce <Link href="/procvicovani" className="text-cyan-400 hover:underline">procvičování</Link>.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl space-y-10 px-4 pb-20 sm:px-6">
        {predmety.map((predmet) => (
          <section
            key={predmet}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur sm:p-8"
          >
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              {predmetLabels[predmet]}
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {(["zs", "ss"] as const).map((stupe) => (
                <div key={stupe}>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {stupeLabels[stupe]}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {staticke
                      .filter((x) => x.predmet === predmet && x.stupe === stupe)
                      .map(({ rocnik }) => (
                        <li key={rocnik}>
                          <Link
                            href={slug(predmet, stupe, rocnik)}
                            className="inline-flex min-h-9 min-w-[2.75rem] items-center justify-center rounded-full border border-white/10 bg-slate-950/50 px-3 text-sm font-medium text-slate-200 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-200"
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

      <div className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <p className="text-sm text-slate-500">
          Starší rozcestník kapitoly „Pořadí operací“ zůstává na{" "}
          <Link
            href="/matematika/zs/poradi-operaci"
            className="font-medium text-cyan-400 hover:underline"
          >
            /matematika/zs/poradi-operaci
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
