import json
import os
import random

# Configuración A2
COURSE_DIR = "src/content/cursos/ingles-a2"
UNITS_COUNT = 30
EXERCISES_PER_UNIT = 200

# Banco de Datos Pedagógicos A2 (Cambridge KET level)
PEDAGOGICAL_DATA = {
    1: { # People and Appearance
        "grammar": [
            ("She (be) ________ very tall.", "is"),
            ("He (have got) ________ blue eyes.", "has got"),
            ("They (not/be) ________ very old.", "are not"),
            ("What ________ she look like?", "does"),
            ("I (wear) ________ a blue shirt today.", "am wearing"),
            ("She (usually/wear) ________ glasses.", "usually wears"),
            ("He (be) ________ shorter than his brother.", "is"),
            ("She is the ________ (tall) girl in the class.", "tallest"),
            ("My hair is ________ (long) than yours.", "longer"),
            ("He (not/have) ________ a beard.", "doesn't have"),
            ("Does she ________ (have) blonde hair?", "have"),
            ("They (be) ________ both very friendly.", "are"),
            ("I (think) ________ he is handsome.", "think"),
            ("She (look) ________ like her mother.", "looks"),
            ("We (be) ________ all different.", "are")
        ],
        "vocab": [
            ("Tall", "Alto/a"),
            ("Short", "Bajo/a"),
            ("Slim", "Delgado/a"),
            ("Overweight", "Con sobrepeso"),
            ("Attractive", "Atractivo/a"),
            ("Handsome", "Guapo (hombre)"),
            ("Beautiful", "Guapa/Bella"),
            ("Blonde", "Rubio/a"),
            ("Curly", "Rizado"),
            ("Straight", "Liso (pelo)"),
            ("Beard", "Barba"),
            ("Moustache", "Bigote"),
            ("Glasses", "Gafas"),
            ("Young", "Joven"),
            ("Elderly", "Anciano/a")
        ],
        "sentences": [
            "She is a tall girl with long blonde hair.",
            "He has got a short black beard.",
            "My sister is slimmer than me.",
            "He usually wears glasses for reading.",
            "She is the most beautiful woman I know.",
            "What does your new teacher look like?",
            "He is wearing a smart suit for the interview.",
            "They both have curly brown hair.",
            "My grandfather is elderly but very active.",
            "She has got big blue eyes.",
            "He is shorter than his father now.",
            "I don't have a moustache, but I have a beard.",
            "Is she younger than her brother?",
            "They are very attractive people.",
            "He looks like a famous actor."
        ],
        "communication": [
            ("What does your sister look like?", "She's tall and has curly hair.", ["She's very kind.", "She likes pizza."]),
            ("Is he taller than you?", "Yes, he is much taller.", ["No, he's from Spain.", "Yes, he does."]),
            ("Do you wear glasses?", "Only for reading or watching TV.", ["No, I don't have a beard.", "Yes, I am tall."]),
            ("Who do you look like?", "I look like my father.", ["I'm fine, thanks.", "I'm a student."]),
            ("Is she wearing a dress today?", "No, she's wearing jeans and a T-shirt.", ["Yes, she is beautiful.", "No, she isn't old."])
        ]
    },
    4: { # Town and City
        "grammar": [
            ("There (be) ________ a big park in the center.", "is"),
            ("There (be) ________ many shops here.", "are"),
            ("Is ________ a cinema near here?", "there"),
            ("Are ________ any banks on this street?", "there"),
            ("The library is ________ (opposite) the bank.", "opposite"),
            ("Go ________ (straight) on for 200 meters.", "straight"),
            ("Turn ________ (left) at the traffic lights.", "left"),
            ("The museum is ________ (next) to the station.", "next"),
            ("How ________ (far) is the airport?", "far"),
            ("You (must) ________ stop at the red light.", "must"),
            ("You (not/can) ________ park here.", "can't"),
            ("Is it ________ (near) the bus stop?", "near"),
            ("Take the ________ (first) turning on the right.", "first"),
            ("The city is ________ (noisy) than the village.", "noisier"),
            ("It is the ________ (big) building in town.", "biggest")
        ],
        "vocab": [
            ("Town hall", "Ayuntamiento"),
            ("Square", "Plaza"),
            ("Library", "Biblioteca"),
            ("Museum", "Museo"),
            ("Station", "Estación"),
            ("Airport", "Aeropuerto"),
            ("Bank", "Banco"),
            ("Hospital", "Hospital"),
            ("Cinema", "Cine"),
            ("Park", "Parque"),
            ("Bridge", "Puente"),
            ("Street", "Calle"),
            ("Corner", "Esquina"),
            ("Traffic lights", "Semáforo"),
            ("Crossing", "Paso de cebra")
        ],
        "sentences": [
            "There is a beautiful square in the old town.",
            "The library is next to the post office.",
            "Turn right at the second corner.",
            "The hospital is very far from here.",
            "Is there a bank near the supermarket?",
            "Go straight on and cross the bridge.",
            "The town hall is the oldest building.",
            "I often go to the park at weekends.",
            "There are three cinemas in this city.",
            "The bus station is opposite the train station.",
            "Be careful at the traffic lights!",
            "Is the museum open on Sundays?",
            "My house is on the corner of the street.",
            "It takes ten minutes to walk to the station.",
            "The airport is outside the city."
        ],
        "communication": [
            ("Excuse me, is there a bank near here?", "Yes, there's one on the next street.", ["No, I don't like banks.", "It's five o'clock."]),
            ("How do I get to the museum?", "Go straight on and turn left.", ["I'm going to the cinema.", "It's very old."]),
            ("Is the station far from here?", "No, it's only a five-minute walk.", ["Yes, I have a ticket.", "No, it's a big station."]),
            ("Where is the library, please?", "It's opposite the town hall.", ["I'm reading a book.", "It's open now."]),
            ("Does this bus go to the airport?", "Yes, it goes there every twenty minutes.", ["No, I don't have a car.", "Yes, it is a big plane."])
        ]
    }
}

