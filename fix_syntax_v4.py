import re
import os

def fix_line(line):
    # Rule 1 & 2: Remove quotes between ]] and [[ or around words if internal
    # Using [a-zA-Z0-9\]_] to ensure we're not at the start/end of a value
    # We also include space to handle "word " "[[translation]]"
    line = re.sub(r'([a-zA-Z0-9\]_])\s*"\s*\[\[', r'\1 [[', line)
    line = re.sub(r'\]\]\s*"\s*([a-zA-Z0-9\[_])', r']] \1', line)
    
    # Rule 3 & 4: Handle comma/period between blocks inside a single string
    # We exclude lines that are part of a list (options, words, choices)
    if not any(x in line for x in ['"options"', '"words"', '"choices"']):
        # ]] ", " [[ -> ]], [[
        line = re.sub(r'\]\]\s*"\s*,\s*"\s*\[\[', r']], [[', line)
        # ]]. ", " [[ -> ]]. [[
        line = re.sub(r'\]\]\s*\.\s*"\s*,\s*"\s*\[\[', r']]. [[', line)
    
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
