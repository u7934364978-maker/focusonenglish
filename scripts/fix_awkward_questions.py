#!/usr/bin/env python3
"""
Fix awkward "The correct answer is X for: Y" patterns
Convert to proper multiple-choice format
"""

import re

def fix_awkward_questions(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern: question: 'The correct answer is "X" for: Y'
    # We need to extract X and Y, then create proper multiple-choice
    
    pattern = r"""(\s+\{
\s+id: '([^']+)',
\s+type: ')([^']+)(',
\s+question: ')The correct answer is "([^"]+)" for: ([^']+)(',
\s+)(correctAnswer: '[^']+',
\s+explanation: '[^']*',
\s+points: \d+
\s+\})"""
    
    def convert_question(match):
        prefix = match.group(1)
        q_id = match.group(2)
        old_type = match.group(3)
        type_suffix = match.group(4)
        question_prefix = match.group(5)
        stated_answer = match.group(6)
        actual_question = match.group(7)
        question_suffix = match.group(8)
        rest = match.group(9)
        
        # Generate plausible distractors based on context
        distractors = generate_distractors(actual_question, stated_answer)
        
        # Build multiple-choice question
        indent = "            "
        options_str = f"\n{indent}options: [\n"
        
        # Put correct answer in random position (let's put it second for now)
        all_options = [distractors[0], stated_answer, distractors[1], distractors[2]]
        for opt in all_options:
            options_str += f"{indent}  '{opt}',\n"
        options_str += f"{indent}],"
        
        return f"""{prefix}multiple-choice{type_suffix}
{question_prefix}{actual_question}{question_suffix}
{indent}{options_str}
{indent}{rest}"""
    
    content = re.sub(pattern, convert_question, content, flags=re.MULTILINE | re.DOTALL)
    
    return content

def generate_distractors(question, correct_answer):
    """Generate plausible wrong answers based on question context"""
    # Simple distractor generation
    # In real implementation, these would be contextual
    
    common_distractors = {
        # Time-related
        "Three years": ["Two years", "Five years", "Six months"],
        "One year": ["Six months", "Two years", "Three years"],
        "23 minutes": ["15 minutes", "30 minutes", "45 minutes"],
        "Five years": ["Three years", "Seven years", "Ten years"],
        
        # Yes/No variants
        "Things we never tried": ["Things we tried", "Career choices", "Education decisions"],
        "Alternative paths can lead to valuable unexpected opportunities": [
            "Always stick to your original plan",
            "Career changes are always risky",
            "Planning is more important than flexibility"
        ],
        
        # Action-related
        "Keep the cue and reward but change the routine": [
            "Eliminate the cue completely",
            "Change only the reward",
            "Ignore the habit and it will disappear"
        ],
        "Give up the program": [
            "Keep trying despite difficulties",
            "Seek additional support",
            "Adjust their approach"
        ],
        
        # Value-related
        "Money is most important": [
            "Experience matters more than money",
            "Work-life balance is key",
            "Personal growth is primary"
        ],
        
        # Word definitions
        "irrefutable": ["refutable", "questionable", "debatable"],
        "constitute": ["conduct", "contribute", "construct"],
    }
    
    if correct_answer in common_distractors:
        return common_distractors[correct_answer]
    
    # Default generic distractors
    return ["Option A", "Option C", "Option D"]

if __name__ == '__main__':
    filepath = '/home/user/webapp/focusonenglish/lib/course-data-b2.ts'
    
    print("Fixing awkward question patterns...")
    
    # For now, let's use a simpler regex-based approach
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find and report all instances
    pattern = r"question: 'The correct answer is \"([^\"]+)\" for: ([^']+)'"
    matches = re.findall(pattern, content)
    
    print(f"Found {len(matches)} awkward questions to fix")
    for i, (answer, question) in enumerate(matches[:5], 1):
        print(f"  {i}. Q: {question[:50]}...")
        print(f"     A: {answer}")
    
    print("\n⚠️  Manual conversion recommended for quality")
    print("   These need context-specific distractors")
