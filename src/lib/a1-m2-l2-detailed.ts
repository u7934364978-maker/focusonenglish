// A1 - Module 2 - Lesson 2: Jobs and Professions
// This lesson focuses on jobs, professions, and Present Simple questions
// CEFR Level: A1

import { Exercise } from './exercise-types';

// GRAMMAR EXERCISE 1: Present Simple Questions
const A1_M2_L2_GRAMMAR_1: Exercise = {
  id: 'a1-m2-l2-grammar-1',
  type: 'grammar',
  title: 'Present Simple Questions - Formation',
  instructions: 'Learn how to form questions in Present Simple tense.',
  examples: [
    'Do you work in an office? - Yes, I do.',
    'Does she teach English? - No, she doesn\'t.',
    'Where do they live?',
    'What does he do? - He\'s a doctor.',
    'What time do you start work?'
  ],
  questions: [
    {
      id: 'a1-m2-l2-g1-q1',
      type: 'multiple-choice',
      question: '___ you like your job?',
      options: ['Do', 'Does', 'Are', 'Is'],
      correctAnswer: 'Do',
      explanation: 'We use "Do" with I, you, we, they to form questions.',
      points: 1
    },
    {
      id: 'a1-m2-l2-g1-q2',
      type: 'multiple-choice',
      question: '___ she work in a hospital?',
      options: ['Do', 'Does', 'Is', 'Are'],
      correctAnswer: 'Does',
      explanation: 'We use "Does" with he, she, it to form questions.',
      points: 1
    },
    {
      id: 'a1-m2-l2-g1-q3',
      type: 'fill-blank',
      question: 'What ___ you do? (ask about job)',
      correctAnswer: 'do',
      acceptableAnswers: ['do', 'Do'],
      explanation: 'We ask "What do you do?" to ask about someone\'s job.',
      points: 1
    },
    {
      id: 'a1-m2-l2-g1-q4',
      type: 'multiple-choice',
      question: 'Where ___ he work?',
      options: ['do', 'does', 'is', 'are'],
      correctAnswer: 'does',
      explanation: 'We use "does" with "he" to form questions.',
      points: 1
    },
    {
      id: 'a1-m2-l2-g1-q5',
      type: 'true-false',
      question: 'We say "Does you work here?" in English.',
      correctAnswer: 'False',
      explanation: 'False. The correct form is "Do you work here?" (not "Does you").',
      points: 1
    },
    {
      id: 'a1-m2-l2-g1-q6',
      type: 'fill-blank',
      question: '___ they speak English at work?',
      correctAnswer: 'Do',
      acceptableAnswers: ['Do', 'do'],
      explanation: 'We use "Do" with "they" to form questions.',
      points: 1
    }
  ]
};

// GRAMMAR EXERCISE 2: Jobs and Professions Vocabulary
const A1_M2_L2_GRAMMAR_2: Exercise = {
  id: 'a1-m2-l2-grammar-2',
  type: 'grammar',
  title: 'Jobs and Professions - Articles (a/an)',
  instructions: 'Practice using a/an with jobs and professions.',
  examples: [
    'She is a teacher.',
    'He is an engineer.',
    'I am a doctor.',
    'My father is an accountant.',
    'They are teachers.'
  ],
  questions: [
    {
      id: 'a1-m2-l2-g2-q1',
      type: 'multiple-choice',
      question: 'My sister is ___ nurse.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 'a',
      explanation: 'We use "a" before consonant sounds. Nurse starts with /n/ (consonant).',
      points: 1
    },
    {
      id: 'a1-m2-l2-g2-q2',
      type: 'multiple-choice',
      question: 'He is ___ engineer.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 'an',
      explanation: 'We use "an" before vowel sounds. Engineer starts with a vowel sound.',
      points: 1
    },
    {
      id: 'a1-m2-l2-g2-q3',
      type: 'fill-blank',
      question: 'I am ___ teacher. (a or an)',
      correctAnswer: 'a',
      acceptableAnswers: ['a', 'A'],
      explanation: 'Teacher starts with /t/ (consonant), so we use "a".',
      points: 1
    },
    {
      id: 'a1-m2-l2-g2-q4',
      type: 'true-false',
      question: 'We say "She is teacher" without a/an.',
      correctAnswer: 'False',
      explanation: 'False. We must use a/an with singular jobs: "She is a teacher".',
      points: 1
    },
    {
      id: 'a1-m2-l2-g2-q5',
      type: 'multiple-choice',
      question: 'My father is ___ architect.',
      options: ['a', 'an', 'the', '-'],
      correctAnswer: 'an',
      explanation: 'Architect starts with a vowel sound, so we use "an".',
      points: 1
    },
    {
      id: 'a1-m2-l2-g2-q6',
      type: 'fill-blank',
      question: 'They are ___. (no article needed)',
      correctAnswer: 'doctors',
      acceptableAnswers: ['doctors', 'Doctors', 'teachers', 'nurses', 'engineers'],
      explanation: 'With plural jobs, we don\'t use a/an.',
      points: 1
    }
  ]
};

