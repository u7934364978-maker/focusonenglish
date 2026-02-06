import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 2;
const LEVEL = 'b1';

// SHARDS 1-2: Social Sciences Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'Social Sciences Foundation',
  transcript: `Welcome to the Social Sciences Foundation. Today, we will explore the basic concepts that shape this field of study. Social sciences are a group of academic disciplines that study human society and social relationships. These include fields such as sociology, anthropology, psychology, economics, and political science. Sociology, for example, examines the development, structure, and functioning of human society. Anthropologists, on the other hand, focus on human behavior and cultures, often through time. Psychology deals with the mind and behavior, aiming to understand individuals and groups. Economics studies the production, distribution, and consumption of goods and services, while political science is concerned with systems of governance and the analysis of political activities and behavior. It is important to understand the methodologies used by social scientists, which often involve both qualitative and quantitative research. Qualitative methods might include interviews and observations, allowing for detailed insights into social phenomena. Quantitative methods use numerical data and statistical techniques to identify patterns and test hypotheses. Understanding human society and its complex dynamics helps us address critical issues such as poverty, inequality, and governance. As we explore these topics, consider how they interconnect to form the foundation of social sciences.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 1),
    "type": "multiple-choice",
    "question": "What is the main focus of sociology?",
    "options": [
      "The study of human cultures through time",
      "The study of the mind and behavior",
      "The study of the development, structure, and functioning of human society",
      "The study of governance systems"
    ],
    "correctAnswer": "The study of the development, structure, and functioning of human society",
    "explanation": "La sociología se centra en la sociedad humana y cómo ésta se desarrolla, estructura y funciona.",
    "context": "Sociology examines the development, structure, and functioning of human society.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 2),
    "type": "multiple-choice",
    "question": "Which discipline focuses on the mind and behavior?",
    "options": [
      "Anthropology",
      "Economics",
      "Psychology",
      "Political Science"
    ],
    "correctAnswer": "Psychology",
    "explanation": "La psicología se ocupa de la mente y el comportamiento.",
    "context": "Psychology deals with the mind and behavior.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 3),
    "type": "multiple-choice",
    "question": "What are qualitative methods in social science research?",
    "options": [
      "Methods that involve interviews and observations",
      "Methods that use numerical data and statistical techniques",
      "Methods that study the production of goods",
      "Methods that examine systems of governance"
    ],
    "correctAnswer": "Methods that involve interviews and observations",
    "explanation": "Los métodos cualitativos incluyen entrevistas y observaciones para ofrecer información detallada.",
    "context": "Qualitative methods might include interviews and observations.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 4),
    "type": "multiple-choice",
    "question": "Which field studies the distribution and consumption of goods and services?",
    "options": [
      "Sociology",
      "Economics",
      "Political Science",
      "Anthropology"
    ],
    "correctAnswer": "Economics",
    "explanation": "La economía estudia la producción, distribución y consumo de bienes y servicios.",
    "context": "Economics studies the production, distribution, and consumption of goods and services.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 5),
    "type": "multiple-choice",
    "question": "What do anthropologists primarily focus on?",
    "options": [
      "Human governance systems",
      "Human behavior and cultures, often through time",
      "The mind and behavior",
      "The consumption of goods and services"
    ],
    "correctAnswer": "Human behavior and cultures, often through time",
    "explanation": "Los antropólogos se enfocan en el comportamiento humano y las culturas a través del tiempo.",
    "context": "Anthropologists focus on human behavior and cultures, often through time.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 6),
    "type": "multiple-choice",
    "question": "Political science is mainly concerned with what?",
    "options": [
      "Systems of governance and political activities",
      "The mind and its activities",
      "Cultural development through time",
      "Economic distribution patterns"
    ],
    "correctAnswer": "Systems of governance and political activities",
    "explanation": "La ciencia política se centra en los sistemas de gobierno y las actividades políticas.",
    "context": "Political science is concerned with systems of governance and the analysis of political activities and behavior.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 7),
    "type": "multiple-choice",
    "question": "What benefit does an understanding of social sciences provide?",
    "options": [
      "Solving engineering problems",
      "Fulfilling technological needs",
      "Addressing critical issues like poverty and inequality",
      "Exploring the universe and space"
    ],
    "correctAnswer": "Addressing critical issues like poverty and inequality",
    "explanation": "Comprender las ciencias sociales ayuda a abordar problemas críticos como la pobreza y la desigualdad.",
    "context": "Understanding human society and its complex dynamics helps us address critical issues such as poverty, inequality.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 8),
    "type": "multiple-choice",
    "question": "Which research method involves using statistical techniques?",
    "options": [
      "Qualitative methods",
      "Quantitative methods",
      "Cultural methods",
      "Behavioral methods"
    ],
    "correctAnswer": "Quantitative methods",
    "explanation": "Los métodos cuantitativos utilizan datos numéricos y técnicas estadísticas.",
    "context": "Quantitative methods use numerical data and statistical techniques.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 9),
    "type": "multiple-choice",
    "question": "What topic does the lecture primarily cover?",
    "options": [
      "Natural sciences overview",
      "Social sciences foundation",
      "Technological advancements",
      "Economic theories"
    ],
    "correctAnswer": "Social sciences foundation",
    "explanation": "La conferencia cubre los conceptos básicos de las ciencias sociales.",
    "context": "Today, we will explore the basic concepts that shape the field of study.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 10),
    "type": "multiple-choice",
    "question": "What is the purpose of integrating both qualitative and quantitative research in social science?",
    "options": [
      "To increase the speed of research",
      "To save research costs",
      "To gain a comprehensive understanding of social phenomena",
      "To focus exclusively on statistical analysis"
    ],
    "correctAnswer": "To gain a comprehensive understanding of social phenomena",
    "explanation": "Usar ambos métodos permite entender de manera más completa los fenómenos sociales.",
    "context": "Social scientists use both qualitative and quantitative research for understanding social phenomena.",
    "points": 1
  }
]
};
const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Library Search',
  transcript: `Librarian: Good morning! How can I help you today?
