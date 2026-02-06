import json
import os
from collections import defaultdict

def get_interaction_key(interaction):
    content = dict(interaction)
    if 'interaction_id' in content:
        del content['interaction_id']
    return json.dumps(content, sort_keys=True)

def audit_per_unit():
    base_path = 'src/content/cursos/ingles-a2'
    files = [f for f in os.listdir(base_path) if f.startswith('unit') and f.endswith('.json')]
    files.sort(key=lambda x: int(x.replace('unit', '').replace('.json', '')))

    seen_globally = set()
    
    for filename in files:
        unit_path = os.path.join(base_path, filename)
        with open(unit_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            unit_id = data['course']['unit_id']
            interactions = []
            for block in data['blocks']:
                interactions.extend(block['content'])
            
            total = len(interactions)
            duplicates_in_unit = 0
            seen_in_unit = set()
            new_to_course = 0
            
            for inter in interactions:
                key = get_interaction_key(inter)
                if key in seen_in_unit:
                    duplicates_in_unit += 1
                else:
                    seen_in_unit.add(key)
                    if key not in seen_globally:
                        new_to_course += 1
                        seen_globally.add(key)
            
            print(f"Unit {unit_id}: Total={total}, New={new_to_course}, DupsInUnit={duplicates_in_unit}, RepeatedFromPrev={total - new_to_course - duplicates_in_unit}")

if __name__ == "__main__":
    audit_per_unit()
