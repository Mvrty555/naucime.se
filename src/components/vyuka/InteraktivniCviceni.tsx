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
      <div className="rounded-xl border border-slate-200 bg-slate-50/90 p-4">
        <p className="text-sm font-medium text-slate-500">Úloha {poradi}</p>
        <p className="mt-2 text-slate-900">{cviceni.otazka}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={stav !== "volba"}
            onClick={() =>
              setStav(cviceni.spravne === true ? "spravne" : "spatne")
            }
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 ring-1 ring-slate-300 transition hover:bg-slate-50 disabled:opacity-60"
          >
            Ano
          </button>
          <button
            type="button"
            disabled={stav !== "volba"}
            onClick={() =>
              setStav(cviceni.spravne === false ? "spravne" : "spatne")
            }
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 ring-1 ring-slate-300 transition hover:bg-slate-50 disabled:opacity-60"
          >
            Ne
          </button>
          {stav !== "volba" ? (
            <button
              type="button"
              onClick={reset}
              className="rounded-lg px-3 py-2 text-sm font-medium text-sky-700 hover:underline"
            >
              Znovu
            </button>
          ) : null}
        </div>
        {stav === "spravne" ? (
          <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900 ring-1 ring-emerald-200">
            Správně. {cviceni.vysvetleni}
          </p>
        ) : null}
        {stav === "spatne" ? (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-950 ring-1 ring-amber-200">
            Ještě jednou — {cviceni.vysvetleni}
          </p>
        ) : null}
      </div>
    );
  }

  const { otazka, moznosti, spravnyIndex, vysvetleni } = cviceni;

  return (
    <fieldset className="rounded-xl border border-slate-200 bg-slate-50/90 p-4">
      <legend className="text-sm font-medium text-slate-500">
        Úloha {poradi}
      </legend>
      <p className="mt-1 text-slate-900">{otazka}</p>
      <div className="mt-3 space-y-2">
        {moznosti.map((moznost, i) => {
          const inputId = `${baseId}-${i}`;
          const disabled = stav !== "volba";
          return (
            <label
              key={inputId}
              htmlFor={inputId}
              className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition hover:border-slate-300 disabled:cursor-default disabled:opacity-70"
            >
              <input
                id={inputId}
                type="radio"
                name={baseId}
                disabled={disabled}
                className="mt-1"
                onChange={() => {
                  if (i === spravnyIndex) setStav("spravne");
                  else setStav("spatne");
                }}
              />
              <span className="text-slate-800">{moznost}</span>
            </label>
          );
        })}
      </div>
      {stav === "spravne" ? (
        <p className="mt-3 text-sm text-emerald-900">{vysvetleni}</p>
      ) : null}
      {stav === "spatne" ? (
        <div className="mt-3 space-y-2">
          <p className="text-sm text-amber-950">
            To nebyla správná volba. {vysvetleni}
          </p>
          <button
            type="button"
            onClick={reset}
            className="text-sm font-medium text-sky-700 hover:underline"
          >
            Zkusit znovu
          </button>
        </div>
      ) : null}
    </fieldset>
  );
}
