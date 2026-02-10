import os
import json
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_story(exercises):
    # Prepare context for AI
    exercises_desc = []
    for ex in exercises:
        desc = f"Question: {ex['prompt']}"
        if ex['options']:
            desc += f"\nOptions: {', '.join(ex['options'])}"
        desc += f"\nCorrect Answer: {ex['correct_answer']}"
        exercises_desc.append(desc)
    
    prompt = f"""
You are an expert English teacher for A1 level students.
I have a set of reading comprehension exercises for an English course, but the original story is missing.
Based on the following questions and answers, write a VERY SIMPLE and short story (40-80 words) in English that provides all the information needed to answer these questions.

The level is A1 (Beginner), so use simple vocabulary and the present simple or past simple (was/were) depending on the context.

Exercises:
{chr(10).join(exercises_desc)}

Story title: Short Story

Please return ONLY the story text.
"""
    
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )
    
    return response.choices[0].message.content.strip().replace('"', '')

def process_fixes(fix_file):
    with open(fix_file, 'r', encoding='utf-8') as f:
        fixes = json.load(f)
    
    # Group by file and block
    groups = {}
    for fix in fixes:
        key = (fix['file'], fix['block_idx'])
        if key not in groups:
            groups[key] = []
        groups[key].append(fix)
    
    for (file_path, block_idx), exercises in groups.items():
        print(f"Processing {file_path} (Block {block_idx})...")
        
        # Generate one story for the whole block
        story = generate_story(exercises)
        print(f"Generated Story: {story[:50]}...")
        
        # Update the JSON file
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # We'll add the stimulus to ALL reading exercises in this block
        block = data['blocks'][block_idx]
        for interaction in block['content']:
            mastery_tag = interaction.get('mastery_tag')
            concept_tags = interaction.get('concept_tags', [])
            if mastery_tag == 'reading' or 'reading' in concept_tags:
                interaction['stimulus_en'] = story
                # Also ensure 'reading' is in concept_tags
                if 'reading' not in concept_tags:
                    concept_tags.append('reading')
                interaction['concept_tags'] = concept_tags
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"Updated {file_path}")

if __name__ == "__main__":
    process_fixes('remaining_fixes.json')
