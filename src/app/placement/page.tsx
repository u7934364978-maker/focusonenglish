import fs from "node:fs";
import path from "node:path";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

type Question = {
  id: string;
  goal: "emailing";
  level: "b1";
  skill: "mcq" | "fillBlank";
  prompt: string;
  sentence: string;
  options: [string, string, string];
  answerIndex: 0 | 1 | 2;
};

type Bank = {
  version: number;
  generatedAt: string;
  questions: Question[];
};

function loadBank(): Bank {
  const p = path.join(process.cwd(), "src/content/placement/emailing-b1.generated.json");
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

export default async function PlacementPage(props: {
  searchParams?: Promise<Record<string, string | string[]>>;
}) {
  const bank = loadBank();
  const sp = (await props.searchParams) ?? {};

  const answers: Record<string, number> = {};
  for (const q of bank.questions) {
    const key = `a_${q.id}`;
    const raw = sp[key];
    const v = Array.isArray(raw) ? raw[0] : raw;
    if (v === "0" || v === "1" || v === "2") answers[q.id] = Number(v);
  }

  const hasSubmitted = Object.keys(answers).length > 0;

  if (hasSubmitted) {
    let correct = 0;
    for (const q of bank.questions) {
      if (answers[q.id] === q.answerIndex) correct++;
    }
    const score = Math.round((correct / bank.questions.length) * 100);

    // Umbral simple: 70% = listo para B1
    if (score >= 70) {
      redirect(`/app/cursos/emailing/b1?placementScore=${score}`);
    } else {
      redirect(`/app/cursos/emailing/b1?mode=refuerzo&placementScore=${score}`);
    }
  }

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px", fontFamily: "system-ui" }}>
      <h1>Test de nivel · Emailing B1</h1>
      <p style={{ color: "#555" }}>
        Este test se genera a partir de ejercicios reales del curso (MCQ + Fill blanks). Al terminar, te llevamos al curso.
      </p>

      <form>
        {bank.questions.map((q, idx) => (
          <section key={q.id} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16, margin: "12px 0" }}>
            <div style={{ fontWeight: 700 }}>Pregunta {idx + 1}</div>
            <div style={{ color: "#555", marginTop: 6 }}>{q.prompt}</div>
            {q.sentence ? <div style={{ marginTop: 8 }}>{q.sentence}</div> : null}

            <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
              {q.options.map((opt, i) => (
                <label key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <input type="radio" name={`a_${q.id}`} value={String(i)} required={i === 0} />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </section>
        ))}

        <button type="submit" style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #222" }}>
          Terminar y continuar →
        </button>
      </form>
    </main>
  );
}
