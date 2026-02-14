import re

# Fix A1 Unit 1
with open('src/lib/course/a1/unit-1.ts', 'r') as f:
    content = f.read()
# Replace "[[Hello|Hola]]" with \"[[Hello|Hola]]\" in instructions
content = content.replace('"[[Hello|Hola]]"', '\\"[[Hello|Hola]]\\"')
# Also for others if any
content = content.replace('"[[I|Yo]] [[am|soy]] [[Juan|Juan]]"', '\\"[[I|Yo]] [[am|soy]] [[Juan|Juan]]\\"')
content = content.replace('"[[Good|Buenas]] [[afternoon|tardes]]"', '\\"[[Good|Buenas]] [[afternoon|tardes]]\\"')
content = content.replace('"[[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|Maria]]"', '\\"[[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|Maria]]\\"')
content = content.replace('"[[How|Cómo]] [[are|estás]] [[you?|?]]"', '\\"[[How|Cómo]] [[are|estás]] [[you?|?]]\\"')
content = content.replace('"[[What\'s|Qué]] [[up?|pasa?]]"', '\\"[[What\'s|Qué]] [[up?|pasa?]]\\"')

with open('src/lib/course/a1/unit-1.ts', 'w') as f:
    f.write(content)

# Fix B1 Unit 29
with open('src/lib/course/b1/unit-29.ts', 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if ']]",' in line and '"words": [' not in line:
         # Fix the broken array closing
         line = line.replace(']]",', '],')
    new_lines.append(line)

with open('src/lib/course/b1/unit-29.ts', 'w') as f:
    f.writelines(new_lines)
