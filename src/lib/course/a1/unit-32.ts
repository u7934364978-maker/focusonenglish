import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = "Sports & Hobbies";

// Helper to generate IDs
const createId = (index: number) => `a1-u32-e${index + 1}`;

export const UNIT_32_EXERCISES: Exercise[] = [
  // ==========================================
  // LESSON 1: Sports & Play/Go (0-14)
  // ==========================================
  {
    id: createId(0),
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
    id: createId(1),
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
    id: createId(2),
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
    id: createId(3),
    type: "multiple-choice",
    level: "A1",
    topic: "Hiking",
    difficulty: "easy",
    content: {
      title: "[[Hiking|Senderismo]]",
      instructions: "[[How|Cómo]] [[do|se]] [[you|tú]] [[say|dices]] '[[Hacer senderismo|Hacer senderismo]]'?",
      questions: [
        {
          question: "[[Hacer senderismo|Hacer senderismo]]",
          options: ["[[Go hiking|Hacer senderismo]]", "[[Play hiking|Play hiking]]", "[[Do hiking|Do hiking]]"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(4),
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
    id: createId(5),
    type: "fill-blank",
    level: "A1",
    topic: "Grammar: Play vs Go",
    difficulty: "medium",
    content: {
      title: "[[Table|Mesa]] [[Tennis|Tenis]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "They ________ table tennis every Tuesday.",
          answer: "play",
          explanation: "[[Games|Juegos]] [[with|con]] [[a|una]] [[ball|pelota]] [[or|o]] [[competitive|competitivos]] [[usually|normalmente]] [[use|usan]] '[[play|play]]'."
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(6),
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
    id: createId(7),
    type: "multiple-choice",
    level: "A1",
    topic: "Cycling",
    difficulty: "easy",
    content: {
      title: "[[Cycling|Ciclismo]]",
      instructions: "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]]:",
      questions: [
        {
          question: "I want to ________ cycling this weekend.",
          options: ["go", "play", "do"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(8),
    type: "fill-blank",
    level: "A1",
    topic: "Sports",
    difficulty: "easy",
    content: {
      title: "[[Sport|Deporte]] [[Name|Nombre]]",
      instructions: "[[Complete|Completa]] [[the|el]] [[name|nombre]] [[of|de]] [[the|el]] [[sport|deporte]]:",
      questions: [
        {
          question: "[[B_sk_tb_ll|B_sk_tb_ll]]",
          answer: "Basketball"
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(9),
    type: "true-false",
    level: "A1",
    topic: "Grammar Check",
    difficulty: "easy",
    content: {
      title: "[[Correct|Correcto]] [[or|o]] [[Incorrect|Incorrecto]]?",
      instructions: "[[Is|Es]] [[this|esta]] [[phrase|frase]] [[correct|correcta]]?",
      questions: [
        {
          question: "I play swimming every day.",
          answer: false,
          explanation: "[[We|Nosotros]] [[say|decimos]] '[[I go swimming|I go swimming]]'."
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(10),
    type: "matching",
    level: "A1",
    topic: "Outdoor Sports",
    difficulty: "easy",
    content: {
      title: "[[Outdoor|Al aire libre]] [[Sports|Deportes]]",
      instructions: "[[Match|Relaciona]]:",
      pairs: [
        { id: "p1", left: "Skiing", right: "Esquí" },
        { id: "p2", left: "Golf", right: "Golf" },
        { id: "p3", left: "Sailing", right: "Vela" },
        { id: "p4", left: "Rugby", right: "Rugby" }
      ],
      correctAnswer: { p1: "p1", p2: "p2", p3: "p3", p4: "p4" }
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(11),
    type: "fill-blank",
    level: "A1",
    topic: "Grammar",
    difficulty: "medium",
    content: {
      title: "[[Yoga|Yoga]]",
      instructions: "[[Complete|Completa]] (Hint: [[Yoga|Yoga]] [[uses|usa]] '[[do|hacer]]'):",
      questions: [
        {
          question: "My mother ________ yoga on Sundays.",
          answer: "does",
          explanation: "[[We|Nosotros]] [[use|usamos]] '[[do|hacer]]' [[for|para]] [[individual|individuales]] [[activities|actividades]] [[without|sin]] [[a|una]] [[ball|pelota]]."
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(12),
    type: "multiple-choice",
    level: "A1",
    topic: "Sports Equipment",
    difficulty: "medium",
    content: {
      title: "[[Equipment|Equipo]]",
      instructions: "[[What|Qué]] [[do|se]] [[you|tú]] [[need|necesitas]] [[for|para]] [[football|fútbol]]?",
      questions: [
        {
          question: "Football equipment",
          options: ["A ball", "A racket", "Skis"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(13),
    type: "sentence-building",
    level: "A1",
    topic: "Questions",
    difficulty: "medium",
    content: {
      title: "[[Questions|Preguntas]]",
      instructions: "[[Order|Ordena]] [[the|la]] [[question|pregunta]]:",
      words: ["Do", "you", "play", "tennis", "?"],
      correctAnswer: "Do you play tennis?"
    },
    topicName: "Grammar"
  },
  {
    id: createId(14),
    type: "fill-blank",
    level: "A1",
    topic: "Sports",
    difficulty: "easy",
    content: {
      title: "[[Vowels|Vocales]]",
      instructions: "[[Complete|Completa]] [[the|el]] [[sport|deporte]]:",
      questions: [
        {
          question: "[[T_nn_s|T_nn_s]]",
          answer: "Tennis"
        }
      ]
    },
    topicName: "Vocabulary"
  },

  // ==========================================
  // LESSON 2: Hobbies & Interests (15-29)
  // ==========================================
  {
    id: createId(15),
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
    id: createId(16),
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
    id: createId(17),
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
    id: createId(18),
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
    id: createId(19),
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
    id: createId(20),
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
    id: createId(21),
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
    id: createId(22),
    type: "matching",
    level: "A1",
    topic: "Hobbies",
    difficulty: "medium",
    content: {
      title: "[[Actions|Acciones]]",
      instructions: "[[Match|Une]] [[the|la]] [[action|acción]] [[with|con]] [[the|la]] [[translation|traducción]]:",
      pairs: [
        { id: "p1", left: "Drawing", right: "Dibujar" },
        { id: "p2", left: "Singing", right: "Cantar" },
        { id: "p3", left: "Dancing", right: "Bailar" },
        { id: "p4", left: "Fishing", right: "Pescar" }
      ],
      correctAnswer: { p1: "p1", p2: "p2", p3: "p3", p4: "p4" }
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(23),
    type: "fill-blank",
    level: "A1",
    topic: "Photography",
    difficulty: "medium",
    content: {
      title: "[[Photography|Fotografía]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "My hobby is taking ________.",
          answer: "photos",
          explanation: "[[Taking photos|Sacar fotos]] [[is|es]] [[a|un]] [[common|común]] [[hobby|pasatiempo]]."
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(24),
    type: "multiple-choice",
    level: "A1",
    topic: "Hobbies",
    difficulty: "easy",
    content: {
      title: "[[Movies|Películas]]",
      instructions: "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]]:",
      questions: [
        {
          question: "I love ________ movies.",
          options: ["watching", "looking", "seeing"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(25),
    type: "true-false",
    level: "A1",
    topic: "Spelling",
    difficulty: "easy",
    content: {
      title: "[[Spelling|Ortografía]] [[Check|Revisión]]",
      instructions: "[[Is|Es]] [[this|esta]] [[word|palabra]] [[correct|correcta]]? '[[Gardening|Jardinería]]'",
      questions: [
        {
          question: "[[Gardening|Jardinería]]",
          answer: true
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(26),
    type: "fill-blank",
    level: "A1",
    topic: "Chess",
    difficulty: "medium",
    content: {
      title: "[[Chess|Ajedrez]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "We ________ chess every Saturday.",
          answer: "play"
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(27),
    type: "multiple-choice",
    level: "A1",
    topic: "Hobbies",
    difficulty: "medium",
    content: {
      title: "[[Music|Música]]",
      instructions: "[[Which|Cuál]] [[is|es]] [[correct|correcta]]?",
      questions: [
        {
          question: "He likes ________ to music.",
          options: ["listening", "hearing", "sounding"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(28),
    type: "matching",
    level: "A1",
    topic: "Collecting",
    difficulty: "easy",
    content: {
      title: "[[Collecting|Coleccionar]]",
      instructions: "[[Match|Une]]:",
      pairs: [
        { id: "p1", left: "Stamps", right: "Sellos" },
        { id: "p2", left: "Coins", right: "Monedas" },
        { id: "p3", left: "Postcards", right: "Postales" }
      ],
      correctAnswer: { p1: "p1", p2: "p2", p3: "p3" }
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(29),
    type: "sentence-building",
    level: "A1",
    topic: "Hobbies",
    difficulty: "medium",
    content: {
      title: "[[Favorite|Favorito]]",
      instructions: "[[Order|Ordena]]:",
      words: ["Painting", "is", "my", "favorite", "hobby"],
      correctAnswer: "Painting is my favorite hobby"
    },
    topicName: "Vocabulary"
  },

  // ==========================================
  // LESSON 3: Grammar - Gerunds (30-44)
  // ==========================================
  {
    id: createId(30),
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
    id: createId(31),
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
    id: createId(32),
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
    id: createId(33),
    type: "multiple-choice",
    level: "A1",
    topic: "Spelling",
    difficulty: "medium",
    content: {
      title: "[[Spelling|Ortografía]]",
      instructions: "[[Which|Cuál]] [[is|es]] [[correct|correcta]]?",
      questions: [
        {
          question: "[[He|Él]] [[likes|le gusta]]...",
          options: ["[[swiming|swiming]]", "[[swimming|nadar]]", "[[swim|nadar]]"],
          correctAnswer: 1
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(34),
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
    id: createId(35),
    type: "fill-blank",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Gerunds|Gerundios]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "She loves ________ (dance).",
          answer: "dancing"
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(36),
    type: "multiple-choice",
    level: "A1",
    topic: "Gerunds",
    difficulty: "easy",
    content: {
      title: "[[Running|Correr]]",
      instructions: "[[Choose|Elige]]:",
      questions: [
        {
          question: "We enjoy ________ in the park.",
          options: ["running", "runing", "run"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(37),
    type: "sentence-building",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Likes|Gustos]]",
      instructions: "[[Order|Ordena]]:",
      words: ["I", "like", "playing", "video", "games"],
      correctAnswer: "I like playing video games"
    },
    topicName: "Grammar"
  },
  {
    id: createId(38),
    type: "fill-blank",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Gerunds|Gerundios]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "Do you like ________ (cook)?",
          answer: "cooking"
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(39),
    type: "true-false",
    level: "A1",
    topic: "Grammar",
    difficulty: "easy",
    content: {
      title: "[[Grammar|Gramática]]",
      instructions: "[[Is|Es]] '[[I love sail|I love sail]]' [[correct|correcto]]?",
      questions: [
        {
          question: "I love sail.",
          answer: false,
          explanation: "[[The|El]] [[correct|correcto]] [[is|es]] '[[I love sailing|I love sailing]]'."
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(40),
    type: "matching",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Verb|Verbo]] + -[[ing|ing]]",
      instructions: "[[Match|Une]]:",
      pairs: [
        { id: "p1", left: "Sing", right: "Singing" },
        { id: "p2", left: "Write", right: "Writing" },
        { id: "p3", left: "Stop", right: "Stopping" },
        { id: "p4", left: "Study", right: "Studying" }
      ],
      correctAnswer: { p1: "p1", p2: "p2", p3: "p3", p4: "p4" }
    },
    topicName: "Grammar"
  },
  {
    id: createId(41),
    type: "fill-blank",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Gerunds|Gerundios]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "He hates ________ (get) up early.",
          answer: "getting"
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(42),
    type: "multiple-choice",
    level: "A1",
    topic: "Gerunds",
    difficulty: "easy",
    content: {
      title: "[[Travelling|Viajar]]",
      instructions: "[[Choose|Elige]]:",
      questions: [
        {
          question: "My hobby is ________.",
          options: ["travelling", "travel", "travels"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(43),
    type: "sentence-building",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Cooking|Cocinar]]",
      instructions: "[[Order|Ordena]]:",
      words: ["She", "doesn't", "like", "cooking", "dinner"],
      correctAnswer: "She doesn't like cooking dinner"
    },
    topicName: "Grammar"
  },
  {
    id: createId(44),
    type: "fill-blank",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Fishing|Pesca]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "I enjoy ________ (fish) with my dad.",
          answer: "fishing"
        }
      ]
    },
    topicName: "Grammar"
  },

  // ==========================================
  // LESSON 4: Preference Verbs + -ing (45-59)
  // ==========================================
  {
    id: createId(45),
    type: "fill-blank",
    level: "A1",
    topic: "Negatives",
    difficulty: "medium",
    content: {
      title: "[[Negative|Negativa]] [[Sentence|Frase]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "We don't like ________ (watch) horror movies.",
          answer: "watching"
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(46),
    type: "multiple-choice",
    level: "A1",
    topic: "Preferences",
    difficulty: "easy",
    content: {
      title: "[[Love|Encantar]]",
      instructions: "[[Choose|Elige]]:",
      questions: [
        {
          question: "I love ________ to the beach.",
          options: ["going", "go", "goes"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(47),
    type: "sentence-building",
    level: "A1",
    topic: "Preferences",
    difficulty: "medium",
    content: {
      title: "[[Hate|Odiar]]",
      instructions: "[[Order|Ordena]]:",
      words: ["I", "hate", "doing", "homework"],
      correctAnswer: "I hate doing homework"
    },
    topicName: "Grammar"
  },
  {
    id: createId(48),
    type: "matching",
    level: "A1",
    topic: "Preferences",
    difficulty: "easy",
    content: {
      title: "[[Preference|Preferencia]] [[Levels|Niveles]]",
      instructions: "[[Match|Une]]:",
      pairs: [
        { id: "p1", left: "Love", right: "Encantar" },
        { id: "p2", left: "Like", right: "Gustar" },
        { id: "p3", left: "Enjoy", right: "Disfrutar" },
        { id: "p4", left: "Hate", right: "Odiar" }
      ],
      correctAnswer: { p1: "p1", p2: "p2", p3: "p3", p4: "p4" }
    },
    topicName: "Vocabulary"
  },
  {
    id: createId(49),
    type: "fill-blank",
    level: "A1",
    topic: "Preferences",
    difficulty: "medium",
    content: {
      title: "[[Enjoy|Disfrutar]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "They enjoy ________ (listen) to podcasts.",
          answer: "listening"
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(50),
    type: "true-false",
    level: "A1",
    topic: "Preferences",
    difficulty: "easy",
    content: {
      title: "[[Question|Pregunta]] [[Form|Forma]]",
      instructions: "[[Is|Es]] '[[Do you like reading?|Do you like reading?]]' [[correct|correcto]]?",
      questions: [
        {
          question: "Do you like reading?",
          answer: true
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(51),
    type: "multiple-choice",
    level: "A1",
    topic: "Preferences",
    difficulty: "easy",
    content: {
      title: "[[Painting|Pintura]]",
      instructions: "[[Choose|Elige]]:",
      questions: [
        {
          question: "Does she like ________?",
          options: ["painting", "paint", "paints"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(52),
    type: "fill-blank",
    level: "A1",
    topic: "Preferences",
    difficulty: "medium",
    content: {
      title: "[[Hiking|Senderismo]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "We love ________ (hike) in summer.",
          answer: "hiking"
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(53),
    type: "sentence-building",
    level: "A1",
    topic: "Preferences",
    difficulty: "medium",
    content: {
      title: "[[Photography|Fotografía]]",
      instructions: "[[Order|Ordena]]:",
      words: ["He", "likes", "taking", "photos"],
      correctAnswer: "He likes taking photos"
    },
    topicName: "Grammar"
  },
  {
    id: createId(54),
    type: "multiple-choice",
    level: "A1",
    topic: "Preferences",
    difficulty: "medium",
    content: {
      title: "[[Negative|Negativo]]",
      instructions: "[[Choose|Elige]]:",
      questions: [
        {
          question: "I ________ like running.",
          options: ["don't", "doesn't", "not"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(55),
    type: "fill-blank",
    level: "A1",
    topic: "Preferences",
    difficulty: "medium",
    content: {
      title: "[[Gardening|Jardinería]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "My father enjoys ________ (garden).",
          answer: "gardening"
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(56),
    type: "true-false",
    level: "A1",
    topic: "Preferences",
    difficulty: "easy",
    content: {
      title: "[[Like|Gustar]] + -[[ing|ing]]",
      instructions: "[[Is|Es]] '[[She likes sing|She likes sing]]' [[correct|correcto]]?",
      questions: [
        {
          question: "She likes sing.",
          answer: false
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(57),
    type: "sentence-building",
    level: "A1",
    topic: "Preferences",
    difficulty: "medium",
    content: {
      title: "[[Travelling|Viajar]]",
      instructions: "[[Order|Ordena]]:",
      words: ["Do", "you", "enjoy", "travelling", "?"],
      correctAnswer: "Do you enjoy travelling?"
    },
    topicName: "Grammar"
  },
  {
    id: createId(58),
    type: "fill-blank",
    level: "A1",
    topic: "Preferences",
    difficulty: "medium",
    content: {
      title: "[[Chess|Ajedrez]]",
      instructions: "[[Complete|Completa]]:",
      questions: [
        {
          question: "I hate ________ (play) chess.",
          answer: "playing"
        }
      ]
    },
    topicName: "Grammar"
  },
  {
    id: createId(59),
    type: "multiple-choice",
    level: "A1",
    topic: "Preferences",
    difficulty: "easy",
    content: {
      title: "[[Cycling|Ciclismo]]",
      instructions: "[[Choose|Elige]]:",
      questions: [
        {
          question: "They like ________ cycling.",
          options: ["going", "playing", "doing"],
          correctAnswer: 0
        }
      ]
    },
    topicName: "Grammar"
  },

  // ==========================================
  // LESSON 5: Listening & Reading (60+)
  // ==========================================
  {
    id: createId(60),
    type: "listening-comprehension",
    level: "A1",
    topic: "Sports",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[type|escribe]] [[the|el]] [[missing|faltante]] [[word|palabra]]:",
      transcript: "I love football.",
      questions: [
        {
          question: "I love ________.",
          options: ["football", "swimming", "cycling"],
          correctAnswer: 0,
          audioUrl: "/audio/a1/unit-32/e1.mp3"
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: createId(61),
    type: "listening-comprehension",
    level: "A1",
    topic: "Grammar",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]] [[the|la]] [[sentence|frase]]:",
      transcript: "Let's go cycling.",
      questions: [
        {
          question: "Let's ________ cycling.",
          options: ["go", "play", "do"],
          correctAnswer: 0,
          audioUrl: "/audio/a1/unit-32/e2.mp3"
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: createId(62),
    type: "listening-comprehension",
    level: "A1",
    topic: "Hobbies",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Write|Escribe]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[write|escribe]] [[the|el]] [[hobby|pasatiempo]]:",
      transcript: "I like gardening.",
      questions: [
        {
          question: "I like ________.",
          options: ["gardening", "cooking", "reading"],
          correctAnswer: 0,
          audioUrl: "/audio/a1/unit-32/e3.mp3"
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: createId(63),
    type: "listening-comprehension",
    level: "A1",
    topic: "Gerunds",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]]:",
      transcript: "She loves dancing.",
      questions: [
        {
          question: "She loves ________.",
          options: ["dancing", "running", "singing"],
          correctAnswer: 0,
          audioUrl: "/audio/a1/unit-32/e4.mp3"
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: createId(64),
    type: "listening-comprehension",
    level: "A1",
    topic: "Reading & Listening",
    difficulty: "hard",
    content: {
      title: "[[Long|Larga]] [[Sentence|Frase]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]]:",
      transcript: "My favorite sport is basketball.",
      questions: [
        {
          question: "My favorite sport is ________.",
          options: ["basketball", "baseball", "football"],
          correctAnswer: 0,
          audioUrl: "/audio/a1/unit-32/e5.mp3"
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: createId(65),
    type: "listening-comprehension",
    level: "A1",
    topic: "Photography",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]]:",
      transcript: "Do you like photography?",
      questions: [
        {
          question: "Do you like ________?",
          options: ["photography", "painting", "reading"],
          correctAnswer: 0,
          audioUrl: "/audio/a1/unit-32/e6.mp3"
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: createId(66),
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
    id: createId(67),
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
    id: createId(68),
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
  },
  {
    id: createId(69),
    type: "listening-comprehension",
    level: "A1",
    topic: "Hobbies",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]]:",
      transcript: "I enjoy painting.",
      questions: [
        {
          question: "I enjoy ________.",
          options: ["painting", "reading", "cooking"],
          correctAnswer: 0,
          audioUrl: "/audio/a1/unit-32/e7.mp3"
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: createId(70),
    type: "listening-comprehension",
    level: "A1",
    topic: "Sports",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]]:",
      transcript: "They play volleyball.",
      questions: [
        {
          question: "They play ________.",
          options: ["volleyball", "basketball", "football"],
          correctAnswer: 0,
          audioUrl: "/audio/a1/unit-32/e8.mp3"
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: createId(71),
    type: "multiple-choice",
    level: "A1",
    topic: "Reading",
    difficulty: "hard",
    content: {
      title: "[[Reading|Lectura]] [[Comprehension|Comprensión]]",
      instructions: "[[Read|Lee]] [[and|y]] [[choose|elige]]:",
      text: "Tom is very active. On Mondays, he goes swimming. On Wednesdays, he plays tennis. On weekends, he goes hiking with his dog. He doesn't like staying at home.",
      questions: [
        {
          question: "What does Tom do on Wednesdays?",
          options: ["Goes swimming", "Plays tennis", "Goes hiking"],
          correctAnswer: 1
        }
      ]
    },
    topicName: "Reading"
  },
  {
    id: createId(72),
    type: "true-false",
    level: "A1",
    topic: "Reading",
    difficulty: "medium",
    content: {
      title: "[[Reading|Lectura]] [[Comprehension|Comprensión]]",
      instructions: "[[Read|Lee]] [[and|y]] [[answer|responde]]:",
      text: "[[Sarah|Sarah]] [[loves|ama]] [[cooking|cocinar]] [[for|para]] [[her|su]] [[family|familia]]. [[Every|Cada]] [[Sunday|domingo]], [[she|ella]] [[makes|hace]] [[a|una]] [[big|grande]] [[dinner|cena]]. [[Her|Su]] [[favorite|favorita]] [[thing|cosa]] [[to|para]] [[cook|cocinar]] [[is|es]] [[pasta|pasta]]. [[She|Ella]] [[doesn't|no]] [[like|le gusta]] [[washing|lavar]] [[the|los]] [[dishes|platos]], [[but|pero]] [[she|ella]] [[loves|ama]] [[eating|comer]]!",
      questions: [
        {
          question: "[[Sarah|Sarah]] [[likes|le gusta]] [[washing|lavar]] [[the|los]] [[dishes|platos]].",
          answer: false
        }
      ]
    },
    topicName: "Reading"
  },
  {
    id: createId(73),
    type: "listening-comprehension",
    level: "A1",
    topic: "Preferences",
    difficulty: "medium",
    content: {
      title: "[[Listen|Escucha]] [[and|y]] [[Complete|Completa]]",
      instructions: "[[Listen|Escucha]] [[and|y]] [[complete|completa]]:",
      transcript: "We hate running.",
      questions: [
        {
          question: "We ________ running.",
          options: ["hate", "love", "like"],
          correctAnswer: 0,
          audioUrl: "/audio/a1/unit-32/e9.mp3"
        }
      ]
    },
    topicName: "Listening"
  },
  {
    id: createId(74),
    type: "multiple-choice",
    level: "A1",
    topic: "Reading",
    difficulty: "hard",
    content: {
      title: "[[Reading|Lectura]] [[Comprehension|Comprensión]]",
      instructions: "[[Read|Lee]] [[and|y]] [[choose|elige]]:",
      text: "David lives in London. He likes the city, but he loves the mountains. Every year, he goes to Switzerland for his holiday. He goes skiing in the morning and drinks hot chocolate in the afternoon. It is his favorite time of the year.",
      questions: [
        {
          question: "Where does David go for his holiday?",
          options: ["London", "Switzerland", "The city"],
          correctAnswer: 1
        }
      ]
    },
    topicName: "Reading"
  }
];
