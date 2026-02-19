import { Exercise } from '@/lib/exercise-generator';

export const UNIT_22_EXERCISES: Exercise[] = [

  // MULTIPLE CHOICE (11-40)
  {
    "id": "a1-u22-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Countable/Uncountable",
    "difficulty": "easy",
    "transcript": "I have an apple in my bag.",
    "content": {
      "title": "Sustantivos Contables",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[I have|Yo tengo]] _______ [[apple in my bag|manzana en mi bolsa]].",
          "options": ["[[a|una]]", "[[an|una (antes de vocal)]]", "[[some|algunas]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'an' antes de sustantivos contables que empiezan con sonido de vocal."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e11.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u22-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Countable/Uncountable",
    "difficulty": "easy",
    "transcript": "I would like some water, please.",
    "content": {
      "title": "Sustantivos Incontables",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[I would like|Me gustaría]] _______ [[water, please|agua, por favor]].",
          "options": ["[[a|un]]", "[[an|un]]", "[[some|algo de]]"],
          "correctAnswer": 2,
          "explanation": "El agua es incontable, por lo que usamos 'some' en oraciones afirmativas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e12.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u22-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Food",
    "difficulty": "easy",
    "transcript": "I eat bread for breakfast.",
    "content": {
      "title": "Vocabulario: Comida",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[I eat|Yo como]] _______ [[for breakfast|para desayunar]].",
          "options": ["[[bread|pan]]", "[[milk|leche]]", "[[water|agua]]"],
          "correctAnswer": 0,
          "explanation": "'Bread' (pan) es algo que se come."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e13.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u22-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Quantifiers",
    "difficulty": "medium",
    "transcript": "How much sugar do you want?",
    "content": {
      "title": "Preguntas de Cantidad",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "_______ [[sugar do you want|azúcar quieres]]?",
          "options": ["[[How many|Cuántos]]", "[[How much|Cuánto]]", "[[How some|Error]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'How much' para preguntar la cantidad de sustantivos incontables como el azúcar."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e14.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u22-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Quantifiers",
    "difficulty": "medium",
    "transcript": "How many eggs are in the fridge?",
    "content": {
      "title": "Preguntas de Cantidad",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "_______ [[eggs are in the fridge|huevos hay en la nevera]]?",
          "options": ["[[How many|Cuántos]]", "[[How much|Cuánto]]", "[[How any|Error]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'How many' para preguntar la cantidad de sustantivos contables en plural."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e15.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u22-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Drinks",
    "difficulty": "easy",
    "transcript": "She drinks orange juice every morning.",
    "content": {
      "title": "Vocabulario: Bebidas",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[She drinks orange|Ella bebe naranja]] _______ [[every morning|cada mañana]].",
          "options": ["[[meat|carne]]", "[[juice|zumo]]", "[[rice|arroz]]"],
          "correctAnswer": 1,
          "explanation": "El zumo (juice) es una bebida de fruta."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e16.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u22-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Any",
    "difficulty": "medium",
    "transcript": "Is there any milk in the bottle?",
    "content": {
      "title": "Uso de 'Any'",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[Is there|Hay]] _______ [[milk in the bottle|leche en la botella]]?",
          "options": ["[[some|algo de]]", "[[any|alguna/algo de (preg)]]", "[[a|una]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'any' para preguntas con sustantivos incontables."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e17.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u22-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Vegetables",
    "difficulty": "medium",
    "transcript": "Carrots are good for your eyes.",
    "content": {
      "title": "Vocabulario: Verduras",
      "instructions": "Elige la verdura correcta.",
      "questions": [
        {
          "question": "_______ [[are good for your eyes|son buenas para tus ojos]].",
          "options": ["[[Carrots|Zanahorias]]", "[[Beef|Ternera]]", "[[Cheese|Queso]]"],
          "correctAnswer": 0,
          "explanation": "Las zanahorias (carrots) son verduras conocidas por ser buenas para la vista."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e18.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u22-e19",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Negatives",
    "difficulty": "medium",
    "transcript": "We don't have any pasta left.",
    "content": {
      "title": "Negación con 'Any'",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[We don't have|No tenemos]] _______ [[pasta left|pasta que quede]].",
          "options": ["[[some|algo de]]", "[[any|nada de (neg)]]", "[[a|una]]"],
          "correctAnswer": 1,
          "explanation": "En oraciones negativas, usamos 'any' con sustantivos incontables."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u22-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Fruit",
    "difficulty": "easy",
    "transcript": "Bananas are yellow.",
    "content": {
      "title": "Vocabulario: Frutas",
      "instructions": "Elige la fruta correcta.",
      "questions": [
        {
          "question": "_______ [[are yellow|son amarillas]].",
          "options": ["[[Apples|Manzanas]]", "[[Bananas|Plátanos]]", "[[Cherries|Cerezas]]"],
          "correctAnswer": 1,
          "explanation": "Los plátanos (bananas) son de color amarillo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u22-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Countable/Uncountable",
    "difficulty": "medium",
    "transcript": "I need some information about the menu.",
    "content": {
      "title": "Sustantivos Incontables",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[I need|Necesito]] _______ [[information|información]].",
          "options": ["[[an|una]]", "[[some|algo de]]", "[[a|una]]"],
          "correctAnswer": 1,
          "explanation": "'Information' es incontable en inglés, por lo que usamos 'some'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e21.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u22-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Meat",
    "difficulty": "medium",
    "transcript": "I don't eat chicken or beef.",
    "content": {
      "title": "Vocabulario: Carnes",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I don't eat|No como]] _______ [[or beef|o ternera]].",
          "options": ["[[chicken|pollo]]", "[[potato|patata]]", "[[banana|plátano]]"],
          "correctAnswer": 0,
          "explanation": "'Chicken' (pollo) es un tipo de carne."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e22.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u22-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Quantifiers",
    "difficulty": "medium",
    "transcript": "There isn't much salt in the soup.",
    "content": {
      "title": "Uso de 'Much'",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[There isn't|No hay]] _______ [[salt in the soup|sal en la sopa]].",
          "options": ["[[many|mucha (contable)]]", "[[much|mucha (incontable)]]", "[[some|algo de]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'much' para sustantivos incontables en oraciones negativas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e23.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u22-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Quantifiers",
    "difficulty": "medium",
    "transcript": "There aren't many potatoes in the basket.",
    "content": {
      "title": "Uso de 'Many'",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[There aren't|No hay]] _______ [[potatoes in the basket|patatas en la cesta]].",
          "options": ["[[much|muchas]]", "[[many|muchas]]", "[[any|ninguna]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'many' para sustantivos contables en plural."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e24.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u22-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Dairy",
    "difficulty": "easy",
    "transcript": "Cheese is made from milk.",
    "content": {
      "title": "Lácteos",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "_______ [[is made from milk|está hecho de leche]].",
          "options": ["[[Cheese|Queso]]", "[[Rice|Arroz]]", "[[Bread|Pan]]"],
          "correctAnswer": 0,
          "explanation": "El queso (cheese) es un producto lácteo derivado de la leche."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e25.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u22-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Every Saturday morning,|Cada sábado por la mañana,]] [[I go to the local market|voy al mercado local]] [[to buy fresh food.|para comprar comida fresca.]] [[First, I buy|Primero, compro]] [[some vegetables:|algunas verduras:]] [[a kilo of potatoes,|un kilo de patatas,]] [[some carrots,|algunas zanahorias,]] [[and an onion.|y una cebolla.]] [[Then, I go to the fruit stand.|Luego, voy al puesto de fruta.]] [[I always buy|Siempre compro]] [[some red apples|algunas manzanas rojas]] [[and a bunch of bananas.|y un racimo de plátanos.]] [[I don't buy|No compro]] [[any oranges|ninguna naranja]] [[because I have|porque tengo]] [[an orange tree|un naranjo]] [[in my garden.|en mi jardín.]] [[Finally, I buy|Finalmente, compro]] [[some fresh bread|algo de pan fresco]] [[and a bottle of milk.|y una botella de leche.]] [[Now, I have|Ahora, tengo]] [[everything I need|todo lo que necesito]] [[for the week!|para la semana!]]",
    "content": {
      "title": "[[Reading: Market Day|Lectura: Día de mercado]]",
      "instructions": "[[Read the text and answer.|Lee el texto y responde.]]",
      "questions": [
        {
          "question": "[[Why doesn't the speaker buy oranges?|¿Por qué el hablante no compra naranjas?]]",
          "options": ["[[Because he doesn't like them|Porque no le gustan]]", "[[Because he has a tree in his garden|Porque tiene un árbol en su jardín]]", "[[Because they are expensive|Porque son caras]]"],
          "correctAnswer": 1,
          "explanation": "[[The speaker says he doesn't buy oranges because he has an orange tree in his garden.|El hablante dice que no compra naranjas porque tiene un naranjo en su jardín.]]"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e51.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u22-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Every Saturday morning,|Cada sábado por la mañana,]] [[I go to the local market|voy al mercado local]] [[to buy fresh food.|para comprar comida fresca.]] [[First, I buy|Primero, compro]] [[some vegetables:|algunas verduras:]] [[a kilo of potatoes,|un kilo de patatas,]] [[some carrots,|algunas zanahorias,]] [[and an onion.|y una cebolla.]] [[Then, I go to the fruit stand.|Luego, voy al puesto de fruta.]] [[I always buy|Siempre compro]] [[some red apples|algunas manzanas rojas]] [[and a bunch of bananas.|y un racimo de plátanos.]] [[I don't buy|No compro]] [[any oranges|ninguna naranja]] [[because I have|porque tengo]] [[an orange tree|un naranjo]] [[in my garden.|en mi jardín.]] [[Finally, I buy|Finalmente, compro]] [[some fresh bread|algo de pan fresco]] [[and a bottle of milk.|y una botella de leche.]] [[Now, I have|Ahora, tengo]] [[everything I need|todo lo que necesito]] [[for the week!|para la semana!]]",
    "content": {
      "title": "[[Reading: Vegetables and Fruit|Lectura: Verduras y frutas]]",
      "instructions": "[[Read the text and answer.|Lee el texto y responde.]]",
      "questions": [
        {
          "question": "[[Which fruit does the speaker always buy?|¿Qué fruta compra siempre el hablante?]]",
          "options": ["[[Red apples and bananas|Manzanas rojas y plátanos]]", "[[Oranges and grapes|Naranjas y uvas]]", "[[Pears and watermelons|Peras y sandías]]"],
          "correctAnswer": 0,
          "explanation": "[[The text mentions buying some red apples and a bunch of bananas.|El texto menciona la compra de algunas manzanas rojas y un racimo de plátanos.]]"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e52.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u22-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Every Saturday morning,|Cada sábado por la mañana,]] [[I go to the local market|voy al mercado local]] [[to buy fresh food.|para comprar comida fresca.]] [[First, I buy|Primero, compro]] [[some vegetables:|algunas verduras:]] [[a kilo of potatoes,|un kilo de patatas,]] [[some carrots,|algunas zanahorias,]] [[and an onion.|y una cebolla.]] [[Then, I go to the fruit stand.|Luego, voy al puesto de fruta.]] [[I always buy|Siempre compro]] [[some red apples|algunas manzanas rojas]] [[and a bunch of bananas.|y un racimo de plátanos.]] [[I don't buy|No compro]] [[any oranges|ninguna naranja]] [[because I have|porque tengo]] [[an orange tree|un naranjo]] [[in my garden.|en mi jardín.]] [[Finally, I buy|Finalmente, compro]] [[some fresh bread|algo de pan fresco]] [[and a bottle of milk.|y una botella de leche.]] [[Now, I have|Ahora, tengo]] [[everything I need|todo lo que necesito]] [[for the week!|para la semana!]]",
    "content": {
      "title": "[[Reading: Dairy and Bakery|Lectura: Lácteos y panadería]]",
      "instructions": "[[Read the text and answer.|Lee el texto y responde.]]",
      "questions": [
        {
          "question": "[[What are the last two items mentioned?|¿Cuáles son los dos últimos artículos mencionados?]]",
          "options": ["[[Fresh bread and a bottle of milk|Pan fresco y una botella de leche]]", "[[Meat and cheese|Carne y queso]]", "[[Water and juice|Agua y zumo]]"],
          "correctAnswer": 0,
          "explanation": "[[The text ends by mentioning fresh bread and a bottle of milk.|El texto termina mencionando pan fresco y una botella de leche.]]"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e53.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u22-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Hi, I'm Sarah.|Hola, soy Sarah.]] [[I am a vegetarian,|Soy vegetariana,]] [[so I don't eat|así que no como]] [[any meat or fish.|nada de carne ni pescado.]] [[For lunch,|Para almorzar,]] [[I usually have|suelo tomar]] [[a big salad|una ensalada grande]] [[with tomatoes,|con tomates,]] [[cucumbers,|pepinos,]] [[and some cheese.|y algo de queso.]] [[I also drink|También bebo]] [[a lot of water.|mucha agua.]] [[For dinner,|Para cenar,]] [[I like cooking|me gusta cocinar]] [[pasta with vegetables.|pasta con verduras.]] [[I don't put|No pongo]] [[much salt|mucha sal]] [[in my food,|en mi comida,]] [[but I use|pero uso]] [[a lot of olive oil.|mucho aceite de oliva.]] [[It is a very|Es una dieta muy]] [[healthy diet.|saludable.]]",
    "content": {
      "title": "[[Reading: Sarah's Diet|Lectura: La dieta de Sarah]]",
      "instructions": "[[Read about Sarah and answer.|Lee sobre Sarah y responde.]]",
      "questions": [
        {
          "question": "[[What does Sarah eat for lunch?|¿Qué come Sarah para almorzar?]]",
          "options": ["[[A salad with tomatoes and cheese|Una ensalada con tomates y queso]]", "[[Chicken and rice|Pollo y arroz]]", "[[A hamburger|Una hamburguesa]]"],
          "correctAnswer": 0,
          "explanation": "[[Sarah usually has a big salad with tomatoes, cucumbers, and cheese for lunch.|Sarah suele almorzar una ensalada grande con tomates, pepinos y algo de queso.]]"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e54.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u22-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Hi, I'm Sarah.|Hola, soy Sarah.]] [[I am a vegetarian,|Soy vegetariana,]] [[so I don't eat|así que no como]] [[any meat or fish.|nada de carne ni pescado.]] [[For lunch,|Para almorzar,]] [[I usually have|suelo tomar]] [[a big salad|una ensalada grande]] [[with tomatoes,|con tomates,]] [[cucumbers,|pepinos,]] [[and some cheese.|y algo de queso.]] [[I also drink|También bebo]] [[a lot of water.|mucha agua.]] [[For dinner,|Para cenar,]] [[I like cooking|me gusta cocinar]] [[pasta with vegetables.|pasta con verduras.]] [[I don't put|No pongo]] [[much salt|mucha sal]] [[in my food,|en mi comida,]] [[but I use|pero uso]] [[a lot of olive oil.|mucho aceite de oliva.]] [[It is a very|Es una dieta muy]] [[healthy diet.|saludable.]]",
    "content": {
      "title": "[[Reading: Healthy Choices|Lectura: Opciones saludables]]",
      "instructions": "[[Read about Sarah and answer.|Lee sobre Sarah y responde.]]",
      "questions": [
        {
          "question": "[[Does Sarah use a lot of salt?|¿Usa Sarah mucha sal?]]",
          "options": ["[[No, she doesn't put much salt|No, ella no pone mucha sal]]", "[[Yes, she loves salt|Sí, le encanta la sal]]", "[[Only in the salad|Solo en la ensalada]]"],
          "correctAnswer": 0,
          "explanation": "[[Sarah mentions that she doesn't put much salt in her food.|Sarah menciona que no pone mucha sal en su comida.]]"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e55.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u22-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Hi, I'm Sarah.|Hola, soy Sarah.]] [[I am a vegetarian,|Soy vegetariana,]] [[so I don't eat|así que no como]] [[any meat or fish.|nada de carne ni pescado.]] [[For lunch,|Para almorzar,]] [[I usually have|suelo tomar]] [[a big salad|una ensalada grande]] [[with tomatoes,|con tomates,]] [[cucumbers,|pepinos,]] [[and some cheese.|y algo de queso.]] [[I also drink|También bebo]] [[a lot of water.|mucha agua.]] [[For dinner,|Para cenar,]] [[I like cooking|me gusta cocinar]] [[pasta with vegetables.|pasta con verduras.]] [[I don't put|No pongo]] [[much salt|mucha sal]] [[in my food,|en mi comida,]] [[but I use|pero uso]] [[a lot of olive oil.|mucho aceite de oliva.]] [[It is a very|Es una dieta muy]] [[healthy diet.|saludable.]]",
    "content": {
      "title": "[[Reading: Sarah's Drinks|Lectura: Las bebidas de Sarah]]",
      "instructions": "[[Read about Sarah and answer.|Lee sobre Sarah y responde.]]",
      "questions": [
        {
          "question": "[[What does Sarah drink?|¿Qué bebe Sarah?]]",
          "options": ["[[A lot of water|Mucha agua]]", "[[Wine and beer|Vino y cerveza]]", "[[Soda and juice|Refrescos y zumo]]"],
          "correctAnswer": 0,
          "explanation": "[[The text states that she drinks a lot of water.|El texto indica que bebe mucha agua.]]"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e56.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u22-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "[[To make a chocolate cake,|Para hacer un pastel de chocolate,]] [[you need|necesitas]] [[some basic ingredients.|algunos ingredientes básicos.]] [[First, you need|Primero, necesitas]] [[four eggs|cuatro huevos]] [[and some sugar.|y algo de azúcar.]] [[How much sugar?|¿Cuánta azúcar?]] [[About two hundred grams.|Unos doscientos gramos.]] [[You also need|También necesitas]] [[some butter,|algo de mantequilla,]] [[flour,|harina,]] [[and, of course,|y, por supuesto,]] [[some chocolate.|algo de chocolate.]] [[Mix everything|Mezcla todo]] [[in a large bowl.|en un cuenco grande.]] [[Don't forget|No olvides]] [[to put some milk|poner algo de leche]] [[if the mix is too dry.|si la mezcla está demasiado seca.]] [[Bake it for|Hornea durante]] [[forty-five minutes.|cuarenta y cinco minutos.]] [[Enjoy your cake!|¡Disfruta de tu pastel!]]",
    "content": {
      "title": "[[Reading: Baking a Cake|Lectura: Horneando un pastel]]",
      "instructions": "[[Read the recipe and answer.|Lee la receta y responde.]]",
      "questions": [
        {
          "question": "[[How many eggs are needed for the cake?|¿Cuántos huevos se necesitan para el pastel?]]",
          "options": ["[[Four eggs|Cuatro huevos]]", "[[Two eggs|Dos huevos]]", "[[Ten eggs|Diez huevos]]"],
          "correctAnswer": 0,
          "explanation": "[[The recipe specifies that you need four eggs.|La receta especifica que necesitas cuatro huevos.]]"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u22-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "[[To make a chocolate cake,|Para hacer un pastel de chocolate,]] [[you need|necesitas]] [[some basic ingredients.|algunos ingredientes básicos.]] [[First, you need|Primero, necesitas]] [[four eggs|cuatro huevos]] [[and some sugar.|y algo de azúcar.]] [[How much sugar?|¿Cuánta azúcar?]] [[About two hundred grams.|Unos doscientos gramos.]] [[You also need|También necesitas]] [[some butter,|algo de mantequilla,]] [[flour,|harina,]] [[and, of course,|y, por supuesto,]] [[some chocolate.|algo de chocolate.]] [[Mix everything|Mezcla todo]] [[in a large bowl.|en un cuenco grande.]] [[Don't forget|No olvides]] [[to put some milk|poner algo de leche]] [[if the mix is too dry.|si la mezcla está demasiado seca.]] [[Bake it for|Hornea durante]] [[forty-five minutes.|cuarenta y cinco minutos.]] [[Enjoy your cake!|¡Disfruta de tu pastel!]]",
    "content": {
      "title": "[[Reading: Cake Ingredients|Lectura: Ingredientes del pastel]]",
      "instructions": "[[Read the recipe and answer.|Lee la receta y responde.]]",
      "questions": [
        {
          "question": "[[When should you add milk?|¿Cuándo se debe añadir leche?]]",
          "options": ["[[If the mix is too dry|Si la mezcla está demasiado seca]]", "[[Always, at the beginning|Siempre, al principio]]", "[[After baking|Después de hornear]]"],
          "correctAnswer": 0,
          "explanation": "[[The text says to put some milk if the mix is too dry.|El texto dice que pongas algo de leche si la mezcla está demasiado seca.]]"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e58.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u22-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Eating a lot of fruit|Comer mucha fruta]] [[is very good|es muy bueno]] [[for your health.|para tu salud.]] [[Some people eat|Algunas personas comen]] [[an apple every day.|una manzana cada día.]] [[Apples have|Las manzanas tienen]] [[a lot of vitamins.|muchas vitaminas.]] [[How many vitamins?|¿Cuántas vitaminas?]] [[Many!|¡Muchas!]] [[I also like|También me gustan]] [[strawberries and grapes.|las fresas y las uvas.]] [[Is there any sugar|¿Hay algo de azúcar]] [[in fruit?|en la fruta?]] [[Yes, there is|Sí, hay]] [[some natural sugar.|algo de azúcar natural.]] [[However, it is|Sin embargo, es]] [[much healthier|mucho más saludable]] [[than the sugar|que el azúcar]] [[in soda or candy.|en los refrescos o caramelos.]] [[Try to eat|Intenta comer]] [[three pieces of fruit|tres piezas de fruta]] [[every day.|cada día.]]",
    "content": {
      "title": "[[Reading: Fruit and Health|Lectura: Fruta y salud]]",
      "instructions": "[[Read the text and answer.|Lee el texto y responde.]]",
      "questions": [
        {
          "question": "[[What is healthier than the sugar in soda?|¿Qué es más saludable que el azúcar de los refrescos?]]",
          "options": ["[[The natural sugar in fruit|El azúcar natural de la fruta]]", "[[Chocolate cakes|Los pasteles de chocolate]]", "[[Salt|La sal]]"],
          "correctAnswer": 0,
          "explanation": "[[The natural sugar in fruit is healthier than the sugar in soda or candy.|El azúcar natural de la fruta es más saludable que el azúcar de los refrescos o los caramelos.]]"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e51.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u22-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Eating a lot of fruit|Comer mucha fruta]] [[is very good|es muy bueno]] [[for your health.|para tu salud.]] [[Some people eat|Algunas personas comen]] [[an apple every day.|una manzana cada día.]] [[Apples have|Las manzanas tienen]] [[a lot of vitamins.|muchas vitaminas.]] [[How many vitamins?|¿Cuántas vitaminas?]] [[Many!|¡Muchas!]] [[I also like|También me gustan]] [[strawberries and grapes.|las fresas y las uvas.]] [[Is there any sugar|¿Hay algo de azúcar]] [[in fruit?|en la fruta?]] [[Yes, there is|Sí, hay]] [[some natural sugar.|algo de azúcar natural.]] [[However, it is|Sin embargo, es]] [[much healthier|mucho más saludable]] [[than the sugar|que el azúcar]] [[in soda or candy.|en los refrescos o caramelos.]] [[Try to eat|Intenta comer]] [[three pieces of fruit|tres piezas de fruta]] [[every day.|cada día.]]",
    "content": {
      "title": "[[Reading: Daily Fruit|Lectura: Fruta diaria]]",
      "instructions": "[[Read the text and answer.|Lee el texto y responde.]]",
      "questions": [
        {
          "question": "[[How many pieces of fruit should you eat?|¿Cuántas piezas de fruta deberías comer?]]",
          "options": ["[[Three pieces every day|Tres piezas cada día]]", "[[One piece every week|Una pieza cada semana]]", "[[Ten pieces every day|Diez piezas cada día]]"],
          "correctAnswer": 0,
          "explanation": "[[The text suggests trying to eat three pieces of fruit every day.|El texto sugiere intentar comer tres piezas de fruta cada día.]]"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-22/e51.mp3",
    "topicName": "Reading"
  }
];
