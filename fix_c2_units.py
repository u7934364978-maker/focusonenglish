import os
import re

def fix_unit(i):
    path = f'/Users/lidia/Documents/focusonenglish/src/lib/c2-units/unit-{i}.ts'
    if not os.path.exists(path): 
        print(f"File {path} not found")
        return
    
    with open(path, 'r') as f:
        content = f.read()
    
    # 1. Renaming fill-in-the-blank
    content = content.replace("type: 'fill-in-the-blank'", "type: 'fill-blank'")
    
    # 2. Transforming blocks
    # We'll use a counter for blocks
    count = 0
    def replace_block(match):
        nonlocal count
        count += 1
        title_content = match.group(1)
        return f"{{ id: 'c2-u{i}-b{count}', type: 'grammar', title: '{title_content}'"

    # Replace the top-level block title
    # It usually looks like: { title: 'Some Title', exercises: [
    # But nested questions also have 'title' sometimes? No, questions don't have 'title'.
    
    # We want to match '{ title:' but only when it's followed by 'exercises: ['
    # and it's not a question.
    
    # Actually, in these files, only the blocks have 'title'.
    # Questions have 'question'.
    
    content = re.sub(r"\{\s*title: '([^']+)'", replace_block, content)
    content = content.replace("exercises: [", "questions: [")
    
    with open(path, 'w') as f:
        f.write(content)
    print(f"Fixed {path}")

for i in range(45, 61):
    fix_unit(i)
