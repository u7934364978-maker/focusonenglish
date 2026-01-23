// ============================================
// SYLLABUS OFICIAL COMPLETO NIVEL B2 (CEFR)
// ============================================
// Basado en el Marco Común Europeo de Referencia (MCER/CEFR)
// y especificaciones de Cambridge B2 First (FCE)

export interface B2Topic {
  id: string;
  name: string;
  keywords: string[];
  category: 'personal' | 'social' | 'professional' | 'academic';
}

export interface B2GrammarPoint {
  id: string;
  name: string;
  description: string;
  examples: string[];
  difficulty: 'core' | 'advanced';
}

export interface B2Function {
  id: string;
  name: string;
  description: string;
  examplePhrases: string[];
}

// ============================================
// GRAMÁTICA B2 OFICIAL
// ============================================

export const B2_GRAMMAR: B2GrammarPoint[] = [
  // TIEMPOS VERBALES
  {
    id: 'past-perfect',
    name: 'Past Perfect',
    description: 'Acciones anteriores a otras en el pasado',
    examples: [
      'She had finished her work before the meeting started.',
      'They had never visited Paris until last year.',
      'Had you seen him before the party?'
    ],
    difficulty: 'core'
  },
  {
    id: 'past-perfect-continuous',
    name: 'Past Perfect Continuous',
    description: 'Acciones en progreso antes de otra acción pasada',
    examples: [
      'I had been working for three hours when she called.',
      'They had been living in London before moving to Berlin.'
    ],
    difficulty: 'core'
  },
  {
    id: 'future-perfect',
    name: 'Future Perfect',
    description: 'Acciones que se completarán antes de un momento futuro',
    examples: [
      'By next year, I will have graduated from university.',
      'She will have finished the project by Friday.'
    ],
    difficulty: 'core'
  },
  {
    id: 'future-continuous',
    name: 'Future Continuous',
    description: 'Acciones en progreso en un momento futuro',
    examples: [
      'This time tomorrow, I will be flying to New York.',
      'They will be studying when you arrive.'
    ],
    difficulty: 'core'
  },
  
  // MODALES
  {
    id: 'modal-deduction',
    name: 'Modal Verbs for Deduction',
    description: 'Must, might, could, can\'t para especulación y deducción',
    examples: [
      'She must be tired after such a long journey.',
      'He might have forgotten about the meeting.',
      'That can\'t be true!'
    ],
    difficulty: 'core'
  },
  {
    id: 'modal-obligation',
    name: 'Modals of Obligation and Advice',
    description: 'Should, ought to, must, have to, need to',
    examples: [
      'You should see a doctor about that cough.',
      'We must finish this report by tomorrow.',
      'You don\'t have to come if you don\'t want to.'
    ],
    difficulty: 'core'
  },
  
  // CONDICIONALES
  {
    id: 'mixed-conditionals',
    name: 'Mixed Conditionals',
    description: 'Combinación de condicionales para situaciones hipotéticas complejas',
    examples: [
      'If I had studied harder, I would be a doctor now.',
      'If she were more organized, she wouldn\'t have missed the deadline.'
    ],
    difficulty: 'advanced'
  },
  {
    id: 'third-conditional',
    name: 'Third Conditional',
    description: 'Situaciones hipotéticas en el pasado',
    examples: [
      'If I had known, I would have helped you.',
      'She wouldn\'t have been late if she had left earlier.'
    ],
    difficulty: 'core'
  },
  
  // PASIVAS
  {
    id: 'passive-all-tenses',
    name: 'Passive Voice (All Tenses)',
    description: 'Voz pasiva en presente, pasado, futuro y perfectos',
    examples: [
      'The book was written by a famous author.',
      'The project will be completed next month.',
      'The decision has been made by the committee.',
      'The house is being renovated.'
    ],
    difficulty: 'core'
  },
  {
    id: 'passive-reporting',
    name: 'Passive Reporting Structures',
    description: 'It is said/believed/thought that...',
    examples: [
      'It is believed that climate change is accelerating.',
      'The company is said to be planning major changes.',
      'He is thought to have left the country.'
    ],
    difficulty: 'advanced'
  },
  
  // REPORTED SPEECH
  {
    id: 'reported-speech',
    name: 'Reported Speech',
    description: 'Estilo indirecto con cambios de tiempo verbal',
    examples: [
      'She said she was tired.',
      'He told me he had finished the work.',
      'They asked if I could help them.'
    ],
    difficulty: 'core'
  },
  {
    id: 'reporting-verbs',
    name: 'Reporting Verbs',
    description: 'Suggest, recommend, insist, urge, etc.',
    examples: [
      'She suggested going to the cinema.',
      'He insisted that we stay for dinner.',
      'They recommended that I apply for the job.'
    ],
    difficulty: 'advanced'
  },
  
  // ESTRUCTURAS DE ÉNFASIS
  {
    id: 'cleft-sentences',
    name: 'Cleft Sentences (It...that, What...is)',
    description: 'Estructuras para enfatizar información',
    examples: [
      'What I need is a good night\'s sleep.',
      'It was John who broke the window.',
      'What surprised me was his reaction.'
    ],
    difficulty: 'advanced'
  },
  {
    id: 'inversion',
    name: 'Inversion for Emphasis',
    description: 'Inversión sujeto-verbo para énfasis',
    examples: [
      'Never have I seen such a beautiful sunset.',
      'Only then did I realize my mistake.',
      'Not only is she talented, but she\'s also hardworking.'
    ],
    difficulty: 'advanced'
  },
  
  // RELATIVOS
  {
    id: 'relative-clauses',
    name: 'Defining and Non-defining Relative Clauses',
    description: 'Oraciones de relativo con who, which, that, whose, where',
    examples: [
      'The book, which I bought yesterday, is excellent.',
      'People who exercise regularly tend to be healthier.',
      'This is the house where I grew up.'
    ],
    difficulty: 'core'
  },
  
  // CAUSATIVOS
  {
    id: 'causative-have-get',
    name: 'Causative Structures (have/get something done)',
    description: 'Hacer que alguien haga algo',
    examples: [
      'I had my car repaired last week.',
      'She got her hair cut yesterday.',
      'We need to have the house painted.'
    ],
    difficulty: 'core'
  },
  
  // WISH / IF ONLY
  {
    id: 'wish-if-only',
    name: 'Wish and If Only',
    description: 'Expresar deseos y arrepentimientos',
    examples: [
      'I wish I could speak Spanish fluently.',
      'If only I had listened to your advice.',
      'She wishes she lived closer to her family.'
    ],
    difficulty: 'core'
  },
  
  // COMPARATIVAS Y SUPERLATIVAS AVANZADAS
  {
    id: 'advanced-comparatives',
    name: 'Advanced Comparative Structures',
    description: 'The more..., the more... / as...as / not as...as',
    examples: [
      'The more I study, the more I learn.',
      'She\'s not as confident as she appears.',
      'It\'s far more complicated than I thought.'
    ],
    difficulty: 'core'
  },
  
  // GERUNDIOS E INFINITIVOS
  {
    id: 'gerunds-infinitives',
    name: 'Gerunds and Infinitives',
    description: 'Uso correcto de -ing y to + infinitive',
    examples: [
      'I enjoy reading in my free time.',
      'She decided to accept the job offer.',
      'He regrets not studying harder.'
    ],
    difficulty: 'core'
  },
  
  // QUANTIFIERS
  {
    id: 'quantifiers',
    name: 'Quantifiers',
    description: 'Much, many, few, little, plenty of, a great deal of',
    examples: [
      'There isn\'t much time left.',
      'Few people understand the complexity of the issue.',
      'We have plenty of food for the party.'
    ],
    difficulty: 'core'
  },
  
  // ARTICLES
  {
    id: 'articles-advanced',
    name: 'Advanced Article Usage',
    description: 'Uso avanzado de a/an, the y artículo cero',
    examples: [
      'The sun rises in the east.',
      'I play the piano but she plays tennis.',
      'Life is full of surprises.'
    ],
    difficulty: 'advanced'
  }
];

