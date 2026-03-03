#!/usr/bin/env python3
"""
Fixes placeholder options in unit-*.ts exercises.

Handles three cases:
1. Fill-in-blank exercises with [[o1|opción 1]] distractors → replace with real words
2. "Escucha y escribe" listening exercises with only 1 real option + o1 → add wrong alternative
3. "The [[X|Y]] is here." broken question format → replace with proper question
"""
import re
import json
from pathlib import Path

TS_DIR = Path('src/lib/course/a1')

# ── Distractor pools by category ──────────────────────────────────────────────

MODAL_POOL       = ['can', "can't", 'could', 'should', 'must', 'may', 'would', 'will', "won't", "couldn't", "shouldn't", "mustn't"]
PREP_POOL        = ['at', 'in', 'on', 'to', 'for', 'from', 'with', 'by', 'of', 'near', 'under', 'over']
FREQ_POOL        = ['always', 'usually', 'often', 'sometimes', 'rarely', 'never', 'seldom', 'occasionally']
BE_POOL          = ['am', 'is', 'are', 'was', 'were', "isn't", "aren't", "wasn't", "weren't"]
DO_POOL          = ['do', 'does', "don't", "doesn't", 'did', "didn't"]
HAVE_POOL        = ['have', 'has', 'had', "haven't", "hasn't", "hadn't"]
ARTICLE_POOL     = ['a', 'an', 'the', 'some', 'any']
Q_WORD_POOL      = ['what', 'where', 'when', 'who', 'why', 'how', 'which', 'whose']
CONJ_POOL        = ['and', 'but', 'because', 'so', 'or', 'although', 'however', 'if', 'when']
POSS_POOL        = ['my', 'your', 'his', 'her', 'its', 'our', 'their']
PRONOUN_POOL     = ['I', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'us', 'them']
TIME_POOL        = ['today', 'yesterday', 'tomorrow', 'now', 'then', 'soon', 'later', 'before', 'after', 'ago']
ADJ_POOL         = ['big', 'small', 'old', 'new', 'hot', 'cold', 'good', 'bad', 'fast', 'slow', 'long', 'short', 'tall', 'young']

# Word → (category, index_in_pool) for distractor lookup
WORD_CATEGORY = {}

for w in MODAL_POOL:     WORD_CATEGORY[w.lower()] = MODAL_POOL
for w in PREP_POOL:      WORD_CATEGORY[w.lower()] = PREP_POOL
for w in FREQ_POOL:      WORD_CATEGORY[w.lower()] = FREQ_POOL
for w in BE_POOL:        WORD_CATEGORY[w.lower()] = BE_POOL
for w in DO_POOL:        WORD_CATEGORY[w.lower()] = DO_POOL
for w in HAVE_POOL:      WORD_CATEGORY[w.lower()] = HAVE_POOL
for w in ARTICLE_POOL:   WORD_CATEGORY[w.lower()] = ARTICLE_POOL
for w in Q_WORD_POOL:    WORD_CATEGORY[w.lower()] = Q_WORD_POOL
for w in CONJ_POOL:      WORD_CATEGORY[w.lower()] = CONJ_POOL
for w in POSS_POOL:      WORD_CATEGORY[w.lower()] = POSS_POOL
for w in PRONOUN_POOL:   WORD_CATEGORY[w.lower()] = PRONOUN_POOL
for w in TIME_POOL:      WORD_CATEGORY[w.lower()] = TIME_POOL
for w in ADJ_POOL:       WORD_CATEGORY[w.lower()] = ADJ_POOL

def get_distractors(correct_word, n=3, existing=None):
    """Return n distractors for a correct_word, avoiding existing options."""
    existing_lower = {(e or '').lower() for e in (existing or [])}
    pool = WORD_CATEGORY.get(correct_word.lower())
    if not pool:
        # Fallback: generic grammar distractors
        pool = MODAL_POOL + PREP_POOL + DO_POOL + BE_POOL
    candidates = [w for w in pool if w.lower() != correct_word.lower() and w.lower() not in existing_lower]
    # Return first n unique candidates
    seen = []
    result = []
    for c in candidates:
        if c.lower() not in seen and len(result) < n:
            result.append(c)
            seen.append(c.lower())
    # Pad with generic words if not enough
    fallback = ['do', 'is', 'the', 'in', 'can', 'will', 'has', 'was', 'by', 'on']
    for fb in fallback:
        if len(result) >= n:
            break
        if fb.lower() != correct_word.lower() and fb.lower() not in seen:
            result.append(fb)
            seen.append(fb.lower())
    return result[:n]

# ── Word-swap map for creating wrong sentence alternatives ─────────────────────

