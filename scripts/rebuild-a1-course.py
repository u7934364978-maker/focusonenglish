import json
import os
import random

# Configuration
COURSE_DIR = "src/content/cursos/ingles-a1"
UNITS_COUNT = 30
EXERCISES_PER_UNIT = 50

# Professional A1 Topics
UNIT_TITLES = {
    1: "Greetings & Personal Info (Workplace context)",
    2: "Jobs & Professions",
    3: "Workplace Objects & Office Layout",
    4: "Numbers, Time & Schedules",
    5: "Daily Routine at Work",
    6: "Describing People (Colleagues & Clients)",
    7: "Family & Personal Life (Small talk)",
    8: "My House & Home Office",
    9: "Food & Business Lunches",
    10: "Free Time & Team Building",
    11: "Transport & Commuting",
    12: "Travel & Business Trips",
    13: "Shopping & Procurement",
    14: "Health & Wellness at Work",
    15: "Clothes & Professional Dress Code",
    16: "The Weather & Seasonal Planning",
    17: "Skills & Abilities (Can/Can't)",
    18: "Past Events (Simple Past Intro)",
    19: "Future Plans (Going to Intro)",
    20: "In the City (Directions to Office)",
    21: "Animals & Nature (General vocabulary)",
    22: "Sports & Leisure",
    23: "Technology & Digital Tools",
    24: "Communication (Emails & Calls)",
    25: "Feelings & Workplace Atmosphere",
    26: "Rules & Obligations (Must/Have to)",
    27: "Directions & Maps",
    28: "Comparing Things (Better/Worse products)",
    29: "Celebrations & Company Events",
    30: "Final Review & Success Stories"
}

# Extensive Pedagogical Data (Sample for U1 and U2, will expand)
PEDAGOGICAL_DATA = {
    1: {
        "vocab": [
            ("Manager", "Gerente"), ("Employee", "Empleado"), ("Office", "Oficina"),
            ("Meeting", "Reunión"), ("Welcome", "Bienvenido"), ("Colleague", "Colega"),
            ("Business card", "Tarjeta de presentación"), ("Company", "Empresa"),
            ("Client", "Cliente"), ("Reception", "Recepción")
        ],
        "grammar": [
            ("I (be) ________ a manager.", "am"),
            ("You (be) ________ in the meeting.", "are"),
            ("He (be) ________ a new employee.", "is"),
            ("We (be) ________ at the office.", "are"),
            ("They (be) ________ my colleagues.", "are")
        ],
        "sentences": [
            "I am the marketing manager.",
            "He is from London.",
            "We are in the main office.",
            "This is my business card.",
            "Welcome to our company."
        ],
        "communication": [
            ("Hello, I am John.", "Nice to meet you, John.", ["I am fine.", "See you soon."]),
            ("Where are you from?", "I am from New York.", ["My name is Sarah.", "Yes, I am."])
        ]
    },
    2: {
        "vocab": [
            ("Doctor", "Doctor"), ("Teacher", "Profesor"), ("Engineer", "Ingeniero"),
            ("Assistant", "Asistente"), ("Worker", "Trabajador"), ("Salesperson", "Vendedor"),
            ("Designer", "Diseñador"), ("Developer", "Desarrollador"), ("Chef", "Chef"),
            ("Driver", "Conductor")
        ],
        "grammar": [
            ("She (work) ________ as a doctor.", "works"),
            ("They (be) ________ engineers.", "are"),
            ("I (have) ________ an assistant.", "have"),
            ("We (work) ________ in a team.", "work"),
            ("He (not/be) ________ a chef.", "is not")
        ],
        "sentences": [
            "She is a very talented designer.",
            "They work in a software company.",
            "I am a sales assistant.",
            "He wants to be an engineer.",
            "We have ten developers in our team."
        ],
        "communication": [
            ("What do you do?", "I am a web developer.", ["I am fine.", "I live in Spain."]),
            ("Where does she work?", "She works in a hospital.", ["She is a doctor.", "Yes, she does."])
        ]
    }
}

# Fill other units with generic data if not defined (to be expanded later with rich content)
for i in range(3, 31):
    if i not in PEDAGOGICAL_DATA:
        PEDAGOGICAL_DATA[i] = {
            "vocab": [("Work", "Trabajo"), ("Success", "Éxito"), ("Team", "Equipo"), ("Project", "Proyecto")],
            "grammar": [("I (like) ________ my job.", "like"), ("They (play) ________ football.", "play")],
            "sentences": [f"This is Unit {i} of the professional English course.", "English is important for work."],
            "communication": [("Hi", "Hello", ["Bye", "No"])]
        }

def generate_word_search(unit_id, vocab_pool):
    selected = random.sample(vocab_pool, min(len(vocab_pool), 5))
    words = [w.upper().replace(" ", "") for w, t in selected]
    clues = [t for w, t in selected]
    return {
        "type": "word-search",
        "prompt_es": f"Busca estas palabras en inglés relacionadas con {UNIT_TITLES[unit_id]}:",
        "words": words,
        "clues": clues,
        "gridSize": 10,
        "mastery_tag": "vocabulary"
    }

