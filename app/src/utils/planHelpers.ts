import type { TrainingBlock, Week, Phase, Run, ProgressData } from "../types";

/** Get today's date as YYYY-MM-DD string */
export function todayString(): string {
  return new Date().toISOString().split("T")[0];
}

/** Find which training block is active based on today's date */
export function getActiveBlock(plan: TrainingBlock[], today: string): TrainingBlock | null {
  // Find the block whose phases contain weeks spanning today
  for (const block of plan) {
    const allWeeks = block.phases.flatMap((p) => p.weeks);
    if (allWeeks.length === 0) continue;
    const firstDate = allWeeks[0].startDate;
    const lastWeek = allWeeks[allWeeks.length - 1];
    // A week spans ~7 days from its startDate
    const endDate = addDays(lastWeek.startDate, 6);
    if (today >= firstDate && today <= endDate) return block;
  }
  // If between blocks or before start, return the first block with weeks
  return plan.find((b) => b.phases.some((p) => p.weeks.length > 0)) ?? null;
}

/** Add days to a YYYY-MM-DD string */
function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

/** Find the current week (the week whose date range contains today) */
export function getCurrentWeek(block: TrainingBlock, today: string): Week | null {
  const allWeeks = block.phases.flatMap((p) => p.weeks);
  for (const week of allWeeks) {
    const weekEnd = addDays(week.startDate, 6);
    if (today >= week.startDate && today <= weekEnd) return week;
  }
  // If before the block, return first week; if after, return last
  if (allWeeks.length > 0) {
    if (today < allWeeks[0].startDate) return allWeeks[0];
    return allWeeks[allWeeks.length - 1];
  }
  return null;
}

/** Find which phase a week belongs to */
export function getPhaseForWeek(block: TrainingBlock, weekNumber: number): Phase | null {
  return block.phases.find((p) => p.weeks.some((w) => w.weekNumber === weekNumber)) ?? null;
}

/** Get total weeks in a block (only weeks with data) */
export function getTotalWeeks(block: TrainingBlock): number {
  return block.phases.reduce((sum, p) => sum + p.weeks.length, 0);
}

/** Count completed runs in a week */
export function countCompletedInWeek(week: Week, progress: ProgressData): number {
  return week.runs.filter((r) => progress.runs[r.id]?.status === "done").length;
}

/** Get the next undone run on or after today */
export function getNextRun(block: TrainingBlock, progress: ProgressData, today: string): Run | null {
  const allRuns = block.phases.flatMap((p) => p.weeks.flatMap((w) => w.runs));
  return allRuns.find((r) => r.date >= today && progress.runs[r.id]?.status !== "done") ?? null;
}

/** Format a date string to readable format like "Mar 24" */
export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/** Get the week number index (0-based) within the block for progress calculation */
export function getWeekIndex(block: TrainingBlock, weekNumber: number): number {
  const allWeeks = block.phases.flatMap((p) => p.weeks);
  return allWeeks.findIndex((w) => w.weekNumber === weekNumber);
}
