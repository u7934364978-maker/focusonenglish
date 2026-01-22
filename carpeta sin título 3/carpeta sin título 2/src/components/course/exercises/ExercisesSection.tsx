import { promises as fs } from "fs";
import path from "path";
import PracticePanel from "./PracticePanel.client";
import type { ExercisesFile } from "./types";

export default async function ExercisesSection({
  goal,
  level,
  weekId,
}: {
  goal: string;
  level: string;
  weekId: string;
}) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "cursos",
    goal,
    level,
    weekId,
    "exercises.json"
  );

  const raw = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(raw) as ExercisesFile;

  const storageKey = `practice-open:${goal}:${level}:${weekId}`;

  return <PracticePanel data={data} storageKey={storageKey} />;
}
