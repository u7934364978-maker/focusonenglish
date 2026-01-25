// ================================================================
// FCE SPEAKING TEST - 4 PARTS (14 minutes total)
// ================================================================
// Restructured to match Cambridge FCE Speaking format

export interface SpeakingPart1Interview {
  part: 1;
  name: 'Interview';
  duration: 3; // minutes
  format: 'Examiner asks questions about yourself';
  questions: string[];
  assessmentCriteria: string[];
}

export interface PhotoComparisonTask {
  id: string;
  photos: string[]; // 2 photos to compare
  question: string;
  speakingTime: 60; // 1 minute
  followUpQuestion?: string; // For partner (20 seconds)
}

export interface SpeakingPart2LongTurn {
  part: 2;
  name: 'Long Turn';
  duration: 4; // minutes (1 min each candidate, with follow-ups)
  format: 'Compare 2 photos, speak 1 minute, partner responds briefly';
  instructions: string;
  tasks: PhotoComparisonTask[];
  assessmentCriteria: string[];
}

export interface CollaborativeTask {
  id: string;
  topic: string;
  instructions: string;
  visualPrompt: string; // Description of diagram/options shown
  options: string[];
  phase1Task: string; // Discuss all options (2 min)
  phase2Task: string; // Make decision (1 min)
}

export interface SpeakingPart3Collaborative {
  part: 3;
  name: 'Collaborative Task';
  duration: 4; // minutes (2+1+1)
  format: 'Discuss options together (2 min), reach decision (1 min), examiner questions (1 min)';
  instructions: string;
  tasks: CollaborativeTask[];
  assessmentCriteria: string[];
}

export interface SpeakingPart4Discussion {
  part: 4;
  name: 'Discussion';
  duration: 4; // minutes
  format: 'Extended discussion based on Part 3 topic';
  instructions: string;
  topicAreas: {
    topic: string;
    questions: string[];
  }[];
  assessmentCriteria: string[];
}

export interface FCESpeakingExam {
  id: string;
  title: string;
  level: 'B2';
  totalDuration: 14;
  parts: [SpeakingPart1Interview, SpeakingPart2LongTurn, SpeakingPart3Collaborative, SpeakingPart4Discussion];
}

// ================================================================
// SPEAKING PART 1: INTERVIEW (3 minutes)
// ================================================================

export const SPEAKING_PART_1_TEMPLATES: SpeakingPart1Interview[] = [
  {
    part: 1,
    name: 'Interview',
    duration: 3,
    format: 'Examiner asks questions about yourself',
    questions: [
      // Personal Information
      "What's your name?",
      'Where are you from?',
      'What do you do? (Are you a student or do you work?)',
      
      // Work/Studies
      'What do you study / What kind of work do you do?',
      'Why did you choose this subject / career?',
      'What do you enjoy most about your studies / job?',
      
      // Free Time
      'What do you like doing in your free time?',
      'How much time do you spend on your hobbies?',
      'Have your interests changed since you were younger?',
      
      // Future Plans
      'What are your plans for the future?',
      'Where would you like to be in five years?',
      
      // Daily Routine
      'Tell me about a typical day for you.',
      'Is your routine the same every day?',
      'Would you like to change anything about your daily life?'
    ],
    assessmentCriteria: [
      'Grammar and Vocabulary',
      'Discourse Management',
      'Pronunciation',
      'Interactive Communication'
    ]
  }
];

// ================================================================
// SPEAKING PART 2: LONG TURN (4 minutes)
// ================================================================

