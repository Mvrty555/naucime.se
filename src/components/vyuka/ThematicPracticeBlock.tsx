import Link from "next/link";
import { useMemo } from "react";
import { PracticeArena } from "@/components/practice/PracticeArena";
import { getTopicPracticePool } from "@/lib/practice/topicPools";
import type { PredmetVyuka, StupeVyuka } from "@/types/vyuka";

type Props = {
  predmet: PredmetVyuka;
  stupe: StupeVyuka;
  rocnik: number;
  temaId: string;
  nazevTema: string;
};

export function ThematicPracticeBlock({
  predmet,
  stupe,
  rocnik,
  temaId,
  nazevTema,
}: Props) {
  const maPool = useMemo(
    () => getTopicPracticePool(predmet, temaId).length > 0,
    [predmet, temaId],
  );

  if (!maPool) {
    return (
      <div className="mt-10 border-t border-white/10 pt-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400/90">
          Procvičení k tématu
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Pro téma „{nazevTema}“ zatím doplňujeme sadu generovaných příkladů. Mezitím
          použij obecné procvičování a drž se úloh z lekce výše.
        </p>
        <Link
          href="/procvicovani"
          className="mt-3 inline-flex text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
        >
          Otevřít procvičování →
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 border-t border-white/10 pt-8">
      <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400/90">
        Procvičení k tématu
      </h3>
      <p className="mt-2 text-sm text-slate-400">
        Generované příklady vázané na „{nazevTema}“ — navazují na látku výše, bez
        míchání s jinými okruhy.
      </p>
      <div className="mt-4">
        <PracticeArena
          predmet={predmet}
          stupe={stupe}
          rocnik={rocnik}
          temaId={temaId}
          kompaktni
        />
      </div>
    </div>
  );
}
