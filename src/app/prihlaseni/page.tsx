import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Přihlášení",
  description: "Přihlášení k účtu Naučíme.se — ukládání pokroku z procvičování.",
};

export default function PrihlaseniPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <Link href="/" className="text-sm font-medium text-cyan-400 hover:underline">
        ← Úvod
      </Link>
      <div className="mt-10">
        <Suspense fallback={<p className="text-slate-500">Načítání…</p>}>
          <SignInForm />
        </Suspense>
      </div>
    </div>
  );
}
