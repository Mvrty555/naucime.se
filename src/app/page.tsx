import Link from "next/link";
import { SubjectCard } from "@/components/SubjectCard";

export default function Home() {
  return (
    <div>
      <section className="border-b border-slate-200/90 bg-gradient-to-b from-white via-white to-slate-50/80">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-sky-700">
            Pro žáky ZŠ a SŠ
          </p>
          <h1 className="mt-3 max-w-3xl text-[clamp(1.75rem,4vw+1rem,3rem)] font-semibold leading-[1.15] tracking-tight text-slate-900">
            Uč se matematiku, fyziku a chemii{" "}
            <span className="text-sky-700">srozumitelně a krok za krokem</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Naučíme.se postupně pokryje témata podle školních osnov — s vysvětlením,
            příklady a interaktivními cvičeními, která si můžeš zkoušet vlastním
            tempem.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/vyuka"
              className="inline-flex min-h-11 min-w-[10rem] items-center justify-center rounded-full bg-sky-600 px-6 text-sm font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-sky-700 hover:shadow-md active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Výuka ZŠ + SŠ
            </Link>
            <Link
              href="/matematika"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-slate-800 active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Začít matematikou
            </Link>
            <Link
              href="/#predmety"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300/90 bg-white px-6 text-sm font-semibold text-slate-800 transition duration-200 ease-out hover:border-slate-400 hover:bg-slate-50"
            >
              Vybrat předmět
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm ring-1 ring-slate-900/[0.03] sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Druhý stupeň základní školy
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Přehled témat pro 5.–9. třídu z matematiky, fyziky a chemie — jako
              mapa k dalším výkladům a cvičením na webu.
            </p>
          </div>
          <Link
            href="/zakladni-skola"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-900 transition hover:bg-sky-100"
          >
            Otevřít přehled ZŠ →
          </Link>
        </div>
      </section>

      <section
        id="predmety"
        className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Předměty
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Každá sekce bude obsahovat přehled témat, krátká vysvětlení a místo pro
          procvičení — strukturu budeme rozšiřovat spolu s obsahem.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <SubjectCard
            href="/matematika"
            title="Matematika"
            grades="2. stupeň ZŠ a SŠ"
            description="Od zlomků a rovnic přes funkce až po úvod do derivací — přehledně, s příklady a úkoly."
            accent="sky"
          />
          <SubjectCard
            href="/fyzika"
            title="Fyzika"
            grades="2. stupeň ZŠ a SŠ"
            description="Mechanika, teplo, elektřina, vlny i moderní fyzika v souvislostech, které dávají smysl."
            accent="violet"
          />
          <SubjectCard
            href="/chemie"
            title="Chemie"
            grades="2. stupeň ZŠ a SŠ"
            description="Prvky, reakce, stechiometrie i organická chemie — bez zbytečného žargonu navíc."
            accent="emerald"
          />
        </div>
      </section>

      <section className="border-y border-slate-200/90 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Co tu postupně najdeš
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Mapa témat podle ročníků a osnov",
              "Textová vysvětlení s názornými příklady",
              "Interaktivní cvičení a okamžitá zpětná vazba",
              "Typové úlohy z testů a zkoušení",
              "Místo na dotazy a časté omyly (FAQ)",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/90 px-4 py-3.5 text-slate-700 transition hover:border-slate-200 hover:bg-white"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800"
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
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          O projektu
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-slate-600 leading-relaxed">
          <p>
            Naučíme.se vzniká jako otevřený výukový web zaměřený na přírodní
            předměty. Cílem je doplnit školní výuku materiály, které jdou číst i
            doma, opakovat podle vlastní potřeby a ověřovat si pochopení
            cvičeními.
          </p>
          <p>
            Obsah připravujeme vlastními texty podle didaktických pravidel v{" "}
            <code className="rounded-md bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
              AGENTS.md
            </code>{" "}
            a v Cursor pravidlech — bez kopírování cizích učebnic. Témata pro ZŠ
            najdeš v sekci{" "}
            <Link href="/zakladni-skola" className="font-medium text-sky-700 hover:underline">
              Základní škola
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
