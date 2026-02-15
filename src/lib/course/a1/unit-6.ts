import { Exercise } from '@/lib/exercise-generator';

export const UNIT_6_EXERCISES: Exercise[] = [
  {
    "id": "a1-u6-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Common Food",
    "difficulty": "easy",
    "transcript": "Bread. Rice. Pasta. Chicken. Fish. Meat. Salad. Fruit. Vegetables. Cheese.",
    "content": {
      "title": "Vocabulario: Comida Común",
      "instructions": "Aprende los nombres de alimentos básicos.",
      "items": [
        { "front": "[[Bread|Pan]]", "back": "Pan" },
        { "front": "[[Rice|Arroz]]", "back": "Arroz" },
        { "front": "[[Pasta|Pasta]]", "back": "Pasta" },
        { "front": "[[Chicken|Pollo]]", "back": "Chicken" },
        { "front": "[[Fish|Pescado]]", "back": "Pescado" },
        { "front": "[[Meat|Carne]]", "back": "Carne" },
        { "front": "[[Salad|Ensalada]]", "back": "Ensalada" },
        { "front": "[[Fruit|Fruta]]", "back": "Fruta" },
        { "front": "[[Vegetables|Verduras]]", "back": "Verduras" },
        { "front": "[[Cheese|Queso]]", "back": "Queso" }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e2",
    "type": "flashcard",
    "level": "A1",
    "topic": "Common Drinks",
    "difficulty": "easy",
    "transcript": "Water. Coffee. Tea. Milk. Juice. Beer. Wine. Soda. Lemonade. Hot chocolate.",
    "content": {
      "title": "Vocabulario: Bebidas",
      "instructions": "Aprende los nombres de bebidas comunes.",
      "items": [
        { "front": "[[Water|Agua]]", "back": "Agua" },
        { "front": "[[Coffee|Café]]", "back": "Café" },
        { "front": "[[Tea|Té]]", "back": "Tea" },
        { "front": "[[Milk|Leche]]", "back": "Leche" },
        { "front": "[[Juice|Zumo/Jugo]]", "back": "Zumo/Jugo" },
        { "front": "[[Beer|Cerveza]]", "back": "Cerveza" },
        { "front": "[[Wine|Vino]]", "back": "Wine" },
        { "front": "[[Soda|Refresco]]", "back": "Refresco" },
        { "front": "[[Lemonade|Limonada]]", "back": "Limonada" },
        { "front": "[[Hot chocolate|Chocolate caliente]]", "back": "Hot chocolate" }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e2.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countable/Uncountable",
    "difficulty": "easy",
    "transcript": "I have an apple for lunch.",
    "content": {
      "title": "Contables: Singular",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (_____) [[apple|manzana]] [[for|para]] [[lunch|almuerzo]].",
          "options": ["[[a|una]]", "[[an|una (vocal)]]", "[[some|algunas]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'an' antes de sustantivos contables singulares que empiezan con vocal."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e3.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countable/Uncountable",
    "difficulty": "easy",
    "transcript": "I drink some water.",
    "content": {
      "title": "Incontables",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] [[drink|bebo]] (_____) [[water|agua]].",
          "options": ["[[a|un]]", "[[an|un]]", "[[some|un poco de]]"],
          "correctAnswer": 2,
          "explanation": "Usamos 'some' con sustantivos incontables como 'water'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e4.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e5",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "I would like a coffee, please.",
    "content": {
      "title": "Pedir en un Café",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[I|Yo]] [[would|querría]] [[like|gustar]] [[a|un]] [[coffee|café]], [[please|por favor]].",
      "words": ["[[like|gustar]]", "[[please|por favor]].", "[[would|querría]]", "[[coffee|café]],", "[[I|Yo]]", "[[a|un]]"],
      "explanation": "'I would like' es la forma educada de pedir algo."
    },
    "audioUrl": "audio/a1/unit-6/e5.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Some/Any",
    "difficulty": "easy",
    "transcript": "Do you have any milk?",
    "content": {
      "title": "Preguntas con Any",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "(_____) [[you|tú]] [[have|tienes]] (_____) [[milk|leche]]?",
          "options": ["[[Do|Hacer]] / [[some|algo]]", "[[Do|Hacer]] / [[any|algo]]", "[[Are|Ser]] / [[any|algo]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'any' en preguntas y negaciones."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e6.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "I eat breakfast at 8 AM.",
    "content": {
      "title": "Comidas del Día",
      "instructions": "Elige la comida correcta.",
      "questions": [
        {
          "question": "[[I|Yo]] [[eat|como]] (_____) [[at|a las]] [[8|8]] [[AM|AM]].",
          "options": ["[[lunch|almuerzo]]", "[[dinner|cena]]", "[[breakfast|desayuno]]"],
          "correctAnswer": 2,
          "explanation": "Breakfast es el desayuno."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e7.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "Can I have the menu?",
    "content": {
      "title": "Pedir el Menú",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Can|Puedo]] [[I|yo]] [[have|tener]] [[the|el]] [[menu|menú]]?",
      "words": ["[[have|tener]]", "[[menu|menú]]?", "[[the|el]]", "[[Can|Puedo]]", "[[I|yo]]"],
      "explanation": "Forma común de pedir la carta."
    },
    "audioUrl": "audio/a1/unit-6/e8.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countable/Uncountable",
    "difficulty": "easy",
    "transcript": "There is some bread on the table.",
    "content": {
      "title": "Pan: Incontable",
      "instructions": "Completa con 'some'.",
      "questions": [
        {
          "question": "[[There|Allí]] [[is|hay]] (_____) [[bread|pan]] [[on|sobre]] [[the|la]] [[table|mesa]].",
          "options": ["[[a|un]]", "[[some|algo de]]", "[[any|algo]]"],
          "correctAnswer": 1,
          "explanation": "Bread es incontable, usamos 'some' en afirmativo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e9.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e10",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Likes",
    "difficulty": "easy",
    "transcript": "I really like Italian food.",
    "content": {
      "title": "Gustos",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[I|Yo]] [[really|realmente]] [[like|gustar]] [[Italian|italiana]] [[food|comida]].",
      "words": ["[[Italian|italiana]]", "[[food|comida]].", "[[like|gustar]]", "[[I|Yo]]", "[[really|realmente]]"],
      "explanation": "Expresando preferencias."
    },
    "audioUrl": "audio/a1/unit-6/e10.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "What is your favorite fruit? My favorite fruit is banana.",
    "content": {
      "title": "Frutas",
      "instructions": "Completa el nombre de la fruta.",
      "questions": [
        {
          "question": "[[My|Mi]] [[favorite|favorita]] [[fruit|fruta]] [[is|es]] (_____) .",
          "options": ["[[banana|plátano]]", "[[chicken|pollo]]", "[[rice|arroz]]"],
          "correctAnswer": 0,
          "explanation": "Banana es una fruta."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e12",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "Would you like some tea?",
    "content": {
      "title": "Ofrecer",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Would|Querrías]] [[you|tú]] [[like|gustar]] [[some|algo de]] [[tea|té]]?",
      "words": ["[[tea|té]]?", "[[like|gustar]]", "[[you|tú]]", "[[some|algo de]]", "[[Would|Querrías]]"],
      "explanation": "Ofrecer algo educadamente."
    },
    "audioUrl": "audio/a1/unit-6/e12.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "The bill, please.",
    "content": {
      "title": "La Cuenta",
      "instructions": "Elige la palabra para 'cuenta'.",
      "questions": [
        {
          "question": "[[The|La]] (_____), [[please|por favor]].",
          "options": ["[[bill|cuenta]]", "[[menu|menú]]", "[[order|pedido]]"],
          "correctAnswer": 0,
          "explanation": "Bill es la cuenta en un restaurante."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e13.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Some/Any",
    "difficulty": "easy",
    "transcript": "We don't have any eggs.",
    "content": {
      "title": "Negación con Any",
      "instructions": "Completa la negación.",
      "questions": [
        {
          "question": "[[We|Nosotros]] [[don't|no]] [[have|tenemos]] (_____) [[eggs|huevos]].",
          "options": ["[[some|algunos]]", "[[any|ningunos]]", "[[a|un]]"],
          "correctAnswer": 1,
          "explanation": "Any se usa en oraciones negativas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e14.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e15",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "I eat a lot of vegetables.",
    "content": {
      "title": "Verduras",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[I|Yo]] [[eat|como]] [[a|una]] [[lot|cantidad]] [[of|de]] [[vegetables|verduras]].",
      "words": ["[[of|de]]", "[[vegetables|verduras]].", "[[eat|como]]", "[[I|Yo]]", "[[lot|cantidad]]", "[[a|una]]"],
      "explanation": "A lot of significa mucho/a/os/as."
    },
    "audioUrl": "audio/a1/unit-6/e15.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Is the soup hot?",
    "content": {
      "title": "Sopa",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "[[Is|Está]] [[the|la]] (_____) [[hot|caliente]]?",
          "options": ["[[soup|sopa]]", "[[salad|ensalada]]", "[[fruit|fruta]]"],
          "correctAnswer": 0,
          "explanation": "La sopa es un plato que suele servirse caliente."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e16.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "There aren't any tomatoes in the fridge.",
    "content": {
      "title": "Nevera",
      "instructions": "Completa con 'any'.",
      "questions": [
        {
          "question": "[[There|Allí]] [[aren't|no hay]] (_____) [[tomatoes|tomates]] [[in|en]] [[the|la]] [[fridge|nevera]].",
          "options": ["[[some|algunos]]", "[[any|ningunos]]", "[[a|un]]"],
          "correctAnswer": 1,
          "explanation": "Any para plural negativo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e17.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e18",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Likes",
    "difficulty": "easy",
    "transcript": "She doesn't like fish.",
    "content": {
      "title": "Gustos Negativos",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[She|Ella]] [[doesn't|no]] [[like|gustar]] [[fish|pescado]].",
      "words": ["[[fish|pescado]].", "[[like|gustar]]", "[[doesn't|no]]", "[[She|Ella]]"],
      "explanation": "Doesn't like para tercera persona."
    },
    "audioUrl": "audio/a1/unit-6/e18.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e19",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "I take sugar in my tea.",
    "content": {
      "title": "Azúcar",
      "instructions": "Elige la palabra 'azúcar'.",
      "questions": [
        {
          "question": "[[I|Yo]] [[take|tomo]] (_____) [[in|en]] [[my|mi]] [[tea|té]].",
          "options": ["[[salt|sal]]", "[[sugar|azúcar]]", "[[pepper|pimienta]]"],
          "correctAnswer": 1,
          "explanation": "Sugar es azúcar."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e19.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e20",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "Anything else? No, thank you.",
    "content": {
      "title": "¿Algo más?",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Anything|Algo]] [[else|más]]? [[No|No]], [[thank|gracias]] [[you|te]].",
      "words": ["[[else|más]]?", "[[thank|gracias]]", "[[No|No]],", "[[you|te]].", "[[Anything|Algo]]"],
      "explanation": "Pregunta típica de un camarero."
    },
    "audioUrl": "audio/a1/unit-6/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Is this a bottle of wine?",
    "content": {
      "title": "Botella",
      "instructions": "Completa con 'botella'.",
      "questions": [
        {
          "question": "[[Is|Es]] [[this|esto]] [[a|una]] (_____) [[of|de]] [[wine|vino]]?",
          "options": ["[[glass|vaso]]", "[[bottle|botella]]", "[[cup|taza]]"],
          "correctAnswer": 1,
          "explanation": "Bottle es botella."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Countable/Uncountable",
    "difficulty": "easy",
    "transcript": "There is an egg in the box.",
    "content": {
      "title": "Huevo: Contable",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[is|allí]] [[an|un]] [[egg|huevo]] [[in|en]] [[the|la]] [[box|caja]].",
      "words": ["[[egg|huevo]]", "[[box|caja]].", "[[an|un]]", "[[There|Hay]]", "[[in|en]]", "[[is|allí]]", "[[the|la]]"],
      "explanation": "Egg empieza con vocal, usamos 'an'."
    },
    "audioUrl": "audio/a1/unit-6/e22.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Do you want a glass of juice?",
    "content": {
      "title": "Vaso de Zumo",
      "instructions": "Elige la palabra 'vaso'.",
      "questions": [
        {
          "question": "[[Do|Hacer]] [[you|tú]] [[want|querer]] [[a|un]] (_____) [[of|de]] [[juice|zumo]]?",
          "options": ["[[glass|vaso]]", "[[plate|plato]]", "[[fork|tenedor]]"],
          "correctAnswer": 0,
          "explanation": "Glass es vaso."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e23.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e24",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "I don't have any money for dinner.",
    "content": {
      "title": "Dinero: Incontable",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[I|Yo]] [[don't|no]] [[have|tener]] [[any|nada de]] [[money|dinero]] [[for|para]] [[dinner|cena]].",
      "words": ["[[any|nada de]]", "[[money|dinero]]", "[[dinner|cena]].", "[[have|tener]]", "[[I|Yo]]", "[[for|para]]", "[[don't|no]]"],
      "explanation": "Money es incontable y usamos any en negativo."
    },
    "audioUrl": "audio/a1/unit-6/e24.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "I like to drink hot chocolate in winter.",
    "content": {
      "title": "Chocolate Caliente",
      "instructions": "Completa la bebida.",
      "questions": [
        {
          "question": "[[I|Yo]] [[like|gustar]] [[to|a]] [[drink|beber]] [[hot|caliente]] (_____) [[in|en]] [[winter|invierno]].",
          "options": ["[[water|agua]]", "[[chocolate|chocolate]]", "[[beer|cerveza]]"],
          "correctAnswer": 1,
          "explanation": "Hot chocolate es una bebida común de invierno."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e25.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e26",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "Can I have some more water?",
    "content": {
      "title": "Pedir Más",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Can|Puedo]] [[I|yo]] [[have|tener]] [[some|un poco]] [[more|más]] [[water|agua]]?",
      "words": ["[[more|más]]", "[[water|agua]]?", "[[Can|Puedo]]", "[[some|un poco]]", "[[I|yo]]", "[[have|tener]]"],
      "explanation": "Cómo pedir más de algo."
    },
    "audioUrl": "audio/a1/unit-6/e26.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Cheese is made from milk.",
    "content": {
      "title": "Lácteos",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "(_____) [[is|está]] [[made|hecho]] [[from|de]] [[milk|leche]].",
          "options": ["[[Cheese|Queso]]", "[[Chicken|Pollo]]", "[[Rice|Arroz]]"],
          "correctAnswer": 0,
          "explanation": "Cheese (queso) es un producto lácteo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e27.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e28",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "There is a fly in my soup.",
    "content": {
      "title": "Problemas",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[is|allí]] [[a|una]] [[fly|mosca]] [[in|en]] [[my|mi]] [[soup|sopa]].",
      "words": ["[[soup|sopa]].", "[[in|en]]", "[[is|allí]]", "[[a|una]]", "[[There|Hay]]", "[[my|mi]]", "[[fly|mosca]]"],
      "explanation": "Vocabulario de restaurante."
    },
    "audioUrl": "audio/a1/unit-6/e28.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "I would like an orange juice.",
    "content": {
      "title": "Zumo de Naranja",
      "instructions": "Completa con 'an'.",
      "questions": [
        {
          "question": "[[I|Yo]] [[would|querría]] [[like|gustar]] (_____) [[orange|naranja]] [[juice|zumo]].",
          "options": ["[[a|un]]", "[[an|un (vocal)]]", "[[some|algo]]"],
          "correctAnswer": 1,
          "explanation": "Orange empieza con vocal, usamos an."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "Here is your coffee.",
    "content": {
      "title": "Entrega",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Here|Aquí]] [[is|está]] [[your|tu]] [[coffee|café]].",
      "words": ["[[is|está]]", "[[coffee|café]].", "[[your|tu]]", "[[Here|Aquí]]"],
      "explanation": "Frase del camarero al servir."
    },
    "audioUrl": "audio/a1/unit-6/e30.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e31",
    "type": "flashcard",
    "level": "A1",
    "topic": "Cafe Items",
    "difficulty": "easy",
    "transcript": "Cup. Mug. Plate. Fork. Knife. Spoon. Napkin. Sugar. Salt. Pepper.",
    "content": {
      "title": "Vocabulario: En la Mesa",
      "instructions": "Aprende nombres de utensilios.",
      "items": [
        { "front": "[[Cup|Taza (pequeña)]]", "back": "Taza" },
        { "front": "[[Mug|Taza (grande)]]", "back": "Jarra/Taza" },
        { "front": "[[Plate|Plato]]", "back": "Plato" },
        { "front": "[[Fork|Tenedor]]", "back": "Tenedor" },
        { "front": "[[Knife|Cuchillo]]", "back": "Cuchillo" },
        { "front": "[[Spoon|Cuchara]]", "back": "Cuchara" },
        { "front": "[[Napkin|Servilleta]]", "back": "Servilleta" },
        { "front": "[[Sugar|Azúcar]]", "back": "Azúcar" },
        { "front": "[[Salt|Sal]]", "back": "Sal" },
        { "front": "[[Pepper|Pimienta]]", "back": "Pimienta" }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e31.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e32",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "There is a spoon on the plate.",
    "content": {
      "title": "Cubiertos",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[There|Allí]] [[is|hay]] [[a|una]] (_____) [[on|sobre]] [[the|el]] [[plate|plato]].",
          "options": ["[[spoon|cuchara]]", "[[soup|sopa]]", "[[juice|zumo]]"],
          "correctAnswer": 0,
          "explanation": "Spoon (cuchara) es un utensilio."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e32.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e33",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "Do you want some sugar in your coffee?",
    "content": {
      "title": "Preguntar Gustos",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Do|Hacer]] [[you|tú]] [[want|querer]] [[some|algo de]] [[sugar|azúcar]] [[in|en]] [[your|tu]] [[coffee|café]]?",
      "words": ["[[sugar|azúcar]]", "[[want|querer]]", "[[coffee|café]]?", "[[some|algo de]]", "[[your|tu]]", "[[Do|Hacer]]", "[[in|en]]", "[[you|tú]]"],
      "explanation": "Pregunta sobre aditivos."
    },
    "audioUrl": "audio/a1/unit-6/e33.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e34",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "This fish is very fresh.",
    "content": {
      "title": "Frescura",
      "instructions": "Completa con 'fresco'.",
      "questions": [
        {
          "question": "[[This|Este]] [[fish|pescado]] [[is|está]] [[very|muy]] (_____) .",
          "options": ["[[fresh|fresco]]", "[[hot|caliente]]", "[[small|pequeño]]"],
          "correctAnswer": 0,
          "explanation": "Fresh significa fresco."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e34.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e35",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Likes",
    "difficulty": "easy",
    "transcript": "I love fresh fruit.",
    "content": {
      "title": "Gustos: Fruta",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[I|Yo]] [[love|amo]] [[fresh|fresca]] [[fruit|fruta]].",
      "words": ["[[fruit|fruta]].", "[[love|amo]]", "[[I|Yo]]", "[[fresh|fresca]]"],
      "explanation": "Love es más fuerte que like."
    },
    "audioUrl": "audio/a1/unit-6/e35.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "Can I help you? Yes, I want a salad.",
    "content": {
      "title": "Atención",
      "instructions": "Completa el pedido.",
      "questions": [
        {
          "question": "[[Yes|Sí]], [[I|yo]] [[want|quiero]] [[a|una]] (_____) .",
          "options": ["[[salad|ensalada]]", "[[water|agua]]", "[[wine|vino]]"],
          "correctAnswer": 0,
          "explanation": "Salad es ensalada."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e36.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e37",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "How much is it?",
    "content": {
      "title": "Preguntar el Precio",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[How|Cuánto]] [[much|mucho]] [[is|es]] [[it|ello]]?",
      "words": ["[[much|mucho]]", "[[it|ello]]?", "[[is|es]]", "[[How|Cuánto]]"],
      "explanation": "Pregunta estándar para el precio."
    },
    "audioUrl": "audio/a1/unit-6/e37.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "I need a napkin.",
    "content": {
      "title": "Servilleta",
      "instructions": "Completa con 'servilleta'.",
      "questions": [
        {
          "question": "[[I|Yo]] [[need|necesito]] [[a|una]] (_____) .",
          "options": ["[[napkin|servilleta]]", "[[fork|tenedor]]", "[[knife|cuchillo]]"],
          "correctAnswer": 0,
          "explanation": "Napkin es servilleta."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e38.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e39",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Likes",
    "difficulty": "easy",
    "transcript": "He doesn't eat meat.",
    "content": {
      "title": "Vegetariano",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[He|Él]] [[doesn't|no]] [[eat|come]] [[meat|carne]].",
      "words": ["[[eat|come]]", "[[meat|carne]].", "[[doesn't|no]]", "[[He|Él]]"],
      "explanation": "Negación en tercera persona."
    },
    "audioUrl": "audio/a1/unit-6/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Would you like a glass of milk?",
    "content": {
      "title": "Ofrecer Bebida",
      "instructions": "Completa con 'vaso'.",
      "questions": [
        {
          "question": "[[Would|Querrías]] [[you|tú]] [[like|gustar]] [[a|un]] (_____) [[of|de]] [[milk|leche]]?",
          "options": ["[[glass|vaso]]", "[[cup|taza]]", "[[mug|jarra]]"],
          "correctAnswer": 0,
          "explanation": "Glass se usa para leche."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e40.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Rice is very common in Asia.",
    "content": {
      "title": "Arroz",
      "instructions": "Completa con 'arroz'.",
      "questions": [
        {
          "question": "(_____) [[is|es]] [[very|muy]] [[common|común]] [[in|en]] [[Asia|Asia]].",
          "options": ["[[Rice|Arroz]]", "[[Pasta|Pasta]]", "[[Bread|Pan]]"],
          "correctAnswer": 0,
          "explanation": "Rice es el alimento básico en Asia."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e41.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e42",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Countable/Uncountable",
    "difficulty": "easy",
    "transcript": "There is some cheese in the fridge.",
    "content": {
      "title": "Queso: Incontable",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[is|allí]] [[some|un poco de]] [[cheese|queso]] [[in|en]] [[the|la]] [[fridge|nevera]].",
      "words": ["[[cheese|queso]]", "[[in|en]]", "[[fridge|nevera]].", "[[is|allí]]", "[[some|un poco de]]", "[[There|Hay]]", "[[the|la]]"],
      "explanation": "Cheese es incontable."
    },
    "audioUrl": "audio/a1/unit-6/e42.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Do you want some salt?",
    "content": {
      "title": "Sal",
      "instructions": "Elige la palabra 'sal'.",
      "questions": [
        {
          "question": "[[Do|Hacer]] [[you|tú]] [[want|querer]] [[some|algo de]] (_____) ?",
          "options": ["[[salt|sal]]", "[[sugar|azúcar]]", "[[pepper|pimienta]]"],
          "correctAnswer": 0,
          "explanation": "Salt es sal."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e43.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e44",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "The bill is thirty Euros.",
    "content": {
      "title": "El Pago",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[The|La]] [[bill|cuenta]] [[is|es]] [[thirty|treinta]] [[Euros|Euros]].",
      "words": ["[[bill|cuenta]]", "[[Euros|Euros]].", "[[thirty|treinta]]", "[[The|La]]", "[[is|es]]"],
      "explanation": "Expresar el total de la cuenta."
    },
    "audioUrl": "audio/a1/unit-6/e44.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "I drink coffee with milk.",
    "content": {
      "title": "Café con Leche",
      "instructions": "Completa la frase.",
      "questions": [
        {
          "question": "[[I|Yo]] [[drink|bebo]] [[coffee|café]] (_____) [[milk|leche]].",
          "options": ["[[with|con]]", "[[without|sin]]", "[[and|y]]"],
          "correctAnswer": 0,
          "explanation": "With significa con."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e45.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e46",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "Where is the waiter?",
    "content": {
      "title": "El Camarero",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Where|Dónde]] [[is|está]] [[the|el]] [[waiter|camarero]]?",
      "words": ["[[is|está]]", "[[waiter|camarero]]?", "[[the|el]]", "[[Where|Dónde]]"],
      "explanation": "Waiter es camarero."
    },
    "audioUrl": "audio/a1/unit-6/e46.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Is this a cup of tea?",
    "content": {
      "title": "Taza de Té",
      "instructions": "Elige 'taza'.",
      "questions": [
        {
          "question": "[[Is|Es]] [[this|esto]] [[a|una]] (_____) [[of|de]] [[tea|té]]?",
          "options": ["[[cup|taza]]", "[[glass|vaso]]", "[[bottle|botella]]"],
          "correctAnswer": 0,
          "explanation": "Cup se usa para té o café caliente."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e47.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e48",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Likes",
    "difficulty": "easy",
    "transcript": "They don't like spicy food.",
    "content": {
      "title": "Comida Picante",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[They|Ellos]] [[don't|no]] [[like|gustar]] [[spicy|picante]] [[food|comida]].",
      "words": ["[[food|comida]].", "[[like|gustar]]", "[[They|Ellos]]", "[[spicy|picante]]", "[[don't|no]]"],
      "explanation": "Spicy significa picante."
    },
    "audioUrl": "audio/a1/unit-6/e48.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Ordering",
    "difficulty": "easy",
    "transcript": "Would you like a dessert?",
    "content": {
      "title": "Postre",
      "instructions": "Elige la palabra 'postre'.",
      "questions": [
        {
          "question": "[[Would|Querrías]] [[you|tú]] [[like|gustar]] [[a|un]] (_____) ?",
          "options": ["[[dessert|postre]]", "[[soup|sopa]]", "[[salad|ensalada]]"],
          "correctAnswer": 0,
          "explanation": "Dessert es el postre."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e49.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e50",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Countable/Uncountable",
    "difficulty": "easy",
    "transcript": "Do we have any potatoes?",
    "content": {
      "title": "Patatas: Contable",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Do|Hacer]] [[we|nosotros]] [[have|tener]] [[any|algunas]] [[potatoes|patatas]]?",
      "words": ["[[have|tener]]", "[[potatoes|patatas]]?", "[[we|nosotros]]", "[[any|algunas]]", "[[Do|Hacer]]"],
      "explanation": "Potatoes es contable plural."
    },
    "audioUrl": "audio/a1/unit-6/e50.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a healthy breakfast.",
    "content": {
      "title": "Lectura: A Healthy Breakfast",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "What does Mark drink? *\"Mark is a student. He always has a healthy breakfast. He eats an apple and some yogurt with cereal. He drinks a large glass of orange juice. He doesn't like coffee, so he never drinks it in the morning. Breakfast is his favorite meal because it gives him energy.\"*",
          "options": ["[[Coffee|Café]]", "[[Orange juice|Zumo de naranja]]", "[[Tea|Té]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'He drinks a large glass of orange juice'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e51.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a healthy breakfast.",
    "content": {
      "title": "Lectura: A Healthy Breakfast",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Does Mark like coffee? *\"Mark is a student. He always has a healthy breakfast. He eats an apple and some yogurt with cereal. He drinks a large glass of orange juice. He doesn't like coffee, so he never drinks it in the morning. Breakfast is his favorite meal because it gives him energy.\"*",
          "options": ["[[Yes, he loves it|Sí]]", "[[No, he doesn't like it|No]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'He doesn't like coffee'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e52.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a healthy breakfast.",
    "content": {
      "title": "Lectura: A Healthy Breakfast",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "What food does he eat? *\"Mark is a student. He always has a healthy breakfast. He eats an apple and some yogurt with cereal. He drinks a large glass of orange juice. He doesn't like coffee, so he never drinks it in the morning. Breakfast is his favorite meal because it gives him energy.\"*",
          "options": ["[[Eggs and bacon|Huevos y beicon]]", "[[Apple and yogurt|Manzana y yogur]]", "[[Bread and cheese|Pan y queso]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'He eats an apple and some yogurt'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e53.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a cafe.",
    "content": {
      "title": "Lectura: At the Sunny Cafe",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "What does Emma order to eat? *\"Emma is at the Sunny Cafe with her friend. Emma would like a chicken salad and a bottle of water. Her friend wants a Margherita pizza and a glass of lemonade. They are very hungry. For dessert, they would like to share a large piece of chocolate cake. The waiter is very friendly.\"*",
          "options": ["[[Pizza|Pizza]]", "[[Chicken salad|Ensalada de pollo]]", "[[Fish|Pescado]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'Emma would like a chicken salad'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e54.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a cafe.",
    "content": {
      "title": "Lectura: At the Sunny Cafe",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "What does the friend drink? *\"Emma is at the Sunny Cafe with her friend. Emma would like a chicken salad and a bottle of water. Her friend wants a Margherita pizza and a glass of lemonade. They are very hungry. For dessert, they would like to share a large piece of chocolate cake. The waiter is very friendly.\"*",
          "options": ["[[Water|Agua]]", "[[Lemonade|Limonada]]", "[[Juice|Zumo]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice her friend wants 'a glass of lemonade'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e55.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a cafe.",
    "content": {
      "title": "Lectura: At the Sunny Cafe",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "What is the dessert? *\"Emma is at the Sunny Cafe with her friend. Emma would like a chicken salad and a bottle of water. Her friend wants a Margherita pizza and a glass of lemonade. They are very hungry. For dessert, they would like to share a large piece of chocolate cake. The waiter is very friendly.\"*",
          "options": ["[[Fruit salad|Fruta]]", "[[Ice cream|Helado]]", "[[Chocolate cake|Pastel de chocolate]]"],
          "correctAnswer": 2,
          "explanation": "El texto dice 'a large piece of chocolate cake'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e56.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a market.",
    "content": {
      "title": "Lectura: The Local Market",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Does the market have fish? *\"Every Saturday, I go to the local market. I need to buy some food for the week. I buy some fresh bread, six eggs, and a lot of vegetables. The market has many fruits like bananas and oranges. I don't buy any meat or fish because I am a vegetarian. I love the market because the food is fresh and cheap.\"*",
          "options": ["[[Yes, it has|Sí]]", "[[No, the person doesn't buy any|No (la persona no compra)]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'I don't buy any meat or fish'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a market.",
    "content": {
      "title": "Lectura: The Local Market",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "How many eggs does the person buy? *\"Every Saturday, I go to the local market. I need to buy some food for the week. I buy some fresh bread, six eggs, and a lot of vegetables. The market has many fruits like bananas and oranges. I don't buy any meat or fish because I am a vegetarian. I love the market because the food is fresh and cheap.\"*",
          "options": ["[[Four|Cuatro]]", "[[Six|Seis]]", "[[Ten|Diez]]"],
          "correctAnswer": 1,
          "explanation": "El texto indica 'six eggs'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a market.",
    "content": {
      "title": "Lectura: The Local Market",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Why does the person love the market? *\"Every Saturday, I go to the local market. I need to buy some food for the week. I buy some fresh bread, six eggs, and a lot of vegetables. The market has many fruits like bananas and oranges. I don't buy any meat or fish because I am a vegetarian. I love the market because the food is fresh and cheap.\"*",
          "options": ["[[It is near home|Está cerca]]", "[[The food is fresh and cheap|La comida es fresca y barata]]", "[[It is very big|Es grande]]"],
          "correctAnswer": 1,
          "explanation": "El texto menciona 'because the food is fresh and cheap'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a dinner party.",
    "content": {
      "title": "Lectura: A Dinner Party",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Is there any pasta for dinner? *\"Tonight, my friends are coming to my house for dinner. I am cooking pasta with tomato sauce and a lot of cheese. I also have some red wine and some juice. For dessert, there are some apples and oranges. I hope they like the food!\"*",
          "options": ["[[Yes, there is|Sí]]", "[[No, there is rice|No, hay arroz]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice 'I am cooking pasta'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e60.mp3",
    "topicName": "Reading"
  }
];
