import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200/90 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="text-base font-semibold text-slate-900">Naučíme.se</p>
          <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-600">
            Výuka matematiky, fyziky a chemie pro žáky ZŠ a SŠ — srozumitelně,
            systematicky a s prostorem pro procvičování.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-600 sm:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/vyuka"
              className="transition hover:text-sky-700 hover:underline"
            >
              Výuka (ročníky)
            </Link>
            <Link
              href="/zakladni-skola"
              className="transition hover:text-sky-700 hover:underline"
            >
              Základní škola
            </Link>
            <Link
              href="/matematika"
              className="transition hover:text-sky-700 hover:underline"
            >
              Matematika
            </Link>
            <Link
              href="/fyzika"
              className="transition hover:text-sky-700 hover:underline"
            >
              Fyzika
            </Link>
            <Link
              href="/chemie"
              className="transition hover:text-sky-700 hover:underline"
            >
              Chemie
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/80 bg-slate-100/90">
        <p className="mx-auto max-w-5xl px-4 py-3 text-center text-xs leading-relaxed text-slate-500 sm:px-6">
          © {new Date().getFullYear()} Naučíme.se — obsah vzniká postupně pro
          studenty základních a středních škol. AI materiály dle pravidel v{" "}
          <code className="rounded bg-slate-200/80 px-1 py-0.5 text-[0.7rem] text-slate-700">
            AGENTS.md
          </code>
          .
        </p>
      </div>
    </footer>
  );
}
