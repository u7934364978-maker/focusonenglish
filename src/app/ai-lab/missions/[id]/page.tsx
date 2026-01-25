'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { MISSION_CATALOG } from '@/lib/exercise-types';
import { MissionInterface } from '@/components/ai-lab/MissionInterface';
import { ArrowLeft, Shield, Globe, MessageSquare } from 'lucide-react';

export default function MissionPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const mission = MISSION_CATALOG.find(m => m.id === id);

  if (!mission) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Misión no encontrada</h2>
          <Link href="/ai-lab" className="text-coral-600 font-bold hover:underline">
            Volver al AI Lab
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mini Header */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/ai-lab" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-bold">Abandonar Misión</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Shield className="w-3 h-3 text-blue-500" /> {mission.sector.toUpperCase()}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Globe className="w-3 h-3 text-green-500" /> {mission.persona.accent} ACCENT
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <MessageSquare className="w-3 h-3 text-purple-500" /> {mission.level}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-4xl">{mission.persona.avatar}</span>
            <div>
              <h1 className="text-3xl font-black text-slate-900">{mission.title}</h1>
              <p className="text-slate-500 font-medium">Con {mission.persona.name} • {mission.persona.role}</p>
            </div>
          </div>
        </div>

        <MissionInterface mission={mission} />
      </div>
    </div>
  );
}
