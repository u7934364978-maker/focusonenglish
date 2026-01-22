#!/usr/bin/env python3
"""
Comprehensive fix for exercise questions in course-data-b2.ts
"""

import re

def fix_course_data(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    fixed_lines = []
    in_questions_array = False
    current_exercise_id = None
    question_num = 0
    
    for i, line in enumerate(lines):
        # Track which exercise we're in
        if "id: 'b2-m" in line and "type: 'grammar'" in lines[i+1] if i+1 < len(lines) else False:
            current_exercise_id = re.search(r"id: '([^']+)'", line).group(1)
            question_num = 0
        elif "id: 'b2-m" in line and "type: 'reading'" in lines[i+1] if i+1 < len(lines) else False:
            current_exercise_id = re.search(r"id: '([^']+)'", line).group(1)
            question_num = 0
        elif "id: 'b2-m" in line and "type: 'listening'" in lines[i+1] if i+1 < len(lines) else False:
            current_exercise_id = re.search(r"id: '([^']+)'", line).group(1)
            question_num = 0
        
        # Check if we're entering questions array
        if 'questions: [' in line:
            in_questions_array = True
        elif in_questions_array and line.strip().startswith('],'):
            in_questions_array = False
            question_num = 0
        
        # Fix empty IDs in questions
        if in_questions_array and "id: ''," in line:
            question_num += 1
            indent = len(line) - len(line.lstrip())
            line = ' ' * indent + f"id: 'q{question_num}',\n"
        
        # Fix 'sentence:' to 'question:'
        if in_questions_array and 'sentence:' in line:
            line = line.replace('sentence:', 'question:')
        
        # Fix "Answer: ___" patterns
        if in_questions_array and '. Answer: ___' in line:
            line = line.replace('. Answer: ___', '?')
        
        # Fix "Complete: " prefix
        if in_questions_array and "question: 'Complete: " in line:
            line = line.replace("question: 'Complete: ", "question: '")
        
        fixed_lines.append(line)
    
    return ''.join(fixed_lines)

if __name__ == '__main__':
    filepath = '/home/user/webapp/focusonenglish/lib/course-data-b2.ts'
    
    print("Fixing course data comprehensively...")
    fixed_content = fix_course_data(filepath)
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print("✅ Fixed:")
    print("   - Empty IDs replaced with q1, q2, q3...")
    print("   - 'sentence:' replaced with 'question:'")
    print("   - 'Answer: ___' patterns cleaned up")
    print("   - 'Complete:' prefixes removed")
