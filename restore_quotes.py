import os
import re

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix keys missing closing quote and values missing opening quote
    # e.g. "transcript: [[The|El]] ...", -> "transcript": "[[The|El]] ...",
    keys = ['id', 'type', 'level', 'topic', 'topicName', 'difficulty', 'title', 
            'instructions', 'question', 'correctAnswer', 'explanation', 
            'audio', 'audioUrl', 'transcript', 'translation', 'hint', 'text']
    
    for key in keys:
        # Match "key: value", and replace with "key": "value",
        # We assume values end with ", or ] or }
        pattern = r'"' + key + r':\s+([^"].*?)(?=",\s*\n|"\n|",\n|"\s*,\n|"\s*\n|"\s*\]|"\s*\})'
        # Wait, the above is complex. Let's try simpler.
        
        # If it's "key: [[...]]", fix it to "key": "[[...]]"
        content = re.sub(r'"' + key + r':\s+\[\[', r'"' + key + r'": "[[', content)
        
    # Fix the options array: [[growth|crecimiento]], "[[decline|declive]], "[[silence|silencio]]
    # 1. Add missing quotes to the first element if needed
    content = re.sub(r'\[\s+\[\[', r'[ "[[', content)
    # 2. Add missing quotes after commas if needed
    content = re.sub(r',\s+\[\[', r', "[[', content)
    # 3. Add missing closing quotes before commas
    content = re.sub(r'(\]\])\s*,', r'\1",', content)
    # 4. Add missing closing quotes before closing bracket
    content = re.sub(r'(\]\])\s*\]', r'\1" ]', content)
    
    # Fix double quotes if any were created
    content = content.replace('""[[', '"[[')
    content = content.replace(']]""', ']]"')
    
    # Also fix general "key: value" where value is not tooltipped but missing quotes
    # e.g. "topicName: Vocabulary" -> "topicName": "Vocabulary"
    for key in keys:
        content = re.sub(r'"' + key + r':\s+([^"\[\s][^,}\]]+)', r'"' + key + r'": "\1"', content)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

directories = [
    'src/lib/course/a1',
    'src/lib/course/a2',
    'src/lib/course/b1',
    'src/lib/course/b2',
    'src/lib/c1-units'
]

for d in directories:
    if not os.path.exists(d): continue
    for root, dirs, files in os.walk(d):
        for f in files:
            if f.endswith('.ts'):
                fix_file(os.path.join(root, f))