export const SPEAKING_PART_2_TASKS: PhotoComparisonTask[] = [
  {
    id: 'lt-1',
    photos: ['people_exercising_outdoors.jpg', 'people_at_gym.jpg'],
    question: 'Here are two photographs showing people keeping fit in different ways. Compare the photographs and say why people might choose these different ways of staying fit.',
    speakingTime: 60,
    followUpQuestion: 'Which way of keeping fit would you prefer?'
  },
  {
    id: 'lt-2',
    photos: ['traditional_classroom.jpg', 'online_learning.jpg'],
    question: 'Here are two photographs showing different ways of learning. Compare the photographs and say what the advantages and disadvantages of each way of learning might be.',
    speakingTime: 60,
    followUpQuestion: 'Which way of learning do you think is more effective?'
  },
  {
    id: 'lt-3',
    photos: ['family_cooking_together.jpg', 'restaurant_dining.jpg'],
    question: 'Here are two photographs showing people eating in different situations. Compare the photographs and say why people might choose to eat in these different ways.',
    speakingTime: 60,
    followUpQuestion: 'Do you prefer eating at home or in restaurants?'
  },
  {
    id: 'lt-4',
    photos: ['reading_physical_book.jpg', 'reading_ebook.jpg'],
    question: 'Here are two photographs showing people reading in different ways. Compare the photographs and say what the advantages and disadvantages of each way of reading might be.',
    speakingTime: 60,
    followUpQuestion: 'How do you prefer to read?'
  },
  {
    id: 'lt-5',
    photos: ['city_life.jpg', 'countryside_life.jpg'],
    question: 'Here are two photographs showing different places where people live. Compare the photographs and say why people might choose to live in these different places.',
    speakingTime: 60,
    followUpQuestion: 'Where would you prefer to live?'
  },
  {
    id: 'lt-6',
    photos: ['solo_travel.jpg', 'group_travel.jpg'],
    question: 'Here are two photographs showing different ways of traveling. Compare the photographs and say what the advantages and disadvantages of traveling in these different ways might be.',
    speakingTime: 60,
    followUpQuestion: 'How do you prefer to travel?'
  }
];

export const SPEAKING_PART_2_STRUCTURE: SpeakingPart2LongTurn = {
  part: 2,
  name: 'Long Turn',
  duration: 4,
  format: 'Compare 2 photos, speak 1 minute, partner responds briefly',
  instructions: 'In this part of the test, I\'m going to give each of you two photographs. I\'d like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner\'s photographs.',
  tasks: SPEAKING_PART_2_TASKS,
  assessmentCriteria: [
    'Ability to compare and contrast',
    'Ability to speculate',
    'Discourse management (organizing extended speech)',
    'Range and accuracy of grammar and vocabulary'
  ]
};

// ================================================================
// SPEAKING PART 3: COLLABORATIVE TASK (4 minutes)
// ================================================================

export const SPEAKING_PART_3_TASKS: CollaborativeTask[] = [
  {
    id: 'ct-1',
    topic: 'Choosing a Career',
    instructions: 'Here are some factors people consider when choosing a career.',
    visualPrompt: 'Diagram showing: salary, work-life balance, career progression, job satisfaction, company reputation, location',
    options: [
      'High salary',
      'Good work-life balance',
      'Opportunities for career progression',
      'Job satisfaction and fulfillment',
      'Company reputation',
      'Convenient location'
    ],
    phase1Task: 'First, talk to each other about how important these different factors are when choosing a career.',
    phase2Task: 'Now decide which two factors are the most important.'
  },
  {
    id: 'ct-2',
    topic: 'Protecting the Environment',
    instructions: 'Here are some things people can do to help protect the environment.',
    visualPrompt: 'Diagram showing: recycling, using public transport, reducing energy consumption, buying local products, reducing plastic use, planting trees',
    options: [
      'Recycling waste',
      'Using public transport instead of cars',
      'Reducing energy consumption at home',
      'Buying local products',
      'Reducing plastic use',
      'Planting trees'
    ],
    phase1Task: 'First, talk to each other about how effective these different actions are in protecting the environment.',
    phase2Task: 'Now decide which two actions would have the biggest impact.'
  },
  {
    id: 'ct-3',
    topic: 'Learning a Language',
    instructions: 'Here are some ways people can improve their language skills.',
    visualPrompt: 'Diagram showing: taking classes, watching films, reading books, talking with native speakers, using apps, living abroad',
    options: [
      'Taking formal language classes',
      'Watching films and TV series',
      'Reading books and newspapers',
      'Talking with native speakers',
      'Using language learning apps',
      'Living in a country where the language is spoken'
    ],
    phase1Task: 'First, talk to each other about how useful these different methods are for learning a language.',
    phase2Task: 'Now decide which two methods are the most effective.'
  },
  {
    id: 'ct-4',
    topic: 'Spending Free Time',
    instructions: 'Here are some different ways people spend their free time.',
    visualPrompt: 'Diagram showing: sports, reading, socializing with friends, traveling, creative hobbies, watching entertainment',
    options: [
      'Playing sports or exercising',
      'Reading books',
      'Socializing with friends',
      'Traveling',
      'Creative hobbies (art, music, crafts)',
      'Watching TV or streaming content'
    ],
    phase1Task: 'First, talk to each other about what benefits these different activities might bring.',
    phase2Task: 'Now decide which two activities are the best ways to spend free time.'
  },
  {
    id: 'ct-5',
    topic: 'Planning a City Event',
    instructions: 'A city wants to organize a special event to bring the community together. Here are some options.',
    visualPrompt: 'Diagram showing: music festival, food fair, sports tournament, cultural festival, technology expo, charity fundraiser',
    options: [
      'Music festival',
      'International food fair',
      'Sports tournament',
      'Cultural festival',
      'Technology expo',
      'Charity fundraiser'
    ],
    phase1Task: 'First, talk to each other about how successful these different events might be in bringing people together.',
    phase2Task: 'Now decide which two events would be the most popular.'
  },
  {
    id: 'ct-6',
    topic: 'Skills for the Future',
    instructions: 'Here are some skills that might be important for young people in the future.',
    visualPrompt: 'Diagram showing: digital skills, creativity, critical thinking, communication, adaptability, collaboration',
    options: [
      'Digital and technology skills',
      'Creativity and innovation',
      'Critical thinking',
      'Communication skills',
      'Adaptability and flexibility',
      'Teamwork and collaboration'
    ],
    phase1Task: 'First, talk to each other about how important these different skills might be in the future.',
    phase2Task: 'Now decide which two skills will be the most valuable.'
  }
];

