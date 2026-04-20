import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Nenalezeno" };
  return { title: post.title, description: post.excerpt ?? post.title };
}

export default async function PrispevekDetailPage(props: Props) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/prispevky" className="text-sm font-medium text-cyan-400 hover:underline">
        ← Příspěvky
      </Link>
      <p className="mt-6 text-xs text-slate-500">
        {post.createdAt.toLocaleDateString("cs-CZ")}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">{post.title}</h1>
      {post.excerpt ? <p className="mt-4 text-lg text-slate-400">{post.excerpt}</p> : null}
      <div className="mt-8 whitespace-pre-wrap leading-relaxed text-slate-300">{post.body}</div>
    </article>
  );
}
