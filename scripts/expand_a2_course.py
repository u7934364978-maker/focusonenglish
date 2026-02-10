import json
import os
import random

# Configuración A2
COURSE_DIR = "src/content/cursos/ingles-a2"
UNITS_COUNT = 60
EXERCISES_PER_UNIT = 500

# Banco de Datos Pedagógicos A2 (Cambridge KET level)
PEDAGOGICAL_DATA = {
    1: { # Greetings & Personal Info
        "grammar": [
            ("I (be) ________ a student.", "am"),
            ("You (be) ________ very kind.", "are"),
            ("He (be) ________ from London.", "is"),
            ("We (be) ________ happy today.", "are"),
            ("They (be) ________ my friends.", "are"),
            ("I (have got) ________ a new phone.", "have got"),
            ("She (have got) ________ a sister.", "has got"),
            ("________ you got a pen?", "Have"),
            ("He (not/have got) ________ a car.", "hasn't got"),
            ("My name (be) ________ Carlos.", "is"),
            ("I (live) ________ in Madrid.", "live"),
            ("She (speak) ________ English.", "speaks"),
            ("They (not/work) ________ on Sundays.", "don't work"),
            ("Do you ________ (know) him?", "know"),
            ("Where ________ you from?", "are")
        ],
        "vocab": [
            ("Name", "Nombre"), ("Surname", "Apellido"), ("Age", "Edad"), ("Address", "Dirección"),
            ("Phone number", "Número de teléfono"), ("Email address", "Correo electrónico"),
            ("Nationality", "Nacionalidad"), ("Occupation", "Profesión/Ocupación"),
            ("Marital status", "Estado civil"), ("Single", "Soltero/a"), ("Married", "Casado/a"),
            ("Date of birth", "Fecha de nacimiento"), ("Place of birth", "Lugar de nacimiento"),
            ("Signature", "Firma"), ("Postcode", "Código postal")
        ],
        "sentences": [
            "What is your first name?", "How old are you?", "I am twenty-five years old.",
            "Where do you live?", "Nice to meet you.", "Can you spell your surname?",
            "What is your job?", "I am a teacher.", "Are you married or single?",
            "What is your nationality?", "I am Spanish.", "My phone number is 123456.",
            "Please sign here.", "What is your email?", "I was born in Seville."
        ],
        "communication": [
            ("How are you?", "I'm fine, thanks. And you?", ["I'm 20 years old.", "I live in Paris."]),
            ("What's your name?", "My name is John.", ["I'm from Italy.", "Yes, I am."]),
            ("Where are you from?", "I'm from Spain.", ["I'm a doctor.", "Fine, thanks."]),
            ("Nice to meet you.", "Nice to meet you too.", ["Good morning.", "I'm sorry."]),
            ("How do you spell your surname?", "B-R-O-W-N.", ["It's 10 o'clock.", "I am single."])
        ]
    },
    2: { # Describing Appearance
        "grammar": [
            ("She (have got) ________ long hair.", "has got"),
            ("He (be) ________ quite tall.", "is"),
            ("They (not/be) ________ very slim.", "are not"),
            ("My brother is ________ (tall) than me.", "taller"),
            ("She is the ________ (pretty) girl.", "prettiest"),
            ("He ________ (wear) a blue sweater now.", "is wearing"),
            ("I ________ (not/have) a beard.", "don't have"),
            ("What ________ he look like?", "does"),
            ("She (look) ________ like her mother.", "looks"),
            ("We (be) ________ both short.", "are")
        ],
        "vocab": [
            ("Tall", "Alto/a"), ("Short", "Bajo/a"), ("Slim", "Delgado/a"), ("Thin", "Flaco/a"),
            ("Fat", "Gordo/a"), ("Overweight", "Con sobrepeso"), ("Attractive", "Atractivo/a"),
            ("Beautiful", "Hermosa"), ("Handsome", "Guapo"), ("Blonde", "Rubio/a"),
            ("Curly", "Rizado"), ("Straight", "Liso"), ("Beard", "Barba"), ("Moustache", "Bigote"),
            ("Dark hair", "Pelo oscuro")
        ],
        "sentences": [
            "She has long blonde hair.", "He is wearing glasses.", "My father has a big moustache.",
            "He is shorter than his brother.", "She is very attractive.", "What does she look like?",
            "He has got blue eyes.", "They are both very slim.", "She is the tallest in the class.",
            "I have straight black hair.", "Does he have a beard?", "She looks very young.",
            "He is a handsome man.", "They are wearing school uniforms.", "My mother is quite short."
        ],
        "communication": [
            ("What does your brother look like?", "He's tall and has dark hair.", ["He likes music.", "He is a student."]),
            ("Is she taller than you?", "Yes, she's much taller.", ["No, she's from London.", "Yes, she is pretty."]),
            ("Does he wear glasses?", "Yes, for reading.", ["No, he isn't tall.", "Yes, he has a beard."]),
            ("Who do you look like?", "I look like my mother.", ["I'm fine.", "I like pizza."]),
            ("Is she wearing a dress?", "No, she's wearing trousers.", ["Yes, she is beautiful.", "No, she isn't old."])
        ]
    },
    3: { # Personality & Character
        "grammar": [
            ("He (be) ________ very kind.", "is"),
            ("She (not/be) ________ very patient.", "is not"),
            ("They (be) ________ always helpful.", "are"),
            ("Are you ________ (lazy) than your sister?", "lazier"),
            ("He is the ________ (funny) person I know.", "funniest"),
            ("I (think) ________ she is very clever.", "think"),
            ("We (be) ________ both quite shy.", "are"),
            ("She (not/like) ________ rude people.", "doesn't like"),
            ("Why ________ he so angry?", "is"),
            ("They (seem) ________ very friendly.", "seem")
        ],
        "vocab": [
            ("Kind", "Amable"), ("Friendly", "Simpático/Amigable"), ("Funny", "Divertido/Gracioso"),
            ("Clever", "Listo/Inteligente"), ("Lazy", "Perezoso/Vago"), ("Hard-working", "Trabajador"),
            ("Shy", "Tímido"), ("Outgoing", "Extrovertido"), ("Patient", "Paciente"),
            ("Honest", "Honesto"), ("Polite", "Educado"), ("Rude", "Maleducado/Grosero"),
            ("Serious", "Serio"), ("Quiet", "Tranquilo/Callado"), ("Helpful", "Servicial")
        ],
        "sentences": [
            "My teacher is very patient.", "He is a very funny man.", "She is shy with new people.",
            "He is the most hard-working student.", "Don't be rude to your parents.",
            "Is your brother outgoing?", "She is cleverer than her cousin.", "They are very helpful.",
            "I am a quiet person.", "He is always honest.", "Are they friendly?",
            "She isn't lazy at all.", "You seem very serious today.", "He is polite to everyone.",
            "We are all very different."
        ],
        "communication": [
            ("What is your best friend like?", "She's very kind and funny.", ["She likes swimming.", "She is tall."]),
            ("Is he hard-working?", "Yes, he works very hard.", ["No, he's a doctor.", "Yes, he is handsome."]),
            ("Are you shy?", "A little bit, with new people.", ["No, I'm from Spain.", "Yes, I am tall."]),
            ("What do you think of the new teacher?", "I think she's very clever.", ["She's wearing a red dress.", "She lives near here."]),
            ("Is she a patient person?", "Yes, she never gets angry.", ["No, she isn't old.", "Yes, she is beautiful."])
        ]
    },
    4: { # Family & Relationships
        "grammar": [
            ("My mother (have got) ________ two sisters.", "has got"),
            ("They (be) ________ my cousins.", "are"),
            ("How many brothers ________ you got?", "have"),
            ("She (not/have) ________ any children.", "doesn't have"),
            ("We (visit) ________ our grandparents every Sunday.", "visit"),
            ("He (be) ________ older than his wife.", "is"),
            ("Is ________ your father?", "that"),
            ("These (be) ________ my parents.", "are"),
            ("My sister (live) ________ in London.", "lives"),
            ("They (be) ________ married since 2010.", "have been")
        ],
        "vocab": [
            ("Mother", "Madre"), ("Father", "Padre"), ("Sister", "Hermana"), ("Brother", "Hermano"),
            ("Grandmother", "Abuela"), ("Grandfather", "Abuelo"), ("Cousin", "Primo/a"),
            ("Aunt", "Tía"), ("Uncle", "Tío"), ("Niece", "Sobrina"), ("Nephew", "Sobrino"),
            ("Wife", "Esposa"), ("Husband", "Esposo"), ("Child", "Niño/Hijo"), ("Parent", "Progenitor")
        ],
        "sentences": [
            "I have a large family.", "My mother's name is Maria.", "Do you have any siblings?",
            "He is my favourite uncle.", "My grandparents live in the countryside.",
            "She has two daughters and one son.", "My cousin is younger than me.",
            "Are your parents at home?", "He is married to a doctor.", "We are very close.",
            "I have got three nephews.", "My aunt works in a hospital.", "They are twins.",
            "She is my only sister.", "My husband is from Canada."
        ],
        "communication": [
            ("Do you have a big family?", "Yes, I have five brothers.", ["No, I am from Italy.", "Yes, I like pizza."]),
            ("Is your sister older than you?", "No, she is my younger sister.", ["Yes, she is beautiful.", "No, she isn't tall."]),
            ("What is your husband's job?", "He is an engineer.", ["He is 40 years old.", "He is very tall."]),
            ("Do you visit your grandparents often?", "Yes, every weekend.", ["No, they are old.", "Yes, I have a car."]),
            ("Are you married?", "Yes, for ten years.", ["No, I am a student.", "Yes, I am happy."])
        ]
    },
    5: { # Daily Routines & Habits
        "grammar": [
            ("I (get up) ________ at 7 o'clock.", "get up"),
            ("She (usually/have) ________ breakfast at home.", "usually has"),
            ("They (not/work) ________ on Saturdays.", "don't work"),
            ("What time ________ he start work?", "does"),
            ("I (never/be) ________ late.", "am never"),
            ("We (often/go) ________ to the gym.", "often go"),
            ("Does she ________ (study) in the evenings?", "study"),
            ("He (watch) ________ TV every night.", "watches"),
            ("They (hardly ever/cook) ________.", "hardly ever cook"),
            ("I (go) ________ to bed at midnight.", "go")
        ],
        "vocab": [
            ("Wake up", "Despertarse"), ("Get up", "Levantarse"), ("Have breakfast", "Desayunar"),
            ("Go to work", "Ir a trabajar"), ("Start", "Empezar"), ("Finish", "Terminar"),
            ("Have lunch", "Almorzar"), ("Come home", "Volver a casa"), ("Cook dinner", "Cocinar la cena"),
            ("Watch TV", "Ver la tele"), ("Go to bed", "Irse a la cama"), ("Always", "Siempre"),
            ("Usually", "Normalmente"), ("Often", "A menudo"), ("Sometimes", "A veces"),
            ("Hardly ever", "Casi nunca"), ("Never", "Nunca")
        ],
        "sentences": [
            "I always wake up early.", "She usually has a shower in the morning.",
            "He never eats breakfast.", "What time do you finish work?",
            "They often go for a walk in the evening.", "I sometimes listen to the radio.",
            "She hardly ever goes out during the week.", "He watches the news every day.",
            "We usually have lunch at 1 PM.", "I go to bed at 11 o'clock.",
            "Does he work on weekends?", "She starts work at 9 AM.", "I never drink coffee.",
            "They always study in the library.", "He cooks dinner for his family."
        ],
        "communication": [
            ("What time do you get up?", "Usually at half past six.", ["I'm fine.", "In London."]),
            ("Do you work on Saturdays?", "No, I never work at weekends.", ["Yes, I have a job.", "No, I am tired."]),
            ("What do you usually have for breakfast?", "Just a coffee and some toast.", ["At 8 o'clock.", "With my sister."]),
            ("How often do you go to the gym?", "Three times a week.", ["It's near here.", "Yes, I do."]),
            ("Does she cook every day?", "No, she sometimes eats out.", ["Yes, she is a good cook.", "No, she isn't old."])
        ]
    },
    6: { # Housework & Home Activities
        "grammar": [
            ("I (be) ________ cleaning the kitchen.", "am"),
            ("She (need) ________ to do the laundry.", "needs"),
            ("They (not/like) ________ washing the dishes.", "don't like"),
            ("He (usually/make) ________ his bed.", "usually makes"),
            ("Can you ________ (help) me with the hoovering?", "help"),
            ("She (already/finish) ________ the ironing.", "has already finished"),
            ("We (must/clean) ________ the windows.", "must clean"),
            ("I (not/want) ________ to do the shopping.", "don't want"),
            ("Does he ________ (tidy) his room?", "tidy"),
            ("They (be) ________ very busy today.", "are")
        ],
        "vocab": [
            ("Cleaning", "Limpieza"), ("Laundry", "Colada/Lavandería"), ("Washing up", "Fregar los platos"),
            ("Dishes", "Platos"), ("Ironing", "Planchado"), ("Hoovering", "Pasar la aspiradora"),
            ("Dusting", "Quitar el polvo"), ("Tidy up", "Ordenar"), ("Shopping", "Compras"),
            ("Cooking", "Cocinar"), ("Baking", "Hornear"), ("Garden", "Jardín"),
            ("Wash", "Lavar"), ("Dry", "Secar"), ("Sweep", "Barrer")
        ],
        "sentences": [
            "I need to do the laundry today.", "He is washing the dishes now.",
            "She usually does the ironing on Sundays.", "Can you help me tidy up the living room?",
            "We always go shopping on Saturdays.", "He never makes his bed.",
            "I hate hoovering the stairs.", "She is baking a cake for the party.",
            "They are working in the garden.", "I have to clean the windows.",
            "Did you sweep the floor?", "She is dusting the furniture.",
            "He is cooking dinner tonight.", "We need more washing powder.",
            "The kitchen is very clean now."
        ],
        "communication": [
            ("Can you help me with the dishes?", "Sure, I'll dry them.", ["No, I'm cleaning.", "Yes, they are big."]),
            ("Whose turn is it to do the shopping?", "It's mine, I think.", ["I like shopping.", "At the supermarket."]),
            ("Have you done your laundry?", "Not yet, I'll do it later.", ["Yes, it is clean.", "No, I am busy."]),
            ("Do you like cooking?", "Yes, I love baking cakes.", ["At 7 o'clock.", "In the kitchen."]),
            ("Is the house tidy?", "Yes, I spent all morning cleaning.", ["No, it's a big house.", "Yes, it is."])
        ]
    },
    7: { # Jobs & The Workplace
        "grammar": [
            ("He (be) ________ a manager.", "is"),
            ("She (work) ________ in a big office.", "works"),
            ("They (not/have) ________ much free time.", "don't have"),
            ("I (be) ________ looking for a new job.", "am"),
            ("What ________ your father do?", "does"),
            ("We (have) ________ a meeting at 10 AM.", "have"),
            ("Does he ________ (earn) a lot of money?", "earn"),
            ("She (want) ________ to be a pilot.", "wants"),
            ("I (start) ________ my shift at 8 PM.", "start"),
            ("They (be) ________ very professional.", "are")
        ],
        "vocab": [
            ("Manager", "Gerente/Director"), ("Office", "Oficina"), ("Meeting", "Reunión"),
            ("Colleague", "Colega/Compañero"), ("Boss", "Jefe/a"), ("Business", "Negocio/Empresa"),
            ("Salary", "Salario"), ("Job interview", "Entrevista de trabajo"), ("Career", "Carrera"),
            ("Pilot", "Piloto"), ("Nurse", "Enfermero/a"), ("Engineer", "Ingeniero/a"),
            ("Teacher", "Profesor/a"), ("Doctor", "Médico/a"), ("Uniform", "Uniforme")
        ],
        "sentences": [
            "He works for a large company.", "I have a job interview tomorrow.",
            "She is a very experienced nurse.", "My colleagues are very friendly.",
            "What does your mother do?", "I want to have a successful career.",
            "He earns a good salary.", "We have a meeting every Monday morning.",
            "She wears a uniform at work.", "I am very busy at the office today.",
            "He is looking for a part-time job.", "They work in a factory.",
            "She is an amazing teacher.", "I start work at nine o'clock.",
            "The boss is very kind."
        ],
        "communication": [
            ("What do you do?", "I'm a computer programmer.", ["I'm fine.", "I live in London."]),
            ("Where do you work?", "In a small office in the city center.", ["I work hard.", "At 9 o'clock."]),
            ("Do you like your job?", "Yes, it's very interesting.", ["No, I am a doctor.", "Yes, I do."]),
            ("How many colleagues do you have?", "There are ten people in my team.", ["They are very kind.", "In the office."]),
            ("Is your boss strict?", "No, he's very relaxed.", ["Yes, he is tall.", "No, I am not."])
        ]
    },
    8: { # School & University Life
        "grammar": [
            ("I (study) ________ history at university.", "study"),
            ("She (have) ________ an exam tomorrow.", "has"),
            ("They (not/like) ________ mathematics.", "don't like"),
            ("He (be) ________ the best student.", "is"),
            ("What ________ your favourite subject?", "is"),
            ("We (must/finish) ________ our homework.", "must finish"),
            ("Did you ________ (pass) the test?", "pass"),
            ("She (learn) ________ to play the piano.", "is learning"),
            ("I (be) ________ in the second year.", "am"),
            ("They (not/go) ________ to school today.", "don't go")
        ],
        "vocab": [
            ("University", "Universidad"), ("Subject", "Asignatura"), ("History", "Historia"),
            ("Mathematics", "Matemáticas"), ("Science", "Ciencias"), ("Exam", "Examen"),
            ("Homework", "Deberes"), ("Teacher", "Profesor/a"), ("Student", "Estudiante"),
            ("Library", "Biblioteca"), ("Degree", "Grado/Título"), ("Classroom", "Aula"),
            ("Grade", "Nota/Calificación"), ("Break", "Recreo/Descanso"), ("Learn", "Aprender")
        ],
        "sentences": [
            "I'm studying for my exams.", "Mathematics is a difficult subject.",
            "He is a student at Oxford University.", "We have a lot of homework tonight.",
            "She got a very good grade in the test.", "The teacher is very helpful.",
            "I'm going to the library to study.", "What is your favourite subject at school?",
            "They are learning about ancient history.", "We have a break at half past ten.",
            "He wants to get a degree in science.", "The classroom is very large.",
            "Did you finish your project?", "I'm in my final year of school.",
            "She is very good at languages."
        ],
        "communication": [
            ("What are you studying?", "I'm doing a degree in Biology.", ["In the library.", "Yes, I am."]),
            ("Do you have much homework?", "Yes, quite a lot this week.", ["No, I like science.", "At 8 o'clock."]),
            ("Was the exam difficult?", "No, it was easier than I thought.", ["Yes, I passed.", "In the classroom."]),
            ("Where is the library?", "It's next to the main building.", ["I'm studying there.", "At 9 AM."]),
            ("Who is your favourite teacher?", "Mr. Smith, he's very funny.", ["Science.", "Yes, he is."])
        ]
    },
    9: { # Feelings & Emotions
        "grammar": [
            ("I (be) ________ very happy today.", "am"),
            ("She (feel) ________ a bit sad.", "feels"),
            ("They (not/be) ________ angry with you.", "are not"),
            ("Why ________ you so worried?", "are"),
            ("He (look) ________ tired after work.", "looks"),
            ("We (be) ________ excited about the trip.", "are"),
            ("Does she ________ (feel) nervous?", "feel"),
            ("I (not/understand) ________ why he is upset.", "don't understand"),
            ("They (be) ________ surprised by the news.", "were"),
            ("It (make) ________ me feel bored.", "makes")
        ],
        "vocab": [
            ("Happy", "Feliz"), ("Sad", "Triste"), ("Angry", "Enfadado/a"), ("Worried", "Preocupado/a"),
            ("Tired", "Cansado/a"), ("Excited", "Emocionado/a"), ("Nervous", "Nervioso/a"),
            ("Surprised", "Sorprendido/a"), ("Bored", "Aburrido/a"), ("Upset", "Disgustado/a"),
            ("Hungry", "Hambriento/a"), ("Thirsty", "Sediento/a"), ("Scared", "Asustado/a"),
            ("Lonely", "Solo/Solitario"), ("Proud", "Orgulloso/a")
        ],
        "sentences": [
            "I am very happy to see you.", "She feels sad because her cat is ill.",
            "He was very angry with his boss.", "Don't be worried about the exam.",
            "I am so tired I could sleep for days.", "We are excited about our holiday.",
            "She always feels nervous before a test.", "He was surprised by the birthday party.",
            "I am bored with this movie.", "She was upset by his comments.",
            "Are you hungry? Let's eat.", "I'm thirsty, I need some water.",
            "She is scared of spiders.", "He feels lonely in the big city.",
            "I am very proud of my children."
        ],
        "communication": [
            ("How are you feeling today?", "I'm feeling great, thanks!", ["In London.", "At 10 o'clock."]),
            ("Are you worried about anything?", "Just a little bit about my exam.", ["No, I'm happy.", "Yes, I do."]),
            ("Why is she so angry?", "Because her car won't start.", ["She's a teacher.", "In the garage."]),
            ("Are you hungry?", "Yes, I'm starving. Let's get pizza.", ["No, I'm thirsty.", "At 1 PM."]),
            ("You look tired.", "Yes, I didn't sleep well last night.", ["I'm happy.", "No, I'm not."])
        ]
    },
    10: { # Module 1 Review
        "grammar": [
            ("I (be) ________ from Spain.", "am"),
            ("She (have got) ________ blue eyes.", "has got"),
            ("He (usually/get up) ________ at 7.", "usually gets up"),
            ("They (work) ________ in an office.", "work"),
            ("What ________ your name?", "is"),
            ("We (be) ________ happy today.", "are"),
            ("Does he ________ (like) sports?", "like"),
            ("She (be) ________ taller than me.", "is"),
            ("I (not/have) ________ any sisters.", "don't have"),
            ("They (be) ________ studying now.", "are")
        ],
        "vocab": [
            ("Surname", "Apellido"), ("Slim", "Delgado/a"), ("Kind", "Amable"),
            ("Nephew", "Sobrino"), ("Always", "Siempre"), ("Laundry", "Colada"),
            ("Salary", "Salario"), ("Subject", "Asignatura"), ("Excited", "Emocionado/a"),
            ("Address", "Dirección")
        ],
        "sentences": [
            "What is your address?", "She is very kind and helpful.",
            "My father works in a bank.", "He has got short curly hair.",
            "I usually go to bed late.", "We are excited about the weekend.",
            "She is studying history.", "Do you have any brothers?",
            "He earns a good salary.", "Nice to meet you."
        ],
        "communication": [
            ("How are you?", "Fine, thanks.", ["I'm 30.", "In Madrid."]),
            ("What do you do?", "I'm a nurse.", ["I'm happy.", "At 9 AM."]),
            ("Do you have a big family?", "Yes, I have four sisters.", ["No, I'm from Italy.", "Yes, I am."]),
            ("What time do you start work?", "At eight o'clock.", ["In an office.", "Yes, I do."]),
            ("You look happy today.", "Yes, I have some good news.", ["I'm fine.", "No, I am not."])
        ]
    },
    11: { # City Life & Places
        "grammar": [
            ("There (be) ________ a big library in my city.", "is"),
            ("There (be) ________ many interesting places to visit.", "are"),
            ("Is ________ a cinema near the park?", "there"),
            ("Are ________ any museums open today?", "there"),
            ("The bank is ________ (between) the pharmacy and the cafe.", "between"),
            ("Go ________ (straight) on for two blocks.", "straight"),
            ("Turn ________ (left) at the post office.", "left"),
            ("The museum is ________ (opposite) the station.", "opposite"),
            ("How ________ (far) is the airport from here?", "far"),
            ("You (can) ________ see the castle from the bridge.", "can")
        ],
        "vocab": [
            ("Library", "Biblioteca"), ("Cinema", "Cine"), ("Museum", "Museo"),
            ("Post office", "Oficina de correos"), ("Bank", "Banco"), ("Pharmacy", "Farmacia"),
            ("Castle", "Castillo"), ("Bridge", "Puente"), ("Square", "Plaza"),
            ("Town hall", "Ayuntamiento"), ("Station", "Estación"), ("Park", "Parque"),
            ("Market", "Mercado"), ("Church", "Iglesia"), ("Traffic lights", "Semáforo")
        ],
        "sentences": [
            "My city has a beautiful central square.", "The bank is closed on Sundays.",
            "There is a famous museum in the city center.", "Go straight on and turn right at the corner.",
            "The library is a quiet place to study.", "Is there a pharmacy near here?",
            "The station is opposite the town hall.", "You can cross the river by the old bridge.",
            "The market is open every Saturday morning.", "The castle is on a high hill.",
            "Wait for the green light at the traffic lights.", "The park is very crowded in summer.",
            "The post office is next to the church.", "It takes twenty minutes to walk to the station.",
            "The town is very old and beautiful."
        ],
        "communication": [
            ("Excuse me, is there a bank near here?", "Yes, there's one on the next street.", ["No, I don't like banks.", "It's five o'clock."]),
            ("How do I get to the museum?", "Go straight on and turn left.", ["I'm going to the cinema.", "It's very old."]),
            ("Is the station far from here?", "No, it's only a five-minute walk.", ["Yes, I have a ticket.", "No, it's a big station."]),
            ("Where is the library, please?", "It's opposite the town hall.", ["I'm reading a book.", "It's open now."]),
            ("Does this bus go to the airport?", "Yes, it goes there every twenty minutes.", ["No, I don't have a car.", "Yes, it is a big plane."])
        ]
    },
    12: { # Shopping & Department Stores
        "grammar": [
            ("How much (be) ________ this shirt?", "is"),
            ("How much (be) ________ these shoes?", "are"),
            ("I (want) ________ to buy a new dress.", "want"),
            ("She (not/have) ________ enough money.", "doesn't have"),
            ("We (go) ________ to the department store now.", "are going"),
            ("This jacket is ________ (expensive) than that one.", "more expensive"),
            ("It is the ________ (cheap) shop in town.", "cheapest"),
            ("Can I ________ (pay) by credit card?", "pay"),
            ("He (be) ________ looking for a gift.", "is"),
            ("They (not/sell) ________ electronics here.", "don't sell")
        ],
        "vocab": [
            ("Shirt", "Camisa"), ("Shoes", "Zapatos"), ("Dress", "Vestido"), ("Jacket", "Chaqueta"),
            ("Size", "Talla/Tamaño"), ("Price", "Precio"), ("Expensive", "Caro/a"),
            ("Cheap", "Barato/a"), ("Credit card", "Tarjeta de crédito"), ("Cash", "Efectivo"),
            ("Receipt", "Recibo/Ticket"), ("Gift", "Regalo"), ("Customer", "Cliente"),
            ("Shop assistant", "Dependiente/a"), ("Change", "Cambio/Vuelta")
        ],
        "sentences": [
            "I'm looking for a pair of blue shoes.", "How much does this cost?",
            "Can I try this dress on?", "The changing rooms are over there.",
            "This size is too small for me.", "I'll pay in cash.",
            "Can I have a receipt, please?", "This shop is very expensive.",
            "The shop assistant was very helpful.", "I need to buy a gift for my sister.",
            "Do you have this in a larger size?", "I'm just looking, thank you.",
            "The sale starts next week.", "Everything is half price!",
            "Where is the electronics department?"
        ],
        "communication": [
            ("Can I help you?", "Yes, I'm looking for a jacket.", ["No, I am a student.", "Yes, I'm fine."]),
            ("How much are these jeans?", "They are forty-five pounds.", ["They are blue.", "In the shop."]),
            ("Can I pay by credit card?", "Yes, of course.", ["No, I don't have a car.", "Yes, I am."]),
            ("Do you have this in a medium?", "I'll check for you. One moment.", ["Yes, I like it.", "No, it is small."]),
            ("Where are the changing rooms?", "They are at the back of the store.", ["I'm wearing a dress.", "Yes, they are."])
        ]
    },
    13: { # Food, Cooking & Recipes
        "grammar": [
            ("I (like) ________ Italian food.", "like"),
            ("She (not/eat) ________ meat.", "doesn't eat"),
            ("We (need) ________ some eggs for the cake.", "need"),
            ("There (be) ________ some milk in the fridge.", "is"),
            ("Are there ________ (any) tomatoes?", "any"),
            ("I (be) ________ cooking dinner now.", "am"),
            ("He (can) ________ cook very well.", "can"),
            ("You (must/wash) ________ the vegetables.", "must wash"),
            ("She (usually/have) ________ salad for lunch.", "usually has"),
            ("They (not/be) ________ hungry yet.", "are not")
        ],
        "vocab": [
            ("Eggs", "Huevos"), ("Milk", "Leche"), ("Vegetables", "Verduras"), ("Fruit", "Fruta"),
            ("Meat", "Carne"), ("Fish", "Pescado"), ("Pasta", "Pasta"), ("Rice", "Arroz"),
            ("Bread", "Pan"), ("Sugar", "Azúcar"), ("Salt", "Sal"), ("Oil", "Aceite"),
            ("Fridge", "Nevera"), ("Kitchen", "Cocina"), ("Recipe", "Receta")
        ],
        "sentences": [
            "I love cooking for my friends.", "Do you have the recipe for this cake?",
            "We need to buy some fresh fruit.", "There isn't any milk in the fridge.",
            "First, chop the vegetables into small pieces.", "Boil the water in a large pot.",
            "Add a little salt and pepper.", "She is allergic to nuts.",
            "He is a very good cook.", "What are we having for dinner?",
            "I prefer fish to meat.", "Can you pass me the sugar?",
            "The pasta is delicious.", "I'm going to the supermarket to buy bread.",
            "Eat more vegetables to stay healthy."
        ],
        "communication": [
            ("What's for dinner tonight?", "We're having chicken and rice.", ["In the kitchen.", "At 7 o'clock."]),
            ("Do you like spicy food?", "Yes, I love it!", ["No, I'm a student.", "Yes, I am."]),
            ("Can you cook?", "Yes, I'm quite good at it.", ["No, I'm hungry.", "Yes, I do."]),
            ("Is there any juice left?", "No, we drank it all this morning.", ["Yes, I like juice.", "In the fridge."]),
            ("How do you make this salad?", "It's very easy. I'll show you.", ["It's healthy.", "With my friends."])
        ]
    },
    14: { # At the Restaurant
        "grammar": [
            ("I (would like) ________ a table for two.", "would like"),
            ("What ________ you like to drink?", "would"),
            ("He (be) ________ having the steak.", "is"),
            ("We (not/be) ________ ready to order yet.", "are not"),
            ("Can I ________ (have) the bill, please?", "have"),
            ("She (think) ________ the soup is too salty.", "thinks"),
            ("They (be) ________ waiting for their food.", "are"),
            ("Does the service ________ (include) a tip?", "include"),
            ("I (prefer) ________ a window table.", "prefer"),
            ("You (should/try) ________ the fish.", "should try")
        ],
        "vocab": [
            ("Table", "Mesa"), ("Waiter", "Camarero/a"), ("Menu", "Carta/Menú"),
            ("Bill", "Cuenta"), ("Tip", "Propina"), ("Order", "Pedir/Pedido"),
            ("Main course", "Plato principal"), ("Starter", "Entrante"), ("Dessert", "Postre"),
            ("Drink", "Bebida"), ("Steak", "Filete/Chuletón"), ("Soup", "Sopa"),
            ("Delicious", "Delicioso/a"), ("Reservation", "Reserva"), ("Salt", "Sal")
        ],
        "sentences": [
            "I'd like to book a table for eight o'clock.", "Are you ready to order?",
            "I'll have the tomato soup as a starter.", "What do you recommend for the main course?",
            "Could we have some more bread, please?", "Is everything okay with your meal?",
            "The steak was cooked perfectly.", "I'm afraid this soup is cold.",
            "Can we have the bill, please?", "Does the price include service?",
            "The dessert was absolutely delicious.", "I'd like a glass of red wine.",
            "We have a reservation for tonight.", "Where are the toilets, please?",
            "I'll pay for everyone."
        ],
        "communication": [
            ("A table for two, please.", "Certainly. Follow me this way.", ["I'm hungry.", "At 8 o'clock."]),
            ("Are you ready to order?", "Yes, I'll have the grilled fish.", ["No, I'm a waiter.", "Yes, I am."]),
            ("Would you like a dessert?", "No, thank you. Just a coffee.", ["Yes, it is sweet.", "In the restaurant."]),
            ("Was everything alright?", "Yes, it was delicious, thank you.", ["No, I'm fine.", "At the table."]),
            ("Can I have the bill, please?", "Of course. I'll bring it right away.", ["Yes, I have money.", "No, thanks."])
        ]
    },
    15: { # Sports & Fitness
        "grammar": [
            ("I (play) ________ football every Saturday.", "play"),
            ("She (go) ________ swimming on Tuesdays.", "goes"),
            ("They (not/do) ________ yoga.", "don't do"),
            ("He (be) ________ very good at tennis.", "is"),
            ("We (win) ________ the match yesterday.", "won"),
            ("Are you ________ (interested) in basketball?", "interested"),
            ("She (want) ________ to run a marathon.", "wants"),
            ("I (be) ________ training for a competition.", "am"),
            ("He (not/can) ________ swim very fast.", "can't"),
            ("They (practice) ________ every day.", "practice")
        ],
        "vocab": [
            ("Football", "Fútbol"), ("Swimming", "Natación"), ("Tennis", "Tenis"),
            ("Basketball", "Baloncesto"), ("Gym", "Gimnasio"), ("Match", "Partido"),
            ("Team", "Equipo"), ("Player", "Jugador/a"), ("Coach", "Entrenador/a"),
            ("Win", "Ganar"), ("Lose", "Perder"), ("Practice", "Practicar/Entrenar"),
            ("Exercise", "Ejercicio"), ("Healthy", "Saludable"), ("Competition", "Competición")
        ],
        "sentences": [
            "I go to the gym three times a week.", "He is the best player in the team.",
            "We won the match two-zero.", "She loves going for a run in the morning.",
            "Do you play any team sports?", "It's important to exercise regularly.",
            "The coach was very happy with the results.", "They lost the game last night.",
            "I'm training for a cycling competition.", "Swimming is great for your health.",
            "He is a professional tennis player.", "We have football practice at 5 PM.",
            "I'm not very good at basketball.", "She wants to join a yoga class.",
            "Who won the gold medal?"
        ],
        "communication": [
            ("Do you play any sports?", "Yes, I play tennis and football.", ["No, I'm a student.", "Yes, I am."]),
            ("How often do you exercise?", "Almost every day.", ["At the gym.", "With my friends."]),
            ("Who is your favourite athlete?", "I really like Rafael Nadal.", ["Tennis.", "Yes, he is."]),
            ("Did your team win yesterday?", "No, unfortunately they lost.", ["Yes, they are good.", "At 4 o'clock."]),
            ("Do you like watching sports on TV?", "Yes, especially basketball.", ["No, I'm tired.", "In the stadium."])
        ]
    },
    16: { # Health & Common Illnesses
        "grammar": [
            ("I (have got) ________ a headache.", "have got"),
            ("She (feel) ________ a bit sick.", "feels"),
            ("They (not/be) ________ at school today.", "are not"),
            ("He (should) ________ see a doctor.", "should"),
            ("I (be) ________ staying in bed.", "am"),
            ("We (need) ________ to buy some medicine.", "need"),
            ("Does she ________ (have) a fever?", "have"),
            ("I (not/can) ________ go to work.", "can't"),
            ("They (be) ________ waiting for the dentist.", "are"),
            ("It (hurt) ________ when I move.", "hurts")
        ],
        "vocab": [
            ("Headache", "Dolor de cabeza"), ("Stomach ache", "Dolor de estómago"), ("Toothache", "Dolor de muelas"),
            ("Cold", "Resfriado"), ("Flu", "Gripe"), ("Cough", "Tos"), ("Sore throat", "Dolor de garganta"),
            ("Fever", "Fiebre"), ("Medicine", "Medicina/Medicamento"), ("Doctor", "Médico/a"),
            ("Dentist", "Dentista"), ("Hospital", "Hospital"), ("Ill/Sick", "Enfermo/a"),
            ("Better", "Mejor"), ("Worse", "Peor")
        ],
        "sentences": [
            "I have a terrible sore throat.", "She needs to take some aspirin.",
            "He has a high fever.", "I'm going to the dentist tomorrow morning.",
            "You should stay in bed if you have the flu.", "My stomach hurts after that meal.",
            "I've got a really bad cold.", "Are you feeling any better today?",
            "She has to see a doctor about her back.", "He is allergic to antibiotics.",
            "I hope you get well soon!", "The medicine makes me feel sleepy.",
            "I have an appointment at 3 PM.", "He was sick all night.",
            "My arm is very sore."
        ],
        "communication": [
            ("What's the matter?", "I have a really bad headache.", ["I'm fine, thanks.", "At the doctor's."]),
            ("Are you feeling alright?", "No, I feel a bit sick.", ["Yes, I am.", "In bed."]),
            ("Should I call a doctor?", "Yes, please. I have a high fever.", ["No, I'm a student.", "Yes, I do."]),
            ("How long have you felt like this?", "Since yesterday evening.", ["In my stomach.", "It's cold."]),
            ("I hope you feel better soon.", "Thank you, that's very kind.", ["Yes, I am.", "No, thanks."])
        ]
    },
    17: { # The Natural World & Animals
        "grammar": [
            ("The lion (be) ________ the king of the jungle.", "is"),
            ("Dolphins (be) ________ very intelligent.", "are"),
            ("I (see) ________ a beautiful bird yesterday.", "saw"),
            ("She (love) ________ walking in the forest.", "loves"),
            ("They (not/live) ________ in the desert.", "don't live"),
            ("We (must/protect) ________ the environment.", "must protect"),
            ("Are there ________ (any) tigers here?", "any"),
            ("He (be) ________ interested in wildlife.", "is"),
            ("It (be) ________ the tallest mountain.", "is"),
            ("They (be) ________ swimming in the ocean.", "are")
        ],
        "vocab": [
            ("Jungle", "Selva"), ("Forest", "Bosque"), ("Desert", "Desierto"),
            ("Mountain", "Montaña"), ("Ocean", "Océano"), ("River", "Río"),
            ("Island", "Isla"), ("Lion", "León"), ("Tiger", "Tigre"), ("Elephant", "Elefante"),
            ("Bird", "Pájaro/Ave"), ("Dolphin", "Delfín"), ("Snake", "Serpiente"),
            ("Environment", "Medio ambiente"), ("Wildlife", "Vida silvestre")
        ],
        "sentences": [
            "The Amazon is the largest jungle in the world.", "Mount Everest is very high.",
            "We saw many wild animals on our trip.", "Dolphins are my favourite animals.",
            "The desert is very hot during the day.", "I love the sound of the ocean.",
            "They are cleaning the local river.", "Is that island far from the coast?",
            "Elephants are very strong animals.", "We must save the tigers.",
            "The forest is full of beautiful birds.", "He is a wildlife photographer.",
            "Are there any snakes in this area?", "Protecting the environment is important.",
            "The water in the lake is very clear."
        ],
        "communication": [
            ("What's your favourite animal?", "I really love dogs and cats.", ["In the jungle.", "Yes, I am."]),
            ("Have you ever seen a lion?", "Only in the zoo, never in the wild.", ["Yes, it is big.", "No, I don't."]),
            ("Do you like hiking in the mountains?", "Yes, the views are amazing.", ["No, I'm tired.", "At 8 o'clock."]),
            ("Is it a dangerous animal?", "No, it's completely harmless.", ["Yes, it is fast.", "In the forest."]),
            ("What a beautiful bird!", "Yes, look at its colourful feathers.", ["It's flying.", "No, it isn't."])
        ]
    },
    18: { # Weather & Seasons
        "grammar": [
            ("It (be) ________ sunny today.", "is"),
            ("It (rain) ________ a lot in autumn.", "rains"),
            ("They (not/like) ________ cold weather.", "don't like"),
            ("What ________ the weather like?", "is"),
            ("It (be) ________ going to snow tomorrow.", "is"),
            ("We (have) ________ a very hot summer.", "had"),
            ("Is it ________ (windy) outside?", "windy"),
            ("I (be) ________ wearing a coat.", "am"),
            ("They (be) ________ at the beach.", "are"),
            ("It (get) ________ dark early in winter.", "gets")
        ],
        "vocab": [
            ("Sunny", "Soleado"), ("Cloudy", "Nublado"), ("Rainy", "Lluvioso"),
            ("Snowy", "Nevado"), ("Windy", "Ventoso"), ("Stormy", "Tormentoso"),
            ("Hot", "Caluroso"), ("Cold", "Frío"), ("Warm", "Cálido"),
            ("Spring", "Primavera"), ("Summer", "Verano"), ("Autumn", "Otoño"),
            ("Winter", "Invierno"), ("Forecast", "Pronóstico"), ("Temperature", "Temperatura")
        ],
        "sentences": [
            "The weather is beautiful today.", "I love the flowers in spring.",
            "It's very cold in the mountains.", "What's the temperature today?",
            "The forecast says it will rain later.", "I prefer summer to winter.",
            "It was very windy last night.", "We had a big storm yesterday.",
            "Is it going to snow this weekend?", "Autumn is my favourite season.",
            "Don't forget your umbrella!", "The sun is shining brightly.",
            "The trees lose their leaves in autumn.", "It's too hot to go outside.",
            "I'm wearing my warmest coat."
        ],
        "communication": [
            ("What's the weather like?", "It's sunny but a bit cold.", ["I'm fine.", "In Spain."]),
            ("Is it going to rain today?", "The forecast says it might.", ["Yes, I have an umbrella.", "No, it's summer."]),
            ("What's your favourite season?", "I love spring when everything is green.", ["At 10 o'clock.", "In the garden."]),
            ("Is it cold outside?", "Yes, you should wear a jacket.", ["No, it's sunny.", "Yes, I am."]),
            ("Do you like snow?", "Yes, I love skiing in winter.", ["No, I am tired.", "In the mountains."])
        ]
    },
    19: { # Clothes, Styles & Materials
        "grammar": [
            ("I (wear) ________ a blue shirt today.", "am wearing"),
            ("She (buy) ________ a new pair of jeans.", "bought"),
            ("They (not/be) ________ very fashionable.", "are not"),
            ("What ________ you wearing for the party?", "are"),
            ("This sweater is ________ (soft) than that one.", "softer"),
            ("He (be) ________ looking for a leather belt.", "is"),
            ("Does she ________ (like) wearing dresses?", "like"),
            ("I (need) ________ to buy some cotton socks.", "need"),
            ("They (be) ________ very expensive shoes.", "are"),
            ("It (be) ________ made of silk.", "is")
        ],
        "vocab": [
            ("Shirt", "Camisa"), ("Trousers/Jeans", "Pantalones"), ("Dress", "Vestido"),
            ("Skirt", "Falda"), ("Sweater/Jumper", "Jersey"), ("Jacket", "Chaqueta"),
            ("Coat", "Abrigo"), ("Shoes", "Zapatos"), ("Boots", "Botas"), ("Socks", "Calcetines"),
            ("Cotton", "Algodón"), ("Wool", "Lana"), ("Leather", "Cuero"), ("Silk", "Seda"),
            ("Fashionable", "De moda")
        ],
        "sentences": [
            "She is wearing a beautiful red dress.", "I need a new coat for the winter.",
            "These shoes are made of leather.", "He always wears a tie at work.",
            "This cotton T-shirt is very comfortable.", "I love your new boots!",
            "Is that sweater made of wool?", "She bought a silk scarf yesterday.",
            "Fashionable clothes are often expensive.", "I'm looking for some blue socks.",
            "He wears a suit for important meetings.", "The dress fits her perfectly.",
            "I prefer casual clothes to formal ones.", "Don't forget your hat and gloves!",
            "This material is very soft."
        ],
        "communication": [
            ("I love your dress! Where did you get it?", "Thank you! I bought it in London.", ["It's red.", "In the shop."]),
            ("What are you wearing to the wedding?", "A dark suit and a white shirt.", ["Yes, I am.", "At 4 PM."]),
            ("Is this jacket made of leather?", "Yes, it's real leather.", ["No, it's a coat.", "Yes, it is expensive."]),
            ("Does this shirt fit me?", "It looks a bit too big, I think.", ["Yes, I like it.", "In the mirror."]),
            ("Which shoes should I wear?", "The black ones look better.", ["I'm wearing boots.", "No, thanks."])
        ]
    },
    20: { # Module 2 Review
        "grammar": [
            ("There (be) ________ a library near here.", "is"),
            ("How much ________ these shoes cost?", "do"),
            ("I (not/eat) ________ meat.", "don't eat"),
            ("She (would like) ________ a coffee.", "would like"),
            ("They (play) ________ tennis now.", "are playing"),
            ("He (have) ________ a headache.", "has"),
            ("The lion (be) ________ very big.", "is"),
            ("It (rain) ________ yesterday.", "rained"),
            ("I (be) ________ wearing a hat.", "am"),
            ("We (go) ________ to the cinema.", "went")
        ],
        "vocab": [
            ("Library", "Biblioteca"), ("Expensive", "Caro/a"), ("Recipe", "Receta"),
            ("Waiter", "Camarero/a"), ("Healthy", "Saludable"), ("Medicine", "Medicina"),
            ("Jungle", "Selva"), ("Sunny", "Soleado"), ("Cotton", "Algodón"),
            ("Market", "Mercado")
        ],
        "sentences": [
            "The library is open now.", "This dress is more expensive than that one.",
            "I need some milk for the recipe.", "The waiter was very polite.",
            "It's important to be healthy.", "The medicine will help you.",
            "Lions live in the jungle.", "It's a sunny day.",
            "This shirt is made of cotton.", "We are going to the market."
        ],
        "communication": [
            ("Excuse me, is there a bank?", "Yes, over there.", ["I'm fine.", "At 10."]),
            ("How much is this?", "It's twenty euros.", ["It's blue.", "In the shop."]),
            ("Are you ready to order?", "Yes, the pasta please.", ["No, I'm a student.", "Yes, I am."]),
            ("What's the weather like?", "It's raining.", ["I'm fine.", "In London."]),
            ("I feel sick.", "You should see a doctor.", ["Yes, I am.", "No, thanks."])
        ]
    },
    21: { # Past Simple: Be & Regular Verbs
        "grammar": [
            ("I (be) ________ at home yesterday.", "was"),
            ("They (be) ________ very tired last night.", "were"),
            ("She (work) ________ until 8 PM.", "worked"),
            ("He (not/be) ________ at the party.", "was not"),
            ("We (watch) ________ a movie on Friday.", "watched"),
            ("Did you ________ (visit) your parents?", "visit"),
            ("They (stay) ________ in a hotel.", "stayed"),
            ("It (not/rain) ________ much last week.", "didn't rain"),
            ("I (clean) ________ my room on Saturday.", "cleaned"),
            ("Where ________ you yesterday morning?", "were")
        ],
        "vocab": [
            ("Yesterday", "Ayer"), ("Last night", "Anoche"), ("Last week", "La semana pasada"),
            ("Last year", "El año pasado"), ("Ago", "Hace (tiempo)"), ("Weekend", "Fin de semana"),
            ("Holiday", "Vacaciones"), ("Travel", "Viajar"), ("Visit", "Visitar"),
            ("Watch", "Ver/Mirar"), ("Clean", "Limpiar"), ("Stay", "Quedarse"),
            ("Work", "Trabajar"), ("Cook", "Cocinar"), ("Play", "Jugar")
        ],
        "sentences": [
            "I was very busy yesterday.", "We watched a great film last night.",
            "She visited her grandmother in the afternoon.", "They stayed in a small village.",
            "He worked late on Tuesday.", "It didn't rain at all last weekend.",
            "We played football in the park.", "I cleaned the house on Saturday morning.",
            "Were you at school yesterday?", "They were very happy with the results.",
            "She cooked a delicious dinner.", "I traveled to London two years ago.",
            "Did he finish his homework?", "We stayed at home because it was cold.",
            "The party was very fun."
        ],
        "communication": [
            ("Where were you yesterday?", "I was at work all day.", ["I'm fine.", "At 10 o'clock."]),
            ("Did you enjoy the movie?", "Yes, it was really interesting.", ["No, I am a student.", "Yes, I do."]),
            ("Was she at the party?", "No, she was too tired to go.", ["Yes, she is beautiful.", "No, she isn't."]),
            ("How was your weekend?", "It was very quiet, I stayed at home.", ["In London.", "At 8 AM."]),
            ("Did it rain last night?", "Yes, it rained for hours.", ["No, it's summer.", "Yes, I have an umbrella."])
        ]
    },
    22: { # Past Simple: Irregular Verbs
        "grammar": [
            ("I (go) ________ to the cinema yesterday.", "went"),
            ("She (buy) ________ a new car last month.", "bought"),
            ("They (have) ________ a big party.", "had"),
            ("He (not/see) ________ his friends.", "didn't see"),
            ("We (eat) ________ at a restaurant.", "ate"),
            ("Did you ________ (do) your homework?", "do"),
            ("She (give) ________ me a present.", "gave"),
            ("I (drink) ________ some orange juice.", "drank"),
            ("They (make) ________ a lot of noise.", "made"),
            ("Where ________ you go for your holidays?", "did")
        ],
        "vocab": [
            ("Went (Go)", "Fui (Ir)"), ("Bought (Buy)", "Compré (Comprar)"), ("Had (Have)", "Tuve (Tener)"),
            ("Saw (See)", "Vi (Ver)"), ("Ate (Eat)", "Comí (Comer)"), ("Did (Do)", "Hice (Hacer)"),
            ("Gave (Give)", "Di (Dar)"), ("Drank (Drink)", "Bebí (Beber)"), ("Made (Make)", "Hice (Hacer/Fabricar)"),
            ("Came (Come)", "Vine (Venir)"), ("Said (Say)", "Dije (Decir)"), ("Took (Take)", "Tomé (Tomar/Llevar)"),
            ("Wrote (Write)", "Escribí (Escribir)"), ("Slept (Sleep)", "Dormí (Dormir)"), ("Read (Read)", "Leí (Leer)")
        ],
        "sentences": [
            "I went to Paris last summer.", "She bought a beautiful dress.",
            "We had dinner at eight o'clock.", "He saw a famous actor in the street.",
            "They ate a lot of pizza.", "I did my homework in the library.",
            "She gave me a nice book for my birthday.", "I drank a lot of water after the race.",
            "We made a big mistake.", "He came home very late last night.",
            "She said 'hello' to me.", "I took a taxi to the station.",
            "He wrote a long letter to his parents.", "I slept very well last night.",
            "We read a very interesting article."
        ],
        "communication": [
            ("What did you do last night?", "I went to the cinema with friends.", ["I'm fine.", "At 9 o'clock."]),
            ("Did you buy anything at the shops?", "Yes, I bought some new shoes.", ["No, I'm a student.", "Yes, I do."]),
            ("What did you have for lunch?", "I had a sandwich and an apple.", ["In the restaurant.", "At 1 PM."]),
            ("Did you see the game yesterday?", "Yes, it was very exciting.", ["No, I don't like sports.", "Yes, I am."]),
            ("How did you get here?", "I took the bus from the center.", ["By train.", "No, thanks."])
        ]
    },
    23: { # Past Simple: Questions & Negatives
        "grammar": [
            ("________ you see the news?", "Did"),
            ("I (not/go) ________ out last night.", "didn't go"),
            ("________ she call you yesterday?", "Did"),
            ("They (not/have) ________ breakfast.", "didn't have"),
            ("What ________ you do on Saturday?", "did"),
            ("He (not/finish) ________ the report.", "didn't finish"),
            ("Where ________ they stay in London?", "did"),
            ("I (not/like) ________ the food there.", "didn't like"),
            ("How ________ she get to work?", "did"),
            ("We (not/buy) ________ anything.", "didn't buy")
        ],
        "vocab": [
            ("Question", "Pregunta"), ("Negative", "Negativo"), ("Auxiliary", "Auxiliar"),
            ("Main verb", "Verbo principal"), ("Base form", "Forma base"), ("Past time", "Tiempo pasado"),
            ("Last", "Pasado/Último"), ("Ago", "Hace"), ("When", "Cuándo"),
            ("Why", "Por qué"), ("Where", "Dónde"), ("Who", "Quién"),
            ("How", "Cómo"), ("Which", "Cuál"), ("What", "Qué")
        ],
        "sentences": [
            "Did you go to the beach last weekend?", "I didn't see my brother yesterday.",
            "Did she like the present you gave her?", "They didn't have much money for the trip.",
            "What time did the train leave?", "He didn't want to go to the party.",
            "Where did you buy those shoes?", "I didn't understand the question.",
            "How did they travel to Italy?", "We didn't see any wild animals.",
            "Did he finish his degree last year?", "I didn't hear the phone.",
            "Why did she leave so early?", "They didn't stay in a hotel.",
            "When did you start learning English?"
        ],
        "communication": [
            ("Did you have a good time?", "Yes, it was fantastic!", ["No, I'm a student.", "Yes, I am."]),
            ("Where did you go for your holidays?", "We went to the south of Spain.", ["In summer.", "By plane."]),
            ("Did it rain while you were there?", "No, the weather was perfect.", ["Yes, I have an umbrella.", "No, it's cold."]),
            ("What did she say to you?", "She said she was very busy.", ["She's a teacher.", "At 5 o'clock."]),
            ("Why didn't you call me?", "I'm sorry, I forgot my phone.", ["I'm fine.", "No, thanks."])
        ]
    },
    24: { # A Day to Remember
        "grammar": [
            ("It (be) ________ an amazing day.", "was"),
            ("Everything (start) ________ very early.", "started"),
            ("We (go) ________ to the stadium.", "went"),
            ("The atmosphere (be) ________ incredible.", "was"),
            ("I (never/forget) ________ that moment.", "will never forget"),
            ("She (take) ________ lots of photos.", "took"),
            ("We (have) ________ a wonderful time.", "had"),
            ("Suddenly, it (start) ________ to rain.", "started"),
            ("Luckily, we (have) ________ our umbrellas.", "had"),
            ("It (be) ________ the best day of my life.", "was")
        ],
        "vocab": [
            ("Amazing", "Increíble/Asombroso"), ("Memorable", "Memorable"), ("Special", "Especial"),
            ("Suddenly", "De repente"), ("Luckily", "Por suerte/Afortunadamente"), ("Finally", "Finalmente"),
            ("Atmosphere", "Ambiente"), ("Experience", "Experiencia"), ("Unforgettable", "Inolvidable"),
            ("Celebration", "Celebración"), ("Event", "Evento"), ("Moment", "Momento"),
            ("Memory", "Recuerdo"), ("Surprise", "Sorpresa"), ("Wonderful", "Maravilloso")
        ],
        "sentences": [
            "Last Saturday was a day I'll always remember.", "The wedding was a very special event.",
            "Suddenly, the music stopped playing.", "Luckily, the weather was beautiful all day.",
            "Finally, we arrived at our destination.", "The atmosphere at the concert was electric.",
            "It was a truly unforgettable experience.", "We had a big celebration for his birthday.",
            "That was the most important moment of my life.", "I have very fond memories of that day.",
            "The surprise party was a great success.", "Everything went perfectly from start to finish.",
            "It was a wonderful day for the whole family.", "I'll never forget the look on her face.",
            "We took hundreds of photos during the trip."
        ],
        "communication": [
            ("How was your wedding day?", "It was the most beautiful day of my life.", ["At 2 PM.", "In the church."]),
            ("What was the best part of the trip?", "Visiting the ancient ruins, definitely.", ["By plane.", "Yes, I liked it."]),
            ("Did anything go wrong?", "Luckily, everything was perfect.", ["No, I'm fine.", "Yes, it did."]),
            ("Was it a special occasion?", "Yes, it was my parents' 50th anniversary.", ["In the restaurant.", "At 7 o'clock."]),
            ("You look like you had a great time.", "We really did, it was unforgettable.", ["I'm happy.", "No, thanks."])
        ]
    },
    25: { # Childhood & School Days
        "grammar": [
            ("I (live) ________ in a small house when I was young.", "lived"),
            ("She (have got) ________ a lot of toys.", "had got"),
            ("We (not/have) ________ computers at school.", "didn't have"),
            ("Did you ________ (like) your primary school?", "like"),
            ("He (be) ________ very good at drawing.", "was"),
            ("They (play) ________ outside every day.", "played"),
            ("I (want) ________ to be an astronaut.", "wanted"),
            ("My favourite subject (be) ________ art.", "was"),
            ("We (not/go) ________ to bed late.", "didn't go"),
            ("________ you have a pet when you were a child?", "Did")
        ],
        "vocab": [
            ("Childhood", "Infancia"), ("Primary school", "Escuela primaria"), ("Toy", "Juguete"),
            ("Game", "Juego"), ("Friend", "Amigo/a"), ("Teacher", "Profesor/a"),
            ("Subject", "Asignatura"), ("Drawing", "Dibujo"), ("Playground", "Patio de recreo"),
            ("Memory", "Recuerdo"), ("Grow up", "Crecer"), ("Young", "Joven"),
            ("Little", "Pequeño/a"), ("Best friend", "Mejor amigo/a"), ("Hobby", "Afición")
        ],
        "sentences": [
            "I grew up in a very quiet neighborhood.", "My favorite toy was a big red car.",
            "We played hide and seek in the garden.", "I loved my primary school teacher.",
            "What did you want to be when you were little?", "I had a best friend named David.",
            "We didn't have smartphones back then.", "I was very shy when I was a child.",
            "My favorite school subject was history.", "We used to go to the park every afternoon.",
            "Did you have any pets when you were young?", "The playground was always full of children.",
            "I have many happy memories of my childhood.", "We spent all summer at the beach.",
            "I learned to ride a bike when I was six."
        ],
        "communication": [
            ("Where did you grow up?", "In a small town near the mountains.", ["I'm fine.", "At 10 years old."]),
            ("What was your favorite subject at school?", "I really liked Art and Music.", ["In the classroom.", "Yes, I did."]),
            ("Did you have any pets as a child?", "Yes, I had a dog called Max.", ["No, I'm a student.", "Yes, I am."]),
            ("Were you a good student?", "I was quite hard-working, actually.", ["Yes, I like school.", "In the library."]),
            ("What did you like doing in your free time?", "I loved playing outside with my friends.", ["I'm happy.", "At 5 o'clock."])
        ]
    },
    26: { # Travel Experiences
        "grammar": [
            ("I (go) ________ to Italy last summer.", "went"),
            ("We (stay) ________ in a beautiful hotel.", "stayed"),
            ("She (not/like) ________ the flight.", "didn't like"),
            ("Did you ________ (take) many photos?", "take"),
            ("They (see) ________ some amazing places.", "saw"),
            ("I (buy) ________ lots of souvenirs.", "bought"),
            ("The food (be) ________ delicious.", "was"),
            ("We (travel) ________ by train.", "traveled"),
            ("He (not/want) ________ to come home.", "didn't want"),
            ("How ________ the weather there?", "was")
        ],
        "vocab": [
            ("Travel", "Viajar"), ("Trip", "Viaje"), ("Journey", "Trayecto/Viaje"),
            ("Flight", "Vuelo"), ("Hotel", "Hotel"), ("Souvenir", "Recuerdo/Souvenir"),
            ("Sightseeing", "Hacer turismo"), ("Local food", "Comida local"), ("Guided tour", "Visita guiada"),
            ("Passport", "Pasaporte"), ("Ticket", "Billete"), ("Airport", "Aeropuerto"),
            ("Holiday", "Vacaciones"), ("Experience", "Experiencia"), ("Beautiful", "Hermoso/a")
        ],
        "sentences": [
            "My trip to Japan was an incredible experience.", "We stayed in a hotel near the beach.",
            "The flight was very long but comfortable.", "I took over five hundred photos!",
            "Did you try the local food while you were there?", "We went on a guided tour of the city.",
            "The scenery was absolutely beautiful.", "I bought a small souvenir for my mother.",
            "We traveled around the island by car.", "The weather was perfect for sightseeing.",
            "Don't forget to bring your passport.", "We had a wonderful holiday in Greece.",
            "The journey took ten hours by train.", "I want to go back there next year.",
            "It was the best trip I've ever had."
        ],
        "communication": [
            ("How was your holiday?", "It was fantastic, thank you.", ["In London.", "At 8 o'clock."]),
            ("Where did you stay?", "In a charming little guest house.", ["By plane.", "Yes, I liked it."]),
            ("What was the best thing about the trip?", "The local food was amazing.", ["In the hotel.", "By train."]),
            ("Was the flight on time?", "Yes, it was perfectly on schedule.", ["No, I am tired.", "Yes, it is big."]),
            ("Did you buy any souvenirs?", "Only a few postcards for my friends.", ["Yes, I am.", "No, thanks."])
        ]
    },
    27: { # Nature & Landscapes
        "grammar": [
            ("The mountain is ________ (high) than the hill.", "higher"),
            ("This lake is the ________ (deep) in the country.", "deepest"),
            ("The forest (be) ________ full of trees.", "is"),
            ("There (be) ________ a beautiful river here.", "is"),
            ("Are ________ any animals in the woods?", "there"),
            ("The scenery is ________ (beautiful) in autumn.", "more beautiful"),
            ("It is the ________ (large) island in the world.", "largest"),
            ("I (love) ________ walking by the coast.", "love"),
            ("The river (flow) ________ into the sea.", "flows"),
            ("They (be) ________ hiking in the valley.", "are")
        ],
        "vocab": [
            ("Mountain", "Montaña"), ("Hill", "Colina"), ("Valley", "Valle"),
            ("River", "Río"), ("Lake", "Lago"), ("Forest", "Bosque"),
            ("Woods", "Arboleda/Bosque"), ("Coast", "Costa"), ("Island", "Isla"),
            ("Sea", "Mar"), ("Ocean", "Océano"), ("Waterfall", "Cascada"),
            ("Scenery", "Paisaje"), ("Nature", "Naturaleza"), ("Environment", "Medio ambiente")
        ],
        "sentences": [
            "The scenery in the mountains is breathtaking.", "We walked through a dense forest.",
            "The river is very long and deep.", "There is a beautiful waterfall near the village.",
            "The valley is very green in the spring.", "I love the peace and quiet of nature.",
            "Is it the highest mountain in Europe?", "We spent the day at the coast.",
            "The island is only accessible by boat.", "The environment must be protected.",
            "The lake is perfect for swimming in summer.", "The trees are changing color in the woods.",
            "The sea was very calm today.", "He is an expert on local wildlife.",
            "What a beautiful landscape!"
        ],
        "communication": [
            ("What a beautiful view!", "Yes, it's absolutely stunning.", ["In the forest.", "At 10 AM."]),
            ("Is it far to the top of the hill?", "No, it's about a twenty-minute walk.", ["Yes, I am tired.", "No, it isn't."]),
            ("Do you like spending time in nature?", "Yes, I find it very relaxing.", ["No, I'm a student.", "Yes, I do."]),
            ("Are there many rivers in this area?", "Yes, there are several large ones.", ["In the sea.", "Yes, they are."]),
            ("What is the highest mountain in your country?", "It's called Mount Teide.", ["It's very high.", "In Spain."])
        ]
    },
    28: { # Extreme Weather
        "grammar": [
            ("It is the ________ (hot) day of the year.", "hottest"),
            ("The wind is ________ (strong) than yesterday.", "stronger"),
            ("There (be) ________ a big storm last night.", "was"),
            ("It (snow) ________ a lot in the mountains.", "snows"),
            ("Are you ________ (scared) of thunder?", "scared"),
            ("The temperature is ________ (low) than zero.", "lower"),
            ("It (be) ________ the worst flood in history.", "was"),
            ("I (not/like) ________ extreme heat.", "don't like"),
            ("They (be) ________ warning people about the hurricane.", "are"),
            ("The sun (be) ________ shining very brightly.", "is")
        ],
        "vocab": [
            ("Storm", "Tormenta"), ("Thunder", "Trueno"), ("Lightning", "Relámpago"),
            ("Hurricane", "Huracán"), ("Flood", "Inundación"), ("Drought", "Sequía"),
            ("Blizzard", "Tormenta de nieve"), ("Fog", "Niebla"), ("Ice", "Hielo"),
            ("Temperature", "Temperatura"), ("Warning", "Aviso/Advertencia"), ("Dangerous", "Peligroso/a"),
            ("Extreme", "Extremo/a"), ("Dry", "Seco/a"), ("Wet", "Mojado/a")
        ],
        "sentences": [
            "The storm caused a lot of damage to the city.", "I heard the thunder from miles away.",
            "Lightning struck a tree in the park.", "There was a massive flood after the heavy rain.",
            "The temperature dropped to minus ten degrees.", "A blizzard is a very dangerous snowstorm.",
            "The drought lasted for three months.", "It was so foggy I couldn't see the road.",
            "The ice on the lake is very thick.", "Extreme weather is becoming more common.",
            "The hurricane is moving towards the coast.", "Stay inside during the thunderstorm.",
            "The ground is very dry after the heatwave.", "Be careful, the roads are very wet.",
            "The weather warning is for heavy snow."
        ],
        "communication": [
            ("Did you hear the thunder last night?", "Yes, it was very loud!", ["In the sky.", "At 11 PM."]),
            ("Is it safe to drive in this fog?", "No, you should wait until it clears.", ["Yes, I have a car.", "No, it's dangerous."]),
            ("What was the hottest temperature yesterday?", "It reached forty degrees.", ["In summer.", "Yes, it was."]),
            ("Are you worried about the flood?", "Yes, the river is rising very fast.", ["No, I am fine.", "Yes, I do."]),
            ("Is it going to snow later?", "The forecast says there's a big blizzard coming.", ["No, it's cold.", "Yes, I like it."])
        ]
    },
    29: { # Life Stories & Biographies
        "grammar": [
            ("He (be) ________ born in 1990.", "was"),
            ("She (study) ________ medicine at university.", "studied"),
            ("They (move) ________ to New York in 2005.", "moved"),
            ("He (not/finish) ________ his first book.", "didn't finish"),
            ("We (meet) ________ ten years ago.", "met"),
            ("Did she ________ (win) the Nobel Prize?", "win"),
            ("He (become) ________ famous in the 1980s.", "became"),
            ("I (read) ________ his biography last week.", "read"),
            ("They (live) ________ in London for many years.", "lived"),
            ("When ________ he die?", "did")
        ],
        "vocab": [
            ("Biography", "Biografía"), ("Life story", "Historia de vida"), ("Born", "Nacido/a"),
            ("Death", "Muerte"), ("Career", "Carrera"), ("Achievement", "Logro"),
            ("Successful", "Exitoso/a"), ("Famous", "Famoso/a"), ("Talented", "Talentoso/a"),
            ("Move", "Mudarse"), ("Graduate", "Graduarse"), ("Marry", "Casarse"),
            ("Discover", "Descubrir"), ("Invent", "Inventar"), ("Inspiring", "Inspirador/a")
        ],
        "sentences": [
            "His life story is truly inspiring.", "She was born in a small village in Spain.",
            "He studied engineering at university.", "They moved to Paris to start a new business.",
            "She became a very famous scientist.", "He won many awards during his career.",
            "The biography was written by his best friend.", "She graduated from Oxford in 1995.",
            "He invented a new type of battery.", "They married in a beautiful ceremony.",
            "He discovered a new planet.", "Her achievements are recognized worldwide.",
            "He lived a very long and happy life.", "The book tells the story of her childhood.",
            "He was a very talented musician."
        ],
        "communication": [
            ("Who is your favorite historical figure?", "I really admire Marie Curie.", ["She's a scientist.", "Yes, she is."]),
            ("When was he born?", "In eighteen ninety-five.", ["In London.", "Yes, he was."]),
            ("What did she achieve in her life?", "She discovered two new elements.", ["She was famous.", "At university."]),
            ("Is the biography interesting?", "Yes, I couldn't put it down.", ["No, I'm fine.", "Yes, it is."]),
            ("Where did they move to?", "They moved to the United States.", ["In 2010.", "By plane."])
        ]
    },
    30: { # Module 3 Review
        "grammar": [
            ("I (be) ________ at home yesterday.", "was"),
            ("They (go) ________ to London last week.", "went"),
            ("She (not/see) ________ the movie.", "didn't see"),
            ("What ________ you do on Saturday?", "did"),
            ("He (be) ________ born in 1985.", "was"),
            ("We (visit) ________ the museum.", "visited"),
            ("The mountain is ________ (high) than the hill.", "higher"),
            ("It is the ________ (hot) day.", "hottest"),
            ("I (live) ________ here since 2010.", "have lived"),
            ("Did you ________ (like) the trip?", "like")
        ],
        "vocab": [
            ("Yesterday", "Ayer"), ("Went", "Fui/Fue"), ("Bought", "Compré/Compró"),
            ("Amazing", "Increíble"), ("Childhood", "Infancia"), ("Souvenir", "Recuerdo"),
            ("Landscape", "Paisaje"), ("Storm", "Tormenta"), ("Biography", "Biografía"),
            ("Memory", "Recuerdo")
        ],
        "sentences": [
            "I was happy yesterday.", "We went to the beach.",
            "She didn't buy anything.", "What did you see?",
            "He was born in Madrid.", "The scenery was beautiful.",
            "It was a memorable day.", "The storm was very strong.",
            "I read a good book.", "We had a lot of fun."
        ],
        "communication": [
            ("Where were you?", "At the cinema.", ["I'm fine.", "At 9."]),
            ("Did you like it?", "Yes, it was great.", ["No, I'm a student.", "Yes, I am."]),
            ("How was your holiday?", "It was fantastic.", ["By plane.", "In summer."]),
            ("When was he born?", "In 1990.", ["In Spain.", "Yes, he was."]),
            ("What's the weather like?", "It's stormy.", ["I'm fine.", "No, thanks."])
        ]
    },
    31: { # Entertainment & Leisure
        "grammar": [
            ("I (enjoy) ________ watching films.", "enjoy"),
            ("She (like) ________ listening to music.", "likes"),
            ("We (go) ________ to the cinema once a week.", "go"),
            ("They (not/like) ________ video games.", "don't like"),
            ("Do you ________ (play) any instruments?", "play"),
            ("He (be) ________ interested in photography.", "is"),
            ("I (love) ________ going to concerts.", "love"),
            ("We (watch) ________ a comedy last night.", "watched"),
            ("She (not/have) ________ much free time.", "doesn't have"),
            ("What ________ your favorite hobby?", "is")
        ],
        "vocab": [
            ("Cinema", "Cine"), ("Theatre", "Teatro"), ("Concert", "Concierto"),
            ("Exhibition", "Exposición"), ("Museum", "Museo"), ("Film", "Película"),
            ("Music", "Música"), ("Instrument", "Instrumento"), ("Photography", "Fotografía"),
            ("Painting", "Pintura"), ("Dancing", "Baile"), ("Reading", "Lectura"),
            ("Gaming", "Juegos/Videojuegos"), ("Leisure", "Ocio"), ("Hobby", "Afición")
        ],
        "sentences": [
            "I enjoy going to the cinema on Fridays.", "She plays the piano very well.",
            "We went to a rock concert last month.", "There is a new exhibition at the museum.",
            "He spends a lot of time gaming.", "My favorite hobby is reading novels.",
            "Do you like watching documentaries?", "We saw a very funny comedy at the theatre.",
            "I am interested in learning photography.", "They go dancing every Saturday night.",
            "Music is a big part of my life.", "I don't have much free time during the week.",
            "She loves painting landscapes.", "What kind of films do you like?",
            "It was a very entertaining evening."
        ],
        "communication": [
            ("Do you have any hobbies?", "Yes, I love playing tennis and reading.", ["I'm a teacher.", "At 5 PM."]),
            ("What kind of music do you like?", "I mostly listen to pop and rock.", ["In the radio.", "Yes, I do."]),
            ("Have you seen any good films lately?", "Yes, I saw a great thriller last night.", ["No, I'm a student.", "At the cinema."]),
            ("Do you play any musical instruments?", "I'm learning to play the guitar.", ["Yes, I am.", "No, I don't."]),
            ("Would you like to go to the theatre tonight?", "That sounds like a great idea!", ["I'm fine.", "No, thanks."])
        ]
    },
    32: { # Technology & Digital World
        "grammar": [
            ("I (use) ________ my laptop for work.", "use"),
            ("She (have got) ________ a new smartphone.", "has got"),
            ("We (not/need) ________ a printer.", "don't need"),
            ("Do you ________ (know) how to use this app?", "know"),
            ("They (be) ________ always online.", "are"),
            ("I (buy) ________ a new tablet yesterday.", "bought"),
            ("He (not/like) ________ social media.", "doesn't like"),
            ("We (download) ________ the file now.", "are downloading"),
            ("The battery (be) ________ dead.", "is"),
            ("________ you have a good internet connection?", "Do")
        ],
        "vocab": [
            ("Computer", "Ordenador/Computadora"), ("Laptop", "Portátil"), ("Smartphone", "Teléfono inteligente"),
            ("Tablet", "Tableta"), ("Internet", "Internet"), ("Website", "Sitio web"),
            ("Application (App)", "Aplicación"), ("Software", "Software"), ("Hardware", "Hardware"),
            ("Keyboard", "Teclado"), ("Screen", "Pantalla"), ("Battery", "Batería"),
            ("Charger", "Cargador"), ("Connection", "Conexión"), ("Password", "Contraseña")
        ],
        "sentences": [
            "I use my laptop every day for university.", "My smartphone has a very good camera.",
            "We need a faster internet connection.", "Don't forget to charge your tablet.",
            "What is the password for the Wi-Fi?", "I downloaded a new app for learning English.",
            "The screen of my phone is broken.", "I need a new charger for my laptop.",
            "She spends too much time on her computer.", "The software needs to be updated.",
            "I can't find the file on my hard drive.", "He is very good at using technology.",
            "The battery only lasts for two hours.", "Do you use a keyboard or a mouse?",
            "The website is very easy to navigate."
        ],
        "communication": [
            ("What's wrong with your phone?", "The battery is dead and I forgot my charger.", ["It's blue.", "At 10 o'clock."]),
            ("How do I connect to the Wi-Fi?", "You need to enter this password.", ["In the room.", "Yes, I do."]),
            ("Do you use any social media?", "Yes, I use Instagram and LinkedIn.", ["No, I'm a student.", "At work."]),
            ("Is your laptop new?", "Yes, I bought it just last week.", ["No, it's expensive.", "Yes, I am."]),
            ("Can you help me with this app?", "Sure, what's the problem?", ["I'm happy.", "No, thanks."])
        ]
    },
    33: { # Social Media & Communication
        "grammar": [
            ("I (post) ________ photos on Instagram.", "post"),
            ("She (not/send) ________ many emails.", "doesn't send"),
            ("We (chat) ________ online every evening.", "chat"),
            ("Do you ________ (follow) any famous people?", "follow"),
            ("They (share) ________ a lot of news.", "share"),
            ("I (receive) ________ a message from him.", "received"),
            ("He (not/check) ________ his notifications.", "doesn't check"),
            ("We (be) ________ talking on Zoom.", "are"),
            ("The video (go) ________ viral.", "went"),
            ("________ you see my last comment?", "Did")
        ],
        "vocab": [
            ("Social media", "Redes sociales"), ("Profile", "Perfil"), ("Follower", "Seguidor/a"),
            ("Message", "Mensaje"), ("Email", "Correo electrónico"), ("Chat", "Chat/Charlar"),
            ("Comment", "Comentario"), ("Share", "Compartir"), ("Like", "Me gusta"),
            ("Notification", "Notificación"), ("Post", "Publicación/Publicar"), ("Account", "Cuenta"),
            ("Online", "En línea"), ("Viral", "Viral"), ("Privacy", "Privacidad")
        ],
        "sentences": [
            "I check my social media notifications every morning.", "She has over ten thousand followers.",
            "We chat on WhatsApp every day.", "Don't forget to reply to my email.",
            "He posted a very interesting comment.", "I shared the video with all my friends.",
            "The news went viral in just a few hours.", "I need to update my profile picture.",
            "We had a meeting on Zoom this afternoon.", "I received a message from my brother.",
            "Be careful about your privacy settings.", "I don't follow many celebrities.",
            "He deleted his Facebook account.", "She is always online on her phone.",
            "Did you like the photo I posted?"
        ],
        "communication": [
            ("Did you get my message?", "Yes, I'm sorry I didn't reply sooner.", ["I'm fine.", "At 9 PM."]),
            ("Are you on social media?", "Yes, I have an account on most platforms.", ["No, I'm a student.", "Yes, I am."]),
            ("Did you see that viral video?", "Yes, everyone is talking about it.", ["In the internet.", "No, I don't."]),
            ("How do you stay in touch with friends?", "We usually chat on social media.", ["By train.", "At home."]),
            ("Can I follow you on Instagram?", "Sure, my username is @traveler123.", ["Yes, I am.", "No, thanks."])
        ]
    },
    34: { # Future Plans: Be going to
        "grammar": [
            ("I (be going to) ________ visit my parents.", "am going to"),
            ("She (be going to) ________ buy a new car.", "is going to"),
            ("We (not/be going to) ________ stay at home.", "are not going to"),
            ("________ you going to study tonight?", "Are"),
            ("They (be going to) ________ travel to Japan.", "are going to"),
            ("He (be going to) ________ start a new job.", "is going to"),
            ("What ________ you going to do this weekend?", "are"),
            ("I (not/be going to) ________ eat out.", "am not going to"),
            ("She (be going to) ________ learn to drive.", "is going to"),
            ("________ he going to call you?", "Is")
        ],
        "vocab": [
            ("Plan", "Plan"), ("Intention", "Intención"), ("Decision", "Decisión"),
            ("Future", "Futuro"), ("Tonight", "Esta noche"), ("Tomorrow", "Mañana"),
            ("Next week", "La semana que viene"), ("Next month", "El mes que viene"), ("Soon", "Pronto"),
            ("Visit", "Visitar"), ("Study", "Estudiar"), ("Buy", "Comprar"),
            ("Travel", "Viajar"), ("Start", "Empezar"), ("Meet", "Quedar/Encontrarse")
        ],
        "sentences": [
            "I am going to study hard for my exams.", "She is going to buy a new laptop soon.",
            "We are going to have dinner at a restaurant tonight.", "They are going to travel around Europe next summer.",
            "He is going to start his own business.", "Are you going to visit your grandparents this weekend?",
            "What are you going to wear to the party?", "I'm not going to watch TV tonight.",
            "She's going to learn a new language.", "They are going to meet at the station.",
            "Is he going to help you with your project?", "We are going to move to a bigger house.",
            "I'm going to take a nap this afternoon.", "What time are you going to arrive?",
            "It's going to be a very busy week."
        ],
        "communication": [
            ("What are your plans for the weekend?", "I'm going to go hiking with some friends.", ["I'm fine.", "At 10 AM."]),
            ("Are you going to the party tonight?", "No, I'm going to stay at home and relax.", ["Yes, I am a student.", "No, I don't."]),
            ("What are you going to do after university?", "I'm going to look for a job in London.", ["In the library.", "At 4 PM."]),
            ("Is she going to come with us?", "Yes, she's going to meet us there.", ["No, she isn't.", "Yes, she is happy."]),
            ("When are you going to finish your work?", "I'm going to finish it by tomorrow morning.", ["In the office.", "No, thanks."])
        ]
    },
    35: { # Future Plans: Present Continuous
        "grammar": [
            ("I (meet) ________ my friend at 6 PM.", "am meeting"),
            ("She (fly) ________ to Paris tomorrow.", "is flying"),
            ("We (not/work) ________ this Saturday.", "are not working"),
            ("What time ________ you leaving?", "are"),
            ("They (have) ________ a party on Friday night.", "are having"),
            ("He (see) ________ the doctor tomorrow morning.", "is seeing"),
            ("I (not/doing) ________ anything special tonight.", "am not doing"),
            ("We (stay) ________ in a hotel by the beach.", "are staying"),
            ("She (start) ________ her new course on Monday.", "is starting"),
            ("________ they coming to the wedding?", "Are")
        ],
        "vocab": [
            ("Arrangement", "Acuerdo/Plan fijo"), ("Meeting", "Reunión/Cita"), ("Appointment", "Cita"),
            ("Flight", "Vuelo"), ("Schedule", "Horario"), ("Confirmed", "Confirmado"),
            ("Tonight", "Esta noche"), ("Tomorrow morning", "Mañana por la mañana"), ("On Friday", "El viernes"),
            ("Next month", "El mes que viene"), ("Leave", "Irse/Salir"), ("Arrive", "Llegar"),
            ("Stay", "Quedarse"), ("Meet", "Quedar/Encontrarse"), ("Work", "Trabajar")
        ],
        "sentences": [
            "I am meeting my boss at ten o'clock tomorrow.", "She is flying to New York next Tuesday.",
            "We are having a big family dinner on Sunday.", "What time are you arriving at the station?",
            "They are playing tennis this afternoon.", "I am seeing the dentist on Wednesday.",
            "We are staying at my aunt's house for the weekend.", "She is starting her new job next month.",
            "Are they coming to visit us at Christmas?", "I am not doing anything tonight, so I can help you.",
            "He is giving a presentation tomorrow afternoon.", "We are taking the train to London on Friday.",
            "What are you doing this weekend?", "I am going to the cinema with Sarah tonight.",
            "She is moving into her new apartment tomorrow."
        ],
        "communication": [
            ("What are you doing tonight?", "I'm meeting some friends for a drink.", ["I'm fine.", "At 8 o'clock."]),
            ("Are you working this weekend?", "No, I'm having a few days off.", ["Yes, I am a teacher.", "No, I don't."]),
            ("What time is your flight leaving?", "It's leaving at half past seven tomorrow.", ["At the airport.", "Yes, it is."]),
            ("Are they coming to the party?", "Yes, they're arriving at around nine.", ["In the house.", "Yes, they are."]),
            ("Do you have any appointments tomorrow?", "Yes, I'm seeing the doctor at eleven.", ["I'm happy.", "No, thanks."])
        ]
    },
    36: { # Hopes & Ambitions: Will vs Be going to
        "grammar": [
            ("I think I (travel) ________ the world one day.", "will travel"),
            ("I (be going to) ________ study medicine next year.", "am going to"),
            ("I'm sure you (be) ________ a great doctor.", "will be"),
            ("We (be going to) ________ move to a new city.", "are going to"),
            ("Perhaps they (win) ________ the lottery.", "will win"),
            ("He (be going to) ________ start a business soon.", "is going to"),
            ("I hope it (not/rain) ________ tomorrow.", "won't rain"),
            ("What ________ you going to do about the problem?", "are"),
            ("I (help) ________ you with that bag.", "will help"),
            ("She (be going to) ________ learn to play the violin.", "is going to")
        ],
        "vocab": [
            ("Hope", "Esperanza/Esperar"), ("Ambition", "Ambición"), ("Dream", "Sueño"),
            ("Goal", "Objetivo/Meta"), ("Prediction", "Predicción"), ("Intention", "Intención"),
            ("Perhaps", "Quizás"), ("Probably", "Probablemente"), ("Maybe", "Tal vez"),
            ("Sure", "Seguro"), ("Certainly", "Ciertamente"), ("One day", "Algún día"),
            ("In the future", "En el futuro"), ("Soon", "Pronto"), ("Next year", "El año que viene")
        ],
        "sentences": [
            "I hope I will find a good job after graduation.", "My ambition is to travel all over the world.",
            "I am going to start my own company next year.", "I think she will be a very successful artist.",
            "What are your goals for the future?", "I'm sure you will achieve all your dreams.",
            "I am going to learn how to speak Italian.", "Perhaps we will move to the countryside one day.",
            "He is going to study architecture at university.", "I hope the weather will be nice for our trip.",
            "I will help you with your homework if you like.", "We are going to visit Japan next summer.",
            "Maybe they will win the game tonight.", "I am going to save enough money to buy a house.",
            "I think technology will change even more in the future."
        ],
        "communication": [
            ("What are your hopes for the future?", "I hope I will have a happy family and a good job.", ["I'm fine.", "At 25."]),
            ("What are you going to do after school?", "I'm going to study engineering at university.", ["In the classroom.", "Yes, I am."]),
            ("Do you think you will ever live abroad?", "Maybe, I'd like to live in Spain for a year.", ["By plane.", "No, I don't."]),
            ("Are you going to buy that car?", "Yes, I'm going to buy it next month.", ["No, it's expensive.", "Yes, I am."]),
            ("I'm so tired!", "Don't worry, I'll do the washing up for you.", ["I'm happy.", "No, thanks."])
        ]
    },
    37: { # Predictions & Certainty
        "grammar": [
            ("It (probably/rain) ________ later.", "will probably rain"),
            ("I'm sure she (pass) ________ the exam.", "will pass"),
            ("They (definitely/not/come) ________ to the party.", "definitely won't come"),
            ("I think the world (change) ________ a lot.", "will change"),
            ("It (might) ________ snow tomorrow.", "might"),
            ("I'm certain he (be) ________ late.", "will be"),
            ("She (probably/not/finish) ________ on time.", "probably won't finish"),
            ("Do you think robots (do) ________ all the work?", "will do"),
            ("The sun (shine) ________ all day, I'm sure.", "will shine"),
            ("There (may) ________ be a problem with the car.", "may")
        ],
        "vocab": [
            ("Prediction", "Predicción"), ("Certainty", "Certeza"), ("Probably", "Probablemente"),
            ("Definitely", "Definitivamente/Sin duda"), ("Certainly", "Ciertamente"), ("Possibly", "Posiblemente"),
            ("Maybe", "Tal vez"), ("Might", "Podría/Puede que"), ("May", "Podría/Puede que"),
            ("Sure", "Seguro/a"), ("Certain", "Seguro/a/Cierto/a"), ("Expect", "Esperar/Prever"),
            ("Future", "Futuro"), ("Forecast", "Pronóstico"), ("Believe", "Creer")
        ],
        "sentences": [
            "I think the weather will be hot next week.", "I'm sure you will enjoy the movie.",
            "They will definitely win the championship.", "It might be cold tonight, so take a jacket.",
            "I don't think he will arrive on time.", "There probably won't be any tickets left.",
            "I'm certain that technology will continue to advance.", "The forecast says it will probably rain tomorrow.",
            "Do you believe that people will live on Mars?", "She might not come to the meeting.",
            "We definitely won't finish the project today.", "I expect that prices will go up next year.",
            "It may be difficult to find a parking space.", "I'm sure everything will be fine.",
            "Do you think the world will be a better place?"
        ],
        "communication": [
            ("Do you think it will rain today?", "It might, the sky is very cloudy.", ["In summer.", "Yes, it is."]),
            ("Are you sure they will come?", "Yes, they definitely said they would be here.", ["No, I am tired.", "Yes, I do."]),
            ("What do you think will happen next?", "I'm not sure, but I think things will improve.", ["In the future.", "At 5 PM."]),
            ("Will you be at the meeting tomorrow?", "I'll probably be there, but I'm not certain.", ["No, I'm a student.", "Yes, I am."]),
            ("Do you think he'll pass the test?", "I'm sure he will, he's studied very hard.", ["I'm happy.", "No, thanks."])
        ]
    },
    38: { # Inventions & Discoveries
        "grammar": [
            ("The wheel (be) ________ a very old invention.", "is"),
            ("Penicillin (be) ________ discovered by Alexander Fleming.", "was"),
            ("Scientists (work) ________ on a new cure.", "are working"),
            ("Who (invent) ________ the telephone?", "invented"),
            ("They (make) ________ an important discovery.", "made"),
            ("The internet (change) ________ the world.", "has changed"),
            ("We (not/have) ________ electricity in the past.", "didn't have"),
            ("Computers (be) ________ getting smaller and faster.", "are"),
            ("What (be) ________ the most important invention?", "is"),
            ("The light bulb (be) ________ invented by Edison.", "was")
        ],
        "vocab": [
            ("Invention", "Invento"), ("Discovery", "Descubrimiento"), ("Inventor", "Inventor/a"),
            ("Scientist", "Científico/a"), ("Technology", "Tecnología"), ("Machine", "Máquina"),
            ("Device", "Dispositivo"), ("Improvement", "Mejora"), ("Create", "Crear"),
            ("Design", "Diseñar"), ("Develop", "Desarrollar"), ("Solve", "Resolver"),
            ("Problem", "Problema"), ("Future", "Futuro"), ("Useful", "Útil")
        ],
        "sentences": [
            "The printing press was a revolutionary invention.", "The discovery of fire changed human history.",
            "Who do you think was the greatest inventor?", "Scientists are constantly making new discoveries.",
            "The telephone was invented in the nineteenth century.", "The internet is a very useful tool for learning.",
            "He developed a new way to produce energy.", "This device helps people to communicate better.",
            "Electricity is essential for modern life.", "The wheel made transportation much easier.",
            "Vaccines have saved millions of lives.", "The microscope allows us to see tiny things.",
            "Inventions often solve difficult problems.", "She is a very talented scientist.",
            "The airplane was a major technological achievement."
        ],
        "communication": [
            ("What is the most useful invention, in your opinion?", "I think the internet is the most important one.", ["It's blue.", "At 10 AM."]),
            ("Who discovered gravity?", "It was Isaac Newton.", ["In the garden.", "Yes, he did."]),
            ("Do you like using new technology?", "Yes, I find it very interesting and helpful.", ["No, I'm a student.", "Yes, I do."]),
            ("When was the first computer invented?", "The first programmable computer was built in the 1940s.", ["In the office.", "Yes, it was."]),
            ("What would life be like without electricity?", "It would be very difficult and completely different.", ["I'm happy.", "No, thanks."])
        ]
    },
    39: { # Modern Life vs Traditional Life
        "grammar": [
            ("Modern life is ________ (busy) than traditional life.", "busier"),
            ("Cities (be) ________ more crowded now.", "are"),
            ("In the past, people (live) ________ in small villages.", "lived"),
            ("Technology (make) ________ our lives easier.", "makes"),
            ("Traditions (be) ________ still important to some people.", "are"),
            ("We (have) ________ more choices today.", "have"),
            ("Life (not/be) ________ as slow as it used to be.", "is"),
            ("People (work) ________ longer hours now.", "work"),
            ("Which (be) ________ better, the past or the present?", "is"),
            ("Everything (change) ________ so quickly.", "changes")
        ],
        "vocab": [
            ("Modern", "Moderno/a"), ("Traditional", "Tradicional"), ("Past", "Pasado"),
            ("Present", "Presente"), ("Society", "Sociedad"), ("Culture", "Cultura"),
            ("Technology", "Tecnología"), ("Lifestyle", "Estilo de vida"), ("Busy", "Ocupado/a"),
            ("Slow", "Lento/a"), ("Fast", "Rápido/a"), ("Crowded", "Abarrotado/a"),
            ("Quiet", "Tranquilo/a"), ("Convenient", "Conveniente/Práctico"), ("Change", "Cambio/Cambiar")
        ],
        "sentences": [
            "Modern life is much faster than it was in the past.", "Many people still follow traditional customs.",
            "Technology has changed the way we live and work.", "Life in a big city can be very stressful.",
            "Traditional food is often healthier than fast food.", "We have more opportunities today than ever before.",
            "In the past, families were usually larger.", "Modern technology makes communication very easy.",
            "Some people prefer a simpler, traditional lifestyle.", "The world is changing very quickly.",
            "Cities are becoming more and more crowded.", "It's important to keep our cultural traditions alive.",
            "Is modern life really better than traditional life?", "We spend a lot of time using digital devices.",
            "The pace of life in the countryside is much slower."
        ],
        "communication": [
            ("Do you prefer modern or traditional life?", "I like the conveniences of modern life, but I value traditions too.", ["I'm fine.", "At 9 AM."]),
            ("Is your city very modern?", "Yes, there are lots of new buildings and high-tech facilities.", ["In the center.", "Yes, it is."]),
            ("Do you think life was better in the past?", "Not really, I think we have more freedom and better health today.", ["No, I'm a student.", "Yes, I do."]),
            ("Are traditions important in your country?", "Yes, we have many festivals that we celebrate every year.", ["In the street.", "Yes, they are."]),
            ("Do you find modern life stressful?", "Sometimes, because everything moves so fast.", ["I'm happy.", "No, thanks."])
        ]
    },
    40: { # Module 4 Review
        "grammar": [
            ("I (enjoy) ________ reading books.", "enjoy"),
            ("She (have got) ________ a new phone.", "has got"),
            ("We (chat) ________ online every day.", "chat"),
            ("I (be going to) ________ travel next week.", "am going to"),
            ("He (meet) ________ his friends at 8 PM.", "is meeting"),
            ("I think it (rain) ________ tomorrow.", "will rain"),
            ("It (might) ________ be cold tonight.", "might"),
            ("Who (invent) ________ the internet?", "invented"),
            ("Modern life is ________ (fast) than traditional life.", "faster"),
            ("Do you ________ (know) how to use this app?", "know")
        ],
        "vocab": [
            ("Hobby", "Afición"), ("Laptop", "Portátil"), ("Message", "Mensaje"),
            ("Plan", "Plan"), ("Meeting", "Reunión"), ("Ambition", "Ambición"),
            ("Prediction", "Predicción"), ("Invention", "Invento"), ("Modern", "Moderno"),
            ("Technology", "Tecnología")
        ],
        "sentences": [
            "I enjoy going to the cinema.", "My smartphone is very useful.",
            "I sent you an email yesterday.", "We are going to visit London.",
            "He is having a party on Saturday.", "I hope you will be happy.",
            "It will probably be sunny tomorrow.", "The telephone was a great invention.",
            "Life is very busy in the city.", "I use my computer every day."
        ],
        "communication": [
            ("What are your hobbies?", "I like swimming and painting.", ["I'm a teacher.", "At 5."]),
            ("Did you get my email?", "Yes, I'll reply later.", ["No, I'm a student.", "Yes, I am."]),
            ("What are you doing tonight?", "I'm staying at home.", ["In the house.", "At 10."]),
            ("Do you think it will rain?", "I'm not sure, maybe.", ["No, it's summer.", "Yes, I have an umbrella."]),
            ("Is this app easy to use?", "Yes, it's very simple.", ["No, thanks.", "Yes, I am."])
        ]
    },
    41: { # Body & Health
        "grammar": [
            ("I (have got) ________ a headache.", "have got"),
            ("Her eyes (be) ________ blue.", "are"),
            ("He (hurt) ________ his leg yesterday.", "hurt"),
            ("We (need) ________ to exercise more.", "need"),
            ("She (be) ________ very tall.", "is"),
            ("Do you ________ (feel) well today?", "feel"),
            ("My back (be) ________ aching.", "is"),
            ("They (not/have) ________ any health problems.", "don't have"),
            ("Your heart (beat) ________ very fast.", "beats"),
            ("He (wash) ________ his hands frequently.", "washes")
        ],
        "vocab": [
            ("Head", "Cabeza"), ("Eye", "Ojo"), ("Ear", "Oreja"),
            ("Nose", "Nariz"), ("Mouth", "Boca"), ("Neck", "Cuello"),
            ("Shoulder", "Hombro"), ("Arm", "Brazo"), ("Hand", "Mano"),
            ("Finger", "Dedo"), ("Leg", "Pierna"), ("Foot", "Pie (Pies: Feet)"),
            ("Knee", "Rodilla"), ("Back", "Espalda"), ("Stomach", "Estómago"),
            ("Heart", "Corazón"), ("Blood", "Sangre"), ("Skin", "Piel"),
            ("Health", "Salud"), ("Body", "Cuerpo")
        ],
        "sentences": [
            "I have got a pain in my shoulder.", "She has very long legs.",
            "Wash your hands before eating.", "He hurt his knee playing football.",
            "The heart pumps blood around the body.", "Your eyes are the same color as your father's.",
            "I need to see a dentist about my tooth.", "Drink plenty of water for healthy skin.",
            "My back is very stiff today.", "She has a beautiful smile.",
            "He is quite tall for his age.", "I feel a bit tired today.",
            "Exercising is good for your health.", "His stomach was making strange noises.",
            "The body needs rest after a long day."
        ],
        "communication": [
            ("What's the matter?", "I have a terrible headache.", ["It's blue.", "At 10 o'clock."]),
            ("How do you feel?", "I feel much better today, thank you.", ["No, I'm a student.", "Yes, I am."]),
            ("You look a bit pale.", "I think I need to sit down for a moment.", ["I'm happy.", "No, thanks."]),
            ("Where does it hurt?", "Right here, in my left arm.", ["In the hospital.", "Yes, it does."]),
            ("Are you feeling alright?", "Not really, I feel a bit dizzy.", ["I'm a doctor.", "No, thanks."])
        ]
    },
    42: { # Common Illnesses
        "grammar": [
            ("I (catch) ________ a cold last week.", "caught"),
            ("She (have) ________ a fever.", "has"),
            ("He (not/go) ________ to work because he was ill.", "didn't go"),
            ("We (be) ________ all sick.", "are"),
            ("Do you ________ (have) a sore throat?", "have"),
            ("They (be) ________ coughing a lot.", "are"),
            ("I (take) ________ some aspirin.", "took"),
            ("She (need) ________ to stay in bed.", "needs"),
            ("The medicine (make) ________ me feel sleepy.", "makes"),
            ("________ you feeling better now?", "Are")
        ],
        "vocab": [
            ("Cold", "Resfriado"), ("Flu", "Gripe"), ("Fever", "Fiebre"),
            ("Cough", "Tos/Toser"), ("Sore throat", "Dolor de garganta"), ("Headache", "Dolor de cabeza"),
            ("Stomach ache", "Dolor de estómago"), ("Toothache", "Dolor de muelas"), ("Backache", "Dolor de espalda"),
            ("Temperature", "Temperatura"), ("Medicine", "Medicina/Medicamento"), ("Pill", "Pastilla"),
            ("Prescription", "Receta médica"), ("Sick", "Enfermo/a"), ("Ill", "Enfermo/a"),
            ("Pale", "Pálido/a"), ("Dizzy", "Mareado/a"), ("Vomit", "Vomitar"),
            ("Sneezing", "Estornudar"), ("Infection", "Infección")
        ],
        "sentences": [
            "I've got a really bad cold.", "She stayed home from school with a fever.",
            "I have a sore throat and a cough.", "Do you have any pills for a headache?",
            "He needs a prescription for this medicine.", "I feel sick after eating that seafood.",
            "She's been sneezing all morning.", "He has a very high temperature.",
            "Take two pills with water every four hours.", "I caught the flu from my brother.",
            "I've got a terrible toothache; I need the dentist.", "She looks very pale today.",
            "He feels dizzy when he stands up too quickly.", "The infection is getting better now.",
            "I need some syrup for my cough."
        ],
        "communication": [
            ("I feel really ill.", "You should go home and rest.", ["I'm fine.", "At 9 PM."]),
            ("Have you got a temperature?", "Yes, it's thirty-eight point five.", ["In the room.", "Yes, I do."]),
            ("What's wrong?", "I think I've caught a cold.", ["It's blue.", "At the pharmacy."]),
            ("Are you taking any medicine?", "Yes, the doctor gave me some antibiotics.", ["No, I'm a student.", "Yes, I am."]),
            ("I hope you feel better soon.", "Thank you, I appreciate it.", ["I'm happy.", "No, thanks."])
        ]
    },
    43: { # At the Doctor's
        "grammar": [
            ("The doctor (examine) ________ the patient.", "examined"),
            ("I (have) ________ an appointment at 4 PM.", "have"),
            ("She (not/like) ________ going to the doctor.", "doesn't like"),
            ("________ I take this medicine before meals?", "Should"),
            ("They (be) ________ waiting in the surgery.", "are"),
            ("He (tell) ________ me to rest.", "told"),
            ("We (need) ________ a blood test.", "need"),
            ("The nurse (take) ________ my temperature.", "took"),
            ("How ________ I help you today?", "can"),
            ("You (must/not) ________ drive after taking these pills.", "must not")
        ],
        "vocab": [
            ("Doctor", "Médico/a"), ("Nurse", "Enfermero/a"), ("Patient", "Paciente"),
            ("Appointment", "Cita"), ("Surgery", "Consultorio/Clínica"), ("Waiting room", "Sala de espera"),
            ("Examination", "Examen/Reconocimiento"), ("Symptom", "Síntoma"), ("Diagnosis", "Diagnóstico"),
            ("Treatment", "Tratamiento"), ("Medicine", "Medicina"), ("Prescription", "Receta"),
            ("Advice", "Consejo"), ("Healthy", "Saludable"), ("Unhealthy", "Poco saludable"),
            ("Check-up", "Chequeo"), ("Blood test", "Análisis de sangre"), ("Pharmacy", "Farmacia"),
            ("Chemist", "Farmacia/Farmacéutico"), ("Emergency", "Emergencia")
        ],
        "sentences": [
            "I have an appointment with Dr. Smith at three o'clock.", "The doctor is seeing a patient right now.",
            "Please wait in the waiting room.", "The nurse will take your blood pressure.",
            "What are your symptoms?", "The doctor gave me a prescription for some antibiotics.",
            "You need to go to the pharmacy to get your medicine.", "I'm going to the doctor for a check-up.",
            "He needs a blood test to confirm the diagnosis.", "The treatment will last for two weeks.",
            "The doctor's surgery is closed on weekends.", "She gave me some good advice about my health.",
            "It was a medical emergency.", "Can I make an appointment for tomorrow?",
            "The chemist explained how to take the pills."
        ],
        "communication": [
            ("Good morning, how can I help you?", "I'd like to make an appointment to see the doctor.", ["I'm fine.", "At 10 o'clock."]),
            ("What seems to be the problem?", "I've had a bad cough for over a week.", ["In the house.", "Yes, I do."]),
            ("How long have you felt like this?", "For about three or four days.", ["In London.", "At 5 PM."]),
            ("Are you allergic to any medicine?", "No, I don't think so.", ["No, I'm a student.", "Yes, I am."]),
            ("Take this medicine twice a day.", "Thank you, doctor.", ["I'm happy.", "No, thanks."])
        ]
    },
    44: { # Healthy Habits
        "grammar": [
            ("You (should) ________ eat more vegetables.", "should"),
            ("I (try) ________ to walk 10,000 steps a day.", "try"),
            ("She (not/smoke) ________ anymore.", "doesn't smoke"),
            ("We (be) ________ trying to lose weight.", "are"),
            ("Do you ________ (go) to the gym often?", "go"),
            ("They (eat) ________ a very healthy diet.", "eat"),
            ("He (drink) ________ a lot of water.", "drinks"),
            ("It is important ________ (get) enough sleep.", "to get"),
            ("I (feel) ________ much more energetic now.", "feel"),
            ("________ you exercise every day?", "Do")
        ],
        "vocab": [
            ("Habit", "Hábito"), ("Healthy", "Saludable"), ("Lifestyle", "Estilo de vida"),
            ("Exercise", "Ejercicio"), ("Diet", "Dieta"), ("Vegetables", "Verduras"),
            ("Fruit", "Fruta"), ("Water", "Agua"), ("Sleep", "Sueño/Dormir"),
            ("Rest", "Descanso"), ("Stress", "Estrés"), ("Relaxation", "Relajación"),
            ("Gym", "Gimnasio"), ("Running", "Correr"), ("Walking", "Caminar"),
            ("Cycling", "Ciclismo"), ("Swimming", "Natación"), ("Active", "Activo/a"),
            ("Energy", "Energía"), ("Weight", "Peso")
        ],
        "sentences": [
            "Eating fruit and vegetables is a healthy habit.", "I try to exercise at least three times a week.",
            "Drinking plenty of water is good for your skin.", "Getting enough sleep is very important for your health.",
            "I enjoy going for a run in the morning.", "She has a very balanced diet.",
            "We should avoid eating too much fast food.", "Regular exercise helps to reduce stress.",
            "I feel more energetic when I eat well.", "He is trying to lead a more active lifestyle.",
            "Walking is a great way to stay fit.", "I go to the gym after work.",
            "It's important to find time for relaxation.", "He lost five kilos by changing his diet.",
            "Cycling to work is a healthy choice."
        ],
        "communication": [
            ("You look very fit!", "Thanks, I've been going to the gym lately.", ["I'm fine.", "At 9 AM."]),
            ("Do you have a healthy diet?", "I try to eat lots of fruit and vegetables.", ["In the kitchen.", "Yes, I do."]),
            ("How often do you exercise?", "Usually about three times a week.", ["In the park.", "At 6 o'clock."]),
            ("I'm always so tired.", "You should try to get more sleep.", ["No, I'm a student.", "Yes, I am."]),
            ("What's your favorite way to stay active?", "I really love swimming and cycling.", ["I'm happy.", "No, thanks."])
        ]
    },
    45: { # Should for Advice
        "grammar": [
            ("You (should) ________ see a doctor.", "should"),
            ("He (should/not) ________ eat so much sugar.", "should not"),
            ("What (should) ________ I do about this problem?", "should"),
            ("They (should) ________ study more for the exam.", "should"),
            ("She (should/not) ________ go to bed so late.", "shouldn't"),
            ("________ I tell him the truth?", "Should"),
            ("We (should) ________ buy some more bread.", "should"),
            ("You (should/not) ________ worry so much.", "shouldn't"),
            ("Where (should) ________ we meet tonight?", "should"),
            ("He (should) ________ take a break.", "should")
        ],
        "vocab": [
            ("Advice", "Consejo"), ("Should", "Debería"), ("Shouldn't", "No debería"),
            ("Suggestion", "Sugerencia"), ("Problem", "Problema"), ("Solution", "Solución"),
            ("Opinion", "Opinión"), ("Better", "Mejor"), ("Worse", "Peor"),
            ("Idea", "Idea"), ("Truth", "Verdad"), ("Mistake", "Error/Equivocación"),
            ("Important", "Importante"), ("Necessary", "Necesario"), ("Helpful", "Útil/De ayuda")
        ],
        "sentences": [
            "You should wear a coat, it's cold outside.", "I think you should tell her how you feel.",
            "He shouldn't work so hard; he needs a rest.", "What should I wear to the wedding?",
            "You should try this cake, it's delicious!", "She shouldn't drink so much coffee.",
            "We should leave now or we'll be late.", "Where should we go on holiday this year?",
            "I don't think you should buy that car.", "Should I call him now or later?",
            "You should be more careful with your money.", "They shouldn't make so much noise.",
            "I think we should ask for directions.", "You should talk to your teacher about it.",
            "She should take some medicine for her cough."
        ],
        "communication": [
            ("I've got a terrible toothache.", "You should see a dentist as soon as possible.", ["I'm fine.", "At 2 PM."]),
            ("I'm so bored!", "You should find a new hobby.", ["No, I'm a student.", "Yes, I am."]),
            ("I don't know what to do.", "I think you should talk to your parents.", ["In the house.", "Yes, I do."]),
            ("Should I buy this dress?", "Yes, it looks great on you!", ["No, it's expensive.", "Yes, I am."]),
            ("He's always late for work.", "He should buy a better alarm clock.", ["I'm happy.", "No, thanks."])
        ]
    },
    46: { # Have to for Obligation
        "grammar": [
            ("I (have to) ________ work on Saturdays.", "have to"),
            ("She (has to) ________ wear a uniform at school.", "has to"),
            ("We (not/have to) ________ work tomorrow.", "don't have to"),
            ("________ you have to get up early?", "Do"),
            ("They (have to) ________ finish the project today.", "have to"),
            ("He (not/have to) ________ pay for the tickets.", "doesn't have to"),
            ("What time ________ she have to be there?", "does"),
            ("We (have to) ________ buy a present for her.", "have to"),
            ("I (not/have to) ________ cook tonight.", "don't have to"),
            ("________ they have to bring anything?", "Do")
        ],
        "vocab": [
            ("Obligation", "Obligación"), ("Have to", "Tener que"), ("Don't have to", "No tener que"),
            ("Necessary", "Necesario"), ("Rules", "Reglas"), ("Law", "Ley"),
            ("Work", "Trabajo"), ("School", "Escuela"), ("Uniform", "Uniforme"),
            ("Deadline", "Fecha límite"), ("Payment", "Pago"), ("Requirement", "Requisito"),
            ("Permission", "Permiso"), ("Appointment", "Cita"), ("Essential", "Esencial")
        ],
        "sentences": [
            "I have to go to the bank this morning.", "She has to study for her exams next week.",
            "You don't have to pay now; you can pay later.", "Do you have to wear a suit to work?",
            "We have to be at the airport at six o'clock.", "He doesn't have to work on Sundays.",
            "What do we have to do for homework?", "Does she have to take this medicine every day?",
            "We have to follow the rules of the game.", "I don't have to get up early tomorrow morning.",
            "They have to finish their dinner before having dessert.", "You have to show your passport at the border.",
            "We don't have to bring any food to the party.", "He has to walk the dog every evening.",
            "Do I have to sign this document?"
        ],
        "communication": [
            ("Can you come to the cinema tonight?", "I'm sorry, I have to work late.", ["I'm fine.", "At 8 PM."]),
            ("Do we have to wear a tie?", "No, you don't have to, it's a casual party.", ["No, I'm a student.", "Yes, I am."]),
            ("What time do you have to be at work?", "I have to be there by nine o'clock.", ["In the office.", "At 5 PM."]),
            ("Is it necessary to book a table?", "Yes, we have to book in advance.", ["No, it's free.", "Yes, I do."]),
            ("Do I have to pay for the water?", "No, it's free for all customers.", ["I'm happy.", "No, thanks."])
        ]
    },
    47: { # Must for Strong Advice
        "grammar": [
            ("You (must) ________ see that film, it's brilliant.", "must"),
            ("We (must/not) ________ be late for the meeting.", "must not"),
            ("She (must) ________ try this cake.", "must"),
            ("You (must/not) ________ tell anyone my secret.", "mustn't"),
            ("I (must) ________ remember to call him.", "must"),
            ("They (must) ________ visit us when they are in London.", "must"),
            ("You (must) ________ listen to this song.", "must"),
            ("We (must/not) ________ forget our passports.", "mustn't"),
            ("She (must) ________ be more careful.", "must"),
            ("He (must) ________ study harder if he wants to pass.", "must")
        ],
        "vocab": [
            ("Strong advice", "Consejo fuerte"), ("Must", "Deber"), ("Mustn't", "No deber (prohibición)"),
            ("Brilliant", "Brillante/Genial"), ("Important", "Importante"), ("Essential", "Esencial"),
            ("Forbidden", "Prohibido"), ("Secret", "Secreto"), ("Remember", "Recordar"),
            ("Forget", "Olvidar"), ("Careful", "Cuidadoso/a"), ("Pass", "Pasar/Aprobar"),
            ("Necessary", "Necesario"), ("Recommend", "Recomendar"), ("Warning", "Advertencia")
        ],
        "sentences": [
            "You must see the Eiffel Tower while you're in Paris.", "We must not smoke in the hospital.",
            "You must try the chocolate cake; it's the best!", "She must be very tired after such a long day.",
            "I must remember to buy some milk on my way home.", "You mustn't tell anyone what I told you.",
            "We must arrive at the station on time.", "You must read this book; it's fascinating.",
            "He must work harder if he wants a promotion.", "They must not forget to lock the door.",
            "You must be careful when you cross the road.", "We must visit our grandparents more often.",
            "You mustn't drink and drive.", "She must tell the doctor the truth.",
            "I must finish this report by Friday."
        ],
        "communication": [
            ("That film was amazing!", "You must go and see it, really.", ["I'm fine.", "At 7 o'clock."]),
            ("Can I tell my sister?", "No, you mustn't tell anyone, it's a secret!", ["No, I'm a student.", "Yes, I do."]),
            ("I'm so hungry.", "You must try the sandwiches here, they're great.", ["In the restaurant.", "At 1 PM."]),
            ("We're going to be late!", "We must hurry up, then!", ["In the station.", "Yes, we are."]),
            ("Is it okay to park here?", "No, you mustn't park on this street.", ["No, it's expensive.", "Yes, I am."])
        ]
    },
    48: { # First Conditional: Real Possibilities
        "grammar": [
            ("If it (rain) ________, we will stay at home.", "rains"),
            ("She (be) ________ angry if you are late.", "will be"),
            ("If I (have) ________ enough money, I will buy a car.", "have"),
            ("If they (not/hurry) ________, they will miss the train.", "don't hurry"),
            ("What ________ you do if you lose your job?", "will"),
            ("If she (study) ________ hard, she will pass the exam.", "studies"),
            ("He (not/be) ________ happy if he doesn't win.", "won't be"),
            ("If we (go) ________ to the party, we will see him.", "go"),
            ("I (call) ________ you if I have any news.", "will call"),
            ("If you (eat) ________ too much, you will feel sick.", "eat")
        ],
        "vocab": [
            ("Condition", "Condición"), ("Possibility", "Posibilidad"), ("Result", "Resultado"),
            ("If", "Si (condicional)"), ("Will", "Futuro (will)"), ("Future", "Futuro"),
            ("Real", "Real"), ("Probable", "Probable"), ("Unless", "A menos que"),
            ("Soon", "Pronto"), ("Maybe", "Tal vez"), ("Probably", "Probablemente"),
            ("Angry", "Enfadado/a"), ("Happy", "Feliz"), ("Miss", "Perder")
        ],
        "sentences": [
            "If the weather is nice, we will go for a walk.", "She will be very happy if she gets the job.",
            "If I see him, I will tell him your news.", "They will miss the flight if they don't leave now.",
            "If you don't study, you won't pass the test.", "What will you do if it rains on Saturday?",
            "If we have time, we will visit the museum.", "I will call you as soon as I arrive.",
            "If she doesn't finish her work, she won't go out.", "He will be angry if you break his phone.",
            "If I find your keys, I will let you know.", "They will be tired if they stay up late.",
            "If you are hungry, I will make some sandwiches.", "We will go to the beach if it's sunny tomorrow.",
            "I'll help you if you need anything."
        ],
        "communication": [
            ("What will you do if it's sunny tomorrow?", "If it's sunny, I'll go to the park.", ["I'm fine.", "At 10 AM."]),
            ("Will you come to the party if I go?", "Yes, if you go, I'll definitely come.", ["No, I'm a student.", "Yes, I do."]),
            ("What happens if we're late?", "If we're late, they won't let us in.", ["In the cinema.", "At 9 PM."]),
            ("Will she be angry if I don't call?", "Yes, I think she'll be very upset.", ["No, she isn't.", "Yes, she is."]),
            ("If you win the lottery, what will you buy?", "If I win, I'll buy a big house in Spain.", ["By plane.", "No, thanks."])
        ]
    },
    49: { # Sports & Exercise
        "grammar": [
            ("I (play) ________ football every Sunday.", "play"),
            ("She (go) ________ swimming twice a week.", "goes"),
            ("We (be) ________ watching the match now.", "are"),
            ("He (not/like) ________ team sports.", "doesn't like"),
            ("Do you ________ (do) yoga?", "do"),
            ("They (win) ________ the game yesterday.", "won"),
            ("I (be) ________ going to join a gym.", "am"),
            ("She (run) ________ a marathon last year.", "ran"),
            ("We (need) ________ new tennis rackets.", "need"),
            ("________ you ever been to a stadium?", "Have")
        ],
        "vocab": [
            ("Sport", "Deporte"), ("Exercise", "Ejercicio"), ("Game", "Juego/Partido"),
            ("Match", "Partido"), ("Team", "Equipo"), ("Player", "Jugador/a"),
            ("Fan", "Aficionado/a"), ("Stadium", "Estadio"), ("Gym", "Gimnasio"),
            ("Football", "Fútbol"), ("Basketball", "Baloncesto"), ("Tennis", "Tenis"),
            ("Swimming", "Natación"), ("Running", "Correr/Carrera"), ("Cycling", "Ciclismo"),
            ("Yoga", "Yoga"), ("Pilates", "Pilates"), ("Athlete", "Atleta"),
            ("Win", "Ganar"), ("Lose", "Perder")
        ],
        "sentences": [
            "I love playing football with my friends.", "She goes swimming every morning before work.",
            "We went to the stadium to watch the big match.", "He is a very talented basketball player.",
            "They won the championship last year.", "I do yoga once a week to relax.",
            "Cycling is a great way to stay healthy.", "There were thousands of fans at the game.",
            "He wants to be a professional athlete.", "She ran her first marathon in under four hours.",
            "We need to buy some new sports equipment.", "I am going to join a local tennis club.",
            "The match was very exciting from start to finish.", "Do you prefer team sports or individual sports?",
            "It's important to warm up before you exercise."
        ],
        "communication": [
            ("What's your favorite sport?", "I really like playing and watching tennis.", ["I'm fine.", "At 10 AM."]),
            ("Do you do any exercise?", "Yes, I go for a run every morning.", ["In the park.", "Yes, I do."]),
            ("Who won the match yesterday?", "Real Madrid won three-nil.", ["In the stadium.", "At 8 o'clock."]),
            ("Are you a fan of any football team?", "Yes, I've supported Liverpool all my life.", ["No, I'm a student.", "Yes, I am."]),
            ("Would you like to come for a swim?", "I'd love to, but I don't have my swimsuit.", ["I'm happy.", "No, thanks."])
        ]
    },
    50: { # Module 5 Review
        "grammar": [
            ("I (have got) ________ a headache.", "have got"),
            ("She (should) ________ see a doctor.", "should"),
            ("He (has to) ________ work tomorrow.", "has to"),
            ("You (must) ________ try this cake.", "must"),
            ("If it (rain) ________, we'll stay home.", "rains"),
            ("I (play) ________ tennis every week.", "play"),
            ("We (not/have to) ________ pay today.", "don't have to"),
            ("They (be) ________ coughing a lot.", "are"),
            ("She (catch) ________ a cold last night.", "caught"),
            ("Do you ________ (feel) well?", "feel")
        ],
        "vocab": [
            ("Body", "Cuerpo"), ("Illness", "Enfermedad"), ("Doctor", "Médico"),
            ("Habit", "Hábito"), ("Advice", "Consejo"), ("Obligation", "Obligación"),
            ("Possibility", "Posibilidad"), ("Sport", "Deporte"), ("Health", "Salud"),
            ("Medicine", "Medicina")
        ],
        "sentences": [
            "My back is aching.", "You should get some rest.",
            "We have to follow the rules.", "You must see that movie.",
            "If I see him, I'll tell him.", "She goes running every day.",
            "I've got a sore throat.", "The doctor gave me a prescription.",
            "Exercise is good for you.", "I feel much better now."
        ],
        "communication": [
            ("What's the matter?", "I have a sore throat.", ["It's blue.", "At 9."]),
            ("How do you feel?", "I feel a bit dizzy.", ["No, I'm a student.", "Yes, I am."]),
            ("Should I call a doctor?", "Yes, I think you should.", ["In the office.", "No, thanks."]),
            ("What time do you have to be there?", "At eight o'clock.", ["In the station.", "At home."]),
            ("What will you do if it rains?", "I'll stay at home.", ["In summer.", "Yes, I have an umbrella."])
        ]
    },
    51: { # Work & Professions
        "grammar": [
            ("I (work) ________ as a teacher.", "work"),
            ("She (be) ________ a nurse.", "is"),
            ("They (not/have) ________ a job right now.", "don't have"),
            ("He (be) ________ looking for work.", "is"),
            ("Do you ________ (like) your job?", "like"),
            ("We (be) ________ doctors.", "are"),
            ("I (start) ________ my own business.", "started"),
            ("She (work) ________ in a large hospital.", "works"),
            ("They (be) ________ very hard-working.", "are"),
            ("What ________ your father do?", "does")
        ],
        "vocab": [
            ("Teacher", "Profesor/a"), ("Doctor", "Médico/a"), ("Nurse", "Enfermero/a"),
            ("Engineer", "Ingeniero/a"), ("Lawyer", "Abogado/a"), ("Artist", "Artista"),
            ("Musician", "Músico/a"), ("Chef", "Cocinero/a"), ("Waiter", "Camarero/a"),
            ("Police officer", "Oficial de policía"), ("Manager", "Gerente"), ("Secretary", "Secretario/a"),
            ("Business", "Negocio"), ("Company", "Empresa"), ("Work", "Trabajo"),
            ("Job", "Empleo"), ("Salary", "Salario"), ("Office", "Oficina"),
            ("Profession", "Profesión"), ("Career", "Carrera")
        ],
        "sentences": [
            "My mother is a very talented artist.", "He works as an engineer for a big company.",
            "I am looking for a new job.", "She wants to be a doctor when she grows up.",
            "The chef prepared a delicious meal.", "Our manager is very helpful.",
            "I have an interview at an office tomorrow.", "He has a successful career in law.",
            "The waiter was very polite and efficient.", "It's important to find a profession you love.",
            "She works long hours at the hospital.", "He started his own business two years ago.",
            "The salary is not very high, but the work is interesting.", "My sister is a primary school teacher.",
            "What kind of work do you do?"
        ],
        "communication": [
            ("What do you do for a living?", "I work as a software developer.", ["I'm fine.", "At 10 AM."]),
            ("Do you enjoy your job?", "Yes, it's very challenging but rewarding.", ["No, I'm a student.", "Yes, I do."]),
            ("Where do you work?", "I work for a large international bank.", ["In the office.", "At 5 PM."]),
            ("What's your dream job?", "I'd love to be a famous musician.", ["Yes, I am.", "No, I don't."]),
            ("How long have you worked there?", "I've been with the company for five years.", ["I'm happy.", "No, thanks."])
        ]
    },
    52: { # Office Life & Business
        "grammar": [
            ("I (answer) ________ many emails every day.", "answer"),
            ("She (not/have) ________ any meetings today.", "doesn't have"),
            ("We (be) ________ working on a new project.", "are"),
            ("Do you ________ (need) any help with that?", "need"),
            ("They (have) ________ a conference last week.", "had"),
            ("He (be) ________ the CEO of the company.", "is"),
            ("I (write) ________ a report this afternoon.", "am writing"),
            ("We (not/use) ________ that software anymore.", "don't use"),
            ("The office (be) ________ on the fifth floor.", "is"),
            ("________ you finish the presentation?", "Did")
        ],
        "vocab": [
            ("Office", "Oficina"), ("Desk", "Escritorio"), ("Computer", "Ordenador"),
            ("Email", "Correo electrónico"), ("Meeting", "Reunión"), ("Report", "Informe"),
            ("Project", "Proyecto"), ("Colleague", "Compañero/a de trabajo"), ("Boss", "Jefe/a"),
            ("Client", "Cliente"), ("Business trip", "Viaje de negocios"), ("Conference", "Conferencia"),
            ("Presentation", "Presentación"), ("Document", "Documento"), ("File", "Archivo"),
            ("Department", "Departamento"), ("Team", "Equipo"), ("Staff", "Personal"),
            ("Manager", "Gerente"), ("Busy", "Ocupado/a")
        ],
        "sentences": [
            "I spend most of my day answering emails.", "We have a team meeting every Monday morning.",
            "He is writing a very long report.", "My desk is always covered in papers.",
            "We are working on an exciting new project for a client.", "She is going on a business trip to New York.",
            "The conference will be held in the main hall.", "Our boss is very demanding but fair.",
            "I need to print these documents before the meeting.", "My colleagues are very friendly and supportive.",
            "The office is located in the city center.", "We use a special software to manage our files.",
            "She gave a brilliant presentation to the staff.", "He is the manager of the marketing department.",
            "The office is very busy at this time of year."
        ],
        "communication": [
            ("Can you help me with this report?", "Sure, I'll have a look at it after lunch.", ["I'm fine.", "At 10 o'clock."]),
            ("Are you busy at the moment?", "Yes, I'm preparing for a presentation.", ["No, I'm a student.", "Yes, I am."]),
            ("What time is the meeting?", "It's scheduled for half past two.", ["In the room.", "At 3 PM."]),
            ("How was your business trip?", "It was very productive, thank you.", ["In London.", "Yes, I liked it."]),
            ("Do you like your colleagues?", "Yes, they're a great team to work with.", ["I'm happy.", "No, thanks."])
        ]
    },
    53: { # Applying for a Job
        "grammar": [
            ("I (apply) ________ for three jobs last week.", "applied"),
            ("She (be) ________ preparing her CV.", "is"),
            ("They (not/call) ________ me back yet.", "haven't called"),
            ("He (have) ________ an interview yesterday.", "had"),
            ("What ________ I wear to the interview?", "should"),
            ("We (need) ________ to find a new employee.", "need"),
            ("I (be) ________ writing a cover letter.", "am"),
            ("She (not/have) ________ much experience.", "doesn't have"),
            ("They (offer) ________ me the position.", "offered"),
            ("________ you have any references?", "Do")
        ],
        "vocab": [
            ("Job application", "Solicitud de empleo"), ("CV (Curriculum Vitae)", "Currículum"), ("Resume", "Currículum"),
            ("Cover letter", "Carta de presentación"), ("Interview", "Entrevista"), ("Employer", "Empleador/a"),
            ("Employee", "Empleado/a"), ("Experience", "Experiencia"), ("Skills", "Habilidades"),
            ("Qualifications", "Cualificaciones"), ("Reference", "Referencia"), ("Position", "Puesto/Cargo"),
            ("Full-time", "A tiempo completo"), ("Part-time", "A tiempo parcial"), ("Temporary", "Temporal"),
            ("Contract", "Contrato"), ("Apply", "Solicitar/Postularse"), ("Hire", "Contratar"),
            ("Offer", "Oferta/Ofrecer"), ("Sign", "Firmar")
        ],
        "sentences": [
            "I'm updating my CV for a new job application.", "She wrote a very professional cover letter.",
            "He had a job interview with a large law firm.", "I need to gain more work experience.",
            "What are your main skills and qualifications?", "Do you have any references from your previous job?",
            "They offered her a full-time position as a manager.", "I applied for a part-time job at the supermarket.",
            "The employer was very impressed with his CV.", "I signed the contract yesterday.",
            "He is looking for a temporary job for the summer.", "How should I prepare for the interview?",
            "She has all the necessary qualifications for the post.", "They are looking to hire a new receptionist.",
            "I hope I get the job!"
        ],
        "communication": [
            ("How did your interview go?", "I think it went quite well, but I'm waiting to hear back.", ["I'm fine.", "At 9 AM."]),
            ("Are you still looking for a job?", "Yes, I've applied for several positions this week.", ["No, I'm a student.", "Yes, I am."]),
            ("What should I put in my cover letter?", "You should highlight your relevant experience and skills.", ["In the paper.", "Yes, you do."]),
            ("When do you start your new job?", "I start on the first of next month.", ["In the office.", "At 8 o'clock."]),
            ("Do you have a copy of your CV?", "Yes, here it is.", ["I'm happy.", "No, thanks."])
        ]
    },
    54: { # Success & Failure
        "grammar": [
            ("He (succeed) ________ in passing the exam.", "succeeded"),
            ("They (not/win) ________ the competition.", "didn't win"),
            ("She (be) ________ very proud of her achievement.", "is"),
            ("We (fail) ________ to arrive on time.", "failed"),
            ("I (hope) ________ to be successful one day.", "hope"),
            ("He (not/give up) ________ trying.", "doesn't give up"),
            ("They (make) ________ a lot of progress.", "are making"),
            ("What (be) ________ the secret to your success?", "is"),
            ("She (work) ________ very hard to achieve her goals.", "works"),
            ("It (not/be) ________ easy to succeed.", "is not")
        ],
        "vocab": [
            ("Success", "Éxito"), ("Failure", "Fracaso"), ("Successful", "Exitoso/a"),
            ("Unsuccessful", "Fracasado/a/Sin éxito"), ("Achievement", "Logro"), ("Progress", "Progreso"),
            ("Goal", "Meta/Objetivo"), ("Ambition", "Ambición"), ("Pride", "Orgullo"),
            ("Proud", "Orgulloso/a"), ("Win", "Ganar"), ("Lose", "Perder"),
            ("Succeed", "Tener éxito"), ("Fail", "Fracasar/Fallar"), ("Try", "Intentar"),
            ("Give up", "Rendirse"), ("Difficult", "Difícil"), ("Easy", "Fácil"),
            ("Important", "Importante"), ("Result", "Resultado")
        ],
        "sentences": [
            "Success requires a lot of hard work and dedication.", "She was very proud of her academic achievements.",
            "They didn't win the game, but they played very well.", "Don't be afraid of failure; it's part of learning.",
            "He succeeded in reaching the top of the mountain.", "We are making good progress with our project.",
            "What are your main goals for this year?", "Never give up on your dreams.",
            "It was a very difficult challenge, but she didn't fail.", "Winning isn't everything; the most important thing is to try.",
            "She is a very successful businesswoman.", "He felt a great sense of pride in his work.",
            "The results of the test were very disappointing.", "They failed to reach an agreement.",
            "Success is the result of many small efforts."
        ],
        "communication": [
            ("Congratulations on your success!", "Thank you so much, I'm very happy.", ["I'm fine.", "At 10 AM."]),
            ("Did you win the match?", "No, unfortunately we lost two-one.", ["No, I'm a student.", "Yes, I did."]),
            ("How are you getting on with your work?", "I'm making a lot of progress, thanks for asking.", ["In the office.", "At 5 PM."]),
            ("Don't give up!", "I won't, I'll keep trying until I succeed.", ["I'm happy.", "No, thanks."]),
            ("Are you proud of what you've achieved?", "Yes, I've worked very hard for it.", ["No, I'm not.", "Yes, I am."])
        ]
    },
    55: { # Relative Clauses: Who, Which, That
        "grammar": [
            ("The man ________ lives next door is a doctor.", "who"),
            ("The book ________ I am reading is very interesting.", "that"),
            ("The car ________ she bought is very fast.", "which"),
            ("Is that the girl ________ won the prize?", "who"),
            ("I like films ________ have a happy ending.", "that"),
            ("The restaurant ________ we went to was very expensive.", "which"),
            ("The people ________ work here are very friendly.", "who"),
            ("This is the phone ________ I want to buy.", "that"),
            ("The city ________ he visited is very old.", "which"),
            ("He is the teacher ________ helped me with my English.", "who")
        ],
        "vocab": [
            ("Relative clause", "Oración de relativo"), ("Who", "Quien/Que (personas)"), ("Which", "Cual/Que (cosas)"),
            ("That", "Que (personas/cosas)"), ("Information", "Información"), ("Subject", "Sujeto"),
            ("Object", "Objeto"), ("Describe", "Describir"), ("Identify", "Identificar"),
            ("Person", "Persona"), ("Thing", "Cosa"), ("Animal", "Animal"),
            ("Place", "Lugar"), ("Sentence", "Frase"), ("Extra", "Extra/Adicional")
        ],
        "sentences": [
            "The man who is wearing the red hat is my uncle.", "This is the computer that I use for work.",
            "The house which they bought is very old.", "I know a girl who speaks five languages.",
            "The cake that she made was delicious.", "The bus which goes to the airport is late.",
            "The people who live in this town are very kind.", "The movie that we saw last night was boring.",
            "The cat which is sleeping on the sofa is mine.", "He is the doctor who treated my father.",
            "This is the hotel where we stayed last summer.", "The museum which we visited was very interesting.",
            "The woman who works in the shop is very helpful.", "I lost the watch that my mother gave me.",
            "The students who study hard get good grades."
        ],
        "communication": [
            ("Who is that man?", "He's the one who helped us with our bags.", ["He's a doctor.", "Yes, he is."]),
            ("Which book are you talking about?", "The one that I borrowed from the library.", ["In the house.", "At 10 AM."]),
            ("Do you like the dress that she's wearing?", "Yes, it's very elegant.", ["No, I am a student.", "Yes, I do."]),
            ("Is this the train which goes to London?", "No, the one that goes to London is on platform four.", ["In the station.", "Yes, it is."]),
            ("Who is your favorite teacher?", "The one who teaches us History.", ["He's happy.", "No, thanks."])
        ]
    },
    56: { # Adverbs of Manner: Quickly, Well
        "grammar": [
            ("She runs very ________ (quick).", "quickly"),
            ("He speaks English very ________ (good).", "well"),
            ("Please walk ________ (quiet) in the library.", "quietly"),
            ("They worked ________ (hard) to finish the project.", "hard"),
            ("She smiled ________ (happy) at him.", "happily"),
            ("He drove ________ (careful) through the rain.", "carefully"),
            ("You should speak ________ (clear) when you give a talk.", "clearly"),
            ("They laughed ________ (loud) at the joke.", "loudly"),
            ("He writes ________ (beautiful).", "beautifully"),
            ("Please listen ________ (attentive).", "attentively")
        ],
        "vocab": [
            ("Adverb", "Adverbio"), ("Manner", "Manera/Modo"), ("Quickly", "Rápidamente"),
            ("Slowly", "Lentamente"), ("Well", "Bien"), ("Badly", "Mal"),
            ("Happily", "Felizmente"), ("Sadly", "Tristemente"), ("Quietly", "Silenciosamente"),
            ("Loudly", "Ruidosamente"), ("Carefully", "Cuidadosamente"), ("Carelessly", "Descuidadamente"),
            ("Clearly", "Claramente"), ("Easily", "Fácilmente"), ("Hard", "Duro/Fuerte")
        ],
        "sentences": [
            "She finished her homework very quickly.", "He speaks Spanish very well.",
            "Please speak slowly so I can understand you.", "They are working hard to win the game.",
            "The children played happily in the garden.", "He drives very carefully in the city.",
            "She sings beautifully.", "The teacher explained the lesson very clearly.",
            "I can easily finish this work today.", "He walked quietly so as not to wake the baby.",
            "They were talking very loudly in the restaurant.", "She handled the situation very professionally.",
            "He wrote the letter very carefully.", "The rain fell heavily all night.",
            "They danced beautifully together."
        ],
        "communication": [
            ("You speak English very well!", "Thank you, I've been practicing a lot.", ["I'm fine.", "At 10 AM."]),
            ("Please talk quietly, the baby is sleeping.", "Oh, I'm sorry, I'll be more careful.", ["No, I'm a student.", "Yes, I am."]),
            ("How did she perform in the concert?", "She sang absolutely beautifully.", ["In the theater.", "At 8 o'clock."]),
            ("Can you finish this task quickly?", "Yes, I'll do it right away.", ["I'm happy.", "No, thanks."]),
            ("He drives too fast, in my opinion.", "I agree, he should drive more carefully.", ["No, he isn't.", "Yes, he does."])
        ]
    },
    57: { # Too & Enough
        "grammar": [
            ("This coffee is ________ (hot) to drink.", "too hot"),
            ("I don't have ________ (money) to buy a car.", "enough money"),
            ("She is ________ (tall) to reach the shelf.", "tall enough"),
            ("The room is ________ (small) for twenty people.", "too small"),
            ("We didn't have ________ (time) to finish the test.", "enough time"),
            ("He is ________ (old) to drive.", "old enough"),
            ("The music is ________ (loud). Please turn it down.", "too loud"),
            ("Is it ________ (warm) for you?", "warm enough"),
            ("I've eaten ________ (food).", "too much food"),
            ("There aren't ________ (chairs) for everyone.", "enough chairs")
        ],
        "vocab": [
            ("Too", "Demasiado"), ("Enough", "Suficiente"), ("Much", "Mucho (incontable)"),
            ("Many", "Muchos (contable)"), ("Hot", "Caliente"), ("Cold", "Frío"),
            ("Small", "Pequeño"), ("Big", "Grande"), ("Fast", "Rápido"),
            ("Slow", "Lento"), ("Money", "Dinero"), ("Time", "Tiempo"),
            ("Water", "Agua"), ("People", "Gente"), ("Chairs", "Sillas")
        ],
        "sentences": [
            "The tea is too hot to drink right now.", "I don't have enough money to go on holiday.",
            "She is tall enough to reach the top shelf.", "The house is too small for our family.",
            "We didn't have enough time to visit the museum.", "Is the water warm enough for you?",
            "He is too young to watch this movie.", "I've had enough coffee for today.",
            "The suitcase is too heavy for me to lift.", "There aren't enough chairs in the room.",
            "He speaks too quickly for me to understand.", "Do you have enough sugar for the cake?",
            "The music is too loud; please turn it down.", "The shoes are not big enough for him.",
            "I've spent too much money this month."
        ],
        "communication": [
            ("Would you like some more cake?", "No, thank you, I've had enough.", ["I'm fine.", "At 2 PM."]),
            ("Is it warm enough in here?", "No, it's a bit too cold. Can you turn the heating up?", ["In the room.", "Yes, it is."]),
            ("Can you reach that book for me?", "Yes, I'm tall enough.", ["No, I'm a student.", "Yes, I can."]),
            ("Why didn't you buy the laptop?", "It was too expensive for me.", ["In the shop.", "Yes, it was."]),
            ("Do we have enough bread for breakfast?", "Yes, there's plenty in the kitchen.", ["I'm happy.", "No, thanks."])
        ]
    },
    58: { # Prepositions of Movement
        "grammar": [
            ("He walked ________ the room.", "into"),
            ("She ran ________ the hill.", "up"),
            ("They drove ________ the tunnel.", "through"),
            ("He jumped ________ the fence.", "over"),
            ("The cat walked ________ the wall.", "along"),
            ("They went ________ the stairs.", "down"),
            ("We flew ________ the Atlantic Ocean.", "across"),
            ("She walked ________ the park every morning.", "through"),
            ("The car drove ________ the corner.", "round/around"),
            ("He got ________ the bus at the station.", "off")
        ],
        "vocab": [
            ("Movement", "Movimiento"), ("Preposition", "Preposición"), ("Into", "Hacia dentro de"),
            ("Out of", "Hacia fuera de"), ("Up", "Hacia arriba"), ("Down", "Hacia abajo"),
            ("Through", "A través de"), ("Across", "A través de/Al otro lado de"), ("Over", "Sobre/Por encima de"),
            ("Under", "Bajo/Por debajo de"), ("Along", "A lo largo de"), ("Around", "Alrededor de"),
            ("Towards", "Hacia"), ("Past", "Pasado/Por delante de"), ("Off", "Fuera de/Bajar de")
        ],
        "sentences": [
            "He walked into the office and sat down.", "She ran up the stairs to her bedroom.",
            "They drove through the tunnel to get to the city.", "The horse jumped over the fence.",
            "We walked along the river for two hours.", "The dog ran towards me.",
            "She walked past the shop without stopping.", "The children went down the slide.",
            "We flew across the mountains in a small plane.", "The cat jumped off the table.",
            "He got out of the car and locked the door.", "The train goes through the mountains.",
            "They walked around the lake in the afternoon.", "The ball rolled under the sofa.",
            "She walked across the bridge to get to the station."
        ],
        "communication": [
            ("How do I get to the bank?", "Walk along this street and turn right at the corner.", ["I'm fine.", "At 10 o'clock."]),
            ("Where did the dog go?", "It ran out of the garden and into the street.", ["In the house.", "Yes, it did."]),
            ("Did you walk through the park?", "Yes, it's a very nice walk.", ["No, I'm a student.", "Yes, I am."]),
            ("How do you get to the second floor?", "You have to go up the stairs.", ["In the office.", "At 5 PM."]),
            ("Which way did they go?", "They drove past the library about five minutes ago.", ["By train.", "No, thanks."])
        ]
    },
    59: { # Final Exam Preparation
        "grammar": [
            ("I (study) ________ for the final exam.", "am studying"),
            ("She (be) ________ very nervous.", "is"),
            ("We (need) ________ to review all the units.", "need"),
            ("They (not/have) ________ much time left.", "don't have"),
            ("Do you ________ (think) the test will be hard?", "think"),
            ("He (finish) ________ all the exercises.", "finished"),
            ("I (be) ________ going to pass the exam.", "am"),
            ("She (be) ________ practicing her speaking skills.", "is"),
            ("We (have) ________ a lot of vocabulary to learn.", "have"),
            ("________ you ready for the test?", "Are")
        ],
        "vocab": [
            ("Exam", "Examen"), ("Test", "Prueba/Test"), ("Preparation", "Preparación"),
            ("Review", "Revisión/Repaso"), ("Study", "Estudio/Estudiar"), ("Practice", "Práctica/Practicar"),
            ("Revision", "Revisión/Repaso"), ("Nervous", "Nervioso/a"), ("Confident", "Seguro/a/Confiado/a"),
            ("Result", "Resultado"), ("Pass", "Aprobar"), ("Fail", "Suspender/Fallar"),
            ("Score", "Puntuación"), ("Grade", "Nota/Grado"), ("Knowledge", "Conocimiento"),
            ("Skill", "Habilidad"), ("Strategy", "Estrategia"), ("Focus", "Enfoque/Concentrarse"),
            ("Success", "Éxito"), ("Goal", "Meta/Objetivo")
        ],
        "sentences": [
            "I'm spending all my free time on exam preparation.", "She feels a bit nervous about the final test.",
            "We need to review everything we've learned this year.", "He is very confident that he will pass.",
            "Practice makes perfect, so keep studying!", "What's the best strategy for the reading part?",
            "I've made a lot of progress in my English skills.", "She achieved a very high score on the last test.",
            "The final exam will cover all sixty units.", "Don't forget to focus on the grammar points.",
            "We have to study hard to get good grades.", "I'm going to take the exam next Monday.",
            "The results will be available in two weeks.", "She failed the first test, but she passed the second one.",
            "Success in the exam is my main goal."
        ],
        "communication": [
            ("Are you ready for the final exam?", "I think so, I've been studying very hard.", ["I'm fine.", "At 9 AM."]),
            ("How do you feel about the test?", "A bit nervous, but I'm trying to stay calm.", ["No, I am a student.", "Yes, I do."]),
            ("What are you studying today?", "I'm reviewing the past simple and the future forms.", ["In the library.", "At 5 PM."]),
            ("Do you think the exam will be difficult?", "I hope not, but I'm preparing for anything.", ["Yes, I am.", "No, I don't."]),
            ("Good luck with your test!", "Thank you very much, I'll need it!", ["I'm happy.", "No, thanks."])
        ]
    },
    60: { # A2 Course Final Review
        "grammar": [
            ("I (be) ________ a student.", "am"),
            ("She (work) ________ as a nurse.", "works"),
            ("They (be) ________ at home yesterday.", "were"),
            ("We (go) ________ to the beach next week.", "are going"),
            ("If it (rain) ________, I will stay home.", "rains"),
            ("I (have got) ________ a headache.", "have got"),
            ("The man ________ lives next door is nice.", "who"),
            ("She runs ________ (quick).", "quickly"),
            ("This coffee is ________ (hot) to drink.", "too hot"),
            ("He walked ________ the room.", "into")
        ],
        "vocab": [
            ("Job", "Empleo"), ("Health", "Salud"), ("Travel", "Viaje"),
            ("Technology", "Tecnología"), ("Nature", "Naturaleza"), ("Education", "Educación"),
            ("Success", "Éxito"), ("Future", "Futuro"), ("Past", "Pasado"),
            ("Review", "Repaso")
        ],
        "sentences": [
            "I have learned a lot in this course.", "English is a very useful language.",
            "I'm going to continue studying next level.", "I can speak about many different topics.",
            "I was a beginner, but now I'm A2.", "The course was very interesting.",
            "I'm proud of my progress.", "I will never forget this experience.",
            "Thank you for all your help.", "I'm ready for the next challenge."
        ],
        "communication": [
            ("How was the course?", "It was excellent, I learned so much!", ["I'm fine.", "At 10."]),
            ("Are you going to continue studying?", "Yes, I'm going to start the B1 course soon.", ["No, I'm a student.", "Yes, I am."]),
            ("What was your favorite part?", "I really enjoyed learning about different cultures.", ["In the classroom.", "At 5."]),
            ("Do you feel more confident now?", "Yes, I feel I can communicate much better.", ["No, I'm not.", "Yes, I do."]),
            ("Well done on finishing the course!", "Thank you very much!", ["I'm happy.", "No, thanks."])
        ]
    }
}

