'use client';

import { useState, useMemo } from 'react';
import { UnitMetadata } from '@/types/premium-course';
import { ArrowUpDown, ArrowUp, ArrowDown, Search, Star, Clock, BookOpen, Hash } from 'lucide-react';
import Link from 'next/link';

interface CourseOutlineTableProps {
  units: UnitMetadata[];
}

type SortField = 'unitNumber' | 'title' | 'topics' | 'exerciseCount' | 'estimatedDuration' | 'difficulty';
type SortDirection = 'asc' | 'desc';

export function CourseOutlineTable({ units }: CourseOutlineTableProps) {
  const [sortField, setSortField] = useState<SortField>('unitNumber');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [topicFilter, setTopicFilter] = useState<string>('');

  // Extract all unique topics
  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    units.forEach(unit => unit.topics.forEach(topic => topics.add(topic)));
    return Array.from(topics).sort();
  }, [units]);

  // Filter and sort units
  const filteredAndSortedUnits = useMemo(() => {
    let filtered = units.filter(unit => {
      const matchesSearch = 
        searchQuery === '' ||
        unit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.unitNumber.toString().includes(searchQuery) ||
        unit.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTopic = 
        topicFilter === '' ||
        unit.topics.includes(topicFilter);

      return matchesSearch && matchesTopic;
    });

    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortField) {
        case 'unitNumber':
          comparison = a.unitNumber - b.unitNumber;
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'topics':
          comparison = a.topics.length - b.topics.length;
          break;
        case 'exerciseCount':
          comparison = a.exerciseCount - b.exerciseCount;
          break;
        case 'estimatedDuration':
          comparison = a.estimatedDuration - b.estimatedDuration;
          break;
        case 'difficulty':
          comparison = a.difficulty - b.difficulty;
          break;
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [units, sortField, sortDirection, searchQuery, topicFilter]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4 opacity-30" />;
    }
    return sortDirection === 'asc' 
      ? <ArrowUp className="w-4 h-4" />
      : <ArrowDown className="w-4 h-4" />;
  };

  const renderStars = (difficulty: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            className={`w-3 h-3 ${i <= difficulty ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 print:hidden">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by unit number, title, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
            />
          </div>
          <div className="md:w-64">
            <select
              value={topicFilter}
              onChange={(e) => setTopicFilter(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
            >
              <option value="">All Topics</option>
              {allTopics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        </div>
        {(searchQuery || topicFilter) && (
          <div className="mt-3 flex items-center justify-between text-sm">
            <p className="text-slate-600">
              Showing <span className="font-bold text-slate-900">{filteredAndSortedUnits.length}</span> of {units.length} units
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setTopicFilter('');
              }}
              className="text-coral-600 hover:text-coral-700 font-bold"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-lg border border-slate-200 overflow-hidden print:block print:border-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200 print:bg-white">
              <tr>
                <th className="px-4 py-3 text-left print:py-2">
                  <button
                    onClick={() => handleSort('unitNumber')}
                    className="flex items-center gap-2 font-bold text-sm text-slate-700 hover:text-slate-900 uppercase tracking-wider print:cursor-default"
                  >
                    <Hash className="w-4 h-4" />
                    Unit
                    <span className="print:hidden">{getSortIcon('unitNumber')}</span>
                  </button>
                </th>
                <th className="px-4 py-3 text-left print:py-2">
                  <button
                    onClick={() => handleSort('title')}
                    className="flex items-center gap-2 font-bold text-sm text-slate-700 hover:text-slate-900 uppercase tracking-wider print:cursor-default"
                  >
                    Title
                    <span className="print:hidden">{getSortIcon('title')}</span>
                  </button>
                </th>
                <th className="px-4 py-3 text-left print:py-2">
                  <button
                    onClick={() => handleSort('topics')}
                    className="flex items-center gap-2 font-bold text-sm text-slate-700 hover:text-slate-900 uppercase tracking-wider print:cursor-default"
                  >
                    Topics
                    <span className="print:hidden">{getSortIcon('topics')}</span>
                  </button>
                </th>
                <th className="px-4 py-3 text-left print:py-2">
                  <button
                    onClick={() => handleSort('exerciseCount')}
                    className="flex items-center gap-2 font-bold text-sm text-slate-700 hover:text-slate-900 uppercase tracking-wider print:cursor-default"
                  >
                    <BookOpen className="w-4 h-4" />
                    Exercises
                    <span className="print:hidden">{getSortIcon('exerciseCount')}</span>
                  </button>
                </th>
                <th className="px-4 py-3 text-left print:py-2">
                  <button
                    onClick={() => handleSort('estimatedDuration')}
                    className="flex items-center gap-2 font-bold text-sm text-slate-700 hover:text-slate-900 uppercase tracking-wider print:cursor-default"
                  >
                    <Clock className="w-4 h-4" />
                    Duration
                    <span className="print:hidden">{getSortIcon('estimatedDuration')}</span>
                  </button>
                </th>
                <th className="px-4 py-3 text-left print:py-2">
                  <button
                    onClick={() => handleSort('difficulty')}
                    className="flex items-center gap-2 font-bold text-sm text-slate-700 hover:text-slate-900 uppercase tracking-wider print:cursor-default"
                  >
                    Difficulty
                    <span className="print:hidden">{getSortIcon('difficulty')}</span>
                  </button>
                </th>
                <th className="px-4 py-3 text-left print:hidden">
                  <span className="font-bold text-sm text-slate-700 uppercase tracking-wider">
                    Action
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredAndSortedUnits.map((unit) => (
                <tr key={unit.unitId} className="hover:bg-slate-50 transition-colors print:hover:bg-white">
                  <td className="px-4 py-4 print:py-2">
                    <span className="font-black text-slate-900 text-sm">
                      {unit.unitNumber}
                    </span>
                  </td>
                  <td className="px-4 py-4 print:py-2">
                    <span className="font-medium text-slate-900 text-sm">
                      {unit.title}
                    </span>
                  </td>
                  <td className="px-4 py-4 print:py-2">
                    <div className="flex flex-wrap gap-1">
                      {unit.topics.slice(0, 3).map((topic, idx) => (
                        <span
                          key={idx}
                          className="inline-flex px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium print:border print:border-slate-300"
                        >
                          {topic}
                        </span>
                      ))}
                      {unit.topics.length > 3 && (
                        <span className="inline-flex px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                          +{unit.topics.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4 print:py-2">
                    <span className="font-bold text-slate-900 text-sm">
                      {unit.exerciseCount}
                    </span>
                  </td>
                  <td className="px-4 py-4 print:py-2">
                    <span className="font-medium text-slate-600 text-sm">
                      {unit.estimatedDuration} min
                    </span>
                  </td>
                  <td className="px-4 py-4 print:py-2">
                    {renderStars(unit.difficulty)}
                  </td>
                  <td className="px-4 py-4 print:hidden">
                    <Link
                      href={`/debug/a1-preview/${unit.unitId}`}
                      className="inline-flex items-center px-3 py-1.5 bg-coral-600 text-white rounded-lg text-xs font-bold hover:bg-coral-700 transition-colors"
                    >
                      Preview
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3 print:hidden">
        {filteredAndSortedUnits.map((unit) => (
          <div key={unit.unitId} className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-coral-50 text-coral-700 rounded font-black text-xs mb-2">
                  <Hash className="w-3 h-3" />
                  Unit {unit.unitNumber}
                </span>
                <h3 className="font-bold text-slate-900 text-base">{unit.title}</h3>
              </div>
              <div className="flex-shrink-0">
                {renderStars(unit.difficulty)}
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              {unit.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="inline-flex px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span className="font-medium">{unit.exerciseCount} exercises</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{unit.estimatedDuration} min</span>
              </div>
            </div>

            <Link
              href={`/debug/a1-preview/${unit.unitId}`}
              className="block w-full text-center px-4 py-2 bg-coral-600 text-white rounded-lg text-sm font-bold hover:bg-coral-700 transition-colors"
            >
              Preview Unit
            </Link>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAndSortedUnits.length === 0 && (
        <div className="bg-white rounded-lg border border-slate-200 p-12 text-center print:hidden">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">No units found</h3>
          <p className="text-slate-600 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setTopicFilter('');
            }}
            className="px-4 py-2 bg-coral-600 text-white rounded-lg font-bold hover:bg-coral-700 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
