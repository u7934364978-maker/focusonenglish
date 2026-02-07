import json
import os
import random

# Configuration
COURSE_DIR = "src/content/cursos/ingles-a2"
UNITS_COUNT = 60
EXERCISES_PER_UNIT = 100

# User Provided Data (A2 material)
USER_MATERIAL = {
    1: { # Adjectives (Rules & Position)
        "grammar": [
            ("Éste es un café bueno.", "This is a good coffee."),
            ("El sandwich de queso y tomate es caro.", "The cheese and tomato sandwich is expensive."),
            ("La chica joven es guapa también.", "The young lady is beautiful too."),
            ("El hotel nuevo es bonito.", "The new hotel is nice."),
            ("Es un restaurante barato.", "It's a cheap restaurant."),
            ("Una botella grande.", "A big bottle."),
            ("Un cuaderno pequeño.", "A small notebook."),
            ("Una mujer alta.", "A tall woman."),
            ("Un hombre viejo.", "An old man."),
            ("Una habitación llena.", "A full room.")
        ],
        "rules": [
            "No tienen plural, siempre van en singular.",
            "Siempre van antes del sustantivo: ADJECTIVE + NOUN"
        ]
    },
    2: { # -ed vs -ing Adjectives
        "grammar": [
            ("It was a terrible play and I was ________ (bored / boring).", "bored"),
            ("I’m very ________ (excited / exciting) because I’m going to New York tomorrow.", "excited"),
            ("Are you ________ (surprised / surprising) or were you expecting this news?", "surprised"),
            ("I’m reading a very ________ (interested / interesting) book at the moment.", "interesting"),
            ("I’ve had a very ________ (tired / tiring) day at work today.", "tiring"),
            ("Most people were ________ (surprised / surprising) that he won.", "surprised"),
            ("I’m ________ (bored / boring). Let’s go out.", "bored"),
            ("Visit our ________ (excited / exciting) new shop!", "exciting"),
            ("His speech was very long and very ________ (bored / boring).", "boring"),
            ("He told me a very ________ (amusing/amused) story.", "amusing"),
            ("This is a terribly ________ (boring/bored) book.", "boring"),
            ("She’s ________ (interested/interesting) in politics.", "interested"),
            ("The map was ________ (confusing/confused) and I got lost.", "confusing"),
            ("She was ________ (bored/boring) because she had nothing to do.", "bored"),
            ("Everyone else thought it was funny, but she wasn’t ________ (amused/amusing).", "amused"),
            ("Could you repeat that? I’m a bit ________ (confused/confusing).", "confused"),
            ("It is ________ (surprising/surprised) that she failed.", "surprising"),
            ("Everyone was ________ (surprised/surprising) by the sudden noise.", "surprised")
        ],
        "explanation": "-ed para personas (sentimientos temporales) y -ing para cosas o cualidades permanentes."
    },
    3: { # Adjectives vs Adverbs
        "grammar": [
            ("Could I have a ________ (quick) word with you?", "quick"),
            ("This is a ________ (slow) train.", "slow"),
            ("He talked very ________ (interesting) about his work.", "interestingly"),
            ("You’ve cooked that meat ________ (wonderful).", "wonderfully"),
            ("I’ve got an ________ (easy) job for you.", "easy"),
            ("She writes in ________ (perfect) English.", "perfect"),
            ("She sings very ________ (good).", "well"),
            ("Could you speak more ________ (quiet), please?", "quietly"),
            ("He drives ________ (slowly/slow).", "slowly"),
            ("I speak English ________ (well/good).", "well")
        ],
        "explanation": "El adjetivo dice una cualidad del sustantivo. El adverbio dice cómo el verbo hace algo."
    },
    4: { # Adverbs of Frequency
        "grammar": [
            ("Often / she / write to me/ doesn’t", "She doesn’t often write to me."),
            ("Play football on Saturday afternoons / the boys / always", "The boys always play football on Saturday afternoons."),
            ("Usually/ arrives late / the bus", "The bus usually arrives late."),
            ("Go to bed before 11 / often / I", "I often go to bed before 11."),
            ("Never / drinks coffee in the evening / she", "She never drinks coffee in the evening."),
            ("It / rain in the summer / often / doesn’t", "It doesn’t often rain in the summer."),
            ("Read books slowly / I / always", "I always read books slowly."),
            ("Usually / my father / goes to work by bus", "My father usually goes to work by bus."),
            ("dictionary / often / use / The / the / students", "The students often use the dictionary."),
            ("me / Paul / helps / sometimes / my / with / homework", "Paul sometimes helps me with my homework."),
            ("visits / Jonathan / usually / dentist / the", "Jonathan usually visits the dentist."),
            ("I / fish / often / hours / for / catching / anything / without", "I often fish for hours without catching anything."),
            ("try / police / keep / The / order / always / to", "The police always try to keep the order."),
            ("see / usually / Jennifer / out / goes / a / to / concert", "Jennifer usually goes out to see a concert."),
            ("often / money / Sally / her / borrows / friends / from", "Sally often borrows money from her friends."),
            ("my / My / spoils / neighbour / holidays / always", "My neighbour always spoils my holidays."),
            ("angry / Our / teacher / English / usually / is", "Our English teacher is usually angry."),
            ("car / I / drink / never / if / drive / I / alcohol / a", "I never drink alcohol if I drive a car."),
            ("TV / ever / hardly / I / in / watch / evenings / the", "I hardly ever watch TV in the evenings.")
        ],
        "rule": "Entre sujeto y verbo (excepto To Be). Con To Be, va detrás."
    },
    5: { # Connectors
        "grammar": [
            ("I love the beach ________ (whereas) my partner hates it.", "whereas"),
            ("________ (Since) you're working, I won't cook yet.", "Since"),
            ("He didn't study. ________ (As a consequence), he failed.", "As a consequence"),
            ("I like football. I like it ________ (as well).", "as well"),
            ("The teacher bought sweets ________ (as well as) cookies.", "as well as"),
            ("It is raining. ________ (Nonetheless), it is not cold.", "Nonetheless"),
            ("My husband is going to tell the truth. On the one ________, I think it's a good idea.", "hand")
        ],
        "list": ["whereas", "while", "since", "as a consequence", "in contrast", "unfortunately", "fortunately", "nonetheless", "as well as", "as well"]
    },
    6: { # Comparatives & Superlatives (General)
        "grammar": [
            ("Sharon is the ________ (tall) girl in her class.", "tallest"),
            ("My partner is the most ________ (beautiful) woman in the world.", "beautiful"),
            ("This house is ________ (big) than that one.", "bigger"),
            ("He is the ________ (good) student in the group.", "best"),
            ("It's ________ (hot) today than yesterday.", "hotter")
        ],
        "rule": "En superlativos usamos 'in' para lugares: 'in the world', 'in the class' (no 'of')."
    },
    7: { # Superlatives + Present Perfect (Ever)
        "grammar": [
            ("¿Cuál es el país más frío en el que has estado nunca?", "What’s the coldest country you’ve ever been to?"),
            ("¿Cuál es la comida más buena que has probado nunca?", "What’s the most delicious food you’ve ever tasted?"),
            ("¿Cuál es el edificio más alto que has visitado nunca?", "What’s the highest building you’ve ever visited?"),
            ("¿Cuál es la playa más larga en la que has estado nunca?", "What’s the longest beach you’ve ever been to?"),
            ("¿Cuál es la persona más tímida que has conocido nunca?", "Who’s the shyest person you’ve ever met?"),
            ("¿Cuál es la canción más triste que has escuchado nunca?", "What’s the saddest song you’ve ever listened to?"),
            ("¿Cuál es el chiste más gracioso que te han contado nunca?", "What’s the funniest joke you’ve ever been told?"),
            ("¿Cuál es el día más feliz que has tenido nunca?", "What’s the happiest day you’ve ever had?"),
            ("¿Cuál es el sitio más caluroso en el que has estado nunca?", "What’s the hottest place you’ve ever been to?"),
            ("¿Cuál es el idioma más difícil que has estudiado nunca?", "What’s the most difficult language you’ve ever studied?")
        ],
        "rule": "WHAT’S + SUPERLATIVE + NOUN + HAVE + EVER + PARTICIPLE"
    },
    8: { # Enough
        "grammar": [
            ("Do you have ________ (enough) flour to make the cake?", "enough"),
            ("I’m not tall ________ (enough).", "enough"),
            ("There isn’t ________ (enough) milk.", "enough"),
            ("I don’t have ________ (enough) warm clothes.", "enough"),
            ("It’s not hot ________ (enough).", "enough")
        ],
        "rule": "Enough + Noun / Adjective + Enough"
    },
    9: { # Common Mistakes
        "grammar": [
            ("Do you have ________ (a) car?", "a"),
            ("My friend is the most intelligent person ________ (in) the world.", "in"),
            ("My friend has ________ (a lot of) money.", "a lot of"),
            ("I have 3 ________ (children).", "children")
        ]
    }
}

