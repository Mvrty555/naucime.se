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
            Matematika, fyzika a chemie pro druhý stupeň ZŠ a SŠ — výklad podle ročníků,
            teorie a procvičování.
          </p>
        </div>
        <nav
          className="flex flex-col gap-3 text-sm text-slate-400 sm:items-end"
          aria-label="Důležité odkazy"
        >
          <div className="flex flex-wrap justify-end gap-x-4 gap-y-2">
            <Link href="/vyuka" className="hover:text-cyan-300 hover:underline">
              Výuka
            </Link>
            <Link href="/procvicovani" className="hover:text-cyan-300 hover:underline">
              Procvičování
            </Link>
            <Link href="/zakladni-skola" className="hover:text-cyan-300 hover:underline">
              Mapa témat ZŠ
            </Link>
          </div>
          <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 border-t border-white/5 pt-3">
            <Link href="/matematika" className="hover:text-cyan-300 hover:underline">
              Matematika
            </Link>
            <Link href="/fyzika" className="hover:text-cyan-300 hover:underline">
              Fyzika
            </Link>
            <Link href="/chemie" className="hover:text-cyan-300 hover:underline">
              Chemie
            </Link>
          </div>
        </nav>
      </div>
      <div className="border-t border-white/5 bg-black/30">
        <p className="mx-auto max-w-5xl px-4 py-3 text-center text-xs text-slate-600 sm:px-6">
          © {new Date().getFullYear()} Naučíme.se
        </p>
      </div>
    </footer>
  );
}
