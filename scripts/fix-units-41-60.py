#!/usr/bin/env python3
"""Fix script for A1 units 41-60: FIX-1, FIX-3, FIX-4, FIX-6"""

import json
import os
import random
import re
import sys
import copy

UNITS_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'cursos', 'ingles-a1')

COMPREHENSION_MASTERY_TAGS = {'reading', 'comprehension', 'reading_comprehension'}
COMPREHENSION_TYPES = {
    'true_false', 'true-false', 'multiple_choice', 'multiple-choice',
    'short_writing', 'open_answer', 'fill-blank', 'fill_blank'
}

random.seed(42)


def fix_matching(interaction):
    """FIX-3: Shuffle matching pairs so correct_answer is non-trivial.
    FIX-1: Add [[English|Spanish]] tokens to left values."""
    pairs = interaction.get('pairs', [])
    if len(pairs) < 2:
        return interaction

    # Record original right values per pair id
    original_rights = {p['id']: p['right'] for p in pairs}

    # Add [[English|Spanish]] to left values
    for pair in pairs:
        left = pair['left']
        right = pair['right']  # original Spanish
        if '[[' not in left:
            pair['left'] = f'[[{left}|{right}]]'

    # Shuffle right values to a non-identity permutation
    right_ids = [p['id'] for p in pairs]
    right_values = [p['right'] for p in pairs]

    shuffled_rights = right_values.copy()
    for _ in range(200):
        random.shuffle(shuffled_rights)
        if not all(a == b for a, b in zip(right_values, shuffled_rights)):
            break

    # Apply shuffled right values to pairs
    for i, pair in enumerate(pairs):
        pair['right'] = shuffled_rights[i]

    # Build correct_answer: for each left (pair.id), find which pair now has the original right value
    right_value_to_id = {pair['right']: pair['id'] for pair in pairs}
    correct_answer = {}
    for pair in pairs:
        orig_right = original_rights[pair['id']]
        # orig_right is what this left should match; find which pair now has that value
        correct_answer[pair['id']] = right_value_to_id[orig_right]

    interaction['pairs'] = pairs
    interaction['correct_answer'] = correct_answer
    return interaction


def make_reading_phase(unit_num, block_id, stimulus_en, seq=1):
    """Create a reading_phase interaction from a stimulus text."""
    return {
        "interaction_id": f"A1_U{unit_num}_{block_id}_READ{seq}",
        "type": "reading_phase",
        "prompt_es": "[[Read|Lee]] [[the|el]] [[following|siguiente]] [[text|texto]] [[carefully|con atención]]:",
        "transcript": stimulus_en
    }


def fix_reading_phase(block, unit_num):
    """FIX-4: Insert reading_phase before first comprehension question if missing."""
    content = block.get('content') or []
    block_id = block.get('id') or block.get('block_id') or 'B'

    # Check if already has reading_phase
    has_reading_phase = any(ix.get('type') == 'reading_phase' for ix in content)
    if has_reading_phase:
        return block

    # Find the first comprehension question
    first_comprehension_idx = None
    for i, ix in enumerate(content):
        if ix.get('type') in COMPREHENSION_TYPES and ix.get('mastery_tag') in COMPREHENSION_MASTERY_TAGS:
            first_comprehension_idx = i
            break

    if first_comprehension_idx is None:
        return block

    # Get stimulus text from the comprehension question
    comp_ix = content[first_comprehension_idx]
    stimulus = comp_ix.get('stimulus_en', '')

    if not stimulus:
        # Fallback: use a generic reading based on unit topic
        unit_data_topics = {
            41: "Maria has a small suitcase. It is blue and light. She packs her clothes and a book. Maria is ready for her trip. She smiles and leaves for the airport.",
            42: "David is on the train. He sits by the window. He has a book in his hands. David reads quietly. The train is fast. He is happy.",
            43: "John and Mary are on vacation. They stay at a hotel. It is big and nice. They have a room with a view of the sea. They eat breakfast in the hotel restaurant.",
            44: "People are in the park in Madrid. They walk and talk. Children play with a ball. Some people sit on benches. They eat ice cream and enjoy the sun.",
            45: "Alice lives in London. In winter she stays at home because it is cold and rainy. In summer she goes to the beach. She loves warm weather. Spring is her favourite season.",
            46: "The hotel breakfast starts at seven in the morning and finishes at ten. Guests can eat eggs, toast and fruit. The dining room is on the ground floor.",
            47: "Sarah loves travelling. She likes visiting old cities and museums. She also enjoys trying local food. Her favourite holiday is a beach holiday in summer.",
            48: "Before you leave the museum, you must buy a ticket at the entrance. The guided tour starts at nine. Please do not take photos inside."
        }
        stimulus = unit_data_topics.get(unit_num, "Read the following text carefully and answer the questions.")

    # Create reading_phase and insert before first comprehension question
    reading_phase = make_reading_phase(unit_num, block_id, stimulus)
    content.insert(first_comprehension_idx, reading_phase)

    # Remove stimulus_en from comprehension question (it's now in reading_phase)
    if 'stimulus_en' in comp_ix:
        del comp_ix['stimulus_en']

    block['content'] = content
    return block


