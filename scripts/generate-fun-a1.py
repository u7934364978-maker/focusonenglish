import json
import os
import random
import hashlib
from thematic_db import THEMATIC_UNITS, BASIC_VOCAB

# Configuration
COURSE_DIR = "src/content/cursos/ingles-a1"
UNITS_COUNT = 100
EXERCISES_PER_UNIT = 200

def get_audio_path(text):
    """Generate a stable path based on text hash to avoid duplicates"""
    if not text: return None
    clean_text = text.strip().lower()
    text_hash = hashlib.md5(clean_text.encode()).hexdigest()
    return f"/audio/courses/ingles-a1/shared/{text_hash}.mp3"

def generate_fun_exercises(unit_id, count):
    exercises = []
    unit_info = THEMATIC_UNITS.get(unit_id, {"title": "General", "block": "Misc"})
    theme = unit_info["title"]
    
    for i in range(1, count + 1):
        interaction_id = f"U{unit_id}_I{i}"
        ex_type_idx = i % 7
        
        # Logic to vary vocabulary based on theme index to ensure diversity
        pool_idx = (unit_id + i) % len(BASIC_VOCAB["animals"])
        animal, animal_es = BASIC_VOCAB["animals"][pool_idx]
        
        food_idx = (unit_id + i) % len(BASIC_VOCAB["food"])
        food, food_es = BASIC_VOCAB["food"][food_idx]
        
        action_idx = (unit_id + i) % len(BASIC_VOCAB["actions"])
        action, action_es = BASIC_VOCAB["actions"][action_idx]

        # 1. Mystery Box
        if ex_type_idx == 0:
            exercises.append({
                "interaction_id": interaction_id,
                "type": "multiple_choice",
                "prompt_es": f"📦 Mystery Box [{theme}]: {animal_es} en inglés es...",
                "stimulus_en": animal,
                "audioUrl": get_audio_path(animal),
                "options": [
                    {"id": "o1", "text": animal},
                    {"id": "o2", "text": "Something else"},
                    {"id": "o3", "text": "Not this"}
                ],
                "correct_answer": "o1",
                "mastery_tag": "vocabulary"
            })
            
        # 2. Emoji Translation
        elif ex_type_idx == 1:
            phrase = list(BASIC_VOCAB["emojis"].keys())[(unit_id + i) % len(BASIC_VOCAB["emojis"])]
            emoji = BASIC_VOCAB["emojis"][phrase]
            exercises.append({
                "interaction_id": interaction_id,
                "type": "matching",
                "prompt_es": f"🧩 Emoji challenge: {theme}",
                "stimulus_en": phrase,
                "audioUrl": get_audio_path(phrase),
                "pairs": [{"id": "p1", "left": phrase, "right": emoji}],
                "correct_answer": {"p1": "p1"},
                "mastery_tag": "communication"
            })

        # 3. Detective
        elif ex_type_idx == 2:
            sentence = f"The {animal} can {action}."
            exercises.append({
                "interaction_id": interaction_id,
                "type": "true_false",
                "prompt_es": f"🕵️ Detective [{theme}]: ¿Cierto o Falso?",
                "stimulus_en": sentence,
                "audioUrl": get_audio_path(sentence),
                "correct_answer": True,
                "mastery_tag": "grammar"
            })

        # 4. Speed Builder
        elif ex_type_idx == 3:
            full = f"I like {food}"
            exercises.append({
                "interaction_id": interaction_id,
                "type": "reorder_words",
                "prompt_es": f"⚡ Speed builder: {theme}",
                "stimulus_en": full,
                "audioUrl": get_audio_path(full),
                "options": [{"id": f"w{idx}", "text": word} for idx, word in enumerate(full.split())],
                "correct_answer": [f"w{idx}" for idx in range(len(full.split()))],
                "mastery_tag": "syntax"
            })

        # 5. Odd One Out
        elif ex_type_idx == 4:
            exercises.append({
                "interaction_id": interaction_id,
                "type": "multiple_choice",
                "prompt_es": "🚫 Odd one out!",
                "options": [
                    {"id": "o1", "text": animal},
                    {"id": "o2", "text": food},
                    {"id": "o3", "text": "X-9000 Robot"}
                ],
                "correct_answer": "o3",
                "mastery_tag": "vocabulary"
            })

        # 6. Scenario
        elif ex_type_idx == 5:
            exercises.append({
                "interaction_id": interaction_id,
                "type": "transformation",
                "prompt_es": f"🎬 Scenario [{theme}]: {action_es} -> ...",
                "stimulus_en": action,
                "audioUrl": get_audio_path(action),
                "correct_answer": action,
                "mastery_tag": "communication"
            })

        # 7. Match
        else:
            exercises.append({
                "interaction_id": interaction_id,
                "type": "matching",
                "prompt_es": f"🔍 Word Hunt: {theme}",
                "pairs": [{"id": "m1", "left": animal, "right": animal_es}],
                "correct_answer": {"m1": "m1"},
                "mastery_tag": "vocabulary"
            })

    return exercises

def main():
    os.makedirs(COURSE_DIR, exist_ok=True)
    for unit_id in range(1, UNITS_COUNT + 1):
        info = THEMATIC_UNITS.get(unit_id)
        unit_data = {
            "course": {
                "unit_id": f"unit{unit_id}",
                "unit_title": info["title"],
                "level": "A1",
                "total_duration_minutes": 60,
                "language_ui": "es-ES",
                "target_language": "en"
            },
            "learning_outcomes": [f"Master {info['title']}"],
            "blocks": [{
                "block_id": f"B{unit_id}",
                "title": info["block"],
                "duration_minutes": 60,
                "content": generate_fun_exercises(unit_id, EXERCISES_PER_UNIT)
            }]
        }
        with open(os.path.join(COURSE_DIR, f"unit{unit_id}.json"), 'w', encoding='utf-8') as f:
            json.dump(unit_data, f, indent=2, ensure_ascii=False)
    print(f"Generated {UNITS_COUNT} units with thematic data.")

if __name__ == "__main__":
    main()
