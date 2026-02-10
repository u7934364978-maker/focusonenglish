import os
import json

def is_meaningful_text(text):
    if not text:
        return False
    # Reading texts are usually longer than a simple sentence.
    # But let's be conservative. If it's less than 40 chars, it's likely just a prompt or a single sentence.
    return len(text.strip()) > 40

def audit_reading_exercises(directory):
    results = []
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.json'):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        
                        if 'blocks' not in data:
                            continue
                            
                        for block_idx, block in enumerate(data['blocks']):
                            # Track if any interaction in this block provides a stimulus
                            block_stimulus = None
                            for interaction in block.get('content', []):
                                stim = interaction.get('stimulus_en') or interaction.get('text') or interaction.get('textPassage') or interaction.get('scenario')
                                if is_meaningful_text(stim):
                                    block_stimulus = stim
                                    # Once we find a block stimulus, we can stop looking in this block
                                    # but we continue to check all interactions for the reading tag.
                            
                            for int_idx, interaction in enumerate(block.get('content', [])):
                                mastery_tag = interaction.get('mastery_tag')
                                concept_tags = interaction.get('concept_tags', [])
                                is_reading = mastery_tag == 'reading' or 'reading' in concept_tags
                                
                                if is_reading:
                                    own_stimulus = interaction.get('stimulus_en') or interaction.get('text') or interaction.get('textPassage') or interaction.get('scenario')
                                    
                                    if not is_meaningful_text(own_stimulus) and not is_meaningful_text(block_stimulus):
                                        results.append({
                                            'file': path,
                                            'block_idx': block_idx,
                                            'interaction_idx': int_idx,
                                            'interaction_id': interaction.get('interaction_id'),
                                            'prompt': interaction.get('prompt_es') or interaction.get('prompt'),
                                            'options': [o.get('text') for o in interaction.get('options', [])] if interaction.get('options') else None,
                                            'correct_answer': interaction.get('correct_answer')
                                        })
                except Exception as e:
                    print(f"Error reading {path}: {e}")
                    
    return results

if __name__ == "__main__":
    missing = audit_reading_exercises('src/content/cursos')
    print(json.dumps(missing, indent=2, ensure_ascii=False))
