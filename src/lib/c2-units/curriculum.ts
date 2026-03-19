export interface UnitMapping {
  unit: number;
  module: number;
  title: string;
  grammar: string[];
  topic: string;
  skills: string[];
}

export const C2_CURRICULUM_MAPPING: UnitMapping[] = [
  // MODULE 1: Language, Power and Rhetoric (Units 1–6)
  {
    unit: 1,
    module: 1,
    title: 'The Power of Words',
    grammar: ['rhetorical-inversion'],
    topic: 'language-power',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 2,
    module: 1,
    title: 'Rhetoric and Persuasion',
    grammar: ['cleft-sentences-advanced'],
    topic: 'rhetoric',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 3,
    module: 1,
    title: 'Political Discourse',
    grammar: ['fronting-topicalisation'],
    topic: 'political-language',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 4,
    module: 1,
    title: 'Language and Identity',
    grammar: ['register-control'],
    topic: 'language-identity',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 5,
    module: 1,
    title: 'Propaganda, Spin and Manipulation',
    grammar: ['distancing-passive'],
    topic: 'media-language',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 6,
    module: 1,
    title: 'Module 1 Review: Language and Power',
    grammar: ['mixed-review-m1'],
    topic: 'review',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },

  // MODULE 2: Literature and the Written Word (Units 7–12)
  {
    unit: 7,
    module: 2,
    title: 'What is Literature?',
    grammar: ['narrative-tenses-mastery'],
    topic: 'literature',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 8,
    module: 2,
    title: 'The Art of the Novel',
    grammar: ['textual-cohesion'],
    topic: 'novel',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 9,
    module: 2,
    title: 'Poetry and Sound',
    grammar: ['figurative-language'],
    topic: 'poetry',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 10,
    module: 2,
    title: 'Essay Writing as Art',
    grammar: ['nominalisation-academic'],
    topic: 'academic-writing',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 11,
    module: 2,
    title: 'Literary Criticism',
    grammar: ['reporting-verbs-evaluation'],
    topic: 'literary-criticism',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 12,
    module: 2,
    title: 'Module 2 Review: Literature',
    grammar: ['mixed-review-m2'],
    topic: 'review',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },

  // MODULE 3: Science, Knowledge and Truth (Units 13–18)
  {
    unit: 13,
    module: 3,
    title: 'The Philosophy of Science',
    grammar: ['epistemic-modality'],
    topic: 'philosophy-science',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 14,
    module: 3,
    title: 'Artificial Intelligence and Ethics',
    grammar: ['passive-objectivity'],
    topic: 'ai-ethics',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 15,
    module: 3,
    title: 'Fake News and Information Wars',
    grammar: ['hedging-c2'],
    topic: 'media-information',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 16,
    module: 3,
    title: 'Research and Evidence',
    grammar: ['complex-noun-phrases'],
    topic: 'academic-research',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 17,
    module: 3,
    title: 'Knowledge and Bias',
    grammar: ['impersonal-constructions'],
    topic: 'epistemology',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 18,
    module: 3,
    title: 'Module 3 Review: Science',
    grammar: ['mixed-review-m3'],
    topic: 'review',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },

  // MODULE 4: Society, Power and Justice (Units 19–24)
  {
    unit: 19,
    module: 4,
    title: 'Human Rights and Law',
    grammar: ['obligation-formal'],
    topic: 'human-rights',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 20,
    module: 4,
    title: 'Inequality and Social Justice',
    grammar: ['concession-contrast-advanced'],
    topic: 'social-justice',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 21,
    module: 4,
    title: 'Crime and Punishment',
    grammar: ['conditionals-mastery'],
    topic: 'crime-justice',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 22,
    module: 4,
    title: 'Democracy and Governance',
    grammar: ['cause-result-advanced'],
    topic: 'democracy',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 23,
    module: 4,
    title: 'Civil Society and Protest',
    grammar: ['strong-views-nuance'],
    topic: 'civil-society',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 24,
    module: 4,
    title: 'Module 4 Review: Society',
    grammar: ['mixed-review-m4'],
    topic: 'review',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },

  // MODULE 5: Arts, Aesthetics and Creativity (Units 25–30)
  {
    unit: 25,
    module: 5,
    title: 'The Philosophy of Beauty',
    grammar: ['complex-adjectival-phrases'],
    topic: 'aesthetics',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 26,
    module: 5,
    title: 'Contemporary Art',
    grammar: ['figurative-critical-writing'],
    topic: 'contemporary-art',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 27,
    module: 5,
    title: 'Music and Emotion',
    grammar: ['dramatic-inversion'],
    topic: 'music',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 28,
    module: 5,
    title: 'Film as Language',
    grammar: ['stylistic-sentence-variety'],
    topic: 'cinema',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 29,
    module: 5,
    title: 'Architecture and Space',
    grammar: ['degree-result-advanced'],
    topic: 'architecture',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 30,
    module: 5,
    title: 'Module 5 Review: Arts',
    grammar: ['mixed-review-m5'],
    topic: 'review',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },

  // MODULE 6: Mind, Identity and Philosophy (Units 31–36)
  {
    unit: 31,
    module: 6,
    title: 'Consciousness and the Self',
    grammar: ['nominal-clauses'],
    topic: 'consciousness',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 32,
    module: 6,
    title: 'Memory, Experience and Meaning',
    grammar: ['abstract-generalisation'],
    topic: 'memory',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 33,
    module: 6,
    title: 'Free Will and Determinism',
    grammar: ['logical-argument-structures'],
    topic: 'free-will',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 34,
    module: 6,
    title: 'Personal Identity Over Time',
    grammar: ['hedging-c2-advanced'],
    topic: 'identity',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 35,
    module: 6,
    title: 'Ethics of Technology',
    grammar: ['modal-speculation-deduction'],
    topic: 'tech-ethics',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 36,
    module: 6,
    title: 'Module 6 Review: Philosophy',
    grammar: ['mixed-review-m6'],
    topic: 'review',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },

  // MODULE 7: Economics, Law and Politics (Units 37–42)
  {
    unit: 37,
    module: 7,
    title: 'Global Markets and Trade',
    grammar: ['complex-prepositional-phrases'],
    topic: 'global-economics',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 38,
    module: 7,
    title: 'Labour, Rights and Work',
    grammar: ['formal-linking-devices'],
    topic: 'labour-rights',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 39,
    module: 7,
    title: 'Legal Language and Contracts',
    grammar: ['register-control-legal'],
    topic: 'legal-language',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 40,
    module: 7,
    title: 'Taxation and Fiscal Policy',
    grammar: ['institutional-passive'],
    topic: 'fiscal-policy',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 41,
    module: 7,
    title: 'International Relations',
    grammar: ['complex-connectors'],
    topic: 'international-relations',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 42,
    module: 7,
    title: 'Module 7 Review: Economics and Law',
    grammar: ['mixed-review-m7'],
    topic: 'review',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },

  // MODULE 8: Global Challenges and the Future (Units 43–48)
  {
    unit: 43,
    module: 8,
    title: 'Climate Change and Policy',
    grammar: ['synthesis-summarising'],
    topic: 'climate-change',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 44,
    module: 8,
    title: 'Global Health and Pandemics',
    grammar: ['speculation-prediction-c2'],
    topic: 'global-health',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 45,
    module: 8,
    title: 'Technology and the Future of Humanity',
    grammar: ['complex-future-constructions'],
    topic: 'future-technology',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 46,
    module: 8,
    title: 'Migration and Global Society',
    grammar: ['discourse-management'],
    topic: 'migration',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 47,
    module: 8,
    title: 'War, Peace and Diplomacy',
    grammar: ['argumentative-structures-c2'],
    topic: 'war-peace',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 48,
    module: 8,
    title: 'Module 8 Review: Global Challenges',
    grammar: ['mixed-review-m8'],
    topic: 'review',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },

  // MODULE 9: Intercultural Communication and Diversity (Units 49–54)
  {
    unit: 49,
    module: 9,
    title: 'World Englishes',
    grammar: ['colloquial-mastery'],
    topic: 'world-englishes',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 50,
    module: 9,
    title: 'Humour, Irony and Sarcasm',
    grammar: ['indirect-language-irony'],
    topic: 'humour',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 51,
    module: 9,
    title: 'Cultural Taboos and Sensitivity',
    grammar: ['diplomatically-hedged-speech'],
    topic: 'cultural-taboos',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 52,
    module: 9,
    title: 'Multilingualism and Translation',
    grammar: ['register-switching'],
    topic: 'multilingualism',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 53,
    module: 9,
    title: 'Cross-cultural Business',
    grammar: ['interaction-strategies'],
    topic: 'cross-cultural',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 54,
    module: 9,
    title: 'Module 9 Review: Culture and Language',
    grammar: ['mixed-review-m9'],
    topic: 'review',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },

  // MODULE 10: Mastery Integration and Exam Preparation (Units 55–60)
  {
    unit: 55,
    module: 10,
    title: 'Full Grammar Integration I',
    grammar: ['embedding-coordination-subordination'],
    topic: 'grammar-mastery',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 56,
    module: 10,
    title: 'Full Grammar Integration II',
    grammar: ['punctuation-stylistic-cohesion'],
    topic: 'grammar-mastery-ii',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 57,
    module: 10,
    title: 'All Writing Genres',
    grammar: ['all-writing-genres'],
    topic: 'writing-mastery',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 58,
    module: 10,
    title: 'CPE Exam Practice: Reading & Use of English',
    grammar: ['cpe-use-of-english'],
    topic: 'exam-practice',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 59,
    module: 10,
    title: 'CPE Exam Practice: Listening & Speaking',
    grammar: ['cpe-listening-speaking'],
    topic: 'exam-practice',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  },
  {
    unit: 60,
    module: 10,
    title: 'CPE Full Mock Exam',
    grammar: ['comprehensive-review-c2'],
    topic: 'exam-mastery',
    skills: ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary']
  }
];
