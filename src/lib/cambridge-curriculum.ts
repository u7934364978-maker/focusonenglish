import { CEFRLevel, ExerciseCategory } from './exercise-types';

export type { CEFRLevel };

export interface CurriculumTopic {
  id: string;
  name: string;
  category: ExerciseCategory;
  description: string;
  keywords: string[];
}

export interface LevelCurriculum {
  level: CEFRLevel;
  examName: string;
  description: string;
  grammar: CurriculumTopic[];
  vocabulary: CurriculumTopic[];
  reading: CurriculumTopic[];
  writing: CurriculumTopic[];
  listening: CurriculumTopic[];
  speaking: CurriculumTopic[];
  pronunciation?: CurriculumTopic[];
  dictation?: CurriculumTopic[];
  roleplay?: CurriculumTopic[];
}

export const CURRICULUM_CATEGORIES: { id: ExerciseCategory; name: string }[] = [
  { id: 'grammar', name: 'Grammar' },
  { id: 'vocabulary', name: 'Vocabulary' },
  { id: 'reading', name: 'Reading' },
  { id: 'writing', name: 'Writing' },
  { id: 'listening', name: 'Listening' },
  { id: 'speaking', name: 'Speaking' },
  { id: 'pronunciation', name: 'Pronunciation' },
  { id: 'dictation', name: 'Dictation' },
  { id: 'roleplay', name: 'Roleplay' }
];

// ============================================
// A1 - BEGINNER
// ============================================
const A1_CURRICULUM: LevelCurriculum = {
  level: 'A1',
  examName: 'CEFR A1 Beginner',
  description: 'Basic English for everyday communication',
  grammar: [
    {
      id: 'a1-be-present',
      name: 'To Be - Present Simple',
      category: 'grammar',
      description: 'Using "am, is, are" correctly',
      keywords: ['be', 'present simple', 'am', 'is', 'are', 'identity', 'age']
    },
    {
      id: 'a1-articles',
      name: 'Articles (a, an, the)',
      category: 'grammar',
      description: 'Using basic articles',
      keywords: ['articles', 'a', 'an', 'the', 'nouns']
    },
    {
      id: 'a1-plurals',
      name: 'Plural Nouns',
      category: 'grammar',
      description: 'Making nouns plural',
      keywords: ['plurals', '-s', '-es', 'regular', 'irregular']
    },
    {
      id: 'a1-pronouns',
      name: 'Personal Pronouns',
      category: 'grammar',
      description: 'Subject and object pronouns',
      keywords: ['pronouns', 'subject', 'object', 'I', 'me', 'you', 'he', 'him']
    },
    {
      id: 'a1-present-simple',
      name: 'Present Simple',
      category: 'grammar',
      description: 'Routine and daily activities',
      keywords: ['present simple', 'routines', 'habits', 'third person -s']
    }
  ],
  vocabulary: [
    {
      id: 'a1-numbers',
      name: 'Numbers and Time',
      category: 'vocabulary',
      description: 'Counting and telling the time',
      keywords: ['numbers', 'time', 'dates', 'months', 'days of the week']
    },
    {
      id: 'a1-family',
      name: 'Family and Friends',
      category: 'vocabulary',
      description: 'Describing relationships',
      keywords: ['family', 'relatives', 'friends', 'relationships']
    },
    {
      id: 'a1-food',
      name: 'Food and Drink',
      category: 'vocabulary',
      description: 'Basic food items and ordering',
      keywords: ['food', 'drink', 'meals', 'restaurant', 'cafe']
    },
    {
      id: 'a1-colors-clothes',
      name: 'Colors and Clothes',
      category: 'vocabulary',
      description: 'Describing appearance',
      keywords: ['colors', 'clothes', 'appearance', 'fashion']
    }
  ],
  reading: [
    {
      id: 'a1-signs-notices',
      name: 'Signs and Notices',
      category: 'reading',
      description: 'Understanding basic public signs',
      keywords: ['signs', 'notices', 'public', 'directions']
    }
  ],
  writing: [
    {
      id: 'a1-forms',
      name: 'Filling Forms',
      category: 'writing',
      description: 'Providing personal information',
      keywords: ['forms', 'personal info', 'registration', 'details']
    }
  ],
  listening: [
    {
      id: 'a1-basic-info',
      name: 'Personal Information',
      category: 'listening',
      description: 'Understanding basic self-introductions',
      keywords: ['listening', 'introductions', 'personal info']
    }
  ],
  speaking: [
    {
      id: 'a1-introductions',
      name: 'Self-introductions',
      category: 'speaking',
      description: 'Introducing yourself and others',
      keywords: ['introductions', 'greetings', 'meeting people']
    }
  ]
};

