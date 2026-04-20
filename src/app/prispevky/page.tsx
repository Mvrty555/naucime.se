import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Příspěvky",
  description: "Články a novinky z Naučíme.se.",
};

export const dynamic = "force-dynamic";

export default async function PrispevkyPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/" className="text-sm font-medium text-cyan-400 hover:underline">
        ← Úvod
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white">Příspěvky</h1>
      <p className="mt-2 text-slate-400">Novinky a delší texty z týmu projektu.</p>
      <ul className="mt-10 space-y-4">
        {posts.length === 0 ? (
          <li className="text-sm text-slate-500">Zatím tu není žádný publikovaný příspěvek.</li>
        ) : (
          posts.map((p) => (
            <li key={p.id}>
              <Link
                href={`/prispevky/${p.slug}`}
                className="block rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition hover:border-cyan-500/30"
              >
                <h2 className="text-lg font-semibold text-white">{p.title}</h2>
                {p.excerpt ? <p className="mt-2 text-sm text-slate-400">{p.excerpt}</p> : null}
                <p className="mt-2 text-xs text-slate-600">
                  {p.createdAt.toLocaleDateString("cs-CZ")}
                </p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
