import { ExerciseType } from '@/lib/exercise-generator';

export interface Blueprint {
  id: string;
  skillId: string;
  type: ExerciseType;
  template: string;
  slots: Record<string, {
    pos?: string;
    tags?: string[];
    fixedValues?: string[];
  }>;
  translationTemplate: string;
}

export const A1_BLUEPRINTS: Blueprint[] = [
  // --- Skill: A1-WANT-01 (I want + drink) ---
  {
    id: 'BP-WANT-01',
    skillId: 'A1-WANT-01',
    type: 'fill-blank',
    template: 'I want a {drink}.',
    slots: {
      drink: { pos: 'noun', tags: ['drink'] }
    },
    translationTemplate: 'Yo quiero {drink_es}.'
  },
  {
    id: 'BP-WANT-02',
    skillId: 'A1-WANT-01',
    type: 'multiple-choice',
    template: 'I {verb} a {drink}.',
    slots: {
      verb: { fixedValues: ['want'] },
      drink: { pos: 'noun', tags: ['drink'] }
    },
    translationTemplate: 'Yo {verb_es} un {drink_es}.'
  },

  // --- Skill: A1-PREP-LOC-01 (Prepositions) ---
  {
    id: 'BP-PREP-01',
    skillId: 'A1-PREP-LOC-01',
    type: 'fill-blank',
    template: 'The {item} is {prep} the {surface}.',
    slots: {
      item: { pos: 'noun', tags: ['object'] },
      prep: { fixedValues: ['on', 'in', 'under', 'next to'] },
      surface: { pos: 'noun', tags: ['furniture'] }
    },
    translationTemplate: 'El/La {item_es} está {prep_es} el/la {surface_es}.'
  }
];