// ============================================
// A2 - ELEMENTARY
// ============================================
const A2_CURRICULUM: LevelCurriculum = {
  level: 'A2',
  examName: 'CEFR A2 Elementary',
  description: 'Elementary English for simple social interactions',
  grammar: [
    {
      id: 'a2-past-simple',
      name: 'Past Simple',
      category: 'grammar',
      description: 'Talking about past events',
      keywords: ['past simple', 'regular', 'irregular verbs', 'ago', 'last']
    },
    {
      id: 'a2-comparatives',
      name: 'Comparatives and Superlatives',
      category: 'grammar',
      description: 'Comparing things and people',
      keywords: ['comparatives', 'superlatives', '-er', 'more', 'the most']
    },
    {
      id: 'a2-present-continuous',
      name: 'Present Continuous',
      category: 'grammar',
      description: 'Actions happening now',
      keywords: ['present continuous', 'now', 'at the moment', '-ing']
    },
    {
      id: 'a2-going-to',
      name: 'Future with "going to"',
      category: 'grammar',
      description: 'Plans and intentions',
      keywords: ['future', 'going to', 'plans', 'intentions']
    },
    {
      id: 'a2-modals-ability',
      name: 'Modal Verbs (can, could)',
      category: 'grammar',
      description: 'Expressing ability and possibility',
      keywords: ['modals', 'can', 'could', 'ability', 'possibility']
    }
  ],
  vocabulary: [
    {
      id: 'a2-hobbies',
      name: 'Hobbies and Free Time',
      category: 'vocabulary',
      description: 'Leisure activities and sports',
      keywords: ['hobbies', 'leisure', 'sports', 'free time', 'interests']
    },
    {
      id: 'a2-travel',
      name: 'Travel and Holidays',
      category: 'vocabulary',
      description: 'Getting around and vacationing',
      keywords: ['travel', 'transport', 'hotel', 'holiday', 'vacation']
    },
    {
      id: 'a2-health',
      name: 'Health and Body',
      category: 'vocabulary',
      description: 'Parts of the body and basic health',
      keywords: ['health', 'body', 'illness', 'doctor', 'medicine']
    },
    {
      id: 'a2-work',
      name: 'Work and Jobs',
      category: 'vocabulary',
      description: 'Common professions and workplaces',
      keywords: ['work', 'jobs', 'office', 'career', 'professions']
    }
  ],
  reading: [
    {
      id: 'a2-emails-letters',
      name: 'Short Emails and Letters',
      category: 'reading',
      description: 'Understanding personal correspondence',
      keywords: ['emails', 'letters', 'messages', 'personal']
    }
  ],
  writing: [
    {
      id: 'a2-messages',
      name: 'Short Messages and Emails',
      category: 'writing',
      description: 'Writing simple messages and emails',
      keywords: ['messages', 'notes', 'emails', 'communication']
    }
  ],
  listening: [
    {
      id: 'a2-announcements',
      name: 'Announcements and Instructions',
      category: 'listening',
      description: 'Understanding basic instructions',
      keywords: ['announcements', 'instructions', 'directions']
    }
  ],
  speaking: [
    {
      id: 'a2-describing',
      name: 'Describing People and Places',
      category: 'speaking',
      description: 'Simple descriptions',
      keywords: ['describing', 'people', 'places', 'appearance', 'location']
    }
  ]
};

