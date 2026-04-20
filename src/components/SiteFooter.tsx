import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-slate-950/90">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-base font-bold text-transparent">
            Naučíme.se
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
            Matematika, fyzika a chemie pro ZŠ a SŠ — výklad, mapa témat a
            generované procvičování.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-400 sm:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/procvicovani" className="hover:text-cyan-300 hover:underline">
              Procvičování
            </Link>
            <Link
              href="/procvicovani?predmet=fyzika&stupe=zs&rocnik=5&tema=mereni-si"
              className="hover:text-cyan-300 hover:underline"
            >
              Spojovačky (procvičování)
            </Link>
            <Link href="/vyuka" className="hover:text-cyan-300 hover:underline">
              Výuka (ročníky)
            </Link>
            <Link href="/zakladni-skola" className="hover:text-cyan-300 hover:underline">
              Základní škola
            </Link>
            <Link href="/matematika" className="hover:text-cyan-300 hover:underline">
              Matematika
            </Link>
            <Link href="/fyzika" className="hover:text-cyan-300 hover:underline">
              Fyzika
            </Link>
            <Link href="/chemie" className="hover:text-cyan-300 hover:underline">
              Chemie
            </Link>
            <Link href="/matematika/teorie" className="hover:text-cyan-300 hover:underline">
              Teorie — matematika
            </Link>
            <Link href="/fyzika/teorie" className="hover:text-cyan-300 hover:underline">
              Teorie — fyzika
            </Link>
            <Link href="/chemie/teorie" className="hover:text-cyan-300 hover:underline">
              Teorie — chemie
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 bg-black/30">
        <p className="mx-auto max-w-5xl px-4 py-3 text-center text-xs leading-relaxed text-slate-500 sm:px-6">
          © {new Date().getFullYear()} Naučíme.se — obsah a generátory příkladů
          vznikají podle pravidel v{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5 text-[0.7rem] text-slate-400">
            AGENTS.md
          </code>
          .
        </p>
      </div>
    </footer>
  );
}
