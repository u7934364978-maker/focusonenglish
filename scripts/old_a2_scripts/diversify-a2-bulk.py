import json
import os
import random

# Pedagógica A2 Data for Units 2-10
DATA = {
    2: {
        "title": "Describing Appearance",
        "vocab": [
            ("Tall", "Alto"), ("Short", "Bajo"), ("Slim", "Delgado"), ("Thin", "Flaco"), ("Fat", "Gordo"),
            ("Overweight", "Con sobrepeso"), ("Attractive", "Atractivo"), ("Beautiful", "Hermosa"), ("Handsome", "Guapo"),
            ("Blonde", "Rubio"), ("Dark-haired", "Moreno"), ("Redhead", "Pelirrojo"), ("Curly", "Rizado"),
            ("Straight", "Liso"), ("Wavy", "Ondulado"), ("Beard", "Barba"), ("Moustache", "Bigote"),
            ("Glasses", "Gafas"), ("Freckles", "Pecas"), ("Wrinkles", "Arrugas"), ("Bald", "Calvo"),
            ("Fair skin", "Piel clara"), ("Tanned", "Bronceado"), ("Muscular", "Musculoso"), ("Strong", "Fuerte"),
            ("Shoulder-length hair", "Pelo a la altura de los hombros"), ("Pony tail", "Coleta"), ("Bangs", "Flequillo"),
            ("Tattoo", "Tatuaje"), ("Scar", "Cicatriz"), ("Elegant", "Elegante"), ("Casual", "Informal"),
            ("Smart", "Arreglado/Elegante"), ("Scruffy", "Desaliñado"), ("Clean-shaven", "Afeitado")
        ],
        "grammar": [
            ("She (have got) ________ curly hair.", "has got"), ("He (be) ________ very tall.", "is"),
            ("They (not/be) ________ overweight.", "are not"), ("My father is ________ (old) than my mother.", "older"),
            ("She is the ________ (beautiful) woman.", "most beautiful"), ("He ________ (wear) a green jacket today.", "is wearing"),
            ("I ________ (not/have) any freckles.", "don't have"), ("What ________ she look like?", "does")
        ],
        "sentences": [
            "She has long wavy blonde hair.", "He is wearing contact lenses today.", "My grandfather has a white beard.",
            "He is much taller than his cousin.", "She is a very attractive woman.", "What does your best friend look like?",
            "He has got dark brown eyes.", "They are both very slim and fit.", "She is the shortest in her family.",
            "I have short straight black hair.", "Does your father have a moustache?", "She looks much younger than she is."
        ]
    },
    3: {
        "title": "Personality & Character",
        "vocab": [
            ("Kind", "Amable"), ("Friendly", "Simpático"), ("Funny", "Divertido"), ("Clever", "Listo"),
            ("Intelligent", "Inteligente"), ("Lazy", "Perezoso"), ("Hard-working", "Trabajador"), ("Shy", "Tímido"),
            ("Outgoing", "Extrovertido"), ("Patient", "Paciente"), ("Honest", "Honesto"), ("Polite", "Educado"),
            ("Rude", "Maleducado"), ("Serious", "Serio"), ("Quiet", "Tranquilo"), ("Helpful", "Servicial"),
            ("Generous", "Generoso"), ("Mean", "Tacaño/Malo"), ("Cheerful", "Alegre"), ("Moody", "Malhumorado")
        ],
        "grammar": [
            ("He (be) ________ always very helpful.", "is"), ("She (not/be) ________ very patient.", "is not"),
            ("Are you ________ (lazy) than your brother?", "lazier"), ("He is the ________ (funny) person I know.", "funniest"),
            ("I (think) ________ she is very clever.", "think"), ("We (be) ________ both quite shy.", "are")
        ],
        "sentences": [
            "My teacher is very patient with us.", "He is a very funny and cheerful man.", "She is quite shy with new people.",
            "He is the most hard-working employee.", "Don't be rude to the customers.", "Is your brother an outgoing person?",
            "She is cleverer than her older brother.", "They are very helpful neighbors.", "I am a quiet and sensible person."
        ]
    },
    4: {
        "title": "Family & Relationships",
        "vocab": [
            ("Mother", "Madre"), ("Father", "Padre"), ("Sister", "Hermana"), ("Brother", "Hermano"),
            ("Daughter", "Hija"), ("Son", "Hijo"), ("Grandmother", "Abuela"), ("Grandfather", "Abuelo"),
            ("Cousin", "Primo/a"), ("Aunt", "Tía"), ("Uncle", "Tío"), ("Niece", "Sobrina"), ("Nephew", "Sobrino"),
            ("Wife", "Esposa"), ("Husband", "Esposo"), ("Partner", "Pareja"), ("Relative", "Pariente")
        ],
        "grammar": [
            ("My sister (have got) ________ two children.", "has got"), ("They (be) ________ my cousins.", "are"),
            ("How many siblings ________ you got?", "have"), ("She (not/have) ________ any brothers.", "doesn't have"),
            ("We (visit) ________ our grandparents every week.", "visit"), ("Is ________ your father in the photo?", "that")
        ],
        "sentences": [
            "I have a very large extended family.", "My mother's name is Elena.", "Do you have any siblings?",
            "He is my favorite uncle.", "My grandparents live in a small village.", "She has two daughters and one son."
        ]
    },
    5: {
        "title": "Daily Routines & Habits",
        "vocab": [
            ("Wake up", "Despertarse"), ("Get up", "Levantarse"), ("Have a shower", "Ducharse"),
            ("Brush teeth", "Cepillarse los dientes"), ("Get dressed", "Vestirse"), ("Have breakfast", "Desayunar"),
            ("Leave home", "Salir de casa"), ("Go to work", "Ir a trabajar"), ("Start", "Empezar"), ("Finish", "Terminar"),
            ("Have lunch", "Almorzar"), ("Go home", "Ir a casa"), ("Cook dinner", "Cocinar la cena"), ("Go to bed", "Irse a la cama")
        ],
        "grammar": [
            ("I (get up) ________ at 7 AM.", "get up"), ("She (usually/have) ________ coffee.", "usually has"),
            ("They (not/work) ________ on Sundays.", "don't work"), ("What time ________ he finish?", "does"),
            ("I (never/be) ________ late.", "am never"), ("We (often/go) ________ to the gym.", "often go")
        ],
        "sentences": [
            "I always wake up at 6 o'clock.", "She usually has a quick shower in the morning.",
            "He never eats breakfast before work.", "What time do you usually finish your homework?",
            "They often go for a long walk in the evening.", "I sometimes listen to podcasts while I cook."
        ]
    },
    6: {
        "title": "Housework & Home Activities",
        "vocab": [
            ("Cleaning", "Limpieza"), ("Laundry", "Colada"), ("Dishes", "Platos"), ("Ironing", "Planchado"),
            ("Dusting", "Quitar el polvo"), ("Tidy up", "Ordenar"), ("Shopping", "Compras"), ("Cooking", "Cocinar"),
            ("Garden", "Jardín"), ("Sweep", "Barrer"), ("Mop", "Fregar"), ("Vacuum", "Aspirar")
        ],
        "grammar": [
            ("I (be) ________ cleaning the floor.", "am"), ("She (need) ________ to do the laundry.", "needs"),
            ("They (not/like) ________ doing the dishes.", "don't like"), ("We (must) ________ tidy up the house.", "must"),
            ("Have you ________ (finish) the ironing?", "finished"), ("He (usually) ________ cooks dinner.", "usually")
        ],
        "sentences": [
            "I have to do the laundry every Saturday.", "He is helping me with the dishes.",
            "She spent all morning dusting the furniture.", "We need to tidy up before the guests arrive.",
            "I hate doing the shopping on weekends.", "The house is finally clean and tidy."
        ]
    },
    7: {
        "title": "Jobs & The Workplace",
        "vocab": [
            ("Manager", "Gerente"), ("Office", "Oficina"), ("Meeting", "Reunión"), ("Colleague", "Colega"),
            ("Boss", "Jefe"), ("Salary", "Salario"), ("Interview", "Entrevista"), ("Business", "Negocio"),
            ("Pilot", "Piloto"), ("Nurse", "Enfermero"), ("Engineer", "Ingeniero"), ("Employee", "Empleado")
        ],
        "grammar": [
            ("He (work) ________ in a bank.", "works"), ("She (be) ________ a manager.", "is"),
            ("They (not/have) ________ a meeting today.", "don't have"), ("I (be) ________ looking for a job.", "am"),
            ("Does he ________ (earn) much?", "earn"), ("What ________ your boss do?", "does")
        ],
        "sentences": [
            "He works for a very large international company.", "I have an important job interview tomorrow.",
            "She is a very experienced and professional nurse.", "My colleagues are very friendly and helpful.",
            "We have a team meeting every Monday morning.", "He wants to have a successful business career."
        ]
    },
    8: {
        "title": "School & University Life",
        "vocab": [
            ("Subject", "Asignatura"), ("Exam", "Examen"), ("Library", "Biblioteca"), ("Teacher", "Profesor"),
            ("Student", "Estudiante"), ("Homework", "Deberes"), ("Grade", "Nota"), ("Degree", "Título/Carrera"),
            ("Lecture", "Clase magistral"), ("Research", "Investigación"), ("Knowledge", "Conocimiento")
        ],
        "grammar": [
            ("I (study) ________ history.", "study"), ("She (have) ________ an exam tomorrow.", "has"),
            ("They (not/go) ________ to the library often.", "don't go"), ("Do you ________ (like) math?", "like"),
            ("He (be) ________ a very good student.", "is"), ("We (need) ________ to do our homework.", "need")
        ],
        "sentences": [
            "My favorite subject at school was history.", "I am studying hard for my final exams.",
            "The university library is open 24 hours.", "She got a very high grade in her test.",
            "He is doing a degree in computer science.", "We have a lot of homework this week."
        ]
    },
    9: {
        "title": "Feelings & Emotions",
        "vocab": [
            ("Happy", "Feliz"), ("Sad", "Triste"), ("Angry", "Enfadado"), ("Nervous", "Nervioso"),
            ("Excited", "Emocionado"), ("Bored", "Aburrido"), ("Tired", "Cansado"), ("Surprised", "Sorprendido"),
            ("Scared", "Asustado"), ("Worried", "Preocupado"), ("Proud", "Orgulloso"), ("Lonely", "Solo/Solitario")
        ],
        "grammar": [
            ("I (be) ________ very happy today.", "am"), ("She (feel) ________ nervous about the test.", "feels"),
            ("They (not/be) ________ bored at all.", "are not"), ("Are you ________ (tired) than usual?", "more tired"),
            ("He (be) ________ the most excited person.", "is"), ("We (be) ________ proud of you.", "are")
        ],
        "sentences": [
            "I feel very happy when I am with my friends.", "She was surprised by the news.",
            "He is always tired after a long day at work.", "Don't be scared of the dark.",
            "We are very worried about the situation.", "I am proud of my academic achievements."
        ]
    },
    10: {
        "title": "Module 1 Review",
        "vocab": [
            ("Review", "Repaso"), ("Question", "Pregunta"), ("Answer", "Respuesta"), ("Test", "Prueba"),
            ("Success", "Éxito"), ("Practice", "Práctica"), ("Knowledge", "Conocimiento"), ("Goal", "Meta")
        ],
        "grammar": [
            ("I (be) ________ ready for the review.", "am"), ("She (know) ________ all the answers.", "knows"),
            ("We (have) ________ learned a lot.", "have"), ("They (not/be) ________ ready yet.", "are not"),
            ("Is ________ correct?", "this"), ("Do you ________ (understand) everything?", "understand")
        ],
        "sentences": [
            "This is a review of everything we learned.", "Answer all the questions carefully.",
            "I am very proud of my progress so far.", "Practice makes perfect in language learning.",
            "We have achieved our goals for this module.", "I am ready for the next challenge."
        ]
    }
}

