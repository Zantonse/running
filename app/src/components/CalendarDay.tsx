import type { Run, RunStatus } from "../types";

const DOT_COLORS: Record<string, string> = {
  easy: "bg-blue-500",
  workout: "bg-orange-500",
  long: "bg-green-500",
  race: "bg-red-500",
};

const DOT_RING_COLORS: Record<string, string> = {
  easy: "border-blue-500",
  workout: "border-orange-500",
  long: "border-green-500",
  race: "border-red-500",
};

interface Props {
  day: number | null; // null for empty cells
  dateStr: string | null;
  runs: Run[];
  getRunStatus: (runId: string) => RunStatus;
  isToday: boolean;
  onDayClick: (dateStr: string) => void;
}

export default function CalendarDay({ day, dateStr, runs, getRunStatus, isToday, onDayClick }: Props) {
  if (day === null) {
    return <div className="h-14 sm:h-16" />;
  }

  const hasRuns = runs.length > 0;
  const isRaceDay = runs.some((r) => r.type === "race");

  return (
    <button
      onClick={() => hasRuns && dateStr && onDayClick(dateStr)}
      disabled={!hasRuns}
      className={`h-14 sm:h-16 flex flex-col items-center justify-center rounded-lg transition-colors relative ${
        hasRuns ? "hover:bg-stone-100 cursor-pointer" : "cursor-default"
      } ${isToday ? "ring-2 ring-stone-900 ring-inset" : ""}`}
    >
      <span className={`text-sm ${isToday ? "font-bold" : ""} ${hasRuns ? "text-stone-900" : "text-stone-300"}`}>
        {day}
      </span>
      {hasRuns && (
        <div className="flex gap-0.5 mt-0.5">
          {runs.map((run) => {
            const status = getRunStatus(run.id);
            if (status === "done") {
              return <div key={run.id} className={`w-2 h-2 rounded-full ${DOT_COLORS[run.type]}`} />;
            }
            if (status === "skipped") {
              return <div key={run.id} className="w-2 h-2 rounded-full bg-stone-300" />;
            }
            // pending
            return <div key={run.id} className={`w-2 h-2 rounded-full border ${DOT_RING_COLORS[run.type]}`} />;
          })}
        </div>
      )}
      {isRaceDay && (
        <span className="absolute top-0.5 right-1 text-xs">&#9733;</span>
      )}
    </button>
  );
}
