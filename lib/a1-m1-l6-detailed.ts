// A1 - Module 1 - Lesson 6: Mock Exam - Module 1 Review
// This lesson reviews all topics from Module 1
// CEFR Level: A1

import { Exercise } from './course-data';

// GRAMMAR EXERCISE 1: Module 1 Review - Verb "to be", pronouns, questions
const A1_M1_L6_GRAMMAR_1: Exercise = {
  id: 'a1-m1-l6-grammar-1',
  type: 'grammar',
  title: 'Module 1 Review - Verb "to be" and Personal Pronouns',
  instructions: 'Review all grammar points from Module 1. Complete the exercises.',
  examples: [
    'I am a student. → She ___ a teacher. (is)',
    '___ you from Spain? (Are)',
    'They ___ not at home. (are)',
    'What ___ your name? (is)'
  ],
  questions: [
    {
      id: 'a1-m1-l6-g1-q1',
      type: 'multiple-choice',
      question: 'Maria and John ___ from Mexico.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'are',
      explanation: 'We use "are" with plural subjects (Maria and John = they).',
      points: 1
    },
    {
      id: 'a1-m1-l6-g1-q2',
      type: 'multiple-choice',
      question: '___ she your sister?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Is',
      explanation: 'We use "Is" to form questions with "she".',
      points: 1
    },
    {
      id: 'a1-m1-l6-g1-q3',
      type: 'fill-blank',
      question: 'This is Paul. ___ is my brother.',
      correctAnswer: 'He',
      acceptableAnswers: ['He', 'he'],
      explanation: 'Paul is male, so we use the pronoun "He".',
      points: 1
    },
    {
      id: 'a1-m1-l6-g1-q4',
      type: 'multiple-choice',
      question: 'I ___ 25 years old.',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 'am',
      explanation: 'We use "am" with "I".',
      points: 1
    },
    {
      id: 'a1-m1-l6-g1-q5',
      type: 'fill-blank',
      question: 'Where ___ you from?',
      correctAnswer: 'are',
      acceptableAnswers: ['are', 'Are'],
      explanation: 'We use "are" to form questions with "you".',
      points: 1
    },
    {
      id: 'a1-m1-l6-g1-q6',
      type: 'true-false',
      question: '"They is students" is correct.',
      correctAnswer: 'False',
      explanation: 'False. The correct form is "They are students".',
      points: 1
    }
  ]
};

// GRAMMAR EXERCISE 2: Countries, Nationalities, Numbers
const A1_M1_L6_GRAMMAR_2: Exercise = {
  id: 'a1-m1-l6-grammar-2',
  type: 'grammar',
  title: 'Module 1 Review - Countries, Nationalities, and Numbers',
  instructions: 'Complete the sentences with the correct information.',
  examples: [
    'I\'m from Japan. I\'m Japanese.',
    'She\'s 22 years old.',
    'They\'re from Brazil. They\'re Brazilian.'
  ],
  questions: [
    {
      id: 'a1-m1-l6-g2-q1',
      type: 'multiple-choice',
      question: 'John is from England. He is ___.',
      options: ['England', 'English', 'Englander', 'Englishman'],
      correctAnswer: 'English',
      explanation: 'The nationality for England is "English".',
      points: 1
    },
    {
      id: 'a1-m1-l6-g2-q2',
      type: 'fill-blank',
      question: 'My sister is ___ years old. (18)',
      correctAnswer: 'eighteen',
      acceptableAnswers: ['eighteen', 'Eighteen', '18'],
      explanation: 'Eighteen is the word for the number 18.',
      points: 1
    },
    {
      id: 'a1-m1-l6-g2-q3',
      type: 'multiple-choice',
      question: 'Maria is from Spain. ___ mother is Spanish too.',
      options: ['She', 'Her', 'His', 'Hers'],
      correctAnswer: 'Her',
      explanation: 'We use "Her" as a possessive adjective before a noun.',
      points: 1
    },
    {
      id: 'a1-m1-l6-g2-q4',
      type: 'fill-blank',
      question: 'How old ___ your brother?',
      correctAnswer: 'is',
      acceptableAnswers: ['is', 'Is'],
      explanation: 'We use "is" with "your brother" (he).',
      points: 1
    },
    {
      id: 'a1-m1-l6-g2-q5',
      type: 'multiple-choice',
      question: 'They are from China. They are ___.',
      options: ['China', 'Chinese', 'Chineses', 'Chiner'],
      correctAnswer: 'Chinese',
      explanation: 'The nationality for China is "Chinese".',
      points: 1
    },
    {
      id: 'a1-m1-l6-g2-q6',
      type: 'true-false',
      question: 'We say "I have 20 years" in English.',
      correctAnswer: 'False',
      explanation: 'False. We say "I am 20 years old" in English.',
      points: 1
    }
  ]
};

