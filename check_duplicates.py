
import re

with open('/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/a1/unit-1.ts', 'r') as f:
    content = f.read()

# Find all matching exercises
exercises = re.findall(r'\{[^{}]*?"type": "matching",.*?"pairs": \[(.*?)\][^{}]*?\}', content, re.DOTALL)

for i, ex_content in enumerate(exercises):
    print(f"Checking exercise index {i}")
    lefts = re.findall(r'"left": "(.*?)"', ex_content)
    rights = re.findall(r'"right": "(.*?)"', ex_content)
    
    seen_left = set()
    for l in lefts:
        if l in seen_left:
            print(f"  DUPLICATE LEFT: {l}")
        seen_left.add(l)
        
    seen_right = set()
    for r in rights:
        if r in seen_right:
            print(f"  DUPLICATE RIGHT: {r}")
        seen_right.add(r)