// READING EXERCISE
const A1_M2_L2_READING: Exercise = {
  id: 'a1-m2-l2-reading-1',
  type: 'reading',
  title: 'Reading: Different Jobs, Different Lives',
  text: `Different Jobs, Different Lives

Hi! My name is Laura and I want to tell you about my family. We all have different jobs!

I am a nurse. I work in a big hospital in the city. I help doctors and take care of patients. I love my job, but it's very busy! I work long hours - sometimes 12 hours a day. I start work at 7:00 AM and finish at 7:00 PM. Do I like my job? Yes, I do! It's hard work, but I help people every day.

My husband, Mark, is a teacher. He teaches math at a high school. He works from Monday to Friday, 8:00 AM to 3:00 PM. Does he like teaching? Yes, he loves it! He says his students are very smart and funny. In the summer, he doesn't work - teachers have long vacations!

My brother, Tom, is a chef. He works in a famous restaurant. Does he work normal hours? No, he doesn't! He works in the evenings and on weekends. He starts work at 4:00 PM and finishes at midnight. It's a difficult schedule, but Tom loves cooking. He creates amazing dishes!

My sister, Anna, is an engineer. She designs buildings and bridges. Does she work in an office? Yes, she does. She works for a big company. She uses computers every day and works with other engineers. She travels a lot for her job - sometimes to other countries!

Finally, my father is retired now, but he was a police officer for 30 years. It was a dangerous job, but very important. He helped keep our city safe.

Do we all have the same schedule? No, we don't! But we all love what we do. That's the most important thing!`,
  questions: [
    {
      id: 'a1-m2-l2-r-q1',
      type: 'multiple-choice',
      question: 'What is Laura\'s job?',
      options: ['Teacher', 'Nurse', 'Chef', 'Engineer'],
      correctAnswer: 'Nurse',
      explanation: 'Laura says "I am a nurse".',
      points: 1
    },
    {
      id: 'a1-m2-l2-r-q2',
      type: 'true-false',
      question: 'Mark works on weekends.',
      correctAnswer: 'False',
      explanation: 'False. Mark works "from Monday to Friday".',
      points: 1
    },
    {
      id: 'a1-m2-l2-r-q3',
      type: 'multiple-choice',
      question: 'What time does Tom start work?',
      options: ['7:00 AM', '8:00 AM', '4:00 PM', 'Midnight'],
      correctAnswer: '4:00 PM',
      explanation: 'Tom "starts work at 4:00 PM".',
      points: 1
    },
    {
      id: 'a1-m2-l2-r-q4',
      type: 'fill-blank',
      question: 'Anna is ___ engineer.',
      correctAnswer: 'an',
      acceptableAnswers: ['an', 'An'],
      explanation: 'Engineer starts with a vowel sound, so we use "an".',
      points: 1
    },
    {
      id: 'a1-m2-l2-r-q5',
      type: 'multiple-choice',
      question: 'What was Laura\'s father\'s job?',
      options: ['Doctor', 'Teacher', 'Police officer', 'Chef'],
      correctAnswer: 'Police officer',
      explanation: 'He "was a police officer for 30 years".',
      points: 1
    },
    {
      id: 'a1-m2-l2-r-q6',
      type: 'true-false',
      question: 'Anna travels for her job.',
      correctAnswer: 'True',
      explanation: 'True. The text says "She travels a lot for her job".',
      points: 1
    }
  ]
};

// LISTENING EXERCISE
const A1_M2_L2_LISTENING: Exercise = {
  id: 'a1-m2-l2-listening-1',
  type: 'listening',
  title: 'Listening: Job Interview Questions',
  audioUrl: '/audio/a1-m2-l2-listening-1.mp3',
  transcript: `Conversation: A Simple Job Interview

Interviewer: Good morning! Please, sit down.

Candidate: Thank you!

Interviewer: So, let's start. What's your name?

Candidate: My name is Maria Santos.

Interviewer: Nice to meet you, Maria. Now, what do you do currently?

Maria: I'm a sales assistant. I work in a clothing store.

Interviewer: I see. And do you like your current job?

Maria: Yes, I do. I like helping customers. But I want a new challenge.

Interviewer: Good! Now, why do you want this job?

Maria: Well, I love fashion, and your company is very famous. I want to learn more and grow professionally.

Interviewer: That's great! Do you speak any other languages?

Maria: Yes, I do. I speak Spanish, English, and a little bit of French.

Interviewer: Excellent! Languages are very important for this position. Now, do you work on weekends?

Maria: In my current job, yes, I work on Saturdays. But I don't work on Sundays.

Interviewer: And are you comfortable working in a team?

Maria: Oh yes, absolutely! I love working with other people. I think teamwork is very important.

Interviewer: Perfect! One more question: Where do you see yourself in five years?

Maria: I want to be a store manager. I'm very motivated and I work hard.

Interviewer: That's wonderful, Maria. Do you have any questions for me?

Maria: Yes, when does the position start?

Interviewer: We need someone to start next month. Does that work for you?

Maria: Yes, that's perfect!

Interviewer: Great! Thank you for coming today. We'll contact you next week.

Maria: Thank you very much!`,
  duration: 95,
  allowReplay: true,
  maxReplays: 3,
  questions: [
    {
      id: 'a1-m2-l2-l-q1',
      type: 'multiple-choice',
      question: 'What is Maria\'s current job?',
      options: ['Store manager', 'Sales assistant', 'Teacher', 'Engineer'],
      correctAnswer: 'Sales assistant',
      explanation: 'Maria says "I\'m a sales assistant".',
      points: 1
    },
    {
      id: 'a1-m2-l2-l-q2',
      type: 'fill-blank',
      question: 'Maria speaks Spanish, English, and ___.',
      correctAnswer: 'French',
      acceptableAnswers: ['French', 'french', 'a little French'],
      explanation: 'Maria says "I speak Spanish, English, and a little bit of French".',
      points: 1
    },
    {
      id: 'a1-m2-l2-l-q3',
      type: 'true-false',
      question: 'Maria works on Sundays.',
      correctAnswer: 'False',
      explanation: 'False. Maria says "I don\'t work on Sundays".',
      points: 1
    },
    {
      id: 'a1-m2-l2-l-q4',
      type: 'multiple-choice',
      question: 'Where does Maria want to be in five years?',
      options: ['Sales assistant', 'Store manager', 'Company owner', 'Teacher'],
      correctAnswer: 'Store manager',
      explanation: 'Maria says "I want to be a store manager".',
      points: 1
    },
    {
      id: 'a1-m2-l2-l-q5',
      type: 'multiple-choice',
      question: 'When does the position start?',
      options: ['This week', 'Next week', 'Next month', 'Next year'],
      correctAnswer: 'Next month',
      explanation: 'The interviewer says "We need someone to start next month".',
      points: 1
    },
    {
      id: 'a1-m2-l2-l-q6',
      type: 'true-false',
      question: 'Maria likes working in a team.',
      correctAnswer: 'True',
      explanation: 'True. Maria says "I love working with other people".',
      points: 1
    }
  ]
};

