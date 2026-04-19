import Link from "next/link";

type SubjectCardProps = {
  href: string;
  title: string;
  grades: string;
  description: string;
  accent: "sky" | "violet" | "emerald";
};

const bar = {
  sky: "from-cyan-400 to-sky-500",
  violet: "from-fuchsia-400 to-violet-500",
  emerald: "from-emerald-400 to-teal-400",
} as const;

export function SubjectCard({
  href,
  title,
  grades,
  description,
  accent,
}: SubjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-black/20 ring-1 ring-white/5 transition duration-200 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-cyan-950/30 motion-reduce:transform-none"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-90 ${bar[accent]}`}
      />
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-white group-hover:text-cyan-200">
        {title}
      </h2>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {grades}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
      <span className="mt-4 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300">
        Otevřít →
      </span>
    </Link>
  );
}
