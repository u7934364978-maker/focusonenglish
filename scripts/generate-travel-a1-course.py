import json
import os
import random
import re

# Configuración Viajes A1
BASE_DIR = "src/content/cursos/viajes/a1"
UNITS_COUNT = 60
EXERCISES_PER_UNIT = 100

# Diccionario de traducción de verbos y auxiliares para las pistas en español
HINTS = {
    "am": "ser/estar (yo)", "is": "ser/estar (él/ella/esto)", "are": "ser/estar (tú/nosotros/ellos)",
    "have": "tener", "has": "tiene", "do": "hacer", "does": "hace",
    "go": "ir", "goes": "va", "want": "querer", "wants": "quiere",
    "like": "gustar", "likes": "gusta", "play": "jugar", "plays": "juega",
    "my": "mi", "your": "tu", "his": "su (de él)", "her": "su (de ella)", 
    "its": "su (de ello)", "our": "nuestro", "their": "su (de ellos)",
    "this": "este/esta", "that": "ese/esa", "these": "estos/estas", "those": "esos/esas",
    "who": "quién", "what": "qué", "where": "dónde", "when": "cuándo", "why": "por qué", "how": "cómo",
    "can": "poder", "spell": "deletrear", "price": "precio", "cost": "costar", "buy": "comprar", "order": "pedir/ordenar"
}

