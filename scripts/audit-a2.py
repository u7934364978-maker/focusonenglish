import json
import os
import hashlib
from collections import defaultdict

def get_interaction_key(interaction):
    # Create a key based on content to identify duplicates
    # Ignore interaction_id
    content = dict(interaction)
    if 'interaction_id' in content:
        del content['interaction_id']
    
    # Sort dictionaries for consistent hashing
    return json.dumps(content, sort_keys=True)

def audit_a2():
    base_path = 'src/content/cursos/ingles-a2'
    files = [f for f in os.listdir(base_path) if f.startswith('unit') and f.endswith('.json')]
    files.sort(key=lambda x: int(x.replace('unit', '').replace('.json', '')))

    all_interactions = defaultdict(list)
    
    for filename in files:
        unit_path = os.path.join(base_path, filename)
        with open(unit_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            unit_id = data['course']['unit_id']
            for block in data['blocks']:
                for interaction in block['content']:
                    key = get_interaction_key(interaction)
                    all_interactions[key].append({
                        'unit': unit_id,
                        'id': interaction.get('interaction_id'),
                        'type': interaction.get('type')
                    })

    duplicates = {k: v for k, v in all_interactions.items() if len(v) > 1}
    
    print(f"Total unique interactions: {len(all_interactions)}")
    print(f"Total duplicated content keys: {len(duplicates)}")
    
    # Sort duplicates by frequency
    sorted_duplicates = sorted(duplicates.items(), key=lambda x: len(x[1]), reverse=True)
    
    for key, occs in sorted_duplicates[:10]:
        print(f"\nFrequency: {len(occs)}")
        print(f"Sample Interaction: {occs[0]['id']} in {occs[0]['unit']}")
        print(f"Appearances: {', '.join([f['unit'] + ':' + str(f['id']) for f in occs])}")

if __name__ == "__main__":
    audit_a2()