// ============================================
// VOCABULARIO Y TEMAS B2 OFICIALES
// ============================================

export const B2_TOPICS: B2Topic[] = [
  // PERSONAL
  {
    id: 'personal-relationships',
    name: 'Personal Relationships',
    keywords: ['friendship', 'family', 'relationships', 'emotions', 'personality', 'character traits'],
    category: 'personal'
  },
  {
    id: 'lifestyle-habits',
    name: 'Lifestyle and Habits',
    keywords: ['daily routine', 'health', 'fitness', 'diet', 'hobbies', 'leisure activities'],
    category: 'personal'
  },
  {
    id: 'personal-experiences',
    name: 'Personal Experiences',
    keywords: ['memories', 'achievements', 'challenges', 'life events', 'milestones'],
    category: 'personal'
  },
  
  // SOCIAL
  {
    id: 'social-issues',
    name: 'Social Issues',
    keywords: ['inequality', 'poverty', 'homelessness', 'discrimination', 'human rights', 'social justice'],
    category: 'social'
  },
  {
    id: 'environment-sustainability',
    name: 'Environment and Sustainability',
    keywords: ['climate change', 'pollution', 'recycling', 'renewable energy', 'conservation', 'biodiversity'],
    category: 'social'
  },
  {
    id: 'technology-society',
    name: 'Technology and Society',
    keywords: ['social media', 'artificial intelligence', 'privacy', 'digital divide', 'innovation', 'automation'],
    category: 'social'
  },
  {
    id: 'media-communication',
    name: 'Media and Communication',
    keywords: ['journalism', 'fake news', 'advertising', 'broadcasting', 'social networks', 'information'],
    category: 'social'
  },
  {
    id: 'culture-arts',
    name: 'Culture and Arts',
    keywords: ['music', 'cinema', 'literature', 'painting', 'sculpture', 'theatre', 'cultural heritage'],
    category: 'social'
  },
  
  // PROFESSIONAL
  {
    id: 'work-employment',
    name: 'Work and Employment',
    keywords: ['career', 'job market', 'unemployment', 'workplace', 'skills', 'training', 'recruitment'],
    category: 'professional'
  },
  {
    id: 'business-economy',
    name: 'Business and Economy',
    keywords: ['entrepreneurship', 'investment', 'trade', 'markets', 'financial crisis', 'globalization'],
    category: 'professional'
  },
  {
    id: 'professional-communication',
    name: 'Professional Communication',
    keywords: ['meetings', 'presentations', 'negotiations', 'emails', 'reports', 'networking'],
    category: 'professional'
  },
  
  // ACADEMIC
  {
    id: 'education-learning',
    name: 'Education and Learning',
    keywords: ['teaching methods', 'online learning', 'university', 'exams', 'curriculum', 'academic achievement'],
    category: 'academic'
  },
  {
    id: 'science-research',
    name: 'Science and Research',
    keywords: ['scientific method', 'discoveries', 'experiments', 'innovation', 'medical research', 'space exploration'],
    category: 'academic'
  },
  {
    id: 'history-society',
    name: 'History and Society',
    keywords: ['historical events', 'civilizations', 'wars', 'revolutions', 'social movements', 'cultural changes'],
    category: 'academic'
  },
  
  // GENERAL TOPICS
  {
    id: 'travel-tourism',
    name: 'Travel and Tourism',
    keywords: ['destinations', 'cultural exchange', 'tourism industry', 'travel experiences', 'adventure', 'hospitality'],
    category: 'social'
  },
  {
    id: 'food-cuisine',
    name: 'Food and Cuisine',
    keywords: ['cooking', 'nutrition', 'eating habits', 'restaurants', 'food culture', 'culinary traditions'],
    category: 'social'
  },
  {
    id: 'sports-competition',
    name: 'Sports and Competition',
    keywords: ['athletics', 'team sports', 'fitness', 'championships', 'sportsmanship', 'exercise'],
    category: 'social'
  },
  {
    id: 'urban-rural-life',
    name: 'Urban and Rural Life',
    keywords: ['cities', 'countryside', 'urbanization', 'housing', 'infrastructure', 'community'],
    category: 'social'
  },
  {
    id: 'consumer-society',
    name: 'Consumer Society',
    keywords: ['shopping', 'advertising', 'brands', 'consumerism', 'retail', 'online shopping'],
    category: 'social'
  }
];

