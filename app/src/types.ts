export type RunType = "easy" | "workout" | "long" | "race";
export type RunStatus = "pending" | "done" | "skipped";

export interface Run {
  id: string;
  type: RunType;
  description: string;
  date: string; // ISO date string YYYY-MM-DD
}

export interface Week {
  weekNumber: number;
  startDate: string;
  isDownWeek: boolean;
  runs: Run[];
}

export interface Phase {
  name: string;
  phaseNumber: number;
  weeks: Week[];
}

export interface TrainingBlock {
  name: string;
  raceDate: string;
  raceName: string;
  phases: Phase[];
}

export interface ProgressData {
  runs: Record<string, { status: RunStatus }>;
}
