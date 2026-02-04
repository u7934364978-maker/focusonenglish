import json
import os
import random
import re
from crossword_gen import CrosswordGenerator

def is_english(s):
    # Very simple heuristic: contains characters not typical of basic English 
    if re.search(r'[ñáéíóúü]', s, re.I):
        return False
    # Common Spanish words found in audit
    spanish_words = ['NOMBREDEPILA', 'EDUCADOCORTS', 'CRUZALACALLE', 'OSODEPELUCHE', 'GUARDERA', 'CANICAS', 'PERTENENCIA', 
                     'COLEGIO', 'COMETA', 'AULA', 'NOMBRE', 'GRACIAS', 'HOLA', 'ADIOS', 'AMIGO', 'MAÑANA', 'NOCHE', 'PORFAVOR',
                     'ABUELO', 'PADRINO', 'COMPAÑERO', 'NOVIO', 'DIVORCIADO', 'HERMANA', 'SOBRINA', 'GEMELOS', 'MUJER', 'ESPOSA']
    if s.upper() in spanish_words:
        return False
    # Meta words
    meta_words = ['BOTHAREUSED', 'ALLCANBEUSED', 'ALLARECOMMON', 'BOTHARERIGHT']
    if s.upper() in meta_words:
        return False
    return True

def get_vocab_from_unit(data):
    vocab = {} # word -> clue
    
    for block in data.get('blocks', []):
        for interaction in block.get('content', []):
            itype = interaction.get('type')
            if itype == 'multiple_choice':
                prompt = interaction.get('prompt_es', '')
                match = re.search(r'¿Cómo se dice \'(.*)\'', prompt)
                if match:
                    trans = match.group(1)
                    correct_id = interaction.get('correct_answer')
                    for opt in interaction.get('options', []):
                        if opt['id'] == correct_id:
                            raw_word = opt['text'].strip()
                            if ' ' not in raw_word: # ONLY SINGLE WORDS
                                word = raw_word.upper()
                                if 3 <= len(word) <= 12 and word.isalpha() and is_english(word):
                                    vocab[word] = f"Traducción de: {trans}"
            elif itype == 'matching':
                for pair in interaction.get('pairs', []):
                    # Check both sides, prefer English one
                    left = pair.get('left', '').strip()
                    right = pair.get('right', '').strip()
                    
                    if is_english(right) and not is_english(left):
                        word = right.upper()
                        trans = left
                    elif is_english(left) and not is_english(right):
                        word = left.upper()
                        trans = right
                    else:
                        # Fallback
                        word = right.upper()
                        trans = left
                        
                    if ' ' not in word and 3 <= len(word) <= 12 and word.isalpha() and is_english(word):
                        vocab[word] = f"Traducción de: {trans}"
            elif itype == 'flashcard':
                for card in interaction.get('flashcards', []):
                    raw_word = card.get('front', '').strip()
                    if ' ' not in raw_word:
                        word = raw_word.upper()
                        trans = card.get('back', '')
                        if 3 <= len(word) <= 12 and word.isalpha() and is_english(word):
                            vocab[word] = f"Traducción de: {trans}"
    return list(vocab.items())

def fix_units(target_unit=None):
    base_path = '/Users/lidia/Documents/focusonenglish/src/content/cursos/ingles-a1/'
    if target_unit:
        all_units = [target_unit]
    else:
        all_units = [f for f in os.listdir(base_path) if f.endswith('.json')]
    
    for unit in all_units:
        path = os.path.join(base_path, unit)
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        has_crossword = False
        for block in data.get('blocks', []):
            for interaction in block.get('content', []):
                if interaction.get('type') == 'crossword':
                    has_crossword = True
                    break
        
        if not has_crossword:
            continue

        vocab = get_vocab_from_unit(data)
        if len(vocab) < 5:
            # Add some generic A1 words if not enough
            generic = [("HELLO", "Traducción de: Hola"), ("GOODBYE", "Traducción de: Adiós"), 
                       ("THANKS", "Traducción de: Gracias"), ("FRIEND", "Traducción de: Amigo"),
                       ("NAME", "Traducción de: Nombre"), ("MORNING", "Traducción de: Mañana"),
                       ("NIGHT", "Traducción de: Noche"), ("PLEASE", "Traducción de: Por favor")]
            for g_word, g_clue in generic:
                if g_word not in [v[0] for v in vocab]:
                    vocab.append((g_word, g_clue))
            
        # Select 8 words
        selected = random.sample(vocab, min(len(vocab), 10))
        
        gen = CrosswordGenerator(size=20)
        new_items = gen.generate(selected)
        
        # Update JSON
        updated = False
        for block in data.get('blocks', []):
            for interaction in block.get('content', []):
                if interaction.get('type') == 'crossword':
                    interaction['items'] = new_items
                    interaction['prompt_es'] = "Completa el crucigrama con el vocabulario de la unidad:"
                    updated = True
                    
        if updated:
            with open(path, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"Fixed {unit} with {len(new_items)} words")

if __name__ == '__main__':
    import sys
    target = sys.argv[1] if len(sys.argv) > 1 else None
    fix_units(target)
