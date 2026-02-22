# Training Tracker Website — Design Doc

**Date:** 2026-02-22
**Purpose:** A web app to visually track progress through a 14-week 8K training plan and 18-week half marathon plan.

---

## Requirements

- Simple checkbox tracking: mark runs as done or skipped
- Two views: vertical timeline (by phase/week) and month calendar
- Clean, minimal visual style
- Responsive: works on desktop and mobile
- Data persisted to a JSON file on disk via a local Express server

---

## Architecture

```
Running/
├── app/                        # Vite + React frontend
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   │   ├── Timeline.tsx          # Main phase/week timeline view
│   │   │   ├── WeekCard.tsx          # Single week with 3 run checkboxes
│   │   │   ├── PhaseHeader.tsx       # Phase label + progress bar
│   │   │   ├── ProgressSummary.tsx   # Top-level stats
│   │   │   ├── Calendar.tsx          # Month-view calendar page
│   │   │   └── CalendarDay.tsx       # Single day cell with run indicator
│   │   ├── data/
│   │   │   └── trainingPlan.ts       # Full plan as structured data
│   │   └── types.ts
│   └── ...
├── server/
│   ├── index.ts                 # Express server
│   └── progress.json            # Persisted check-off data
├── 2026-training-plan.md        # Existing plan document
└── package.json
```

### Data Flow

1. App loads -> fetches `GET /api/progress` -> renders plan with saved check states
2. User clicks checkbox -> `POST /api/progress` -> server writes to `progress.json`
3. Plan data is hardcoded in `trainingPlan.ts` (static, not fetched)

---

## Visual Layout

### View 1: Timeline (default route `/`)

Three zones in a single scrollable page:

**Top — Progress Summary:**
- Current week label (e.g., "Week 4 of 14 — Base Building")
- Overall progress bar spanning the active training block
- Runs completed this week (e.g., "1 of 3")
- Next upcoming run

**Middle — Phase Timeline:**
- Each phase is a section with a header and progress bar
- Week cards stacked vertically, each showing:
  - Week number + date range
  - Three run items with checkbox, description, and type indicator (Easy/Workout/Long)
- Current week highlighted; past weeks muted; future weeks subtle

**Bottom — Half Marathon Preview:**
- Collapsed section showing high-level half marathon phases
- Expandable to show phase details

### View 2: Calendar (route `/calendar`)

- Standard month-view grid (Sun–Sat columns)
- Month navigation arrows (Feb 2026 – Oct 2026)
- Run days show color-coded dots:
  - Blue = Easy, Orange = Workout, Green = Long
  - Filled = done, Hollow = not yet done
- Race days (May 31, Oct 3) get a special flag marker
- Click a run day -> popover with details + checkbox
- Today highlighted

**Navigation:** Tab toggle at top: Timeline | Calendar

---

## Data Model

### Plan Structure (`trainingPlan.ts`)

```ts
type RunType = "easy" | "workout" | "long" | "race";

interface Run {
  id: string;           // e.g., "w4-r1"
  type: RunType;
  description: string;  // e.g., "2 mi easy"
  date?: string;        // ISO date for calendar
}

interface Week {
  weekNumber: number;
  startDate: string;
  isDownWeek: boolean;
  runs: Run[];
}

interface Phase {
  name: string;
  phaseNumber: number;
  weeks: Week[];
}

interface TrainingBlock {
  name: string;
  raceDate: string;
  raceName: string;
  phases: Phase[];
}
```

### Progress Storage (`progress.json`)

```json
{
  "runs": {
    "w4-r1": { "status": "done" },
    "w4-r2": { "status": "skipped" }
  }
}
```

Only done/skipped runs stored. Absence = pending.

### API

- `GET /api/progress` — returns progress JSON
- `POST /api/progress` — body: `{ runId, status }` — updates one run. Status "pending" removes the entry.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS |
| Routing | React Router v6 |
| Calendar | Custom component (no library) |
| Backend | Express.js + TypeScript |
| Dev | `npm run dev` runs Vite + Express concurrently |

Vite proxy routes `/api/*` to Express during development.

---

## Visual Style

- Clean and minimal
- Neutral background, dark text
- Single accent color for current week and completed states
- Subtle checkbox transitions only (no heavy animations)
- Max-width ~700px centered content column on desktop
- Full-width cards with large touch targets on mobile
