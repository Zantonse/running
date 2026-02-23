import type { Run, RunStatus } from "../types";

const TYPE_COLORS: Record<string, string> = {
  easy: "bg-blue-100 text-blue-700",
  workout: "bg-orange-100 text-orange-700",
  long: "bg-green-100 text-green-700",
  race: "bg-red-100 text-red-700",
};

const TYPE_LABELS: Record<string, string> = {
  easy: "Easy",
  workout: "Workout",
  long: "Long",
  race: "Race",
};

interface Props {
  run: Run;
  status: RunStatus;
  onToggle: (runId: string, status: RunStatus) => void;
}

export default function RunItem({ run, status, onToggle }: Props) {
  const handleClick = () => {
    // Cycle: pending -> done -> skipped -> pending
    const next: RunStatus =
      status === "pending" ? "done" : status === "done" ? "skipped" : "pending";
    onToggle(run.id, next);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center gap-3 py-2 px-1 rounded-lg hover:bg-stone-50 transition-colors text-left"
    >
      {/* Status indicator */}
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        {status === "done" && (
          <div className="w-5 h-5 rounded-full bg-stone-900 flex items-center justify-center transition-colors duration-150">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
        {status === "skipped" && (
          <div className="w-5 h-5 rounded-full bg-stone-300 flex items-center justify-center transition-colors duration-150">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        )}
        {status === "pending" && (
          <div className="w-5 h-5 rounded-full border-2 border-stone-300 transition-colors duration-150" />
        )}
      </div>

      {/* Run description */}
      <span className={`flex-1 text-sm ${status === "skipped" ? "line-through text-stone-400" : status === "done" ? "text-stone-500" : "text-stone-900"}`}>
        {run.description}
      </span>

      {/* Type badge */}
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${TYPE_COLORS[run.type]}`}>
        {TYPE_LABELS[run.type]}
      </span>
    </button>
  );
}
