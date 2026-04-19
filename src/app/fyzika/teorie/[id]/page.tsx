import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeorieArticle } from "@/components/teorie/TeorieArticle";
import {
  getFyzikaTeorieClanek,
  getFyzikaTeorieIds,
} from "@/data/teorie/fyzika-teorie";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return getFyzikaTeorieIds().map((id) => ({ id }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await props.params;
  const c = getFyzikaTeorieClanek(id);
  if (!c) return { title: "Nenalezeno" };
  return {
    title: c.nazev,
    description: c.perex,
  };
}

export default async function FyzikaTeorieDetailPage(props: { params: Promise<Params> }) {
  const { id } = await props.params;
  const clanek = getFyzikaTeorieClanek(id);
  if (!clanek) notFound();

  return (
    <TeorieArticle
      clanek={clanek}
      zpetHref="/fyzika/teorie"
      zpetLabel="← Přehled teorie (fyzika)"
    />
  );
}
