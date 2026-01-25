// ============================================
// CAMBRIDGE CURRICULUM DATA - CEFR ALIGNED
// ============================================

export { type CEFRLevel } from './exercise-types';

export interface CurriculumTopic {
  id: string;
  name: string;
  category: 'grammar' | 'vocabulary' | 'reading' | 'writing' | 'listening' | 'speaking' | 'pronunciation' | 'dictation' | 'roleplay' | 'exam-practice';
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
  examPractice?: CurriculumTopic[];
}

// ============================================
// A1 - BEGINNER (Cambridge Key - KET)
// ============================================
const A1_CURRICULUM: LevelCurriculum = {
  level: 'A1',
  examName: 'Cambridge Key English Test (KET)',
  description: 'Basic English for everyday situations',
  grammar: [
    {
      id: 'a1-present-simple',
      name: 'Present Simple',
      category: 'grammar',
      description: 'Basic present tense for habits and facts',
      keywords: ['present simple', 'daily routines', 'habits', 'facts', 'be verb']
    },
    {
      id: 'a1-present-continuous',
      name: 'Present Continuous',
      category: 'grammar',
      description: 'Actions happening now',
      keywords: ['present continuous', 'now', 'at the moment', '-ing form']
    },
    {
      id: 'a1-past-simple',
      name: 'Past Simple',
      category: 'grammar',
      description: 'Simple past actions and events',
      keywords: ['past simple', 'yesterday', 'last week', 'regular verbs', 'irregular verbs']
    },
    {
      id: 'a1-articles',
      name: 'Articles (a, an, the)',
      category: 'grammar',
      description: 'Basic article usage',
      keywords: ['articles', 'a', 'an', 'the', 'definite', 'indefinite']
    },
    {
      id: 'a1-pronouns',
      name: 'Personal Pronouns',
      category: 'grammar',
      description: 'Subject and object pronouns',
      keywords: ['pronouns', 'I', 'you', 'he', 'she', 'it', 'we', 'they']
    },
    {
      id: 'a1-possessives',
      name: 'Possessive Adjectives',
      category: 'grammar',
      description: 'Showing possession',
      keywords: ['possessive', 'my', 'your', 'his', 'her', 'our', 'their']
    },
    {
      id: 'a1-questions',
      name: 'Basic Questions',
      category: 'grammar',
      description: 'Forming simple questions',
      keywords: ['questions', 'wh-questions', 'yes/no questions', 'question words']
    },
    {
      id: 'a1-prepositions',
      name: 'Prepositions of Time and Place',
      category: 'grammar',
      description: 'Basic prepositions',
      keywords: ['prepositions', 'in', 'on', 'at', 'time', 'place']
    }
  ],
  vocabulary: [
    {
      id: 'a1-family',
      name: 'Family and Relationships',
      category: 'vocabulary',
      description: 'Family members and relationships',
      keywords: ['family', 'mother', 'father', 'brother', 'sister', 'relatives']
    },
    {
      id: 'a1-numbers',
      name: 'Numbers and Time',
      category: 'vocabulary',
      description: 'Basic numbers, dates, and time',
      keywords: ['numbers', 'time', 'clock', 'days', 'months', 'years']
    },
    {
      id: 'a1-colors-objects',
      name: 'Colors and Common Objects',
      category: 'vocabulary',
      description: 'Everyday objects and colors',
      keywords: ['colors', 'objects', 'things', 'everyday items']
    },
    {
      id: 'a1-food-drink',
      name: 'Food and Drink',
      category: 'vocabulary',
      description: 'Common food and beverages',
      keywords: ['food', 'drink', 'meals', 'restaurant', 'eating']
    },
    {
      id: 'a1-home',
      name: 'House and Home',
      category: 'vocabulary',
      description: 'Rooms, furniture, and household items',
      keywords: ['home', 'house', 'rooms', 'furniture', 'household']
    },
    {
      id: 'a1-daily-activities',
      name: 'Daily Activities',
      category: 'vocabulary',
      description: 'Everyday routines and actions',
      keywords: ['daily routine', 'activities', 'wake up', 'go to bed', 'work']
    },
    {
      id: 'a1-weather',
      name: 'Weather',
      category: 'vocabulary',
      description: 'Weather conditions',
      keywords: ['weather', 'sunny', 'rainy', 'cloudy', 'temperature']
    },
    {
      id: 'a1-clothes',
      name: 'Clothes and Accessories',
      category: 'vocabulary',
      description: 'Basic clothing items',
      keywords: ['clothes', 'shirt', 'pants', 'dress', 'shoes', 'accessories']
    }
  ],
  reading: [
    {
      id: 'a1-short-texts',
      name: 'Short Simple Texts',
      category: 'reading',
      description: 'Understanding simple notices and messages',
      keywords: ['notices', 'signs', 'messages', 'simple texts']
    },
    {
      id: 'a1-basic-info',
      name: 'Basic Information',
      category: 'reading',
      description: 'Reading forms and personal information',
      keywords: ['forms', 'personal information', 'details', 'data']
    }
  ],
  writing: [
    {
      id: 'a1-simple-sentences',
      name: 'Simple Sentences',
      category: 'writing',
      description: 'Writing basic sentences',
      keywords: ['simple sentences', 'basic writing', 'short texts']
    },
    {
      id: 'a1-personal-info',
      name: 'Personal Information',
      category: 'writing',
      description: 'Filling forms with personal details',
      keywords: ['forms', 'personal details', 'about me']
    }
  ],
  listening: [
    {
      id: 'a1-basic-conversations',
      name: 'Basic Conversations',
      category: 'listening',
      description: 'Understanding simple everyday conversations',
      keywords: ['conversations', 'dialogues', 'simple speech']
    }
  ],
  speaking: [
    {
      id: 'a1-introductions',
      name: 'Introductions and Greetings',
      category: 'speaking',
      description: 'Introducing yourself and others',
      keywords: ['greetings', 'introductions', 'hello', 'my name is']
    }
  ]
};

