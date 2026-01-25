import re

with open('app/ejercicios-inteligentes/components/SmartExerciseGenerator.tsx', 'r') as f:
    lines = f.readlines()

depth = 0
for i, line in enumerate(lines):
    opens = len(re.findall(r'<div', line))
    closes = len(re.findall(r'</div', line))
    
    # Simple self-closing div check (e.g. <div />)
    self_closing = len(re.findall(r'<div[^>]*/>', line))
    
    # Correct depth change: only count divs that are not self-closing as opening
    depth += (opens - self_closing) - closes
    
    if depth < 0:
        print(f"Negative depth at line {i+1}: {line.strip()}")
        # break # Don't break, see how it goes
        
print(f"Final depth: {depth}")
