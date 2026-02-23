import { useState, useMemo } from "react";
import { Run, RunStatus, TrainingBlock } from "../types";
import CalendarDay from "./CalendarDay";
import RunPopover from "./RunPopover";
import { todayString } from "../utils/planHelpers";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Min/max months for navigation
const MIN_YEAR = 2026, MIN_MONTH = 1; // Feb 2026 (0-indexed: 1)
const MAX_YEAR = 2026, MAX_MONTH = 9; // Oct 2026 (0-indexed: 9)

interface Props {
  plan: TrainingBlock[];
  getRunStatus: (runId: string) => RunStatus;
  onToggle: (runId: string, status: RunStatus) => void;
}

export default function Calendar({ plan, getRunStatus, onToggle }: Props) {
  const today = todayString();
  const todayDate = new Date(today + "T00:00:00");

  const [year, setYear] = useState(todayDate.getFullYear());
  const [month, setMonth] = useState(todayDate.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Build date -> runs lookup
  const dateRunsMap = useMemo(() => {
    const map = new Map<string, Run[]>();
    for (const block of plan) {
      for (const phase of block.phases) {
        for (const week of phase.weeks) {
          for (const run of week.runs) {
            const existing = map.get(run.date) ?? [];
            existing.push(run);
            map.set(run.date, existing);
          }
        }
      }
    }
    return map;
  }, [plan]);

  // Build calendar grid for current month
  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDow = firstDay.getDay(); // 0=Sun
    const daysInMonth = lastDay.getDate();

    const cells: { day: number | null; dateStr: string | null }[] = [];

    // Leading empty cells
    for (let i = 0; i < startDow; i++) {
      cells.push({ day: null, dateStr: null });
    }

    // Day cells
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      cells.push({ day: d, dateStr });
    }

    return cells;
  }, [year, month]);

  const canGoPrev = year > MIN_YEAR || (year === MIN_YEAR && month > MIN_MONTH);
  const canGoNext = year < MAX_YEAR || (year === MAX_YEAR && month < MAX_MONTH);

  const goPrev = () => {
    if (!canGoPrev) return;
    if (month === 0) { setYear(year - 1); setMonth(11); }
    else setMonth(month - 1);
  };

  const goNext = () => {
    if (!canGoNext) return;
    if (month === 11) { setYear(year + 1); setMonth(0); }
    else setMonth(month + 1);
  };

  const selectedRuns = selectedDate ? (dateRunsMap.get(selectedDate) ?? []) : [];

  return (
    <div>
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goPrev}
          disabled={!canGoPrev}
          className="p-2 rounded-lg hover:bg-stone-100 disabled:opacity-30 disabled:cursor-default"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-base font-semibold">
          {MONTH_NAMES[month]} {year}
        </h2>
        <button
          onClick={goNext}
          disabled={!canGoNext}
          className="p-2 rounded-lg hover:bg-stone-100 disabled:opacity-30 disabled:cursor-default"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS_OF_WEEK.map((d) => (
          <div key={d} className="text-center text-xs font-medium text-stone-400 py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-px">
        {calendarDays.map((cell, i) => (
          <CalendarDay
            key={i}
            day={cell.day}
            dateStr={cell.dateStr}
            runs={cell.dateStr ? (dateRunsMap.get(cell.dateStr) ?? []) : []}
            getRunStatus={getRunStatus}
            isToday={cell.dateStr === today}
            onDayClick={setSelectedDate}
          />
        ))}
      </div>

      {/* Color legend */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-500">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span>Easy</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-orange-500" />
          <span>Workout</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span>Long</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span>Race</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-stone-400" />
          <span>Skipped</span>
        </div>
        <div className="flex items-center gap-1.5 text-stone-400">
          <div className="w-2 h-2 rounded-full border border-stone-400" />
          <span>Pending (outline)</span>
        </div>
      </div>

      {/* Popover */}
      {selectedDate && selectedRuns.length > 0 && (
        <RunPopover
          dateStr={selectedDate}
          runs={selectedRuns}
          getRunStatus={getRunStatus}
          onToggle={onToggle}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
}
