import json
import os
import random

# Cambridge A1/A2 Vocabulary and Grammar Bank
VOCABULARY = {
    "greetings": [
        ("Hello", "Hola"), ("Hi", "Hola (informal)"), ("Good morning", "Buenos días"),
        ("Good afternoon", "Buenas tardes"), ("Good evening", "Buenas noches (saludo)"),
        ("Goodbye", "Adiós"), ("Bye", "Adiós (informal)"), ("Nice to meet you", "Encantado/a de conocerte"),
        ("Welcome", "Bienvenido/a"), ("Please", "Por favor"), ("Thank you", "Gracias"), ("Thanks", "Gracias (informal)")
    ],
    "personal_info": [
        ("Name", "Nombre"), ("Surname", "Apellido"), ("Age", "Edad"), ("Address", "Dirección"),
        ("Email", "Correo electrónico"), ("Phone number", "Número de teléfono"), ("Student", "Estudiante"),
        ("Teacher", "Profesor/a"), ("Friend", "Amigo/a"), ("Classmate", "Compañero/a de clase")
    ],
    "numbers_1_20": [
        ("One", "Uno"), ("Two", "Dos"), ("Three", "Tres"), ("Four", "Cuatro"), ("Five", "Cinco"),
        ("Six", "Seis"), ("Seven", "Siete"), ("Eight", "Ocho"), ("Nine", "Nueve"), ("Ten", "Diez"),
        ("Eleven", "Once"), ("Twelve", "Doce"), ("Thirteen", "Trece"), ("Fourteen", "Catorce"),
        ("Fifteen", "Quince"), ("Sixteen", "Dieciséis"), ("Seventeen", "Diecisiete"),
        ("Eighteen", "Dieciocho"), ("Nineteen", "Diecinueve"), ("Twenty", "Veinte")
    ],
    "countries": [
        ("Spain", "España"), ("England", "Inglaterra"), ("France", "Francia"), ("Germany", "Alemania"),
        ("Italy", "Italia"), ("Mexico", "México"), ("USA", "EE.UU."), ("China", "China"),
        ("Japan", "Japón"), ("Brazil", "Brasil")
    ],
    "nationalities": [
        ("Spanish", "Español/a"), ("English", "Inglés/esa"), ("French", "Francés/esa"),
        ("German", "Alemán/ana"), ("Italian", "Italiano/a"), ("Mexican", "Mexicano/a"),
        ("American", "Americano/a"), ("Chinese", "Chino/a"), ("Japanese", "Japonés/esa"),
        ("Brazilian", "Brasileño/a")
    ],
    "family": [
        ("Mother", "Madre"), ("Father", "Padre"), ("Brother", "Hermano"), ("Sister", "Hermana"),
        ("Son", "Hijo"), ("Daughter", "Hija"), ("Grandmother", "Abuela"), ("Grandfather", "Abuelo"),
        ("Aunt", "Tía"), ("Uncle", "Tío")
    ],
    "colors": [
        ("Red", "Rojo"), ("Blue", "Azul"), ("Green", "Verde"), ("Yellow", "Amarillo"),
        ("Black", "Negro"), ("White", "Blanco"), ("Brown", "Marrón"), ("Orange", "Naranja"),
        ("Pink", "Rosa"), ("Grey", "Gris")
    ],
    "jobs": [
        ("Doctor", "Médico/a"), ("Nurse", "Enfermero/a"), ("Engineer", "Ingeniero/a"),
        ("Chef", "Cocinero/a"), ("Driver", "Conductor/a"), ("Shop assistant", "Dependiente/a"),
        ("Waiter", "Camarero/a"), ("Pilot", "Piloto"), ("Artist", "Artista"), ("Musician", "Músico")
    ],
    "time": [
        ("O'clock", "En punto"), ("Half past", "Y media"), ("Quarter past", "Y cuarto"),
        ("Quarter to", "Menos cuarto"), ("Second", "Segundo"), ("Minute", "Minuto"), ("Hour", "Hora")
    ],
    "days": [
        ("Monday", "Lunes"), ("Tuesday", "Martes"), ("Wednesday", "Miércoles"),
        ("Thursday", "Jueves"), ("Friday", "Viernes"), ("Saturday", "Sábado"), ("Sunday", "Domingo")
    ],
    "routine": [
        ("Wake up", "Despertarse"), ("Get up", "Levantarse"), ("Have breakfast", "Desayunar"),
        ("Go to work", "Ir a trabajar"), ("Go to school", "Ir al colegio"), ("Have lunch", "Almorzar"),
        ("Go home", "Ir a casa"), ("Have dinner", "Cenar"), ("Go to bed", "Irse a la cama"),
        ("Watch TV", "Ver la tele")
    ],
    "food": [
        ("Bread", "Pan"), ("Milk", "Leche"), ("Coffee", "Café"), ("Tea", "Té"), ("Sugar", "Azúcar"),
        ("Apple", "Manzana"), ("Banana", "Plátano"), ("Rice", "Arroz"), ("Pasta", "Pasta"),
        ("Meat", "Carne"), ("Fish", "Pescado"), ("Vegetables", "Verduras"), ("Fruit", "Fruta")
    ],
    "house_rooms": [
        ("Kitchen", "Cocina"), ("Bedroom", "Dormitorio"), ("Living room", "Salón"),
        ("Bathroom", "Baño"), ("Garden", "Jardín"), ("Dining room", "Comedor")
    ],
    "furniture": [
        ("Table", "Mesa"), ("Chair", "Silla"), ("Bed", "Cama"), ("Sofa", "Sofá"),
        ("Desk", "Escritorio"), ("Wardrobe", "Armario"), ("Lamp", "Lámpara"), ("Mirror", "Espejo")
    ],
    "neighborhood": [
        ("Park", "Parque"), ("Supermarket", "Supermercado"), ("Cinema", "Cine"),
        ("School", "Colegio"), ("Hospital", "Hospital"), ("Bank", "Banco"),
        ("Pharmacy", "Farmacia"), ("Restaurant", "Restaurante"), ("Library", "Biblioteca")
    ],
    "directions": [
        ("Turn left", "Gira a la izquierda"), ("Turn right", "Gira a la derecha"),
        ("Go straight", "Sigue recto"), ("Stop", "Para"), ("Near", "Cerca"), ("Far", "Lejos"),
        ("Opposite", "En frente de"), ("Next to", "Al lado de")
    ],
    "body": [
        ("Head", "Cabeza"), ("Shoulders", "Hombros"), ("Knees", "Rodillas"), ("Toes", "Dedos del pie"),
        ("Eyes", "Ojos"), ("Ears", "Orejas"), ("Mouth", "Boca"), ("Nose", "Nariz"),
        ("Arm", "Brazo"), ("Leg", "Pierna")
    ],
    "clothes": [
        ("Shirt", "Camisa"), ("T-shirt", "Camiseta"), ("Jeans", "Vaqueros"), ("Trousers", "Pantalones"),
        ("Skirt", "Falda"), ("Dress", "Vestido"), ("Shoes", "Zapatos"), ("Socks", "Calcetines"),
        ("Jacket", "Chaqueta"), ("Hat", "Sombrero")
    ],
    "abilities": [
        ("Swim", "Nadar"), ("Run", "Correr"), ("Sing", "Cantar"), ("Dance", "Bailar"),
        ("Cook", "Cocinar"), ("Drive", "Conducir"), ("Speak English", "Hablar inglés"),
        ("Play guitar", "Tocar la guitarra"), ("Draw", "Dibujar")
    ],
    "sports": [
        ("Football", "Fútbol"), ("Tennis", "Tenis"), ("Basketball", "Baloncesto"),
        ("Swimming", "Natación"), ("Cycling", "Ciclismo"), ("Golf", "Golf"),
        ("Running", "Correr"), ("Hiking", "Senderismo")
    ],
    "weather": [
        ("Sunny", "Soleado"), ("Cloudy", "Nublado"), ("Raining", "Lloviendo"),
        ("Snowing", "Nevando"), ("Hot", "Calor"), ("Cold", "Frío"), ("Windy", "Ventoso")
    ],
    "transport": [
        ("Bus", "Autobús"), ("Train", "Tren"), ("Car", "Coche"), ("Plane", "Avión"),
        ("Bicycle", "Bicicleta"), ("Motorbike", "Moto"), ("Taxi", "Taxi"), ("Boat", "Barco")
    ],
    "adjectives": [
        ("Big", "Grande"), ("Small", "Pequeño"), ("Happy", "Feliz"), ("Sad", "Triste"),
        ("New", "Nuevo"), ("Old", "Viejo"), ("Beautiful", "Hermoso"), ("Ugly", "Feo"),
        ("Cheap", "Barato"), ("Expensive", "Caro")
    ]
}

