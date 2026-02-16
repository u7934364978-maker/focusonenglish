/**
 * @status LOCKED
 * @pedagogical_version 1.0.0
 * @author Zencoder (Web Development Agent)
 * @description This file is pedagogically verified and locked. 
 * DO NOT MODIFY without explicit user authorization code: "AUTHORIZE_A1_U1_EDIT".
 */
import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  // ACT 1: THE FIRST MEETING
  {
    "id": "a1-u1-e1",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "Formal Morning Greeting",
      "instructions": "Sarah arrives at the office at 9:00 AM. She meets Mr. Brown, the manager. Choose the best greeting.",
      "questions": [
        {
          "question": "Sarah: \"________, Mr. Brown.\"",
          "options": [
            "[[Good morning|Buenos días]]",
            "[[Hi|Hola]]",
            "[[Good night|Buenas noches (despedida)]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[Good morning|Buenos días]]' [[for|para]] [[formal|formales]] [[situations|situaciones]] [[in|en]] [[the|la]] [[morning|mañana]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e2",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "content": {
      "title": "Introducing Yourself",
      "instructions": "Complete the sentence to introduce Sarah.",
      "questions": [
        {
          "question": "Sarah: \"[[Hello|Hola]], [[I|yo]] ____ Sarah Miller.\"",
          "options": ["[[am|soy]]", "[[is|es]]"],
          "correctAnswer": "[[am|soy]]",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[am|soy/estoy]]' [[with|con]] '[[I|yo]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e3",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "content": {
      "title": "My Name",
      "instructions": "Put the words in order.",
      "correctSentence": "My name is Sarah Miller.",
      "words": ["Miller.", "name", "My", "is", "Sarah"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "Nice to Meet You",
      "instructions": "Mr. Brown responds to Sarah. Choose the correct option.",
      "questions": [
        {
          "question": "Mr. Brown: \"[[It|Ello]] [[is|es]] [[a|un]] ________ [[to|de]] [[meet|conocerle]] [[you|a usted]], Sarah.\"",
          "options": [
            "[[pleasure|placer]]",
            "[[hello|hola]]",
            "[[bye|adiós]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[It is a pleasure to meet you|Es un placer conocerle]]' [[is|es]] [[very|muy]] [[professional|profesional]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "content": {
      "title": "Who is he?",
      "instructions": "Sarah is talking about Mr. Brown.",
      "questions": [
        {
          "question": "Sarah: \"[[He|Él]] ____ [[the|el]] [[manager|gerente]].\"",
          "options": [
            "[[is|es]]",
            "[[am|soy]]",
            "[[are|eres]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[is|es]]' [[for|para]] '[[he|él]]', '[[she|ella]]', [[and|y]] '[[it|ello]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "Informal Greeting",
      "instructions": "Sarah meets Alex, a colleague. Choose the best informal greeting.",
      "questions": [
        {
          "question": "Alex: \"____, Sarah! [[I'm|Soy]] Alex.\"",
          "options": [
            "[[Hi|Hola]]",
            "[[Good morning|Buenos días]]",
            "[[Goodbye|Adiós]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Hi|Hola]]' [[is|es]] [[perfect|perfecto]] [[for|para]] [[colleagues|colegas]] [[and|y]] [[friends|amigos]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e7",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "How Are You?",
      "instructions": "Complete the question from Alex.",
      "questions": [
        {
          "question": "Alex: \"[[How|Cómo]] ____ [[you|tú]]?\"",
          "options": ["[[are|estás]]", "[[am|estoy]]"],
          "correctAnswer": "[[are|estás]]",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[are|estás]]' [[with|con]] '[[you|tú/usted]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e8",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "Responding to 'How are you?'",
      "instructions": "Choose the best response for Sarah.",
      "questions": [
        {
          "question": "Sarah: \"________, [[thanks|gracias]]. [[And|¿Y]] [[you|tú]]?\"",
          "options": [
            "[[I'm fine|Estoy bien]]",
            "[[Good morning|Buenos días]]",
            "[[Goodbye|Adiós]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[I'm fine|Estoy bien]]' [[is|es]] [[a|una]] [[common|común]] [[response|respuesta]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e9",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "content": {
      "title": "Introducing Others",
      "instructions": "Mr. Brown introduces Alex to Sarah.",
      "correctSentence": "Sarah, this is Alex.",
      "words": ["is", "Alex.", "this", "Sarah,"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Farewells",
    "difficulty": "easy",
    "content": {
      "title": "Formal Farewell",
      "instructions": "Sarah leaves the manager's office.",
      "questions": [
        {
          "question": "Sarah: \"________, Mr. Brown.\"",
          "options": [
            "[[Goodbye|Adiós]]",
            "[[Hello|Hola]]",
            "[[Hi|Hola]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Goodbye|Adiós]]' [[is|es]] [[appropriate|apropiado]] [[for|para]] [[a|una]] [[formal|formal]] [[farewell|despedida]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e11",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "content": {
      "title": "Negative 'To Be'",
      "instructions": "Sarah clarifies that she is not the manager.",
      "questions": [
        {
          "question": "Sarah: \"[[I|Yo]] ____ [[not|no]] [[the|el]] [[manager|gerente]]. [[I|Yo]] [[am|soy]] [[a|una]] [[new|nueva]] [[employee|empleada]].\"",
          "options": ["[[am|soy]]", "[[is|es]]"],
          "correctAnswer": "[[am|soy]]",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[am|soy/estoy]] [[not|no]]' [[for|para]] [[the|la]] [[negative|negativa]] [[form|forma]] [[with|con]] '[[I|yo]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "medium",
    "content": {
      "title": "Formal or Informal?",
      "instructions": "Choose the correct greeting for a new client.",
      "questions": [
        {
          "question": "Sarah: \"________, Mr. Smith. [[Welcome|Bienvenido]] [[to|a]] [[the|la]] [[office|oficina]].\"",
          "options": [
            "[[Good morning|Buenos días]]",
            "[[Hi|Hola]]",
            "[[Hey|Oye]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Use|Usa]] '[[Good morning|Buenos días]]' [[for|para]] [[clients|clientes]] [[and|y]] [[formal|formales]] [[situations|situaciones]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e13",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "content": {
      "title": "Negative Sentence",
      "instructions": "Sarah is talking about Alex.",
      "correctSentence": "He is not my manager.",
      "words": ["manager.", "is", "not", "my", "He"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e14",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "content": {
      "title": "Asking Questions",
      "instructions": "Alex is asking Sarah.",
      "questions": [
        {
          "question": "Alex: \"____ [[you|usted]] Sarah Miller?\"",
          "options": ["[[Are|Eres/Está]]", "[[Is|Es]]"],
          "correctAnswer": "[[Are|Eres/Está]]",
          "explanation": "[[In|En]] [[questions|preguntas]], [[we|nosotros]] [[put|ponemos]] '[[Are|Eres/Está]]' [[before|antes de]] '[[you|tú/usted]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "Afternoon Greeting",
      "instructions": "It is 3:00 PM. Sarah sees Alex in the hallway.",
      "questions": [
        {
          "question": "Sarah: \"[[Good|Buenas]] ________, Alex.\"",
          "options": [
            "[[afternoon|tardes]]",
            "[[morning|mañana]]",
            "[[night|noche]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Afternoon|Tarde]]' [[is|es]] [[from|desde]] 12:00 PM [[to|hasta]] 6:00 PM."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "Evening Greeting",
      "instructions": "It is 7:00 PM. The security guard greets Sarah.",
      "questions": [
        {
          "question": "Guard: \"[[Good|Buenas]] ________, Sarah.\"",
          "options": [
            "[[evening|noches]]",
            "[[morning|mañana]]",
            "[[night|noche]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Good evening|Buenas noches]]' [[is|es]] [[a|un]] [[greeting|saludo]] [[for|para]] [[the|la]] [[evening|tarde-noche]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e17",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "Nice to Meet You Too",
      "instructions": "Complete the response.",
      "correctSentence": "Nice to meet you too.",
      "words": ["too.", "meet", "you", "Nice", "to"]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Farewells",
    "difficulty": "easy",
    "content": {
      "title": "Informal Farewell",
      "instructions": "Alex is leaving. Choose the informal farewell.",
      "questions": [
        {
          "question": "Alex: \"[[Bye|Adiós]], Sarah. ________!\"",
          "options": [
            "[[See you later|Nos vemos luego]]",
            "[[Good morning|Buenos días]]",
            "[[Hello|Hola]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[See you later|Nos vemos luego]]' [[is|es]] [[very|muy]] [[common|común]] [[between|entre]] [[friends|amigos]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e19",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "content": {
      "title": "She Is",
      "instructions": "Sarah introduces another person.",
      "questions": [
        {
          "question": "Sarah: \"[[This|Esta]] [[is|es]] Maria. [[She|Ella]] ____ [[my|mi]] [[colleague|colega]].\"",
          "options": ["[[is|es]]", "[[are|son/están]]"],
          "correctAnswer": "[[is|es]]",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[is|es]]' [[for|para]] '[[she|ella]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Farewells",
    "difficulty": "easy",
    "content": {
      "title": "Night Farewell",
      "instructions": "Choose the correct farewell at 10:00 PM.",
      "questions": [
        {
          "question": "Sarah: \"[[Good|Buenas]] ________, Mr. Brown.\"",
          "options": [
            "[[night|noches (despedida)]]",
            "[[evening|noches (saludo)]]",
            "[[afternoon|tarde]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Good night|Buenas noches]]' [[is|es]] [[only|solo]] [[for|para]] [[farewells|despedidas]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  // ACT 2: GETTING TO KNOW EACH OTHER
  {
    "id": "a1-u1-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Wh-Questions",
    "difficulty": "easy",
    "content": {
      "title": "Where are you from?",
      "instructions": "Alex wants to know Sarah's origin.",
      "questions": [
        {
          "question": "Alex: \"____ [[are|eres]] [[you|tú]] [[from|de]], Sarah?\"",
          "options": [
            "[[Where|Dónde]]",
            "[[What|Qué]]",
            "[[Who|Quién]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[Where|Dónde]]' [[to|para]] [[ask|preguntar]] [[about|sobre]] [[places|lugares]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e22",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "content": {
      "title": "I am from____",
      "instructions": "Sarah is from London.",
      "questions": [
        {
          "question": "Sarah: \"[[I|Yo]] [[am|soy]] ____ [[London|Londres]].\"",
          "options": ["from", "at"],
          "correctAnswer": "from",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[from|de]]' [[to|para]] [[indicate|indicar]] [[origin|origen]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e23",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "content": {
      "title": "Origin Sentence",
      "instructions": "Put the words in order.",
      "correctSentence": "Alex is from New York.",
      "words": ["York.", "from", "is", "New", "Alex"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "content": {
      "title": "Nationality",
      "instructions": "Sarah asks Alex about his nationality.",
      "questions": [
        {
          "question": "Sarah: \"[[What|Cuál]] [[is|es]] [[your|tu]] ________?\"",
          "options": [
            "[[nationality|nacionalidad]]",
            "[[country|país]]",
            "[[name|nombre]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Nationality|Nacionalidad]]' [[is|es]] [[the|la]] [[correct|correcta]] [[word|palabra]] [[here|aquí]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e25",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "content": {
      "title": "I am British",
      "instructions": "Sarah is British.",
      "questions": [
        {
          "question": "Sarah: \"[[I|Yo]] [[am|soy]] [[from|de]] [[the|el]] [[UK|Reino Unido]]. [[I|Yo]] [[am|soy]] _______.\"",
          "options": ["British", "American"],
          "correctAnswer": "British",
          "explanation": "[[People|La gente]] [[from|de]] [[the|el]] [[UK|Reino Unido]] [[are|son]] [[British|británicos]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e26",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "content": {
      "title": "American",
      "instructions": "Alex is from the USA.",
      "correctSentence": "He is American.",
      "words": ["American.", "is", "He"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Wh-Questions",
    "difficulty": "medium",
    "content": {
      "title": "How years old are you?",
      "instructions": "Ask about age.",
      "questions": [
        {
          "question": "Alex: \"________ [[old|]] [[are|tienes]] [[you|tú]], Sarah?\"",
          "options": [
            "[[How|Cuántos]]",
            "[[What|Qué]]",
            "[[Where|Dónde]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[How|Cómo]] [[old|viejo]]' [[to|para]] [[ask|preguntar]] [[the|la]] [[age|edad]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e28",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "medium",
    "content": {
      "title": "Numbers",
      "instructions": "Complete the number.",
      "questions": [
        {
          "question": "Sarah: \"[[I|Yo]] [[am|tengo]] [[twenty-five|veinticinco]] [[years|años]] ____.\"",
          "options": ["old", "age"],
          "correctAnswer": "old",
          "explanation": "[[In|En]] [[English|inglés]], [[we|nosotros]] [[say|decimos]] '[[years|años]] [[old|de viejo]]'."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e29",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "medium",
    "content": {
      "title": "Age Sentence",
      "instructions": "Put the words in order.",
      "correctSentence": "I am twenty-five years old.",
      "words": ["old.", "years", "twenty-five", "am", "I"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e30",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "content": {
      "title": "My Last Name",
      "instructions": "Choose the correct possessive.",
      "questions": [
        {
          "question": "Sarah: \"____ [[last|último]] [[name|nombre]] [[is|es]] Miller.\"",
          "options": [
            "[[My|Mi]]",
            "[[Your|Tu]]",
            "[[His|Su (de él)]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[My|Mi]]' [[is|es]] [[for|para]] '[[I|yo]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e31",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "content": {
      "title": "Your Phone",
      "instructions": "Ask for a number.",
      "questions": [
        {
          "question": "Alex: \"[[What|Cuál]] [[is|es]] ____ [[phone|de teléfono]] [[number|número]]?\"",
          "options": ["your", "my"],
          "correctAnswer": "your",
          "explanation": "'[[Your|Tu]]' [[is|es]] [[for|para]] '[[you|tú/usted]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "content": {
      "title": "His Name",
      "instructions": "Alex is talking about a friend.",
      "correctSentence": "His name is Marco.",
      "words": ["Marco.", "is", "name", "His"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "content": {
      "title": "Her Name",
      "instructions": "Marco is talking about Sarah.",
      "questions": [
        {
          "question": "Marco: \"____ [[name|nombre]] [[is|es]] Sarah Miller.\"",
          "options": [
            "[[Her|Su (de ella)]]",
            "[[His|Su (de él)]]",
            "[[My|Mi]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Her|Su]]' [[is|es]] [[for|para]] '[[she|ella]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e34",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Wh-Questions",
    "difficulty": "easy",
    "content": {
      "title": "What vs Where",
      "instructions": "Choose the correct question word.",
      "questions": [
        {
          "question": "____ [[is|es]] [[your|tu]] [[job|trabajo]]?",
          "options": ["What", "Where"],
          "correctAnswer": "What",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[What|Qué]]' [[for|para]] [[objects|objetos]], [[jobs|trabajos]], [[and|y]] [[names|nombres]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "content": {
      "title": "Office Worker",
      "instructions": "Sarah is explaining her job.",
      "questions": [
        {
          "question": "Sarah: \"[[I|Yo]] [[am|soy]] [[an|una]] ________ [[worker|trabajadora]].\"",
          "options": [
            "[[office|oficina]]",
            "[[teacher|maestra]]",
            "[[doctor|doctora]]"
          ],
          "correctAnswer": 0,
          "explanation": "Sarah [[works|trabaja]] [[in|en]] [[an|una]] [[office|oficina]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e36",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "content": {
      "title": "A Manager",
      "instructions": "Talk about Maria.",
      "correctSentence": "She is a manager.",
      "words": ["manager.", "a", "is", "She"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Wh-Questions",
    "difficulty": "easy",
    "content": {
      "title": "Who?",
      "instructions": "Ask about a person.",
      "questions": [
        {
          "question": "Sarah: \"____ [[is|es]] [[that|ese]] [[man|hombre]]?\"",
          "options": [
            "[[Who|Quién]]",
            "[[What|Qué]]",
            "[[Where|Dónde]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[Who|Quién]]' [[for|para]] [[people|personas]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e38",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "Are they?",
      "instructions": "Sarah is asking about Marco and Maria.",
      "questions": [
        {
          "question": "Sarah: \"____ [[they|ellos]] [[from|de]] [[Spain|España]]?\"",
          "options": ["[[Are|Eres/Está]]", "[[Is|Es]]"],
          "correctAnswer": "[[Are|Eres/Está]]",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[Are|Son/Están]]' [[for|para]] '[[they|ellos]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "content": {
      "title": "Yes, they are",
      "instructions": "Alex answers.",
      "questions": [
        {
          "question": "Alex: \"[[Yes|Sí]], [[they|ellos]] ____.\"",
          "options": [
            "[[are|son]]",
            "[[is|es]]",
            "[[am|soy]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Use|Usa]] '[[are|son]]' [[with|con]] '[[they|ellos]]' [[in|en]] [[short|cortas]] [[answers|respuestas]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "content": {
      "title": "We are Colleagues",
      "instructions": "Put the words in order.",
      "correctSentence": "We are colleagues.",
      "words": ["colleagues.", "are", "We"]
    },
    "topicName": "Grammar"
  },
  // ACT 3: THE WELCOME EVENT
  {
    "id": "a1-u1-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Alphabet",
    "difficulty": "medium",
    "content": {
      "title": "Spelling Names",
      "instructions": "Sarah is checking the guest list.",
      "questions": [
        {
          "question": "Sarah: \"[[How|Cómo]] [[do|]] [[you|tú]] ________ [[your|tu]] [[name|nombre]], Alex?\"",
          "options": [
            "[[spell|deletreas]]",
            "[[speak|hablas]]",
            "[[write|escribes]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Spell|Deletrear]]' [[means|significa]] [[saying|decir]] [[the|las]] [[letters|letras]] [[of|de]] [[a|una]] [[word|palabra]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e42",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Alphabet",
    "difficulty": "medium",
    "content": {
      "title": "Deletreando 'Sarah'",
      "instructions": "Complete the spelling.",
      "questions": [
        {
          "question": "Sarah: \"[[It's|Es]] S-A-R-A-__.\"",
          "options": ["H", "G"],
          "correctAnswer": "H",
          "explanation": "[[Sarah|Sarah]] [[ends|termina]] [[with|con]] '[[H|H]]'."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e43",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Alphabet",
    "difficulty": "medium",
    "content": {
      "title": "Spell Your Last Name",
      "instructions": "Put the words in order.",
      "correctSentence": "Spell your last name, please.",
      "words": ["please.", "name,", "last", "your", "Spell"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "content": {
      "title": "Email Address",
      "instructions": "Sarah asks Marco for his email.",
      "questions": [
        {
          "question": "Sarah: \"[[What|Cuál]] [[is|es]] [[your|tu]] ________ [[address|dirección]]?\"",
          "options": [
            "[[email|correo electrónico]]",
            "[[home|casa]]",
            "[[phone|teléfono]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[email|correo electrónico]]' [[for|para]] [[online|en línea]] [[contact|contacto]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e45",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Alphabet",
    "difficulty": "medium",
    "content": {
      "title": "Email Symbols",
      "instructions": "How do you say '@' in English?",
      "questions": [
        {
          "question": "Marco: \"[[It|Ello]] [[is|es]] marco____office.com\"",
          "options": ["[[at|en]]", "[[on|sobre]]"],
          "correctAnswer": "[[at|en]]",
          "explanation": "[[In|En]] [[emails|correos]], '@' [[is|es]] '[[at|en]]'."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e46",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "medium",
    "content": {
      "title": "My Email",
      "instructions": "Put the words in order.",
      "correctSentence": "My email is sarah@office.com.",
      "words": ["sarah@office.com.", "is", "email", "My"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "content": {
      "title": "Phone Number",
      "instructions": "Alex asks for Sarah's number.",
      "questions": [
        {
          "question": "Alex: \"[[What's|Cuál es]] [[your|tu]] ________?\"",
          "options": [
            "[[number|número]]",
            "[[name|nombre]]",
            "[[job|trabajo]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[What's|Cuál es]]' [[is|es]] [[the|la]] [[contraction|contracción]] [[of|de]] '[[What|Qué]] [[is|es]]'."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e48",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "medium",
    "content": {
      "title": "Zero",
      "instructions": "How do you say '0' in a phone number?",
      "questions": [
        {
          "question": "Sarah: \"[[It's|Es]] [[five-five|cinco-cinco]]-____-[[one|uno]].\"",
          "options": ["[[zero|cero]]", "[[one|uno]]"],
          "correctAnswer": "[[zero|cero]]",
          "explanation": "'0' [[is|es]] '[[zero|cero]]' ( [[or|o]] '[[oh|o]]' [[in|en]] [[phone|teléfono]] [[numbers|números]])."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "medium",
    "content": {
      "title": "Review: Formal Greeting",
      "instructions": "Sarah sees the CEO.",
      "questions": [
        {
          "question": "Sarah: \"________, [[Mrs.|la Sra.]] Davis.\"",
          "options": [
            "[[Good evening|Buenas noches (saludo)]]",
            "[[Hi|Hola]]",
            "[[Bye|Adiós]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Use|Usa]] '[[Good evening|Buenas noches]]' [[for|para]] [[formal|formales]] [[situations|situaciones]] [[at|por]] [[night|la noche]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e50",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "Review: Verb To Be",
      "instructions": "Complete the sentence about the party.",
      "questions": [
        {
          "question": "[[The|La]] [[party|fiesta]] ____ [[great|estupenda]]!",
          "options": ["[[is|es]]", "[[am|soy]]"],
          "correctAnswer": "[[is|es]]",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[is|es]]' [[for|para]] '[[it|ello]]' ( [[the|la]] [[party|fiesta]])."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e51",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "medium",
    "content": {
      "title": "Nice to See You",
      "instructions": "Put the words in order.",
      "correctSentence": "It's nice to see you.",
      "words": ["you.", "see", "to", "nice", "It's"]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "medium",
    "content": {
      "title": "How are things?",
      "instructions": "Identify the correct expression for informal situations.",
      "questions": [
        {
          "question": "Alex: \"[[How|Cómo]] [[are|están]] ________, Sarah?\"",
          "options": [
            "[[things|cosas]]",
            "[[names|nombres]]",
            "[[jobs|trabajos]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[How|Cómo]] [[are|están]] [[things|las cosas]]?' [[is|es]] [[a|una]] [[natural|natural]] [[and|y]] [[informal|informal]] [[way|manera]] [[to|de]] [[greet|saludar]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e53",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "Everything is Great",
      "instructions": "Sarah responds to Alex.",
      "questions": [
        {
          "question": "Sarah: \"[[Everything|Todo]] ____ [[great|genial]], [[thanks|gracias]].\"",
          "options": ["[[is|es]]", "[[are|son/están]]"],
          "correctAnswer": "[[is|es]]",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[is|es]]' [[with|con]] '[[everything|todo]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "medium",
    "content": {
      "title": "Pleasure to Meet You",
      "instructions": "Review: Meeting the CEO.",
      "questions": [
        {
          "question": "Sarah: \"[[It|Ello]] [[is|es]] [[a|un]] ________ [[to|de]] [[meet|conocerle]] [[you|a usted]], Mrs. Davis.\"",
          "options": [
            "[[pleasure|placer]]",
            "[[hi|hola]]",
            "[[bye|adiós]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Pleasure|Placer]]' [[is|es]] [[the|la]] [[formal|formal]] [[word|palabra]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e55",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Wh-Questions",
    "difficulty": "medium",
    "content": {
      "title": "Where is the Manager?",
      "instructions": "Sarah is looking for Mr. Brown.",
      "correctSentence": "Where is the manager?",
      "words": ["manager?", "the", "is", "Where"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "Over There",
      "instructions": "Alex points to Mr. Brown.",
      "questions": [
        {
          "question": "Alex: \"[[He|Él]] [[is|está]] [[over|por]] ________.\"",
          "options": [
            "[[there|allí]]",
            "[[here|aquí]]",
            "[[this|esto]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Over|Por]] [[there|allí]]' [[is|es]] [[used|usado]] [[to|para]] [[indicate|indicar]] [[location|ubicación]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e57",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "Are you too?",
      "instructions": "Marco asks Sarah.",
      "questions": [
        {
          "question": "Marco: \"____ [[you|tú]] [[from|de]] London [[too|también]]?\"",
          "options": ["[[Are|Eres/Está]]", "[[Is|Es]]"],
          "correctAnswer": "[[Are|Eres/Está]]",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[Are|Eres/Está]]' [[for|para]] '[[you|tú/usted]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e58",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "medium",
    "content": {
      "title": "British",
      "instructions": "Sarah confirms her nationality.",
      "correctSentence": "Yes, I am British.",
      "words": ["British.", "am", "I", "Yes,"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Farewells",
    "difficulty": "medium",
    "content": {
      "title": "Good Night",
      "instructions": "The party is finishing.",
      "questions": [
        {
          "question": "Sarah: \"[[Have|Que]] [[a|tengas]] [[good|buena]] ________, [[everyone|todos]]!\"",
          "options": [
            "[[night|noche]]",
            "[[evening|tarde-noche]]",
            "[[hello|hola]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[Have|Que]] [[a|tengas]] [[good|buena]] [[night|noche]]' [[is|es]] [[a|una]] [[common|común]] [[farewell|despedida]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Farewells",
    "difficulty": "easy",
    "content": {
      "title": "See You Tomorrow",
      "instructions": "Last farewell to Alex.",
      "questions": [
        {
          "question": "Sarah: \"[[See|Vemos]] [[you|te]] ________, Alex!\"",
          "options": [
            "[[tomorrow|mañana]]",
            "[[yesterday|ayer]]",
            "[[today|hoy]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[See|Vemos]] [[you|te]] [[tomorrow|mañana]]' [[means|significa]] '[[Nos|nos]] [[vemos|vemos]] [[mañana|mañana]]'."
        }
      ]
    },
    "topicName": "Vocabulary"
  }
];
