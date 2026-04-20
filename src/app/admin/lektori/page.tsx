import { createLecturer, deleteLecturer, updateLecturer } from "@/app/admin/actions";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const field =
  "mt-1 w-full rounded-lg border border-white/10 bg-slate-950/80 px-2 py-1.5 text-xs text-white outline-none";

export default async function AdminLektoriPage() {
  let rows: {
    id: string;
    jmeno: string;
    slug: string;
    popis: string;
    format: string;
    predmety: unknown;
    active: boolean;
  }[] = [];
  try {
    rows = await prisma.lecturer.findMany({
      orderBy: { sortOrder: "asc" },
    });
  } catch {
    rows = [];
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Lektoři (doučování)</h1>
      <p className="mt-2 text-sm text-slate-400">
        Úpravy se projeví na stránce /doucovani. Předměty zapisuj jako seznam oddělený čárkou:
        matematika, fyzika, chemie.
      </p>

      <section className="mt-10 rounded-2xl border border-white/10 bg-slate-900/40 p-5">
        <h2 className="text-sm font-semibold text-white">Přidat lektora</h2>
        <form action={createLecturer} className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="text-xs text-slate-500">Jméno</label>
            <input name="jmeno" required className={field} />
          </div>
          <div>
            <label className="text-xs text-slate-500">Slug (volitelné)</label>
            <input name="slug" className={field} />
          </div>
          <div>
            <label className="text-xs text-slate-500">Formát / místo</label>
            <input name="format" className={field} placeholder="Online…" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs text-slate-500">Předměty</label>
            <input name="predmety" className={field} placeholder="matematika, fyzika" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs text-slate-500">Popis</label>
            <textarea name="popis" required rows={3} className={field} />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:brightness-110"
            >
              Přidat
            </button>
          </div>
        </form>
      </section>

      <ul className="mt-10 space-y-8">
        {rows.length === 0 ? (
          <li className="text-sm text-slate-500">Žádní lektoři — přidej prvního výše.</li>
        ) : (
          rows.map((r) => (
            <li key={r.id} className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
              <form action={updateLecturer} className="space-y-3">
                <input type="hidden" name="id" value={r.id} />
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-slate-500">Jméno</label>
                    <input name="jmeno" required defaultValue={r.jmeno} className={field} />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500">Formát</label>
                    <input name="format" defaultValue={r.format} className={field} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs text-slate-500">Předměty</label>
                    <input
                      name="predmety"
                      defaultValue={Array.isArray(r.predmety) ? r.predmety.join(", ") : ""}
                      className={field}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs text-slate-500">Popis</label>
                    <textarea name="popis" required rows={3} defaultValue={r.popis} className={field} />
                  </div>
                  <label className="flex items-center gap-2 text-xs text-slate-300 sm:col-span-2">
                    <input type="checkbox" name="active" defaultChecked={r.active} className="rounded border-slate-600" />
                    Aktivní (zobrazit na webu)
                  </label>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-cyan-500/90 px-4 py-1.5 text-xs font-bold text-slate-950"
                  >
                    Uložit
                  </button>
                </div>
              </form>
              <form action={deleteLecturer} className="mt-3 border-t border-white/5 pt-3">
                <input type="hidden" name="id" value={r.id} />
                <button type="submit" className="text-xs text-rose-400 hover:underline">
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
