import json
import os
import random

# Pedagógica A2 Data for Units 21-30
DATA = {
    21: {
        "title": "Past Simple: To Be & Regular Verbs",
        "vocab": [
            ("Visited", "Visitado"), ("Played", "Jugado"), ("Watched", "Mirado"), ("Cooked", "Cocinado"),
            ("Cleaned", "Limpiado"), ("Worked", "Trabajado"), ("Started", "Empezado"), ("Finished", "Terminado"),
            ("Lived", "Vivido"), ("Studied", "Estudiado"), ("Walked", "Caminado"), ("Talked", "Hablado"),
            ("Yesterday", "Ayer"), ("Last night", "Anoche"), ("Last week", "La semana pasada"), ("Two days ago", "Hace dos días")
        ],
        "grammar": [
            ("I (be) ________ at home yesterday.", "was"), ("They (be) ________ very happy.", "were"),
            ("She (visit) ________ her grandmother last Sunday.", "visited"), ("We (watch) ________ a movie last night.", "watched"),
            ("He (not/be) ________ at the meeting.", "was not"), ("It (rain) ________ all day yesterday.", "rained")
        ],
        "sentences": [
            "I was born in a small town.", "We visited Paris two years ago.", "He worked until late last night.",
            "They were very tired after the trip.", "She studied English at university.", "I cooked a delicious dinner for my friends."
        ]
    },
    22: {
        "title": "Past Simple: Irregular Verbs",
        "vocab": [
            ("Went", "Fui/Fue"), ("Had", "Tuve/Tenía"), ("Bought", "Compré/Compró"), ("Saw", "Vi/Vio"),
            ("Took", "Tomé/Tomó"), ("Made", "Hice/Hizo"), ("Came", "Vine/Vino"), ("Gave", "Di/Dio"),
            ("Found", "Encontré/Encontró"), ("Left", "Salí/Salió"), ("Drank", "Bebí/Bebió"), ("Ate", "Comí/Comió"),
            ("Slept", "Dormí/Durmió"), ("Wrote", "Escribí/Escribió"), ("Read", "Leí/Leyó")
        ],
        "grammar": [
            ("I (go) ________ to the cinema on Friday.", "went"), ("She (have) ________ a big breakfast.", "had"),
            ("They (buy) ________ a new car last month.", "bought"), ("He (see) ________ his friend at the mall.", "saw"),
            ("We (take) ________ many photos during the trip.", "took"), ("I (make) ________ a mistake.", "made")
        ],
        "sentences": [
            "I went to London for my holidays.", "She bought a beautiful dress for the party.", "We had a great time at the concert.",
            "He saw a very interesting documentary.", "They ate at a Japanese restaurant.", "I found my keys under the sofa."
        ]
    },
    23: {
        "title": "Past Simple: Questions & Negatives",
        "vocab": [
            ("Did", "Hizo/Hice (Auxiliar)"), ("Didn't", "No hizo/hice (Auxiliar)"), ("Anywhere", "Cualquier lugar"),
            ("Anything", "Cualquier cosa"), ("Anyone", "Cualquier persona"), ("Last year", "El año pasado"),
            ("Last month", "El mes pasado"), ("A week ago", "Hace una semana"), ("Long ago", "Hace mucho tiempo")
        ],
        "grammar": [
            ("(do) ________ you go out last night?", "Did"), ("I (not/go) ________ to work yesterday.", "didn't go"),
            ("She (not/see) ________ the message.", "didn't see"), ("(do) ________ they enjoy the movie?", "Did"),
            ("He (not/have) ________ time to call you.", "didn't have"), ("What (do) ________ you buy at the shops?", "did")
        ],
        "sentences": [
            "I didn't go to the party because I was tired.", "Did you see the football match yesterday?", "She didn't like the food at the hotel.",
            "What did you do last weekend?", "We didn't have any problems during the flight.", "Did they arrive on time?"
        ]
    },
    24: {
        "title": "A Day to Remember",
        "vocab": [
            ("Unforgettable", "Inolvidable"), ("Memorable", "Memorable"), ("Exciting", "Emocionante"),
            ("Wonderful", "Maravilloso"), ("Amazing", "Increíble"), ("Special", "Especial"), ("Event", "Evento"),
            ("Celebration", "Celebración"), ("Anniversary", "Aniversario"), ("Wedding", "Boda"),
            ("Graduation", "Graduación"), ("Birthday", "Cumpleaños")
        ],
        "grammar": [
            ("It (be) ________ the best day of my life.", "was"), ("We (celebrate) ________ my father's 50th birthday.", "celebrated"),
            ("Everything (be) ________ perfect.", "was"), ("I (never/forget) ________ that day.", "will never forget"),
            ("They (give) ________ me a wonderful surprise.", "gave"), ("She (wear) ________ a beautiful white dress.", "wore")
        ],
        "sentences": [
            "It was an unforgettable experience.", "We spent the whole day at the beach.", "I felt very happy and excited.",
            "The graduation ceremony was very moving.", "We took hundreds of photos.", "It was a truly special moment."
        ]
    },
    25: {
        "title": "Childhood & School Days",
        "vocab": [
            ("Childhood", "Infancia"), ("Memory", "Recuerdo"), ("Playground", "Patio de recreo"),
            ("Primary school", "Escuela primaria"), ("Toy", "Juguete"), ("Cartoon", "Dibujos animados"),
            ("Best friend", "Mejor amigo/a"), ("Subject", "Asignatura"), ("Uniform", "Uniforme"),
            ("Teacher", "Profesor/a"), ("Hobby", "Pasatiempo"), ("Growing up", "Crecer")
        ],
        "grammar": [
            ("I (use to) ________ play with dolls.", "used to"), ("We (have) ________ a dog when I was little.", "had"),
            ("She (be) ________ very shy as a child.", "was"), ("They (not/like) ________ school much.", "didn't like"),
            ("My favorite subject (be) ________ Art.", "was"), ("What (be) ________ your favorite toy?", "was")
        ],
        "sentences": [
            "I grew up in a very small village.", "My best friend at school was called Mark.", "I used to spend hours playing outside.",
            "I loved watching cartoons on Saturday mornings.", "We didn't have to wear a uniform.", "Primary school was a very happy time."
        ]
    },
    26: {
        "title": "Travel Experiences",
        "vocab": [
            ("Journey", "Viaje/Trayecto"), ("Trip", "Viaje corto"), ("Flight", "Vuelo"), ("Passenger", "Pasajero"),
            ("Destination", "Destino"), ("Luggage", "Equipaje"), ("Backpack", "Mochila"), ("Sightseeing", "Turismo"),
            ("Souvenir", "Recuerdo"), ("Guidebook", "Guía"), ("Map", "Mapa"), ("Passport", "Pasaporte")
        ],
        "grammar": [
            ("The flight (be) ________ very long.", "was"), ("We (stay) ________ in a small guest house.", "stayed"),
            ("I (lose) ________ my map in the city center.", "lost"), ("They (visit) ________ all the museums.", "visited"),
            ("She (take) ________ the wrong train.", "took"), ("Did you ________ (buy) any souvenirs?", "buy")
        ],
        "sentences": [
            "The journey took more than ten hours.", "We went sightseeing in the old town.", "I bought a beautiful souvenir for my sister.",
            "The view from the top of the mountain was amazing.", "We met many interesting people during our trip.", "Don't forget to pack your passport."
        ]
    },
    27: {
        "title": "Nature & Landscapes",
        "vocab": [
            ("Mountain", "Montaña"), ("River", "Río"), ("Lake", "Lago"), ("Forest", "Bosque"),
            ("Beach", "Playa"), ("Island", "Isla"), ("Coast", "Costa"), ("Ocean", "Océano"),
            ("Desert", "Desierto"), ("Valley", "Valle"), ("Climb", "Escalar"), ("Hike", "Caminata/Senderismo"),
            ("Beautiful", "Hermoso"), ("Wild", "Salvaje"), ("Peaceful", "Tranquilo")
        ],
        "grammar": [
            ("The Amazon is (long) ________ than the Nile.", "longer"), ("This mountain is (high) ________ than that one.", "higher"),
            ("The city is (noisy) ________ than the country.", "noisier"), ("Nature is (beautiful) ________ than buildings.", "more beautiful"),
            ("Is the Pacific (big) ________ than the Atlantic?", "bigger"), ("The forest is (quiet) ________ than the street.", "quieter")
        ],
        "sentences": [
            "I love hiking in the mountains.", "The lake is very peaceful in the morning.", "We saw many wild animals in the forest.",
            "The coast is much colder than the city center.", "It is the most beautiful landscape I have ever seen.", "The desert can be very dangerous."
        ]
    },
    28: {
        "title": "Extreme Weather",
        "vocab": [
            ("Heatwave", "Ola de calor"), ("Flood", "Inundación"), ("Drought", "Sequía"), ("Hurricane", "Huracán"),
            ("Storm", "Tormenta"), ("Thunder", "Trueno"), ("Lightning", "Relámpago"), ("Freezing", "Gélido"),
            ("Boiling", "Hirviendo"), ("Humidity", "Humedad"), ("Strong winds", "Vientos fuertes"), ("Heavy rain", "Lluvia intensa")
        ],
        "grammar": [
            ("It is the (hot) ________ day of the year.", "hottest"), ("This is the (bad) ________ storm ever.", "worst"),
            ("The (high) ________ temperature was 45 degrees.", "highest"), ("It was the (scary) ________ experience.", "scariest"),
            ("What is the (cold) ________ place on Earth?", "coldest"), ("This is the (beautiful) ________ sunset.", "most beautiful")
        ],
        "sentences": [
            "The heatwave lasted for two weeks.", "There was heavy rain and strong winds all night.", "The village was affected by a big flood.",
            "It's freezing outside, you should wear a coat.", "The hurricane caused a lot of damage.", "I am scared of thunder and lightning."
        ]
    },
    29: {
        "title": "Life Stories & Biographies",
        "vocab": [
            ("Born", "Nacido"), ("Raised", "Criado"), ("Education", "Educación"), ("Career", "Carrera"),
            ("Success", "Éxito"), ("Achievement", "Logro"), ("Famous", "Famoso"), ("Talented", "Talentoso"),
            ("Discovery", "Descubrimiento"), ("Invention", "Invento"), ("Award", "Premio"), ("Legend", "Leyenda")
        ],
        "grammar": [
            ("He (be) ________ born in 1950.", "was"), ("She (become) ________ a doctor in 1980.", "became"),
            ("They (move) ________ to New York in 1995.", "moved"), ("He (win) ________ many awards.", "won"),
            ("She (write) ________ her first book at 20.", "wrote"), ("He (not/finish) ________ university.", "didn't finish")
        ],
        "sentences": [
            "She was a very talented musician.", "He made an important scientific discovery.", "He is remembered as a national hero.",
            "She worked hard to achieve her goals.", "He became famous after his first movie.", "The biography tells the story of his life."
        ]
    },
    30: {
        "title": "Module 3 Review",
        "vocab": [
            ("Review", "Repaso"), ("Summary", "Resumen"), ("Practice", "Práctica"), ("Check", "Comprobar"),
            ("Knowledge", "Conocimiento"), ("Skill", "Habilidad"), ("Improve", "Mejorar"), ("Result", "Resultado")
        ],
        "grammar": [
            ("I (learn) ________ about the past simple.", "learned"), ("We (compare) ________ different places.", "compared"),
            ("She (not/have) ________ any mistakes.", "didn't have"), ("They (be) ________ the best students.", "were"),
            ("How (be) ________ the test?", "was"), ("Let's (check) ________ the answers.", "check")
        ],
        "sentences": [
            "This is the end of the third module.", "I feel more confident with past tenses now.", "Make sure you review the irregular verbs.",
            "The test results were very positive.", "I can now describe my childhood memories.", "Let's move on to the next module."
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
                "stimulus_en": f"The past or related word for {trans} is '________'.",
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
