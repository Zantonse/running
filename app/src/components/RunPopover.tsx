import { useEffect, useRef } from "react";
import type { Run, RunStatus } from "../types";
import RunItem from "./RunItem";
import { formatDate } from "../utils/planHelpers";

interface Props {
  dateStr: string;
  runs: Run[];
  getRunStatus: (runId: string) => RunStatus;
  onToggle: (runId: string, status: RunStatus) => void;
  onClose: () => void;
}

export default function RunPopover({ dateStr, runs, getRunStatus, onToggle, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/20" onClick={onClose}>
      <div
        ref={ref}
        className="bg-white rounded-xl shadow-lg border border-stone-200 p-4 w-80 max-w-[90vw] popover-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold">{formatDate(dateStr)}</h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-1">
          {runs.map((run) => (
            <RunItem
              key={run.id}
              run={run}
              status={getRunStatus(run.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
