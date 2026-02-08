import json
import os
import random
import re
import sys

# Asegurar que podemos importar desde el mismo directorio
sys.path.append(os.path.dirname(__file__))
try:
    from expand_a2_course import PEDAGOGICAL_DATA, UNIT_TITLES
except ImportError:
    # Si falla la importación directa, intentamos añadir el path absoluto
    current_dir = os.path.dirname(os.path.abspath(__file__))
    sys.path.append(current_dir)
    from expand_a2_course import PEDAGOGICAL_DATA, UNIT_TITLES

# Configuración A2 Mega Course
COURSE_DIR = "src/content/cursos/ingles-a2"
UNITS_COUNT = 60
EXERCISES_PER_UNIT = 300

# Diccionario de traducción extendido para A2 para las pistas en las transformaciones
HINTS = {
    "am": "ser/estar (yo)", "is": "ser/estar (él/ella/esto)", "are": "ser/estar (tú/nosotros/ellos)",
    "have": "tener", "has": "tiene", "do": "hacer", "does": "hace",
    "go": "ir", "goes": "va", "want": "querer", "wants": "quiere",
    "like": "gustar", "likes": "gusta", "play": "jugar", "plays": "juega",
    "can": "poder", "could": "podía/podría", "should": "debería", "must": "deber (obligación)",
    "have to": "tener que", "will": "futuro (voluntad/predicción)", "going to": "ir a (plan)",
    "who": "quién/que (persona)", "which": "cuál/que (cosa)", "that": "que",
    "where": "dónde", "when": "cuándo", "why": "por qué", "how": "cómo",
    "my": "mi", "your": "tu", "his": "su (él)", "her": "su (ella)", "its": "su (ello)",
    "our": "nuestro", "their": "su (ellos)",
    "be": "ser/estar", "have got": "tener", "has got": "tiene",
    "live": "vivir", "speak": "hablar", "work": "trabajar", "know": "saber/conocer",
    "wear": "llevar puesto", "look": "parecer/mirar", "think": "pensar", "seem": "parecer",
    "visit": "visitar", "get up": "levantarse", "study": "estudiar", "wash": "lavar",
    "clean": "limpiar", "earn": "ganar (dinero)", "pass": "aprobar/pasar", "learn": "aprender",
    "feel": "sentirse", "understand": "entender", "make": "hacer/fabricar"
}

def get_unit_data(unit_id):
    if unit_id in PEDAGOGICAL_DATA:
        return PEDAGOGICAL_DATA[unit_id]
    
    # Datos de respaldo si falta alguna unidad
    return {
        "grammar": [("I (study) ________ English.", "am studying"), ("He (like) ________ pizza.", "likes")],
        "vocab": [("Study", "Estudiar"), ("Food", "Comida"), ("Happy", "Feliz")],
        "sentences": [f"Welcome to unit {unit_id}.", "Practicing English is fun."],
        "communication": [("How are you?", "Fine, thanks.", ["I'm sad.", "It's blue."])]
    }

