import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pořadí operací (5. třída)",
  description:
    "Jak vyhodnotit výraz se sčítáním, odčítáním, násobením a dělením: pořadí operací a závorky pro žáky ZŠ.",
};

export default function PoradiOperaciPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="text-sm font-medium text-cyan-400">
        <Link href="/matematika/zs" className="hover:text-cyan-300 hover:underline">
          ← Matematika pro ZŠ
        </Link>
      </nav>

      <header className="mt-8 border-b border-white/10 pb-8">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-400/90">
          Matematika · 5. třída
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Pořadí operací a závorky
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-400">
          Když v jednom řádku potkáš plus, krát a děleno, není jedno, odkud začneš.
          Pár pravidel ti ušetří zmatek — a hlavně stejný výsledek jako spolužákovi
          vedle.
        </p>
      </header>

      <div className="mt-10 max-w-none space-y-8 text-slate-300 [&_h2]:mt-0 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_p]:leading-relaxed">
        <section aria-labelledby="pojmy">
          <h2 id="pojmy">Co si zapamatovat</h2>
          <p>
            <strong className="text-slate-100">Závorky</strong> mají vždycky přednost:
            co je uvnitř, vyřešíš jako malý výraz zvlášť, než se vrátíš k okolí.
          </p>
          <p>
            <strong className="text-slate-100">Násobení a dělení</strong> patří k sobě
            — děláš je dřív než sčítání a odčítání. Když jsou vedle sebe, jdeš zleva
            doprava, jak přicházejí.
          </p>
          <p>
            <strong className="text-slate-100">Sčítání a odčítání</strong> na závěr,
            taky zleva doprava, když po sobě následují.
          </p>
          <p className="rounded-xl border border-cyan-500/25 bg-cyan-950/30 px-4 py-3 text-slate-200">
            Zkrátka:{" "}
            <span className="font-semibold text-cyan-200">
              závorky → krát a děleno → plus a mínus
            </span>
            . Není potřeba nic složitého zpívat, stačí to párkrát zkusit na papíře.
          </p>
        </section>

        <section aria-labelledby="priklady">
          <h2 id="priklady">Projdeme tři příklady</h2>
          <p>
            <strong className="text-slate-100">1)</strong> Výraz{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-cyan-200">
              2 + 3 × 4
            </code>
            . Násobení dřív:{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">
              3 × 4 = 12
            </code>
            , pak{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">
              2 + 12 = 14
            </code>
            . Kdybys šel zleva „jen tak“, dostal bys jiné číslo — proto pravidlo
            dává smysl.
          </p>
          <p>
            <strong className="text-slate-100">2)</strong>{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">
              18 − 12 ÷ 3
            </code>
            . Dělení první:{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">
              12 ÷ 3 = 4
            </code>
            , pak{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">
              18 − 4 = 14
            </code>
            .
          </p>
          <p>
            <strong className="text-slate-100">3)</strong>{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">
              (5 + 3) × 2
            </code>
            . V závorce{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">
              5 + 3 = 8
            </code>
            , krát dvě je{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">
              16
            </code>
            . Kdyby závorky nebyly, vyšlo by zleva doprava jinak — závorka říká:
            „tohle patří k sobě jako celek“.
          </p>
        </section>

        <section aria-labelledby="chyby">
          <h2 id="chyby">Časté omyly</h2>
          <ul className="list-inside list-disc space-y-2 marker:text-cyan-500">
            <li>
              Počítat všechno čistě zleva doprava — u krát a děleno to neplatí.
            </li>
            <li>
              Zapomenout, že mínus před závorkou mění znaménka uvnitř, až závorku
              „rozbiješ“ (to přijde později častěji u delších výrazů).
            </li>
            <li>
              Spěchat bez zápisu mezikroků: malý překlep v hlavě pak najednou
              změní celý výsledek.
            </li>
          </ul>
        </section>

        <section
          aria-labelledby="procviceni"
          className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
        >
          <h2 id="procviceni" className="mt-0">
            Zkus to sám
          </h2>
          <p className="text-sm text-slate-400">
            Vypočíti bez kalkulačky. Řešení najdeš pod každou úlohou (rozklikni).
          </p>
          <ol className="mt-4 list-inside list-decimal space-y-4 text-slate-200">
            <li>
              <span className="font-medium">6 + 2 × 5</span>
              <details className="mt-2 ml-6 rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm">
                <summary className="cursor-pointer font-medium text-cyan-400">
                  Ukázat řešení
                </summary>
                <p className="mt-2 text-slate-300">
                  2 × 5 = 10, pak 6 + 10 = <strong className="text-white">16</strong>.
                </p>
              </details>
            </li>
            <li>
              <span className="font-medium">20 ÷ 4 + 1</span>
              <details className="mt-2 ml-6 rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm">
                <summary className="cursor-pointer font-medium text-cyan-400">
                  Ukázat řešení
                </summary>
                <p className="mt-2 text-slate-300">
                  20 ÷ 4 = 5, pak 5 + 1 = <strong className="text-white">6</strong>.
                </p>
              </details>
            </li>
            <li>
              <span className="font-medium">(10 − 4) ÷ 2</span>
              <details className="mt-2 ml-6 rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm">
                <summary className="cursor-pointer font-medium text-cyan-400">
                  Ukázat řešení
                </summary>
                <p className="mt-2 text-slate-300">
                  V závorce 10 − 4 = 6, pak 6 ÷ 2 ={" "}
                  <strong className="text-white">3</strong>.
                </p>
              </details>
            </li>
          </ol>
        </section>

        <p className="text-sm text-slate-500">
          Tato kapitola je psaná přímo pro Naučíme.se jako ukázka stylu výuky. Obecné
          matematické pojmy (operace, závorky) jsou běžně vyučované — formulace a
          příklady jsou vlastní.
        </p>
      </div>
    </article>
  );
}
