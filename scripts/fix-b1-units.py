import re
import sys
import json

def process_unit(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the UNIT_XX_EXERCISES array
    match = re.search(r'export const UNIT_\d+_EXERCISES: Exercise\[\] = (\[.*\]);', content, re.DOTALL)
    if not match:
        print(f"Could not find exercises array in {file_path}")
        return

    exercises_json = match.group(1)
    try:
        exercises = json.loads(exercises_json)
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
        return

    for ex in exercises:
        # Fix fill-blank
        if ex['type'] == 'fill-blank':
            # Handle both cases: questions array or single question in content
            if 'questions' in ex['content']:
                for q in ex['content']['questions']:
                    q['question'] = re.sub(r'\[\[(.*?)\|(.*?)\]\]', r'\1', q['question'])
            elif 'question' in ex['content']:
                ex['content']['question'] = re.sub(r'\[\[(.*?)\|(.*?)\]\]', r'\1', ex['content']['question'])
        
        # Fix sentence-building
        if ex['type'] == 'sentence-building':
            if 'questions' in ex['content']:
                q = ex['content']['questions'][0]
                correct_sentence = q['question']
                ex['content']['correctSentence'] = correct_sentence
                ex['content']['explanation'] = q.get('explanation', '')
                ex['content']['audio'] = q.get('audio', '')
                del ex['content']['questions']
            
            if 'correctSentence' in ex['content']:
                correct_sentence = ex['content']['correctSentence']
                parts = re.findall(r'\[\[.*?\|.*?\]\]|[.,!?;:]|\S+', correct_sentence)
                ex['content']['words'] = parts

    # Serialize back to string
    new_exercises_json = json.dumps(exercises, indent=2, ensure_ascii=False)
    
    # Restore the export statement
    new_content = content[:match.start(1)] + new_exercises_json + content[match.end(1):]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    process_unit(sys.argv[1])