// ============================================
// FUNCIONES COMUNICATIVAS B2
// ============================================

export const B2_FUNCTIONS: B2Function[] = [
  {
    id: 'express-opinion',
    name: 'Expressing Opinions',
    description: 'Dar y justificar opiniones personales',
    examplePhrases: [
      'In my opinion...',
      'I strongly believe that...',
      'From my perspective...',
      'It seems to me that...',
      'I\'m convinced that...'
    ]
  },
  {
    id: 'agree-disagree',
    name: 'Agreeing and Disagreeing',
    description: 'Mostrar acuerdo o desacuerdo de forma educada',
    examplePhrases: [
      'I completely agree with you.',
      'I see your point, but...',
      'I beg to differ.',
      'That\'s exactly what I think.',
      'I\'m afraid I can\'t agree with that.'
    ]
  },
  {
    id: 'persuade-convince',
    name: 'Persuading and Convincing',
    description: 'Persuadir y convencer con argumentos',
    examplePhrases: [
      'Surely you can see that...',
      'The evidence suggests that...',
      'You must admit that...',
      'Don\'t you think it would be better to...?',
      'I can assure you that...'
    ]
  },
  {
    id: 'speculate',
    name: 'Speculating and Hypothesizing',
    description: 'Especular sobre posibilidades',
    examplePhrases: [
      'It could be that...',
      'Perhaps...',
      'It\'s quite likely that...',
      'I suspect that...',
      'It\'s possible that...'
    ]
  },
  {
    id: 'make-suggestions',
    name: 'Making Suggestions and Recommendations',
    description: 'Sugerir y recomendar',
    examplePhrases: [
      'Why don\'t we...?',
      'I\'d recommend...',
      'How about...?',
      'It might be a good idea to...',
      'Have you considered...?'
    ]
  },
  {
    id: 'complain-apologize',
    name: 'Complaining and Apologizing',
    description: 'Quejarse y disculparse apropiadamente',
    examplePhrases: [
      'I\'m afraid I must complain about...',
      'I\'m terribly sorry about...',
      'I really must apologize for...',
      'This is simply not acceptable.',
      'Please accept my sincere apologies.'
    ]
  },
  {
    id: 'describe-narrate',
    name: 'Describing and Narrating',
    description: 'Describir y narrar eventos de forma detallada',
    examplePhrases: [
      'What struck me most was...',
      'The thing that impressed me was...',
      'As I was saying...',
      'To cut a long story short...',
      'The next thing I knew...'
    ]
  },
  {
    id: 'compare-contrast',
    name: 'Comparing and Contrasting',
    description: 'Comparar y contrastar ideas',
    examplePhrases: [
      'In comparison to...',
      'Unlike...',
      'Similarly...',
      'On the other hand...',
      'Whereas...'
    ]
  },
  {
    id: 'emphasize',
    name: 'Emphasizing',
    description: 'Enfatizar puntos importantes',
    examplePhrases: [
      'What I really want to emphasize is...',
      'The key point here is...',
      'It\'s absolutely essential that...',
      'Above all...',
      'I cannot stress enough that...'
    ]
  },
  {
    id: 'express-certainty-doubt',
    name: 'Expressing Certainty and Doubt',
    description: 'Expresar certeza o duda',
    examplePhrases: [
      'I\'m absolutely certain that...',
      'Without a doubt...',
      'I\'m not entirely sure that...',
      'There\'s no question that...',
      'I have my doubts about...'
    ]
  }
];

