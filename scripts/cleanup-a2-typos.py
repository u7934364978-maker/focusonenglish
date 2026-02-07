import json
import os
import re
import glob

def clean_text(text):
    if not isinstance(text, str):
        return text
    
    # 1. Remove placeholders like " - 575", " - amazing", " - 926", " - interesting"
    text = re.sub(r'\s*-\s*\d{3,4}\b', '', text)
    text = re.sub(r'\s*-\s*(amazing|interesting|boring|exciting|surprising|confusing|tiring|amusing)\b', '', text)
    
    # Remove random numbers attached to words (common in odd_one_out)
    text = re.sub(r'([a-zA-Z]+)\d+\b', r'\1', text)
    
    # 2. Fix double articles in English
    # "A a ", "A an ", "a a ", "a an ", "An a ", "An an ", "an a ", "an an "
    text = re.sub(r'\b[Aa]n?\s+[Aa]n?\s+', 'a ', text)
    
    # 3. Fix double articles/mixing in Spanish
    # "Un a ", "Una a ", "Un an ", "Una an "
    text = re.sub(r'\b[Uu]na?\s+[Aa]n?\s+', 'un ', text)
    
    # 4. Fix "a" vs "an" before vowels (English)
    # This is a bit complex for a regex but we can do common ones
    vowels = 'aeiouAEIOU'
    text = re.sub(r'\b[Aa]\s+([' + vowels + '])', r'an \1', text)
    text = re.sub(r'\b[Aa]n\s+([^' + vowels + 'hH])', r'a \1', text) # Simple heuristic
    
    # 5. Clean up extra spaces
    text = re.sub(r'\s+', ' ', text).strip()
    
    # Ensure it ends with a period if it's a sentence and doesn't have punctuation
    # EXCLUDE unit_id, level, mastery_tag, etc. which shouldn't have periods
    if len(text) > 5 and text[-1].isalnum() and not text.startswith("unit") and not text.startswith("A2"):
        text += "."
        
    return text

def cleanup_units():
    unit_files = glob.glob('src/content/cursos/ingles-a2/unit*.json')
    print(f"Found {len(unit_files)} units to clean.")
    
    for file_path in unit_files:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        modified = False
        
        # Traverse and clean all string values in the JSON structure
        def traverse_and_clean(obj, key=None, parent=None):
            nonlocal modified
            # Skip metadata keys that should not be cleaned/periodized
            skip_keys = ["unit_id", "level", "interaction_id", "block_id", "mastery_tag", "language_ui", "target_language", "id", "match_id"]
            
            if isinstance(obj, dict):
                # If it's the correct_answer map (for matching/cloze), skip cleaning its values (they are IDs or short strings)
                if key == "correct_answer" and all(isinstance(v, str) for v in obj.values()):
                    return

                for k, v in obj.items():
                    if isinstance(v, str):
                        # SPECIAL CASE: correct_answer for dictation/fill_blanks/etc is text, not ID
                        is_text_answer = k == "correct_answer" and isinstance(parent, dict) and parent.get("type") in ["dictation_guided", "fill_blanks", "transformation", "short_writing", "fill_blank", "fill-blank"]
                        
                        if k in skip_keys:
                             cleaned = v.strip().rstrip('.')
                        elif k == "correct_answer" and not is_text_answer:
                             # It's an ID like "o1" or "w5"
                             cleaned = v.strip().rstrip('.')
                        else:
                            cleaned = clean_text(v)
                            
                        if cleaned != v:
                            obj[k] = cleaned
                            modified = True
                    else:
                        traverse_and_clean(v, k, obj)
            elif isinstance(obj, list):
                for i in range(len(obj)):
                    if isinstance(obj[i], str):
                        # For list items, if parent is reorder_words correct_answer, they are IDs
                        is_id_list = key == "correct_answer" and isinstance(parent, dict) and parent.get("type") == "reorder_words"
                        
                        if is_id_list or key == "correct_ids":
                            cleaned = obj[i].strip().rstrip('.')
                        else:
                            cleaned = clean_text(obj[i])
                            
                        if cleaned != obj[i]:
                            obj[i] = cleaned
                            modified = True
                    else:
                        traverse_and_clean(obj[i], key, obj)

        traverse_and_clean(data)
        
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            # print(f"Cleaned {file_path}")

    print("Cleanup complete.")

if __name__ == "__main__":
    cleanup_units()
