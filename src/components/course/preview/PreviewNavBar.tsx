'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, ChevronRight, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { UnitMetadata } from '@/types/premium-course';

interface PreviewNavBarProps {
  currentUnitId: string;
  allUnits: UnitMetadata[];
  currentProgress?: {
    current: number;
    total: number;
  };
  baseUrl?: string;
}

export function PreviewNavBar({
  currentUnitId,
  allUnits,
  currentProgress,
  baseUrl = '/debug/a1-preview',
}: PreviewNavBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const currentUnit = allUnits.find((u) => u.unitId === currentUnitId);
  const currentUnitIndex = allUnits.findIndex((u) => u.unitId === currentUnitId);
  const prevUnit = currentUnitIndex > 0 ? allUnits[currentUnitIndex - 1] : null;
  const nextUnit = currentUnitIndex < allUnits.length - 1 ? allUnits[currentUnitIndex + 1] : null;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleUnitSelect = (unitId: string) => {
    router.push(`${baseUrl}/${unitId}`);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Breadcrumbs */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Link
              href="/"
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0"
              aria-label="Home"
            >
              <Home className="w-5 h-5 text-slate-600" />
            </Link>

            <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0" />

            {/* Show full breadcrumbs on desktop, hide on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href={baseUrl}
                className="text-sm font-medium text-slate-600 hover:text-coral-600 transition-colors"
              >
                A1 Course
              </Link>

              <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
            </div>

            {/* Unit Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-900 font-medium"
                aria-label="Select unit"
              >
                <span className="text-sm md:text-base truncate">
                  Unit {currentUnit?.unitNumber || '?'}
                  <span className="hidden sm:inline ml-1">
                    - {currentUnit?.title || 'Unknown'}
                  </span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50">
                  {allUnits.map((unit) => (
                    <button
                      key={unit.unitId}
                      onClick={() => handleUnitSelect(unit.unitId)}
                      className={`w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0 ${
                        unit.unitId === currentUnitId ? 'bg-coral-50 hover:bg-coral-100' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                            unit.unitId === currentUnitId
                              ? 'bg-coral-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {unit.unitNumber}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`font-medium text-sm truncate ${
                              unit.unitId === currentUnitId ? 'text-coral-900' : 'text-slate-900'
                            }`}
                          >
                            {unit.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {unit.exerciseCount} exercises • {unit.estimatedDuration} min
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Current Progress (optional) */}
            {currentProgress && (
              <>
                <span className="hidden lg:block text-slate-300">•</span>
                <span className="hidden lg:block text-sm font-medium text-slate-500">
                  Exercise {currentProgress.current} of {currentProgress.total}
                </span>
              </>
            )}
          </div>

          {/* Right: Navigation Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => prevUnit && router.push(`${baseUrl}/${prevUnit.unitId}`)}
              disabled={!prevUnit}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous unit"
            >
              <ArrowLeft className="w-5 h-5 text-slate-700" />
            </button>
            <button
              onClick={() => nextUnit && router.push(`${baseUrl}/${nextUnit.unitId}`)}
              disabled={!nextUnit}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next unit"
            >
              <ArrowRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