def generate_exercises(unit_id, count):
    data = get_unit_data(unit_id)
    vocab_pool = list(data.get("vocab", []))
    grammar_pool = list(data.get("grammar", []))
    comm_pool = list(data.get("communication", []))
    sentence_pool = list(data.get("sentences", []))
    
    # Fallbacks de seguridad
    if not vocab_pool: vocab_pool = [("English", "Inglés"), ("Word", "Palabra")]
    if not grammar_pool: grammar_pool = [("I (be) ________ a student.", "am")]
    if not sentence_pool: sentence_pool = ["I love learning English.", "This is a great lesson."]
    
    exercises = []
    
    # Mezclamos inicialmente para variedad
    random.shuffle(vocab_pool)
    random.shuffle(grammar_pool)
    if comm_pool: random.shuffle(comm_pool)
    random.shuffle(sentence_pool)
    
    for i in range(1, count + 1):
        interaction_id = f"U{unit_id}_I{i}"
        # 7 tipos de ejercicios para A2 para máxima variedad
        type_choice = i % 7
        
        if type_choice == 0: # Multiple Choice Vocab
            word, trans = vocab_pool[i % len(vocab_pool)]
            prompt = f"¿Cómo se dice '{trans}' en inglés?"
            other_options = [w for w, t in vocab_pool if w != word]
            if len(other_options) < 2: other_options = ["House", "Car", "Book"]
            distractors = random.sample(other_options, min(len(other_options), 2))
            options = [{"id": "o1", "text": word}]
            for idx, d in enumerate(distractors):
                options.append({"id": f"o{idx+2}", "text": d})
            random.shuffle(options)
            exercises.append({
                "interaction_id": interaction_id, "type": "multiple_choice",
                "prompt_es": prompt, "options": options,
                "correct_answer": [o["id"] for o in options if o["text"] == word][0],
                "mastery_tag": "vocabulary"
            })
            
        elif type_choice == 1: # Matching
            offset = (i // 7) % len(vocab_pool)
            sample_size = min(len(vocab_pool), 4)
            selected = [vocab_pool[(offset + j) % len(vocab_pool)] for j in range(sample_size)]
            pairs = [{"id": f"p{idx}", "left": w, "right": t} for idx, (w, t) in enumerate(selected)]
            exercises.append({
                "interaction_id": interaction_id, "type": "matching",
                "prompt_es": "Une la palabra con su traducción correcta:",
                "pairs": pairs, "correct_answer": {p["id"]: p["id"] for p in pairs},
                "mastery_tag": "vocabulary"
            })
            
        elif type_choice == 2: # Transformation / Fill Blanks
            stimulus, correct = grammar_pool[i % len(grammar_pool)]
            # Aplicar traducción de pistas
            match = re.search(r'\((.*?)\)', stimulus)
            if match:
                hint_content = match.group(1).lower()
                # Limpiar si tiene "/"
                hint_parts = hint_content.split('/')
                translated_parts = [HINTS.get(p.strip(), p.strip()) for p in hint_parts]
                translated_hint = " / ".join(translated_parts)
                stimulus = stimulus.replace(f"({match.group(1)})", f"({translated_hint})")
            
            exercises.append({
                "interaction_id": interaction_id, "type": "fill_blanks",
                "prompt_es": "Completa con la forma correcta:",
                "stimulus_en": stimulus, "correct_answer": correct,
                "mastery_tag": "grammar"
            })
            
        elif type_choice == 3: # True/False (Syntax & Grammar check)
            sentence = sentence_pool[i % len(sentence_pool)]
            is_correct = (i // 7) % 2 == 0
            display_text = sentence
            if not is_correct:
                words = sentence.replace(".", "").replace("!", "").replace("?", "").split()
                if len(words) >= 2:
                    # Intercambiar orden de las primeras dos palabras para crear error sintáctico
                    words[0], words[1] = words[1], words[0]
                    display_text = " ".join(words).capitalize()
                else: 
                    display_text = sentence + " not"
            
            exercises.append({
                "interaction_id": interaction_id, "type": "true_false",
                "prompt_es": f"¿Es gramaticalmente correcta esta frase?: \"{display_text}\"",
                "correct_answer": is_correct, "mastery_tag": "syntax"
            })
            
        elif type_choice == 4: # Reorder Words
            sentence = sentence_pool[i % len(sentence_pool)].replace(".", "").replace("!", "").replace("?", "")
            words = sentence.split()
            options = [{"id": f"w{idx}", "text": word} for idx, word in enumerate(words)]
            correct_order = [o["id"] for o in options]
            shuffled = list(options)
            while len(words) > 1 and [o["id"] for o in shuffled] == correct_order:
                random.shuffle(shuffled)
            
            exercises.append({
                "interaction_id": interaction_id, "type": "reorder_words",
                "prompt_es": "Ordena las palabras para formar una frase correcta:",
                "options": shuffled, "correct_answer": correct_order,
                "mastery_tag": "syntax"
            })
            
        elif type_choice == 5: # Natural Response (Communication)
            if comm_pool:
                q, a, dists = comm_pool[i % len(comm_pool)]
                options = [{"id": "o1", "text": a}]
                for idx, d in enumerate(dists[:2]):
                    options.append({"id": f"o{idx+2}", "text": d})
                random.shuffle(options)
                exercises.append({
                    "interaction_id": interaction_id, "type": "multiple_choice",
                    "prompt_es": f"Elige la respuesta más natural para: \"{q}\"",
                    "options": options,
                    "correct_answer": [o["id"] for o in options if o["text"] == a][0],
                    "mastery_tag": "communication"
                })
            else: # Fallback a MC Vocab
                word, trans = vocab_pool[i % len(vocab_pool)]
                exercises.append({
                    "interaction_id": interaction_id, "type": "multiple_choice",
                    "prompt_es": f"¿Cómo se dice '{trans}' en inglés?",
                    "options": [{"id": "o1", "text": word}, {"id": "o2", "text": "Wrong choice"}],
                    "correct_answer": "o1", "mastery_tag": "vocabulary"
                })
                
        else: # Short Writing (Translation)
            word, trans = vocab_pool[i % len(vocab_pool)]
            exercises.append({
                "interaction_id": interaction_id, "type": "short_writing",
                "prompt_es": "Traduce al inglés:", "stimulus_es": trans,
                "correct_answer": word, "mastery_tag": "vocabulary"
            })
            
    return exercises

def main():
    os.makedirs(COURSE_DIR, exist_ok=True)
    for unit_id in range(1, UNITS_COUNT + 1):
        title = UNIT_TITLES.get(unit_id, f"Unit {unit_id}")
        unit_json = {
            "course": {
                "language_ui": "es-ES", "target_language": "en", "level": "A2",
                "unit_id": f"unit{unit_id}", "unit_title": title,
                "total_duration_minutes": 120
            },
            "blocks": [{
                "block_id": f"B{unit_id}", 
                "title": title, 
                "content": generate_exercises(unit_id, EXERCISES_PER_UNIT)
            }]
        }
        filename = os.path.join(COURSE_DIR, f"unit{unit_id}.json")
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(unit_json, f, indent=2, ensure_ascii=False)
        print(f"Generada Unidad {unit_id}: {title} con {EXERCISES_PER_UNIT} ejercicios.")

if __name__ == "__main__":
    main()
