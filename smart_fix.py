import os
import re

def fix_content(content):
    # 1. Fix single internal quotes between translation blocks
    # Pattern: ]] " [[  ->  ]] [[
    # Avoid: "key": "[[  by checking for colon
    def sub_internal(m):
        prefix = m.group(1)
        if prefix.strip().endswith(':'):
            return m.group(0)
        return prefix + " [["

    content = re.sub(r'(.*?[\]\]])\s*"\s*(\[\[)', sub_internal, content)
    
    # Also for word " [[
    content = re.sub(r'(.*?[a-zA-Z0-9…!.?;])\s*"\s*(\[\[)', sub_internal, content)

    # 2. Fix single internal quotes after translation blocks
    # Pattern: ]] " word -> ]] word
    # Avoid: ]]", (end of value)
    def sub_after(m):
        suffix = m.group(2)
        if suffix.strip().startswith((',', ']', '}')):
            return m.group(0)
        return "]] " + suffix

    content = re.sub(r'(\]\])\s*"\s*([a-zA-Z0-9…!.?;])', sub_after, content)

    # 3. Fix double quote segments if they exist: ]]" "[[
    def sub_join_double(m):
        inner = m.group(2)
        if ':' in inner:
            return m.group(0)
        return m.group(1) + " " + m.group(3)

    content = re.sub(r'(\]\])("\s*,?\s*")(\[\[)', sub_join_double, content)

    # 4. Dialogue specifically
    content = re.sub(r'([a-zA-Z0-9]+\s+[A-Z]:)\s*"\s*(\[\[)', r'\1 \2', content)

    return content

directories = [
    'src/lib/course/a1',
    'src/lib/course/a2',
    'src/lib/course/b1',
    'src/lib/course/b2',
    'src/lib/course/c1',
    'src/lib/course/c2',
    'src/lib/course/toefl'
]

for directory in directories:
    full_path = os.path.join(os.getcwd(), directory)
    if not os.path.exists(full_path):
        continue
    for filename in os.listdir(full_path):
        if filename.endswith('.ts'):
            path = os.path.join(full_path, filename)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = fix_content(content)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Fixed {path}")
