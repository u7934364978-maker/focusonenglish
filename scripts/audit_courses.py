import json
import os
import re

def audit_interaction(interaction, filename):
    fixes = 0
    
    # 1. Fix placeholder options in multiple_choice (e.g., "r14", "r3")
    if interaction.get('type') == 'multiple_choice' and 'options' in interaction:
        replacements = [
            "I'm not sure, could you repeat that?",
            "That sounds interesting, tell me more.",
            "I don't think so, but thanks for asking.",
            "Really? I had no idea about that.",
            "That's a good point, I agree with you.",
            "Sorry, I have to go now. See you later!",
            "It depends on the situation, I guess.",
            "I've already done that, thanks anyway.",
            "That's exactly what I was thinking.",
            "I'm afraid I can't help you with that.",
            "Would you like to join us for dinner?",
            "I prefer to stay at home and relax.",
            "It's been a long day, I'm quite tired.",
            "That makes perfect sense to me.",
            "I'll think about it and let you know."
        ]
        for i, opt in enumerate(interaction['options']):
            if re.match(r'^r\d+$', str(opt.get('text', ''))):
                # Use interaction_id to keep replacement stable
                idx = hash(interaction.get('interaction_id', '')) % len(replacements)
                opt['text'] = replacements[(idx + i) % len(replacements)]
                fixes += 1

    # 2. Add correct_sentence_en for true_false
    if interaction.get('type') == 'true_false':
        if interaction.get('correct_answer') is False and not interaction.get('correct_sentence_en'):
            prompt = interaction.get('prompt_es', '')
            # print(f"Found true_false in {filename}: {prompt}")
            match = re.search(r':\s*"([^"]+)"', prompt)
            if not match:
                match = re.search(r' frase\?:\s*([^?]+)', prompt)
            
            if match:
                wrong_sentence = match.group(1).strip()
                correct = wrong_sentence
                
                # More robust pattern matching for common mistakes
                correct = re.sub(r'\bstarted I working\b', 'I started working', correct)
                correct = re.sub(r'\bmoving to rural to areas find\b', 'moving to rural areas to find', correct)
                correct = re.sub(r'\bI used to for go a run\b', 'I used to go for a run', correct)
                correct = re.sub(r'\bare moving to rural to areas find\b', 'are moving to rural areas to find', correct)
                correct = re.sub(r'\bbut now I has a house\b', 'but now I have a house', correct)
                correct = re.sub(r'\bin countryside\. the\b', 'in the countryside.', correct)
                correct = re.sub(r'\bChanging your is habits\b', 'Changing your habits is', correct)
                correct = re.sub(r'\bin urban this environment\b', 'in this urban environment', correct)
                correct = re.sub(r'\bI am gett used to\b', 'I am getting used to', correct)
                correct = re.sub(r'\bIt important is to\b', 'It is important to', correct)
                correct = re.sub(r'\bis envy the of\b', 'is the envy of', correct)
                correct = re.sub(r'\bsince started I working\b', 'since I started working', correct)
                
                # A2 Specific fixes
                correct = re.sub(r'\bWe learning are more English\b', 'We are learning more English', correct)
                correct = re.sub(r'\bThere are a cat\b', 'There is a cat', correct)
                correct = re.sub(r'\bI has a dog\b', 'I have a dog', correct)
                correct = re.sub(r'\bShe do not like\b', 'She does not like', correct)
                correct = re.sub(r'\bThey is happy\b', 'They are happy', correct)
                correct = re.sub(r'\bHe go to school\b', 'He goes to school', correct)
                
                # B1 Specific fixes (Cambridge standards)
                correct = re.sub(r'\bI have went to London\b', 'I have been to London', correct)
                correct = re.sub(r'\bIf I will see him\b', 'If I see him', correct)
                correct = re.sub(r'\bI am working here since\b', 'I have been working here since', correct)
                correct = re.sub(r'\bHe told that he was tired\b', 'He said that he was tired', correct)
                correct = re.sub(r'\bShe said me that\b', 'She told me that', correct)
                correct = re.sub(r'\bI am agree with you\b', 'I agree with you', correct)
                correct = re.sub(r'\bHe is more tall than\b', 'He is taller than', correct)
                correct = re.sub(r'\bI must to go\b', 'I must go', correct)
                correct = re.sub(r'\bI should to see\b', 'I should see', correct)
                correct = re.sub(r'\bWe a have very busy itinerary\b', 'We have a very busy itinerary', correct)
                correct = re.sub(r'\bWe recycle must more\b', 'We must recycle more', correct)
                
                if correct != wrong_sentence:
                    interaction['correct_sentence_en'] = correct
                    fixes += 1
                else:
                    # If we can't fix it, let's at least try to remove weird trailing words
                    # like "the" at the end of a sentence that shouldn't be there
                    if correct.endswith('. the'):
                        interaction['correct_sentence_en'] = correct.replace('. the', '.')
                        fixes += 1

    return fixes

def process_file(filepath):
    # print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError:
            print(f"Error decoding {filepath}")
            return

    modified = False
    interactions_seen = set()
    new_blocks = []

    for block in data.get('blocks', []):
        new_content = []
        for item in block.get('content', []):
            # Check for video interactions
            if item.get('video') and 'interactions' in item['video']:
                v_modified = False
                for v_interaction in item['video']['interactions']:
                    if audit_interaction(v_interaction, filepath) > 0:
                        v_modified = True
                if v_modified:
                    modified = True
                new_content.append(item)
                continue

            if not item.get('interaction_id'):
                new_content.append(item)
                continue

            # Improved de-duplication: check prompt/stimulus/options
            # Serialize some parts to make them hashable
            opts = ""
            if 'options' in item:
                opts = "|".join([str(o.get('text', '')) for o in item['options']])
            
            content_sig = (
                item.get('type'),
                item.get('stimulus_en'),
                item.get('prompt_es'),
                opts
            )
            
            if content_sig in interactions_seen:
                modified = True
                continue
            
            interactions_seen.add(content_sig)
            
            if audit_interaction(item, filepath) > 0:
                modified = True
            
            new_content.append(item)
        
        block['content'] = new_content
        new_blocks.append(block)

    data['blocks'] = new_blocks

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        return True
    return False

def main():
    base_dir = 'src/content/cursos'
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.json'):
                path = os.path.join(root, file)
                if process_file(path):
                    print(f"Updated {path}")

if __name__ == '__main__':
    main()
