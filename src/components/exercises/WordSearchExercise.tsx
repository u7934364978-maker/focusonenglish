'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { CheckCircle, HelpCircle } from 'lucide-react';

interface WordSearchProps {
  words: string[];
  gridSize: number;
  clues?: { word: string; clue: string }[];
  onComplete: (score: number) => void;
}

export default function WordSearchExercise({ words, gridSize, clues, onComplete }: WordSearchProps) {
  const [activeWords, setActiveWords] = useState<string[]>([]);
  const [grid, setGrid] = useState<string[][]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ r: number, c: number } | null>(null);
  const [selectedCells, setSelectedCells] = useState<{ r: number, c: number }[]>([]);
  const [foundCells, setFoundCells] = useState<{ r: number, c: number }[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  // Initialize grid
  useEffect(() => {
    const generateGrid = () => {
      const newGrid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));
      const uppercaseWords = words.map(w => w.toUpperCase());
      const placedWords: string[] = [];

      // Sort words by length descending for better placement
      const sortedWords = [...uppercaseWords].sort((a, b) => b.length - a.length);

      sortedWords.forEach(word => {
        let placed = false;
        let attempts = 0;
        while (!placed && attempts < 500) {
          const direction = Math.floor(Math.random() * 3); // 0: Horiz, 1: Vert, 2: Diag
          const row = Math.floor(Math.random() * gridSize);
          const col = Math.floor(Math.random() * gridSize);

          if (canPlace(newGrid, word, row, col, direction)) {
            placeWord(newGrid, word, row, col, direction);
            placed = true;
            placedWords.push(word);
          }
          attempts++;
        }
      });

      // Fill empty cells
      for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
          if (newGrid[r][c] === '') {
            newGrid[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
          }
        }
      }
      return { grid: newGrid, placedWords };
    };

    const { grid: finalGrid, placedWords } = generateGrid();
    setGrid(finalGrid);
    setActiveWords(placedWords);
  }, [words, gridSize]);

  const canPlace = (g: string[][], word: string, r: number, c: number, dir: number) => {
    const dr = dir === 1 ? 1 : dir === 2 ? 1 : 0;
    const dc = dir === 0 ? 1 : dir === 2 ? 1 : 0;

    if (r + dr * (word.length - 1) >= gridSize || c + dc * (word.length - 1) >= gridSize) return false;

    for (let i = 0; i < word.length; i++) {
      const nr = r + dr * i;
      const nc = c + dc * i;
      if (g[nr][nc] !== '' && g[nr][nc] !== word[i]) return false;
    }
    return true;
  };

  const placeWord = (g: string[][], word: string, r: number, c: number, dir: number) => {
    const dr = dir === 1 ? 1 : dir === 2 ? 1 : 0;
    const dc = dir === 0 ? 1 : dir === 2 ? 1 : 0;
    for (let i = 0; i < word.length; i++) {
      g[r + dr * i][c + dc * i] = word[i];
    }
  };

  const handleMouseDown = (r: number, c: number) => {
    setIsDragging(true);
    setDragStart({ r, c });
    setSelectedCells([{ r, c }]);
  };

  const handleMouseEnter = (r: number, c: number) => {
    if (!isDragging || !dragStart) return;

    // Only allow straight lines (Horiz, Vert, Diag)
    const dr = r - dragStart.r;
    const dc = c - dragStart.c;
    
    if (dr === 0 || dc === 0 || Math.abs(dr) === Math.abs(dc)) {
      const steps = Math.max(Math.abs(dr), Math.abs(dc));
      const stepR = dr === 0 ? 0 : dr / steps;
      const stepC = dc === 0 ? 0 : dc / steps;

      const newSelection = [];
      for (let i = 0; i <= steps; i++) {
        newSelection.push({
          r: dragStart.r + Math.round(stepR * i),
          c: dragStart.c + Math.round(stepC * i)
        });
      }
      setSelectedCells(newSelection);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (selectedCells.length > 1) {
      const selectedWord = selectedCells.map(cell => grid[cell.r][cell.c]).join('');
      const reversedWord = [...selectedWord].reverse().join('');
      
      const found = activeWords.find(w => 
        w.toUpperCase() === selectedWord || w.toUpperCase() === reversedWord
      );

      if (found && !foundWords.includes(found.toUpperCase())) {
        const newFound = [...foundWords, found.toUpperCase()];
        setFoundWords(newFound);
        setFoundCells(prev => [...prev, ...selectedCells]);
        if (newFound.length === activeWords.length) {
          onComplete(100);
        }
      }
    }
    setSelectedCells([]);
  };

  const handleTouchStart = (e: React.TouchEvent, r: number, c: number) => {
    handleMouseDown(r, c);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !dragStart) return;
    
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (element && element.hasAttribute('data-r') && element.hasAttribute('data-c')) {
      const r = parseInt(element.getAttribute('data-r') || '0');
      const c = parseInt(element.getAttribute('data-c') || '0');
      handleMouseEnter(r, c);
    }
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const isCellSelected = (r: number, c: number) => 
    selectedCells.some(cell => cell.r === r && cell.c === c);

  const isCellFound = (r: number, c: number) => 
    foundCells.some(cell => cell.r === r && cell.c === c);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start select-none">
      <div 
        ref={gridRef}
        className="grid bg-white border-4 border-orange-100 rounded-xl p-2 shadow-inner cursor-pointer touch-none"
        style={{ 
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          width: 'fit-content'
        }}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {grid.map((row, r) => row.map((char, c) => {
          const isSelected = isCellSelected(r, c);
          const isFound = isCellFound(r, c);
          
          return (
            <div
              key={`${r}-${c}`}
              data-r={r}
              data-c={c}
              onMouseDown={() => handleMouseDown(r, c)}
              onMouseEnter={() => handleMouseEnter(r, c)}
              onMouseUp={handleMouseUp}
              onTouchStart={(e) => handleTouchStart(e, r, c)}
              className={`w-7 h-7 md:w-10 md:h-10 flex items-center justify-center font-bold text-base md:text-lg transition-colors rounded
                ${isSelected ? 'bg-orange-500 text-white z-10' : 
                  isFound ? 'bg-green-100 text-green-700' : 'hover:bg-orange-50 text-slate-700'}`}
            >
              {char}
            </div>
          );
        }))}
      </div>

      <div className="flex-1 bg-orange-50 rounded-2xl p-6 border-2 border-orange-100 w-full md:w-auto">
        <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
          <span>Palabras a encontrar:</span>
          <span className="text-sm bg-orange-200 px-2 py-0.5 rounded-full">{foundWords.length}/{activeWords.length}</span>
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {activeWords.map((word, idx) => {
            const isFound = foundWords.includes(word.toUpperCase());
            const originalIdx = words.findIndex(w => w.toUpperCase() === word.toUpperCase());
            return (
              <div 
                key={idx}
                className={`flex items-center gap-2 p-2 rounded-lg border transition-all
                  ${isFound ? 'bg-green-100 border-green-200 text-green-700 opacity-60' : 'bg-white border-orange-100 text-slate-700 shadow-sm'}`}
              >
                {isFound ? <CheckCircle className="w-4 h-4" /> : <div className="w-4 h-4 rounded-full border-2 border-orange-200" />}
                <span className={`font-bold uppercase ${isFound ? 'line-through' : ''}`}>{word}</span>
                {clues && originalIdx !== -1 && clues[originalIdx] && (
                  <div className="group relative ml-auto">
                    <HelpCircle className="w-4 h-4 text-orange-300 cursor-help" />
                    <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {clues[originalIdx].clue}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
