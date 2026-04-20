"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawCb = searchParams.get("callbackUrl");
  const callbackUrl =
    rawCb && rawCb.startsWith("/") && !rawCb.startsWith("//") ? rawCb : "/ucet";
  const [chyba, setChyba] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setChyba(null);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "");
    const password = String(fd.get("password") ?? "");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setPending(false);
    if (res?.error) {
      setChyba("Neplatné přihlašovací údaje.");
      return;
    }
    router.push(callbackUrl);
    router.refresh();
  }

  const inputClass =
    "mt-1 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/25";

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-white">Přihlášení</h1>
      <p className="text-sm text-slate-400">
        Účet slouží k ukládání pokroku z procvičování. Nemáš účet?{" "}
        <Link href="/registrace" className="font-medium text-cyan-400 hover:underline">
          Registrace
        </Link>
      </p>
      <div>
        <label htmlFor="si-email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          E-mail
        </label>
        <input id="si-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="si-pass" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Heslo
        </label>
        <input
          id="si-pass"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className={inputClass}
        />
      </div>
      {chyba ? (
        <p className="text-sm text-rose-400" role="alert">
          {chyba}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 disabled:opacity-60"
      >
        {pending ? "Přihlašuji…" : "Přihlásit"}
      </button>
    </form>
  );
}
