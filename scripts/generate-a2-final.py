import json
import os
import random

# Target directory
target_dir = "src/content/cursos/ingles-a2"
os.makedirs(target_dir, exist_ok=True)

# 1. GRAMMAR DATA FROM USER MATERIAL
GRAMMAR_DATA = {
    1: { # Adjectives Basics
        "topic": "Adjectives: Position and Rules",
        "rules": ["Adjectives always go BEFORE the noun (Adjective + Noun).", "Adjectives do not have plural forms."],
        "items": [
            ("Éste es un café bueno.", "This is a good coffee.", "good coffee", "coffee good"),
            ("El sandwich de queso y tomate es caro.", "The cheese and tomato sandwich is expensive.", "expensive sandwich", "sandwich expensive"),
            ("La chica joven es guapa también.", "The young lady is beautiful too.", "young lady", "lady young"),
            ("El hotel nuevo es bonito.", "The new hotel is nice.", "new hotel", "hotel new"),
            ("Es un restaurante barato.", "It’s a cheap restaurant.", "cheap restaurant", "restaurant cheap"),
            ("Una botella grande.", "A big bottle.", "big bottle", "bottle big"),
            ("Un cuaderno pequeño.", "A small notebook.", "small notebook", "notebook small"),
            ("Una mujer alta.", "A tall woman.", "tall woman", "woman tall"),
            ("Un hombre viejo.", "An old man.", "old man", "man old"),
            ("Una habitación llena.", "A full room.", "full room", "room full")
        ]
    },
    2: { # -ed vs -ing Adjectives
        "topic": "Adjectives with -ed and -ing",
        "rules": ["-ed for feelings (how people feel).", "-ing for characteristics (the thing that causes the feeling)."],
        "items": [
            ("I was ___ from start to finish.", "bored", "boring"),
            ("I’m very ___ because I’m going to New York.", "excited", "exciting"),
            ("Are you ___ or were you expecting this?", "surprised", "surprising"),
            ("I’m reading a very ___ book.", "interesting", "interested"),
            ("I’ve had a very ___ day at work.", "tiring", "tired"),
            ("The film was ___.", "boring", "bored"),
            ("Visit our ___ new shop!", "exciting", "excited"),
            ("His speech was very long and very ___.", "boring", "bored"),
            ("I laughed. It was an ___ story.", "amusing", "amused"),
            ("She’s ___ in politics.", "interested", "interesting"),
            ("The map was ___ and I got lost.", "confusing", "confused"),
            ("She was ___ because she had nothing to do.", "bored", "boring"),
            ("She wasn't ___ by the joke.", "amused", "amusing"),
            ("I’m a bit ___ because it was complicated.", "confused", "confusing"),
            ("It is ___ that she failed.", "surprising", "surprised"),
            ("Everyone was ___ by the noise.", "surprised", "surprising")
        ]
    },
    3: { # Adjectives vs Adverbs
        "topic": "Adjectives and Adverbs",
        "rules": ["Adjectives describe nouns.", "Adverbs describe verbs (usually end in -ly).", "Irregulars: good -> well, fast -> fast, hard -> hard."],
        "items": [
            ("Could I have a ___ word with you?", "quick", "quickly"),
            ("This is a ___ train.", "slow", "slowly"),
            ("He talked very ___ about his work.", "interestingly", "interesting"),
            ("You’ve cooked that meat ___.", "wonderfully", "wonderful"),
            ("I’ve got an ___ job for you.", "easy", "easily"),
            ("She writes in ___ English.", "perfect", "perfectly"),
            ("She sings very ___.", "well", "good"),
            ("Speak more ___, please.", "quietly", "quiet"),
            ("He drives ___.", "slowly", "slow"),
            ("I speak English ___.", "well", "good"),
            ("He is a ___ driver.", "dangerous", "dangerously"),
            ("He drives ___.", "dangerously", "dangerous")
        ]
    },
    4: { # Adverbs of Frequency
        "topic": "Adverbs of Frequency",
        "rules": ["Position: Before the main verb, but AFTER the verb 'to be'.", "Hardly ever = casi nunca."],
        "items": [
            ("I ___ go to school by bus.", "always", "I go always"),
            ("I ___ get up at 7.", "usually", "I get usually up"),
            ("I ___ watch TV in the evening.", "often", "I watch often"),
            ("I ___ have lunch in a restaurant.", "sometimes", "Sometimes I have"),
            ("I ___ arrive late.", "never", "I arrive never"),
            ("She ___ write to me.", "doesn't often", "doesn't write often"),
            ("The boys ___ play football.", "always", "always play"),
            ("The bus ___ arrives late.", "usually", "arrives usually"),
            ("I ___ go to bed before 11.", "often", "often go"),
            ("She ___ drinks coffee.", "never", "drinks never"),
            ("The students ___ use the dictionary.", "often", "often use"),
            ("Paul ___ helps me.", "sometimes", "helps sometimes"),
            ("Jonathan ___ visits the dentist.", "usually", "visits usually"),
            ("The police ___ try to keep order.", "always", "try always"),
            ("Jennifer ___ goes out to a concert.", "usually", "goes usually"),
            ("Sally ___ borrows money.", "often", "borrows often"),
            ("My neighbour ___ spoils my holidays.", "always", "spoils always"),
            ("Our teacher ___ is angry.", "usually", "is usually"),
            ("I ___ drink alcohol if I drive.", "never", "never drink"),
            ("I ___ watch TV in the evenings.", "hardly ever", "hardly watch ever")
        ]
    },
    5: { # Connectors
        "topic": "Connectors: as well as, whereas, while, since...",
        "rules": ["whereas/while for contrast.", "since/as for reason.", "as a consequence for result.", "as well as for addition."],
        "items": [
            ("I love the beach ___ my partner hates it.", "whereas", "while"),
            ("In Spain it's hot, ___ in England it rains.", "while", "whereas"),
            ("___ you're working, I won't cook.", "Since", "Because"),
            ("He didn't study. ___, he failed.", "As a consequence", "Since"),
            ("In Spain shops close late. ___, in France they close early.", "In contrast", "Nonetheless"),
            ("My brother is blond, ___ our youngest brother has black hair.", "in contrast with", "as well as"),
            ("___, I didn't pass.", "Unfortunately", "Fortunately"),
            ("___, she didn't hurt herself.", "Fortunately", "Unfortunately"),
            ("It is raining. ___, it is not cold.", "Nonetheless", "However"),
            ("The teacher bought sweets ___ cookies.", "as well as", "as well"),
            ("I like football. I like it ___.", "as well", "too")
        ]
    },
    6: { # Comparatives & Superlatives
        "topic": "Comparative and Superlative Adjectives",
        "rules": ["Comparative: -er than / more ... than.", "Superlative: the -est / the most ..."],
        "items": [
            ("Sharon is the ___ girl in her class.", "tallest", "taller"),
            ("My partner is the ___ woman in the world.", "most beautiful", "more beautiful"),
            ("This house is ___ than that one.", "bigger", "the biggest"),
            ("He is the ___ student in the group.", "best", "goodest"),
            ("It's ___ today than yesterday.", "hotter", "more hot")
        ]
    },
    7: { # Superlatives with 'in'
        "topic": "Superlatives with 'in'",
        "rules": ["We use 'in' for places with superlatives (in the world, in the class).", "Common mistake: using 'of' instead of 'in'."],
        "items": [
            ("He is the tallest ___ the class.", "in", "of"),
            ("It is the biggest city ___ the country.", "in", "of"),
            ("She is the smartest person ___ the world.", "in", "of"),
            ("This is the best restaurant ___ town.", "in", "of")
        ]
    },
    8: { # Superlatives + Present Perfect (Ever)
        "topic": "Superlatives + Present Perfect (Ever)",
        "rules": ["WHAT’S + SUPERLATIVE + NOUN + HAVE + EVER + PARTICIPLE"],
        "items": [
            ("What’s the coldest country you’ve ever ___ to?", "been", "was"),
            ("What’s the most delicious food you’ve ever ___?", "tasted", "taste"),
            ("What’s the highest building you’ve ever ___?", "visited", "visit"),
            ("What’s the longest beach you’ve ever ___ to?", "been", "go"),
            ("Who’s the shyest person you’ve ever ___?", "met", "meet"),
            ("What’s the saddest song you’ve ever ___ to?", "listened", "listen"),
            ("What’s the funniest joke you’ve ever been ___?", "told", "tell"),
            ("What’s the happiest day you’ve ever ___?", "had", "have"),
            ("What’s the hottest place you’ve ever ___ to?", "been", "went"),
            ("What’s the most difficult language you’ve ever ___?", "studied", "study")
        ]
    },
    9: { # Enough
        "topic": "Using Enough",
        "rules": ["Enough + Noun (enough money).", "Adjective + Enough (old enough)."],
        "items": [
            ("Do you have ___ flour?", "enough", "enough of"),
            ("I’m not tall ___.", "enough", "enough tall"),
            ("There isn’t ___ milk.", "enough", "milk enough"),
            ("I don’t have ___ warm clothes.", "enough", "enough of"),
            ("It’s not hot ___.", "enough", "enough hot")
        ]
    },
    10: { # Common Mistakes
        "topic": "Common Mistakes in A2",
        "rules": ["allow me TO go.", "Do you have A car?", "3 children (not childrens)."],
        "items": [
            ("My mother didn't allow me ___ out.", "to go", "go"),
            ("Do you have ___ car?", "a", "the"),
            ("I didn't wear ___ uniform.", "a", "an"),
            ("My friend has ___ money.", "a lot of", "much"),
            ("I have 3 ___.", "children", "childrens")
        ]
    }
}

