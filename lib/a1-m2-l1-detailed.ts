// A1 - Module 2 - Lesson 1: Daily Routines
// This lesson introduces Present Simple tense for daily routines
// CEFR Level: A1

import { Exercise } from './course-data';

// GRAMMAR EXERCISE 1: Present Simple - Formation
const A1_M2_L1_GRAMMAR_1: Exercise = {
  id: 'a1-m2-l1-grammar-1',
  type: 'grammar',
  title: 'Present Simple - Formation and Use',
  instructions: 'Learn how to form the Present Simple tense for daily routines and habits.',
  examples: [
    'I wake up at 7:00 AM every day.',
    'She goes to work by bus.',
    'We eat lunch at noon.',
    'He doesn\'t like coffee.',
    'Do you play sports?'
  ],
  questions: [
    {
      id: 'a1-m2-l1-g1-q1',
      type: 'multiple-choice',
      question: 'I ___ breakfast at 8:00 AM.',
      options: ['eat', 'eats', 'eating', 'to eat'],
      correctAnswer: 'eat',
      explanation: 'We use the base form of the verb with "I" in Present Simple.',
      points: 1
    },
    {
      id: 'a1-m2-l1-g1-q2',
      type: 'multiple-choice',
      question: 'She ___ to school every day.',
      options: ['go', 'goes', 'going', 'to go'],
      correctAnswer: 'goes',
      explanation: 'We add -es to verbs ending in -o with he/she/it (go → goes).',
      points: 1
    },
    {
      id: 'a1-m2-l1-g1-q3',
      type: 'fill-blank',
      question: 'My father ___ (work) in an office.',
      correctAnswer: 'works',
      acceptableAnswers: ['works', 'Works'],
      explanation: 'Add -s to the verb with he/she/it (work → works).',
      points: 1
    },
    {
      id: 'a1-m2-l1-g1-q4',
      type: 'multiple-choice',
      question: 'They ___ dinner at 7:00 PM.',
      options: ['has', 'have', 'having', 'to have'],
      correctAnswer: 'have',
      explanation: 'We use the base form with "they" (have, not has).',
      points: 1
    },
    {
      id: 'a1-m2-l1-g1-q5',
      type: 'true-false',
      question: 'We add -s or -es to verbs with I, you, we, they.',
      correctAnswer: 'False',
      explanation: 'False. We only add -s or -es with he, she, it.',
      points: 1
    },
    {
      id: 'a1-m2-l1-g1-q6',
      type: 'fill-blank',
      question: 'He ___ (watch) TV in the evening.',
      correctAnswer: 'watches',
      acceptableAnswers: ['watches', 'Watches'],
      explanation: 'Add -es to verbs ending in -ch, -sh, -s, -x, -o (watch → watches).',
      points: 1
    }
  ]
};

// GRAMMAR EXERCISE 2: Present Simple - Practice
const A1_M2_L1_GRAMMAR_2: Exercise = {
  id: 'a1-m2-l1-grammar-2',
  type: 'grammar',
  title: 'Present Simple - Negative and Questions',
  instructions: 'Practice forming negatives and questions in Present Simple.',
  examples: [
    'I don\'t work on Sundays.',
    'She doesn\'t drink coffee.',
    'Do you like pizza?',
    'Does he study English?',
    'We don\'t watch TV in the morning.'
  ],
  questions: [
    {
      id: 'a1-m2-l1-g2-q1',
      type: 'multiple-choice',
      question: 'I ___ eat meat. I\'m vegetarian.',
      options: ['don\'t', 'doesn\'t', 'am not', 'not'],
      correctAnswer: 'don\'t',
      explanation: 'We use "don\'t" (do not) for negative with I, you, we, they.',
      points: 1
    },
    {
      id: 'a1-m2-l1-g2-q2',
      type: 'multiple-choice',
      question: 'She ___ like coffee.',
      options: ['don\'t', 'doesn\'t', 'isn\'t', 'not'],
      correctAnswer: 'doesn\'t',
      explanation: 'We use "doesn\'t" (does not) for negative with he, she, it.',
      points: 1
    },
    {
      id: 'a1-m2-l1-g2-q3',
      type: 'fill-blank',
      question: '___ you play tennis?',
      correctAnswer: 'Do',
      acceptableAnswers: ['Do', 'do'],
      explanation: 'We use "Do" to form questions with I, you, we, they.',
      points: 1
    },
    {
      id: 'a1-m2-l1-g2-q4',
      type: 'fill-blank',
      question: '___ he live in London?',
      correctAnswer: 'Does',
      acceptableAnswers: ['Does', 'does'],
      explanation: 'We use "Does" to form questions with he, she, it.',
      points: 1
    },
    {
      id: 'a1-m2-l1-g2-q5',
      type: 'true-false',
      question: 'We say "He doesn\'t works" in negative sentences.',
      correctAnswer: 'False',
      explanation: 'False. After doesn\'t, we use the base form: "He doesn\'t work" (not works).',
      points: 1
    },
    {
      id: 'a1-m2-l1-g2-q6',
      type: 'multiple-choice',
      question: 'They ___ go to the gym on Mondays.',
      options: ['don\'t', 'doesn\'t', 'aren\'t', 'not'],
      correctAnswer: 'don\'t',
      explanation: 'We use "don\'t" with "they" for negative sentences.',
      points: 1
    }
  ]
};

