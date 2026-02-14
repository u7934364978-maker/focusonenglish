import re

def fix_a1(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Fix broken titles like "title": \"...\"
    content = re.sub(r'"title":\s*\\"(\[\[.*?\]\])\\"', r'"title": "\1"', content)
    # Also if it's just "title": \"...\" without inner tooltip
    content = re.sub(r'"title":\s*\\"(.*?)\\"', r'"title": "\1"', content)
    
    # Fix broken instructions
    content = re.sub(r'"instructions":\s*\\"(.*?)\\"', r'"instructions": "\1"', content)

    with open(file_path, 'w') as f:
        f.write(content)

fix_a1('src/lib/course/a1/unit-1.ts')

def fix_b1_array(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    new_lines = []
    in_array = False
    for line in lines:
        if '"words": [' in line:
            in_array = True
        elif in_array and '],' in line:
            in_array = False
            # If we see a ], followed by more words, it means it's broken
            # But wait, the error said Unexpected token , at line 81
            pass
        
        # If we have a line that is just a string but not inside an array or object correctly
        # This is hard to fix line by line if we don't know the context.
        new_lines.append(line)
    
    # Actually, I'll just use the logic from fix_u29_final.py but better
    content = "".join(new_lines)
    exercises = re.split(r'  \{', content)
    fixed_exercises = [exercises[0]]
    for ex in exercises[1:]:
        if '"type": "sentence-building"' in ex:
            match = re.search(r'"correctSentence": "(.*?)"', ex)
            if match:
                correct_sentence = match.group(1)
                words = re.findall(r'\[\[.*?\|.*?\]\]', correct_sentence)
                words_json = '[\n          ' + ',\n          '.join([f'"{w}"' for w in words]) + '\n        ]'
                ex = re.sub(r'"words":\s*\[[\s\S]*?\][\s\S]*?(?="explanation"|"audio"|"points")', f'"words": {words_json},\n        ', ex)
        fixed_exercises.append(ex)
    
    with open(file_path, 'w') as f:
        f.write('  {'.join(fixed_exercises))

fix_b1_array('src/lib/course/b1/unit-29.ts')
