"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export function HomeAuthCtas() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (session?.user) {
    return (
      <p className="mt-6 text-sm text-slate-500">
        Jsi přihlášen jako{" "}
        <span className="font-medium text-slate-300">{session.user.email}</span> — pokrok z
        procvičování se ukládá automaticky.{" "}
        <Link href="/ucet" className="font-medium text-cyan-400 hover:underline">
          Můj účet
        </Link>
      </p>
    );
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
      <span className="text-sm text-slate-500">Chceš ukládat pokrok z procvičování?</span>
      <Link
        href="/registrace"
        className="inline-flex min-h-9 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
      >
        Založit účet
      </Link>
      <Link
        href="/prihlaseni"
        className="inline-flex min-h-9 items-center justify-center rounded-full px-4 text-sm font-medium text-slate-400 transition hover:text-white hover:underline"
      >
        Přihlásit se
      </Link>
    </div>
  );
}