# Extendiendo PEDAGOGICAL_DATA para cubrir las 60 unidades
# Nota: Para esta implementación, generaremos datos para los temas principales
# y usaremos una lógica de respaldo para asegurar que todas las unidades tengan contenido.

def get_unit_data(unit_id):
    if unit_id in PEDAGOGICAL_DATA:
        return PEDAGOGICAL_DATA[unit_id]
    
    # Datos de respaldo genéricos si falta alguna unidad
    return {
        "grammar": [("I (study) ________ English.", "am studying"), ("He (like) ________ pizza.", "likes")],
        "vocab": [("Study", "Estudiar"), ("Food", "Comida"), ("Happy", "Feliz")],
        "sentences": [f"Welcome to unit {unit_id}.", "Practicing English is fun."],
        "communication": [("How are you?", "Fine", ["Sad", "Blue"])]
    }

def generate_exercises(unit_id, count):
    exercises = []
    data = get_unit_data(unit_id)
    
    grammar_pool = data["grammar"]
    vocab_pool = data["vocab"]
    sentence_pool = data["sentences"]
    comm_pool = data.get("communication", [])

    for i in range(1, count + 1):
        type_idx = i % 7
        interaction_id = f"U{unit_id}_I{i}"

        if type_idx == 0: # MC Vocab
            word, translation = random.choice(vocab_pool)
            other = [w for w, t in vocab_pool if w != word]
            if not other: other = ["House", "Dog", "Car"]
            dists = random.sample(other, min(len(other), 2))
            opts = [{"id": "o1", "text": word}]
            for idx, d_word in enumerate(dists):
                opts.append({"id": f"o{idx+2}", "text": d_word})
            random.shuffle(opts)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "multiple_choice",
                "prompt_es": f"Selecciona la traducción correcta para '{translation}':",
                "options": opts,
                "correct_answer": [opt["id"] for opt in opts if opt["text"] == word][0],
                "mastery_tag": "vocabulary"
            })

        elif type_idx == 1: # Matching
            selected = random.sample(vocab_pool, min(len(vocab_pool), 3))
            pairs = [{"id": f"p{idx}", "left": word, "right": trans} for idx, (word, trans) in enumerate(selected)]
            exercises.append({
                "interaction_id": interaction_id,
                "type": "matching",
                "prompt_es": "Une los términos con sus significados:",
                "pairs": pairs,
                "correct_answer": {p["id"]: p["id"] for p in pairs},
                "mastery_tag": "vocabulary"
            })

        elif type_idx == 2: # Transformation
            stim, corr = random.choice(grammar_pool)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "fill_blanks", # Cambiado a fill_blanks para compatibilidad
                "prompt_es": "Escribe la forma gramatical adecuada:",
                "stimulus_en": stim,
                "correct_answer": corr,
                "mastery_tag": "grammar"
            })

        elif type_idx == 3: # True/False
            sentence = random.choice(sentence_pool)
            is_corr = random.choice([True, False])
            display = sentence
            if not is_corr:
                if " is " in sentence: display = sentence.replace(" is ", " are ")
                elif " are " in sentence: display = sentence.replace(" are ", " is ")
                elif " have " in sentence: display = sentence.replace(" have ", " has ")
                else:
                    words = sentence.split()
                    if len(words) > 3:
                        words[1], words[2] = words[2], words[1]
                        display = " ".join(words)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "true_false",
                "prompt_es": f"¿Es gramaticalmente correcta?: \"{display}\"",
                "correct_answer": is_corr,
                "mastery_tag": "grammar"
            })

        elif type_idx == 4: # Reorder
            sentence = random.choice(sentence_pool).replace(".", "").replace("?", "").replace("!", "")
            words = sentence.split()
            options = [{"id": f"w{idx}", "text": word} for idx, word in enumerate(words)]
            correct_order = [opt["id"] for opt in options]
            shuffled = list(options)
            random.shuffle(shuffled)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "reorder_words",
                "prompt_es": "Ordena las palabras para formar una frase:",
                "options": shuffled,
                "correct_answer": correct_order,
                "mastery_tag": "syntax"
            })

        elif type_idx == 5: # Communication
            if comm_pool:
                stim, corr, dists = random.choice(comm_pool)
                opts = [{"id": "c1", "text": corr}]
                for idx, d in enumerate(dists):
                    opts.append({"id": f"c{idx+2}", "text": d})
                random.shuffle(opts)
                exercises.append({
                    "interaction_id": interaction_id,
                    "type": "multiple_choice",
                    "prompt_es": "Elige la respuesta más natural para esta situación:",
                    "stimulus_en": f"Speaker A: \"{stim}\"",
                    "options": opts,
                    "correct_answer": [o["id"] for o in opts if o["text"] == corr][0],
                    "mastery_tag": "communication"
                })
            else: # Fallback to MC Vocab if no comm_pool
                word, translation = random.choice(vocab_pool)
                # Pick 2 other random words as distractors
                distractors = random.sample([v[0] for v in vocab_pool if v[0] != word], 2)
                exercises.append({
                    "interaction_id": interaction_id,
                    "type": "multiple_choice",
                    "prompt_es": f"Selecciona la traducción correcta para '{translation}':",
                    "options": [
                        {"id": "o1", "text": word}, 
                        {"id": "o2", "text": distractors[0]}, 
                        {"id": "o3", "text": distractors[1]}
                    ],
                    "correct_answer": "o1",
                    "mastery_tag": "vocabulary"
                })

        else: # Translation (Short Writing)
            word, trans = random.choice(vocab_pool)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "short_writing",
                "prompt_es": "Traduce al inglés:",
                "stimulus_es": trans,
                "correct_answer": word,
                "mastery_tag": "vocabulary"
            })

    return exercises

