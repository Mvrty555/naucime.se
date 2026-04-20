import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matematika — základní škola",
  description:
    "Výukové kapitoly z matematiky pro žáky 2. stupně ZŠ na Naučíme.se — od pořadí operací po další témata.",
};

const kapitoly = [
  {
    href: "/matematika/zs/poradi-operaci",
    nazev: "Pořadí operací a závorky",
    rocnik: "5. třída",
    popis:
      "Jak si rozumně seřadíš sčítání, odčítání, násobení a dělení v jednom výrazu — bez zbytečného stressu.",
  },
] as const;

export default function MatematikaZsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/matematika"
        className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300 hover:underline"
      >
        ← Matematika
      </Link>
      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-cyan-400/90">
        Základní škola
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Matematika pro ZŠ
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-400">
        Krátké kapitoly, které můžeš číst po kouscích. Každá má příklady z vlastní
        hlavy (žádné přepsané učebnice) a na závěr pár úloh na zkoušku pochopení. Úplný
        přehled podle ročníků a RVP je na stránce{" "}
        <Link href="/matematika" className="font-medium text-cyan-400 hover:underline">
          Matematika
        </Link>
        .
      </p>
      <p className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/vyuka/matematika/zs/5"
          className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
        >
          Ročníky s interaktivními úlohami →
        </Link>
        <Link
          href="/procvicovani"
          className="inline-flex items-center rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-5 py-2.5 text-sm font-semibold text-fuchsia-200 transition hover:bg-fuchsia-500/20"
        >
          Procvičování
        </Link>
      </p>

      <ul className="mt-10 space-y-4">
        {kapitoly.map((k) => (
          <li key={k.href}>
            <Link
              href={k.href}
              className="block rounded-2xl border border-white/10 bg-slate-900/50 p-5 transition hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-950/20"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold text-white">{k.nazev}</h2>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {k.rocnik}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{k.popis}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-cyan-400">
                Číst kapitolu →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-slate-500">
        Další kapitoly přidáme postupně. Kompletní mapu témat podle ročníků najdeš
        na{" "}
        <Link
          href="/zakladni-skola#matematika"
          className="text-cyan-400 hover:underline"
        >
          přehledu ZŠ
        </Link>
        .
      </p>
    </div>
  );
}
