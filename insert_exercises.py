#!/usr/bin/env python3
"""
Script para insertar ejercicios de Key Word Transformations en course-data-b2.ts
"""

# Leer el archivo original
with open('lib/course-data-b2.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Definir los ejercicios para cada lección
exercises_m1l2 = '''      {
        id: 'b2-m1-l2-keytransform-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Conditionals & Inversion',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt1',
            sentence: 'If I had known about the party, I would have come.',
            keyWord: 'known',
            startOfAnswer: 'Had',
            correctAnswer: 'I known about the',
            explanation: 'Inversion after "had" in third conditional for emphasis.',
            points: 2
          },
          {
            id: 'kt2',
            sentence: 'She doesn\\'t speak French, so she can\\'t work in Paris.',
            keyWord: 'if',
            startOfAnswer: 'She could work',
            correctAnswer: 'in Paris if she',
            explanation: 'Second conditional: present unreal condition.',
            points: 2
          },
          {
            id: 'kt3',
            sentence: 'I didn\\'t bring an umbrella, so I got wet.',
            keyWord: 'brought',
            startOfAnswer: 'If I',
            correctAnswer: 'had brought an umbrella',
            explanation: 'Third conditional: past unreal condition with result.',
            points: 2
          },
          {
            id: 'kt4',
            sentence: 'He rarely goes to the cinema.',
            keyWord: 'seldom',
            startOfAnswer: 'Seldom',
            correctAnswer: 'does he go to',
            explanation: 'Inversion after negative adverbs (seldom, rarely, never).',
            points: 2
          },
          {
            id: 'kt5',
            sentence: 'I have never seen such a beautiful sunset.',
            keyWord: 'never',
            startOfAnswer: 'Never',
            correctAnswer: 'have I seen such',
            explanation: 'Inversion after "never" for emphasis.',
            points: 2
          },
          {
            id: 'kt6',
            sentence: 'If he were taller, he would be a basketball player.',
            keyWord: 'was',
            startOfAnswer: 'If he',
            correctAnswer: 'was taller he would',
            explanation: 'Mixed conditional: present hypothetical condition.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-keytransform-2',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Advanced Conditionals',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt7',
            sentence: 'I didn\\'t save money, so I can\\'t buy a car now.',
            keyWord: 'had',
            startOfAnswer: 'If I',
            correctAnswer: 'had saved money I',
            explanation: 'Mixed conditional: past action affecting present situation.',
            points: 2
          },
          {
            id: 'kt8',
            sentence: 'She was rich, so she bought that mansion.',
            keyWord: 'been',
            startOfAnswer: 'If she hadn\\'t',
            correctAnswer: 'been rich she wouldn\\'t',
            explanation: 'Third conditional with negative form.',
            points: 2
          },
          {
            id: 'kt9',
            sentence: 'Not only did he win the race, but he also broke the record.',
            keyWord: 'only',
            startOfAnswer: 'Not only',
            correctAnswer: 'did he win the',
            explanation: 'Inversion after "not only" for emphasis.',
            points: 2
          },
          {
            id: 'kt10',
            sentence: 'I had hardly started cooking when the guests arrived.',
            keyWord: 'hardly',
            startOfAnswer: 'Hardly',
            correctAnswer: 'had I started cooking',
            explanation: 'Inversion after "hardly" in past perfect.',
            points: 2
          },
          {
            id: 'kt11',
            sentence: 'Unless you study harder, you won\\'t pass the exam.',
            keyWord: 'if',
            startOfAnswer: 'You won\\'t pass',
            correctAnswer: 'if you don\\'t study',
            explanation: 'Converting "unless" to "if not" in first conditional.',
            points: 2
          },
          {
            id: 'kt12',
            sentence: 'Provided that it doesn\\'t rain, we\\'ll go to the beach.',
            keyWord: 'long',
            startOfAnswer: 'As',
            correctAnswer: 'long as it doesn\\'t',
            explanation: 'Converting "provided that" to "as long as" in conditional.',
            points: 2
          }
        ]
      },
'''

# Encontrar línea donde insertar (antes del cierre de exercises de M1L2)
insert_line_m1l2 = None
for i, line in enumerate(lines):
    if i > 1000 and '    ]' in line and '  },' in lines[i+1] and 'LECCIÓN 3' in lines[i+3]:
        insert_line_m1l2 = i
        break

if insert_line_m1l2:
    lines.insert(insert_line_m1l2, exercises_m1l2)
    print(f"✅ Insertados ejercicios M1L2 en línea {insert_line_m1l2}")

# Guardar el archivo
with open('lib/course-data-b2.ts', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("✅ Archivo actualizado exitosamente")