# Vocabulary for expansion
VOCAB_EXPANSION = [
    ("Apple", "Manzana"), ("House", "Casa"), ("Car", "Coche"), ("Work", "Trabajo"),
    ("Friend", "Amigo"), ("Time", "Tiempo"), ("Money", "Dinero"), ("City", "Ciudad"),
    ("Country", "País"), ("Book", "Libro"), ("Food", "Comida"), ("Water", "Agua")
]

def generate_interaction(unit_id, int_id, interaction_type, data):
    # This is a simplified generator based on the user data
    if interaction_type == "multiple_choice":
        prompt_es, correct = data
        options = [{"id": "o1", "text": correct}]
        # Generate some distractors
        distractors = ["wrong", "incorrect", "maybe", "not this"]
        random.shuffle(distractors)
        for i, d in enumerate(distractors[:2]):
            options.append({"id": f"o{i+2}", "text": d})
        random.shuffle(options)
        
        return {
            "interaction_id": f"{unit_id}_I{int_id}",
            "type": "multiple_choice",
            "prompt_es": f"Selecciona la opción correcta para: {prompt_es}",
            "options": options,
            "correct_answer": [o["id"] for o in options if o["text"] == correct][0],
            "mastery_tag": "grammar"
        }
    
    elif interaction_type == "reorder_words":
        sentence = data # correct English sentence
        words = sentence.replace(".", "").replace("?", "").split()
        random.shuffle(words)
        options = [{"id": f"w{i}", "text": w} for i, w in enumerate(words)]
        correct_order = []
        for w in sentence.replace(".", "").replace("?", "").split():
            for opt in options:
                if opt["text"] == w and opt["id"] not in correct_order:
                    correct_order.append(opt["id"])
                    break
        
        return {
            "interaction_id": f"{unit_id}_I{int_id}",
            "type": "reorder_words",
            "prompt_es": f"Ordena la frase: {sentence}",
            "options": options,
            "correct_answer": correct_order,
            "mastery_tag": "sentence-structure"
        }
    
    return None