# Temas de las unidades (Syllabus)
SYLLABUS = {
    # Trimester 1: Survival Basics & Airport
    1: {"title": "Greetings & Introductions", "vocab": [("Hello", "Hola"), ("Name", "Nombre"), ("Nice to meet you", "Mucho gusto")], "grammar": [("I (ser/estar - yo) ________ Maria.", "am")]},
    2: {"title": "The Alphabet & Spelling Names", "vocab": [("Alphabet", "Alfabeto"), ("Spell", "Deletrear"), ("Letter", "Letra")], "grammar": [("How do you (deletrear) ________ your name?", "spell")]},
    3: {"title": "Numbers 1-20 & Age", "vocab": [("One", "Uno"), ("Ten", "Diez"), ("Years old", "Años de edad")], "grammar": [("I am (diez) ________ years old.", "ten")]},
    4: {"title": "Numbers 20-100 & Prices", "vocab": [("Fifty", "Cincuenta"), ("Euro", "Euro"), ("Dollar", "Dólar")], "grammar": [("It (costar) ________ twenty dollars.", "costs")]},
    5: {"title": "At the Check-in Counter", "vocab": [("Passport", "Pasaporte"), ("Ticket", "Billete/Boleto"), ("Suitcase", "Maleta")], "grammar": [("I (tener) ________ my passport.", "have")]},
    6: {"title": "Security Control Phrases", "vocab": [("Liquid", "Líquido"), ("Belt", "Cinturón"), ("Shoes", "Zapatos")], "grammar": [("Please remove your (zapatos) ________.", "shoes")]},
    7: {"title": "Immigration & Passport Control", "vocab": [("Purpose", "Propósito"), ("Visit", "Visita"), ("Stay", "Estancia")], "grammar": [("What (ser/estar - ello) ________ the purpose of your visit?", "is")]},
    8: {"title": "Gate Information & Announcements", "vocab": [("Gate", "Puerta de embarque"), ("Boarding", "Embarque"), ("Delayed", "Retrasado")], "grammar": [("The flight (ser/estar - ello) ________ delayed.", "is")]},
    9: {"title": "Baggage Claim & Lost Luggage", "vocab": [("Baggage", "Equipaje"), ("Lost", "Perdido"), ("Claim", "Reclamación")], "grammar": [("I (no - poder) ________ find my bag.", "can't")]},
    10: {"title": "Basic Survival: Asking for Help", "vocab": [("Help", "Ayuda"), ("Please", "Por favor"), ("Excuse me", "Disculpe")], "grammar": [("(Poder) ________ you help me?", "Can")]},
    11: {"title": "Time & Flight Schedules", "vocab": [("Time", "Hora"), ("Arrival", "Llegada"), ("Departure", "Salida")], "grammar": [("What time (ser/estar - ello) ________ the flight?", "is")]},
    12: {"title": "Connecting Flights & Transfers", "vocab": [("Connection", "Conexión"), ("Transfer", "Transbordo"), ("Terminal", "Terminal")], "grammar": [("Where (ser/estar - ello) ________ terminal 2?", "is")]},
    13: {"title": "Duty Free & Simple Shopping", "vocab": [("Perfume", "Perfume"), ("Gift", "Regalo"), ("Price", "Precio")], "grammar": [("How (mucho) ________ is this?", "much")]},
    14: {"title": "Airport Services (WiFi, ATM, Toilet)", "vocab": [("Toilet", "Baño"), ("Money", "Dinero"), ("Password", "Contraseña")], "grammar": [("(Hay) ________ there a toilet here?", "Is")]},
    15: {"title": "Review & Trimester 1 Assessment", "vocab": [("Airport", "Aeropuerto"), ("Travel", "Viajar"), ("Flight", "Vuelo")], "grammar": [("I (ser/estar - yo) ________ a traveler.", "am")]},

    # Trimester 2: Transport & Accommodation
    16: {"title": "Taking a Taxi/Uber", "vocab": [("Address", "Dirección"), ("Driver", "Conductor"), ("Here", "Aquí")], "grammar": [("Take me to this (dirección) ________, please.", "address")]},
    17: {"title": "Bus & Train Stations", "vocab": [("Bus", "Autobús"), ("Platform", "Andén"), ("Stop", "Parada")], "grammar": [("Where is the bus (parada) ________?", "stop")]},
    18: {"title": "Buying Tickets", "vocab": [("Return", "Ida y vuelta"), ("Single", "Ida"), ("Ticket", "Billete")], "grammar": [("One (ida) ________ ticket to London, please.", "single")]},
    19: {"title": "Asking 'Where is...?'", "vocab": [("Hospital", "Hospital"), ("Museum", "Museo"), ("Park", "Parque")], "grammar": [("Where (ser/estar - ello) ________ the museum?", "is")]},
    20: {"title": "Directions: Left, Right, Straight", "vocab": [("Left", "Izquierda"), ("Right", "Derecha"), ("Straight", "Recto")], "grammar": [("Turn (derecha) ________ at the bank.", "right")]},
    21: {"title": "Hotel Check-in Process", "vocab": [("Reservation", "Reserva"), ("Key", "Llave"), ("Form", "Formulario")], "grammar": [("I (tener) ________ a reservation.", "have")]},
    22: {"title": "Asking about Hotel Facilities", "vocab": [("Pool", "Piscina"), ("Gym", "Gimnasio"), ("Breakfast", "Desayuno")], "grammar": [("(Hay) ________ there a pool?", "Is")]},
    23: {"title": "Room Features & Amenities", "vocab": [("Towel", "Toalla"), ("Soap", "Jabón"), ("Bed", "Cama")], "grammar": [("I need a (toalla) ________.", "towel")]},
    24: {"title": "Using the Hotel WiFi & Services", "vocab": [("Password", "Contraseña"), ("Laundry", "Lavandería"), ("Safe", "Caja fuerte")], "grammar": [("What is the WiFi (contraseña) ________?", "password")]},
    25: {"title": "Ordering Room Service", "vocab": [("Order", "Pedir"), ("Menu", "Menú"), ("Hungry", "Hambriento")], "grammar": [("I want to (pedir) ________ dinner.", "order")]},
    26: {"title": "Reporting Room Problems", "vocab": [("Broken", "Roto"), ("Cold", "Frío"), ("Noisy", "Ruidoso")], "grammar": [("The air conditioning is (roto) ________.", "broken")]},
    27: {"title": "Hotel Check-out & Bill", "vocab": [("Check-out", "Salida"), ("Bill", "Cuenta"), ("Receipt", "Recibo")], "grammar": [("Can I have the (cuenta) ________?", "bill")]},
    28: {"title": "Exploring the Neighborhood", "vocab": [("Near", "Cerca"), ("Far", "Lejos"), ("Shop", "Tienda")], "grammar": [("(Hay) ________ there a shop near here?", "Is")]},
    29: {"title": "Tourist Information Centers", "vocab": [("Map", "Mapa"), ("Guide", "Guía"), ("Brochure", "Folleto")], "grammar": [("Do you have a (mapa) ________?", "map")]},
    30: {"title": "Review & Trimester 2 Assessment", "vocab": [("Hotel", "Hotel"), ("Transport", "Transporte"), ("City", "Ciudad")], "grammar": [("I (estar) ________ at the hotel.", "am")]},

    # Trimester 3: Food, Dining & Social
    31: {"title": "At the Cafe: Ordering Coffee", "vocab": [("Sugar", "Azúcar"), ("Milk", "Leche"), ("Cup", "Taza")], "grammar": [("A coffee with (leche) ________, please.", "milk")]},
    32: {"title": "Breakfast Foods", "vocab": [("Eggs", "Huevos"), ("Bread", "Pan"), ("Fruit", "Fruta")], "grammar": [("I like (huevos) ________ for breakfast.", "eggs")]},
    33: {"title": "Making a Restaurant Reservation", "vocab": [("Table", "Mesa"), ("People", "Personas"), ("Tonight", "Esta noche")], "grammar": [("A (mesa) ________ for two, please.", "table")]},
    34: {"title": "Reading a Menu", "vocab": [("Main course", "Plato principal"), ("Starter", "Entrante"), ("Dessert", "Postre")], "grammar": [("What (ser/estar - ello) ________ the starter?", "is")]},
    35: {"title": "Ordering Lunch/Dinner", "vocab": [("Chicken", "Pollo"), ("Steak", "Filete"), ("Fish", "Pescado")], "grammar": [("I (querer) ________ the chicken.", "want")]},
    36: {"title": "Dietary Requirements & Allergies", "vocab": [("Allergy", "Alergia"), ("Vegetarian", "Vegetariano"), ("Gluten", "Gluten")], "grammar": [("I (tener) ________ an allergy.", "have")]},
    37: {"title": "Paying the Bill & Tipping", "vocab": [("Bill", "Cuenta"), ("Tip", "Propina"), ("Cash", "Efectivo")], "grammar": [("Keep the (propina) ________.", "tip")]},
    38: {"title": "At the Supermarket", "vocab": [("Water", "Agua"), ("Bag", "Bolsa"), ("Price", "Precio")], "grammar": [("How much is this (agua) ________?", "water")]},
    39: {"title": "Buying Snacks & Street Food", "vocab": [("Quick", "Rápido"), ("Hot", "Caliente"), ("Delicious", "Delicioso")], "grammar": [("It (ser/estar - ello) ________ delicious.", "is")]},
    40: {"title": "Simple Conversations: Hobbies", "vocab": [("Music", "Música"), ("Sport", "Deporte"), ("Reading", "Lectura")], "grammar": [("I (gustar) ________ music.", "like")]},
    41: {"title": "Talking about your Home Country", "vocab": [("Country", "País"), ("Spain", "España"), ("City", "Ciudad")], "grammar": [("I (ser/estar - yo) ________ from Spain.", "am")]},
    42: {"title": "Inviting Someone for a Drink", "vocab": [("Drink", "Bebida"), ("Tonight", "Esta noche"), ("Come", "Venir")], "grammar": [("Do you want to (venir) ________?", "come")]},
    43: {"title": "Describing your Day", "vocab": [("Morning", "Mañana"), ("Afternoon", "Tarde"), ("Night", "Noche")], "grammar": [("I walk in the (tarde) ________.", "afternoon")]},
    44: {"title": "Meeting People at the Hostel", "vocab": [("Traveler", "Viajero"), ("Friend", "Amigo"), ("Nice", "Simpático")], "grammar": [("You (ser/estar - tú) ________ very nice.", "are")]},
    45: {"title": "Review & Trimester 3 Assessment", "vocab": [("Food", "Comida"), ("Friend", "Amigo"), ("Social", "Social")], "grammar": [("I (querer) ________ more water.", "want")]},

    # Trimester 4: Shopping, Health & Emergencies
    46: {"title": "Shopping for Souvenirs", "vocab": [("Gift", "Regalo"), ("Magnet", "Imán"), ("T-shirt", "Camiseta")], "grammar": [("I want a (regalo) ________ for my mom.", "gift")]},
    47: {"title": "Clothes Shopping & Sizes", "vocab": [("Small", "Pequeño"), ("Large", "Grande"), ("Fitting room", "Probador")], "grammar": [("Is this (grande) ________?", "large")]},
    48: {"title": "Asking for Discounts & Deals", "vocab": [("Cheap", "Barato"), ("Expensive", "Caro"), ("Discount", "Descuento")], "grammar": [("(Hay) ________ there a discount?", "Is")]},
    49: {"title": "Describing the Weather", "vocab": [("Sunny", "Soleado"), ("Rain", "Lluvia"), ("Cold", "Frío")], "grammar": [("It is (soleado) ________ today.", "sunny")]},
    50: {"title": "Booking a City Tour", "vocab": [("Tour", "Tour"), ("Guide", "Guía"), ("Tomorrow", "Mañana")], "grammar": [("I want to (reservar) ________ a tour.", "book")]},
    51: {"title": "At a Museum/Gallery", "vocab": [("Art", "Arte"), ("Ticket", "Entrada"), ("History", "Historia")], "grammar": [("The (entrada) ________ is 10 euros.", "ticket")]},
    52: {"title": "Renting a Car/Bike", "vocab": [("Rent", "Alquilar"), ("Car", "Coche"), ("License", "Licencia")], "grammar": [("I want to (alquilar) ________ a car.", "rent")]},
    53: {"title": "Parts of the Body", "vocab": [("Head", "Cabeza"), ("Arm", "Brazo"), ("Leg", "Pierna")], "grammar": [("My (pierna) ________ hurts.", "leg")]},
    54: {"title": "At the Pharmacy", "vocab": [("Medicine", "Medicina"), ("Aspirin", "Aspirina"), ("Cough", "Tos")], "grammar": [("I need (medicina) ________ for a cold.", "medicine")]},
    55: {"title": "Seeing a Doctor", "vocab": [("Doctor", "Doctor"), ("Sick", "Enfermo"), ("Feel", "Sentirse")], "grammar": [("I (sentirse) ________ sick.", "feel")]},
    56: {"title": "Reporting a Crime/Theft", "vocab": [("Police", "Policía"), ("Stolen", "Robado"), ("Thief", "Ladrón")], "grammar": [("My bag was (robado) ________.", "stolen")]},
    57: {"title": "Asking for Help in Emergency", "vocab": [("Help", "Ayuda"), ("Emergency", "Emergencia"), ("Quick", "Rápido")], "grammar": [("It (ser/estar - ello) ________ an emergency!", "is")]},
    58: {"title": "Losing your Passport/Phone", "vocab": [("Lost", "Perdido"), ("Phone", "Teléfono"), ("Passport", "Pasaporte")], "grammar": [("I (haber) ________ lost my phone.", "have")]},
    59: {"title": "Future Travel Dreams", "vocab": [("Dream", "Sueño"), ("Visit", "Visitar"), ("Future", "Futuro")], "grammar": [("I want to (visitar) ________ Japan.", "visit")]},
    60: {"title": "Final Review & Graduation", "vocab": [("English", "Inglés"), ("Travel", "Viaje"), ("Course", "Curso")], "grammar": [("I (hablar) ________ English now!", "speak")]},
}

