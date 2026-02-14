import re
import os

def fix_line(line):
    # Exclude list fields
    if any(x in line for x in ['"options"', '"words"', '"choices"']):
        return line
    
    # Fix internal quotes in a string
    # ]] "[[ -> ]] [[
    line = line.replace(']] "[[', ']] [[')
    line = line.replace(']]" [[', ']] [[')
    
    # "[[word]]" -> [[word]] (internal)
    # We use a space check to ensure it's not the start of the value
    # But some might not have space.
    # Safe pattern: alphanumeric followed by quote and [[
    line = re.sub(r'([a-zA-Z0-9\]_])\s*"\s*\[\[', r'\1 [[', line)
    # Safe pattern: ]] followed by quote and alphanumeric
    line = re.sub(r'\]\]\s*"\s*([a-zA-Z0-9\[_])', r']] \1', line)
    
    # Specific problematic cases
    line = re.sub(r'\]\]",\s*"\[\[', ']] [[', line)
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
