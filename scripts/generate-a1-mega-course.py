import json
import os
import random

# Configuración A1 Mega Course
COURSE_DIR = "src/content/cursos/ingles-a1"
UNITS_COUNT = 60
EXERCISES_PER_UNIT = 300

# Base de datos pedagógica expandida (60 unidades)
# Cada unidad tiene: vocab, grammar, communication, sentences
# Nota: En grammar, el primer elemento es el estímulo con la pista en español, el segundo es la respuesta correcta.
UNIT_DATA = {
    1: {
        "title": "Hello! Introductions",
        "vocab": [("Hello", "Hola"), ("Hi", "Hola (informal)"), ("Good morning", "Buenos días"), ("Good afternoon", "Buenas tardes"), ("Good evening", "Buenas noches (saludo)"), ("Good night", "Buenas noches (despedida)"), ("Goodbye", "Adiós"), ("Bye", "Chao"), ("Name", "Nombre"), ("Teacher", "Profesor/a"), ("Student", "Estudiante")],
        "grammar": [("I (ser) ________ a student.", "am"), ("You (ser) ________ my teacher.", "are"), ("My name (ser) ________ John.", "is"), ("What (ser) ________ your name?", "is"), ("I (ser) ________ from Spain.", "am")],
        "communication": [("Hello, I am Maria.", "Nice to meet you, Maria!", ["I am ten.", "Goodbye!"]), ("How are you?", "I am fine, thank you.", ["My name is Paul.", "I am from Italy."])],
        "sentences": ["My name is Carlos.", "I am a student.", "She is my teacher.", "Nice to meet you.", "Good morning, class."]
    },
    2: {
        "title": "Nice to meet you!",
        "vocab": [("Nice to meet you", "Mucho gusto"), ("Welcome", "Bienvenido"), ("Friend", "Amigo/a"), ("Classmate", "Compañero/a de clase"), ("Man", "Hombre"), ("Woman", "Mujer"), ("Boy", "Niño"), ("Girl", "Niña"), ("He", "Él"), ("She", "Ella")],
        "grammar": [("He (ser) ________ my friend.", "is"), ("She (ser) ________ a doctor.", "is"), ("We (ser) ________ happy.", "are"), ("They (ser) ________ students.", "are"), ("(Ser - pregunta) ________ you a student?", "Are")],
        "communication": [("This is my friend, Tom.", "Hi Tom, nice to meet you!", ["Where are you?", "I am fine."]), ("Are you a student?", "Yes, I am.", ["No, he isn't.", "My name is Tom."])],
        "sentences": ["He is my best friend.", "She is a very good girl.", "They are from London.", "Welcome to our school.", "Is she your classmate?"]
    },
    3: {
        "title": "Numbers 1-20",
        "vocab": [("One", "Uno"), ("Two", "Dos"), ("Three", "Tres"), ("Four", "Cuatro"), ("Five", "Cinco"), ("Six", "Seis"), ("Seven", "Siete"), ("Eight", "Ocho"), ("Nine", "Nueve"), ("Ten", "Diez"), ("Eleven", "Once"), ("Twelve", "Doce"), ("Thirteen", "Trece"), ("Fourteen", "Catorce"), ("Fifteen", "Quince"), ("Sixteen", "Dieciséis"), ("Seventeen", "Diecisiete"), ("Eighteen", "Dieciocho"), ("Nineteen", "Diecinueve"), ("Twenty", "Veinte")],
        "grammar": [("I have (uno) ________ apple.", "one"), ("She has (dos) ________ brothers.", "two"), ("There are (cinco) ________ students.", "five"), ("I am (diez) ________ years old.", "ten"), ("He is (siete) ________.", "seven")],
        "communication": [("How old are you?", "I am twenty years old.", ["I am fine.", "My name is John."]), ("How many books are there?", "There are ten books.", ["It is 5 o'clock.", "I have a pen."])],
        "sentences": ["I have three pencils.", "There are twenty students in the class.", "She is five years old.", "Seven is my favorite number.", "I have one sister."]
    },
    4: {
        "title": "Alphabet & Spelling",
        "vocab": [("Alphabet", "Alfabeto"), ("Letter", "Letra"), ("Spell", "Deletrear"), ("Word", "Palabra"), ("Vowel", "Vocal"), ("Consonant", "Consonante"), ("Apple", "Manzana"), ("Ball", "Pelota"), ("Cat", "Gato"), ("Dog", "Perro")],
        "grammar": [("How do you (deletrear) ________ your name?", "spell"), ("'A' is a (vocal) ________.", "vowel"), ("There are 26 (letras) ________ in English.", "letters"), ("'B' is a (consonante) ________.", "consonant")],
        "communication": [("How do you spell 'Cat'?", "C-A-T.", ["It is a cat.", "I like cats."]), ("Can you spell your surname?", "Yes, S-M-I-T-H.", ["My name is Smith.", "I am a teacher."])],
        "sentences": ["Can you spell that, please?", "English has five vowels.", "How many letters are in this word?", "Apple starts with A.", "Spell your name for me."]
    },
    5: {
        "title": "Countries & Nationalities",
        "vocab": [("Spain", "España"), ("Spanish", "Español/a"), ("Mexico", "México"), ("Mexican", "Mexicano/a"), ("The UK", "El Reino Unido"), ("British", "Británico/a"), ("The USA", "Los EE.UU."), ("American", "Americano/a"), ("France", "Francia"), ("French", "Francés/esa"), ("Italy", "Italia"), ("Italian", "Italiano/a")],
        "grammar": [("I am (de - origen) ________ Spain.", "from"), ("She is (española) ________.", "Spanish"), ("They (ser) ________ from Mexico.", "are"), ("Are you (americano) ________?", "American"), ("He (ser) ________ from Italy.", "is")],
        "communication": [("Where are you from?", "I am from France.", ["I am French.", "I am fine."]), ("Are you British?", "No, I am American.", ["Yes, he is.", "I am from London."])],
        "sentences": ["I am from Madrid, Spain.", "She is very proud to be Italian.", "Are they from the UK?", "He speaks French and English.", "Mexico is a beautiful country."]
    },
    6: {
        "title": "Family Members",
        "vocab": [("Mother", "Madre"), ("Father", "Padre"), ("Brother", "Hermano"), ("Sister", "Hermana"), ("Son", "Hijo"), ("Daughter", "Hija"), ("Grandmother", "Abuela"), ("Grandfather", "Abuelo"), ("Baby", "Bebé"), ("Family", "Familia")],
        "grammar": [("This is (mi) ________ mother.", "my"), ("(Su - de ella) ________ name is Ana.", "Her"), ("(Su - de él) ________ brother is tall.", "His"), ("(Nuestra) ________ family is big.", "Our"), ("They are (su - de ellos) ________ children.", "their")],
        "communication": [("Who is this?", "This is my brother.", ["He is ten.", "I am fine."]), ("Do you have a sister?", "Yes, I have two sisters.", ["No, he isn't.", "She is my friend."])],
        "sentences": ["My family is very small.", "His father is a doctor.", "Her sister is a student.", "Our grandmother is eighty years old.", "Do you have any brothers or sisters?"]
    },
    7: {
        "title": "Colors & Describing Things",
        "vocab": [("Red", "Rojo"), ("Blue", "Azul"), ("Green", "Verde"), ("Yellow", "Amarillo"), ("Black", "Negro"), ("White", "Blanco"), ("Big", "Grande"), ("Small", "Pequeño"), ("New", "Nuevo"), ("Old", "Viejo")],
        "grammar": [("The car is (rojo) ________.", "red"), ("I have a (grande) ________ house.", "big"), ("It is an (viejo) ________ book.", "old"), ("The sky (ser) ________ blue.", "is"), ("These (ser) ________ small pens.", "are")],
        "communication": [("What color is your car?", "It is blue.", ["It is big.", "I like it."]), ("Is your house big or small?", "It is very big.", ["Yes, it is.", "It is red."])],
        "sentences": ["The grass is green.", "I have a new computer.", "That is a very small dog.", "My favorite color is yellow.", "The white house is beautiful."]
    },
    8: {
        "title": "Numbers 20-100",
        "vocab": [("Twenty", "Veinte"), ("Thirty", "Treinta"), ("Forty", "Cuarenta"), ("Fifty", "Cincuenta"), ("Sixty", "Sesenta"), ("Seventy", "Setenta"), ("Eighty", "Ochenta"), ("Ninety", "Noventa"), ("One hundred", "Cien"), ("Price", "Precio")],
        "grammar": [("It costs (cincuenta) ________ dollars.", "fifty"), ("He is (treinta) ________ years old.", "thirty"), ("There are (cien) ________ pages.", "one hundred"), ("The number is (cuarenta y cinco) ________.", "forty-five")],
        "communication": [("How much is it?", "It is forty euros.", ["It is big.", "I am ten."]), ("How old is your grandfather?", "He is eighty-five.", ["He is fine.", "His name is John."])],
        "sentences": ["I have fifty dollars in my wallet.", "There are thirty students here.", "He is forty-two years old.", "The book has one hundred pages.", "Seventy is a big number."]
    },
    9: {
        "title": "Jobs & Occupations",
        "vocab": [("Doctor", "Doctor/a"), ("Nurse", "Enfermero/a"), ("Engineer", "Ingeniero/a"), ("Chef", "Cocinero/a"), ("Driver", "Conductor/a"), ("Pilot", "Piloto"), ("Police officer", "Oficial de policía"), ("Farmer", "Granjero/a"), ("Office worker", "Oficinista")],
        "grammar": [("I (ser) ________ a doctor.", "am"), ("She (trabajar) ________ in a hospital.", "works"), ("He (ser) ________ a pilot.", "is"), ("They (ser) ________ students.", "are"), ("(Ser - pregunta) ________ you a nurse?", "Are")],
        "communication": [("What do you do?", "I am a teacher.", ["I am fine.", "I am from Spain."]), ("Where does he work?", "He works in a restaurant.", ["He is a chef.", "He likes food."])],
        "sentences": ["My father is an engineer.", "She works in a big office.", "He is a very good driver.", "Police officers help people.", "The chef is in the kitchen."]
    },
    10: {
        "title": "Module 1 Review",
        "vocab": [("Review", "Repaso"), ("Question", "Pregunta"), ("Answer", "Respuesta"), ("Test", "Prueba"), ("Correct", "Correcto"), ("Wrong", "Incorrecto")],
        "grammar": [("I (ser) ________ from Italy.", "am"), ("This is (mi) ________ family.", "my"), ("How (viejo/edad) ________ are you?", "old"), ("(Dónde) ________ are you from?", "Where")],
        "communication": [("Hi, how are you?", "I am great, thanks!", ["I am ten.", "I am a student."]), ("Nice to meet you!", "Nice to meet you too!", ["Goodbye.", "Thank you."])],
        "sentences": ["This is a review of module one.", "Answer the questions carefully.", "Check your answers.", "Is this correct?", "I am ready for the test."]
    },
    11: {
        "title": "Telling the Time",
        "vocab": [("Time", "Hora"), ("Clock", "Reloj"), ("Watch", "Reloj de pulsera"), ("Hour", "Hora"), ("Minute", "Minuto"), ("Second", "Segundo"), ("Quarter", "Cuarto"), ("Half", "Media")],
        "grammar": [("It (ser) ________ five o'clock.", "is"), ("What time (ser) ________ it?", "is"), ("It is half (pasado) ________ six.", "past"), ("It is a quarter (para) ________ eight.", "to")],
        "communication": [("What time is it?", "It is ten o'clock.", ["I am fine.", "It is a watch."]), ("Excuse me, do you have the time?", "Yes, it's half past two.", ["Thank you.", "I am late."])],
        "sentences": ["I wake up at seven o'clock.", "The movie starts at eight.", "It's half past nine.", "A quarter to ten is 9:45.", "Look at the clock."]
    }
}