// READING EXERCISE
const A1_M1_L6_READING: Exercise = {
  id: 'a1-m1-l6-reading-1',
  type: 'reading',
  title: 'Reading: Meet My Family',
  readingText: `Meet My Family

Hello! My name is Emma and I am 28 years old. I am from Canada, but now I live in Spain with my family.

My husband's name is Carlos. He is Spanish and he is 30 years old. We have two children. Our daughter, Sofia, is 5 years old, and our son, Lucas, is 3 years old. They are very happy children!

My parents live in Canada. My mother is 55 and my father is 58. They visit us every summer. I also have one brother. His name is Tom and he is 25 years old. He is a teacher in Canada.

Carlos has a big family. He has two brothers and one sister. His sister, Ana, lives near us. She has three children - our nephews and niece. We see them every weekend.

Our family is international! We speak English and Spanish at home. The children go to a bilingual school. They are learning both languages.

We are very happy together!`,
  questions: [
    {
      id: 'a1-m1-l6-r-q1',
      type: 'multiple-choice',
      question: 'Where is Emma from?',
      options: ['Spain', 'Canada', 'England', 'The USA'],
      correctAnswer: 'Canada',
      explanation: 'Emma says "I am from Canada".',
      points: 1
    },
    {
      id: 'a1-m1-l6-r-q2',
      type: 'multiple-choice',
      question: 'How old is Carlos?',
      options: ['25', '28', '30', '58'],
      correctAnswer: '30',
      explanation: 'The text says "he is 30 years old".',
      points: 1
    },
    {
      id: 'a1-m1-l6-r-q3',
      type: 'true-false',
      question: 'Emma has two sons.',
      correctAnswer: 'False',
      explanation: 'False. Emma has one daughter (Sofia) and one son (Lucas).',
      points: 1
    },
    {
      id: 'a1-m1-l6-r-q4',
      type: 'multiple-choice',
      question: 'What is Tom\'s job?',
      options: ['Doctor', 'Teacher', 'Student', 'Engineer'],
      correctAnswer: 'Teacher',
      explanation: 'The text says "He is a teacher in Canada".',
      points: 1
    },
    {
      id: 'a1-m1-l6-r-q5',
      type: 'multiple-choice',
      question: 'How many children does Ana have?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 'Three',
      explanation: 'The text says "She has three children".',
      points: 1
    },
    {
      id: 'a1-m1-l6-r-q6',
      type: 'true-false',
      question: 'The children speak only English.',
      correctAnswer: 'False',
      explanation: 'False. They speak English and Spanish, and go to a bilingual school.',
      points: 1
    }
  ]
};