// ============================================
// B1 - INTERMEDIATE
// ============================================
const B1_CURRICULUM: LevelCurriculum = {
  level: 'B1',
  examName: 'CEFR B1 Intermediate',
  description: 'Intermediate English for everyday situations',
  grammar: [
    {
      id: 'b1-past-continuous',
      name: 'Past Continuous',
      category: 'grammar',
      description: 'Past actions in progress',
      keywords: ['past continuous', 'was/were', '-ing', 'while', 'when']
    },
    {
      id: 'b1-present-perfect-continuous',
      name: 'Present Perfect Continuous',
      category: 'grammar',
      description: 'Actions from past to present',
      keywords: ['present perfect continuous', 'have been', 'duration', 'for', 'since']
    },
    {
      id: 'b1-conditionals',
      name: 'First and Second Conditionals',
      category: 'grammar',
      description: 'Real and hypothetical situations',
      keywords: ['conditionals', 'if', 'would', 'will', 'real', 'unreal']
    },
    {
      id: 'b1-passive',
      name: 'Passive Voice',
      category: 'grammar',
      description: 'Passive constructions',
      keywords: ['passive', 'be + past participle', 'by']
    },
    {
      id: 'b1-relative-clauses',
      name: 'Relative Clauses',
      category: 'grammar',
      description: 'Defining and non-defining clauses',
      keywords: ['relative clauses', 'who', 'which', 'that', 'where', 'when']
    },
    {
      id: 'b1-reported-speech',
      name: 'Reported Speech',
      category: 'grammar',
      description: 'Reporting what people said',
      keywords: ['reported speech', 'say', 'tell', 'ask', 'backshift']
    }
  ],
  vocabulary: [
    {
      id: 'b1-education',
      name: 'Education and Learning',
      category: 'vocabulary',
      description: 'School, university, and learning',
      keywords: ['education', 'school', 'university', 'study', 'learn', 'exam']
    },
    {
      id: 'b1-technology',
      name: 'Technology and Media',
      category: 'vocabulary',
      description: 'Computers, internet, and media',
      keywords: ['technology', 'computer', 'internet', 'media', 'social media']
    },
    {
      id: 'b1-environment',
      name: 'Environment and Nature',
      category: 'vocabulary',
      description: 'Environmental issues and nature',
      keywords: ['environment', 'nature', 'pollution', 'recycling', 'climate']
    },
    {
      id: 'b1-entertainment',
      name: 'Entertainment and Culture',
      category: 'vocabulary',
      description: 'Movies, music, arts, and culture',
      keywords: ['entertainment', 'culture', 'movies', 'music', 'art', 'theater']
    }
  ],
  reading: [
    {
      id: 'b1-articles-reviews',
      name: 'Articles and Reviews',
      category: 'reading',
      description: 'Understanding longer texts and opinions',
      keywords: ['articles', 'reviews', 'opinions', 'main ideas']
    }
  ],
  writing: [
    {
      id: 'b1-informal-letters',
      name: 'Informal Letters and Emails',
      category: 'writing',
      description: 'Writing to friends and family',
      keywords: ['informal', 'letters', 'emails', 'personal communication']
    },
    {
      id: 'b1-stories',
      name: 'Simple Stories and Narratives',
      category: 'writing',
      description: 'Writing short narratives',
      keywords: ['stories', 'narratives', 'past events', 'sequence']
    }
  ],
  listening: [
    {
      id: 'b1-interviews',
      name: 'Interviews and Discussions',
      category: 'listening',
      description: 'Understanding conversations on familiar topics',
      keywords: ['interviews', 'discussions', 'conversations', 'opinions']
    }
  ],
  speaking: [
    {
      id: 'b1-expressing-opinions',
      name: 'Expressing Opinions',
      category: 'speaking',
      description: 'Giving and justifying opinions',
      keywords: ['opinions', 'views', 'agree', 'disagree', 'reasons']
    }
  ]
};

