import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeorieArticle } from "@/components/teorie/TeorieArticle";
import {
  getMatematikaTeorieClanek,
  getMatematikaTeorieIds,
} from "@/data/teorie/matematika-teorie";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return getMatematikaTeorieIds().map((id) => ({ id }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await props.params;
  const c = getMatematikaTeorieClanek(id);
  if (!c) return { title: "Nenalezeno" };
  return { title: c.nazev, description: c.perex };
}

export default async function MatematikaTeorieDetailPage(props: {
  params: Promise<Params>;
}) {
  const { id } = await props.params;
  const clanek = getMatematikaTeorieClanek(id);
  if (!clanek) notFound();

  return (
    <TeorieArticle
      clanek={clanek}
      zpetHref="/matematika/teorie"
      zpetLabel="← Přehled teorie (matematika)"
    />
  );
}
