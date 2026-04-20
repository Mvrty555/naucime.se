import Link from "next/link";
import { deletePost } from "@/app/admin/actions";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPrispevkyPage() {
  let rows: { id: string; title: string; slug: string; published: boolean; createdAt: Date }[] =
    [];
  try {
    rows = await prisma.post.findMany({
      orderBy: { updatedAt: "desc" },
      select: { id: true, title: true, slug: true, published: true, createdAt: true },
    });
  } catch {
    rows = [];
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-2xl font-semibold text-white">Příspěvky</h1>
        <Link
          href="/admin/prispevky/nova"
          className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950 hover:brightness-110"
        >
          Nový příspěvek
        </Link>
      </div>
      <ul className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/40">
        {rows.length === 0 ? (
          <li className="px-4 py-8 text-center text-sm text-slate-500">Zatím žádné záznamy.</li>
        ) : (
          rows.map((p) => (
            <li
              key={p.id}
              className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <Link
                  href={`/admin/prispevky/${p.id}`}
                  className="font-medium text-white hover:text-cyan-300 hover:underline"
                >
                  {p.title}
                </Link>
                <p className="mt-1 text-xs text-slate-500">
                  /{p.slug} · {p.published ? "publikováno" : "koncept"} ·{" "}
                  {p.createdAt.toLocaleDateString("cs-CZ")}
                </p>
              </div>
              <form action={deletePost}>
                <input type="hidden" name="id" value={p.id} />
                <button
                  type="submit"
                  className="text-sm font-medium text-rose-400 hover:text-rose-300 hover:underline"
                >
                  Smazat
                </button>
              </form>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