// ============================================
// TIPOS DE EJERCICIOS POR SKILL
// ============================================

export const B2_EXERCISE_TYPES = {
  grammar: [
    'multiple-choice',
    'fill-blank',
    'sentence-building',
    'key-word-transformation',
    'word-formation',
    'multiple-choice-cloze'
  ],
  vocabulary: [
    'multiple-choice',
    'word-formation',
    'fill-blank',
    'collocation-matching'
  ],
  reading: [
    'reading-comprehension',
    'multiple-choice',
    'true-false',
    'multiple-matching',
    'gapped-text'
  ],
  writing: [
    'writing-analysis',
    'essay-writing',
    'formal-email',
    'article-writing',
    'report-writing'
  ],
  listening: [
    'listening-comprehension',
    'multiple-choice',
    'fill-blank'
  ],
  speaking: [
    'speaking-analysis',
    'pronunciation-practice',
    'discussion-task',
    'presentation'
  ]
};

// ============================================
// FUNCIONES DE AYUDA
// ============================================

export function getRandomB2Topic(): B2Topic {
  return B2_TOPICS[Math.floor(Math.random() * B2_TOPICS.length)];
}

export function getRandomB2Grammar(): B2GrammarPoint {
  return B2_GRAMMAR[Math.floor(Math.random() * B2_GRAMMAR.length)];
}

export function getRandomB2Function(): B2Function {
  return B2_FUNCTIONS[Math.floor(Math.random() * B2_FUNCTIONS.length)];
}

export function getB2TopicsByCategory(category: B2Topic['category']): B2Topic[] {
  return B2_TOPICS.filter(topic => topic.category === category);
}

export function getB2GrammarByDifficulty(difficulty: 'core' | 'advanced'): B2GrammarPoint[] {
  return B2_GRAMMAR.filter(grammar => grammar.difficulty === difficulty);
}
