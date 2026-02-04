export interface UnitMapping {
  unit: number;
  module: number;
  title: string;
  grammar: string[];
  topic: string;
  skills: string[];
}

export const C1_CURRICULUM_MAPPING: UnitMapping[] = [
  // MODULE 1: ADVANCED STRUCTURES & NUANCE
  { unit: 1, module: 1, title: 'Advanced Narrative Tenses & Inversion', grammar: ['past-perfect', 'inversion'], topic: 'personal-narratives', skills: ['grammar', 'vocabulary', 'reading'] },
  { unit: 2, module: 1, title: 'Cleft Sentences & Fronting', grammar: ['cleft-sentences', 'fronting'], topic: 'communication', skills: ['grammar', 'writing'] },
  { unit: 3, module: 1, title: 'Modals of Deduction & Speculation', grammar: ['modal-deduction-past'], topic: 'mystery', skills: ['grammar', 'listening'] },
  { unit: 4, module: 1, title: 'Advanced & Inverted Conditionals', grammar: ['mixed-conditionals', 'inverted-conditionals'], topic: 'hypotheticals', skills: ['grammar', 'speaking'] },
  { unit: 5, module: 1, title: 'The Subjunctive & Formal Expressions', grammar: ['subjunctive', 'formal-register'], topic: 'professional-etiquette', skills: ['grammar', 'vocabulary'] },
  { unit: 6, module: 1, title: 'Phrasal Verbs: Advanced Combinations', grammar: ['phrasal-verbs-complex'], topic: 'idiomatic-language', skills: ['vocabulary', 'reading'] },
  { unit: 7, module: 1, title: 'Passive Reporting Structures', grammar: ['passive-reporting'], topic: 'media', skills: ['grammar', 'reading'] },
  { unit: 8, module: 1, title: 'Gerunds & Infinitives: Advanced', grammar: ['gerunds-infinitives-advanced'], topic: 'psychology', skills: ['grammar', 'speaking'] },
  { unit: 9, module: 1, title: 'Participle & Reduced Clauses', grammar: ['participle-clauses'], topic: 'academic-writing', skills: ['grammar', 'writing'] },
  { unit: 10, module: 1, title: 'Module 1 Review & Assessment', grammar: ['inversion', 'cleft-sentences'], topic: 'review', skills: ['grammar', 'vocabulary', 'reading', 'listening'] },

  // MODULE 2: ACADEMIC & PROFESSIONAL EXCELLENCE
  { unit: 11, module: 2, title: 'Abstract Nouns & Nominalization', grammar: ['nominalization'], topic: 'academic-discourse', skills: ['grammar', 'writing'] },
  { unit: 12, module: 2, title: 'Business Negotiations & Diplomacy', grammar: ['hedging-language'], topic: 'business', skills: ['speaking', 'vocabulary'] },
  { unit: 13, module: 2, title: 'Advanced Comparative Structures', grammar: ['advanced-comparatives'], topic: 'economic-trends', skills: ['grammar', 'reading'] },
  { unit: 14, module: 2, title: 'Complex Prepositional Phrases', grammar: ['prepositional-phrases'], topic: 'formal-correspondence', skills: ['grammar', 'vocabulary'] },
  { unit: 15, module: 2, title: 'Emphasis using "do" & Rhetorical Questions', grammar: ['auxiliary-do-emphasis'], topic: 'public-speaking', skills: ['grammar', 'speaking'] },
  { unit: 16, module: 2, title: 'Academic Reports & Data Analysis', grammar: ['referencing-data'], topic: 'science', skills: ['writing', 'reading'] },
  { unit: 17, module: 2, title: 'Future in the Past', grammar: ['future-in-the-past'], topic: 'historical-analysis', skills: ['grammar', 'listening'] },
  { unit: 18, module: 2, title: 'Professional Networking & LinkedIn', grammar: ['networking-jargon'], topic: 'career-development', skills: ['vocabulary', 'writing'] },
  { unit: 19, module: 2, title: 'Critical Thinking & Argumentation', grammar: ['logical-connectors'], topic: 'philosophy', skills: ['speaking', 'reading'] },
  { unit: 20, module: 2, title: 'Module 2 Review & Assessment', grammar: ['nominalization', 'hedging'], topic: 'review', skills: ['grammar', 'vocabulary', 'reading', 'listening'] },

  // MODULE 3: COMPLEX SOCIAL ISSUES
  { unit: 21, module: 3, title: 'Nuance in Adverbs & Adjectives', grammar: ['adverb-collocations'], topic: 'social-commentary', skills: ['vocabulary', 'reading'] },
  { unit: 22, module: 3, title: 'Concession Clauses: even though, albeit', grammar: ['concession-clauses'], topic: 'political-debate', skills: ['grammar', 'speaking'] },
  { unit: 23, module: 3, title: 'The Language of Speculation', grammar: ['speculative-language'], topic: 'future-society', skills: ['grammar', 'listening'] },
  { unit: 24, module: 3, title: 'Euphemisms & Politically Correct Language', grammar: ['euphemisms'], topic: 'ethics', skills: ['vocabulary', 'speaking'] },
  { unit: 25, module: 3, title: 'Distancing & Reporting Events', grammar: ['distancing-language'], topic: 'journalism', skills: ['grammar', 'writing'] },
  { unit: 26, module: 3, title: 'Gender & Identity in Language', grammar: ['inclusive-language'], topic: 'sociology', skills: ['vocabulary', 'reading'] },
  { unit: 27, module: 3, title: 'Complex Linkers & Cohesion', grammar: ['cohesive-devices'], topic: 'essay-writing', skills: ['grammar', 'writing'] },
  { unit: 28, module: 3, title: 'Urbanization & Housing Crisis', grammar: ['urban-vocabulary'], topic: 'geography', skills: ['vocabulary', 'listening'] },
  { unit: 29, module: 3, title: 'Environmental Activism', grammar: ['persuasive-language'], topic: 'ecology', skills: ['speaking', 'reading'] },
  { unit: 30, module: 3, title: 'Module 3 Review & Assessment', grammar: ['concession', 'distancing'], topic: 'review', skills: ['grammar', 'vocabulary', 'reading', 'listening'] },

  // MODULE 4: CULTURE, MEDIA & ARTS
  { unit: 31, module: 4, title: 'Literature Analysis & Literary Devices', grammar: ['metaphor-simile'], topic: 'literature', skills: ['vocabulary', 'reading'] },
  { unit: 32, module: 4, title: 'Art Criticism & Aesthetics', grammar: ['descriptive-adjectives'], topic: 'fine-arts', skills: ['speaking', 'vocabulary'] },
  { unit: 33, module: 4, title: 'Cinematography & Film Reviews', grammar: ['film-jargon'], topic: 'cinema', skills: ['listening', 'writing'] },
  { unit: 34, module: 4, title: 'The Evolution of Music Genres', grammar: ['historical-tenses'], topic: 'music', skills: ['reading', 'listening'] },
  { unit: 35, module: 4, title: 'Digital Media & Information Overload', grammar: ['passive-voice-advanced'], topic: 'technology', skills: ['grammar', 'reading'] },
  { unit: 36, module: 4, title: 'Pop Culture & Global Influence', grammar: ['colloquial-expressions'], topic: 'culture', skills: ['vocabulary', 'speaking'] },
  { unit: 37, module: 4, title: 'Advertising & Consumer Psychology', grammar: ['manipulative-language'], topic: 'marketing', skills: ['listening', 'writing'] },
  { unit: 38, module: 4, title: 'The Role of Museums in Society', grammar: ['perfect-infinitive'], topic: 'heritage', skills: ['grammar', 'speaking'] },
  { unit: 39, module: 4, title: 'Fashion & Identity', grammar: ['style-vocabulary'], topic: 'lifestyle', skills: ['vocabulary', 'reading'] },
  { unit: 40, module: 4, title: 'Module 4 Review & Assessment', grammar: ['metaphors', 'perfect-infinitive'], topic: 'review', skills: ['grammar', 'vocabulary', 'reading', 'listening'] },

  // MODULE 5: SCIENCE, ETHICS & FUTURE
  { unit: 41, module: 5, title: 'Scientific Hypothesis & Theory', grammar: ['scientific-structures'], topic: 'research', skills: ['grammar', 'reading'] },
  { unit: 42, module: 5, title: 'Medical Ethics & Biotechnology', grammar: ['ethical-debate'], topic: 'health', skills: ['speaking', 'vocabulary'] },
  { unit: 43, module: 5, title: 'Space Exploration & Colonization', grammar: ['speculative-future'], topic: 'astronomy', skills: ['listening', 'reading'] },
  { unit: 44, module: 5, title: 'Artificial Intelligence & Consciousness', grammar: ['abstract-thinking'], topic: 'tech-ethics', skills: ['speaking', 'reading'] },
  { unit: 45, module: 5, title: 'Quantum Physics for Laypeople', grammar: ['explanatory-language'], topic: 'physics', skills: ['reading', 'listening'] },
  { unit: 46, module: 5, title: 'Climate Engineering & Geoengineering', grammar: ['causative-verbs'], topic: 'environment', skills: ['grammar', 'writing'] },
  { unit: 47, module: 5, title: 'The Psychology of Learning', grammar: ['gerund-phrases'], topic: 'education', skills: ['grammar', 'listening'] },
  { unit: 48, module: 5, title: 'Cybersecurity & Digital Warfare', grammar: ['security-terminology'], topic: 'it-security', skills: ['vocabulary', 'reading'] },
  { unit: 49, module: 5, title: 'Renewable Energy Revolution', grammar: ['result-clauses'], topic: 'energy', skills: ['grammar', 'writing'] },
  { unit: 50, module: 5, title: 'Module 5 Review & Assessment', grammar: ['speculative-future', 'causative'], topic: 'review', skills: ['grammar', 'vocabulary', 'reading', 'listening'] },

  // MODULE 6: GLOBAL TRENDS & C1 MASTERY
  { unit: 51, module: 6, title: 'Global Migration & Demographics', grammar: ['statistical-language'], topic: 'global-trends', skills: ['vocabulary', 'reading'] },
  { unit: 52, module: 6, title: 'International Law & Human Rights', grammar: ['legal-jargon'], topic: 'law', skills: ['reading', 'writing'] },
  { unit: 53, module: 6, title: 'The Future of Work: Remote & Hybrid', grammar: ['workplace-vocabulary'], topic: 'business', skills: ['speaking', 'listening'] },
  { unit: 54, module: 6, title: 'Cross-Cultural Communication', grammar: ['idiomatic-nuance'], topic: 'intercultural', skills: ['vocabulary', 'speaking'] },
  { unit: 55, module: 6, title: 'The Power of Rhetoric', grammar: ['rhetorical-devices'], topic: 'politics', skills: ['grammar', 'writing'] },
  { unit: 56, module: 6, title: 'Global Health & Pandemics', grammar: ['crisis-management'], topic: 'health', skills: ['listening', 'reading'] },
  { unit: 57, module: 6, title: 'Philosophical Perspectives', grammar: ['abstract-reasoning'], topic: 'philosophy', skills: ['reading', 'speaking'] },
  { unit: 58, module: 6, title: 'The Future of Education', grammar: ['pedagogical-vocabulary'], topic: 'education', skills: ['listening', 'writing'] },
  { unit: 59, module: 6, title: 'C1 Mastery: Final Mock Exam', grammar: ['all-c1-grammar'], topic: 'exam-prep', skills: ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking'] },
  { unit: 60, module: 6, title: 'Graduation & Path to C2', grammar: ['c2-introduction'], topic: 'lifelong-learning', skills: ['comprehensive'] }
];
