import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 5;
const LEVEL = 'b1';

// SHARDS 1-2: Social Sciences Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'History & Archeology',
  transcript: `Welcome, everyone, to our introductory lecture on History and Archeology. Today, we'll explore the fascinating world of ancient civilizations and the methods used by archeologists to uncover our past. We'll start with the ancient Egyptians, known for their pyramids and rich culture. Archeologists have learned a lot about their society through artifacts like pottery and hieroglyphs. Another significant civilization is the Maya, who lived in what is now Mexico and Central America. They were advanced in mathematics and astronomy. Their famous step pyramids and calendar system still intrigue researchers today. Moving further, Greek and Roman civilizations have also left a huge impact on modern Western culture. Their contributions in art, politics, and philosophy are profound. Archeologists study ruins like the Parthenon in Greece to learn about these societies. Now, what is archeology? At its core, it's the study of human history through excavation of sites and analysis of artifacts. Techniques include carbon dating, which helps determine the age of objects and is crucial for creating accurate timelines. Whenever a new site is discovered, archeologists conduct surveys and digs to collect data. Each artifact found can tell us a story. For example, a simple piece of broken pottery can reveal trading patterns, dietary habits, and even social structures. So, through archeology, we can recreate ancient histories and understand civilizations better. In the next session, we'll dive deeper into specific archeological discoveries and their significance.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 1),
    "type": "multiple-choice",
    "question": "What is one of the reasons the ancient Egyptians are well-known?",
    "options": [
      "Their advanced technology.",
      "Their interest in modern politics.",
      "Their pyramids and rich culture.",
      "Their maritime exploration."
    ],
    "correctAnswer": "Their pyramids and rich culture.",
    "explanation": "Los egipcios son conocidos por sus pirámides y rica cultura.",
    "context": "Today, we'll explore the fascinating world of ancient civilizations and the methods used by archeologists to uncover our past. We'll start with the ancient Egyptians, known for their pyramids and rich culture.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 2),
    "type": "multiple-choice",
    "question": "What have archeologists learned about the Maya civilization?",
    "options": [
      "They were unaware of astronomy.",
      "They were superior in engineering.",
      "They lacked mathematical knowledge.",
      "They were advanced in mathematics and astronomy."
    ],
    "correctAnswer": "They were advanced in mathematics and astronomy.",
    "explanation": "Los mayas tenían conocimientos avanzados en matemáticas y astronomía.",
    "context": "Another significant civilization is the Maya, who lived in what is now Mexico and Central America. They were advanced in mathematics and astronomy.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 3),
    "type": "multiple-choice",
    "question": "Which ancient civilizations have greatly impacted modern Western culture?",
    "options": [
      "Greek and Roman civilizations.",
      "Chinese and Egyptian civilizations.",
      "Maya and Aztec civilizations.",
      "Sumerian and Babylonian civilizations."
    ],
    "correctAnswer": "Greek and Roman civilizations.",
    "explanation": "Las civilizaciones griega y romana han dejado un gran impacto en la cultura occidental moderna.",
    "context": "Moving further, Greek and Roman civilizations have also left a huge impact on modern Western culture.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 4),
    "type": "multiple-choice",
    "question": "What is the purpose of carbon dating in archeology?",
    "options": [
      "To analyze the texture of artifacts.",
      "To find new archeological sites.",
      "To determine the age of objects.",
      "To reconstruct broken artifacts."
    ],
    "correctAnswer": "To determine the age of objects.",
    "explanation": "La datación por carbono se utiliza para determinar la edad de los objetos.",
    "context": "Techniques include carbon dating, which helps determine the age of objects and is crucial for creating accurate timelines.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 5),
    "type": "multiple-choice",
    "question": "Why do archeologists conduct surveys when a new site is discovered?",
    "options": [
      "To increase the value of the artifacts.",
      "To sell artifacts to museums.",
      "To collect data from the site.",
      "To publicize their findings."
    ],
    "correctAnswer": "To collect data from the site.",
    "explanation": "Los arqueólogos realizan encuestas para recopilar datos del sitio.",
    "context": "Whenever a new site is discovered, archeologists conduct surveys and digs to collect data.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 6),
    "type": "multiple-choice",
    "question": "What story can a piece of broken pottery tell?",
    "options": [
      "About government structures.",
      "About fashion trends.",
      "About trading patterns and social structures.",
      "About environmental changes."
    ],
    "correctAnswer": "About trading patterns and social structures.",
    "explanation": "Un trozo de cerámica rota puede revelar patrones comerciales y estructuras sociales.",
    "context": "For example, a simple piece of broken pottery can reveal trading patterns, dietary habits, and even social structures.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 7),
    "type": "multiple-choice",
    "question": "What role does excavation play in archeology?",
    "options": [
      "It helps discover new planets.",
      "It recreates modern cities.",
      "It uncovers evidence of past human activities.",
      "It creates myths about ancient people."
    ],
    "correctAnswer": "It uncovers evidence of past human activities.",
    "explanation": "La excavación descubre evidencias de las actividades humanas pasadas.",
    "context": "Archeology, at its core, is the study of human history through excavation of sites.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 8),
    "type": "multiple-choice",
    "question": "What do archeologists aim to do by studying ruins like the Parthenon?",
    "options": [
      "To sell ancient artifacts to collectors.",
      "To build replicas of ancient buildings.",
      "To learn about ancient societies.",
      "To create entertainment for tourists."
    ],
    "correctAnswer": "To learn about ancient societies.",
    "explanation": "Arqueólogos estudian ruinas para aprender sobre sociedades antiguas.",
    "context": "Archeologists study ruins like the Parthenon in Greece to learn about these societies.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 9),
    "type": "multiple-choice",
    "question": "What is the core activity of archeology?",
    "options": [
      "Rebuilding ancient cities.",
      "Studying human history through excavation.",
      "Creating stories about historical events.",
      "Teaching languages used by ancients."
    ],
    "correctAnswer": "Studying human history through excavation.",
    "explanation": "La arqueología es principalmente el estudio de la historia humana a través de excavaciones.",
    "context": "Archeology, at its core, is the study of human history through excavation.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 10),
    "type": "multiple-choice",
    "question": "What will be discussed in the next session according to the lecture?",
    "options": [
      "Theories about the future of archeology.",
      "Specific archeological discoveries and their significance.",
      "A history of modern archeological tools.",
      "The influence of cinema on archeology."
    ],
    "correctAnswer": "Specific archeological discoveries and their significance.",
    "explanation": "La próxima sesión se centrará en descubrimientos arqueológicos específicos y su significado.",
    "context": "In the next session, we'll dive deeper into specific archeological discoveries and their significance.",
    "points": 1
  }
]
};
const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: History Podcast',
  transcript: `Welcome to the History Podcast, where we explore fascinating events and people from the past. Today, we’re diving into the story of Leonardo da Vinci, a true Renaissance man. Born in 1452 in Vinci, Italy, Leonardo was not just a painter; he was also an inventor, scientist, and musician. His famous works include the 'Mona Lisa' and 'The Last Supper.' But did you know he also studied anatomy and designed early versions of flying machines? Leonardo's curiosity knew no bounds, and he left behind thousands of pages of sketches and notes. These documents reveal a mind far ahead of its time, imagining helicopters, tanks, and solar power centuries before they were realized. Now, let's focus on one of his unique skills: mirror writing. Leonardo often wrote from right to left in a mirror script. This technique might have been used to keep his ideas secret or simply because he was left-handed. His influence extended beyond art and invention; he inspired countless generations to pursue innovation and creativity. His legacy lives on, reminding us that imagination can lead to new discoveries. Join us next time as we explore another influential figure in history.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 1),
    "type": "multiple-choice",
    "question": "What is one of the primary topics of the podcast?",
    "options": [
      "The life of a modern scientist",
      "The inventions of Leonardo da Vinci",
      "The politics of Renaissance Italy",
      "The history of art movements"
    ],
    "correctAnswer": "The inventions of Leonardo da Vinci",
    "explanation": "La pregunta se centra en los inventos de Leonardo, que se destacan claramente en el podcast.",
    "context": "But did you know he also studied anatomy and designed early versions of flying machines?",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 2),
    "type": "multiple-choice",
    "question": "What is Leonardo da Vinci most famous for?",
    "options": [
      "His sculptures",
      "His music compositions",
      "His paintings",
      "His architectural designs"
    ],
    "correctAnswer": "His paintings",
    "explanation": "Leonardo es famoso principalmente por sus pinturas, incluyendo la 'Mona Lisa' y 'La última cena'.",
    "context": "His famous works include the 'Mona Lisa' and 'The Last Supper.'",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 3),
    "type": "multiple-choice",
    "question": "How did Leonardo often write?",
    "options": [
      "In mirror writing",
      "In code",
      "In multiple languages",
      "In invisible ink"
    ],
    "correctAnswer": "In mirror writing",
    "explanation": "Leonardo a menudo escribía de derecha a izquierda en un estilo de escritura de espejo.",
    "context": "Leonardo often wrote from right to left in a mirror script.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 4),
    "type": "multiple-choice",
    "question": "Where was Leonardo da Vinci born?",
    "options": [
      "Milan",
      "Rome",
      "Vinci",
      "Florence"
    ],
    "correctAnswer": "Vinci",
    "explanation": "Leonardo nació en Vinci, Italia, como se menciona en el podcast.",
    "context": "Born in 1452 in Vinci, Italy,",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 5),
    "type": "multiple-choice",
    "question": "What did Leonardo's documents reveal?",
    "options": [
      "Plans for wars",
      "Future scientific discoveries",
      "Imaginative inventions",
      "Literary works"
    ],
    "correctAnswer": "Imaginative inventions",
    "explanation": "Sus documentos revelaron inventos imaginativos, como helicópteros y tanques.",
    "context": "These documents reveal a mind far ahead of its time, imagining helicopters, tanks, and solar power.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 6),
    "type": "multiple-choice",
    "question": "What is one reason Leonardo might have used mirror writing?",
    "options": [
      "To save paper",
      "To write faster",
      "To keep ideas secret",
      "To decorate manuscripts"
    ],
    "correctAnswer": "To keep ideas secret",
    "explanation": "Se sugiere que Leonardo usó la escritura en espejo para mantener sus ideas en secreto.",
    "context": "This technique might have been used to keep his ideas secret or simply because he was left-handed.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 7),
    "type": "multiple-choice",
    "question": "What is a notable characteristic of Leonardo's mind?",
    "options": [
      "It was focused solely on art",
      "It had no interest in science",
      "It was far ahead of its time",
      "It resisted learning new things"
    ],
    "correctAnswer": "It was far ahead of its time",
    "explanation": "La mente de Leonardo estaba muy avanzada, imaginando ideas futuras como poder solar.",
    "context": "These documents reveal a mind far ahead of its time.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 8),
    "type": "multiple-choice",
    "question": "What did Leonardo study apart from art?",
    "options": [
      "Economics",
      "Pottery",
      "Anatomy",
      "Literature"
    ],
    "correctAnswer": "Anatomy",
    "explanation": "Leonardo estudió anatomía, lo cual fue uno de sus intereses además del arte.",
    "context": "But did you know he also studied anatomy and designed early versions of flying machines?",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 9),
    "type": "multiple-choice",
    "question": "Which of the following inventions was NOT mentioned in the podcast?",
    "options": [
      "Helicopters",
      "Tanks",
      "Printing presses",
      "Solar power"
    ],
    "correctAnswer": "Printing presses",
    "explanation": "El podcast no menciona las imprentas, solo helicópteros, tanques y energía solar.",
    "context": "These documents reveal a mind far ahead of its time, imagining helicopters, tanks, and solar power.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 10),
    "type": "multiple-choice",
    "question": "What did Leonardo inspire in future generations?",
    "options": [
      "Obedience",
      "Conflict",
      "Innovation",
      "Secrecy"
    ],
    "correctAnswer": "Innovation",
    "explanation": "Leonardo inspiró innovación y creatividad, como se menciona al final del segmento.",
    "context": "His influence extended beyond art and invention; he inspired countless generations to pursue innovation and creativity.",
    "points": 1
  }
]
};
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Academic Verbs', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Verb Question ${i+1}: Define "Analyze".`, options: ['Examine in detail', 'Ignore completely', 'Copy exactly'], correctAnswer: 'Examine in detail', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Social Science Collocations', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Collocation Question ${i+1}: "Socio-economic ____"`, options: ['status', 'color', 'height'], correctAnswer: 'status', points: 1 })) };


const s2 = { id: genId(LEVEL, UNIT_ID, 's2', 0), type: 'listening', title: 'Placeholder Shard 2', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's2', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'listening', title: 'Placeholder Shard 3', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'listening', title: 'Placeholder Shard 4', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'listening', title: 'Placeholder Shard 5', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'listening', title: 'Placeholder Shard 6', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Placeholder Shard 7', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };

export const B1_WEEK_5 = createShardedToeflUnit(
  'toefl-b1-w5',
  'Week 5: Social Sciences',
  'Explore the complexities of human society, history, and the mind.',
  ['Understand historical timelines and terminology', 'Use passive voice for academic descriptions', 'Identify societal structures and norms'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