// ============================================
// B2 - UPPER INTERMEDIATE
// ============================================
const B2_CURRICULUM: LevelCurriculum = {
  level: 'B2',
  examName: 'CEFR B2 Upper Intermediate',
  description: 'Upper intermediate English for academic and general contexts',
  grammar: [
    {
      id: 'b2-mixed-conditionals',
      name: 'Mixed Conditionals',
      category: 'grammar',
      description: 'Complex conditional structures',
      keywords: ['mixed conditionals', 'third conditional', 'hypothetical past']
    },
    {
      id: 'b2-perfect-modals',
      name: 'Perfect Modals',
      category: 'grammar',
      description: 'Modal verbs in perfect form',
      keywords: ['perfect modals', 'must have', 'should have', 'could have', 'speculation']
    },
    {
      id: 'b2-inversion',
      name: 'Inversion',
      category: 'grammar',
      description: 'Advanced sentence structures',
      keywords: ['inversion', 'rarely', 'seldom', 'never', 'formal']
    },
    {
      id: 'b2-participle-clauses',
      name: 'Participle Clauses',
      category: 'grammar',
      description: 'Using participles for complex ideas',
      keywords: ['participle clauses', '-ing', '-ed', 'reduced clauses']
    },
    {
      id: 'b2-wish-regret',
      name: 'Wish and Regret',
      category: 'grammar',
      description: 'Expressing wishes and regrets',
      keywords: ['wish', 'if only', 'regret', 'hypothetical', 'past']
    }
  ],
  vocabulary: [
    {
      id: 'b2-society',
      name: 'Society and Social Issues',
      category: 'vocabulary',
      description: 'Social problems and current affairs',
      keywords: ['society', 'social issues', 'problems', 'community', 'government']
    },
    {
      id: 'b2-idiomatic',
      name: 'Idiomatic Expressions',
      category: 'vocabulary',
      description: 'Common idioms and phrasal verbs',
      keywords: ['idioms', 'phrasal verbs', 'expressions', 'collocations']
    },
    {
      id: 'b2-media',
      name: 'Media and Communication',
      category: 'vocabulary',
      description: 'Journalism, broadcasting, and digital media',
      keywords: ['media', 'journalism', 'broadcasting', 'digital', 'communication']
    },
    {
      id: 'b2-lifestyle',
      name: 'Lifestyle and Well-being',
      category: 'vocabulary',
      description: 'Modern living, health, and personal development',
      keywords: ['lifestyle', 'well-being', 'health', 'personal growth', 'modern life']
    }
  ],
  reading: [
    {
      id: 'b2-complex-texts',
      name: 'Complex Texts and Arguments',
      category: 'reading',
      description: 'Understanding detailed arguments',
      keywords: ['complex texts', 'arguments', 'analysis', 'detailed']
    }
  ],
  writing: [
    {
      id: 'b2-formal-writing',
      name: 'Formal Letters and Reports',
      category: 'writing',
      description: 'Well-structured professional and academic writing',
      keywords: ['formal', 'letters', 'reports', 'essays', 'structured']
    },
    {
      id: 'b2-reviews-articles',
      name: 'Reviews and Articles',
      category: 'writing',
      description: 'Writing reviews and opinion pieces',
      keywords: ['reviews', 'articles', 'opinion', 'evaluation']
    }
  ],
  listening: [
    {
      id: 'b2-lectures',
      name: 'Lectures and Presentations',
      category: 'listening',
      description: 'Understanding extended speech',
      keywords: ['lectures', 'presentations', 'extended speech', 'academic']
    }
  ],
  speaking: [
    {
      id: 'b2-debate',
      name: 'Debate and Discussion',
      category: 'speaking',
      description: 'Participating in extended discussions',
      keywords: ['debate', 'discussion', 'argue', 'defend', 'point of view']
    }
  ]
};

