import re
import os

def fix_joined_lines(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Fix joined title and instructions
    content = content.replace(']], "instructions":', ']]",\n      "instructions":')
    
    # Fix joined options
    # Error was: "[[off the beaten track|fuera de lo común]], "[[to the city center|al centro]], "[[by plane|en avión]]"
    # It should be: "[[off the beaten track|fuera de lo común]]", "[[to the city center|al centro]]", "[[by plane|en avión]]"
    
    # This regex should find tooltips followed by a comma and another tooltip without closing the first one correctly
    # But since it's already joined, we look for: [[...]], "[[...]]
    content = re.sub(r'(\[\[.*?\|.*?\]\]), "(\[\[.*?\|.*?\]\])', r'\1", "\2', content)
    
    # Fix the C1 issues again, correctly
    content = content.replace("'didn\\',", "'didn\\'t',")
    content = content.replace("'mustn\\',", "'mustn\\'t',")
    content = content.replace("'can\\',", "'can\\'t',")
    content = content.replace("'don\\',", "'don\\'t',")
    content = content.replace("'he can\\',", "'he can\\'t',")
    content = content.replace("'shouldn\\',", "'shouldn\\'t have told',")
    content = content.replace("'hadn\\',", "'hadn\\'t been for',")
    content = content.replace("'I\\'d\\',", "'I\\'d',")

    with open(file_path, 'w') as f:
        f.write(content)

fix_joined_lines('src/lib/course/a1/unit-1.ts')
fix_joined_lines('src/lib/course/b1/unit-29.ts')
fix_joined_lines('src/lib/course/b1/unit-30.ts')

c1_dir = 'src/lib/c1-units/'
for filename in os.listdir(c1_dir):
    if filename.endswith('.ts'):
        fix_joined_lines(os.path.join(c1_dir, filename))
