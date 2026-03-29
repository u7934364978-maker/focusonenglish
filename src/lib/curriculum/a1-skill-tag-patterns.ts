import type { Skill } from '@/lib/course/engine/skills';

/**
 * Patrones de `concept_tag` / `mastery_tag` asociados a cada skill A1.
 * Ampliar cuando el contenido del curso añada tags nuevos.
 */
export const A1_SKILL_CONCEPT_PATTERNS: Record<string, string[]> = {
  'A1-GREET-01': ['communication/greetings', 'vocabulary/greetings'],
  'A1-BE-POS-01': ['grammar/be'],
  'A1-WANT-01': ['grammar/want', 'vocabulary/food-drinks'],
  'A1-PREP-LOC-01': ['grammar/prepositions', 'vocabulary/place'],
  'A1-FAM-01': ['vocabulary/family'],
  'A1-POSS-01': ['grammar/possessives'],
  'A1-ROUT-01': ['vocabulary/routine', 'grammar/present-simple'],
  'A1-NUM-01': ['vocabulary/numbers'],
  'A1-COL-01': ['vocabulary/colors'],
  'A1-TIME-01': ['vocabulary/time', 'vocabulary/days'],
  'A1-ROUT-02': ['vocabulary/routine'],
  'A1-FOOD-01': ['vocabulary/food'],
  'A1-CLOTH-01': ['vocabulary/clothes'],
  'A1-JOB-01': ['vocabulary/jobs'],
  'A1-CITY-01': ['vocabulary/places'],
  'A1-MOVE-01': ['vocabulary/movement'],
  'A1-FEEL-01': ['vocabulary/emotions'],
  'A1-ANIM-01': ['vocabulary/animals'],
  'A1-WEATH-01': ['vocabulary/weather'],
  'A1-TECH-01': ['vocabulary/technology'],
  'A1-BODY-01': ['vocabulary/body'],
  'A1-CAN-01': ['grammar/can', 'vocabulary/abilities'],
  'A1-PREP-LOC-02': ['grammar/prepositions'],
  'A1-TRAV-01': ['vocabulary/travel'],
  'A1-HLTH-01': ['vocabulary/health'],
  'A1-SHOP-01': ['vocabulary/shopping'],
  'A1-ROUT-03': ['vocabulary/routine'],
  'A1-PAST-01': ['grammar/past', 'grammar/be'],
  'A1-FUTR-01': ['grammar/going-to', 'grammar/future'],
  'A1-NATR-01': ['vocabulary/nature'],
  'A1-OFFC-01': ['vocabulary/office'],
  'A1-HOBB-01': ['vocabulary/hobbies'],
  'A1-COMP-01': ['grammar/comparatives'],
  'A1-VOCAB-01': ['vocabulary/general'],
  'A1-UNIVERSAL': ['vocabulary/discovery'],
};

export function conceptPatternsForSkill(skill: Skill): string[] {
  const explicit = A1_SKILL_CONCEPT_PATTERNS[skill.id];
  if (explicit?.length) return explicit;
  return [`skill/${skill.id.toLowerCase()}`];
}