# Thematic topics for units 11-60
THEMATIC_TOPICS = [
    "Travel: Booking a Hotel", "Travel: At the Airport", "Travel: Directions",
    "Work: Job Interviews", "Work: Daily Routine", "Work: Office Equipment",
    "Health: At the Doctor", "Health: Healthy Living", "Food: At a Restaurant",
    "Food: Shopping", "Food: Recipes", "Shopping: Clothes", "Shopping: Prices",
    "Social: Making Plans", "Social: Hobbies", "Social: Describing People",
    "Education: Languages", "Education: University Life", "Environment: Weather",
    "Environment: Nature", "Technology: Computers", "Technology: Social Media",
    "Entertainment: Movies", "Entertainment: Music", "Entertainment: Books",
    "Home: House Tour", "Home: Chores", "Past: My Childhood", "Past: Famous People",
    "Future: Plans", "Future: Predictions", "Transport: Driving", "Transport: Trains",
    "Culture: Holidays", "Culture: Traditions", "Sports: Olympic Games",
    "Sports: Team Sports", "Animals: Wild Animals", "Animals: Pets",
    "Services: Bank", "Services: Post Office", "Phone: Making Calls",
    "Descriptions: Appearance", "Descriptions: Personality", "Daily Life: Weekends",
    "Daily Life: Morning Routine", "Relationships: Family", "Relationships: Friends",
    "Review: Present Tenses", "Review: Past Tenses"
]

