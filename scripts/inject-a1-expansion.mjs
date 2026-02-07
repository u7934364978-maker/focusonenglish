import fs from 'fs';
import path from 'path';

// Manual copy of data to avoid TS import issues in this utility script
const A1_EXP_ADJECTIVES = [
  {
    questions: [
      {
        type: 'multiple-choice',
        question: 'Traduce: Éste es un café bueno.',
        options: ['This is a coffee good.', 'This is a good coffee.', 'This is a good coffees.'],
        correctAnswer: 'This is a good coffee.',
        explanation: 'El adjetivo "good" debe ir antes del sustantivo "coffee".'
      },
      {
        type: 'multiple-choice',
        question: 'Traduce: El sandwich de queso y tomate es caro.',
        options: ['The cheese and tomato sandwich is expensive.', 'The sandwich of cheese and tomato is expensive.', 'The cheese and tomato sandwich is expensives.'],
        correctAnswer: 'The cheese and tomato sandwich is expensive.',
        explanation: 'En inglés usamos "cheese and tomato sandwich" y el adjetivo "expensive" no cambia si es plural o singular.'
      },
      {
        type: 'multiple-choice',
        question: 'Traduce: Una mujer alta.',
        options: ['A woman tall.', 'A tall woman.', 'A talls woman.'],
        correctAnswer: 'A tall woman.',
        explanation: 'Adjetivo (tall) + Sustantivo (woman).'
      }
    ]
  }
];

const A1_EXP_ADVERBS = [
  {
    questions: [
      {
        type: 'multiple-choice',
        question: 'He drives ___ (slow).',
        options: ['slow', 'slowly', 'slows'],
        correctAnswer: 'slowly',
        explanation: '¿Cómo conduce él? Despacio. Necesitamos un adverbio: slow + ly.'
      },
      {
        type: 'multiple-choice',
        question: 'She sings very ___ (good).',
        options: ['good', 'goodly', 'well'],
        correctAnswer: 'well',
        explanation: '"Well" es el adverbio irregular de "good".'
      },
      {
        type: 'multiple-choice',
        question: 'He is a ___ (dangerous) driver.',
        options: ['dangerous', 'dangerously', 'dangerousely'],
        correctAnswer: 'dangerous',
        explanation: 'Aquí acompaña a "driver" (sustantivo), por lo tanto necesitamos un adjetivo.'
      }
    ]
  },
  {
    questions: [
      {
        type: 'multiple-choice',
        question: 'Ordena: to the mountains / never / we go',
        options: ['We never go to the mountains.', 'We go never to the mountains.', 'Never we go to the mountains.'],
        correctAnswer: 'We never go to the mountains.',
        explanation: 'El adverbio "never" va entre el sujeto (we) y el verbo (go).'
      },
      {
        type: 'multiple-choice',
        question: '¿Cuál es correcta?',
        options: ['Our teacher usually is angry.', 'Our teacher is usually angry.', 'Usually our teacher is angry.'],
        correctAnswer: 'Our teacher is usually angry.',
        explanation: 'Con el verbo "to be" (is), el adverbio va después.'
      }
    ]
  }
];

const A1_EXP_CONNECTORS = [
  {
    questions: [
      {
        type: 'multiple-choice',
        question: 'We can discuss it ___________ lunch.',
        options: ['after', 'then', 'afterwards'],
        correctAnswer: 'after',
        explanation: 'Usamos "after" seguido de un sustantivo (lunch). "Después de la comida".'
      },
      {
        type: 'multiple-choice',
        question: 'I get up and ___________ I get dressed.',
        options: ['after', 'then', 'afterwards'],
        correctAnswer: 'then',
        explanation: '"Then" indica una correlación de hechos: "y después me visto".'
      },
      {
        type: 'multiple-choice',
        question: '___________ I have a shower, I go to bed.',
        options: ['After', 'Then', 'Afterwards'],
        correctAnswer: 'After',
        explanation: '"After" seguido de una oración (I have a shower). "Después de ducharme".'
      }
    ]
  }
];

const A1_EXP_COMMON_MISTAKES = [
  {
    questions: [
      {
        type: 'multiple-choice',
        question: '¿Cuál es correcta?',
        options: ['I have 3 childrens.', 'I have 3 children.', 'I have 3 childs.'],
        correctAnswer: 'I have 3 children.',
        explanation: '"Children" ya es plural, no necesita -s.'
      },
      {
        type: 'multiple-choice',
        question: '¿Cómo se dice: "en Internet"?',
        options: ['in Internet', 'on Internet', 'on the Internet'],
        correctAnswer: 'on the Internet',
        explanation: 'La expresión correcta es siempre "on the Internet".'
      },
      {
        type: 'multiple-choice',
        question: 'I need some ___ (información).',
        options: ['informations', 'information', 'an information'],
        correctAnswer: 'information',
        explanation: '"Information" es incontable, nunca lleva -s.'
      }
    ]
  }
];

const A1_EXP_POSSESSION = [
  {
    questions: [
      {
        type: 'multiple-choice',
        question: 'Traduce: La casa de María.',
        options: ["Maria's house", 'The house of Maria', 'Marias house'],
        correctAnswer: "Maria's house",
        explanation: "Poseedor (Maria) + 's + Objeto (house)."
      },
      {
        type: 'multiple-choice',
        question: 'La casa de mis padres (plural).',
        options: ["My parent's house", "My parents' house", 'The house of my parents'],
        correctAnswer: "My parents' house",
        explanation: 'En plurales que terminan en -s, solo añadimos el apóstrofo.'
      }
    ]
  }
];

