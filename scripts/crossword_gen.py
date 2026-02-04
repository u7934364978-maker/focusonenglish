import random

class CrosswordGenerator:
    def __init__(self, size=20):
        self.size = size
        self.grid = [[' ' for _ in range(size)] for _ in range(size)]
        self.items = []

    def can_place(self, word, row, col, direction):
        if direction == 'across':
            if col + len(word) > self.size: return False
            for i in range(len(word)):
                if self.grid[row][col + i] != ' ' and self.grid[row][col + i] != word[i]:
                    return False
                # Check neighbors to avoid adjacent words
                if self.grid[row][col + i] == ' ':
                    for dr, dc in [(-1, 0), (1, 0)]:
                        nr, nc = row + dr, col + i + dc
                        if 0 <= nr < self.size and 0 <= nc < self.size:
                            if self.grid[nr][nc] != ' ': return False
            # Check ends
            if col > 0 and self.grid[row][col - 1] != ' ': return False
            if col + len(word) < self.size and self.grid[row][col + len(word)] != ' ': return False
        else: # down
            if row + len(word) > self.size: return False
            for i in range(len(word)):
                if self.grid[row + i][col] != ' ' and self.grid[row + i][col] != word[i]:
                    return False
                # Check neighbors
                if self.grid[row + i][col] == ' ':
                    for dr, dc in [(0, -1), (0, 1)]:
                        nr, nc = row + i + dr, col + dc
                        if 0 <= nr < self.size and 0 <= nc < self.size:
                            if self.grid[nr][nc] != ' ': return False
            # Check ends
            if row > 0 and self.grid[row - 1][col] != ' ': return False
            if row + len(word) < self.size and self.grid[row + len(word)][col] != ' ': return False
        return True

    def place(self, word, row, col, direction, clue):
        for i in range(len(word)):
            r = row + i if direction == 'down' else row
            c = col if direction == 'down' else col + i
            self.grid[r][c] = word[i]
        self.items.append({
            "word": word,
            "clue": clue,
            "direction": direction,
            "row": row,
            "col": col
        })

    def generate(self, words_with_clues):
        # Filter words longer than size
        words_with_clues = [(w, c) for w, c in words_with_clues if len(w) <= self.size]
        if not words_with_clues: return []

        # Sort by length descending
        sorted_words = sorted(words_with_clues, key=lambda x: len(x[0]), reverse=True)
        
        # Place first word
        first_word, first_clue = sorted_words[0]
        start_row = self.size // 2
        start_col = (self.size - len(first_word)) // 2
        self.place(first_word, start_row, start_col, 'across', first_clue)
        
        for word, clue in sorted_words[1:]:
            placed = False
            # Try to intersect with existing words
            positions = []
            for item in self.items:
                for i, char in enumerate(item['word']):
                    for j, char2 in enumerate(word):
                        if char == char2:
                            # Potential intersection
                            ir = item['row'] + (i if item['direction'] == 'down' else 0)
                            ic = item['col'] + (i if item['direction'] == 'across' else 0)
                            
                            new_direction = 'down' if item['direction'] == 'across' else 'across'
                            new_row = ir - (j if new_direction == 'down' else 0)
                            new_col = ic - (j if new_direction == 'across' else 0)
                            
                            if 0 <= new_row < self.size and 0 <= new_col < self.size:
                                if self.can_place(word, new_row, new_col, new_direction):
                                    positions.append((new_row, new_col, new_direction))
            
            if positions:
                r, c, d = random.choice(positions)
                self.place(word, r, c, d, clue)
                placed = True
            
            if not placed:
                # Try random placement if no intersection found
                for _ in range(100):
                    r = random.randint(0, self.size - 1)
                    c = random.randint(0, self.size - 1)
                    d = random.choice(['across', 'down'])
                    if self.can_place(word, r, c, d):
                        self.place(word, r, c, d, clue)
                        break
        return self.items
