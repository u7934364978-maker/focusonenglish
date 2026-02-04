export interface UnitMapping {
  unit: number;
  module: number;
  title: string;
  grammar: string[];
  topic: string;
  skills: string[];
}

export const C2_CURRICULUM_MAPPING: UnitMapping[] = [
  // MODULE 1: THE COMPLEXITY OF HUMANITY
  {
    unit: 1,
    module: 1,
    title: 'Nuances of Personality & Character',
    grammar: ['advanced-adjectives', 'intensifiers'],
    topic: 'personality-psychology',
    skills: ['vocabulary', 'reading', 'speaking']
  },
  {
    unit: 2,
    module: 1,
    title: 'Evolution of Modern Relationships',
    grammar: ['relative-clauses-advanced'],
    topic: 'relationships',
    skills: ['listening', 'vocabulary', 'writing']
  },
  {
    unit: 3,
    module: 1,
    title: 'Societal Norms & Cultural Identity',
    grammar: ['subjunctive-mood'],
    topic: 'society-culture',
    skills: ['reading', 'grammar', 'speaking']
  },
  {
    unit: 4,
    module: 1,
    title: 'The Psychology of Choice',
    grammar: ['conditionals-inverted'],
    topic: 'psychology',
    skills: ['grammar', 'vocabulary', 'listening']
  },
  {
    unit: 5,
    module: 1,
    title: 'Emotional Intelligence & Resilience',
    grammar: ['gerund-vs-infinitive-nuances'],
    topic: 'mental-health',
    skills: ['writing', 'vocabulary', 'reading']
  },
  {
    unit: 6,
    module: 1,
    title: 'Communication in the Digital Age',
    grammar: ['passive-structures-advanced'],
    topic: 'communication',
    skills: ['speaking', 'listening', 'grammar']
  },
  {
    unit: 7,
    module: 1,
    title: 'Urban Dynamics & Living Spaces',
    grammar: ['cleft-sentences'],
    topic: 'urban-life',
    skills: ['reading', 'vocabulary', 'writing']
  },
  {
    unit: 8,
    module: 1,
    title: 'The Paradox of Memory',
    grammar: ['narrative-tenses-advanced'],
    topic: 'psychology',
    skills: ['listening', 'grammar', 'speaking']
  },
  {
    unit: 9,
    module: 1,
    title: 'Influence & Persuasion Techniques',
    grammar: ['modal-verbs-nuance'],
    topic: 'media-advertising',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 10,
    module: 1,
    title: 'Module 1: Human Condition Review',
    grammar: ['mixed-review-m1'],
    topic: 'humanity',
    skills: ['all-skills']
  },

  // MODULE 2: PLANETARY CHALLENGES & DISCOVERIES
  {
    unit: 11,
    module: 2,
    title: 'Environmental Ethics & Sustainability',
    grammar: ['future-expressions-advanced'],
    topic: 'environment',
    skills: ['reading', 'vocabulary', 'writing']
  },
  {
    unit: 12,
    module: 2,
    title: 'Frontiers of Scientific Inquiry',
    grammar: ['passive-reporting-verbs'],
    topic: 'science',
    skills: ['listening', 'grammar', 'speaking']
  },
  {
    unit: 13,
    module: 2,
    title: 'The Future of AI & Robotics',
    grammar: ['speculation-deduction'],
    topic: 'technology',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 14,
    module: 2,
    title: 'Biodiversity & Conservation Efforts',
    grammar: ['participial-clauses'],
    topic: 'nature',
    skills: ['listening', 'vocabulary', 'writing']
  },
  {
    unit: 15,
    module: 2,
    title: 'Genetic Engineering & Bioethics',
    grammar: ['concession-clauses'],
    topic: 'science-ethics',
    skills: ['reading', 'grammar', 'speaking']
  },
  {
    unit: 16,
    module: 2,
    title: 'Cosmology & Space Exploration',
    grammar: ['fronting-emphasis'],
    topic: 'space',
    skills: ['listening', 'vocabulary', 'reading']
  },
  {
    unit: 17,
    module: 2,
    title: 'Renewable Energy Paradigms',
    grammar: ['nominalisation'],
    topic: 'energy',
    skills: ['writing', 'grammar', 'vocabulary']
  },
  {
    unit: 18,
    module: 2,
    title: 'Technological Disruptions in Industry',
    grammar: ['prepositional-phrases-advanced'],
    topic: 'innovation',
    skills: ['speaking', 'vocabulary', 'reading']
  },
  {
    unit: 19,
    module: 2,
    title: 'Medical Breakthroughs & Longevity',
    grammar: ['articles-nuances'],
    topic: 'medicine',
    skills: ['reading', 'grammar', 'listening']
  },
  {
    unit: 20,
    module: 2,
    title: 'Module 2: Planet & Science Review',
    grammar: ['mixed-review-m2'],
    topic: 'science-environment',
    skills: ['all-skills']
  },

  // MODULE 3: CULTURAL HORIZONS & CREATIVITY
  {
    unit: 21,
    module: 3,
    title: 'The Philosophy of Art & Aesthetics',
    grammar: ['comparisons-advanced'],
    topic: 'arts',
    skills: ['reading', 'vocabulary', 'speaking']
  },
  {
    unit: 22,
    module: 3,
    title: 'Literary Analysis & Criticism',
    grammar: ['inversion-formal'],
    topic: 'literature',
    skills: ['writing', 'vocabulary', 'reading']
  },
  {
    unit: 23,
    module: 3,
    title: 'Global Cinematic Trends',
    grammar: ['ellipsis-substitution'],
    topic: 'cinema',
    skills: ['listening', 'grammar', 'speaking']
  },
  {
    unit: 24,
    module: 3,
    title: 'Architectural Heritage & Innovation',
    grammar: ['relative-clauses-nominal'],
    topic: 'architecture',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 25,
    module: 3,
    title: 'The Evolution of Music & Sound',
    grammar: ['it-is-time-wish-if-only'],
    topic: 'music',
    skills: ['listening', 'vocabulary', 'writing']
  },
  {
    unit: 26,
    module: 3,
    title: 'Culinary Anthropology & Gastronomy',
    grammar: ['adverbial-clauses'],
    topic: 'food',
    skills: ['reading', 'grammar', 'speaking']
  },
  {
    unit: 27,
    module: 3,
    title: 'Fashion as Social Expression',
    grammar: ['negative-inversion'],
    topic: 'fashion',
    skills: ['writing', 'vocabulary', 'reading']
  },
  {
    unit: 28,
    module: 3,
    title: 'Sports Psychology & High Performance',
    grammar: ['conditional-alternatives'],
    topic: 'sports',
    skills: ['listening', 'grammar', 'speaking']
  },
  {
    unit: 29,
    module: 3,
    title: 'Travel as a Transformative Experience',
    grammar: ['phrasal-verbs-advanced'],
    topic: 'travel',
    skills: ['reading', 'vocabulary', 'writing']
  },
  {
    unit: 30,
    module: 3,
    title: 'Module 3: Culture & Arts Review',
    grammar: ['mixed-review-m3'],
    topic: 'culture',
    skills: ['all-skills']
  },

  // MODULE 4: PROFESSIONAL EXCELLENCE & ECONOMICS
  {
    unit: 31,
    module: 4,
    title: 'Leadership Paradigms & Ethics',
    grammar: ['reporting-structures'],
    topic: 'business',
    skills: ['reading', 'vocabulary', 'speaking']
  },
  {
    unit: 32,
    module: 4,
    title: 'Global Economic Interdependence',
    grammar: ['causative-structures'],
    topic: 'economics',
    skills: ['writing', 'grammar', 'vocabulary']
  },
  {
    unit: 33,
    module: 4,
    title: 'The Changing Nature of Work',
    grammar: ['future-perfect-continuous'],
    topic: 'work',
    skills: ['listening', 'vocabulary', 'reading']
  },
  {
    unit: 34,
    module: 4,
    title: 'Entrepreneurship & Innovation',
    grammar: ['hypothetical-situations'],
    topic: 'business',
    skills: ['reading', 'grammar', 'speaking']
  },
  {
    unit: 35,
    module: 4,
    title: 'Financial Literacy & Risk Management',
    grammar: ['prepositions-after-verbs'],
    topic: 'finance',
    skills: ['writing', 'vocabulary', 'grammar']
  },
  {
    unit: 36,
    module: 4,
    title: 'Educational Pedagogy & Lifelong Learning',
    grammar: ['nominal-clauses'],
    topic: 'education',
    skills: ['reading', 'vocabulary', 'listening']
  },
  {
    unit: 37,
    module: 4,
    title: 'Marketing & Consumer Behavior',
    grammar: ['intensifiers-advanced'],
    topic: 'marketing',
    skills: ['speaking', 'vocabulary', 'grammar']
  },
  {
    unit: 38,
    module: 4,
    title: 'International Law & Human Rights',
    grammar: ['subjunctive-formal'],
    topic: 'law',
    skills: ['reading', 'writing', 'grammar']
  },
  {
    unit: 39,
    module: 4,
    title: 'Corporate Social Responsibility',
    grammar: ['passive-infinitives'],
    topic: 'business-ethics',
    skills: ['listening', 'vocabulary', 'speaking']
  },
  {
    unit: 40,
    module: 4,
    title: 'Module 4: Professional Review',
    grammar: ['mixed-review-m4'],
    topic: 'business-economics',
    skills: ['all-skills']
  },

  // MODULE 5: ABSTRACT CONCEPTS & PHILOSOPHY
  {
    unit: 41,
    module: 5,
    title: 'The Concept of Time in Philosophy',
    grammar: ['advanced-tenses'],
    topic: 'philosophy',
    skills: ['reading', 'vocabulary', 'speaking']
  },
  {
    unit: 42,
    module: 5,
    title: 'Linguistic Relativity & Thought',
    grammar: ['fronting-emphasis'],
    topic: 'linguistics',
    skills: ['writing', 'vocabulary', 'reading']
  },
  {
    unit: 43,
    module: 5,
    title: 'Ethics in the 21st Century',
    grammar: ['concession-contrast'],
    topic: 'ethics',
    skills: ['listening', 'grammar', 'speaking']
  },
  {
    unit: 44,
    module: 5,
    title: 'The Nature of Reality & Perception',
    grammar: ['modals-deduction-advanced'],
    topic: 'philosophy',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 45,
    module: 5,
    title: 'Existentialism & the Human Condition',
    grammar: ['participle-phrases'],
    topic: 'philosophy',
    skills: ['listening', 'vocabulary', 'writing']
  },
  {
    unit: 46,
    module: 5,
    title: 'The Sociology of Power',
    grammar: ['cleft-sentences-nuance'],
    topic: 'sociology',
    skills: ['reading', 'grammar', 'speaking']
  },
  {
    unit: 47,
    module: 5,
    title: 'Utopian & Dystopian Visions',
    grammar: ['conditionals-unreal'],
    topic: 'literature-society',
    skills: ['writing', 'vocabulary', 'reading']
  },
  {
    unit: 48,
    module: 5,
    title: 'The Evolution of Languages',
    grammar: ['archaisms-nuance'],
    topic: 'linguistics',
    skills: ['listening', 'grammar', 'speaking']
  },
  {
    unit: 49,
    module: 5,
    title: 'Knowledge & Epistemology',
    grammar: ['noun-phrases-complex'],
    topic: 'philosophy',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 50,
    module: 5,
    title: 'Module 5: Abstract Concepts Review',
    grammar: ['mixed-review-m5'],
    topic: 'philosophy',
    skills: ['all-skills']
  },

  // MODULE 6: MASTERY & EXAM EXCELLENCE
  {
    unit: 51,
    module: 6,
    title: 'CPE Use of English: Master Class 1',
    grammar: ['all-grammar-c2'],
    topic: 'exam-skills',
    skills: ['use-of-english']
  },
  {
    unit: 52,
    module: 6,
    title: 'CPE Reading: Sophisticated Analysis',
    grammar: ['text-cohesion'],
    topic: 'exam-skills',
    skills: ['reading']
  },
  {
    unit: 53,
    module: 6,
    title: 'CPE Listening: Nuance & Tone',
    grammar: ['intonation-meaning'],
    topic: 'exam-skills',
    skills: ['listening']
  },
  {
    unit: 54,
    module: 6,
    title: 'CPE Writing: The Perfect Essay',
    grammar: ['formal-style-mastery'],
    topic: 'exam-skills',
    skills: ['writing']
  },
  {
    unit: 55,
    module: 6,
    title: 'CPE Speaking: Fluency & Precision',
    grammar: ['discourse-markers-advanced'],
    topic: 'exam-skills',
    skills: ['speaking']
  },
  {
    unit: 56,
    module: 6,
    title: 'Idioms & Fixed Phrases Mastery',
    grammar: ['lexical-mastery'],
    topic: 'vocabulary',
    skills: ['all-skills']
  },
  {
    unit: 57,
    module: 6,
    title: 'Advanced Phrasal Verbs in Context',
    grammar: ['phrasal-verbs-c2'],
    topic: 'vocabulary',
    skills: ['all-skills']
  },
  {
    unit: 58,
    module: 6,
    title: 'Stylistic Devices & Rhetoric',
    grammar: ['rhetorical-devices'],
    topic: 'style',
    skills: ['writing', 'speaking']
  },
  {
    unit: 59,
    module: 6,
    title: 'Mock Exam: Full Simulation',
    grammar: ['all-c2-grammar'],
    topic: 'exam-skills',
    skills: ['all-skills']
  },
  {
    unit: 60,
    module: 6,
    title: 'The Zenith of Mastery: Final Review',
    grammar: ['comprehensive-review'],
    topic: 'mastery',
    skills: ['all-skills']
  }
];
