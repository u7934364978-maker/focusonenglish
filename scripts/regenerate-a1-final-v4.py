import json
import os
import random
import re
import hashlib

# Import UNIT_DATA from the mega course script if possible, 
# otherwise we'll define a subset or a way to get it.
# To be safe and independent, I'll include the data extraction logic.

COURSE_DIR = "src/content/cursos/ingles-a1"
UNITS_COUNT = 60
EXERCISES_PER_UNIT = 20 # Increased variety, reasonable count

# We will use the titles and topics from the previous scripts
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

# Helper to get audio path (matches PremiumSession expectations)
def get_audio_path(text):
    if not text: return None
    clean_text = text.strip().lower()
    text_hash = hashlib.md5(clean_text.encode()).hexdigest()
    return f"/audio/courses/ingles-a1/shared/{text_hash}.mp3"

def generate_varied_exercises(unit_id, unit_data):
    exercises = []
    vocab = unit_data.get("vocab", [("Word", "Palabra")])
    grammar = unit_data.get("grammar", [("I (be) ________ a student.", "am")])
    sentences = unit_data.get("sentences", ["This is a sentence."])
    communication = unit_data.get("communication", [("Hi", "Hello", ["Bye", "No"])])
    
    # Types of exercises to distribute
    # 0: MC Vocab, 1: Matching, 2: Reorder, 3: True/False, 4: Fill Blanks, 
    # 5: Translation, 6: Flashcard, 7: Categorization, 8: Reading, 9: Audio
    
    for i in range(EXERCISES_PER_UNIT):
        etype = i % 10 # Changed from 11 to 10 to exclude word-search/crossword
        int_id = f"U{unit_id}_I{i+1}"
        
        # 1. Multiple Choice (Vocab/Comm)
        if etype == 0:
            word, trans = random.choice(vocab)
            other = [w for w, t in vocab if w != word]
            if not other: other = ["House", "Car", "Book"]
            opts = [{"id": "o1", "text": word}] + [{"id": f"o{j+2}", "text": d} for j, d in enumerate(random.sample(other, min(len(other), 2)))]
            random.shuffle(opts)
            exercises.append({
                "interaction_id": int_id, "type": "multiple_choice",
                "prompt_es": f"¿Cómo se dice '{trans}'?", "options": opts,
                "correct_answer": [o["id"] for o in opts if o["text"] == word][0],
                "mastery_tag": "vocabulary"
            })
            
        # 2. Matching
        elif etype == 1:
            sample = random.sample(vocab, min(len(vocab), 4))
            pairs = [{"id": f"p{j}", "left": w, "right": t} for j, (w, t) in enumerate(sample)]
            exercises.append({
                "interaction_id": int_id, "type": "matching",
                "prompt_es": "Une las parejas correctamente:",
                "pairs": pairs, "correct_answer": {p["id"]: p["id"] for p in pairs},
                "mastery_tag": "vocabulary"
            })
            
        # 3. Reorder Words
        elif etype == 2:
            sent = random.choice(sentences).replace(".", "").replace("?", "").replace("!", "")
            words = sent.split()
            opts = [{"id": f"w{j}", "text": w} for j, w in enumerate(words)]
            correct = [o["id"] for o in opts]
            shuffled = list(opts)
            while len(words) > 1 and [o["id"] for o in shuffled] == correct:
                random.shuffle(shuffled)
            exercises.append({
                "interaction_id": int_id, "type": "reorder_words",
                "prompt_es": "Ordena la frase:", "options": shuffled,
                "correct_answer": correct, "mastery_tag": "syntax"
            })
            
        # 4. True / False
        elif etype == 3:
            sent = random.choice(sentences)
            is_corr = random.choice([True, False])
            display = sent if is_corr else sent.replace("is", "are").replace("am", "is")
            exercises.append({
                "interaction_id": int_id, "type": "true_false",
                "prompt_es": f"¿Es gramaticalmente correcta?: \"{display}\"",
                "correct_answer": is_corr, "mastery_tag": "grammar"
            })
            
        # 5. Fill Blanks (Transformation)
        elif etype == 4:
            stim, ans = random.choice(grammar)
            exercises.append({
                "interaction_id": int_id, "type": "fill_blanks",
                "prompt_es": "Completa el espacio en blanco:",
                "stimulus_en": stim, "correct_answer": ans,
                "mastery_tag": "grammar"
            })
            
        # 6. Short Writing (Translation)
        elif etype == 5:
            word, trans = random.choice(vocab)
            exercises.append({
                "interaction_id": int_id, "type": "short_writing",
                "prompt_es": "Traduce al inglés:", "stimulus_es": trans,
                "correct_answer": word, "mastery_tag": "vocabulary"
            })
            
        # 7. Flashcard
        elif etype == 6:
            word, trans = random.choice(vocab)
            exercises.append({
                "interaction_id": int_id, "type": "flashcard",
                "prompt_es": "Flashcard de estudio", "stimulus_en": word,
                "correct_answer": trans, "mastery_tag": "vocabulary"
            })
            
        # 8. Categorization (Simple: Noun vs Verb or similar if data allows, otherwise random group)
        elif etype == 7:
            sample = random.sample(vocab, min(len(vocab), 4))
            exercises.append({
                "interaction_id": int_id, "type": "categorization",
                "prompt_es": "Clasifica estas palabras:",
                "categories": [
                    {"id": "c1", "title": "Grupo A", "items": [sample[0][0]]},
                    {"id": "c2", "title": "Grupo B", "items": [sample[1][0]]}
                ] if len(sample) >= 2 else [{"id": "c1", "title": "Vocab", "items": [v[0] for v in sample]}],
                "correct_answer": "categorization_logic", # PremiumSession handles this via categories mapping
                "mastery_tag": "vocabulary"
            })
            
        # 9. Reading Comprehension (Simple)
        elif etype == 8:
            exercises.append({
                "interaction_id": int_id, "type": "reading-comprehension",
                "title": "Mini Reading",
                "text": " ".join(random.sample(sentences, min(len(sentences), 3))),
                "question": "¿De qué trata este texto?",
                "options": [{"id": "o1", "text": unit_data["title"]}, {"id": "o2", "text": "Other topic"}],
                "correct_answer": "o1",
                "mastery_tag": "reading"
            })
            
        # 10. Audio Player (Listening)
        elif etype == 9:
            sent = random.choice(sentences)
            exercises.append({
                "interaction_id": int_id, "type": "audio_player",
                "prompt_es": "Escucha atentamente:", "audioUrl": get_audio_path(sent),
                "text": sent, "mastery_tag": "listening"
            })

        # 11. Word Search or Crossword (Transitions)
        else:
            exercises.append({
                "interaction_id": int_id, "type": random.choice(["word-search", "crossword"]),
                "prompt_es": "¡Reto especial!", "mastery_tag": "fun"
            })
            
    return exercises

def main():
    # Import the actual data from the mega course script
    # We'll mock it if not found, but we already read it
    from generate_a1_mega_course_data import UNIT_DATA # I will create this temp file
    
    os.makedirs(COURSE_DIR, exist_ok=True)
    for unit_id in range(1, UNITS_COUNT + 1):
        data = UNIT_DATA.get(unit_id, {"title": f"Unit {unit_id}"})
        unit_json = {
            "course": {
                "unit_id": f"unit{unit_id}", "unit_title": data["title"],
                "level": "A1", "total_duration_minutes": 120,
                "language_ui": "es-ES", "target_language": "en"
            },
            "learning_outcomes": [f"Master vocabulary and grammar of {data['title']}"],
            "blocks": [{
                "block_id": f"B{unit_id}", "title": "Lección Principal",
                "content": generate_varied_exercises(unit_id, data)
            }]
        }
        with open(os.path.join(COURSE_DIR, f"unit{unit_id}.json"), 'w', encoding='utf-8') as f:
            json.dump(unit_json, f, indent=2, ensure_ascii=False)
        print(f"Generated Unit {unit_id}")

if __name__ == "__main__":
    main()