export const SPEAKING_PART_3_STRUCTURE: SpeakingPart3Collaborative = {
  part: 3,
  name: 'Collaborative Task',
  duration: 4,
  format: 'Discuss options together (2 min), reach decision (1 min), examiner questions (1 min)',
  instructions: 'Now, I\'d like you to talk about something together for about two minutes. I\'d like you to imagine that...',
  tasks: SPEAKING_PART_3_TASKS,
  assessmentCriteria: [
    'Ability to negotiate and collaborate',
    'Ability to express and justify opinions',
    'Interactive communication',
    'Turn-taking and sustaining interaction'
  ]
};

// ================================================================
// SPEAKING PART 4: DISCUSSION (4 minutes)
// ================================================================

export const SPEAKING_PART_4_TOPICS: SpeakingPart4Discussion['topicAreas'] = [
  {
    topic: 'Career and Work',
    questions: [
      'Do you think young people today have different career priorities than previous generations?',
      'How important is job satisfaction compared to salary?',
      'Should schools do more to prepare students for the workplace?',
      'Do you think people change careers more often now than in the past?',
      'What role does technology play in modern careers?',
      'Is work-life balance becoming more or less important?'
    ]
  },
  {
    topic: 'Environment and Sustainability',
    questions: [
      'Do you think individuals can really make a difference to environmental problems?',
      'Should governments do more to force companies to be environmentally responsible?',
      'How can we encourage young people to care more about the environment?',
      'Do you think climate change will affect where people choose to live?',
      'Is recycling enough, or do we need more dramatic changes?',
      'Should environmentally harmful products be banned or just more expensive?'
    ]
  },
  {
    topic: 'Education and Learning',
    questions: [
      'Do you think online learning will replace traditional classrooms?',
      'Should students have more choice in what they study?',
      'Is learning languages as important now that technology can translate?',
      'Do you think practical skills should be taught more in schools?',
      'How important are exams and tests in measuring student ability?',
      'Should education be free for everyone, including university?'
    ]
  },
  {
    topic: 'Lifestyle and Free Time',
    questions: [
      'Do people have less free time now than in the past?',
      'Is it important to have hobbies, or is relaxing enough?',
      'Do you think people spend too much time on screens?',
      'Should people try to balance different types of activities in their free time?',
      'Is it better to have regular routines or be spontaneous?',
      'Do you think people will travel more or less in the future?'
    ]
  },
  {
    topic: 'Community and Social Events',
    questions: [
      'Are communities stronger or weaker than they used to be?',
      'Do public events bring people together or are they just entertainment?',
      'Should cities invest more in community spaces and events?',
      'How has social media changed the way communities interact?',
      'Do young people and older people socialize differently?',
      'Is it important to know your neighbors?'
    ]
  },
  {
    topic: 'Technology and the Future',
    questions: [
      'Which skills will be most important in the future workplace?',
      'Do you think technology makes us more connected or more isolated?',
      'Should schools focus more on teaching technology skills?',
      'How will artificial intelligence change our lives?',
      'Is creativity becoming more or less important with technology?',
      'Do you think people are too dependent on technology?'
    ]
  }
];

