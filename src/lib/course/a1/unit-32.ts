import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = "Sports & Hobbies";

export const UNIT_32_EXERCISES: Exercise[] = [
  {
    id: "a1-u32-e1",
    type: "matching",
    level: "A1",
    topic: "Sports Vocabulary",
    difficulty: "easy",
    content: {
      title: "[[Sports|Deportes]] [[Vocabulary|Vocabulario]]",
      instructions: "[[Match|Une]] [[each|cada]] [[sport|deporte]] [[with|con]] [[its|su]] [[translation|traducción]]:",
      pairs: [
        { id: "p1", left: "Football", right: "Fútbol" },
        { id: "p2", left: "Swimming", right: "Natación" },
        { id: "p3", left: "Basketball", right: "Baloncesto" },
        { id: "p4", left: "Cycling", right: "Ciclismo" }
      ],
      correctAnswer: { p1: "p1", p2: "p2", p3: "p3", p4: "p4" }
    },
    topicName: "Vocabulary"
  },
  {
    id: "a1-u32-e2",
    type: "listening-comprehension",
    level: "A1",
    topic: "Sports",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[type|escribe]] [[the|el]] [[missing|faltante]] [[word|palabra]]:",
      audioUrl: "/audio/a1/unit-32/e1.mp3",
      transcript: "I love football.",
      questions: [
        {
          question: "I love ________.",
          options: ["football", "swimming", "cycling"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: "a1-u32-e3",
    type: "fill-blank",
    level: "A1",
    topic: "Grammar: Play vs Go",
    difficulty: "medium",
    content: {
      title: "[[Play|Jugar]] [[vs|contra]] [[Go|Ir]]",
      instructions: "[[Complete|Completa]] [[with|con]] '[[play|jugar]]' [[or|o]] '[[go|ir]]':",
      questions: [
        {
          question: "Every morning I ________ swimming.",
          answer: "go",
          explanation: "[[We|Nosotros]] [[use|usamos]] '[[go|ir]]' [[with|con]] [[activities|actividades]] [[ending|que terminan]] [[in|en]] -[[ing|ing]]."
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: "a1-u32-e4",
    type: "fill-blank",
    level: "A1",
    topic: "Grammar: Play vs Go",
    difficulty: "medium",
    content: {
      title: "[[Play|Jugar]] [[vs|contra]] [[Go|Ir]]",
      instructions: "[[Complete|Completa]] [[with|con]] '[[play|jugar]]' [[or|o]] '[[go|ir]]':",
      questions: [
        {
          question: "We often ________ basketball on Fridays.",
          answer: "play",
          explanation: "[[We|Nosotros]] [[use|usamos]] '[[play|jugar]]' [[with|con]] [[ball|pelota]] [[sports|deportes]]."
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: "a1-u32-e5",
    type: "multiple-choice",
    level: "A1",
    topic: "Hobbies",
    difficulty: "easy",
    content: {
      title: "[[Hiking|Senderismo]]",
      instructions: "[[How|Cómo]] [[do|se]] [[you|tú]] [[say|dices]] '[[Hacer senderismo|Hacer senderismo]]'?",
      questions: [
        {
          question: "Hacer senderismo",
          options: ["Go hiking", "Play hiking", "Do hiking"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: "a1-u32-e6",
    type: "sentence-building",
    level: "A1",
    topic: "Grammar",
    difficulty: "medium",
    content: {
      title: "[[Sentence|Frase]] [[Order|Orden]]",
      instructions: "[[Put|Pon]] [[the|las]] [[words|palabras]] [[in|en]] [[the|el]] [[correct|correcto]] [[order|orden]]:",
      words: ["They", "go", "running", "in", "the", "park"],
      correctAnswer: "They go running in the park"
    },
    topicName: "Grammar"
  },
  {
    id: "a1-u32-e7",
    type: "listening-comprehension",
    level: "A1",
    topic: "Grammar",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]] [[the|la]] [[sentence|frase]]:",
      audioUrl: "/audio/a1/unit-32/e2.mp3",
      transcript: "Let's go cycling.",
      questions: [
        {
          question: "Let's ________ cycling.",
          options: ["go", "play", "do"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: "a1-u32-e8",
    type: "matching",
    level: "A1",
    topic: "Verbs and Activities",
    difficulty: "medium",
    content: {
      title: "[[Verbs|Verbos]] [[and|y]] [[Activities|Actividades]]",
      instructions: "[[Match|Une]] [[the|el]] [[verb|verbo]] [[with|con]] [[the|la]] [[activity|actividad]]:",
      pairs: [
        { id: "p1", left: "Play", right: "Tennis" },
        { id: "p2", left: "Go", right: "Surfing" },
        { id: "p3", left: "Play", right: "Volleyball" },
        { id: "p4", left: "Go", right: "Jogging" }
      ],
      correctAnswer: { p1: "p1", p2: "p2", p3: "p3", p4: "p4" }
    },
    topicName: "Grammar"
  },
  {
    id: "a1-u32-e9",
    type: "matching",
    level: "A1",
    topic: "Hobbies",
    difficulty: "easy",
    content: {
      title: "[[Hobbies|Pasatiempos]]",
      instructions: "[[Match|Relaciona]] [[the|los]] [[hobbies|hobbies]]:",
      pairs: [
        { id: "p1", left: "Reading", right: "Lectura" },
        { id: "p2", left: "Painting", right: "Pintura" },
        { id: "p3", left: "Cooking", right: "Cocinar" },
        { id: "p4", left: "Gardening", right: "Jardinería" }
      ],
      correctAnswer: { p1: "p1", p2: "p2", p3: "p3", p4: "p4" }
    },
    topicName: "Vocabulary"
  },
  {
    id: "a1-u32-e10",
    type: "fill-blank",
    level: "A1",
    topic: "Interests",
    difficulty: "medium",
    content: {
      title: "[[Expressing|Expresando]] [[Interests|Intereses]]",
      instructions: "[[Complete|Completa]] [[the|la]] [[sentence|frase]]:",
      questions: [
        {
          question: "I ________ listening to music. (me encanta)",
          answer: "love",
          explanation: "'[[Love|Encantar]]' [[is|es]] [[stronger|más fuerte]] [[than|que]] '[[like|gustar]]'."
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: "a1-u32-e11",
    type: "multiple-choice",
    level: "A1",
    topic: "Hobbies",
    difficulty: "easy",
    content: {
      title: "[[Indoor|Interior]] [[Hobbies|Pasatiempos]]",
      instructions: "[[Which|Cuál]] [[is|es]] [[an|un]] [[indoor|de interior]] [[hobby|pasatiempo]]?",
      questions: [
        {
          question: "Indoor hobby",
          options: ["Watching TV", "Hiking", "Cycling"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: "a1-u32-e12",
    type: "translation",
    level: "A1",
    topic: "Hobbies",
    difficulty: "hard",
    content: {
      title: "[[Translation|Traducción]]",
      instructions: "[[Translate|Traduce]] [[the|la]] [[sentence|frase]]:",
      sentence: "Mi hobby es viajar.",
      correctAnswer: "My hobby is traveling"
    },
    topicName: "Vocabulary"
  },
  {
    id: "a1-u32-e13",
    type: "listening-comprehension",
    level: "A1",
    topic: "Hobbies",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Write|Escribe]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[write|escribe]] [[the|el]] [[hobby|pasatiempo]]:",
      audioUrl: "/audio/a1/unit-32/e3.mp3",
      transcript: "I like gardening.",
      questions: [
        {
          question: "I like ________.",
          options: ["gardening", "cooking", "reading"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: "a1-u32-e14",
    type: "multiple-choice",
    level: "A1",
    topic: "Hobbies",
    difficulty: "medium",
    content: {
      title: "[[Playing|Tocando]] [[the|la]] [[Guitar|Guitarra]]",
      instructions: "[[How|Cómo]] [[do|se]] [[you|tú]] [[say|dices]] '[[tocar la guitarra|tocar la guitarra]]'?",
      questions: [
        {
          question: "Tocar la guitarra",
          options: ["Playing the guitar", "Going guitar", "Doing guitar"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: "a1-u32-e15",
    type: "fill-blank",
    level: "A1",
    topic: "Likes & Dislikes",
    difficulty: "medium",
    content: {
      title: "[[Negatives|Negativos]]",
      instructions: "[[Complete|Completa]] [[the|la]] [[sentence|frase]]:",
      questions: [
        {
          question: "She doesn't like ________ (cocinar).",
          answer: "cooking",
          explanation: "[[After|Después de]] '[[like|gustar]]', [[we|nosotros]] [[use|usamos]] -[[ing|ing]]."
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: "a1-u32-e16",
    type: "sentence-building",
    level: "A1",
    topic: "Questions",
    difficulty: "medium",
    content: {
      title: "[[Question|Pregunta]] [[Order|Orden]]",
      instructions: "[[Order|Ordena]] [[the|la]] [[question|pregunta]]:",
      words: ["What", "is", "your", "favorite", "hobby", "?"],
      correctAnswer: "What is your favorite hobby?"
    },
    topicName: "Vocabulary"
  },
  {
    id: "a1-u32-e17",
    type: "fill-blank",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Gerunds|Gerundios]]",
      instructions: "[[Complete|Completa]] [[with|con]] [[the|la]] -[[ing|ing]] [[form|forma]]:",
      questions: [
        {
          question: "I enjoy ________ (read) in the morning.",
          answer: "reading"
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: "a1-u32-e18",
    type: "fill-blank",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Gerunds|Gerundios]]",
      instructions: "[[Complete|Completa]] [[with|con]] [[the|la]] -[[ing|ing]] [[form|forma]]:",
      questions: [
        {
          question: "He likes ________ (paint) pictures.",
          answer: "painting"
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: "a1-u32-e19",
    type: "true-false",
    level: "A1",
    topic: "Grammar Check",
    difficulty: "easy",
    content: {
      title: "[[Grammar|Gramática]] [[Check|Revisión]]",
      instructions: "[[Is|Es]] [[this|esta]] [[sentence|frase]] [[correct|correcta]]?",
      questions: [
        {
          question: "They don't like playing tennis.",
          answer: true
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: "a1-u32-e20",
    type: "listening-comprehension",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]]:",
      audioUrl: "/audio/a1/unit-32/e4.mp3",
      transcript: "She loves dancing.",
      questions: [
        {
          question: "She loves ________.",
          options: ["dancing", "running", "singing"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: "a1-u32-e21",
    type: "multiple-choice",
    level: "A1",
    topic: "Spelling",
    difficulty: "medium",
    content: {
      title: "[[Spelling|Ortografía]]",
      instructions: "[[Which|Cuál]] [[is|es]] [[correct|correcta]]?",
      questions: [
        {
          question: "He likes...",
          options: ["swiming", "swimming", "swim"],
          correctAnswer: 1
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: "a1-u32-e22",
    type: "translation",
    level: "A1",
    topic: "Gerunds",
    difficulty: "hard",
    content: {
      title: "[[Translation|Traducción]]",
      instructions: "[[Translate|Traduce]]:",
      sentence: "Odio limpiar.",
      correctAnswer: "I hate cleaning"
    },
    topicName: "Grammar"
  },
  {
    id: "a1-u32-e23",
    type: "sentence-building",
    level: "A1",
    topic: "Negatives",
    difficulty: "medium",
    content: {
      title: "[[Negative|Negativa]] [[Sentence|Frase]]",
      instructions: "[[Order|Ordena]] [[the|la]] [[negative|negativa]] [[sentence|frase]]:",
      words: ["We", "don't", "like", "watching", "horror", "movies"],
      correctAnswer: "We don't like watching horror movies"
    },
    topicName: "Grammar"
  },
  {
    id: "a1-u32-e24",
    type: "listening-comprehension",
    level: "A1",
    topic: "Reading & Listening",
    difficulty: "hard",
    content: {
      title: "[[Long|Larga]] [[Sentence|Frase]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]]:",
      audioUrl: "/audio/a1/unit-32/e5.mp3",
      transcript: "My favorite sport is basketball.",
      questions: [
        {
          question: "My favorite sport is ________.",
          options: ["basketball", "baseball", "football"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: "a1-u32-e25",
    type: "listening-comprehension",
    level: "A1",
    topic: "Photography",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]]:",
      audioUrl: "/audio/a1/unit-32/e6.mp3",
      transcript: "Do you like photography?",
      questions: [
        {
          question: "Do you like ________?",
          options: ["photography", "painting", "reading"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: "a1-u32-e26",
    type: "true-false",
    level: "A1",
    topic: "Reading",
    difficulty: "medium",
    content: {
      title: "[[Reading|Lectura]] [[Comprehension|Comprensión]]",
      instructions: "[[Read|Lee]] [[and|y]] [[answer|responde]] [[True|Verdadero]] [[or|o]] [[False|Falso]]:",
      text: "I love sports. Every Saturday, I go to the park with my friends. We play football for two hours. It's very fun!",
      questions: [
        {
          question: "The person plays football on Saturdays.",
          answer: true
        }
      ]
    },
    topicName: "Reading"
  },
  {
    id: "a1-u32-e27",
    type: "multiple-choice",
    level: "A1",
    topic: "Reading",
    difficulty: "medium",
    content: {
      title: "[[Reading|Lectura]] [[Comprehension|Comprensión]]",
      instructions: "[[Read|Lee]] [[and|y]] [[choose|elige]] [[the|la]] [[correct|correcta]] [[option|opción]]:",
      text: "Mark is a chef, but his hobby is not cooking. In his free time, he loves going to the beach and surfing. He thinks surfing is more exciting than cooking.",
      questions: [
        {
          question: "What is Mark's hobby?",
          options: ["Cooking", "Surfing", "Working"],
          correctAnswer: 1
        }
      ]
    },
    topicName: "Reading"
  },
  {
    id: "a1-u32-e28",
    type: "multiple-choice",
    level: "A1",
    topic: "Reading",
    difficulty: "medium",
    content: {
      title: "[[Reading|Lectura]] [[Comprehension|Comprensión]]",
      instructions: "[[Read|Lee]] [[and|y]] [[choose|elige]]:",
      text: "Anna loves reading. She sits in her garden with a good book. Reading is her favorite hobby because it is quiet and relaxing. Sometimes, she swims in the pool or plays tennis with her friends. But reading is the most peaceful activity for her. She feels happy when she reads her favorite stories.",
      questions: [
        {
          question: "Which of these is a quiet hobby for Anna?",
          options: ["Swimming", "Reading", "Tennis"],
          correctAnswer: 1
        }
      ]
    },
    topicName: "Reading"
  }
];
