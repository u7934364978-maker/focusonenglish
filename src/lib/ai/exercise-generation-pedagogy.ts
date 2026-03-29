/**
 * Bloque pedagógico para prompts de generación de ejercicios (Llama).
 * Alineado con `docs/normas-items-curriculum.md` (comprensión explícita en A1, etc.).
 */

export interface ReadingComprehensionPedagogy {
  /** p. ej. main_idea, explicit_detail, inference, lexis_in_context, reference */
  focusTypes?: string[];
  notes?: string;
}

export interface ListeningComprehensionPedagogy {
  /** p. ej. gist, specific_information, attitude, inference */
  focusTypes?: string[];
  notes?: string;
}

/**
 * Campos opcionales del body POST /api/generate-exercises (`pedagogy`).
 */
export interface ExerciseGenerationPedagogyBody {
  /** Resultados de aprendizaje: qué debe consolidar el alumno con este lote */
  learningObjectives?: string[];
  /** Cómo aplicar repetición espaciada / repaso (texto libre para el modelo) */
  spacedRepetitionNotes?: string;
  /** Si true, el prompt insiste en repasar `weakTopics` y no solo “mencionarlos” */
  emphasizeSpacedRepetition?: boolean;
  /** Léxico objetivo (palabras o micro-temas) */
  vocabulary?: string[];
  /** Frases o chunks fijos a incluir o practicar */
  expressions?: string[];
  /** Puntos gramaticales a priorizar */
  grammarFocus?: string[];
  readingComprehension?: ReadingComprehensionPedagogy;
  listeningComprehension?: ListeningComprehensionPedagogy;
  /** Qué debe aprender a decir en voz alta (funciones, rutinas, pronunciación objetivo) */
  speakingGoals?: string[];
}

const READING_FOCUS_GUIDE = `
Reading comprehension — typical focus types (pick those relevant to CEFR level; A1–A2: prioritize explicit_detail / main_idea; inference only if level B1+):
- main_idea / gist: global understanding of the passage
- explicit_detail: answer is directly stated
- inference: reasonable implication (B1+)
- lexis_in_context: vocabulary meaning from context
- reference: pronouns, connectors, substitution
`.trim();

const LISTENING_FOCUS_GUIDE = `
Listening comprehension — typical focus types:
- gist: overall topic or purpose
- specific_information: numbers, names, places, times
- attitude_intention: how the speaker feels or what they want
- inference: implied meaning (B1+)
- speaker_relationship: context between interlocutors
`.trim();

const ORAL_PRODUCTION_GUIDE = `
Speaking / oral goals: align pronunciation, sentence-building, or role-style prompts so the learner practises functional language (greetings, requests, opinions, routines) at the stated CEFR level; keep expected oral models short and natural.
`.trim();

function nonEmpty<T>(arr: T[] | undefined): arr is T[] {
  return Array.isArray(arr) && arr.length > 0;
}

/**
 * Sección en inglés para el user prompt del modelo.
 */
export function buildPedagogyPromptSection(
  pedagogy: ExerciseGenerationPedagogyBody | undefined,
  ctx: { weakTopics: string[]; level: string },
): string {
  const p = pedagogy ?? {};
  const hasWeak = nonEmpty(ctx.weakTopics);
  const hasAny =
    nonEmpty(p.learningObjectives) ||
    p.spacedRepetitionNotes?.trim() ||
    p.emphasizeSpacedRepetition ||
    hasWeak ||
    nonEmpty(p.vocabulary) ||
    nonEmpty(p.expressions) ||
    nonEmpty(p.grammarFocus) ||
    p.readingComprehension?.focusTypes?.length ||
    p.readingComprehension?.notes?.trim() ||
    p.listeningComprehension?.focusTypes?.length ||
    p.listeningComprehension?.notes?.trim() ||
    nonEmpty(p.speakingGoals);

  if (!hasAny) {
    return '';
  }

  const lines: string[] = ['=== PEDAGOGICAL CONSTRAINTS (must follow) ==='];

  if (nonEmpty(p.learningObjectives)) {
    lines.push('Learning objectives for this batch (embed in items naturally):');
    p.learningObjectives.forEach((o) => lines.push(`- ${o}`));
  }

  const srParts: string[] = [];
  if (p.emphasizeSpacedRepetition || hasWeak) {
    srParts.push(
      'Apply spaced-repetition logic: recycle and vary previously weak or due material; do not only introduce brand-new items—mix retrieval practice.',
    );
  }
  if (hasWeak) {
    srParts.push(`Weak / priority topics to spiral into exercises: ${ctx.weakTopics.join('; ')}.`);
  }
  if (p.spacedRepetitionNotes?.trim()) {
    srParts.push(p.spacedRepetitionNotes.trim());
  }
  if (srParts.length) {
    lines.push('');
    lines.push('Spaced repetition & review:');
    srParts.forEach((s) => lines.push(s));
  }

  if (nonEmpty(p.vocabulary)) {
    lines.push('');
    lines.push(`Target vocabulary (use naturally, not as a mere list): ${p.vocabulary.join(', ')}.`);
  }

  if (nonEmpty(p.expressions)) {
    lines.push('');
    lines.push(`Target expressions / chunks: ${p.expressions.join(' | ')}.`);
  }

  if (nonEmpty(p.grammarFocus)) {
    lines.push('');
    lines.push(`Grammar focus: ${p.grammarFocus.join('; ')}.`);
  }

  const rc = p.readingComprehension;
  if (rc && (nonEmpty(rc.focusTypes) || rc.notes?.trim())) {
    lines.push('');
    lines.push(READING_FOCUS_GUIDE);
    if (nonEmpty(rc.focusTypes)) {
      lines.push(`Requested reading focus types for this batch: ${rc.focusTypes.join(', ')}.`);
    }
    if (rc.notes?.trim()) {
      lines.push(rc.notes.trim());
    }
  }

  const lc = p.listeningComprehension;
  if (lc && (nonEmpty(lc.focusTypes) || lc.notes?.trim())) {
    lines.push('');
    lines.push(LISTENING_FOCUS_GUIDE);
    if (nonEmpty(lc.focusTypes)) {
      lines.push(`Requested listening focus types for this batch: ${lc.focusTypes.join(', ')}.`);
    }
    if (lc.notes?.trim()) {
      lines.push(lc.notes.trim());
    }
  }

  if (nonEmpty(p.speakingGoals)) {
    lines.push('');
    lines.push(ORAL_PRODUCTION_GUIDE);
    lines.push('Oral / speaking learning goals (what the learner should practise saying):');
    p.speakingGoals.forEach((g) => lines.push(`- ${g}`));
  }

  if (ctx.level === 'A1' || ctx.level === 'A2') {
    lines.push('');
    lines.push(
      'CEFR note: For A1–A2 reading/listening, questions must be answerable from explicit information in the text or transcript; avoid heavy inference.',
    );
  }

  lines.push('');
  lines.push(
    'Ensure exercises visibly reflect these constraints (not generic filler): stems, contexts, and explanations should show the objectives.',
  );

  return `\n${lines.join('\n')}\n`;
}
