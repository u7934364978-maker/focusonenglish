import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

import ExercisesSection from "@/components/course/exercises/ExercisesSection";
import MaterialTabs from "@/components/course/MaterialTabs.client";

type PageProps = {
  params: Promise<{ goal: string; level: string; week: string }>;
};

async function readText(filePath: string) {
  return fs.readFile(filePath, "utf8");
}

async function pathExists(p: string) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function parseWeekNumber(week: string) {
  const m = week.match(/^semana-(\d{2})$/);
  if (!m) return null;
  return Number(m[1]);
}

function buildWeekSlug(n: number) {
  return `semana-${pad2(n)}`;
}

export default async function WeekPage({ params }: PageProps) {
  const { goal, level, week } = await params;

  const base = path.join(process.cwd(), "src", "content", "cursos", goal, level, week);

  const metaPath = path.join(base, "meta.json");
  const grammarPath = path.join(base, "grammar.md");
  const vocabPath = path.join(base, "vocabulary.md");
  const readingPath = path.join(base, "reading.md");
  const writingPath = path.join(base, "writing.md");

  let meta: any = null;
  try {
    meta = JSON.parse(await readText(metaPath));
  } catch {
    meta = null;
  }

  const [grammar, vocabulary, reading, writing] = await Promise.all([
    readText(grammarPath),
    readText(vocabPath),
    readText(readingPath),
    readText(writingPath),
  ]);

  const title = meta?.title || `${goal.toUpperCase()} — ${level.toUpperCase()} — ${week}`;

  // Prev/Next disabled if folder doesn't exist
  const n = parseWeekNumber(week);
  const prevWeek = n && n > 1 ? buildWeekSlug(n - 1) : null;
  const nextWeek = n && n < 36 ? buildWeekSlug(n + 1) : null;

  const prevPath = prevWeek
    ? path.join(process.cwd(), "src", "content", "cursos", goal, level, prevWeek)
    : null;
  const nextPath = nextWeek
    ? path.join(process.cwd(), "src", "content", "cursos", goal, level, nextWeek)
    : null;

  const prevAvailable = prevPath ? await pathExists(prevPath) : false;
  const nextAvailable = nextPath ? await pathExists(nextPath) : false;

  const prevHref = prevWeek ? `/app/cursos/${goal}/${level}/${prevWeek}` : null;
  const nextHref = nextWeek ? `/app/cursos/${goal}/${level}/${nextWeek}` : null;

  const materialStorageKey = `material-tab:${goal}:${level}:${week}`;

  return (
    <main className="mx-auto max-w-[980px] px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="text-[12px] font-extrabold text-slate-500">
        <span className="inline-flex flex-wrap items-center gap-2">
          <Link className="hover:text-slate-700" href="/">
            Home
          </Link>
          <span>/</span>
          <Link className="hover:text-slate-700" href="/app/cursos">
            Cursos
          </Link>
          <span>/</span>
          <Link className="hover:text-slate-700" href={`/app/cursos/${goal}`}>
            {goal}
          </Link>
          <span>/</span>
          <Link className="hover:text-slate-700" href={`/app/cursos/${goal}/${level}`}>
            {level}
          </Link>
          <span>/</span>
          <span className="text-slate-700">{week}</span>
        </span>
      </nav>

      <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">{title}</h1>

      {/* Top actions */}
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href={`/app/cursos/${goal}/${level}`}
          className="inline-flex h-11 items-center justify-center rounded-[14px] border border-slate-200 bg-white px-5 text-sm font-black text-slate-800 hover:bg-slate-50"
        >
          ← Volver al curriculum
        </Link>

        <Link
          href="/app/cursos"
          className="inline-flex h-11 items-center justify-center rounded-[14px] border border-slate-200 bg-white px-5 text-sm font-black text-slate-800 hover:bg-slate-50"
        >
          Ver cursos
        </Link>
      </div>

      {/* Week navigation */}
      <div className="mt-4 flex flex-wrap gap-3">
        {prevHref && prevAvailable ? (
          <Link
            href={prevHref}
            className="inline-flex h-11 items-center justify-center rounded-[14px] border border-slate-200 bg-slate-50 px-5 text-sm font-black text-slate-900 hover:bg-slate-100"
          >
            ← Semana anterior
          </Link>
        ) : (
          <span className="inline-flex h-11 items-center justify-center rounded-[14px] border border-slate-200 bg-slate-50 px-5 text-sm font-black text-slate-400">
            ← Semana anterior
          </span>
        )}

        {nextHref && nextAvailable ? (
          <Link
            href={nextHref}
            className="inline-flex h-11 items-center justify-center rounded-[14px] border border-slate-200 bg-slate-50 px-5 text-sm font-black text-slate-900 hover:bg-slate-100"
          >
            Semana siguiente →
          </Link>
        ) : (
          <span className="inline-flex h-11 items-center justify-center rounded-[14px] border border-slate-200 bg-slate-50 px-5 text-sm font-black text-slate-400">
            Semana siguiente →
          </span>
        )}
      </div>

      {/* Material Tabs */}
      <MaterialTabs
        storageKey={materialStorageKey}
        grammar={grammar}
        vocabulary={vocabulary}
        reading={reading}
        writing={writing}
      />

      {/* Practice (collapsible inside ExercisesSection) */}
      <ExercisesSection goal={goal} level={level} weekId={week} />
    </main>
  );
}

