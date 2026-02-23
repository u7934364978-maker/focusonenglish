import json
import os
import random

# Pedagógica A2 Data for Units 51-60
DATA = {
    51: {
        "title": "Modals: Have to & Must",
        "vocab": [
            ("Obligation", "Obligación"), ("Rule", "Regla"), ("Law", "Ley"), ("Requirement", "Requisito"),
            ("Necessary", "Necesario"), ("Uniform", "Uniforme"), ("Helmet", "Casco"), ("License", "Licencia"),
            ("Passport", "Pasaporte"), ("Seatbelt", "Cinturón de seguridad"), ("Deadline", "Fecha límite"), ("Contract", "Contrato")
        ],
        "grammar": [
            ("I (have to) ________ wear a uniform at work.", "have to"), ("You (must) ________ stop at the red light.", "must"),
            ("He (have to) ________ get up early.", "has to"), ("We (not/have to) ________ pay now.", "don't have to"),
            ("Do you ________ (have to) go?", "have to"), ("She (must) ________ be on time.", "must")
        ],
        "sentences": [
            "I have to finish this report by Friday.", "You must wear a helmet when you ride a motorcycle.",
            "He has to travel a lot for his job.", "We don't have to work on weekends.",
            "Do you have to bring your own lunch?", "All passengers must wear their seatbelts."
        ]
    },
    52: {
        "title": "Modals: Mustn't & Don't have to",
        "vocab": [
            ("Prohibition", "Prohibición"), ("Forbidden", "Prohibido"), ("Optional", "Opcional"), ("Free", "Libre/Gratis"),
            ("Allowed", "Permitido"), ("Smoke", "Fumar"), ("Park", "Aparcar"), ("Touch", "Tocar"),
            ("Shout", "Gritar"), ("Wait", "Esperar"), ("Hurry", "Darse prisa"), ("Late", "Tarde")
        ],
        "grammar": [
            ("You (must not) ________ smoke here.", "mustn't"), ("You (not/have to) ________ hurry.", "don't have to"),
            ("We (must not) ________ touch the art.", "mustn't"), ("She (not/have to) ________ cook tonight.", "doesn't have to"),
            ("They (must not) ________ be late.", "mustn't"), ("It's free, you (not/have to) ________ pay.", "don't have to")
        ],
        "sentences": [
            "You mustn't park your car in front of the entrance.", "You don't have to come to the meeting if you are busy.",
            "We mustn't forget to lock the door.", "She doesn't have to wear a suit to the office.",
            "Children mustn't play near the busy road.", "It's a holiday, so we don't have to go to school."
        ]
    },
    53: {
        "title": "Modals: Should & Shouldn't",
        "vocab": [
            ("Advice", "Consejo"), ("Suggestion", "Sugerencia"), ("Opinion", "Opinión"), ("Health", "Salud"),
            ("Problem", "Problema"), ("Solution", "Solución"), ("Idea", "Idea"), ("Better", "Mejor"),
            ("Worse", "Peor"), ("Correct", "Correcto"), ("Mistake", "Error"), ("Careful", "Cuidadoso")
        ],
        "grammar": [
            ("You (should) ________ see a doctor.", "should"), ("You (should not) ________ eat so much sugar.", "shouldn't"),
            ("What (should) ________ I do?", "should"), ("He (should) ________ study harder.", "should"),
            ("They (should not) ________ worry so much.", "shouldn't"), ("(should) ________ we call them?", "Should")
        ],
        "sentences": [
            "You should drink more water every day.", "You shouldn't spend so much time on your phone.",
            "I think you should tell him the truth.", "He should ask for help if he doesn't understand.",
            "What should I wear to the wedding?", "We should leave early to avoid the traffic."
        ]
    },
    54: {
        "title": "Modals: Could & May",
        "vocab": [
            ("Permission", "Permiso"), ("Possibility", "Posibilidad"), ("Polite", "Educado"), ("Request", "Petición"),
            ("Borrow", "Pedir prestado"), ("Lend", "Prestar"), ("Help", "Ayuda"), ("Question", "Pregunta"),
            ("Maybe", "Tal vez"), ("Perhaps", "Quizás"), ("Chance", "Oportunidad"), ("Future", "Futuro")
        ],
        "grammar": [
            ("(could) ________ you help me, please?", "Could"), ("(may) ________ I come in?", "May"),
            ("It (could) ________ rain later.", "could"), ("She (may) ________ be at home.", "may"),
            ("We (could) ________ go to the cinema.", "could"), ("(may) ________ I borrow your pen?", "May")
        ],
        "sentences": [
            "Could you tell me the way to the station, please?", "May I use your telephone for a moment?",
            "It could be a very difficult exam.", "We may go to Italy for our holidays this year.",
            "Could you speak more slowly, please?", "He may not be able to come to the party."
        ]
    },
    55: {
        "title": "Relative Clauses: Who, Which, That",
        "vocab": [
            ("Person", "Persona"), ("Thing", "Cosa"), ("Object", "Objeto"), ("Place", "Lugar"),
            ("Relative", "Relativo"), ("Description", "Descripción"), ("Identity", "Identidad"), ("Information", "Información"),
            ("Artist", "Artista"), ("Book", "Libro"), ("City", "Ciudad"), ("Movie", "Película")
        ],
        "grammar": [
            ("The man (who) ________ lives next door is a doctor.", "who"), ("The book (which) ________ I am reading is great.", "which"),
            ("The car (that) ________ she bought is red.", "that"), ("The people (who) ________ work here are friendly.", "who"),
            ("The house (which) ________ is on the corner is old.", "which"), ("I know a girl (who) ________ speaks five languages.", "who")
        ],
        "sentences": [
            "This is the artist who painted that famous picture.", "I've lost the keys which were on the table.",
            "Is that the man who sold you the car?", "The restaurant that we went to was very expensive.",
            "She is the person who helped me with my bags.", "The city which I visited last summer was beautiful."
        ]
    },
    56: {
        "title": "Connectors: Although, So, Because",
        "vocab": [
            ("Connector", "Conector"), ("Reason", "Razón"), ("Result", "Resultado"), ("Contrast", "Contraste"),
            ("Because", "Porque"), ("So", "Así que/Por lo tanto"), ("Although", "Aunque"), ("But", "Pero"),
            ("However", "Sin embargo"), ("Therefore", "Por lo tanto"), ("Since", "Puesto que"), ("Also", "También")
        ],
        "grammar": [
            ("I stayed home (because) ________ it was raining.", "because"), ("It was raining, (so) ________ I stayed home.", "so"),
            ("(although) ________ it was raining, I went out.", "Although"), ("She was tired, (but) ________ she finished the work.", "but"),
            ("He didn't study, (so) ________ he failed the test.", "so"), ("I like him (because) ________ he is funny.", "because")
        ],
        "sentences": [
            "I went to bed early because I was very tired.", "The food was cold, so we complained to the waiter.",
            "Although it was very cold, we went for a walk.", "I'll call you as soon as I arrive, so don't worry.",
            "She studied hard because she wanted to pass the exam.", "He bought a new car although he didn't have much money."
        ]
    },
    57: {
        "title": "Directions & Map Reading",
        "vocab": [
            ("Directions", "Direcciones"), ("Map", "Mapa"), ("Straight on", "Todo recto"), ("Turn left", "Girar a la izquierda"),
            ("Turn right", "Girar a la derecha"), ("Across", "Al otro lado de"), ("Next to", "Junto a"), ("Opposite", "En frente de"),
            ("Between", "Entre"), ("Corner", "Esquina"), ("Bridge", "Puente"), ("Crossroads", "Cruce")
        ],
        "grammar": [
            ("(go) ________ straight on for two blocks.", "Go"), ("(turn) ________ left at the crossroads.", "Turn"),
            ("The bank is (next to) ________ the pharmacy.", "next to"), ("How (get) ________ I to the museum?", "do I get"),
            ("Is there a supermarket (near) ________ here?", "near"), ("Take the second (turn) ________ on the right.", "turning")
        ],
        "sentences": [
            "Go straight on until you reach the traffic lights.", "Turn right at the corner and the library is opposite you.",
            "The cinema is between the post office and the bank.", "Excuse me, can you tell me the way to the park?",
            "Walk across the bridge and turn left at the fountain.", "The museum is next to the large shopping center."
        ]
    },
    58: {
        "title": "Social English: Apologizing & Requesting",
        "vocab": [
            ("Apologize", "Disculparse"), ("Request", "Petición/Solicitud"), ("Sorry", "Lo siento"), ("Pardon", "Perdón"),
            ("Excuse me", "Perdone/Disculpe"), ("Please", "Por favor"), ("Thanks", "Gracias"), ("Welcome", "De nada"),
            ("Mind", "Importar"), ("Favor", "Favor"), ("Help", "Ayudar"), ("Problem", "Problema")
        ],
        "grammar": [
            ("I (be) ________ very sorry I'm late.", "am"), ("(could) ________ you do me a favor?", "Could"),
            ("Do you (mind) ________ if I sit here?", "mind"), ("(would) ________ you like some water?", "Would"),
            ("I (apologize) ________ for the mistake.", "apologize"), ("(can) ________ you help me with this?", "Can")
        ],
        "sentences": [
            "I'm very sorry for being late to the meeting.", "Excuse me, could you tell me what time it is?",
            "Would you mind opening the window, please?", "Can you do me a favor and carry this bag?",
            "I apologize for the delay in my response.", "Thank you very much for all your help."
        ]
    },
    59: {
        "title": "First Conditional: Real Possibilities",
        "vocab": [
            ("Condition", "Condición"), ("Result", "Resultado"), ("Possibility", "Posibilidad"), ("Future", "Futuro"),
            ("If", "Si"), ("Will", "Hará/Auxiliar futuro"), ("Unless", "A menos que"), ("Case", "Caso"),
            ("Plan", "Plan"), ("Weather", "Clima"), ("Outcome", "Resultado"), ("Effect", "Efecto")
        ],
        "grammar": [
            ("If it (rain) ________, I will stay at home.", "rains"), ("I (call) ________ you if I have time.", "will call"),
            ("If she (study) ________, she will pass.", "studies"), ("They (not/come) ________ if it is late.", "won't come"),
            ("What ________ you do if it rains?", "will"), ("If you (not/hurry) ________, you will miss the bus.", "don't hurry")
        ],
        "sentences": [
            "If it's sunny tomorrow, we'll go to the beach.", "I'll help you with your homework if you want.",
            "If she doesn't arrive soon, we'll start without her.", "What will you do if you win the lottery?",
            "If you work hard, you will be successful.", "They'll be very happy if they win the match."
        ]
    },
    60: {
        "title": "Final A2 Review",
        "vocab": [
            ("Final", "Final"), ("Review", "Repaso"), ("Course", "Curso"), ("Completion", "Finalización"),
            ("Certificate", "Certificado"), ("Level", "Nivel"), ("Progress", "Progreso"), ("Goal", "Meta"),
            ("Achievement", "Logro"), ("Future", "Futuro"), ("Knowledge", "Conocimiento"), ("Success", "Éxito")
        ],
        "grammar": [
            ("I (have) ________ finished the A2 course.", "have"), ("We (have) ________ learned many things.", "have"),
            ("She (be) ________ ready for the B1 level.", "is"), ("They (not/forget) ________ anything.", "won't forget"),
            ("How (be) ________ the final test?", "was"), ("I (be) ________ very proud of myself.", "am")
        ],
        "sentences": [
            "This is the end of the final module of the course.", "I have achieved all my learning goals for this level.",
            "Don't forget to keep practicing your English every day.", "I am looking forward to starting the next level.",
            "Congratulations on completing the entire A2 course!", "You are now ready to take the next step in your learning."
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
                "stimulus_en": f"The modal or word for {trans} is '________'.",
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