const A1_EXP_CAPITALS = [
  {
    questions: [
      {
        type: 'multiple-choice',
        question: '¿Cuál es correcta?',
        options: ["I'm learning english.", "I'm learning English.", "i'm learning english."],
        correctAnswer: "I'm learning English.",
        explanation: 'Los idiomas siempre van con mayúscula en inglés.'
      },
      {
        type: 'multiple-choice',
        question: 'My birthday is in ___ (mayo).',
        options: ['may', 'May', 'mAy'],
        correctAnswer: 'May',
        explanation: 'Los meses del año siempre van con mayúscula.'
      }
    ]
  }
];

const A1_EXP_DATES = [
  {
    questions: [
      {
        type: 'multiple-choice',
        question: '¿Cómo se escribe: 22 de abril?',
        options: ['22th April', '22st April', '22nd April'],
        correctAnswer: '22nd April',
        explanation: 'El ordinal de 22 es "twenty-second", por tanto termina en "nd".'
      }
    ]
  }
];

const A1_EXP_TRANSPORT = [
  {
    questions: [
      {
        type: 'multiple-choice',
        question: 'I go to work ___ car.',
        options: ['by', 'in', 'on'],
        correctAnswer: 'by',
        explanation: 'Uso general del medio de transporte.'
      },
      {
        type: 'multiple-choice',
        question: 'I came ___ my car.',
        options: ['by', 'in', 'on'],
        correctAnswer: 'in',
        explanation: 'Cuando es específico ("my car"), usamos "in".'
      },
      {
        type: 'multiple-choice',
        question: 'I go to school ___ foot.',
        options: ['by', 'in', 'on'],
        correctAnswer: 'on',
        explanation: 'La expresión para ir andando es siempre "on foot".'
      }
    ]
  },
  {
    questions: [
      {
        type: 'multiple-choice',
        question: 'Phone me when you ___ the train.',
        options: ['get into', 'get on', 'get in'],
        correctAnswer: 'get on',
        explanation: 'Para trenes usamos "get on".'
      },
      {
        type: 'multiple-choice',
        question: 'I ___ the taxi and paid the driver.',
        options: ['got off', 'got out of', 'got out'],
        correctAnswer: 'got out of',
        explanation: 'Para salir de un taxi usamos "get out of".'
      }
    ]
  }
];

const A1_EXP_PLACE = [
  {
    questions: [
      {
        type: 'multiple-choice',
        question: 'There is a supermarket ___ my house.',
        options: ['near of', 'near', 'close'],
        correctAnswer: 'near',
        explanation: '"Near" no necesita "of".'
      },
      {
        type: 'multiple-choice',
        question: 'I sat ___ a beautiful woman on the train.',
        options: ['opposite', 'opposite to', 'in front of'],
        correctAnswer: 'opposite',
        explanation: '"Opposite" significa cara a cara, sin preposiciones adicionales.'
      },
      {
        type: 'multiple-choice',
        question: 'Traduce: Al lado de mi casa hay una guardería.',
        options: ['Near my house...', 'Next to my house...', 'In front of my house...'],
        correctAnswer: 'Next to my house...',
        explanation: '"Next to" es "al lado de".'
      }
    ]
  }
];

const COURSE_PATH = 'src/content/cursos/ingles-a1';

const MAPPINGS = {
  'unit4.json': A1_EXP_COMMON_MISTAKES,
  'unit5.json': A1_EXP_ADJECTIVES,
  'unit7.json': A1_EXP_POSSESSION,
  'unit8.json': A1_EXP_COMMON_MISTAKES,
  'unit9.json': [...A1_EXP_ADVERBS, ...A1_EXP_CONNECTORS],
  'unit10.json': [...A1_EXP_CAPITALS, ...A1_EXP_DATES],
  'unit17.json': [...A1_EXP_TRANSPORT, ...A1_EXP_PLACE]
};

function convertExerciseToInteraction(exercise, unitId, baseIndex) {
  return exercise.questions.map((q, qIndex) => {
    const interactionId = `${unitId.toUpperCase()}_EXP_${baseIndex}_${qIndex}`;
    
    if (q.type === 'multiple-choice') {
      return {
        interaction_id: interactionId,
        type: 'multiple_choice',
        prompt_es: q.question,
        options: q.options.map((opt, i) => ({
          id: `opt${i}`,
          text: opt
        })),
        correct_answer: `opt${q.options.indexOf(q.correctAnswer)}`,
        explanation: q.explanation,
        mastery_tag: 'grammar'
      };
    }
    return null;
  }).filter(Boolean);
}

async function run() {
  for (const [filename, exercises] of Object.entries(MAPPINGS)) {
    const filePath = path.join(COURSE_PATH, filename);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      continue;
    }

    const unitData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const unitId = filename.replace('.json', '');
    
    let newInteractions = [];
    exercises.forEach((ex, exIndex) => {
      newInteractions.push(...convertExerciseToInteraction(ex, unitId, exIndex));
    });

    // Add to the main block
    if (unitData.blocks && unitData.blocks[0] && unitData.blocks[0].content) {
      // Remove previous expansion content if we already ran it (to avoid duplicates)
      unitData.blocks[0].content = unitData.blocks[0].content.filter(i => !i.interaction_id.includes('_EXP_'));
      
      unitData.blocks[0].content.push(...newInteractions);
      fs.writeFileSync(filePath, JSON.stringify(unitData, null, 2));
      console.log(`Updated ${filename} with ${newInteractions.length} new interactions.`);
    }
  }
}

run().catch(console.error);