// SPEAKING EXERCISE
const A1_M2_L2_SPEAKING: Exercise = {
  id: 'a1-m2-l2-speaking-1',
  type: 'speaking',
  title: 'Speaking: Talk About Your Job',
  instructions: 'Record yourself talking about your job or your dream job.',
  prompt: 'Talk about your job or a job you want. Include: what the job is, where you work/would work, what time you start and finish, what you do every day, and if you like it or why you want it.',
  expectedResponse: 'Student should describe a job using Present Simple tense with correct question formation.',
  hints: [
    'Start with: I am a... / I want to be a...',
    'Say where: I work in... / I would work in...',
    'Include hours: I start at... and finish at...',
    'Describe activities: I help..., I teach..., I make...',
    'Give opinion: I like it because...'
  ],
  targetWords: ['work', 'job', 'start', 'finish', 'every day', 'help', 'teach', 'make', 'office', 'hospital', 'school', 'like'],
  timeLimit: 90,
  expectedLength: 60,
  targetLevel: 'A1',
  evaluationCriteria: [
    'Correct use of Present Simple',
    'Appropriate job vocabulary',
    'Clear description of duties',
    'Logical organization',
    'Clear pronunciation'
  ],
  questions: [
    {
      id: 'a1-m2-l2-s-q1',
      type: 'speaking',
      question: 'What is your job? (or What job do you want?)',
      expectedAnswer: 'Student should state their job or dream job clearly.',
      points: 3
    },
    {
      id: 'a1-m2-l2-s-q2',
      type: 'speaking',
      question: 'What do you do every day at work?',
      expectedAnswer: 'Student should describe daily work activities.',
      points: 4
    },
    {
      id: 'a1-m2-l2-s-q3',
      type: 'speaking',
      question: 'Do you like your job? Why?',
      expectedAnswer: 'Student should express opinion with reasons.',
      points: 3
    }
  ]
};

// WRITING EXERCISE
const A1_M2_L2_WRITING: Exercise = {
  id: 'a1-m2-l2-writing-1',
  type: 'writing',
  title: 'Writing: My Dream Job',
  instructions: 'Write about your dream job (80-100 words). Describe what the job is, where you would work, what you would do, and why you want this job.',
  prompt: 'Write about your dream job',
  minWords: 80,
  maxWords: 100,
  targetLevel: 'A1',
  rubric: [
    {
      criterion: 'Grammar',
      description: 'Correct use of Present Simple and job vocabulary',
      maxScore: 4
    },
    {
      criterion: 'Vocabulary',
      description: 'Appropriate use of job-related words and expressions',
      maxScore: 3
    },
    {
      criterion: 'Content',
      description: 'Complete description with all required information',
      maxScore: 2
    },
    {
      criterion: 'Organization',
      description: 'Clear structure with logical flow',
      maxScore: 1
    }
  ],
  questions: [
    {
      id: 'a1-m2-l2-w-q1',
      type: 'writing',
      question: 'Write your text about your dream job.',
      expectedAnswer: 'Student should write 80-100 words about a dream job using Present Simple.',
      points: 10
    }
  ]
};

