import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 3;
const LEVEL = 'b1';

// SHARDS 1-2: Natural Sciences Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'Biological Concepts',
  transcript: `Good morning class, welcome to today's lecture on Biological Concepts. We will discuss some essential ideas that form the basis of biology. First, let's talk about the cell, which is the smallest unit of life. Cells can be prokaryotic or eukaryotic. Prokaryotic cells, like bacteria, don't have a nucleus, while eukaryotic cells do, such as in plants and animals. Next, we will discuss photosynthesis, the process by which plants convert sunlight into energy. This process is crucial because it provides oxygen and food for other living organisms. Moreover, let's consider the concept of ecosystems, which consist of living organisms interacting with their environment. An ecosystem includes elements like water, air, and soil, which are essential for the survival of living beings. Lastly, we'll talk about genetics, the study of heredity. Genes are units of DNA that determine specific traits passed from parents to offspring. These concepts are interconnected and form the foundation of understanding biology.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 1),
    "type": "multiple-choice",
    "question": "What is the smallest unit of life discussed in the lecture?",
    "options": [
      "Molecule",
      "Atom",
      "Cell",
      "Organ"
    ],
    "correctAnswer": "Cell",
    "explanation": "La célula es la unidad más pequeña de la vida, como se menciona en la conferencia.",
    "context": "First, let's talk about the cell, which is the smallest unit of life.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 2),
    "type": "multiple-choice",
    "question": "Which type of cell does not have a nucleus?",
    "options": [
      "Eukaryotic",
      "Prokaryotic",
      "Animal Cell",
      "Plant Cell"
    ],
    "correctAnswer": "Prokaryotic",
    "explanation": "Las células procarióticas, como las bacterias, no tienen núcleo.",
    "context": "Prokaryotic cells, like bacteria, don't have a nucleus.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 3),
    "type": "multiple-choice",
    "question": "What is the role of photosynthesis according to the lecture?",
    "options": [
      "It absorbs water from the soil.",
      "It converts sunlight into energy.",
      "It releases carbon dioxide.",
      "It produces minerals."
    ],
    "correctAnswer": "It converts sunlight into energy.",
    "explanation": "La fotosíntesis convierte la luz solar en energía, proporcionando oxígeno y alimento.",
    "context": "Next, we will discuss photosynthesis, the process by which plants convert sunlight into energy.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 4),
    "type": "multiple-choice",
    "question": "Why is photosynthesis important for other organisms?",
    "options": [
      "It provides food and oxygen.",
      "It cleans the environment.",
      "It creates habitats.",
      "It recycles nutrients."
    ],
    "correctAnswer": "It provides food and oxygen.",
    "explanation": "La fotosíntesis es crucial porque proporciona oxígeno y alimento.",
    "context": "This process is crucial because it provides oxygen and food for other living organisms.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 5),
    "type": "multiple-choice",
    "question": "What are ecosystems composed of?",
    "options": [
      "Only animals",
      "Only plants",
      "Living organisms and their environment",
      "Only bacteria"
    ],
    "correctAnswer": "Living organisms and their environment",
    "explanation": "Los ecosistemas consisten en organismos vivos que interactúan con su entorno.",
    "context": "Moreover, let's consider the concept of ecosystems, which consist of living organisms interacting with their environment.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 6),
    "type": "multiple-choice",
    "question": "Which elements are essential for the survival of living beings in an ecosystem?",
    "options": [
      "Fire",
      "Water, air, and soil",
      "Light only",
      "Minerals"
    ],
    "correctAnswer": "Water, air, and soil",
    "explanation": "El agua, el aire y el suelo son esenciales para la supervivencia en un ecosistema.",
    "context": "An ecosystem includes elements like water, air, and soil, which are essential for the survival of living beings.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 7),
    "type": "multiple-choice",
    "question": "What is genetics the study of?",
    "options": [
      "The structure of cells",
      "Heredity",
      "Plant growth",
      "Animal behavior"
    ],
    "correctAnswer": "Heredity",
    "explanation": "La genética es el estudio de la herencia, el paso de rasgos de padres a hijos.",
    "context": "Lastly, we'll talk about genetics, the study of heredity.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 8),
    "type": "multiple-choice",
    "question": "What are genes?",
    "options": [
      "Units of energy",
      "Units of DNA that determine traits",
      "Cells that fight diseases",
      "Parts of the brain"
    ],
    "correctAnswer": "Units of DNA that determine traits",
    "explanation": "Los genes son unidades de ADN que determinan rasgos específicos.",
    "context": "Genes are units of DNA that determine specific traits passed from parents to offspring.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 9),
    "type": "multiple-choice",
    "question": "How are the concepts discussed in the lecture connected?",
    "options": [
      "They are part of physics.",
      "They are separate and unrelated.",
      "They form the foundation of understanding biology.",
      "They are only historical concepts."
    ],
    "correctAnswer": "They form the foundation of understanding biology.",
    "explanation": "Estos conceptos están interconectados y forman la base de la comprensión de la biología.",
    "context": "These concepts are interconnected and form the foundation of understanding biology.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 10),
    "type": "multiple-choice",
    "question": "What is a defining feature of eukaryotic cells?",
    "options": [
      "They have a nucleus.",
      "They are always round.",
      "They can only be found in bacteria.",
      "They lack DNA."
    ],
    "correctAnswer": "They have a nucleus.",
    "explanation": "Las células eucariotas, como las de plantas y animales, tienen un núcleo.",
    "context": "Eukaryotic cells do, such as in plants and animals.",
    "points": 1
  }
]
};
const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Botany Lecture',
  transcript: `Good morning, class. Today, we are going to explore the fascinating world of botany. We will focus on the different adaptations plants have developed to survive in various environments. For instance, desert plants like cacti have thick, fleshy stems to store water. This allows them to endure long periods without rain. Additionally, they have spines instead of leaves. This reduces water loss since spines have a lower surface area. Tropical plants, on the other hand, often have large leaves that help them capture sunlight under the canopy of taller trees. Another interesting adaptation can be found in plants that live in nutrient-poor soils, such as the Venus flytrap. These plants obtain essential nutrients by trapping and digesting insects. Now, let’s consider plants in cold environments. They often grow close to the ground to avoid freezing temperatures. Alpine plants even have dense hair-like structures to trap warmth. As we discuss these adaptations, think about how these features help in the survival and reproduction of plants. Moving on to another aspect, pollination is crucial for plant reproduction. Many flowers have evolved colors and scents to attract specific pollinators like bees and butterflies. For example, bright yellow flowers are known to be attractive to bees. Finally, let's talk briefly about seed dispersal. To survive, plants spread their seeds across wide areas, sometimes using the wind or animals as carriers. This ensures that new plants can grow without competing with the parent plant for resources. Pay attention to these adaptations as they are vital for understanding plant ecology and evolution.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 1),
    "type": "multiple-choice",
    "question": "What adaptation helps desert plants survive long periods without water?",
    "options": [
      "Large leaves",
      "Fleshy stems",
      "Bright flowers",
      "Dense hair"
    ],
    "correctAnswer": "Fleshy stems",
    "explanation": "Las plantas del desierto, como los cactus, tienen tallos carnosos para almacenar agua.",
    "context": "For instance, desert plants like cacti have thick, fleshy stems to store water.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 2),
    "type": "multiple-choice",
    "question": "Why do desert plants have spines instead of leaves?",
    "options": [
      "To attract insects",
      "To reduce water loss",
      "To trap heat",
      "To capture sunlight"
    ],
    "correctAnswer": "To reduce water loss",
    "explanation": "Las espinas reducen la pérdida de agua debido a su menor área de superficie en comparación con las hojas.",
    "context": "Additionally, they have spines instead of leaves. This reduces water loss.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 3),
    "type": "multiple-choice",
    "question": "How do tropical plants adapt to capture sunlight?",
    "options": [
      "Thick stems",
      "Large leaves",
      "Bright colors",
      "Spines"
    ],
    "correctAnswer": "Large leaves",
    "explanation": "Las plantas tropicales tienen hojas grandes que les permiten capturar la luz solar bajo la copa de los árboles más altos.",
    "context": "Tropical plants, on the other hand, often have large leaves that help them capture sunlight.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 4),
    "type": "multiple-choice",
    "question": "What is a method used by plants in nutrient-poor soils to obtain nutrients?",
    "options": [
      "Using spines",
      "Trapping insects",
      "Growing large leaves",
      "Having thick stems"
    ],
    "correctAnswer": "Trapping insects",
    "explanation": "Las plantas como la Venus atrapamoscas obtienen nutrientes esenciales atrapando y digiriendo insectos.",
    "context": "Such as the Venus flytrap. These plants obtain essential nutrients by trapping and digesting insects.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 5),
    "type": "multiple-choice",
    "question": "Why do alpine plants have dense hair-like structures?",
    "options": [
      "To prevent water loss",
      "To trap warmth",
      "To attract pollinators",
      "To collect sunlight"
    ],
    "correctAnswer": "To trap warmth",
    "explanation": "Las plantas alpinas tienen estructuras densas como pelos para atrapar el calor.",
    "context": "Alpine plants even have dense hair-like structures to trap warmth.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 6),
    "type": "multiple-choice",
    "question": "What attracts specific pollinators like bees and butterflies to flowers?",
    "options": [
      "Bright colors and scents",
      "Thick stems",
      "Spines",
      "Hair-like structures"
    ],
    "correctAnswer": "Bright colors and scents",
    "explanation": "Muchas flores han evolucionado colores brillantes y aromas para atraer polinizadores específicos.",
    "context": "Many flowers have evolved colors and scents to attract specific pollinators like bees and butterflies.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 7),
    "type": "multiple-choice",
    "question": "Why are bright yellow flowers significant in pollination?",
    "options": [
      "They trap warmth",
      "They store water",
      "They are attractive to bees",
      "They prevent freezing"
    ],
    "correctAnswer": "They are attractive to bees",
    "explanation": "Las flores amarillas brillantes son conocidas por ser atractivas para las abejas.",
    "context": "For example, bright yellow flowers are known to be attractive to bees.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 8),
    "type": "multiple-choice",
    "question": "What is the purpose of seed dispersal in plants?",
    "options": [
      "To compete with parent plants",
      "To endure without rain",
      "To spread seeds across wide areas",
      "To attract specific pollinators"
    ],
    "correctAnswer": "To spread seeds across wide areas",
    "explanation": "La dispersión de semillas permite que las plantas crezcan sin competir con la planta madre.",
    "context": "To survive, plants spread their seeds across wide areas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 9),
    "type": "multiple-choice",
    "question": "What helps seeds to grow without competing with the parent plant?",
    "options": [
      "Seed dispersal",
      "Bright flowers",
      "Hair-like structures",
      "Insect trapping"
    ],
    "correctAnswer": "Seed dispersal",
    "explanation": "La dispersión de semillas asegura que las nuevas plantas puedan crecer sin competir con la planta madre.",
    "context": "This ensures that new plants can grow without competing with the parent plant for resources.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 10),
    "type": "multiple-choice",
    "question": "Which medium is NOT mentioned as a method for seed transportation?",
    "options": [
      "Wind",
      "Water",
      "Animals",
      "Insects"
    ],
    "correctAnswer": "Insects",
    "explanation": "El diálogo menciona viento y animales, pero no insectos como medio de transporte de semillas.",
    "context": "Sometimes using the wind or animals as carriers.",
    "points": 1
  }
]
};
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Prefixes in Science (Bio, Geo, Hydro)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Prefix Question ${i+1}: "Geo-" refers to:`, options: ['Earth', 'Water', 'Life'], correctAnswer: 'Earth', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Scientific Method Terminology', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Method Question ${i+1}: A "hypothesis" is:`, options: ['A testable prediction', 'A proven fact', 'A type of graph'], correctAnswer: 'A testable prediction', points: 1 })) };


const s2 = { id: genId(LEVEL, UNIT_ID, 's2', 0), type: 'listening', title: 'Placeholder Shard 2', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's2', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'listening', title: 'Placeholder Shard 3', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'listening', title: 'Placeholder Shard 4', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'listening', title: 'Placeholder Shard 5', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'listening', title: 'Placeholder Shard 6', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Placeholder Shard 7', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };

export const B1_WEEK_3 = createShardedToeflUnit(
  'toefl-b1-w3',
  'Week 3: Natural Sciences & Environment',
  'Explore biology, ecology, and environmental challenges with academic rigor.',
  ['Identify key biological terms', 'Understand cause-effect in ecology', 'Use modals of probability correctly'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
