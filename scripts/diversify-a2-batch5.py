import json
import os
import random

# Pedagógica A2 Data for Units 41-50
DATA = {
    41: {
        "title": "Present Perfect: Life Experiences",
        "vocab": [
            ("Been", "Estado/Ido"), ("Seen", "Visto"), ("Visited", "Visitado"), ("Tried", "Probado"),
            ("Traveled", "Viajado"), ("Experience", "Experiencia"), ("Life", "Vida"), ("World", "Mundo"),
            ("Abroad", "En el extranjero"), ("Country", "País"), ("City", "Ciudad"), ("Mountain", "Montaña")
        ],
        "grammar": [
            ("I (have) ________ been to London.", "have"), ("She (have) ________ seen that movie.", "has"),
            ("They (have) ________ visited Japan.", "have"), ("We (have) ________ tried sushi.", "have"),
            ("He (have) ________ not traveled much.", "has"), ("Have you ________ (be) to Paris?", "been")
        ],
        "sentences": [
            "I have been to many different countries.", "She has seen the Eiffel Tower.",
            "They have visited the Grand Canyon.", "We have tried many types of international food.",
            "He has never traveled abroad before.", "Have you ever been to a professional football match?"
        ]
    },
    42: {
        "title": "Present Perfect: Ever & Never",
        "vocab": [
            ("Ever", "Alguna vez"), ("Never", "Nunca"), ("Before", "Antes"), ("Once", "Una vez"),
            ("Twice", "Dos veces"), ("Many times", "Muchas veces"), ("Recently", "Recientemente"), ("Yet", "Todavía/Ya"),
            ("Already", "Ya"), ("Just", "Acabar de"), ("So far", "Hasta ahora"), ("All my life", "Toda mi vida")
        ],
        "grammar": [
            ("Have you (ever) ________ been to Asia?", "ever"), ("I have (never) ________ seen a whale.", "never"),
            ("She has (never) ________ eaten octopus.", "never"), ("Has he (ever) ________ played golf?", "ever"),
            ("They have been there (once) ________.", "once"), ("I haven't (never) ________ met him.", "never")
        ],
        "sentences": [
            "Have you ever been to the United States?", "I have never seen a ghost.",
            "She has never eaten such a delicious cake.", "Has he ever played the piano in public?",
            "They have been to the beach many times.", "I have lived in this city all my life."
        ]
    },
    43: {
        "title": "Present Perfect: Just, Already, Yet",
        "vocab": [
            ("Just", "Acabar de"), ("Already", "Ya"), ("Yet", "Todavía/Ya"), ("Finish", "Terminar"),
            ("Start", "Empezar"), ("Arrive", "Llegar"), ("Eat", "Comer"), ("Drink", "Beber"),
            ("Buy", "Comprar"), ("Sell", "Vender"), ("Read", "Leer"), ("Write", "Escribir")
        ],
        "grammar": [
            ("I have (just) ________ finished my homework.", "just"), ("She has (already) ________ left.", "already"),
            ("I haven't finished (yet) ________.", "yet"), ("Have you finished (yet) ________?", "yet"),
            ("They have (already) ________ bought the tickets.", "already"), ("He has (just) ________ arrived.", "just")
        ],
        "sentences": [
            "I have just finished reading this book.", "She has already left for the airport.",
            "I haven't seen that movie yet.", "Have you finished your dinner yet?",
            "They have already bought their new house.", "He has just arrived from his trip."
        ]
    },
    44: {
        "title": "Present Perfect: For & Since",
        "vocab": [
            ("For", "Durante/Por"), ("Since", "Desde"), ("Duration", "Duración"), ("Time", "Tiempo"),
            ("Year", "Año"), ("Month", "Mes"), ("Week", "Semana"), ("Day", "Día"),
            ("Hour", "Hora"), ("Minute", "Minuto"), ("Second", "Segundo"), ("Long time", "Mucho tiempo")
        ],
        "grammar": [
            ("I have lived here (for) ________ ten years.", "for"), ("She has worked here (since) ________ 2010.", "since"),
            ("They have been married (for) ________ a long time.", "for"), ("We have been friends (since) ________ primary school.", "since"),
            ("How long have you lived here (for) ________?", "for"), ("I haven't seen him (since) ________ last Monday.", "since")
        ],
        "sentences": [
            "I have lived in this apartment for five years.", "She has worked at the bank since she graduated.",
            "They have been married for twenty-five years.", "We have been friends since we were children.",
            "How long have you lived in this city?", "I haven't seen my best friend since last month."
        ]
    },
    45: {
        "title": "Present Perfect vs Past Simple",
        "vocab": [
            ("General", "General"), ("Specific", "Específico"), ("Past", "Pasado"), ("Finished", "Terminado"),
            ("Unfinished", "Inacabado"), ("Time", "Tiempo"), ("Event", "Evento"), ("Action", "Acción"),
            ("Last year", "El año pasado"), ("Yesterday", "Ayer"), ("Two days ago", "Hace dos días"), ("Ever", "Alguna vez")
        ],
        "grammar": [
            ("I (be) ________ to Paris three times.", "have been"), ("I (go) ________ to Paris last year.", "went"),
            ("She (not/see) ________ him yesterday.", "didn't see"), ("She (never/see) ________ him.", "has never seen"),
            ("They (move) ________ here in 2005.", "moved"), ("How many movies ________ you seen so far?", "have")
        ],
        "sentences": [
            "I have been to Italy several times.", "I went to Rome last summer.",
            "She didn't call me yesterday morning.", "She has never called me in her life.",
            "They moved to London two years ago.", "How many times have you been to the cinema this month?"
        ]
    },
    46: {
        "title": "Comparing Places: Adjectives",
        "vocab": [
            ("Modern", "Moderno"), ("Ancient", "Antiguo"), ("Noisy", "Ruidoso"), ("Quiet", "Tranquilo"),
            ("Crowded", "Lleno de gente"), ("Empty", "Vacío"), ("Polluted", "Contaminado"), ("Clean", "Limpio"),
            ("Safe", "Seguro"), ("Dangerous", "Peligroso"), ("Expensive", "Caro"), ("Cheap", "Barato")
        ],
        "grammar": [
            ("New York is (big) ________ than London.", "bigger"), ("The city is (noisy) ________ than the country.", "noisier"),
            ("This park is (beautiful) ________ than that one.", "more beautiful"), ("Is it (safe) ________ to walk here at night?", "safer"),
            ("The museum is (old) ________ than the library.", "older"), ("Living in the city is (expensive) ________ than in the village.", "more expensive")
        ],
        "sentences": [
            "Tokyo is much bigger than Kyoto.", "The countryside is quieter than the city center.",
            "The new museum is more modern than the old one.", "Is it safer to live in the suburbs?",
            "The ancient ruins are older than the cathedral.", "Everything is more expensive in the capital city."
        ]
    },
    47: {
        "title": "Superlatives: The best in the world",
        "vocab": [
            ("Best", "El mejor"), ("Worst", "El peor"), ("Highest", "El más alto"), ("Longest", "El más largo"),
            ("Biggest", "El más grande"), ("Smallest", "El más pequeño"), ("Deepest", "El más profundo"), ("Most beautiful", "El más hermoso"),
            ("Most expensive", "El más caro"), ("Most dangerous", "El más peligroso"), ("Most interesting", "El más interesante"), ("Fastest", "El más rápido")
        ],
        "grammar": [
            ("Mount Everest is the (high) ________ mountain.", "highest"), ("This is the (good) ________ movie ever.", "best"),
            ("What is the (long) ________ river in the world?", "longest"), ("It was the (bad) ________ day of my life.", "worst"),
            ("She is the (tall) ________ student in the class.", "tallest"), ("This is the (expensive) ________ restaurant in town.", "most expensive")
        ],
        "sentences": [
            "Mount Everest is the highest mountain in the world.", "This is the best pizza I have ever eaten.",
            "What is the longest river in South America?", "It was the worst storm in twenty years.",
            "She is the tallest person in her family.", "This is the most expensive hotel in the city."
        ]
    },
    48: {
        "title": "Comparing Lifestyles",
        "vocab": [
            ("Lifestyle", "Estilo de vida"), ("Healthy", "Saludable"), ("Stressful", "Estresante"), ("Busy", "Ocupado"),
            ("Relaxed", "Relajado"), ("Active", "Activo"), ("Sedentary", "Sedentario"), ("Traditional", "Tradicional"),
            ("Modern", "Moderno"), ("Simple", "Simple"), ("Complicated", "Complicado"), ("Sustainable", "Sostenible")
        ],
        "grammar": [
            ("City life is (stressful) ________ than village life.", "more stressful"), ("A healthy diet is (important) ________ than exercise.", "more important"),
            ("He is (active) ________ than his brother.", "more active"), ("Is it (easy) ________ to live in a small town?", "easier"),
            ("My life is (busy) ________ than it was last year.", "busier"), ("A simple lifestyle is (good) ________ for the mind.", "better")
        ],
        "sentences": [
            "Living in the city is much more stressful than living in a village.", "A healthy lifestyle is more important than having a lot of money.",
            "He is much more active than he used to be.", "Is it easier to make friends in a small town?",
            "My schedule is busier than usual this week.", "A simple life can be better for your overall happiness."
        ]
    },
    49: {
        "title": "Transport & Travel Experiences",
        "vocab": [
            ("Transport", "Transporte"), ("Journey", "Trayecto"), ("Trip", "Viaje"), ("Flight", "Vuelo"),
            ("Train", "Tren"), ("Bus", "Autobús"), ("Boat", "Barco"), ("Plane", "Avión"),
            ("Ticket", "Billete"), ("Passenger", "Pasajero"), ("Luggage", "Equipaje"), ("Delay", "Retraso")
        ],
        "grammar": [
            ("I (travel) ________ by train many times.", "have traveled"), ("The journey (take) ________ two hours.", "took"),
            ("There (be) ________ a long delay at the airport.", "was"), ("Have you ________ (buy) your ticket yet?", "bought"),
            ("She (not/like) ________ traveling by boat.", "doesn't like"), ("How (do) ________ you get to the station?", "did")
        ],
        "sentences": [
            "I have traveled across Europe by train.", "The flight from London to New York took eight hours.",
            "There was a three-hour delay due to bad weather.", "Have you bought your plane tickets yet?",
            "She doesn't like traveling by boat because she gets seasick.", "We took a taxi to the train station."
        ]
    },
    50: {
        "title": "Module 5 Review",
        "vocab": [
            ("Review", "Repaso"), ("Comparison", "Comparación"), ("Experience", "Experiencia"), ("Success", "Éxito"),
            ("Improvement", "Mejora"), ("Result", "Resultado"), ("Practice", "Práctica"), ("Skill", "Habilidad"),
            ("Grammar", "Gramática"), ("Vocabulary", "Vocabulario"), ("Test", "Prueba"), ("Goal", "Meta")
        ],
        "grammar": [
            ("I (have) ________ completed the fifth module.", "have"), ("We (have) ________ learned about the present perfect.", "have"),
            ("She (be) ________ the best student in the review.", "is"), ("They (not/have) ________ any more questions.", "don't have"),
            ("How (be) ________ the test results?", "were"), ("Let's (review) ________ the superlatives.", "review")
        ],
        "sentences": [
            "This is the end of the fifth module of the course.", "I have learned a lot about comparing places and lifestyles.",
            "Don't forget to practice the present perfect irregular verbs.", "The test results show a great improvement.",
            "Let's review the most important vocabulary from this section.", "We are ready to start the final module."
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
                "stimulus_en": f"The experience related to {trans} is '________'.",
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