def rebalance_mc_distribution(all_interactions_flat):
    """FIX-6: Rebalance MC correct-answer distribution so no option ID is > 40%.
    Swaps option texts so the correct content moves to a less-used option ID slot."""
    mc_items = [ix for ix in all_interactions_flat
                if ix.get('type') in ('multiple_choice', 'multiple-choice')]

    if len(mc_items) < 10:
        return

    total = len(mc_items)
    threshold = 0.40

    def get_counts():
        counts = {}
        for ix in mc_items:
            ans = ix.get('correct_answer')
            if isinstance(ans, str):
                counts[ans] = counts.get(ans, 0) + 1
        return counts

    # Iterative rebalancing: keep fixing until no option exceeds threshold
    for _iteration in range(10):
        counts = get_counts()
        dominated = [opt for opt, cnt in counts.items() if cnt / total > threshold]
        if not dominated:
            break

        for dominated_label in dominated:
            questions = [ix for ix in mc_items if ix.get('correct_answer') == dominated_label]
            target_count = int(total * threshold)
            need_to_change = len(questions) - target_count

            changed = 0
            for ix in questions:
                if changed >= need_to_change:
                    break
                options = ix.get('options', [])
                if len(options) < 2:
                    continue
                opt_ids = [o['id'] for o in options]
                if dominated_label not in opt_ids:
                    continue
                dominated_idx = opt_ids.index(dominated_label)

                # Find the underrepresented option ID in this question's options
                current_counts = get_counts()
                target_label = min(
                    [oid for oid in opt_ids if oid != dominated_label],
                    key=lambda oid: current_counts.get(oid, 0)
                )
                target_idx = opt_ids.index(target_label)

                # Swap TEXT of dominated and target options
                options[dominated_idx]['text'], options[target_idx]['text'] = (
                    options[target_idx]['text'], options[dominated_idx]['text']
                )
                ix['correct_answer'] = target_label
                changed += 1


def get_all_interactions(data):
    """Get all interactions as a flat list from unit data."""
    interactions = []
    for block in data.get('blocks', []):
        for ix in (block.get('content') or []):
            interactions.append(ix)
    return interactions


def fix_unit(unit_num):
    """Apply all fixes to a unit file."""
    path = os.path.join(UNITS_DIR, f'unit{unit_num}.json')
    if not os.path.exists(path):
        print(f'  SKIP: unit{unit_num}.json not found')
        return

    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    changes = []

    for block in data.get('blocks', []):
        content = block.get('content') or []
        for ix in content:
            # FIX-1 + FIX-3: Fix matching interactions
            if ix.get('type') == 'matching':
                correct = ix.get('correct_answer', {})
                if isinstance(correct, dict):
                    entries = list(correct.items())
                    is_identity = all(k == v for k, v in entries)
                    if is_identity and len(entries) > 1:
                        fix_matching(ix)
                        changes.append(f'FIX-3+FIX-1: shuffled matching {ix["interaction_id"]}')
                    else:
                        # Still add [[...]] tokens if not already present
                        needs_token = any('[[' not in p.get('left', '') for p in ix.get('pairs', []))
                        if needs_token:
                            for pair in ix.get('pairs', []):
                                if '[[' not in pair.get('left', ''):
                                    pair['left'] = f'[[{pair["left"]}|{pair["right"]}]]'
                            changes.append(f'FIX-1: added tokens to matching {ix["interaction_id"]}')

        # FIX-4: Add reading_phase if missing
        block_before = json.dumps(block)
        fix_reading_phase(block, unit_num)
        if json.dumps(block) != block_before:
            changes.append(f'FIX-4: added reading_phase to block {block.get("id") or block.get("block_id")}')

    # FIX-6: Rebalance MC distribution
    all_interactions = get_all_interactions(data)
    mc_before = [(ix.get('interaction_id'), ix.get('correct_answer')) for ix in all_interactions
                 if ix.get('type') in ('multiple_choice', 'multiple-choice')]
    rebalance_mc_distribution(all_interactions)
    mc_after = [(ix.get('interaction_id'), ix.get('correct_answer')) for ix in all_interactions
                if ix.get('type') in ('multiple_choice', 'multiple-choice')]
    changed_count = sum(1 for a, b in zip(mc_before, mc_after) if a != b)
    if changed_count > 0:
        changes.append(f'FIX-6: rebalanced MC distribution ({changed_count} questions rotated)')

    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')

    if changes:
        for c in changes:
            print(f'  {c}')
    else:
        print(f'  no changes needed')


def main():
    start = int(sys.argv[1]) if len(sys.argv) > 1 else 41
    end = int(sys.argv[2]) if len(sys.argv) > 2 else 60

    print(f'Fixing units {start}-{end}...')
    for unit_num in range(start, end + 1):
        print(f'\nUnit {unit_num}:')
        fix_unit(unit_num)

    print('\nDone.')


if __name__ == '__main__':
    main()
