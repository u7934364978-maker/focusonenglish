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
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Prefixes in Science (Bio, Geo, Hydro)',
  transcript: `Welcome to today's lecture on scientific prefixes. These small parts of words, known as prefixes, can significantly change the meaning of a word. Understanding them can give you insights into the subject matter. Let's start with 'bio'. This prefix relates to life, like in the words biology, which is the study of living organisms, and biography, a story of someone's life. Next, we have 'geo'. This prefix is associated with earth or ground. Geography, for example, is the study of the Earth’s landscapes, people, and phenomena. Geology is another relevant term, focusing on the structure of the Earth. Finally, there's 'hydro', relating to water. Hydrology is the scientific study of the movement, distribution, and quality of water. Remembering these prefixes will help you decipher complex scientific terms. Let's move into a few examples. If someone is a biologist, they study life forms. A geologist studies rocks and the Earth's crust, and a hydrologist could be looking at rivers or groundwater. By knowing what each prefix stands for, you can usually deduce the general meaning of the whole word. This understanding can be crucial when you encounter unfamiliar terms in scientific contexts. So, now that we understand these foundational prefixes, let's test your understanding with a few questions.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 1),
    "type": "multiple-choice",
    "question": "What does the prefix 'bio' refer to?",
    "options": [
      "Life",
      "Water",
      "Earth",
      "Wind"
    ],
    "correctAnswer": "Life",
    "explanation": "La palabra 'bio' se refiere a la vida, como en biología o biografía.",
    "context": "The prefix 'bio' relates to life, like in the words biology and biography.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 2),
    "type": "multiple-choice",
    "question": "Which word is associated with the prefix 'geo'?",
    "options": [
      "Biology",
      "Geology",
      "Hydrology",
      "Meteorology"
    ],
    "correctAnswer": "Geology",
    "explanation": "La palabra 'geo' se refiere a la tierra, como en geología.",
    "context": "Geology is another relevant term, focusing on the structure of the Earth.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 3),
    "type": "multiple-choice",
    "question": "What subject does 'hydrology' cover?",
    "options": [
      "Life forms",
      "Earth's structure",
      "Water movement",
      "Weather patterns"
    ],
    "correctAnswer": "Water movement",
    "explanation": "La hidrología es el estudio científico del movimiento, distribución y calidad del agua.",
    "context": "Hydrology is the scientific study of the movement, distribution, and quality of water.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 4),
    "type": "multiple-choice",
    "question": "If someone is a biologist, what do they study?",
    "options": [
      "Rocks",
      "Life forms",
      "Weather",
      "Water currents"
    ],
    "correctAnswer": "Life forms",
    "explanation": "Un biólogo estudia las formas de vida, lo que está relacionado con el prefijo 'bio'.",
    "context": "If someone is a biologist, they study life forms.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 5),
    "type": "multiple-choice",
    "question": "Which of the following is NOT related to the prefix 'hydro'?",
    "options": [
      "Hydrology",
      "Hydropower",
      "Hydration",
      "Geography"
    ],
    "correctAnswer": "Geography",
    "explanation": "La geografía está relacionado con el prefijo 'geo', no 'hydro'.",
    "context": "Geography is the study of the Earth’s landscapes, not related to water.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 6),
    "type": "multiple-choice",
    "question": "Which prefix would you associate with 'oceanography'?",
    "options": [
      "Bio",
      "Geo",
      "Hydro",
      "Aero"
    ],
    "correctAnswer": "Hydro",
    "explanation": "La oceanografía está relacionada con el agua, por lo tanto, está relacionada con el prefijo 'hydro'.",
    "context": "The prefix 'hydro' relates to water, oceanography studies ocean waters.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 7),
    "type": "multiple-choice",
    "question": "What does the prefix 'geo' mean in 'geography'?",
    "options": [
      "Study",
      "Life",
      "Water",
      "Earth"
    ],
    "correctAnswer": "Earth",
    "explanation": "El prefijo 'geo' en geografía significa 'tierra'.",
    "context": "Geography is the study of the Earth’s landscapes.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 8),
    "type": "multiple-choice",
    "question": "Which of these words means 'study of living organisms'?",
    "options": [
      "Hydrology",
      "Geology",
      "Biology",
      "Meteorology"
    ],
    "correctAnswer": "Biology",
    "explanation": "La biología es el estudio de los organismos vivos, usando el prefijo 'bio'.",
    "context": "Biology is the study of living organisms.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 9),
    "type": "multiple-choice",
    "question": "A geologist is most likely to study:",
    "options": [
      "Plants",
      "Rocks",
      "Weather patterns",
      "Ocean currents"
    ],
    "correctAnswer": "Rocks",
    "explanation": "Un geólogo estudia las rocas y la corteza terrestre.",
    "context": "A geologist studies rocks and the Earth's crust.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 10),
    "type": "multiple-choice",
    "question": "Which prefix would you associate with the study of Earth’s structure?",
    "options": [
      "Bio",
      "Geo",
      "Hydro",
      "Aero"
    ],
    "correctAnswer": "Geo",
    "explanation": "El estudio de la estructura de la tierra está asociado con el prefijo 'geo'.",
    "context": "Geology is another relevant term, focusing on the structure of the Earth.",
    "points": 1
  }
]
};
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Placeholder Shard 3',
  transcript: `Good morning, class. Today, we're going to explore the fascinating world of bees, incredible creatures that play a vital role in our ecosystem. Did you know that bees are responsible for pollinating about one-third of the food we eat? That's because they transfer pollen, which helps plants produce fruits and seeds. Bees are social insects and live in colonies. Each colony has a queen bee, thousands of worker bees, and male drones. The queen's primary role is to lay eggs, while the workers collect nectar and pollen from flowers. This nectar is where honey comes from. Bees store honey in honeycombs to feed the colony during the winter. Now, let me tell you about the challenges bees face today. One major issue is habitat loss due to urbanization and farming practices. Additionally, pesticides pose a threat to their survival. Thankfully, there are efforts underway to protect bees, such as creating bee-friendly habitats and reducing pesticide use.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 1),
    "type": "multiple-choice",
    "question": "What role do bees play in the ecosystem?",
    "options": [
      "They are a food source for many animals.",
      "They pollinate plants, which produces fruits and seeds.",
      "They produce oxygen through photosynthesis.",
      "They provide shelter for small insects."
    ],
    "correctAnswer": "They pollinate plants, which produces fruits and seeds.",
    "explanation": "Las abejas transfieren polen, lo que ayuda a las plantas a producir frutas y semillas.",
    "context": "Did you know that bees are responsible for pollinating about one-third of the food we eat? That's because they transfer pollen, which helps plants produce fruits and seeds.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 2),
    "type": "multiple-choice",
    "question": "What is the primary role of the queen bee in a colony?",
    "options": [
      "To collect nectar and pollen.",
      "To protect the hive from intruders.",
      "To lay eggs.",
      "To make honey."
    ],
    "correctAnswer": "To lay eggs.",
    "explanation": "La función principal de la reina es poner huevos.",
    "context": "Each colony has a queen bee, thousands of worker bees, and male drones. The queen's primary role is to lay eggs.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 3),
    "type": "multiple-choice",
    "question": "Why do bees store honey in honeycombs?",
    "options": [
      "To serve as a decoration.",
      "To feed the colony during the winter.",
      "To attract other insects.",
      "To prevent it from spoiling."
    ],
    "correctAnswer": "To feed the colony during the winter.",
    "explanation": "Las abejas almacenan miel en panales para alimentar la colonia durante el invierno.",
    "context": "Bees store honey in honeycombs to feed the colony during the winter.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 4),
    "type": "multiple-choice",
    "question": "What is one major challenge that bees face today?",
    "options": [
      "Excessive rain.",
      "Habitat loss due to urbanization and farming practices.",
      "Increased natural predators.",
      "Lack of flowers."
    ],
    "correctAnswer": "Habitat loss due to urbanization and farming practices.",
    "explanation": "La pérdida de hábitat debido a la urbanización y prácticas agrícolas es un problema importante para las abejas.",
    "context": "One major issue is habitat loss due to urbanization and farming practices.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 5),
    "type": "multiple-choice",
    "question": "Why are pesticides a threat to bees?",
    "options": [
      "They increase the bee population.",
      "They make plants grow faster.",
      "They harm the survival of bees.",
      "They create more flowers."
    ],
    "correctAnswer": "They harm the survival of bees.",
    "explanation": "Los pesticidas representan una amenaza para las abejas porque dañan su supervivencia.",
    "context": "Additionally, pesticides pose a threat to their survival.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 6),
    "type": "multiple-choice",
    "question": "What efforts are being made to protect bees?",
    "options": [
      "Introducing more pesticides.",
      "Creating bee-friendly habitats and reducing pesticide use.",
      "Increasing urbanization.",
      "Building larger cities."
    ],
    "correctAnswer": "Creating bee-friendly habitats and reducing pesticide use.",
    "explanation": "Se están haciendo esfuerzos para proteger a las abejas creando hábitats amigables y reduciendo el uso de pesticidas.",
    "context": "Thankfully, there are efforts underway to protect bees, such as creating bee-friendly habitats and reducing pesticide use.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 7),
    "type": "multiple-choice",
    "question": "What happens when bees transfer pollen?",
    "options": [
      "It spoils the nectar.",
      "It helps plants produce fruits and seeds.",
      "It attracts pests.",
      "It pollutes the air."
    ],
    "correctAnswer": "It helps plants produce fruits and seeds.",
    "explanation": "El polen transferido por las abejas ayuda a las plantas a producir frutas y semillas.",
    "context": "That's because they transfer pollen, which helps plants produce fruits and seeds.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 8),
    "type": "multiple-choice",
    "question": "How much of the food we eat is affected by bee pollination?",
    "options": [
      "One-fourth.",
      "One-third.",
      "One-half.",
      "Three-quarters."
    ],
    "correctAnswer": "One-third.",
    "explanation": "Aproximadamente un tercio de los alimentos que comemos es polinizado por abejas.",
    "context": "Did you know that bees are responsible for pollinating about one-third of the food we eat?",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 9),
    "type": "multiple-choice",
    "question": "What do worker bees do in a colony?",
    "options": [
      "Lay eggs.",
      "Collect nectar and pollen.",
      "Battle with other colonies.",
      "Hibernate during winter."
    ],
    "correctAnswer": "Collect nectar and pollen.",
    "explanation": "Las abejas obreras recolectan néctar y polen.",
    "context": "The queen's primary role is to lay eggs, while the workers collect nectar and pollen from flowers.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 10),
    "type": "multiple-choice",
    "question": "What is the primary source of honey?",
    "options": [
      "Sugar.",
      "Water.",
      "Nectar.",
      "Flower petals."
    ],
    "correctAnswer": "Nectar.",
    "explanation": "El néctar es la fuente principal de la miel.",
    "context": "The workers collect nectar and pollen from flowers. This nectar is where honey comes from.",
    "points": 1
  }
]
};
const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Placeholder Shard 4',
  transcript: `Welcome everyone. Today we'll be discussing the basics of plant biology, focusing on how plants grow and how they contribute to our ecosystem. Plants are unique because they're autotrophic, meaning they produce their own food. During photosynthesis, plants use sunlight to transform carbon dioxide and water into glucose and oxygen. This process is essential not only for the plant's survival but also for maintaining the balance of our atmosphere. Moreover, plants are crucial in food chains; they serve as primary producers, which means they are the first source of energy for all other organisms. Let's also talk about different types of plants, such as flowering plants, which are known as angiosperms. These plants reproduce by seeds that are often protected by fruits. Non-flowering plants, like ferns and mosses, reproduce through spores. Understanding these basic concepts helps us appreciate the diversity and importance of plant life on Earth. Now, I'll take any questions you might have on this topic.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 1),
    "type": "multiple-choice",
    "question": "What is the main topic of today's discussion?",
    "options": [
      "Plant biology",
      "Animal behavior",
      "Climate change",
      "Marine ecosystems"
    ],
    "correctAnswer": "Plant biology",
    "explanation": "La discusión se centra en la biología de las plantas, como se menciona al principio.",
    "context": "Today we'll be discussing the basics of plant biology...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 2),
    "type": "multiple-choice",
    "question": "What does autotrophic mean?",
    "options": [
      "Plants absorb nutrients from soil",
      "Plants produce their own food",
      "Plants depend on other organisms for food",
      "Plants grow without sunlight"
    ],
    "correctAnswer": "Plants produce their own food",
    "explanation": "Autotrófico significa que las plantas producen su propia comida, indicado claramente en la explicación.",
    "context": "Plants are unique because they're autotrophic, meaning they produce their own food.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 3),
    "type": "multiple-choice",
    "question": "What do plants use for photosynthesis?",
    "options": [
      "Soil nutrients and water",
      "Water and sugar",
      "Oxygen and sunlight",
      "Sunlight and carbon dioxide"
    ],
    "correctAnswer": "Sunlight and carbon dioxide",
    "explanation": "Las plantas usan la luz solar y el dióxido de carbono durante la fotosíntesis, como se describe en el texto.",
    "context": "Plants use sunlight to transform carbon dioxide and water...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 4),
    "type": "multiple-choice",
    "question": "Why is photosynthesis essential?",
    "options": [
      "It helps plants grow taller",
      "It maintains atmospheric balance",
      "It produces nitrogen for the soil",
      "It reduces soil erosion"
    ],
    "correctAnswer": "It maintains atmospheric balance",
    "explanation": "La fotosíntesis es esencial para mantener el equilibrio de nuestra atmósfera, según se menciona en el texto.",
    "context": "This process is essential not only for the plant's survival but also for maintaining the balance of our atmosphere.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 5),
    "type": "multiple-choice",
    "question": "What role do plants play in the food chain?",
    "options": [
      "Primary producers",
      "Secondary consumers",
      "Decomposers",
      "Predators"
    ],
    "correctAnswer": "Primary producers",
    "explanation": "Las plantas son productoras primarias, siendo la primera fuente de energía para los organismos.",
    "context": "Moreover, plants are crucial in food chains; they serve as primary producers...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 6),
    "type": "multiple-choice",
    "question": "Which type of plant is an angiosperm?",
    "options": [
      "Ferns",
      "Mosses",
      "Flowering plants",
      "Conifers"
    ],
    "correctAnswer": "Flowering plants",
    "explanation": "Los angiospermas son plantas con flores, lo que se especifica claramente.",
    "context": "Flowering plants, which are known as angiosperms...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 7),
    "type": "multiple-choice",
    "question": "How do non-flowering plants reproduce?",
    "options": [
      "Through seeds",
      "Through spores",
      "By budding",
      "By splitting"
    ],
    "correctAnswer": "Through spores",
    "explanation": "Las plantas no florales como los helechos y musgos se reproducen mediante esporas.",
    "context": "Non-flowering plants, like ferns and mosses, reproduce through spores.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 8),
    "type": "multiple-choice",
    "question": "What are examples of non-flowering plants?",
    "options": [
      "Ferns and mosses",
      "Roses and tulips",
      "Pine trees and oaks",
      "Grass and wheat"
    ],
    "correctAnswer": "Ferns and mosses",
    "explanation": "Los helechos y los musgos son ejemplos mencionados de plantas no florales.",
    "context": "Non-flowering plants, like ferns and mosses...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 9),
    "type": "multiple-choice",
    "question": "What protects the seeds in angiosperms?",
    "options": [
      "Water",
      "Leaves",
      "Fruits",
      "Bark"
    ],
    "correctAnswer": "Fruits",
    "explanation": "En los angiospermas, las semillas a menudo están protegidas por frutos, como se describe.",
    "context": "These plants reproduce by seeds that are often protected by fruits.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 10),
    "type": "multiple-choice",
    "question": "What helps us appreciate plant life on Earth?",
    "options": [
      "Understanding basic concepts",
      "Growing a garden",
      "Visiting forests",
      "Studying climate change"
    ],
    "correctAnswer": "Understanding basic concepts",
    "explanation": "Comprender conceptos básicos nos ayuda a apreciar la vida vegetal, como se menciona al final del texto.",
    "context": "Understanding these basic concepts helps us appreciate the diversity and importance of plant life on Earth.",
    "points": 1
  }
]
};
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Placeholder Shard 5',
  transcript: `Good afternoon, everyone. Today's lecture will focus on the importance of urban parks in modern cities. Urban parks provide a vital green space in the midst of bustling city life and offer numerous benefits to residents. Firstly, they help improve the air quality by filtering pollutants and providing oxygen. Research shows that trees and plants in parks play a significant role in reducing air pollution. Additionally, parks are important for mental and physical health. People who live near parks have been found to be more active and happier. Parks offer spaces for exercise such as walking, jogging, or playing sports, which is crucial for maintaining physical fitness. They also serve as places for relaxation and stress reduction. Moreover, urban parks are often centers for community interaction. They host events, such as concerts, festivals, and educational programs that bring people together. This enhances community cohesion and allows people to feel connected to their city. Finally, urban parks provide habitats for urban wildlife, supporting biodiversity within the city. Animals and plants that thrive in these green spaces contribute to a balanced ecosystem. Let's discuss how we can improve these spaces to better serve their purpose in our ever-growing cities.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 1),
    "type": "multiple-choice",
    "question": "What is one primary benefit of urban parks mentioned in the lecture?",
    "options": [
      "They reduce traffic congestion",
      "They improve air quality",
      "They increase property prices",
      "They limit city expansion"
    ],
    "correctAnswer": "They improve air quality",
    "explanation": "La conferencia menciona que los parques urbanos mejoran la calidad del aire filtrando contaminantes.",
    "context": "Firstly, they help improve the air quality by filtering pollutants and providing oxygen.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 2),
    "type": "multiple-choice",
    "question": "How do urban parks affect the mental health of city residents?",
    "options": [
      "They have no impact",
      "They increase stress levels",
      "They provide relaxation and stress reduction",
      "They make people more competitive"
    ],
    "correctAnswer": "They provide relaxation and stress reduction",
    "explanation": "Los parques ofrecen lugares para la relajación y la reducción del estrés, beneficiando la salud mental.",
    "context": "They also serve as places for relaxation and stress reduction.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 3),
    "type": "multiple-choice",
    "question": "In what way do parks contribute to community interaction?",
    "options": [
      "By hosting agricultural markets",
      "By offering free transportation",
      "By hosting events like concerts and festivals",
      "By increasing tourism"
    ],
    "correctAnswer": "By hosting events like concerts and festivals",
    "explanation": "Los parques organizan eventos que reúnen a las personas y mejoran la cohesión comunitaria.",
    "context": "They host events, such as concerts, festivals, and educational programs that bring people together.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 4),
    "type": "multiple-choice",
    "question": "What role do urban parks play in the ecosystem?",
    "options": [
      "They destroy natural habitats",
      "They support biodiversity",
      "They pollute waterways",
      "They reduce plant growth"
    ],
    "correctAnswer": "They support biodiversity",
    "explanation": "Los parques urbanos proporcionan hábitats para la vida silvestre urbana, apoyando la biodiversidad.",
    "context": "Urban parks provide habitats for urban wildlife, supporting biodiversity within the city.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 5),
    "type": "multiple-choice",
    "question": "Why are parks beneficial for physical health?",
    "options": [
      "They offer fast food options",
      "They provide spaces for exercise",
      "They have large parking areas",
      "They reduce noise pollution"
    ],
    "correctAnswer": "They provide spaces for exercise",
    "explanation": "Los parques ofrecen espacios para ejercicio como caminar o jugar deportes, lo cual es esencial para la salud física.",
    "context": "Parks offer spaces for exercise such as walking, jogging, or playing sports, which is crucial for maintaining physical fitness.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 6),
    "type": "multiple-choice",
    "question": "What type of events do urban parks often host?",
    "options": [
      "Political rallies",
      "Corporate meetings",
      "Concerts and festivals",
      "Large-scale farming expositions"
    ],
    "correctAnswer": "Concerts and festivals",
    "explanation": "Los parques a menudo son sedes de conciertos y festivales que fomentan la interacción comunitaria.",
    "context": "They host events, such as concerts, festivals, and educational programs...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 7),
    "type": "multiple-choice",
    "question": "What has research shown about living near parks?",
    "options": [
      "People tend to become more isolated",
      "Air pollution increases",
      "Residents are more active and happier",
      "There are more traffic accidents"
    ],
    "correctAnswer": "Residents are more active and happier",
    "explanation": "La investigación muestra que las personas que viven cerca de parques son más activas y felices.",
    "context": "People who live near parks have been found to be more active and happier.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 8),
    "type": "multiple-choice",
    "question": "According to the lecture, why is community cohesion important?",
    "options": [
      "It helps reduce pollution",
      "It promotes urban wildlife",
      "It allows people to feel connected to their city",
      "It increases real estate prices"
    ],
    "correctAnswer": "It allows people to feel connected to their city",
    "explanation": "La cohesión comunitaria permite a las personas sentirse conectadas a su ciudad, mejorando la interacción comunitaria.",
    "context": "This enhances community cohesion and allows people to feel connected to their city.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 9),
    "type": "multiple-choice",
    "question": "What element of parks contributes to a balanced ecosystem?",
    "options": [
      "Concrete pathways",
      "Urban wildlife and plants",
      "Playground equipment",
      "Picnic areas"
    ],
    "correctAnswer": "Urban wildlife and plants",
    "explanation": "La vida silvestre y las plantas en parques contribuyen a un ecosistema equilibrado en las ciudades.",
    "context": "Animals and plants that thrive in these green spaces contribute to a balanced ecosystem.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 10),
    "type": "multiple-choice",
    "question": "How can urban parks help reduce air pollution?",
    "options": [
      "By providing parking spaces",
      "By supporting community events",
      "By filtering pollutants and providing oxygen",
      "By reducing city noise"
    ],
    "correctAnswer": "By filtering pollutants and providing oxygen",
    "explanation": "Los parques ayudan a reducir la contaminación del aire filtrando contaminantes y proporcionando oxígeno.",
    "context": "Firstly, they help improve the air quality by filtering pollutants and providing oxygen.",
    "points": 1
  }
]
};
const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Placeholder Shard 6',
  transcript: `Welcome everyone to today's lecture on the basics of urban planning. Urban planning is an important process in organizing cities and towns in efficient ways. It involves analyzing land use, infrastructure, and the environment to create functional and sustainable communities. Cities face numerous challenges like pollution, traffic congestion, and inadequate housing. Therefore, urban planners must consider long-term solutions to improve the quality of life. For instance, incorporating green spaces into urban areas can provide not just aesthetic benefits but also recreational opportunities and improved air quality. Public transportation systems, by their design, aim to reduce reliance on personal vehicles, easing traffic and lowering emissions. Additionally, urban planners collaborate with governments and communities to plan effectively. Understanding these basics will help us appreciate the value of thoughtful city design.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 1),
    "type": "multiple-choice",
    "question": "What is the primary focus of urban planning?",
    "options": [
      "Tourism development",
      "Organizing cities efficiently",
      "Historical preservation",
      "Increasing population growth"
    ],
    "correctAnswer": "Organizing cities efficiently",
    "explanation": "El enfoque principal de la planificación urbana es organizar ciudades de manera eficiente, como se mencionó en la primera parte del diálogo.",
    "context": "Urban planning is an important process in organizing cities and towns in efficient ways.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 2),
    "type": "multiple-choice",
    "question": "What challenge is mentioned as a part of urban planning?",
    "options": [
      "Promoting tourism",
      "Inadequate housing",
      "Rural development",
      "Educating children"
    ],
    "correctAnswer": "Inadequate housing",
    "explanation": "Uno de los desafíos mencionados es la vivienda inadecuada, que forma parte de los problemas que enfrentan las ciudades.",
    "context": "Cities face numerous challenges like pollution, traffic congestion, and inadequate housing.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 3),
    "type": "multiple-choice",
    "question": "Why do urban planners incorporate green spaces into cities?",
    "options": [
      "To increase property taxes",
      "To provide parking spaces",
      "For aesthetic and recreational benefits",
      "To attract tourists"
    ],
    "correctAnswer": "For aesthetic and recreational benefits",
    "explanation": "Las áreas verdes ofrecen beneficios estéticos y recreativos, además de mejorar la calidad del aire, como se menciona en el diálogo.",
    "context": "Incorporating green spaces into urban areas can provide not just aesthetic benefits but also recreational opportunities and improved air quality.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 4),
    "type": "multiple-choice",
    "question": "How do public transportation systems help cities?",
    "options": [
      "By reducing the city's budget",
      "By increasing property value",
      "By reducing traffic and emissions",
      "By promoting cultural heritage"
    ],
    "correctAnswer": "By reducing traffic and emissions",
    "explanation": "Los sistemas de transporte público ayudan a reducir el tráfico y las emisiones, como se señala en la discusión.",
    "context": "Public transportation systems, by their design, aim to reduce reliance on personal vehicles, easing traffic and lowering emissions.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 5),
    "type": "multiple-choice",
    "question": "What role do governments play in urban planning?",
    "options": [
      "They decide on tourist attractions",
      "They collaborate with planners",
      "They increase land prices",
      "They offer tax incentives"
    ],
    "correctAnswer": "They collaborate with planners",
    "explanation": "Los gobiernos colaboran con los planificadores para planificar las ciudades efectivamente, como se menciona en el diálogo.",
    "context": "Additionally, urban planners collaborate with governments and communities to plan effectively.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 6),
    "type": "multiple-choice",
    "question": "Which aspect is NOT a consideration for urban planners?",
    "options": [
      "Infrastructure",
      "Personal income",
      "Land use",
      "Environment"
    ],
    "correctAnswer": "Personal income",
    "explanation": "La renta personal no se identifica como una consideración para los planificadores urbanos en esta discusión.",
    "context": "It involves analyzing land use, infrastructure, and the environment to create functional and sustainable communities.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 7),
    "type": "multiple-choice",
    "question": "What is the ultimate goal of urban planning?",
    "options": [
      "To create entertainment hubs",
      "To improve the quality of life",
      "To increase city population",
      "To boost cultural activities"
    ],
    "correctAnswer": "To improve the quality of life",
    "explanation": "El objetivo final de la planificación urbana es mejorar la calidad de vida, como se establece en el diálogo.",
    "context": "Therefore, urban planners must consider long-term solutions to improve the quality of life.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 8),
    "type": "multiple-choice",
    "question": "What does urban planning help to analyze?",
    "options": [
      "Social media trends",
      "Weather patterns",
      "Traffic congestion",
      "Retail market"
    ],
    "correctAnswer": "Traffic congestion",
    "explanation": "La planificación urbana ayuda a analizar problemas como la congestión del tráfico, que se menciona en el diálogo.",
    "context": "Cities face numerous challenges like pollution, traffic congestion, and inadequate housing.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 9),
    "type": "multiple-choice",
    "question": "What is one environmental benefit of urban green spaces?",
    "options": [
      "Increased noise levels",
      "Improved air quality",
      "Higher rent rates",
      "Faster land development"
    ],
    "correctAnswer": "Improved air quality",
    "explanation": "Uno de los beneficios ambientales de las zonas verdes es la mejora de la calidad del aire, como se describe en la transcripción.",
    "context": "Incorporating green spaces into urban areas can provide not just aesthetic benefits but also recreational opportunities and improved air quality.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 10),
    "type": "multiple-choice",
    "question": "What does the lecture suggest about city planning?",
    "options": [
      "It causes pollution",
      "It looks for short-term benefits",
      "It's essential for functional cities",
      "It increases traffic problems"
    ],
    "correctAnswer": "It's essential for functional cities",
    "explanation": "La planificación de ciudades es esencial para el funcionamiento de las ciudades, como se menciona al principio de la conferencia.",
    "context": "Urban planning is an important process in organizing cities and towns in efficient ways.",
    "points": 1
  }
]
};
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Placeholder Shard 7',
  transcript: `Buenos días, clase. Hoy hablaremos sobre la historia de Internet. El Internet comenzó como una idea en los años sesenta, un proyecto llamado ARPANET. Este proyecto conectó inicialmente cuatro computadoras en diferentes universidades de Estados Unidos. Con el tiempo, el sistema creció y evolucionó, convirtiéndose en lo que conocemos hoy como Internet. Durante los años ochenta, se introdujo el protocolo TCP/IP, que todavía usamos para enviar y recibir datos. En los años noventa, con la llegada del World Wide Web, el acceso a información se democratizó, permitiendo que la gente común encontrara información, comunicara y compartiera ideas. Hoy, el Internet es una parte esencial de nuestras vidas, usada para el trabajo, la educación, y el entretenimiento diario. Es importante recordar que con el crecimiento del Internet también vinieron nuevos desafíos, como la seguridad y la privacidad.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 1),
    "type": "multiple-choice",
    "question": "¿En qué década comenzó el proyecto ARPANET?",
    "options": [
      "Años 50",
      "Años 60",
      "Años 70",
      "Años 80"
    ],
    "correctAnswer": "Años 60",
    "explanation": "El proyecto ARPANET comenzó como una idea en los años sesenta.",
    "context": "El Internet comenzó como una idea en los años sesenta, un proyecto llamado ARPANET.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 2),
    "type": "multiple-choice",
    "question": "¿Cuántas computadoras fueron inicialmente conectadas en el proyecto ARPANET?",
    "options": [
      "Dos",
      "Tres",
      "Cuatro",
      "Cinco"
    ],
    "correctAnswer": "Cuatro",
    "explanation": "Se menciona que ARPANET conectó inicialmente cuatro computadoras.",
    "context": "Este proyecto conectó inicialmente cuatro computadoras en diferentes universidades de Estados Unidos.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 3),
    "type": "multiple-choice",
    "question": "¿Qué protocolo fue introducido en los años ochenta que todavía se usa hoy?",
    "options": [
      "HTTP",
      "FTP",
      "TCP/IP",
      "SMTP"
    ],
    "correctAnswer": "TCP/IP",
    "explanation": "El texto indica que en los años ochenta, se introdujo el protocolo TCP/IP.",
    "context": "Durante los años ochenta, se introdujo el protocolo TCP/IP, que todavía usamos para enviar y recibir datos.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 4),
    "type": "multiple-choice",
    "question": "¿Qué permitió el World Wide Web en los años noventa?",
    "options": [
      "Mejor conexión de red",
      "Democratización del acceso a información",
      "Interconexión de empresas",
      "Desarrollo de software"
    ],
    "correctAnswer": "Democratización del acceso a información",
    "explanation": "El World Wide Web permitió que la gente común encontrara información fácilmente.",
    "context": "En los años noventa, con la llegada del World Wide Web, el acceso a información se democratizó...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 5),
    "type": "multiple-choice",
    "question": "¿De qué aspectos del Internet se habla como nuevos desafíos?",
    "options": [
      "Costo",
      "Seguridad y privacidad",
      "Velocidad",
      "Accesibilidad"
    ],
    "correctAnswer": "Seguridad y privacidad",
    "explanation": "El texto menciona específicamente la seguridad y la privacidad como nuevos desafíos.",
    "context": "Es importante recordar que con el crecimiento del Internet también vinieron nuevos desafíos, como la seguridad y la privacidad.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 6),
    "type": "multiple-choice",
    "question": "¿Cuál es una función del Internet mencionada en el texto?",
    "options": [
      "Diseño gráfico",
      "Trabajo colaborativo",
      "Programación",
      "Compartir ideas"
    ],
    "correctAnswer": "Compartir ideas",
    "explanation": "El texto habla sobre cómo el Internet permite compartir ideas.",
    "context": "...permitiendo que la gente común encontrara información, comunicara y compartiera ideas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 7),
    "type": "multiple-choice",
    "question": "¿Qué aspecto del Internet es esencial hoy en día?",
    "options": [
      "Su velocidad",
      "Su costo",
      "Su accesibilidad",
      "Su rol en la vida diaria"
    ],
    "correctAnswer": "Su rol en la vida diaria",
    "explanation": "El texto resalta que el Internet es una parte esencial de nuestras vidas.",
    "context": "Hoy, el Internet es una parte esencial de nuestras vidas, usada para el trabajo, la educación, y el entretenimiento diario.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 8),
    "type": "multiple-choice",
    "question": "¿Qué universidad fue la primera en conectarse con ARPANET?",
    "options": [
      "No se menciona una universidad específica",
      "Harvard",
      "Stanford",
      "MIT"
    ],
    "correctAnswer": "No se menciona una universidad específica",
    "explanation": "El texto indica que se conectaron cuatro universidades, pero no menciona nombres específicos.",
    "context": "Este proyecto conectó inicialmente cuatro computadoras en diferentes universidades de Estados Unidos.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 9),
    "type": "multiple-choice",
    "question": "¿Cuál es una aplicación del Internet mencionada en el texto?",
    "options": [
      "Producción musical",
      "Educación",
      "Salud",
      "Agricultura"
    ],
    "correctAnswer": "Educación",
    "explanation": "El texto menciona específicamente el uso del Internet para la educación.",
    "context": "...el Internet es una parte esencial de nuestras vidas, usada para el trabajo, la educación...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 10),
    "type": "multiple-choice",
    "question": "¿Qué impacto tuvo el Internet en el acceso a información?",
    "options": [
      "Limitó el acceso",
      "Incrementó el costo",
      "Cambió las fuentes de información",
      "Democratizó el acceso"
    ],
    "correctAnswer": "Democratizó el acceso",
    "explanation": "El texto describe cómo el Internet permitió un acceso más amplio a la información.",
    "context": "...el acceso a información se democratizó, permitiendo que la gente común encontrara información...",
    "points": 1
  }
]
};


const s2 = { id: genId(LEVEL, UNIT_ID, 's2', 0), type: 'listening', title: 'Placeholder Shard 2', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's2', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'listening', title: 'Placeholder Shard 10', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };

export const B1_WEEK_3 = createShardedToeflUnit(
  'toefl-b1-w3',
  'Week 3: Natural Sciences & Environment',
  'Explore biology, ecology, and environmental challenges with academic rigor.',
  ['Identify key biological terms', 'Understand cause-effect in ecology', 'Use modals of probability correctly'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
