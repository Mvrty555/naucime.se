import Link from "next/link";
import { useMemo } from "react";
import type { Lekce, VyukovyKrok } from "@/types/vyuka";
import type { PredmetVyuka, StupeVyuka } from "@/types/vyuka";
import { getVyukoveKroky } from "@/lib/vyuka/normalizeLekce";
import { InteraktivniCviceni } from "./InteraktivniCviceni";
import { ThematicPracticeBlock } from "./ThematicPracticeBlock";

type Props = {
  lekce: Lekce;
  predmet: PredmetVyuka;
  stupe: StupeVyuka;
  rocnik: number;
};

export function LekceSekce({ lekce, predmet, stupe, rocnik }: Props) {
  const krokySPoradim = useMemo(() => {
    const kroky = getVyukoveKroky(lekce);
    const out: { krok: VyukovyKrok; poradi: number | null }[] = [];
    let p = 0;
    for (const krok of kroky) {
      if (krok.typ === "cviceni") {
        p += 1;
        out.push({ krok, poradi: p });
      } else {
        out.push({ krok, poradi: null });
      }
    }
    return out;
  }, [lekce]);

  return (
    <section
      id={lekce.id}
      className="scroll-mt-28 rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur sm:p-8"
    >
      <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {lekce.nazev}
      </h2>
      {lekce.rvpOdkaz ? (
        <p className="mt-2 rounded-lg border border-cyan-500/20 bg-cyan-950/20 px-3 py-2 text-xs leading-relaxed text-cyan-100/90">
          <span className="font-semibold text-cyan-300">RVP / osnovy: </span>
          {lekce.rvpOdkaz}
        </p>
      ) : null}

      <div className="mt-6 space-y-8">
        {krokySPoradim.map(({ krok, poradi }, idx) => {
          if (krok.typ === "text") {
            return (
              <div
                key={`t-${idx}`}
                className="space-y-4 leading-relaxed text-slate-300"
              >
                {krok.odstavce.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            );
          }
          if (krok.typ === "metoda") {
            return (
              <div
                key={`m-${idx}`}
                className="rounded-xl border border-fuchsia-500/25 bg-fuchsia-950/20 px-4 py-3"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-fuchsia-300">
                  {krok.nazev}
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-slate-300">
                  {krok.body.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            );
          }
          return (
            <div key={`c-${idx}`} className="space-y-2">
              {krok.nazev ? (
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {krok.nazev}
                </p>
              ) : null}
              <InteraktivniCviceni
                cviceni={krok.polozka}
                poradi={poradi as number}
              />
            </div>
          );
        })}
      </div>

      {lekce.odkazNaClanek ? (
        <p className="mt-6">
          <Link
            href={lekce.odkazNaClanek.href}
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
          >
            {lekce.odkazNaClanek.label} →
          </Link>
        </p>
      ) : null}

      <ThematicPracticeBlock
        predmet={predmet}
        stupe={stupe}
        rocnik={rocnik}
        temaId={lekce.id}
        nazevTema={lekce.nazev}
      />
    </section>
  );
}