Student: Hi, I'm looking for a book on European history, but I'm not sure where to begin.
Librarian: Sure! We have several sections for history books. You'll likely find European history in the History section, second floor.
Student: Great, but I'm worried it might take too long to find the exact book I need.
Librarian: Well, you can use our library catalog on the computer right over there to search for specific titles or authors.
Student: That's helpful, thank you! And what if I'm interested in digital resources or e-books?
Librarian: We offer a wide range of digital resources. You can access them online through our library website. Just log in with your student ID.
Student: Wonderful! Do you provide any support or workshops on how to use these resources?
Librarian: Yes, we do. We have weekly workshops. You can sign up online or at the front desk. 
Student: That sounds perfect. I'll definitely sign up. Thank you for your help!
Librarian: You're welcome! If you need further assistance, don't hesitate to ask.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 1),
    "type": "multiple-choice",
    "question": "Where does the librarian suggest the student look for European history books?",
    "options": [
      "First floor",
      "Second floor",
      "Third floor",
      "Fourth floor"
    ],
    "correctAnswer": "Second floor",
    "explanation": "La bibliotecaria mencionó que los libros de historia europea están en el segundo piso.",
    "context": "You'll likely find European history in the History section, second floor.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 2),
    "type": "multiple-choice",
    "question": "What does the librarian suggest the student use to find specific book titles?",
    "options": [
      "Library catalog",
      "Library map",
      "Library guide",
      "Librarian help"
    ],
    "correctAnswer": "Library catalog",
    "explanation": "La bibliotecaria recomendó usar el catálogo de la biblioteca para buscar títulos específicos.",
    "context": "You can use our library catalog on the computer right over there to search for specific titles.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 3),
    "type": "multiple-choice",
    "question": "What does the student need to access digital resources?",
    "options": [
      "Library card",
      "Student ID",
      "Library map",
      "Library guide"
    ],
    "correctAnswer": "Student ID",
    "explanation": "La bibliotecaria explicó que se necesita un ID de estudiante para acceder a los recursos digitales.",
    "context": "Just log in with your student ID.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 4),
    "type": "multiple-choice",
    "question": "How does the librarian suggest the student sign up for workshops?",
    "options": [
      "Online",
      "Via email",
      "Call the library",
      "In person only"
    ],
    "correctAnswer": "Online",
    "explanation": "La bibliotecaria indicó que las inscripciones para los talleres se pueden hacer en línea.",
    "context": "You can sign up online or at the front desk.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 5),
    "type": "multiple-choice",
    "question": "What type of resource is NOT mentioned by the librarian?",
    "options": [
      "E-books",
      "Workshops",
      "Printed magazines",
      "Digital resources"
    ],
    "correctAnswer": "Printed magazines",
    "explanation": "La bibliotecaria no habló sobre revistas impresas en la conversación.",
    "context": "We offer a wide range of digital resources.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 6),
    "type": "multiple-choice",
    "question": "What concern does the student have about finding the book?",
    "options": [
      "Library opening hours",
      "Length of time to find it",
      "Availability of the book",
      "Quality of the book"
    ],
    "correctAnswer": "Length of time to find it",
    "explanation": "El estudiante está preocupado por el tiempo que llevará encontrar el libro.",
    "context": "I'm worried it might take too long to find the exact book I need.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 7),
    "type": "multiple-choice",
    "question": "Who can help if the student needs further assistance?",
    "options": [
      "Security",
      "Other students",
      "Librarian",
      "Cleaning staff"
    ],
    "correctAnswer": "Librarian",
    "explanation": "La bibliotecaria ofreció más ayuda si el estudiante la necesita.",
    "context": "If you need further assistance, don't hesitate to ask.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 8),
    "type": "multiple-choice",
    "question": "What is the student's initial request?",
    "options": [
      "Information on library events",
      "Help to find a book",
      "Suggestions for e-books",
      "Library map"
    ],
    "correctAnswer": "Help to find a book",
    "explanation": "El estudiante inicialmente pidió ayuda para encontrar un libro sobre historia europea.",
    "context": "I'm looking for a book on European history.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 9),
    "type": "multiple-choice",
    "question": "What is the librarian's attitude throughout the conversation?",
    "options": [
      "Unfriendly",
      "Helpful",
      "Indifferent",
      "Annoyed"
    ],
    "correctAnswer": "Helpful",
    "explanation": "La bibliotecaria se mostró servicial y ofreció varias opciones al estudiante.",
    "context": "How can I help you today?",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 10),
    "type": "multiple-choice",
    "question": "What service does the librarian mention is available for digital resources?",
    "options": [
      "Printing services",
      "Weekly workshops",
      "Study rooms",
      "Free transportation"
    ],
    "correctAnswer": "Weekly workshops",
    "explanation": "La bibliotecaria mencionó que hay talleres semanales disponibles para aprender a usar los recursos digitales.",
    "context": "We have weekly workshops.",
    "points": 1
  }
]
};
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Academic Transition Words', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Transition Question ${i+1}: Use of "Consequently".`, options: ['Result', 'Contrast', 'Addition'], correctAnswer: 'Result', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Academic Suffixes', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Suffix Question ${i+1}: "-tion" usually indicates:`, options: ['A noun', 'A verb', 'An adjective'], correctAnswer: 'A noun', points: 1 })) };


const s2 = { id: genId(LEVEL, UNIT_ID, 's2', 0), type: 'listening', title: 'Placeholder Shard 2', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's2', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'listening', title: 'Placeholder Shard 3', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'listening', title: 'Placeholder Shard 4', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'listening', title: 'Placeholder Shard 5', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'listening', title: 'Placeholder Shard 6', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Placeholder Shard 7', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };

export const B1_WEEK_2 = createShardedToeflUnit(
  'toefl-b1-w2',
  'Week 2: Social Sciences & Academic Writing',
  'Deep dive into sociology, history, and the mechanics of formal English.',
  ['Master social science vocabulary', 'Apply advanced subject-verb agreement', 'Analyze cause and effect in history texts'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
