import Link from "next/link";
import { notFound } from "next/navigation";
import { deletePost, updatePost } from "@/app/admin/actions";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const field =
  "mt-1 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500/40";

type Props = { params: Promise<{ id: string }> };

export default async function UpravitPrispevekPage(props: Props) {
  const { id } = await props.params;
  let post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    body: string;
    published: boolean;
  } | null = null;
  try {
    post = await prisma.post.findUnique({
      where: { id },
      select: { id: true, title: true, slug: true, excerpt: true, body: true, published: true },
    });
  } catch {
    post = null;
  }
  if (!post) notFound();

  return (
    <div>
      <Link href="/admin/prispevky" className="text-sm text-cyan-400 hover:underline">
        ← Seznam
      </Link>
      <h1 className="mt-4 text-2xl font-semibold text-white">Upravit příspěvek</h1>
      <p className="mt-1 text-xs text-slate-500">Veřejná URL: /prispevky/{post.slug}</p>
      <form action={updatePost} className="mt-8 max-w-2xl space-y-4">
        <input type="hidden" name="id" value={post.id} />
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Nadpis</label>
          <input name="title" required defaultValue={post.title} className={field} />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Perex</label>
          <input name="excerpt" defaultValue={post.excerpt ?? ""} className={field} />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Text</label>
          <textarea name="body" required rows={14} defaultValue={post.body} className={`${field} font-mono text-xs`} />
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-300">
          <input
            type="checkbox"
            name="published"
            defaultChecked={post.published}
            className="rounded border-slate-600"
          />
          Publikovat
        </label>
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-bold text-slate-950 hover:brightness-110"
          >
            Uložit změny
          </button>
        </div>
      </form>
      <form action={deletePost} className="mt-8 border-t border-white/10 pt-6">
        <input type="hidden" name="id" value={post.id} />
        <button type="submit" className="text-sm font-medium text-rose-400 hover:underline">
          Smazat příspěvek
        </button>
      </form>
    </div>
  );
}
