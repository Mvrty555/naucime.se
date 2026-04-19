import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeorieArticle } from "@/components/teorie/TeorieArticle";
import { getChemieTeorieClanek, getChemieTeorieIds } from "@/data/teorie/chemie-teorie";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return getChemieTeorieIds().map((id) => ({ id }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await props.params;
  const c = getChemieTeorieClanek(id);
  if (!c) return { title: "Nenalezeno" };
  return { title: c.nazev, description: c.perex };
}

export default async function ChemieTeorieDetailPage(props: { params: Promise<Params> }) {
  const { id } = await props.params;
  const clanek = getChemieTeorieClanek(id);
  if (!clanek) notFound();

  return (
    <TeorieArticle
      clanek={clanek}
      zpetHref="/chemie/teorie"
      zpetLabel="← Přehled teorie (chemie)"
    />
  );
}
