import { Phase, ProgressData } from "../types";

interface Props {
  phase: Phase;
  progress: ProgressData;
}

export default function PhaseHeader({ phase, progress }: Props) {
  const totalRuns = phase.weeks.flatMap((w) => w.runs).length;
  const completedRuns = phase.weeks
    .flatMap((w) => w.runs)
    .filter((r) => progress.runs[r.id]?.status === "done").length;
  const percent = totalRuns > 0 ? Math.round((completedRuns / totalRuns) * 100) : 0;

  return (
    <div className="mb-3 mt-8 first:mt-0">
      <div className="flex items-baseline justify-between mb-1.5">
        <h2 className="text-base font-semibold text-stone-900">
          Phase {phase.phaseNumber}: {phase.name}
        </h2>
        <span className="text-xs text-stone-400">
          {completedRuns}/{totalRuns} runs
        </span>
      </div>
      <div className="w-full bg-stone-100 rounded-full h-1.5">
        <div
          className="bg-stone-400 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