def create_unit(unit_number):
    unit_id = f"U{unit_number}"
    # Title based on module or generic
    title = f"Unit {unit_number}: "
    if unit_number in USER_MATERIAL:
        # Map specific titles
        titles = {
            1: "Adjectives (Basics & Rules)",
            2: "Adjectives with -ed/-ing",
            3: "Adjectives vs Adverbs",
            4: "Adverbs of Frequency",
            5: "Connectors",
            6: "Comparatives & Superlatives",
            7: "Superlatives + Present Perfect",
            8: "Enough",
            9: "Common Mistakes Review"
        }
        title += titles.get(unit_number, "Grammar & Vocabulary")
    else:
        title += "Thematic Practice"

    unit_data = {
        "course": {
            "language_ui": "es-ES",
            "target_language": "en",
            "level": "A2",
            "unit_id": unit_id,
            "unit_title": title,
            "total_duration_minutes": 120
        },
        "blocks": [
            {
                "block_id": "B1",
                "title": "Principal Practice",
                "content": []
            }
        ]
    }

    # Fill 100 exercises
    exercises = []
    
    # Prioritize user material if available for this unit
    material = USER_MATERIAL.get(unit_number, {})
    grammar_items = material.get("grammar", [])
    
    # If no specific grammar for this unit, use a mix from other units to reinforce
    if not grammar_items:
        all_grammar = []
        for m in USER_MATERIAL.values():
            all_grammar.extend(m.get("grammar", []))
        grammar_items = random.sample(all_grammar, min(len(all_grammar), 20))

    # 1. Start with multiple choice from material
    for i, item in enumerate(grammar_items):
        int_id = i + 1
        interaction = generate_interaction(unit_id, int_id, "multiple_choice", item)
        if interaction:
            exercises.append(interaction)

    # 2. Fill the rest with varied exercises (using reorder_words as example)
    remaining = EXERCISES_PER_UNIT - len(exercises)
    for i in range(remaining):
        int_id = len(exercises) + 1
        # Sample a sentence from any material
        all_sentences = []
        for m in USER_MATERIAL.values():
            for item in m.get("grammar", []):
                if isinstance(item, tuple):
                    all_sentences.append(item[1])
                else:
                    all_sentences.append(item)
        
        sentence = random.choice(all_sentences)
        # Ensure it's a string
        if not isinstance(sentence, str):
            sentence = "The student is happy."
            
        interaction = generate_interaction(unit_id, int_id, "reorder_words", sentence)
        if interaction:
            exercises.append(interaction)

    unit_data["blocks"][0]["content"] = exercises
    return unit_data

def main():
    if not os.path.exists(COURSE_DIR):
        os.makedirs(COURSE_DIR)
    
    for i in range(1, UNITS_COUNT + 1):
        print(f"Generating Unit {i}...")
        unit_data = create_unit(i)
        file_path = os.path.join(COURSE_DIR, f"unit{i}.json")
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(unit_data, f, ensure_ascii=False, indent=2)
    
    print("Successfully generated 60 units with 100 exercises each.")

if __name__ == "__main__":
    main()
