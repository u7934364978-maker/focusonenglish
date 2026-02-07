import json
import os
from collections import defaultdict

def audit_duplicates():
    base_path = 'src/content/cursos/ingles-a2/'
    content_map = defaultdict(list)
    id_map = defaultdict(list)
    
    # Fields that represent the core "enunciado" or content
    content_fields = [
        'stimulus_en', 'stimulus_es', 'sentence', 'text', 'tts_en', 
        'correct_answer', 'main_text', 'instruction_en', 'prompt_es',
        'pairs', 'items', 'matches', 'categories', 'cards', 'gaps', 'options'
    ]

    files = [f for f in os.listdir(base_path) if f.endswith('.json')]
    
    total_exercises = 0
    
    for filename in files:
        with open(os.path.join(base_path, filename), 'r') as f:
            try:
                data = json.load(f)
            except Exception as e:
                print(f"Error loading {filename}: {e}")
                continue
                
            for block in data.get('blocks', []):
                for item in block.get('content', []):
                    total_exercises += 1
                    
                    # Check for duplicate Interaction IDs
                    iid = item.get('interaction_id')
                    if iid:
                        id_map[iid].append(filename)
                    
                    # Extract core content for duplication check
                    core_content = []
                    for field in content_fields:
                        val = item.get(field)
                        if val:
                            if isinstance(val, dict):
                                val_str = json.dumps(val, sort_keys=True)
                                core_content.append((field, val_str))
                            elif isinstance(val, list):
                                val_str = json.dumps(val, sort_keys=True)
                                core_content.append((field, val_str))
                            else:
                                core_content.append((field, str(val)))
                    
                    if core_content:
                        content_key = tuple(sorted(core_content))
                        content_map[content_key].append({
                            'file': filename,
                            'id': iid,
                            'type': item.get('type')
                        })

    print(f"Total exercises scanned: {total_exercises}")
    
    # Report ID duplicates
    id_duplicates = {k: v for k, v in id_map.items() if len(v) > 1}
    if id_duplicates:
        print("\n[!] Duplicate Interaction IDs found:")
        for iid, files in id_duplicates.items():
            print(f"  - {iid}: {files}")
    else:
        print("\n[✓] No duplicate Interaction IDs found.")

    # Report Content duplicates
    content_duplicates = {k: v for k, v in content_map.items() if len(v) > 1}
    if content_duplicates:
        print(f"\n[!] Duplicate exercise content found ({len(content_duplicates)} unique duplicates):")
        # Show a few examples if many
        limit = 20
        count = 0
        for key, occurrences in content_duplicates.items():
            if count >= limit:
                print(f"  ... and {len(content_duplicates) - limit} more.")
                break
            
            # Print the content
            content_desc = " | ".join([f"{k}: {v[:100]}..." if isinstance(v, str) and len(v) > 100 else f"{k}: {v}" for k, v in key if k != 'options'])
            print(f"  - Content: {content_desc}")
            for occ in occurrences:
                print(f"    - Location: {occ['file']} (ID: {occ['id']}, Type: {occ['type']})")
            count += 1
            print("-" * 20)
    else:
        print("\n[✓] No duplicate exercise content found.")

if __name__ == "__main__":
    audit_duplicates()
