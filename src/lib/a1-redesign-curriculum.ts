import { LevelCurriculum, CurriculumTopic } from './cambridge-curriculum';

export interface A1UnitDefinition {
  id: number;
  title: string;
  topics: CurriculumTopic[];
}

export const A1_REDESIGN_SYLLABUS: A1UnitDefinition[] = [
  {
    id: 1,
    title: "Primer contacto con el inglés",
    topics: [
      {
        id: 'a1-u1-alphabet',
        name: 'The Alphabet',
        category: 'vocabulary',
        description: 'Letters and spelling',
        keywords: ['alphabet', 'spelling', 'letters', 'ABC']
      },
      {
        id: 'a1-u1-greetings',
        name: 'Greetings and Farewells',
        category: 'speaking',
        description: 'Saying hello and goodbye',
        keywords: ['hello', 'goodbye', 'hi', 'bye', 'good morning', 'good night']
      },
      {
        id: 'a1-u1-classroom',
        name: 'Classroom English',
        category: 'vocabulary',
        description: 'Common classroom phrases',
        keywords: ['repeat', 'understand', 'page', 'book', 'teacher', 'student', 'question']
      },
      {
        id: 'a1-u1-countries',
        name: 'Countries and Nationalities',
        category: 'vocabulary',
        description: 'Where people are from',
        keywords: ['Spain', 'England', 'USA', 'Mexico', 'France', 'Germany', 'Italy', 'country', 'nationality']
      },
      {
        id: 'a1-u1-numbers-0-20',
        name: 'Numbers 0-20',
        category: 'vocabulary',
        description: 'Basic counting',
        keywords: ['zero', 'one', 'two', 'ten', 'eleven', 'twelve', 'twenty', 'numbers']
      }
    ]
  },
  {
    id: 2,
    title: "Presentaciones",
    topics: [
      {
        id: 'a1-u2-be-basic',
        name: 'Verb To Be (I/You)',
        category: 'grammar',
        description: 'I am, you are',
        keywords: ['I am', 'you are', "I'm", "you're", 'verb be']
      },
      {
        id: 'a1-u2-pronouns',
        name: 'Personal Pronouns',
        category: 'grammar',
        description: 'Basic subject pronouns',
        keywords: ['I', 'you', 'he', 'she', 'it', 'pronouns']
      },
      {
        id: 'a1-u2-possessives',
        name: 'My/Your',
        category: 'grammar',
        description: 'Basic possessive adjectives',
        keywords: ['my', 'your', 'possessive']
      }
    ]
  },
  {
    id: 3,
    title: "Información personal",
    topics: [
      {
        id: 'a1-u3-be-full',
        name: 'Verb To Be (Full)',
        category: 'grammar',
        description: 'Affirmative, negative, questions',
        keywords: ['he is', 'she is', 'it is', 'we are', 'they are', 'is not', 'are not']
      },
      {
        id: 'a1-u3-wh-questions',
        name: 'Wh- Questions',
        category: 'grammar',
        description: 'What, Where, How',
        keywords: ['what', 'where', 'how', 'who', 'question words']
      },
      {
        id: 'a1-u3-jobs',
        name: 'Jobs and Occupations',
        category: 'vocabulary',
        description: 'Common professions',
        keywords: ['doctor', 'teacher', 'nurse', 'engineer', 'office', 'work', 'job']
      }
    ]
  },
  {
    id: 4,
    title: "Objetos y aula/casa",
    topics: [
      {
        id: 'a1-u4-articles',
        name: 'Articles (A/An)',
        category: 'grammar',
        description: 'Indefinite articles',
        keywords: ['a', 'an', 'singular']
      },
      {
        id: 'a1-u4-plurals',
        name: 'Plural Nouns',
        category: 'grammar',
        description: 'Regular and common irregular plurals',
        keywords: ['plurals', 's', 'es', 'children', 'people']
      },
      {
        id: 'a1-u4-demonstratives',
        name: 'This/That/These/Those',
        category: 'grammar',
        description: 'Demonstrative pronouns',
        keywords: ['this', 'that', 'these', 'those']
      },
      {
        id: 'a1-u4-objects',
        name: 'Everyday Objects',
        category: 'vocabulary',
        description: 'Common things at home and school',
        keywords: ['table', 'chair', 'pen', 'computer', 'phone', 'bag', 'window']
      },
      {
        id: 'a1-u4-colors',
        name: 'Colors',
        category: 'vocabulary',
        description: 'Basic colors',
        keywords: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'color']
      }
    ]
  },
  {
    id: 5,
    title: "Rutinas diarias y horarios",
    topics: [
      {
        id: 'a1-u5-present-simple-basic',
        name: 'Present Simple (I/You/We/They)',
        category: 'grammar',
        description: 'Basic actions and habits',
        keywords: ['work', 'study', 'live', 'eat', 'drink', 'present simple']
      },
      {
        id: 'a1-u5-adverbs-frequency',
        name: 'Adverbs of Frequency',
        category: 'grammar',
        description: 'How often you do things',
        keywords: ['always', 'usually', 'often', 'sometimes', 'never']
      },
      {
        id: 'a1-u5-time',
        name: 'Telling the Time',
        category: 'vocabulary',
        description: 'What time is it?',
        keywords: ['o clock', 'half past', 'quarter', 'minutes', 'time', 'hour']
      },
      {
        id: 'a1-u5-routines',
        name: 'Daily Activities',
        category: 'vocabulary',
        description: 'Wake up, shower, breakfast, work',
        keywords: ['wake up', 'have breakfast', 'go to work', 'shower', 'sleep']
      }
    ]
  },
  {
    id: 6,
    title: "Familia y descripciones",
    topics: [
      {
        id: 'a1-u6-have-got',
        name: 'Have/Has got',
        category: 'grammar',
        description: 'Possession',
        keywords: ['have got', 'has got', 'possession']
      },
      {
        id: 'a1-u6-possessives-adv',
        name: 'Possessives (His/Her)',
        category: 'grammar',
        description: 'Third person possessives',
        keywords: ['his', 'her', 'its', 'their', 'our']
      },
      {
        id: 'a1-u6-family',
        name: 'Family Members',
        category: 'vocabulary',
        description: 'Relatives',
        keywords: ['mother', 'father', 'brother', 'sister', 'parents', 'son', 'daughter']
      },
      {
        id: 'a1-u6-descriptions',
        name: 'Physical Descriptions',
        category: 'vocabulary',
        description: 'Tall, short, young, old',
        keywords: ['tall', 'short', 'big', 'small', 'young', 'old', 'beautiful', 'ugly']
      }
    ]
  },
  {
    id: 7,
    title: "Comida y bebida",
    topics: [
      {
        id: 'a1-u7-there-is-are',
        name: 'There is / There are',
        category: 'grammar',
        description: 'Existence',
        keywords: ['there is', 'there are', 'existence']
      },
      {
        id: 'a1-u7-some-any',
        name: 'Some and Any',
        category: 'grammar',
        description: 'Basic quantifiers',
        keywords: ['some', 'any', 'questions', 'negatives']
      },
      {
        id: 'a1-u7-likes',
        name: 'Likes and Dislikes',
        category: 'speaking',
        description: 'I like / I dont like',
        keywords: ['like', 'dont like', 'love', 'hate', 'prefer']
      },
      {
        id: 'a1-u7-food-vocab',
        name: 'Food and Drink Vocabulary',
        category: 'vocabulary',
        description: 'Common meals',
        keywords: ['bread', 'milk', 'water', 'coffee', 'apple', 'meat', 'vegetables', 'fruit']
      }
    ]
  },
  {
    id: 8,
    title: "Compras y precios",
    topics: [
      {
        id: 'a1-u8-can-ability',
        name: 'Can / Cant (Ability)',
        category: 'grammar',
        description: 'Skills and abilities',
        keywords: ['can', 'cant', 'speak', 'swim', 'drive', 'play']
      },
      {
        id: 'a1-u8-can-requests',
        name: 'Can for Requests',
        category: 'speaking',
        description: 'Polite requests',
        keywords: ['Can I have', 'Can you help', 'request', 'please']
      },
      {
        id: 'a1-u8-how-much',
        name: 'How much / How many',
        category: 'grammar',
        description: 'Asking about quantity and prices',
        keywords: ['how much', 'price', 'money', 'cost']
      },
      {
        id: 'a1-u8-clothes',
        name: 'Clothes and Fashion',
        category: 'vocabulary',
        description: 'What we wear',
        keywords: ['shirt', 't-shirt', 'jeans', 'dress', 'shoes', 'jacket', 'hat']
      },
      {
        id: 'a1-u8-numbers-100',
        name: 'Numbers to 100',
        category: 'vocabulary',
        description: 'Counting to 100',
        keywords: ['thirty', 'forty', 'fifty', 'hundred', 'numbers']
      }
    ]
  },
  {
    id: 9,
    title: "La ciudad y direcciones",
    topics: [
      {
        id: 'a1-u9-prepositions-place',
        name: 'Prepositions of Place',
        category: 'grammar',
        description: 'In, on, under, next to, etc.',
        keywords: ['in', 'on', 'under', 'next to', 'between', 'in front of', 'behind']
      },
      {
        id: 'a1-u9-imperatives',
        name: 'Imperatives',
        category: 'grammar',
        description: 'Giving directions',
        keywords: ['turn left', 'turn right', 'go straight', 'stop']
      },
      {
        id: 'a1-u9-city-places',
        name: 'City Places',
        category: 'vocabulary',
        description: 'Where we go',
        keywords: ['park', 'supermarket', 'cinema', 'hospital', 'bank', 'school', 'street']
      },
      {
        id: 'a1-u9-transport',
        name: 'Transport',
        category: 'vocabulary',
        description: 'How we move',
        keywords: ['bus', 'train', 'car', 'taxi', 'bike', 'plane']
      }
    ]
  },
  {
    id: 10,
    title: "Tiempo libre y planes simples",
    topics: [
      {
        id: 'a1-u10-present-continuous',
        name: 'Present Continuous (Introduction)',
        category: 'grammar',
        description: 'Actions happening now',
        keywords: ['now', 'at the moment', 'am doing', 'is doing', 'are doing']
      },
      {
        id: 'a1-u10-lets',
        name: 'Suggestions (Lets)',
        category: 'speaking',
        description: 'Proposing plans',
        keywords: ['lets', 'why dont we', 'shall we', 'suggestion', 'plan']
      },
      {
        id: 'a1-u10-leisure',
        name: 'Leisure and Sports',
        category: 'vocabulary',
        description: 'What we do in our free time',
        keywords: ['football', 'tennis', 'reading', 'music', 'cinema', 'hobby']
      }
    ]
  },
  {
    id: 11,
    title: "Viajes y situaciones frecuentes",
    topics: [
      {
        id: 'a1-u11-was-were',
        name: 'Was / Were',
        category: 'grammar',
        description: 'Past of verb to be',
        keywords: ['was', 'were', 'yesterday', 'past']
      },
      {
        id: 'a1-u11-travel-vocab',
        name: 'Travel Situations',
        category: 'vocabulary',
        description: 'Hotel and airport',
        keywords: ['hotel', 'airport', 'ticket', 'passport', 'reservation', 'holiday']
      },
      {
        id: 'a1-u11-dates',
        name: 'Months and Dates',
        category: 'vocabulary',
        description: 'When things happen',
        keywords: ['January', 'February', 'month', 'date', 'first', 'second']
      }
    ]
  },
  {
    id: 12,
    title: "Repaso Final y Fluidez",
    topics: [
      {
        id: 'a1-u12-review-all',
        name: 'Comprehensive Review',
        category: 'exam-practice',
        description: 'All A1 topics',
        keywords: ['review', 'summary', 'A1 level', 'comprehensive']
      }
    ]
  }
];