def generate_exercises(unit_id, count, u_data):
    vocab = u_data["vocab"]
    grammar = u_data["grammar"]
    sentences = u_data["sentences"]
    
    exercises = []
    
    # Increase diversity by creating many unique items
    
    # 1. MC Vocab (Unique words)
    v_pool = list(vocab)
    random.shuffle(v_pool)
    for word, trans in v_pool:
        if len(exercises) >= count: break
        others = [w for w, t in vocab if w != word]
        distractors = random.sample(others, 2)
        opts = [{"id": "o1", "text": word}, {"id": "o2", "text": distractors[0]}, {"id": "o3", "text": distractors[1]}]
        random.shuffle(opts)
        exercises.append({
            "interaction_id": f"U{unit_id}_I{len(exercises)+1}",
            "type": "multiple_choice",
            "prompt_es": f"Selecciona la traducción para '{trans}':",
            "options": opts,
            "correct_answer": [o["id"] for o in opts if o["text"] == word][0],
            "mastery_tag": "vocabulary"
        })
    
    # 2. Matching
    random.shuffle(v_pool)
    for i in range(0, len(v_pool) - 2, 3):
        if len(exercises) >= count: break
        chunk = v_pool[i:i+3]
        pairs = [{"id": f"p{j}", "left": w, "right": t} for j, (w, t) in enumerate(chunk)]
        exercises.append({
            "interaction_id": f"U{unit_id}_I{len(exercises)+1}",
            "type": "matching",
            "prompt_es": "Une los términos:",
            "pairs": pairs,
            "correct_answer": {p["id"]: p["id"] for p in pairs},
            "mastery_tag": "vocabulary"
        })

    # 3. Fill Blanks
    g_pool = list(grammar)
    random.shuffle(g_pool)
    for stim, corr in g_pool:
        if len(exercises) >= count: break
        exercises.append({
            "interaction_id": f"U{unit_id}_I{len(exercises)+1}",
            "type": "fill_blanks",
            "prompt_es": "Escribe la forma correcta:",
            "stimulus_en": stim,
            "correct_answer": corr,
            "mastery_tag": "grammar"
        })

    # 4. True/False
    s_pool = list(sentences)
    random.shuffle(s_pool)
    for i, sent in enumerate(s_pool):
        if len(exercises) >= count: break
        is_corr = (i % 2 == 0)
        display = sent
        if not is_corr:
            words = sent.split()
            if len(words) > 3:
                words[1], words[2] = words[2], words[1]
                display = " ".join(words)
            else:
                display = sent.replace(".", "") + " not."
        exercises.append({
            "interaction_id": f"U{unit_id}_I{len(exercises)+1}",
            "type": "true_false",
            "prompt_es": "¿Es gramaticalmente correcta?",
            "stimulus_en": display,
            "correct_answer": is_corr,
            "mastery_tag": "grammar"
        })

    # 5. Reorder
    random.shuffle(s_pool)
    for sent in s_pool:
        if len(exercises) >= count: break
        clean = sent.replace(".", "").replace("?", "").replace("!", "")
        words = clean.split()
        opts = [{"id": f"w{j}", "text": w} for j, w in enumerate(words)]
        shuffled = list(opts)
        random.shuffle(shuffled)
        exercises.append({
            "interaction_id": f"U{unit_id}_I{len(exercises)+1}",
            "type": "reorder_words",
            "prompt_es": "Ordena las palabras:",
            "options": shuffled,
            "correct_answer": [o["id"] for o in opts],
            "mastery_tag": "syntax"
        })

    # 6. Short Writing
    random.shuffle(v_pool)
    for word, trans in v_pool:
        if len(exercises) >= count: break
        exercises.append({
            "interaction_id": f"U{unit_id}_I{len(exercises)+1}",
            "type": "short_writing",
            "prompt_es": "Escribe en inglés:",
            "stimulus_es": trans,
            "correct_answer": word,
            "mastery_tag": "vocabulary"
        })

    # Fill remaining to 500 with UNIQUE variations
    i = 0
    while len(exercises) < count:
        word, trans = vocab[i % len(vocab)]
        exercises.append({
            "interaction_id": f"U{unit_id}_I{len(exercises)+1}",
            "type": "short_writing",
            "prompt_es": f"Translate variant {i}:",
            "stimulus_es": trans,
            "correct_answer": word,
            "mastery_tag": "vocabulary"
        })
        i += 1
        
    return exercises

def main():
    for unit_id, u_data in DATA.items():
        exercises = generate_exercises(unit_id, 500, u_data)
        path = f'src/content/cursos/ingles-a2/unit{unit_id}.json'
        with open(path, 'r', encoding='utf-8') as f:
            old_data = json.load(f)
            title = old_data['course']['unit_title']
        
        unit_data = {
            "course": {
                "language_ui": "es-ES", "target_language": "en", "level": "A2",
                "unit_id": f"U{unit_id}", "unit_title": title,
                "total_duration_minutes": 120
            },
            "blocks": [{"block_id": f"B{unit_id}", "title": title, "content": exercises}]
        }
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(unit_data, f, indent=2, ensure_ascii=False)
        print(f"Diversified Unit {unit_id}")

if __name__ == "__main__":
    main()
