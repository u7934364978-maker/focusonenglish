// A1 Module 1 Lesson 3: Countries and Nationalities
// Complete exercises with 6 questions each

// ============================================
// GRAMMAR EXERCISE 1: Questions with "to be"
// ============================================
export const A1_M1_L3_GRAMMAR_1 = {
  id: 'a1-m1-l3-grammar-1',
  type: 'grammar',
  title: 'Questions with "to be" - Formation and Use',
  grammarPoint: 'Yes/No Questions with "to be"',
  explanation: `To make questions with "to be", we change the word order:

Statement → Question:
• You are happy. → Are you happy?
• He is a teacher. → Is he a teacher?
• They are students. → Are they students?

Question Formation:
• Am I...? (first person singular)
• Are you...? (second person singular/plural)
• Is he/she/it...? (third person singular)
• Are we...? (first person plural)
• Are they...? (third person plural)

Short Answers:
• Yes, I am. / No, I'm not.
• Yes, you are. / No, you aren't.
• Yes, he is. / No, he isn't.
• Yes, we are. / No, we aren't.`,
  examples: [
    'Are you a student? - Yes, I am.',
    'Is she from Spain? - Yes, she is.',
    'Are they happy? - No, they aren\'t.',
    'Am I late? - No, you aren\'t.',
    'Is it cold today? - Yes, it is.'
  ],
  questions: [
    {
      id: 'a1-m1-l3-g1-q1',
      type: 'multiple-choice',
      question: '___ you from Canada?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Are',
      explanation: 'We use "Are" with "you". Are you from Canada?',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q2',
      type: 'multiple-choice',
      question: '___ he your brother?',
      options: ['Am', 'Is', 'Are', 'Be'],
      correctAnswer: 'Is',
      explanation: 'We use "Is" with "he". Is he your brother?',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q3',
      type: 'fill-blank',
      question: '___ I in the right place?',
      correctAnswer: 'Am',
      acceptableAnswers: ['Am', 'am'],
      explanation: 'We use "Am" with "I". Am I in the right place?',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q4',
      type: 'multiple-choice',
      question: 'Are they students? - Yes, ___ are.',
      options: ['they', 'we', 'you', 'I'],
      correctAnswer: 'they',
      explanation: 'In short answers, we repeat the subject pronoun: Yes, they are.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q5',
      type: 'true-false',
      question: 'To make a question with "to be", we change the word order.',
      correctAnswer: 'True',
      explanation: 'True. We put the verb "to be" before the subject: You are → Are you?',
      points: 1
    },
    {
      id: 'a1-m1-l3-g1-q6',
      type: 'fill-blank',
      question: '___ she a doctor? - No, she ___.',
      correctAnswer: 'Is, isn\'t',
      acceptableAnswers: ['Is, isn\'t', 'Is, is not', 'is, isn\'t', 'is, is not'],
      explanation: 'Is she a doctor? - No, she isn\'t.',
      points: 1
    }
  ]
};

