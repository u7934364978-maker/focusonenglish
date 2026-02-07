import json
import re

def extract_items(text):
    # Regex to find translation pairs like "Spanish sentence: English sentence" or numbered lists
    # This is a bit tricky given the various formats in the text
    items = []
    
    # Pattern 1: "¿Has estado alguna vez en Canadá? = have you ever been to Canada?"
    pattern1 = re.compile(r'¿([^?]+)\? = ([^?\n]+)', re.IGNORECASE)
    for match in pattern1.finditer(text):
        items.append({"es": match.group(1).strip() + "?", "en": match.group(2).strip()})
    
    # Pattern 2: "Mi cumpleaños es en febrero: my birthday is in February."
    pattern2 = re.compile(r'^([^:\n]+): ([^:\n]+)$', re.MULTILINE)
    for match in pattern2.finditer(text):
        es, en = match.group(1).strip(), match.group(2).strip()
        if len(es) > 5 and len(en) > 5 and not es.startswith('KEYS'):
            items.append({"es": es, "en": en})
            
    # Pattern 3: Numbered lists like "1. This is a good coffee."
    # We might need to manually extract some or use more specific regex for different sections
    
    return items

def main():
    file_path = '/var/folders/kw/z3z8k8194jj3pkb1rrq91ptc0000gn/T/zencoder/pasted/files/20260207110403-x6ecwl.txt'
    with open(file_path, 'r') as f:
        text = f.read()
    
    all_items = extract_items(text)
    print(f"Extracted {len(all_items)} items.")
    
    with open('scripts/extracted_items.json', 'w') as f:
        json.dump(all_items, f, indent=2)

if __name__ == "__main__":
    main()
