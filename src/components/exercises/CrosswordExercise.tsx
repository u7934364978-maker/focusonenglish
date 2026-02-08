'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { CheckCircle, Check, Eye, RefreshCw } from 'lucide-react';

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
  const [isCompleted, setIsCompleted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [focusedCell, setFocusedCell] = useState<{ r: number; c: number } | null>(null);
  const [activeDirection, setActiveDirection] = useState<'across' | 'down'>('across');
  const inputRefs = useRef<Map<string, HTMLInputElement>>(new Map());

  // Calculate normalized grid dimensions and offsets
  const { rows, cols, minRow, minCol } = useMemo(() => {
    const minR = Math.min(...items.map(i => i.row));
    const minC = Math.min(...items.map(i => i.col));
    const maxR = Math.max(...items.map(i => i.row + (i.direction === 'down' ? i.word.length : 0)));
    const maxC = Math.max(...items.map(i => i.col + (i.direction === 'across' ? i.word.length : 0)));
    
    return {
      rows: maxR - minR,
      cols: maxC - minC,
      minRow: minR,
      minCol: minC
    };
  }, [items]);

  useEffect(() => {
    const newGrid = Array(rows).fill(null).map(() => Array(cols).fill(' '));
    const newUserGrid = Array(rows).fill(null).map(() => Array(cols).fill(' '));

    items.forEach(item => {
      const { word, row, col, direction } = item;
      for (let i = 0; i < word.length; i++) {
        const r = (direction === 'down' ? row + i : row) - minRow;
        const c = (direction === 'across' ? col + i : col) - minCol;
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
          newGrid[r][c] = word[i].toUpperCase();
          newUserGrid[r][c] = '';
        }
      }
    });

    setGrid(newGrid);
    setUserGrid(newUserGrid);
    setShowErrors(false);
    setIsCompleted(false);
    setFocusedCell(null);
  }, [items, rows, cols, minRow, minCol]);

  // Find word that contains the focused cell in the active direction
  const activeWord = useMemo(() => {
    if (!focusedCell) return null;
    return items.find(item => {
      if (item.direction !== activeDirection) return false;
      const r = focusedCell.r + minRow;
      const c = focusedCell.c + minCol;
      if (activeDirection === 'across') {
        return item.row === r && 
               c >= item.col && 
               c < item.col + item.word.length;
      } else {
        return item.col === c && 
               r >= item.row && 
               r < item.row + item.word.length;
      }
    });
  }, [focusedCell, activeDirection, items, minRow, minCol]);

  // Check if a cell is part of the active word
  const isCellHighlighted = (r: number, c: number) => {
    if (!activeWord) return false;
    const realR = r + minRow;
    const realC = c + minCol;
    if (activeWord.direction === 'across') {
      return realR === activeWord.row && realC >= activeWord.col && realC < activeWord.col + activeWord.word.length;
    } else {
      return realC === activeWord.col && realR >= activeWord.row && realR < activeWord.row + activeWord.word.length;
    }
  };

  const handleInputChange = (r: number, c: number, val: string) => {
    if (isCompleted) return;
    
    const newUserGrid = [...userGrid.map(row => [...row])];
    const char = val.toUpperCase().slice(-1);
    newUserGrid[r][c] = char;
    setUserGrid(newUserGrid);
    setShowErrors(false);

    checkCompletion(newUserGrid);

    if (char !== '') {
      moveFocus(r, c, 1);
    }
  };

  const moveFocus = (r: number, c: number, offset: number) => {
    let nr = r;
    let nc = c;

    if (activeDirection === 'across') {
      nc += offset;
    } else {
      nr += offset;
    }

    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] !== ' ') {
      const nextRef = inputRefs.current.get(`${nr}-${nc}`);
      if (nextRef) {
        nextRef.focus();
        setFocusedCell({ r: nr, c: nc });
      }
    }
  };

  const handleKeyDown = (r: number, c: number, e: React.KeyboardEvent) => {
    if (isCompleted) return;

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        setActiveDirection('across');
        moveFocusByDirection(r, c + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        setActiveDirection('across');
        moveFocusByDirection(r, c - 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setActiveDirection('down');
        moveFocusByDirection(r + 1, c);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveDirection('down');
        moveFocusByDirection(r - 1, c);
        break;
      case 'Backspace':
        if (userGrid[r][c] === '') {
          e.preventDefault();
          moveFocus(r, c, -1);
        }
        break;
      case ' ':
        e.preventDefault();
        setActiveDirection(prev => prev === 'across' ? 'down' : 'across');
        break;
    }
  };

  const moveFocusByDirection = (nr: number, nc: number) => {
    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] !== ' ') {
      const nextRef = inputRefs.current.get(`${nr}-${nc}`);
      if (nextRef) {
        nextRef.focus();
        setFocusedCell({ r: nr, c: nc });
      }
    }
  };

  const checkCompletion = (currentGrid: string[][]) => {
    let allCorrect = true;
    let allFilled = true;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] !== ' ') {
          if (currentGrid[r][c] === '') {
            allFilled = false;
          }
          if (grid[r][c] !== currentGrid[r][c]) {
            allCorrect = false;
          }
        }
      }
    }

    if (allFilled && allCorrect) {
      setIsCompleted(true);
      onComplete(100);
    }
  };

  const handleCheck = () => {
    setShowErrors(true);
  };

  const handleReveal = () => {
    const revealedGrid = [...userGrid.map((row, r) => row.map((char, c) => {
      return grid[r][c] !== ' ' ? grid[r][c] : char;
    }))];
    setUserGrid(revealedGrid);
    setIsCompleted(true);
    onComplete(50);
  };

  const handleReset = () => {
    const newUserGrid = Array(rows).fill(null).map(() => Array(cols).fill(' '));
    items.forEach(item => {
      const { word, row, col, direction } = item;
      for (let i = 0; i < word.length; i++) {
        const r = (direction === 'down' ? row + i : row) - minRow;
        const c = (direction === 'across' ? col + i : col) - minCol;
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
          newUserGrid[r][c] = '';
        }
      }
    });
    setUserGrid(newUserGrid);
    setIsCompleted(false);
    setShowErrors(false);
    setFocusedCell(null);
  };

  const getItemNumber = (r: number, c: number) => {
    const realR = r + minRow;
    const realC = c + minCol;
    const index = items.findIndex(i => i.row === realR && i.col === realC);
    return index !== -1 ? index + 1 : null;
  };

  const handleClueClick = (item: CrosswordItem) => {
    const r = item.row - minRow;
    const c = item.col - minCol;
    const ref = inputRefs.current.get(`${r}-${c}`);
    if (ref) {
      ref.focus();
      setFocusedCell({ r, c });
      setActiveDirection(item.direction);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-full overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-2 sm:p-3 rounded-2xl border border-slate-200">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleCheck}
            disabled={isCompleted}
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 disabled:opacity-50 transition-all shadow-sm active:scale-95 text-xs md:text-sm"
          >
            <Check className="w-4 h-4" />
            Comprobar
          </button>
          <button
            onClick={handleReveal}
            disabled={isCompleted}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 disabled:opacity-50 transition-all shadow-sm active:scale-95 text-xs md:text-sm"
          >
            <Eye className="w-4 h-4" />
            Ver Solución
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm active:scale-95 text-xs md:text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Reiniciar
          </button>
        </div>
        
        {isCompleted && (
          <div className="flex items-center gap-2 text-green-600 font-bold animate-fade-in text-sm">
            <CheckCircle className="w-5 h-5" />
            <span>¡Completado!</span>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start justify-center max-w-7xl mx-auto w-full">
        {/* Grid Container */}
        <div className="flex-1 w-full flex items-start justify-center bg-slate-50 p-2 sm:p-4 md:p-6 rounded-[2rem] border-2 border-slate-200/60 shadow-inner overflow-x-auto min-h-[250px]">
          <div 
            className="grid gap-1 p-2 bg-white rounded-xl shadow-xl border border-slate-100"
            style={{ 
              gridTemplateColumns: `repeat(${cols}, minmax(2rem, 2.5rem))`,
              width: 'fit-content'
            }}
          >
          {userGrid.flatMap((row, r) => row.map((char, c) => {
            const isCell = grid[r][c] !== ' ';
            const num = getItemNumber(r, c);
            const isError = showErrors && char !== '' && char !== grid[r][c];
            const isCorrect = showErrors && char !== '' && char === grid[r][c];
            const isFocused = focusedCell?.r === r && focusedCell?.c === c;
            const isHighlighted = isCellHighlighted(r, c);
            
            if (!isCell) return <div key={`${r}-${c}`} className="w-8 h-8 md:w-10 md:h-10 bg-transparent" />;

            return (
              <div key={`${r}-${c}`} className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                {num && (
                  <span className={`absolute top-0.5 left-1 text-[8px] md:text-[9px] font-black leading-none z-10 transition-colors
                    ${isFocused ? 'text-orange-700' : 'text-slate-400'}
                  `}>
                    {num}
                  </span>
                )}
                <input
                  ref={el => {
                    if (el) inputRefs.current.set(`${r}-${c}`, el);
                    else inputRefs.current.delete(`${r}-${c}`);
                  }}
                  type="text"
                  maxLength={1}
                  value={char}
                  onFocus={() => setFocusedCell({ r, c })}
                  onChange={(e) => handleInputChange(r, c, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(r, c, e)}
                  className={`w-full h-full text-center font-black text-base md:text-lg border-2 rounded-lg focus:outline-none transition-all uppercase cursor-pointer
                    ${isCompleted ? 'bg-green-50 border-green-300 text-green-700' : 
                      isFocused ? 'bg-orange-500 border-orange-600 text-white scale-105 z-20 shadow-md ring-4 ring-orange-500/20' : 
                      isHighlighted ? 'bg-orange-50 border-orange-200 text-slate-800' : 
                      'bg-white border-slate-200 text-slate-800 shadow-sm'}
                    ${isError && !isFocused ? 'border-red-400 text-red-600 bg-red-50' : ''}
                    ${isCorrect && !isFocused ? 'border-green-400 text-green-600 bg-green-50' : ''}
                    hover:border-orange-300
                  `}
                  disabled={isCompleted}
                />
              </div>
            );
          }))}
          </div>
        </div>

        {/* Clues Panel */}
        <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-4">
          <div className="flex flex-col gap-4">
            {/* Horizontal Clues */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-3 h-3 bg-orange-600 rounded-full shadow-sm shadow-orange-200"></span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Horizontal</span>
              </h3>
              <div className="space-y-1 max-h-[250px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                {items.filter(i => i.direction === 'across').map((item, idx) => {
                  const isActive = activeWord === item;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => handleClueClick(item)}
                      className={`flex gap-3 text-slate-700 p-2 rounded-lg transition-all cursor-pointer border-l-4 group
                        ${isActive ? 'bg-orange-50 border-orange-500 shadow-sm' : 'border-transparent hover:bg-slate-50 hover:border-slate-200'}
                      `}
                    >
                      <span className={`font-black min-w-[20px] text-xs mt-0.5 ${isActive ? 'text-orange-600' : 'text-slate-400 group-hover:text-orange-500'}`}>
                        {items.indexOf(item) + 1}.
                      </span>
                      <p className={`font-medium text-xs leading-relaxed ${isActive ? 'text-slate-900 font-bold' : 'group-hover:text-slate-900'}`}>
                        {item.clue}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vertical Clues */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full shadow-sm shadow-blue-200"></span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Vertical</span>
              </h3>
              <div className="space-y-1 max-h-[250px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                {items.filter(i => i.direction === 'down').map((item, idx) => {
                  const isActive = activeWord === item;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => handleClueClick(item)}
                      className={`flex gap-3 text-slate-700 p-2 rounded-lg transition-all cursor-pointer border-l-4 group
                        ${isActive ? 'bg-blue-50 border-blue-500 shadow-sm' : 'border-transparent hover:bg-slate-50 hover:border-slate-200'}
                      `}
                    >
                      <span className={`font-black min-w-[20px] text-xs mt-0.5 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`}>
                        {items.indexOf(item) + 1}.
                      </span>
                      <p className={`font-medium text-xs leading-relaxed ${isActive ? 'text-slate-900 font-bold' : 'group-hover:text-slate-900'}`}>
                        {item.clue}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {isCompleted && (
            <div className="bg-green-600 text-white p-4 rounded-2xl flex items-center gap-4 shadow-lg animate-bounce">
              <div className="bg-white/20 p-2 rounded-full">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-base">¡Excelente!</h4>
                <p className="text-green-50 text-[10px]">Crucigrama completado.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