// READING EXERCISE
const A1_M2_L1_READING: Exercise = {
  id: 'a1-m2-l1-reading-1',
  type: 'reading',
  title: 'Reading: A Typical Day',
  text: `A Typical Day in My Life

My name is Tom and I am a teacher. I have a very busy routine!

I wake up at 6:30 every morning. I don't like to wake up early, but I have to! First, I take a shower and get dressed. Then I have breakfast. I usually eat toast and drink coffee. I don't eat a big breakfast because I'm not very hungry in the morning.

I leave home at 7:45. I don't drive to work - I take the bus. The bus ride takes about 30 minutes. I arrive at school at 8:30.

I teach English to high school students. I love my job! I teach five classes every day, from 9:00 AM to 3:00 PM. At noon, I have lunch in the school cafeteria. I usually eat a sandwich or a salad.

After work, I go to the gym three times a week - on Mondays, Wednesdays, and Fridays. I exercise for about one hour. On Tuesdays and Thursdays, I don't go to the gym. Instead, I meet my friends for coffee.

I get home around 6:00 PM. I make dinner and eat around 7:00. After dinner, I watch TV or read a book. I don't work in the evenings - I relax!

I go to bed at 10:30 PM. I need eight hours of sleep, so I try to sleep early. On weekends, I wake up late and do different things. But from Monday to Friday, my routine is always the same!`,
  questions: [
    {
      id: 'a1-m2-l1-r-q1',
      type: 'multiple-choice',
      question: 'What time does Tom wake up?',
      options: ['6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM'],
      correctAnswer: '6:30 AM',
      explanation: 'Tom says "I wake up at 6:30 every morning".',
      points: 1
    },
    {
      id: 'a1-m2-l1-r-q2',
      type: 'true-false',
      question: 'Tom drives to work.',
      correctAnswer: 'False',
      explanation: 'False. Tom says "I don\'t drive to work - I take the bus".',
      points: 1
    },
    {
      id: 'a1-m2-l1-r-q3',
      type: 'multiple-choice',
      question: 'How many classes does Tom teach every day?',
      options: ['Three', 'Four', 'Five', 'Six'],
      correctAnswer: 'Five',
      explanation: 'Tom says "I teach five classes every day".',
      points: 1
    },
    {
      id: 'a1-m2-l1-r-q4',
      type: 'fill-blank',
      question: 'Tom goes to the gym ___ times a week.',
      correctAnswer: 'three',
      acceptableAnswers: ['three', 'Three', '3'],
      explanation: 'Tom says "I go to the gym three times a week".',
      points: 1
    },
    {
      id: 'a1-m2-l1-r-q5',
      type: 'multiple-choice',
      question: 'What does Tom do in the evenings?',
      options: ['He works', 'He exercises', 'He relaxes', 'He teaches'],
      correctAnswer: 'He relaxes',
      explanation: 'Tom says "I don\'t work in the evenings - I relax!"',
      points: 1
    },
    {
      id: 'a1-m2-l1-r-q6',
      type: 'true-false',
      question: 'Tom\'s routine is different every day.',
      correctAnswer: 'False',
      explanation: 'False. Tom says "from Monday to Friday, my routine is always the same!"',
      points: 1
    }
  ]
};

