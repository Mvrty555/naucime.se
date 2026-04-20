import Link from "next/link";
import type { TeorieClanek } from "@/types/teorie";

type Accent = "cyan" | "fuchsia" | "emerald";

const borderHover: Record<Accent, string> = {
  cyan: "hover:border-cyan-500/35",
  fuchsia: "hover:border-fuchsia-500/35",
  emerald: "hover:border-emerald-500/35",
};

const cta: Record<Accent, string> = {
  cyan: "text-cyan-400",
  fuchsia: "text-fuchsia-400",
  emerald: "text-emerald-400",
};

type Props = {
  clanky: TeorieClanek[];
  /** Např. `/matematika/teorie` — ke každému článku se přidá `/id` */
  basePath: string;
  accent: Accent;
  /** CSS třídy pro `<ul>` (např. mezery) */
  className?: string;
};

export function TeorieClankyList({ clanky, basePath, accent, className }: Props) {
  const root = basePath.replace(/\/$/, "");
  return (
    <ul className={className ?? "space-y-3"}>
      {clanky.map((c) => (
        <li key={c.id}>
          <Link
            href={`${root}/${c.id}`}
            className={`block rounded-2xl border border-white/10 bg-slate-900/50 p-5 transition ${borderHover[accent]} hover:bg-slate-900/80`}
          >
            <span className="font-semibold text-white">{c.nazev}</span>
            {c.uroven ? (
              <span className="ml-2 text-xs font-medium text-slate-500">· {c.uroven}</span>
            ) : null}
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.perex}</p>
            <span className={`mt-3 inline-block text-sm font-medium ${cta[accent]}`}>
              Číst teorii →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
