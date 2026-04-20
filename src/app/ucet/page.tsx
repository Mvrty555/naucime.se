import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Můj účet",
  description: "Přehled uloženého pokroku z procvičování na Naučíme.se.",
};

export const dynamic = "force-dynamic";

export default async function UcetPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/prihlaseni?callbackUrl=/ucet");
  }

  let items: { scope: string; updatedAt: Date; data: unknown }[] = [];
  try {
    items = await prisma.userProgress.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
      take: 50,
      select: { scope: true, updatedAt: true, data: true },
    });
  } catch {
    items = [];
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/" className="text-sm font-medium text-cyan-400 hover:underline">
        ← Úvod
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white">Můj účet</h1>
      <p className="mt-2 text-slate-400">
        Přihlášen jako <span className="font-medium text-slate-200">{session.user.email}</span>
        {session.user.role === "ADMIN" ? (
          <>
            {" "}
            ·{" "}
            <Link href="/admin" className="font-medium text-fuchsia-400 hover:underline">
              Administrace
            </Link>
          </>
        ) : null}
      </p>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Uložený pokrok z procvičování</h2>
        <p className="mt-2 text-sm text-slate-500">
          Statistiky z arény procvičování (správně, série…) se ukládají automaticky po přihlášení.
        </p>
        {items.length === 0 ? (
          <p className="mt-6 rounded-xl border border-white/10 bg-slate-900/40 px-4 py-6 text-sm text-slate-500">
            Zatím žádná data — zkus{" "}
            <Link href="/procvicovani" className="text-cyan-400 hover:underline">
              procvičování
            </Link>
            .
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {items.map((row) => (
              <li
                key={row.scope}
                className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm"
              >
                <p className="font-mono text-xs text-cyan-300">{row.scope}</p>
                <p className="mt-1 text-xs text-slate-500">
                  Naposledy: {row.updatedAt.toLocaleString("cs-CZ")}
                </p>
                <pre className="mt-2 max-h-24 overflow-auto text-xs text-slate-400">
                  {JSON.stringify(row.data, null, 2)}
                </pre>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
