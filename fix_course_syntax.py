import re
import os
import sys

def fix_content(content):
    # Fix 1: ]] "[[ -> ]] [[
    # This removes the extra quote between translation blocks
    content = re.sub(r'\]\]\s*"\s*\[\[', ']] [[', content)
    
    # Fix 2: " [[ ->  [[ (if not preceded by : or ,)
    # This catches things like: "word" "[[translation]]"
    content = re.sub(r'(?<![:,\(])\s*"\[\[', ' [[', content)
    
    # Fix 3: ]] " -> ]] (if not followed by , or } or ] or ) or :)
    # This catches things like: "[[translation]]" "word"
    content = re.sub(r'\]\]\s*"(?![,\}\]\)\:])', ']]', content)

    # Fix 4: Specific case in line 10 of unit-30 and similar
    # "[[history|la historia]]", "[[stretching|extendiéndose]]
    # This should be part of the same string
    content = re.sub(r'\]\]",\s*"\[\[', ']] [[', content)
    
    return content

def main():
    base_dirs = [
        'src/lib/course/a1',
        'src/lib/course/b1',
        'src/lib/course/b2'
    ]
    
    for base_dir in base_dirs:
        if not os.path.exists(base_dir):
            continue
        for filename in os.listdir(base_dir):
            if filename.endswith('.ts'):
                path = os.path.join(base_dir, filename)
                print(f"Fixing {path}")
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = fix_content(content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"  Updated {path}")

if __name__ == "__main__":
    main()
