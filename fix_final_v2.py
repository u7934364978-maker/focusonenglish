import re
import json

def fix_file(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    new_lines = []
    for line in lines:
        # Fix broken options/words lines that are missing closing quote/bracket
        # Example: "[[off the beaten track|fuera de lo común],
        if ' "[[' in line and '],' in line and ']]"' not in line:
             line = line.replace('],', ']]",')
        
        # Fix unescaped quotes in instructions
        if '"instructions":' in line:
            # Extract content between first and last double quote after :
            parts = line.split(':', 1)
            instr_part = parts[1].strip()
            # It should start with " and end with ", or ",
            if instr_part.startswith('"'):
                content = instr_part[1:]
                if content.endswith('",'):
                    content = content[:-2]
                    suffix = '",'
                elif content.endswith('"'):
                    content = content[:-1]
                    suffix = '"'
                else:
                    # Might be multiline or broken, skip for now
                    new_lines.append(line)
                    continue
                
                # Unescape everything first to avoid double escaping
                content = content.replace('\\"', '"')
                # Escape quotes
                content = content.replace('"', '\\"')
                line = f'{parts[0]}: "{content}"{suffix}\n'
        
        new_lines.append(line)

    with open(file_path, 'w') as f:
        f.writelines(new_lines)

fix_file('src/lib/course/a1/unit-1.ts')
fix_file('src/lib/course/b1/unit-29.ts')