def generate_mc(unit_id, int_id, topic_data):
    # Multiple choice based on grammar items
    items = topic_data.get("items", [])
    if not items:
        # Generic A2 MC
        q_text = "Which of these is a correct A2 sentence?"
        options = [
            {"id": "o1", "text": "I am a student."},
            {"id": "o2", "text": "I is a student."},
            {"id": "o3", "text": "I be a student."}
        ]
        correct = "o1"
    else:
        item = random.choice(items)
        if len(item) == 4: # (Sentence with ___, Correct, Distractor, Distractor2)
            q_text, correct_val, dist1, dist2 = item
            options = [
                {"id": "o1", "text": correct_val},
                {"id": "o2", "text": dist1},
                {"id": "o3", "text": dist2 if dist2 else "none"}
            ]
            random.shuffle(options)
            correct = [o["id"] for o in options if o["text"] == correct_val][0]
        elif len(item) == 3: # (Sentence with ___, Correct, Distractor)
            q_text, correct_val, dist1 = item
            options = [
                {"id": "o1", "text": correct_val},
                {"id": "o2", "text": dist1},
                {"id": "o3", "text": "maybe"}
            ]
            random.shuffle(options)
            correct = [o["id"] for o in options if o["text"] == correct_val][0]
        else: # (Spanish, English, Part1, Part2)
            esp, eng, p1, p2 = item
            q_text = f"Choose the correct translation for: '{esp}'"
            options = [
                {"id": "o1", "text": eng},
                {"id": "o2", "text": f"{p2} {p1}"},
                {"id": "o3", "text": "Incorrect option"}
            ]
            random.shuffle(options)
            correct = [o["id"] for o in options if o["text"] == eng][0]

    return {
        "interaction_id": f"unit{unit_id}-i{int_id}",
        "type": "multiple_choice",
        "prompt_es": "Selecciona la opción correcta:",
        "options": options,
        "correct_answer": correct,
        "mastery_tag": "grammar"
    }

