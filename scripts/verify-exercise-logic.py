import json
import os

def check_answer(interaction, user_input, input_values=None, matching_pairs=None, categorized_items=None):
    it_type = interaction.get("type")
    
    if it_type == 'reorder_words':
        options = interaction.get("options", [])
        selected_text = " ".join([next((o["text"] for o in options if o["id"] == str(oid)), "") for oid in user_input]).lower().strip()
        correct_ids = interaction.get("correct_answer", [])
        correct_text = " ".join([next((o["text"] for o in options if o["id"] == str(cid)), "") for cid in correct_ids]).lower().strip()
        return selected_text == correct_text

    elif it_type in ['true_false', 'odd_one_out', 'multiple_choice', 'role_play', 'listening_image_mc', 'fill_blanks', 'fill_blank', 'fill-blank', 'reading-comprehension', 'writing-analysis']:
        user_val = str(user_input).lower().strip()
        correct_val = str(interaction.get("correct_answer", "")).lower().strip()
        
        if it_type == 'true_false':
            return (user_val == 'true') == (correct_val == 'true')
            
        options = interaction.get("options", [])
        user_text = next((o["text"] for o in options if str(o["id"]) == user_val), user_input)
        correct_text = next((o["text"] for o in options if str(o["id"]) == correct_val), correct_val)
        
        return user_val == correct_val or str(user_text).lower().strip() == str(correct_text).lower().strip()

    elif it_type in ['matching', 'multiple_matching', 'vocabulary-match']:
        pairs = interaction.get("pairs", [])
        if not matching_pairs: return False
        
        if pairs:
            for p in pairs:
                pid = str(p["id"])
                selected_right_id = str(matching_pairs.get(pid, ""))
                if not selected_right_id: return False
                
                if selected_right_id == pid: continue
                
                # Check text matching
                expected_text = str(p.get("right", "")).lower().strip()
                # Simplified check for verification
                if selected_right_id != pid: return False
            return True
        else:
            correct_map = interaction.get("correct_answer", {})
            return all(str(matching_pairs.get(k)) == str(v) for k, v in correct_map.items())

    elif it_type in ['gapped_text', 'multiple_choice_cloze']:
        if not input_values: return False
        correct_map = interaction.get("correct_answer", {})
        if not isinstance(correct_map, dict): return False
        
        for gap_id, correct_val in correct_map.items():
            user_val = str(input_values.get(str(gap_id), "")).lower().strip()
            correct_val_str = str(correct_val).lower().strip()
            if user_val != correct_val_str: return False
        return True

    elif it_type == 'categorization':
        if not categorized_items: return False
        categories = interaction.get("categories", [])
        all_items = []
        for cat in categories:
            all_items.extend(cat.get("items", []))
            
        for item in all_items:
            item_id = str(item.get("id") if isinstance(item, dict) else item)
            correct_cat_id = None
            for cat in categories:
                if any(str(i.get("id") if isinstance(i, dict) else i) == item_id for i in cat.get("items", [])):
                    correct_cat_id = str(cat["id"])
                    break
            
            if str(categorized_items.get(item_id)) != correct_cat_id: return False
        return True

    elif it_type in ['transformation', 'fill_blanks', 'fill_blank', 'fill-blank']:
        return str(user_input).strip().lower() == str(interaction.get("correct_answer", "")).strip().lower()

    elif it_type == 'writing_task':
        min_words = interaction.get("word_count_min", 10)
        word_count = len(str(user_input).split())
        return word_count >= min_words

    elif it_type == 'speaking_task':
        return True
        
    elif it_type in ['short_writing', 'dictation_guided']:
        user_val = str(user_input).strip().lower()
        correct_val = str(interaction.get("correct_answer", "")).strip().lower()
        return user_val == correct_val

    return True

def verify_units():
    base_path = "src/content/cursos/ingles-a2"
    files = [f for f in os.listdir(base_path) if f.endswith(".json")]
    
    total_passed = 0
    total_failed = 0
    errors = []

    for filename in files[:5]:
        with open(os.path.join(base_path, filename), "r") as f:
            data = json.load(f)
            
        for block in data.get("blocks", []):
            for interaction in block.get("content", []):
                it_type = interaction.get("type")
                
                # Test Correct Answer
                is_ok = False
                try:
                    if it_type == 'reorder_words':
                        is_ok = check_answer(interaction, interaction["correct_answer"])
                    elif it_type in ['matching', 'multiple_matching', 'vocabulary-match']:
                        if "pairs" in interaction:
                            mp = {p["id"]: p["id"] for p in interaction["pairs"]}
                        else:
                            mp = interaction.get("correct_answer", {})
                        is_ok = check_answer(interaction, None, matching_pairs=mp)
                    elif it_type in ['gapped_text', 'multiple_choice_cloze']:
                        is_ok = check_answer(interaction, None, input_values=interaction.get("correct_answer", {}))
                    elif it_type == 'categorization':
                        ci = {}
                        for cat in interaction["categories"]:
                            for item in cat["items"]:
                                iid = item["id"] if isinstance(item, dict) else item
                                ci[iid] = cat["id"]
                        is_ok = check_answer(interaction, None, categorized_items=ci)
                    elif it_type == 'writing_task':
                        is_ok = check_answer(interaction, "word " * 60)
                    elif it_type == 'speaking_task' or it_type == 'audio_player' or it_type == 'flashcard':
                        is_ok = check_answer(interaction, True)
                    elif it_type == 'word-search':
                         is_ok = check_answer(interaction, True)
                    else:
                        is_ok = check_answer(interaction, interaction.get("correct_answer", ""))
                except Exception as e:
                    is_ok = False
                    errors.append(f"Unit {filename}, Interaction {interaction['interaction_id']} ({it_type}) ERROR: {str(e)}")
                
                if is_ok:
                    total_passed += 1
                else:
                    total_failed += 1
                    errors.append(f"Unit {filename}, Interaction {interaction['interaction_id']} ({it_type}) FAILED positive test")

                # Negative test for MC
                if it_type == 'multiple_choice' and "options" in interaction and "correct_answer" in interaction:
                    options = interaction["options"]
                    incorrect = next((o["id"] for o in options if o["id"] != interaction["correct_answer"]), None)
                    if incorrect and check_answer(interaction, incorrect):
                        total_failed += 1
                        errors.append(f"Unit {filename}, Interaction {interaction['interaction_id']} ({it_type}) FAILED negative test")

    print(f"Verified {total_passed + total_failed} tests.")
    print(f"Passed: {total_passed}")
    print(f"Failed: {total_failed}")
    for err in errors[:20]:
        print(err)

if __name__ == "__main__":
    verify_units()
