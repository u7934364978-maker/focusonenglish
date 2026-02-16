import { Exercise } from '@/lib/exercise-generator';

export const UNIT_3_EXERCISES: Exercise[] = [
  // ==========================================
  // MODULE 1: EMOTIONS & STATES (1-10)
  // ==========================================
  {
    "id": "a1-u3-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "easy",
    "transcript": "[[Happy|Feliz]]. [[Sad|Triste]]. [[Tired|Cansado]]. [[Hungry|Hambriento]]. [[Thirsty|Sediento]]. [[Angry|Enojado]]. [[Bored|Aburrido]]. [[Sick|Enfermo]]. [[Fine|Bien]]. [[Great|Genial]].",
    "content": {
      "title": "Vocabulario: Emociones y Estados",
      "instructions": "Aprende cómo expresar cómo te sientes.",
      "items": [
        { "front": "[[Happy|Feliz]]", "back": "Feliz" },
        { "front": "[[Sad|Triste]]", "back": "Triste" },
        { "front": "[[Tired|Cansado]]", "back": "Cansado" },
        { "front": "[[Hungry|Hambriento]]", "back": "Hambriento" },
        { "front": "[[Thirsty|Sediento]]", "back": "Sediento" },
        { "front": "[[Angry|Enojado]]", "back": "Enojado" },
        { "front": "[[Bored|Aburrido]]", "back": "Aburrido" },
        { "front": "[[Sick|Enfermo]]", "back": "Enfermo" },
        { "front": "[[Fine|Bien]]", "back": "Bien" },
        { "front": "[[Great|Genial]]", "back": "Genial" }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u3-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[am|soy]] [[not|no]] [[sad|triste]].",
    "content": {
      "title": "Negación con 'I'",
      "instructions": "Elige la forma negativa correcta para 'I'.",
      "questions": [
        {
          "question": "[[I|Yo]] (_____) [[sad|triste]].",
          "options": ["[[isn't|no es]]", "[[am not|no soy]]", "[[aren't|no somos]]"],
          "correctAnswer": 1,
          "explanation": "Con 'I' usamos 'am not'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e2.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "easy",
    "transcript": "[[She|Ella]] [[isn't|no está]] [[tired|cansada]].",
    "content": {
      "title": "Negación con 'She'",
      "instructions": "Elige la forma negativa contraída para 'She'.",
      "questions": [
        {
          "question": "[[She|Ella]] (_____) [[tired|cansada]].",
          "options": ["[[aren't|no están]]", "[[am not|no soy]]", "[[isn't|no está]]"],
          "correctAnswer": 2,
          "explanation": "Con 'He/She/It' usamos 'isn't' (is not)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e3.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "easy",
    "transcript": "[[They|Ellos]] [[aren't|no están]] [[hungry|hambrientos]].",
    "content": {
      "title": "Negación con 'They'",
      "instructions": "Elige la forma negativa para 'They'.",
      "questions": [
        {
          "question": "[[They|Ellos]] (_____) [[hungry|hambrientos]].",
          "options": ["[[aren't|no están]]", "[[isn't|no está]]", "[[am not|no soy]]"],
          "correctAnswer": 0,
          "explanation": "Con 'You/We/They' usamos 'aren't' (are not)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e4.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e5",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "easy",
    "transcript": "[[He|Él]] [[is|está]] [[not|no]] [[angry|enojado]].",
    "content": {
      "title": "Formando Negaciones",
      "instructions": "Ordena las palabras para decir que él no está enojado.",
      "correctSentence": "[[He|Él]] [[is|está]] [[not|no]] [[angry|enojado]].",
      "words": ["[[angry|enojado]].", "[[not|no]]", "[[is|está]]", "[[He|Él]]"],
      "explanation": "Estructura: Sujeto + am/is/are + not + adjetivo."
    },
    "audioUrl": "audio/a1/unit-3/e5.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Questions",
    "difficulty": "easy",
    "transcript": "[[Are|Estás]] [[you|tú]] [[happy|feliz]]?",
    "content": {
      "title": "Preguntas con 'You'",
      "instructions": "Elige el verbo correcto para iniciar la pregunta.",
      "questions": [
        {
          "question": "(_____) [[you|tú]] [[happy|feliz]]?",
          "options": ["[[Is|Es]]", "[[Am|Soy]]", "[[Are|Estás]]"],
          "correctAnswer": 2,
          "explanation": "En preguntas, 'Are' precede a 'you'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e6.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Questions",
    "difficulty": "easy",
    "transcript": "[[Is|Está]] [[he|él]] [[sick|enfermo]]?",
    "content": {
      "title": "Preguntas con 'He'",
      "instructions": "Elige el verbo correcto para preguntar sobre él.",
      "questions": [
        {
          "question": "(_____) [[he|él]] [[sick|enfermo]]?",
          "options": ["[[Is|Está]]", "[[Are|Están]]", "[[Am|Soy]]"],
          "correctAnswer": 0,
          "explanation": "En preguntas, 'Is' precede a 'he/she/it'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e7.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Questions",
    "difficulty": "easy",
    "transcript": "[[Are|Están]] [[they|ellos]] [[bored|aburridos]]?",
    "content": {
      "title": "Formando Preguntas",
      "instructions": "Ordena las palabras para preguntar si están aburridos.",
      "correctSentence": "[[Are|Están]] [[they|ellos]] [[bored|aburridos]]?",
      "words": ["[[bored|aburridos]]?", "[[they|ellos]]", "[[Are|Están]]"],
      "explanation": "Para preguntar, invertimos el orden: Verbo + Sujeto."
    },
    "audioUrl": "audio/a1/unit-3/e8.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Short Answers",
    "difficulty": "easy",
    "transcript": "[[Yes|Sí]], [[she|ella]] [[is|está]].",
    "content": {
      "title": "Respuestas Cortas Afirmativas",
      "instructions": "Responde: Is she hungry?",
      "questions": [
        {
          "question": "[[Is|Está]] [[she|ella]] [[hungry|hambrienta]]?",
          "options": ["[[Yes, she am.|Sí.]]", "[[Yes, she is.|Sí, lo está.]]", "[[Yes, she are.|Sí.]]"],
          "correctAnswer": 1,
          "explanation": "La respuesta corta usa el mismo verbo que la pregunta: 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e9.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Short Answers",
    "difficulty": "easy",
    "transcript": "[[No|No]], [[I|yo]] [[am|soy]] [[not|no]].",
    "content": {
      "title": "Respuestas Cortas Negativas",
      "instructions": "Responde: Are you thirsty?",
      "questions": [
        {
          "question": "[[Are|Tienes]] [[you|tú]] [[thirsty|sed]]?",
          "options": ["[[No, I'm not.|No, no tengo.]]", "[[No, I isn't.|No.]]", "[[No, I aren't.|No.]]"],
          "correctAnswer": 0,
          "explanation": "Para 'you', respondes con 'I am not' (I'm not)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e10.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e11",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[am|estoy]] [[very|muy]] [[happy|feliz]].",
    "content": {
      "title": "Estoy muy feliz",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[am|estoy]] [[very|muy]] [[happy|feliz]].",
      "words": ["[[happy|feliz]].", "[[very|muy]]", "[[am|estoy]]", "[[I|Yo]]"],
      "explanation": "Very se coloca antes del adjetivo para enfatizar."
    },
    "audioUrl": "audio/a1/unit-3/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u3-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "easy",
    "transcript": "[[He|Él]] [[needs|necesita]] [[water|agua]] [[because|porque]] [[he|él]] [[is|está]] [[thirsty|sediento]].",
    "content": {
      "title": "Sediento",
      "instructions": "Elige el estado lógico.",
      "questions": [
        {
          "question": "[[He|Él]] [[needs|necesita]] [[water|agua]] [[because|porque]] [[he|él]] [[is|está]] (_____) .",
          "options": ["[[hungry|hambriento]]", "[[thirsty|sediento]]", "[[bored|aburrido]]"],
          "correctAnswer": 1,
          "explanation": "Si necesitas agua, estás sediento (thirsty)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e12.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u3-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "easy",
    "transcript": "[[We|Nosotros]] [[aren't|no estamos]] [[tired|cansados]] [[today|hoy]].",
    "content": {
      "title": "No estamos cansados",
      "instructions": "Elige la forma negativa para 'We'.",
      "questions": [
        {
          "question": "[[We|Nosotros]] (_____) [[tired|cansados]] [[today|hoy]].",
          "options": ["[[isn't|no está]]", "[[am not|no soy]]", "[[aren't|no estamos]]"],
          "correctAnswer": 2,
          "explanation": "Con 'We' usamos 'aren't'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e13.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e14",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Questions",
    "difficulty": "easy",
    "transcript": "[[Is|Está]] [[the|el]] [[baby|bebé]] [[sad|triste]]?",
    "content": {
      "title": "¿Está el bebé triste?",
      "instructions": "Ordena la pregunta sobre el bebé.",
      "correctSentence": "[[Is|Está]] [[the|el]] [[baby|bebé]] [[sad|triste]]?",
      "words": ["[[sad|triste]]?", "[[baby|bebé]]", "[[the|el]]", "[[Is|Está]]"],
      "explanation": "The baby = it/he/she, usamos 'Is'."
    },
    "audioUrl": "audio/a1/unit-3/e14.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Short Answers",
    "difficulty": "easy",
    "transcript": "[[No|No]], [[they|ellos]] [[aren't|no lo están]].",
    "content": {
      "title": "Respuesta Negativa: They",
      "instructions": "Responde: Are they bored?",
      "questions": [
        {
          "question": "[[Are|Están]] [[they|ellos]] [[bored|aburridos]]?",
          "options": ["[[No, they isn't.|No.]]", "[[No, they aren't.|No, no lo están.]]", "[[No, they am not.|No.]]"],
          "correctAnswer": 1,
          "explanation": "La respuesta corta para 'they' es 'aren't'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e15.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[am|estoy]] [[sick|enfermo]]. [[I|Yo]] [[need|necesito]] [[a|un]] [[doctor|médico]].",
    "content": {
      "title": "Necesito un médico",
      "instructions": "Elige el estado lógico.",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|estoy]] (_____) . [[I|Yo]] [[need|necesito]] [[a|un]] [[doctor|médico]].",
          "options": ["[[happy|feliz]]", "[[sick|enfermo]]", "[[great|genial]]"],
          "correctAnswer": 1,
          "explanation": "Si necesitas un médico, estás enfermo (sick)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e16.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u3-e17",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "easy",
    "transcript": "[[You|Tú]] [[are|estás]] [[not|no]] [[bored|aburrido]].",
    "content": {
      "title": "No estás aburrido",
      "instructions": "Ordena la frase negativa.",
      "correctSentence": "[[You|Tú]] [[are|estás]] [[not|no]] [[bored|aburrido]].",
      "words": ["[[bored|aburrido]].", "[[not|no]]", "[[are|estás]]", "[[You|Tú]]"],
      "explanation": "You + are + not."
    },
    "audioUrl": "audio/a1/unit-3/e17.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Questions",
    "difficulty": "easy",
    "transcript": "[[Am|Soy]] [[I|yo]] [[late|tarde]]?",
    "content": {
      "title": "¿Llego tarde?",
      "instructions": "Elige el verbo para preguntar sobre uno mismo.",
      "questions": [
        {
          "question": "(_____) [[I|yo]] [[late|tarde]]?",
          "options": ["[[Am|Soy]]", "[[Is|Es]]", "[[Are|Son]]"],
          "correctAnswer": 0,
          "explanation": "Con 'I' usamos 'Am'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e18.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e19",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Short Answers",
    "difficulty": "easy",
    "transcript": "[[Yes|Sí]], [[he|él]] [[is|está]].",
    "content": {
      "title": "Respuesta Afirmativa: He",
      "instructions": "Responde: Is he tired?",
      "questions": [
        {
          "question": "[[Is|Está]] [[he|él]] [[tired|cansado]]?",
          "options": ["[[Yes, he is.|Sí, lo está.]]", "[[Yes, he are.|Sí.]]", "[[Yes, he am.|Sí.]]"],
          "correctAnswer": 0,
          "explanation": "Respuesta corta afirmativa para 'he' es 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e20",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "easy",
    "transcript": "[[It|Eso]] [[is|está]] [[fine|bien]].",
    "content": {
      "title": "Está bien",
      "instructions": "Ordena la oración para decir que algo está bien.",
      "correctSentence": "[[It|Eso]] [[is|está]] [[fine|bien]].",
      "words": ["[[fine|bien]].", "[[is|está]]", "[[It|Eso]]"],
      "explanation": "It + is + fine."
    },
    "audioUrl": "audio/a1/unit-3/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u3-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[needs|necesita]] [[food|comida]] [[because|porque]] [[she|ella]] [[is|está]] [[hungry|hambrienta]].",
    "content": {
      "title": "Hambrienta",
      "instructions": "Elige el estado lógico.",
      "questions": [
        {
          "question": "[[She|Ella]] [[needs|necesita]] [[food|comida]] [[because|porque]] [[she|ella]] [[is|está]] (_____) .",
          "options": ["[[thirsty|sedienta]]", "[[bored|aburrida]]", "[[hungry|hambrienta]]"],
          "correctAnswer": 2,
          "explanation": "Si necesitas comida, estás hambriento (hungry)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u3-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "medium",
    "transcript": "[[The|El]] [[coffee|café]] [[isn't|no está]] [[hot|caliente]].",
    "content": {
      "title": "Café no caliente",
      "instructions": "Ordena la frase negativa.",
      "correctSentence": "[[The|El]] [[coffee|café]] [[isn't|no está]] [[hot|caliente]].",
      "words": ["[[hot|caliente]].", "[[isn't|no está]]", "[[coffee|café]]", "[[The|El]]"],
      "explanation": "The coffee = it, usamos 'isn't'."
    },
    "audioUrl": "audio/a1/unit-3/e22.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Questions",
    "difficulty": "medium",
    "transcript": "[[How|Cómo]] [[are|estás]] [[you|tú]] [[today|hoy]]?",
    "content": {
      "title": "¿Cómo estás hoy?",
      "instructions": "Completa la pregunta típica.",
      "questions": [
        {
          "question": "[[How|Cómo]] (_____) [[you|tú]] [[today|hoy]]?",
          "options": ["[[is|está]]", "[[are|estás]]", "[[am|estoy]]"],
          "correctAnswer": 1,
          "explanation": "Pregunta de bienestar: How are you?"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e23.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Short Answers",
    "difficulty": "medium",
    "transcript": "[[No|No]], [[we|nosotros]] [[aren't|no lo estamos]].",
    "content": {
      "title": "Respuesta Negativa: We",
      "instructions": "Responde: Are you and Peter sick?",
      "questions": [
        {
          "question": "[[Are|Estáis]] [[you|tú]] [[and|y]] [[Peter|Peter]] [[sick|enfermos]]?",
          "options": ["[[No, we isn't.|No.]]", "[[No, we aren't.|No, no lo estamos.]]", "[[No, we am not.|No.]]"],
          "correctAnswer": 1,
          "explanation": "You and Peter = We. La respuesta negativa es 'aren't'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e24.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e25",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "medium",
    "transcript": "[[Why|Por qué]] [[is|está]] [[she|ella]] [[angry|enojada]]?",
    "content": {
      "title": "¿Por qué está enojada?",
      "instructions": "Ordena la pregunta con 'Why'.",
      "correctSentence": "[[Why|Por qué]] [[is|está]] [[she|ella]] [[angry|enojada]]?",
      "words": ["[[angry|enojada]]?", "[[she|ella]]", "[[is|está]]", "[[Why|Por qué]]"],
      "explanation": "Why + is + subject + adjective?"
    },
    "audioUrl": "audio/a1/unit-3/e25.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u3-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[am|estoy]] [[happy|feliz]], [[but|pero]] [[he|él]] [[isn't|no lo está]].",
    "content": {
      "title": "Pero él no",
      "instructions": "Elige la forma correcta.",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|estoy]] [[happy|feliz]], [[but|pero]] [[he|él]] (_____) .",
          "options": ["[[am not|no soy]]", "[[isn't|no lo está]]", "[[aren't|no son]]"],
          "correctAnswer": 1,
          "explanation": "He + isn't."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e26.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Questions",
    "difficulty": "medium",
    "transcript": "[[Are|Están]] [[the|los]] [[children|niños]] [[tired|cansados]]?",
    "content": {
      "title": "Los niños cansados",
      "instructions": "Elige el verbo para el plural 'children'.",
      "questions": [
        {
          "question": "(_____) [[the|los]] [[children|niños]] [[tired|cansados]]?",
          "options": ["[[Is|Está]]", "[[Are|Están]]", "[[Am|Soy]]"],
          "correctAnswer": 1,
          "explanation": "Children es plural (they), usamos 'Are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e27.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e28",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Short Answers",
    "difficulty": "medium",
    "transcript": "[[Yes|Sí]], [[we|nosotros]] [[are|lo estamos]].",
    "content": {
      "title": "Formando Respuesta Corta",
      "instructions": "Ordena la respuesta: Are you and Maria happy?",
      "correctSentence": "[[Yes|Sí]], [[we|nosotros]] [[are|lo estamos]].",
      "words": ["[[are|lo estamos]].", "[[we|nosotros]]", "[[Yes|Sí]],"],
      "explanation": "Sujeto + verbo."
    },
    "audioUrl": "audio/a1/unit-3/e28.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "medium",
    "transcript": "[[This|Esta]] [[movie|película]] [[is|es]] [[long|larga]]. [[I|Yo]] [[am|estoy]] [[bored|aburrido]].",
    "content": {
      "title": "Aburrido",
      "instructions": "Elige el estado lógico.",
      "questions": [
        {
          "question": "[[This|Esta]] [[movie|película]] [[is|es]] [[long|larga]]. [[I|Yo]] [[am|estoy]] (_____) .",
          "options": ["[[great|genial]]", "[[angry|enojado]]", "[[bored|aburrido]]"],
          "correctAnswer": 2,
          "explanation": "Si algo es largo y pesado, puedes estar aburrido (bored)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e29.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u3-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[mother|madre]] [[is|está]] [[not|no]] [[thirsty|sedienta]].",
    "content": {
      "title": "Mi madre no tiene sed",
      "instructions": "Ordena la frase negativa.",
      "correctSentence": "[[My|Mi]] [[mother|madre]] [[is|está]] [[not|no]] [[thirsty|sedienta]].",
      "words": ["[[thirsty|sedienta]].", "[[not|no]]", "[[is|está]]", "[[mother|madre]]", "[[My|Mi]]"],
      "explanation": "Mother = she, usamos 'is not'."
    },
    "audioUrl": "audio/a1/unit-3/e30.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Questions",
    "difficulty": "medium",
    "transcript": "[[Where|Dónde]] [[is|está]] [[your|tu]] [[father|padre]]?",
    "content": {
      "title": "¿Dónde está tu padre?",
      "instructions": "Completa la pregunta con 'Where'.",
      "questions": [
        {
          "question": "[[Where|Dónde]] (_____) [[your|tu]] [[father|padre]]?",
          "options": ["[[are|están]]", "[[is|está]]", "[[am|estoy]]"],
          "correctAnswer": 1,
          "explanation": "Father = he, usamos 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e31.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Short Answers",
    "difficulty": "medium",
    "transcript": "[[No|No]], [[it|eso]] [[isn't|no lo es]].",
    "content": {
      "title": "Respuesta Negativa: It",
      "instructions": "Ordena la respuesta: Is the water cold?",
      "correctSentence": "[[No|No]], [[it|eso]] [[isn't|no lo es]].",
      "words": ["[[isn't|no lo es]].", "[[it|eso]]", "[[No|No]],"],
      "explanation": "It + isn't."
    },
    "audioUrl": "audio/a1/unit-3/e32.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[am|estoy]] [[tired|cansado]] [[after|después de]] [[work|el trabajo]].",
    "content": {
      "title": "Cansado del trabajo",
      "instructions": "Elige la palabra para 'cansado'.",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|estoy]] (_____) [[after|después de]] [[work|el trabajo]].",
          "options": ["[[tired|cansado]]", "[[happy|feliz]]", "[[sick|enfermo]]"],
          "correctAnswer": 0,
          "explanation": "Tired significa cansado."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e33.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u3-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "medium",
    "transcript": "[[We|Nosotros]] [[are|estamos]] [[not|no]] [[hungry|hambrientos]].",
    "content": {
      "title": "No tenemos hambre",
      "instructions": "Ordena la frase negativa completa.",
      "correctSentence": "[[We|Nosotros]] [[are|estamos]] [[not|no]] [[hungry|hambrientos]].",
      "words": ["[[hungry|hambrientos]].", "[[not|no]]", "[[are|estamos]]", "[[We|Nosotros]]"],
      "explanation": "We + are + not."
    },
    "audioUrl": "audio/a1/unit-3/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Questions",
    "difficulty": "medium",
    "transcript": "[[Are|Son]] [[they|ellos]] [[your|tus]] [[friends|amigos]]?",
    "content": {
      "title": "¿Son tus amigos?",
      "instructions": "Elige el verbo para preguntar por 'friends'.",
      "questions": [
        {
          "question": "(_____) [[they|ellos]] [[your|tus]] [[friends|amigos]]?",
          "options": ["[[Are|Son]]", "[[Is|Es]]", "[[Am|Soy]]"],
          "correctAnswer": 0,
          "explanation": "They = plural, usamos 'Are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e35.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e36",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Short Answers",
    "difficulty": "medium",
    "transcript": "[[Yes|Sí]], [[I|yo]] [[am|lo soy]].",
    "content": {
      "title": "Respuesta Corta: I",
      "instructions": "Ordena la respuesta: Are you a student?",
      "correctSentence": "[[Yes|Sí]], [[I|yo]] [[am|lo soy]].",
      "words": ["[[am|lo soy]].", "[[I|yo]]", "[[Yes|Sí]],"],
      "explanation": "Nunca usamos contracción en respuestas cortas afirmativas (no 'Yes, I'm')."
    },
    "audioUrl": "audio/a1/unit-3/e36.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[is|está]] [[angry|enojada]] [[with|con]] [[me|migo]].",
    "content": {
      "title": "Enojada",
      "instructions": "Elige la palabra para 'enojada'.",
      "questions": [
        {
          "question": "[[She|Ella]] [[is|está]] (_____) [[with|con]] [[me|migo]].",
          "options": ["[[sad|triste]]", "[[angry|enojada]]", "[[bored|aburrida]]"],
          "correctAnswer": 1,
          "explanation": "Angry significa enojado o enfadado."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e37.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u3-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Negative",
    "difficulty": "medium",
    "transcript": "[[They|Ellos]] [[are|están]] [[not|no]] [[fine|bien]].",
    "content": {
      "title": "No están bien",
      "instructions": "Ordena la frase negativa.",
      "correctSentence": "[[They|Ellos]] [[are|están]] [[not|no]] [[fine|bien]].",
      "words": ["[[fine|bien]].", "[[not|no]]", "[[are|estamos]]", "[[They|Ellos]]"],
      "explanation": "They + are + not."
    },
    "audioUrl": "audio/a1/unit-3/e38.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Questions",
    "difficulty": "medium",
    "transcript": "[[Is|Está]] [[your|tu]] [[sister|hermana]] [[happy|feliz]]?",
    "content": {
      "title": "¿Está tu hermana feliz?",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "(_____) [[your|tu]] [[sister|hermana]] [[happy|feliz]]?",
          "options": ["[[Is|Está]]", "[[Are|Están]]", "[[Am|Soy]]"],
          "correctAnswer": 0,
          "explanation": "Sister = she, usamos 'Is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u3-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Emotions & States",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[am|estoy]] [[sick|enfermo]] [[today|hoy]].",
    "content": {
      "title": "Hoy estoy enfermo",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[I|Yo]] [[am|estoy]] [[sick|enfermo]] [[today|hoy]].",
      "words": ["[[today|hoy]].", "[[sick|enfermo]]", "[[am|estoy]]", "[[I|Yo]]"],
      "explanation": "Sujeto + verbo + adjetivo + tiempo."
    },
    "audioUrl": "audio/a1/unit-3/e40.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // MODULE 1: READING COMPREHENSION (41-60)
  // 5 Passages x (1 Text + 3 Questions) = 20 slides
  // ==========================================

  // PASSAGE 1: HOW IS EVERYONE?
  {
    "id": "a1-u3-e41",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Phase",
    "difficulty": "medium",
    "transcript": "[[Hello|Hola]] [[Peter|Peter]]. [[How|Cómo]] [[are|estás]] [[you|tú]]? [[I|Yo]] [[am|estoy]] [[fine|bien]], [[thanks|gracias]]. [[But|Pero]] [[my|mi]] [[sister|hermana]], [[Anna|Anna]], [[is|está]] [[sick|enferma]]. [[She|Ella]] [[is|está]] [[at|en]] [[home|casa]]. [[My|Mis]] [[parents|padres]] [[aren't|no están]] [[happy|felices]] [[because|porque]] [[they|ellos]] [[are|están]] [[tired|cansados]]. [[It|Esto]] [[is|es]] [[a|un]] [[long|largo]] [[day|día]].",
    "content": {
      "title": "Lectura: ¿Cómo está todo el mundo?",
      "instructions": "Lee sobre Peter y su familia.",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-3/e41.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Está]] [[Anna|Anna]] [[at|en]] [[the|el]] [[office|trabajo]]?",
          "options": ["[[Yes, she is.|Sí.]]", "[[No, she isn't.|No, no lo está.]]", "[[Yes, she are.|Sí.]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice que está en casa (at home) porque está enferma."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e42.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Are|Están]] [[the|los]] [[parents|padres]] [[happy|felices]]?",
          "options": ["[[No, they aren't.|No, no lo están.]]", "[[Yes, they are.|Sí.]]", "[[No, they isn't.|No.]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice 'parents aren't happy'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e43.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Why|Por qué]] [[are|están]] [[they|ellos]] [[tired|cansados]]?",
          "options": ["[[Because it is a long day.|Porque es un día largo.]]", "[[Because they are bored.|Porque están aburridos.]]", "[[Because they are sick.|Porque están enfermos.]]"],
          "correctAnswer": 0,
          "explanation": "El texto menciona 'tired because it is a long day'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e44.mp3",
    "topicName": "Reading"
  },

  // PASSAGE 2: LUNCH TIME
  {
    "id": "a1-u3-e45",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Phase",
    "difficulty": "medium",
    "transcript": "[[It|Es]] [[is|es]] [[one|una]] [[o'clock|en punto]]. [[I|Yo]] [[am|estoy]] [[very|muy]] [[hungry|hambriento]]. [[But|Pero]] [[I|yo]] [[am|estoy]] [[not|no]] [[thirsty|sediento]]. [[My|Mi]] [[friend|amigo]] [[Tom|Tom]] [[is|está]] [[bored|aburrido]] [[because|porque]] [[the|la]] [[food|comida]] [[isn't|no está]] [[ready|lista]]. [[Are|Estás]] [[you|tú]] [[hungry|hambriento]] [[too|también]]?",
    "content": {
      "title": "Lectura: Hora de comer",
      "instructions": "Lee sobre el hambre y Tom.",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-3/e45.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Está]] [[Tom|Tom]] [[happy|feliz]]?",
          "options": ["[[Yes, he is.|Sí.]]", "[[No, he isn't.|No, no lo está.]]", "[[No, he aren't.|No.]]"],
          "correctAnswer": 1,
          "explanation": "Tom está aburrido (bored), no feliz."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e46.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Why|Por qué]] [[is|está]] [[Tom|Tom]] [[bored|aburrido]]?",
          "options": ["[[Because the food is ready.|Porque la comida está lista.]]", "[[Because the food isn't ready.|Porque la comida no está lista.]]", "[[Because he is sick.|Porque está enfermo.]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: 'Tom is bored because the food isn't ready'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e47.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Está]] [[the|la]] [[person|persona]] [[thirsty|sedienta]]?",
          "options": ["[[No, I'm not.|No, no lo estoy.]]", "[[Yes, I am.|Sí.]]", "[[No, I isn't.|No.]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'I am not thirsty'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e48.mp3",
    "topicName": "Reading"
  },

  // PASSAGE 3: AT THE DOCTOR
  {
    "id": "a1-u3-e49",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Phase",
    "difficulty": "medium",
    "transcript": "[[The|El]] [[doctor|médico]] [[is|está]] [[here|aquí]]. [[He|Él]] [[is|está]] [[angry|enojado]] [[today|hoy]]. [[My|Mi]] [[mother|madre]] [[is|está]] [[sick|enferma]]. [[She|Ella]] [[isn't|no está]] [[fine|bien]]. [[Are|Están]] [[you|ustedes]] [[ok|bien]]? [[Yes|Sí]], [[we|nosotros]] [[are|estamos]] [[fine|bien]]. [[We|Nosotros]] [[aren't|no estamos]] [[sick|enfermos]].",
    "content": {
      "title": "Lectura: En el médico",
      "instructions": "Lee sobre la madre y el médico.",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-3/e49.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Está]] [[the|el]] [[doctor|médico]] [[happy|feliz]]?",
          "options": ["[[Yes, he is.|Sí.]]", "[[No, he isn't.|No, no lo está.]]", "[[No, he aren't.|No.]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'He is angry today'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e50.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Está]] [[the|la]] [[mother|madre]] [[fine|bien]]?",
          "options": ["[[No, she isn't.|No, no lo está.]]", "[[Yes, she is.|Sí.]]", "[[No, she aren't.|No.]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice 'She isn't fine'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e51.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Are|Están]] [[they|ellos]] [[sick|enfermos]]?",
          "options": ["[[Yes, they are.|Sí.]]", "[[No, they aren't.|No, no lo están.]]", "[[No, they isn't.|No.]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'We aren't sick'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e52.mp3",
    "topicName": "Reading"
  },

  // PASSAGE 4: BORED AT HOME
  {
    "id": "a1-u3-e53",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Phase",
    "difficulty": "medium",
    "transcript": "[[It|Es]] [[is|es]] [[raining|lloviendo]]. [[I|Yo]] [[am|estoy]] [[bored|aburrido]] [[at|en]] [[home|casa]]. [[My|Mi]] [[brother|hermano]] [[isn't|no está]] [[bored|aburrido]]. [[He|Él]] [[is|está]] [[happy|feliz]] [[with|con]] [[his|su]] [[book|libro]]. [[Are|Estás]] [[you|tú]] [[bored|aburrido]] [[at|en]] [[home|casa]] [[too|también]]? [[No|No]], [[I|yo]] [[am|estoy]] [[fine|bien]].",
    "content": {
      "title": "Lectura: Aburrido en casa",
      "instructions": "Lee sobre el día de lluvia.",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-3/e53.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Está]] [[the|el]] [[brother|hermano]] [[bored|aburrido]]?",
          "options": ["[[Yes, he is.|Sí.]]", "[[No, he isn't.|No, no lo está.]]", "[[No, he aren't.|No.]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'My brother isn't bored'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e54.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Why|Por qué]] [[is|está]] [[the|el]] [[brother|hermano]] [[happy|feliz]]?",
          "options": ["[[Because of his book.|Por su libro.]]", "[[Because of the rain.|Por la lluvia.]]", "[[Because he is tired.|Porque está cansado.]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice 'He is happy with his book'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e55.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Está]] [[the|la]] [[other|otra]] [[person|persona]] [[bored|aburrida]]?",
          "options": ["[[No, she isn't.|No, no lo está.]]", "[[Yes, she is.|Sí.]]", "[[No, she aren't.|No.]]"],
          "correctAnswer": 0,
          "explanation": "La otra persona responde: 'No, I am fine'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e56.mp3",
    "topicName": "Reading"
  },

  // PASSAGE 5: THE TEAM
  {
    "id": "a1-u3-e57",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Phase",
    "difficulty": "medium",
    "transcript": "[[We|Nosotros]] [[are|estamos]] [[in|en]] [[the|el]] [[team|equipo]]. [[We|Nosotros]] [[are|estamos]] [[great|genial]]. [[But|Pero]] [[the|el]] [[other|otro]] [[team|equipo]] [[isn't|no lo está]]. [[They|Ellos]] [[are|están]] [[angry|enojados]]. [[Are|Está]] [[their|su]] [[coach|entrenador]] [[sick|enfermo]]? [[No|No]], [[he|él]] [[isn't|no lo está]]. [[He|Él]] [[is|está]] [[just|solo]] [[tired|cansado]].",
    "content": {
      "title": "Lectura: El Equipo",
      "instructions": "Lee sobre los equipos y el entrenador.",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-3/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Está]] [[the|el]] [[other|otro]] [[team|equipo]] [[great|genial]]?",
          "options": ["[[No, it isn't.|No, no lo está.]]", "[[Yes, it is.|Sí.]]", "[[No, it aren't.|No.]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice 'the other team isn't (great)'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e58.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[How|Cómo]] [[is|está]] [[the|el]] [[other|otro]] [[team|equipo]]?",
          "options": ["[[They are happy.|Están felices.]]", "[[They are bored.|Están aburridos.]]", "[[They are angry.|Están enojados.]]"],
          "correctAnswer": 2,
          "explanation": "El texto dice 'They are angry'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e59.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u3-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Está]] [[the|el]] [[coach|entrenador]] [[sick|enfermo]]?",
          "options": ["[[Yes, he is.|Sí.]]", "[[No, he isn't.|No, no lo está.]]", "[[Yes, he are.|Sí.]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'No, he isn't. He is just tired'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-3/e60.mp3",
    "topicName": "Reading"
  }
];
