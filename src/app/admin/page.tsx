import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let users = 0;
  let posts = 0;
  let lecturers = 0;
  let progress = 0;
  let dbOk = true;
  try {
    [users, posts, lecturers, progress] = await Promise.all([
      prisma.user.count(),
      prisma.post.count(),
      prisma.lecturer.count(),
      prisma.userProgress.count(),
    ]);
  } catch {
    dbOk = false;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Statistiky</h1>
      <p className="mt-2 text-sm text-slate-400">
        Souhrn z databáze. Návštěvnost stránek můžeš doplnit např. Vercel Analytics nebo
        Plausible — zatím ji zde nečteme.
      </p>
      {!dbOk ? (
        <p className="mt-6 rounded-xl border border-amber-500/30 bg-amber-950/20 px-4 py-3 text-sm text-amber-100">
          Databáze není připojená (chybí <code className="text-amber-200">DATABASE_URL</code>
          ). Po nasazení PostgreSQL a migraci se čísla naplní.
        </p>
      ) : (
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Registrovaní uživatelé", users],
            ["Příspěvky (včetně konceptů)", posts],
            ["Lektoři", lecturers],
            ["Uložené záznamy pokroku", progress],
          ].map(([label, n]) => (
            <div
              key={String(label)}
              className="rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-5"
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {label}
              </dt>
              <dd className="mt-2 font-mono text-3xl font-semibold text-cyan-300">{n as number}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
