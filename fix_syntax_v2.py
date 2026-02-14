import os
import re

# Known keys in the JSON structure
KNOWN_KEYS = [
    'id', 'type', 'level', 'topic', 'topicName', 'difficulty', 'content', 'title', 
    'instructions', 'questions', 'question', 'options', 'correctAnswer', 'explanation', 
    'audio', 'audioUrl', 'transcript', 'correctSentence', 'translation', 'hint', 'text',
    'words', 'points', 'image', 'video', 'items'
]

def fix_line(line):
    if '[[' not in line:
        return line
    
    # 1. Handle accidental splits: ]]", "[[  or  ]]", "Word
    # If the thing after ", " is NOT a key, it's an accidental split.
    def repl_orphan_comma(match):
        all_match = match.group(0)
        quote_part = match.group(1)
        segment_after = match.group(2)
        
        is_key = False
        clean_after = segment_after.strip().strip('"')
        for key in KNOWN_KEYS:
            if clean_after.startswith(key):
                # Verify it's actually followed by : or " then :
                # e.g. "title":
                if re.search(r'^' + key + r'(\s*"\s*)?\s*:', clean_after):
                    is_key = True
                    break
        
        if is_key:
            return all_match
        else:
            # It's an orphan segment, merge it
            return " " + segment_after

    line = re.sub(r'(\s*"\s*,\s*")([^"]+)', repl_orphan_comma, line)
    
    # 2. Identify all unescaped quotes and decide which to keep
    # We want to keep quotes that are part of:
    #   "key":
    #   : "value"
    #   "value",
    #   "value"]
    #   "value"}
    #   ["value"
    #   {"key"
    
    quotes = [m.start() for m in re.finditer(r'(?<!\\)"', line)]
    to_keep = set()
    
    for i, q in enumerate(quotes):
        pre = line[:q].strip()
        post = line[q+1:].strip()
        
        # Case: "key":
        if post.startswith(':') or (post.startswith('"') and post[1:].strip().startswith(':')):
            to_keep.add(q)
            continue
            
        # Case: : "value"
        if pre.endswith(':'):
            to_keep.add(q)
            continue
            
        # Case: , "value" or ["value"
        if pre.endswith(',') or pre.endswith('['):
            to_keep.add(q)
            continue
            
        # Case: "value", or "value"] or "value"}
        if post.startswith(',') or post.startswith(']') or post.startswith('}'):
            to_keep.add(q)
            continue
            
        # Case: start of line (usually "key")
        if not pre:
            to_keep.add(q)
            continue
            
        # Case: end of line (usually "value")
        if not post:
            to_keep.add(q)
            continue

    new_line = ""
    for i, char in enumerate(line):
        if char == '"' and i not in to_keep and (i == 0 or line[i-1] != '\\'):
            # It's an internal quote, remove it
            continue
        new_line += char

    # 3. Clean up accidental commas between tooltips
    new_line = re.sub(r'(\]\])\s*,\s*(\[\[)', r'\1 \2', new_line)
    
    # 4. Clean up spaces
    new_line = re.sub(r'\s+', ' ', new_line)
    
    return new_line

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = [fix_line(line) for line in lines]
    
    if new_lines != lines:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        return True
    return False

# Revert before applying new fix
import subprocess
subprocess.run(['git', 'restore', '.'])

# Process all files
directories = [
    'src/lib/course/a1',
    'src/lib/course/a2',
    'src/lib/course/b1',
    'src/lib/course/b2',
    'src/lib/c1-units'
]

for d in directories:
    if not os.path.exists(d):
        continue
    for root, dirs, files in os.walk(d):
        for f in files:
            if f.endswith('.ts'):
                path = os.path.join(root, f)
                if fix_file(path):
                    print(f"Fixed {path}")
