// A1 Module 1 Unit 1: Greetings & Goodbyes
// Focus: Basic Greetings, Goodbyes, and the Verb 'To Be' (Am/Is/Are).
// Total: 60 Exercises

import { Exercise } from './exercise-types';

// ============================================
// SET 1: RECOGNITION & FOUNDATION (15 Questions)
// ============================================
export const A1_M1_L1_SET_1: Exercise = {
  id: 'a1-m1-l1-set-1',
  type: 'grammar',
  level: 'A1',
  topicName: 'Greetings',
  content: {
    title: 'Greetings & Basic Identity',
    instructions: 'Choose the correct greeting or form of the verb "to be".',
    grammarPoint: 'Greetings and Verb To Be (Singular)',
    explanation: `
    **Greetings:**
    - Hello / Hi (Informal)
    - Good morning (Until 12:00 PM)
    - Good afternoon (12:00 PM to 6:00 PM)
    - Good night (When leaving or going to sleep)
    
    **Verb 'To Be' (Singular):**
    - **I am** (I'm)
    - **You are** (You're)
    - **He is** (He's)
    - **She is** (She's)
    - **It is** (It's)
    `,
    questions: [
      {
        id: 'a1-m1-l1-q1',
        type: 'multiple-choice',
        question: 'It is 8:00 AM. You say: "Good ___!"',
        options: ['[[morning|mañana]]', '[[afternoon|tarde]]', '[[evening|noche (saludo)]]', '[[night|noche (despedida)]]'],
        correctAnswer: 'morning',
        explanation: 'We use "Good morning" before 12:00 PM.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q2',
        type: 'multiple-choice',
        question: 'It is 3:00 PM. You say: "Good ___!"',
        options: ['[[morning|mañana]]', '[[afternoon|tarde]]', '[[evening|noche (saludo)]]', '[[night|noche (despedida)]]'],
        correctAnswer: 'afternoon',
        explanation: 'We use "Good afternoon" between 12:00 PM and 6:00 PM.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q3',
        type: 'multiple-choice',
        question: 'When you go to sleep, you say: "Good ___!"',
        options: ['[[morning|mañana]]', '[[afternoon|tarde]]', '[[evening|noche (saludo)]]', '[[night|noche (despedida)]]'],
        correctAnswer: 'night',
        explanation: 'We use "Good night" when leaving or going to sleep.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q4',
        type: 'true-false',
        question: '"Hi" is more formal than "Hello".',
        correctAnswer: 'False',
        explanation: '"Hi" is informal. "Hello" is more neutral/formal.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q5',
        type: 'multiple-choice',
        question: 'I ___ a student.',
        options: ['[[am|soy/estoy]]', '[[is|es/está]]', '[[are|eres/estás]]'],
        correctAnswer: 'am',
        explanation: 'We always use "am" with "I".',
        points: 1
      },
      {
        id: 'a1-m1-l1-q6',
        type: 'multiple-choice',
        question: 'You ___ my friend.',
        options: ['[[am|soy/estoy]]', '[[is|es/está]]', '[[are|eres/estás]]'],
        correctAnswer: 'are',
        explanation: 'We use "are" with "you".',
        points: 1
      },
      {
        id: 'a1-m1-l1-q7',
        type: 'multiple-choice',
        question: 'He ___ a doctor.',
        options: ['[[am|soy/estoy]]', '[[is|es/está]]', '[[are|eres/estás]]'],
        correctAnswer: 'is',
        explanation: 'We use "is" with "he", "she", and "it".',
        points: 1
      },
      {
        id: 'a1-m1-l1-q8',
        type: 'multiple-choice',
        question: 'Which word matches the image of a moon? (Visual match)',
        options: ['[[Sun|Sol]]', '[[Morning|Mañana]]', '[[Night|Noche]]'],
        correctAnswer: 'Night',
        points: 1
      },
      {
        id: 'a1-m1-l1-q9',
        type: 'fill-blank',
        question: 'Hello, I ___ Sarah.',
        correctAnswer: 'am',
        acceptableAnswers: ['am', "'m"],
        points: 1
      },
      {
        id: 'a1-m1-l1-q10',
        type: 'multiple-choice',
        question: 'Match "Hola" to English:',
        options: ['[[Bye|Adiós]]', '[[Hello|Hola]]', '[[Thanks|Gracias]]'],
        correctAnswer: 'Hello',
        points: 1
      },
      {
        id: 'a1-m1-l1-q11',
        type: 'multiple-choice',
        question: 'She ___ happy.',
        options: ['[[am|soy/estoy]]', '[[is|es/está]]', '[[are|eres/estás]]'],
        correctAnswer: 'is',
        points: 1
      },
      {
        id: 'a1-m1-l1-q12',
        type: 'true-false',
        question: 'We can use "Good morning" at 11:00 AM.',
        correctAnswer: 'True',
        points: 1
      },
      {
        id: 'a1-m1-l1-q13',
        type: 'multiple-choice',
        question: 'It ___ a pen.',
        options: ['[[am|soy/estoy]]', '[[is|es/está]]', '[[are|eres/estás]]'],
        correctAnswer: 'is',
        points: 1
      },
      {
        id: 'a1-m1-l1-q14',
        type: 'fill-blank',
        question: 'How ___ you?',
        correctAnswer: 'are',
        points: 1
      },
      {
        id: 'a1-m1-l1-q15',
        type: 'multiple-choice',
        question: '___ am from Spain.',
        options: ['[[You|Tú]]', '[[I|Yo]]', '[[He|Él]]'],
        correctAnswer: 'I',
        points: 1
      }
    ]
  }
};