// LISTENING EXERCISE
const A1_M2_L1_LISTENING: Exercise = {
  id: 'a1-m2-l1-listening-1',
  type: 'listening',
  title: 'Listening: Daily Routine Interview',
  audioUrl: '/audio/a1-m2-l1-listening-1.mp3',
  transcript: `Conversation: Talking About Daily Routines

Interviewer: Hi Sarah! Can you tell me about your daily routine?

Sarah: Sure! Well, I'm a nurse, so my schedule is a bit different. I work in a hospital.

Interviewer: What time do you start work?

Sarah: I start work at 7:00 AM. So I wake up very early, at 5:30 in the morning!

Interviewer: Wow, that's early! Do you have breakfast?

Sarah: Yes, I do. I have a quick breakfast at 6:00. Usually just some fruit and yogurt. Then I leave home at 6:30. I live close to the hospital, so I walk to work. It only takes 20 minutes.

Interviewer: That's nice! And what time do you finish work?

Sarah: I finish at 3:00 PM. After work, I usually go shopping for groceries. Then I go home and rest.

Interviewer: Do you cook dinner?

Sarah: Yes, I cook dinner every evening. I love cooking! I usually make something healthy - like chicken with vegetables or fish with salad.

Interviewer: And what do you do after dinner?

Sarah: After dinner, I don't do much. I'm tired! Sometimes I call my family or watch a movie. But usually, I just go to bed early. I go to bed at 9:00 PM because I need to wake up early the next day.

Interviewer: Do you work every day?

Sarah: No, I don't. I work five days a week. On my days off, I sleep late and do things I enjoy - like reading or meeting friends.

Interviewer: That sounds nice! Thank you for sharing, Sarah!

Sarah: You're welcome!`,
  duration: 85,
  allowReplay: true,
  maxReplays: 3,
  questions: [
    {
      id: 'a1-m2-l1-l-q1',
      type: 'multiple-choice',
      question: 'What is Sarah\'s job?',
      options: ['Teacher', 'Doctor', 'Nurse', 'Student'],
      correctAnswer: 'Nurse',
      explanation: 'Sarah says "I\'m a nurse".',
      points: 1
    },
    {
      id: 'a1-m2-l1-l-q2',
      type: 'fill-blank',
      question: 'Sarah wakes up at ___ AM.',
      correctAnswer: '5:30',
      acceptableAnswers: ['5:30', '5.30', 'five thirty', 'half past five'],
      explanation: 'Sarah says "I wake up very early, at 5:30 in the morning".',
      points: 1
    },
    {
      id: 'a1-m2-l1-l-q3',
      type: 'true-false',
      question: 'Sarah drives to work.',
      correctAnswer: 'False',
      explanation: 'False. Sarah says "I walk to work".',
      points: 1
    },
    {
      id: 'a1-m2-l1-l-q4',
      type: 'multiple-choice',
      question: 'What does Sarah usually have for breakfast?',
      options: ['Toast and coffee', 'Fruit and yogurt', 'Eggs and bacon', 'Cereal and milk'],
      correctAnswer: 'Fruit and yogurt',
      explanation: 'Sarah says "Usually just some fruit and yogurt".',
      points: 1
    },
    {
      id: 'a1-m2-l1-l-q5',
      type: 'multiple-choice',
      question: 'What time does Sarah go to bed?',
      options: ['8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'],
      correctAnswer: '9:00 PM',
      explanation: 'Sarah says "I go to bed at 9:00 PM".',
      points: 1
    },
    {
      id: 'a1-m2-l1-l-q6',
      type: 'true-false',
      question: 'Sarah works every day of the week.',
      correctAnswer: 'False',
      explanation: 'False. Sarah says "I work five days a week".',
      points: 1
    }
  ]
};

// SPEAKING EXERCISE
const A1_M2_L1_SPEAKING: Exercise = {
  id: 'a1-m2-l1-speaking-1',
  type: 'speaking',
  title: 'Speaking: Describe Your Daily Routine',
  instructions: 'Record yourself talking about your daily routine. Use Present Simple tense.',
  prompt: 'Describe your typical day. Include: what time you wake up, what you have for breakfast, how you go to work/school, what you do during the day, what time you have lunch and dinner, what you do in the evening, and what time you go to bed.',
  expectedResponse: 'Student should describe their daily routine using Present Simple tense with correct verb forms.',
  hints: [
    'Start with: I wake up at...',
    'Use time expressions: in the morning, at noon, in the evening',
    'Remember to add -s with he/she/it',
    'Use negative: I don\'t..., He/She doesn\'t...',
    'Include activities: have breakfast, go to work, eat lunch, watch TV'
  ],
  targetWords: ['wake up', 'get up', 'have breakfast', 'go to work', 'eat lunch', 'finish work', 'go home', 'have dinner', 'watch TV', 'go to bed'],
  timeLimit: 90,
  expectedLength: 60,
  targetLevel: 'A1',
  evaluationCriteria: [
    'Correct use of Present Simple tense',
    'Appropriate time expressions',
    'Clear description of daily activities',
    'Proper pronunciation of routine vocabulary',
    'Logical sequence of events'
  ],
  questions: [
    {
      id: 'a1-m2-l1-s-q1',
      type: 'speaking',
      question: 'Describe your morning routine',
      expectedAnswer: 'Student should describe morning activities with correct verb forms.',
      points: 3
    },
    {
      id: 'a1-m2-l1-s-q2',
      type: 'speaking',
      question: 'Talk about your work/school day',
      expectedAnswer: 'Student should describe work or school activities.',
      points: 4
    },
    {
      id: 'a1-m2-l1-s-q3',
      type: 'speaking',
      question: 'Describe your evening routine',
      expectedAnswer: 'Student should describe evening and bedtime activities.',
      points: 3
    }
  ]
};

