import Link from "next/link";

const nav = [
  { href: "/vyuka", label: "Výuka" },
  { href: "/zakladni-skola", label: "ZŠ" },
  { href: "/matematika", label: "Matematika" },
  { href: "/fyzika", label: "Fyzika" },
  { href: "/chemie", label: "Chemie" },
  { href: "/#o-projektu", label: "O projektu" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-slate-900 transition hover:text-slate-700 sm:text-lg"
        >
          Naučíme<span className="text-sky-600">.se</span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 text-sm font-medium text-slate-600 md:flex md:gap-1"
          aria-label="Hlavní navigace"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 transition duration-150 ease-out hover:bg-slate-100 hover:text-slate-900 motion-reduce:transition-none md:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary
            className="flex cursor-pointer list-none items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 [&::-webkit-details-marker]:hidden"
            aria-label="Otevřít menu"
          >
            <span>Menu</span>
            <span className="text-slate-500" aria-hidden>
              ▾
            </span>
          </summary>
          <nav
            className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200/90 bg-white py-1 shadow-lg ring-1 ring-slate-900/5"
            aria-label="Mobilní navigace"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
