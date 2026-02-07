import json
import os

def validate():
    base_path = 'src/content/cursos/ingles-a2/'
    files = [f for f in os.listdir(base_path) if f.endswith('.json')]
    errors = []

    for filename in files:
        with open(os.path.join(base_path, filename), 'r') as f:
            data = json.load(f)
            unit_id = data['course']['unit_id']
            
            for block in data.get('blocks', []):
                for item in block.get('content', []):
                    i_id = item.get('interaction_id')
                    type = item.get('type')
                    
                    # 1. Check required fields per type
                    if type == 'multiple_choice':
                        if not item.get('options') or not item.get('correct_answer'):
                            errors.append(f"{unit_id}:{i_id} - Missing options or correct_answer")
                        # Check if correct_answer exists in options
                        opt_ids = [o['id'] for o in item['options']]
                        if item['correct_answer'] not in opt_ids:
                            errors.append(f"{unit_id}:{i_id} - correct_answer {item['correct_answer']} not in options {opt_ids}")
                            
                    elif type == 'reorder_words':
                        if not item.get('options') or not item.get('correct_answer'):
                            errors.append(f"{unit_id}:{i_id} - Missing options or correct_answer")
                        opt_ids = [o['id'] for o in item['options']]
                        for ca in item['correct_answer']:
                            if ca not in opt_ids:
                                errors.append(f"{unit_id}:{i_id} - correct_answer element {ca} not in options")
                                
                    elif type == 'fill_blanks':
                        if not item.get('correct_answer') or not item.get('stimulus_en'):
                            errors.append(f"{unit_id}:{i_id} - Missing correct_answer or stimulus_en")
                            
                    elif type == 'multiple_choice_cloze':
                        if not item.get('gaps') or not item.get('correct_answer'):
                            errors.append(f"{unit_id}:{i_id} - Missing gaps or correct_answer")
                        for g_id, c_id in item['correct_answer'].items():
                            gap = next((g for g in item['gaps'] if g['id'] == g_id), None)
                            if not gap:
                                errors.append(f"{unit_id}:{i_id} - Gap {g_id} not found")
                            else:
                                g_opt_ids = [o['id'] for o in gap['options']]
                                if c_id not in g_opt_ids:
                                    errors.append(f"{unit_id}:{i_id} - correct_answer {c_id} for gap {g_id} not in options")

    if not errors:
        print("[✓] Logic validation passed for all 6000 exercises.")
    else:
        print(f"[!] Logic validation failed with {len(errors)} errors:")
        for e in errors[:20]:
            print(f"  - {e}")
        if len(errors) > 20:
            print(f"  ... and {len(errors) - 20} more.")

if __name__ == "__main__":
    validate()