UNIT_TITLES = {
    1: "Greetings & Personal Info", 2: "Describing Appearance", 3: "Personality & Character",
    4: "Family & Relationships", 5: "Daily Routines & Habits", 6: "Housework & Home Activities",
    7: "Jobs & The Workplace", 8: "School & University Life", 9: "Feelings & Emotions", 10: "Module 1 Review",
    11: "City Life & Places", 12: "Shopping & Department Stores", 13: "Food, Cooking & Recipes",
    14: "At the Restaurant", 15: "Sports & Fitness", 16: "Health & Common Illnesses",
    17: "The Natural World & Animals", 18: "Weather & Seasons", 19: "Clothes, Styles & Materials",
    20: "Module 2 Review", 21: "Past Simple: Be & Regular Verbs", 22: "Past Simple: Irregular Verbs",
    23: "Past Simple: Questions & Negatives", 24: "A Day to Remember", 25: "Childhood & School Days",
    26: "Travel Experiences", 27: "Nature & Landscapes", 28: "Extreme Weather", 29: "Life Stories & Biographies",
    30: "Module 3 Review", 31: "Future with 'Going to'", 32: "Future with 'Present Continuous'",
    33: "Future with 'Will': Predictions", 34: "Future with 'Will': Offers", 35: "Travel Plans & Bookings",
    36: "Weekend & Holiday Plans", 37: "Future Hopes & Dreams", 38: "Time Clauses", 39: "Zero Conditional",
    40: "Module 4 Review", 41: "Present Perfect: Experiences", 42: "Present Perfect: Ever & Never",
    43: "Present Perfect: Just, Already, Yet", 44: "Present Perfect: For & Since",
    45: "Present Perfect vs Past Simple", 46: "Comparing Places", 47: "Superlatives", 48: "Comparing Lifestyles",
    49: "Transport & Travel", 50: "Module 5 Review", 51: "Modals: Have to & Must",
    52: "Modals: Mustn't & Don't have to", 53: "Modals: Should & Shouldn't", 54: "Modals: Could & May",
    55: "Relative Clauses", 56: "Connectors", 57: "Directions & Map Reading",
    58: "Social English", 59: "First Conditional", 60: "Final A2 Review"
}

def main():
    os.makedirs(COURSE_DIR, exist_ok=True)
    for unit_id in range(1, UNITS_COUNT + 1):
        unit_data = {
            "course": {
                "language_ui": "es-ES", "target_language": "en", "level": "A2",
                "unit_id": f"U{unit_id}", "unit_title": UNIT_TITLES.get(unit_id, f"A2 Unit {unit_id}"),
                "total_duration_minutes": 120
            },
            "blocks": [{"block_id": f"B{unit_id}", "title": UNIT_TITLES.get(unit_id), "content": generate_exercises(unit_id, EXERCISES_PER_UNIT)}]
        }
        with open(os.path.join(COURSE_DIR, f"unit{unit_id}.json"), 'w', encoding='utf-8') as f:
            json.dump(unit_data, f, indent=2, ensure_ascii=False)
        print(f"Generated A2 unit {unit_id}")

if __name__ == "__main__":
    main()