// ============================================
// C1 - ADVANCED
// ============================================
const C1_CURRICULUM: LevelCurriculum = {
  level: 'C1',
  examName: 'CEFR C1 Advanced',
  description: 'Advanced English for academic and general excellence',
  grammar: [
    {
      id: 'c1-advanced-structures',
      name: 'Advanced Sentence Structures',
      category: 'grammar',
      description: 'Complex grammatical patterns',
      keywords: ['advanced structures', 'cleft sentences', 'fronting', 'emphasis']
    },
    {
      id: 'c1-subjunctive',
      name: 'Subjunctive Mood',
      category: 'grammar',
      description: 'Formal and hypothetical expressions',
      keywords: ['subjunctive', 'formal', 'insist', 'demand', 'suggest']
    },
    {
      id: 'c1-ellipsis',
      name: 'Ellipsis and Substitution',
      category: 'grammar',
      description: 'Advanced cohesive devices',
      keywords: ['ellipsis', 'substitution', 'omission', 'cohesion']
    },
    {
      id: 'c1-nominalisation',
      name: 'Nominalisation',
      category: 'grammar',
      description: 'Converting verbs and adjectives into nouns for formal writing',
      keywords: ['nominalisation', 'formal style', 'academic writing']
    }
  ],
  vocabulary: [
    {
      id: 'c1-academic',
      name: 'Academic Vocabulary',
      category: 'vocabulary',
      description: 'University-level academic language',
      keywords: ['academic', 'formal', 'research', 'analysis', 'theory']
    },
    {
      id: 'c1-nuanced',
      name: 'Nuanced Expressions',
      category: 'vocabulary',
      description: 'Subtle meanings and connotations',
      keywords: ['nuanced', 'subtle', 'connotation', 'precise', 'sophisticated']
    },
    {
      id: 'c1-collocations-advanced',
      name: 'Advanced Collocations',
      category: 'vocabulary',
      description: 'Natural word combinations at an advanced level',
      keywords: ['collocations', 'idiomatic', 'natural english']
    },
    {
      id: 'c1-culture-arts',
      name: 'Culture and the Arts',
      category: 'vocabulary',
      description: 'Deep discussion of artistic and cultural topics',
      keywords: ['culture', 'arts', 'literature', 'criticism', 'aesthetics']
    }
  ],
  reading: [
    {
      id: 'c1-complex-literature',
      name: 'Complex Literature',
      category: 'reading',
      description: 'Literary and academic texts',
      keywords: ['literature', 'academic texts', 'complex', 'sophisticated']
    },
    {
      id: 'c1-abstract-texts',
      name: 'Abstract and Conceptual Texts',
      category: 'reading',
      description: 'Understanding complex theories and abstract concepts',
      keywords: ['abstract', 'conceptual', 'theory', 'philosophy']
    }
  ],
  writing: [
    {
      id: 'c1-academic-writing',
      name: 'Academic Essays and Reports',
      category: 'writing',
      description: 'University-level writing',
      keywords: ['academic', 'essays', 'reports', 'research', 'formal']
    },
    {
      id: 'c1-proposals',
      name: 'Proposals and Evaluations',
      category: 'writing',
      description: 'Complex professional documents',
      keywords: ['proposals', 'evaluations', 'recommendations', 'professional']
    }
  ],
  listening: [
    {
      id: 'c1-complex-audio',
      name: 'Complex Audio Materials',
      category: 'listening',
      description: 'Understanding implicit meanings',
      keywords: ['complex audio', 'implicit', 'nuance', 'inference']
    },
    {
      id: 'c1-lectures-extended',
      name: 'Extended Lectures',
      category: 'listening',
      description: 'Following long presentations on unfamiliar topics',
      keywords: ['lectures', 'extended speech', 'academic']
    }
  ],
  speaking: [
    {
      id: 'c1-fluent-interaction',
      name: 'Fluent Interaction',
      category: 'speaking',
      description: 'Natural, spontaneous communication',
      keywords: ['fluent', 'spontaneous', 'natural', 'interaction']
    },
    {
      id: 'c1-public-speaking',
      name: 'Public Speaking',
      category: 'speaking',
      description: 'Delivering clear, well-structured presentations',
      keywords: ['presentation', 'public speaking', 'structure', 'rhetoric']
    }
  ]
};

