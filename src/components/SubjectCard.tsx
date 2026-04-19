import Link from "next/link";

type SubjectCardProps = {
  href: string;
  title: string;
  grades: string;
  description: string;
  accent: "sky" | "violet" | "emerald";
};

const bar = {
  sky: "from-sky-500 to-blue-600",
  violet: "from-violet-500 to-purple-600",
  emerald: "from-emerald-500 to-teal-600",
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
      className="group flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm ring-1 ring-slate-900/[0.04] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-slate-300/90 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div
        className={`mb-4 h-1 w-12 rounded-full bg-gradient-to-r ${bar[accent]}`}
      />
      <h2 className="text-xl font-semibold tracking-tight text-slate-900 transition group-hover:text-sky-800">
        {title}
      </h2>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
        {grades}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      <span className="mt-4 text-sm font-medium text-sky-700 transition group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0">
        Přejít na předmět →
      </span>
    </Link>
  );
}
