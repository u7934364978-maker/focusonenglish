import os
import re

def fix_line(line):
    # Match "key": "value" with optional trailing comma/brace/bracket
    # Group 1: prefix up to first quote of value
    # Group 2: the value content
    # Group 3: the last quote and any trailing chars
    match = re.match(r'^(\s*"[^"]+":\s*")(.*)("\s*[,\]\}]?\s*)$', line)
    if match:
        prefix = match.group(1)
        value = match.group(2)
        suffix = match.group(3)
        
        # Remove any internal quotes that are NOT escaped
        # We want to remove any " that is not at the very start or end of the value
        # and specifically those near [[ or ]]
        
        # First, remove the problematic patterns
        value = re.sub(r'\s*"\[\[', r' [[', value)
        value = re.sub(r'\]\]"\s*', r']] ', value)
        value = re.sub(r'\]\]",\s*', r']] ', value)
        
        # General cleanup of any other internal quotes in the value
        # (Assuming the value itself shouldn't have unescaped quotes)
        value = value.replace('"', '') 
        
        return prefix + value + suffix
    return line

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = [fix_line(l) for l in lines]
    
    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

directories = [
    'src/lib/course/a1',
    'src/lib/course/a2',
    'src/lib/course/b1',
    'src/lib/course/b2',
    'src/lib/c1-units'
]

for d in directories:
    if not os.path.exists(d): continue
    for root, dirs, files in os.walk(d):
        for f in files:
            if f.endswith('.ts'):
                fix_file(os.path.join(root, f))
