import fs from 'fs';
import { GENERATED_A1_UNIT1_EXERCISES } from '../src/lib/generated-a1-unit1-exercises';

const initialExercises = [
  // SECTION 1: GREETINGS & FAREWELLS (Vocabulary)
  {
    "id": "a1-u1-e1",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[greeting|saludo]] [[for|para]] [[the|la]] [[morning|mañana]].",
      "questions": [
        {
          "question": "8:00 AM",
          "options": [
            "[[Good morning|Buenos días]]",
            "[[Good evening|Buenas noches (tarde)]]",
            "[[Goodbye|Adiós]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[Good morning|Buenos días]]' [[until|hasta]] [[the|el]] [[midday|mediodía]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Farewells",
    "difficulty": "easy",
    "content": {
      "title": "[[Farewells|Despedidas]]",
      "instructions": "[[Which|Cuál]] [[word|palabra]] [[is|es]] [[a|una]] [[farewell|despedida]]?",
      "questions": [
        {
          "question": "[[When|Cuando]] [[you|tú]] [[leave|te vas]]...",
          "options": [
            "[[Hello|Hola]]",
            "[[Hi|Hola (informal)]]",
            "[[Goodbye|Adiós]]"
          ],
          "correctAnswer": 2,
          "explanation": "'[[Goodbye|Adiós]]' [[is|es]] [[used|usado]] [[to|para]] [[leave|irse]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },

  // SECTION 2: PERSONAL INFORMATION (Vocabulary & Grammar)
  {
    "id": "a1-u1-e3",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Introducing|Presentándome]] [[Myself|a mí mismo]]",
      "instructions": "[[Complete|Completa]] [[with|con]] '[[am|soy]]' [[or|o]] '[[are|eres]]'.",
      "questions": [
        {
          "question": "[[I|Yo]] ____ [[John|Juan]].",
          "correctAnswer": "am",
          "explanation": "[[With|Con]] '[[I|Yo]]', [[we|nosotros]] [[use|usamos]] '[[am|soy/estoy]]'."
        },
        {
          "question": "[[You|Tú]] ____ [[my|mi]] [[friend|amigo]].",
          "correctAnswer": "are",
          "explanation": "[[With|Con]] '[[You|Tú]]', [[we|nosotros]] [[use|usamos]] '[[are|eres/estás]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "medium",
    "content": {
      "title": "[[My|Mi]] [[and|y]] [[Your|Tu]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[possessive|posesivo]].",
      "questions": [
        {
          "question": "[[Hello|Hola]], (_____) [[name|nombre]] [[is|es]] [[Alice|Alicia]].",
          "options": [
            "[[My|Mi]]",
            "[[Your|Tu]]",
            "[[I|Yo]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[My|Mi]]' [[to|para]] [[show|mostrar]] [[possession|posesión]] [[of|de]] [[the|el]] [[speaker|hablante]]."
        }
      ]
    },
    "topicName": "Grammar"
  },

  // SECTION 3: SENTENCE BUILDING
  {
    "id": "a1-u1-e5",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "content": {
      "title": "[[Asking|Preguntando]] [[Names|Nombres]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[question|pregunta]].",
      "correctSentence": "[[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]?",
      "words": ["[[is|es]]", "[[What|Cuál]]", "[[your|tu]]", "[[name|nombre]]?"]
    },
    "topicName": "Grammar"
  },

  // SECTION 4: READING COMPREHENSION (Two-phase)
  {
    "id": "a1-u1-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "A: [[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Tom|Tom]]. [[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]?\nB: [[Hi|Hola]], [[Tom|Tom]]! [[I|Yo]] [[am|soy]] [[Sarah|Sara]]. [[Nice|Encantada]] [[to|de]] [[meet|conocerte]] [[you|a ti]].\nA: [[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]], [[too|también]].",
    "content": {
      "title": "[[First|Primer]] [[Meeting|Encuentro]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[dialogue|diálogo]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|el]] [[woman's|de la mujer]] [[name|nombre]]?",
          "options": [
            "[[Tom|Tom]]",
            "[[Sarah|Sara]]",
            "[[Alice|Alicia]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[In|En]] [[the|el]] [[dialogue|diálogo]], [[she|ella]] [[says|dice]]: '[[I|Yo]] [[am|soy]] [[Sarah|Sara]]'."
        },
        {
          "question": "[[Is|¿Es]] [[this|este]] [[a|un]] [[greeting|saludo]] [[or|o]] [[a|una]] [[farewell|despedida]]?",
          "options": [
            "[[Greeting|Saludo]]",
            "[[Farewell|Despedida]]",
            "[[Both|Ambos]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[dialogue|diálogo]] [[starts|empieza]] [[with|con]] '[[Hello|Hola]]' [[and|y]] '[[Hi|Hola]]'."
        }
      ]
    },
    "topicName": "Reading"
  }
];

function wrapWithSpanish(text: string): string {
  if (!text) return text;
  // Simple heuristic: if it contains spaces and no brackets, wrap common A1 words
  // For now, let's just use a map of common A1 words
  const map: Record<string, string> = {
    'Hello': '[[Hello|Hola]]',
    'Hi': '[[Hi|Hola]]',
    'Goodbye': '[[Goodbye|Adiós]]',
    'Bye': '[[Bye|Adiós]]',
    'Good morning': '[[Good morning|Buenos días]]',
    'Good night': '[[Good night|Buenas noches]]',
    'name': '[[name|nombre]]',
    'What': '[[What|Qué/Cuál]]',
    'is': '[[is|es]]',
    'your': '[[your|tu]]',
    'My': '[[My|Mi]]',
    'I': '[[I|Yo]]',
    'am': '[[am|soy/estoy]]',
    'from': '[[from|de]]',
    'friend': '[[friend|amigo]]',
    'teacher': '[[teacher|profesor]]',
    'student': '[[student|estudiante]]',
    'question': '[[question|pregunta]]',
    'book': '[[book|libro]]',
    'alphabet': '[[alphabet|alfabeto]]'
  };
  
  let result = text;
  Object.keys(map).forEach(key => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    result = result.replace(regex, map[key]);
  });
  return result;
}

const additionalExercises = GENERATED_A1_UNIT1_EXERCISES
  .slice(0, 54)
  .map((ex, index) => {
    const newEx = { ...ex };
    newEx.id = `a1-u1-gen-${index}`;
    
    // Normalize correct answer for multiple choice
    if (newEx.type === 'multiple-choice' && newEx.content.questions) {
      newEx.content.questions.forEach((q: any) => {
        if (typeof q.correctAnswer === 'string' && q.correctAnswer.length === 1) {
          const charCode = q.correctAnswer.toUpperCase().charCodeAt(0);
          if (charCode >= 65 && charCode <= 68) {
            q.correctAnswer = charCode - 65;
          }
        }
        q.question = wrapWithSpanish(q.question);
        if (q.options) {
          q.options = q.options.map((opt: string) => wrapWithSpanish(opt));
        }
      });
    }
    
    return newEx;
  });

const allExercises = [...initialExercises, ...additionalExercises];

const fileContent = `import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = ${JSON.stringify(allExercises, null, 2)};
`;

fs.writeFileSync('src/lib/course/a1/unit-1.ts', fileContent);
console.log('✅ Unit 1 updated with 60 exercises');
