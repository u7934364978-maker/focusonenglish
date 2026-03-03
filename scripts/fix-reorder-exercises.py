#!/usr/bin/env python3
"""
Converts single-option "Reorder Words" exercises into proper multiple-choice
exercises with 3 wrong word-order alternatives.

Input exercise:
  Q: "I need a small size"
  A: [[correct|correcto]]   ← useless

Output exercise:
  Q: "I need a small size"  (correct sentence shown as question hint)
  A: "I need a small size"  ← correct
  B: "Need I a small size"  ← wrong
  C: "I a need small size"  ← wrong
  D: "I need small a size"  ← wrong
"""
import re
from pathlib import Path

TS_DIR = Path('src/lib/course/a1')


def generate_wrong_orders(sentence):
    """Generate up to 3 wrong word orderings of the sentence."""
    # Strip trailing punctuation for manipulation, restore later
    punct = ''
    s = sentence.strip()
    if s.endswith('?'):
        punct = '?'
        s = s[:-1].strip()
    elif s.endswith('.'):
        punct = '.'
        s = s[:-1].strip()

    words = s.split()
    if len(words) < 3:
        return []

    wrong = []

    # Variant 1: swap first two words
    v1 = words.copy()
    v1[0], v1[1] = v1[1], v1[0]
    v1_str = ' '.join(v1) + punct
    if v1_str.lower() != sentence.lower():
        wrong.append(v1_str)

    # Variant 2: move last word to front
    v2 = words.copy()
    last = v2.pop()
    v2.insert(0, last)
    v2_str = ' '.join(v2) + punct
    if v2_str.lower() != sentence.lower() and v2_str.lower() != v1_str.lower():
        wrong.append(v2_str)

    # Variant 3: swap last two words
    v3 = words.copy()
    v3[-1], v3[-2] = v3[-2], v3[-1]
    v3_str = ' '.join(v3) + punct
    if (v3_str.lower() != sentence.lower() and
            v3_str.lower() != v1_str.lower() and
            v3_str.lower() != v2_str.lower()):
        wrong.append(v3_str)

    # Variant 4: reverse the middle words (keep first and last)
    if len(wrong) < 3 and len(words) >= 4:
        v4 = [words[0]] + list(reversed(words[1:-1])) + [words[-1]]
        v4_str = ' '.join(v4) + punct
        if v4_str.lower() != sentence.lower() and v4_str.lower() not in [w.lower() for w in wrong]:
            wrong.append(v4_str)

    return wrong[:3]


def looks_like_sentence(text):
    """Return True if text looks like a proper English sentence (not Spanish/scrambled)."""
    if not text:
        return False
    # Must start with a capital letter or common sentence starters
    first_char = text[0]
    if not (first_char.isupper() or first_char in ('I', '¿')):
        # Could be scrambled (starts with preposition/verb in lower)
        # But exclude clearly Spanish text
        if re.search(r'[áéíóúñü]', text):
            return False
    # Must have at least 2 words
    words = text.split()
    if len(words) < 2:
        return False
    # Exclude already-scrambled exercises (review units 40, 50, 60)
    # by checking if the last word is a common English function word stuck oddly
    return True


EXERCISE_RE = re.compile(
    r'("title":\s*"Reorder Words"[^[]*"instructions":\s*"([^"]+)"[^[]*"questions":\s*\[)(.*?)(\]\s*\})',
    re.DOTALL
)

QBLOCK_RE = re.compile(
    r'(\{[^{]*?"question":\s*"([^"]*?)"[^{]*?"options":\s*\[)(.*?)(\]\s*,\s*"correctAnswer":\s*(\d+)[^}]*\})',
    re.DOTALL
)


def scramble_sentence(sentence):
    """Create a scrambled version of the sentence for display as question."""
    s = sentence.strip()
    punct = ''
    if s.endswith('?'):
        punct = '?'
        s = s[:-1].strip()
    elif s.endswith('.'):
        punct = '.'
        s = s[:-1].strip()

    words = s.split()
    if len(words) < 3:
        return sentence

    # Rotate: move first word to last position
    scrambled = words[1:] + [words[0]]
    return ' '.join(scrambled) + punct


def fix_file(filepath):
    content = filepath.read_text(encoding='utf-8')
    changes = 0

    def fix_exercise(em):
        nonlocal changes
        questions_body = em.group(3)

        def fix_qblock(qm):
            nonlocal changes
            header = qm.group(1)
            question_text = qm.group(2)
            opts_str = qm.group(3)
            footer = qm.group(4)

            # Only fix if there's exactly 1 option [[correct|correcto]]
            if opts_str.count('[[') != 1:
                return qm.group(0)
            if 'correct|correcto' not in opts_str:
                return qm.group(0)

            # Skip scrambled questions (review units)
            if not looks_like_sentence(question_text):
                return qm.group(0)

            # Generate wrong word orders
            wrong_orders = generate_wrong_orders(question_text)
            if not wrong_orders:
                return qm.group(0)

            # Scramble the question text so the answer isn't visible upfront
            scrambled_q = scramble_sentence(question_text)

            # Build new options: correct first, then wrong alternatives
            correct_tok = f'[[{question_text}|{question_text}]]'
            all_opts = [f'"{correct_tok}"'] + [f'"[[{w}|{w}]]"' for w in wrong_orders]

            indent = '\n            '
            new_opts = indent + f',{indent}'.join(all_opts) + '\n          '

            # Update question text to scrambled version
            new_header = header.replace(
                f'"question": "{question_text}"',
                f'"question": "{scrambled_q}"'
            )
            # Keep correctAnswer: 0 (first option is correct)
            new_footer = re.sub(r'"correctAnswer":\s*\d+', '"correctAnswer": 0', footer)

            changes += 1
            return new_header + new_opts + new_footer

        new_body = QBLOCK_RE.sub(fix_qblock, questions_body)
        if new_body != questions_body:
            return em.group(1) + new_body + em.group(4)
        return em.group(0)

    new_content = EXERCISE_RE.sub(fix_exercise, content)
    if new_content != content:
        filepath.write_text(new_content, encoding='utf-8')
    return changes


def main():
    print('=== Converting single-option Reorder Words → proper MC ===\n')
    total = 0
    for f in sorted(TS_DIR.glob('unit-*.ts')):
        n = fix_file(f)
        if n > 0:
            print(f'  {f.name}: {n} exercises converted')
            total += n
    print(f'\nTotal: {total} exercises converted')


if __name__ == '__main__':
    main()