def generate_crossword(unit_id, vocab_pool):
    selected = random.sample(vocab_pool, min(len(vocab_pool), 4))
    items = []
    # Simple fixed layout for now to avoid complex grid logic
    # In a real scenario, we would use a library or more complex algorithm
    directions = ["across", "down"]
    for idx, (word, trans) in enumerate(selected):
        items.append({
            "answer": word.upper().replace(" ", ""),
            "clue": f"Traducción de: {trans}",
            "row": idx * 2,
            "col": 0,
            "direction": "across"
        })
    return {
        "type": "crossword",
        "prompt_es": f"Completa el crucigrama sobre {UNIT_TITLES[unit_id]}:",
        "items": items,
        "mastery_tag": "vocabulary"
    }

def generate_exercises(unit_id, count):
    exercises = []
    data = PEDAGOGICAL_DATA[unit_id]
    
    vocab_pool = data["vocab"]
    grammar_pool = data["grammar"]
    sentence_pool = data["sentences"]
    comm_pool = data["communication"]

    for i in range(1, count + 1):
        interaction_id = f"U{unit_id}_I{i}"
        
        # Distribute types
        if i <= 10: # Multiple Choice
            word, translation = random.choice(vocab_pool)
            other_words = [w for w, t in vocab_pool if w != word]
            distractors = random.sample(other_words, min(len(other_words), 2))
            options = [{"id": "o1", "text": word}]
            for idx, d_word in enumerate(distractors):
                options.append({"id": f"o{idx+2}", "text": d_word})
            random.shuffle(options)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "multiple_choice",
                "prompt_es": f"¿Cómo se dice '{translation}' en inglés?",
                "options": options,
                "correct_answer": [opt["id"] for opt in options if opt["text"] == word][0],
                "mastery_tag": "vocabulary"
            })
        elif i <= 20: # Matching
            selected = random.sample(vocab_pool, min(len(vocab_pool), 3))
            pairs = [{"id": f"p{idx}", "left": word, "right": trans} for idx, (word, trans) in enumerate(selected)]
            exercises.append({
                "interaction_id": interaction_id,
                "type": "matching",
                "prompt_es": "Une la palabra en inglés con su traducción:",
                "pairs": pairs,
                "correct_answer": {p["id"]: p["id"] for p in pairs},
                "mastery_tag": "vocabulary"
            })
        elif i <= 30: # Transformation
            stimulus, correct = random.choice(grammar_pool)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "transformation",
                "prompt_es": "Completa con la forma correcta:",
                "stimulus_en": stimulus,
                "correct_answer": correct,
                "mastery_tag": "grammar"
            })
        elif i <= 35: # True/False
            sentence = random.choice(sentence_pool)
            is_correct = random.choice([True, False])
            display = sentence
            if not is_correct:
                words = sentence.split()
                if len(words) > 3:
                    words[1], words[2] = words[2], words[1]
                    display = " ".join(words)
                else:
                    display = sentence + " no"
            exercises.append({
                "interaction_id": interaction_id,
                "type": "true_false",
                "prompt_es": f"¿Es correcta esta frase?: \"{display}\"",
                "correct_answer": is_correct,
                "mastery_tag": "grammar"
            })
        elif i <= 40: # Reorder
            sentence = random.choice(sentence_pool).replace(".", "")
            words = sentence.split()
            options = [{"id": f"w{idx}", "text": word} for idx, word in enumerate(words)]
            correct_order = [opt["id"] for opt in options]
            shuffled = list(options)
            random.shuffle(shuffled)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "reorder_words",
                "prompt_es": "Ordena las palabras:",
                "options": shuffled,
                "correct_answer": correct_order,
                "mastery_tag": "syntax"
            })
        elif i <= 45: # Word Search
            ex = generate_word_search(unit_id, vocab_pool)
            ex["interaction_id"] = interaction_id
            exercises.append(ex)
        else: # Crossword
            ex = generate_crossword(unit_id, vocab_pool)
            ex["interaction_id"] = interaction_id
            exercises.append(ex)

    return exercises

def main():
    os.makedirs(COURSE_DIR, exist_ok=True)
    for unit_id in range(1, UNITS_COUNT + 1):
        unit_data = {
            "course": {
                "language_ui": "es-ES", "target_language": "en", "level": "A1",
                "unit_id": f"U{unit_id}", "unit_title": UNIT_TITLES[unit_id],
                "total_duration_minutes": 60
            },
            "blocks": [{
                "block_id": f"B{unit_id}", 
                "title": UNIT_TITLES[unit_id], 
                "content": generate_exercises(unit_id, EXERCISES_PER_UNIT)
            }]
        }
        file_path = os.path.join(COURSE_DIR, f"unit{unit_id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(unit_data, f, indent=2, ensure_ascii=False)
        print(f"Generated unit {unit_id}: {UNIT_TITLES[unit_id]}")

if __name__ == "__main__":
    main()
