import json
import os
from collections import defaultdict

def audit_units(directory):
    for filename in sorted(os.listdir(directory)):
        if filename.endswith('.json') and filename.startswith('unit'):
            file_path = os.path.join(directory, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                try:
                    data = json.load(f)
                    check_unit(filename, data)
                except Exception as e:
                    print(f"Error parsing {filename}: {e}")

def check_unit(filename, data):
    print(f"\n--- Auditing {filename} ---")
    interactions = []
    for block in data.get('blocks', []):
        interactions.extend(block.get('content', []))
    
    # Check for exact duplicate stimuli/answers
    seen_stimuli = defaultdict(list)
    for i, interaction in enumerate(interactions):
        # Create a signature based on content
        content_parts = []
        if 'stimulus_en' in interaction: content_parts.append(f"en:{interaction['stimulus_en']}")
        if 'stimulus_es' in interaction: content_parts.append(f"es:{interaction['stimulus_es']}")
        if 'correct_answer' in interaction: 
            ans = interaction['correct_answer']
            if isinstance(ans, list): ans = ",".join(map(str, ans))
            content_parts.append(f"ans:{ans}")
        
        # Special check for matching
        if interaction.get('type') == 'matching' and 'pairs' in interaction:
            pairs = sorted([f"{p['left']}-{p['right']}" for p in interaction['pairs']])
            content_parts.append(f"pairs:{'|'.join(pairs)}")
            
        sig = " || ".join(content_parts)
        if sig:
            seen_stimuli[sig].append(interaction.get('interaction_id', f"index_{i}"))

    duplicates = {k: v for k, v in seen_stimuli.items() if len(v) > 1}
    
    if duplicates:
        print(f"Found {len(duplicates)} groups of duplicate interactions:")
        for sig, ids in duplicates.items():
            print(f"  - IDs: {ids} | Content: {sig[:100]}...")
    else:
        print("No exact duplicates found.")

    # Check for vocabulary repetition in Unit 14 specifically as requested
    if "unit14" in filename:
        vocab_count = defaultdict(int)
        for interaction in interactions:
            text = ""
            if 'stimulus_en' in interaction: text += interaction['stimulus_en']
            if interaction.get('type') == 'matching':
                for p in interaction.get('pairs', []):
                    text += f" {p['left']} "
            
            words = ["speak", "write", "read", "understand", "study", "play", "learn"]
            for word in words:
                if word in text.lower():
                    vocab_count[word] += 1
        
        print("Vocabulary usage count (Common verbs):")
        for word, count in sorted(vocab_count.items(), key=lambda x: x[1], reverse=True):
            print(f"  - {word}: {count}")

if __name__ == "__main__":
    target_dir = "/Users/lidia/Documents/focusonenglish/src/content/cursos/ingles-a1"
    audit_units(target_dir)
