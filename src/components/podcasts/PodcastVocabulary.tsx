'use client'

import type { VocabularyItem } from '@/lib/podcasts/types'

interface PodcastVocabularyProps {
  items: VocabularyItem[]
}

export default function PodcastVocabulary({ items }: PodcastVocabularyProps) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-bold text-slate-900">{item.word}</span>
            <span className="text-sm text-slate-500">— {item.translation}</span>
          </div>
          <p className="text-sm text-slate-600 italic mt-1">"{item.example}"</p>
        </li>
      ))}
    </ul>
  )
}
