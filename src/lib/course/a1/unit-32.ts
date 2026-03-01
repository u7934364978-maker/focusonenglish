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
      title: "[[Sports Vocabulary|Vocabulario de Deportes]]",
      instructions: "[[Match each sport with its translation:|Une cada deporte con su traducción:]]",
      pairs: [
        { id: "p1", left: "Football", right: "Fútbol" },
        { id: "p2", left: "Swimming", right: "Natación" },
        { id: "p3", left: "Basketball", right: "Baloncesto" },
        { id: "p4", left: "[[Cycling|Ciclismo]]", right: "Ciclismo" }
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
      title: "[[Play vs Go|Jugar vs Ir]]",
      instructions: "[[Complete with 'play' or 'go':|Completa con 'play' o 'go':]]",
      questions: [
        {
          question: "[[Every morning I ________ swimming.|Cada mañana yo ________ natación.]]",
          correctAnswer: "go",
          explanation: "[[We use 'go' with activities ending in -ing.|Usamos 'go' con actividades que terminan en -ing.]]"
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
      title: "[[Play vs Go|Jugar vs Ir]]",
      instructions: "[[Complete with 'play' or 'go':|Completa con 'play' o 'go':]]",
      questions: [
        {
          question: "[[We often ________ basketball on Fridays.|A menudo nosotros ________ baloncesto los viernes.]]",
          correctAnswer: "play",
          explanation: "[[We use 'play' with ball sports.|Usamos 'play' con deportes de pelota.]]"
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
      instructions: "[[How do you say 'Hacer senderismo'?|¿Cómo se dice 'Hacer senderismo'?]]",
      questions: [
        {
          question: "[[Hacer senderismo|Hacer senderismo]]",
          options: ["[[Go hiking|Ir de senderismo]]", "[[Play hiking|'Play' senderismo (incorrecto)]]", "[[Do hiking|'Do' senderismo (incorrecto)]]"],
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
      title: "[[Verbs and Activities|Verbos y Actividades]]",
      instructions: "[[Match the verb with the activity:|Une el verbo con la actividad:]]",
      pairs: [
        { id: "p1", left: "Play", right: "[[Tennis|Tenis]]" },
        { id: "p2", left: "Go", right: "[[Surfing|Surf]]" },
        { id: "p3", left: "Play", right: "[[Volleyball|Voleibol]]" },
        { id: "p4", left: "Go", right: "[[Jogging|Footing / Trotar]]" }
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
      title: "[[Table Tennis|Tenis de Mesa]]",
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[They ________ table tennis every Tuesday.|Ellos ________ tenis de mesa cada martes.]]",
          correctAnswer: "play",
          explanation: "[[Games with a ball or competitive sports usually use 'play'.|Los juegos con pelota o competitivos normalmente usan 'play'.]]"
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
      title: "[[Sentence Order|Orden de la Frase]]",
      instructions: "[[Put the words in the correct order:|Pon las palabras en el orden correcto:]]",
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
      instructions: "[[Choose the correct option:|Elige la opción correcta:]]",
      questions: [
        {
          question: "[[I want to ________ cycling this weekend.|Quiero ________ en bicicleta este fin de semana.]]",
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
      title: "[[Sport Name|Nombre del Deporte]]",
      instructions: "[[Complete the name of the sport:|Completa el nombre del deporte:]]",
      questions: [
        {
          question: "[[B_sk_tb_ll|B_sk_tb_ll]]",
          correctAnswer: "Basketball"
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
      title: "[[Correct or Incorrect?|¿Correcto o Incorrecto?]]",
      instructions: "[[Is this phrase correct?|¿Es esta frase correcta?]]",
      questions: [
        {
          question: "[[I play swimming every day.|Yo 'play swimming' cada día.]]",
          correctAnswer: false,
          explanation: "[[We say 'I go swimming'.|Decimos 'I go swimming'.]]"
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
      title: "[[Outdoor Sports|Deportes al Aire Libre]]",
      instructions: "[[Match:|Relaciona:]]",
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
      instructions: "[[Complete (Hint: Yoga uses 'do'):|Completa (Pista: Yoga usa 'do'):]]",
      questions: [
        {
          question: "[[My mother ________ yoga on Sundays.|Mi madre ________ yoga los domingos.]]",
          correctAnswer: "does",
          explanation: "[[We use 'do' for individual activities without a ball.|Usamos 'do' para actividades individuales sin pelota.]]"
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
      instructions: "[[What do you need for football?|¿Qué necesitas para el fútbol?]]",
      questions: [
        {
          question: "[[What do you need for football?|¿Qué necesitas para el fútbol?]]",
          options: ["[[A ball|Una pelota]]", "[[A racket|Una raqueta]]", "[[Skis|Esquís]]"],
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
      instructions: "[[Order the question:|Ordena la pregunta:]]",
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
      instructions: "[[Complete the sport name:|Completa el nombre del deporte:]]",
      questions: [
        {
          question: "[[T_nn_s|T_nn_s]]",
          correctAnswer: "Tennis"
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
      instructions: "[[Match the hobbies:|Relaciona los hobbies:]]",
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
      title: "[[Expressing Interests|Expresar Intereses]]",
      instructions: "[[Complete the sentence:|Completa la frase:]]",
      questions: [
        {
          question: "[[I ________ listening to music. (I love it)|Yo ________ escuchar música. (me encanta)]]",
          correctAnswer: "love",
          explanation: "[['Love' is stronger than 'like'.|'Love' es más fuerte que 'like'.]]"
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
      title: "[[Indoor Hobbies|Pasatiempos de Interior]]",
      instructions: "[[Which is an indoor hobby?|¿Cuál es un pasatiempo de interior?]]",
      questions: [
        {
          question: "[[Which is an indoor hobby?|¿Cuál es un pasatiempo de interior?]]",
          options: ["[[Watching TV|Ver la televisión]]", "[[Hiking|Senderismo]]", "[[Cycling|Ciclismo]]"],
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
      instructions: "[[Translate the sentence:|Traduce la frase:]]",
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
      title: "[[Playing the Guitar|Tocar la Guitarra]]",
      instructions: "[[How do you say 'tocar la guitarra'?|¿Cómo se dice 'tocar la guitarra'?]]",
      questions: [
        {
          question: "[[How do you say 'tocar la guitarra'?|¿Cómo se dice 'tocar la guitarra'?]]",
          options: ["[[Playing the guitar|Tocar la guitarra]]", "[[Going guitar|'Going' guitarra (incorrecto)]]", "[[Doing guitar|'Doing' guitarra (incorrecto)]]"],
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
      instructions: "[[Complete the sentence:|Completa la frase:]]",
      questions: [
        {
          question: "[[She doesn't like ________ (cooking).|A ella no le gusta ________ (cocinar).]]",
          correctAnswer: "cooking",
          explanation: "[[After 'like', we use -ing.|Después de 'like', usamos -ing.]]"
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
      title: "[[Question Order|Orden de Preguntas]]",
      instructions: "[[Order the question:|Ordena la pregunta:]]",
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
      instructions: "[[Match the action with the translation:|Une la acción con la traducción:]]",
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
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[My hobby is taking ________.|Mi pasatiempo es hacer ________.]]",
          correctAnswer: "photos",
          explanation: "[[Taking photos is a common hobby.|Sacar fotos es un pasatiempo común.]]"
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
      instructions: "[[Choose the correct option:|Elige la opción correcta:]]",
      questions: [
        {
          question: "[[I love ________ movies.|Me encantan las películas de ________.]]",
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
      title: "[[Spelling Check|Revisión de Ortografía]]",
      instructions: "[[Is this word correct? 'Gardening'|¿Es correcta esta palabra? 'Gardening']]",
      questions: [
        {
          question: "[[Gardening|Jardinería]]",
          correctAnswer: true
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
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[We ________ chess every Saturday.|Nosotros ________ ajedrez cada sábado.]]",
          correctAnswer: "play"
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
      instructions: "[[Which is correct?|¿Cuál es correcta?]]",
      questions: [
        {
          question: "[[He likes ________ to music.|A él le gusta ________ música.]]",
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
      instructions: "[[Order the words:|Ordena las palabras:]]",
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
      instructions: "[[Complete with the -ing form:|Completa con la forma -ing:]]",
      questions: [
        {
          question: "[[I enjoy ________ (read) in the morning.|Yo disfruto ________ (leer) por la mañana.]]",
          correctAnswer: "reading"
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
      instructions: "[[Complete with the -ing form:|Completa con la forma -ing:]]",
      questions: [
        {
          question: "[[He likes ________ (paint) pictures.|A él le gusta ________ (pintar) cuadros.]]",
          correctAnswer: "painting"
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
      title: "[[Grammar Check|Revisión Gramatical]]",
      instructions: "[[Is this sentence correct?|¿Es esta frase correcta?]]",
      questions: [
        {
          question: "[[They don't like playing tennis.|A ellos no les gusta jugar al tenis.]]",
          correctAnswer: true
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
      instructions: "[[Which is correct?|¿Cuál es correcta?]]",
      questions: [
        {
          question: "[[He likes... (which is correct?)|Él le gusta... (¿cuál es correcto?)]]",
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
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[She loves ________ (dance).|A ella le encanta ________ (bailar).]]",
          correctAnswer: "dancing"
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
      instructions: "[[Choose:|Elige:]]",
      questions: [
        {
          question: "[[We enjoy ________ in the park.|Nosotros disfrutamos ________ en el parque.]]",
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
      instructions: "[[Order the words:|Ordena las palabras:]]",
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
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[Do you like ________ (cook)?|¿Te gusta ________ (cocinar)?]]",
          correctAnswer: "cooking"
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
      instructions: "[[Is 'I love sail' correct?|¿Es 'I love sail' correcto?]]",
      questions: [
        {
          question: "[[I love sail. (Is this correct?)|¿Es correcta esta frase? 'I love sail']]",
          correctAnswer: false,
          explanation: "[[The correct form is 'I love sailing'.|La forma correcta es 'I love sailing'.]]"
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
      title: "[[Verb + -ing|Verbo + -ing]]",
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
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[He hates ________ (get) up early.|A él le horroriza levantarse temprano.]]",
          correctAnswer: "getting"
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
      instructions: "[[Choose:|Elige:]]",
      questions: [
        {
          question: "[[My hobby is ________.|Mi pasatiempo es ________.]]",
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
      instructions: "[[Order the words:|Ordena las palabras:]]",
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
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[I enjoy ________ (fish) with my dad.|Yo disfruto ________ (pescar) con mi padre.]]",
          correctAnswer: "fishing"
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
      title: "[[Negative Sentence|Frase Negativa]]",
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[We don't like ________ (watch) horror movies.|No nos gusta ________ (ver) películas de terror.]]",
          correctAnswer: "watching"
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
      instructions: "[[Choose:|Elige:]]",
      questions: [
        {
          question: "[[I love ________ to the beach.|Me encanta ________ a la playa.]]",
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
      instructions: "[[Order the words:|Ordena las palabras:]]",
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
      title: "[[Preference Levels|Niveles de Preferencia]]",
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
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[They enjoy ________ (listen) to podcasts.|Ellos disfrutan ________ (escuchar) podcasts.]]",
          correctAnswer: "listening"
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
      title: "[[Question Form|Forma de Pregunta]]",
      instructions: "[[Is '[[Do you like reading?|¿Te gusta leer?]]' correct?|¿Es '[[Do you like reading?|¿Te gusta leer?]]' correcto?]]",
      questions: [
        {
          question: "[[Do you like reading?|¿Te gusta leer?]]",
          correctAnswer: true
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
      instructions: "[[Choose:|Elige:]]",
      questions: [
        {
          question: "[[Does she like ________?|¿A ella le gusta ________?]]",
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
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[We love ________ (hike) in summer.|Nos encanta ________ (hacer senderismo) en verano.]]",
          correctAnswer: "hiking"
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
      instructions: "[[Order the words:|Ordena las palabras:]]",
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
      instructions: "[[Choose:|Elige:]]",
      questions: [
        {
          question: "[[I ________ like running.|Yo ________ gustar correr.]]",
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
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[My father enjoys ________ (garden).|Mi padre disfruta ________ (hacer jardinería).]]",
          correctAnswer: "gardening"
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
      title: "[[Like + -ing|Like + -ing]]",
      instructions: "[[Is 'She likes sing' correct?|¿Es 'She likes sing' correcto?]]",
      questions: [
        {
          question: "[[She likes sing. (Is this correct?)|¿Es correcta esta frase? 'She likes sing']]",
          correctAnswer: false
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
      instructions: "[[Order the words:|Ordena las palabras:]]",
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
      instructions: "[[Complete:|Completa:]]",
      questions: [
        {
          question: "[[I hate ________ (play) chess.|Me horroriza ________ (jugar) al ajedrez.]]",
          correctAnswer: "playing"
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
      instructions: "[[Choose:|Elige:]]",
      questions: [
        {
          question: "[[They like ________ cycling.|A ellos les gusta ________ en bicicleta.]]",
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
      title: "[[Listen and Complete|Escucha y Completa]]",
      instructions: "[[Listen and write the missing word:|Escucha y escribe la palabra que falta:]]",
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
      title: "[[Listen and Complete|Escucha y Completa]]",
      instructions: "[[Listen and complete the sentence:|Escucha y completa la frase:]]",
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
      title: "[[Listen and Write|Escucha y Escribe]]",
      instructions: "[[Listen and write the hobby:|Escucha y escribe el pasatiempo:]]",
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
      title: "[[Listen and Complete|Escucha y Completa]]",
      instructions: "[[Listen and complete:|Escucha y completa:]]",
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
      title: "[[Long Sentence|Frase Larga]]",
      instructions: "[[Listen and complete:|Escucha y completa:]]",
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
      title: "[[Listen and Complete|Escucha y Completa]]",
      instructions: "[[Listen and complete:|Escucha y completa:]]",
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
      title: "[[Reading Comprehension|Comprensión Lectora]]",
      instructions: "[[Read and answer True or False:|Lee y responde Verdadero o Falso:]]",
      text: "I love sports. Every Saturday, I go to the park with my friends. We play football for two hours. It's very fun!",
      questions: [
        {
          question: "[[The person plays football on Saturdays.|La persona juega al fútbol los sábados.]]",
          correctAnswer: true
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
      title: "[[Reading Comprehension|Comprensión Lectora]]",
      instructions: "[[Read and choose the correct option:|Lee y elige la opción correcta:]]",
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
      title: "[[Reading Comprehension|Comprensión Lectora]]",
      instructions: "[[Read and choose:|Lee y elige:]]",
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
      title: "[[Listen and Complete|Escucha y Completa]]",
      instructions: "[[Listen and complete:|Escucha y completa:]]",
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
      title: "[[Listen and Complete|Escucha y Completa]]",
      instructions: "[[Listen and complete:|Escucha y completa:]]",
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
      title: "[[Reading Comprehension|Comprensión Lectora]]",
      instructions: "[[Read and choose:|Lee y elige:]]",
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
      title: "[[Reading Comprehension|Comprensión Lectora]]",
      instructions: "[[Read and answer:|Lee y responde:]]",
      text: "Sarah loves cooking for her family. Every Sunday, she makes a big dinner. Her favorite thing to cook is pasta. She doesn't like washing the dishes, but she loves eating!",
      questions: [
        {
          question: "[[Sarah likes washing the dishes.|A Sarah le gusta lavar los platos.]]",
          correctAnswer: false
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
      title: "[[Listen and Complete|Escucha y Completa]]",
      instructions: "[[Listen and complete:|Escucha y completa:]]",
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
      title: "[[Reading Comprehension|Comprensión Lectora]]",
      instructions: "[[Read and choose:|Lee y elige:]]",
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
