# Training Tracker Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a React + Express web app that visualizes a 32-week running training plan with checkbox progress tracking, a timeline view, and a calendar view.

**Architecture:** Vite React frontend with two views (timeline + calendar) served alongside a tiny Express backend that persists run completion status to a JSON file. Plan data is hardcoded in TypeScript; only progress state is dynamic.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, React Router v6, Express.js, concurrently

---

### Task 1: Project Scaffolding

**Files:**
- Create: `app/` (Vite React project)
- Create: `server/index.ts`
- Create: `server/progress.json`
- Create: `package.json` (root)

**Step 1: Initialize the Vite React project**

Run:
```bash
cd /Users/craigverzosa/Documents/Personal/Hobbies/Running
npm create vite@latest app -- --template react-ts
```

**Step 2: Install frontend dependencies**

Run:
```bash
cd /Users/craigverzosa/Documents/Personal/Hobbies/Running/app
npm install react-router-dom
npm install -D tailwindcss @tailwindcss/vite
```

**Step 3: Configure Tailwind**

In `app/vite.config.ts`, add the Tailwind Vite plugin:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
```

Replace `app/src/index.css` with:

```css
@import "tailwindcss";
```

**Step 4: Create the server directory and install server dependencies**

Run:
```bash
cd /Users/craigverzosa/Documents/Personal/Hobbies/Running
mkdir -p server
npm init -y
npm install express cors
npm install -D typescript tsx @types/express @types/cors concurrently
```

**Step 5: Create root tsconfig for the server**

Create `tsconfig.json` at project root:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "strict": true,
    "outDir": "./dist",
    "rootDir": "."
  },
  "include": ["server/**/*"]
}
```

**Step 6: Create the Express server**

Create `server/index.ts`:

```ts
import express from "express";
import cors from "cors";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const app = express();
const PORT = 3001;
const PROGRESS_FILE = join(import.meta.dirname, "progress.json");

app.use(cors());
app.use(express.json());

function readProgress(): Record<string, { status: string }> {
  if (!existsSync(PROGRESS_FILE)) {
    return {};
  }
  try {
    const data = readFileSync(PROGRESS_FILE, "utf-8");
    return JSON.parse(data).runs ?? {};
  } catch {
    return {};
  }
}

function writeProgress(runs: Record<string, { status: string }>): void {
  try {
    writeFileSync(PROGRESS_FILE, JSON.stringify({ runs }, null, 2));
  } catch (err) {
    console.error("Failed to write progress file:", err);
  }
}

app.get("/api/progress", (_req, res) => {
  const runs = readProgress();
  res.json({ runs });
});

app.post("/api/progress", (req, res) => {
  const { runId, status } = req.body;
  if (!runId || !status) {
    res.status(400).json({ error: "runId and status are required" });
    return;
  }
  const runs = readProgress();
  if (status === "pending") {
    delete runs[runId];
  } else {
    runs[runId] = { status };
  }
  writeProgress(runs);
  res.json({ runs });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

**Step 7: Create initial progress.json**

Create `server/progress.json`:

```json
{
  "runs": {}
}
```

**Step 8: Add root package.json scripts**

Update the root `package.json` scripts:

```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:server\" \"npm run dev:app\"",
    "dev:app": "cd app && npm run dev",
    "dev:server": "tsx watch server/index.ts"
  }
}
```

**Step 9: Verify it runs**

Run: `cd /Users/craigverzosa/Documents/Personal/Hobbies/Running && npm run dev`

Expected: Vite starts on port 5173, Express on port 3001. Visiting `http://localhost:5173` shows default Vite page.

