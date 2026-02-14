import re
import os

def fix_content(content):
    # 1. Fix missing closing quotes for tooltips followed by a comma and a key or next item
    # Matches [[...]] followed by , and "key": OR followed by , and another [[
    # We use a lookahead to ensure we don't match if the quote is already there.
    content = re.sub(r'(\[\[[^\]]*\|[^\]]*\]\])(?!\s*")(?=\s*,\s*["\[])', r'\1"', content)
    
    # 2. Fix missing opening quotes for tooltips
    # Matches tooltips not preceded by a quote
    content = re.sub(r'(?<!")(\[\[[^\]]*\|[^\]]*\]\])', r'"\1', content)
    
    # 3. Fix cases where the closing quote was removed between title and instructions
    # Matches [[...]], "instructions":
    content = re.sub(r'(\[\[[^\]]*\|[^\]]*\]\])(?!\s*")\s*,\s*"instructions":', r'\1", "instructions":', content)

    # 4. Fix C1 units single quote escaping
    # Matches 'something\' followed by ,
    content = content.replace("'can\\',", "'can\\'t',")
    content = content.replace("'don\\',", "'don\\'t',")
    content = content.replace("'mustn\\',", "'mustn\\'t',")
    content = content.replace("'he can\\',", "'he can\\'t',")
    content = content.replace("'shouldn\\',", "'shouldn\\'t have told',")
    content = content.replace("'hadn\\',", "'hadn\\'t been for',")
    content = content.replace("'I\\'d\\',", "'I\\'d',")
    content = content.replace("'won\\',", "'won\\'t',")
    content = content.replace("'wouldn\\',", "'wouldn\\'t',")
    content = content.replace("'doesn\\',", "'doesn\\'t',")
    content = content.replace("'isn\\',", "'isn\\'t',")
    content = content.replace("'aren\\',", "'aren\\'t',")
    content = content.replace("'wasn\\',", "'wasn\\'t',")
    content = content.replace("'weren\\',", "'weren\\'t',")
    content = content.replace("'haven\\',", "'haven\\'t',")
    content = content.replace("'hasn\\',", "'hasn\\'t',")
    content = content.replace("'hadn\\',", "'hadn\\'t',")

    # 5. Cleanup double quotes
    content = content.replace('""[[', '"[[')
    content = content.replace(']]""', ']]"')
    
    return content

files_to_fix = [
    'src/lib/course/a1/unit-1.ts',
    'src/lib/course/b1/unit-29.ts',
    'src/lib/course/b1/unit-30.ts'
]

c1_dir = 'src/lib/c1-units/'
if os.path.exists(c1_dir):
    for filename in os.listdir(c1_dir):
        if filename.endswith('.ts'):
            files_to_fix.append(os.path.join(c1_dir, filename))

for file_path in files_to_fix:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        fixed_content = fix_content(content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed {file_path}")