// ============================================
// GRAMMAR EXERCISE 2: Countries and Nationalities
// ============================================
export const A1_M1_L3_GRAMMAR_2 = {
  id: 'a1-m1-l3-grammar-2',
  type: 'grammar',
  title: 'Countries and Nationalities - Formation and Use',
  grammarPoint: 'Talking about Countries and Nationalities',
  explanation: `We use different patterns to talk about where we are from:

Pattern 1: I'm from + Country
• I'm from Spain.
• She's from Japan.
• They're from Brazil.

Pattern 2: I'm + Nationality (adjective)
• I'm Spanish.
• She's Japanese.
• They're Brazilian.

Common Patterns:
• Country ending in consonant → add -an or -ian
  Mexico → Mexican, Brazil → Brazilian
• Country ending in -a → change to -an
  China → Chinese (exception!)
• Some are irregular
  Spain → Spanish, France → French

Note: Nationalities are ALWAYS capitalized in English!`,
  examples: [
    'I\'m from the United States. I\'m American.',
    'He\'s from Italy. He\'s Italian.',
    'We\'re from China. We\'re Chinese.',
    'Are you from France? Are you French?',
    'She isn\'t from Germany. She isn\'t German.'
  ],
  questions: [
    {
      id: 'a1-m1-l3-g2-q1',
      type: 'multiple-choice',
      question: 'I\'m from Mexico. I\'m ___.',
      options: ['Mexican', 'Mexicoan', 'Mexician', 'Mexico'],
      correctAnswer: 'Mexican',
      explanation: 'Mexico → Mexican. We add -an to make the nationality.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q2',
      type: 'multiple-choice',
      question: 'She\'s from Japan. She\'s ___.',
      options: ['Japan', 'Japanian', 'Japanese', 'Japanish'],
      correctAnswer: 'Japanese',
      explanation: 'Japan → Japanese. This is an irregular form.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q3',
      type: 'fill-blank',
      question: 'I\'m ___ Spain. I\'m Spanish.',
      correctAnswer: 'from',
      acceptableAnswers: ['from', 'From'],
      explanation: 'We use "from" to say where we are from: I\'m from Spain.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q4',
      type: 'true-false',
      question: 'Nationalities are always capitalized in English.',
      correctAnswer: 'True',
      explanation: 'True. We always write Spanish, Chinese, American with a capital letter.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q5',
      type: 'multiple-choice',
      question: 'He\'s from Brazil. He\'s ___.',
      options: ['Brazil', 'Brazilan', 'Brazilian', 'Brazilish'],
      correctAnswer: 'Brazilian',
      explanation: 'Brazil → Brazilian. We add -ian to make the nationality.',
      points: 1
    },
    {
      id: 'a1-m1-l3-g2-q6',
      type: 'fill-blank',
      question: 'Are you from China? Are you ___?',
      correctAnswer: 'Chinese',
      acceptableAnswers: ['Chinese', 'chinese'],
      explanation: 'China → Chinese. This is an irregular form.',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M1_L3_READING = {
  id: 'a1-m1-l3-reading-1',
  type: 'reading',
  title: 'Reading: Meet Our International Friends',
  text: `Meet Our International Friends

Hello! My name is Maria. I'm from Spain. I'm Spanish. I live in Madrid, the capital city. Madrid is beautiful and very big. I'm a student. I study English because I want to travel to other countries.

My friend's name is Kenji. He's from Japan. He's Japanese. He lives in Tokyo. Tokyo is a very modern city. Kenji is a teacher. He teaches math at a high school. His students are very smart.

I have another friend. Her name is Sophie. She's from France. She's French. She lives in Paris. Paris is famous for the Eiffel Tower. Sophie is a doctor. She works in a big hospital. She loves her job.

We also have a friend from Brazil. His name is Paulo. He's Brazilian. He lives in Rio de Janeiro. Rio is a beautiful city near the ocean. Paulo is a musician. He plays the guitar very well.

Are you from one of these countries? Where are you from? What's your nationality? We want to meet more friends from around the world!`,
  questions: [
    {
      id: 'a1-m1-l3-read-q1',
      type: 'multiple-choice',
      question: 'Where is Maria from?',
      options: ['Japan', 'Spain', 'France', 'Brazil'],
      correctAnswer: 'Spain',
      explanation: 'Maria says "I\'m from Spain."',
      points: 1
    },
    {
      id: 'a1-m1-l3-read-q2',
      type: 'multiple-choice',
      question: 'What is Kenji\'s job?',
      options: ['Student', 'Teacher', 'Doctor', 'Musician'],
      correctAnswer: 'Teacher',
      explanation: 'The text says "Kenji is a teacher. He teaches math at a high school."',
      points: 1
    },
    {
      id: 'a1-m1-l3-read-q3',
      type: 'true-false',
      question: 'Sophie is from Paris, France.',
      correctAnswer: 'True',
      explanation: 'True. The text says "She\'s from France. She lives in Paris."',
      points: 1
    },
    {
      id: 'a1-m1-l3-read-q4',
      type: 'multiple-choice',
      question: 'What does Paulo do?',
      options: ['He\'s a doctor', 'He\'s a teacher', 'He\'s a musician', 'He\'s a student'],
      correctAnswer: 'He\'s a musician',
      explanation: 'The text says "Paulo is a musician. He plays the guitar very well."',
      points: 1
    },
    {
      id: 'a1-m1-l3-read-q5',
      type: 'fill-blank',
      question: 'Maria wants to travel to other countries, so she studies ___.',
      correctAnswer: 'English',
      acceptableAnswers: ['English', 'english'],
      explanation: 'Maria says "I study English because I want to travel to other countries."',
      points: 1
    },
    {
      id: 'a1-m1-l3-read-q6',
      type: 'multiple-choice',
      question: 'Which city is near the ocean?',
      options: ['Madrid', 'Tokyo', 'Paris', 'Rio de Janeiro'],
      correctAnswer: 'Rio de Janeiro',
      explanation: 'The text says "Rio is a beautiful city near the ocean."',
      points: 1
    }
  ]
};

// ============================================
// LISTENING EXERCISE
// ============================================
export const A1_M1_L3_LISTENING = {
  id: 'a1-m1-l3-listening-1',
  type: 'listening',
  audioUrl: '/audio/a1-m1-l3-listening-1.mp3',
  transcript: `Conversation: At the International Student Meeting

Interviewer: Hello! Welcome to our international student meeting. Can you introduce yourself?

Student 1: Hi! My name is Anna. I'm from Germany. I'm German.

Interviewer: Nice to meet you, Anna! And you?

Student 2: Hello, I'm Chen. I'm from China. I'm Chinese.

Interviewer: Great! Are you both students here?

Anna: Yes, I am. I study computer science.

Chen: I'm a student too. I study business.

Interviewer: Wonderful! Do you speak English well?

Anna: I speak English, but I want to improve.

Chen: Me too. English is important for our future.

Interviewer: That's great! Are you enjoying the city?

Anna: Yes! The city is beautiful.

Chen: I agree. The people are very friendly here.

Interviewer: Thank you for talking with us. Good luck with your studies!

Anna and Chen: Thank you!`,
  duration: 50,
  allowReplay: true,
  maxReplays: 3,
  questions: [
    {
      id: 'a1-m1-l3-list-q1',
      type: 'multiple-choice',
      question: 'Where is Anna from?',
      options: ['China', 'Germany', 'Spain', 'Japan'],
      correctAnswer: 'Germany',
      explanation: 'Anna says "I\'m from Germany."',
      points: 1
    },
    {
      id: 'a1-m1-l3-list-q2',
      type: 'multiple-choice',
      question: 'What is Chen\'s nationality?',
      options: ['German', 'Japanese', 'Chinese', 'Spanish'],
      correctAnswer: 'Chinese',
      explanation: 'Chen says "I\'m from China. I\'m Chinese."',
      points: 1
    },
    {
      id: 'a1-m1-l3-list-q3',
      type: 'true-false',
      question: 'Anna and Chen are both students.',
      correctAnswer: 'True',
      explanation: 'True. Both Anna and Chen say they are students.',
      points: 1
    },
    {
      id: 'a1-m1-l3-list-q4',
      type: 'multiple-choice',
      question: 'What does Anna study?',
      options: ['Business', 'Computer science', 'English', 'Math'],
      correctAnswer: 'Computer science',
      explanation: 'Anna says "I study computer science."',
      points: 1
    },
    {
      id: 'a1-m1-l3-list-q5',
      type: 'true-false',
      question: 'Chen thinks English is important for the future.',
      correctAnswer: 'True',
      explanation: 'True. Chen says "English is important for our future."',
      points: 1
    },
    {
      id: 'a1-m1-l3-list-q6',
      type: 'multiple-choice',
      question: 'How do Anna and Chen feel about the city?',
      options: ['They don\'t like it', 'They think it\'s beautiful', 'They think it\'s boring', 'They don\'t mention it'],
      correctAnswer: 'They think it\'s beautiful',
      explanation: 'Anna says "The city is beautiful" and Chen agrees.',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M1_L3_SPEAKING = {
  id: 'a1-m1-l3-speaking-1',
  type: 'speaking',
  title: 'Speaking: Talk About Your Country and Nationality',
  prompt: 'Answer these questions about yourself. Speak clearly and try to use complete sentences.',
  instructions: 'Record your answers to the following questions. Try to speak for at least 10 seconds for each question.',
  timeLimit: 120,
  questions: [
    'What is your name?',
    'Where are you from? What country?',
    'What is your nationality?',
    'Is your city big or small?',
    'What is your city famous for?',
    'Do you like your country? Why or why not?'
  ],
  tips: [
    'Use "I\'m from..." to say your country',
    'Use "I\'m..." to say your nationality',
    'Remember to use complete sentences',
    'Speak slowly and clearly',
    'You can describe your city using adjectives like: big, small, beautiful, modern, old'
  ]
};

// ============================================
// WRITING EXERCISE
// ============================================
export const A1_M1_L3_WRITING = {
  id: 'a1-m1-l3-writing-1',
  type: 'writing',
  title: 'Writing: My Country and Nationality',
  prompt: 'Write a short paragraph (50-80 words) about yourself, your country, and your nationality. Include: your name, where you are from, your nationality, and something interesting about your country.',
  wordLimit: { min: 50, max: 120 },
  rubric: {
    content: 'Includes name, country, nationality, and interesting fact',
    grammar: 'Correct use of "to be" and country/nationality forms',
    vocabulary: 'Appropriate use of country and nationality vocabulary',
    organization: 'Clear and logical paragraph structure'
  },
  tips: [
    'Start with: "My name is..."',
    'Use: "I\'m from..." and "I\'m..." (nationality)',
    'Add details about your country: "My country is..." or "[Country name] is..."',
    'Use simple adjectives: famous, beautiful, big, small, interesting',
    'End with why you like or are proud of your country'
  ],
  exampleAnswer: 'My name is Carlos. I\'m from Mexico. I\'m Mexican. Mexico is a beautiful country in North America. My country is famous for its delicious food, like tacos and tamales. We also have amazing beaches and ancient pyramids. The capital city is Mexico City, and it\'s very big. I\'m proud to be Mexican!'
};

// ============================================
// PRONUNCIATION EXERCISE
// ============================================
export const A1_M1_L3_PRONUNCIATION = {
  id: 'a1-m1-l3-pronunciation-1',
  type: 'pronunciation',
  title: 'Pronunciation: Question Intonation',
  instructions: 'Listen and repeat each question. Pay attention to the rising intonation at the end of yes/no questions.',
  targetSentences: [
    {
      text: "Are you from Spain?",
      audioUrl: "/audio/a1-m1-l3-pronun-1.mp3",
      phonetic: "/ɑː juː frɒm speɪn/"
    },
    {
      text: "Is she Japanese?",
      audioUrl: "/audio/a1-m1-l3-pronun-2.mp3",
      phonetic: "/ɪz ʃiː ˌʤæpəˈniːz/"
    },
    {
      text: "Are they from Brazil?",
      audioUrl: "/audio/a1-m1-l3-pronun-3.mp3",
      phonetic: "/ɑː ðeɪ frɒm brəˈzɪl/"
    },
    {
      text: "Am I in the right place?",
      audioUrl: "/audio/a1-m1-l3-pronun-4.mp3",
      phonetic: "/æm aɪ ɪn ðə raɪt pleɪs/"
    },
    {
      text: "Is he German?",
      audioUrl: "/audio/a1-m1-l3-pronun-5.mp3",
      phonetic: "/ɪz hiː ˈʤɜːmən/"
    },
    {
      text: "Are we late?",
      audioUrl: "/audio/a1-m1-l3-pronun-6.mp3",
      phonetic: "/ɑː wiː leɪt/"
    }
  ],
  focusPoints: [
    'Yes/No questions have rising intonation (↗) at the end',
    'The voice goes UP at the end of the question',
    'Stress the main verb: ARE you...? IS she...?',
    'Clear pronunciation of country names and nationalities'
  ],
  tips: [
    'Your voice should go UP at the end of yes/no questions',
    'Practice the difference between: You are from Spain. (statement ↘) vs Are you from Spain? (question ↗)',
    'Listen carefully to where the stress falls in each question',
    'The rising intonation shows you are asking, not telling'
  ],
  questions: [
    {
      id: 'a1-m1-l3-pronun-q1',
      type: 'multiple-choice',
      question: 'What happens to your voice at the end of a yes/no question?',
      options: ['It goes down', 'It goes up', 'It stays flat', 'It gets louder'],
      correctAnswer: 'It goes up',
      explanation: 'Your voice goes UP (rising intonation) at the end of yes/no questions.',
      points: 1
    },
    {
      id: 'a1-m1-l3-pronun-q2',
      type: 'true-false',
      question: 'The word "Are" is stressed in the question "Are you from Spain?"',
      correctAnswer: 'True',
      explanation: 'True. We stress the verb "Are" in questions: ARE you from Spain?',
      points: 1
    },
    {
      id: 'a1-m1-l3-pronun-q3',
      type: 'multiple-choice',
      question: 'How do you pronounce "Japanese"?',
      options: ['/ˈʤæpəniːz/', '/ˌʤæpəˈniːz/', '/ʤəˈpæniːz/', '/ˈʤeɪpəniːz/'],
      correctAnswer: '/ˌʤæpəˈniːz/',
      explanation: 'Japanese is pronounced /ˌʤæpəˈniːz/ with stress on the third syllable.',
      points: 1
    },
    {
      id: 'a1-m1-l3-pronun-q4',
      type: 'fill-blank',
      question: 'Yes/No questions have ___ intonation.',
      correctAnswer: 'rising',
      acceptableAnswers: ['rising', 'Rising', 'up', 'upward'],
      explanation: 'Yes/No questions have RISING intonation (the voice goes up at the end).',
      points: 1
    },
    {
      id: 'a1-m1-l3-pronun-q5',
      type: 'multiple-choice',
      question: 'Which sentence is a question?',
      options: ['You are from Spain↘', 'Are you from Spain↗', 'You from Spain↘', 'From Spain you are↘'],
      correctAnswer: 'Are you from Spain↗',
      explanation: 'Questions have the verb first and rising intonation: Are you from Spain?',
      points: 1
    },
    {
      id: 'a1-m1-l3-pronun-q6',
      type: 'true-false',
      question: 'The pronunciation of "German" is /ˈʤɜːmən/.',
      correctAnswer: 'True',
      explanation: 'True. German is pronounced /ˈʤɜːmən/ with stress on the first syllable.',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 1: Countries
// ============================================
export const A1_M1_L3_VOCABULARY_1 = {
  id: 'a1-m1-l3-vocabulary-1',
  type: 'vocabulary',
  title: 'Vocabulary: Countries',
  words: [
    { word: 'Spain', translation: 'España', example: 'I\'m from Spain.' },
    { word: 'Japan', translation: 'Japón', example: 'Tokyo is in Japan.' },
    { word: 'China', translation: 'China', example: 'She\'s from China.' },
    { word: 'Brazil', translation: 'Brasil', example: 'Brazil is in South America.' },
    { word: 'Mexico', translation: 'México', example: 'Mexico is famous for tacos.' },
    { word: 'France', translation: 'Francia', example: 'Paris is the capital of France.' },
    { word: 'Germany', translation: 'Alemania', example: 'He\'s from Germany.' },
    { word: 'Italy', translation: 'Italia', example: 'Pizza is from Italy.' },
    { word: 'the United States', translation: 'Estados Unidos', example: 'The United States is a big country.' },
    { word: 'the United Kingdom', translation: 'Reino Unido', example: 'London is in the United Kingdom.' }
  ],
  questions: [
    {
      id: 'a1-m1-l3-v1-q1',
      type: 'multiple-choice',
      question: 'Which country is famous for pizza?',
      options: ['Spain', 'Italy', 'France', 'Mexico'],
      correctAnswer: 'Italy',
      explanation: 'Italy is famous for pizza. Pizza is from Italy.',
      points: 1
    },
    {
      id: 'a1-m1-l3-v1-q2',
      type: 'multiple-choice',
      question: 'What is the capital of France?',
      options: ['Madrid', 'Paris', 'Rome', 'London'],
      correctAnswer: 'Paris',
      explanation: 'Paris is the capital of France.',
      points: 1
    },
    {
      id: 'a1-m1-l3-v1-q3',
      type: 'fill-blank',
      question: 'Tokyo is the capital of ___.',
      correctAnswer: 'Japan',
      acceptableAnswers: ['Japan', 'japan'],
      explanation: 'Tokyo is the capital of Japan.',
      points: 1
    },
    {
      id: 'a1-m1-l3-v1-q4',
      type: 'true-false',
      question: 'Brazil is in South America.',
      correctAnswer: 'True',
      explanation: 'True. Brazil is a country in South America.',
      points: 1
    },
    {
      id: 'a1-m1-l3-v1-q5',
      type: 'multiple-choice',
      question: 'Which country is famous for tacos?',
      options: ['Spain', 'Italy', 'Mexico', 'Brazil'],
      correctAnswer: 'Mexico',
      explanation: 'Mexico is famous for tacos and other delicious food.',
      points: 1
    },
    {
      id: 'a1-m1-l3-v1-q6',
      type: 'fill-blank',
      question: 'London is in ___ ___ ___.',
      correctAnswer: 'the United Kingdom',
      acceptableAnswers: ['the United Kingdom', 'The United Kingdom', 'the UK', 'The UK', 'UK'],
      explanation: 'London is the capital of the United Kingdom (UK).',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 2: Nationalities
// ============================================
export const A1_M1_L3_VOCABULARY_2 = {
  id: 'a1-m1-l3-vocabulary-2',
  type: 'vocabulary',
  title: 'Vocabulary: Nationalities',
  words: [
    { word: 'Spanish', translation: 'español/a', example: 'I\'m Spanish. I\'m from Spain.' },
    { word: 'Japanese', translation: 'japonés/a', example: 'She\'s Japanese. She\'s from Japan.' },
    { word: 'Chinese', translation: 'chino/a', example: 'He\'s Chinese. He\'s from China.' },
    { word: 'Brazilian', translation: 'brasileño/a', example: 'They\'re Brazilian. They\'re from Brazil.' },
    { word: 'Mexican', translation: 'mexicano/a', example: 'We\'re Mexican. We\'re from Mexico.' },
    { word: 'French', translation: 'francés/a', example: 'She\'s French. She\'s from France.' },
    { word: 'German', translation: 'alemán/a', example: 'He\'s German. He\'s from Germany.' },
    { word: 'Italian', translation: 'italiano/a', example: 'I\'m Italian. I\'m from Italy.' },
    { word: 'American', translation: 'estadounidense', example: 'She\'s American. She\'s from the United States.' },
    { word: 'British', translation: 'británico/a', example: 'He\'s British. He\'s from the United Kingdom.' }
  ],
  questions: [
    {
      id: 'a1-m1-l3-v2-q1',
      type: 'multiple-choice',
      question: 'I\'m from Spain. I\'m ___.',
      options: ['Spain', 'Spanish', 'Spainish', 'Spanier'],
      correctAnswer: 'Spanish',
      explanation: 'If you\'re from Spain, you\'re Spanish.',
      points: 1
    },
    {
      id: 'a1-m1-l3-v2-q2',
      type: 'multiple-choice',
      question: 'She\'s from Japan. She\'s ___.',
      options: ['Japan', 'Japanish', 'Japanese', 'Japaner'],
      correctAnswer: 'Japanese',
      explanation: 'If you\'re from Japan, you\'re Japanese.',
      points: 1
    },
    {
      id: 'a1-m1-l3-v2-q3',
      type: 'fill-blank',
      question: 'He\'s from Germany. He\'s ___.',
      correctAnswer: 'German',
      acceptableAnswers: ['German', 'german'],
      explanation: 'If you\'re from Germany, you\'re German.',
      points: 1
    },
    {
      id: 'a1-m1-l3-v2-q4',
      type: 'true-false',
      question: 'If you\'re from the United States, you\'re American.',
      correctAnswer: 'True',
      explanation: 'True. People from the United States are American.',
      points: 1
    },
    {
      id: 'a1-m1-l3-v2-q5',
      type: 'multiple-choice',
      question: 'They\'re from Brazil. They\'re ___.',
      options: ['Brazil', 'Brazilan', 'Brazilian', 'Brazilish'],
      correctAnswer: 'Brazilian',
      explanation: 'If you\'re from Brazil, you\'re Brazilian.',
      points: 1
    },
    {
      id: 'a1-m1-l3-v2-q6',
      type: 'fill-blank',
      question: 'We\'re from China. We\'re ___.',
      correctAnswer: 'Chinese',
      acceptableAnswers: ['Chinese', 'chinese'],
      explanation: 'If you\'re from China, you\'re Chinese.',
      points: 1
    }
  ]
};

// Export all exercises for Module 1, Lesson 3


// ============================================
// SENTENCE COMPLETION EXERCISE  
// ============================================
export const A1_M1_L3_SENTENCE_COMPLETION = {
  id: 'a1-m1-l3-sentence-completion',
  type: 'sentence-completion',
  title: 'Complete with Countries and Nationalities',
  instructions: 'Complete each sentence with the correct country or nationality.',
  sentences: [
    {
      id: 'sc1',
      prompt: 'She is from France. She is ___.',
      correctCompletion: 'French',
      options: ['French', 'France', 'Franch', 'Francese'],
      explanation: 'The nationality for France is French.',
      points: 1
    },
    {
      id: 'sc2',
      prompt: 'I am ___. I am from Spain.',
      correctCompletion: 'Spanish',
      options: ['Spanish', 'Spain', 'Spainish', 'Span'],
      explanation: 'The nationality for Spain is Spanish.',
      points: 1
    },
    {
      id: 'sc3',
      prompt: 'He is Italian. He is from ___.',
      correctCompletion: 'Italy',
      options: ['Italy', 'Italian', 'Italie', 'Italya'],
      explanation: 'Italian people are from Italy.',
      points: 1
    },
    {
      id: 'sc4',
      prompt: 'They are from ___. They are British.',
      correctCompletion: 'Britain',
      options: ['Britain', 'British', 'England', 'the UK'],
      explanation: 'British people are from Britain (the UK).',
      points: 1
    },
    {
      id: 'sc5',
      prompt: 'We are German. We are from ___.',
      correctCompletion: 'Germany',
      options: ['Germany', 'German', 'Germania', 'Deutch'],
      explanation: 'German people are from Germany.',
      points: 1
    },
    {
      id: 'sc6',
      prompt: 'She is from China. She is ___.',
      correctCompletion: 'Chinese',
      options: ['Chinese', 'China', 'Chinish', 'Chinan'],
      explanation: 'The nationality for China is Chinese.',
      points: 1
    }
  ]
};

// ============================================
// ERROR IDENTIFICATION EXERCISE
// ============================================
export const A1_M1_L3_ERROR_IDENTIFICATION = {
  id: 'a1-m1-l3-error-identification',
  type: 'error-identification',
  title: 'Find Errors with Countries',
  instructions: 'Find and correct errors related to countries and nationalities.',
  sentences: [
    {
      id: 'ei1',
      sentence: 'I am from American.',
      hasError: true,
      errorWord: 'American',
      correction: 'America',
      explanation: 'Incorrect! "American" is the nationality. The country is America (or the USA). Correct: I am from America.',
      points: 1
    },
    {
      id: 'ei2',
      sentence: 'She is Japanese.',
      hasError: false,
      explanation: 'Correct! "Japanese" is the correct nationality.',
      points: 1
    },
    {
      id: 'ei3',
      sentence: 'He is from Brazilian.',
      hasError: true,
      errorWord: 'Brazilian',
      correction: 'Brazil',
      explanation: 'Incorrect! "Brazilian" is the nationality. The country is Brazil. Correct: He is from Brazil.',
      points: 1
    },
    {
      id: 'ei4',
      sentence: 'They are from Poland.',
      hasError: false,
      explanation: 'Correct! This sentence has no errors.',
      points: 1
    },
    {
      id: 'ei5',
      sentence: 'We are Turkey.',
      hasError: true,
      errorWord: 'Turkey',
      correction: 'Turkish',
      explanation: 'Incorrect! We should use the nationality "Turkish", not the country. Correct: We are Turkish.',
      points: 1
    },
    {
      id: 'ei6',
      sentence: 'I speak Russia.',
      hasError: true,
      errorWord: 'Russia',
      correction: 'Russian',
      explanation: 'Incorrect! We speak a language. The language is Russian. Correct: I speak Russian.',
      points: 1
    }
  ]
};

// ============================================
// GAP FILL TEXT EXERCISE
// ============================================
export const A1_M1_L3_GAP_FILL = {
  id: 'a1-m1-l3-gap-fill',
  type: 'gap-fill-text',
  title: 'International Friends',
  instructions: 'Fill in the gaps with the correct countries, nationalities, or languages.',
  text: `Hello! My name is Maria and I am {{1}} Spain. I am {{2}}. I speak {{3}} and English.

My best friend is from {{4}}. Her name is Sophie and she is {{5}}. She speaks French and English.

I have another friend called Hans. He is {{6}}. He is from {{7}} and he speaks German.

We all study together at university in London, {{8}}. We love learning about different cultures!

My teacher is from {{9}}. She is {{10}} and she speaks English very well. She also speaks a little {{11}} because she lived in Madrid for two years.`,
  gaps: [
    {
      id: 'gap1',
      gapNumber: 1,
      correctAnswer: 'from',
      options: ['from', 'in', 'at'],
      explanation: 'We say "I am from" + country.',
      points: 1
    },
    {
      id: 'gap2',
      gapNumber: 2,
      correctAnswer: 'Spanish',
      options: ['Spanish', 'Spain', 'Spaniard'],
      explanation: 'The nationality for Spain is Spanish.',
      points: 1
    },
    {
      id: 'gap3',
      gapNumber: 3,
      correctAnswer: 'Spanish',
      options: ['Spanish', 'Spanishs', 'other'],
      explanation: 'The language of Spain is Spanish.',
      points: 1
    },
    {
      id: 'gap4',
      gapNumber: 4,
      correctAnswer: 'France',
      options: ['France', 'French', 'Paris'],
      explanation: 'Sophie is French, so she is from France.',
      points: 1
    },
    {
      id: 'gap5',
      gapNumber: 5,
      correctAnswer: 'French',
      options: ['French', 'France', 'Francais'],
      explanation: 'The nationality for France is French.',
      points: 1
    },
    {
      id: 'gap6',
      gapNumber: 6,
      correctAnswer: 'German',
      options: ['German', 'Germany', 'Deutsch'],
      explanation: 'Hans is from Germany, so he is German.',
      points: 1
    },
    {
      id: 'gap7',
      gapNumber: 7,
      correctAnswer: 'Germany',
      options: ['Germany', 'Germanys', 'other'],
      explanation: 'German people are from Germany.',
      points: 1
    },
    {
      id: 'gap8',
      gapNumber: 8,
      correctAnswer: 'England',
      options: ['England', 'Englands', 'other'],
      acceptableAlternatives: ['the UK', 'Britain'],
      explanation: 'London is in England (the UK/Britain).',
      points: 1
    },
    {
      id: 'gap9',
      gapNumber: 9,
      correctAnswer: 'America',
      options: ['America', 'Americas', 'other'],
      acceptableAlternatives: ['the USA', 'the US'],
      explanation: 'She is American, so she is from America.',
      points: 1
    },
    {
      id: 'gap10',
      gapNumber: 10,
      correctAnswer: 'American',
      options: ['American', 'America', 'USA'],
      explanation: 'The nationality for America is American.',
      points: 1
    },
    {
      id: 'gap11',
      gapNumber: 11,
      correctAnswer: 'Spanish',
      options: ['Spanish', 'Spanishs', 'other'],
      explanation: 'The language of Spain is Spanish.',
      points: 1
    }
  ]
};

// ============================================
// COLLOCATION MATCHING EXERCISE
// ============================================
export const A1_M1_L3_COLLOCATION_MATCHING = {
  id: 'a1-m1-l3-collocation-matching',
  type: 'collocation-matching',
  title: 'Match Countries with Nationalities',
  instructions: 'Match each country with its correct nationality.',
  pairs: [
    {
      id: 'cm1',
      word: 'Japan',
      correctMatch: 'Japanese',
      distractors: ['Japanian', 'Japanish', 'Japane'],
      example: 'I am from Japan. I am Japanese.',
      points: 1
    },
    {
      id: 'cm2',
      word: 'Mexico',
      correctMatch: 'Mexican',
      distractors: ['Mexiconian', 'Mexic', 'Mexicish'],
      example: 'She is from Mexico. She is Mexican.',
      points: 1
    },
    {
      id: 'cm3',
      word: 'Canada',
      correctMatch: 'Canadian',
      distractors: ['Canadish', 'Canadan', 'Canadese'],
      example: 'He is from Canada. He is Canadian.',
      points: 1
    },
    {
      id: 'cm4',
      word: 'Egypt',
      correctMatch: 'Egyptian',
      distractors: ['Egyptish', 'Egyptan', 'Egyptese'],
      example: 'They are from Egypt. They are Egyptian.',
      points: 1
    },
    {
      id: 'cm5',
      word: 'India',
      correctMatch: 'Indian',
      distractors: ['Indish', 'Indiaese', 'Indianian'],
      example: 'We are from India. We are Indian.',
      points: 1
    },
    {
      id: 'cm6',
      word: 'Australia',
      correctMatch: 'Australian',
      distractors: ['Australish', 'Australese', 'Australan'],
      example: 'You are from Australia. You are Australian.',
      points: 1
    }
  ]
};


// ============================================
// SENTENCE REORDERING EXERCISE
// ============================================
export const A1_M1_L3_SENTENCE_REORDERING = {
  id: 'a1-m1-l3-sentence-reordering',
  type: 'sentence-reordering',
  title: 'Put the Words in Order',
  instructions: 'Arrange the words to make correct sentences about countries and nationalities.',
  items: [
    {
      id: 'sr1',
      shuffledSentences: ['from', 'She', 'Spain', 'is'],
      correctOrder: [1, 3, 0, 2],
      context: 'Make a sentence about where she is from',
      explanation: 'Correct order: She is from Spain. (Subject + verb to be + from + country)',
      points: 1
    },
    {
      id: 'sr2',
      shuffledSentences: ['Japanese', 'He', 'is'],
      correctOrder: [1, 2, 0],
      context: 'Make a sentence about his nationality',
      explanation: 'Correct order: He is Japanese. (Subject + verb to be + nationality)',
      points: 1
    },
    {
      id: 'sr3',
      shuffledSentences: ['you', 'from', 'Are', 'Italy', '?'],
      correctOrder: [2, 0, 1, 3, 4],
      context: 'Make a question about country',
      explanation: 'Correct order: Are you from Italy? (Verb to be + subject + from + country + ?)',
      points: 1
    },
    {
      id: 'sr4',
      shuffledSentences: ['are', 'They', 'Brazilian'],
      correctOrder: [1, 0, 2],
      context: 'Make a sentence about their nationality',
      explanation: 'Correct order: They are Brazilian. (Subject + verb to be + nationality)',
      points: 1
    },
    {
      id: 'sr5',
      shuffledSentences: ['French', 'Is', 'she', '?'],
      correctOrder: [1, 2, 0, 3],
      context: 'Make a question about nationality',
      explanation: 'Correct order: Is she French? (Verb to be + subject + nationality + ?)',
      points: 1
    },
    {
      id: 'sr6',
      shuffledSentences: ['We', 'from', 'China', 'are'],
      correctOrder: [0, 3, 1, 2],
      context: 'Make a sentence about where you are from',
      explanation: 'Correct order: We are from China. (Subject + verb to be + from + country)',
      points: 1
    }
  ]
};

export const A1_M1_L3_ALL_EXERCISES = [
  A1_M1_L3_GRAMMAR_1,
  A1_M1_L3_GRAMMAR_2,
  A1_M1_L3_READING,
  A1_M1_L3_LISTENING,
  A1_M1_L3_SPEAKING,
  A1_M1_L3_WRITING,
  A1_M1_L3_PRONUNCIATION,
  A1_M1_L3_VOCABULARY_1,
  A1_M1_L3_VOCABULARY_2,
  A1_M1_L3_SENTENCE_COMPLETION,
  A1_M1_L3_ERROR_IDENTIFICATION,
  A1_M1_L3_GAP_FILL,
  A1_M1_L3_SENTENCE_REORDERING,
  A1_M1_L3_COLLOCATION_MATCHING
];
