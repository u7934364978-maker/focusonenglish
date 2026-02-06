'use client';

import { TUTOR_CATEGORIES } from '@/lib/ai/tutor-categories';
import { motion } from 'framer-motion';

interface CategorySelectorProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

export function CategorySelector({ selectedId, onSelect, disabled }: CategorySelectorProps) {
  return (
    <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm">
      <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
        <span className="w-8 h-8 bg-coral-100 text-coral-600 rounded-lg flex items-center justify-center text-lg">🏫</span>
        ¿Qué quieres practicar hoy?
      </h3>
      
      <div className="grid grid-cols-1 gap-3">
        {TUTOR_CATEGORIES.map((category) => (
          <button
            key={category.id}
            disabled={disabled}
            onClick={() => onSelect(category.id)}
            className={`text-left p-4 rounded-2xl border-2 transition-all group ${
              selectedId === category.id
                ? 'border-coral-500 bg-coral-50'
                : 'border-slate-50 hover:border-coral-200 bg-slate-50/50'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              <div>
                <p className="font-black text-slate-900">{category.title}</p>
                <p className="text-xs text-slate-500 line-clamp-1">
                  {category.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