// ============================================
// C2 - PROFICIENCY
// ============================================
const C2_CURRICULUM: LevelCurriculum = {
  level: 'C2',
  examName: 'CEFR C2 Proficiency',
  description: 'Near-native English proficiency',
  grammar: [
    {
      id: 'c2-mastery',
      name: 'Grammatical Mastery',
      category: 'grammar',
      description: 'Complete command of grammar',
      keywords: ['mastery', 'advanced', 'complex', 'sophisticated', 'nuanced']
    },
    {
      id: 'c2-stylistic-variation',
      name: 'Stylistic Variation',
      category: 'grammar',
      description: 'Using grammar to create subtle effects in tone and style',
      keywords: ['style', 'tone', 'rhetoric', 'emphasis']
    },
    {
      id: 'c2-archaisms',
      name: 'Archaisms and Formalities',
      category: 'grammar',
      description: 'Understanding and using rare or highly formal structures',
      keywords: ['archaic', 'highly formal', 'legal', 'literary']
    }
  ],
  vocabulary: [
    {
      id: 'c2-native-like',
      name: 'Native-like Vocabulary',
      category: 'vocabulary',
      description: 'Extensive vocabulary with native-like usage',
      keywords: ['extensive', 'native-like', 'sophisticated', 'precise', 'idiomatic']
    },
    {
      id: 'c2-idiomatic-mastery',
      name: 'Idiomatic Mastery',
      category: 'vocabulary',
      description: 'Full range of idiomatic and colloquial expressions',
      keywords: ['idioms', 'slang', 'colloquial', 'metaphor']
    },
    {
      id: 'c2-philosophy-ethics',
      name: 'Philosophy and Ethics',
      category: 'vocabulary',
      description: 'High-level discussion of abstract concepts and moral dilemmas',
      keywords: ['philosophy', 'ethics', 'abstract', 'concepts', 'moral', 'dilemma']
    }
  ],
  reading: [
    {
      id: 'c2-any-text',
      name: 'All Text Types',
      category: 'reading',
      description: 'Understanding any written material',
      keywords: ['all texts', 'complex', 'abstract', 'specialized', 'literary']
    },
    {
      id: 'c2-critical-analysis',
      name: 'Critical Textual Analysis',
      category: 'reading',
      description: 'Deconstructing complex arguments and stylistic choices',
      keywords: ['critical', 'analysis', 'deconstruction', 'style']
    }
  ],
  writing: [
    {
      id: 'c2-sophisticated-writing',
      name: 'Sophisticated Writing',
      category: 'writing',
      description: 'Writing at a native-speaker professional/academic level',
      keywords: ['sophisticated', 'professional', 'academic', 'precise', 'nuanced']
    },
    {
      id: 'c2-creative-mastery',
      name: 'Creative and Professional Mastery',
      category: 'writing',
      description: 'Writing with total flexibility of style and register',
      keywords: ['creative', 'professional', 'flexibility', 'mastery']
    }
  ],
  listening: [
    {
      id: 'c2-any-audio',
      name: 'All Audio Types',
      category: 'listening',
      description: 'Understanding any spoken language',
      keywords: ['all audio', 'native speed', 'accents', 'complex']
    },
    {
      id: 'c2-implicit-meanings',
      name: 'Implicit and Sarcastic Meanings',
      category: 'listening',
      description: 'Capturing the finest nuances of meaning and tone',
      keywords: ['implicit', 'sarcasm', 'irony', 'nuance']
    }
  ],
  speaking: [
    {
      id: 'c2-near-native',
      name: 'Near-native Speaking',
      category: 'speaking',
      description: 'Speaking with precision and fluency',
      keywords: ['near-native', 'fluency', 'precision', 'sophisticated']
    },
    {
      id: 'c2-rhetorical-skills',
      name: 'Rhetorical Skills',
      category: 'speaking',
      description: 'Persuading and debating at a high intellectual level',
      keywords: ['rhetoric', 'persuasion', 'debate', 'intellectual']
    }
  ]
};

// ============================================
// CURRICULUM DATABASE
// ============================================
export const CAMBRIDGE_CURRICULUM: Record<CEFRLevel, LevelCurriculum> = {
  A1: A1_CURRICULUM,
  A2: A2_CURRICULUM,
  B1: B1_CURRICULUM,
  B2: B2_CURRICULUM,
  C1: C1_CURRICULUM,
  C2: C2_CURRICULUM
};

/**
 * Get curriculum for a specific level
 */
export function getCurriculum(level: CEFRLevel): LevelCurriculum {
  return CAMBRIDGE_CURRICULUM[level];
}

/**
 * Get all topics for a level
 */
export function getAllTopics(level: CEFRLevel): CurriculumTopic[] {
  const curriculum = getCurriculum(level);
  return [
    ...curriculum.grammar,
    ...curriculum.vocabulary,
    ...curriculum.reading,
    ...curriculum.writing,
    ...curriculum.listening,
    ...curriculum.speaking,
    ...(curriculum.pronunciation || []),
    ...(curriculum.dictation || []),
    ...(curriculum.roleplay || [])
  ];
}

/**
 * Get topics by category
 */
export function getTopicsByCategory(
  level: CEFRLevel,
  category: ExerciseCategory
): CurriculumTopic[] {
  const curriculum = getCurriculum(level);
  
  // Mapping for custom categories to curriculum fields
  const categoryMap: Record<string, keyof LevelCurriculum> = {
    'grammar': 'grammar',
    'vocabulary': 'vocabulary',
    'reading': 'reading',
    'writing': 'writing',
    'listening': 'listening',
    'speaking': 'speaking',
    'pronunciation': 'pronunciation',
    'dictation': 'dictation',
    'roleplay': 'roleplay'
  };

  const field = categoryMap[category];
  if (field) {
    const result = curriculum[field];
    if (Array.isArray(result)) return result;
  }
  
  return [];
}

/**
 * Get random topic for level
 */
export function getRandomTopic(level: CEFRLevel): CurriculumTopic {
  const topics = getAllTopics(level);
  const randomIndex = Math.floor(Math.random() * topics.length);
  return topics[randomIndex];
}
