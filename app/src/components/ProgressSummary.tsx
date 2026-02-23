import type { TrainingBlock, ProgressData } from "../types";
import {
  getActiveBlock,
  getCurrentWeek,
  getPhaseForWeek,
  getTotalWeeks,
  countCompletedInWeek,
  getNextRun,
  formatDate,
  getWeekIndex,
  todayString,
} from "../utils/planHelpers";

interface Props {
  plan: TrainingBlock[];
  progress: ProgressData;
}

export default function ProgressSummary({ plan, progress }: Props) {
  const today = todayString();
  const block = getActiveBlock(plan, today);
  if (!block) {
    return (
      <div className="bg-white rounded-xl border border-stone-200 p-5 mb-8 text-sm text-stone-500 text-center">
        No active training block for today.
      </div>
    );
  }

  const currentWeek = getCurrentWeek(block, today);
  if (!currentWeek) {
    return (
      <div className="bg-white rounded-xl border border-stone-200 p-5 mb-8 text-sm text-stone-500 text-center">
        No current week found in this training block.
      </div>
    );
  }

  const phase = getPhaseForWeek(block, currentWeek.weekNumber);
  const totalWeeks = getTotalWeeks(block);
  const weekIdx = getWeekIndex(block, currentWeek.weekNumber);
  const completedThisWeek = countCompletedInWeek(currentWeek, progress);
  const nextRun = getNextRun(block, progress, today);
  const progressPercent = totalWeeks > 0 ? Math.round(((weekIdx) / totalWeeks) * 100) : 0;

  return (
    <div className="bg-white rounded-xl border border-stone-200 p-5 mb-8">
      <div className="flex items-baseline justify-between mb-1">
        <h2 className="text-base font-semibold">
          Week {currentWeek.weekNumber} of {totalWeeks}
        </h2>
        {phase && (
          <span className="text-sm text-stone-500">{phase.name}</span>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-stone-100 rounded-full h-2 mb-4">
        <div
          className="bg-stone-900 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-stone-600">
          {completedThisWeek} of {currentWeek.runs.length} runs this week
        </span>
        {nextRun && (
          <span className="text-stone-500">
            Next: {nextRun.description} — {formatDate(nextRun.date)}
          </span>
        )}
      </div>
    </div>
  );
}
