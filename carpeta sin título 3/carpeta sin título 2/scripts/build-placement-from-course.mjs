import fs from "node:fs";
import path from "node:path";

const COURSE_FILES = [
  "src/content/cursos/emailing/b1/semana-01/exercises.json",
  "src/content/cursos/emailing/b1/semana-02/exercises.json",
  "src/content/cursos/emailing/b1/semana-03/exercises.json"
];

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function countHoles(t) {
  return (String(t).match(/____/g) || []).length;
}

// Determinista (para que el banco no cambie cada vez)
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function pick(arr, rng) {
  return arr[Math.floor(rng() * arr.length)];
}

function normalizeTextForOneHole(fullText, holeIndex) {
  // convierte el email en “pregunta” mostrando solo UNA línea con hueco:
  // tomamos la línea donde cae ese hueco.
  const lines = String(fullText).replace(/\r\n/g, "\n").split("\n");
  let seen = 0;
  for (const line of lines) {
    const holes = (line.match(/____/g) || []).length;
    if (holes === 0) continue;
    if (seen + holes > holeIndex) {
      // esa línea contiene el hueco objetivo
      return line.trim();
    }
    seen += holes;
  }
  // fallback: primer renglón con hueco
  return lines.find(l => l.includes("____"))?.trim() || String(fullText).trim();
}

function buildFromFile(filePath) {
  const data = readJson(filePath);
  const items = data.items || [];
  const week = filePath.split("/").slice(-2, -1)[0]; // semana-01

  const mcq = items
    .filter(it => it.type === "multipleChoice")
    .map(it => ({
      id: `pl-${it.id}`,
      goal: "emailing",
      level: "b1",
      skill: "mcq",
      source: { filePath, week, itemId: it.id, type: it.type },
      prompt: it.prompt || "Choose the best option:",
      sentence: "", // ya está en prompt normalmente
      options: it.options,
      answerIndex: it.answerIndex
    }));

  const fills = items
    .filter(it => it.type === "fillBlanks")
    .flatMap(it => {
      const holes = countHoles(it.text || "");
      if (!Array.isArray(it.choices) || it.choices.length !== holes) return [];

      // Elegimos 1 hueco (determinista por id)
      const rng = mulberry32(hashStr(it.id));
      const holeIndex = Math.floor(rng() * holes);

      const opts = it.choices[holeIndex];
      if (!Array.isArray(opts) || opts.length !== 3) return [];

      const sentence = normalizeTextForOneHole(it.text || "", holeIndex);

      // answerIndex: dónde cae it.answers[holeIndex] dentro de opts (si existe)
      const ans = Array.isArray(it.answers) ? it.answers[holeIndex] : null;
      let answerIndex = 0;
      if (typeof ans === "string") {
        const idx = opts.findIndex(x => String(x).trim() === ans.trim());
        if (idx >= 0) answerIndex = idx;
      }

      return [{
        id: `pl-${it.id}-h${holeIndex + 1}`,
        goal: "emailing",
        level: "b1",
        skill: "fillBlank",
        source: { filePath, week, itemId: it.id, type: it.type, holeIndex },
        prompt: "Completa el hueco con la mejor opción:",
        sentence,
        options: [String(opts[0]), String(opts[1]), String(opts[2])],
        answerIndex
      }];
    });

  return [...mcq, ...fills];
}

function uniqById(arr) {
  const seen = new Set();
  return arr.filter(x => (seen.has(x.id) ? false : (seen.add(x.id), true)));
}

function main() {
  const all = uniqById(COURSE_FILES.flatMap(buildFromFile));

  // Selección final: 36 preguntas (18 MCQ + 18 fillBlank) si hay suficientes
  const rng = mulberry32(123456);
  const mcq = all.filter(q => q.skill === "mcq");
  const fill = all.filter(q => q.skill === "fillBlank");

  // shuffle determinista
  const shuffle = (a) => {
    const b = [...a];
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  };

  const mcqPick = shuffle(mcq).slice(0, 18);
  const fillPick = shuffle(fill).slice(0, 18);

  const final = shuffle([...mcqPick, ...fillPick]);

  const out = {
    version: 1,
    generatedAt: new Date().toISOString(),
    source: {
      goal: "emailing",
      level: "b1",
      files: COURSE_FILES
    },
    questions: final
  };

  const outPath = "src/content/placement/emailing-b1.generated.json";
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n", "utf8");

  console.log("OK generated:", outPath);
  console.log("Questions:", final.length, "| mcq:", mcqPick.length, "| fillBlank:", fillPick.length);
}

main();
