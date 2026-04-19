import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PracticeArena } from "@/components/practice/PracticeArena";
import { LekceSekce } from "@/components/vyuka/LekceSekce";
import {
  getVyukaStranka,
  jePlatnyRocnik,
  predmetLabels,
  stupeLabels,
  vsechnyVyukaStatickeCesty,
} from "@/data/vyuka/registry";
import type { PredmetVyuka, StupeVyuka } from "@/types/vyuka";

type Params = { predmet: string; stupe: string; rocnik: string };

function parsePredmet(v: string): PredmetVyuka | null {
  if (v === "matematika" || v === "fyzika" || v === "chemie") return v;
  return null;
}

function parseStupe(v: string): StupeVyuka | null {
  if (v === "zs" || v === "ss") return v;
  return null;
}

export function generateStaticParams(): Params[] {
  return vsechnyVyukaStatickeCesty().map(({ predmet, stupe, rocnik }) => ({
    predmet,
    stupe,
    rocnik,
  }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const params = await props.params;
  const predmet = parsePredmet(params.predmet);
  const stupe = parseStupe(params.stupe);
  const rocnik = Number(params.rocnik);
  if (!predmet || !stupe || !jePlatnyRocnik(stupe, rocnik)) {
    return { title: "Nenalezeno" };
  }
  const stranka = getVyukaStranka(predmet, stupe, rocnik);
  if (!stranka) return { title: "Nenalezeno" };
  return {
    title: stranka.nadpis,
    description: stranka.podnadpis,
  };
}

export default async function VyukaRocnikPage(props: { params: Promise<Params> }) {
  const params = await props.params;
  const predmet = parsePredmet(params.predmet);
  const stupe = parseStupe(params.stupe);
  const rocnik = Number(params.rocnik);

  if (!predmet || !stupe || !jePlatnyRocnik(stupe, rocnik)) notFound();

  const stranka = getVyukaStranka(predmet, stupe, rocnik);
  if (!stranka) notFound();

  const predLabel = predmetLabels[predmet];
  const stupLabel = stupeLabels[stupe];
  const rocnikTxt =
    stupe === "zs" ? `${rocnik}. třída ZŠ` : `${rocnik}. ročník SŠ`;

  return (
    <div className="relative border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="flex flex-wrap gap-3 text-sm font-medium text-cyan-400">
          <Link href="/vyuka" className="hover:text-cyan-300 hover:underline">
            ← Výuka podle ročníku
          </Link>
          <span className="text-slate-600" aria-hidden>
            |
          </span>
          <Link href={`/${predmet}`} className="hover:text-cyan-300 hover:underline">
            {predLabel}
          </Link>
        </nav>

        <p className="mt-6 text-xs font-bold uppercase tracking-wider text-cyan-400/80">
          {predLabel} · {stupLabel}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {stranka.nadpis}
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">{rocnikTxt}</p>
        <p className="mt-4 text-lg leading-relaxed text-slate-400">{stranka.uvod}</p>

        <div className="mt-10 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-slate-500">Skok na ročník:</span>
          {(stupe === "zs" ? [5, 6, 7, 8, 9] : [1, 2, 3, 4]).map((r) => (
            <Link
              key={r}
              href={`/vyuka/${predmet}/${stupe}/${r}`}
              className={`rounded-full px-3 py-1 font-medium transition ${
                r === rocnik
                  ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "border border-white/10 bg-slate-900/60 text-slate-300 hover:border-cyan-500/40"
              }`}
            >
              {stupe === "zs" ? `${r}. tř.` : `${r}. r.`}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl space-y-10 px-4 pb-12 sm:px-6">
        {stranka.lekce.map((lekce) => (
          <LekceSekce key={lekce.id} lekce={lekce} />
        ))}
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <PracticeArena
          predmet={predmet}
          stupe={stupe}
          rocnik={rocnik}
          kompaktni
        />
      </div>
    </div>
  );
}
