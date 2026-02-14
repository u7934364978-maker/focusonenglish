import os
import re

def fix_content(content):
    # Rule 1: Remove quote before [[ if preceded by a non-delimiter character
    # Delimiters: :, [, ,, {, and whitespace
    content = re.sub(r'([^:\[\s,{])\s*"\s*\[\[', r'\1 [[', content)
    
    # Rule 2: Remove quote after ]] if followed by a non-delimiter character
    # Delimiters: ,, ], }, and whitespace
    content = re.sub(r'\]\]\s*"\s*([^,\]\}\s])', r']] \1', content)
    
    # Rule 3: Specific cases for comma/period between blocks if they were doubly quoted
    # These are only safe if NOT followed by a quote (which would mean it's a new list item)
    # Actually, Rule 1 already handles this mostly.
    
    # Rule 4: Handle specific underscore case
    content = re.sub(r'(__+)\s*"\s*\[\[', r'\1 [[', content)
    
    # Rule 5: Fix double escaped brackets
    content = content.replace('\\]\\]', ']]')
    
    return content

def main():
    base_dirs = [
        'src/lib/course/a1',
        'src/lib/course/a2',
        'src/lib/course/b1',
        'src/lib/course/b2',
        'src/lib/b2-units',
        'src/lib/c1-units',
        'src/lib/c2-units',
        'src/lib/toefl-units/b1',
        'src/lib/toefl-units/b2',
        'src/lib/toefl-units/c1'
    ]
    
    for base_dir in base_dirs:
        if not os.path.exists(base_dir):
            continue
        for filename in os.listdir(base_dir):
            if filename.endswith('.ts'):
                path = os.path.join(base_dir, filename)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = fix_content(content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {path}")

if __name__ == "__main__":
    main()
