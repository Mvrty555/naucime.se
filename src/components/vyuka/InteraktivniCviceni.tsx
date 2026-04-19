"use client";

import { useCallback, useId, useState } from "react";
import type { Cviceni } from "@/types/vyuka";

type Props = {
  cviceni: Cviceni;
  poradi: number;
};

export function InteraktivniCviceni({ cviceni, poradi }: Props) {
  const baseId = useId();
  const [stav, setStav] = useState<"volba" | "spravne" | "spatne">("volba");

  const reset = useCallback(() => {
    setStav("volba");
  }, []);

  if (cviceni.typ === "ano-ne") {
    return (
      <div className="rounded-xl border border-white/10 bg-slate-950/50 p-4">
        <p className="text-sm font-medium text-slate-500">Úloha {poradi}</p>
        <p className="mt-2 text-slate-100">{cviceni.otazka}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={stav !== "volba"}
            onClick={() =>
              setStav(cviceni.spravne === true ? "spravne" : "spatne")
            }
            className="rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-500/40 hover:bg-slate-800 disabled:opacity-60"
          >
            Ano
          </button>
          <button
            type="button"
            disabled={stav !== "volba"}
            onClick={() =>
              setStav(cviceni.spravne === false ? "spravne" : "spatne")
            }
            className="rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-500/40 hover:bg-slate-800 disabled:opacity-60"
          >
            Ne
          </button>
          {stav !== "volba" ? (
            <button
              type="button"
              onClick={reset}
              className="rounded-lg px-3 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              Znovu
            </button>
          ) : null}
        </div>
        {stav === "spravne" ? (
          <p className="mt-3 rounded-lg border border-emerald-500/30 bg-emerald-950/40 px-3 py-2 text-sm text-emerald-100">
            Správně. {cviceni.vysvetleni}
          </p>
        ) : null}
        {stav === "spatne" ? (
          <p className="mt-3 rounded-lg border border-amber-500/30 bg-amber-950/30 px-3 py-2 text-sm text-amber-100">
            Ještě jednou — {cviceni.vysvetleni}
          </p>
        ) : null}
      </div>
    );
  }

  const { otazka, moznosti, spravnyIndex, vysvetleni } = cviceni;

  return (
    <fieldset className="rounded-xl border border-white/10 bg-slate-950/50 p-4">
      <legend className="text-sm font-medium text-slate-500">
        Úloha {poradi}
      </legend>
      <p className="mt-1 text-slate-100">{otazka}</p>
      <div className="mt-3 space-y-2">
        {moznosti.map((moznost, i) => {
          const inputId = `${baseId}-${i}`;
          const disabled = stav !== "volba";
          return (
            <label
              key={inputId}
              htmlFor={inputId}
              className="flex cursor-pointer items-start gap-2 rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-sm transition hover:border-cyan-500/30 disabled:cursor-default disabled:opacity-70"
            >
              <input
                id={inputId}
                type="radio"
                name={baseId}
                disabled={disabled}
                className="mt-1 border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-500"
                onChange={() => {
                  if (i === spravnyIndex) setStav("spravne");
                  else setStav("spatne");
                }}
              />
              <span className="text-slate-200">{moznost}</span>
            </label>
          );
        })}
      </div>
      {stav === "spravne" ? (
        <p className="mt-3 text-sm text-emerald-300">{vysvetleni}</p>
      ) : null}
      {stav === "spatne" ? (
        <div className="mt-3 space-y-2">
          <p className="text-sm text-amber-200">
            To nebyla správná volba. {vysvetleni}
          </p>
          <button
            type="button"
            onClick={reset}
            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
          >
            Zkusit znovu
          </button>
        </div>
      ) : null}
    </fieldset>
  );
}
