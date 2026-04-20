import Link from "next/link";

const links = [
  { href: "/admin", label: "Přehled" },
  { href: "/admin/prispevky", label: "Příspěvky" },
  { href: "/admin/prispevky/nova", label: "Nový příspěvek" },
  { href: "/admin/lektori", label: "Lektoři" },
] as const;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:px-6 sm:py-12">
      <aside className="shrink-0 sm:w-52">
        <p className="text-xs font-bold uppercase tracking-wider text-fuchsia-400/90">Administrace</p>
        <nav className="mt-4 flex flex-col gap-1 text-sm" aria-label="Admin menu">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/"
          className="mt-6 inline-block text-xs font-medium text-slate-500 hover:text-cyan-400 hover:underline"
        >
          ← Na web
        </Link>
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
