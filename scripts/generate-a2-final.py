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

# --- GENERATORS ---

def generate_mc(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    item = random.choice(items) if items else ("Sentence ___", "Correct", "Wrong", "Wrong")
    
    if len(item) >= 3:
        q_text, correct_val, dist1 = item[0], item[1], item[2]
        dist2 = item[3] if len(item) > 3 else "other"
    else:
        q_text, correct_val, dist1, dist2 = "Choose the correct answer", "Yes", "No", "Maybe"

    options = [
        {"id": "o1", "text": correct_val},
        {"id": "o2", "text": dist1},
        {"id": "o3", "text": dist2}
    ]
    random.shuffle(options)
    correct_id = next(o["id"] for o in options if o["text"] == correct_val)

    return {
        "type": "multiple_choice",
        "prompt_es": "Selecciona la opción correcta:",
        "stimulus_en": q_text,
        "options": options,
        "correct_answer": correct_id,
        "mastery_tag": "grammar"
    }

def generate_reorder(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    if items:
        item = random.choice(items)
        sentence = item[1] if len(item) >= 2 else "This is a sentence."
    else:
        sentence = "I am learning English."
    
    sentence = sentence.replace(".", "").replace("?", "").replace("!", "")
    words = sentence.split()
    options = [{"id": f"w{i}", "text": w} for i, w in enumerate(words)]
    correct_order = [o["id"] for o in options]
    shuffled = list(options)
    random.shuffle(shuffled)

    return {
        "type": "reorder_words",
        "prompt_es": "Ordena las palabras:",
        "options": shuffled,
        "correct_answer": correct_order,
        "mastery_tag": "syntax"
    }

def generate_fill(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    item = random.choice(items) if items else ("I ___ a student.", "am")
    stimulus = item[0]
    answer = item[1]
    
    if "___" not in stimulus:
        stimulus = stimulus + " (___)"

    return {
        "type": "fill_blanks",
        "prompt_es": "Completa el espacio:",
        "stimulus_en": stimulus,
        "correct_answer": answer,
        "mastery_tag": "grammar"
    }

def generate_tf(unit_id, int_id, topic_data):
    is_correct = random.choice([True, False])
    items = topic_data.get("items", [])
    item = random.choice(items) if items else ("English is fun.", "English is fun.")
    
    sentence = item[1] if is_correct else f"{item[1]} not"
    
    return {
        "type": "true_false",
        "prompt_es": f"¿Es correcta esta frase?: \"{sentence}\"",
        "correct_answer": is_correct,
        "mastery_tag": "grammar"
    }

def generate_matching(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    selected = random.sample(items, min(len(items), 4)) if items else []
    pairs = [{"id": f"p{i}", "left": s[0], "right": s[1]} for i, s in enumerate(selected)]
    
    return {
        "type": "matching",
        "prompt_es": "Relaciona las frases:",
        "pairs": pairs,
        "mastery_tag": "vocabulary"
    }

def generate_categorization(unit_id, int_id, topic_data):
    return {
        "type": "categorization",
        "prompt_es": "Clasifica las palabras:",
        "categories": [
            {"id": "cat1", "title": "Category 1", "items": [{"id": "i1", "text": "Word A"}, {"id": "i2", "text": "Word B"}]},
            {"id": "cat2", "title": "Category 2", "items": [{"id": "i3", "text": "Word C"}, {"id": "i4", "text": "Word D"}]}
        ],
        "mastery_tag": "vocabulary"
    }

def generate_dictation(unit_id, int_id, topic_data):
    items = topic_data.get("items", [])
    sentence = random.choice(items)[1] if items else "Hello world."
    return {
        "type": "dictation_guided",
        "prompt_es": "Escucha y escribe:",
        "tts_en": sentence,
        "correct_answer": sentence,
        "mastery_tag": "listening"
    }

def generate_role_play(unit_id, int_id, topic_data):
    return {
        "type": "role_play",
        "prompt_es": "Responde adecuadamente:",
        "stimulus_en": "How are you today?",
        "options": [{"id": "o1", "text": "I'm great, thanks!"}, {"id": "o2", "text": "Yellow."}, {"id": "o3", "text": "Yesterday."}],
        "correct_answer": "o1",
        "mastery_tag": "speaking"
    }

def generate_odd_one_out(unit_id, int_id, topic_data):
    return {
        "type": "odd_one_out",
        "prompt_es": "Selecciona la palabra que no encaja:",
        "options": [
            {"id": "o1", "text": "Apple"},
            {"id": "o2", "text": "Banana"},
            {"id": "o3", "text": "Car"},
            {"id": "o4", "text": "Orange"}
        ],
        "correct_answer": "o3",
        "mastery_tag": "vocabulary"
    }

def generate_mc_cloze(unit_id, int_id, topic_data):
    return {
        "type": "multiple_choice_cloze",
        "prompt_es": "Elige la opción correcta:",
        "main_text": "I have [GAP 1] cat. It is very [GAP 2].",
        "gaps": [
            {"id": "1", "options": [{"id": "a", "text": "a"}, {"id": "an", "text": "an"}], "correct_answer": "a"},
            {"id": "2", "options": [{"id": "big", "text": "big"}, {"id": "sky", "text": "sky"}], "correct_answer": "big"}
        ],
        "mastery_tag": "grammar"
    }

def generate_gapped_text(unit_id, int_id, topic_data):
    return {
        "type": "gapped_text",
        "prompt_es": "Completa el texto con los párrafos eliminados:",
        "main_text": "First part of the story. [GAP 1] Second part. [GAP 2] End.",
        "removed_paragraphs": [
            {"id": "1", "text": "This is a missing sentence."},
            {"id": "2", "text": "Another missing sentence."}
        ],
        "correct_answer": {"1": "1", "2": "2"},
        "mastery_tag": "reading"
    }

def generate_multiple_matching(unit_id, int_id, topic_data):
    return {
        "type": "multiple_matching",
        "prompt_es": "Relaciona a las personas con sus necesidades:",
        "profiles": [
            {"id": "p1", "name": "John", "description": "Needs a fast computer."},
            {"id": "p2", "name": "Sarah", "description": "Wants to learn English."}
        ],
        "descriptions": [
            {"id": "d1", "title": "Gaming PC", "content": "Very high speed."},
            {"id": "d2", "title": "Focus English", "content": "Best for learning."}
        ],
        "correct_answer": {"p1": "d1", "p2": "d2"},
        "mastery_tag": "reading"
    }

def generate_flashcards(unit_id, int_id, topic_data):
    return {
        "type": "flashcard",
        "prompt_es": "Repasa el vocabulario clave:",
        "flashcards": [
            {"front": "Table", "back": "Mesa", "pronunciation": "/ˈteɪ.bəl/"},
            {"front": "Chair", "back": "Silla", "pronunciation": "/tʃeər/"}
        ],
        "mastery_tag": "vocabulary"
    }

def generate_writing_task(unit_id, int_id, topic_data):
    return {
        "type": "writing_task",
        "writing_type": "email",
        "prompt_es": "Escribe un email corto a un amigo.",
        "word_count_min": 10,
        "word_count_max": 50,
        "input_placeholder_es": "Escribe aquí...",
        "mastery_tag": "writing"
    }

def generate_speaking_task(unit_id, int_id, topic_data):
    return {
        "type": "speaking_task",
        "speaking_type": "description",
        "prompt_es": "Describe lo que hiciste ayer en voz alta.",
        "mastery_tag": "speaking"
    }

def generate_audio_player(unit_id, int_id, topic_data):
    return {
        "type": "audio_player",
        "prompt_es": "Escucha el audio antes de continuar:",
        "tts_en": "This is an introductory audio for the unit.",
        "mastery_tag": "listening"
    }

def generate_word_search(unit_id, int_id, topic_data):
    return {
        "type": "word-search",
        "prompt_es": "Encuentra las palabras:",
        "words": ["DOG", "CAT", "FISH"],
        "gridSize": 8,
        "mastery_tag": "vocabulary"
    }

# --- ASSEMBLY ---

def generate_unit(unit_id):
    topic_info = GRAMMAR_DATA.get(unit_id, GRAMMAR_DATA[1]) if unit_id <= 10 else {"topic": THEMATIC_TOPICS[unit_id-11], "items": []}
    
    # Mix in grammar if thematic
    if not topic_info.get("items"):
        topic_info["items"] = GRAMMAR_DATA[random.randint(1, 10)]["items"]

    interactions = []
    
    # Structure: 1 Intro (Audio/Flashcards) + 98 practice + 1 Task (Writing/Speaking)
    
    # 1. Intro
    if random.choice([True, False]):
        interactions.append(generate_flashcards(unit_id, 0, topic_info))
    else:
        interactions.append(generate_audio_player(unit_id, 0, topic_info))

    # 2. Practice (98 items)
    types_config = [
        (generate_mc, 8),
        (generate_reorder, 8),
        (generate_fill, 8),
        (generate_tf, 8),
        (generate_matching, 8),
        (generate_categorization, 8),
        (generate_dictation, 8),
        (generate_role_play, 8),
        (generate_odd_one_out, 8),
        (generate_mc_cloze, 8),
        (generate_gapped_text, 8),
        (generate_multiple_matching, 10)
    ]
    
    for gen_func, count in types_config:
        for _ in range(count):
            interactions.append(gen_func(unit_id, len(interactions), topic_info))

    # 3. Final Task
    if random.choice([True, False]):
        interactions.append(generate_writing_task(unit_id, 99, topic_info))
    else:
        interactions.append(generate_speaking_task(unit_id, 99, topic_info))

    # Ensure 100 exactly
    while len(interactions) < 100:
        interactions.append(generate_mc(unit_id, len(interactions), topic_info))
    interactions = interactions[:100]

    # Re-assign IDs
    for i, inter in enumerate(interactions):
        inter["interaction_id"] = f"U{unit_id}_I{i+1}"

    return {
        "course": {
            "unit_id": f"unit{unit_id}",
            "unit_title": topic_info["topic"],
            "level": "A2",
            "total_duration_minutes": 60,
            "language_ui": "es-ES",
            "target_language": "en"
        },
        "blocks": [
            {
                "block_id": f"U{unit_id}_B1",
                "title": "Práctica Interactiva",
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
            print(f"Generated {i} units with enhanced variety...")

if __name__ == "__main__":
    main()
