import type { Metadata } from "next";
import Link from "next/link";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Registrace",
  description: "Založení účtu na Naučíme.se pro ukládání pokroku z procvičování.",
};

export default function RegistracePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <Link href="/" className="text-sm font-medium text-cyan-400 hover:underline">
        ← Úvod
      </Link>
      <div className="mt-10">
        <RegisterForm />
      </div>
    </div>
  );
}
