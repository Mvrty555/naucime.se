import type { Metadata } from "next";
import Link from "next/link";
import { DoucovaniKontaktForm } from "@/components/doucovani/DoucovaniKontaktForm";
import { predmetLabelsDoucovani } from "@/data/doucovani";
import { getPublicLecturers } from "@/lib/lektors";

export const metadata: Metadata = {
  title: "Doučování",
  description:
    "Doučování matematiky, fyziky a chemie — naši učitelé a kontaktní formulář (Naučíme.se).",
};

export const dynamic = "force-dynamic";

export default async function DoucovaniPage() {
  const ucitele = await getPublicLecturers();

  return (
    <div className="relative border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/12 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300 hover:underline"
        >
          ← Zpět na úvod
        </Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400/90">
          Doučování
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Individuální doučování
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
          Spojení s lektorem podle předmětu a ročníku. Níže najdeš náš tým a formulář —
          zpráva dorazí provozovateli a ozveme se na tvůj e-mail.
        </p>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">Naši učitelé</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Kontakt a rozvrh domluvíme individuálně podle předmětu a ročníku. Lektoři se spravují v
            administraci webu.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {ucitele.length === 0 ? (
              <li className="text-sm text-slate-500 sm:col-span-2">
                Zatím žádní aktivní lektoři v databázi — po nasazení PostgreSQL spusť seed (
                <code className="text-slate-400">npm run db:seed</code>) nebo je přidej v /admin.
              </li>
            ) : (
              ucitele.map((u) => (
                <li
                  key={u.id}
                  className="rounded-2xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-white">{u.jmeno}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-cyan-400/90">
                    {u.predmety.map((p) => predmetLabelsDoucovani[p]).join(" · ")}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{u.popis}</p>
                  <p className="mt-3 text-xs text-slate-500">{u.format}</p>
                </li>
              ))
            )}
          </ul>
        </section>

        <div className="mt-14 max-w-3xl">
          <DoucovaniKontaktForm ucitele={ucitele} />
        </div>
      </div>
    </div>
  );
}
