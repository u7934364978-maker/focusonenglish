import re
import os

def fix_content(content):
    # Rule 1: Remove quotes between ]] and [[ (e.g. ]] "[[ or ]] " [[)
    # Preceded by alphanumeric or ]
    content = re.sub(r'([a-zA-Z0-9\]])\s*"\s*\[\[', r'\1 [[', content)
    
    # Rule 2: Remove quotes after ]] if followed by alphanumeric or [
    content = re.sub(r'\]\]\s*"\s*([a-zA-Z0-9\[])', r']] \1', content)
    
    # Rule 3: Handle the case with comma: ]]", "[[ -> ]], [[
    content = re.sub(r'\]\]\s*"\s*,\s*"\s*\[\[', r']], [[', content)
    
    # Rule 4: Handle the case with period: ]].", "[[ -> ]]. [[
    content = re.sub(r'\]\]\s*\.\s*"\s*,\s*"\s*\[\[', r']]. [[', content)
    
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
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = fix_content(content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {path}")

if __name__ == "__main__":
    main()
