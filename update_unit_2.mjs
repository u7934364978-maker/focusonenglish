import fs from 'fs';

const exercises = [
  // Numbers 1-10 (1-10)
  {
    "id": "a1-u2-e1",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "content": {
      "title": "[[Number|Número]] 1",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[word|palabra]] [[for|para]] 1.",
      "questions": [
        {
          "question": "1",
          "options": [
            "[[One|Uno]]",
            "[[Two|Dos]]",
            "[[Three|Tres]]"
          ],
          "correctAnswer": 0,
          "explanation": "1 [[is|es]] [[one|uno]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "content": {
      "title": "[[Number|Número]] 2",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[word|palabra]] [[for|para]] 2.",
      "questions": [
        {
          "question": "2",
          "options": [
            "[[One|Uno]]",
            "[[Two|Dos]]",
            "[[Four|Cuatro]]"
          ],
          "correctAnswer": 1,
          "explanation": "2 [[is|es]] [[two|dos]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "content": {
      "title": "[[Number|Número]] 5",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[word|palabra]] [[for|para]] 5.",
      "questions": [
        {
          "question": "5",
          "options": [
            "[[Four|Cuatro]]",
            "[[Five|Cinco]]",
            "[[Six|Seis]]"
          ],
          "correctAnswer": 1,
          "explanation": "5 [[is|es]] [[five|cinco]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e4",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "content": {
      "title": "[[Number|Número]] 3",
      "instructions": "[[Write|Escribe]] [[the|el]] [[number|número]] 3 [[in|en]] [[letters|letras]].",
      "questions": [
        {
          "question": "3 = _______",
          "options": ["three", "tree"],
          "correctAnswer": "three",
          "explanation": "[[Three|Tres]] [[is|es]] 3."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e5",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "content": {
      "title": "[[Number|Número]] 4",
      "instructions": "[[Write|Escribe]] [[the|el]] [[number|número]] 4 [[in|en]] [[letters|letras]].",
      "questions": [
        {
          "question": "4 = _______",
          "options": ["four", "for"],
          "correctAnswer": "four",
          "explanation": "[[Four|Cuatro]] [[is|es]] 4."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "content": {
      "title": "[[Number|Número]] 7",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[word|palabra]] [[for|para]] 7.",
      "questions": [
        {
          "question": "7",
          "options": [
            "[[Six|Seis]]",
            "[[Seven|Siete]]",
            "[[Eight|Ocho]]"
          ],
          "correctAnswer": 1,
          "explanation": "7 [[is|es]] [[seven|siete]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "content": {
      "title": "[[Number|Número]] 8",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[word|palabra]] [[for|para]] 8.",
      "questions": [
        {
          "question": "8",
          "options": [
            "[[Eight|Ocho]]",
            "[[Nine|Nueve]]",
            "[[Ten|Diez]]"
          ],
          "correctAnswer": 0,
          "explanation": "8 [[is|es]] [[eight|ocho]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e8",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "content": {
      "title": "[[Number|Número]] 10",
      "instructions": "[[Write|Escribe]] [[the|el]] [[number|número]] 10 [[in|en]] [[letters|letras]].",
      "questions": [
        {
          "question": "10 = _______",
          "options": ["ten", "tin"],
          "correctAnswer": "ten",
          "explanation": "[[Ten|Diez]] [[is|es]] 10."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e9",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "medium",
    "content": {
      "title": "[[Counting|Contando]] 1-2-3",
      "instructions": "[[Put|Pon]] [[in|en]] [[order|orden]].",
      "correctSentence": "[[One|Uno]] [[two|dos]] [[three|tres]].",
      "words": [
        "[[two|dos]]",
        "[[One|Uno]]",
        "[[three|tres]]"
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "content": {
      "title": "[[Next|Siguiente]] [[Number|Número]]",
      "instructions": "[[What|Qué]] [[is|es]] [[after|después de]] [[six|seis]]?",
      "questions": [
        {
          "question": "6, ?",
          "options": [
            "[[Seven|Siete]]",
            "[[Five|Cinco]]",
            "[[Eight|Ocho]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Seven|Siete]] [[comes|viene]] [[after|después de]] [[six|seis]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  // Countries & Nationalities (11-20)
  {
    "id": "a1-u2-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "easy",
    "content": {
      "title": "[[Country|País]]: [[Spain|España]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[country|país]].",
      "questions": [
        {
          "question": "[[Madrid|Madrid]] [[is|es]] [[in|en]]...",
          "options": [
            "[[Spain|España]]",
            "[[Mexico|México]]",
            "[[France|Francia]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Madrid|Madrid]] [[is|es]] [[the|la]] [[capital|capital]] [[of|de]] [[Spain|España]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "easy",
    "content": {
      "title": "[[Nationality|Nacionalidad]]: [[Spanish|Español]]",
      "instructions": "[[If|Si]] [[you|tú]] [[are|eres]] [[from|de]] [[Spain|España]], [[you|tú]] [[are|eres]]...",
      "questions": [
        {
          "question": "[[Spain|España]] -> ?",
          "options": [
            "[[Spanish|Español]]",
            "[[Spaniard|Español (sustantivo)]]",
            "[[Spainish|Erróneo]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Spanish|Español]] [[is|es]] [[the|el]] [[adjective|adjetivo]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "easy",
    "content": {
      "title": "[[Country|País]]: [[Mexico|México]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[country|país]].",
      "questions": [
        {
          "question": "[[Cancun|Cancún]] [[is|es]] [[in|en]]...",
          "options": [
            "[[Spain|España]]",
            "[[Mexico|México]]",
            "[[USA|EE.UU.]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[Cancun|Cancún]] [[is|es]] [[in|en]] [[Mexico|México]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "easy",
    "content": {
      "title": "[[Nationality|Nacionalidad]]: [[Mexican|Mexicano]]",
      "instructions": "[[If|Si]] [[you|tú]] [[are|eres]] [[from|de]] [[Mexico|México]], [[you|tú]] [[are|eres]]...",
      "questions": [
        {
          "question": "[[Mexico|México]] -> ?",
          "options": [
            "[[Mexican|Mexicano]]",
            "[[Mexicish|Erróneo]]",
            "[[Mexic|Erróneo]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Mexican|Mexicano]] [[is|es]] [[the|la]] [[nationality|nacionalidad]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e15",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "easy",
    "content": {
      "title": "[[Country|País]]: [[USA|EE.UU.]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[country|país]].",
      "questions": [
        {
          "question": "[[New|Nueva]] [[York|York]] [[is|es]] [[in|en]] [[the|los]] ____.",
          "options": ["USA", "USB"],
          "correctAnswer": "USA",
          "explanation": "[[USA|EE.UU.]] [[stands|significa]] [[for|por]] [[United|Estados]] [[States|Unidos]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "easy",
    "content": {
      "title": "[[Nationality|Nacionalidad]]: [[American|Americano]]",
      "instructions": "[[If|Si]] [[you|tú]] [[are|eres]] [[from|de]] [[the|los]] [[USA|EE.UU.]], [[you|tú]] [[are|eres]]...",
      "questions": [
        {
          "question": "[[USA|EE.UU.]] -> ?",
          "options": [
            "[[US|Erróneo]]",
            "[[American|Americano]]",
            "[[English|Inglés]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[People|Gente]] [[from|de]] [[the|los]] [[USA|EE.UU.]] [[are|son]] [[American|americanos]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "easy",
    "content": {
      "title": "[[Country|País]]: [[England|Inglaterra]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[country|país]].",
      "questions": [
        {
          "question": "[[London|Londres]] [[is|es]] [[in|en]]...",
          "options": [
            "[[England|Inglaterra]]",
            "[[France|Francia]]",
            "[[Germany|Alemania]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[London|Londres]] [[is|es]] [[in|en]] [[England|Inglaterra]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "easy",
    "content": {
      "title": "[[Nationality|Nacionalidad]]: [[English|Inglés]]",
      "instructions": "[[If|Si]] [[you|tú]] [[are|eres]] [[from|de]] [[England|Inglaterra]], [[you|tú]] [[are|eres]]...",
      "questions": [
        {
          "question": "[[England|Inglaterra]] -> ?",
          "options": [
            "[[Englander|Erróneo]]",
            "[[English|Inglés]]",
            "[[British|Británico]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[English|Inglés]] [[is|es]] [[specific|específico]] [[to|para]] [[England|Inglaterra]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e19",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "easy",
    "content": {
      "title": "[[Country|País]]: [[France|Francia]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[country|país]].",
      "questions": [
        {
          "question": "[[Paris|París]] [[is|es]] [[in|en]] ______.",
          "options": ["France", "French"],
          "correctAnswer": "France",
          "explanation": "[[Paris|París]] [[is|es]] [[the|la]] [[capital|capital]] [[of|de]] [[France|Francia]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "easy",
    "content": {
      "title": "[[Nationality|Nacionalidad]]: [[French|Francés]]",
      "instructions": "[[If|Si]] [[you|tú]] [[are|eres]] [[from|de]] [[France|Francia]], [[you|tú]] [[are|eres]]...",
      "questions": [
        {
          "question": "[[France|Francia]] -> ?",
          "options": [
            "[[French|Francés]]",
            "[[Franceish|Erróneo]]",
            "[[Francais|Francés (en francés)]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[French|Francés]] [[is|es]] [[the|la]] [[word|palabra]] [[in|en]] [[English|inglés]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  // Grammar - Subject Pronouns (He, She, It, We, They) (21-30)
  {
    "id": "a1-u2-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "easy",
    "content": {
      "title": "[[Pronoun|Pronombre]]: [[He|Él]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]] [[for|para]] [[a|un]] [[man|hombre]].",
      "questions": [
        {
          "question": "[[Tom|Tom]] -> ?",
          "options": [
            "[[He|Él]]",
            "[[She|Ella]]",
            "[[It|Ello]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[He|Él]]' [[is|es]] [[for|para]] [[males|hombres]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "easy",
    "content": {
      "title": "[[Pronoun|Pronombre]]: [[She|Ella]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]] [[for|para]] [[a|una]] [[woman|mujer]].",
      "questions": [
        {
          "question": "[[Maria|María]] -> ?",
          "options": [
            "[[He|Él]]",
            "[[She|Ella]]",
            "[[It|Ello]]"
          ],
          "correctAnswer": 1,
          "explanation": "'[[She|Ella]]' [[is|es]] [[for|para]] [[females|mujeres]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "easy",
    "content": {
      "title": "[[Pronoun|Pronombre]]: [[It|Ello]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]] [[for|para]] [[a|una]] [[thing|cosa]].",
      "questions": [
        {
          "question": "[[The|La]] [[car|coche]] -> ?",
          "options": [
            "[[He|Él]]",
            "[[She|Ella]]",
            "[[It|Ello]]"
          ],
          "correctAnswer": 2,
          "explanation": "'[[It|Ello]]' [[is|es]] [[for|para]] [[objects|objetos]] [[and|y]] [[animals|animales]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "easy",
    "content": {
      "title": "[[Pronoun|Pronombre]]: [[We|Nosotros]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]] [[for|para]] '[[You|tú]] [[and|y]] [[I|yo]]'.",
      "questions": [
        {
          "question": "[[You|Tú]] [[and|y]] [[I|yo]] -> ?",
          "options": [
            "[[We|Nosotros]]",
            "[[They|Ellos]]",
            "[[You|Ustedes]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[We|Nosotros]]' [[includes|incluye]] '[[I|yo]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "easy",
    "content": {
      "title": "[[Pronoun|Pronombre]]: [[They|Ellos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]] [[for|para]] '[[Tom|Tom]] [[and|y]] [[Maria|María]]'.",
      "questions": [
        {
          "question": "[[Tom|Tom]] [[and|y]] [[Maria|María]] -> ?",
          "options": [
            "[[We|Nosotros]]",
            "[[They|Ellos]]",
            "[[You|Ustedes]]"
          ],
          "correctAnswer": 1,
          "explanation": "'[[They|Ellos]]' [[is|es]] [[for|para]] [[others|otros]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e26",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "medium",
    "content": {
      "title": "[[Pronoun|Pronombre]]: [[He|Él]] [[Fill|Rellenar]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|frase]].",
      "questions": [
        {
          "question": "[[John|Juan]] [[is|es]] [[happy|feliz]]. ____ [[is|es]] [[tall|alto]].",
          "options": ["He", "She"],
          "correctAnswer": "He",
          "explanation": "[[Refers|Se refiere]] [[to|a]] [[John|Juan]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e27",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "medium",
    "content": {
      "title": "[[Pronoun|Pronombre]]: [[She|Ella]] [[Fill|Rellenar]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|frase]].",
      "questions": [
        {
          "question": "[[Sara|Sara]] [[is|es]] [[from|de]] [[Spain|España]]. ____ [[is|es]] [[Spanish|española]].",
          "options": ["She", "He"],
          "correctAnswer": "She",
          "explanation": "[[Refers|Se refiere]] [[to|a]] [[Sara|Sara]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e28",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "medium",
    "content": {
      "title": "[[Pronoun|Pronombre]]: [[It|Ello]] [[Fill|Rellenar]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|frase]].",
      "questions": [
        {
          "question": "[[The|El]] [[dog|perro]] [[is|es]] [[fast|rápido]]. ____ [[is|es]] [[big|grande]].",
          "options": ["It", "They"],
          "correctAnswer": "It",
          "explanation": "[[Refers|Se refiere]] [[to|a]] [[the|el]] [[dog|perro]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e29",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "medium",
    "content": {
      "title": "[[Pronoun|Pronombre]]: [[We|Nosotros]] [[Fill|Rellenar]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|frase]].",
      "questions": [
        {
          "question": "[[Leo|Leo]] [[and|y]] [[I|yo]] [[are|somos]] [[friends|amigos]]. ____ [[are|somos]] [[happy|felices]].",
          "options": ["We", "They"],
          "correctAnswer": "We",
          "explanation": "[[Refers|Se refiere]] [[to|a]] [[Leo|Leo]] [[and|y]] [[me|mí]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e30",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "medium",
    "content": {
      "title": "[[Pronoun|Pronombre]]: [[They|Ellos]] [[Fill|Rellenar]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|frase]].",
      "questions": [
        {
          "question": "[[Anna|Ana]] [[and|y]] [[Kim|Kim]] [[are|están]] [[here|aquí]]. ____ [[are|son]] [[students|estudiantes]].",
          "options": ["They", "We"],
          "correctAnswer": "They",
          "explanation": "[[Refers|Se refiere]] [[to|a]] [[Anna|Ana]] [[and|y]] [[Kim|Kim]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  // Grammar - Verb 'to be' (He, She, It, We, They) (31-45)
  {
    "id": "a1-u2-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "content": {
      "title": "[[Verb|Verbo]] [[To|A]] [[Be|Ser]]: [[Is|Es]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[verb|verbo]] [[for|para]] '[[He|él]]'.",
      "questions": [
        {
          "question": "[[He|Él]] (____) [[from|de]] [[France|Francia]].",
          "options": [
            "[[am|soy]]",
            "[[is|es]]",
            "[[are|son]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[He|Él]] / [[She|Ella]] / [[It|Ello]] [[takes|lleva]] '[[is|es/está]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e32",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "content": {
      "title": "[[Verb|Verbo]] [[To|A]] [[Be|Ser]]: [[Are|Somos/Son]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[verb|verbo]] [[for|para]] '[[We|nosotros]]'.",
      "questions": [
        {
          "question": "[[We|Nosotros]] (____) [[students|estudiantes]].",
          "options": [
            "[[am|soy]]",
            "[[is|es]]",
            "[[are|somos]]"
          ],
          "correctAnswer": 2,
          "explanation": "[[We|Nosotros]] / [[You|Ustedes]] / [[They|Ellos]] [[takes|lleva]] '[[are|somos/son/estamos/están]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e33",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Verb|Verbo]] [[To|A]] [[Be|Ser]]: [[Fill|Rellenar]]",
      "instructions": "[[Complete|Completa]] [[with|con]] '[[is|es]]' [[or|o]] '[[are|son]]'.",
      "questions": [
        {
          "question": "[[She|Ella]] ____ [[Mexican|mexicana]].",
          "options": ["is", "are"],
          "correctAnswer": "is",
          "explanation": "[[She|Ella]] [[takes|lleva]] '[[is|es]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e34",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Verb|Verbo]] [[To|A]] [[Be|Ser]]: [[Fill|Rellenar]] (2)",
      "instructions": "[[Complete|Completa]] [[with|con]] '[[is|es]]' [[or|o]] '[[are|son]]'.",
      "questions": [
        {
          "question": "[[They|Ellos]] ____ [[English|ingleses]].",
          "options": ["are", "is"],
          "correctAnswer": "are",
          "explanation": "[[They|Ellos]] [[takes|lleva]] '[[are|son]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Contractions|Contracciones]]: [[He's|Él es]]",
      "instructions": "[[What|Qué]] [[is|es]] '[[He's|Él es]]'?",
      "questions": [
        {
          "question": "[[He's|Él es]] = ?",
          "options": [
            "[[He|Él]] [[is|es]]",
            "[[He|Él]] [[has|tiene]]",
            "[[He|Él]] [[was|era]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[He's|Él es]]' [[is|es]] [[the|la]] [[contraction|contracción]] [[of|de]] '[[He|Él]] [[is|es]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Contractions|Contracciones]]: [[They're|Ellos son]]",
      "instructions": "[[What|Qué]] [[is|es]] '[[They're|Ellos son]]'?",
      "questions": [
        {
          "question": "[[They're|Ellos son]] = ?",
          "options": [
            "[[They|Ellos]] [[are|son]]",
            "[[They|Ellos]] [[is|es]]",
            "[[They|Ellos]] [[were|eran]]"
          ],
          "correctAnswer": 0,
          "explanation": "'[[They're|Ellos son]]' [[is|es]] [[the|la]] [[contraction|contracción]] [[of|de]] '[[They|Ellos]] [[are|son]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e37",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Build|Construir]] [[Sentence|Frase]]",
      "instructions": "[[Build|Construye]]: '[[She|Ella]] [[is|es]] [[from|de]] [[Spain|España]]'.",
      "correctSentence": "[[She|Ella]] [[is|es]] [[from|de]] [[Spain|España]].",
      "words": [
        "[[is|es]]",
        "[[from|de]]",
        "[[Spain|España]]",
        "[[She|Ella]]",
        "."
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Build|Construir]] [[Sentence|Frase]] (2)",
      "instructions": "[[Build|Construye]]: '[[They|Ellos]] [[are|son]] [[friends|amigos]]'.",
      "correctSentence": "[[They|Ellos]] [[are|son]] [[friends|amigos]].",
      "words": [
        "[[are|son]]",
        "[[friends|amigos]]",
        "[[They|Ellos]]",
        "."
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Identify|Identificar]] [[the|el]] [[Error|Error]]",
      "instructions": "[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[wrong|incorrecta]]?",
      "questions": [
        {
          "question": "[[Choose|Elige]] [[the|la]] [[incorrect|incorrecta]]:",
          "options": [
            "[[We|Nosotros]] [[are|somos]] [[happy|felices]].",
            "[[It|Ello]] [[are|son]] [[a|un]] [[cat|gato]].",
            "[[She|Ella]] [[is|es]] [[here|aquí]]."
          ],
          "correctAnswer": 1,
          "explanation": "[[It|Ello]] [[takes|lleva]] '[[is|es]]', [[not|no]] '[[are|son]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e40",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Verb|Verbo]] [[To|A]] [[Be|Ser]]: [[Mixed|Mezclado]]",
      "instructions": "[[Fill|Rellena]] [[with|con]] '[[is|es]]' [[or|o]] '[[are|son]]'.",
      "questions": [
        {
          "question": "[[You|Tú]] [[and|y]] [[I|yo]] ____ [[happy|felices]].",
          "options": ["are", "is"],
          "correctAnswer": "are",
          "explanation": "'[[You|Tú]] [[and|y]] [[I|yo]]' [[is|es]] '[[We|Nosotros]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Question|Pregunta]] [[Form|Forma]]",
      "instructions": "[[How|Cómo]] [[do|aux]] [[you|tú]] [[ask|preguntas]] '[[¿Es|Is]] [[ella|she]] [[española?|Spanish?]]'?",
      "questions": [
        {
          "question": "[[Spanish|Española]]?",
          "options": [
            "[[Is|¿Es]] [[she|ella]] [[Spanish|española]]?",
            "[[She|Ella]] [[is|es]] [[Spanish|española]]?",
            "[[Are|¿Es]] [[she|ella]] [[Spanish|española]]?"
          ],
          "correctAnswer": 0,
          "explanation": "[[Verb|Verbo]] '[[is|es]]' [[comes|viene]] [[first|primero]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Question|Pregunta]] [[Form|Forma]] (2)",
      "instructions": "[[How|Cómo]] [[do|aux]] [[you|tú]] [[ask|preguntas]] '[[¿Son|Are]] [[ellos|they]] [[aquí?|here?]]'?",
      "questions": [
        {
          "question": "[[Here|Aquí]]?",
          "options": [
            "[[They|Ellos]] [[are|están]] [[here|aquí]]?",
            "[[Are|¿Están]] [[they|ellos]] [[here|aquí]]?",
            "[[Is|¿Están]] [[they|ellos]] [[here|aquí]]?"
          ],
          "correctAnswer": 1,
          "explanation": "[[Verb|Verbo]] '[[are|están]]' [[comes|viene]] [[first|primero]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e43",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Short|Corta]] [[Answer|Respuesta]] [[Yes|Sí]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[short|corta]] [[answer|respuesta]].",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[he|él]] [[from|de]] [[Spain|España]]? [[Yes|Sí]], [[he|él]] ____.",
          "options": ["is", "are"],
          "correctAnswer": "is",
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[is|es]]' [[for|para]] '[[he|él]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e44",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Short|Corta]] [[Answer|Respuesta]] [[No|No]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[short|corta]] [[answer|respuesta]].",
      "questions": [
        {
          "question": "[[Are|¿Son]] [[they|ellos]] [[ready|listos]]? [[No|No]], [[they|ellos]] [[are|son]] ____.",
          "options": ["not", "no"],
          "correctAnswer": "not",
          "explanation": "[[Negative|Negativo]] [[needs|necesita]] '[[not|no]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e45",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Build|Construir]] [[Question|Pregunta]]",
      "instructions": "[[Build|Construye]]: '[[Is|¿Es]] [[it|ello]] [[ready?|listo?]]'.",
      "correctSentence": "[[Is|¿Es]] [[it|ello]] [[ready|listo]]?",
      "words": [
        "[[ready|listo]]?",
        "[[Is|¿Es]]",
        "[[it|ello]]"
      ]
    },
    "topicName": "Grammar"
  },
  // Reading (46-55)
  {
    "id": "a1-u2-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[This|Este]] [[is|es]] [[Juan|Juan]]. [[He|Él]] [[is|es]] [[from|de]] [[Spain|España]]. [[He|Él]] [[is|es]] [[Spanish|español]]. [[He|Él]] [[is|es]] [[one|uno]] [[teacher|profesor]].",
    "content": {
      "title": "[[Juan's|De Juan]] [[Profile|Perfil]]",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[Juan|Juan]] [[from|de]]?",
          "options": [
            "[[Spain|España]]",
            "[[Mexico|México]]",
            "[[France|Francia]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[He|Él]] [[is|es]] [[from|de]] [[Spain|España]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[This|Esta]] [[is|es]] [[Maria|María]]. [[She|Ella]] [[is|es]] [[from|de]] [[Mexico|México]]. [[She|Ella]] [[is|es]] [[Mexican|mexicana]]. [[She|Ella]] [[is|es]] [[happy|feliz]].",
    "content": {
      "title": "[[Maria's|De María]] [[Profile|Perfil]]",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[her|su]] [[nationality|nacionalidad]]?",
          "options": [
            "[[Spanish|Española]]",
            "[[Mexican|Mexicana]]",
            "[[American|Americana]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[She|Ella]] [[is|es]] [[Mexican|mexicana]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[We|Nosotros]] [[are|somos]] [[Leo|Leo]] [[and|y]] [[Tom|Tom]]. [[We|Nosotros]] [[are|somos]] [[from|de]] [[the|los]] [[USA|EE.UU.]]. [[We|Nosotros]] [[are|somos]] [[American|americanos]]. [[We|Nosotros]] [[are|somos]] [[friends|amigos]].",
    "content": {
      "title": "[[Friends|Amigos]] [[from|de]] [[the|los]] [[USA|EE.UU.]]",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Are|¿Son]] [[they|ellos]] [[American|americanos]]?",
          "options": [
            "[[Yes|Sí]]",
            "[[No|No]]",
            "[[I|Yo]] [[don't|no]] [[know|sé]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[They|Ellos]] [[say|dicen]] '[[We|Nosotros]] [[are|somos]] [[American|americanos]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Look|Mira]] [[at|a]] [[the|el]] [[cat|gato]]. [[It|Ello]] [[is|es]] [[from|de]] [[England|Inglaterra]]. [[It|Ello]] [[is|es]] [[black|negro]]. [[It|Ello]] [[is|es]] [[three|tres]] [[years|años]] [[old|de edad]].",
    "content": {
      "title": "[[The|El]] [[English|Inglés]] [[Cat|Gato]]",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[old|años]] [[is|tiene]] [[the|el]] [[cat|gato]]?",
          "options": [
            "[[One|Uno]]",
            "[[Two|Dos]]",
            "[[Three|Tres]]"
          ],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[It|Ello]] [[is|es]] [[three|tres]] [[years|años]] [[old|de edad]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[They|Ellos]] [[are|son]] [[Anna|Ana]] [[and|y]] [[Kim|Kim]]. [[They|Ellas]] [[are|son]] [[from|de]] [[France|Francia]]. [[They|Ellas]] [[are|son]] [[French|francesas]]. [[They|Ellas]] [[are|son]] [[at|en]] [[the|la]] [[school|escuela]].",
    "content": {
      "title": "[[Students|Estudiantes]] [[from|de]] [[France|Francia]]",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[are|están]] [[they|ellas]]?",
          "options": [
            "[[At|En]] [[school|escuela]]",
            "[[At|En]] [[home|casa]]",
            "[[In|En]] [[France|Francia]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[They|Ellas]] [[are|son]] [[at|en]] [[the|la]] [[school|escuela]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "A: [[Hi|Hola]], [[is|¿es]] [[he|él]] [[your|tu]] [[friend|amigo]]?\nB: [[Yes|Sí]], [[he|él]] [[is|es]]. [[His|Su]] [[name|nombre]] [[is|es]] [[Paul|Paul]].\nA: [[Is|¿Es]] [[he|él]] [[from|de]] [[England|Inglaterra]]?\nB: [[No|No]], [[he|él]] [[is|es]] [[from|de]] [[the|los]] [[USA|EE.UU.]].",
    "content": {
      "title": "[[Asking|Preguntando]] [[about|sobre]] [[Paul|Paul]]",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[Paul|Paul]] [[from|de]] [[England|Inglaterra]]?",
          "options": [
            "[[Yes|Sí]]",
            "[[No|No]]",
            "[[I|Yo]] [[don't|no]] [[know|sé]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[B|B]] [[says|dice]] '[[No|No]], [[he|él]] [[is|es]] [[from|de]] [[the|los]] [[USA|EE.UU.]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[have|tengo]] [[four|cuatro]] [[cats|gatos]]. [[They|Ellos]] [[are|son]] [[white|blancos]]. [[One|Uno]] [[cat|gato]] [[is|está]] [[at|en]] [[home|casa]]. [[Three|Tres]] [[cats|gatos]] [[are|están]] [[in|en]] [[the|el]] [[garden|jardín]].",
    "content": {
      "title": "[[My|Mis]] [[Four|Cuatro]] [[Cats|Gatos]]",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[cats|gatos]] [[are|están]] [[in|en]] [[the|el]] [[garden|jardín]]?",
          "options": [
            "[[One|Uno]]",
            "[[Three|Tres]]",
            "[[Four|Cuatro]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[Three|Tres]] [[cats|gatos]] [[are|están]] [[in|en]] [[the|el]] [[garden|jardín]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[This|Esta]] [[is|es]] [[my|mi]] [[family|familia]]. [[We|Nosotros]] [[are|somos]] [[from|de]] [[Italy|Italia]]. [[We|Nosotros]] [[are|somos]] [[Italian|italianos]]. [[We|Nosotros]] [[are|estamos]] [[happy|felices]] [[here|aquí]].",
    "content": {
      "title": "[[Italian|Italiana]] [[Family|Familia]]",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[their|su]] [[country|país]]?",
          "options": [
            "[[Italy|Italia]]",
            "[[Spain|España]]",
            "[[France|Francia]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[They|Ellos]] [[say|dicen]] '[[We|Nosotros]] [[are|somos]] [[from|de]] [[Italy|Italia]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Seven|Siete]] [[and|y]] [[three|tres]] [[is|es]] [[ten|diez]]. [[I|Yo]] [[have|tengo]] [[ten|diez]] [[books|libros]]. [[They|Ellos]] [[are|son]] [[new|nuevos]].",
    "content": {
      "title": "[[Ten|Diez]] [[Books|Libros]]",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[books|libros]] [[are|son]] [[there|allí]]?",
          "options": [
            "[[Seven|Siete]]",
            "[[Three|Tres]]",
            "[[Ten|Diez]]"
          ],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[I|Yo]] [[have|tengo]] [[ten|diez]] [[books|libros]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Is|¿Está]] [[Robert|Roberto]] [[here|aquí]]? [[No|No]], [[he|él]] [[is|está]] [[not|no]]. [[He|Él]] [[is|está]] [[at|en]] [[the|el]] [[office|oficina]]. [[He|Él]] [[is|está]] [[busy|ocupado]].",
    "content": {
      "title": "[[Where|Dónde]] [[is|está]] [[Robert|Roberto]]?",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Is|¿Está]] [[Robert|Roberto]] [[at|en]] [[home|casa]]?",
          "options": [
            "[[Yes|Sí]]",
            "[[No|No]]",
            "[[I|Yo]] [[don't|no]] [[know|sé]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[He|Él]] [[is|está]] [[at|en]] [[the|el]] [[office|oficina]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  // Review / Mixed (56-60)
  {
    "id": "a1-u2-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Mixed",
    "difficulty": "medium",
    "content": {
      "title": "[[Identify|Identificar]] [[Pronoun|Pronombre]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]] [[for|para]] '[[The|El]] [[book|libro]]'.",
      "questions": [
        {
          "question": "[[The|El]] [[book|libro]] -> ?",
          "options": [
            "[[He|Él]]",
            "[[She|Ella]]",
            "[[It|Ello]]"
          ],
          "correctAnswer": 2,
          "explanation": "'[[It|Ello]]' [[is|es]] [[for|para]] [[things|cosas]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e57",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Mixed",
    "difficulty": "medium",
    "content": {
      "title": "[[Verb|Verbo]] [[To|A]] [[Be|Ser]]: [[Review|Repaso]]",
      "instructions": "[[Complete|Completa]]: '[[We|Nosotros]] ____ [[from|de]] [[Spain|España]]'.",
      "questions": [
        {
          "question": "[[We|Nosotros]] ____ [[from|de]] [[Spain|España]].",
          "options": ["are", "is"],
          "correctAnswer": "are",
          "explanation": "[[We|Nosotros]] [[takes|lleva]] '[[are|somos]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e58",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Mixed",
    "difficulty": "hard",
    "content": {
      "title": "[[Build|Construir]] [[Number|Número]]",
      "instructions": "[[Build|Construye]]: '[[Nine|Nueve]] [[and|y]] [[one|uno]] [[is|es]] [[ten|diez]]'.",
      "correctSentence": "[[Nine|Nueve]] [[and|y]] [[one|uno]] [[is|es]] [[ten|diez]].",
      "words": [
        "[[ten|diez]]",
        "[[and|y]]",
        "[[is|es]]",
        "[[one|uno]]",
        "[[Nine|Nueve]]",
        "."
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Mixed",
    "difficulty": "medium",
    "content": {
      "title": "[[Nationality|Nacionalidad]] [[Review|Repaso]]",
      "instructions": "[[Choose|Elige]].",
      "questions": [
        {
          "question": "[[He|Él]] [[is|es]] [[from|de]] [[Mexico|México]]. [[He|Él]] [[is|es]] (____).",
          "options": [
            "[[Mexican|Mexicano]]",
            "[[Mexico|México]]",
            "[[Spanish|Español]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Nationality|Nacionalidad]] [[of|de]] [[Mexico|México]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e60",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Mixed",
    "difficulty": "medium",
    "content": {
      "title": "[[Final|Final]] [[Check|Revisión]]",
      "instructions": "[[Complete|Completa]]: '____ [[is|es]] [[from|de]] [[France|Francia]]'. (She)",
      "questions": [
        {
          "question": "____ [[is|es]] [[from|de]] [[France|Francia]].",
          "options": ["She", "Her"],
          "correctAnswer": "She",
          "explanation": "[[Female|Femenino]] [[pronoun|pronombre]]."
        }
      ]
    },
    "topicName": "Grammar"
  }
];

const content = `import { Exercise } from '@/lib/exercise-generator';

export const UNIT_2_EXERCISES: Exercise[] = ${JSON.stringify(exercises, null, 2)};
`;

fs.writeFileSync('./src/lib/course/a1/unit-2.ts', content);