# Generador de datos genéricos para completar las 60 unidades basándonos en el syllabus.md
SYLLABUS_TITLES = {
    1: "Hello! Introductions", 2: "Nice to meet you!", 3: "Numbers 1-20", 4: "Alphabet & Spelling",
    5: "Countries & Nationalities", 6: "Family Members", 7: "Colors & Describing Things",
    8: "Numbers 20-100", 9: "Jobs & Occupations", 10: "Module 1 Review",
    11: "Telling the Time", 12: "Days of the Week", 13: "Daily Routine", 14: "Present Simple: I, You, We, They",
    15: "Present Simple: He, She, It", 16: "At the Cafe", 17: "Breakfast, Lunch & Dinner",
    18: "Likes & Dislikes", 19: "Months & Dates", 20: "Module 2 Review",
    21: "Rooms in a House", 22: "Furniture & Household Items", 23: "There is / There are",
    24: "Prepositions of Place", 25: "My Neighborhood", 26: "Giving Directions",
    27: "Pets & Animals", 28: "Body Parts", 29: "Clothes", 30: "Module 3 Review",
    31: "Can for Ability", 32: "Sports & Hobbies", 33: "Adverbs of Frequency",
    34: "Using 'And', 'But', 'Because'", 35: "Free Time Activities", 36: "Musical Instruments",
    37: "Talent & Skills", 38: "Asking for Permission", 39: "Outdoor Activities", 40: "Module 4 Review",
    41: "At the Airport", 42: "Transport", 43: "Travel Verbs", 44: "The Weather",
    45: "Seasons", 46: "At the Hotel", 47: "Holidays & Vacation", 48: "Sightseeing",
    49: "Packing a Suitcase", 50: "Module 5 Review",
    51: "At the Supermarket", 52: "Countable & Uncountable", 53: "Some & Any",
    54: "Much & Many", 55: "Clothing Store", 56: "At the Restaurant",
    57: "Cooking & Recipes", 58: "Health & Illness", 59: "Money & Currency", 60: "Module 6 Review"
}