**Step 10: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Vite React + Express project with Tailwind"
```

---

### Task 2: Types and Training Plan Data

**Files:**
- Create: `app/src/types.ts`
- Create: `app/src/data/trainingPlan.ts`

**Step 1: Define shared types**

Create `app/src/types.ts`:

```ts
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
```

**Step 2: Create the full training plan data**

Create `app/src/data/trainingPlan.ts` with the complete plan. Each run gets a unique `id` like `"w1-r1"` and a specific `date` based on the weekly rhythm (Run 1 = Tue, Run 2 = Thu, Run 3 = Sat). Week 1 starts Feb 23, 2026 (Monday).

The file should export:

```ts
import { TrainingBlock } from "../types";

export const trainingPlan: TrainingBlock[] = [
  {
    name: "8K Training",
    raceDate: "2026-05-31",
    raceName: "8K",
    phases: [
      {
        name: "Foundation",
        phaseNumber: 1,
        weeks: [
          {
            weekNumber: 1,
            startDate: "2026-02-23",
            isDownWeek: false,
            runs: [
              { id: "w1-r1", type: "easy", description: "20 min: run 2 / walk 1", date: "2026-02-24" },
              { id: "w1-r2", type: "easy", description: "20 min: run 2 / walk 1", date: "2026-02-26" },
              { id: "w1-r3", type: "long", description: "25 min: run 2 / walk 1", date: "2026-02-28" },
            ],
          },
          {
            weekNumber: 2,
            startDate: "2026-03-02",
            isDownWeek: false,
            runs: [
              { id: "w2-r1", type: "easy", description: "22 min: run 3 / walk 1", date: "2026-03-03" },
              { id: "w2-r2", type: "easy", description: "22 min: run 3 / walk 1", date: "2026-03-05" },
              { id: "w2-r3", type: "long", description: "28 min: run 3 / walk 1", date: "2026-03-07" },
            ],
          },
          {
            weekNumber: 3,
            startDate: "2026-03-09",
            isDownWeek: false,
            runs: [
              { id: "w3-r1", type: "easy", description: "25 min: run 4 / walk 1", date: "2026-03-10" },
              { id: "w3-r2", type: "easy", description: "25 min: run 4 / walk 1", date: "2026-03-12" },
              { id: "w3-r3", type: "long", description: "30 min: run 5 / walk 1", date: "2026-03-14" },
            ],
          },
        ],
      },
      {
        name: "Base Building",
        phaseNumber: 2,
        weeks: [
          {
            weekNumber: 4, startDate: "2026-03-16", isDownWeek: false,
            runs: [
              { id: "w4-r1", type: "easy", description: "2 mi easy", date: "2026-03-17" },
              { id: "w4-r2", type: "easy", description: "2 mi easy", date: "2026-03-19" },
              { id: "w4-r3", type: "long", description: "2.5 mi easy", date: "2026-03-21" },
            ],
          },
          {
            weekNumber: 5, startDate: "2026-03-23", isDownWeek: false,
            runs: [
              { id: "w5-r1", type: "easy", description: "2.5 mi easy", date: "2026-03-24" },
              { id: "w5-r2", type: "easy", description: "2.5 mi easy", date: "2026-03-26" },
              { id: "w5-r3", type: "long", description: "3 mi easy", date: "2026-03-28" },
            ],
          },
          {
            weekNumber: 6, startDate: "2026-03-30", isDownWeek: false,
            runs: [
              { id: "w6-r1", type: "easy", description: "2.5 mi easy", date: "2026-03-31" },
              { id: "w6-r2", type: "easy", description: "2.5 mi easy", date: "2026-04-02" },
              { id: "w6-r3", type: "long", description: "3.5 mi easy", date: "2026-04-04" },
            ],
          },
          {
            weekNumber: 7, startDate: "2026-04-06", isDownWeek: true,
            runs: [
              { id: "w7-r1", type: "easy", description: "2 mi easy", date: "2026-04-07" },
              { id: "w7-r2", type: "easy", description: "2 mi easy", date: "2026-04-09" },
              { id: "w7-r3", type: "long", description: "2.5 mi easy", date: "2026-04-11" },
            ],
          },
          {
            weekNumber: 8, startDate: "2026-04-13", isDownWeek: false,
            runs: [
              { id: "w8-r1", type: "easy", description: "3 mi easy", date: "2026-04-14" },
              { id: "w8-r2", type: "easy", description: "3 mi easy", date: "2026-04-16" },
              { id: "w8-r3", type: "long", description: "4 mi easy", date: "2026-04-18" },
            ],
          },
        ],
      },
      {
        name: "Strength",
        phaseNumber: 3,
        weeks: [
          {
            weekNumber: 9, startDate: "2026-04-20", isDownWeek: false,
            runs: [
              { id: "w9-r1", type: "easy", description: "3 mi easy", date: "2026-04-21" },
              { id: "w9-r2", type: "workout", description: "3 mi w/ 4x2 min tempo", date: "2026-04-23" },
              { id: "w9-r3", type: "long", description: "4.5 mi easy", date: "2026-04-25" },
            ],
          },
          {
            weekNumber: 10, startDate: "2026-04-27", isDownWeek: false,
            runs: [
              { id: "w10-r1", type: "easy", description: "3 mi easy", date: "2026-04-28" },
              { id: "w10-r2", type: "workout", description: "3.5 mi w/ 2x8 min tempo", date: "2026-04-30" },
              { id: "w10-r3", type: "long", description: "5 mi easy", date: "2026-05-02" },
            ],
          },
          {
            weekNumber: 11, startDate: "2026-05-04", isDownWeek: true,
            runs: [
              { id: "w11-r1", type: "easy", description: "2.5 mi easy", date: "2026-05-05" },
              { id: "w11-r2", type: "easy", description: "2.5 mi easy", date: "2026-05-07" },
              { id: "w11-r3", type: "long", description: "3.5 mi easy", date: "2026-05-09" },
            ],
          },
          {
            weekNumber: 12, startDate: "2026-05-11", isDownWeek: false,
            runs: [
              { id: "w12-r1", type: "easy", description: "3 mi easy", date: "2026-05-12" },
              { id: "w12-r2", type: "workout", description: "4 mi w/ 15 min tempo", date: "2026-05-14" },
              { id: "w12-r3", type: "long", description: "5.5 mi easy", date: "2026-05-16" },
            ],
          },
        ],
      },
      {
        name: "Taper",
        phaseNumber: 4,
        weeks: [
          {
            weekNumber: 13, startDate: "2026-05-18", isDownWeek: false,
            runs: [
              { id: "w13-r1", type: "easy", description: "2.5 mi easy", date: "2026-05-19" },
              { id: "w13-r2", type: "workout", description: "3 mi w/ 4x1 min at 8K pace", date: "2026-05-21" },
              { id: "w13-r3", type: "long", description: "3 mi easy", date: "2026-05-23" },
            ],
          },
          {
            weekNumber: 14, startDate: "2026-05-25", isDownWeek: false,
            runs: [
              { id: "w14-r1", type: "easy", description: "2 mi easy", date: "2026-05-26" },
              { id: "w14-r2", type: "workout", description: "2 mi w/ 4x30s strides", date: "2026-05-28" },
              { id: "w14-r3", type: "race", description: "RACE: 8K", date: "2026-05-31" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Half Marathon Training",
    raceDate: "2026-10-03",
    raceName: "Half Marathon",
    phases: [
      {
        name: "Recovery",
        phaseNumber: 5,
        weeks: [
          {
            weekNumber: 15, startDate: "2026-06-01", isDownWeek: false,
            runs: [
              { id: "w15-r1", type: "easy", description: "3 mi easy", date: "2026-06-02" },
              { id: "w15-r2", type: "easy", description: "2 mi easy", date: "2026-06-04" },
              { id: "w15-r3", type: "easy", description: "3 mi easy", date: "2026-06-06" },
            ],
          },
        ],
      },
      {
        name: "Base Expansion",
        phaseNumber: 6,
        weeks: [], // To be detailed after 8K
      },
      {
        name: "Half Marathon Specific",
        phaseNumber: 7,
        weeks: [], // To be detailed after 8K
      },
      {
        name: "Taper",
        phaseNumber: 8,
        weeks: [], // To be detailed after 8K
      },
    ],
  },
];
```

Include every week and run from the training plan document. Dates are calculated from week start dates: Run 1 = Tuesday (+1 day from Monday start), Run 2 = Thursday (+3), Run 3 = Saturday (+5). The race on May 31 is a Sunday exception.

**Step 3: Commit**

```bash
git add app/src/types.ts app/src/data/trainingPlan.ts
git commit -m "feat: add types and complete training plan data"
```

---

### Task 3: Progress Hook and API Integration

**Files:**
- Create: `app/src/hooks/useProgress.ts`

**Step 1: Create the useProgress hook**

Create `app/src/hooks/useProgress.ts`:

```ts
import { useState, useEffect, useCallback } from "react";
import { ProgressData, RunStatus } from "../types";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>({ runs: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/progress")
      .then((res) => res.json())
      .then((data) => {
        setProgress(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const updateRun = useCallback(async (runId: string, status: RunStatus) => {
    // Optimistic update
    setProgress((prev) => {
      const next = { ...prev, runs: { ...prev.runs } };
      if (status === "pending") {
        delete next.runs[runId];
      } else {
        next.runs[runId] = { status };
      }
      return next;
    });

    const res = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ runId, status }),
    });
    const data = await res.json();
    setProgress(data);
  }, []);

  const getRunStatus = useCallback(
    (runId: string): RunStatus => {
      return progress.runs[runId]?.status as RunStatus ?? "pending";
    },
    [progress]
  );

  return { progress, loading, updateRun, getRunStatus };
}
```

**Step 2: Commit**

```bash
git add app/src/hooks/useProgress.ts
git commit -m "feat: add useProgress hook with optimistic updates"
```

---

### Task 4: App Shell, Routing, and Layout

**Files:**
- Modify: `app/src/App.tsx`
- Modify: `app/src/main.tsx`
- Create: `app/src/components/Layout.tsx`
- Delete: `app/src/App.css` (not needed with Tailwind)

**Step 1: Set up routing in main.tsx**

Update `app/src/main.tsx`:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

**Step 2: Create the Layout component with nav tabs**

Create `app/src/components/Layout.tsx`:

```tsx
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-10 bg-white border-b border-stone-200">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">Training Tracker</h1>
          <nav className="flex gap-1 bg-stone-100 rounded-lg p-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"
                }`
              }
            >
              Timeline
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"
                }`
              }
            >
              Calendar
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
```

**Step 3: Wire up App.tsx with routes**

Update `app/src/App.tsx`:

```tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TimelinePage from "./pages/TimelinePage";
import CalendarPage from "./pages/CalendarPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TimelinePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Route>
    </Routes>
  );
}
```

**Step 4: Create placeholder page components**

Create `app/src/pages/TimelinePage.tsx`:

```tsx
export default function TimelinePage() {
  return <div>Timeline view coming soon</div>;
}
```

Create `app/src/pages/CalendarPage.tsx`:

```tsx
export default function CalendarPage() {
  return <div>Calendar view coming soon</div>;
}
```

**Step 5: Delete unused files**

Delete `app/src/App.css` and `app/src/assets/react.svg` if present.

**Step 6: Verify routing works**

Run: `npm run dev`
Visit `http://localhost:5173` — should see "Training Tracker" header with Timeline/Calendar tabs. Clicking tabs switches routes.

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: add app shell with routing and nav tabs"
```

---

### Task 5: ProgressSummary Component

**Files:**
- Create: `app/src/components/ProgressSummary.tsx`
- Create: `app/src/utils/planHelpers.ts`

**Step 1: Create plan helper utilities**

Create `app/src/utils/planHelpers.ts` with functions:

- `getCurrentWeek(plan, today)` — returns the week whose date range contains today
- `getCurrentPhase(plan, today)` — returns the phase containing the current week
- `getNextRun(plan, progress, today)` — returns the next un-done run on or after today
- `getWeekRuns(week)` — returns the runs for a given week
- `countCompletedRuns(week, progress)` — counts done runs in a week

**Step 2: Build ProgressSummary component**

Create `app/src/components/ProgressSummary.tsx` that displays:
- Current week label (e.g., "Week 4 of 14 — Base Building")
- Progress bar (weeks completed / total weeks in block)
- Runs done this week (e.g., "1 of 3")
- Next run description and date

It receives `trainingPlan`, `progress`, and `getRunStatus` as props.

**Step 3: Commit**

```bash
git add app/src/components/ProgressSummary.tsx app/src/utils/planHelpers.ts
git commit -m "feat: add ProgressSummary component with plan helpers"
```

---

### Task 6: Timeline View — PhaseHeader and WeekCard Components

**Files:**
- Create: `app/src/components/PhaseHeader.tsx`
- Create: `app/src/components/WeekCard.tsx`
- Create: `app/src/components/RunItem.tsx`

**Step 1: Create RunItem component**

Create `app/src/components/RunItem.tsx`:

A single run row with:
- A three-state toggle: pending (empty circle) -> done (filled check) -> skipped (X mark) -> pending
- Run type badge: "Easy" (blue), "Workout" (orange), "Long" (green), "Race" (red)
- Run description text
- Clicking the toggle cycles through states and calls `updateRun`

**Step 2: Create WeekCard component**

Create `app/src/components/WeekCard.tsx`:

A card showing:
- Week number and date range header (e.g., "Week 5 — Mar 23")
- "Down Week" badge if `isDownWeek`
- Three RunItem components
- Visual states: current week gets a left border accent + slightly elevated; past weeks are muted (lower opacity); future weeks are normal

**Step 3: Create PhaseHeader component**

Create `app/src/components/PhaseHeader.tsx`:

- Phase name (e.g., "Phase 2: Base Building")
- Mini progress bar showing % of runs completed in this phase

**Step 4: Commit**

```bash
git add app/src/components/PhaseHeader.tsx app/src/components/WeekCard.tsx app/src/components/RunItem.tsx
git commit -m "feat: add PhaseHeader, WeekCard, and RunItem components"
```

---

### Task 7: Assemble Timeline Page

**Files:**
- Modify: `app/src/pages/TimelinePage.tsx`

**Step 1: Wire up TimelinePage**

Update `app/src/pages/TimelinePage.tsx` to:

1. Call `useProgress()` to get progress state
2. Import `trainingPlan` from data
3. Render `ProgressSummary` at top
4. For the first block ("8K Training"), render each phase with `PhaseHeader` + `WeekCard` list
5. For the second block ("Half Marathon Training"), render a collapsible preview section:
   - Collapsed: shows block name, race date, and phase names as a compact list
   - Expanded: shows the same PhaseHeader + WeekCard structure (mostly empty weeks for now)
6. Auto-scroll to the current week on initial load using a ref

**Step 2: Verify the timeline renders**

Run: `npm run dev`
Visit `http://localhost:5173` — should see the full 14-week plan with checkboxes. Click a checkbox — should toggle and persist (refresh to verify).

**Step 3: Commit**

```bash
git add app/src/pages/TimelinePage.tsx
git commit -m "feat: assemble timeline page with all components"
```

---

### Task 8: Calendar View — Calendar and CalendarDay Components

**Files:**
- Create: `app/src/components/Calendar.tsx`
- Create: `app/src/components/CalendarDay.tsx`
- Create: `app/src/components/RunPopover.tsx`

**Step 1: Create CalendarDay component**

Create `app/src/components/CalendarDay.tsx`:

A single day cell that:
- Shows the day number
- If runs exist on this date, shows colored dots (blue=easy, orange=workout, green=long, red=race)
- Dots are filled if done, hollow/outlined if pending, X if skipped
- Today's date gets a highlighted ring
- Clicking a day with runs opens a popover

**Step 2: Create RunPopover component**

Create `app/src/components/RunPopover.tsx`:

A small floating card that appears when clicking a calendar day:
- Shows the date
- Lists each run with its description and a toggle (same three-state as RunItem)
- Clicking outside or pressing Escape closes it

**Step 3: Create Calendar component**

Create `app/src/components/Calendar.tsx`:

A month-view calendar:
- Header row: month/year label with left/right navigation arrows
- Day-of-week headers (Sun–Sat)
- 6x7 grid of CalendarDay cells
- Constrain navigation between Feb 2026 and Oct 2026
- Race days (May 31, Oct 3) get a small flag/star marker on the day cell
- Build a lookup map: `Map<string, Run[]>` from date string to runs for efficient rendering

**Step 4: Commit**

```bash
git add app/src/components/Calendar.tsx app/src/components/CalendarDay.tsx app/src/components/RunPopover.tsx
git commit -m "feat: add Calendar, CalendarDay, and RunPopover components"
```

---

### Task 9: Assemble Calendar Page

**Files:**
- Modify: `app/src/pages/CalendarPage.tsx`

**Step 1: Wire up CalendarPage**

Update `app/src/pages/CalendarPage.tsx` to:

1. Call `useProgress()`
2. Import `trainingPlan`
3. Build the date-to-runs lookup map from trainingPlan
4. Render the `Calendar` component with progress and update callbacks
5. Default to the current month on load

**Step 2: Verify the calendar renders**

Run: `npm run dev`
Visit `http://localhost:5173/calendar` — should see Feb 2026 calendar. Navigate to March, April, etc. Run days should show colored dots. Click a day — popover with run details and toggles.

**Step 3: Commit**

```bash
git add app/src/pages/CalendarPage.tsx
git commit -m "feat: assemble calendar page with month navigation"
```

---

### Task 10: Visual Polish and Responsive Refinements

**Files:**
- Modify: various component files

**Step 1: Typography and spacing pass**

- Ensure consistent font sizes: headings `text-lg`/`text-base`, body `text-sm`
- Card padding: `p-4` on desktop, `p-3` on mobile
- Section spacing: `space-y-4` between week cards, `space-y-8` between phases

**Step 2: Responsive adjustments**

- WeekCard: full-width on mobile, centered max-w-2xl on desktop
- Calendar grid: cells sized to fill width on mobile, comfortable on desktop
- RunPopover: positioned above/below the day cell, centered on mobile
- Touch targets: checkboxes at least 44x44px on mobile

**Step 3: Subtle transitions**

- Checkbox state change: 150ms color transition
- Popover: fade in/out 150ms
- Progress bars: width transition 300ms ease

**Step 4: Current week auto-scroll**

On timeline page load, scroll the current week card into view with `scrollIntoView({ behavior: "smooth", block: "center" })`.

**Step 5: Verify on mobile viewport**

Use browser dev tools to test at 375px and 768px widths.

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: visual polish and responsive refinements"
```

---

### Task 11: Final Verification

**Step 1: Full feature test**

1. Start the app: `npm run dev`
2. Timeline view: verify all 14 weeks render, checkboxes toggle through 3 states, progress summary updates
3. Calendar view: navigate Feb → May 2026, verify dots render, click a day and toggle runs
4. Persistence: toggle some runs, refresh browser, verify state persists
5. Responsive: test at mobile (375px) and desktop (1200px) widths
6. Check `server/progress.json` — verify it updates on disk

**Step 2: Final commit**

```bash
git add -A
git commit -m "feat: training tracker website complete"
```
