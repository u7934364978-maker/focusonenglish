/**
 * Texto para TTS / transcripción en ejercicios listening:
 * `content.passage`, `transcript`, `text`, o parlamento antes de \n\n + enunciado de comprensión.
 */
export function resolveListeningScript(
  exercise: { transcript?: string; type?: string },
  exerciseContent: {
    transcript?: string;
    passage?: string;
    text?: string;
    questions?: Array<{ question?: string }>;
  }
): string {
  const candidates = [
    exercise.transcript,
    exerciseContent.transcript,
    exerciseContent.passage,
    exerciseContent.text,
  ];
  for (const c of candidates) {
    if (typeof c === 'string' && c.trim().length > 0) return c.trim();
  }

  const qtext = exerciseContent.questions?.[0]?.question;
  if (typeof qtext !== 'string') return '';

  const parts = qtext.split(/\n\n+/);
  if (parts.length >= 2) {
    const first = parts[0].trim();
    const rest = parts.slice(1).join('\n\n').trim();
    if (first.length < 24) return '';

    const looksLikeComprehensionStem =
      /^(What |Which |According |How |Why |Who |When |Where |Identify |State |The statement|Statement:|True,|False,|Not given|Is the|Are the|Choose |Select |Complete |Fill |Essay )/i.test(
        rest
      );
    if (looksLikeComprehensionStem) return first;
  }

  // Una sola línea: … "cita o parlamento." What / Which / According …
  const oneLine = qtext.trim();
  const splitRe =
    /"\s+(What |Which |How |According |Who |When |Where |Identify |State |The statement|Statement:|Does |Is |Are |Choose |Select |Complete |Fill |Essay )/i;
  const m = oneLine.match(splitRe);
  if (m?.index != null && m.index >= 24) {
    return oneLine.slice(0, m.index + 1).trim();
  }

  return '';
}