def get_unit_data(unit_id):
    if unit_id in UNIT_DATA:
        return UNIT_DATA[unit_id]
    
    # Generación de datos sintéticos con base pedagógica para unidades no definidas manualmente aún
    title = SYLLABUS_TITLES.get(unit_id, f"Unit {unit_id}")
    
    # Diccionario de traducción de verbos comunes para las pistas en español
    common_verbs = {
        "learn": "aprender", "work": "trabajar", "study": "estudiar", "play": "jugar",
        "eat": "comer", "drink": "beber", "go": "ir", "come": "venir", "have": "tener",
        "like": "gustar", "want": "querer", "see": "ver", "read": "leer", "write": "escribir"
    }
    
    return {
        "title": title,
        "vocab": [("Word", "Palabra"), ("Example", "Ejemplo"), ("Lesson", "Lección"), ("Exercise", "Ejercicio")],
        "grammar": [
            (f"This is unit (número) ________.", str(unit_id)), 
            ("I (aprender) ________ English.", "learn"),
            ("She (estudiar) ________ every day.", "studies"),
            ("We (tener) ________ a new lesson.", "have")
        ],
        "communication": [("Do you like this unit?", "Yes, it's very interesting!", ["No, I don't.", "It's 5 o'clock."])],
        "sentences": [f"Welcome to unit {unit_id}.", "This lesson is about " + title]
    }

