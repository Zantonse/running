import { Week, RunStatus } from "../types";
import RunItem from "./RunItem";

interface Props {
  week: Week;
  getRunStatus: (runId: string) => RunStatus;
  onToggle: (runId: string, status: RunStatus) => void;
  isCurrent: boolean;
  isPast: boolean;
}

export default function WeekCard({ week, getRunStatus, onToggle, isCurrent, isPast }: Props) {
  const weekStart = new Date(week.startDate + "T00:00:00");
  const dateLabel = weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <div
      className={`bg-white rounded-xl border p-4 transition-all ${
        isCurrent
          ? "border-stone-900 border-l-4 shadow-sm"
          : isPast
          ? "border-stone-200 opacity-60"
          : "border-stone-200"
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-sm font-semibold">Week {week.weekNumber}</h3>
        <span className="text-xs text-stone-400">{dateLabel}</span>
        {week.isDownWeek && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
            Down Week
          </span>
        )}
      </div>
      <div className="space-y-1">
        {week.runs.map((run) => (
          <RunItem
            key={run.id}
            run={run}
            status={getRunStatus(run.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}
