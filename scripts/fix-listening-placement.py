#!/usr/bin/env python3
"""
Ensures listening/pronunciation exercises are ONLY in lesson 5 (positions 60-74).

For each unit-*.ts:
- Positions 0-59 (L1-L4): must be vocabulary, grammar, syntax, reading ONLY
- Positions 60-74 (L5): listening + pronunciation (keep as-is)

Stray listening/pronunciation exercises in positions 0-59 are converted to
vocabulary exercises with corrected instructions.
"""
import re
from pathlib import Path

TS_DIR = Path('src/lib/course/a1')
LISTENING_TOPICS = {'listening', 'pronunciation', 'phonetics'}

# How to relabel stray listening exercises
INSTRUCTION_MAP = {
    'escucha y escribe lo que oyes':  '¿Cuál es la frase correcta?',
    'escucha y completa la frase':    'Completa la frase:',
    'escucha la instrucción':         '¿Cuál es la instrucción correcta?',
    'escucha y repite':               'Identifica el patrón de pronunciación:',
    'practica la':                    'Identifica el patrón de pronunciación:',
    'la \'':                          'Identifica el patrón de pronunciación:',
    'escucha':                        '¿Cuál es la respuesta correcta?',
}


def relabel_instruction(original):
    """Return a relabeled instruction for a stray listening exercise."""
    orig_lower = original.lower()
    for key, replacement in INSTRUCTION_MAP.items():
        if key in orig_lower:
            return replacement
    return '¿Cuál es la respuesta correcta?'


def fix_file(filepath):
    content = filepath.read_text(encoding='utf-8')

    # Extract all exercise blocks (each starts with { "id": ... and ends with topicName: ... })
    # We'll split by finding the positions of each exercise
    BLOCK_RE = re.compile(
        r'(\{[^{]*?"topic":\s*")([^"]+)(".*?"topicName":\s*")([^"]+)(")',
        re.DOTALL
    )

    # Count exercise index by tracking occurrences
    # We need to know the position of each exercise in the array
    # Use a simple approach: find all "topic" field occurrences and their positions

    # Find all exercise blocks preserving order
    # Each exercise object contains exactly ONE "topic" field at the top level
    topic_positions = [(m.start(), m.group(1), m.group(1))
                       for m in re.finditer(r'"topic":\s*"([^"]+)"', content)]

    if len(topic_positions) < 60:
        return 0  # Not enough exercises, skip

    changes = 0
    new_content = content

    # Process exercises at positions 0-59 (indices 0-59 in the topic list)
    stray_indices = [
        i for i, (pos, topic, topicName) in enumerate(topic_positions[:60])
        if topic.lower() in LISTENING_TOPICS or topicName.lower() in LISTENING_TOPICS
    ]

    if not stray_indices:
        return 0

    # Work backwards through the file to preserve positions
    for ex_idx in reversed(stray_indices):
        pos, topic, topicName = topic_positions[ex_idx]

        # Find the exercise block containing this topic occurrence
        # Look backwards from pos for the opening { of this exercise
        block_start = new_content.rfind('\n  {', 0, pos)
        if block_start == -1:
            continue

        # Find the closing } of this exercise block (next "\n  {" or end of array)
        next_block = new_content.find('\n  {', block_start + 1)
        if next_block == -1:
            next_block = new_content.find('\n]', block_start)
        if next_block == -1:
            continue

        block = new_content[block_start:next_block]

        # Find the instruction in this block
        instr_match = re.search(r'"instructions":\s*"([^"]+)"', block)
        original_instruction = instr_match.group(1) if instr_match else ''
        new_instruction = relabel_instruction(original_instruction)

        # Build the replacement block:
        # 1. Change topic and topicName to "vocabulary"
        new_block = re.sub(r'"topic":\s*"[^"]+"', '"topic": "vocabulary"', block, count=1)
        new_block = re.sub(r'"topicName":\s*"[^"]+"', '"topicName": "vocabulary"', new_block, count=1)
        # 2. Change instruction
        if instr_match and new_instruction != original_instruction:
            new_block = new_block.replace(
                f'"instructions": "{original_instruction}"',
                f'"instructions": "{new_instruction}"',
                1
            )

        if new_block != block:
            new_content = new_content[:block_start] + new_block + new_content[next_block:]
            changes += 1

    if changes > 0:
        filepath.write_text(new_content, encoding='utf-8')

    return changes


def main():
    print('=== Moving listening exercises to lesson 5 only ===\n')
    total = 0
    for f in sorted(TS_DIR.glob('unit-*.ts')):
        n = fix_file(f)
        if n > 0:
            print(f'  {f.name}: {n} stray exercises relabeled')
            total += n
    print(f'\nTotal: {total} exercises relabeled as vocabulary')


if __name__ == '__main__':
    main()
