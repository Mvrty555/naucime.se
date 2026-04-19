import Link from "next/link";
import type { Lekce } from "@/types/vyuka";
import { InteraktivniCviceni } from "./InteraktivniCviceni";

export function LekceSekce({ lekce }: { lekce: Lekce }) {
  return (
    <section
      id={lekce.id}
      className="scroll-mt-28 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
        {lekce.nazev}
      </h2>
      <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
        {lekce.odstavce.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {lekce.odkazNaClanek ? (
        <p className="mt-4">
          <Link
            href={lekce.odkazNaClanek.href}
            className="text-sm font-semibold text-sky-700 hover:underline"
          >
            {lekce.odkazNaClanek.label} →
          </Link>
        </p>
      ) : null}
      {lekce.cviceni.length > 0 ? (
        <div className="mt-8 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Interaktivní cvičení
          </h3>
          {lekce.cviceni.map((c, i) => (
            <InteraktivniCviceni key={i} cviceni={c} poradi={i + 1} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
