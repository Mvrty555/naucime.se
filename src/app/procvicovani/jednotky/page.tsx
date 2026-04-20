import type { Metadata } from "next";
import Link from "next/link";
import { SpojovaniJednotek } from "@/components/cviceni/SpojovaniJednotek";

export const metadata: Metadata = {
  title: "Spojování jednotek",
  description:
    "Interaktivní cvičení: spáruj fyzikální a chemické pojmy se správnými jednotkami SI (watt, joule, pascal, …).",
};

export default function ProcvicovaniJednotkyPage() {
  return (
    <div className="min-h-[70vh] border-b border-slate-800/80">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="flex flex-wrap gap-3 text-sm font-medium text-cyan-400">
          <Link href="/" className="hover:text-cyan-300 hover:underline">
            ← Úvod
          </Link>
          <span className="text-slate-600">|</span>
          <Link href="/procvicovani" className="hover:text-cyan-300 hover:underline">
            Procvičování
          </Link>
        </nav>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400/90">
          Interaktivní úloha
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Jednotky a pojmy
        </h1>
        <p className="mt-4 text-slate-400">
          Procvič si rozdíl mezi veličinou a její jednotkou — třeba že{" "}
          <strong className="text-slate-200">watt patří k výkonu</strong>, ne k „zásobě
          energie“ jako joule.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/40 p-5 sm:p-8">
          <SpojovaniJednotek />
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Teorie k veličinám:{" "}
          <Link href="/fyzika/teorie" className="text-cyan-400 hover:underline">
            fyzika
          </Link>
          {" · "}
          <Link href="/chemie/teorie" className="text-cyan-400 hover:underline">
            chemie
          </Link>
        </p>
      </div>
    </div>
  );
}