def generate_exercises(unit_id, count):
    data = SYLLABUS[unit_id]
    vocab_pool = data["vocab"]
    grammar_pool = data["grammar"]
    
    # Generic pools to fill up to 100 exercises
    generic_vocab = [("Bag", "Bolsa"), ("Pen", "Bolígrafo"), ("Book", "Libro"), ("Key", "Llave"), ("Phone", "Teléfono")]
    generic_grammar = [("This (ser/estar - ello) ________ my bag.", "is"), ("I (tener) ________ a key.", "have")]
    generic_sentences = [f"Welcome to unit {unit_id}.", "Travel is amazing.", "English is useful.", "I love visiting new places.", "Where is my passport?"]
    
    # Extend pools if needed
    v_pool = vocab_pool * (count // len(vocab_pool) + 1)
    g_pool = grammar_pool * (count // len(grammar_pool) + 1)
    s_pool = generic_sentences * (count // len(generic_sentences) + 1)
    
    random.shuffle(v_pool)
    random.shuffle(g_pool)
    random.shuffle(s_pool)
    
    exercises = []
    for i in range(1, count + 1):
        interaction_id = f"U{unit_id}_I{i}"
        type_choice = i % 6
        
        if type_choice == 0: # Multiple Choice Vocab
            word, trans = v_pool[i-1]
            prompt = f"¿Cómo se dice '{trans}' en inglés?"
            options = [{"id": "o1", "text": word}, {"id": "o2", "text": "Wrong1"}, {"id": "o3", "text": "Wrong2"}]
            random.shuffle(options)
            exercises.append({
                "interaction_id": interaction_id, "type": "multiple_choice",
                "prompt_es": prompt, "options": options,
                "correct_answer": [o["id"] for o in options if o["text"] == word][0],
                "mastery_tag": "vocabulary"
            })
            
        elif type_choice == 1: # Matching
            offset = i % 5
            selected = v_pool[offset:offset+4]
            pairs = [{"id": f"p{idx}", "left": w, "right": t} for idx, (w, t) in enumerate(selected)]
            exercises.append({
                "interaction_id": interaction_id, "type": "matching",
                "prompt_es": "Une la palabra con su traducción:",
                "pairs": pairs, "correct_answer": {p["id"]: p["id"] for p in pairs},
                "mastery_tag": "vocabulary"
            })
            
        elif type_choice == 2: # Transformation (Grammar)
            stimulus, correct = g_pool[i-1]
            match = re.search(r'\((.*?)\)', stimulus)
            if match:
                hint_content = match.group(1).lower()
                if hint_content in HINTS:
                    stimulus = stimulus.replace(f"({match.group(1)})", f"({HINTS[hint_content]})")
            exercises.append({
                "interaction_id": interaction_id, "type": "transformation",
                "prompt_es": "Completa con la forma correcta:",
                "stimulus_en": stimulus, "correct_answer": correct,
                "mastery_tag": "grammar"
            })
            
        elif type_choice == 3: # True/False
            sentence = s_pool[i-1]
            is_correct = i % 2 == 0
            display_text = sentence if is_correct else sentence + " no"
            exercises.append({
                "interaction_id": interaction_id, "type": "true_false",
                "prompt_es": f"¿Es correcta esta frase?: \"{display_text}\"",
                "correct_answer": is_correct, "mastery_tag": "syntax"
            })
            
        elif type_choice == 4: # Reorder Words
            sentence = s_pool[i-1].replace(".", "").replace("!", "")
            words = sentence.split()
            options = [{"id": f"w{idx}", "text": word} for idx, word in enumerate(words)]
            correct_order = [o["id"] for o in options]
            shuffled = list(options)
            random.shuffle(shuffled)
            exercises.append({
                "interaction_id": interaction_id, "type": "reorder_words",
                "prompt_es": "Ordena las palabras:",
                "options": shuffled, "correct_answer": correct_order,
                "mastery_tag": "syntax"
            })
            
        else: # Short Writing
            word, trans = v_pool[i-1]
            exercises.append({
                "interaction_id": interaction_id, "type": "short_writing",
                "prompt_es": "Traduce al inglés:", "stimulus_es": trans,
                "correct_answer": word, "mastery_tag": "vocabulary"
            })
            
    return exercises

def main():
    for unit_id in range(1, UNITS_COUNT + 1):
        trimester = (unit_id - 1) // 15 + 1
        trimester_dir = os.path.join(BASE_DIR, f"trimester{trimester}")
        week_dir = os.path.join(trimester_dir, f"week{unit_id:02d}")
        os.makedirs(week_dir, exist_ok=True)
        
        data = SYLLABUS[unit_id]
        unit_json = {
            "course": {
                "language_ui": "es-ES", "target_language": "en", "level": "A1",
                "unit_id": f"viajes-a1-u{unit_id}", "unit_title": data["title"],
                "total_duration_minutes": 120
            },
            "blocks": [{"block_id": f"B{unit_id}", "title": data["title"], "content": generate_exercises(unit_id, EXERCISES_PER_UNIT)}]
        }
        
        filename = os.path.join(week_dir, "lesson1.json")
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(unit_json, f, indent=2, ensure_ascii=False)
        
        if unit_id % 5 == 0:
            print(f"Progress: {unit_id}/{UNITS_COUNT} units generated...")

    print("Success: 60 units generated in src/content/cursos/viajes/a1/")

if __name__ == "__main__":
    main()
