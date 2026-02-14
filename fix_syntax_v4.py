import re

def fix_a1_questions(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Fix "question": "[[...]]", ________.", -> "question": "[[...]], ________.",
    content = re.sub(r'("question":\s*)"(\[\[.*?\]\])",\s*(.*?)"', r'\1"\2, \3"', content)
    
    # Also handle cases with other punctuation
    content = re.sub(r'("question":\s*)"(\[\[.*?\]\])"\.\s*(.*?)"', r'\1"\2. \3"', content)

    with open(file_path, 'w') as f:
        f.write(content)

fix_a1_questions('src/lib/course/a1/unit-1.ts')

# Fix C1 units that were mentioned in build error
c1_files = [
    'src/lib/c1-units/unit-7.ts',
    'src/lib/c1-units/unit-12.ts',
    'src/lib/c1-units/unit-16.ts',
    'src/lib/c1-units/unit-28.ts'
]

def fix_c1_escaping(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Fix 'can\'', 'can\'t have' issue
    # The error showed 'can\', which means someone wrote 'can\'t' inside '...'
    # If using single quotes, ' must be escaped as \'
    # If the build error says 'can\', it might be because of double escaping or missing quote
    
    # Let's replace 'can\', with 'can\'t', or similar
    content = content.replace("'can\\',", "'can\\'t',")
    content = content.replace("'don\\',", "'don\\'t',")
    content = content.replace("'mustn\\',", "'mustn\\'t',")
    content = content.replace("'he can\\',", "'he can\\'t',")

    with open(file_path, 'w') as f:
        f.write(content)

for f_path in c1_files:
    fix_c1_escaping(f_path)
