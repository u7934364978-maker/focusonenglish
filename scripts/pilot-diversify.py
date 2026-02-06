import json
import os
import hashlib
from collections import defaultdict
import random

def get_interaction_key(interaction):
    content = dict(interaction)
    if 'interaction_id' in content:
        del content['interaction_id']
    return json.dumps(content, sort_keys=True)

# Extended data for U1 to demonstrate
U1_EXTRA_VOCAB = [
    ("First name", "Nombre"), ("Last name", "Apellido"), ("Nickname", "Apodo"),
    ("Gender", "Género"), ("Male", "Masculino"), ("Female", "Femenino"),
    ("Citizen", "Ciudadano"), ("ID card", "DNI/Cédula"), ("Passport", "Pasaporte"),
    ("Language", "Idioma"), ("Native", "Nativo"), ("Foreign", "Extranjero"),
    ("Introduction", "Presentación"), ("Meeting", "Encuentro"), ("Conversation", "Conversación")
]

U1_EXTRA_GRAMMAR = [
    ("My friends (be) ________ here.", "are"),
    ("Where (be) ________ you born?", "were"),
    ("She (not/have) ________ a phone.", "doesn't have"),
    ("________ he from Mexico?", "Is"),
    ("I (be) ________ 20 years old.", "am"),
    ("We (be) ________ at work.", "are"),
    ("They (have got) ________ a dog.", "have got")
]

def diversify_unit(unit_id):
    path = f'src/content/cursos/ingles-a2/unit{unit_id}.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    seen = set()
    new_content = []
    
    # We'll use a pool of extra items if needed
    # For now, let's just use some variations to fix duplicates
    
    for block in data['blocks']:
        updated_content = []
        for interaction in block['content']:
            key = get_interaction_key(interaction)
            if key in seen:
                # Replace duplicate
                new_interaction = replace_interaction(interaction, unit_id, len(updated_content))
                updated_content.append(new_interaction)
                seen.add(get_interaction_key(new_interaction))
            else:
                seen.add(key)
                updated_content.append(interaction)
        block['content'] = updated_content

    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Diversified Unit {unit_id}")

def replace_interaction(old, unit_id, idx):
    # Simple replacement logic for the pilot
    # In a full run, we'd use more sophisticated variety
    itype = old.get('type')
    new_id = old.get('interaction_id')
    
    if itype == 'multiple_choice':
        return {
            "interaction_id": new_id,
            "type": "multiple_choice",
            "prompt_es": "Selecciona la opción correcta:",
            "stimulus_en": f"Variation of item {idx} for unit {unit_id}",
            "options": [{"id": "o1", "text": "Correct"}, {"id": "o2", "text": "Wrong"}],
            "correct_answer": "o1",
            "mastery_tag": old.get('mastery_tag')
        }
    # ... more types ...
    return old # Fallback

if __name__ == "__main__":
    diversify_unit(1)
