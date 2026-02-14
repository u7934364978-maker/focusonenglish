import re
import os

def fix_ts_quotes(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Fix "text": "[[...]]", [[...]]", -> "text": "[[...]], [[...]]",
    content = re.sub(r'("text":\s*)"(\[\[.*?\]\])",\s*(\[\[.*?\]\])', r'\1"\2, \3', content)
    # General fix for quotes ending a tooltip but not the string
    content = re.sub(r'(\[\[.*?\|.*?\]\])",\s*', r'\1, ', content)
    
    # Fix C1 style issues: 'didn\', 'didn\'t' -> 'didn\'t',
    content = content.replace("'didn\\',", "'didn\\'t',")
    content = content.replace("'mustn\\',", "'mustn\\'t',")
    content = content.replace("'can\\',", "'can\\'t',")
    content = content.replace("'don\\',", "'don\\'t',")
    content = content.replace("'he can\\',", "'he can\\'t',")
    content = content.replace("'I\\'d\\',", "'I\\'d',")

    with open(file_path, 'w') as f:
        f.write(content)

# Apply to A1, B1 and all C1 units
fix_ts_quotes('src/lib/course/a1/unit-1.ts')
fix_ts_quotes('src/lib/course/b1/unit-29.ts')
fix_ts_quotes('src/lib/course/b1/unit-30.ts')

c1_dir = 'src/lib/c1-units/'
for filename in os.listdir(c1_dir):
    if filename.endswith('.ts'):
        fix_ts_quotes(os.path.join(c1_dir, filename))