SYLLABUS_UNITS = [
    # Module 1
    {"unit": 1, "title": "Hello! Introductions", "vocab": ["greetings", "personal_info"], "grammar": "Verb to be (am/is/are)"},
    {"unit": 2, "title": "Nice to meet you!", "vocab": ["greetings", "personal_info"], "grammar": "Subject Pronouns (I, you, he...)"},
    {"unit": 3, "title": "Numbers 1-20", "vocab": ["numbers_1_20"], "grammar": "Plural nouns (-s)"},
    {"unit": 4, "title": "Alphabet & Spelling", "vocab": ["personal_info"], "grammar": "Spelling"},
    {"unit": 5, "title": "Countries & Nationalities", "vocab": ["countries", "nationalities"], "grammar": "Prepositions: From"},
    {"unit": 6, "title": "Family Members", "vocab": ["family"], "grammar": "Possessive adjectives (my, your...)"},
    {"unit": 7, "title": "Colors & Describing Things", "vocab": ["colors", "adjectives"], "grammar": "Adjectives before nouns"},
    {"unit": 8, "title": "Numbers 20-100", "vocab": ["numbers_1_20"], "grammar": "How old...?"},
    {"unit": 9, "title": "Jobs & Occupations", "vocab": ["jobs"], "grammar": "Articles a/an"},
    {"unit": 10, "title": "Module 1 Review & Assessment", "vocab": ["greetings", "family", "jobs"], "grammar": "Review"},
    
    # Module 2
    {"unit": 11, "title": "Telling the Time", "vocab": ["time"], "grammar": "Prepositions of time (at)"},
    {"unit": 12, "title": "Days of the Week", "vocab": ["days"], "grammar": "Prepositions of time (on)"},
    {"unit": 13, "title": "Daily Routine", "vocab": ["routine"], "grammar": "Present Simple intro"},
    {"unit": 14, "title": "Present Simple: I, You, We, They", "vocab": ["routine"], "grammar": "Present Simple (positive)"},
    {"unit": 15, "title": "Present Simple: He, She, It", "vocab": ["routine"], "grammar": "Present Simple (s-ending)"},
    {"unit": 16, "title": "At the Cafe", "vocab": ["food"], "grammar": "I would like..."},
    {"unit": 17, "title": "Breakfast, Lunch & Dinner", "vocab": ["food"], "grammar": "Adverbs of frequency intro"},
    {"unit": 18, "title": "Likes & Dislikes", "vocab": ["food"], "grammar": "Like + -ing / noun"},
    {"unit": 19, "title": "Months & Dates", "vocab": ["days"], "grammar": "Ordinal numbers"},
    {"unit": 20, "title": "Module 2 Review & Assessment", "vocab": ["routine", "food"], "grammar": "Review"},

    # Module 3
    {"unit": 21, "title": "Rooms in a House", "vocab": ["house_rooms"], "grammar": "Is there a...?"},
    {"unit": 22, "title": "Furniture & Household Items", "vocab": ["furniture"], "grammar": "Are there any...?"},
    {"unit": 23, "title": "There is / There are", "vocab": ["furniture"], "grammar": "There is/are + some/any"},
    {"unit": 24, "title": "Prepositions of Place", "vocab": ["directions"], "grammar": "In, on, under, next to"},
    {"unit": 25, "title": "My Neighborhood", "vocab": ["neighborhood"], "grammar": "Singular/Plural nouns"},
    {"unit": 26, "title": "Giving Directions", "vocab": ["directions"], "grammar": "Imperatives"},
    {"unit": 27, "title": "Pets & Animals", "vocab": ["personal_info"], "grammar": "Have got intro"},
    {"unit": 28, "title": "Body Parts", "vocab": ["body"], "grammar": "This/That/These/Those"},
    {"unit": 29, "title": "Clothes", "vocab": ["clothes"], "grammar": "Present Continuous intro"},
    {"unit": 30, "title": "Module 3 Review & Assessment", "vocab": ["house_rooms", "neighborhood"], "grammar": "Review"},

    # Module 4
    {"unit": 31, "title": "Can for Ability", "vocab": ["abilities"], "grammar": "Can / Can't"},
    {"unit": 32, "title": "Sports & Hobbies", "vocab": ["sports"], "grammar": "Go / Play / Do + sports"},
    {"unit": 33, "title": "Adverbs of Frequency", "vocab": ["routine"], "grammar": "Always, sometimes, never"},
    {"unit": 34, "title": "Using 'And', 'But', 'Because'", "vocab": ["personal_info"], "grammar": "Conjunctions"},
    {"unit": 35, "title": "Free Time Activities", "vocab": ["sports", "abilities"], "grammar": "Present Simple vs Continuous"},
    {"unit": 36, "title": "Musical Instruments", "vocab": ["abilities"], "grammar": "Play the + instrument"},
    {"unit": 37, "title": "Talent & Skills", "vocab": ["abilities"], "grammar": "Very well / Not at all"},
    {"unit": 38, "title": "Asking for Permission", "vocab": ["abilities"], "grammar": "Can I...?"},
    {"unit": 39, "title": "Outdoor Activities", "vocab": ["sports"], "grammar": "Like/Love/Hate"},
    {"unit": 40, "title": "Module 4 Review & Assessment", "vocab": ["sports", "abilities"], "grammar": "Review"},

    # Module 5
    {"unit": 41, "title": "At the Airport", "vocab": ["transport"], "grammar": "Going to (future) intro"},
    {"unit": 42, "title": "Transport", "vocab": ["transport"], "grammar": "By + transport"},
    {"unit": 43, "title": "Travel Verbs", "vocab": ["transport"], "grammar": "Past Simple (was/were) intro"},
    {"unit": 44, "title": "The Weather", "vocab": ["weather"], "grammar": "It is + weather"},
    {"unit": 45, "title": "Seasons", "vocab": ["weather"], "grammar": "In the + season"},
    {"unit": 46, "title": "At the Hotel", "vocab": ["furniture"], "grammar": "Asking questions"},
    {"unit": 47, "title": "Holidays & Vacation", "vocab": ["weather", "transport"], "grammar": "Present Continuous for future"},
    {"unit": 48, "title": "Sightseeing", "vocab": ["neighborhood"], "grammar": "Object pronouns"},
    {"unit": 49, "title": "Packing a Suitcase", "vocab": ["clothes"], "grammar": "Need to + verb"},
    {"unit": 50, "title": "Module 5 Review & Assessment", "vocab": ["weather", "transport"], "grammar": "Review"},

    # Module 6
    {"unit": 51, "title": "At the Supermarket", "vocab": ["food"], "grammar": "How much / How many"},
    {"unit": 52, "title": "Countable & Uncountable", "vocab": ["food"], "grammar": "A/an vs Some"},
    {"unit": 53, "title": "Some & Any", "vocab": ["food"], "grammar": "Negatives and questions"},
    {"unit": 54, "title": "Much & Many", "vocab": ["food"], "grammar": "Large quantities"},
    {"unit": 55, "title": "Clothing Store", "vocab": ["clothes"], "grammar": "Demonstratives"},
    {"unit": 56, "title": "At the Restaurant", "vocab": ["food"], "grammar": "Polite requests"},
    {"unit": 57, "title": "Cooking & Recipes", "vocab": ["food"], "grammar": "Sequencers (First, then...)"},
    {"unit": 58, "title": "Health & Illness", "vocab": ["body"], "grammar": "Should / Shouldn't intro"},
    {"unit": 59, "title": "Money & Currency", "vocab": ["personal_info"], "grammar": "Numbers review"},
    {"unit": 60, "title": "Module 6 Review & Assessment", "vocab": ["food", "clothes"], "grammar": "Review"}
]