// WRITING EXERCISE
const A1_M2_L1_WRITING: Exercise = {
  id: 'a1-m2-l1-writing-1',
  type: 'writing',
  title: 'Writing: My Daily Routine',
  instructions: 'Write about your typical weekday routine (80-100 words). Use Present Simple tense and include times.',
  prompt: 'Write about a typical day in your life',
  minWords: 80,
  maxWords: 100,
  targetLevel: 'A1',
  rubric: [
    {
      criterion: 'Grammar',
      description: 'Correct use of Present Simple tense (affirmative, negative, questions)',
      maxScore: 4
    },
    {
      criterion: 'Vocabulary',
      description: 'Appropriate use of routine vocabulary and time expressions',
      maxScore: 3
    },
    {
      criterion: 'Content',
      description: 'Complete description of daily routine with logical sequence',
      maxScore: 2
    },
    {
      criterion: 'Organization',
      description: 'Clear structure with proper connectors (then, after, next)',
      maxScore: 1
    }
  ],
  questions: [
    {
      id: 'a1-m2-l1-w-q1',
      type: 'writing',
      question: 'Write your text about your daily routine.',
      expectedAnswer: 'Student should write 80-100 words about their daily routine using Present Simple.',
      points: 10
    }
  ]
};

// PRONUNCIATION EXERCISE
const A1_M2_L1_PRONUNCIATION: Exercise = {
  id: 'a1-m2-l1-pronunciation-1',
  type: 'pronunciation-practice',
  title: 'Pronunciation: Third Person -s/-es',
  instructions: 'Practice pronouncing verbs with -s and -es endings.',
  targetSentences: [
    {
      text: 'She wakes up at seven o\'clock.',
      audioUrl: '/audio/a1-m2-l1-pronun-1.mp3',
      phonetic: '/ʃiː weɪks ʌp æt ˈsevən əˈklɒk/'
    },
    {
      text: 'He goes to work by car.',
      audioUrl: '/audio/a1-m2-l1-pronun-2.mp3',
      phonetic: '/hiː gəʊz tə wɜːk baɪ kɑː/'
    },
    {
      text: 'My mother watches TV in the evening.',
      audioUrl: '/audio/a1-m2-l1-pronun-3.mp3',
      phonetic: '/maɪ ˈmʌðə ˈwɒʧɪz ˌtiːˈviː ɪn ði ˈiːvnɪŋ/'
    },
    {
      text: 'She finishes work at five.',
      audioUrl: '/audio/a1-m2-l1-pronun-4.mp3',
      phonetic: '/ʃiː ˈfɪnɪʃɪz wɜːk æt faɪv/'
    },
    {
      text: 'He has breakfast at eight.',
      audioUrl: '/audio/a1-m2-l1-pronun-5.mp3',
      phonetic: '/hiː hæz ˈbrekfəst æt eɪt/'
    },
    {
      text: 'My sister studies English every day.',
      audioUrl: '/audio/a1-m2-l1-pronun-6.mp3',
      phonetic: '/maɪ ˈsɪstə ˈstʌdiz ˈɪŋglɪʃ ˈevri deɪ/'
    }
  ],
  focusPoints: [
    'The -s ending sounds like /s/ after: /p, t, k, f/ (sleeps, eats, works, laughs)',
    'The -s ending sounds like /z/ after vowels and: /b, d, g, v, m, n, l, r/ (plays, reads, runs)',
    'Add -es /ɪz/ after: /s, z, ʃ, ʒ, ʧ, ʤ/ (washes, watches, finishes)',
    'Special verbs: have → has, go → goes, do → does'
  ],
  tips: [
    'Listen for the ending sound: /s/, /z/, or /ɪz/',
    'Practice: "He workS /s/", "She playS /z/", "He washES /ɪz/"',
    'The -es ending adds an extra syllable: wash (1) → washes (2)',
    'Remember: after he/she/it, always add -s or -es!'
  ],
  questions: [
    {
      id: 'a1-m2-l1-p-q1',
      type: 'multiple-choice',
      question: 'How do we pronounce the -s in "She wakes up"?',
      options: ['/s/', '/z/', '/ɪz/', '/es/'],
      correctAnswer: '/s/',
      explanation: 'After /k/, the -s sounds like /s/: wakes /weɪks/.',
      points: 1
    },
    {
      id: 'a1-m2-l1-p-q2',
      type: 'multiple-choice',
      question: 'How do we pronounce the -es in "watches"?',
      options: ['/s/', '/z/', '/ɪz/', '/es/'],
      correctAnswer: '/ɪz/',
      explanation: 'After -ch, we add -es pronounced /ɪz/: watches /ˈwɒʧɪz/.',
      points: 1
    },
    {
      id: 'a1-m2-l1-p-q3',
      type: 'true-false',
      question: 'The word "studies" has two syllables.',
      correctAnswer: 'True',
      explanation: 'True. Studies has two syllables: stu-dies /ˈstʌdiz/.',
      points: 1
    },
    {
      id: 'a1-m2-l1-p-q4',
      type: 'multiple-choice',
      question: 'How many syllables does "finishes" have?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 'Three',
      explanation: 'Finishes has three syllables: fi-ni-shes /ˈfɪnɪʃɪz/.',
      points: 1
    },
    {
      id: 'a1-m2-l1-p-q5',
      type: 'fill-blank',
      question: 'After vowels, -s usually sounds like ___.',
      correctAnswer: '/z/',
      acceptableAnswers: ['/z/', 'z'],
      explanation: 'After vowels, -s sounds like /z/: plays, goes, sees.',
      points: 1
    },
    {
      id: 'a1-m2-l1-p-q6',
      type: 'true-false',
      question: 'We add an extra syllable with -es endings.',
      correctAnswer: 'True',
      explanation: 'True. -es adds a syllable: wash (1) → washes (2).',
      points: 1
    }
  ]
};

