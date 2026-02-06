import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 1;
const LEVEL = 'b1';

// SHARD 1-10: Academic Vocabulary & Campus Life (10 Questions each)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'Campus Facilities',
  transcript: `Welcome to our university campus, everyone. Today, I’ll give you a brief overview of the facilities available here. Firstly, let's talk about the main library. It's located in the heart of the campus and offers several resources, including study rooms and digital materials accessible through the computers inside the library. Secondly, we have the Student Center. It's a place where students can relax, access different student services, and participate in various clubs and activities. Next, there's the Sports Complex, which houses a gym, swimming pool, and several sports courts. This facility is open to all students. Additionally, our campus café, located near the Arts Building, is a popular spot for grabbing a meal or coffee between classes. The Engineering Building also includes the tech lab where students have access to cutting-edge technology for research and project work. Lastly, for those interested in art and music, the Fine Arts Building has several studios and practice rooms which are open to all students with a valid student ID. Remember, each facility has its own schedule, so be sure to check the timetables online or at the entrance of each building. I hope you make good use of these facilities during your time here at the university.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 1),
    "type": "multiple-choice",
    "question": "Where is the main library located on campus?",
    "options": [
      "Near the Arts Building",
      "In the heart of the campus",
      "Next to the Sports Complex",
      "By the dormitories"
    ],
    "correctAnswer": "In the heart of the campus",
    "explanation": "La biblioteca principal se encuentra en el centro del campus, lo cual se menciona claramente en el inicio de la descripción.",
    "context": "Firstly, let's talk about the main library. It's located in the heart of the campus...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 2),
    "type": "multiple-choice",
    "question": "What facilities does the Sports Complex offer?",
    "options": [
      "Only a gym",
      "A gym and a swimming pool",
      "Multiple gyms and cafés",
      "Just sports courts"
    ],
    "correctAnswer": "A gym and a swimming pool",
    "explanation": "Se menciona que el complejo deportivo tiene un gimnasio y una piscina, junto con varias canchas deportivas.",
    "context": "Next, there's the Sports Complex, which houses a gym, swimming pool, and several sports courts.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 3),
    "type": "multiple-choice",
    "question": "Which building is the campus café located near?",
    "options": [
      "Engineering Building",
      "Arts Building",
      "Sports Complex",
      "Library"
    ],
    "correctAnswer": "Arts Building",
    "explanation": "El café del campus está situado cerca del Edificio de Artes, lo cual se indica en la explicación.",
    "context": "Additionally, our campus café, located near the Arts Building...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 4),
    "type": "multiple-choice",
    "question": "What can students access in the Engineering Building?",
    "options": [
      "Art studios",
      "A computer lab",
      "A tech lab",
      "Library resources"
    ],
    "correctAnswer": "A tech lab",
    "explanation": "El Edificio de Ingeniería incluye un laboratorio de tecnología, de acuerdo con la descripción del guion.",
    "context": "The Engineering Building also includes the tech lab where students have access...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 5),
    "type": "multiple-choice",
    "question": "Which facility offers study rooms and digital materials?",
    "options": [
      "Student Center",
      "Sports Complex",
      "Main Library",
      "Fine Arts Building"
    ],
    "correctAnswer": "Main Library",
    "explanation": "La biblioteca principal ofrece salas de estudio y materiales digitales, como se menciona claramente.",
    "context": "It offers several resources, including study rooms and digital materials...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 6),
    "type": "multiple-choice",
    "question": "What is the purpose of the Student Center?",
    "options": [
      "To hold lectures",
      "To host art exhibits",
      "To provide a relaxation space",
      "To conduct tech workshops"
    ],
    "correctAnswer": "To provide a relaxation space",
    "explanation": "El Centro de Estudiantes sirve como lugar de relajación y para servicios estudiantiles, conforme al guion.",
    "context": "Student Center. It's a place where students can relax, access different student services...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 7),
    "type": "multiple-choice",
    "question": "What kind of activities are hosted in the Student Center?",
    "options": [
      "Sports competitions",
      "Club activities",
      "Research projects",
      "Art performances"
    ],
    "correctAnswer": "Club activities",
    "explanation": "Las actividades de clubes tienen lugar en el Centro de Estudiantes, según se afirma en el guion.",
    "context": "participate in various clubs and activities.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 8),
    "type": "multiple-choice",
    "question": "Who can use the sports facilities?",
    "options": [
      "Only faculty",
      "All students",
      "Only athletes",
      "Invited guests"
    ],
    "correctAnswer": "All students",
    "explanation": "Las instalaciones deportivas están abiertas a todos los estudiantes, como se indica en el guion.",
    "context": "This facility is open to all students.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 9),
    "type": "multiple-choice",
    "question": "What is located in the Fine Arts Building?",
    "options": [
      "A library",
      "Art studios and practice rooms",
      "A tech lab",
      "A gym"
    ],
    "correctAnswer": "Art studios and practice rooms",
    "explanation": "El Edificio de Bellas Artes contiene estudios de arte y salas de práctica, según se detalla.",
    "context": "Fine Arts Building has several studios and practice rooms...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 10),
    "type": "multiple-choice",
    "question": "What do you need to access the studios in the Fine Arts Building?",
    "options": [
      "A faculty pass",
      "A valid student ID",
      "An appointment",
      "A club membership"
    ],
    "correctAnswer": "A valid student ID",
    "explanation": "Se requiere una identificación válida de estudiante para acceder a los estudios del Edificio de Bellas Artes.",
    "context": "which are open to all students with a valid student ID.",
    "points": 1
  }
]
};
const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Academic Verbs',
  transcript: `Today, we will explore some common academic verbs and their applications in different fields of study. Understanding these verbs is crucial for academic success as they help convey precise activities in research and analysis. Let's start with the verb 'analyze', which is often used in social sciences to examine various aspects of a topic in detail. For instance, you might analyze survey data to identify trends. Another key verb is 'synthesize', utilized in subjects like chemistry or even literature, referring to combining elements to create a cohesive whole. If you conduct an experiment, you will likely 'measure' your results, a verb central to scientific methods, indicating the quantification of variables. Additionally, 'evaluate' is a versatile verb that involves judging the significance or value of something, used in tasks ranging from critiquing art to assessing theories. In writing, one might 'summarize' a complex text to extract its core message, a skill essential for efficient communication. Next, 'interpret' is crucial in fields like history or anthropology, where understanding cultural artifacts is essential. Similarly, 'justify' requires providing reasons or arguments to support a particular position, often seen in legal or philosophical writing. The verb 'compare' helps highlight similarities and differences in studies or analyses. Also, 'describe' involves detailing the characteristics of an object or scenario, critical in observational research. Finally, 'argue' is vital in developing thesis statements where you need to present and defend a viewpoint.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 1),
    "type": "multiple-choice",
    "question": "Which verb means to examine something in detail?",
    "options": [
      "Measure",
      "Analyze",
      "Interpret",
      "Describe"
    ],
    "correctAnswer": "Analyze",
    "explanation": "En el contexto académico, 'analizar' significa examinar detalladamente un tema o datos.",
    "context": "Let's start with the verb 'analyze', which is often used in social sciences to examine various aspects of a topic in detail.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 2),
    "type": "multiple-choice",
    "question": "What does the verb 'synthesize' refer to?",
    "options": [
      "Summarizing information",
      "Evaluating results",
      "Combining elements",
      "Arguing a point"
    ],
    "correctAnswer": "Combining elements",
    "explanation": "'Sintetizar' se refiere a la acción de combinar diferentes elementos para formar un todo coherente.",
    "context": "Another key verb is 'synthesize', utilized in subjects like chemistry or even literature, referring to combining elements to create a cohesive whole.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 3),
    "type": "multiple-choice",
    "question": "In scientific methods, which verb is central to quantifying variables?",
    "options": [
      "Summarize",
      "Evaluate",
      "Measure",
      "Describe"
    ],
    "correctAnswer": "Measure",
    "explanation": "'Medir' es un verbo central en métodos científicos que indica la cuantificación de variables.",
    "context": "If you conduct an experiment, you will likely 'measure' your results, a verb central to scientific methods, indicating the quantification of variables.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 4),
    "type": "multiple-choice",
    "question": "Which verb involves judging the significance of something?",
    "options": [
      "Interpret",
      "Evaluate",
      "Synthesize",
      "Justify"
    ],
    "correctAnswer": "Evaluate",
    "explanation": "‘Evaluar’ implica juzgar la importancia o el valor de algo.",
    "context": "Additionally, 'evaluate' is a versatile verb that involves judging the significance or value of something.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 5),
    "type": "multiple-choice",
    "question": "What is the main purpose of summarizing?",
    "options": [
      "Extracting the core message",
      "Arguing about the text",
      "Comparing texts",
      "Describing details"
    ],
    "correctAnswer": "Extracting the core message",
    "explanation": "'Resumir' se refiere a extraer el mensaje principal de un texto complejo.",
    "context": "In writing, one might 'summarize' a complex text to extract its core message.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 6),
    "type": "multiple-choice",
    "question": "Which verb would you use to understand cultural artifacts?",
    "options": [
      "Justify",
      "Interpret",
      "Compare",
      "Describe"
    ],
    "correctAnswer": "Interpret",
    "explanation": "'Interpretar' es crucial para entender artefactos culturales, especialmente en campos como la historia o la antropología.",
    "context": "Next, 'interpret' is crucial in fields like history or anthropology, where understanding cultural artifacts is essential.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 7),
    "type": "multiple-choice",
    "question": "What does 'justify' require you to do?",
    "options": [
      "Detail characteristics",
      "Present reasons",
      "Compare theories",
      "Summarize data"
    ],
    "correctAnswer": "Present reasons",
    "explanation": "'Justificar' requiere presentar razones o argumentos para apoyar una posición.",
    "context": "Similarly, 'justify' requires providing reasons or arguments to support a particular position.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 8),
    "type": "multiple-choice",
    "question": "Which verb is used to highlight similarities and differences?",
    "options": [
      "Describe",
      "Measure",
      "Compare",
      "Analyze"
    ],
    "correctAnswer": "Compare",
    "explanation": "'Comparar' se utiliza para destacar similitudes y diferencias en estudios o análisis.",
    "context": "The verb 'compare' helps highlight similarities and differences in studies or analyses.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 9),
    "type": "multiple-choice",
    "question": "What does 'describe' entail in observational research?",
    "options": [
      "Summarizing events",
      "Arguing conclusions",
      "Detailing characteristics",
      "Justifying outcomes"
    ],
    "correctAnswer": "Detailing characteristics",
    "explanation": "'Describir' implica detallar las características de un objeto o escenario.",
    "context": "Also, 'describe' involves detailing the characteristics of an object or scenario, critical in observational research.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 10),
    "type": "multiple-choice",
    "question": "In developing thesis statements, what does 'argue' involve?",
    "options": [
      "Judging value",
      "Combining ideas",
      "Presenting and defending a viewpoint",
      "Measuring evidence"
    ],
    "correctAnswer": "Presenting and defending a viewpoint",
    "explanation": "'Argumentar' implica presentar y defender un punto de vista.",
    "context": "Finally, 'argue' is vital in developing thesis statements where you need to present and defend a viewpoint.",
    "points": 1
  }
]
};
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Transition Words', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple-choice', question: `Transition Question ${i+1}: Use of "Furthermore".`, options: ['Addition', 'Contrast', 'Result'], correctAnswer: 'Addition', points: 1 })) };


const s2 = { id: genId(LEVEL, UNIT_ID, 's2', 0), type: 'listening', title: 'Placeholder Shard 2', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's2', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'listening', title: 'Placeholder Shard 3', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'listening', title: 'Placeholder Shard 4', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'listening', title: 'Placeholder Shard 5', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Placeholder Shard 7', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Placeholder Shard 8', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'listening', title: 'Placeholder Shard 9', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };

export const B1_WEEK_1 = createShardedToeflUnit(
  'toefl-b1-w1',
  'Week 1: Foundations of Campus Life',
  'A massive introduction to everything you need to start your TOEFL journey.',
  ['Master 100 essential campus concepts', 'Develop academic listening stamina', 'Perfect core grammar structures'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
