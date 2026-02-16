import { Exercise } from '@/lib/exercise-generator';

export const UNIT_2_EXERCISES: Exercise[] = [
  // SECTION 1: COUNTRIES & NATIONALITIES (Vocabulary)
  {
    "id": "a1-u2-e1",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "medium",
    "content": {
      "title": "[[Where|De dónde]] [[are|eres]] [[you|tú]] [[from|de]]?",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[nationality|nacionalidad]].",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|soy]] [[from|de]] [[Spain|España]]. [[I|Yo]] [[am|soy]] (_____).",
          "options": [
            "[[Spanish|Español]]",
            "[[France|Francia]]",
            "[[Mexico|México]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Spanish|Español]] [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[for|para]] [[Spain|España]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "medium",
    "content": {
      "title": "[[Country|País]] [[Origins|Orígenes]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[country|país]].",
      "questions": [
        {
          "question": "[[He|Él]] [[is|es]] [[Mexican|mexicano]]. [[He|Él]] [[is|es]] [[from|de]] (_____).",
          "options": [
            "[[Italy|Italia]]",
            "[[Germany|Alemania]]",
            "[[Mexico|México]]"
          ],
          "correctAnswer": 2,
          "explanation": "[[Mexican|Mexicano]] [[means|significa]] [[from|de]] [[Mexico|México]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },

  // SECTION 2: VERB TO BE - HE/SHE/IT (Grammar)
  {
    "id": "a1-u2-e3",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[He|Él]] / [[She|Ella]] / [[It|Eso]]",
      "instructions": "[[Complete|Completa]] [[with|con]] '[[is|es]]'.",
      "questions": [
        {
          "question": "[[She|Ella]] ____ [[from|de]] [[London|Londres]].",
          "correctAnswer": "is",
          "explanation": "[[With|Con]] '[[she|ella]]', [[we|nosotros]] [[use|usamos]] '[[is|es]]'."
        },
        {
          "question": "[[It|Eso]] ____ [[a|un]] [[big|grande]] [[country|país]].",
          "correctAnswer": "is",
          "explanation": "[[With|Con]] '[[it|eso]]', [[we|nosotros]] [[use|usamos]] '[[is|es]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },

  // SECTION 3: NUMBERS 1-10 (Vocabulary)
  {
    "id": "a1-u2-e4",
    "type": "matching",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "content": {
      "title": "[[Numbers|Números]] 1-10",
      "instructions": "[[Match|Empareja]] [[the|el]] [[number|número]] [[with|con]] [[the|la]] [[word|palabra]].",
      "pairs": [
        { "left": "3", "right": "[[Three|Tres]]" },
        { "left": "7", "right": "[[Seven|Siete]]" },
        { "left": "10", "right": "[[Ten|Diez]]" },
        { "left": "5", "right": "[[Five|Cinco]]" }
      ]
    },
    "topicName": "Vocabulary"
  },

  // SECTION 4: READING COMPREHENSION (Two-phase)
  {
    "id": "a1-u2-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Meet|Conoce]] [[my|mi]] [[friends|amigos]]! [[This|Esta]] [[is|es]] [[Maria|María]]. [[She|Ella]] [[is|es]] [[Italian|italiana]]. [[She|Ella]] [[is|es]] [[from|de]] [[Rome|Roma]]. [[This|Este]] [[is|es]] [[Hans|Hans]]. [[He|Él]] [[is|es]] [[German|alemán]]. [[He|Él]] [[is|es]] [[from|de]] [[Berlin|Berlín]]. [[We|Nosotros]] [[are|somos]] [[students|estudiantes]].",
    "content": {
      "title": "[[International|Internacionales]] [[Friends|Amigos]]",
      "instructions": "[[Read|Lee]] [[about|sobre]] [[the|los]] [[friends|amigos]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[Maria|María]] [[from|de]]?",
          "options": [
            "[[Berlin|Berlín]]",
            "[[Rome|Roma]]",
            "[[London|Londres]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: '[[She|Ella]] [[is|es]] [[from|de]] [[Rome|Roma]]'."
        },
        {
          "question": "[[What|Cuál]] [[is|es]] [[Hans's|de Hans]] [[nationality|nacionalidad]]?",
          "options": [
            "[[Italian|Italiana]]",
            "[[Spanish|Española]]",
            "[[German|Alemana]]"
          ],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: '[[He|Él]] [[is|es]] [[German|alemán]]'."
        },
        {
          "question": "[[What|Qué]] [[are|son]] [[they|ellos]]?",
          "options": [
            "[[Teachers|Profesores]]",
            "[[Doctors|Doctores]]",
            "[[Students|Estudiantes]]"
          ],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: '[[We|Nosotros]] [[are|somos]] [[students|estudiantes]]'."
        }
      ]
    },
    "topicName": "Reading"
  },

  // SECTION 5: SENTENCE BUILDING (Grammar)
  {
    "id": "a1-u2-e6",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Plural|Plural]] [[Subjects|Sujetos]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[sentence|oración]].",
      "correctSentence": "[[We|Nosotros]] [[are|somos]] [[from|de]] [[Italy|Italia]].",
      "words": ["[[are|somos]]", "[[Italy|Italia]].", "[[We|Nosotros]]", "[[from|de]]"]
    },
    "topicName": "Grammar"
  }
];
