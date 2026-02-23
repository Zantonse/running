import { trainingPlan } from "../data/trainingPlan";
import { useProgress } from "../hooks/useProgress";
import Calendar from "../components/Calendar";

export default function CalendarPage() {
  const { loading, updateRun, getRunStatus } = useProgress();

  if (loading) {
    return <div className="text-center py-12 text-stone-400">Loading...</div>;
  }

  return (
    <Calendar
      plan={trainingPlan}
      getRunStatus={getRunStatus}
      onToggle={updateRun}
    />
  );
}
