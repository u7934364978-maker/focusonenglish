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
  A1_M2_L1_VOCABULARY_2
];
