#!/usr/bin/env python3
"""
Fix awkward true-false questions with pattern:
'The correct answer is "X" for: Y'

Convert to either:
- Proper multiple-choice (if X is substantive)  
- Or simple true-false (if yes/no style)
"""

import re

def fix_true_false_awkward(content):
    """
    Pattern: type: 'true-false' with awkward question format
    """
    
    # Find all true-false questions with this pattern
    pattern = r"""(\s+\{
\s+id: '([^']+)',
\s+type: 'true-false',
\s+question: ')The correct answer is "([^"]+)" for: ([^']+)(',
\s+correctAnswer: '(True|False)',
\s+explanation: ')([^']*)(  ',
\s+points: \d+
\s+\})"""
    
    def convert(match):
        prefix = match.group(1)
        q_id = match.group(2)
        stated_answer = match.group(3)
        actual_question = match.group(4)
        q_suffix = match.group(5)
        correct_tf = match.group(6)
        exp_prefix = match.group(7)
        explanation = match.group(8)
        rest = match.group(9)
        
        # Just extract the actual question
        return f"""{prefix}{actual_question}{q_suffix}
            correctAnswer: '{stated_answer}',
            {exp_prefix}{explanation}{rest}"""
    
    return re.sub(pattern, convert, content, flags=re.MULTILINE | re.DOTALL)

def simple_fix_all_awkward(filepath):
    """Simple solution: extract just the question part"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern: question: 'The correct answer is "X" for: Y'
    # Replace with just: question: 'Y'
    # And change correctAnswer from True/False to X
    
    pattern = r"""(question: ')The correct answer is "([^"]+)" for: ([^']+)(',[^}]+correctAnswer: ')(True|False)(')"""
    
    def fix(match):
        q_prefix = match.group(1)
        answer = match.group(2)
        question = match.group(3)
        q_suffix = match.group(4)
        ca_prefix = match.group(5)
        old_answer = match.group(6)
        ca_suffix = match.group(6)
        
        # Just use the real question and real answer
        return f"{q_prefix}{question}{q_suffix}{ca_prefix}{answer}{ca_suffix}"
    
    fixed = re.sub(pattern, fix, content)
    
    return fixed

if __name__ == '__main__':
    filepath = '/home/user/webapp/focusonenglish/lib/course-data-b2.ts'
    
    print("Fixing awkward true-false questions...")
    fixed_content = simple_fix_all_awkward(filepath)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print("✅ Converted awkward patterns to proper questions")
    print("   - Extracted actual questions")
    print("   - Fixed answer format")
