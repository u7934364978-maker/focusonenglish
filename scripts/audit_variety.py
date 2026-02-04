import json
import os
from collections import Counter

def audit_variety():
    base_path = 'src/content/cursos/ingles-a1/'
    
    print(f"🔍 Starting variety audit in {base_path}...")
    
    for i in range(1, 61):
        file_path = os.path.join(base_path, f'unit{i}.json')
        if not os.path.exists(file_path):
            continue
            
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            exercises = data.get('exercises', [])
            types = [ex.get('type') for ex in exercises]
            count = Counter(types)
            
            # Check if any type is missing or too dominant
            total = len(exercises)
            if total == 0: continue
            
            dominant = [t for t, c in count.items() if c / total > 0.4]
            missing = [t for t in ['multiple_choice', 'matching', 'transformation', 'true_false', 'reorder_words', 'short_writing'] if t not in count]
            
            if dominant or missing:
                print(f"Unit {i}: Total {total} | Variety: {dict(count)}")
                if dominant: print(f"  ⚠️  Dominant types: {dominant}")
                if missing: print(f"  ⚠️  Missing types: {missing}")

if __name__ == "__main__":
    audit_variety()
