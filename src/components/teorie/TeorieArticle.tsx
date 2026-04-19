import Link from "next/link";
import type { TeorieClanek } from "@/types/teorie";

type Props = {
  clanek: TeorieClanek;
  zpetHref: string;
  zpetLabel: string;
};

export function TeorieArticle({ clanek, zpetHref, zpetLabel }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400/90">
        Teoretické minimum · {clanek.uroven}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {clanek.nazev}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-slate-400">{clanek.perex}</p>

      <div className="mt-8 space-y-4 leading-relaxed text-slate-300">
        {clanek.motivace.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-12 space-y-12">
        {clanek.veliciny.map((v) => (
          <section
            key={v.nazev}
            className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 sm:p-6"
          >
            <h2 className="text-xl font-semibold text-white">{v.nazev}</h2>

            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-lg border border-white/5 bg-slate-950/60 px-3 py-2">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Značka
                </dt>
                <dd className="mt-1 font-mono text-lg text-cyan-200">{v.znacka}</dd>
              </div>
              <div className="rounded-lg border border-white/5 bg-slate-950/60 px-3 py-2">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Jednotka SI (slovně)
                </dt>
                <dd className="mt-1 text-slate-200">{v.jednotkaSI}</dd>
              </div>
              <div className="rounded-lg border border-white/5 bg-slate-950/60 px-3 py-2 sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Označení jednotky
                </dt>
                <dd className="mt-1 font-mono text-base text-fuchsia-200">{v.jednotkaZnak}</dd>
              </div>
            </dl>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">{v.definice}</p>

            <div className="mt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Vzorce
              </h3>
              <ul className="mt-2 space-y-2">
                {v.vzorce.map((z) => (
                  <li
                    key={z.nazev}
                    className="flex flex-col gap-1 rounded-lg border border-cyan-500/20 bg-cyan-950/20 px-3 py-2 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm text-slate-300">{z.nazev}</span>
                    <code className="text-sm font-mono text-cyan-100">{z.vztah}</code>
                  </li>
                ))}
              </ul>
            </div>

            {v.variantyVzorca && v.variantyVzorca.length > 0 ? (
              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Varianty / jiný zápis
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-slate-300">
                  {v.variantyVzorca.map((x) => (
                    <li key={x.situace} className="rounded-lg border border-white/10 px-3 py-2">
                      <span className="font-medium text-slate-200">{x.situace}: </span>
                      <code className="ml-1 font-mono text-fuchsia-200">{x.vztah}</code>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-6 border-t border-white/10 pt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400/90">
                Proč to tak funguje
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{v.procToTakJe}</p>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-fuchsia-500/25 bg-fuchsia-950/15 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-fuchsia-100">Aktivita (krátká, „zábavná“)</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{clanek.aktivita}</p>
      </section>

      <section className="mt-8 rounded-2xl border border-amber-500/25 bg-amber-950/10 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-amber-100">Časté omyly (nejsi v tom sám)</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-300">
          {clanek.omyly.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </section>

      {clanek.navaznost ? (
        <p className="mt-8 text-sm leading-relaxed text-slate-400">{clanek.navaznost}</p>
      ) : null}

      <p className="mt-10 text-center text-sm">
        <Link href={zpetHref} className="font-medium text-cyan-400 hover:underline">
          {zpetLabel}
        </Link>
      </p>
    </article>
  );
}
