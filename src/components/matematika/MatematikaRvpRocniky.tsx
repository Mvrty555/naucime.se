import Link from "next/link";
import { matematikaRvpRocniky } from "@/data/matematika/rvpRocnikyMatematika";

export function MatematikaRvpRocniky() {
  return (
    <section className="mt-12" aria-labelledby="mat-osnovy-heading">
      <h2
        id="mat-osnovy-heading"
        className="text-lg font-semibold tracking-tight text-white sm:text-xl"
      >
        Obsah podle ročníku (návaznost na RVP ZV a SŠ)
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        Přehled vychází z obvyklé výstavby učiva v českých školách podle{" "}
        <abbr title="Rámcový vzdělávací program pro základní vzdělávání" className="no-underline">
          RVP ZV
        </abbr>{" "}
        (matematika, 2. stupeň) a z návaznosti na střední školu — není to doslovný výpis
        dokumentu. Po rozkliknutí ročníku uvidíš očekávané výstupy a odkazy na lekce na
        Naučíme.se.
      </p>

      <div className="mt-6 space-y-3">
        {matematikaRvpRocniky.map((r) => {
          const vyukaHref = `/vyuka/matematika/${r.stupen}/${r.rocnik}`;
          const summary =
            r.stupen === "zs" ? `${r.rocnik}. třída ZŠ` : `${r.rocnik}. ročník SŠ`;
          return (
            <details
              key={`${r.stupen}-${r.rocnik}`}
              className="group rounded-2xl border border-white/10 bg-slate-900/35 open:border-cyan-500/25 open:bg-slate-900/55"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block text-base font-semibold text-white">{summary}</span>
                  <span className="mt-0.5 block text-xs text-slate-500 sm:text-sm">
                    {r.stupen === "zs" ? "Základní škola" : "Střední škola"} · klikni pro
                    osnovní okruhy
                  </span>
                </span>
                <span
                  className="shrink-0 text-cyan-400 transition group-open:rotate-180"
                  aria-hidden
                >
                  ▼
                </span>
              </summary>
              <div className="border-t border-white/10 px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
                <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {r.rvpPoznamka}
                </p>
                <div className="mt-5 space-y-6">
                  {r.oblasti.map((ob) => (
                    <div key={ob.nazev}>
                      <h3 className="text-sm font-semibold text-cyan-200/95">{ob.nazev}</h3>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-300">
                        {ob.vystupy.map((v) => (
                          <li key={v} className="marker:text-slate-600">
                            {v}
                          </li>
                        ))}
                      </ul>
                      {ob.odkazy && ob.odkazy.length > 0 ? (
                        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                          {ob.odkazy.map((o) => (
                            <li key={o.href}>
                              <Link
                                href={o.href}
                                className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
                              >
                                {o.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  <Link
                    href={vyukaHref}
                    className="inline-flex text-sm font-semibold text-fuchsia-400 hover:text-fuchsia-300 hover:underline"
                  >
                    Otevřít celý ročník ve výuce (lekce + procvičení) →
                  </Link>
                </p>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