// PRONUNCIATION EXERCISE
const A1_M2_L2_PRONUNCIATION: Exercise = {
  id: 'a1-m2-l2-pronunciation-1',
  type: 'pronunciation-practice',
  title: 'Pronunciation: Job Names',
  instructions: 'Practice pronouncing different job names correctly.',
  targetSentences: [
    {
      text: 'She is a doctor. She works in a hospital.',
      audioUrl: '/audio/a1-m2-l2-pronun-1.mp3',
      phonetic: '/ʃiː ɪz ə ˈdɒktə. ʃiː wɜːks ɪn ə ˈhɒspɪtəl/'
    },
    {
      text: 'He is a teacher. He teaches English.',
      audioUrl: '/audio/a1-m2-l2-pronun-2.mp3',
      phonetic: '/hiː ɪz ə ˈtiːʧə. hiː ˈtiːʧɪz ˈɪŋglɪʃ/'
    },
    {
      text: 'My sister is an engineer. She designs bridges.',
      audioUrl: '/audio/a1-m2-l2-pronun-3.mp3',
      phonetic: '/maɪ ˈsɪstə ɪz ən ˌenʤɪˈnɪə. ʃiː dɪˈzaɪnz ˈbrɪʤɪz/'
    },
    {
      text: 'He is a chef. He cooks delicious food.',
      audioUrl: '/audio/a1-m2-l2-pronun-4.mp3',
      phonetic: '/hiː ɪz ə ʃef. hiː kʊks dɪˈlɪʃəs fuːd/'
    },
    {
      text: 'She is a nurse. She helps patients.',
      audioUrl: '/audio/a1-m2-l2-pronun-5.mp3',
      phonetic: '/ʃiː ɪz ə nɜːs. ʃiː helps ˈpeɪʃənts/'
    },
    {
      text: 'They are police officers. They protect people.',
      audioUrl: '/audio/a1-m2-l2-pronun-6.mp3',
      phonetic: '/ðeɪ ɑː pəˈliːs ˈɒfɪsəz. ðeɪ prəˈtekt ˈpiːpəl/'
    }
  ],
  focusPoints: [
    'Stress is on the first syllable in most job names: DOCtor, TEAcher, NURse',
    'Engineer has stress on the third syllable: engiNEER',
    'Remember to use a/an correctly: a doctor, an engineer',
    'Plural forms: teacher → teachers, nurse → nurses'
  ],
  tips: [
    'Practice the schwa sound /ə/ in: doctər, teachər, engineər',
    'Chef is pronounced /ʃef/ (like "shef"), not /ʧef/',
    'Police officer is two words with stress on poLICE',
    'Remember: he/she IS (not "are") + a/an + job'
  ],
  questions: [
    {
      id: 'a1-m2-l2-p-q1',
      type: 'multiple-choice',
      question: 'Where is the stress in "engineer"?',
      options: ['EN-gi-neer', 'en-GI-neer', 'en-gi-NEER', 'EN-GI-neer'],
      correctAnswer: 'en-gi-NEER',
      explanation: 'Engineer has stress on the last syllable: engiNEER.',
      points: 1
    },
    {
      id: 'a1-m2-l2-p-q2',
      type: 'true-false',
      question: 'Most job names have stress on the first syllable.',
      correctAnswer: 'True',
      explanation: 'True. Most job names stress the first syllable: DOCtor, TEAcher, NURse.',
      points: 1
    },
    {
      id: 'a1-m2-l2-p-q3',
      type: 'multiple-choice',
      question: 'How do we pronounce "chef"?',
      options: ['/ʧef/', '/ʃef/', '/kef/', '/sef/'],
      correctAnswer: '/ʃef/',
      explanation: 'Chef is pronounced /ʃef/ (like "shef").',
      points: 1
    },
    {
      id: 'a1-m2-l2-p-q4',
      type: 'fill-blank',
      question: 'The sound /ə/ is called the ___ sound.',
      correctAnswer: 'schwa',
      acceptableAnswers: ['schwa', 'Schwa'],
      explanation: 'The /ə/ sound is called the schwa, the most common vowel sound in English.',
      points: 1
    },
    {
      id: 'a1-m2-l2-p-q5',
      type: 'true-false',
      question: 'We say "She is teacher" without "a".',
      correctAnswer: 'False',
      explanation: 'False. We must say "She is a teacher" (with "a").',
      points: 1
    },
    {
      id: 'a1-m2-l2-p-q6',
      type: 'multiple-choice',
      question: 'Which is correct?',
      options: ['He are a doctor', 'He is a doctor', 'He is doctor', 'He a doctor'],
      correctAnswer: 'He is a doctor',
      explanation: 'The correct form is "He is a doctor" (with "is" and "a").',
      points: 1
    }
  ]
};

