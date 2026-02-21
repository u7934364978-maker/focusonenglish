import { Exercise } from '@/types/exercise';

export const UNIT_4_EXERCISES: Exercise[] = [
  // ==========================================
  // LESSON 1: HAVE GOT BASIC (Exercises 1-15)
  // ==========================================
  {
    "id": "a2-u4-e1",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Have Got",
    "difficulty": "easy",
    "transcript": "[[I have got blue eyes|Tengo los ojos azules]].",
    "content": {
      "title": "[[Have Got|Tener]]: [[I|Yo]]",
      "instructions": "Selecciona la forma correcta con '[[have got|tengo/tienes/tienen]]'.",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[blue eyes|los ojos azules]].",
          "options": ["[[have got|tengo]]", "[[has got|tiene]]", "[[am|soy]]"],
          "correctAnswer": 0,
          "explanation": "Con '[[I|yo]]' usamos '[[have got|tengo/tienes/tienen]]' para describir características físicas."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e1.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e2",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Have Got",
    "difficulty": "easy",
    "transcript": "[[You have got brown hair|Tienes el cabello marrón]].",
    "content": {
      "title": "[[Have Got|Tener]]: [[You|Tú]]",
      "instructions": "Ordena la oración con '[[have got|tengo/tienes/tienen]]'.",
      "correctSentence": "[[You have got brown hair|Tienes el cabello marrón]].",
      "words": ["[[hair|cabello]].", "[[brown|marrón]]", "[[have got|tienes]]", "[[You|Tú]]"],
      "explanation": "Con '[[you|tú]]' usamos '[[have got|tengo/tienes/tienen]]' para hablar de características físicas."
    },
    "audioUrl": "audio/a2/unit-4/e2.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e3",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Have Got",
    "difficulty": "easy",
    "transcript": "[[He has got a beard|Tiene una barba]].",
    "content": {
      "title": "[[Have Got|Tener]]: [[He/She|Él/Ella]]",
      "instructions": "Completa con '[[has got|tiene/tienen]]' para tercera persona singular.",
      "questions": [
        {
          "question": "[[She|Ella]] _______ [[long hair|el cabello largo]].",
          "options": ["[[have got|tengo]]", "[[has got|tiene]]", "[[am|soy]]"],
          "correctAnswer": 1,
          "explanation": "Con '[[he|él]]/[[she|ella]]' usamos '[[has got|tiene/tienen]]'."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e3.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e4",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Have Got",
    "difficulty": "easy",
    "transcript": "[[It has got a long tail|Tiene una cola larga]].",
    "content": {
      "title": "[[Have Got|Tener]]: [[It|Eso]]",
      "instructions": "Ordena la oración sobre características de objetos.",
      "correctSentence": "[[It has got a long tail|Tiene una cola larga]].",
      "words": ["[[tail|cola]].", "[[long|larga]]", "[[a|una]]", "[[has got|tiene]]", "[[It|Esto]]"],
      "explanation": "Con '[[it|eso]]' usamos '[[has got|tiene/tienen]]' para describir características de animales u objetos."
    },
    "audioUrl": "audio/a2/unit-4/e4.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e5",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Have Got",
    "difficulty": "easy",
    "transcript": "[[We have got dark skin|Tenemos la piel oscura]].",
    "content": {
      "title": "[[Have Got|Tener]]: [[We/They|Nosotros/Ellos]]",
      "instructions": "Completa con '[[have got|tengo/tienes/tienen]]' para primera persona plural.",
      "questions": [
        {
          "question": "[[They|Ellos]] _______ [[green eyes|los ojos verdes]].",
          "options": ["[[have got|tienen]]", "[[has got|tiene]]", "[[am|soy]]"],
          "correctAnswer": 0,
          "explanation": "Con '[[we|nosotros/nosotras]]/[[they|ellos/ellas]]' usamos '[[have got|tengo/tienes/tienen]]' en forma base."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e5.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e6",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Physical Description",
    "difficulty": "easy",
    "transcript": "[[My sister has got curly hair|Mi hermana tiene el cabello rizado]].",
    "content": {
      "title": "[[Family|Familia]] [[Member|Miembro]] [[Descriptions|Descripciones]]",
      "instructions": "Ordena la oración describiendo [[a|un/una]] un miembro de la familia.",
      "correctSentence": "[[My sister has got curly hair|Mi hermana tiene el cabello rizado]].",
      "words": ["[[hair|cabello]].", "[[curly|rizado]]", "[[has got|tiene]]", "[[sister|hermana]]", "[[My|Mi]]"],
      "explanation": "'[[My|mi]] [[sister|hermana]] [[has got|tiene/tienen]] [[curly|rizado]] [[hair|cabello]]' [[describe|describe]] las características de la hermana."
    },
    "audioUrl": "audio/a2/unit-4/e6.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e7",
    "type": "matching",
    "level": "A2",
    "topic": "Physical Description",
    "difficulty": "easy",
    "transcript": "[[The boy has got a round face|El niño tiene la cara redonda]].",
    "content": {
      "title": "[[Face|Cara]] [[Shapes|Formas]]",
      "instructions": "Relaciona cada palabra con su definición.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[round|redonda]]",
          "correctMatch": "[[circular in shape|circular en forma]]",
          "distractors": ["[[extended in length|extendida en longitud]]", "[[having four equal angles|teniendo cuatro ángulos iguales]]", "[[not wide|no ancha]]", "[[wide and spacious|ancha y espaciosa]]"]
        },
        {
          "id": "pair-1",
          "word": "[[long|larga]]",
          "correctMatch": "[[extended in length|extendida en longitud]]",
          "distractors": ["[[circular in shape|circular en forma]]", "[[having four equal angles|teniendo cuatro ángulos iguales]]", "[[not wide|no ancha]]", "[[wide and spacious|ancha y espaciosa]]"]
        },
        {
          "id": "pair-2",
          "word": "[[square|cuadrada]]",
          "correctMatch": "[[having four equal angles|teniendo cuatro ángulos iguales]]",
          "distractors": ["[[circular in shape|circular en forma]]", "[[extended in length|extendida en longitud]]", "[[not wide|no ancha]]", "[[wide and spacious|ancha y espaciosa]]"]
        },
        {
          "id": "pair-3",
          "word": "[[narrow|estrecha]]",
          "correctMatch": "[[not wide|no ancha]]",
          "distractors": ["[[circular in shape|circular en forma]]", "[[extended in length|extendida en longitud]]", "[[having four equal angles|teniendo cuatro ángulos iguales]]", "[[wide and spacious|ancha y espaciosa]]"]
        },
        {
          "id": "pair-4",
          "word": "[[broad|ancha]]",
          "correctMatch": "[[wide and spacious|ancha y espaciosa]]",
          "distractors": ["[[circular in shape|circular en forma]]", "[[extended in length|extendida en longitud]]", "[[having four equal angles|teniendo cuatro ángulos iguales]]", "[[not wide|no ancha]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e7.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e8",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Physical Description",
    "difficulty": "medium",
    "transcript": "[[He has got a big nose|Tiene la nariz grande]].",
    "content": {
      "title": "[[Facial|Faciales]] [[Features|Características]]",
      "instructions": "Ordena la oración describiendo características faciales.",
      "correctSentence": "[[He has got a big nose|Tiene la nariz grande]].",
      "words": ["[[nose|nariz]].", "[[big|grande]]", "[[a|una]]", "[[has got|tiene]]", "[[He|Él]]"],
      "explanation": "'[[He|él]] [[has got|tiene/tienen]] [[a|un/una]] [[big|grande]] [[nose|nariz]]' [[describe|describe]] la nariz de alguien."
    },
    "audioUrl": "audio/a2/unit-4/e8.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e9",
    "type": "matching",
    "level": "A2",
    "topic": "Physical Description",
    "difficulty": "medium",
    "transcript": "[[She has got small ears|Tiene las orejas pequeñas]].",
    "content": {
      "title": "[[Ears|Orejas]]",
      "instructions": "Relaciona cada palabra con su sinónimo.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[big|grandes]]",
          "correctMatch": "[[large in size|grande en tamaño]]",
          "distractors": ["[[little in size|poco en tamaño]]", "[[noticeable and standing out|notorio y destacado]]", "[[fine and fragile|fino y frágil]]", "[[having a sharp tip|teniendo una punta afilada]]"]
        },
        {
          "id": "pair-1",
          "word": "[[small|pequeñas]]",
          "correctMatch": "[[little in size|poco en tamaño]]",
          "distractors": ["[[large in size|grande en tamaño]]", "[[noticeable and standing out|notorio y destacado]]", "[[fine and fragile|fino y frágil]]", "[[having a sharp tip|teniendo una punta afilada]]"]
        },
        {
          "id": "pair-2",
          "word": "[[prominent|prominentes]]",
          "correctMatch": "[[noticeable and standing out|notorio y destacado]]",
          "distractors": ["[[large in size|grande en tamaño]]", "[[little in size|poco en tamaño]]", "[[fine and fragile|fino y frágil]]", "[[having a sharp tip|teniendo una punta afilada]]"]
        },
        {
          "id": "pair-3",
          "word": "[[delicate|delicadas]]",
          "correctMatch": "[[fine and fragile|fino y frágil]]",
          "distractors": ["[[large in size|grande en tamaño]]", "[[little in size|poco en tamaño]]", "[[noticeable and standing out|notorio y destacado]]", "[[having a sharp tip|teniendo una punta afilada]]"]
        },
        {
          "id": "pair-4",
          "word": "[[pointed|puntiagudas]]",
          "correctMatch": "[[having a sharp tip|teniendo una punta afilada]]",
          "distractors": ["[[large in size|grande en tamaño]]", "[[little in size|poco en tamaño]]", "[[noticeable and standing out|notorio y destacado]]", "[[fine and fragile|fino y frágil]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e9.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e10",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Physical Description",
    "difficulty": "medium",
    "transcript": "[[My grandfather has got gray hair|Mi abuelo tiene el cabello gris]].",
    "content": {
      "title": "[[Hair|Cabello]] [[Color|Color]]",
      "instructions": "Ordena la oración describiendo color de cabello.",
      "correctSentence": "[[My grandfather has got gray hair|Mi abuelo tiene el cabello gris]].",
      "words": ["[[hair|cabello]].", "[[gray|gris]]", "[[has got|tiene]]", "[[grandfather|abuelo]]", "[[My|Mi]]"],
      "explanation": "'[[My|mi]] [[grandfather|abuelo]] [[has got|tiene/tienen]] [[gray|gris]] [[hair|cabello]]' [[describe|describe]] el [[color|color]] del cabello del abuelo."
    },
    "audioUrl": "audio/a2/unit-4/e10.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e11",
    "type": "matching",
    "level": "A2",
    "topic": "Physical Description",
    "difficulty": "medium",
    "transcript": "[[The girl has got blonde hair|La niña tiene el cabello rubio]].",
    "content": {
      "title": "[[Hair|Cabello]] [[Colors|Colores]]",
      "instructions": "Relaciona cada color de cabello con su descripción.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[blonde|rubio]]",
          "correctMatch": "[[light yellow color|color amarillo claro]]",
          "distractors": ["[[darkest color|color más oscuro]]", "[[color like fire|color como fuego]]", "[[dark earth color|color marrón oscuro]]", "[[color between black and white|color entre negro y blanco]]"]
        },
        {
          "id": "pair-1",
          "word": "[[black|negro]]",
          "correctMatch": "[[darkest color|color más oscuro]]",
          "distractors": ["[[light yellow color|color amarillo claro]]", "[[color like fire|color como fuego]]", "[[dark earth color|color marrón oscuro]]", "[[color between black and white|color entre negro y blanco]]"]
        },
        {
          "id": "pair-2",
          "word": "[[red|rojo]]",
          "correctMatch": "[[color like fire|color como fuego]]",
          "distractors": ["[[light yellow color|color amarillo claro]]", "[[darkest color|color más oscuro]]", "[[dark earth color|color marrón oscuro]]", "[[color between black and white|color entre negro y blanco]]"]
        },
        {
          "id": "pair-3",
          "word": "[[brown|marrón]]",
          "correctMatch": "[[dark earth color|color marrón oscuro]]",
          "distractors": ["[[light yellow color|color amarillo claro]]", "[[darkest color|color más oscuro]]", "[[color like fire|color como fuego]]", "[[color between black and white|color entre negro y blanco]]"]
        },
        {
          "id": "pair-4",
          "word": "[[gray|gris]]",
          "correctMatch": "[[color between black and white|color entre negro y blanco]]",
          "distractors": ["[[light yellow color|color amarillo claro]]", "[[darkest color|color más oscuro]]", "[[color like fire|color como fuego]]", "[[dark earth color|color marrón oscuro]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e12",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Physical Description",
    "difficulty": "medium",
    "transcript": "[[I have got a slim figure|Tengo una figura esbelta]].",
    "content": {
      "title": "[[Body|Cuerpo]] [[Types|Tipos]]",
      "instructions": "Ordena la oración describiendo tipo de cuerpo.",
      "correctSentence": "[[I have got a slim figure|Tengo una figura esbelta]].",
      "words": ["[[figure|figura]].", "[[slim|esbelta]]", "[[a|una]]", "[[have got|tengo]]", "[[I|Yo]]"],
      "explanation": "'[[I|yo]] [[have got|tengo/tienes/tienen]] [[a|un/una]] [[slim|esbelta]] [[figure|figura]]' [[describe|describe]] tu tipo de cuerpo."
    },
    "audioUrl": "audio/a2/unit-4/e12.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e13",
    "type": "matching",
    "level": "A2",
    "topic": "Physical Description",
    "difficulty": "medium",
    "transcript": "[[He has got a tall body|Tiene un cuerpo alto]].",
    "content": {
      "title": "[[Height|Altura]]",
      "instructions": "Relaciona cada palabra de altura con su descripción.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[tall|alto]]",
          "correctMatch": "[[of great height|de gran altura]]",
          "distractors": ["[[of little height|de poca altura]]", "[[of middle height|de altura media]]", "[[extremely tall|extremadamente alto]]", "[[extremely short|extremadamente bajo]]"]
        },
        {
          "id": "pair-1",
          "word": "[[short|bajo]]",
          "correctMatch": "[[of little height|de poca altura]]",
          "distractors": ["[[of great height|de gran altura]]", "[[of middle height|de altura media]]", "[[extremely tall|extremadamente alto]]", "[[extremely short|extremadamente bajo]]"]
        },
        {
          "id": "pair-2",
          "word": "[[average|promedio]]",
          "correctMatch": "[[of middle height|de altura media]]",
          "distractors": ["[[of great height|de gran altura]]", "[[of little height|de poca altura]]", "[[extremely tall|extremadamente alto]]", "[[extremely short|extremadamente bajo]]"]
        },
        {
          "id": "pair-3",
          "word": "[[giant|gigante]]",
          "correctMatch": "[[extremely tall|extremadamente alto]]",
          "distractors": ["[[of great height|de gran altura]]", "[[of little height|de poca altura]]", "[[of middle height|de altura media]]", "[[extremely short|extremadamente bajo]]"]
        },
        {
          "id": "pair-4",
          "word": "[[dwarf|enano]]",
          "correctMatch": "[[extremely short|extremadamente bajo]]",
          "distractors": ["[[of great height|de gran altura]]", "[[of little height|de poca altura]]", "[[of middle height|de altura media]]", "[[extremely tall|extremadamente alto]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e13.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e14",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Physical Description",
    "difficulty": "medium",
    "transcript": "[[They have got brown skin|Tienen la piel marrón]].",
    "content": {
      "title": "[[Skin|Piel]] [[Tone|Tono]]",
      "instructions": "Ordena la oración describiendo color de piel.",
      "correctSentence": "[[They have got brown skin|Tienen la piel marrón]].",
      "words": ["[[skin|piel]].", "[[brown|marrón]]", "[[have got|tienen]]", "[[They|Ellos]]"],
      "explanation": "'[[They|ellos/ellas]] [[have got|tengo/tienes/tienen]] [[brown|marrón]] [[skin|piel]]' [[describe|describe]] el [[color|color]] de piel."
    },
    "audioUrl": "audio/a2/unit-4/e14.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e15",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Have Got Review",
    "difficulty": "medium",
    "transcript": "[[My brother has got a beard|Mi hermano tiene una barba]].",
    "content": {
      "title": "[[Have Got|Tener]] [[Review|Repaso]]",
      "instructions": "Completa con la forma correcta de '[[have got|tengo/tienes/tienen]]'.",
      "questions": [
        {
          "question": "We _______ [[blue eyes|los ojos azules]].",
          "options": ["[[has got|tiene]]", "[[have got|tenemos]]", "[[am|soy]]"],
          "correctAnswer": 1,
          "explanation": "Con '[[we|nosotros/nosotras]]' usamos '[[have got|tengo/tienes/tienen]]' en forma base."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e15.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // LESSON 2: ADJECTIVE ORDER (Exercises 16-30)
  // ==========================================
  {
    "id": "a2-u4-e16",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "medium",
    "transcript": "[[She has got a big red book|Tiene un libro rojo grande]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]]: [[Size|Tamaño]] + [[Color|Color]]",
      "instructions": "Selecciona el orden correcto de adjetivos.",
      "questions": [
        {
          "question": "I [[have|tengo]] [[a|un]] _______ _______ [[car|coche]].",
          "options": ["[[small red|rojo pequeño]]", "[[big red|coche rojo grande]]"],
          "correctAnswer": 1,
          "explanation": "En inglés, el orden correcto de adjetivos es: tamaño + [[color|color]]. '[[big red car|coche rojo grande]]' es correcto. El tamaño ([[big|grande]]) va antes del [[color|color]] ([[red|rojo]])."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e16.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e17",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "medium",
    "transcript": "[[He has got a small yellow phone|Tiene un teléfono amarillo pequeño]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]] [[in Context|en Contexto]]",
      "instructions": "Ordena la oración con adjetivos en el orden correcto.",
      "correctSentence": "[[He has a small yellow phone|Tiene un pequeño teléfono amarillo]].",
      "words": ["[[phone|teléfono]].", "[[yellow|amarillo]]", "[[small|pequeño]]", "[[a|un]]", "[[has|tiene]]", "[[He|Él]]"],
      "explanation": "Orden: [[size|tamaño]] (pequeño) + [[color|color]] (amarillo) + sustantivo (teléfono)."
    },
    "audioUrl": "audio/a2/unit-4/e17.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e18",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "medium",
    "transcript": "[[The boy has a long black jacket|El niño tiene una chaqueta negra larga]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]]: [[Length|Longitud]] + [[Color|Color]]",
      "instructions": "Selecciona el orden correcto.",
      "questions": [
        {
          "question": "She [[has|tiene]] [[a|un]] _______ _______ [[dress|vestido]].",
          "options": ["[[short black|negro corto]]", "[[long black|vestido negro largo]]"],
          "correctAnswer": 1,
          "explanation": "'[[Long|largo]] [[black|negro]] [[dress|vestido]]' sigue el orden: longitud + [[color|color]]."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e18.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e19",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "medium",
    "transcript": "[[They have old round glasses|Tienen gafas redondas viejas]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]]: [[Age|Edad]] + [[Shape|Forma]]",
      "instructions": "Ordena los adjetivos correctamente.",
      "correctSentence": "[[They have old round glasses|Tienen gafas redondas viejas]].",
      "words": ["[[glasses|gafas]].", "[[round|redondas]]", "[[old|viejas]]", "[[have|tienen]]", "[[They|Ellos]]"],
      "explanation": "Orden: age ([[old|viejo]]) + [[shape|forma]] ([[round|redonda]]) + sustantivo (glasses)."
    },
    "audioUrl": "audio/a2/unit-4/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e20",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "medium",
    "transcript": "[[My mother has a beautiful white sweater|Mi madre tiene un hermoso suéter blanco]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]]: [[Quality|Calidad]] + [[Color|Color]]",
      "instructions": "Selecciona el orden correcto.",
      "questions": [
        {
          "question": "She [[has|tiene]] [[a|un]] _______ _______ [[hat|sombrero]].",
          "options": ["[[ugly white|blanco feo]]", "[[beautiful white|sombrero hermoso blanco]]"],
          "correctAnswer": 1,
          "explanation": "'[[Beautiful|hermoso]] [[white|blanco]] [[hat|sombrero]]' sigue el orden: quality + [[color|color]]."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e20.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e21",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "medium",
    "transcript": "[[I have a comfortable new bed|Tengo una cama nueva cómoda]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]]: [[Quality|Calidad]] + [[Age|Edad]]",
      "instructions": "Ordena los adjetivos en el orden correcto.",
      "correctSentence": "[[I have a comfortable new bed|Tengo una cama nueva cómoda]].",
      "words": ["[[bed|cama]].", "[[new|nueva]]", "[[comfortable|cómoda]]", "[[a|una]]", "[[have|tengo]]", "[[I|Yo]]"],
      "explanation": "Orden: quality (comfortable) + age ([[new|nuevo]]) + sustantivo ([[bed|cama]])."
    },
    "audioUrl": "audio/a2/unit-4/e21.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e22",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "medium",
    "transcript": "[[He has got thick brown hair|Tiene el cabello marrón grueso]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]]: [[Texture|Textura]] + [[Color|Color]]",
      "instructions": "Selecciona el orden correcto para describir cabello.",
      "questions": [
        {
          "question": "She [[has|tiene]] _______ _______ [[hair|cabello]].",
          "options": ["[[blonde straight|rubio liso]]", "[[curly blonde|cabello rizado rubio]]"],
          "correctAnswer": 1,
          "explanation": "'[[Curly|rizado]] [[blonde|rubio/rubia]] [[hair|cabello]]' sigue el orden: texture + [[color|color]]."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e22.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e23",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "medium",
    "transcript": "[[They have big dark eyes|Tienen los ojos oscuros grandes]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]]: [[Size|Tamaño]] + [[Color|Color]] ([[Eyes|Ojos]])",
      "instructions": "Ordena los adjetivos para describir ojos.",
      "correctSentence": "[[They have big dark eyes|Tienen los ojos oscuros grandes]].",
      "words": ["[[eyes|ojos]].", "[[dark|oscuros]]", "[[big|grandes]]", "[[have|tienen]]", "[[They|Ellos]]"],
      "explanation": "Orden: [[size|tamaño]] ([[big|grande]]) + [[color|color]] ([[dark|oscuro]]) + sustantivo ([[eyes|ojos]])."
    },
    "audioUrl": "audio/a2/unit-4/e23.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e24",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "medium",
    "transcript": "[[My sister has a lovely pink dress|Mi hermana tiene un lindo vestido rosa]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]] [[Multiple|Múltiple]]",
      "instructions": "Selecciona el orden correcto con múltiples adjetivos.",
      "questions": [
        {
          "question": "She [[has|tiene]] [[a|un]] _______ _______ _______ [[bag|bolsa]].",
          "options": ["[[ugly small blue|azul pequeño feo]]", "[[red beautiful big|rojo hermoso grande]]", "[[beautiful big red|bolsa hermosa grande roja]]"],
          "correctAnswer": 2,
          "explanation": "Orden: quality ([[beautiful|hermoso]]) + [[size|tamaño]] ([[big|grande]]) + [[color|color]] ([[red|rojo]])."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e24.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e25",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "medium",
    "transcript": "[[He has a modern rectangular office|Tiene una oficina rectangular moderna]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]]: [[Age|Edad]] + [[Shape|Forma]]",
      "instructions": "Ordena los adjetivos correctamente.",
      "correctSentence": "[[He has a modern rectangular office|Tiene una oficina rectangular moderna]].",
      "words": ["[[office|oficina]].", "[[rectangular|rectangular]]", "[[modern|moderna]]", "[[a|una]]", "[[has|tiene]]", "[[He|Él]]"],
      "explanation": "Orden: age (modern) + [[shape|forma]] (rectangular) + sustantivo ([[office|oficina]])."
    },
    "audioUrl": "audio/a2/unit-4/e25.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e26",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "hard",
    "transcript": "[[I have a small old round table|Tengo una mesa pequeña redonda vieja]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]] [[Complex|Complejo]]",
      "instructions": "Selecciona el orden correcto con tres adjetivos.",
      "questions": [
        {
          "question": "He [[has|tiene]] [[a|un]] _______ _______ _______ [[notebook|cuaderno]].",
          "options": ["[[blue old small|azul viejo pequeño]]", "[[small old blue|cuaderno pequeño viejo azul]]"],
          "correctAnswer": 1,
          "explanation": "Orden: [[size|tamaño]] ([[small|pequeño]]) + age ([[old|viejo]]) + [[color|color]] ([[blue|azul]])."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e26.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e27",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "hard",
    "transcript": "[[My grandmother has a beautiful old silver ring|Mi abuela tiene un anillo de plata antiguo hermoso]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]] [[Complex|Complejo]]",
      "instructions": "Ordena los adjetivos en el orden correcto.",
      "correctSentence": "[[My grandmother has a beautiful old silver ring|Mi abuela tiene un anillo de plata antiguo hermoso]].",
      "words": ["[[ring|anillo]].", "[[silver|plata]]", "[[old|antiguo]]", "[[beautiful|hermoso]]", "[[a|un]]", "[[has|tiene]]", "[[grandmother|abuela]]", "[[My|Mi]]"],
      "explanation": "Orden: quality ([[beautiful|hermoso]]) + age ([[old|viejo]]) + [[color|color]]/material ([[silver|plata]])."
    },
    "audioUrl": "audio/a2/unit-4/e27.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e28",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "hard",
    "transcript": "[[They have comfortable long black shoes|Tienen zapatos negros largos cómodos]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]] [[for|para]] [[Clothing|Ropa]]",
      "instructions": "Selecciona el orden correcto para ropa.",
      "questions": [
        {
          "question": "She [[has|tiene]] [[a|un]] _______ _______ _______ [[coat|abrigo]].",
          "options": ["[[warm long nice|cálido largo bonito]]", "[[nice long warm|abrigo bonito largo cálido]]"],
          "correctAnswer": 1,
          "explanation": "Orden: quality ([[nice|agradable]]) + [[size|tamaño]] ([[long|largo]]) + quality ([[warm|cálido]])."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e28.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e29",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Adjective Order",
    "difficulty": "hard",
    "transcript": "[[He wears an elegant dark expensive watch|Usa un reloj caro oscuro elegante]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]] [[Multiple|Múltiple]]",
      "instructions": "Ordena los adjetivos correctamente.",
      "correctSentence": "[[He has an elegant dark expensive watch|Tiene un reloj caro oscuro elegante]].",
      "words": ["[[watch|reloj]].", "[[expensive|caro]]", "[[dark|oscuro]]", "[[elegant|elegante]]", "[[an|un]]", "[[has|tiene]]", "[[He|Él]]"],
      "explanation": "Orden: quality ([[elegant|elegante]]) + [[color|color]] ([[dark|oscuro]]) + quality ([[expensive|caro]])."
    },
    "audioUrl": "audio/a2/unit-4/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e30",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Adjective Order Review",
    "difficulty": "hard",
    "transcript": "[[My family has a wonderful new house|Mi familia tiene una casa nueva maravillosa]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[Order|Orden]] [[Review|Repaso]]",
      "instructions": "Selecciona el orden correcto de adjetivos.",
      "questions": [
        {
          "question": "She [[has|tiene]] [[a|un]] _______ _______ _______ [[car|coche]].",
          "options": ["[[red new beautiful|rojo nuevo hermoso]]", "[[beautiful new red|coche hermoso nuevo rojo]]"],
          "correctAnswer": 1,
          "explanation": "Orden: quality ([[beautiful|hermoso]]) + age ([[new|nuevo]]) + [[color|color]] ([[red|rojo]])."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e30.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // LESSON 3: DESCRIBING PEOPLE (Exercises 31-45)
  // ==========================================
  {
    "id": "a2-u4-e31",
    "type": "matching",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "medium",
    "transcript": "[[She is tall and slim|Es alta y delgada]].",
    "content": {
      "title": "[[Height|Altura]] [[and|y]] [[Build|Constitución]]",
      "instructions": "Relaciona cada palabra de constitución con su sinónimo.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[slim|esbelta]]",
          "correctMatch": "[[thin and graceful|delgada y elegante]]",
          "distractors": ["[[overweight|con sobrepeso]]", "[[strong and muscular|fuerte y musculosa]]", "[[short and strong|baja y fuerte]]", "[[thin without excess fat|delgada sin grasa excesiva]]"]
        },
        {
          "id": "pair-1",
          "word": "[[heavy|pesada]]",
          "correctMatch": "[[overweight|con sobrepeso]]",
          "distractors": ["[[thin and graceful|delgada y elegante]]", "[[strong and muscular|fuerte y musculosa]]", "[[short and strong|baja y fuerte]]", "[[thin without excess fat|delgada sin grasa excesiva]]"]
        },
        {
          "id": "pair-2",
          "word": "[[athletic|atl\u00e9tica]]",
          "correctMatch": "[[strong and muscular|fuerte y musculosa]]",
          "distractors": ["[[thin and graceful|delgada y elegante]]", "[[overweight|con sobrepeso]]", "[[short and strong|baja y fuerte]]", "[[thin without excess fat|delgada sin grasa excesiva]]"]
        },
        {
          "id": "pair-3",
          "word": "[[stocky|fornida]]",
          "correctMatch": "[[short and strong|baja y fuerte]]",
          "distractors": ["[[thin and graceful|delgada y elegante]]", "[[overweight|con sobrepeso]]", "[[strong and muscular|fuerte y musculosa]]", "[[thin without excess fat|delgada sin grasa excesiva]]"]
        },
        {
          "id": "pair-4",
          "word": "[[lean|esbelta]]",
          "correctMatch": "[[thin without excess fat|delgada sin grasa excesiva]]",
          "distractors": ["[[thin and graceful|delgada y elegante]]", "[[overweight|con sobrepeso]]", "[[strong and muscular|fuerte y musculosa]]", "[[short and strong|baja y fuerte]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e31.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e32",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "medium",
    "transcript": "[[My friend has got a round face and kind eyes|Mi amigo tiene la cara redonda y ojos amables]].",
    "content": {
      "title": "[[Face|Cara]] [[Description|Descripción]]",
      "instructions": "Ordena la descripción de la cara.",
      "correctSentence": "[[She has a round face|Tiene la cara redonda]].",
      "words": ["[[face|cara]].", "[[round|redonda]]", "[[a|una]]", "[[has|tiene]]", "[[She|Ella]]"],
      "explanation": "'[[She|ella]] [[has|tiene/tienen]] [[a|un/una]] [[round|redonda]] [[face|cara]]' [[describe|describe]] la forma de la cara."
    },
    "audioUrl": "audio/a2/unit-4/e32.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e33",
    "type": "matching",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "medium",
    "transcript": "[[He has brown eyes and a beard|Tiene los ojos marrones y una barba]].",
    "content": {
      "title": "[[Eyes|Ojos]] [[and|y]] [[Facial Hair|Vello Facial]]",
      "instructions": "Relaciona cada característica facial con su descripción.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[beard|barba]]",
          "correctMatch": "[[hair on a man's chin|cabello en la barbilla del hombre]]",
          "distractors": ["[[hair on upper lip|cabello en el labio superior]]", "[[small brown spots on skin|peque\u00f1as manchas marrones en la piel]]", "[[lines on the skin|l\u00edneas en la piel]]", "[[small indentations in cheeks|peque\u00f1as indentaciones en las mejillas]]"]
        },
        {
          "id": "pair-1",
          "word": "[[moustache|bigote]]",
          "correctMatch": "[[hair on upper lip|cabello en el labio superior]]",
          "distractors": ["[[hair on a man's chin|cabello en la barbilla del hombre]]", "[[small brown spots on skin|peque\u00f1as manchas marrones en la piel]]", "[[lines on the skin|l\u00edneas en la piel]]", "[[small indentations in cheeks|peque\u00f1as indentaciones en las mejillas]]"]
        },
        {
          "id": "pair-2",
          "word": "[[freckles|pecas]]",
          "correctMatch": "[[small brown spots on skin|peque\u00f1as manchas marrones en la piel]]",
          "distractors": ["[[hair on a man's chin|cabello en la barbilla del hombre]]", "[[hair on upper lip|cabello en el labio superior]]", "[[lines on the skin|l\u00edneas en la piel]]", "[[small indentations in cheeks|peque\u00f1as indentaciones en las mejillas]]"]
        },
        {
          "id": "pair-3",
          "word": "[[wrinkles|arrugas]]",
          "correctMatch": "[[lines on the skin|l\u00edneas en la piel]]",
          "distractors": ["[[hair on a man's chin|cabello en la barbilla del hombre]]", "[[hair on upper lip|cabello en el labio superior]]", "[[small brown spots on skin|peque\u00f1as manchas marrones en la piel]]", "[[small indentations in cheeks|peque\u00f1as indentaciones en las mejillas]]"]
        },
        {
          "id": "pair-4",
          "word": "[[dimples|hoyuelos]]",
          "correctMatch": "[[small indentations in cheeks|peque\u00f1as indentaciones en las mejillas]]",
          "distractors": ["[[hair on a man's chin|cabello en la barbilla del hombre]]", "[[hair on upper lip|cabello en el labio superior]]", "[[small brown spots on skin|peque\u00f1as manchas marrones en la piel]]", "[[lines on the skin|l\u00edneas en la piel]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e33.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e34",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "medium",
    "transcript": "[[My mother has got dark curly hair|Mi madre tiene el cabello rizado oscuro]].",
    "content": {
      "title": "[[Hair|Cabello]] [[Description|Descripción]]",
      "instructions": "Ordena la descripción del cabello.",
      "correctSentence": "[[She has dark curly hair|Tiene el cabello rizado oscuro]].",
      "words": ["[[hair|cabello]].", "[[curly|rizado]]", "[[dark|oscuro]]", "[[has|tiene]]", "[[She|Ella]]"],
      "explanation": "'[[She|ella]] [[has|tiene/tienen]] [[dark|oscuro]] [[curly|rizado]] [[hair|cabello]]' [[describe|describe]] el tipo y [[color|color]] del cabello."
    },
    "audioUrl": "audio/a2/unit-4/e34.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e35",
    "type": "matching",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "medium",
    "transcript": "[[The boy is wearing a blue jacket|El niño lleva una chaqueta azul]].",
    "content": {
      "title": "[[Clothing|Ropa]] [[Description|Descripción]]",
      "instructions": "Relaciona cada palabra de ropa con su descripción.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[dress|vestido]]",
          "correctMatch": "[[a garment worn by women|prenda usada por mujeres]]",
          "distractors": ["[[a short coat|abrigo corto]]", "[[garment covering legs|prenda que cubre las piernas]]", "[[upper garment with buttons|prenda superior con botones]]", "[[garment worn on feet|prenda usada en los pies]]"]
        },
        {
          "id": "pair-1",
          "word": "[[jacket|chaqueta]]",
          "correctMatch": "[[a short coat|abrigo corto]]",
          "distractors": ["[[a garment worn by women|prenda usada por mujeres]]", "[[garment covering legs|prenda que cubre las piernas]]", "[[upper garment with buttons|prenda superior con botones]]", "[[garment worn on feet|prenda usada en los pies]]"]
        },
        {
          "id": "pair-2",
          "word": "[[trousers|pantalones]]",
          "correctMatch": "[[garment covering legs|prenda que cubre las piernas]]",
          "distractors": ["[[a garment worn by women|prenda usada por mujeres]]", "[[a short coat|abrigo corto]]", "[[upper garment with buttons|prenda superior con botones]]", "[[garment worn on feet|prenda usada en los pies]]"]
        },
        {
          "id": "pair-3",
          "word": "[[shirt|camisa]]",
          "correctMatch": "[[upper garment with buttons|prenda superior con botones]]",
          "distractors": ["[[a garment worn by women|prenda usada por mujeres]]", "[[a short coat|abrigo corto]]", "[[garment covering legs|prenda que cubre las piernas]]", "[[garment worn on feet|prenda usada en los pies]]"]
        },
        {
          "id": "pair-4",
          "word": "[[shoes|zapatos]]",
          "correctMatch": "[[garment worn on feet|prenda usada en los pies]]",
          "distractors": ["[[a garment worn by women|prenda usada por mujeres]]", "[[a short coat|abrigo corto]]", "[[garment covering legs|prenda que cubre las piernas]]", "[[upper garment with buttons|prenda superior con botones]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e35.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e36",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "medium",
    "transcript": "[[She is attractive with beautiful features|Es atractiva con características hermosas]].",
    "content": {
      "title": "[[General|General]] [[Appearance|Apariencia]]",
      "instructions": "Ordena la descripción general de apariencia.",
      "correctSentence": "[[She is attractive|Es atractiva]].",
      "words": ["[[attractive|atractiva]].", "[[is|es]]", "[[She|Ella]]"],
      "explanation": "'[[She|ella]] [[is|es/está]] attractive' [[describe|describe]] la apariencia general de alguien."
    },
    "audioUrl": "audio/a2/unit-4/e36.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e37",
    "type": "matching",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "medium",
    "transcript": "[[He looks young for his age|Se ve joven para su edad]].",
    "content": {
      "title": "[[Age|Edad]] [[Appearance|Apariencia]]",
      "instructions": "Relaciona cada palabra de edad con su descripción.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[young|joven]]",
          "correctMatch": "[[early in life or existence|al principio de la vida]]",
          "distractors": ["[[advanced in age|avanzado en edad]]", "[[between young and old|entre joven y viejo]]", "[[very old|muy viejo]]", "[[very young child|ni\u00f1o muy peque\u00f1o]]"]
        },
        {
          "id": "pair-1",
          "word": "[[old|viejo]]",
          "correctMatch": "[[advanced in age|avanzado en edad]]",
          "distractors": ["[[early in life or existence|al principio de la vida]]", "[[between young and old|entre joven y viejo]]", "[[very old|muy viejo]]", "[[very young child|ni\u00f1o muy peque\u00f1o]]"]
        },
        {
          "id": "pair-2",
          "word": "[[middle-aged|de mediana edad]]",
          "correctMatch": "[[between young and old|entre joven y viejo]]",
          "distractors": ["[[early in life or existence|al principio de la vida]]", "[[advanced in age|avanzado en edad]]", "[[very old|muy viejo]]", "[[very young child|ni\u00f1o muy peque\u00f1o]]"]
        },
        {
          "id": "pair-3",
          "word": "[[elderly|anciano]]",
          "correctMatch": "[[very old|muy viejo]]",
          "distractors": ["[[early in life or existence|al principio de la vida]]", "[[advanced in age|avanzado en edad]]", "[[between young and old|entre joven y viejo]]", "[[very young child|ni\u00f1o muy peque\u00f1o]]"]
        },
        {
          "id": "pair-4",
          "word": "[[infant|beb\u00e9]]",
          "correctMatch": "[[very young child|ni\u00f1o muy peque\u00f1o]]",
          "distractors": ["[[early in life or existence|al principio de la vida]]", "[[advanced in age|avanzado en edad]]", "[[between young and old|entre joven y viejo]]", "[[very old|muy viejo]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e37.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e38",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "medium",
    "transcript": "[[He has a friendly smile|Tiene una sonrisa amistosa]].",
    "content": {
      "title": "[[Smile|Sonrisa]] [[Description|Descripción]]",
      "instructions": "Ordena la descripción de la sonrisa.",
      "correctSentence": "[[He has a friendly smile|Tiene una sonrisa amistosa]].",
      "words": ["[[smile|sonrisa]].", "[[friendly|amistosa]]", "[[a|una]]", "[[has|tiene]]", "[[He|Él]]"],
      "explanation": "'[[He|él]] [[has|tiene/tienen]] [[a|un/una]] [[friendly|amable]] smile' [[describe|describe]] la sonrisa de alguien."
    },
    "audioUrl": "audio/a2/unit-4/e38.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e39",
    "type": "matching",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "medium",
    "transcript": "[[She has a slim waist and nice figure|Tiene una cintura delgada y una buena figura]].",
    "content": {
      "title": "[[Figure|Figura]] [[Description|Descripción]]",
      "instructions": "Relaciona cada palabra de figura con su definición.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[slim|esbelta]]",
          "correctMatch": "[[thin and attractive|delgada y atractiva]]",
          "distractors": ["[[having attractive curves|teniendo curvas atractivas]]", "[[healthy and muscular|saludable y musculoso]]", "[[elegant and flowing|elegante y fluido]]", "[[strong like a sports person|fuerte como deportista]]"]
        },
        {
          "id": "pair-1",
          "word": "[[curvy|curvil\u00ednea]]",
          "correctMatch": "[[having attractive curves|teniendo curvas atractivas]]",
          "distractors": ["[[thin and attractive|delgada y atractiva]]", "[[healthy and muscular|saludable y musculoso]]", "[[elegant and flowing|elegante y fluido]]", "[[strong like a sports person|fuerte como deportista]]"]
        },
        {
          "id": "pair-2",
          "word": "[[fit|en forma]]",
          "correctMatch": "[[healthy and muscular|saludable y musculoso]]",
          "distractors": ["[[thin and attractive|delgada y atractiva]]", "[[having attractive curves|teniendo curvas atractivas]]", "[[elegant and flowing|elegante y fluido]]", "[[strong like a sports person|fuerte como deportista]]"]
        },
        {
          "id": "pair-3",
          "word": "[[graceful|gr\u00e1cil]]",
          "correctMatch": "[[elegant and flowing|elegante y fluido]]",
          "distractors": ["[[thin and attractive|delgada y atractiva]]", "[[having attractive curves|teniendo curvas atractivas]]", "[[healthy and muscular|saludable y musculoso]]", "[[strong like a sports person|fuerte como deportista]]"]
        },
        {
          "id": "pair-4",
          "word": "[[athletic|atl\u00e9tica]]",
          "correctMatch": "[[strong like a sports person|fuerte como deportista]]",
          "distractors": ["[[thin and attractive|delgada y atractiva]]", "[[having attractive curves|teniendo curvas atractivas]]", "[[healthy and muscular|saludable y musculoso]]", "[[elegant and flowing|elegante y fluido]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e39.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e40",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "medium",
    "transcript": "[[My sister is wearing glasses|Mi hermana lleva gafas]].",
    "content": {
      "title": "[[Glasses|Gafas]]/[[Spectacles|Lentes]]",
      "instructions": "Ordena la oración sobre lentes/gafas.",
      "correctSentence": "[[She is wearing glasses|Lleva gafas]].",
      "words": ["[[glasses|gafas]].", "[[wearing|llevando]]", "[[is|está]]", "[[She|Ella]]"],
      "explanation": "'[[She|ella]] [[is|es/está]] wearing glasses' indica que alguien lleva gafas."
    },
    "audioUrl": "audio/a2/unit-4/e40.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e41",
    "type": "matching",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "hard",
    "transcript": "[[He is bald with a mustache|Es calvo con bigote]].",
    "content": {
      "title": "[[Head|Cabeza]] [[Description|Descripción]]",
      "instructions": "Relaciona cada característica de cabeza con su descripción.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[bald|calvo]]",
          "correctMatch": "[[without hair on head|sin cabello en la cabeza]]",
          "distractors": ["[[having a lot of hair|teniendo mucho cabello]]", "[[hair has been cut very short|cabello cortado muy corto]]", "[[hair in loops or coils|cabello en bucles]]", "[[hair not curly|cabello no rizado]]"]
        },
        {
          "id": "pair-1",
          "word": "[[hairy|cabelludo]]",
          "correctMatch": "[[having a lot of hair|teniendo mucho cabello]]",
          "distractors": ["[[without hair on head|sin cabello en la cabeza]]", "[[hair has been cut very short|cabello cortado muy corto]]", "[[hair in loops or coils|cabello en bucles]]", "[[hair not curly|cabello no rizado]]"]
        },
        {
          "id": "pair-2",
          "word": "[[shaved|afeitado]]",
          "correctMatch": "[[hair has been cut very short|cabello cortado muy corto]]",
          "distractors": ["[[without hair on head|sin cabello en la cabeza]]", "[[having a lot of hair|teniendo mucho cabello]]", "[[hair in loops or coils|cabello en bucles]]", "[[hair not curly|cabello no rizado]]"]
        },
        {
          "id": "pair-3",
          "word": "[[curly|rizado]]",
          "correctMatch": "[[hair in loops or coils|cabello en bucles]]",
          "distractors": ["[[without hair on head|sin cabello en la cabeza]]", "[[having a lot of hair|teniendo mucho cabello]]", "[[hair has been cut very short|cabello cortado muy corto]]", "[[hair not curly|cabello no rizado]]"]
        },
        {
          "id": "pair-4",
          "word": "[[straight|liso]]",
          "correctMatch": "[[hair not curly|cabello no rizado]]",
          "distractors": ["[[without hair on head|sin cabello en la cabeza]]", "[[having a lot of hair|teniendo mucho cabello]]", "[[hair has been cut very short|cabello cortado muy corto]]", "[[hair in loops or coils|cabello en bucles]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e41.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e42",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "hard",
    "transcript": "[[She has a scar on her face|Tiene una cicatriz en la cara]].",
    "content": {
      "title": "[[Distinctive|Distintivas]] [[Features|Características]]",
      "instructions": "Ordena la descripción de características distintivas.",
      "correctSentence": "[[She has a scar on her face|Tiene una cicatriz en la cara]].",
      "words": ["[[face|cara]].", "[[her|su]]", "[[on|en]]", "[[scar|cicatriz]]", "[[a|una]]", "[[has|tiene]]", "[[She|Ella]]"],
      "explanation": "'[[She|ella]] [[has|tiene/tienen]] [[a|un/una]] scar [[on|en]] [[her|la]] [[face|cara]]' [[describe|describe]] una característica distintiva."
    },
    "audioUrl": "audio/a2/unit-4/e42.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e43",
    "type": "matching",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "hard",
    "transcript": "[[He has freckles on his nose|Tiene pecas en la nariz]].",
    "content": {
      "title": "[[Skin|Piel]] [[Features|Características]]",
      "instructions": "Relaciona cada característica de piel con su descripción.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[freckles|pecas]]",
          "correctMatch": "[[small brown marks on skin|peque\u00f1as marcas marrones en la piel]]",
          "distractors": ["[[dark raised marks on skin|marcas oscuras elevadas en la piel]]", "[[marks present from birth|marcas presentes desde el nacimiento]]", "[[permanent designs on skin|dise\u00f1os permanentes en la piel]]", "[[skin condition with spots|condici\u00f3n de piel con manchas]]"]
        },
        {
          "id": "pair-1",
          "word": "[[moles|lunares]]",
          "correctMatch": "[[dark raised marks on skin|marcas oscuras elevadas en la piel]]",
          "distractors": ["[[small brown marks on skin|peque\u00f1as marcas marrones en la piel]]", "[[marks present from birth|marcas presentes desde el nacimiento]]", "[[permanent designs on skin|dise\u00f1os permanentes en la piel]]", "[[skin condition with spots|condici\u00f3n de piel con manchas]]"]
        },
        {
          "id": "pair-2",
          "word": "[[birthmarks|marcas de nacimiento]]",
          "correctMatch": "[[marks present from birth|marcas presentes desde el nacimiento]]",
          "distractors": ["[[small brown marks on skin|peque\u00f1as marcas marrones en la piel]]", "[[dark raised marks on skin|marcas oscuras elevadas en la piel]]", "[[permanent designs on skin|dise\u00f1os permanentes en la piel]]", "[[skin condition with spots|condici\u00f3n de piel con manchas]]"]
        },
        {
          "id": "pair-3",
          "word": "[[tattoos|tatuajes]]",
          "correctMatch": "[[permanent designs on skin|dise\u00f1os permanentes en la piel]]",
          "distractors": ["[[small brown marks on skin|peque\u00f1as marcas marrones en la piel]]", "[[dark raised marks on skin|marcas oscuras elevadas en la piel]]", "[[marks present from birth|marcas presentes desde el nacimiento]]", "[[skin condition with spots|condici\u00f3n de piel con manchas]]"]
        },
        {
          "id": "pair-4",
          "word": "[[acne|acn\u00e9]]",
          "correctMatch": "[[skin condition with spots|condici\u00f3n de piel con manchas]]",
          "distractors": ["[[small brown marks on skin|peque\u00f1as marcas marrones en la piel]]", "[[dark raised marks on skin|marcas oscuras elevadas en la piel]]", "[[marks present from birth|marcas presentes desde el nacimiento]]", "[[permanent designs on skin|dise\u00f1os permanentes en la piel]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e43.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e44",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Describing People",
    "difficulty": "hard",
    "transcript": "[[My grandfather has wrinkles and white hair|Mi abuelo tiene arrugas y cabello blanco]].",
    "content": {
      "title": "[[Age|Edad]]-[[Related|Relacionadas]] [[Features|Características]]",
      "instructions": "Ordena la descripción de características por edad.",
      "correctSentence": "[[He has wrinkles and white hair|Tiene arrugas y cabello blanco]].",
      "words": ["[[hair|cabello]].", "[[white|blanco]]", "[[and|y]]", "[[wrinkles|arrugas]]", "[[has|tiene]]", "[[He|Él]]"],
      "explanation": "'[[He|él]] [[has|tiene/tienen]] [[wrinkles|arrugas]] [[and|y]] [[white|blanco]] [[hair|cabello]]' [[describe|describe]] características de edad avanzada."
    },
    "audioUrl": "audio/a2/unit-4/e44.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e45",
    "type": "matching",
    "level": "A2",
    "topic": "Describing People Review",
    "difficulty": "hard",
    "transcript": "[[She is short with long red hair|Es baja con cabello rojo largo]].",
    "content": {
      "title": "[[Overall|General]] [[Description|Descripción]]",
      "instructions": "Relaciona cada palabra de descripción general con su definición.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[striking|llamativo]]",
          "correctMatch": "[[impressive and memorable|impresionante y memorable]]",
          "distractors": ["[[characteristic and different|caracter\u00edstico y diferente]]", "[[stylish and refined|con estilo y refinado]]", "[[one of a kind|\u00fanico en su tipo]]", "[[worthy of attention|digno de atenci\u00f3n]]"]
        },
        {
          "id": "pair-1",
          "word": "[[distinctive|distintivo]]",
          "correctMatch": "[[characteristic and different|caracter\u00edstico y diferente]]",
          "distractors": ["[[impressive and memorable|impresionante y memorable]]", "[[stylish and refined|con estilo y refinado]]", "[[one of a kind|\u00fanico en su tipo]]", "[[worthy of attention|digno de atenci\u00f3n]]"]
        },
        {
          "id": "pair-2",
          "word": "[[elegant|elegante]]",
          "correctMatch": "[[stylish and refined|con estilo y refinado]]",
          "distractors": ["[[impressive and memorable|impresionante y memorable]]", "[[characteristic and different|caracter\u00edstico y diferente]]", "[[one of a kind|\u00fanico en su tipo]]", "[[worthy of attention|digno de atenci\u00f3n]]"]
        },
        {
          "id": "pair-3",
          "word": "[[unique|\u00fanico]]",
          "correctMatch": "[[one of a kind|\u00fanico en su tipo]]",
          "distractors": ["[[impressive and memorable|impresionante y memorable]]", "[[characteristic and different|caracter\u00edstico y diferente]]", "[[stylish and refined|con estilo y refinado]]", "[[worthy of attention|digno de atenci\u00f3n]]"]
        },
        {
          "id": "pair-4",
          "word": "[[remarkable|notable]]",
          "correctMatch": "[[worthy of attention|digno de atenci\u00f3n]]",
          "distractors": ["[[impressive and memorable|impresionante y memorable]]", "[[characteristic and different|caracter\u00edstico y diferente]]", "[[stylish and refined|con estilo y refinado]]", "[[one of a kind|\u00fanico en su tipo]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e45.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // LESSON 4: MIXED PRACTICE & READING (Exercises 46-60)
  // ==========================================
  {
    "id": "a2-u4-e46",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Mixed Practice",
    "difficulty": "hard",
    "transcript": "[[My friend is wearing a beautiful new red jacket|Mi amigo lleva una hermosa chaqueta roja nueva]].",
    "content": {
      "title": "[[Mixed|Mixta]] [[Description|Descripción]]",
      "instructions": "Según la descripción, completa con el orden correcto de adjetivos.",
      "questions": [
        {
          "question": "[[He|Él]] [[is wearing|lleva]] [[a|un]] _______ _______ _______ [[jacket|chaqueta]].",
          "options": ["[[red new beautiful|roja nueva hermosa]]", "[[new beautiful red|nueva hermosa roja]]", "[[beautiful new red|hermosa nueva roja]]"],
          "correctAnswer": 2,
          "explanation": "El orden correcto de adjetivos es: quality ([[beautiful|hermoso]]) + age ([[new|nuevo]]) + [[color|color]] ([[red|rojo]]) = 'beautiful new red' (hermosa nueva roja)."
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e46.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e47",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Mixed Practice",
    "difficulty": "hard",
    "transcript": "[[She has a beautiful round face with big dark eyes|Tiene una hermosa cara redonda con ojos oscuros grandes]].",
    "content": {
      "title": "[[Complex|Compleja]] [[Description|Descripción]]",
      "instructions": "Ordena la descripción compleja.",
      "correctSentence": "[[She has a beautiful round face|Tiene una hermosa cara redonda]].",
      "words": ["[[face|cara]].", "[[round|redonda]]", "[[beautiful|hermosa]]", "[[a|una]]", "[[has|tiene]]", "[[She|Ella]]"],
      "explanation": "Orden: quality ([[beautiful|hermoso]]) + [[shape|forma]] ([[round|redonda]])."
    },
    "audioUrl": "audio/a2/unit-4/e47.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a2-u4-e48",
    "type": "matching",
    "level": "A2",
    "topic": "Mixed Practice",
    "difficulty": "hard",
    "transcript": "[[Tom is tall and athletic|Tom es alto y atlético]].",
    "content": {
      "title": "[[Personality|Personalidad]] + [[Appearance|Apariencia]]",
      "instructions": "Relaciona cada palabra de apariencia con su sinónimo.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[athletic|atl\u00e9tico]]",
          "correctMatch": "[[having a strong, muscular body|teniendo un cuerpo fuerte y musculoso]]",
          "distractors": ["[[in good physical condition|en buena condici\u00f3n f\u00edsica]]", "[[having physical power|teniendo poder f\u00edsico]]", "[[able to move quickly and easily|capaz de moverse r\u00e1pida y f\u00e1cilmente]]", "[[energetic and active|energ\u00e9tico y activo]]"]
        },
        {
          "id": "pair-1",
          "word": "[[fit|en forma]]",
          "correctMatch": "[[in good physical condition|en buena condici\u00f3n f\u00edsica]]",
          "distractors": ["[[having a strong, muscular body|teniendo un cuerpo fuerte y musculoso]]", "[[having physical power|teniendo poder f\u00edsico]]", "[[able to move quickly and easily|capaz de moverse r\u00e1pida y f\u00e1cilmente]]", "[[energetic and active|energ\u00e9tico y activo]]"]
        },
        {
          "id": "pair-2",
          "word": "[[strong|fuerte]]",
          "correctMatch": "[[having physical power|teniendo poder f\u00edsico]]",
          "distractors": ["[[having a strong, muscular body|teniendo un cuerpo fuerte y musculoso]]", "[[in good physical condition|en buena condici\u00f3n f\u00edsica]]", "[[able to move quickly and easily|capaz de moverse r\u00e1pida y f\u00e1cilmente]]", "[[energetic and active|energ\u00e9tico y activo]]"]
        },
        {
          "id": "pair-3",
          "word": "[[agile|\u00e1gil]]",
          "correctMatch": "[[able to move quickly and easily|capaz de moverse r\u00e1pida y f\u00e1cilmente]]",
          "distractors": ["[[having a strong, muscular body|teniendo un cuerpo fuerte y musculoso]]", "[[in good physical condition|en buena condici\u00f3n f\u00edsica]]", "[[having physical power|teniendo poder f\u00edsico]]", "[[energetic and active|energ\u00e9tico y activo]]"]
        },
        {
          "id": "pair-4",
          "word": "[[vigorous|vigoroso]]",
          "correctMatch": "[[energetic and active|energ\u00e9tico y activo]]",
          "distractors": ["[[having a strong, muscular body|teniendo un cuerpo fuerte y musculoso]]", "[[in good physical condition|en buena condici\u00f3n f\u00edsica]]", "[[having physical power|teniendo poder f\u00edsico]]", "[[able to move quickly and easily|capaz de moverse r\u00e1pida y f\u00e1cilmente]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e48.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e49",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Mixed Practice",
    "difficulty": "hard",
    "transcript": "[[He looks serious but friendly|Se ve serio pero amistoso]].",
    "content": {
      "title": "[[Expression|Expresión]] [[Description|Descripción]]",
      "instructions": "Ordena la descripción de expresión.",
      "correctSentence": "[[He looks friendly|Se ve amistoso]].",
      "words": ["[[friendly|amistoso]].", "[[looks|parece]]", "[[He|Él]]"],
      "explanation": "'[[He|él]] looks [[friendly|amable]]' [[describe|describe]] la expresión de la cara."
    },
    "audioUrl": "audio/a2/unit-4/e49.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e50",
    "type": "matching",
    "level": "A2",
    "topic": "Mixed Practice",
    "difficulty": "hard",
    "transcript": "[[He is dressed elegantly|Está vestido elegantemente]].",
    "content": {
      "title": "[[Overall|General]] [[Style|Estilo]]",
      "instructions": "Relaciona cada palabra de estilo con su descripción.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[smartly|elegantemente]]",
          "correctMatch": "[[in a neat, well-dressed manner|de manera elegante y bien vestida]]",
          "distractors": ["[[in a relaxed, informal way|de manera relajada e informal]]", "[[in a proper, official manner|de manera propia y oficial]]", "[[fashionably and attractively|de manera elegante y atractiva]]", "[[in a tidy, orderly way|de manera ordenada y limpia]]"]
        },
        {
          "id": "pair-1",
          "word": "[[casually|informalmente]]",
          "correctMatch": "[[in a relaxed, informal way|de manera relajada e informal]]",
          "distractors": ["[[in a neat, well-dressed manner|de manera elegante y bien vestida]]", "[[in a proper, official manner|de manera propia y oficial]]", "[[fashionably and attractively|de manera elegante y atractiva]]", "[[in a tidy, orderly way|de manera ordenada y limpia]]"]
        },
        {
          "id": "pair-2",
          "word": "[[formally|formalmente]]",
          "correctMatch": "[[in a proper, official manner|de manera propia y oficial]]",
          "distractors": ["[[in a neat, well-dressed manner|de manera elegante y bien vestida]]", "[[in a relaxed, informal way|de manera relajada e informal]]", "[[fashionably and attractively|de manera elegante y atractiva]]", "[[in a tidy, orderly way|de manera ordenada y limpia]]"]
        },
        {
          "id": "pair-3",
          "word": "[[stylishly|con estilo]]",
          "correctMatch": "[[fashionably and attractively|de manera elegante y atractiva]]",
          "distractors": ["[[in a neat, well-dressed manner|de manera elegante y bien vestida]]", "[[in a relaxed, informal way|de manera relajada e informal]]", "[[in a proper, official manner|de manera propia y oficial]]", "[[in a tidy, orderly way|de manera ordenada y limpia]]"]
        },
        {
          "id": "pair-4",
          "word": "[[neatly|pulcramente]]",
          "correctMatch": "[[in a tidy, orderly way|de manera ordenada y limpia]]",
          "distractors": ["[[in a neat, well-dressed manner|de manera elegante y bien vestida]]", "[[in a relaxed, informal way|de manera relajada e informal]]", "[[in a proper, official manner|de manera propia y oficial]]", "[[fashionably and attractively|de manera elegante y atractiva]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e50.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e51",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Mixed Practice",
    "difficulty": "hard",
    "transcript": "[[They are wearing matching outfits|Llevan atuendos a juego]].",
    "content": {
      "title": "[[Coordinated|Coordinada]] [[Clothing|Ropa]]",
      "instructions": "Ordena la descripción de ropa coordinada.",
      "correctSentence": "[[They are wearing matching outfits|Llevan atuendos a juego]].",
      "words": ["[[outfits|atuendos]].", "[[matching|a juego]]", "[[wearing|llevando]]", "[[are|están]]", "[[They|Ellos]]"],
      "explanation": "'[[They|ellos/ellas]] [[are|sois/está[[is|es/está]]/[[son|hijo]]/están]] wearing matching outfits' [[describe|describe]] ropa coordinada."
    },
    "audioUrl": "audio/a2/unit-4/e51.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e52",
    "type": "matching",
    "level": "A2",
    "topic": "Mixed Practice",
    "difficulty": "hard",
    "transcript": "[[The athlete has a muscular build|El atleta tiene una constitución musculosa]].",
    "content": {
      "title": "[[Athletic|Atlético]] [[Build|Constitución]]",
      "instructions": "Relaciona cada palabra de constitución atlética con su descripción.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[muscular|musculosa]]",
          "correctMatch": "[[having visible developed muscles|teniendo m\u00fasculos visibles desarrollados]]",
          "distractors": ["[[firm and well-defined muscles|m\u00fasculos firmes y bien definidos]]", "[[very muscular with visible definition|muy musculosa con definici\u00f3n visible]]", "[[large and heavily muscled|grande y fuertemente musculada]]", "[[thin with visible muscles|delgada con m\u00fasculos visibles]]"]
        },
        {
          "id": "pair-1",
          "word": "[[toned|tonificada]]",
          "correctMatch": "[[firm and well-defined muscles|m\u00fasculos firmes y bien definidos]]",
          "distractors": ["[[having visible developed muscles|teniendo m\u00fasculos visibles desarrollados]]", "[[very muscular with visible definition|muy musculosa con definici\u00f3n visible]]", "[[large and heavily muscled|grande y fuertemente musculada]]", "[[thin with visible muscles|delgada con m\u00fasculos visibles]]"]
        },
        {
          "id": "pair-2",
          "word": "[[ripped|marcada]]",
          "correctMatch": "[[very muscular with visible definition|muy musculosa con definici\u00f3n visible]]",
          "distractors": ["[[having visible developed muscles|teniendo m\u00fasculos visibles desarrollados]]", "[[firm and well-defined muscles|m\u00fasculos firmes y bien definidos]]", "[[large and heavily muscled|grande y fuertemente musculada]]", "[[thin with visible muscles|delgada con m\u00fasculos visibles]]"]
        },
        {
          "id": "pair-3",
          "word": "[[bulky|voluminosa]]",
          "correctMatch": "[[large and heavily muscled|grande y fuertemente musculada]]",
          "distractors": ["[[having visible developed muscles|teniendo m\u00fasculos visibles desarrollados]]", "[[firm and well-defined muscles|m\u00fasculos firmes y bien definidos]]", "[[very muscular with visible definition|muy musculosa con definici\u00f3n visible]]", "[[thin with visible muscles|delgada con m\u00fasculos visibles]]"]
        },
        {
          "id": "pair-4",
          "word": "[[lean|esbelta]]",
          "correctMatch": "[[thin with visible muscles|delgada con m\u00fasculos visibles]]",
          "distractors": ["[[having visible developed muscles|teniendo m\u00fasculos visibles desarrollados]]", "[[firm and well-defined muscles|m\u00fasculos firmes y bien definidos]]", "[[very muscular with visible definition|muy musculosa con definici\u00f3n visible]]", "[[large and heavily muscled|grande y fuertemente musculada]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e52.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e53",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Mixed Practice",
    "difficulty": "hard",
    "transcript": "[[She has an oval-shaped face|Tiene la cara ovalada]].",
    "content": {
      "title": "[[Face|Cara]] [[Shapes|Formas]]",
      "instructions": "Ordena la descripción de formas faciales.",
      "correctSentence": "[[She has an oval face|Tiene la cara ovalada]].",
      "words": ["[[face|cara]].", "[[oval|ovalada]]", "[[an|una]]", "[[has|tiene]]", "[[She|Ella]]"],
      "explanation": "'[[She|ella]] [[has|tiene/tienen]] [[an|un/una]] [[oval|ovalada]] [[face|cara]]' [[describe|describe]] la forma de la cara."
    },
    "audioUrl": "audio/a2/unit-4/e53.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e54",
    "type": "matching",
    "level": "A2",
    "topic": "Mixed Practice",
    "difficulty": "hard",
    "transcript": "[[He has a deep voice|Tiene una voz profunda]].",
    "content": {
      "title": "[[Voice|Voz]] [[Description|Descripción]]",
      "instructions": "Relaciona cada característica de voz con su descripción.",
      "pairs": [
        {
          "id": "pair-0",
          "word": "[[deep|profunda]]",
          "correctMatch": "[[low in pitch|baja en tono]]",
          "distractors": ["[[easy to hear and understand|f\u00e1cil de o\u00edr y entender]]", "[[quiet and gentle|tranquila y gentil]]", "[[high in volume|alto en volumen]]", "[[rough and harsh|\u00e1spera y fuerte]]"]
        },
        {
          "id": "pair-1",
          "word": "[[clear|clara]]",
          "correctMatch": "[[easy to hear and understand|f\u00e1cil de o\u00edr y entender]]",
          "distractors": ["[[low in pitch|baja en tono]]", "[[quiet and gentle|tranquila y gentil]]", "[[high in volume|alto en volumen]]", "[[rough and harsh|\u00e1spera y fuerte]]"]
        },
        {
          "id": "pair-2",
          "word": "[[soft|suave]]",
          "correctMatch": "[[quiet and gentle|tranquila y gentil]]",
          "distractors": ["[[low in pitch|baja en tono]]", "[[easy to hear and understand|f\u00e1cil de o\u00edr y entender]]", "[[high in volume|alto en volumen]]", "[[rough and harsh|\u00e1spera y fuerte]]"]
        },
        {
          "id": "pair-3",
          "word": "[[loud|fuerte]]",
          "correctMatch": "[[high in volume|alto en volumen]]",
          "distractors": ["[[low in pitch|baja en tono]]", "[[easy to hear and understand|f\u00e1cil de o\u00edr y entender]]", "[[quiet and gentle|tranquila y gentil]]", "[[rough and harsh|\u00e1spera y fuerte]]"]
        },
        {
          "id": "pair-4",
          "word": "[[hoarse|ronca]]",
          "correctMatch": "[[rough and harsh|\u00e1spera y fuerte]]",
          "distractors": ["[[low in pitch|baja en tono]]", "[[easy to hear and understand|f\u00e1cil de o\u00edr y entender]]", "[[quiet and gentle|tranquila y gentil]]", "[[high in volume|alto en volumen]]"]
        }
      ]
    },
    "audioUrl": "audio/a2/unit-4/e54.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e55",
    "type": "sentence-building",
    "level": "A2",
    "topic": "Mixed Practice",
    "difficulty": "hard",
    "transcript": "[[She has a warm smile and kind eyes|Tiene una sonrisa cálida y ojos amables]].",
    "content": {
      "title": "[[Character|Carácter]] [[Expression|Expresión]]",
      "instructions": "Ordena la descripción que revela [[car|coche]]ácter.",
      "correctSentence": "[[She has a warm smile|Tiene una sonrisa cálida]].",
      "words": ["[[smile|sonrisa]].", "[[warm|cálida]]", "[[a|una]]", "[[has|tiene]]", "[[She|Ella]]"],
      "explanation": "'[[She|ella]] [[has|tiene/tienen]] [[a|un/una]] [[warm|cálido]] smile' [[describe|describe]] una sonrisa que expresa calidez."
    },
    "audioUrl": "audio/a2/unit-4/e55.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a2-u4-e56",
    "type": "reading",
    "level": "A2",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Hello, I would like to tell you about my best friend Sophie|Hola, me gustaría hablar sobre mi mejor amiga Sophie]]. [[She is twenty years old|Tiene veinte años]]. [[Sophie has got a beautiful round face with big blue eyes|Sophie tiene una hermosa cara redonda con ojos azules grandes]]. [[She has long curly blonde hair that reaches her shoulders|Tiene un cabello rubio rizado largo que le llega a los hombros]]. [[She is tall and slim|Es alta y delgada]]. [[She has a warm smile and a friendly personality|Tiene una sonrisa cálida y una personalidad amistosa]]. [[She loves wearing colorful clothes, especially beautiful bright dresses|Le encanta usar ropa colorida, especialmente hermosos vestidos brillantes]]. [[She is wearing a red jacket today|Hoy lleva una chaqueta roja]]. [[Everyone likes Sophie because she is kind and beautiful|A todos les gusta Sophie porque es amable y hermosa]]. [[She is my best friend and I am very proud to know her|Es mi mejor amiga y estoy muy orgulloso de conocerla]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[My Best Friend Sophie|Mi Mejor Amiga Sophie]]",
      "instructions": "Lee el texto sobre Sophie.",
      "questions": [
        {
          "question": "[[Read and understand the text about Sophie|Lee y entiende el texto sobre Sophie]].",
          "options": ["[[I have read the text|He leído el texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click to continue|Haz clic para continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a2-u4-e57",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How old is Sophie|¿Cuántos años tiene Sophie?]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Sophie's Age|Edad de Sophie]]",
      "instructions": "Responde basándote en el texto.",
      "questions": [
        {
          "question": "[[How old is Sophie|¿Cuántos años tiene Sophie?]]?",
          "options": ["[[She is 18 years old|Tiene 18 años]]", "[[She is 20 years old|Tiene 20 años]]", "[[She is 25 years old|Tiene 25 años]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: '[[She|ella]] [[is|es/está]] twenty years [[old|viejo]]' (Tiene veinte [[a|un/una]]ños)."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a2-u4-e58",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What color are Sophie's eyes|¿Qué color tienen los ojos de Sophie?]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Eye Color|Color de Ojos]]",
      "instructions": "Responde basándote en el texto.",
      "questions": [
        {
          "question": "[[What color are Sophie's eyes|¿Qué color tienen los ojos de Sophie?]]?",
          "options": ["[[They are brown|Son marrones]]", "[[They are blue|Son azules]]", "[[They are green|Son verdes]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: 'Sophie [[has got|tiene/tienen]] [[big|grande]] [[blue|azul]] [[eyes|ojos]]' (Sophie tiene ojos azules grandes)."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a2-u4-e59",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What is Sophie's hair like|¿Cómo es el cabello de Sophie?]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Hair Description|Descripción del Cabello]]",
      "instructions": "Responde basándote en el texto.",
      "questions": [
        {
          "question": "[[Sophie's hair is|El cabello de Sophie es]]...",
          "options": ["[[short and straight|corto y liso]]", "[[long curly and blonde|largo, rizado y rubio]]", "[[short curly and brown|corto, rizado y marrón]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: '[[She|ella]] [[has|tiene/tienen]] [[long|largo]] [[curly|rizado]] [[blonde|rubio/rubia]] [[hair|cabello]]' (Tiene un cabello rubio rizado largo)."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a2-u4-e60",
    "type": "multiple-choice",
    "level": "A2",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What color is the jacket Sophie is wearing today|¿Qué color tiene la chaqueta que Sophie lleva hoy?]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Clothing|Ropa]]",
      "instructions": "Responde basándote en el texto.",
      "questions": [
        {
          "question": "[[What color is Sophie's jacket today|¿Qué color tiene la chaqueta de Sophie hoy?]]?",
          "options": ["[[It is blue|Es azul]]", "[[It is red|Es roja]]", "[[It is green|Es verde]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: '[[She|ella]] [[is|es/está]] wearing [[a|un/una]] [[red|rojo]] [[jacket|chaqueta]] [[today|hoy]]' (Hoy lleva una chaqueta roja)."
        }
      ]
    },
    "topicName": "Reading"
  }
];
