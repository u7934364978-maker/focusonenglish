import re
import os

def fix_line(line):
    # Rule 1: Remove quote before [[ if preceded by a non-delimiter character
    # (Delimiters are :, [, and whitespace at the start of value)
    # We use ([^:\[\s]) to ensure we're inside a string
    line = re.sub(r'([^:\[\s])\s*"\s*\[\[', r'\1 [[', line)
    
    # Rule 2: Remove quote after ]] if followed by a non-delimiter character
    # (Delimiters are ,, ], }, and whitespace/newline)
    line = re.sub(r'\]\]\s*"\s*([^,\]\}\s])', r']] \1', line)
    
    # Rule 3: Specific case for ]] ", " [[ which often occurs in broken strings
    line = re.sub(r'\]\]\s*"\s*,\s*"\s*\[\[', r']], [[', line)
    
    # Rule 4: Handle period case: ]].", "[[ -> ]]. [[
    line = re.sub(r'\]\]\s*\.\s*"\s*,\s*"\s*\[\[', r']]. [[', line)

    # Rule 5: Fix the underscore case ______ "[[ -> ______ [[
    line = re.sub(r'(__+)\s*"\s*\[\[', r'\1 [[', line)
    
    return line

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
                with open(path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                
                new_lines = [fix_line(line) for line in lines]
                
                if new_lines != lines:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.writelines(new_lines)
                    print(f"Updated {path}")

if __name__ == "__main__":
    main()