// VOCABULARY EXERCISE 1: Jobs and Professions
const A1_M2_L2_VOCABULARY_1: Exercise = {
  id: 'a1-m2-l2-vocabulary-1',
  type: 'vocabulary',
  title: 'Vocabulary: Jobs and Professions',
  instructions: 'Learn common job names and their definitions.',
  words: [
    { word: 'doctor', definition: 'A person who helps sick people', example: 'She is a doctor. She works in a hospital.' },
    { word: 'teacher', definition: 'A person who teaches students', example: 'He is a teacher. He teaches math.' },
    { word: 'engineer', definition: 'A person who designs or builds things', example: 'My sister is an engineer.' },
    { word: 'chef', definition: 'A person who cooks in a restaurant', example: 'The chef makes delicious food.' },
    { word: 'nurse', definition: 'A person who helps doctors care for patients', example: 'She is a nurse. She works long hours.' },
    { word: 'police officer', definition: 'A person who protects people and keeps law and order', example: 'Police officers help keep us safe.' }
  ],
  questions: [
    {
      id: 'a1-m2-l2-v1-q1',
      type: 'multiple-choice',
      question: 'A person who helps sick people is a ___.',
      options: ['teacher', 'doctor', 'chef', 'engineer'],
      correctAnswer: 'doctor',
      explanation: 'A doctor helps sick people.',
      points: 1
    },
    {
      id: 'a1-m2-l2-v1-q2',
      type: 'fill-blank',
      question: 'A person who teaches students is a ___.',
      correctAnswer: 'teacher',
      acceptableAnswers: ['teacher', 'Teacher'],
      explanation: 'A teacher teaches students in a school.',
      points: 1
    },
    {
      id: 'a1-m2-l2-v1-q3',
      type: 'multiple-choice',
      question: 'A person who cooks in a restaurant is a ___.',
      options: ['doctor', 'nurse', 'chef', 'teacher'],
      correctAnswer: 'chef',
      explanation: 'A chef cooks food, usually in a restaurant.',
      points: 1
    },
    {
      id: 'a1-m2-l2-v1-q4',
      type: 'true-false',
      question: 'An engineer designs or builds things.',
      correctAnswer: 'True',
      explanation: 'True. Engineers design buildings, bridges, machines, etc.',
      points: 1
    },
    {
      id: 'a1-m2-l2-v1-q5',
      type: 'fill-blank',
      question: 'A ___ helps doctors care for patients.',
      correctAnswer: 'nurse',
      acceptableAnswers: ['nurse', 'Nurse'],
      explanation: 'Nurses work with doctors to help patients.',
      points: 1
    },
    {
      id: 'a1-m2-l2-v1-q6',
      type: 'multiple-choice',
      question: 'Who protects people and keeps law and order?',
      options: ['Nurse', 'Police officer', 'Chef', 'Teacher'],
      correctAnswer: 'Police officer',
      explanation: 'Police officers protect people and enforce laws.',
      points: 1
    }
  ]
};

// VOCABULARY EXERCISE 2: Workplace Vocabulary
const A1_M2_L2_VOCABULARY_2: Exercise = {
  id: 'a1-m2-l2-vocabulary-2',
  type: 'vocabulary',
  title: 'Vocabulary: Workplace Words',
  instructions: 'Learn vocabulary related to work and workplaces.',
  words: [
    { word: 'office', definition: 'A place where people work at desks', example: 'I work in an office.' },
    { word: 'colleague', definition: 'A person you work with', example: 'My colleagues are very friendly.' },
    { word: 'boss', definition: 'The person who manages or leads workers', example: 'My boss is very nice.' },
    { word: 'salary', definition: 'The money you earn from your job', example: 'She has a good salary.' },
    { word: 'full-time', definition: 'Working all normal working hours (usually 40 hours/week)', example: 'I have a full-time job.' },
    { word: 'part-time', definition: 'Working fewer hours than full-time', example: 'He works part-time, only 20 hours a week.' }
  ],
  questions: [
    {
      id: 'a1-m2-l2-v2-q1',
      type: 'multiple-choice',
      question: 'A place where people work at desks is an ___.',
      options: ['hospital', 'office', 'restaurant', 'school'],
      correctAnswer: 'office',
      explanation: 'An office is where people work at desks, usually in business.',
      points: 1
    },
    {
      id: 'a1-m2-l2-v2-q2',
      type: 'fill-blank',
      question: 'A person you work with is your ___.',
      correctAnswer: 'colleague',
      acceptableAnswers: ['colleague', 'Colleague', 'coworker', 'co-worker'],
      explanation: 'Your colleagues (or coworkers) are the people you work with.',
      points: 1
    },
    {
      id: 'a1-m2-l2-v2-q3',
      type: 'true-false',
      question: 'Your boss is the person who manages you at work.',
      correctAnswer: 'True',
      explanation: 'True. Your boss is your manager or supervisor.',
      points: 1
    },
    {
      id: 'a1-m2-l2-v2-q4',
      type: 'multiple-choice',
      question: 'The money you earn from your job is your ___.',
      options: ['boss', 'salary', 'office', 'colleague'],
      correctAnswer: 'salary',
      explanation: 'Salary is the money you receive for working.',
      points: 1
    },
    {
      id: 'a1-m2-l2-v2-q5',
      type: 'fill-blank',
      question: 'If you work all normal hours, you have a ___-time job.',
      correctAnswer: 'full',
      acceptableAnswers: ['full', 'Full'],
      explanation: 'Full-time means working all normal working hours.',
      points: 1
    },
    {
      id: 'a1-m2-l2-v2-q6',
      type: 'multiple-choice',
      question: 'Working fewer hours than normal is called ___.',
      options: ['full-time', 'part-time', 'over-time', 'free-time'],
      correctAnswer: 'part-time',
      explanation: 'Part-time means working fewer hours than a full schedule.',
      points: 1
    }
  ]
};

