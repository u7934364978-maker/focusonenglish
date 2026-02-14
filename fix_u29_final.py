import re

def fix_unit_29(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # Pattern to find each exercise object
    exercises = re.split(r'  \{', content)
    fixed_exercises = [exercises[0]]
    
    for ex in exercises[1:]:
        if '"type": "sentence-building"' in ex:
            # Find correctSentence
            match = re.search(r'"correctSentence": "(.*?)"', ex)
            if match:
                correct_sentence = match.group(1)
                # Extract words from [[English|Spanish]]
                words = re.findall(r'\[\[.*?\|.*?\]\]', correct_sentence)
                
                # Format words array
                words_json = '[\n          ' + ',\n          '.join([f'"{w}"' for w in words]) + '\n        ]'
                
                # Replace the old words array
                # Find "words": [ ... ]
                # This needs to be robust because the current array is mangled
                ex = re.sub(r'"words":\s*\[[\s\S]*?\]', f'"words": {words_json}', ex)
        
        fixed_exercises.append(ex)
    
    new_content = '  {'.join(fixed_exercises)
    
    # Also fix any syntax errors from unescaped quotes in instructions
    # Find all "instructions": "..." and escape inner quotes
    def escape_instructions(m):
        prefix = m.group(1)
        instr = m.group(2)
        # Escape quotes that are not already escaped
        fixed_instr = instr.replace('"', '\\"')
        # But wait, if they were already escaped as \", we now have \\\"
        # Let's do it properly
        fixed_instr = instr.replace('\\"', '"').replace('"', '\\"')
        return f'{prefix}"{fixed_instr}"'

    new_content = re.sub(r'("instructions":\s*)"(.*?)"', escape_instructions, new_content)

    with open(file_path, 'w') as f:
        f.write(new_content)

fix_unit_29('src/lib/course/b1/unit-29.ts')
fix_unit_29('src/lib/course/a1/unit-1.ts')