// LISTENING EXERCISE
const A1_M1_L6_LISTENING: Exercise = {
  id: 'a1-m1-l6-listening-1',
  type: 'listening',
  title: 'Listening: Module 1 Review - Personal Information',
  audioUrl: '/audio/a1-m1-l6-listening-1.mp3',
  transcript: `Conversation: At a Language School Registration

Receptionist: Good morning! Welcome to English Now Language School. Can I have your name, please?

Student: Yes, my name is Ana Martinez.

Receptionist: How do you spell your last name?

Student: M-A-R-T-I-N-E-Z.

Receptionist: Thank you. And where are you from, Ana?

Student: I'm from Colombia. I'm Colombian.

Receptionist: That's wonderful! How old are you?

Student: I'm 22 years old.

Receptionist: And what's your phone number?

Student: It's 555-8921.

Receptionist: 555-8921. Perfect. Do you have an email address?

Student: Yes, it's ana.martinez@email.com.

Receptionist: Great! Now, do you have any family here in the city?

Student: Yes, my brother lives here. His name is David. He's 19 years old and he's a university student.

Receptionist: That's nice! And are your parents in Colombia?

Student: Yes, they are. My mother is a teacher and my father is a doctor.

Receptionist: Excellent! Welcome to our school, Ana!

Student: Thank you very much!`,
  duration: 90,
  allowReplay: true,
  maxReplays: 3,
  questions: [
    {
      id: 'a1-m1-l6-l-q1',
      type: 'multiple-choice',
      question: 'What is the student\'s full name?',
      options: ['Ana Martin', 'Ana Martinez', 'Anna Martinez', 'Ana Martines'],
      correctAnswer: 'Ana Martinez',
      explanation: 'She says her name is Ana Martinez.',
      points: 1
    },
    {
      id: 'a1-m1-l6-l-q2',
      type: 'multiple-choice',
      question: 'Where is Ana from?',
      options: ['Spain', 'Mexico', 'Colombia', 'Argentina'],
      correctAnswer: 'Colombia',
      explanation: 'Ana says "I\'m from Colombia".',
      points: 1
    },
    {
      id: 'a1-m1-l6-l-q3',
      type: 'fill-blank',
      question: 'Ana is ___ years old.',
      correctAnswer: '22',
      acceptableAnswers: ['22', 'twenty-two', 'twenty two'],
      explanation: 'Ana says "I\'m 22 years old".',
      points: 1
    },
    {
      id: 'a1-m1-l6-l-q4',
      type: 'multiple-choice',
      question: 'What is Ana\'s phone number?',
      options: ['555-8291', '555-8921', '555-9821', '555-8912'],
      correctAnswer: '555-8921',
      explanation: 'She says her phone number is 555-8921.',
      points: 1
    },
    {
      id: 'a1-m1-l6-l-q5',
      type: 'true-false',
      question: 'Ana\'s brother is a university student.',
      correctAnswer: 'True',
      explanation: 'True. Ana says "he\'s a university student".',
      points: 1
    },
    {
      id: 'a1-m1-l6-l-q6',
      type: 'multiple-choice',
      question: 'What is Ana\'s mother\'s job?',
      options: ['Doctor', 'Teacher', 'Student', 'Receptionist'],
      correctAnswer: 'Teacher',
      explanation: 'Ana says "My mother is a teacher".',
      points: 1
    }
  ]
};

// SPEAKING EXERCISE
const A1_M1_L6_SPEAKING: Exercise = {
  id: 'a1-m1-l6-speaking-1',
  type: 'speaking',
  title: 'Speaking: Introduce Yourself and Your Family',
  instructions: 'Record yourself introducing yourself and your family. Include: your name, age, country, nationality, and information about 2-3 family members.',
  prompts: [
    'What is your name?',
    'How old are you?',
    'Where are you from? What is your nationality?',
    'Tell me about your family (parents, siblings, children)',
    'How old are your family members?',
    'Where do they live?'
  ],
  expectedLength: 60,
  targetLevel: 'A1',
  evaluationCriteria: [
    'Clear pronunciation',
    'Correct use of "to be"',
    'Correct personal pronouns',
    'Basic family vocabulary',
    'Numbers and ages'
  ],
  questions: [
    {
      id: 'a1-m1-l6-s-q1',
      type: 'speaking',
      question: 'Introduce yourself (name, age, country, nationality)',
      expectedAnswer: 'My name is [name]. I am [age] years old. I am from [country]. I am [nationality].',
      points: 2
    },
    {
      id: 'a1-m1-l6-s-q2',
      type: 'speaking',
      question: 'Describe your family members',
      expectedAnswer: 'I have [family members]. My [relation] is [age] years old. He/She is [description].',
      points: 2
    },
    {
      id: 'a1-m1-l6-s-q3',
      type: 'speaking',
      question: 'Where do your family members live?',
      expectedAnswer: 'My [family member] lives in [place]. They are from [country].',
      points: 2
    }
  ]
};

