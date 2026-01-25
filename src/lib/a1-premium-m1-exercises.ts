import { Exercise } from './exercise-generator';

export const A1_PREMIUM_MONTH1_EXERCISES: Record<string, any[]> = {
  // Semana 1: Saludos y el alfabeto
  "week1": [
    {
      id: "a1-p-w1-ex1",
      type: "multiple-choice",
      title: "Basic Greetings",
      instructions: "Choose the correct greeting for the situation.",
      questions: [
        {
          id: "q1",
          question: "How do you say 'Hola' in the morning?",
          options: ["Good night", "Good afternoon", "Good morning", "Goodbye"],
          correctAnswer: "Good morning",
          explanation: "'Good morning' se usa desde el amanecer hasta el mediodía."
        },
        {
          id: "q2",
          question: "What is a common response to 'How are you?'",
          options: ["I am fine, thank you", "I am a student", "I am from Spain", "I am 20 years old"],
          correctAnswer: "I am fine, thank you",
          explanation: "Es la respuesta estándar y educada para preguntar cómo estás."
        }
      ]
    },
    {
      id: "a1-p-w1-ex2",
      type: "pronunciation-practice",
      title: "The Alphabet",
      targetSentences: [
        { text: "A - B - C", phonetic: "/eɪ/ - /biː/ - /siː/", audioUrl: "" },
        { text: "D - E - F", phonetic: "/diː/ - /iː/ - /ɛf/", audioUrl: "" }
      ]
    }
  ],
  
  // Semana 2: To Be y Pronombres
  "week2": [
    {
      id: "a1-p-w2-ex1",
      type: "fill-blank",
      title: "Verb To Be - Affirmative",
      instructions: "Complete the sentences with am, is, or are.",
      questions: [
        {
          id: "q1",
          text: "I ___ a student.",
          correctAnswer: "am",
          explanation: "Con 'I' siempre usamos 'am'."
        },
        {
          id: "q2",
          text: "She ___ my friend.",
          correctAnswer: "is",
          explanation: "Con 'He, She, It' usamos 'is'."
        },
        {
          id: "q3",
          text: "They ___ from Madrid.",
          correctAnswer: "are",
          explanation: "Con 'You, We, They' usamos 'are'."
        }
      ]
    }
  ],

  // Semana 3: Números y Colores
  "week3": [
    {
      id: "a1-p-w3-ex1",
      type: "matching",
      title: "Colors Matching",
      pairs: [
        { word: "Red", match: "Rojo" },
        { word: "Blue", match: "Azul" },
        { word: "Yellow", match: "Amarillo" },
        { word: "Green", match: "Verde" }
      ]
    }
  ],

  // Semana 4: Repaso y Actividades Premium
  "week4": [
    {
      id: "a1-p-w4-wordsearch",
      type: "word-search",
      title: "Vocabulary Search: Foundations",
      instructions: "Find the 8 basic words from Month 1.",
      words: ["HELLO", "NAME", "STUDENT", "GREEN", "THREE", "HAPPY", "BIRD", "RED"],
      gridSize: 10,
      clues: [
        { word: "HELLO", clue: "Un saludo común" },
        { word: "NAME", clue: "Lo que usas para identificarte" },
        { word: "STUDENT", clue: "Alguien que aprende" },
        { word: "GREEN", clue: "El color de la hierba" },
        { word: "THREE", clue: "El número después del dos" },
        { word: "HAPPY", clue: "Lo opuesto de triste" },
        { word: "BIRD", clue: "Animal que vuela" },
        { word: "RED", clue: "El color del tomate" }
      ],
      points: 20
    },
    {
      id: "a1-p-w4-crossword",
      type: "crossword",
      title: "Month 1 Review Crossword",
      instructions: "Solve the crossword using basic vocabulary.",
      items: [
        { word: "YELLOW", clue: "The color of the sun", direction: "across", row: 0, col: 0 },
        { word: "EIGHT", clue: "Seven plus one", direction: "down", row: 0, col: 1 },
        { word: "ORANGE", clue: "A fruit and a color", direction: "across", row: 2, col: 0 },
        { word: "APPLE", clue: "Newton's fruit", direction: "down", row: 2, col: 2 }
      ],
      points: 20
    }
  ]
};
