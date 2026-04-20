"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useActionState, useEffect, useRef } from "react";
import { type RegisterState, registerUser } from "@/actions/registerUser";

const initial: RegisterState = { ok: false, error: "" };

export function RegisterForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(registerUser, initial);
  const triedSignIn = useRef(false);

  useEffect(() => {
    if (!state.ok || triedSignIn.current) return;
    triedSignIn.current = true;
    const form = document.getElementById("reg-form") as HTMLFormElement | null;
    if (!form) return;
    const fd = new FormData(form);
    void (async () => {
      const email = String(fd.get("email") ?? "");
      const password = String(fd.get("password") ?? "");
      await signIn("credentials", { email, password, redirect: false });
      router.push("/ucet");
      router.refresh();
    })();
  }, [state, router]);

  const inputClass =
    "mt-1 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/25";

  return (
    <form id="reg-form" action={formAction} className="mx-auto max-w-md space-y-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-white">Registrace</h1>
      <p className="text-sm text-slate-400">
        Už máš účet?{" "}
        <Link href="/prihlaseni" className="font-medium text-cyan-400 hover:underline">
          Přihlásit se
        </Link>
      </p>
      <div>
        <label htmlFor="rg-name" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Jméno nebo přezdívka
        </label>
        <input id="rg-name" name="name" type="text" required minLength={2} maxLength={80} className={inputClass} />
      </div>
      <div>
        <label htmlFor="rg-email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          E-mail
        </label>
        <input id="rg-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="rg-pass" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Heslo (min. 8 znaků)
        </label>
        <input
          id="rg-pass"
          name="password"
          type="password"
          required
          minLength={8}
          maxLength={128}
          autoComplete="new-password"
          className={inputClass}
        />
      </div>
      {!state.ok && state.error ? (
        <p className="text-sm text-rose-400" role="alert">
          {state.error}
        </p>
      ) : null}
      {state.ok ? (
        <p className="text-sm text-emerald-400">Účet vytvořen — přihlašuji…</p>
      ) : null}
      <button
        type="submit"
        disabled={pending || state.ok}
        className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 disabled:opacity-60"
      >
        {pending ? "Registruji…" : "Založit účet"}
      </button>
    </form>
  );
}
