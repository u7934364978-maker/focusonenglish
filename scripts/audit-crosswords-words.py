import json
import os
import re

def audit_and_fix_crosswords():
    base_path = '/Users/lidia/Documents/focusonenglish/src/content/cursos/ingles-a1/'
    units = [f'unit{i}.json' for i in range(1, 61)]
    
    for unit in units:
        path = os.path.join(base_path, unit)
        if not os.path.exists(path):
            continue
            
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        changed = False
        for block in data.get('blocks', []):
            for interaction in block.get('content', []):
                if interaction.get('type') == 'crossword':
                    items = interaction.get('items', [])
                    for item in items:
                        clue = item.get('clue', '')
                        word = item.get('word', '')
                        
                        # Check for pattern "Traducción de: <English>"
                        # We want "Traducción de: <Spanish>"
                        match = re.search(r'Traducción de: (.*)', clue)
                        if match:
                            term = match.group(1).strip()
                            # Simple heuristic: if the term in clue is English-like 
                            # and word is Spanish-like, swap them if we can find the translation
                            # Or if the word is Spanish-like, it's probably wrong.
                            
                            # For now, let's just log them
                            print(f"{unit}: Clue='{clue}' Word='{word}'")

if __name__ == '__main__':
    audit_and_fix_crosswords()
