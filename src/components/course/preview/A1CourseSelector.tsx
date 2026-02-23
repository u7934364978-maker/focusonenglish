'use client';

import { useState, useMemo } from 'react';
import { Search, X, Filter, Star, Grid3x3, LayoutList } from 'lucide-react';
import { UnitMetadata } from '@/types/premium-course';
import { UnitCard } from './UnitCard';
import { ModuleGroup } from './ModuleGroup';
import { groupUnitsIntoModules } from '@/lib/utils/module-grouping';

interface A1CourseSelectorProps {
  units: UnitMetadata[];
}

const AVAILABLE_TOPICS = [
  'Grammar',
  'Vocabulary',
  'Reading',
  'Listening',
  'Speaking',
  'Writing',
  'Pronunciation',
  'Culture'
];

type ViewMode = 'grid' | 'modules';

export function A1CourseSelector({ units }: A1CourseSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filteredUnits = useMemo(() => {
    let filtered = units;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(unit => {
        const matchesNumber = unit.unitNumber.toString().includes(query);
        const matchesTitle = unit.title.toLowerCase().includes(query);
        const matchesUnitId = unit.unitId.toLowerCase().includes(query);
        
        return matchesNumber || matchesTitle || matchesUnitId;
      });
    }

    // Apply topic filter (OR logic - unit must have at least one selected topic)
    if (selectedTopics.length > 0) {
      filtered = filtered.filter(unit => 
        unit.topics.some(topic => 
          selectedTopics.some(selected => 
            topic.toLowerCase().includes(selected.toLowerCase())
          )
        )
      );
    }

    // Apply difficulty filter
    if (selectedDifficulty.length > 0) {
      filtered = filtered.filter(unit => 
        selectedDifficulty.includes(unit.difficulty)
      );
    }

    return filtered;
  }, [units, searchQuery, selectedTopics, selectedDifficulty]);

  const modules = useMemo(() => {
    return groupUnitsIntoModules(filteredUnits);
  }, [filteredUnits]);

  const hasActiveFilters = searchQuery.trim() !== '' || selectedTopics.length > 0 || selectedDifficulty.length > 0;

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleClearAllFilters = () => {
    setSearchQuery('');
    setSelectedTopics([]);
    setSelectedDifficulty([]);
  };

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const toggleDifficulty = (difficulty: number) => {
    setSelectedDifficulty(prev => 
      prev.includes(difficulty)
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const removeFilter = (type: 'search' | 'topic' | 'difficulty', value?: string | number) => {
    if (type === 'search') {
      setSearchQuery('');
    } else if (type === 'topic' && typeof value === 'string') {
      setSelectedTopics(prev => prev.filter(t => t !== value));
    } else if (type === 'difficulty' && typeof value === 'number') {
      setSelectedDifficulty(prev => prev.filter(d => d !== value));
    }
  };

  return (
    <div className="w-full">
      {/* Search Bar, View Toggle, and Filter Toggle */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <div className="relative flex-1">
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
          
          <div className="flex gap-2">
            <div className="flex bg-white border-2 border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-4 font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-coral-500 text-white'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
              >
                <Grid3x3 className="w-5 h-5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('modules')}
                className={`flex items-center gap-2 px-4 py-4 font-bold transition-all ${
                  viewMode === 'modules'
                    ? 'bg-coral-500 text-white'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-label="Module view"
                aria-pressed={viewMode === 'modules'}
              >
                <LayoutList className="w-5 h-5" />
                <span className="hidden sm:inline">Modules</span>
              </button>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${
                showFilters 
                  ? 'bg-coral-500 text-white' 
                  : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-coral-400'
              }`}
              aria-label="Toggle filters"
            >
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
              {(selectedTopics.length > 0 || selectedDifficulty.length > 0) && (
                <span className="bg-white text-coral-600 px-2 py-0.5 rounded-full text-sm font-black">
                  {selectedTopics.length + selectedDifficulty.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="mb-8 max-w-4xl mx-auto bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-sm">
          {/* Topic Filters */}
          <div className="mb-6">
            <h3 className="text-lg font-black text-slate-800 mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_TOPICS.map(topic => (
                <button
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all ${
                    selectedTopics.includes(topic)
                      ? 'bg-coral-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <h3 className="text-lg font-black text-slate-800 mb-3">Difficulty</h3>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map(level => (
                <button
                  key={level}
                  onClick={() => toggleDifficulty(level)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all ${
                    selectedDifficulty.includes(level)
                      ? 'bg-coral-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  aria-label={`Difficulty ${level} stars`}
                >
                  <Star className={`w-4 h-4 ${selectedDifficulty.includes(level) ? 'fill-white' : 'fill-slate-400'}`} />
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mb-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold text-slate-600">Active filters:</span>
            
            {searchQuery && (
              <button
                onClick={() => removeFilter('search')}
                className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
              >
                Search: "{searchQuery}"
                <X className="w-4 h-4" />
              </button>
            )}
            
            {selectedTopics.map(topic => (
              <button
                key={topic}
                onClick={() => removeFilter('topic', topic)}
                className="flex items-center gap-1 px-3 py-1.5 bg-coral-100 text-coral-700 rounded-lg font-medium hover:bg-coral-200 transition-colors"
              >
                {topic}
                <X className="w-4 h-4" />
              </button>
            ))}
            
            {selectedDifficulty.map(level => (
              <button
                key={level}
                onClick={() => removeFilter('difficulty', level)}
                className="flex items-center gap-1 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-lg font-medium hover:bg-amber-200 transition-colors"
              >
                <Star className="w-4 h-4 fill-amber-600" />
                {level}
                <X className="w-4 h-4" />
              </button>
            ))}
            
            <button
              onClick={handleClearAllFilters}
              className="ml-2 px-3 py-1.5 text-sm font-bold text-coral-600 hover:text-coral-700 transition-colors"
            >
              Clear all
            </button>
          </div>
        </div>
      )}

      {/* Results Count */}
      {hasActiveFilters && (
        <div className="mb-6 text-center">
          <p className="text-slate-600 font-medium">
            Found <span className="font-black text-coral-600">{filteredUnits.length}</span> unit{filteredUnits.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}

      {/* Units Grid or Module View */}
      {filteredUnits.length > 0 ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUnits.map((unit) => (
              <UnitCard key={unit.unitId} unit={unit} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {modules.map((module) => (
              <ModuleGroup 
                key={module.moduleNumber} 
                module={module}
                isInitiallyExpanded={modules.length === 1}
              />
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-10 h-10 text-slate-300" />
          </div>
          <h3 className="text-2xl font-black text-slate-800 mb-2">No units found</h3>
          <p className="text-slate-500 mb-6">
            Try adjusting your {hasActiveFilters ? 'filters or search query' : 'search query'}
          </p>
          <button
            onClick={handleClearAllFilters}
            className="px-6 py-3 bg-coral-500 text-white rounded-xl font-bold hover:bg-coral-600 transition-all"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
