import Link from "next/link";
import { createPost } from "@/app/admin/actions";

const field =
  "mt-1 w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500/40";

export default function NovaPrispevekPage() {
  return (
    <div>
      <Link href="/admin/prispevky" className="text-sm text-cyan-400 hover:underline">
        ← Seznam
      </Link>
      <h1 className="mt-4 text-2xl font-semibold text-white">Nový příspěvek</h1>
      <form action={createPost} className="mt-8 max-w-2xl space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Nadpis</label>
          <input name="title" required className={field} />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Slug (volitelné)</label>
          <input name="slug" placeholder="automaticky z nadpisu" className={field} />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Perex</label>
          <input name="excerpt" className={field} />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Text (markdown / prostý)</label>
          <textarea name="body" required rows={14} className={`${field} font-mono text-xs`} />
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-300">
          <input type="checkbox" name="published" className="rounded border-slate-600" />
          Publikovat
        </label>
        <button
          type="submit"
          className="rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-bold text-slate-950 hover:brightness-110"
        >
          Uložit
        </button>
      </form>
    </div>
  );
}
