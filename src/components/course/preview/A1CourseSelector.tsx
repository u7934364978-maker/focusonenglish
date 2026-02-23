'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { UnitMetadata } from '@/types/premium-course';
import { UnitCard } from './UnitCard';

interface A1CourseSelectorProps {
  units: UnitMetadata[];
}

export function A1CourseSelector({ units }: A1CourseSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUnits = useMemo(() => {
    if (!searchQuery.trim()) return units;

    const query = searchQuery.toLowerCase().trim();
    return units.filter(unit => {
      const matchesNumber = unit.unitNumber.toString().includes(query);
      const matchesTitle = unit.title.toLowerCase().includes(query);
      const matchesUnitId = unit.unitId.toLowerCase().includes(query);
      
      return matchesNumber || matchesTitle || matchesUnitId;
    });
  }, [units, searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-xl mx-auto">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by unit number or title..."
            className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-slate-200 focus:border-coral-400 focus:outline-none focus:ring-4 focus:ring-coral-50 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div className="mb-6 text-center">
          <p className="text-slate-600 font-medium">
            Found <span className="font-black text-coral-600">{filteredUnits.length}</span> unit{filteredUnits.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}

      {/* Units Grid */}
      {filteredUnits.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.map((unit) => (
            <UnitCard key={unit.unitId} unit={unit} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-10 h-10 text-slate-300" />
          </div>
          <h3 className="text-2xl font-black text-slate-800 mb-2">No units found</h3>
          <p className="text-slate-500 mb-6">
            Try adjusting your search query
          </p>
          <button
            onClick={handleClearSearch}
            className="px-6 py-3 bg-coral-500 text-white rounded-xl font-bold hover:bg-coral-600 transition-all"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