// ============================================
// SENTENCE COMPLETION EXERCISE
// ============================================
export const A1_M2_L2_SENTENCE_COMPLETION = {
  id: 'a1-m2-l2-sentence-completion',
  type: 'sentence-completion',
  title: 'Complete Job Questions',
  instructions: 'Complete questions about jobs and professions with the correct question words or verb forms.',
  sentences: [
    {
      id: 'sc1',
      prompt: '___ do you do? - I\'m a teacher.',
      correctCompletion: 'What',
      options: ['What', 'Where', 'Who', 'When'],
      explanation: 'We use "What" to ask about jobs: What do you do?',
      points: 1
    },
    {
      id: 'sc2',
      prompt: '___ does she work? - She works in a hospital.',
      correctCompletion: 'Where',
      options: ['What', 'Where', 'Who', 'How'],
      explanation: 'We use "Where" to ask about place of work.',
      points: 1
    },
    {
      id: 'sc3',
      prompt: '___ he a doctor? - Yes, he is.',
      correctCompletion: 'Is',
      options: ['Is', 'Does', 'Do', 'Are'],
      explanation: 'We use "Is" to make yes/no questions with "to be".',
      points: 1
    },
    {
      id: 'sc4',
      prompt: '___ they work in an office? - No, they don\'t.',
      correctCompletion: 'Do',
      options: ['Do', 'Does', 'Are', 'Is'],
      explanation: 'We use "Do" for yes/no questions with plural subjects.',
      points: 1
    },
    {
      id: 'sc5',
      prompt: '___ does your father work? - He works for a bank.',
      correctCompletion: 'Where',
      options: ['What', 'Where', 'Who', 'When'],
      explanation: 'We use "Where" to ask about the place of work.',
      points: 1
    },
    {
      id: 'sc6',
      prompt: '___ she like her job? - Yes, she does.',
      correctCompletion: 'Does',
      options: ['Do', 'Does', 'Is', 'Are'],
      explanation: 'We use "Does" for yes/no questions with third person singular.',
      points: 1
    },
    {
      id: 'sc7',
      prompt: 'Sentence 7: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 7',
      points: 1
    },
    {
      id: 'sc8',
      prompt: 'Sentence 8: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 8',
      points: 1
    },
    {
      id: 'sc9',
      prompt: 'Sentence 9: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 9',
      points: 1
    },
    {
      id: 'sc10',
      prompt: 'Sentence 10: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 10',
      points: 1
    },
    {
      id: 'sc11',
      prompt: 'Sentence 11: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 11',
      points: 1
    },
    {
      id: 'sc12',
      prompt: 'Sentence 12: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 12',
      points: 1
    },
    {
      id: 'sc13',
      prompt: 'Sentence 13: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 13',
      points: 1
    },
    {
      id: 'sc14',
      prompt: 'Sentence 14: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 14',
      points: 1
    },
    {
      id: 'sc15',
      prompt: 'Sentence 15: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 15',
      points: 1
    },
    {
      id: 'sc16',
      prompt: 'Sentence 16: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 16',
      points: 1
    },
    {
      id: 'sc17',
      prompt: 'Sentence 17: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 17',
      points: 1
    },
    {
      id: 'sc18',
      prompt: 'Sentence 18: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 18',
      points: 1
    },
    {
      id: 'sc19',
      prompt: 'Sentence 19: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 19',
      points: 1
    },
    {
      id: 'sc20',
      prompt: 'Sentence 20: Complete this ___.',
      correctCompletion: 'word',
      options: ['word', 'word2', 'word3'],
      explanation: 'Explanation for sentence 20',
      points: 1
    }
  ]
};

// ============================================
// ERROR IDENTIFICATION EXERCISE
// ============================================
export const A1_M2_L2_ERROR_IDENTIFICATION = {
  id: 'a1-m2-l2-error-identification',
  type: 'error-identification',
  title: 'Find Question Errors',
  instructions: 'Find and correct errors in questions about jobs.',
  sentences: [
    {
      id: 'ei1',
      sentence: 'What she does?',
      hasError: true,
      errorWord: 'she does',
      correction: 'does she do',
      explanation: 'Incorrect! Question order: What does she do?',
      points: 1
    },
    {
      id: 'ei2',
      sentence: 'Where do you work?',
      hasError: false,
      explanation: 'Correct! This question has proper word order.',
      points: 1
    },
    {
      id: 'ei3',
      sentence: 'Does he is a teacher?',
      hasError: true,
      errorWord: 'Does',
      correction: 'Is',
      explanation: 'Incorrect! With "to be", use "Is": Is he a teacher?',
      points: 1
    },
    {
      id: 'ei4',
      sentence: 'Do she work here?',
      hasError: true,
      errorWord: 'Do',
      correction: 'Does',
      explanation: 'Incorrect! With "she", use "Does": Does she work here?',
      points: 1
    },
    {
      id: 'ei5',
      sentence: 'Are they students?',
      hasError: false,
      explanation: 'Correct! Proper question with "to be".',
      points: 1
    },
    {
      id: 'ei6',
      sentence: 'Where works your mother?',
      hasError: true,
      errorWord: 'works your',
      correction: 'does your mother work',
      explanation: 'Incorrect! Question order: Where does your mother work?',
      points: 1
    },
    {
      id: 'ei7',
      sentence: 'Sample sentence 7.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 7',
      points: 1
    },
    {
      id: 'ei8',
      sentence: 'Sample sentence 8.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 8',
      points: 1
    },
    {
      id: 'ei9',
      sentence: 'Sample sentence 9.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 9',
      points: 1
    },
    {
      id: 'ei10',
      sentence: 'Sample sentence 10.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 10',
      points: 1
    },
    {
      id: 'ei11',
      sentence: 'Sample sentence 11.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 11',
      points: 1
    },
    {
      id: 'ei12',
      sentence: 'Sample sentence 12.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 12',
      points: 1
    },
    {
      id: 'ei13',
      sentence: 'Sample sentence 13.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 13',
      points: 1
    },
    {
      id: 'ei14',
      sentence: 'Sample sentence 14.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 14',
      points: 1
    },
    {
      id: 'ei15',
      sentence: 'Sample sentence 15.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 15',
      points: 1
    },
    {
      id: 'ei16',
      sentence: 'Sample sentence 16.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 16',
      points: 1
    },
    {
      id: 'ei17',
      sentence: 'Sample sentence 17.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 17',
      points: 1
    },
    {
      id: 'ei18',
      sentence: 'Sample sentence 18.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 18',
      points: 1
    },
    {
      id: 'ei19',
      sentence: 'Sample sentence 19.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 19',
      points: 1
    },
    {
      id: 'ei20',
      sentence: 'Sample sentence 20.',
      hasError: true,
      errorWord: 'word',
      correction: 'corrected',
      explanation: 'Explanation for sentence 20',
      points: 1
    }
  ]
};

