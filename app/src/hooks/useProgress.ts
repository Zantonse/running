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
      return (progress.runs[runId]?.status as RunStatus) ?? "pending";
    },
    [progress]
  );

  return { progress, loading, updateRun, getRunStatus };
}
