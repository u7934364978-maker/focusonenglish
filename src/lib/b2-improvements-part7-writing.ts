// ================================================================
// FCE WRITING - PART 2: Article, Review, Report
// ================================================================
// Adding missing writing types to complement existing Essay and Email

export interface WritingRubric {
  content: number; // 5 points - all content points covered
  communicativeAchievement: number; // 5 points - appropriate style and tone
  organisation: number; // 5 points - clear structure and cohesion
  language: number; // 5 points - range and accuracy
}

export interface WritingTask {
  id: string;
  type: 'article' | 'review' | 'report';
  title: string;
  prompt: string;
  wordCount: { min: number; max: number };
  rubric: WritingRubric;
  styleFeatures: string[];
  structureGuidance: string[];
  usefulLanguage: {
    category: string;
    phrases: string[];
  }[];
  exampleResponse?: string;
}

// ================================================================
// ARTICLES (Magazine/Newspaper)
// ================================================================

export const ARTICLE_TASKS: WritingTask[] = [
  {
    id: 'article-1',
    type: 'article',
    title: 'Technology in Education',
    prompt: `You see this announcement in an international students' magazine:

Technology in the Classroom
We're looking for articles discussing the role of technology in modern education. Should schools use more technology, or is traditional teaching still best? Write us an article giving your opinions.

Write your article in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Engaging title that attracts reader attention',
      'Direct address to reader (you, we)',
      'Rhetorical questions to engage readers',
      'Personal opinions and anecdotes',
      'Informal but educated tone',
      'Strong conclusion with final thought'
    ],
    structureGuidance: [
      'Title: Eye-catching and relevant',
      'Opening paragraph: Hook the reader with question, anecdote, or surprising fact',
      'Body paragraphs: Develop 2-3 main ideas with examples',
      'Conclusion: Summarize main point or leave reader with thought-provoking idea'
    ],
    usefulLanguage: [
      {
        category: 'Engaging the reader',
        phrases: [
          'Have you ever wondered...?',
          'We all know that...',
          'Most of us would agree that...',
          'There\'s no denying that...',
          'You might be surprised to learn...'
        ]
      },
      {
        category: 'Giving opinions',
        phrases: [
          'In my view...',
          'From my perspective...',
          'I firmly believe that...',
          'It seems to me that...',
          'There\'s no doubt in my mind that...'
        ]
      },
      {
        category: 'Concluding',
        phrases: [
          'So, what\'s the verdict?',
          'At the end of the day...',
          'All things considered...',
          'The bottom line is...',
          'One thing is certain...'
        ]
      }
    ]
  },
  {
    id: 'article-2',
    type: 'article',
    title: 'Best Place to Visit',
    prompt: `You see this announcement in a travel magazine:

Hidden Gems
We want to hear about amazing places that tourists often miss! Write an article about a lesser-known place worth visiting in your country. Describe what makes it special and why people should go there.

Write your article in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Descriptive and enthusiastic language',
      'Personal experience or observations',
      'Engaging title',
      'Direct address to readers',
      'Vivid details that create mental images'
    ],
    structureGuidance: [
      'Title: Intriguing and descriptive',
      'Opening: Hook with question or interesting fact',
      'Body: Describe the place, explain what makes it special',
      'Conclusion: Encourage readers to visit'
    ],
    usefulLanguage: [
      {
        category: 'Describing places',
        phrases: [
          'Nestled in...',
          'Boasts stunning...',
          'Features breathtaking...',
          'Home to...',
          'Renowned for...'
        ]
      },
      {
        category: 'Creating atmosphere',
        phrases: [
          'The moment you arrive...',
          'As you wander through...',
          'You\'ll be struck by...',
          'What really sets it apart is...',
          'Don\'t miss the chance to...'
        ]
      }
    ]
  },
  {
    id: 'article-3',
    type: 'article',
    title: 'Healthy Lifestyle Trends',
    prompt: `You see this announcement in a health and fitness magazine:

New Health Trends
Are modern health and fitness trends helping us or just confusing us? Write an article discussing whether today's health advice is better than traditional wisdom.

Write your article in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Balanced perspective showing different viewpoints',
      'Examples of specific trends',
      'Conversational tone',
      'Rhetorical questions',
      'Clear personal stance in conclusion'
    ],
    structureGuidance: [
      'Title: Thought-provoking',
      'Opening: Engage with current situation',
      'Body: Discuss pros and cons',
      'Conclusion: Give your verdict'
    ],
    usefulLanguage: [
      {
        category: 'Presenting contrasts',
        phrases: [
          'On the one hand... On the other hand...',
          'While some claim... others argue...',
          'There are those who believe...',
          'Proponents argue that...',
          'Critics point out that...'
        ]
      }
    ]
  }
];

// ================================================================
// REVIEWS (Film, Book, Restaurant, Event, etc.)
// ================================================================

export const REVIEW_TASKS: WritingTask[] = [
  {
    id: 'review-1',
    type: 'review',
    title: 'Film Review',
    prompt: `You see this announcement on a film review website:

Reviews Wanted
Have you seen a film recently that you'd recommend—or warn people against? Write a review describing the film and explaining why people should or shouldn't watch it.

Write your review in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Clear recommendation (positive or negative)',
      'Description without spoiling plot',
      'Personal opinion with justification',
      'Evaluation of different aspects (acting, plot, effects, etc.)',
      'Informal but informative tone'
    ],
    structureGuidance: [
      'Opening: Title, genre, director, brief premise',
      'Body: Evaluate key aspects (plot, acting, cinematography, etc.)',
      'Include both strengths and weaknesses',
      'Conclusion: Clear recommendation with target audience'
    ],
    usefulLanguage: [
      {
        category: 'Describing films',
        phrases: [
          'Set in...',
          'Tells the story of...',
          'Follows the journey of...',
          'Revolves around...',
          'Takes place in...'
        ]
      },
      {
        category: 'Evaluating',
        phrases: [
          'The standout performance comes from...',
          'The plot is engaging/predictable/confusing...',
          'The cinematography is breathtaking/mediocre...',
          'While the acting is strong, the script is weak',
          'It succeeds in... but fails to...'
        ]
      },
      {
        category: 'Recommending',
        phrases: [
          'Highly recommended for...',
          'Worth watching if you enjoy...',
          'A must-see for...',
          'You might want to give this a miss if...',
          'Definitely worth your time'
        ]
      }
    ]
  },
  {
    id: 'review-2',
    type: 'review',
    title: 'Restaurant Review',
    prompt: `You recently ate at a new restaurant in your town. Write a review for a local food website describing your experience and saying whether you would recommend it to others.

Write your review in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Descriptive language for food',
      'Evaluation of multiple aspects (food, service, atmosphere, value)',
      'Balanced view (positives and negatives)',
      'Clear recommendation'
    ],
    structureGuidance: [
      'Opening: Name, type of cuisine, occasion of visit',
      'Body: Evaluate food quality, service, atmosphere, prices',
      'Conclusion: Overall impression and recommendation'
    ],
    usefulLanguage: [
      {
        category: 'Describing food',
        phrases: [
          'Perfectly cooked/seasoned',
          'Bursting with flavor',
          'Fresh and locally sourced',
          'Disappointing/bland/overpriced',
          'Generous portions',
          'Beautifully presented'
        ]
      },
      {
        category: 'Atmosphere and service',
        phrases: [
          'Welcoming atmosphere',
          'Attentive staff',
          'Friendly and efficient service',
          'Cozy ambiance',
          'Staff were knowledgeable about...'
        ]
      }
    ]
  },
  {
    id: 'review-3',
    type: 'review',
    title: 'Book Review',
    prompt: `You see this announcement in an online book club:

Share Your Latest Read
Have you read a book recently that you think other members should know about? Write a review describing the book and explaining why you would or wouldn't recommend it.

Write your review in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Summary without spoilers',
      'Analysis of writing style',
      'Personal response to the book',
      'Clear target audience identification'
    ],
    structureGuidance: [
      'Opening: Title, author, genre, brief premise',
      'Body: Discuss plot, characters, writing style, themes',
      'Conclusion: Recommendation with target readers'
    ],
    usefulLanguage: [
      {
        category: 'Plot and characters',
        phrases: [
          'The novel follows...',
          'The protagonist is...',
          'Well-developed characters',
          'The plot twists keep you engaged',
          'Believable/unconvincing characters'
        ]
      },
      {
        category: 'Writing style',
        phrases: [
          'The author\'s prose is...',
          'Written in a compelling/accessible style',
          'The pacing is excellent/slow',
          'Beautifully crafted sentences',
          'The descriptive passages are vivid'
        ]
      }
    ]
  },
  {
    id: 'review-4',
    type: 'review',
    title: 'Concert or Event Review',
    prompt: `You recently attended a concert or live event. Write a review for your school magazine describing what happened and saying whether you would recommend similar events to other students.

Write your review in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Enthusiastic or critical tone',
      'Vivid description of the experience',
      'Evaluation of different aspects',
      'Relevance to target audience (students)'
    ],
    structureGuidance: [
      'Opening: What event, when, where',
      'Body: Describe highlights and lowlights',
      'Conclusion: Would you recommend it?'
    ],
    usefulLanguage: [
      {
        category: 'Describing performances',
        phrases: [
          'The atmosphere was electric',
          'The highlight of the evening was...',
          'The performance exceeded expectations',
          'Unfortunately, the sound quality was poor',
          'The crowd was enthusiastic'
        ]
      }
    ]
  }
];

// ================================================================
// REPORTS (Formal, informative)
// ================================================================

export const REPORT_TASKS: WritingTask[] = [
  {
    id: 'report-1',
    type: 'report',
    title: 'Sports Facilities Report',
    prompt: `Your college principal has asked you to write a report on the sports facilities available to students. Write your report describing the current facilities and suggesting improvements.

Write your report in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Formal and objective tone',
      'Clear section headings',
      'Factual information',
      'Impersonal language (passive voice common)',
      'Clear recommendations',
      'Professional presentation'
    ],
    structureGuidance: [
      'Title: Clear and specific (Report on...)',
      'Introduction: Purpose and scope of report',
      'Findings: Current situation (divided into sections)',
      'Recommendations: Specific suggestions for improvement',
      'Conclusion: Summary of main points (optional)'
    ],
    usefulLanguage: [
      {
        category: 'Report structure',
        phrases: [
          'Introduction',
          'Current situation / Present facilities',
          'Findings',
          'Recommendations',
          'Conclusion'
        ]
      },
      {
        category: 'Reporting findings',
        phrases: [
          'According to the survey...',
          'It was found that...',
          'The majority of students...',
          'Feedback indicates that...',
          'There appears to be...'
        ]
      },
      {
        category: 'Making recommendations',
        phrases: [
          'It is recommended that...',
          'It would be advisable to...',
          'Consideration should be given to...',
          'It is essential that...',
          'Priority should be given to...'
        ]
      },
      {
        category: 'Formal language',
        phrases: [
          'Currently...',
          'At present...',
          'In order to...',
          'With regard to...',
          'Furthermore / Moreover / In addition'
        ]
      }
    ]
  },
  {
    id: 'report-2',
    type: 'report',
    title: 'Student Accommodation Report',
    prompt: `Your college has asked you to write a report on accommodation options for new international students. Describe the available options and make recommendations.

Write your report in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Formal and factual tone',
      'Clear section headings',
      'Comparison of options',
      'Objective evaluation',
      'Practical recommendations'
    ],
    structureGuidance: [
      'Title: Report on Student Accommodation Options',
      'Introduction: Purpose of report',
      'Section 1: Describe each accommodation type',
      'Section 2: Compare advantages and disadvantages',
      'Recommendations: Suggest improvements or preferences',
      'Conclusion: Brief summary'
    ],
    usefulLanguage: [
      {
        category: 'Comparing options',
        phrases: [
          'In comparison with...',
          'Whereas... / While...',
          'Unlike...',
          'Both options offer...',
          'The main difference is...'
        ]
      },
      {
        category: 'Advantages and disadvantages',
        phrases: [
          'One advantage is...',
          'A further benefit is...',
          'However, a drawback is...',
          'The main disadvantage is...',
          'On the positive side...'
        ]
      }
    ]
  },
  {
    id: 'report-3',
    type: 'report',
    title: 'Local Tourist Attractions Report',
    prompt: `A tourist information office has asked you to write a report on the most popular tourist attractions in your area. Describe the attractions and suggest how to improve the experience for visitors.

Write your report in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Informative and factual',
      'Clear organization with headings',
      'Objective descriptions',
      'Constructive suggestions'
    ],
    structureGuidance: [
      'Title: Report on Local Tourist Attractions',
      'Introduction: Aim of report',
      'Popular Attractions: Describe main sites',
      'Visitor Feedback: Summarize opinions',
      'Recommendations: Suggestions for improvement',
      'Conclusion: Summary of findings'
    ],
    usefulLanguage: [
      {
        category: 'Describing attractions',
        phrases: [
          'The most visited site is...',
          'Popular attractions include...',
          'Features of particular interest...',
          'Located in the heart of...',
          'Known for its...'
        ]
      },
      {
        category: 'Visitor feedback',
        phrases: [
          'Visitors particularly appreciated...',
          'Complaints were received regarding...',
          'Tourists frequently commented that...',
          'Feedback suggests that...'
        ]
      }
    ]
  },
  {
    id: 'report-4',
    type: 'report',
    title: 'Environmental Improvements Report',
    prompt: `Your school has asked students to suggest ways to make the school more environmentally friendly. Write a report describing the current situation and recommending specific changes.

Write your report in 140-190 words.`,
    wordCount: { min: 140, max: 190 },
    rubric: {
      content: 5,
      communicativeAchievement: 5,
      organisation: 5,
      language: 5
    },
    styleFeatures: [
      'Formal and constructive tone',
      'Evidence-based observations',
      'Practical, specific recommendations',
      'Clear section headings'
    ],
    structureGuidance: [
      'Title: Report on Environmental Improvements',
      'Introduction: Purpose and scope',
      'Current Situation: Present environmental practices',
      'Areas for Improvement: Identify specific issues',
      'Recommendations: Concrete suggestions with benefits',
      'Conclusion: Summary and priority actions'
    ],
    usefulLanguage: [
      {
        category: 'Identifying problems',
        phrases: [
          'A significant issue is...',
          'There is currently no system for...',
          'It has been observed that...',
          'A concern raised by students is...'
        ]
      },
      {
        category: 'Proposing solutions',
        phrases: [
          'One solution would be to...',
          'This could be achieved by...',
          'An effective measure would be...',
          'Implementation of... would result in...'
        ]
      }
    ]
  }
];

// ================================================================
// SUMMARY
// ================================================================

export const WRITING_TASKS_SUMMARY = {
  articles: {
    total: 3,
    topics: ['Technology in Education', 'Travel Destination', 'Health Trends']
  },
  reviews: {
    total: 4,
    types: ['Film', 'Restaurant', 'Book', 'Concert/Event']
  },
  reports: {
    total: 4,
    topics: ['Sports Facilities', 'Student Accommodation', 'Tourist Attractions', 'Environmental Improvements']
  },
  totalTasks: 11,
  wordCount: '140-190 words',
  rubricAreas: ['Content', 'Communicative Achievement', 'Organisation', 'Language']
};

export const ALL_WRITING_TASKS = [
  ...ARTICLE_TASKS,
  ...REVIEW_TASKS,
  ...REPORT_TASKS
];
