/**
 * Nombre de producto unificado para la sesión diaria A1 (UI + prompts de generación).
 * Evita mezclar “Sesión diaria” / “Sesión del día” en la misma pantalla.
 *
 * Auditoría opcional de copy (inglés residual) con Workers AI:
 *   npm run audit:ui-es-cloudflare -- --preset sesion-a1
 */
export const A1_SESION_DEL_DIA = 'Sesión del día';

/** Misma frase en contexto tras artículo o en medio de oración (“la …”, “tu …”). */
export function a1SesionDelDiaEnOracion(): string {
  return A1_SESION_DEL_DIA.charAt(0).toLowerCase() + A1_SESION_DEL_DIA.slice(1);
}

/** Tema por defecto en prompts cuando no hay etiquetas de foco SRS/mastery. */
export function a1SesionDelDiaTemaPromptGeneral(): string {
  return `${A1_SESION_DEL_DIA} A1 — práctica general`;
}
