import json
import os
import re

def is_english(s):
    # Very simple heuristic: contains characters not typical of basic English 
    # OR is a known Spanish word from my manual audit
    if re.search(r'[ñáéíóúü]', s, re.I):
        return False
    # Common Spanish words found in audit
    spanish_words = ['NOMBREDEPILA', 'EDUCADOCORTS', 'CRUZALACALLE', 'OSODEPELUCHE', 'GUARDERA', 'CANICAS', 'PERTENENCIA']
    if s.upper() in spanish_words:
        return False
    # Meta words
    meta_words = ['BOTHAREUSED', 'ALLCANBEUSED', 'ALLARECOMMON', 'BOTHARERIGHT']
    if s.upper() in meta_words:
        return False
    return True

def audit_units():
    base_path = '/Users/lidia/Documents/focusonenglish/src/content/cursos/ingles-a1/'
    units = [f'unit{i}.json' for i in range(1, 61)]
    bad_units = []
    
    for unit in units:
        path = os.path.join(base_path, unit)
        if not os.path.exists(path):
            continue
            
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        is_bad = False
        for block in data.get('blocks', []):
            for interaction in block.get('content', []):
                if interaction.get('type') == 'crossword':
                    items = interaction.get('items', [])
                    for item in items:
                        clue = item.get('clue', '')
                        word = item.get('word', '')
                        
                        # 1. Answer is not English
                        if not is_english(word):
                            is_bad = True
                            print(f"{unit}: Non-English word '{word}'")
                            break
                        
                        # 2. Clue is English
                        match = re.search(r'Traducción de: (.*)', clue)
                        if match:
                            term = match.group(1).strip()
                            # Heuristic: if term has no Spanish characters and looks like English
                            # This is harder, but let's check if word and term are both English
                            if re.search(r'[a-zA-Z]{5,}', term) and not re.search(r'[ñáéíóúü]', term, re.I):
                                # If it's a common English greeting or phrase
                                if any(x in term.lower() for x in ['how are you', 'what do you do', 'where are you']):
                                    is_bad = True
                                    print(f"{unit}: English clue for English word: '{term}' -> '{word}'")
                                    break
                        
                        # 3. Mystery clues
                        if '???' in clue:
                            is_bad = True
                            print(f"{unit}: Mystery clue")
                            break
                    if is_bad: break
            if is_bad: break
        if is_bad:
            bad_units.append(unit)
            
    return bad_units

if __name__ == '__main__':
    bad_units = audit_units()
    print("\nBad units to fix:", bad_units)
    with open('bad_units.json', 'w') as f:
        json.dump(bad_units, f)
