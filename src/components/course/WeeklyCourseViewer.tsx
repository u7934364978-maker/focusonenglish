'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, Headphones, PenTool, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';

interface WeeklyCourseViewerProps {
  weekData: any;
}

export default function WeeklyCourseViewer({ weekData }: WeeklyCourseViewerProps) {
  const { week, assets, templates, itemBank } = weekData;
  const [activeDayId, setActiveDayId] = useState(week.days[0].id);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'micro_lesson': return <BookOpen className="w-5 h-5 text-blue-500" />;
      case 'listening_quiz': return <Headphones className="w-5 h-5 text-purple-500" />;
      case 'practice_set':
      case 'weekly_quiz':
      case 'checkpoint_set': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'email_task':
      case 'email_reorder':
      case 'timed_email':
      case 'error_correction': return <PenTool className="w-5 h-5 text-orange-500" />;
      case 'roleplay': return <MessageSquare className="w-5 h-5 text-pink-500" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const currentDay = week.days.find((d: any) => d.id === activeDayId);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-2 text-coral-600 font-bold tracking-wider uppercase text-sm">
          <span>Course ID: {weekData.courseRef.courseId}</span>
          <span>•</span>
          <span>{weekData.courseRef.targetLevel}</span>
        </div>
        <h1 className="text-4xl font-black text-slate-900">{week.title}</h1>
        <div className="flex flex-wrap gap-2">
          {week.objectives.map((obj: string, i: number) => (
            <Badge key={i} variant="secondary" className="bg-orange-100 text-coral-700 hover:bg-orange-200">
              {obj}
            </Badge>
          ))}
        </div>
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="space-y-6">
          <Card className="border-2 border-slate-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={20} className="h-2" />
              <p className="text-sm text-slate-500 font-medium text-center">Day 1 of 5 completed</p>
            </CardContent>
          </Card>

          <nav className="flex flex-col gap-2">
            {week.days.map((day: any, idx: number) => (
              <button
                key={day.id}
                onClick={() => setActiveDayId(day.id)}
                className={`p-4 rounded-xl text-left border-2 transition-all flex items-center justify-between group ${
                  activeDayId === day.id
                    ? 'border-coral-500 bg-orange-50 text-coral-700'
                    : 'border-transparent bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60">Day {idx + 1}</div>
                  <div className="font-bold">{day.title}</div>
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                  activeDayId === day.id ? 'border-coral-500 bg-coral-500 text-white' : 'border-slate-200'
                }`}>
                  {idx === 0 ? '✓' : ''}
                </div>
              </button>
            ))}
          </nav>

          <Card className="bg-slate-900 text-white p-4 rounded-2xl">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-sm font-bold opacity-70 uppercase tracking-widest">Vocabulary focus</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex flex-wrap gap-2">
              {week.vocabulary.map((v: string) => (
                <span key={v} className="text-xs font-bold bg-white/10 px-2 py-1 rounded">
                  {v}
                </span>
              ))}
            </CardContent>
          </Card>
        </aside>

        <main className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-coral-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">
                {week.days.indexOf(currentDay) + 1}
              </span>
              {currentDay.title}
            </h2>

            <div className="space-y-4">
              {currentDay.activities.map((activity: any) => (
                <Card key={activity.id} className="border border-slate-200 hover:border-coral-300 transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                            {activity.type.replace('_', ' ')}
                          </div>
                          <h3 className="font-bold text-slate-900 group-hover:text-coral-600 transition-colors">
                            Activity {activity.id.split('-').pop()}
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-slate-400 text-sm font-bold">
                          <Clock className="w-4 h-4" />
                          {activity.minutes} min
                        </div>
                        <Button variant="ghost" className="font-bold group-hover:bg-coral-600 group-hover:text-white rounded-xl">
                          Start →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <section className="grid md:grid-cols-2 gap-6">
            <Card className="bg-emerald-50 border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Grammar Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {week.grammar.map((g: string) => (
                    <li key={g} className="text-emerald-800 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {assets.map((asset: any) => (
                  <div key={asset.id} className="flex items-center justify-between bg-white p-3 rounded-xl border border-blue-100">
                    <span className="text-sm font-bold text-blue-900">{asset.title}</span>
                    <Badge variant="outline" className="text-[10px] uppercase">{asset.type}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