WORD_SWAP = {
    'passport': ['ticket', 'boarding pass', 'luggage'],
    'ticket': ['passport', 'luggage', 'boarding pass'],
    'luggage': ['passport', 'ticket', 'boarding pass'],
    'flight': ['train', 'bus', 'trip'],
    'airport': ['station', 'hotel', 'port'],
    'show': ['give', 'take', 'lose'],
    'please': ['sorry', 'excuse me', 'thank you'],
    'on time': ['late', 'delayed', 'cancelled'],
    'late': ['on time', 'early', 'ready'],
    'delayed': ['on time', 'cancelled', 'early'],
    'cancelled': ['delayed', 'late', 'on time'],
    'open': ['closed', 'empty', 'full'],
    'closed': ['open', 'busy', 'ready'],
    'can': ["can't", 'will', 'should'],
    "can't": ['can', 'won\'t', 'shouldn\'t'],
    'have to': ["don't have to", 'can', 'want to'],
    "don't have to": ['have to', 'can\'t', 'must'],
    'always': ['never', 'sometimes', 'rarely'],
    'never': ['always', 'often', 'sometimes'],
    'big': ['small', 'old', 'new'],
    'small': ['big', 'large', 'tall'],
    'shop': ['café', 'hotel', 'school'],
    'price': ['size', 'colour', 'style'],
    'blue': ['red', 'green', 'black'],
    'red': ['blue', 'green', 'white'],
    'kitchen': ['bedroom', 'bathroom', 'living room'],
    'bedroom': ['kitchen', 'bathroom', 'garden'],
    'buy': ['sell', 'find', 'lose'],
    'sell': ['buy', 'keep', 'find'],
    'go': ['come', 'stay', 'leave'],
    'come': ['go', 'stay', 'leave'],
    'eat': ['drink', 'cook', 'sleep'],
    'drink': ['eat', 'cook', 'sleep'],
    'work': ['study', 'sleep', 'play'],
    'study': ['work', 'play', 'rest'],
    'home': ['work', 'school', 'town'],
    'school': ['home', 'work', 'park'],
    'morning': ['afternoon', 'evening', 'night'],
    'afternoon': ['morning', 'evening', 'night'],
    'yesterday': ['today', 'tomorrow', 'last week'],
    'today': ['yesterday', 'tomorrow', 'now'],
    'good': ['bad', 'new', 'old'],
    'bad': ['good', 'great', 'nice'],
}

def make_wrong_sentence(correct_sentence):
    """Create a plausible wrong alternative by swapping one key word."""
    sentence_lower = correct_sentence.lower()
    for word, alternatives in WORD_SWAP.items():
        pattern = re.compile(r'\b' + re.escape(word) + r'\b', re.IGNORECASE)
        if pattern.search(correct_sentence):
            wrong = pattern.sub(alternatives[0], correct_sentence, count=1)
            if wrong.lower() != correct_sentence.lower():
                return wrong
    # Fallback: add 'not' or negate
    if ' is ' in correct_sentence and "isn't" not in correct_sentence:
        return correct_sentence.replace(' is ', " isn't ", 1)
    if ' are ' in correct_sentence and "aren't" not in correct_sentence:
        return correct_sentence.replace(' are ', " aren't ", 1)
    # Last resort: append "(wrong)"
    return correct_sentence.rstrip('.!?') + ' here.'

# ── Core regex patterns ────────────────────────────────────────────────────────

PLACEHOLDER_RE = re.compile(r'\[\[o1\|opción 1\]\]')
BROKEN_Q_RE    = re.compile(r'The \[\[([^\]|]+)\|([^\]|]+)\]\] is here\.')
TOKEN_RE       = re.compile(r'\[\[([^\]|]+)\|([^\]|]+)\]\]')

# Match a full question block (question + options + correctAnswer)
QBLOCK_RE = re.compile(
    r'(\{[^{]*?"question":\s*"([^"]*?)"[^{]*?"options":\s*\[)(.*?)(\]\s*,\s*"correctAnswer":\s*(\d+))',
    re.DOTALL
)

# Match a full exercise block (instructions + questions array)
EXERCISE_RE = re.compile(
    r'("instructions":\s*"([^"]+)"[^[]*"questions":\s*\[)(.*?)(\]\s*\})',
    re.DOTALL
)

