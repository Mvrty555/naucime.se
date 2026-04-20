"use client";

import { useState } from "react";
import type { UcitelDoucovani } from "@/data/doucovani";
import { predmetLabelsDoucovani } from "@/data/doucovani";

type Props = {
  ucitele: UcitelDoucovani[];
};

export function DoucovaniKontaktForm({ ucitele }: Props) {
  const [stav, setStav] = useState<"idle" | "odesilam" | "ok" | "chyba">("idle");
  const [chyba, setChyba] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStav("odesilam");
    setChyba(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      jmeno: String(fd.get("jmeno") ?? ""),
      email: String(fd.get("email") ?? ""),
      telefon: String(fd.get("telefon") ?? ""),
      zprava: String(fd.get("zprava") ?? ""),
      ucitelId: String(fd.get("ucitelId") ?? ""),
      website: String(fd.get("website") ?? ""),
    };
    try {
      const res = await fetch("/api/contact-doucovani", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setChyba(data.error ?? "Něco se pokazilo.");
        setStav("chyba");
        return;
      }
      setStav("ok");
      e.currentTarget.reset();
    } catch {
      setChyba("Spojení se nepovedlo. Zkontroluj síť a zkus to znovu.");
      setStav("chyba");
    }
  }

  const inputClass =
    "mt-1 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none ring-cyan-500/0 transition focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/25";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur sm:p-8"
    >
      <h2 className="text-lg font-semibold text-white">Kontaktní formulář</h2>
      <p className="mt-2 text-sm text-slate-400">
        Napiš, o jakou látku jde a kdy by ti vyhovovala první hodina. Ozveme se zpět na
        e-mail uvedený ve formuláři.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="douc-jmeno" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Jméno
          </label>
          <input id="douc-jmeno" name="jmeno" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="douc-email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            E-mail
          </label>
          <input
            id="douc-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="douc-tel" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Telefon (volitelně)
          </label>
          <input id="douc-tel" name="telefon" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="douc-ucitel" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Preference učitele
          </label>
          <select id="douc-ucitel" name="ucitelId" className={inputClass} defaultValue="libovolne">
            <option value="libovolne">Doporučte mi lektora podle předmětu</option>
            {ucitele.map((u) => (
              <option key={u.id} value={u.id}>
                {u.jmeno} ({u.predmety.map((p) => predmetLabelsDoucovani[p]).join(", ")})
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="douc-zprava" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Zpráva
          </label>
          <textarea
            id="douc-zprava"
            name="zprava"
            required
            rows={5}
            minLength={10}
            maxLength={5000}
            placeholder="Ročník, předmět, co tě děsí nejvíc, dostupné termíny…"
            className={`${inputClass} resize-y min-h-[7rem]`}
          />
        </div>
      </div>

      <div className="sr-only" aria-hidden>
        <label htmlFor="douc-honeypot">Nevyplňujte</label>
        <input tabIndex={-1} id="douc-honeypot" name="website" type="text" autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={stav === "odesilam"}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-6 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {stav === "odesilam" ? "Odesílám…" : "Odeslat poptávku"}
        </button>
        {stav === "ok" ? (
          <p className="text-sm font-medium text-emerald-400">Děkujeme — zpráva se odeslala.</p>
        ) : null}
        {stav === "chyba" && chyba ? (
          <p className="text-sm font-medium text-rose-400" role="alert">
            {chyba}
          </p>
        ) : null}
      </div>
    </form>
  );
}
