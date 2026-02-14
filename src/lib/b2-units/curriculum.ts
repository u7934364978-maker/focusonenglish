export interface UnitMapping {
  unit: number;
  module: number;
  title: string;
  grammar: string[];
  topic: string;
  skills: string[];
}

export const B2_CURRICULUM_MAPPING: UnitMapping[] = [
  // MODULE 1: NARRATIVE & RELATIONSHIPS
  {
    unit: 1,
    module: 1,
    title: 'Past Perfect & Narrative Tenses',
    grammar: ['past-perfect', 'past-simple'],
    topic: 'personal-relationships',
    skills: ['grammar', 'vocabulary', 'reading', 'speaking']
  },
  {
    unit: 2,
    module: 1,
    title: 'Educational Backgrounds & Lifelong Learning',
    grammar: ['past-perfect-continuous'],
    topic: 'education-learning',
    skills: ['grammar', 'vocabulary', 'listening', 'writing']
  },
  {
    unit: 3,
    module: 1,
    title: 'Personality & Character Traits',
    grammar: ['advanced-comparatives'],
    topic: 'personal-relationships',
    skills: ['vocabulary', 'speaking', 'reading']
  },
  {
    unit: 4,
    module: 1,
    title: 'Habits in the Past: used to, would, be/get used to',
    grammar: ['gerunds-infinitives'],
    topic: 'lifestyle-habits',
    skills: ['grammar', 'vocabulary', 'listening']
  },
  {
    unit: 5,
    module: 1,
    title: 'Expressing Opinions & Beliefs',
    grammar: ['reporting-verbs'],
    topic: 'personal-experiences',
    skills: ['speaking', 'writing', 'grammar']
  },
  {
    unit: 6,
    module: 1,
    title: 'Friendship & Modern Dating',
    grammar: ['relative-clauses'],
    topic: 'personal-relationships',
    skills: ['vocabulary', 'reading', 'listening']
  },
  {
    unit: 7,
    module: 1,
    title: 'Family Dynamics & Generations',
    grammar: ['modal-deduction'],
    topic: 'personal-relationships',
    skills: ['grammar', 'speaking', 'reading']
  },
  {
    unit: 8,
    module: 1,
    title: 'Memorable Life Events',
    grammar: ['wish-if-only'],
    topic: 'personal-experiences',
    skills: ['writing', 'vocabulary', 'grammar']
  },
  {
    unit: 9,
    module: 1,
    title: 'Health & Fitness Trends',
    grammar: ['quantifiers'],
    topic: 'lifestyle-habits',
    skills: ['vocabulary', 'listening', 'reading']
  },
  {
    unit: 10,
    module: 1,
    title: 'Module 1 Review & Assessment',
    grammar: ['past-perfect', 'past-perfect-continuous', 'advanced-comparatives'],
    topic: 'personal-experiences',
    skills: ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking']
  },

  // MODULE 2: WORK, TECHNOLOGY & INNOVATION
  {
    unit: 11,
    module: 2,
    title: 'Future Continuous & Future Perfect',
    grammar: ['future-continuous', 'future-perfect'],
    topic: 'technology-society',
    skills: ['grammar', 'vocabulary', 'reading']
  },
  {
    unit: 12,
    module: 2,
    title: 'The Modern Workplace',
    grammar: ['passive-all-tenses'],
    topic: 'work-employment',
    skills: ['vocabulary', 'speaking', 'writing']
  },
  {
    unit: 13,
    module: 2,
    title: 'Artificial Intelligence & Ethics',
    grammar: ['modal-deduction'],
    topic: 'technology-society',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 14,
    module: 2,
    title: 'Career Paths & Skills',
    grammar: ['gerunds-infinitives'],
    topic: 'work-employment',
    skills: ['listening', 'vocabulary', 'speaking']
  },
  {
    unit: 15,
    module: 2,
    title: 'Business Communication & Networking',
    grammar: ['reported-speech'],
    topic: 'professional-communication',
    skills: ['writing', 'grammar', 'speaking']
  },
  {
    unit: 16,
    module: 2,
    title: 'Entrepreneurship & Startups',
    grammar: ['cleft-sentences'],
    topic: 'business-economy',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 17,
    module: 2,
    title: 'Digital Privacy & Security',
    grammar: ['passive-reporting'],
    topic: 'technology-society',
    skills: ['vocabulary', 'listening', 'writing']
  },
  {
    unit: 18,
    module: 2,
    title: 'Meetings & Negotiations',
    grammar: ['reporting-verbs'],
    topic: 'professional-communication',
    skills: ['speaking', 'grammar', 'vocabulary']
  },
  {
    unit: 19,
    module: 2,
    title: 'Economic Trends & Globalization',
    grammar: ['articles-advanced'],
    topic: 'business-economy',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 20,
    module: 2,
    title: 'Module 2 Review & Assessment',
    grammar: ['future-perfect', 'passive-all-tenses', 'reported-speech'],
    topic: 'technology-society',
    skills: ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking']
  },

  // MODULE 3: SOCIAL ISSUES & ENVIRONMENT
  {
    unit: 21,
    module: 3,
    title: 'Third Conditional & Regrets',
    grammar: ['third-conditional', 'wish-if-only'],
    topic: 'social-issues',
    skills: ['grammar', 'vocabulary', 'speaking']
  },
  {
    unit: 22,
    module: 3,
    title: 'Climate Change & Sustainability',
    grammar: ['passive-reporting'],
    topic: 'environment-sustainability',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 23,
    module: 3,
    title: 'Mixed Conditionals',
    grammar: ['mixed-conditionals'],
    topic: 'environment-sustainability',
    skills: ['grammar', 'vocabulary', 'listening']
  },
  {
    unit: 24,
    module: 3,
    title: 'Social Justice & Inequality',
    grammar: ['cleft-sentences'],
    topic: 'social-issues',
    skills: ['vocabulary', 'writing', 'reading']
  },
  {
    unit: 25,
    module: 3,
    title: 'Renewable Energy Solutions',
    grammar: ['causative-have-get'],
    topic: 'environment-sustainability',
    skills: ['listening', 'vocabulary', 'grammar']
  },
  {
    unit: 26,
    module: 3,
    title: 'The Power of Social Media',
    grammar: ['inversion'],
    topic: 'media-communication',
    skills: ['reading', 'vocabulary', 'speaking']
  },
  {
    unit: 27,
    module: 3,
    title: 'Human Rights & Global Activism',
    grammar: ['reporting-verbs'],
    topic: 'social-issues',
    skills: ['writing', 'vocabulary', 'grammar']
  },
  {
    unit: 28,
    module: 3,
    title: 'Biodiversity & Conservation',
    grammar: ['relative-clauses'],
    topic: 'environment-sustainability',
    skills: ['listening', 'vocabulary', 'reading']
  },
  {
    unit: 29,
    module: 3,
    title: 'Journalism & Fake News',
    grammar: ['passive-reporting'],
    topic: 'media-communication',
    skills: ['speaking', 'vocabulary', 'grammar']
  },
  {
    unit: 30,
    module: 3,
    title: 'Module 3 Review & Assessment',
    grammar: ['third-conditional', 'mixed-conditionals', 'passive-reporting'],
    topic: 'social-issues',
    skills: ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking']
  },

  // MODULE 4: CULTURE, LIFESTYLE & TRAVEL
  {
    unit: 31,
    module: 4,
    title: 'Travel Experiences & Tourism',
    grammar: ['past-perfect', 'articles-advanced'],
    topic: 'travel-tourism',
    skills: ['grammar', 'vocabulary', 'speaking']
  },
  {
    unit: 32,
    module: 4,
    title: 'Arts & Creative Industries',
    grammar: ['passive-all-tenses'],
    topic: 'culture-arts',
    skills: ['reading', 'vocabulary', 'writing']
  },
  {
    unit: 33,
    module: 4,
    title: 'Gastronomy & Food Culture',
    grammar: ['quantifiers'],
    topic: 'food-cuisine',
    skills: ['listening', 'vocabulary', 'speaking']
  },
  {
    unit: 34,
    module: 4,
    title: 'Urban vs Rural Living',
    grammar: ['advanced-comparatives'],
    topic: 'urban-rural-life',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 35,
    module: 4,
    title: 'Sports & Competition',
    grammar: ['modal-deduction'],
    topic: 'sports-competition',
    skills: ['listening', 'vocabulary', 'speaking']
  },
  {
    unit: 36,
    module: 4,
    title: 'Consumerism & Advertising',
    grammar: ['causative-have-get'],
    topic: 'consumer-society',
    skills: ['writing', 'vocabulary', 'grammar']
  },
  {
    unit: 37,
    module: 4,
    title: 'Historical Events & Heritage',
    grammar: ['inversion'],
    topic: 'history-society',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 38,
    module: 4,
    title: 'Music & Cinema Trends',
    grammar: ['relative-clauses'],
    topic: 'culture-arts',
    skills: ['listening', 'vocabulary', 'speaking']
  },
  {
    unit: 39,
    module: 4,
    title: 'Adventure Travel & Safety',
    grammar: ['modal-obligation'],
    topic: 'travel-tourism',
    skills: ['vocabulary', 'speaking', 'reading']
  },
  {
    unit: 40,
    module: 4,
    title: 'Module 4 Review & Assessment',
    grammar: ['advanced-comparatives', 'articles-advanced', 'causative-have-get'],
    topic: 'culture-arts',
    skills: ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking']
  },

  // MODULE 5: ACADEMIC & SCIENTIFIC
  {
    unit: 41,
    module: 5,
    title: 'Education Systems & Learning',
    grammar: ['gerunds-infinitives'],
    topic: 'education-learning',
    skills: ['grammar', 'vocabulary', 'reading']
  },
  {
    unit: 42,
    module: 5,
    title: 'Scientific Discoveries',
    grammar: ['passive-reporting'],
    topic: 'science-research',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 43,
    module: 5,
    title: 'University Life & Academics',
    grammar: ['modal-obligation'],
    topic: 'education-learning',
    skills: ['listening', 'vocabulary', 'speaking']
  },
  {
    unit: 44,
    module: 5,
    title: 'Medical Research & Health',
    grammar: ['future-perfect'],
    topic: 'science-research',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 45,
    module: 5,
    title: 'Space Exploration',
    grammar: ['modal-deduction'],
    topic: 'science-research',
    skills: ['listening', 'vocabulary', 'grammar']
  },
  {
    unit: 46,
    module: 5,
    title: 'Psychology & Human Behavior',
    grammar: ['mixed-conditionals'],
    topic: 'personal-relationships',
    skills: ['reading', 'vocabulary', 'speaking']
  },
  {
    unit: 47,
    module: 5,
    title: 'Academic Writing & Reports',
    grammar: ['cleft-sentences'],
    topic: 'education-learning',
    skills: ['writing', 'grammar', 'vocabulary']
  },
  {
    unit: 48,
    module: 5,
    title: 'Innovation in Teaching',
    grammar: ['reporting-verbs'],
    topic: 'education-learning',
    skills: ['listening', 'vocabulary', 'speaking']
  },
  {
    unit: 49,
    module: 5,
    title: 'Sociology & Cultural Shifts',
    grammar: ['inversion'],
    topic: 'history-society',
    skills: ['reading', 'vocabulary', 'grammar']
  },
  {
    unit: 50,
    module: 5,
    title: 'Module 5 Review & Assessment',
    grammar: ['gerunds-infinitives', 'modal-obligation', 'cleft-sentences'],
    topic: 'education-learning',
    skills: ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking']
  },

  // MODULE 6: GLOBAL TRENDS & FINAL PREP
  {
    unit: 51,
    module: 6,
    title: 'Global Economic Crisis',
    grammar: ['wish-if-only', 'third-conditional'],
    topic: 'business-economy',
    skills: ['grammar', 'vocabulary', 'reading']
  },
  {
    unit: 52,
    module: 6,
    title: 'Human Migration & Society',
    grammar: ['passive-all-tenses'],
    topic: 'social-issues',
    skills: ['reading', 'vocabulary', 'speaking']
  },
  {
    unit: 53,
    module: 6,
    title: 'The Future of Work',
    grammar: ['future-continuous', 'future-perfect'],
    topic: 'work-employment',
    skills: ['listening', 'vocabulary', 'writing']
  },
  {
    unit: 54,
    module: 6,
    title: 'Urban Planning & Sustainable Cities',
    grammar: ['inversion'],
    topic: 'urban-rural-life',
    skills: ['grammar', 'vocabulary', 'reading']
  },
  {
    unit: 55,
    module: 6,
    title: 'Cultural Heritage & Identity',
    grammar: ['participle-clauses'],
    topic: 'culture-arts',
    skills: ['grammar', 'vocabulary', 'writing']
  },
  {
    unit: 56,
    module: 6,
    title: 'Digital Rights & Online Ethics',
    grammar: ['relative-clauses-advanced'],
    topic: 'technology-society',
    skills: ['grammar', 'vocabulary', 'listening']
  },
  {
    unit: 57,
    module: 6,
    title: 'Media Literacy & Critical Thinking',
    grammar: ['compound-words'],
    topic: 'media-communication',
    skills: ['grammar', 'vocabulary', 'reading']
  },
  {
    unit: 58,
    module: 6,
    title: 'Review: Advanced Conditionals',
    grammar: ['third-conditional', 'mixed-conditionals', 'inversion'],
    topic: 'history-society',
    skills: ['grammar', 'vocabulary', 'speaking']
  },
  {
    unit: 59,
    module: 6,
    title: 'Review: Modal Deduction & Speculation',
    grammar: ['modal-deduction'],
    topic: 'social-issues',
    skills: ['grammar', 'vocabulary', 'listening']
  },
  {
    unit: 60,
    module: 6,
    title: 'Final Course Review & Evaluation',
    grammar: ['all-b2-grammar'],
    topic: 'all-b2-topics',
    skills: ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking']
  }
];
