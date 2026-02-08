import json
import os
import random

# Pedagógica A2 Data for Units 11-20
DATA = {
    11: {
        "title": "City Life & Places",
        "vocab": [
            ("Town Hall", "Ayuntamiento"), ("Post Office", "Oficina de correos"), ("Library", "Biblioteca"),
            ("Museum", "Museo"), ("Art Gallery", "Galería de arte"), ("Bank", "Banco"), ("Square", "Plaza"),
            ("Fountain", "Fuente"), ("Statue", "Estatua"), ("Skyscraper", "Rascacielos"), ("Pedestrian crossing", "Paso de peatones"),
            ("Traffic lights", "Semáforo"), ("Roundabout", "Rotonda"), ("Pavement", "Acera"), ("Suburbs", "Afueras"),
            ("City center", "Centro de la ciudad"), ("Public transport", "Transporte público"), ("Park", "Parque")
        ],
        "grammar": [
            ("There (be) ________ a lot of traffic in the city.", "is"), ("Where (be) ________ the nearest bank?", "is"),
            ("You (can) ________ find great food in the center.", "can"), ("I (live) ________ in the suburbs.", "live"),
            ("The museum (open) ________ at 9 AM.", "opens"), ("How (get) ________ I to the town hall?", "do I get")
        ],
        "sentences": [
            "The city center is always very crowded.", "You can buy stamps at the post office.", "There is a beautiful fountain in the main square.",
            "I prefer living in the suburbs because it's quiet.", "Public transport is very efficient in this city.", "The skyscraper is the tallest building here."
        ]
    },
    12: {
        "title": "Shopping & Department Stores",
        "vocab": [
            ("Department store", "Grandes almacenes"), ("Bargain", "Ganga"), ("Discount", "Descuento"),
            ("Receipt", "Recibo"), ("Refund", "Reembolso"), ("Fitting room", "Probador"), ("Cashier", "Cajero/a"),
            ("Queue", "Cola/Fila"), ("Customer service", "Atención al cliente"), ("Escalator", "Escalera mecánica"),
            ("Shelf", "Estantería"), ("Trolley", "Carrito"), ("Basket", "Cesta"), ("Brand", "Marca"),
            ("Cheap", "Barato"), ("Expensive", "Caro"), ("Sale", "Rebajas")
        ],
        "grammar": [
            ("How much (be) ________ this shirt?", "is"), ("I (look) ________ for the fitting rooms.", "am looking"),
            ("Can I (get) ________ a refund?", "get"), ("They (be) ________ on sale today.", "are"),
            ("She (buy) ________ a new dress yesterday.", "bought"), ("We (not/have) ________ any more in stock.", "don't have")
        ],
        "sentences": [
            "The department store has ten floors.", "I found a real bargain in the sales.", "Can I have a receipt, please?",
            "The queue at the cashier was very long.", "Where is the customer service desk?", "This brand is very expensive but high quality."
        ]
    },
    13: {
        "title": "Food, Cooking & Recipes",
        "vocab": [
            ("Ingredient", "Ingrediente"), ("Recipe", "Receta"), ("Boil", "Hervir"), ("Fry", "Freír"),
            ("Bake", "Hornear"), ("Roast", "Asar"), ("Chop", "Picar"), ("Slice", "Cortar en rodajas"),
            ("Peel", "Pelar"), ("Stir", "Remover"), ("Pan", "Sartén"), ("Oven", "Horno"),
            ("Delicious", "Delicioso"), ("Spicy", "Picante"), ("Salty", "Salado"), ("Sweet", "Dulce")
        ],
        "grammar": [
            ("First, (chop) ________ the onions.", "chop"), ("Don't (add) ________ too much salt.", "add"),
            ("You (need) ________ three eggs for this cake.", "need"), ("I (be) ________ cooking dinner now.", "am"),
            ("He (not/like) ________ spicy food.", "doesn't like"), ("Have you ________ (try) this recipe?", "tried")
        ],
        "sentences": [
            "Chop the vegetables into small pieces.", "Boil the water before adding the pasta.", "This recipe is very easy to follow.",
            "The cake smells delicious in the oven.", "I prefer baked potatoes to fried ones.", "Stir the soup every few minutes."
        ]
    },
    14: {
        "title": "At the Restaurant",
        "vocab": [
            ("Menu", "Carta/Menú"), ("Waiter", "Camarero"), ("Waitress", "Camarera"), ("Order", "Pedir/Pedido"),
            ("Bill", "Cuenta"), ("Tip", "Propina"), ("Starter", "Entrante"), ("Main course", "Plato principal"),
            ("Dessert", "Postre"), ("Beverage", "Bebida"), ("Reservation", "Reserva"), ("Table for two", "Mesa para dos"),
            ("Service charge", "Cargo por servicio"), ("Napkin", "Servilleta"), ("Cutlery", "Cubiertos")
        ],
        "grammar": [
            ("I (like) ________ to order the steak.", "would like"), ("(be) ________ everything okay with your meal?", "Is"),
            ("We (have) ________ a reservation for 8 PM.", "have"), ("Could we (have) ________ the bill, please?", "have"),
            ("She (not/want) ________ any dessert.", "doesn't want"), ("They (be) ________ very friendly waiters.", "are")
        ],
        "sentences": [
            "We would like a table for two, please.", "I'll have the salmon for my main course.", "Could you bring us some more water?",
            "The service was excellent, let's leave a tip.", "Do you have any vegetarian options on the menu?", "Everything was absolutely delicious."
        ]
    },
    15: {
        "title": "Sports & Fitness",
        "vocab": [
            ("Gym", "Gimnasio"), ("Workout", "Entrenamiento"), ("Athlete", "Atleta"), ("Coach", "Entrenador"),
            ("Tournament", "Torneo"), ("Match", "Partido"), ("Score", "Puntuación/Marcar"), ("Winner", "Ganador"),
            ("Loser", "Perdedor"), ("Equipment", "Equipamiento"), ("Swimming pool", "Piscina"), ("Stadium", "Estadio"),
            ("Yoga", "Yoga"), ("Cycling", "Ciclismo"), ("Hiking", "Senderismo"), ("Running", "Correr")
        ],
        "grammar": [
            ("I (go) ________ running every morning.", "go"), ("He (play) ________ football on Saturdays.", "plays"),
            ("She (do) ________ yoga twice a week.", "does"), ("They (not/win) ________ the match yesterday.", "didn't win"),
            ("Are you ________ (good) at tennis than me?", "better"), ("We (be) ________ training for a marathon.", "are")
        ],
        "sentences": [
            "I usually go to the gym after work.", "He is the best player in the team.", "She does yoga to relax and stay fit.",
            "Who won the match last night?", "You need special equipment for climbing.", "We went hiking in the mountains last weekend."
        ]
    },
    16: {
        "title": "Health & Common Illnesses",
        "vocab": [
            ("Headache", "Dolor de cabeza"), ("Stomach ache", "Dolor de estómago"), ("Toothache", "Dolor de muelas"),
            ("Fever", "Fiebre"), ("Cough", "Tos"), ("Sneeze", "Estornudo"), ("Sore throat", "Dolor de garganta"),
            ("Flu", "Gripe"), ("Cold", "Resfriado"), ("Medicine", "Medicina"), ("Pill", "Pastilla"),
            ("Prescription", "Receta médica"), ("Appointment", "Cita"), ("Healthy", "Saludable"), ("Sick", "Enfermo")
        ],
        "grammar": [
            ("I (have got) ________ a terrible headache.", "have got"), ("You (should) ________ see a doctor.", "should"),
            ("She (not/feel) ________ very well today.", "doesn't feel"), ("He (be) ________ sick since Monday.", "has been"),
            ("Do you (need) ________ any medicine?", "need"), ("I (have) ________ an appointment at 4 PM.", "have")
        ],
        "sentences": [
            "I think I'm coming down with a cold.", "You should drink plenty of water.", "He has a high fever and a cough.",
            "I need to make an appointment with the dentist.", "She is feeling much better today.", "Take this medicine twice a day after meals."
        ]
    },
    17: {
        "title": "The Natural World & Animals",
        "vocab": [
            ("Wildlife", "Vida silvestre"), ("Habitat", "Hábitat"), ("Environment", "Medio ambiente"),
            ("Landscape", "Paisaje"), ("Mountain", "Montaña"), ("Valley", "Valle"), ("Forest", "Bosque"),
            ("Jungle", "Selva"), ("Desert", "Desierto"), ("Ocean", "Océano"), ("River", "Río"),
            ("Species", "Especie"), ("Endangered", "En peligro de extinción"), ("Nature reserve", "Reserva natural")
        ],
        "grammar": [
            ("Tigers (be) ________ endangered animals.", "are"), ("Whales (live) ________ in the ocean.", "live"),
            ("We (must) ________ protect the environment.", "must"), ("The Amazon is the (large) ________ rainforest.", "largest"),
            ("I (love) ________ walking in the forest.", "love"), ("Have you ever ________ (see) a bear?", "seen")
        ],
        "sentences": [
            "The landscape in the north is beautiful.", "Many species are losing their natural habitat.", "We should do more to protect the wildlife.",
            "The desert is very hot during the day.", "I saw many interesting animals at the nature reserve.", "Pollution is a major threat to the environment."
        ]
    },
    18: {
        "title": "Weather & Seasons",
        "vocab": [
            ("Forecast", "Pronóstico"), ("Sunny", "Soleado"), ("Cloudy", "Nublado"), ("Rainy", "Lluvioso"),
            ("Windy", "Ventoso"), ("Stormy", "Tormentoso"), ("Snowy", "Nevado"), ("Foggy", "Con niebla"),
            ("Temperature", "Temperatura"), ("Degree", "Grado"), ("Thunder", "Trueno"), ("Lightning", "Relámpago"),
            ("Season", "Estación"), ("Spring", "Primavera"), ("Summer", "Verano"), ("Autumn", "Otoño"), ("Winter", "Invierno")
        ],
        "grammar": [
            ("It (be) ________ going to rain tomorrow.", "is"), ("What (be) ________ the weather like?", "is"),
            ("The temperature (drop) ________ tonight.", "will drop"), ("It (not/snow) ________ here very often.", "doesn't snow"),
            ("I (prefer) ________ summer to winter.", "prefer"), ("It (be) ________ a very windy day.", "is")
        ],
        "sentences": [
            "The weather forecast says it will be sunny.", "I love the colors of the trees in autumn.", "It's twenty degrees Celsius today.",
            "There was a lot of thunder and lightning last night.", "Be careful driving, it's very foggy outside.", "Winter is my favorite season because I like skiing."
        ]
    },
    19: {
        "title": "Clothes, Styles & Materials",
        "vocab": [
            ("Cotton", "Algodón"), ("Wool", "Lana"), ("Leather", "Cuero"), ("Silk", "Seda"),
            ("Striped", "A rayas"), ("Checked", "A cuadros"), ("Patterned", "Estampado"), ("Plain", "Liso"),
            ("Smart", "Elegante"), ("Casual", "Informal"), ("Tight", "Ajustado"), ("Loose", "Holgado"),
            ("Outfit", "Atuendo"), ("Fashion", "Moda"), ("Style", "Estilo")
        ],
        "grammar": [
            ("She (wear) ________ a striped shirt.", "is wearing"), ("I (prefer) ________ cotton to polyester.", "prefer"),
            ("This jacket (be) ________ made of leather.", "is"), ("Does it ________ (fit) you well?", "fit"),
            ("They (not/like) ________ tight clothes.", "don't like"), ("What (be) ________ your favorite style?", "is")
        ],
        "sentences": [
            "I'm looking for a plain white t-shirt.", "This wool sweater is very warm and comfortable.", "She always wears very smart clothes to work.",
            "I prefer a casual style for the weekend.", "The dress is made of beautiful blue silk.", "He's wearing a checked shirt and jeans."
        ]
    },
    20: {
        "title": "Module 2 Review",
        "vocab": [
            ("Review", "Repaso"), ("Summary", "Resumen"), ("Practice", "Práctica"), ("Progress", "Progreso"),
            ("Achievement", "Logro"), ("Improvement", "Mejora"), ("Goal", "Objetivo"), ("Result", "Resultado")
        ],
        "grammar": [
            ("I (have) ________ completed Module 2.", "have"), ("We (be) ________ ready for the test.", "are"),
            ("She (study) ________ every day.", "studies"), ("They (not/forget) ________ anything.", "haven't forgotten"),
            ("How (be) ________ your progress?", "is"), ("Let's (review) ________ the vocabulary.", "review")
        ],
        "sentences": [
            "I have learned a lot of new words in this module.", "My English is improving every week.", "I am very happy with my test results.",
            "Don't forget to practice every day.", "This review will help you prepare for the exam.", "We have reached the end of the second module."
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

    # 7. Add variation to reach 500
    i = 0
    types = ["multiple_choice", "fill_blanks", "short_writing"]
    while len(exercises) < count:
        t = types[i % len(types)]
        word, trans = vocab[i % len(vocab)]
        if t == "multiple_choice":
            others = [w for w, tr in vocab if w != word]
            distractors = random.sample(others, 2)
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
                "stimulus_en": f"I know the word for {trans} is '________'.",
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
