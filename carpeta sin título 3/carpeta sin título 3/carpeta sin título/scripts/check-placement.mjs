import fs from "node:fs";

const p = "src/content/placement/questions.json";
const bank = JSON.parse(fs.readFileSync(p, "utf8"));

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

assert(Array.isArray(bank.questions), "questions debe ser un array");
assert(bank.questions.length >= 6, "Añade al menos 6 preguntas (mínimo).");

for (const q of bank.questions) {
  assert(typeof q.id === "string" && q.id.length > 0, "Pregunta sin id");
  assert(Array.isArray(q.options) && q.options.length === 3, `${q.id}: options debe tener 3 items`);
  assert([0, 1, 2].includes(q.answerIndex), `${q.id}: answerIndex debe ser 0/1/2`);
  assert(typeof q.prompt === "string", `${q.id}: prompt string`);
  assert(typeof q.sentence === "string", `${q.id}: sentence string`);
}

console.log("OK placement bank:", bank.questions.length, "questions");
