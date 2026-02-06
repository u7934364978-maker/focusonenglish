import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 4;
const LEVEL = 'b1';

// SHARDS 1-2: Humanities & Arts Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'Artistic Styles & Techniques',
  transcript: `Today, we're exploring several artistic styles and techniques that have influenced the world of art throughout history. Let's start with Impressionism, which emerged in the late 19th century. Artists like Claude Monet used bright colors and bold brush strokes to capture light and movement. They often painted outdoors to better observe nature. Next, we have Cubism, famously associated with Pablo Picasso. This style breaks objects into geometric shapes and can be seen from multiple viewpoints at once. Moving on to Surrealism, which began in the 1920s. Artists like Salvador Dalí presented dream-like scenes, often with bizarre, illogical elements. A more contemporary style, Abstract Expressionism, focuses on spontaneous, automatic or subconscious creations. Jackson Pollock used this method, where he 'dripped' or 'poured' paint onto canvas. Finally, Digital Art, a newer form, uses digital technology as part of the creation process. This can include anything from computer graphics to 3D modeling. Each of these techniques offers a distinctive way of seeing and interpreting the world.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 1),
    "type": "multiple-choice",
    "question": "What technique did Impressionist artists often use to observe nature?",
    "options": [
      "Painting indoors",
      "Using soft colors",
      "Painting outdoors",
      "Focusing on urban scenes"
    ],
    "correctAnswer": "Painting outdoors",
    "explanation": "Los impresionistas pintaban al aire libre para observar mejor la naturaleza.",
    "context": "They often painted outdoors to better observe nature.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 2),
    "type": "multiple-choice",
    "question": "Which artist is associated with Cubism?",
    "options": [
      "Claude Monet",
      "Salvador Dalí",
      "Jackson Pollock",
      "Pablo Picasso"
    ],
    "correctAnswer": "Pablo Picasso",
    "explanation": "Pablo Picasso es uno de los artistas más destacados del cubismo.",
    "context": "Cubism, famously associated with Pablo Picasso.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 3),
    "type": "multiple-choice",
    "question": "What is a characteristic of Surrealism?",
    "options": [
      "Bizarre, illogical elements",
      "Geometric shapes",
      "Bright colors",
      "Automatic creation"
    ],
    "correctAnswer": "Bizarre, illogical elements",
    "explanation": "El surrealismo presenta escenas de sueño a menudo con elementos extraños e ilógicos.",
    "context": "Artists like Salvador Dalí presented dream-like scenes, often with bizarre, illogical elements.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 4),
    "type": "multiple-choice",
    "question": "Who is known for using Abstract Expressionism?",
    "options": [
      "Claude Monet",
      "Pablo Picasso",
      "Salvador Dalí",
      "Jackson Pollock"
    ],
    "correctAnswer": "Jackson Pollock",
    "explanation": "Jackson Pollock es famoso por su método de goteo en el expresionismo abstracto.",
    "context": "Jackson Pollock used this method, where he 'dripped' or 'poured' paint onto canvas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 5),
    "type": "multiple-choice",
    "question": "What defines Digital Art?",
    "options": [
      "Use of light",
      "Traditional paints",
      "Geometric designs",
      "Digital technology"
    ],
    "correctAnswer": "Digital technology",
    "explanation": "El arte digital utiliza tecnología digital como parte del proceso creativo.",
    "context": "Digital Art, a newer form, uses digital technology as part of the creation process.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 6),
    "type": "multiple-choice",
    "question": "Which movement aimed to capture light and movement in their work?",
    "options": [
      "Cubism",
      "Impressionism",
      "Surrealism",
      "Abstract Expressionism"
    ],
    "correctAnswer": "Impressionism",
    "explanation": "El impresionismo se centró en capturar la luz y el movimiento.",
    "context": "Artists like Claude Monet used bright colors and bold brush strokes to capture light and movement.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 7),
    "type": "multiple-choice",
    "question": "Which art style breaks objects into geometric shapes?",
    "options": [
      "Surrealism",
      "Cubism",
      "Impressionism",
      "Digital Art"
    ],
    "correctAnswer": "Cubism",
    "explanation": "El cubismo rompe objetos en formas geométricas para ofrecer múltiples puntos de vista.",
    "context": "This style breaks objects into geometric shapes and can be seen from multiple viewpoints at once.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 8),
    "type": "multiple-choice",
    "question": "From which decade did Surrealism begin?",
    "options": [
      "1940s",
      "1920s",
      "1890s",
      "1960s"
    ],
    "correctAnswer": "1920s",
    "explanation": "El surrealismo comenzó en la década de 1920.",
    "context": "Surrealism, which began in the 1920s.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 9),
    "type": "multiple-choice",
    "question": "Which artist is known for 'dripping' or 'pouring' paint?",
    "options": [
      "Jackson Pollock",
      "Claude Monet",
      "Pablo Picasso",
      "Salvador Dalí"
    ],
    "correctAnswer": "Jackson Pollock",
    "explanation": "Jackson Pollock es conocido por su método de 'goteo' o 'vertido' de pintura.",
    "context": "Jackson Pollock used this method, where he 'dripped' or 'poured' paint onto canvas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 10),
    "type": "multiple-choice",
    "question": "Which style is known for spontaneous creation?",
    "options": [
      "Abstract Expressionism",
      "Cubism",
      "Surrealism",
      "Impressionism"
    ],
    "correctAnswer": "Abstract Expressionism",
    "explanation": "El expresionismo abstracto se centra en creaciones espontáneas o automáticas.",
    "context": "Abstract Expressionism focuses on spontaneous, automatic or subconscious creations.",
    "points": 1
  }
]
};
const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Museum Audio Guide',
  transcript: `Welcome to the City Art Museum. Our first stop is in the Modern Art Gallery, featuring works from the 20th century. You'll see famous pieces by artists like Pablo Picasso and Jackson Pollock. Notice how Picasso's use of color and shape convey emotion. In Pollock's works, observe his unique technique of dripping paint onto the canvas, creating a chaotic yet harmonized effect. Next, we move to the Impressionist Room. This section has beautiful paintings by Claude Monet and Edgar Degas. Monet's landscapes are known for their vibrant depiction of light and atmosphere. Degas, on the other hand, captured the grace of movement in his dance-focused paintings. Now, let's proceed to the Ancient Art Hall. Here, you'll encounter artifacts from ancient civilizations, such as Egyptian sarcophagi and Roman sculptures. Pay attention to the details on the sculptures, which tell stories of the past. As we walk through the museum, feel free to take your time and ask any questions to our museum guides stationed around. We'll end our audio tour here, but you're welcome to explore further. Don't forget to visit our gift shop for souvenirs related to the exhibits.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 1),
    "type": "multiple-choice",
    "question": "What is the main focus of Jackson Pollock's paintings mentioned in the guide?",
    "options": [
      "The use of vibrant colors to depict emotions",
      "The depiction of light and atmosphere in landscapes",
      "The unique technique of dripping paint onto the canvas",
      "The representation of movement and grace"
    ],
    "correctAnswer": "The unique technique of dripping paint onto the canvas",
    "explanation": "Pollock es famoso por su técnica única de salpicar pintura sobre lienzo.",
    "context": "Observe his unique technique of dripping paint onto the canvas",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 2),
    "type": "multiple-choice",
    "question": "What can be seen in the Ancient Art Hall?",
    "options": [
      "Famous paintings by Claude Monet",
      "Famous paintings by Pablo Picasso",
      "Artifacts from ancient civilizations",
      "Modern abstract sculptures"
    ],
    "correctAnswer": "Artifacts from ancient civilizations",
    "explanation": "El salón de arte antiguo contiene artefactos de civilizaciones antiguas.",
    "context": "Here, you'll encounter artifacts from ancient civilizations",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 3),
    "type": "multiple-choice",
    "question": "What is the purpose of the audio guide at the museum?",
    "options": [
      "To sell souvenirs at the gift shop",
      "To provide directions to different parts of the museum",
      "To offer detailed information about the exhibits",
      "To list upcoming exhibitions and events"
    ],
    "correctAnswer": "To offer detailed information about the exhibits",
    "explanation": "El objetivo de la guía de audio es proporcionar información sobre las exhibiciones.",
    "context": "Our first stop is in the Modern Art Gallery, featuring works from the 20th century.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 4),
    "type": "multiple-choice",
    "question": "Who are featured in the Impressionist Room?",
    "options": [
      "Pablo Picasso and Edgar Degas",
      "Claude Monet and Edgar Degas",
      "Jackson Pollock and Claude Monet",
      "Jackson Pollock and Pablo Picasso"
    ],
    "correctAnswer": "Claude Monet and Edgar Degas",
    "explanation": "La sala impresionista presenta obras de Monet y Degas.",
    "context": "This section has beautiful paintings by Claude Monet and Edgar Degas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 5),
    "type": "multiple-choice",
    "question": "What is highlighted about Monet's landscapes?",
    "options": [
      "The depiction of modern landscapes",
      "The use of bright colors to depict emotions",
      "The representation of ancient civilizations",
      "The vibrant depiction of light and atmosphere"
    ],
    "correctAnswer": "The vibrant depiction of light and atmosphere",
    "explanation": "Los paisajes de Monet son conocidos por su representación vibrante de la luz.",
    "context": "known for their vibrant depiction of light and atmosphere.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 6),
    "type": "multiple-choice",
    "question": "What should visitors not forget to do according to the guide?",
    "options": [
      "To take pictures in the galleries",
      "To explore the museum more after the tour",
      "To ask questions to any of the artists showcased",
      "To avoid touching the exhibits"
    ],
    "correctAnswer": "To explore the museum more after the tour",
    "explanation": "La guía anima a los visitantes a explorar más después de la visita.",
    "context": "you're welcome to explore further",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 7),
    "type": "multiple-choice",
    "question": "What kind of technique is highlighted in Picasso's works?",
    "options": [
      "Use of vibrant colors to depict light",
      "Play of color and shape to convey emotion",
      "Dripping paint on canvas technique",
      "Capturing motion and grace"
    ],
    "correctAnswer": "Play of color and shape to convey emotion",
    "explanation": "Picasso utiliza color y forma para expresar emociones.",
    "context": "Notice how Picasso's use of color and shape convey emotion.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 8),
    "type": "multiple-choice",
    "question": "What can visitors find in the gift shop?",
    "options": [
      "Original art pieces by the exhibited artists",
      "Souvenirs related to the exhibits",
      "Tickets for special museum events",
      "Discount vouchers for the museum café"
    ],
    "correctAnswer": "Souvenirs related to the exhibits",
    "explanation": "La tienda de regalos ofrece recuerdos relacionados con las exhibiciones.",
    "context": "visit our gift shop for souvenirs related to the exhibits",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 9),
    "type": "multiple-choice",
    "question": "In which room is grace and movement primarily highlighted?",
    "options": [
      "In the Ancient Art Hall",
      "In the Modern Art Gallery",
      "In the Impressionist Room",
      "In the Gift Shop"
    ],
    "correctAnswer": "In the Impressionist Room",
    "explanation": "El enfoque en gracia y movimiento se encuentra en la sala impresionista.",
    "context": "captured the grace of movement in his dance-focused paintings.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 10),
    "type": "multiple-choice",
    "question": "What is significant about the sculptures in the Ancient Art Hall?",
    "options": [
      "They highlight modern artistic techniques",
      "They show detailed storytelling of the past",
      "They are made by famous contemporary artists",
      "They are mostly impressionistic"
    ],
    "correctAnswer": "They show detailed storytelling of the past",
    "explanation": "Las esculturas en el salón de arte antiguo narran historias del pasado.",
    "context": "Pay attention to the details on the sculptures, which tell stories of the past.",
    "points": 1
  }
]
};
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Vocabulary: Creative Process', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Process Question ${i+1}: Define "Inspire".`, options: ['Fill with urge to do something', 'Make tired', 'Stop working'], correctAnswer: 'Fill with urge to do something', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Humanities Roots (Phil, Anthrop, Eth)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Root Question ${i+1}: "Phil-" usually means:`, options: ['Love', 'Hate', 'Fear'], correctAnswer: 'Love', points: 1 })) };


const s2 = { id: genId(LEVEL, UNIT_ID, 's2', 0), type: 'listening', title: 'Placeholder Shard 2', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's2', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'listening', title: 'Placeholder Shard 3', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'listening', title: 'Placeholder Shard 4', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'listening', title: 'Placeholder Shard 5', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'listening', title: 'Placeholder Shard 6', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Placeholder Shard 7', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };

export const B1_WEEK_4 = createShardedToeflUnit(
  'toefl-b1-w4',
  'Week 4: Humanities & Fine Arts',
  'Immerse yourself in literature, philosophy, and the world of visual arts.',
  ['Distinguish art styles and terminology', 'Use adjectives and adverbs for description', 'Analyze literary devices like metaphors'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
