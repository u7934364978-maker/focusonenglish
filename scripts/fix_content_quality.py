import os
import json
import hashlib
import re
from pathlib import Path

def get_content_hash(interaction):
    """Generates a hash of the interaction content to identify duplicates."""
    # Create a copy and remove non-content fields
    content_to_hash = interaction.copy()
    if 'interaction_id' in content_to_hash:
        del content_to_hash['interaction_id']
    
    # Standardize content string for hashing
    content_str = json.dumps(content_to_hash, sort_keys=True)
    return hashlib.md5(content_str.encode()).hexdigest()

def detect_placeholders(interaction):
    """Detects AI-generated placeholders like r1, r2, etc."""
    content_str = json.dumps(interaction)
    # Search for patterns like "r1", "r2" as standalone words in strings
    return bool(re.search(r'\b[rR]\d+\b', content_str))

def process_file(file_path):
    print(f"Processing: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    level = data['course']['level'].upper()
    unit_num = data['course']['unit_id'].replace('unit', 'U').upper()
    
    seen_hashes = set()
    new_blocks = []
    placeholders_found = 0
    duplicates_removed = 0

    for block in data.get('blocks', []):
        block_id = block.get('block_id', 'BX').upper()
        new_content = []
        
        for idx, interaction in enumerate(block.get('content', []), 1):
            # 1. Content Hashing & Deduplication
            c_hash = get_content_hash(interaction)
            if c_hash in seen_hashes:
                duplicates_removed += 1
                continue
            seen_hashes.add(c_hash)

            # 2. Re-indexing
            new_id = f"{level}_{unit_num}_{block_id}_I{idx}"
            interaction['interaction_id'] = new_id

            # 3. Placeholder Detection
            if detect_placeholders(interaction):
                placeholders_found += 1
                print(f"  [!] Placeholder found in {new_id}")

            new_content.append(interaction)
        
        block['content'] = new_content
        new_blocks.append(block)

    data['blocks'] = new_blocks

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"  Done. Removed {duplicates_removed} duplicates. Found {placeholders_found} placeholders.")
    return duplicates_removed, placeholders_found

def main():
    base_path = Path("/Users/lidia/Documents/focusonenglish/focusonenglish/src/content/cursos")
    total_duplicates = 0
    total_placeholders = 0

    for root, dirs, files in os.walk(base_path):
        for file in files:
            if file.endswith('.json'):
                full_path = Path(root) / file
                dupes, placeholders = process_file(full_path)
                total_duplicates += dupes
                total_placeholders += placeholders

    print(f"\nAudit/Cleanup Finished.")
    print(f"Total duplicates removed: {total_duplicates}")
    print(f"Total placeholders remaining (manual fix needed): {total_placeholders}")

if __name__ == "__main__":
    main()