// VOCABULARY EXERCISE 1: Daily Activities
const A1_M2_L1_VOCABULARY_1: Exercise = {
  id: 'a1-m2-l1-vocabulary-1',
  type: 'vocabulary',
  title: 'Vocabulary: Daily Activities',
  instructions: 'Learn common verbs for daily routines.',
  words: [
    { word: 'wake up', definition: 'To stop sleeping', example: 'I wake up at 7:00 AM.' },
    { word: 'get up', definition: 'To get out of bed', example: 'She gets up at 6:30.' },
    { word: 'get dressed', definition: 'To put on clothes', example: 'He gets dressed quickly.' },
    { word: 'have breakfast', definition: 'To eat the morning meal', example: 'We have breakfast together.' },
    { word: 'go to work', definition: 'To travel to your job', example: 'I go to work by bus.' },
    { word: 'take a shower', definition: 'To wash your body with water', example: 'She takes a shower every morning.' }
  ],
  questions: [
    {
      id: 'a1-m2-l1-v1-q1',
      type: 'multiple-choice',
      question: 'What does "wake up" mean?',
      options: ['To stop sleeping', 'To go to sleep', 'To eat breakfast', 'To leave home'],
      correctAnswer: 'To stop sleeping',
      explanation: 'Wake up means to stop sleeping and become awake.',
      points: 1
    },
    {
      id: 'a1-m2-l1-v1-q2',
      type: 'fill-blank',
      question: 'I ___ a shower every morning. (wash my body)',
      correctAnswer: 'take',
      acceptableAnswers: ['take', 'Take'],
      explanation: 'We say "take a shower" (not "do a shower" or "make a shower").',
      points: 1
    },
    {
      id: 'a1-m2-l1-v1-q3',
      type: 'multiple-choice',
      question: 'What\'s the difference between "wake up" and "get up"?',
      options: ['They\'re the same', 'Wake up = stop sleeping, Get up = leave bed', 'Get up = stop sleeping, Wake up = leave bed', 'There is no difference'],
      correctAnswer: 'Wake up = stop sleeping, Get up = leave bed',
      explanation: 'Wake up means to stop sleeping. Get up means to get out of bed.',
      points: 1
    },
    {
      id: 'a1-m2-l1-v1-q4',
      type: 'true-false',
      question: 'We say "have breakfast" in English.',
      correctAnswer: 'True',
      explanation: 'True. We say "have breakfast" (not "eat breakfast" usually).',
      points: 1
    },
    {
      id: 'a1-m2-l1-v1-q5',
      type: 'fill-blank',
      question: 'She ___ dressed before breakfast. (puts on clothes)',
      correctAnswer: 'gets',
      acceptableAnswers: ['gets', 'Gets'],
      explanation: 'We say "get dressed" to mean put on clothes.',
      points: 1
    },
    {
      id: 'a1-m2-l1-v1-q6',
      type: 'multiple-choice',
      question: 'Complete: I ___ to work at 8:00.',
      options: ['go', 'have', 'take', 'get'],
      correctAnswer: 'go',
      explanation: 'We say "go to work" (travel to your job).',
      points: 1
    }
  ]
};