def generate_exercises(unit_id, count):
    data = get_unit_data(unit_id)
    vocab_pool = data["vocab"]
    grammar_pool = data["grammar"]
    comm_pool = data["communication"]
    sentence_pool = data["sentences"]
    
    exercises = []
    for i in range(1, count + 1):
        interaction_id = f"U{unit_id}_I{i}"
        type_choice = i % 6
        
        if type_choice == 0: # Multiple Choice Vocab
            word, trans = random.choice(vocab_pool)
            other_options = [w for w, t in vocab_pool if w != word]
            if len(other_options) < 2: other_options = ["Other1", "Other2"]
            distractors = random.sample(other_options, 2)
            options = [{"id": "o1", "text": word}, {"id": "o2", "text": distractors[0]}, {"id": "o3", "text": distractors[1]}]
            random.shuffle(options)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "multiple_choice",
                "prompt_es": f"¿Cómo se dice '{trans}' en inglés?",
                "options": options,
                "correct_answer": [o["id"] for o in options if o["text"] == word][0],
                "mastery_tag": "vocabulary"
            })
            
        elif type_choice == 1: # Matching
            sample_size = min(len(vocab_pool), 3)
            selected = random.sample(vocab_pool, sample_size)
            pairs = [{"id": f"p{idx}", "left": w, "right": t} for idx, (w, t) in enumerate(selected)]
            exercises.append({
                "interaction_id": interaction_id,
                "type": "matching",
                "prompt_es": "Une la palabra con su traducción correcta:",
                "pairs": pairs,
                "correct_answer": {p["id"]: p["id"] for p in pairs},
                "mastery_tag": "vocabulary"
            })
            
        elif type_choice == 2: # Transformation (Grammar)
            stimulus, correct = random.choice(grammar_pool)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "transformation",
                "prompt_es": "Completa con la forma correcta:",
                "stimulus_en": stimulus,
                "correct_answer": correct,
                "mastery_tag": "grammar"
            })
            
        elif type_choice == 3: # True/False
            sentence = random.choice(sentence_pool)
            is_correct = random.choice([True, False])
            display_text = sentence
            if not is_correct:
                words = sentence.split()
                if len(words) > 2:
                    words[0], words[1] = words[1], words[0]
                    display_text = " ".join(words)
                else:
                    display_text = sentence + " no"
            
            exercises.append({
                "interaction_id": interaction_id,
                "type": "true_false",
                "prompt_es": f"¿Es correcta esta frase?: \"{display_text}\"",
                "correct_answer": is_correct,
                "mastery_tag": "grammar"
            })
            
        elif type_choice == 4: # Reorder Words
            sentence = random.choice(sentence_pool).replace(".", "").replace("!", "")
            words = sentence.split()
            options = [{"id": f"w{idx}", "text": word} for idx, word in enumerate(words)]
            correct_order = [o["id"] for o in options]
            shuffled = list(options)
            random.shuffle(shuffled)
            exercises.append({
                "interaction_id": interaction_id,
                "type": "reorder_words",
                "prompt_es": "Ordena las palabras para formar una frase correcta:",
                "options": shuffled,
                "correct_answer": correct_order,
                "mastery_tag": "syntax"
            })
            
        else: # Short Writing (Translation)
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

def main():
    os.makedirs(COURSE_DIR, exist_ok=True)
    for unit_id in range(1, UNITS_COUNT + 1):
        data = get_unit_data(unit_id)
        unit_json = {
            "course": {
                "language_ui": "es-ES",
                "target_language": "en",
                "level": "A1",
                "unit_id": f"U{unit_id}",
                "unit_title": data["title"],
                "total_duration_minutes": 120 # Aumentado por el volumen de ejercicios
            },
            "blocks": [
                {
                    "block_id": f"B{unit_id}",
                    "title": data["title"],
                    "content": generate_exercises(unit_id, EXERCISES_PER_UNIT)
                }
            ]
        }
        filename = os.path.join(COURSE_DIR, f"unit{unit_id}.json")
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(unit_json, f, indent=2, ensure_ascii=False)
        print(f"Generada Unidad {unit_id}: {data['title']} con {EXERCISES_PER_UNIT} ejercicios.")

if __name__ == "__main__":
    main()