def generate_interaction(unit_id, interaction_idx, vocab_list, grammar_topic, unit_title):
    types = ["matching", "transformation", "true_false", "reorder_words", "short_writing", "multiple_choice"]
    etype = random.choice(types)
    
    # Pick a random word/phrase from the available vocab categories
    category = random.choice(vocab_list)
    pool = VOCABULARY[category]
    word_en, word_es = random.choice(pool)
    
    interaction_id = f"{unit_id}_I{interaction_idx}"
    
    if etype == "matching":
        # Get 4 unique pairs
        sample = random.sample(pool, min(4, len(pool)))
        pairs = []
        correct_answer = {}
        for i, (en, es) in enumerate(sample):
            pid = f"p{i}"
            pairs.append({"id": pid, "left": en, "right": es})
            correct_answer[pid] = pid
        return {
            "interaction_id": interaction_id,
            "type": "matching",
            "prompt_es": "Une la palabra con su traducción correcta:",
            "pairs": pairs,
            "correct_answer": correct_answer,
            "mastery_tag": "vocabulary"
        }

    elif etype == "transformation":
        # Simple verb to be or placeholder
        if "Verb to be" in grammar_topic:
            stims = [
                ("I ____ from Spain.", "am"),
                ("He ____ my friend.", "is"),
                ("They ____ students.", "are"),
                ("She ____ a doctor.", "is")
            ]
            stim, ans = random.choice(stims)
        else:
            stim = f"Translate to English: {word_es} (____)"
            ans = word_en
            
        return {
            "interaction_id": interaction_id,
            "type": "transformation",
            "prompt_es": "Completa con la forma correcta:",
            "stimulus_en": stim,
            "correct_answer": ans,
            "mastery_tag": "grammar"
        }

    elif etype == "true_false":
        is_correct = random.choice([True, False])
        if is_correct:
            stim = f"'{word_en}' means '{word_es}'."
        else:
            wrong_word = random.choice(pool)[1]
            while wrong_word == word_es:
                wrong_word = random.choice(pool)[1]
            stim = f"'{word_en}' means '{wrong_word}'."
            
        return {
            "interaction_id": interaction_id,
            "type": "true_false",
            "prompt_es": "¿Es correcta esta afirmación?",
            "stimulus_en": stim,
            "correct_answer": is_correct,
            "mastery_tag": "vocabulary"
        }

    elif etype == "reorder_words":
        sentences = [
            ("I am a student", ["I", "am", "a", "student"]),
            ("She is my mother", ["She", "is", "my", "mother"]),
            ("This is a big house", ["This", "is", "a", "big", "house"]),
            ("Where are you from?", ["Where", "are", "you", "from?"]),
            ("I like coffee", ["I", "like", "coffee"])
        ]
        sent, words = random.choice(sentences)
        options = []
        for i, w in enumerate(words):
            options.append({"id": f"w{i}", "text": w})
        
        # Shuffle options for the UI
        shuffled_options = list(options)
        random.shuffle(shuffled_options)
        
        return {
            "interaction_id": interaction_id,
            "type": "reorder_words",
            "prompt_es": "Ordena las palabras para formar una frase:",
            "options": options, # In real app, the frontend handles display, but we provide order
            "correct_answer": [f"w{i}" for i in range(len(words))],
            "mastery_tag": "syntax"
        }

    elif etype == "short_writing":
        return {
            "interaction_id": interaction_id,
            "type": "short_writing",
            "prompt_es": "Traduce al inglés:",
            "stimulus_es": word_es,
            "correct_answer": word_en,
            "mastery_tag": "vocabulary"
        }

    elif etype == "multiple_choice":
        options = [{"id": "o1", "text": word_en}]
        wrong_samples = random.sample([w[0] for w in pool if w[0] != word_en], min(2, len(pool)-1))
        for i, w in enumerate(wrong_samples):
            options.append({"id": f"o{i+2}", "text": w})
        
        random.shuffle(options)
        correct_id = next(o["id"] for o in options if o["text"] == word_en)
        
        return {
            "interaction_id": interaction_id,
            "type": "multiple_choice",
            "prompt_es": f"¿Cómo se dice '{word_es}' en inglés?",
            "options": options,
            "correct_answer": correct_id,
            "mastery_tag": "vocabulary"
        }

def generate_unit(unit_data):
    unit_id = f"U{unit_data['unit']}"
    num_interactions = 20 if unit_data['unit'] % 10 != 0 else 30 # Longer assessment units
    
    interactions = []
    for i in range(1, num_interactions + 1):
        interactions.append(generate_interaction(unit_id, i, unit_data['vocab'], unit_data['grammar'], unit_data['title']))
        
    unit_json = {
        "course": {
            "language_ui": "es-ES",
            "target_language": "en",
            "level": "A1",
            "unit_id": unit_id,
            "unit_title": unit_data['title'],
            "total_duration_minutes": 120
        },
        "blocks": [
            {
                "block_id": "B1",
                "title": unit_data['title'],
                "content": interactions
            }
        ]
    }
    return unit_json

def main():
    output_dir = "src/content/cursos/ingles-a1"
    os.makedirs(output_dir, exist_ok=True)
    
    for unit_data in SYLLABUS_UNITS:
        filename = f"unit{unit_data['unit']}.json"
        filepath = os.path.join(output_dir, filename)
        
        unit_content = generate_unit(unit_data)
        
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(unit_content, f, ensure_ascii=False, indent=2)
        
        print(f"Generated {filename}")

if __name__ == "__main__":
    main()
