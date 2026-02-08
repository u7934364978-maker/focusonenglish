import json
import os
import random

# Pedagógica A2 Data for Units 31-40
DATA = {
    31: {
        "title": "Future with 'Going to': Intentions",
        "vocab": [
            ("Intention", "Intención"), ("Plan", "Plan"), ("Decision", "Decisión"), ("Goal", "Meta"),
            ("Ambition", "Ambición"), ("Visit", "Visitar"), ("Travel", "Viajar"), ("Study", "Estudiar"),
            ("Move", "Mudarse"), ("Change", "Cambiar"), ("Start", "Empezar"), ("Buy", "Comprar")
        ],
        "grammar": [
            ("I (go to) ________ travel next summer.", "am going to"), ("She (go to) ________ buy a car.", "is going to"),
            ("They (not/go to) ________ stay here.", "are not going to"), ("We (go to) ________ start a course.", "are going to"),
            ("What ________ you going to do?", "are"), ("Is he ________ (go to) visit us?", "going to")
        ],
        "sentences": [
            "I'm going to learn how to cook Japanese food.", "We are going to move to a bigger house next month.",
            "She is going to study medicine at university.", "They are not going to go on holiday this year.",
            "Are you going to join the gym?", "He is going to look for a new job soon."
        ]
    },
    32: {
        "title": "Future with 'Present Continuous': Arrangements",
        "vocab": [
            ("Arrangement", "Acuerdo/Cita"), ("Meeting", "Reunión"), ("Appointment", "Cita"), ("Dinner", "Cena"),
            ("Party", "Fiesta"), ("Flight", "Vuelo"), ("Concert", "Concierto"), ("Match", "Partido"),
            ("Tonight", "Esta noche"), ("Tomorrow morning", "Mañana por la mañana"), ("Next Monday", "El próximo lunes")
        ],
        "grammar": [
            ("I (meet) ________ my friend tonight.", "am meeting"), ("We (have) ________ a meeting at 10 AM.", "are having"),
            ("She (not/work) ________ tomorrow.", "is not working"), ("They (fly) ________ to London on Friday.", "are flying"),
            ("What time (be) ________ you leaving?", "are"), ("(be) ________ he coming to the party?", "Is")
        ],
        "sentences": [
            "I'm meeting the dentist at 4 o'clock.", "We are having dinner at a nice restaurant tonight.",
            "She is playing tennis with Sarah tomorrow morning.", "They are flying to New York next week.",
            "Are you doing anything special this weekend?", "He is seeing his lawyer on Tuesday."
        ]
    },
    33: {
        "title": "Future with 'Will': Predictions",
        "vocab": [
            ("Prediction", "Predicción"), ("Probably", "Probablemente"), ("Maybe", "Tal vez"), ("I think", "Creo que"),
            ("I hope", "Espero que"), ("Future", "Futuro"), ("Technology", "Tecnología"), ("Space", "Espacio"),
            ("Climate", "Clima"), ("Life", "Vida"), ("Possible", "Posible"), ("Certain", "Cierto/Seguro")
        ],
        "grammar": [
            ("I think it (rain) ________ tomorrow.", "will rain"), ("I don't think they (win) ________.", "will win"),
            ("People (live) ________ on Mars one day.", "will live"), ("Maybe I (be) ________ famous.", "will be"),
            ("The weather (not/be) ________ very good.", "will not be"), ("Will you ________ (help) me?", "help")
        ],
        "sentences": [
            "I think technology will change our lives completely.", "It will probably be a very cold winter.",
            "I hope you will enjoy the concert.", "Will people drive flying cars in the future?",
            "She will definitely pass her exams.", "They won't be happy with the news."
        ]
    },
    34: {
        "title": "Future with 'Will': Offers & Promises",
        "vocab": [
            ("Offer", "Oferta/Ofrecer"), ("Promise", "Promesa/Prometer"), ("Help", "Ayuda/Ayudar"), ("Carry", "Llevar/Cargar"),
            ("Lend", "Prestar"), ("Send", "Enviar"), ("Call", "Llamar"), ("Forget", "Olvidar"),
            ("Secret", "Secreto"), ("Truth", "Verdad"), ("Careful", "Cuidado"), ("Soon", "Pronto")
        ],
        "grammar": [
            ("I (help) ________ you with those bags.", "will help"), ("I (promise) ________ I won't tell anyone.", "promise"),
            ("I (call) ________ you as soon as I arrive.", "will call"), ("(will) ________ you lend me some money?", "Will"),
            ("Don't worry, I (not/forget) ________.", "won't forget"), ("I (send) ________ you an email tonight.", "will send")
        ],
        "sentences": [
            "Wait, I'll open the door for you.", "I'll lend you my umbrella if it rains.", "I promise I'll be home before midnight.",
            "Will you help me with my homework, please?", "I'll send you the photos as soon as possible.", "I won't tell your secret to anyone."
        ]
    },
    35: {
        "title": "Travel Plans & Bookings",
        "vocab": [
            ("Booking", "Reserva"), ("Reservation", "Reserva"), ("Ticket", "Billete/Boleto"), ("Flight", "Vuelo"),
            ("Hotel", "Hotel"), ("Accommodation", "Alojamiento"), ("Destination", "Destino"), ("Itinerary", "Itinerario"),
            ("Check-in", "Registro de entrada"), ("Check-out", "Registro de salida"), ("Single room", "Habitación individual"), ("Double room", "Habitación doble")
        ],
        "grammar": [
            ("I (book) ________ a room yesterday.", "booked"), ("Have you ________ (make) a reservation?", "made"),
            ("We (stay) ________ in a five-star hotel.", "are staying"), ("What time (be) ________ the check-in?", "is"),
            ("I (need) ________ to buy the tickets.", "need"), ("They (not/have) ________ any free rooms.", "don't have")
        ],
        "sentences": [
            "I'd like to book a double room for three nights.", "We have a confirmed reservation for two people.",
            "What is the best way to get to the hotel from the airport?", "I'm looking for cheap flights to Rome.",
            "Can I see your passport and booking confirmation, please?", "The check-out is at 11 o'clock in the morning."
        ]
    },
    36: {
        "title": "Weekend & Holiday Plans",
        "vocab": [
            ("Weekend", "Fin de semana"), ("Holiday", "Vacaciones"), ("Vacation", "Vacaciones"), ("Trip", "Viaje"),
            ("Relax", "Relajarse"), ("Sightseeing", "Turismo"), ("Beach", "Playa"), ("Mountains", "Montañas"),
            ("Camping", "Acampada"), ("Museum", "Museo"), ("Hiking", "Senderismo"), ("Swimming", "Natación")
        ],
        "grammar": [
            ("What ________ you doing this weekend?", "are"), ("We (go) ________ to the beach on Saturday.", "are going"),
            ("I (not/do) ________ anything special.", "am not doing"), ("She (visit) ________ her cousins.", "is visiting"),
            ("Are you ________ (go) away for the holidays?", "going"), ("He (plan) ________ to go camping.", "is planning")
        ],
        "sentences": [
            "I'm going to spend the whole weekend relaxing.", "We are planning a trip to the mountains for the summer.",
            "Are you going sightseeing while you are in London?", "I love going to the beach during my holidays.",
            "We are staying at home this weekend to clean the house.", "What are your plans for the Christmas holidays?"
        ]
    },
    37: {
        "title": "Future Hopes & Dreams",
        "vocab": [
            ("Hope", "Esperanza/Esperar"), ("Dream", "Sueño/Soñar"), ("Ambition", "Ambición"), ("Success", "Éxito"),
            ("Travel", "Viajar"), ("World", "Mundo"), ("Language", "Idioma"), ("Career", "Carrera"),
            ("House", "Casa"), ("Family", "Familia"), ("Happy", "Feliz"), ("Goal", "Meta")
        ],
        "grammar": [
            ("I hope I (travel) ________ around the world.", "will travel"), ("She dreams of ________ (be) an artist.", "being"),
            ("I (want) ________ to be successful.", "want"), ("We (hope) ________ to buy a house.", "hope"),
            ("They (ambition) ________ is to help people.", "ambition"), ("I (be) ________ going to achieve my goals.", "am")
        ],
        "sentences": [
            "I hope I'll be able to speak English fluently one day.", "My biggest dream is to travel across South America.",
            "She hopes to find a job she really loves.", "We want to build a better future for our children.",
            "I'm going to work hard to achieve my ambitions.", "What are your hopes and dreams for the future?"
        ]
    },
    38: {
        "title": "Time Clauses: When, As soon as",
        "vocab": [
            ("When", "Cuando"), ("As soon as", "Tan pronto como"), ("Before", "Antes"), ("After", "Después"),
            ("Until", "Hasta"), ("While", "Mientras"), ("Arrive", "Llegar"), ("Finish", "Terminar"),
            ("Start", "Empezar"), ("Call", "Llamar"), ("Message", "Mensaje"), ("Email", "Correo electrónico")
        ],
        "grammar": [
            ("I'll call you when I (arrive) ________.", "arrive"), ("As soon as I (finish) ________, I'll come.", "finish"),
            ("Before you (go) ________, please close the window.", "go"), ("After I (work) ________, I usually go to the gym.", "work"),
            ("I'll wait until he (come) ________.", "comes"), ("Don't forget to call me when you (be) ________ ready.", "are")
        ],
        "sentences": [
            "I'll send you the email as soon as I get home.", "We'll start the meeting when everyone is here.",
            "Call me as soon as you have any news.", "I'll stay in the office until I finish the report.",
            "When I have some free time, I like to read books.", "Please turn off the lights before you leave."
        ]
    },
    39: {
        "title": "Zero Conditional: General Truths",
        "vocab": [
            ("Condition", "Condición"), ("Result", "Resultado"), ("Truth", "Verdad"), ("Fact", "Hecho"),
            ("Water", "Agua"), ("Ice", "Hielo"), ("Fire", "Fuego"), ("Sun", "Sol"),
            ("Heat", "Calor"), ("Cold", "Frío"), ("Boil", "Hervir"), ("Freeze", "Congelar")
        ],
        "grammar": [
            ("If you heat water, it (boil) ________.", "boils"), ("If it (rain) ________, the ground gets wet.", "rains"),
            ("Plants die if they (not/have) ________ water.", "don't have"), ("If you freeze water, it (become) ________ ice.", "becomes"),
            ("When the sun (go) ________ down, it gets dark.", "goes"), ("If you (mix) ________ red and blue, you get purple.", "mix")
        ],
        "sentences": [
            "If you heat ice, it melts.", "The alarm rings if someone enters the building.",
            "If you don't eat, you get hungry.", "If it's sunny, the temperature usually rises.",
            "Water boils if it reaches one hundred degrees.", "If you press the button, the machine starts."
        ]
    },
    40: {
        "title": "Module 4 Review",
        "vocab": [
            ("Review", "Repaso"), ("Future", "Futuro"), ("Grammar", "Gramática"), ("Vocabulary", "Vocabulario"),
            ("Test", "Prueba"), ("Exercise", "Ejercicio"), ("Check", "Comprobar"), ("Progress", "Progreso"),
            ("Mistake", "Error"), ("Correct", "Correcto"), ("Wrong", "Incorrecto"), ("Section", "Sección")
        ],
        "grammar": [
            ("I (be) ________ ready for the review.", "am"), ("We (have) ________ learned about the future.", "have"),
            ("She (know) ________ all the answers.", "knows"), ("They (not/have) ________ any doubts.", "don't have"),
            ("How (be) ________ your progress?", "is"), ("Let's (check) ________ the grammar again.", "check")
        ],
        "sentences": [
            "This module was all about future plans and predictions.", "I feel much more comfortable using 'will' and 'going to'.",
            "Don't forget to review the zero conditional sentences.", "I'm happy with my progress in this module.",
            "Let's check if all the answers are correct.", "This is the final review before the assessment."
        ]
    }
}

