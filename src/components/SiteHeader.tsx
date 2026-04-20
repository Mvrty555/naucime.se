import Link from "next/link";
import { AuthNav } from "@/components/auth/AuthNav";

/** Hlavní rozcestníky — ZŠ mapa témat je z výuky / úvodu (vyuka už pokrývá ZŠ i SŠ). */
const nav = [
  { href: "/vyuka", label: "Výuka" },
  { href: "/procvicovani", label: "Procvičování" },
  { href: "/doucovani", label: "Doučování" },
  { href: "/#predmety", label: "Předměty" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <Link
            href="/"
            className="shrink-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-base font-bold tracking-tight text-transparent sm:text-lg"
          >
            Naučíme.se
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-1 text-sm font-medium text-slate-400 md:flex"
            aria-label="Hlavní navigace"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2.5 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white sm:px-3"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <AuthNav />
        </div>

        <details className="relative md:hidden">
          <summary
            className="flex cursor-pointer list-none items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 shadow-inner shadow-white/5 [&::-webkit-details-marker]:hidden"
            aria-label="Otevřít menu"
          >
            Menu
            <span className="text-cyan-400" aria-hidden>
              ▾
            </span>
          </summary>
          <nav
            className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 py-1 shadow-2xl shadow-black/40 ring-1 ring-cyan-500/10 backdrop-blur-xl"
            aria-label="Mobilní navigace"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 px-4 py-3">
              <AuthNav />
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
