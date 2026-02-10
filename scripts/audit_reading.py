import os
import json

def audit_reading_exercises(directory):
    missing_text_exercises = []
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.json'):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        
                        if 'blocks' not in data:
                            continue
                            
                        for block in data['blocks']:
                            for interaction in block.get('content', []):
                                # Check for reading exercises
                                mastery_tag = interaction.get('mastery_tag')
                                concept_tags = interaction.get('concept_tags', [])
                                is_reading = mastery_tag == 'reading' or 'reading' in concept_tags
                                
                                if is_reading:
                                    # Check if it has stimulus
                                    stimulus = interaction.get('stimulus_en') or interaction.get('text') or interaction.get('textPassage') or interaction.get('scenario')
                                    
                                    # Special case: it might be a block stimulus (captured by PremiumSession)
                                    # We need to check if ANY item in the block has a stimulus
                                    block_has_stimulus = any(
                                        item.get('stimulus_en') or item.get('text') or item.get('textPassage') or item.get('scenario')
                                        for item in block.get('content', [])
                                    )
                                    
                                    if not stimulus and not block_has_stimulus:
                                        missing_text_exercises.append({
                                            'file': path,
                                            'interaction_id': interaction.get('interaction_id'),
                                            'prompt': interaction.get('prompt_es') or interaction.get('prompt')
                                        })
                except Exception as e:
                    print(f"Error reading {path}: {e}")
                    
    return missing_text_exercises

if __name__ == "__main__":
    missing = audit_reading_exercises('src/content/cursos')
    print(f"Found {len(missing)} reading exercises without text:")
    for m in missing:
        print(f"File: {m['file']}")
        print(f"  ID: {m['interaction_id']}")
        print(f"  Prompt: {m['prompt']}")
        print("-" * 20)