def generate_exercises(unit_id, count, u_data):
    vocab = u_data["vocab"]
    grammar = u_data["grammar"]
    sentences = u_data["sentences"]
    
    exercises = []
    
    # 1. MC Vocab
    v_pool = list(vocab)
    random.shuffle(v_pool)
    for word, trans in v_pool:
        if len(exercises) >= count: break
        others = [w for w, t in vocab if w != word]
        distractors = random.sample(others, min(2, len(others)))
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

    # 7. Add variation to reach 500
    i = 0
    types = ["multiple_choice", "fill_blanks", "short_writing"]
    while len(exercises) < count:
        t = types[i % len(types)]
        word, trans = vocab[i % len(vocab)]
        if t == "multiple_choice":
            others = [w for w, tr in vocab if w != word]
            distractors = random.sample(others, min(2, len(others)))
            opts = [{"id": "o1", "text": word}, {"id": "o2", "text": distractors[0]}, {"id": "o3", "text": distractors[1]}]
            random.shuffle(opts)
            exercises.append({
                "interaction_id": f"U{unit_id}_I{len(exercises)+1}",
                "type": "multiple_choice",
                "prompt_es": f"(V{i}) Traduce '{trans}':",
                "options": opts,
                "correct_answer": [o["id"] for o in opts if o["text"] == word][0],
                "mastery_tag": "vocabulary"
            })
        elif t == "fill_blanks":
            exercises.append({
                "interaction_id": f"U{unit_id}_I{len(exercises)+1}",
                "type": "fill_blanks",
                "prompt_es": f"(V{i}) Completa:",
                "stimulus_en": f"A future or related word for {trans} is '________'.",
                "correct_answer": word,
                "mastery_tag": "vocabulary"
            })
        else:
            exercises.append({
                "interaction_id": f"U{unit_id}_I{len(exercises)+1}",
                "type": "short_writing",
                "prompt_es": f"(V{i}) Escribe '{word}' en español:",
                "stimulus_en": word,
                "correct_answer": trans,
                "mastery_tag": "vocabulary"
            })
        i += 1
        
    return exercises

def main():
    for unit_id, u_data in DATA.items():
        print(f"Generating Unit {unit_id}...")
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
            "blocks": [{"block_id": f"B1", "title": title, "content": exercises}]
        }
        
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(unit_data, f, indent=2, ensure_ascii=False)
            
    print("Done!")

if __name__ == "__main__":
    main()
