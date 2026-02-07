import json
import os
import sys

target_dir = "src/content/cursos/ingles-a2"

def validate_unit(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        return [f"JSON Parse Error: {str(e)}"]
        
    errors = []
    # Check course metadata
    if 'course' not in data:
        errors.append("Missing 'course' metadata object")
    else:
        course = data['course']
        if 'unit_id' not in course: errors.append("Missing 'course.unit_id'")
        if 'unit_title' not in course: errors.append("Missing 'course.unit_title'")
        if 'level' not in course or course['level'] != 'A2': errors.append("Missing or invalid 'course.level'")

    # Check blocks and content
    if 'blocks' not in data or not isinstance(data['blocks'], list):
        errors.append("Missing or invalid 'blocks' list")
    else:
        total_interactions = 0
        for b_idx, block in enumerate(data['blocks']):
            if 'block_id' not in block: errors.append(f"Block {b_idx} missing 'block_id'")
            if 'content' not in block or not isinstance(block['content'], list):
                errors.append(f"Block {b_idx} missing or invalid 'content' list")
                continue
            
            for i_idx, inter in enumerate(block['content']):
                total_interactions += 1
                if 'interaction_id' not in inter: errors.append(f"Interaction {total_interactions} missing 'interaction_id'")
                if 'type' not in inter: errors.append(f"Interaction {total_interactions} missing 'type'")
                
                itype = inter.get('type')
                if itype == 'multiple_choice':
                    if 'options' not in inter: errors.append(f"Interaction {total_interactions} (multiple_choice) missing 'options'")
                    if 'correct_answer' not in inter: errors.append(f"Interaction {total_interactions} (multiple_choice) missing 'correct_answer'")
                elif itype == 'reorder_words':
                    if 'options' not in inter: errors.append(f"Interaction {total_interactions} (reorder_words) missing 'options'")
                    if 'correct_answer' not in inter: errors.append(f"Interaction {total_interactions} (reorder_words) missing 'correct_answer'")
                elif itype == 'fill_blanks':
                    if 'stimulus_en' not in inter: errors.append(f"Interaction {total_interactions} (fill_blanks) missing 'stimulus_en'")
                    if 'correct_answer' not in inter: errors.append(f"Interaction {total_interactions} (fill_blanks) missing 'correct_answer'")

        if total_interactions != 100:
            errors.append(f"Expected 100 interactions total, found {total_interactions}")
    
    return errors

all_errors = {}
for i in range(1, 61):
    file_name = f"unit{i}.json"
    file_path = os.path.join(target_dir, file_name)
    if not os.path.exists(file_path):
        all_errors[file_name] = ["File does not exist"]
        continue
    
    unit_errors = validate_unit(file_path)
    if unit_errors:
        all_errors[file_name] = unit_errors

if not all_errors:
    print("✅ All 60 units validated successfully with the NEW structure!")
else:
    for file, errors in all_errors.items():
        print(f"❌ {file}:")
        for err in errors:
            print(f"  - {err}")
    sys.exit(1)