// VOCABULARY EXERCISE 2: Time Expressions
const A1_M2_L1_VOCABULARY_2: Exercise = {
  id: 'a1-m2-l1-vocabulary-2',
  type: 'vocabulary',
  title: 'Vocabulary: Time Expressions for Routines',
  instructions: 'Learn time expressions used with daily routines.',
  words: [
    { word: 'every day', definition: 'Each day, daily', example: 'I exercise every day.' },
    { word: 'in the morning', definition: 'During the morning hours', example: 'She reads in the morning.' },
    { word: 'at night', definition: 'During the night', example: 'We watch TV at night.' },
    { word: 'usually', definition: 'Most of the time, normally', example: 'I usually have coffee for breakfast.' },
    { word: 'always', definition: '100% of the time', example: 'He always arrives on time.' },
    { word: 'sometimes', definition: 'Occasionally, not always', example: 'I sometimes work late.' }
  ],
  questions: [
    {
      id: 'a1-m2-l1-v2-q1',
      type: 'multiple-choice',
      question: 'Which word means "100% of the time"?',
      options: ['Sometimes', 'Usually', 'Always', 'Never'],
      correctAnswer: 'Always',
      explanation: 'Always means 100% of the time, every time.',
      points: 1
    },
    {
      id: 'a1-m2-l1-v2-q2',
      type: 'fill-blank',
      question: 'I go to the gym ___ day. (each day)',
      correctAnswer: 'every',
      acceptableAnswers: ['every', 'Every'],
      explanation: 'We say "every day" to mean each day or daily.',
      points: 1
    },
    {
      id: 'a1-m2-l1-v2-q3',
      type: 'true-false',
      question: '"Usually" means "sometimes" in English.',
      correctAnswer: 'False',
      explanation: 'False. "Usually" means most of the time (80-90%). "Sometimes" means occasionally (30-50%).',
      points: 1
    },
    {
      id: 'a1-m2-l1-v2-q4',
      type: 'multiple-choice',
      question: 'I have breakfast ___ the morning.',
      options: ['in', 'on', 'at', 'for'],
      correctAnswer: 'in',
      explanation: 'We use "in" with parts of the day: in the morning, in the afternoon, in the evening.',
      points: 1
    },
    {
      id: 'a1-m2-l1-v2-q5',
      type: 'fill-blank',
      question: 'She ___ works late. (occasionally)',
      correctAnswer: 'sometimes',
      acceptableAnswers: ['sometimes', 'Sometimes'],
      explanation: 'Sometimes means occasionally or not always.',
      points: 1
    },
    {
      id: 'a1-m2-l1-v2-q6',
      type: 'multiple-choice',
      question: 'Which is correct for night time?',
      options: ['in the night', 'on night', 'at night', 'for night'],
      correctAnswer: 'at night',
      explanation: 'We say "at night" (exception to the "in" rule).',
      points: 1
    }
  ]
};

// Export all exercises for Lesson 1
export const A1_M2_L1_ALL_EXERCISES = [
  A1_M2_L1_GRAMMAR_1,
  A1_M2_L1_GRAMMAR_2,
  A1_M2_L1_READING,
  A1_M2_L1_LISTENING,
  A1_M2_L1_SPEAKING,
  A1_M2_L1_WRITING,
  A1_M2_L1_PRONUNCIATION,
  A1_M2_L1_VOCABULARY_1,
  A1_M2_L1_VOCABULARY_2,
  A1_M2_L1_SENTENCE_COMPLETION,
  A1_M2_L1_ERROR_IDENTIFICATION,
  A1_M2_L1_GAP_FILL,
  A1_M2_L1_SENTENCE_REORDERING
];