// ============================================
// A2 - ELEMENTARY (Cambridge Key - KET)
// ============================================
const A2_CURRICULUM: LevelCurriculum = {
  level: 'A2',
  examName: 'Cambridge Key English Test (KET)',
  description: 'Elementary English for basic communication',
  grammar: [
    {
      id: 'a2-present-perfect',
      name: 'Present Perfect Simple',
      category: 'grammar',
      description: 'Present perfect for experiences',
      keywords: ['present perfect', 'have/has', 'ever', 'never', 'just', 'already']
    },
    {
      id: 'a2-comparatives',
      name: 'Comparatives and Superlatives',
      category: 'grammar',
      description: 'Comparing things and people',
      keywords: ['comparatives', 'superlatives', 'more', 'most', '-er', '-est']
    },
    {
      id: 'a2-future',
      name: 'Future Forms (will, going to)',
      category: 'grammar',
      description: 'Talking about future plans',
      keywords: ['future', 'will', 'going to', 'plans', 'predictions']
    },
    {
      id: 'a2-modals',
      name: 'Modal Verbs (can, should, must)',
      category: 'grammar',
      description: 'Ability, advice, and obligation',
      keywords: ['modals', 'can', 'could', 'should', 'must', 'have to']
    },
    {
      id: 'a2-adverbs',
      name: 'Adverbs of Frequency',
      category: 'grammar',
      description: 'How often things happen',
      keywords: ['adverbs', 'frequency', 'always', 'usually', 'sometimes', 'never']
    }
  ],
  vocabulary: [
    {
      id: 'a2-travel',
      name: 'Travel and Transport',
      category: 'vocabulary',
      description: 'Transportation and travel vocabulary',
      keywords: ['travel', 'transport', 'bus', 'train', 'plane', 'journey']
    },
    {
      id: 'a2-shopping',
      name: 'Shopping and Money',
      category: 'vocabulary',
      description: 'Shopping vocabulary and transactions',
      keywords: ['shopping', 'money', 'buy', 'sell', 'price', 'store']
    },
    {
      id: 'a2-health',
      name: 'Health and Body',
      category: 'vocabulary',
      description: 'Health, illness, and body parts',
      keywords: ['health', 'body', 'illness', 'doctor', 'medicine']
    },
    {
      id: 'a2-hobbies',
      name: 'Hobbies and Free Time',
      category: 'vocabulary',
      description: 'Leisure activities and interests',
      keywords: ['hobbies', 'free time', 'sports', 'interests', 'activities']
    },
    {
      id: 'a2-work',
      name: 'Work and Jobs',
      category: 'vocabulary',
      description: 'Occupations and workplace',
      keywords: ['work', 'jobs', 'occupation', 'profession', 'office']
    }
  ],
  reading: [
    {
      id: 'a2-short-articles',
      name: 'Short Articles and Stories',
      category: 'reading',
      description: 'Understanding simple texts on familiar topics',
      keywords: ['articles', 'stories', 'narratives', 'simple texts']
    }
  ],
  writing: [
    {
      id: 'a2-short-messages',
      name: 'Short Messages and Notes',
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
// B1 - INTERMEDIATE (Cambridge PET)
// ============================================
const B1_CURRICULUM: LevelCurriculum = {
  level: 'B1',
  examName: 'Cambridge Preliminary English Test (PET)',
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
// B2 - UPPER INTERMEDIATE (Cambridge FCE)
// ============================================
const B2_CURRICULUM: LevelCurriculum = {
  level: 'B2',
  examName: 'Cambridge First Certificate (FCE)',
  description: 'Upper intermediate English for academic and professional contexts',
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
      id: 'b2-business',
      name: 'Business and Economics',
      category: 'vocabulary',
      description: 'Business, finance, and economics',
      keywords: ['business', 'economics', 'finance', 'market', 'company', 'trade']
    },
    {
      id: 'b2-science',
      name: 'Science and Innovation',
      category: 'vocabulary',
      description: 'Scientific topics and research',
      keywords: ['science', 'research', 'innovation', 'discovery', 'experiment']
    },
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
      description: 'Professional and academic writing',
      keywords: ['formal', 'letters', 'reports', 'essays', 'professional']
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
  ],
  examPractice: [
    {
      id: 'fce-reading-part-1',
      name: 'FCE Reading Part 1: Multiple Choice Cloze',
      category: 'exam-practice',
      description: 'Choose the correct word from four options to fill each gap in a text.',
      keywords: ['collocations', 'fixed phrases', 'idioms', 'phrasal verbs']
    },
    {
      id: 'fce-reading-part-2',
      name: 'FCE Reading Part 2: Open Cloze',
      category: 'exam-practice',
      description: 'Fill in each gap in a text with one word.',
      keywords: ['prepositions', 'articles', 'pronouns', 'connectors']
    },
    {
      id: 'fce-reading-part-3',
      name: 'FCE Reading Part 3: Word Formation',
      category: 'exam-practice',
      description: 'Transform a base word to fit a gap in a text.',
      keywords: ['prefixes', 'suffixes', 'word families', 'derivatives']
    },
    {
      id: 'fce-reading-part-4',
      name: 'FCE Reading Part 4: Key Word Transformation',
      category: 'exam-practice',
      description: 'Rewrite a sentence using a given key word so that it has a similar meaning.',
      keywords: ['paraphrasing', 'grammar structures', 'lexical patterns']
    },
    {
      id: 'fce-reading-part-5',
      name: 'FCE Reading Part 5: Multiple Choice',
      category: 'exam-practice',
      description: 'Answer questions about a long text by choosing from four options.',
      keywords: ['detail', 'opinion', 'attitude', 'purpose', 'main idea']
    },
    {
      id: 'fce-reading-part-6',
      name: 'FCE Reading Part 6: Gapped Text',
      category: 'exam-practice',
      description: 'Choose the correct sentence to fill each gap in a text.',
      keywords: ['cohesion', 'coherence', 'logical flow', 'reference words']
    },
    {
      id: 'fce-reading-part-7',
      name: 'FCE Reading Part 7: Multiple Matching',
      category: 'exam-practice',
      description: 'Match statements or questions to sections of a text.',
      keywords: ['scanning', 'paraphrasing', 'finding specific information']
    }
  ]
};

// ============================================
// C1 - ADVANCED (Cambridge CAE)
// ============================================
const C1_CURRICULUM: LevelCurriculum = {
  level: 'C1',
  examName: 'Cambridge Advanced (CAE)',
  description: 'Advanced English for professional and academic success',
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
      id: 'c1-specialized',
      name: 'Specialized Topics',
      category: 'vocabulary',
      description: 'Professional and technical vocabulary',
      keywords: ['specialized', 'technical', 'professional', 'expertise']
    },
    {
      id: 'c1-collocations-advanced',
      name: 'Advanced Collocations',
      category: 'vocabulary',
      description: 'Natural word combinations at an advanced level',
      keywords: ['collocations', 'idiomatic', 'natural english']
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
      description: 'Professional documents',
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
// C2 - PROFICIENCY (Cambridge CPE)
// ============================================
const C2_CURRICULUM: LevelCurriculum = {
  level: 'C2',
  examName: 'Cambridge Proficiency (CPE)',
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
      id: 'c2-specialized-fields',
      name: 'Specialized Professional Fields',
      category: 'vocabulary',
      description: 'Expert-level terminology',
      keywords: ['specialized', 'expert', 'professional', 'technical', 'advanced']
    },
    {
      id: 'c2-idiomatic-mastery',
      name: 'Idiomatic Mastery',
      category: 'vocabulary',
      description: 'Full range of idiomatic and colloquial expressions',
      keywords: ['idioms', 'slang', 'colloquial', 'metaphor']
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
      description: 'Writing at a professional/academic level',
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
    ...(curriculum.roleplay || []),
    ...(curriculum.examPractice || [])
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
    'roleplay': 'roleplay',
    'exam-practice': 'examPractice'
  };

  const field = categoryMap[category];
  if (field) {
    const result = curriculum[field];
    if (Array.isArray(result)) return result;
  }

  // Fallback: If category is exam-practice but no specific examPractice field, 
  // combine reading, writing, grammar, vocabulary
  if (category === 'exam-practice') {
    return [
      ...curriculum.grammar,
      ...curriculum.vocabulary,
      ...curriculum.reading,
      ...curriculum.writing
    ];
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