// WRITING EXERCISE
const A1_M1_L6_WRITING: Exercise = {
  id: 'a1-m1-l6-writing-1',
  type: 'writing',
  title: 'Writing: My Profile',
  instructions: 'Write a short text (60-80 words) about yourself and your family. Include: your name, age, country, nationality, family members, their ages, and where they live.',
  prompt: 'Write about yourself and your family',
  minWords: 60,
  maxWords: 80,
  targetLevel: 'A1',
  rubric: [
    {
      criterion: 'Content',
      description: 'Includes personal information and family details',
      maxScore: 3
    },
    {
      criterion: 'Grammar',
      description: 'Correct use of verb "to be", pronouns, and possessives',
      maxScore: 3
    },
    {
      criterion: 'Vocabulary',
      description: 'Appropriate use of family, numbers, and nationality words',
      maxScore: 2
    },
    {
      criterion: 'Organization',
      description: 'Clear and logical structure',
      maxScore: 2
    }
  ],
  questions: [
    {
      id: 'a1-m1-l6-w-q1',
      type: 'writing',
      question: 'Write your text about yourself and your family.',
      expectedAnswer: 'Student should write 60-80 words including personal information and family details.',
      points: 10
    }
  ]
};

// PRONUNCIATION EXERCISE
const A1_M1_L6_PRONUNCIATION: Exercise = {
  id: 'a1-m1-l6-pronunciation-1',
  type: 'pronunciation-practice',
  title: 'Pronunciation: Module 1 Review',
  instructions: 'Listen and repeat these important sentences from Module 1.',
  targetSentences: [
    {
      text: 'I am from Canada. I am Canadian.',
      audioUrl: '/audio/a1-m1-l6-pronun-1.mp3',
      phonetic: '/aɪ æm frɒm ˈkænədə. aɪ æm kəˈneɪdiən/'
    },
    {
      text: 'She is my mother. Her name is Maria.',
      audioUrl: '/audio/a1-m1-l6-pronun-2.mp3',
      phonetic: '/ʃiː ɪz maɪ ˈmʌðə. hɜː neɪm ɪz məˈriːə/'
    },
    {
      text: 'Are you a student? Yes, I am.',
      audioUrl: '/audio/a1-m1-l6-pronun-3.mp3',
      phonetic: '/ɑː juː ə ˈstjuːdənt? jes, aɪ æm/'
    },
    {
      text: 'How old is your brother? He is fifteen.',
      audioUrl: '/audio/a1-m1-l6-pronun-4.mp3',
      phonetic: '/haʊ əʊld ɪz jɔː ˈbrʌðə? hiː ɪz ˌfɪfˈtiːn/'
    },
    {
      text: 'My parents are from Spain.',
      audioUrl: '/audio/a1-m1-l6-pronun-5.mp3',
      phonetic: '/maɪ ˈpeərənts ɑː frɒm speɪn/'
    },
    {
      text: 'We are not Japanese. We are Chinese.',
      audioUrl: '/audio/a1-m1-l6-pronun-6.mp3',
      phonetic: '/wiː ɑː nɒt ˌʤæpəˈniːz. wiː ɑː ˌʧaɪˈniːz/'
    }
  ],
  focusPoints: [
    'Clear pronunciation of verb "to be" contractions',
    'Correct stress in nationality words',
    'Rising intonation in Yes/No questions',
    'Clear pronunciation of numbers'
  ],
  tips: [
    'Practice linking sounds: "I_am", "She_is"',
    'Stress the FIRST syllable in most nationality words',
    'Make your voice go UP at the end of Yes/No questions',
    'Pronounce "-teen" clearly: fifTEEN (not fifty)'
  ],
  questions: [
    {
      id: 'a1-m1-l6-p-q1',
      type: 'multiple-choice',
      question: 'In "Canadian", which syllable is stressed?',
      options: ['Ca-', '-na-', '-di-', '-an'],
      correctAnswer: '-na-',
      explanation: 'In "Canadian", the stress is on the second syllable: ca-NA-dian.',
      points: 1
    },
    {
      id: 'a1-m1-l6-p-q2',
      type: 'true-false',
      question: 'In Yes/No questions, the voice goes up at the end.',
      correctAnswer: 'True',
      explanation: 'True. We use rising intonation for Yes/No questions.',
      points: 1
    },
    {
      id: 'a1-m1-l6-p-q3',
      type: 'multiple-choice',
      question: 'How do we pronounce "fifteen"?',
      options: ['/ˈfɪftiːn/', '/fɪfˈtiːn/', '/ˈfɪfti/', '/fɪfˈti/'],
      correctAnswer: '/fɪfˈtiːn/',
      explanation: 'Fifteen has stress on the SECOND syllable: fif-TEEN.',
      points: 1
    },
    {
      id: 'a1-m1-l6-p-q4',
      type: 'fill-blank',
      question: 'The "th" sound in "mother" is ___.',
      correctAnswer: 'voiced',
      acceptableAnswers: ['voiced', 'Voiced'],
      explanation: 'The "th" in mother is voiced /ð/, like in "this".',
      points: 1
    },
    {
      id: 'a1-m1-l6-p-q5',
      type: 'true-false',
      question: 'We pronounce "are" as /ɑː/ in British English.',
      correctAnswer: 'True',
      explanation: 'True. In British English, "are" is pronounced /ɑː/.',
      points: 1
    },
    {
      id: 'a1-m1-l6-p-q6',
      type: 'multiple-choice',
      question: 'Which word has the /iː/ sound?',
      options: ['his', 'she', 'it', 'we'],
      correctAnswer: 'she',
      explanation: '"She" has the long /iː/ sound. The others have short vowels.',
      points: 1
    }
  ]
};

