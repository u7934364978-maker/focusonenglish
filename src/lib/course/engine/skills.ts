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
  },
  // Unit 3: My Tribe
  'A1-FAM-01': {
    id: 'A1-FAM-01',
    name: 'Family Members',
    unit: 3,
    description: 'father, mother, brother, sister, etc.'
  },
  'A1-POSS-01': {
    id: 'A1-POSS-01',
    name: 'Possessive Adjectives',
    unit: 3,
    description: 'my, your, his, her'
  },
  // Unit 4: Daily Routine
  'A1-ROUT-01': {
    id: 'A1-ROUT-01',
    name: 'Daily Activities',
    unit: 4,
    description: 'work, sleep, study'
  },
  // Unit 5: Counting Sheep
  'A1-NUM-01': {
    id: 'A1-NUM-01',
    name: 'Numbers 1-10',
    unit: 5,
    description: 'one, two, three, etc.'
  },
  // Unit 6: Rainbow Colors
  'A1-COL-01': {
    id: 'A1-COL-01',
    name: 'Basic Colors',
    unit: 6,
    description: 'red, blue, green, etc.'
  },
  // Unit 7: Time Check
  'A1-TIME-01': {
    id: 'A1-TIME-01',
    name: 'Days of the Week',
    unit: 7,
    description: 'Monday, Tuesday, etc.'
  },
  // Unit 8: Daily Grind
  'A1-ROUT-02': {
    id: 'A1-ROUT-02',
    name: 'Advanced Routine',
    unit: 8,
    description: 'wake up, eat breakfast'
  },
  // Unit 9: Foodie Life
  'A1-FOOD-01': {
    id: 'A1-FOOD-01',
    name: 'Common Foods',
    unit: 9,
    description: 'pizza, bread, cheese'
  },
  // Unit 10: Outfit of the Day
  'A1-CLOTH-01': {
    id: 'A1-CLOTH-01',
    name: 'Basic Clothes',
    unit: 10,
    description: 'T-shirt, pants, shoes'
  },
  // Unit 11: My Job
  'A1-JOB-01': {
    id: 'A1-JOB-01',
    name: 'Common Jobs',
    unit: 11,
    description: 'teacher, doctor, student'
  },
  // Unit 12: In the City
  'A1-CITY-01': {
    id: 'A1-CITY-01',
    name: 'City Places',
    unit: 12,
    description: 'bank, park, school'
  },
  // Unit 13: Move It!
  'A1-MOVE-01': {
    id: 'A1-MOVE-01',
    name: 'Movement Verbs',
    unit: 13,
    description: 'walk, run, jump'
  },
  // Unit 14: How I Feel
  'A1-FEEL-01': {
    id: 'A1-FEEL-01',
    name: 'Basic Emotions',
    unit: 14,
    description: 'happy, sad, angry'
  },
  // Unit 15: Pets & Wildlife
  'A1-ANIM-01': {
    id: 'A1-ANIM-01',
    name: 'Common Animals',
    unit: 15,
    description: 'dog, cat, bird'
  },
  // Unit 16: Weather
  'A1-WEATH-01': {
    id: 'A1-WEATH-01',
    name: 'Weather Conditions',
    unit: 16,
    description: 'sunny, rainy, snowy'
  },
  // Unit 17: Tech Savvy
  'A1-TECH-01': {
    id: 'A1-TECH-01',
    name: 'Tech Devices',
    unit: 17,
    description: 'laptop, phone, mouse'
  },
  // Unit 18: Body Parts
  'A1-BODY-01': {
    id: 'A1-BODY-01',
    name: 'The Face',
    unit: 18,
    description: 'eye, nose, mouth'
  },
  // Unit 19: Action!
  'A1-CAN-01': {
    id: 'A1-CAN-01',
    name: 'Abilities (Can)',
    unit: 19,
    description: 'I can swim, I can sing'
  },
  // Unit 20: Where is it?
  'A1-PREP-LOC-02': {
    id: 'A1-PREP-LOC-02',
    name: 'Place Prepositions (Advanced)',
    unit: 20,
    description: 'in, on, under, behind'
  },
  // Unit 21: Let's Travel
  'A1-TRAV-01': {
    id: 'A1-TRAV-01',
    name: 'Transport Methods',
    unit: 21,
    description: 'by car, by bus, by train'
  },
  // Unit 22: Health & Wellness
  'A1-HLTH-01': {
    id: 'A1-HLTH-01',
    name: 'Health Problems',
    unit: 22,
    description: 'headache, stomachache, cold'
  },
  // Unit 23: Shopping
  'A1-SHOP-01': {
    id: 'A1-SHOP-01',
    name: 'Shopping Items',
    unit: 23,
    description: 'shirt, shoes, dress'
  },
  // Unit 24: My Routine
  'A1-ROUT-01': {
    id: 'A1-ROUT-01',
    name: 'Daily Activities',
    unit: 24,
    description: 'get up, breakfast, go to bed'
  },
  // Unit 25: Past Memories
  'A1-PAST-01': {
    id: 'A1-PAST-01',
    name: 'Past of To Be',
    unit: 25,
    description: 'was, were'
  },
  // Unit 26: The Future
  'A1-FUTR-01': {
    id: 'A1-FUTR-01',
    name: 'Future Plans (Going to)',
    unit: 26,
    description: 'I am going to travel'
  },
  // Unit 27: Nature
  'A1-NATR-01': {
    id: 'A1-NATR-01',
    name: 'Natural Elements',
    unit: 27,
    description: 'mountain, river, sea'
  },
  // Unit 28: Office Life
  'A1-OFFC-01': {
    id: 'A1-OFFC-01',
    name: 'Office Supplies',
    unit: 28,
    description: 'pen, notebook, desk'
  },
  // Unit 29: Hobbies
  'A1-HOBB-01': {
    id: 'A1-HOBB-01',
    name: 'Common Hobbies',
    unit: 29,
    description: 'reading, painting, dancing'
  },
  // Unit 30: Bonus
  'A1-COMP-01': {
    id: 'A1-COMP-01',
    name: 'Basic Comparisons',
    unit: 30,
    description: 'better than'
  }
};