// ============================================
// SET 2: CONCEPT ACQUISITION (15 Questions)
// ============================================
export const A1_M1_L1_SET_2: Exercise = {
  id: 'a1-m1-l1-set-2',
  type: 'grammar',
  level: 'A1',
  topicName: 'Pronouns',
  content: {
    title: 'Identity and Contractions',
    instructions: 'Identify the correct pronoun or contraction.',
    grammarPoint: 'Subject Pronouns and Contractions',
    questions: [
      {
        id: 'a1-m1-l1-q16',
        type: 'multiple-choice',
        question: 'Select the contraction for "I am":',
        options: ["[[I'm|soy]]", "[[I's|soy]]", "[[I're|soy]]"],
        correctAnswer: "I'm",
        points: 1
      },
      {
        id: 'a1-m1-l1-q17',
        type: 'multiple-choice',
        question: 'Select the contraction for "You are":',
        options: ["[[You'm|eres]]", "[[You's|eres]]", "[[You're|eres]]"],
        correctAnswer: "You're",
        points: 1
      },
      {
        id: 'a1-m1-l1-q18',
        type: 'multiple-choice',
        question: 'Select the contraction for "He is":',
        options: ["[[He's|él es]]", "[[He're|él es]]", "[[He'm|él es]]"],
        correctAnswer: "He's",
        points: 1
      },
      {
        id: 'a1-m1-l1-q19',
        type: 'multiple-choice',
        question: 'Identify the pronoun for a girl:',
        options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso]]'],
        correctAnswer: 'She',
        points: 1
      },
      {
        id: 'a1-m1-l1-q20',
        type: 'multiple-choice',
        question: 'Identify the pronoun for a boy:',
        options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso]]'],
        correctAnswer: 'He',
        points: 1
      },
      {
        id: 'a1-m1-l1-q21',
        type: 'multiple-choice',
        question: 'Identify the pronoun for a book:',
        options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso]]'],
        correctAnswer: 'It',
        points: 1
      },
      {
        id: 'a1-m1-l1-q22',
        type: 'fill-blank',
        question: "I ___ fine, thanks.",
        correctAnswer: "am",
        acceptableAnswers: ["am", "'m"],
        points: 1
      },
      {
        id: 'a1-m1-l1-q23',
        type: 'multiple-choice',
        question: 'Nice to ___ you.',
        options: ['[[see|ver]]', '[[meet|conocer]]', '[[look|mirar]]'],
        correctAnswer: 'meet',
        points: 1
      },
      {
        id: 'a1-m1-l1-q24',
        type: 'true-false',
        question: 'We use "It is" for animals and objects.',
        correctAnswer: 'True',
        points: 1
      },
      {
        id: 'a1-m1-l1-q25',
        type: 'multiple-choice',
        question: 'Choose the correct formal greeting:',
        options: ['[[Hi!|¡Hola!]]', '[[Hey!|¡Hola!]]', '[[Good afternoon.|Buenas tardes.]]'],
        correctAnswer: 'Good afternoon.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q26',
        type: 'fill-blank',
        question: "It ___ a beautiful day.",
        correctAnswer: "is",
        points: 1
      },
      {
        id: 'a1-m1-l1-q27',
        type: 'multiple-choice',
        question: 'What is the subject pronoun for "Yo"?',
        options: ['[[You|Tú]]', '[[I|Yo]]', '[[Me|Mí]]'],
        correctAnswer: 'I',
        points: 1
      },
      {
        id: 'a1-m1-l1-q28',
        type: 'multiple-choice',
        question: 'Complete: ___ is my teacher.',
        options: ['[[I|Yo]]', '[[He|Él]]', '[[You|Tú]]'],
        correctAnswer: 'He',
        points: 1
      },
      {
        id: 'a1-m1-l1-q29',
        type: 'true-false',
        question: 'The contraction for "She is" is "She\'s".',
        correctAnswer: 'True',
        points: 1
      },
      {
        id: 'a1-m1-l1-q30',
        type: 'fill-blank',
        question: "They ___ students.",
        correctAnswer: "are",
        points: 1
      }
    ]
  }
};