// ============================================
// SENTENCE COMPLETION EXERCISE
// ============================================
export const A1_M2_L1_SENTENCE_COMPLETION = {
  id: 'a1-m2-l1-sentence-completion',
  type: 'sentence-completion',
  title: 'Complete Daily Routine Sentences',
  instructions: 'Complete each sentence with the correct form of the verb in Present Simple.',
  sentences: [
    {
      id: 'sc1',
      prompt: 'I ___ (wake) up at 7 am every day.',
      correctCompletion: 'wake',
      options: ['wake', 'wakes', 'waking', 'waked'],
      explanation: 'With "I", we use the base form of the verb: wake.',
      points: 1
    },
    {
      id: 'sc2',
      prompt: 'She ___ (go) to work by bus.',
      correctCompletion: 'goes',
      options: ['go', 'goes', 'going', 'gos'],
      explanation: 'With "she", we add -es to "go": goes.',
      points: 1
    },
    {
      id: 'sc3',
      prompt: 'They ___ (have) lunch at 1 pm.',
      correctCompletion: 'have',
      options: ['have', 'has', 'having', 'haves'],
      explanation: 'With "they", we use the base form: have.',
      points: 1
    },
    {
      id: 'sc4',
      prompt: 'He ___ (watch) TV in the evening.',
      correctCompletion: 'watches',
      options: ['watch', 'watches', 'watchs', 'watching'],
      explanation: 'With "he", we add -es to verbs ending in -ch: watches.',
      points: 1
    },
    {
      id: 'sc5',
      prompt: 'We ___ (study) English every Monday.',
      correctCompletion: 'study',
      options: ['study', 'studies', 'studys', 'studying'],
      explanation: 'With "we", we use the base form: study.',
      points: 1
    },
    {
      id: 'sc6',
      prompt: 'My sister ___ (finish) work at 6 pm.',
      correctCompletion: 'finishes',
      options: ['finish', 'finishes', 'finishs', 'finishing'],
      explanation: 'With third person singular, we add -es to verbs ending in -sh: finishes.',
      points: 1
    }
  ]
};

// ============================================
// ERROR IDENTIFICATION EXERCISE
// ============================================
export const A1_M2_L1_ERROR_IDENTIFICATION = {
  id: 'a1-m2-l1-error-identification',
  type: 'error-identification',
  title: 'Find Present Simple Errors',
  instructions: 'Find and correct errors in these sentences about daily routines.',
  sentences: [
    {
      id: 'ei1',
      sentence: 'She wake up at 7 am.',
      hasError: true,
      errorWord: 'wake',
      correction: 'wakes',
      explanation: 'Incorrect! With "she", we need -s: She wakes up at 7 am.',
      points: 1
    },
    {
      id: 'ei2',
      sentence: 'They go to school every day.',
      hasError: false,
      explanation: 'Correct! "They" takes the base form "go".',
      points: 1
    },
    {
      id: 'ei3',
      sentence: 'He don\'t like coffee.',
      hasError: true,
      errorWord: 'don\'t',
      correction: 'doesn\'t',
      explanation: 'Incorrect! With "he", we use "doesn\'t": He doesn\'t like coffee.',
      points: 1
    },
    {
      id: 'ei4',
      sentence: 'I works in an office.',
      hasError: true,
      errorWord: 'works',
      correction: 'work',
      explanation: 'Incorrect! With "I", we don\'t add -s: I work in an office.',
      points: 1
    },
    {
      id: 'ei5',
      sentence: 'We eat dinner at 8 pm.',
      hasError: false,
      explanation: 'Correct! This sentence has no errors.',
      points: 1
    },
    {
      id: 'ei6',
      sentence: 'She studys English.',
      hasError: true,
      errorWord: 'studys',
      correction: 'studies',
      explanation: 'Incorrect! For verbs ending in consonant+y, change y to i and add -es: studies.',
      points: 1
    }
  ]
};

