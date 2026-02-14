import re
import json

def find_missing(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    titles = re.findall(r'"title": "(.*?)"', content)
    instructions = re.findall(r'"instructions": "(.*?)"', content)
    
    missing_titles = [t for t in titles if '[[' not in t]
    missing_instructions = [i for i in instructions if '[[' not in i]
    
    return set(missing_titles), set(missing_instructions)

a1_titles, a1_inst = find_missing('src/lib/course/a1/unit-1.ts')
b1_titles, b1_inst = find_missing('src/lib/course/b1/unit-30.ts')

print("A1 Missing Titles:", list(a1_titles))
print("A1 Missing Instructions:", list(a1_inst))
print("B1 Missing Titles:", list(b1_titles))
print("B1 Missing Instructions:", list(b1_inst))
