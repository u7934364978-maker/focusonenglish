import os
import re

def refactor_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Handle explicit question objects (like in Unit 6, 7, 8, 30)
    def fix_explicit_options(match):
        options_str = match.group(1)
        correct_answer = match.group(2)
        
        # Split options and clean them
        options = [opt.strip().strip("'").strip('"') for opt in options_str.split(',')]
        
        # If correct_answer is not the first, or if there are distractors to fix
        if options[0] != correct_answer or 'distractor1' in options:
            # Create better distractors if needed
            if 'distractor1' in options:
                # We'll use some generic but grammatically similar distractors if we can't be specific
                # However, for better results, I should probably do this more carefully.
                # For now, let's just ensure order if they are already real distractors.
                pass
            
            if correct_answer in options:
                options.remove(correct_answer)
            options.insert(0, correct_answer)
            
            new_options_str = ", ".join([f"'{opt}'" for opt in options])
            return f"options: [{new_options_str}],\n      correctAnswer: '{correct_answer}'"
        return match.group(0)

    # Simplified regex for explicit options/correctAnswer pair
    content = re.sub(r"options:\s*\[(.*?)\]\s*,\s*correctAnswer:\s*['\"](.*?)['\"]", fix_explicit_options, content, flags=re.DOTALL)

    # 2. Handle indexed arrays (like in Unit 4, 5)
    # This is trickier. Let's look for the options array and correctAnswer array.
    # We'll assume they are aligned.
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# For now, I'll manually refactor units because the structure varies and I want high quality distractors.