// VOCABULARY EXERCISE 1: Module 1 Key Words
const A1_M1_L6_VOCABULARY_1: Exercise = {
  id: 'a1-m1-l6-vocabulary-1',
  type: 'vocabulary',
  title: 'Vocabulary: Module 1 Key Words Review',
  instructions: 'Review important vocabulary from Module 1.',
  words: [
    { word: 'nationality', definition: 'The country you are from (e.g., Spanish, Chinese)', example: 'My nationality is Canadian.' },
    { word: 'age', definition: 'How old someone is', example: 'Her age is 25.' },
    { word: 'family', definition: 'Parents, children, and relatives', example: 'My family is very big.' },
    { word: 'parents', definition: 'Mother and father', example: 'My parents live in Italy.' },
    { word: 'sibling', definition: 'Brother or sister', example: 'I have two siblings.' },
    { word: 'introduce', definition: 'To tell someone your name', example: 'Let me introduce myself. I\'m John.' }
  ],
  questions: [
    {
      id: 'a1-m1-l6-v1-q1',
      type: 'multiple-choice',
      question: 'What is a "sibling"?',
      options: ['A parent', 'A brother or sister', 'A cousin', 'A grandparent'],
      correctAnswer: 'A brother or sister',
      explanation: 'A sibling is a brother or sister.',
      points: 1
    },
    {
      id: 'a1-m1-l6-v1-q2',
      type: 'fill-blank',
      question: 'My ___ is Mexican. I am from Mexico.',
      correctAnswer: 'nationality',
      acceptableAnswers: ['nationality', 'Nationality'],
      explanation: 'Nationality is the country you are from.',
      points: 1
    },
    {
      id: 'a1-m1-l6-v1-q3',
      type: 'multiple-choice',
      question: 'What does "introduce" mean?',
      options: ['To say goodbye', 'To tell someone your name', 'To ask a question', 'To thank someone'],
      correctAnswer: 'To tell someone your name',
      explanation: 'To introduce yourself means to tell someone your name.',
      points: 1
    },
    {
      id: 'a1-m1-l6-v1-q4',
      type: 'true-false',
      question: '"Parents" means mother and father.',
      correctAnswer: 'True',
      explanation: 'True. Parents are your mother and father.',
      points: 1
    },
    {
      id: 'a1-m1-l6-v1-q5',
      type: 'fill-blank',
      question: 'How old is she? What is her ___?',
      correctAnswer: 'age',
      acceptableAnswers: ['age', 'Age'],
      explanation: 'Age is how old someone is.',
      points: 1
    },
    {
      id: 'a1-m1-l6-v1-q6',
      type: 'multiple-choice',
      question: 'My mother, father, and sister are my ___.',
      options: ['friends', 'family', 'teachers', 'students'],
      correctAnswer: 'family',
      explanation: 'Your parents and siblings are your family.',
      points: 1
    }
  ]
};

