import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
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

  const examPath = path.join(
    process.cwd(),
    "src",
    "content",
    "cursos",
    goal,
    level,
    weekId,
    "exam.json"
  );
  const hasExam = await pathExists(examPath);
  let examId = null;
  if (hasExam) {
    try {
      const examMeta = JSON.parse(await fs.readFile(examPath, "utf8"));
      examId = examMeta.examId;
    } catch {
      // ignore
    }
  }

  return (
    <div>
      <PracticePanel data={data} storageKey={storageKey} />
      {hasExam && examId && (
        <div className="mt-6 rounded-3xl border-2 border-amber-200 bg-amber-50 p-8 text-center shadow-lg shadow-amber-100">
          <div className="text-3xl mb-3">🎓</div>
          <h3 className="text-xl font-black text-amber-900">Weekly Mock Exam</h3>
          <p className="mt-2 text-sm text-amber-800">
            You've completed the practice. Now test your knowledge with a timed mock exam!
          </p>
          <Link
            href={`/app/exams/${examId}`}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-amber-600 px-8 text-base font-black text-white hover:bg-amber-700 transition shadow-md hover:shadow-lg"
          >
            Start Mock Exam
          </Link>
        </div>
      )}
    </div>
  );
}

async function pathExists(p: string) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}