// ============================================
// SET 3: CONTROLLED PRACTICE (15 Questions)
// ============================================
export const A1_M1_L1_SET_3: Exercise = {
  id: 'a1-m1-l1-set-3',
  type: 'grammar',
  level: 'A1',
  topicName: 'Sentence Structure',
  content: {
    title: 'Sentence Structure & Practice',
    instructions: 'Reorder the words or fill in the blanks to form correct sentences.',
    grammarPoint: 'Word Order and Verb To Be',
    questions: [
      {
        id: 'a1-m1-l1-q31',
        type: 'multiple-choice',
        question: 'Select the correct sentence:',
        options: ['[[I am happy.|Yo soy feliz.]]', '[[Am I happy.|¿Soy yo feliz?]]', '[[I happy am.|Yo feliz soy.]]'],
        correctAnswer: 'I am happy.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q32',
        type: 'multiple-choice',
        question: 'Select the correct sentence:',
        options: ['[[You are tall.|Tú eres alto.]]', '[[Are you tall.|¿Eres tú alto?]]', '[[You tall are.|Tú alto eres.]]'],
        correctAnswer: 'You are tall.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q33',
        type: 'fill-blank',
        question: "___ is a cat.",
        correctAnswer: "It",
        points: 1
      },
      {
        id: 'a1-m1-l1-q34',
        type: 'multiple-choice',
        question: 'Goodbye, see ___ later!',
        options: ['[[me|me]]', '[[you|te]]', '[[it|lo]]'],
        correctAnswer: 'you',
        points: 1
      },
      {
        id: 'a1-m1-l1-q35',
        type: 'fill-blank',
        question: "He ___ (is) from Mexico.",
        correctAnswer: "is",
        points: 1
      },
      {
        id: 'a1-m1-l1-q36',
        type: 'multiple-choice',
        question: 'Which is correct?',
        options: ["[[I'm fine.|Estoy bien.]]", "[[I is fine.|Estoy bien.]]", "[[I are fine.|Estoy bien.]]"],
        correctAnswer: "I'm fine.",
        points: 1
      },
      {
        id: 'a1-m1-l1-q37',
        type: 'fill-blank',
        question: "___ are welcome.",
        correctAnswer: "You",
        points: 1
      },
      {
        id: 'a1-m1-l1-q38',
        type: 'multiple-choice',
        question: 'It is 7:00 PM. You arrive. You say:',
        options: ['[[Good morning.|Buenos días.]]', '[[Good afternoon.|Buenas tardes.]]', '[[Good evening.|Buenas noches.]]'],
        correctAnswer: 'Good evening.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q39',
        type: 'multiple-choice',
        question: 'It is 11:00 PM. You leave. You say:',
        options: ['[[Good night.|Buenas noches.]]', '[[Good evening.|Buenas noches.]]', '[[Good afternoon.|Buenas tardes.]]'],
        correctAnswer: 'Good night.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q40',
        type: 'fill-blank',
        question: "She ___ (is) a student.",
        correctAnswer: "is",
        points: 1
      },
      {
        id: 'a1-m1-l1-q41',
        type: 'multiple-choice',
        question: 'Order the words: [am / I / Italian / .]',
        options: ['[[Italian I am.|Italiano yo soy.]]', '[[I Italian am.|Yo italiano soy.]]', '[[I am Italian.|Yo soy italiano.]]'],
        correctAnswer: 'I am Italian.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q42',
        type: 'multiple-choice',
        question: 'Order the words: [is / He / cool / .]',
        options: ['[[He is cool.|Él es genial.]]', '[[Is he cool.|¿Es él genial?]]', '[[Cool he is.|Genial él es.]]'],
        correctAnswer: 'He is cool.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q43',
        type: 'fill-blank',
        question: "___ name is John.",
        correctAnswer: "My",
        points: 1
      },
      {
        id: 'a1-m1-l1-q44',
        type: 'multiple-choice',
        question: 'What is the opposite of "Hello"?',
        options: ['[[Hi|Hola]]', '[[Goodbye|Adiós]]', '[[Good morning|Buenos días]]'],
        correctAnswer: 'Goodbye',
        points: 1
      },
      {
        id: 'a1-m1-l1-q45',
        type: 'true-false',
        question: '"I" is always capitalized in English.',
        correctAnswer: 'True',
        points: 1
      }
    ]
  }
};