def fix_file(filepath):
    content = filepath.read_text(encoding='utf-8')
    changes = 0

    def fix_exercise(em):
        nonlocal changes
        instruction = em.group(2)
        questions_body = em.group(3)

        if ('o1|opción 1' not in questions_body and
                'The [[' not in questions_body and
                not BROKEN_Q_RE.search(questions_body)):
            return em.group(0)

        is_listening = ('escucha' in instruction.lower() or
                        'escribe lo que' in instruction.lower())

        def fix_qblock(qm):
            nonlocal changes
            header = qm.group(1)
            question_text = qm.group(2)
            opts_str = qm.group(3)
            footer = qm.group(4)
            ca_idx = int(qm.group(5))

            # Case A: broken "The [[X|Y]] is here." question format
            broken_match = BROKEN_Q_RE.match(question_text.strip())
            if broken_match:
                eng_word = broken_match.group(1)
                spa_word = broken_match.group(2)
                # Replace with a proper vocabulary question
                new_question = f"¿Cómo se dice '{spa_word}' en inglés?"
                correct_opt = f'[[{eng_word}|{spa_word}]]'
                # Get distractor words from pool
                pool = WORD_CATEGORY.get(eng_word.lower(), ADJ_POOL + TIME_POOL + PREP_POOL)
                distractors = [w for w in pool if w.lower() != eng_word.lower()][:3]
                while len(distractors) < 3:
                    distractors.append(['other', 'different', 'another'][len(distractors) % 3])
                opts_list = [f'[[{d}|{d}]]' for d in distractors]
                # Insert correct answer at ca_idx
                opts_list.insert(min(ca_idx, len(opts_list)), correct_opt)
                new_opts = '\n            ' + ',\n            '.join(f'"{o}"' for o in opts_list[:4]) + '\n          '
                new_header = header.replace(
                    f'"question": "{question_text}"',
                    f'"question": "{new_question}"'
                )
                changes += 1
                return new_header + new_opts + footer

            if 'o1|opción 1' not in opts_str:
                return qm.group(0)

            # Extract existing options
            existing_opts = TOKEN_RE.findall(opts_str)
            # Find the correct option (non-placeholder at ca_idx)
            all_opts_raw = re.findall(r'"(\[\[[^\]]+\]\])"', opts_str)
            correct_raw = None
            if ca_idx < len(all_opts_raw):
                tok = TOKEN_RE.match(all_opts_raw[ca_idx])
                if tok and tok.group(1) != 'o1':
                    correct_raw = tok.group(1)  # left side of correct answer

            # Case B: Listening exercise with empty question and o1 placeholder
            if is_listening or not question_text.strip():
                # Find the real option (non-o1)
                real_opts = [opt for opt in all_opts_raw if 'o1|opción 1' not in opt]
                if real_opts:
                    real_text = TOKEN_RE.match(real_opts[0])
                    if real_text:
                        wrong_sent = make_wrong_sentence(real_text.group(1))
                        wrong_tok = f'[[{wrong_sent}|{wrong_sent}]]'
                        new_opts_str = PLACEHOLDER_RE.sub(f'"{wrong_tok}"', opts_str, count=1)
                        # Remove any remaining placeholders
                        new_opts_str = re.sub(r',?\s*"\[\[o1\|opción 1\]\]"', '', new_opts_str)
                        if new_opts_str != opts_str:
                            changes += 1
                            return header + new_opts_str + footer
                return qm.group(0)

            # Case C: Fill-in-blank with o1 distractors
            if correct_raw:
                existing_non_placeholder = [
                    l for l, r in existing_opts
                    if l != 'o1' and l.lower() != correct_raw.lower()
                ]
                needed = opts_str.count('[[o1|opción 1]]')
                distractors = get_distractors(correct_raw, n=needed, existing=existing_non_placeholder + [correct_raw])
                new_opts_str = opts_str
                for d in distractors:
                    new_opts_str = PLACEHOLDER_RE.sub(f'[[{d}|{d}]]', new_opts_str, count=1)
                # Remove any remaining unreplaced placeholders
                if '[[o1|opción 1]]' in new_opts_str:
                    new_opts_str = re.sub(r',?\s*"\[\[o1\|opción 1\]\]"', '', new_opts_str)
                if new_opts_str != opts_str:
                    changes += 1
                    return header + new_opts_str + footer

            return qm.group(0)

        new_body = QBLOCK_RE.sub(fix_qblock, questions_body)
        return em.group(1) + new_body + em.group(4)

    new_content = EXERCISE_RE.sub(fix_exercise, content)
    if new_content != content:
        filepath.write_text(new_content, encoding='utf-8')
    return changes


def main():
    print('=== Fixing placeholder exercises (o1 distractors + broken questions) ===\n')
    total = 0
    for f in sorted(TS_DIR.glob('unit-*.ts')):
        n = fix_file(f)
        if n > 0:
            print(f'  {f.name}: {n} fixes')
            total += n
    print(f'\nTotal: {total} exercises fixed')


if __name__ == '__main__':
    main()
