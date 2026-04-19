import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <div className="border-b border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="flex flex-wrap gap-3 text-sm font-medium text-sky-700">
          <Link href="/vyuka" className="hover:underline">
            ← Výuka podle ročníku
          </Link>
          <span className="text-slate-300" aria-hidden>
            |
          </span>
          <Link href={`/${predmet}`} className="hover:underline">
            {predLabel}
          </Link>
        </nav>

        <p className="mt-6 text-sm font-medium uppercase tracking-wide text-sky-700">
          {predLabel} · {stupLabel}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {stranka.nadpis}
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">{rocnikTxt}</p>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{stranka.uvod}</p>

        <div className="mt-10 flex flex-wrap gap-2 text-sm">
          <span className="text-slate-500">Skok na ročník:</span>
          {(stupe === "zs" ? [5, 6, 7, 8, 9] : [1, 2, 3, 4]).map((r) => (
            <Link
              key={r}
              href={`/vyuka/${predmet}/${stupe}/${r}`}
              className={`rounded-full px-3 py-1 font-medium ${
                r === rocnik
                  ? "bg-sky-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-sky-300"
              }`}
            >
              {stupe === "zs" ? `${r}. tř.` : `${r}. r.`}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-10 px-4 pb-20 sm:px-6">
        {stranka.lekce.map((lekce) => (
          <LekceSekce key={lekce.id} lekce={lekce} />
        ))}
      </div>
    </div>
  );
}
