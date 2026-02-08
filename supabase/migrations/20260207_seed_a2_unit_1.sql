-- Seed A2 Units 1-10

BEGIN;

INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title)
VALUES ('a2-m1', 'A2', 'general', 1, 'Module 1')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_lessons (id, module_id, order_index, title)
VALUES ('a2-m1-l1', 'a2-m1', 1, 'Unit 1')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex1',
  'a2-m1-l1',
  1,
  'multiple-choice',
  $_$Greetings and Introductions Exercise$_$,
  $_${"title":"Greetings and Introductions Exercise","instructions":"Choose the correct answer for each question.","questions":[{"id":"q1","question":"What is the correct subject pronoun for 'Maria and I'?","options":["A) They","B) We","C) She","D) You"],"correctAnswer":"B","explanation":"La respuesta correcta es 'We' porque 'Maria and I' se refiere a 'nosotros', que es 'we' en inglés."},{"id":"q2","question":"Which sentence is a correct greeting for the morning?","options":["A) Good night","B) Good afternoon","C) Good morning","D) Good evening"],"correctAnswer":"C","explanation":"La respuesta correcta es 'Good morning' porque es el saludo apropiado para la mañana."},{"id":"q3","question":"What is the nationality of someone from Spain?","options":["A) Spanish","B) Spaniard","C) Spanishian","D) Spanic"],"correctAnswer":"A","explanation":"La respuesta correcta es 'Spanish' porque así se dice en inglés la nacionalidad de alguien de España."},{"id":"q4","question":"Complete the sentence: My phone number _____ 85.","options":["A) is","B) am","C) are","D) be"],"correctAnswer":"A","explanation":"La respuesta correcta es 'is' porque se usa el verbo 'to be' en presente simple para el sujeto singular 'number'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex2',
  'a2-m1-l1',
  2,
  'fill-blank',
  $_$Exercise$_$,
  $_${"questions":[{"sentence":"Hello, my name ___ John.","options":["is","am","are"],"answer":"is","explanation":"Usamos 'is' porque estamos hablando de una tercera persona singular, 'my name'.","points":1},{"sentence":"She ___ from Spain.","options":["is","are","am"],"answer":"is","explanation":"Se usa 'is' con 'she' (tercera persona singular).","points":1},{"sentence":"I ___ a student.","options":["am","is","are"],"answer":"am","explanation":"Usamos 'am' con 'I'.","points":1},{"sentence":"We ___ learning English.","options":["is","are","am"],"answer":"are","explanation":"Se usa 'are' con 'we' (primera persona plural).","points":1},{"sentence":"They ___ my friends.","options":["is","are","am"],"answer":"are","explanation":"Usamos 'are' porque 'they' es plural.","points":1},{"sentence":"You ___ very kind.","options":["is","are","am"],"answer":"are","explanation":"Usamos 'are' con 'you'.","points":1},{"sentence":"He ___ 25 years old.","options":["is","are","am"],"answer":"is","explanation":"Se usa 'is' porque 'he' es tercera persona singular.","points":1},{"sentence":"It ___ a sunny day.","options":["is","are","am"],"answer":"is","explanation":"Usamos 'is' con 'it' para describir el tiempo.","points":1}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex3',
  'a2-m1-l1',
  3,
  'sentence-building',
  $_$Exercise$_$,
  $_${"sentences":[{"id":1,"words":["is","John","teacher","a","."],"correctOrder":["John","is","a","teacher","."],"translation":"John es un profesor.","hint":"Sujeto + be + artículo + sustantivo.","points":2},{"id":2,"words":["from","they","Spain","are","."],"correctOrder":["They","are","from","Spain","."],"translation":"Ellos son de España.","hint":"Pronombre sujeto + be + de + país.","points":2},{"id":3,"words":["years","old","she","is","twenty","."],"correctOrder":["She","is","twenty","years","old","."],"translation":"Ella tiene veinte años.","hint":"Pronombre sujeto + be + número + años.","points":2},{"id":4,"words":["American","are","you","?"],"correctOrder":["Are","you","American","?"],"translation":"¿Eres americano?","hint":"Be + pronombre sujeto + nacionalidad.","points":2},{"id":5,"words":["I","am","happy","to","meet","you","."],"correctOrder":["I","am","happy","to","meet","you","."],"translation":"Estoy feliz de conocerte.","hint":"Pronombre sujeto + be + adjetivo + infinitivo.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex4',
  'a2-m1-l1',
  4,
  'speaking-analysis',
  $_$Speaking Analysis: Greetings and Introductions$_$,
  $_${"title":"Speaking Analysis: Greetings and Introductions","instructions":"Choose the most appropriate option for each speaking situation","questions":[{"id":"q1","type":"multiple-choice","scenario":"You meet someone new at a party. How do you introduce yourself?","question":"What do you say?","options":["A: Hi, I am a teacher.","B: Hello, is teacher me.","C: I'm teacher.","D: Hi, am teacher I."],"correctAnswer":"A","explanation":"La opción A es correcta porque usa la estructura correcta del verbo 'to be' en presente simple junto con el pronombre sujeto 'I'.","points":2},{"id":"q2","type":"multiple-choice","scenario":"You want to greet a new colleague at work.","question":"What's the most formal way to greet them?","options":["A: Hey!","B: Hi!","C: Hello!","D: Yo!"],"correctAnswer":"C","explanation":"La opción C es la más formal y apropiada para el entorno laboral.","points":2},{"id":"q3","type":"multiple-choice","scenario":"You're meeting someone from France. How do you ask about their nationality?","question":"What do you say?","options":["A: Where are you from?","B: What is your country?","C: Are you from France?","D: You are French?"],"correctAnswer":"A","explanation":"La opción A es la pregunta más común y formal para preguntar sobre la nacionalidad.","points":2},{"id":"q4","type":"multiple-choice","scenario":"Someone says, 'I'm from Germany.'","question":"How do you respond appropriately?","options":["A: How old are you?","B: What is Germany?","C: That's interesting!","D: You like Germany?"],"correctAnswer":"C","explanation":"La opción C es una respuesta apropiada que muestra interés en la conversación.","points":2},{"id":"q5","type":"multiple-choice","scenario":"You want to ask someone their age in a polite way.","question":"What do you say?","options":["A: How old are you?","B: Age you?","C: What is your age?","D: You are how old?"],"correctAnswer":"A","explanation":"La opción A es la manera más directa y educada de preguntar la edad.","points":2},{"id":"q6","type":"multiple-choice","scenario":"You hear someone say, 'I'm twenty-five.'","question":"How do you continue the conversation?","options":["A: You look young.","B: Twenty-five is number.","C: How are you?","D: Young is you."],"correctAnswer":"A","explanation":"La opción A es una continuación natural de la conversación que además es un cumplido.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex5',
  'a2-m1-l1',
  5,
  'word-search',
  $_$Word Search: Greetings and Introductions$_$,
  $_${"title":"Word Search: Greetings and Introductions","instructions":"Find the hidden words in the grid","words":["HELLO","GOODBYE","FRIEND","AMERICAN","SPANISH","FIFTEEN","STUDENT","FOURTEEN","THIRTEEN","SEVENTY","THIRTY"],"gridSize":10,"clues":[{"word":"HELLO","clue":"A common greeting in English"},{"word":"GOODBYE","clue":"What you say when leaving"},{"word":"FRIEND","clue":"Amigo/a en inglés"},{"word":"AMERICAN","clue":"Someone from the USA"},{"word":"SPANISH","clue":"Alguien de España"},{"word":"FIFTEEN","clue":"Número después de catorce"},{"word":"STUDENT","clue":"Estudiante en inglés"},{"word":"FOURTEEN","clue":"Número después de trece"},{"word":"THIRTEEN","clue":"Número después de doce"},{"word":"SEVENTY","clue":"Número después de sesenta y nueve"},{"word":"THIRTY","clue":"Número después de veintinueve"}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex6',
  'a2-m1-l1',
  6,
  'crossword',
  $_$Crossword: Greetings and Introductions$_$,
  $_${"title":"Crossword: Greetings and Introductions","instructions":"Complete the crossword puzzle","items":[{"word":"SPANISH","clue":"Nationality of a person from Spain","direction":"across","row":0,"col":0},{"word":"HELLO","clue":"A common greeting","direction":"down","row":0,"col":6},{"word":"THEY","clue":"Subject pronoun for more than one person","direction":"across","row":2,"col":4},{"word":"IS","clue":"Be verb present simple for 'he', 'she', 'it'","direction":"down","row":0,"col":4},{"word":"SHE","clue":"Subject pronoun for a female","direction":"down","row":1,"col":5},{"word":"FRIEND","clue":"A person you like and know well","direction":"across","row":4,"col":0},{"word":"EIGHT","clue":"The number after seven","direction":"down","row":4,"col":3}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex7',
  'a2-m1-l1',
  7,
  'reading-comprehension',
  $_$Greetings and Introductions$_$,
  $_${"title":"Greetings and Introductions","textPassage":"Hello! I am Maria, and I am from Spain. I am a student at a language school. My best friend is John. He is from the United States, and he is also a student. We are both learning English because it is fun and useful. In our class, there are students from many countries. For example, Anna is from Germany, and she is very friendly. Ahmed is from Egypt, and he is good at numbers. He can count from 0 to 100 very fast! Our teacher, Ms. Lee, is from Korea. She is very kind and helps us a lot. We all greet each other every morning. We say, 'Good morning!' and smile. It is nice to meet new people and learn about their cultures. I like knowing about different nationalities and sharing my own culture with them. Learning English is exciting because it connects us all!","wordCount":144,"estimatedReadingTime":2,"questions":[{"question":"What is the main idea of the passage?","options":["Learning English is difficult.","Maria's experience in a language school.","John's favorite hobby.","Ahmed's trip to Egypt."],"answer":"Maria's experience in a language school.","explanation":"La idea principal del pasaje es sobre la experiencia de Maria en una escuela de idiomas, donde aprende inglés con sus amigos de diferentes nacionalidades."},{"question":"Where is Maria from?","options":["Germany","Spain","United States","Korea"],"answer":"Spain","explanation":"Maria es de España, como se menciona al principio del pasaje."},{"question":"TRUE or FALSE: John is Maria's teacher.","options":["TRUE","FALSE"],"answer":"FALSE","explanation":"John es el mejor amigo de Maria, no su profesor. El profesor es la Sra. Lee."},{"question":"How fast can Ahmed count?","options":["From 1 to 10","From 0 to 50","From 0 to 100","From 10 to 100"],"answer":"From 0 to 100","explanation":"Ahmed es bueno con los números y puede contar de 0 a 100 rápidamente."},{"question":"Who is very friendly according to Maria?","options":["Ahmed","John","Ms. Lee","Anna"],"answer":"Anna","explanation":"Anna es descrita como muy amigable por Maria en el pasaje."},{"question":"What does the class say every morning?","options":["'Good afternoon!'","'Good night!'","'Good morning!'","'Hello!'"],"answer":"'Good morning!'","explanation":"Cada mañana, la clase se saluda diciendo '¡Buenos días!' y sonriendo, como se menciona en el texto."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex8',
  'a2-m1-l1',
  8,
  'pronunciation-practice',
  $_$Práctica de Pronunciación: Enfoque en el Estrés de la Oración$_$,
  $_${"title":"Práctica de Pronunciación: Enfoque en el Estrés de la Oración","instructions":"Practica la pronunciación de las siguientes oraciones en inglés, prestando especial atención al estrés de la oración. Usa las transcripciones fonéticas para ayudarte y sigue los consejos de pronunciación.","targetSentences":[{"english":"I have to buy a new book.","spanish":"Tengo que comprar un libro nuevo.","phonetic":"/aɪ hæv tuː baɪ ə njuː bʊk/","audioModelURL":"audio-url-placeholder-1","pronunciationTips":"Enfoca el estrés en 'have' y 'book'. Pronuncia 'have' con claridad y asegura que 'book' tenga una vocal corta y clara.","focusPoints":"El estrés principal está en 'have' y 'book'.","commonMistakes":"Evita poner el estrés en 'to' o 'a'."},{"english":"She will call you later.","spanish":"Ella te llamará más tarde.","phonetic":"/ʃiː wɪl kɔːl juː ˈleɪtə/","audioModelURL":"audio-url-placeholder-2","pronunciationTips":"Pon el estrés en 'call' y 'later'. Asegúrate de alargar el sonido de la 'a' en 'call'.","focusPoints":"El estrés principal está en 'call' y 'later'.","commonMistakes":"No enfatices 'will' o 'you'."},{"english":"We should invite them to the party.","spanish":"Deberíamos invitarlos a la fiesta.","phonetic":"/wiː ʃʊd ɪnˈvaɪt ðɛm tuː ðə ˈpɑːrti/","audioModelURL":"audio-url-placeholder-3","pronunciationTips":"Asegúrate de enfatizar 'invite' y 'party'. La 't' en 'party' debe ser clara.","focusPoints":"El estrés principal está en 'invite' y 'party'.","commonMistakes":"Evita poner estrés en 'should' o 'them'."},{"english":"Can you help me with this?","spanish":"¿Puedes ayudarme con esto?","phonetic":"/kæn juː help miː wɪð ðɪs/","audioModelURL":"audio-url-placeholder-4","pronunciationTips":"Enfoca el estrés en 'help' y 'this'. La 'h' en 'help' debe ser fuerte.","focusPoints":"El estrés principal está en 'help' y 'this'.","commonMistakes":"No enfatices 'can' o 'you'."},{"english":"They must finish their work.","spanish":"Deben terminar su trabajo.","phonetic":"/ðeɪ mʌst ˈfɪnɪʃ ðeər wɜːrk/","audioModelURL":"audio-url-placeholder-5","pronunciationTips":"Enfoca el estrés en 'finish' y 'work'. La 'f' de 'finish' debe ser clara.","focusPoints":"El estrés principal está en 'finish' y 'work'.","commonMistakes":"Evita enfatizar 'must' o 'their'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex9',
  'a2-m1-l1',
  9,
  'multiple-choice',
  $_$Greetings and Introductions: Be Verb Present Simple and Subject Pronouns$_$,
  $_${"title":"Greetings and Introductions: Be Verb Present Simple and Subject Pronouns","instructions":"Lea las preguntas con atención y elija la opción correcta. Use el verbo 'be' en presente simple y los pronombres personales correctamente.","questions":[{"id":"q1","question":"Hello! My name ___ Anna. What is your name?","options":["A) is","B) am","C) are","D) be"],"correctAnswer":"A","explanation":"La forma correcta del verbo 'be' con 'name' es 'is'. 'My name is Anna' es una estructura común para presentarse."},{"id":"q2","question":"He ___ from Italy. He speaks Italian.","options":["A) am","B) is","C) are","D) be"],"correctAnswer":"B","explanation":"Con el pronombre 'He', usamos 'is' en presente simple. 'He is from Italy' indica su nacionalidad."},{"id":"q3","question":"We ___ students at the same school.","options":["A) am","B) is","C) are","D) be"],"correctAnswer":"C","explanation":"Con el pronombre 'We', la forma correcta del verbo 'be' en presente simple es 'are'. 'We are students' es la estructura correcta."},{"id":"q4","question":"___ you from Spain? I think I heard you speaking Spanish.","options":["A) Is","B) Am","C) Are","D) Be"],"correctAnswer":"C","explanation":"Para preguntas con 'you', usamos 'Are'. 'Are you from Spain?' es una pregunta correcta para preguntar sobre la nacionalidad."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex10',
  'a2-m1-l1',
  10,
  'fill-blank',
  $_$Exercise$_$,
  $_${"questions":[{"sentence":"I ________ (be / positive) from Spain and my brother ________ (be / positive) from Argentina.","options":["am","is","are","Are","Is"],"answers":["am","is"],"explanation":"Recuerda que utilizamos 'am' con 'I' y 'is' con 'he', 'she', 'it'. Aquí, 'my brother' es equivalente a 'he'.","points":1},{"sentence":"Hello! ________ (be / ?) you new here?","options":["am","is","are","Am","Is","Are"],"answers":["Are"],"explanation":"Usamos 'are' con 'you' para preguntar. Empezamos con mayúscula al ser inicio de pregunta.","points":1},{"sentence":"This ________ (be / positive) my friend, Maria. She ________ (be / positive) Italian.","options":["am","is","are"],"answers":["is","is"],"explanation":"Utilizamos 'is' para 'he', 'she', 'it' y nombres singulares.","points":1},{"sentence":"________ (be / ?) they from Germany or France?","options":["Am","Is","Are"],"answers":["Are"],"explanation":"Para 'they', usamos 'are' en preguntas.","points":1},{"sentence":"Good morning! How ________ (be / ?) you?","options":["am","is","are"],"answers":["are"],"explanation":"La estructura correcta para preguntar por el estado de alguien es 'How are you?'.","points":1},{"sentence":"We ________ (be / positive) students at the university.","options":["am","is","are"],"answers":["are"],"explanation":"Con 'we', usamos 'are' en afirmaciones.","points":1},{"sentence":"________ (be / ?) it a nice day today?","options":["Am","Is","Are"],"answers":["Is"],"explanation":"Para preguntar sobre el tiempo o situaciones, usamos 'is' con 'it'.","points":1},{"sentence":"The class ________ (be / positive) at 10 o'clock.","options":["am","is","are"],"answers":["is"],"explanation":"Con 'the class', que es singular, usamos 'is'.","points":1}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex11',
  'a2-m1-l1',
  11,
  'sentence-building',
  $_$Exercise$_$,
  $_${"sentences":[{"id":1,"words":["are","you","How","?"],"correctOrder":["How","are","you","?"],"translation":"¿Cómo estás?","hint":"Pregunta sobre el estado de alguien.","points":2},{"id":2,"words":["I","am","from","Spain","."],"correctOrder":["I","am","from","Spain","."],"translation":"Soy de España.","hint":"Usa 'I am' para hablar de tu nacionalidad.","points":2},{"id":3,"words":["is","she","a","teacher","."],"correctOrder":["She","is","a","teacher","."],"translation":"Ella es una profesora.","hint":"Usa 'she is' para describir una profesión.","points":2},{"id":4,"words":["they","are","students","."],"correctOrder":["They","are","students","."],"translation":"Ellos son estudiantes.","hint":"Usa 'they are' para hablar de un grupo.","points":2},{"id":5,"words":["My","sister","is","twenty","."],"correctOrder":["My","sister","is","twenty","."],"translation":"Mi hermana tiene veinte años.","hint":"Usa 'is' para indicar la edad.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex12',
  'a2-m1-l1',
  12,
  'speaking-analysis',
  $_$Speaking Analysis: Greetings and Introductions$_$,
  $_${"title":"Speaking Analysis: Greetings and Introductions","instructions":"Choose the most appropriate option for each speaking situation","questions":[{"id":"q1","type":"multiple-choice","scenario":"You meet someone for the first time at a party. They say, 'Hi, I'm Anna. It's nice to meet you.'","question":"What is the most appropriate response?","options":["A. Hi, I'm John. Nice to meet you too.","B. Hello, how are you?","C. Good morning, Anna.","D. See you later, Anna."],"correctAnswer":"A","explanation":"La respuesta A es la más adecuada porque responde de manera amistosa y continua con una presentación personal, que es apropiado en un contexto de presentación.","points":2},{"id":"q2","type":"multiple-choice","scenario":"You are at a formal business meeting and you want to introduce yourself.","question":"Which introduction is the most appropriate?","options":["A. Hi, I'm Jake.","B. Hey, I'm Jake.","C. Good morning, my name is Jake Smith.","D. Yo, Jake here."],"correctAnswer":"C","explanation":"La respuesta C es la más adecuada en un entorno formal. 'Good morning' es un saludo formal y utilizar el nombre completo es apropiado para una reunión de negocios.","points":2},{"id":"q3","type":"multiple-choice","scenario":"A friend asks you where you're from. You want to answer informally.","question":"What do you say?","options":["A. I am from the United States.","B. I'm from the USA.","C. My nationality is American.","D. From America I am."],"correctAnswer":"B","explanation":"La respuesta B es informal y directa, usando la contracción 'I'm' y una forma abreviada del país, lo cual es apropiado en una conversación casual con amigos.","points":2},{"id":"q4","type":"multiple-choice","scenario":"You are introducing your friend to another person.","question":"What is the best way to do this in a friendly setting?","options":["A. Meet my friend, Tom.","B. This is my friend, Tom.","C. May I introduce you to Tom?","D. Tom is introduced by me."],"correctAnswer":"B","explanation":"La respuesta B es la más adecuada en un entorno amistoso. 'This is my friend, Tom' es una manera casual y clara de presentar a alguien.","points":2},{"id":"q5","type":"multiple-choice","scenario":"You are asked if you can speak Spanish at a school event.","question":"How do you politely say that you can speak a little?","options":["A. I speak a bit of Spanish.","B. I don't speak Spanish.","C. Yes, very well.","D. I can only speak English."],"correctAnswer":"A","explanation":"La respuesta A es la más apropiada para expresar que puedes hablar un poco de español de manera educada.","points":2},{"id":"q6","type":"multiple-choice","scenario":"You want to thank someone for introducing you to a new person.","question":"What would you say?","options":["A. Thanks for the meeting.","B. I appreciate the introduction.","C. Thanks for telling me.","D. I am introduced now."],"correctAnswer":"B","explanation":"La respuesta B es la más educada y adecuada para agradecer a alguien por una presentación.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex13',
  'a2-m1-l1',
  13,
  'word-search',
  $_$Word Search: Greetings and Introductions$_$,
  $_${"title":"Word Search: Greetings and Introductions","instructions":"Find the hidden words in the grid","words":["HELLO","GOODBYE","FRIEND","NAME","SPANISH","TWENTY","ENGLISH","FIFTY","SIXTEEN","SEVENTY","EIGHTY"],"gridSize":10,"clues":[{"word":"HELLO","clue":"A common greeting"},{"word":"GOODBYE","clue":"A word to say when leaving"},{"word":"FRIEND","clue":"Someone you know well and like"},{"word":"NAME","clue":"What you are called"},{"word":"SPANISH","clue":"Language spoken in Spain"},{"word":"TWENTY","clue":"Number after nineteen"},{"word":"ENGLISH","clue":"Language you are learning"},{"word":"FIFTY","clue":"Half of one hundred"},{"word":"SIXTEEN","clue":"Número después de quince"},{"word":"SEVENTY","clue":"Setenta en inglés"},{"word":"EIGHTY","clue":"Ochenta en inglés"}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex14',
  'a2-m1-l1',
  14,
  'crossword',
  $_$Crossword: Greetings and Introductions$_$,
  $_${"title":"Crossword: Greetings and Introductions","instructions":"Complete the crossword puzzle","items":[{"word":"FRANCE","clue":"A country in Europe","direction":"across","row":0,"col":0},{"word":"ENGLISH","clue":"Language you are learning","direction":"down","row":0,"col":5},{"word":"HELLO","clue":"A common greeting","direction":"across","row":2,"col":3},{"word":"SHE","clue":"Subject pronoun for a female","direction":"down","row":2,"col":3},{"word":"THEY","clue":"Subject pronoun for more than one person","direction":"across","row":4,"col":1},{"word":"TWENTY","clue":"The number after nineteen","direction":"down","row":4,"col":1}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex15',
  'a2-m1-l1',
  15,
  'reading-comprehension',
  $_$Meet New Friends$_$,
  $_${"title":"Meet New Friends","textPassage":"Hello! My name is Emma, and I am from Canada. I am 23 years old. I have a new friend. His name is Carlos, and he is from Spain. Carlos is 25 years old. We meet at the park every Saturday. We like to talk about our countries and families. Carlos has a sister. Her name is Lucia. She is 18 years old. Lucia is a student. She studies English at university. I am also a student. I study French. Carlos and I practice languages together. It is fun to learn new things. Sometimes, we count numbers in English and Spanish. We can count from 0 to 100. This helps us remember numbers better. We also like to greet each other in different languages. In the morning, we say 'Good morning!' or '¡Buenos días!' It is interesting to learn about different cultures and languages. We are happy to be friends.","wordCount":160,"estimatedReadingTime":2,"questions":[{"question":"What is the main idea of the passage?","options":["Emma and Carlos study at the same university.","Emma and Carlos meet to learn new languages.","Emma and Carlos travel to different countries.","Emma and Carlos are family members."],"answer":"Emma and Carlos meet to learn new languages.","explanation":"El pasaje se centra en cómo Emma y Carlos se reúnen para practicar idiomas y aprender cosas nuevas juntos."},{"question":"Where is Carlos from?","options":["Canada","Spain","France","Italy"],"answer":"Spain","explanation":"Carlos es de España, como se menciona en el pasaje."},{"question":"How old is Lucia?","options":["23 years old","18 years old","25 years old","20 years old"],"answer":"18 years old","explanation":"Lucia tiene 18 años, como se indica en el texto."},{"question":"TRUE or FALSE: Emma and Carlos practice numbers from 0 to 50.","options":["TRUE","FALSE"],"answer":"FALSE","explanation":"Emma y Carlos practican contando números del 0 al 100, no solo hasta el 50."},{"question":"What does Emma study?","options":["Spanish","French","English","History"],"answer":"French","explanation":"Emma estudia francés, como se menciona en el pasaje."},{"question":"Why do Emma and Carlos like to greet each other in different languages?","options":["To learn about different cultures","To practice math","To study science","To compete with each other"],"answer":"To learn about different cultures","explanation":"Les gusta saludar en diferentes idiomas para aprender sobre diferentes culturas."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex16',
  'a2-m1-l1',
  16,
  'pronunciation-practice',
  $_$Práctica de Pronunciación: Énfasis en la Entonación$_$,
  $_${"title":"Práctica de Pronunciación: Énfasis en la Entonación","instructions":"Practica la entonación en inglés usando las siguientes oraciones. Escucha el modelo de audio y repite cada oración en voz alta. Presta atención a la entonación utilizada para expresar diferentes emociones y significados.","targetSentences":[{"englishSentence":"Hello, my name is Anna. I'm from Spain.","spanishTranslation":"Hola, mi nombre es Anna. Soy de España.","phoneticTranscription":"həˈloʊ, maɪ neɪm ɪz ˈænə. aɪm frəm speɪn.","audioModelURL":"https://example.com/audio1","pronunciationTips":"Usa una entonación descendente al final de la oración para indicar una declaración.","focusPoints":"Entonación descendente en 'Anna' y 'Spain'.","commonMistakes":"Evitar una entonación monótona. Asegúrate de subir y bajar el tono de tu voz."},{"englishSentence":"Is this your first visit to London?","spanishTranslation":"¿Es esta tu primera visita a Londres?","phoneticTranscription":"ɪz ðɪs jɔr fɜrst ˈvɪzɪt tə ˈlʌndən?","audioModelURL":"https://example.com/audio2","pronunciationTips":"Sube la entonación al final de la oración para indicar una pregunta.","focusPoints":"Entonación ascendente en 'London'.","commonMistakes":"No termines la pregunta con un tono descendente."},{"englishSentence":"I have to go to the bank later.","spanishTranslation":"Tengo que ir al banco más tarde.","phoneticTranscription":"aɪ hæv tə goʊ tə ðə bæŋk ˈleɪtər.","audioModelURL":"https://example.com/audio3","pronunciationTips":"Mantén un tono neutral en 'bank' y un tono ligeramente ascendente en 'later'.","focusPoints":"Neutral en 'bank', ligero ascenso en 'later'.","commonMistakes":"No termines 'later' con una caída abrupta."},{"englishSentence":"We should meet at the restaurant at seven.","spanishTranslation":"Deberíamos encontrarnos en el restaurante a las siete.","phoneticTranscription":"wi ʃəd mit æt ðə ˈrɛstrənt æt ˈsɛvən.","audioModelURL":"https://example.com/audio4","pronunciationTips":"Usa una entonación estable con una ligera caída al final para enfatizar la hora.","focusPoints":"Estabilidad en 'restaurant', caída ligera en 'seven'.","commonMistakes":"Evitar un tono plano en toda la oración."},{"englishSentence":"Can you tell me where the post office is?","spanishTranslation":"¿Puedes decirme dónde está la oficina de correos?","phoneticTranscription":"kæn jʊ tɛl mi wɛr ðə poʊst ˈɔfəs ɪz?","audioModelURL":"https://example.com/audio5","pronunciationTips":"Sube la entonación al final para indicar que es una pregunta.","focusPoints":"Ascenso en 'is' al final.","commonMistakes":"Evitar una entonación plana, especialmente al final de la pregunta."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex17',
  'a2-m1-l1',
  17,
  'multiple-choice',
  $_$Greetings and Introductions: Personal Info$_$,
  $_${"title":"Greetings and Introductions: Personal Info","instructions":"Elige la opción correcta para completar cada oración.","questions":[{"id":"q1","question":"Hello! My name _____ John.","options":["A. am","B. is","C. are","D. be"],"correctAnswer":"B","explanation":"En inglés, se usa 'is' con 'name' porque 'name' es singular. 'Am' se usa solo con 'I'."},{"id":"q2","question":"They _____ from Spain.","options":["A. am","B. is","C. are","D. be"],"correctAnswer":"C","explanation":"'They' es un pronombre plural, por lo que se usa 'are'. 'Is' se usa solo con sujetos singulares."},{"id":"q3","question":"Hi! _____ you from Italy?","options":["A. Am","B. Is","C. Are","D. Be"],"correctAnswer":"C","explanation":"Para hacer preguntas con 'you', se utiliza 'are'. 'Am' se usa solo con 'I'."},{"id":"q4","question":"She _____ a student.","options":["A. am","B. is","C. are","D. be"],"correctAnswer":"B","explanation":"Con el pronombre 'she', se usa 'is' porque es tercera persona singular."},{"id":"q5","question":"Good morning! _____ name is Maria.","options":["A. My","B. Your","C. His","D. Their"],"correctAnswer":"A","explanation":"Se usa 'My' para indicar posesión cuando hablas de ti mismo. 'Your' se usa para hablar de la otra persona."},{"id":"q6","question":"We _____ teachers.","options":["A. am","B. is","C. are","D. be"],"correctAnswer":"C","explanation":"'We' es plural, por lo que se usa 'are'. 'Am' se usa solo con 'I'."},{"id":"q7","question":"_____ is Tom. He is 25 years old.","options":["A. I","B. She","C. He","D. This"],"correctAnswer":"D","explanation":"Se usa 'This' para hacer presentaciones. 'He' ya se usa en la segunda oración."},{"id":"q8","question":"They are _____ French.","options":["A. from","B. in","C. at","D. on"],"correctAnswer":"A","explanation":"Se utiliza 'from' para indicar el origen o procedencia. 'In' indica ubicación."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex18',
  'a2-m1-l1',
  18,
  'fill-blank',
  $_$Exercise$_$,
  $_${"questions":[{"sentence":"Hello, my name ________ John and I ________ from Canada.","options":["is","are","am"],"answers":["is","am"],"explanation":"La primera parte usa 'is' para 'my name' y la segunda parte usa 'am' para 'I'.","points":1},{"sentence":"This ________ Maria. She ________ a student from Spain.","options":["are","is","am"],"answers":["is","is"],"explanation":"'This' y 'She' requieren 'is' como verbo adecuado.","points":1},{"sentence":"How old ________ you? I ________ 25 years old.","options":["is","are","am"],"answers":["are","am"],"explanation":"'You' se utiliza con 'are' y 'I' se utiliza con 'am'.","points":1},{"sentence":"They ________ from Italy. Their friend ________ from Germany.","options":["are","is","am"],"answers":["are","is"],"explanation":"'They' se asocia con 'are' y 'Their friend' va con 'is'.","points":1},{"sentence":"Good morning! ________ you the new teacher?","options":["Are","Is","Am"],"answers":["Are"],"explanation":"Usamos 'Are' con 'you' en preguntas.","points":1},{"sentence":"This ________ my brother. He ________ 20 years old.","options":["is","are","am"],"answers":["is","is"],"explanation":"'This' y 'He' ambos requieren 'is' como verbo.","points":1},{"sentence":"We ________ in the same class. Our teacher ________ from Brazil.","options":["are","is","am"],"answers":["are","is"],"explanation":"'We' se usa con 'are' y 'Our teacher' con 'is'.","points":1},{"sentence":"Hi! ________ your friend from Japan?","options":["Is","Are","Am"],"answers":["Is"],"explanation":"Para 'your friend' usamos 'is'.","points":1}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex19',
  'a2-m1-l1',
  19,
  'sentence-building',
  $_$Exercise$_$,
  $_${"sentences":[{"id":1,"words":["is","David","This","."],"correctOrder":["This","is","David","."],"translation":"Este es David.","hint":"Empieza con el pronombre demostrativo 'This'.","points":2},{"id":2,"words":["am","I","from","Spain","."],"correctOrder":["I","am","from","Spain","."],"translation":"Soy de España.","hint":"Comienza con el pronombre personal 'I'.","points":2},{"id":3,"words":["are","students","They","."],"correctOrder":["They","are","students","."],"translation":"Ellos son estudiantes.","hint":"Empieza con el pronombre personal 'They'.","points":2},{"id":4,"words":["is","Maria","Italian","."],"correctOrder":["Maria","is","Italian","."],"translation":"Maria es italiana.","hint":"Comienza con el nombre propio 'Maria'.","points":2},{"id":5,"words":["twenty-five","years","old","She","is","."],"correctOrder":["She","is","twenty-five","years","old","."],"translation":"Ella tiene veinticinco años.","hint":"Empieza con el pronombre personal 'She'.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex20',
  'a2-m1-l1',
  20,
  'speaking-analysis',
  $_$Speaking Analysis: Greetings and Introductions$_$,
  $_${"title":"Speaking Analysis: Greetings and Introductions","instructions":"Choose the most appropriate option for each speaking situation","questions":[{"id":"q1","type":"multiple-choice","scenario":"You meet someone new at a party. They say, 'Hi, I'm John. Nice to meet you.'","question":"What is the most appropriate response?","options":["A) Hi, how are you?","B) Hello, my name is Anna.","C) Nice to meet you too, I'm Anna.","D) Good morning, I am Anna."],"correctAnswer":"C","explanation":"La opción C es la más adecuada porque es una respuesta directa y amistosa a la presentación de John. Se usa 'Nice to meet you too' cuando alguien dice 'Nice to meet you'.","points":2},{"id":"q2","type":"multiple-choice","scenario":"At a business meeting, your colleague introduces you to a client. You say, 'Hello, I am Maria. It's a pleasure to meet you.'","question":"Which version matches the formal register needed?","options":["A) Hey, I'm Maria. Nice to meet ya!","B) Hello, I am Maria. It's a pleasure to meet you.","C) Hi, I'm Maria. How's it going?","D) Yo, I'm Maria. What's up?"],"correctAnswer":"B","explanation":"La opción B es la más formal y adecuada para una reunión de negocios. Usa 'I am' en lugar de 'I'm' y 'It's a pleasure to meet you' es más formal que 'Nice to meet ya'.","points":2},{"id":"q3","type":"multiple-choice","scenario":"Your friend introduces you to someone from Spain. You ask, 'Where are you from?' and they respond, 'I'm from Madrid.'","question":"How should you reply to show interest?","options":["A) That's cool.","B) Nice.","C) Oh, Madrid is very beautiful!","D) Okay."],"correctAnswer":"C","explanation":"La opción C muestra interés y conocimiento sobre Madrid. Es una forma de continuar la conversación de manera positiva.","points":2},{"id":"q4","type":"multiple-choice","scenario":"You meet someone in a casual setting. They say, 'Hey, I'm from Canada.'","question":"Which phrase fits the casual context?","options":["A) I see, Canada is great.","B) Oh, that's really interesting!","C) Cool, I'm from the US.","D) Indeed, Canada is vast."],"correctAnswer":"C","explanation":"La opción C es adecuada para un contexto casual. 'Cool' es una expresión común en situaciones informales.","points":2},{"id":"q5","type":"multiple-choice","scenario":"You are in a formal meeting. Someone asks your age.","question":"Which response is most polite?","options":["A) I'm 30 years old.","B) 30.","C) I am 30.","D) I'm thirty."],"correctAnswer":"A","explanation":"La opción A es la más educada porque incluye 'years old', lo que es más formal y claro.","points":2},{"id":"q6","type":"multiple-choice","scenario":"In a phone conversation, you need to confirm someone's nationality. You ask, 'Are you American?'","question":"Which intonation pattern is correct for this yes/no question?","options":["A) Rising at the end","B) Falling at the end","C) Flat throughout","D) Rising and then falling"],"correctAnswer":"A","explanation":"Para preguntas de sí/no en inglés, es común usar una entonación ascendente al final de la oración para indicar que se espera una respuesta.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex21',
  'a2-m1-l1',
  21,
  'word-search',
  $_$Word Search: Greetings and Introductions$_$,
  $_${"title":"Word Search: Greetings and Introductions","instructions":"Find the hidden words in the grid","words":["HELLO","FRIEND","SPANISH","NUMBER","TEACHER","ITALIAN","STUDENT","TWENTY","ENGLISH","GOODBYE"],"gridSize":10,"clues":[{"word":"HELLO","clue":"A greeting in English"},{"word":"FRIEND","clue":"A person you know well and like"},{"word":"SPANISH","clue":"The nationality of someone from Spain"},{"word":"NUMBER","clue":"A word for a figure like 1, 2, or 3"},{"word":"TEACHER","clue":"Someone who helps students learn"},{"word":"ITALIAN","clue":"The nationality of someone from Italy"},{"word":"STUDENT","clue":"A person who learns at school"},{"word":"TWENTY","clue":"The number after nineteen"},{"word":"ENGLISH","clue":"The language we are learning"},{"word":"GOODBYE","clue":"A word used to say farewell"}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex22',
  'a2-m1-l1',
  22,
  'crossword',
  $_$Crossword: Greetings and Introductions$_$,
  $_${"title":"Crossword: Greetings and Introductions","instructions":"Complete the crossword puzzle","items":[{"word":"SPANISH","clue":"Nationality of someone from Spain","direction":"across","row":0,"col":0},{"word":"HELLO","clue":"A common greeting","direction":"down","row":0,"col":6},{"word":"THEY","clue":"Subject pronoun for a group of people","direction":"across","row":2,"col":4},{"word":"SIXTY","clue":"The number after fifty-nine","direction":"down","row":2,"col":4},{"word":"FRIEND","clue":"A person you like and know well","direction":"across","row":4,"col":0},{"word":"ARE","clue":"Be verb for 'you', 'we', 'they'","direction":"down","row":0,"col":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex23',
  'a2-m1-l1',
  23,
  'reading-comprehension',
  $_$Greetings and Introductions: A Simple Story$_$,
  $_${"title":"Greetings and Introductions: A Simple Story","text":"Hello! My name is Anna. I am from Spain. I am 25 years old. My friend is John. He is 27 years old and he is from the United States. We are both students at the university. Our teacher is Mrs. Brown. She is a very nice person and she is from England. In our class, there are students from different countries. Maria is 23 years old and she is from Italy. Ahmed is 30 years old and he comes from Egypt. We all enjoy learning English together. The class starts at 9:00 in the morning and ends at 11:00. After class, we often have coffee. It's nice to talk and learn about each other's cultures.","wordCount":106,"estimatedReadingTime":1,"questions":[{"question":"What is the main idea of the passage?","options":["Anna likes to play soccer.","Anna and her friends enjoy learning English.","The class is about mathematics.","John is from Spain."],"answer":"Anna and her friends enjoy learning English.","explanation":"La idea principal del pasaje es que Anna y sus amigos disfrutan aprender inglés juntos."},{"question":"Where is Anna from?","options":["Italy","United States","England","Spain"],"answer":"Spain","explanation":"Anna menciona que es de España en el texto."},{"question":"Who is 30 years old?","options":["John","Maria","Ahmed","Anna"],"answer":"Ahmed","explanation":"Ahmed tiene 30 años según el texto."},{"question":"True or False: The class ends at 12:00.","options":["True","False"],"answer":"False","explanation":"El texto indica que la clase termina a las 11:00, no a las 12:00."},{"question":"What nationality is Mrs. Brown?","options":["Spanish","American","English","Italian"],"answer":"English","explanation":"Mrs. Brown es de Inglaterra, por lo que su nacionalidad es inglesa."},{"question":"Which of the following is NOT mentioned in the text?","options":["The class starts at 9:00.","Anna and John are students.","They have coffee after class.","Maria is a teacher."],"answer":"Maria is a teacher.","explanation":"El texto menciona que Maria es estudiante, no maestra."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex24',
  'a2-m1-l1',
  24,
  'pronunciation-practice',
  $_$Práctica de Pronunciación: Estrés de Palabras$_$,
  $_${"title":"Práctica de Pronunciación: Estrés de Palabras","instructions":"Practica la pronunciación enfocándote en el estrés de palabras. Escucha cada oración y repite, prestando atención al estrés en las palabras clave.","targetSentences":[{"englishSentence":"This is an American restaurant.","spanishTranslation":"Este es un restaurante americano.","phoneticTranscription":"əˈmɛrɪkən","audioModelUrl":"https://example.com/audio1","pronunciationTips":"Pon énfasis en la sílaba 'mer' de 'American'.","focusPoints":"Estrés en 'American'.","commonMistakes":"No enfatizar 'mer' o poner énfasis en la sílaba incorrecta."},{"englishSentence":"She is a Spanish teacher.","spanishTranslation":"Ella es una profesora de español.","phoneticTranscription":"ˈspænɪʃ","audioModelUrl":"https://example.com/audio2","pronunciationTips":"Asegúrate de enfatizar la primera sílaba en 'Spanish'.","focusPoints":"Estrés en 'Spanish'.","commonMistakes":"No enfatizar correctamente la primera sílaba."},{"englishSentence":"I have twenty dollars.","spanishTranslation":"Tengo veinte dólares.","phoneticTranscription":"ˈtwɛnti","audioModelUrl":"https://example.com/audio3","pronunciationTips":"El estrés está en la primera sílaba 'twen' de 'twenty'.","focusPoints":"Estrés en 'twenty'.","commonMistakes":"Pronunciar 'twenty' con el estrés en la segunda sílaba."},{"englishSentence":"It's a lovely morning.","spanishTranslation":"Es una mañana encantadora.","phoneticTranscription":"ˈlʌvli","audioModelUrl":"https://example.com/audio4","pronunciationTips":"El estrés va en la primera sílaba 'lov' de 'lovely'.","focusPoints":"Estrés en 'lovely'.","commonMistakes":"No enfatizar la primera sílaba o dividir incorrectamente las sílabas."},{"englishSentence":"He is a Canadian citizen.","spanishTranslation":"Él es un ciudadano canadiense.","phoneticTranscription":"kəˈneɪdiən","audioModelUrl":"https://example.com/audio5","pronunciationTips":"En 'Canadian', el estrés está en la segunda sílaba 'nei'.","focusPoints":"Estrés en 'Canadian'.","commonMistakes":"Colocar el estrés en la primera o última sílaba del término."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex25',
  'a2-m1-l1',
  25,
  'multiple-choice',
  $_$Greetings and Introductions Exercise$_$,
  $_${"title":"Greetings and Introductions Exercise","instructions":"Choose the correct answer for each question.","questions":[{"id":"q1","question":"Hello! My name is Anna. _____ are you?","options":["A) How","B) What","C) Where","D) Who"],"correctAnswer":"A","explanation":"La respuesta correcta es 'How' porque es la forma adecuada de preguntar 'How are you?' en inglés, que es una manera común de saludar y preguntar cómo está alguien."},{"id":"q2","question":"This is Maria. She _____ from Spain.","options":["A) am","B) is","C) are","D) be"],"correctAnswer":"B","explanation":"'She is from Spain' es la estructura correcta en el presente simple para el pronombre 'She' y el verbo 'to be'."},{"id":"q3","question":"I have _____ friends from France.","options":["A) some","B) any","C) much","D) many"],"correctAnswer":"A","explanation":"Usamos 'some' para indicar una cantidad no especificada de amigos, lo cual es apropiado en afirmaciones positivas en inglés."},{"id":"q4","question":"Nice to meet you! How old _____ you?","options":["A) am","B) is","C) are","D) be"],"correctAnswer":"C","explanation":"La pregunta 'How old are you?' utiliza 'are' porque es el verbo 'to be' correcto para el pronombre 'you'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex26',
  'a2-m1-l1',
  26,
  'fill-blank',
  $_$Exercise$_$,
  $_${"questions":[{"context":"Maria is from Spain and she is introducing her friend.","sentence":"Maria: Hello, this ________ (be / positive) my friend, John.","options":["is","am","are"],"answers":["is"],"explanation":"We use 'is' because we are talking about a third person singular (he/she/this).","points":1},{"context":"John is stating his nationality.","sentence":"John: Hi, ________ (I / subject pronoun) am from the United States.","options":["I","You","He","She"],"answers":["I"],"explanation":"We use 'I' as the subject pronoun to refer to oneself.","points":1},{"context":"Maria wants to know John's age.","sentence":"Maria: How old ________ (be / ?) you?","options":["is","am","are"],"answers":["are"],"explanation":"We use 'are' to ask for age with the second person singular 'you'.","points":1},{"context":"John responds to Maria's question about his age.","sentence":"John: ________ (I / subject pronoun) am twenty-five years old.","options":["I","You","He","She"],"answers":["I"],"explanation":"We use 'I' to indicate the person speaking about their own age.","points":1},{"context":"John introduces his sister.","sentence":"John: She ________ (be / positive) my sister, Lisa.","options":["is","am","are"],"answers":["is"],"explanation":"We use 'is' to describe a third person singular relationship.","points":1},{"context":"Lisa talks about her nationality.","sentence":"Lisa: ________ (I / subject pronoun) am English.","options":["I","You","He","She"],"answers":["I"],"explanation":"We use 'I' to indicate the subject speaking about her nationality.","points":1},{"context":"Maria asks for John's phone number.","sentence":"Maria: What ________ (be / ?) your phone number?","options":["is","am","are"],"answers":["is"],"explanation":"We use 'is' to ask for specific information in the third person singular.","points":1},{"context":"John gives his phone number.","sentence":"John: My number ________ (be / positive) 67 89 23 45.","options":["is","am","are"],"answers":["is"],"explanation":"We use 'is' to state information about a specific singular thing.","points":1}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex27',
  'a2-m1-l1',
  27,
  'sentence-building',
  $_$Exercise$_$,
  $_${"sentences":[{"id":1,"words":["Hello","is","my","name","John","."],"correctOrder":["Hello","my","name","is","John","."],"translation":"Hola, mi nombre es John.","hint":"Comienza con el saludo seguido de la introducción del nombre.","points":2},{"id":2,"words":["She","is","from","Spain","."],"correctOrder":["She","is","from","Spain","."],"translation":"Ella es de España.","hint":"Empieza con el pronombre sujeto seguido del verbo 'be' y la nacionalidad.","points":2},{"id":3,"words":["They","are","twins","years","old","20","."],"correctOrder":["They","are","20","years","old","twins","."],"translation":"Ellos son gemelos de 20 años.","hint":"Primero el pronombre sujeto, luego el verbo 'be', edad y descripción.","points":2},{"id":4,"words":["We","are","happy","to","meet","you","."],"correctOrder":["We","are","happy","to","meet","you","."],"translation":"Estamos felices de conocerte.","hint":"Inicia con el pronombre sujeto y el verbo 'be', seguido de una emoción y propósito.","points":2},{"id":5,"words":["My","sister","is","a","teacher","."],"correctOrder":["My","sister","is","a","teacher","."],"translation":"Mi hermana es maestra.","hint":"Empieza con la relación familiar, seguido del verbo 'be' y la profesión.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex28',
  'a2-m1-l1',
  28,
  'speaking-analysis',
  $_$Speaking Analysis: Greetings and Introductions$_$,
  $_${"title":"Speaking Analysis: Greetings and Introductions","instructions":"Choose the most appropriate option for each speaking situation","questions":[{"id":"q1","type":"multiple-choice","scenario":"You meet someone for the first time at a party.","question":"How do you introduce yourself?","options":["A. Hi, I am Maria.","B. Yo, what's up?","C. Good evening, dear sir.","D. Hey, who are you?"],"correctAnswer":"A","explanation":"La opción A es apropiada porque es una presentación clara y sencilla, adecuada para cuando conoces a alguien por primera vez.","points":2},{"id":"q2","type":"multiple-choice","scenario":"You are in a meeting with a new client.","question":"What is the best way to greet them?","options":["A. Hiya, mate!","B. Hello, nice to meet you.","C. What's going on?","D. Yo, dude!"],"correctAnswer":"B","explanation":"La opción B es correcta ya que es una forma educada y profesional de saludar a un nuevo cliente.","points":2},{"id":"q3","type":"multiple-choice","scenario":"You are introducing your friend to another friend at a café.","question":"How do you do it?","options":["A. This is my best friend.","B. Meet my friend, Alex.","C. Hey, who are you?","D. Good to see you, Alex."],"correctAnswer":"B","explanation":"La opción B es la adecuada porque es una forma simple y directa de presentar a un amigo a otro.","points":2},{"id":"q4","type":"multiple-choice","scenario":"You are greeting a colleague in the morning at the office.","question":"What do you say?","options":["A. Good morning!","B. What's up, bro?","C. See you later.","D. Bye!"],"correctAnswer":"A","explanation":"La opción A es apropiada porque 'Good morning' es un saludo común y profesional para la mañana.","points":2},{"id":"q5","type":"multiple-choice","scenario":"You meet someone from Spain and want to ask about their nationality.","question":"How do you ask?","options":["A. Are you Spain?","B. You are Spanish?","C. Are you Spanish?","D. You from Spain?"],"correctAnswer":"C","explanation":"La opción C es la correcta porque utiliza la estructura gramatical correcta para preguntar sobre la nacionalidad.","points":2},{"id":"q6","type":"multiple-choice","scenario":"You are saying goodbye to a friend.","question":"What do you say?","options":["A. Hello!","B. See you later!","C. Good morning!","D. How do you do?"],"correctAnswer":"B","explanation":"La opción B es correcta porque 'See you later' es una forma común y amistosa de despedirse.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex29',
  'a2-m1-l1',
  29,
  'word-search',
  $_$Word Search: Greetings and Introductions$_$,
  $_${"title":"Word Search: Greetings and Introductions","instructions":"Find the hidden words in the grid","words":["HELLO","GOODBYE","FRIEND","TEACHER","STUDENT","AMERICAN","SPANISH","FRENCH","TWENTY","SIXTY"],"gridSize":10,"clues":[{"word":"HELLO","clue":"A common greeting in English"},{"word":"GOODBYE","clue":"A word used when leaving"},{"word":"FRIEND","clue":"Someone you know well and like"},{"word":"TEACHER","clue":"A person who helps you learn"},{"word":"STUDENT","clue":"Someone who is learning"},{"word":"AMERICAN","clue":"A person from the USA"},{"word":"SPANISH","clue":"A person from Spain"},{"word":"FRENCH","clue":"A person from France"},{"word":"TWENTY","clue":"The number after nineteen"},{"word":"SIXTY","clue":"The number after fifty-nine"}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex30',
  'a2-m1-l1',
  30,
  'crossword',
  $_$Crossword: Greetings and Introductions$_$,
  $_${"title":"Crossword: Greetings and Introductions","instructions":"Complete the crossword puzzle","items":[{"word":"SPANISH","clue":"Language spoken in Spain","direction":"across","row":0,"col":0},{"word":"HELLO","clue":"A common greeting in English","direction":"down","row":0,"col":6},{"word":"THEY","clue":"Subject pronoun for a group of people","direction":"across","row":2,"col":4},{"word":"JAPANESE","clue":"Nationality of someone from Japan","direction":"across","row":4,"col":0}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex31',
  'a2-m1-l1',
  31,
  'reading-comprehension',
  $_$Meeting New Friends$_$,
  $_${"title":"Meeting New Friends","text":"Anna is from Germany, and she is 25 years old. She is in a new city for work. On her first day, she meets people from different countries. \"Hello, I am Anna,\" she says with a smile. \"Nice to meet you,\" says a young man. \"I am Tom, and I am from the United States.\" Anna and Tom talk about their work and hobbies. Later, they meet Sarah. \"Hi, I am Sarah,\" she says. \"I am from Australia.\" Sarah is 30 years old, and she works in marketing. Anna, Tom, and Sarah go to a café. They order coffee and talk about their countries. \"Germany is beautiful,\" says Tom. \"Yes,\" Anna replies, \"and the food is delicious.\" Sarah talks about Australia and the beaches there. They all enjoy their time together and plan to meet again. They exchange phone numbers. Anna is happy to have new friends in the city.","wordCount":153,"estimatedReadingTime":2,"questions":[{"question":"What is the main idea of the passage?","options":["Anna is learning English.","Anna is meeting new people in a new city.","Anna is visiting her family.","Anna is working in her home country."],"answer":"Anna is meeting new people in a new city.","explanation":"El pasaje trata sobre cómo Anna conoce a nuevas personas en una ciudad nueva. No se menciona que esté aprendiendo inglés o visitando a su familia."},{"question":"Where is Anna from?","options":["Australia","The United States","Germany","Canada"],"answer":"Germany","explanation":"El texto menciona que Anna es de Alemania."},{"question":"How old is Sarah?","options":["25","30","35","40"],"answer":"30","explanation":"Sarah tiene 30 años según lo que se menciona en el texto."},{"question":"What do Anna, Tom, and Sarah do together?","options":["They go to a museum.","They go to a café.","They visit a beach.","They watch a movie."],"answer":"They go to a café.","explanation":"El texto dice que Anna, Tom, y Sarah van a un café juntos."},{"question":"What does Tom say about Germany?","options":["It is very cold.","The cities are big.","It is beautiful.","The food is spicy."],"answer":"It is beautiful.","explanation":"Tom menciona que Alemania es hermosa."},{"question":"TRUE/FALSE: Anna and her new friends exchange phone numbers.","answer":"TRUE","explanation":"El texto dice que intercambian números de teléfono, lo que indica que es verdadero."},{"question":"What is NOT mentioned about Sarah?","options":["Her age","Her job","Her favorite food","Her nationality"],"answer":"Her favorite food","explanation":"El texto menciona la edad, el trabajo y la nacionalidad de Sarah, pero no menciona su comida favorita."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex32',
  'a2-m1-l1',
  32,
  'pronunciation-practice',
  $_$Practica de Pronunciación: Estrés de Palabras$_$,
  $_${"title":"Practica de Pronunciación: Estrés de Palabras","instructions":"Practica la pronunciación de las siguientes oraciones enfocándote en el estrés de las palabras. Escucha el modelo de audio y repite después de cada oración.","targetSentences":[{"english":"Hello, my name is Anna.","spanish":"Hola, mi nombre es Anna.","phonetic":"həˈloʊ, maɪ neɪm ɪz ˈænə.","audioModelUrl":"https://example.com/audio1","pronunciationTips":"Enfoca el estrés en 'name' y 'Anna'.","focusPoints":"Palabras importantes al presentarse.","commonMistakes":"No omitas el estrés en 'name'."},{"english":"I am from Mexico.","spanish":"Soy de México.","phonetic":"aɪ æm frəm ˈmɛksɪˌkoʊ.","audioModelUrl":"https://example.com/audio2","pronunciationTips":"Coloca el estrés en 'Mexico'.","focusPoints":"Nacionalidades y países.","commonMistakes":"No digas 'Mexico' sin el estrés adecuado."},{"english":"This is my friend, John.","spanish":"Este es mi amigo, John.","phonetic":"ðɪs ɪz maɪ frɛnd, ʤɑn.","audioModelUrl":"https://example.com/audio3","pronunciationTips":"El estrés debe estar en 'friend' y 'John'.","focusPoints":"Presentar a otros.","commonMistakes":"Evita el estrés en 'this'."},{"english":"She is twenty-five years old.","spanish":"Ella tiene veinticinco años.","phonetic":"ʃi ɪz ˈtwɛnti faɪv jɪrz oʊld.","audioModelUrl":"https://example.com/audio4","pronunciationTips":"Enfatiza 'twenty-five'.","focusPoints":"Números y edades.","commonMistakes":"No reduzcas el estrés en 'five'."},{"english":"I live in a small apartment.","spanish":"Vivo en un apartamento pequeño.","phonetic":"aɪ lɪv ɪn ə smɔl əˈpɑrtmənt.","audioModelUrl":"https://example.com/audio5","pronunciationTips":"Coloca el estrés en 'small' y 'apartment'.","focusPoints":"Tamaño de lugares.","commonMistakes":"No olvides el estrés en 'apartment'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex33',
  'a2-m1-l1',
  33,
  'multiple-choice',
  $_$Greetings and Introductions Exercise$_$,
  $_${"title":"Greetings and Introductions Exercise","instructions":"Seleccione la opción correcta para completar cada oración.","questions":[{"id":"q1","question":"Hello! I ___ Maria. Nice to meet you.","options":["A. is","B. am","C. are","D. be"],"correctAnswer":"B","explanation":"La respuesta correcta es 'am' porque usamos 'am' con el pronombre 'I'."},{"id":"q2","question":"This is John. ___ is from Canada.","options":["A. He","B. She","C. They","D. It"],"correctAnswer":"A","explanation":"La respuesta correcta es 'He' porque 'John' es un nombre masculino y usamos 'he' para referirse a él."},{"id":"q3","question":"Good morning! How ___ you?","options":["A. is","B. are","C. am","D. be"],"correctAnswer":"B","explanation":"La respuesta correcta es 'are' porque se usa con el pronombre 'you'."},{"id":"q4","question":"Anna and Mike ___ from Spain.","options":["A. is","B. am","C. are","D. be"],"correctAnswer":"C","explanation":"La respuesta correcta es 'are' porque 'Anna and Mike' son dos personas, por lo tanto usamos 'are' para el plural."},{"id":"q5","question":"What is his nationality? ___ is French.","options":["A. He","B. She","C. They","D. We"],"correctAnswer":"A","explanation":"La respuesta correcta es 'He' porque estamos hablando de una persona masculina."},{"id":"q6","question":"Hi! ___ name is Tom.","options":["A. My","B. I","C. Their","D. Our"],"correctAnswer":"A","explanation":"La respuesta correcta es 'My' porque estamos hablando de 'mi' nombre, que en inglés es 'my'."},{"id":"q7","question":"How old are you? I ___ twenty years old.","options":["A. is","B. am","C. are","D. be"],"correctAnswer":"B","explanation":"La respuesta correcta es 'am' porque se usa con el pronombre 'I'."},{"id":"q8","question":"Where is she from? ___ is from Italy.","options":["A. We","B. They","C. She","D. He"],"correctAnswer":"C","explanation":"La respuesta correcta es 'She' porque estamos hablando de una persona femenina."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex34',
  'a2-m1-l1',
  34,
  'fill-blank',
  $_$Exercise$_$,
  $_${"questions":[{"sentence":"Hello, my name ___ Maria.","options":["am","is","are"],"answer":"is","explanation":"Usamos 'is' porque estamos hablando de una tercera persona singular. 'My name' se refiere a 'it', así que usamos 'is'.","points":1},{"sentence":"I ___ from Spain.","options":["is","am","are"],"answer":"am","explanation":"Usamos 'am' con el pronombre 'I'. Siempre va acompañado de 'am' en el presente simple.","points":1},{"sentence":"They ___ friends from Italy.","options":["is","are","am"],"answer":"are","explanation":"'They' es plural, así que usamos 'are' para el presente simple del verbo 'be'.","points":1},{"sentence":"Good morning! How ___ you today?","options":["am","is","are"],"answer":"are","explanation":"Usamos 'are' con 'you' en preguntas y afirmaciones en presente simple.","points":1},{"sentence":"This ___ my friend, Tom.","options":["am","are","is"],"answer":"is","explanation":"Usamos 'is' porque 'this' se refiere a un objeto o persona singular en presente simple.","points":1},{"sentence":"We ___ in class number 25.","options":["is","am","are"],"answer":"are","explanation":"'We' es plural, así que usamos 'are' para el presente simple del verbo 'be'.","points":1},{"sentence":"She ___ from Germany.","options":["is","am","are"],"answer":"is","explanation":"'She' es tercera persona singular, por lo tanto usamos 'is' en presente simple.","points":1},{"sentence":"It ___ ten o'clock now.","options":["am","is","are"],"answer":"is","explanation":"Usamos 'is' para hablar de la hora actual. 'It' se refiere al tiempo, que es singular.","points":1}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex35',
  'a2-m1-l1',
  35,
  'sentence-building',
  $_$Exercise$_$,
  $_${"sentences":[{"id":1,"words":["I","am","teacher","a","."],"correctOrder":["I","am","a","teacher","."],"translation":"Soy un profesor.","hint":"Usa el verbo 'be' y 'a/an' para profesiones.","points":2},{"id":2,"words":["She","is","from","Spain","."],"correctOrder":["She","is","from","Spain","."],"translation":"Ella es de España.","hint":"Sujeto seguido del verbo 'be' para nacionalidades.","points":2},{"id":3,"words":["They","are","students","."],"correctOrder":["They","are","students","."],"translation":"Ellos son estudiantes.","hint":"Sujeto plural con el verbo 'be'.","points":2},{"id":4,"words":["He","is","thirty","years","old","."],"correctOrder":["He","is","thirty","years","old","."],"translation":"Él tiene treinta años.","hint":"Edad con el verbo 'be'.","points":2},{"id":5,"words":["We","are","friends","."],"correctOrder":["We","are","friends","."],"translation":"Somos amigos.","hint":"Sujeto plural con el verbo 'be'.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex36',
  'a2-m1-l1',
  36,
  'speaking-analysis',
  $_$Speaking Analysis: Greetings and Introductions$_$,
  $_${"title":"Speaking Analysis: Greetings and Introductions","instructions":"Choose the most appropriate option for each speaking situation","questions":[{"id":"q1","type":"multiple-choice","scenario":"You meet someone new at a party.","question":"Which is the most appropriate greeting?","options":["Hello, what's up?","Hey, how are you?","Good morning, how do you do?","Hi, nice to meet you!"],"correctAnswer":"Hi, nice to meet you!","explanation":"En una situación donde conoces a alguien nuevo, 'Hi, nice to meet you!' es una forma apropiada y educada de saludar.","points":2},{"id":"q2","type":"multiple-choice","scenario":"You're introducing your friend to your parents.","question":"Which introduction is most formal?","options":["This is my buddy, John.","Hey, meet John!","I'd like you to meet John.","Here's John."],"correctAnswer":"I'd like you to meet John.","explanation":"'I'd like you to meet John.' es una introducción formal y respetuosa, adecuada para presentar a alguien a tus padres.","points":2},{"id":"q3","type":"multiple-choice","scenario":"You are trying to remember how to say a number in English.","question":"How do you say 87?","options":["Eighty-seven","Eighty-eight","Seventy-eight","Eighty-seven"],"correctAnswer":"Eighty-seven","explanation":"El número 87 se dice 'eighty-seven' en inglés.","points":2},{"id":"q4","type":"multiple-choice","scenario":"You're speaking to a friend who is from Spain.","question":"How do you ask about their nationality?","options":["Where is you from?","You are Spanish?","Are you Spanish?","Is you Spanish?"],"correctAnswer":"Are you Spanish?","explanation":"Para preguntar sobre la nacionalidad, 'Are you Spanish?' es la estructura gramatical correcta.","points":2},{"id":"q5","type":"multiple-choice","scenario":"You want to say goodbye to someone you just met.","question":"What is a polite way to end the conversation?","options":["See you later!","Bye!","It was nice meeting you, goodbye!","Catch you later!"],"correctAnswer":"It was nice meeting you, goodbye!","explanation":"Para terminar una conversación de manera educada, 'It was nice meeting you, goodbye!' es apropiado.","points":2},{"id":"q6","type":"multiple-choice","scenario":"You're in a meeting and need to confirm someone's name.","question":"How do you ask for clarification politely?","options":["What is your name?","Who are you?","Could you tell me your name again, please?","Say your name?"],"correctAnswer":"Could you tell me your name again, please?","explanation":"Para pedir aclaración de manera educada, 'Could you tell me your name again, please?' es la opción más adecuada.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex37',
  'a2-m1-l1',
  37,
  'word-search',
  $_$Word Search: Greetings and Introductions$_$,
  $_${"title":"Word Search: Greetings and Introductions","instructions":"Find the hidden words in the grid","words":["HELLO","GOODBYE","FRIEND","TEACHER","STUDENT","AMERICAN","SPANISH","SIXTY","NINETY","LANGUAGE"],"gridSize":10,"clues":[{"word":"HELLO","clue":"A common greeting"},{"word":"GOODBYE","clue":"A word you say when leaving"},{"word":"FRIEND","clue":"A person you like to spend time with"},{"word":"TEACHER","clue":"A person who helps you learn"},{"word":"STUDENT","clue":"A person who learns in a classroom"},{"word":"AMERICAN","clue":"Someone from the USA"},{"word":"SPANISH","clue":"Someone from Spain"},{"word":"SIXTY","clue":"The number after fifty-nine"},{"word":"NINETY","clue":"The number before one hundred"},{"word":"LANGUAGE","clue":"What we use to communicate"}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex38',
  'a2-m1-l1',
  38,
  'crossword',
  $_$Crossword: Greetings and Introductions$_$,
  $_${"title":"Crossword: Greetings and Introductions","instructions":"Complete the crossword puzzle","items":[{"word":"SPANISH","clue":"A person from Spain","direction":"across","row":0,"col":0},{"word":"HELLO","clue":"A common greeting","direction":"down","row":0,"col":6},{"word":"GOODBYE","clue":"A farewell expression","direction":"across","row":4,"col":0},{"word":"ITALIAN","clue":"A person from Italy","direction":"down","row":0,"col":5}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex39',
  'a2-m1-l1',
  39,
  'reading-comprehension',
  $_$Greetings and Introductions$_$,
  $_${"title":"Greetings and Introductions","textPassage":"Hello! My name is Anna. I am from Spain, and I am 20 years old. This is my friend, Tom. He is from France, and he is 22. We are in a language school in London. Our teacher is Mr. Johnson. He is very nice and helps us a lot. In our class, there are students from many countries. Maria is from Italy, and she is 19. John is from the United States, and he is 21. We all speak English together. We often say, 'Hello!' and 'How are you?' to each other. It is fun to learn about different cultures and languages. We like to count numbers from 0 to 100 in different languages. Today, Maria taught us how to say numbers in Italian. We are a happy group, and we enjoy our time in London.","wordCount":129,"estimatedReadingTime":1,"questions":[{"question":"What is the main idea of the passage?","options":["Anna is learning Spanish.","Students are learning languages in London.","Tom is from Spain.","Mr. Johnson is a student."],"answer":"Students are learning languages in London.","explanation":"El pasaje describe cómo Anna y sus amigos están aprendiendo idiomas en una escuela de idiomas en Londres."},{"question":"Where is Anna from?","options":["Italy","Spain","France","United States"],"answer":"Spain","explanation":"Anna es de España, como se menciona al principio del pasaje."},{"question":"Tom is from _____.","options":["Italy","France","Spain","United States"],"answer":"France","explanation":"El texto dice que Tom es de Francia."},{"question":"What is true about Mr. Johnson?","options":["He is a student.","He is from Italy.","He is a teacher.","He is 22 years old."],"answer":"He is a teacher.","explanation":"Mr. Johnson es el maestro mencionado en el pasaje."},{"question":"How many students are mentioned in the text?","options":["Two","Three","Four","Five"],"answer":"Four","explanation":"Se mencionan cuatro estudiantes: Anna, Tom, Maria y John."},{"question":"True or False: Maria is 21 years old.","options":["True","False"],"answer":"False","explanation":"Maria tiene 19 años, como se menciona en el texto."},{"question":"What language did Maria teach the numbers in?","options":["Spanish","French","Italian","English"],"answer":"Italian","explanation":"Maria enseñó cómo decir los números en italiano, según el texto."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex40',
  'a2-m1-l1',
  40,
  'pronunciation-practice',
  $_$Práctica de Pronunciación: Introducciones Personales$_$,
  $_${"title":"Práctica de Pronunciación: Introducciones Personales","instructions":"Practica la pronunciación de las frases enfocándote en el estrés de la oración. Escucha el modelo de audio para cada frase y repite varias veces.","targetSentences":[{"english":"Hello, my name is Alice.","spanish":"Hola, mi nombre es Alice.","phonetic":"həˈloʊ, maɪ neɪm ɪz ˈælɪs","audioModelUrl":"https://example.com/audio1","pronunciationTips":"Asegúrate de enfatizar 'Hello' al comenzar la oración.","focusPoints":"word stress on 'Hello'","commonMistakes":"No dejes caer el tono después de 'Hello'."},{"english":"I am from Spain.","spanish":"Soy de España.","phonetic":"aɪ æm frəm speɪn","audioModelUrl":"https://example.com/audio2","pronunciationTips":"Enfatiza 'Spain' al final de la oración.","focusPoints":"sentence stress on 'Spain'","commonMistakes":"No pronuncies 'Spain' como 'Spayn'."},{"english":"I am twenty years old.","spanish":"Tengo veinte años.","phonetic":"aɪ æm ˈtwɛnti jɪrz oʊld","audioModelUrl":"https://example.com/audio3","pronunciationTips":"Enfoca en el número 'twenty' para una pronunciación clara.","focusPoints":"word stress on 'twenty'","commonMistakes":"Evita decir 'twenti' en lugar de 'twenty'."},{"english":"Nice to meet you.","spanish":"Encantado de conocerte.","phonetic":"naɪs tə miːt juː","audioModelUrl":"https://example.com/audio4","pronunciationTips":"Mantén un tono amistoso y asegura un énfasis suave en 'meet'.","focusPoints":"sentence stress on 'meet'","commonMistakes":"No te apresures al decir 'meet'."},{"english":"She is a doctor.","spanish":"Ella es doctora.","phonetic":"ʃiː ɪz ə ˈdɒktər","audioModelUrl":"https://example.com/audio5","pronunciationTips":"Pon el énfasis en 'doctor' para claridad.","focusPoints":"sentence stress on 'doctor'","commonMistakes":"No reduzcas 'doctor' a 'doktər'."},{"english":"He is from Italy.","spanish":"Él es de Italia.","phonetic":"hiː ɪz frəm ˈɪtəli","audioModelUrl":"https://example.com/audio6","pronunciationTips":"Asegúrate de pronunciar claramente 'Italy' con énfasis.","focusPoints":"sentence stress on 'Italy'","commonMistakes":"No digas 'Itali' en lugar de 'Italy'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex41',
  'a2-m1-l1',
  41,
  'multiple-choice',
  $_$Greetings and Introductions Exercise$_$,
  $_${"title":"Greetings and Introductions Exercise","instructions":"Selecciona la respuesta correcta para cada pregunta. Usa tu conocimiento sobre present simple con el verbo 'be', pronombres de sujeto, saludos, nacionalidades y números del 0 al 100.","questions":[{"id":"q1","question":"Hello! _______ Maria from Spain.","options":["A) I am","B) She are","C) We is","D) They am"],"correctAnswer":"A","explanation":"La respuesta correcta es 'I am' porque usamos 'am' con el pronombre 'I'. 'She are', 'We is', y 'They am' son incorrectas porque no concuerdan con los pronombres respectivos."},{"id":"q2","question":"Good morning! _______ John and this is my friend, Lucy.","options":["A) He is","B) I am","C) They are","D) She is"],"correctAnswer":"B","explanation":"La respuesta correcta es 'I am' porque el hablante se está presentando. 'He is', 'They are', y 'She is' son incorrectas porque no reflejan al hablante que se presenta."},{"id":"q3","question":"Hi! My name is Tom. _______ French.","options":["A) I am","B) He are","C) We am","D) They is"],"correctAnswer":"A","explanation":"La respuesta correcta es 'I am' porque 'am' se usa con 'I'. 'He are', 'We am', y 'They is' no son formas correctas del verbo 'be' para esos pronombres."},{"id":"q4","question":"Hello! _______ you from Italy?","options":["A) Is","B) Are","C) Am","D) Be"],"correctAnswer":"B","explanation":"La respuesta correcta es 'Are' porque se utiliza 'are' para formar preguntas con 'you'. 'Is', 'Am', y 'Be' no son correctos en esta estructura."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex42',
  'a2-m1-l1',
  42,
  'fill-blank',
  $_$Exercise$_$,
  $_${"questions":[{"sentence":"Hello! I ________ (be / positive) Anna and I ________ (be / positive) from Spain.","options":["am","is","are"],"answers":["am","am"],"explanation":"We use 'am' with the pronoun 'I' to introduce ourselves.","points":1},{"sentence":"This ________ (be / positive) my friend, Tom. He ________ (be / positive) from Italy.","options":["is","am","are"],"answers":["is","is"],"explanation":"We use 'is' with 'this' and 'he' for third person singular.","points":1},{"sentence":"Hi, I would like ________ (to / preposition) introduce you ________ (to / preposition) my brother.","options":["to","for","at"],"answers":["to","to"],"explanation":"The phrase is 'would like to introduce someone to someone'.","points":1},{"sentence":"We ________ (be / positive) from France and we ________ (speak / positive) French.","options":["are","is","am","speak","speaks"],"answers":["are","speak"],"explanation":"We use 'are' with 'we', and 'speak' for plural subjects in present simple.","points":1},{"sentence":"Sarah ________ (be / positive) 27 years old and she ________ (be / positive) a teacher.","options":["is","am","are"],"answers":["is","is"],"explanation":"We use 'is' with 'she' for age and professions.","points":1},{"sentence":"They ________ (be / positive) very friendly and they ________ (come / positive) from Germany.","options":["are","is","am","come","comes"],"answers":["are","come"],"explanation":"We use 'are' and 'come' with the plural pronoun 'they'.","points":1},{"sentence":"My teacher ________ (be / positive) British and she ________ (teach / positive) English.","options":["is","am","are","teaches","teach"],"answers":["is","teaches"],"explanation":"'My teacher' is singular, so we use 'is' and 'teaches' (third person singular -s).","points":1},{"sentence":"I ________ (be / positive) 20 years old. How old ________ (be / ?) you?","options":["am","is","are"],"answers":["am","are"],"explanation":"We use 'am' with 'I' and 'are' with 'you'.","points":1}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex43',
  'a2-m1-l1',
  43,
  'sentence-building',
  $_$Exercise$_$,
  $_${"sentences":[{"id":1,"words":["is","she","teacher","a","."],"correctOrder":["She","is","a","teacher","."],"translation":"Ella es profesora.","hint":"Subject + be + a/an + profession.","points":2},{"id":2,"words":["from","are","they","France","?"],"correctOrder":["Are","they","from","France","?"],"translation":"¿Son ellos de Francia?","hint":"Be + subject + from + country?","points":2},{"id":3,"words":["am","I","years","25","old","."],"correctOrder":["I","am","25","years","old","."],"translation":"Tengo 25 años.","hint":"Subject + be + age + years old.","points":2},{"id":4,"words":["name","is","my","Maria","."],"correctOrder":["My","name","is","Maria","."],"translation":"Mi nombre es María.","hint":"Possessive + noun + be + name.","points":2},{"id":5,"words":["meet","to","nice","you","."],"correctOrder":["Nice","to","meet","you","."],"translation":"Encantado de conocerte.","hint":"Common greeting phrase.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex44',
  'a2-m1-l1',
  44,
  'speaking-analysis',
  $_$Speaking Analysis: Greetings and Introductions$_$,
  $_${"title":"Speaking Analysis: Greetings and Introductions","instructions":"Choose the most appropriate option for each speaking situation","questions":[{"id":"q1","type":"multiple-choice","scenario":"You meet a new colleague at work for the first time.","question":"How do you introduce yourself?","options":["A. Hi, I am John.","B. Yo, I'm John!","C. Hello, John's me.","D. Hey, it's John."],"correctAnswer":"A","explanation":"Option A is correct. We use \"Hi, I am John\" to introduce ourselves simply and clearly.","points":2},{"id":"q2","type":"multiple-choice","scenario":"You are at a formal business meeting.","question":"How do you greet the group?","options":["A. Hey everyone!","B. Hi folks!","C. Good morning, everyone.","D. What's up, team?"],"correctAnswer":"C","explanation":"Option C is correct. In a formal context, \"Good morning, everyone.\" is appropriate.","points":2},{"id":"q3","type":"multiple-choice","scenario":"A friend introduces you to their parents.","question":"What do you say?","options":["A. Nice to meet you!","B. How's it going?","C. Long time no see!","D. What's happening?"],"correctAnswer":"A","explanation":"Option A is correct. \"Nice to meet you!\" is a polite way to meet a friend's parents.","points":2},{"id":"q4","type":"multiple-choice","scenario":"You need to ask someone about their nationality politely.","question":"How do you ask?","options":["A. Where you from?","B. You from where?","C. What is your nationality?","D. Where are you from?"],"correctAnswer":"D","explanation":"Option D is correct. \"Where are you from?\" is a polite and grammatically correct question.","points":2},{"id":"q5","type":"multiple-choice","scenario":"You didn't hear someone's name.","question":"How do you ask them to repeat it politely?","options":["A: What?","B: Say it again.","C: I'm sorry, could you repeat your name?","D: Name again?"],"correctAnswer":"C","explanation":"Option C is correct. It is the most polite way to ask for repetition.","points":2}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex45',
  'a2-m1-l1',
  45,
  'word-search',
  $_$Word Search: Greetings and Introductions$_$,
  $_${"title":"Word Search: Greetings and Introductions","instructions":"Find the hidden words in the grid","words":["HELLO","GOODBYE","FRIEND","SPAIN","AMERICAN","THIRTEEN","SIXTEEN","EIGHTY","STUDENT","TEACHER"],"gridSize":10,"clues":[{"word":"HELLO","clue":"A common greeting"},{"word":"GOODBYE","clue":"A word used when leaving"},{"word":"FRIEND","clue":"Someone you know and like"},{"word":"SPAIN","clue":"A country in Europe"},{"word":"AMERICAN","clue":"Someone from the USA"},{"word":"THIRTEEN","clue":"Number after twelve"},{"word":"SIXTEEN","clue":"Number after fifteen"},{"word":"EIGHTY","clue":"Number after seventy-nine"},{"word":"STUDENT","clue":"A person who studies"},{"word":"TEACHER","clue":"A person who teaches"}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex46',
  'a2-m1-l1',
  46,
  'crossword',
  $_$Crossword: Greetings and Introductions$_$,
  $_${"title":"Crossword: Greetings and Introductions","instructions":"Complete the crossword puzzle","items":[{"word":"FRENCH","clue":"Nationality of someone from France","direction":"across","row":0,"col":0},{"word":"HELLO","clue":"A common greeting","direction":"down","row":0,"col":5},{"word":"GOODBYE","clue":"A word used when leaving","direction":"across","row":5,"col":0},{"word":"STUDENT","clue":"A person who learns","direction":"down","row":0,"col":0}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex47',
  'a2-m1-l1',
  47,
  'reading-comprehension',
  $_$Greetings and Introductions$_$,
  $_${"title":"Greetings and Introductions","textPassage":"Hello! My name is Sarah, and I am from Canada. I am a teacher. I have a friend named Alex. He is from Spain, and he is a photographer. We often meet new people at work. When we greet someone, we say 'Hello' or 'Hi'. If we meet someone for the first time, we say 'Nice to meet you'. I work in a school with students from different countries. They are from France, Japan, and Italy. Alex and I have a group of 12 students. The youngest student is 7 years old, and the oldest is 10. We enjoy learning about their cultures and sharing our own. When we say goodbye, we often say 'See you later' or 'Goodbye'.","wordCount":111,"estimatedReadingTime":2,"questions":[{"question":"What is the main idea of the passage?","options":["Sarah and Alex work together.","Sarah and Alex like meeting new people.","Sarah and Alex only teach Canadian students.","Sarah is a student in Canada."],"correctAnswer":"Sarah and Alex like meeting new people.","explanation":"El pasaje se centra en cómo Sarah y Alex disfrutan conocer gente nueva a través de su trabajo."},{"question":"Where is Alex from?","options":["Canada","Italy","Spain","France"],"correctAnswer":"Spain","explanation":"El texto menciona que Alex es de España."},{"question":"What is Alex's job?","options":["Teacher","Photographer","Student","Doctor"],"correctAnswer":"Photographer","explanation":"Alex es fotógrafo según el texto."},{"question":"True or False: Sarah and Alex have students from only one country.","options":["True","False"],"correctAnswer":"False","explanation":"Los estudiantes de Sarah y Alex son de diferentes países: Francia, Japón e Italia."},{"question":"How do Sarah and Alex greet someone for the first time?","options":["Hello","Hi","Nice to meet you","Goodbye"],"correctAnswer":"Nice to meet you","explanation":"Cuando conocen a alguien por primera vez, dicen 'Nice to meet you'."},{"question":"What is NOT mentioned about the students?","options":["Their nationalities","Their ages","Their hobbies","The number of students"],"correctAnswer":"Their hobbies","explanation":"El texto no menciona los pasatiempos de los estudiantes."},{"question":"What is the tone of the passage?","options":["Formal","Friendly","Angry","Sad"],"correctAnswer":"Friendly","explanation":"El tono es amigable ya que habla de conocer gente y compartir culturas."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex48',
  'a2-m1-l1',
  48,
  'pronunciation-practice',
  $_$Práctica de pronunciación: Enfoque en el estrés de las palabras$_$,
  $_${"title":"Práctica de pronunciación: Enfoque en el estrés de las palabras","instructions":"Practica la pronunciación enfocándote en el estrés de las palabras. Escucha los ejemplos y repite cada oración. Presta atención al estrés de las palabras resaltadas.","targetSentences":[{"sentence":"This is a beautiful hotel.","translation":"Este es un hotel hermoso.","phoneticTranscription":"ˈbjuːtəfəl ˈhoʊˌtɛl","audioModelURL":"https://example.com/audio1","pronunciationTips":"Emphasize the first syllable in 'beautiful' and the second syllable in 'hotel'.","focusPoints":"Stress on 'beautiful' and 'hotel'.","commonMistakes":"Avoid stressing the second syllable in 'beautiful'."},{"sentence":"She is from Argentina.","translation":"Ella es de Argentina.","phoneticTranscription":"ɑːrʤənˈtiːnə","audioModelURL":"https://example.com/audio2","pronunciationTips":"Focus on the stress on the third syllable in 'Argentina'.","focusPoints":"Stress on 'Argentina'.","commonMistakes":"Do not stress the first or last syllables."},{"sentence":"He speaks English very well.","translation":"Él habla inglés muy bien.","phoneticTranscription":"ˈɪŋɡlɪʃ","audioModelURL":"https://example.com/audio3","pronunciationTips":"The stress is on the first syllable of 'English'.","focusPoints":"Stress on 'English'.","commonMistakes":"Avoid stressing the second syllable in 'English'."},{"sentence":"They will visit London soon.","translation":"Ellos visitarán Londres pronto.","phoneticTranscription":"ˈlʌndən","audioModelURL":"https://example.com/audio4","pronunciationTips":"Focus on stressing the first syllable in 'London'.","focusPoints":"Stress on 'London'.","commonMistakes":"Do not stress the second syllable in 'London'."},{"sentence":"I have twenty friends.","translation":"Tengo veinte amigos.","phoneticTranscription":"ˈtwɛnti","audioModelURL":"https://example.com/audio5","pronunciationTips":"Emphasize the first syllable in 'twenty'.","focusPoints":"Stress on 'twenty'.","commonMistakes":"Avoid stressing the second syllable in 'twenty'."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex49',
  'a2-m1-l1',
  49,
  'multiple-choice',
  $_$Greetings and Introductions$_$,
  $_${"title":"Greetings and Introductions","instructions":"Elige la respuesta correcta para cada pregunta sobre saludos, presentaciones y nacionalidades.","questions":[{"id":"q1","question":"Hi! My name ____ Anna. I ____ from Italy.","options":["A) am / is","B) are / are","C) is / am","D) am / am"],"correctAnswer":"D","explanation":"La respuesta correcta es 'am / am'. 'Am' es la forma correcta del verbo 'be' para 'I'."},{"id":"q2","question":"Hello! ____ you Mr. Smith? ____ you from England?","options":["A) Am / Is","B) Are / Are","C) Is / Are","D) Are / Am"],"correctAnswer":"B","explanation":"La respuesta correcta es 'Are / Are'. Usamos 'Are' con 'you' tanto en preguntas como en afirmaciones."},{"id":"q3","question":"Good morning! This ____ my friend, John. He ____ from Canada.","options":["A) is / is","B) am / are","C) is / are","D) are / is"],"correctAnswer":"A","explanation":"La respuesta correcta es 'is / is'. 'This' va con 'is' y 'he' también va con 'is' en presente simple."},{"id":"q4","question":"Hi! We ____ students. We ____ from Spain.","options":["A) is / are","B) are / are","C) are / is","D) is / is"],"correctAnswer":"B","explanation":"La respuesta correcta es 'are / are'. Usamos 'are' para 'we' en afirmaciones en presente simple."}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;
INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  'a2-m1-l1-ex50',
  'a2-m1-l1',
  50,
  'fill-blank',
  $_$Exercise$_$,
  $_${"questions":[{"sentence":"Hello! I ___ Maria. Nice to meet you.","gap":"am","explanation":"Usamos 'am' con 'I' para presentarnos. 'I am' significa 'Yo soy'.","points":1},{"sentence":"___ you from Spain?","gap":"Are","explanation":"Usamos 'are' con 'you' para preguntar sobre nacionalidad u origen. 'Are you' significa '¿Eres tú?' o '¿Estás tú?'","points":1},{"sentence":"This ___ my friend, John.","gap":"is","explanation":"Usamos 'is' con 'this' para presentar a alguien. 'This is' significa 'Este es'.","points":1},{"sentence":"We ___ both 25 years old.","gap":"are","explanation":"Usamos 'are' con 'we' para hablar sobre nosotros mismos y otros. 'We are' significa 'Nosotros somos' o 'Nosotros estamos'.","points":1},{"sentence":"They ___ from Italy.","gap":"are","explanation":"Usamos 'are' con 'they' para hablar de otras personas. 'They are' significa 'Ellos son' o 'Ellos están'.","points":1},{"sentence":"My brother ___ 30 years old.","gap":"is","explanation":"Usamos 'is' con 'he', 'she', o 'it' para describir edades o características. 'He is' significa 'Él es' o 'Él está'.","points":1},{"sentence":"___ she your sister?","gap":"Is","explanation":"Usamos 'is' con 'she' para preguntar sobre una persona. 'Is she' significa '¿Es ella?'","points":1},{"sentence":"Good evening! ___ everyone ready?","gap":"Is","explanation":"Usamos 'is' con 'everyone' ya que se considera singular. 'Is everyone' significa '¿Está todo el mundo?'","points":1}]}$_$
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

COMMIT;
