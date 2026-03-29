/**
 * Entrelaza dos listas (p. ej. repasos + nuevos) para alternar en la sesión.
 */
export function interleave<T>(primary: T[], secondary: T[]): T[] {
  const out: T[] = [];
  const maxLen = Math.max(primary.length, secondary.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < primary.length) out.push(primary[i]);
    if (i < secondary.length) out.push(secondary[i]);
  }
  return out;
}