// ============================================
// GAP FILL TEXT EXERCISE
// ============================================
export const A1_M2_L1_GAP_FILL = {
  id: 'a1-m2-l1-gap-fill',
  type: 'gap-fill-text',
  title: 'My Daily Routine',
  instructions: 'Fill in the gaps with the correct form of the verbs in Present Simple.',
  text: `My name is Sarah and this is my daily routine.

I {{1}} (wake) up at 6:30 every morning. I {{2}} (have) a shower and {{3}} (get) dressed. Then I {{4}} (make) breakfast for my family.

My husband {{5}} (leave) for work at 7:30. He {{6}} (work) in a bank. My children {{7}} (go) to school by bus. They {{8}} (start) classes at 8:30.

I {{9}} (be) a teacher. I {{10}} (teach) English at a high school. I {{11}} (finish) work at 3 pm.

In the evening, we {{12}} (eat) dinner together. My daughter {{13}} (do) her homework and my son {{14}} (play) video games. We {{15}} (watch) TV before bed.`,
  gaps: [
    {
      id: 'gap1',
      gapNumber: 1,
      correctAnswer: 'wake',
      options: ['wake', 'wakes', 'other'],
      explanation: 'I wake up (base form with "I").',
      points: 1
    },
    {
      id: 'gap2',
      gapNumber: 2,
      correctAnswer: 'have',
      options: ['have', 'haves', 'other'],
      explanation: 'I have (base form).',
      points: 1
    },
    {
      id: 'gap3',
      gapNumber: 3,
      correctAnswer: 'get',
      options: ['get', 'gets', 'other'],
      explanation: 'I get (base form).',
      points: 1
    },
    {
      id: 'gap4',
      gapNumber: 4,
      correctAnswer: 'make',
      options: ['make', 'makes', 'other'],
      explanation: 'I make (base form).',
      points: 1
    },
    {
      id: 'gap5',
      gapNumber: 5,
      correctAnswer: 'leaves',
      options: ['leaves', 'leavess', 'other'],
      explanation: 'He leaves (add -s for third person).',
      points: 1
    },
    {
      id: 'gap6',
      gapNumber: 6,
      correctAnswer: 'works',
      options: ['works', 'workss', 'other'],
      explanation: 'He works (add -s).',
      points: 1
    },
    {
      id: 'gap7',
      gapNumber: 7,
      correctAnswer: 'go',
      options: ['go', 'gos', 'other'],
      explanation: 'They go (base form with "they").',
      points: 1
    },
    {
      id: 'gap8',
      gapNumber: 8,
      correctAnswer: 'start',
      options: ['start', 'starts', 'other'],
      explanation: 'They start (base form).',
      points: 1
    },
    {
      id: 'gap9',
      gapNumber: 9,
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      acceptableAlternatives: ["'m"],
      explanation: 'I am (verb to be).',
      points: 1
    },
    {
      id: 'gap10',
      gapNumber: 10,
      correctAnswer: 'teach',
      options: ['teach', 'teachs', 'other'],
      explanation: 'I teach (base form).',
      points: 1
    },
    {
      id: 'gap11',
      gapNumber: 11,
      correctAnswer: 'finish',
      options: ['finish', 'finishs', 'other'],
      explanation: 'I finish (base form).',
      points: 1
    },
    {
      id: 'gap12',
      gapNumber: 12,
      correctAnswer: 'eat',
      options: ['eat', 'eats', 'other'],
      explanation: 'We eat (base form).',
      points: 1
    },
    {
      id: 'gap13',
      gapNumber: 13,
      correctAnswer: 'does',
      options: ['does', 'doess', 'other'],
      explanation: 'She does (irregular verb, add -es).',
      points: 1
    },
    {
      id: 'gap14',
      gapNumber: 14,
      correctAnswer: 'plays',
      options: ['plays', 'playss', 'other'],
      explanation: 'He plays (add -s).',
      points: 1
    },
    {
      id: 'gap15',
      gapNumber: 15,
      correctAnswer: 'watch',
      options: ['watch', 'watchs', 'other'],
      explanation: 'We watch (base form).',
      points: 1
    }
  ]
};

// ============================================
// SENTENCE REORDERING EXERCISE
// ============================================
export const A1_M2_L1_SENTENCE_REORDERING = {
  id: 'a1-m2-l1-sentence-reordering',
  type: 'sentence-reordering',
  title: 'Order Daily Routine Sentences',
  instructions: 'Put the words in the correct order to make sentences about daily routines.',
  items: [
    {
      id: 'sr1',
      shuffledSentences: ['breakfast', 'at', 'I', 'eat', '7 am'],
      correctOrder: [2, 3, 0, 1, 4],
      context: 'Make a sentence about breakfast time',
      explanation: 'Correct: I eat breakfast at 7 am. (Subject + verb + object + time)',
      points: 1
    },
    {
      id: 'sr2',
      shuffledSentences: ['to', 'She', 'goes', 'work', 'by', 'car'],
      correctOrder: [1, 2, 3, 4, 5, 0],
      context: 'Make a sentence about going to work',
      explanation: 'Correct: She goes to work by car. (Subject + verb + to + place + by + transport)',
      points: 1
    },
    {
      id: 'sr3',
      shuffledSentences: ['every', 'study', 'We', 'evening'],
      correctOrder: [2, 1, 0, 3],
      context: 'Make a sentence about studying',
      explanation: 'Correct: We study every evening. (Subject + verb + frequency)',
      points: 1
    },
    {
      id: 'sr4',
      shuffledSentences: ['doesn\'t', 'He', 'like', 'coffee'],
      correctOrder: [1, 0, 2, 3],
      context: 'Make a negative sentence',
      explanation: 'Correct: He doesn\'t like coffee. (Subject + doesn\'t + verb + object)',
      points: 1
    },
    {
      id: 'sr5',
      shuffledSentences: ['TV', 'watch', 'at', 'They', 'night'],
      correctOrder: [3, 1, 0, 2, 4],
      context: 'Make a sentence about watching TV',
      explanation: 'Correct: They watch TV at night. (Subject + verb + object + time)',
      points: 1
    },
    {
      id: 'sr6',
      shuffledSentences: ['school', 'starts', 'My', 'at', '8:30'],
      correctOrder: [2, 1, 0, 3, 4],
      context: 'Make a sentence about school time',
      explanation: 'Correct: My school starts at 8:30. (Possessive + subject + verb + time)',
      points: 1
    }
  ]
};