// ============================================
// SET 4: COMMUNICATION & MASTERY (15 Questions)
// ============================================
export const A1_M1_L1_SET_4: Exercise = {
  id: 'a1-m1-l1-set-4',
  type: 'grammar',
  level: 'A1',
  topicName: 'Mastery',
  content: {
    title: 'Social Interaction & Mastery',
    instructions: 'Apply your knowledge in social situations.',
    grammarPoint: 'Common Phrases and Integration',
    questions: [
      {
        id: 'a1-m1-l1-q46',
        type: 'multiple-choice',
        question: 'A: "How are you?" B: "___"',
        options: ['[[I am fine, thanks.|Estoy bien, gracias.]]', '[[I am John.|Yo soy John.]]', '[[Good night.|Buenas noches.]]'],
        correctAnswer: 'I am fine, thanks.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q47',
        type: 'multiple-choice',
        question: 'A: "What is your name?" B: "___"',
        options: ['[[I am Maria.|Yo soy Maria.]]', '[[I am fine.|Estoy bien.]]', '[[See you!|¡Nos vemos!]]'],
        correctAnswer: 'I am Maria.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q48',
        type: 'multiple-choice',
        question: 'A: "Nice to meet you." B: "___"',
        options: ['[[Nice to meet you too.|Encantado de conocerte también.]]', '[[Hello.|Hola.]]', '[[Good morning.|Buenos días.]]'],
        correctAnswer: 'Nice to meet you too.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q49',
        type: 'fill-blank',
        question: "See you ___ (later).",
        correctAnswer: "later",
        points: 1
      },
      {
        id: 'a1-m1-l1-q50',
        type: 'multiple-choice',
        question: 'Choose the best greeting for a job interview:',
        options: ['[[Hey!|¡Hola! (informal)]]', '[[Hello, good morning.|Hola, buenos días.]]', '[[Sup?|¿Qué pasa? (muy informal)]]'],
        correctAnswer: 'Hello, good morning.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q51',
        type: 'fill-blank',
        question: "I ___ (am) a student at Focus English.",
        correctAnswer: "am",
        points: 1
      },
      {
        id: 'a1-m1-l1-q52',
        type: 'multiple-choice',
        question: 'Translate: "Ella es mi amiga."',
        options: ['[[She is my friend.|Ella es mi amiga.]]', '[[He is my friend.|Él es mi amigo.]]', '[[It is my friend.|Eso es mi amigo.]]'],
        correctAnswer: 'She is my friend.',
        points: 1
      },
      {
        id: 'a1-m1-l1-q53',
        type: 'multiple-choice',
        question: 'Translate: "¿Cómo estás?"',
        options: ['[[How are you?|¿Cómo estás?]]', '[[Who are you?|¿Quién eres?]]', '[[Where are you?|¿Dónde estás?]]'],
        correctAnswer: 'How are you?',
        points: 1
      },
      {
        id: 'a1-m1-l1-q54',
        type: 'fill-blank',
        question: "___ are my friend.",
        correctAnswer: "You",
        points: 1
      },
      {
        id: 'a1-m1-l1-q55',
        type: 'multiple-choice',
        question: 'Find the error: "I are happy."',
        options: ['[[I are|yo son]]', '[[I am|yo soy]]', '[[I is|yo es]]'],
        correctAnswer: 'I am',
        points: 1
      },
      {
        id: 'a1-m1-l1-q56',
        type: 'multiple-choice',
        question: 'Find the error: "He am tall."',
        options: ['[[He am|él soy]]', '[[He is|él es]]', '[[He are|él eres]]'],
        correctAnswer: 'He is',
        points: 1
      },
      {
        id: 'a1-m1-l1-q57',
        type: 'true-false',
        question: 'In English, we say "I have 20 years" for age.',
        correctAnswer: 'False',
        explanation: 'No, we say "I am 20 years old".',
        points: 1
      },
      {
        id: 'a1-m1-l1-q58',
        type: 'multiple-choice',
        question: 'Complete the dialogue: A: "Goodbye!" B: "___"',
        options: ['[[Bye! See you!|¡Adiós! ¡Nos vemos!]]', '[[Hello!|¡Hola!]]', '[[Good morning!|¡Buenos días!]]'],
        correctAnswer: 'Bye! See you!',
        points: 1
      },
      {
        id: 'a1-m1-l1-q59',
        type: 'multiple-choice',
        question: 'Which is an object?',
        options: ['[[It|Eso]]', '[[He|Él]]', '[[She|Ella]]'],
        correctAnswer: 'It',
        points: 1
      },
      {
        id: 'a1-m1-l1-q60',
        type: 'multiple-choice',
        question: 'Final test: "I ___ John and you ___ Maria."',
        options: ['[[am / are|soy / eres]]', '[[is / are|es / eres]]', '[[am / is|soy / es]]'],
        correctAnswer: 'am / are',
        points: 1
      }
    ]
  }
};

// ============================================
// CONSOLIDATED EXERCISES
// ============================================
export const A1_M1_L1_ALL_EXERCISES: Exercise[] = [
  A1_M1_L1_SET_1,
  A1_M1_L1_SET_2,
  A1_M1_L1_SET_3,
  A1_M1_L1_SET_4
];
