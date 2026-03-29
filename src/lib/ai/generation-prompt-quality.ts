/**
 * Reglas de calidad pedagógica inyectadas en prompts de generación (Llama).
 * Deben alinearse con `docs/normas-items-curriculum.md` y con `pedagogy-quality-rules.ts`.
 */
export const GENERATION_PEDAGOGY_QUALITY_BLOCK_EN = `
=== GENERATION QUALITY (mandatory for every exercise) ===
- One primary learning target per item; do not mix unrelated grammar points in the same stem unless the objective explicitly requires it.
- Explanations must TEACH: 2–4 short sentences (why the answer is correct, common mistake to avoid). Do not answer with only "Correct" or "Wrong".
- Multiple choice: distractors must be plausible but only ONE option is fully correct; avoid overlapping meanings between two "correct-looking" options.
- True/false: only for a short declarative statement that is unambiguously true or false in standard English. Do NOT use true/false if the learner must "choose the correct verb/word/article" or if the stem has fill-in blanks (___); use multiple-choice or fill-blank.
- Multiple choice: do not reveal the answer in parentheses in the stem (e.g. avoid "my ____ (mother)" when "mother" is an option).
- A1–A2 reading/listening: questions must be answerable from EXPLICIT information in the passage/transcript; no heavy inference.
- Do not contradict your own answer key: wording must not admit a second defensible correct answer in closed items.
`.trim();

/** Versión corta para system prompt. */
export const GENERATION_PEDAGOGY_QUALITY_SYSTEM_ONE_LINER =
  'Every item: single clear objective, teaching explanation (not just "Correct"), one unambiguous key in closed formats, A1–A2 comprehension items explicit only.';