def generate_reorder(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    if items:
        item = random.choice(items)
        if len(item) == 4 and "___" not in item[0]: # Use the full translation
            sentence = item[1]
        elif len(item) == 4: # It's a fill-in sentence, reconstruct it
            sentence = item[0].replace("___", item[1])
        else:
            sentence = "The student is happy."
    else:
        sentence = "I like learning English every day."

    sentence = sentence.replace(".", "").replace("?", "").replace("!", "")
    words = sentence.split()
    options = [{"id": f"w{i}", "text": w} for i, w in enumerate(words)]
    correct_order = [o["id"] for o in options]
    shuffled = list(options)
    random.shuffle(shuffled)

    return {
        "interaction_id": f"unit{unit_id}-i{int_id}",
        "type": "reorder_words",
        "prompt_es": "Ordena las palabras para formar la frase correcta:",
        "options": shuffled,
        "correct_answer": correct_order,
        "mastery_tag": "syntax"
    }

def generate_fill(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    if items:
        item = random.choice(items)
        if "___" in item[0]:
            stimulus = item[0]
            answer = item[1]
        else:
            stimulus = "This is a ___ coffee. (good)"
            answer = "good"
    else:
        stimulus = "He ___ (be) my friend."
        answer = "is"

    return {
        "interaction_id": f"unit{unit_id}-i{int_id}",
        "type": "fill_blanks",
        "prompt_es": "Completa el espacio en blanco:",
        "stimulus_en": stimulus,
        "correct_answer": answer,
        "mastery_tag": "grammar"
    }

def generate_tf(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    is_correct = random.choice([True, False])
    if items:
        item = random.choice(items)
        if len(item) == 4:
            if is_correct:
                sentence = item[1]
            else:
                sentence = f"{item[1]} {item[2]}" # Add a distractor at the end to make it wrong
        else:
            sentence = "The student is happy."
    else:
        sentence = "I am a student." if is_correct else "I are a student."

    return {
        "interaction_id": f"unit{unit_id}-i{int_id}",
        "type": "true_false",
        "prompt_es": f"¿Es correcta esta frase?: \"{sentence}\"",
        "correct_answer": is_correct,
        "mastery_tag": "grammar"
    }

def generate_matching(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    pairs = []
    if len(items) >= 3:
        selected = random.sample(items, 3)
        for i, item in enumerate(selected):
            if len(item) == 4:
                pairs.append({"id": f"p{i}", "left": item[0], "right": item[1]})
            else:
                pairs.append({"id": f"p{i}", "left": f"Option {i}", "right": f"Match {i}"})
    else:
        for i in range(3):
            pairs.append({"id": f"p{i}", "left": f"A{i}", "right": f"B{i}"})

    return {
        "interaction_id": f"unit{unit_id}-i{int_id}",
        "type": "matching",
        "prompt_es": "Une las frases en español con su traducción correcta:",
        "pairs": pairs,
        "correct_answer": {p["id"]: p["id"] for p in pairs},
        "mastery_tag": "vocabulary"
    }

def generate_categorization(unit_id, int_id, topic_data):
    # Split items into two categories
    items = topic_data.get("items", [])
    categories = [
        {"id": "cat1", "title": "Category A", "items": []},
        {"id": "cat2", "title": "Category B", "items": []}
    ]
    if items:
        for i, item in enumerate(items[:6]):
            cat_idx = i % 2
            text = item[1] if len(item) == 4 else item[1]
            categories[cat_idx]["items"].append({"id": f"item{i}", "text": text})
    else:
        categories[0]["items"] = [{"id": "i1", "text": "Dog"}, {"id": "i2", "text": "Cat"}]
        categories[1]["items"] = [{"id": "i3", "text": "Apple"}, {"id": "i4", "text": "Banana"}]
        categories[0]["title"] = "Animals"
        categories[1]["title"] = "Fruits"

    return {
        "interaction_id": f"unit{unit_id}-i{int_id}",
        "type": "categorization",
        "prompt_es": "Clasifica los siguientes elementos en la categoría correcta:",
        "categories": categories,
        "mastery_tag": "vocabulary"
    }

def generate_dictation(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    if items:
        item = random.choice(items)
        sentence = item[1]
    else:
        sentence = "This is a simple dictation."

    return {
        "interaction_id": f"unit{unit_id}-i{int_id}",
        "type": "dictation_guided",
        "prompt_es": "Escucha y escribe lo que oyes:",
        "tts_en": sentence,
        "correct_answer": sentence,
        "mastery_tag": "listening"
    }

def generate_role_play(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    if items:
        item = random.choice(items)
        stimulus = item[1]
        correct = item[1]
    else:
        stimulus = "Hello, how are you?"
        correct = "I am fine, thank you."

    return {
        "interaction_id": f"unit{unit_id}-i{int_id}",
        "type": "role_play",
        "prompt_es": "Responde a la siguiente situación:",
        "stimulus_en": stimulus,
        "options": [
            {"id": "o1", "text": correct},
            {"id": "o2", "text": "Incorrect response"},
            {"id": "o3", "text": "Wrong answer"}
        ],
        "correct_answer": "o1",
        "mastery_tag": "speaking"
    }

def generate_unit(unit_id):
    if unit_id <= 10:
        topic_info = GRAMMAR_DATA[unit_id]
        title = topic_info["topic"]
    else:
        title = THEMATIC_TOPICS[unit_id - 11]
        # Mix grammar for thematic units
        topic_info = GRAMMAR_DATA[random.randint(1, 10)]

    interactions = []
    # 10 MC
    for i in range(10):
        interactions.append(generate_mc(unit_id, len(interactions), topic_info))
    # 10 Reorder
    for i in range(10):
        interactions.append(generate_reorder(unit_id, len(interactions), topic_info))
    # 20 Fill
    for i in range(20):
        interactions.append(generate_fill(unit_id, len(interactions), topic_info))
    # 15 True/False
    for i in range(15):
        interactions.append(generate_tf(unit_id, len(interactions), topic_info))
    # 15 Matching
    for i in range(15):
        interactions.append(generate_matching(unit_id, len(interactions), topic_info))
    # 10 Categorization
    for i in range(10):
        interactions.append(generate_categorization(unit_id, len(interactions), topic_info))
    # 10 Dictation
    for i in range(10):
        interactions.append(generate_dictation(unit_id, len(interactions), topic_info))
    # 10 Role Play
    for i in range(10):
        interactions.append(generate_role_play(unit_id, len(interactions), topic_info))

    # Shuffle interactions to mix types
    random.shuffle(interactions)
    # Re-assign IDs to be unique and ordered
    for i, inter in enumerate(interactions):
        inter["interaction_id"] = f"U{unit_id}_I{i+1}"

    return {
        "course": {
            "unit_id": f"unit{unit_id}",
            "unit_title": title,
            "level": "A2",
            "total_duration_minutes": 60,
            "language_ui": "es-ES",
            "target_language": "en"
        },
        "blocks": [
            {
                "block_id": f"U{unit_id}_B1",
                "title": "Práctica General",
                "duration_minutes": 60,
                "content": interactions
            }
        ]
    }

def main():
    for i in range(1, 61):
        unit_data = generate_unit(i)
        with open(os.path.join(target_dir, f"unit{i}.json"), "w", encoding="utf-8") as f:
            json.dump(unit_data, f, indent=2, ensure_ascii=False)
        if i % 10 == 0:
            print(f"Generated {i} units...")

if __name__ == "__main__":
    main()
