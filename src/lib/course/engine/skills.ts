export interface Skill {
  id: string;
  name: string;
  unit: number;
  description: string;
}

export const A1_SKILLS: Record<string, Skill> = {
  // Unit 1: Greetings
  'A1-GREET-01': {
    id: 'A1-GREET-01',
    name: 'Basic Greetings',
    unit: 1,
    description: 'Hello, Hi, Good morning'
  },
  'A1-BE-POS-01': {
    id: 'A1-BE-POS-01',
    name: 'To Be: Positive (I am)',
    unit: 1,
    description: 'Introduction of self using "I am"'
  },
  // Unit 2: Coffee Break
  'A1-WANT-01': {
    id: 'A1-WANT-01',
    name: 'Expressing Desires (I want)',
    unit: 2,
    description: 'Using "I want" with drinks'
  },
  // Unit 20: Prepositions
  'A1-PREP-LOC-01': {
    id: 'A1-PREP-LOC-01',
    name: 'Prepositions of Place',
    unit: 20,
    description: 'in, on, under, next to'
  }
};