export const SPEAKING_PART_4_STRUCTURE: SpeakingPart4Discussion = {
  part: 4,
  name: 'Discussion',
  duration: 4,
  format: 'Extended discussion based on Part 3 topic',
  instructions: 'Now, I\'d like you to discuss these questions together. You don\'t have to agree with each other.',
  topicAreas: SPEAKING_PART_4_TOPICS,
  assessmentCriteria: [
    'Ability to express and justify opinions',
    'Ability to agree and disagree appropriately',
    'Ability to develop ideas and arguments',
    'Range and complexity of language'
  ]
};

// ================================================================
// COMPLETE FCE SPEAKING EXAMS
// ================================================================

export const FCE_SPEAKING_EXAMS: FCESpeakingExam[] = [
  {
    id: 'fce-speaking-1',
    title: 'FCE Speaking Test 1: Career, Fitness, and Learning',
    level: 'B2',
    totalDuration: 14,
    parts: [
      SPEAKING_PART_1_TEMPLATES[0],
      {
        ...SPEAKING_PART_2_STRUCTURE,
        tasks: [SPEAKING_PART_2_TASKS[0], SPEAKING_PART_2_TASKS[1]]
      },
      {
        ...SPEAKING_PART_3_STRUCTURE,
        tasks: [SPEAKING_PART_3_TASKS[0]]
      },
      {
        ...SPEAKING_PART_4_STRUCTURE,
        topicAreas: [SPEAKING_PART_4_TOPICS[0]]
      }
    ]
  },
  {
    id: 'fce-speaking-2',
    title: 'FCE Speaking Test 2: Environment, Food, and Sustainability',
    level: 'B2',
    totalDuration: 14,
    parts: [
      SPEAKING_PART_1_TEMPLATES[0],
      {
        ...SPEAKING_PART_2_STRUCTURE,
        tasks: [SPEAKING_PART_2_TASKS[2], SPEAKING_PART_2_TASKS[3]]
      },
      {
        ...SPEAKING_PART_3_STRUCTURE,
        tasks: [SPEAKING_PART_3_TASKS[1]]
      },
      {
        ...SPEAKING_PART_4_STRUCTURE,
        topicAreas: [SPEAKING_PART_4_TOPICS[1]]
      }
    ]
  },
  {
    id: 'fce-speaking-3',
    title: 'FCE Speaking Test 3: Lifestyle, Travel, and Free Time',
    level: 'B2',
    totalDuration: 14,
    parts: [
      SPEAKING_PART_1_TEMPLATES[0],
      {
        ...SPEAKING_PART_2_STRUCTURE,
        tasks: [SPEAKING_PART_2_TASKS[4], SPEAKING_PART_2_TASKS[5]]
      },
      {
        ...SPEAKING_PART_3_STRUCTURE,
        tasks: [SPEAKING_PART_3_TASKS[3]]
      },
      {
        ...SPEAKING_PART_4_STRUCTURE,
        topicAreas: [SPEAKING_PART_4_TOPICS[3]]
      }
    ]
  },
  {
    id: 'fce-speaking-4',
    title: 'FCE Speaking Test 4: Education, Language Learning, and Skills',
    level: 'B2',
    totalDuration: 14,
    parts: [
      SPEAKING_PART_1_TEMPLATES[0],
      {
        ...SPEAKING_PART_2_STRUCTURE,
        tasks: [SPEAKING_PART_2_TASKS[1], SPEAKING_PART_2_TASKS[3]]
      },
      {
        ...SPEAKING_PART_3_STRUCTURE,
        tasks: [SPEAKING_PART_3_TASKS[2]]
      },
      {
        ...SPEAKING_PART_4_STRUCTURE,
        topicAreas: [SPEAKING_PART_4_TOPICS[2]]
      }
    ]
  }
];

// Summary
export const FCE_SPEAKING_SUMMARY = {
  totalExams: 4,
  format: '4 parts, 14 minutes',
  parts: [
    { part: 1, name: 'Interview', duration: 3, questions: 12 },
    { part: 2, name: 'Long Turn', duration: 4, tasks: 6 },
    { part: 3, name: 'Collaborative Task', duration: 4, tasks: 6 },
    { part: 4, name: 'Discussion', duration: 4, topicAreas: 6 }
  ]
};