def generate_exercises(unit_id, count):
    exercises = []
    data = PEDAGOGICAL_DATA.get(unit_id)
    
    if not data:
        data = {
            "grammar": [("There (be) ________ a cat.", "is"), ("He (walk) ________ to school.", "walks")],
            "vocab": [("City", "Ciudad"), ("Shop", "Tienda")],
            "sentences": [f"Welcome to unit {unit_id} of the A2 course.", "We are learning more English."],
            "communication": [("Excuse me", "Yes?", ["No", "Bye"])]
        }
    
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
                "type": "transformation",
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
                # Common A2 errors
                if " is " in sentence: display = sentence.replace(" is ", " are ")
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
            sentence = random.choice(sentence_pool).replace(".", "")
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

        else: # Translation (Short Writing) - FIX
            word, trans = random.choice(vocab_pool)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "short_writing",
                "prompt_es": "Traduce al inglés:",
                "stimulus_es": trans, # FIX
                "correct_answer": word,
                "mastery_tag": "vocabulary"
            })

    return exercises

UNIT_TITLES = {
    1: "People and appearance", 2: "Work and jobs", 3: "Education and study", 4: "Town and city",
    5: "Holidays and travel", 6: "The world around us", 7: "Leisure and hobbies", 8: "Daily life",
    9: "Entertainment and media", 10: "Shopping and services", 11: "Food and drink", 12: "Health and sport",
    13: "Technology and communication", 14: "The natural world", 15: "House and home", 16: "Socializing",
    17: "Directions and maps", 18: "Weather and environment", 19: "Past events", 20: "Future plans",
    21: "Comparisons", 22: "Rules and advice", 23: "Experiences", 24: "Opinions and feelings",
    25: "Culture and traditions", 26: "Transport and movement", 27: "Money and prices", 28: "Fashion and style",
    29: "Science and innovation", 30: "Success and achievement"
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
