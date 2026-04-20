import Link from "next/link";
import { SubjectCard } from "@/components/SubjectCard";

export default function Home() {
  return (
    <div>
      <section className="relative border-b border-white/5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400/90">
            Pro žáky ZŠ a SŠ
          </p>
          <h1 className="mt-4 max-w-3xl text-[clamp(1.85rem,4.5vw+0.5rem,3.25rem)] font-semibold leading-[1.1] tracking-tight text-white">
            Uč se matematiku, fyziku a chemii{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              srozumitelně a v praxi
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Výklad podle ročníků, mapa témat a generované příklady — můžeš trénovat
            tak dlouho, jak potřebuješ, s okamžitou zpětnou vazbou.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/procvicovani"
              className="inline-flex min-h-11 min-w-[10rem] items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Procvičování
            </Link>
            <Link
              href="/vyuka"
              className="inline-flex min-h-11 min-w-[10rem] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/10"
            >
              Výuka podle ročníku
            </Link>
            <Link
              href="/#predmety"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-6 text-sm font-semibold text-fuchsia-100 transition hover:bg-fuchsia-500/20"
            >
              Vybrat předmět
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Druhý stupeň základní školy
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Přehled témat 5.–9. třídy — propojený s výukou a procvičováním.
            </p>
          </div>
          <Link
            href="/zakladni-skola"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Mapa témat ZŠ →
          </Link>
        </div>
      </section>

      <section
        id="predmety"
        className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Předměty
        </h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          U každého předmětu najdeš teoretické lekce, výuku po třídách a procvičování.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <SubjectCard
            href="/matematika"
            title="Matematika"
            grades="2. stupeň ZŠ a SŠ"
            description="Od zlomků a rovnic přes funkce až po nástroje pro SŠ — s příklady a generátory."
            accent="sky"
          />
          <SubjectCard
            href="/fyzika"
            title="Fyzika"
            grades="2. stupeň ZŠ a SŠ"
            description="Mechanika, teplo, elektřina, vlny i moderní fyzika — intuitivně a propojeně."
            accent="violet"
          />
          <SubjectCard
            href="/chemie"
            title="Chemie"
            grades="2. stupeň ZŠ a SŠ"
            description="Prvky, reakce, stechiometrie i organika — bez zbytečného žargonu."
            accent="emerald"
          />
        </div>
      </section>

      <section className="border-y border-white/5 bg-slate-900/30">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Co tu najdeš
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Výuka po ročnících (ZŠ 5–9, SŠ 1–4)",
              "Teoretické minimum — lekce podle předmětu",
              "Procvičování včetně úloh jen k vybrané kapitole",
              "Mapa témat druhého stupně ZŠ",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-slate-300 transition hover:border-cyan-500/30"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300"
                  aria-hidden
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="o-projektu" className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          O projektu
        </h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-slate-400">
          Materiály na čtení doma, opakování vlastním tempem a okamžitou zpětnou vazbou
          u procvičování.           Přehled témat 5.–9. třídy je v{" "}
          <Link href="/zakladni-skola" className="font-medium text-cyan-400 hover:underline">
            mapě témat ZŠ
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