// VOCABULARY EXERCISE 2: Practice
const A1_M1_L6_VOCABULARY_2: Exercise = {
  id: 'a1-m1-l6-vocabulary-2',
  type: 'vocabulary',
  title: 'Vocabulary Practice: Module 1',
  instructions: 'Practice using Module 1 vocabulary in context.',
  questions: [
    {
      id: 'a1-m1-l6-v2-q1',
      type: 'multiple-choice',
      question: 'Choose the correct word: She is from France. She is ___.',
      options: ['France', 'French', 'Frenchman', 'Frencher'],
      correctAnswer: 'French',
      explanation: 'The nationality for France is French.',
      points: 1
    },
    {
      id: 'a1-m1-l6-v2-q2',
      type: 'fill-blank',
      question: 'I have one ___ (brother or sister).',
      correctAnswer: 'sibling',
      acceptableAnswers: ['sibling', 'brother', 'sister'],
      explanation: 'A sibling is a brother or sister.',
      points: 1
    },
    {
      id: 'a1-m1-l6-v2-q3',
      type: 'multiple-choice',
      question: 'My grandmother is my father\'s ___.',
      options: ['daughter', 'sister', 'mother', 'aunt'],
      correctAnswer: 'mother',
      explanation: 'Your grandmother is your father\'s or mother\'s mother.',
      points: 1
    },
    {
      id: 'a1-m1-l6-v2-q4',
      type: 'fill-blank',
      question: 'In 2024, I am 20 years old. I was born in ___.',
      correctAnswer: '2004',
      acceptableAnswers: ['2004', 'two thousand and four', 'two thousand four'],
      explanation: '2024 - 20 = 2004.',
      points: 1
    },
    {
      id: 'a1-m1-l6-v2-q5',
      type: 'true-false',
      question: '"Nephew" is a female family member.',
      correctAnswer: 'False',
      explanation: 'False. "Nephew" is male. "Niece" is female.',
      points: 1
    },
    {
      id: 'a1-m1-l6-v2-q6',
      type: 'multiple-choice',
      question: 'My brother\'s son is my ___.',
      options: ['cousin', 'nephew', 'uncle', 'son'],
      correctAnswer: 'nephew',
      explanation: 'Your brother\'s or sister\'s son is your nephew.',
      points: 1
    }
  ]
};

// Export all exercises for Lesson 6


