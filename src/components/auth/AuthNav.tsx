"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export function AuthNav() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="text-xs text-slate-600">…</span>;
  }

  if (!session?.user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/prihlaseni"
          className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/5 hover:text-white sm:text-sm"
        >
          Přihlásit
        </Link>
        <Link
          href="/registrace"
          className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/20 sm:text-sm"
        >
          Registrace
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/ucet"
        className="max-w-[10rem] truncate rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/5 hover:text-white sm:max-w-none sm:text-sm"
        title={session.user.email ?? ""}
      >
        Účet
      </Link>
      {session.user.role === "ADMIN" ? (
        <Link
          href="/admin"
          className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-fuchsia-300 transition hover:bg-white/5 hover:text-fuchsia-200 sm:text-sm"
        >
          Admin
        </Link>
      ) : null}
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/" })}
        className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-500 transition hover:text-slate-300 sm:text-sm"
      >
        Odhlásit
      </button>
    </div>
  );
}
