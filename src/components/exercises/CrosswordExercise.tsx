'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

interface CrosswordItem {
  word: string;
  clue: string;
  direction: 'across' | 'down';
  row: number;
  col: number;
}

interface CrosswordProps {
  items: CrosswordItem[];
  onComplete: (score: number) => void;
}

export default function CrosswordExercise({ items, onComplete }: CrosswordProps) {
  const [grid, setGrid] = useState<string[][]>([]);
  const [userGrid, setUserGrid] = useState<string[][]>([]);
  const [focusedCell, setFocusedCell] = useState<{ r: number; c: number } | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const rows = Math.max(...items.map(i => i.row + (i.direction === 'down' ? i.word.length : 0))) + 1;
  const cols = Math.max(...items.map(i => i.col + (i.direction === 'across' ? i.word.length : 0))) + 1;

  useEffect(() => {
    const newGrid = Array(rows).fill(null).map(() => Array(cols).fill(' '));
    const newUserGrid = Array(rows).fill(null).map(() => Array(cols).fill(' '));

    items.forEach(item => {
      const { word, row, col, direction } = item;
      for (let i = 0; i < word.length; i++) {
        const r = direction === 'down' ? row + i : row;
        const c = direction === 'across' ? col + i : col;
        newGrid[r][c] = word[i].toUpperCase();
        newUserGrid[r][c] = '';
      }
    });

    setGrid(newGrid);
    setUserGrid(newUserGrid);
  }, [items, rows, cols]);

  const handleInputChange = (r: number, c: number, val: string) => {
    if (isCompleted) return;
    
    const newUserGrid = [...userGrid.map(row => [...row])];
    newUserGrid[r][c] = val.toUpperCase().slice(-1);
    setUserGrid(newUserGrid);

    // Check if completed correctly
    checkCompletion(newUserGrid);

    // Auto-focus next cell
    if (val !== '') {
      focusNextCell(r, c);
    }
  };

  const focusNextCell = (r: number, c: number) => {
    // Find if we are in an across or down word
    const item = items.find(i => 
      (i.direction === 'across' && i.row === r && c >= i.col && c < i.col + i.word.length) ||
      (i.direction === 'down' && i.col === c && r >= i.row && r < i.row + i.word.length)
    );

    if (item) {
      const nr = item.direction === 'down' ? r + 1 : r;
      const nc = item.direction === 'across' ? c + 1 : c;
      if (nr < rows && nc < cols && grid[nr][nc] !== ' ') {
        setFocusedCell({ r: nr, c: nc });
      }
    }
  };

  const checkCompletion = (currentGrid: string[][]) => {
    let allCorrect = true;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] !== ' ' && grid[r][c] !== currentGrid[r][c]) {
          allCorrect = false;
          break;
        }
      }
    }

    if (allCorrect) {
      setIsCompleted(true);
      onComplete(100);
    }
  };

  const getItemNumber = (r: number, c: number) => {
    const index = items.findIndex(i => i.row === r && i.col === c);
    return index !== -1 ? index + 1 : null;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <div 
        className="grid gap-1 bg-slate-200 p-2 rounded-lg shadow-inner"
        style={{ 
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          width: 'fit-content'
        }}
      >
        {userGrid.map((row, r) => row.map((char, c) => {
          const isCell = grid[r][c] !== ' ';
          const num = getItemNumber(r, c);
          
          if (!isCell) return <div key={`${r}-${c}`} className="w-8 h-8 md:w-10 md:h-10 bg-transparent" />;

          return (
            <div key={`${r}-${c}`} className="relative w-8 h-8 md:w-10 md:h-10">
              {num && <span className="absolute top-0.5 left-0.5 text-[10px] font-bold text-slate-400 leading-none">{num}</span>}
              <input
                type="text"
                value={char}
                onChange={(e) => handleInputChange(r, c, e.target.value)}
                onFocus={() => setFocusedCell({ r, c })}
                className={`w-full h-full text-center font-black text-lg md:text-xl border-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all
                  ${isCompleted ? 'bg-green-50 border-green-200 text-green-700' : 'bg-white border-white text-slate-700 shadow-sm'}`}
                disabled={isCompleted}
              />
            </div>
          );
        }))}
      </div>

      <div className="flex-1 space-y-6 w-full lg:w-auto">
        <div>
          <h3 className="font-black text-slate-900 mb-3 flex items-center gap-2">
            <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-sm uppercase">Horizontal</span>
          </h3>
          <div className="space-y-2">
            {items.filter(i => i.direction === 'across').map((item, idx) => (
              <div key={idx} className="flex gap-3 text-slate-700 bg-white p-3 rounded-xl border border-orange-100 shadow-sm">
                <span className="font-black text-orange-500">{items.indexOf(item) + 1}.</span>
                <p className="font-medium">{item.clue}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-slate-900 mb-3 flex items-center gap-2">
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm uppercase">Vertical</span>
          </h3>
          <div className="space-y-2">
            {items.filter(i => i.direction === 'down').map((item, idx) => (
              <div key={idx} className="flex gap-3 text-slate-700 bg-white p-3 rounded-xl border border-blue-100 shadow-sm">
                <span className="font-black text-blue-500">{items.indexOf(item) + 1}.</span>
                <p className="font-medium">{item.clue}</p>
              </div>
            ))}
          </div>
        </div>

        {isCompleted && (
          <div className="bg-green-100 border-2 border-green-200 text-green-800 p-4 rounded-2xl flex items-center gap-3 animate-bounce">
            <CheckCircle className="w-6 h-6" />
            <span className="font-black">¡Excelente! Crucigrama completado correctamente.</span>
          </div>
        )}
      </div>
    </div>
  );
}