export const A1_M1_L6_SENTENCE_COMPLETION = {
  id: 'a1-m1-l6-sentence-completion',
  type: 'sentence-completion',
  title: 'Module 1 Review - Complete Sentences',
  instructions: 'Complete sentences reviewing all Module 1 topics.',
  sentences: [
    {
      id: 'sc1',
      prompt: 'I ___ a student.',
      correctCompletion: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Review: "I" takes "am".',
      points: 1
    },
    {
      id: 'sc2',
      prompt: 'She is from ___. She is French.',
      correctCompletion: 'France',
      options: ['France', 'French', 'Franch'],
      explanation: 'Review: France is the country.',
      points: 1
    },
    {
      id: 'sc3',
      prompt: 'My brother ___ 30 years old.',
      correctCompletion: 'is',
      options: ['am', 'is', 'are'],
      explanation: 'Review: "My brother" (he) takes "is".',
      points: 1
    },
    {
      id: 'sc4',
      prompt: 'They ___ from Germany.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: 'Review: "They" takes "are".',
      points: 1
    },
    {
      id: 'sc5',
      prompt: '___ mother is a teacher.',
      correctCompletion: 'My',
      options: ['My', 'I', 'Me'],
      explanation: 'Review: Use possessive adjective "my" before noun.',
      points: 1
    },
    {
      id: 'sc6',
      prompt: 'We ___ British.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: 'Review: "We" takes "are".',
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

export const A1_M1_L6_ERROR_IDENTIFICATION = {
  id: 'a1-m1-l6-error-identification',
  type: 'error-identification',
  title: 'Review - Find All Errors',
  instructions: 'Find errors reviewing all topics.',
  sentences: [
    {
      id: 'ei1',
      sentence: 'Me is happy.',
      hasError: true,
      errorWord: 'Me',
      correction: 'I',
      explanation: 'Use "I" as subject.',
      points: 1
    },
    {
      id: 'ei2',
      sentence: 'They are students.',
      hasError: false,
      explanation: 'Correct!',
      points: 1
    },
    {
      id: 'ei3',
      sentence: 'She are from Italy.',
      hasError: true,
      errorWord: 'are',
      correction: 'is',
      explanation: 'Use "is" with "she".',
      points: 1
    },
    {
      id: 'ei4',
      sentence: 'My brother have 25 years.',
      hasError: true,
      errorWord: 'have',
      correction: 'is',
      explanation: 'Say "is 25 years old" not "have 25 years".',
      points: 1
    },
    {
      id: 'ei5',
      sentence: 'We is from Canada.',
      hasError: true,
      errorWord: 'is',
      correction: 'are',
      explanation: 'Use "are" with "we".',
      points: 1
    },
    {
      id: 'ei6',
      sentence: 'His name is Tom.',
      hasError: false,
      explanation: 'Correct!',
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

export const A1_M1_L6_GAP_FILL = {
  id: 'a1-m1-l6-gap-fill',
  type: 'gap-fill-text',
  title: 'Review Text',
  instructions: 'Complete this review text.',
  text: `Hello! {{1}} name is Tom. I {{2}} 25 years old. I {{3}} from London, England. I {{4}} British.

{{5}} family is big. I have two {{6}} and one brother. {{7}} name is Jack and {{8}} is 22 years old. My sisters {{9}} Anna and Lisa. Anna {{10}} 28 and Lisa {{11}} 20.

We {{12}} a happy family. My parents {{13}} from Scotland. {{14}} father is 55 and {{15}} mother is 53.`,
  gaps: [
    {
      id: 'gap1',
      gapNumber: 1,
      correctAnswer: 'My',
      options: ['My', 'His', 'Her'],
      explanation: 'Possessive adjective.',
      points: 1
    },
    {
      id: 'gap2',
      gapNumber: 2,
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Verb to be with I.',
      points: 1
    },
    {
      id: 'gap3',
      gapNumber: 3,
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'I am from.',
      points: 1
    },
    {
      id: 'gap4',
      gapNumber: 4,
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Nationality.',
      points: 1
    },
    {
      id: 'gap5',
      gapNumber: 5,
      correctAnswer: 'My',
      options: ['My', 'His', 'Her'],
      explanation: 'Possessive.',
      points: 1
    },
    {
      id: 'gap6',
      gapNumber: 6,
      correctAnswer: 'sisters',
      options: ['sisters', 'brothers', 'parents'],
      explanation: 'Female siblings.',
      points: 1
    },
    {
      id: 'gap7',
      gapNumber: 7,
      correctAnswer: 'His',
      options: ['His', 'Her', 'My'],
      explanation: 'Possessive for male.',
      points: 1
    },
    {
      id: 'gap8',
      gapNumber: 8,
      correctAnswer: 'he',
      options: ['he', 'hes', 'other'],
      explanation: 'Subject pronoun for male.',
      points: 1
    },
    {
      id: 'gap9',
      gapNumber: 9,
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      explanation: 'Plural verb to be.',
      points: 1
    },
    {
      id: 'gap10',
      gapNumber: 10,
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      explanation: 'Singular verb to be.',
      points: 1
    },
    {
      id: 'gap11',
      gapNumber: 11,
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      explanation: 'Singular verb to be.',
      points: 1
    },
    {
      id: 'gap12',
      gapNumber: 12,
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      explanation: 'Plural verb to be with "we".',
      points: 1
    },
    {
      id: 'gap13',
      gapNumber: 13,
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      explanation: 'Plural verb to be.',
      points: 1
    },
    {
      id: 'gap14',
      gapNumber: 14,
      correctAnswer: 'My',
      options: ['My', 'His', 'Her'],
      explanation: 'Possessive adjective.',
      points: 1
    },
    {
      id: 'gap15',
      gapNumber: 15,
      correctAnswer: 'my',
      options: ['my', 'his', 'her'],
      explanation: 'Possessive adjective.',
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

export const A1_M1_L6_SENTENCE_REORDERING = {
  id: 'a1-m1-l6-sentence-reordering',
  type: 'sentence-reordering',
  title: 'Review - Order Words',
  instructions: 'Put words in order.',
  items: [
    {
      id: 'sr1',
      shuffledSentences: ['am', 'I', 'from', 'Spain'],
      correctOrder: [1, 0, 2, 3],
      explanation: 'I am from Spain.',
      points: 1
    },
    {
      id: 'sr2',
      shuffledSentences: ['is', 'She', 'teacher', 'a'],
      correctOrder: [1, 0, 3, 2],
      explanation: 'She is a teacher.',
      points: 1
    },
    {
      id: 'sr3',
      shuffledSentences: ['They', 'are', 'from', 'Brazil'],
      correctOrder: [0, 1, 2, 3],
      explanation: 'They are from Brazil.',
      points: 1
    },
    {
      id: 'sr4',
      shuffledSentences: ['old', 'years', 'He', 'is', '30'],
      correctOrder: [2, 3, 4, 1, 0],
      explanation: 'He is 30 years old.',
      points: 1
    },
    {
      id: 'sr5',
      shuffledSentences: ['My', 'sister', 'French', 'is'],
      correctOrder: [0, 1, 3, 2],
      explanation: 'My sister is French.',
      points: 1
    },
    {
      id: 'sr6',
      shuffledSentences: ['are', 'We', 'students', 'happy'],
      correctOrder: [1, 0, 3, 2],
      explanation: 'We are happy students.',
      points: 1
    },
    {
      id: 'sr7',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 7',
      explanation: 'Correct order explanation for 7',
      points: 1
    },
    {
      id: 'sr8',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 8',
      explanation: 'Correct order explanation for 8',
      points: 1
    },
    {
      id: 'sr9',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 9',
      explanation: 'Correct order explanation for 9',
      points: 1
    },
    {
      id: 'sr10',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 10',
      explanation: 'Correct order explanation for 10',
      points: 1
    },
    {
      id: 'sr11',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 11',
      explanation: 'Correct order explanation for 11',
      points: 1
    },
    {
      id: 'sr12',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 12',
      explanation: 'Correct order explanation for 12',
      points: 1
    },
    {
      id: 'sr13',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 13',
      explanation: 'Correct order explanation for 13',
      points: 1
    },
    {
      id: 'sr14',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 14',
      explanation: 'Correct order explanation for 14',
      points: 1
    },
    {
      id: 'sr15',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 15',
      explanation: 'Correct order explanation for 15',
      points: 1
    },
    {
      id: 'sr16',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 16',
      explanation: 'Correct order explanation for 16',
      points: 1
    },
    {
      id: 'sr17',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 17',
      explanation: 'Correct order explanation for 17',
      points: 1
    },
    {
      id: 'sr18',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 18',
      explanation: 'Correct order explanation for 18',
      points: 1
    },
    {
      id: 'sr19',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 19',
      explanation: 'Correct order explanation for 19',
      points: 1
    },
    {
      id: 'sr20',
      shuffledSentences: ['word1', 'word2', 'word3', 'word4'],
      correctOrder: [0, 1, 2, 3],
      context: 'Reorder sentence 20',
      explanation: 'Correct order explanation for 20',
      points: 1
    }
  ]
};

export const A1_M1_L6_ALL_EXERCISES = [
  A1_M1_L6_GRAMMAR_1,
  A1_M1_L6_GRAMMAR_2,
  A1_M1_L6_READING,
  A1_M1_L6_LISTENING,
  A1_M1_L6_SPEAKING,
  A1_M1_L6_WRITING,
  A1_M1_L6_PRONUNCIATION,
  A1_M1_L6_VOCABULARY_1,
  A1_M1_L6_VOCABULARY_2,
  A1_M1_L6_SENTENCE_COMPLETION,
  A1_M1_L6_ERROR_IDENTIFICATION,
  A1_M1_L6_GAP_FILL,
  A1_M1_L6_SENTENCE_REORDERING
];
