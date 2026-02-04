import json
import os
import re

CONTENT_DIR = './src/content/cursos/ingles-a1/'

def validate_crossword(file_name, items):
    grid = {}
    errors = []
    
    for item in items:
        word = item['word']
        row = item['row']
        col = item['col']
        direction = item['direction']
        
        for i in range(len(word)):
            r = row + i if direction == 'down' else row
            c = col if direction == 'down' else col + i
            key = f"{r},{c}"
            char = word[i]
            
            if key in grid and grid[key] != char:
                errors.append(f"Conflict at ({r}, {c}): '{grid[key]}' vs '{char}' (Word: {word})")
            grid[key] = char
            
    return errors

def main():
    files = [f for f in os.listdir(CONTENT_DIR) if f.endswith('.json')]
    files.sort(key=lambda x: int(re.search(r'\d+', x).group()) if re.search(r'\d+', x) else 0)
    
    total_conflicts = 0
    units_with_crosswords = 0
    
    print("--- Crossword Audit Report ---")
    
    for file in files:
        path = os.path.join(CONTENT_DIR, file)
        with open(path, 'r', encoding='utf-8') as f:
            content = json.load(f)
            
        has_crossword = False
        for block in content.get('blocks', []):
            for interaction in block.get('content', []):
                if interaction.get('type') == 'crossword':
                    has_crossword = True
                    units_with_crosswords += 1
                    errors = validate_crossword(file, interaction.get('items', []))
                    if errors:
                        print(f"\n[{file}] Unit: {content['course']['unit_id']}")
                        for err in errors:
                            print(f"  - {err}")
                        total_conflicts += len(errors)
    
    print(f"\nTotal units checked: {len(files)}")
    print(f"Units with crosswords: {units_with_crosswords}")
    print(f"Total conflicts found: {total_conflicts}")

if __name__ == "__main__":
    main()