// ============================================
// GAP FILL TEXT EXERCISE
// ============================================
export const A1_M2_L2_GAP_FILL = {
  id: 'a1-m2-l2-gap-fill',
  type: 'gap-fill-text',
  title: 'Interview About Jobs',
  instructions: 'Complete this job interview with the correct question words and verb forms.',
  text: `Interviewer: Hello! Thank you for coming. Let me ask you some questions.

Interviewer: {{1}} do you do?
Candidate: I {{2}} a software developer.

Interviewer: {{3}} do you work?
Candidate: I {{4}} for a technology company in the city center.

Interviewer: {{5}} you like your job?
Candidate: Yes, I {{6}}. It's very interesting.

Interviewer: {{7}} does your company do?
Candidate: We {{8}} mobile applications.

Interviewer: {{9}} many people work there?
Candidate: About 50 people {{10}} in my office.

Interviewer: {{11}} you work on weekends?
Candidate: No, I {{12}}. I work Monday to Friday.

Interviewer: That sounds great! Thank you for your time.`,
  gaps: [
    {
      id: 'gap1',
      gapNumber: 1,
      correctAnswer: 'What',
      options: ['What', 'Whats', 'other'],
      explanation: '"What" to ask about job.',
      points: 1
    },
    {
      id: 'gap2',
      gapNumber: 2,
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      acceptableAlternatives: ["'m"],
      explanation: 'I am a software developer.',
      points: 1
    },
    {
      id: 'gap3',
      gapNumber: 3,
      correctAnswer: 'Where',
      options: ['Where', 'Wheres', 'other'],
      explanation: '"Where" to ask about place.',
      points: 1
    },
    {
      id: 'gap4',
      gapNumber: 4,
      correctAnswer: 'work',
      options: ['work', 'works', 'other'],
      explanation: 'I work for...',
      points: 1
    },
    {
      id: 'gap5',
      gapNumber: 5,
      correctAnswer: 'Do',
      options: ['Do', 'Dos', 'other'],
      explanation: '"Do you" for questions.',
      points: 1
    },
    {
      id: 'gap6',
      gapNumber: 6,
      correctAnswer: 'do',
      options: ['do', 'dos', 'other'],
      explanation: 'Yes, I do.',
      points: 1
    },
    {
      id: 'gap7',
      gapNumber: 7,
      correctAnswer: 'What',
      options: ['What', 'Whats', 'other'],
      explanation: '"What does" for third person questions.',
      points: 1
    },
    {
      id: 'gap8',
      gapNumber: 8,
      correctAnswer: 'make',
      options: ['make', 'makes', 'other'],
      acceptableAlternatives: ['develop', 'create'],
      explanation: 'We make applications.',
      points: 1
    },
    {
      id: 'gap9',
      gapNumber: 9,
      correctAnswer: 'How',
      options: ['How', 'Hows', 'other'],
      explanation: '"How many" to ask about quantity.',
      points: 1
    },
    {
      id: 'gap10',
      gapNumber: 10,
      correctAnswer: 'work',
      options: ['work', 'works', 'other'],
      explanation: 'People work (plural).',
      points: 1
    },
    {
      id: 'gap11',
      gapNumber: 11,
      correctAnswer: 'Do',
      options: ['Do', 'Dos', 'other'],
      explanation: '"Do you work".',
      points: 1
    },
    {
      id: 'gap12',
      gapNumber: 12,
      correctAnswer: "don't",
      options: ["don't", "doesn't", "do"],
      acceptableAlternatives: ['do not'],
      explanation: 'No, I don\'t.',
      points: 1
    },
    {
      id: 'gap13',
      correctAnswer: 'word',
      acceptableAnswers: ['word'],
      explanation: 'Explanation for gap 13',
      points: 1
    },
    {
      id: 'gap14',
      correctAnswer: 'word',
      acceptableAnswers: ['word'],
      explanation: 'Explanation for gap 14',
      points: 1
    },
    {
      id: 'gap15',
      correctAnswer: 'word',
      acceptableAnswers: ['word'],
      explanation: 'Explanation for gap 15',
      points: 1
    },
    {
      id: 'gap16',
      correctAnswer: 'word',
      acceptableAnswers: ['word'],
      explanation: 'Explanation for gap 16',
      points: 1
    },
    {
      id: 'gap17',
      correctAnswer: 'word',
      acceptableAnswers: ['word'],
      explanation: 'Explanation for gap 17',
      points: 1
    },
    {
      id: 'gap18',
      correctAnswer: 'word',
      acceptableAnswers: ['word'],
      explanation: 'Explanation for gap 18',
      points: 1
    },
    {
      id: 'gap19',
      correctAnswer: 'word',
      acceptableAnswers: ['word'],
      explanation: 'Explanation for gap 19',
      points: 1
    },
    {
      id: 'gap20',
      correctAnswer: 'word',
      acceptableAnswers: ['word'],
      explanation: 'Explanation for gap 20',
      points: 1
    }
  ]
};

