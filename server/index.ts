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
