import { useRef, useEffect, useState } from "react";
import { trainingPlan } from "../data/trainingPlan";
import { useProgress } from "../hooks/useProgress";
import ProgressSummary from "../components/ProgressSummary";
import PhaseHeader from "../components/PhaseHeader";
import WeekCard from "../components/WeekCard";
import { getActiveBlock, getCurrentWeek, todayString } from "../utils/planHelpers";

export default function TimelinePage() {
  const { progress, loading, updateRun, getRunStatus } = useProgress();
  const currentWeekRef = useRef<HTMLDivElement>(null);
  const [halfMarathonExpanded, setHalfMarathonExpanded] = useState(false);

  const today = todayString();
  const activeBlock = getActiveBlock(trainingPlan, today);
  const currentWeek = activeBlock ? getCurrentWeek(activeBlock, today) : null;

  // Auto-scroll to current week on mount
  useEffect(() => {
    if (!loading && currentWeekRef.current) {
      currentWeekRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [loading]);

  if (loading) {
    return <div className="text-center py-12 text-stone-400">Loading...</div>;
  }

  const eightKBlock = trainingPlan[0]; // 8K Training
  const halfBlock = trainingPlan[1];   // Half Marathon Training

  return (
    <div>
      <ProgressSummary plan={trainingPlan} progress={progress} />

      {/* 8K Training Block */}
      {eightKBlock.phases.map((phase) => (
        <div key={phase.phaseNumber}>
          <PhaseHeader phase={phase} progress={progress} />
          <div className="space-y-3">
            {phase.weeks.map((week) => {
              const isCurrent = currentWeek?.weekNumber === week.weekNumber;
              const isPast = currentWeek ? week.weekNumber < currentWeek.weekNumber : false;
              return (
                <div
                  key={week.weekNumber}
                  ref={isCurrent ? currentWeekRef : undefined}
                >
                  <WeekCard
                    week={week}
                    getRunStatus={getRunStatus}
                    onToggle={updateRun}
                    isCurrent={isCurrent}
                    isPast={isPast}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Half Marathon Preview */}
      {halfBlock && (
        <div className="mt-10 border-t border-stone-200 pt-6">
          <button
            onClick={() => setHalfMarathonExpanded(!halfMarathonExpanded)}
            className="w-full flex items-center justify-between text-left"
          >
            <div>
              <h2 className="text-base font-semibold text-stone-900">
                {halfBlock.name}
              </h2>
              <p className="text-sm text-stone-500">
                {halfBlock.raceName} — {new Date(halfBlock.raceDate + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>
            <svg
              className={`w-5 h-5 text-stone-400 transition-transform ${halfMarathonExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {halfMarathonExpanded && (
            <div className="mt-4">
              {halfBlock.phases.map((phase) => (
                <div key={phase.phaseNumber}>
                  <PhaseHeader phase={phase} progress={progress} />
                  {phase.weeks.length > 0 ? (
                    <div className="space-y-3">
                      {phase.weeks.map((week) => (
                        <WeekCard
                          key={week.weekNumber}
                          week={week}
                          getRunStatus={getRunStatus}
                          onToggle={updateRun}
                          isCurrent={false}
                          isPast={false}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-stone-400 italic py-2">
                      Details to be added after 8K race
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