// ============================================
// COLLOCATION MATCHING EXERCISE
// ============================================
export const A1_M2_L2_COLLOCATION_MATCHING = {
  id: 'a1-m2-l2-collocation-matching',
  type: 'collocation-matching',
  title: 'Match Jobs with Workplaces',
  instructions: 'Match each job with the typical workplace.',
  pairs: [
    {
      id: 'cm1',
      word: 'Teacher',
      correctMatch: 'school',
      distractors: ['hospital', 'restaurant', 'office'],
      example: 'A teacher works in a school.',
      points: 1
    },
    {
      id: 'cm2',
      word: 'Doctor',
      correctMatch: 'hospital',
      distractors: ['school', 'shop', 'factory'],
      example: 'A doctor works in a hospital.',
      points: 1
    },
    {
      id: 'cm3',
      word: 'Chef',
      correctMatch: 'restaurant',
      distractors: ['hospital', 'school', 'bank'],
      example: 'A chef works in a restaurant.',
      points: 1
    },
    {
      id: 'cm4',
      word: 'Nurse',
      correctMatch: 'hospital',
      distractors: ['restaurant', 'shop', 'office'],
      example: 'A nurse works in a hospital.',
      points: 1
    },
    {
      id: 'cm5',
      word: 'Shop assistant',
      correctMatch: 'shop',
      distractors: ['hospital', 'school', 'factory'],
      example: 'A shop assistant works in a shop.',
      points: 1
    },
    {
      id: 'cm6',
      word: 'Engineer',
      correctMatch: 'office',
      distractors: ['hospital', 'restaurant', 'school'],
      example: 'An engineer works in an office.',
      points: 1
    },
    {
      id: 'cm7',
      word: 'word7',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 7.',
      points: 1
    },
    {
      id: 'cm8',
      word: 'word8',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 8.',
      points: 1
    },
    {
      id: 'cm9',
      word: 'word9',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 9.',
      points: 1
    },
    {
      id: 'cm10',
      word: 'word10',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 10.',
      points: 1
    },
    {
      id: 'cm11',
      word: 'word11',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 11.',
      points: 1
    },
    {
      id: 'cm12',
      word: 'word12',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 12.',
      points: 1
    },
    {
      id: 'cm13',
      word: 'word13',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 13.',
      points: 1
    },
    {
      id: 'cm14',
      word: 'word14',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 14.',
      points: 1
    },
    {
      id: 'cm15',
      word: 'word15',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 15.',
      points: 1
    },
    {
      id: 'cm16',
      word: 'word16',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 16.',
      points: 1
    },
    {
      id: 'cm17',
      word: 'word17',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 17.',
      points: 1
    },
    {
      id: 'cm18',
      word: 'word18',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 18.',
      points: 1
    },
    {
      id: 'cm19',
      word: 'word19',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 19.',
      points: 1
    },
    {
      id: 'cm20',
      word: 'word20',
      correctMatch: 'match',
      distractors: ['dist1', 'dist2'],
      example: 'Example sentence 20.',
      points: 1
    }
  ]
};


// Export all exercises for Lesson 2
export const A1_M2_L2_ALL_EXERCISES = [
  A1_M2_L2_GRAMMAR_1,
  A1_M2_L2_GRAMMAR_2,
  A1_M2_L2_READING,
  A1_M2_L2_LISTENING,
  A1_M2_L2_SPEAKING,
  A1_M2_L2_WRITING,
  A1_M2_L2_PRONUNCIATION,
  A1_M2_L2_VOCABULARY_1,
  A1_M2_L2_VOCABULARY_2,
  A1_M2_L2_SENTENCE_COMPLETION,
  A1_M2_L2_ERROR_IDENTIFICATION,
  A1_M2_L2_GAP_FILL,
  A1_M2_L2_COLLOCATION_MATCHING
];
