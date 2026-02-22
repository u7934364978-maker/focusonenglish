'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, Headphones, PenTool, MessageSquare, Clock, CheckCircle2, ChevronLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MicroLesson from './activities/MicroLesson';
import QuizActivity from './activities/QuizActivity';
import EmailTaskActivity from './activities/EmailTaskActivity';
import RoleplayActivity from './activities/RoleplayActivity';
import ReactMarkdown from 'react-markdown';

interface WeeklyCourseViewerProps {
  weekData: any;
}

export default function WeeklyCourseViewer({ weekData }: WeeklyCourseViewerProps) {
  const { week, assets, templates, itemBank } = weekData;
  const [activeDayId, setActiveDayId] = useState(week.days[0].id);
  const [activeActivityId, setActiveActivityId] = useState<string | null>(null);
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`course_progress_${week.id}`);
    if (saved) {
      setCompletedActivities(JSON.parse(saved));
    }
  }, [week.id]);

  // Save progress to localStorage
  useEffect(() => {
    if (completedActivities.length > 0) {
      localStorage.setItem(`course_progress_${week.id}`, JSON.stringify(completedActivities));
    }
  }, [completedActivities, week.id]);

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
  const activeActivity = currentDay.activities.find((a: any) => a.id === activeActivityId);

  const totalActivities = week.days.reduce((acc: number, day: any) => acc + day.activities.length, 0);
  const completedCount = completedActivities.length;
  const progressPercentage = (completedCount / totalActivities) * 100;

  const isDayCompleted = (dayId: string) => {
    const day = week.days.find((d: any) => d.id === dayId);
    return day.activities.every((a: any) => completedActivities.includes(a.id));
  };

  const VocabularyHighlighter = ({ text }: { text: string }) => {
    if (!text) return null;
    let highlightedText = text;
    week.vocabulary.forEach((word: string) => {
      const regex = new RegExp(`\\b(${word})\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded font-bold text-slate-900">$1</mark>');
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  const renderActivity = () => {
    if (!activeActivity) return null;

    const onComplete = () => {
      if (activeActivityId && !completedActivities.includes(activeActivityId)) {
        setCompletedActivities(prev => [...prev, activeActivityId]);
      }
      setActiveActivityId(null);
    };

    const activityContent = (() => {
      switch (activeActivity.type) {
        case 'micro_lesson':
          return <MicroLesson content={activeActivity.content} onComplete={onComplete} vocabulary={week.vocabulary} />;
        case 'practice_set':
        case 'weekly_quiz':
        case 'listening_quiz':
          const quizQuestions = activeActivity.questionIds.map((id: string) => 
            itemBank.find((q: any) => q.id === id)
          );
          const asset = assets.find((a: any) => a.id === activeActivity.assetId);
          return <QuizActivity questions={quizQuestions} onComplete={onComplete} audioUrl={asset?.audioUrl} vocabulary={week.vocabulary} />;
        case 'email_task':
          const template = templates.find((t: any) => t.id === activeActivity.templateId);
          return <EmailTaskActivity template={template} onComplete={onComplete} />;
        case 'roleplay':
          return <RoleplayActivity content={activeActivity.content} onComplete={onComplete} />;
        default:
          return (
            <div className="text-center p-12 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
              <h3 className="text-xl font-bold text-slate-400">Activity type "{activeActivity.type}" not implemented yet</h3>
              <Button onClick={() => setActiveActivityId(null)} className="mt-4">Go Back</Button>
            </div>
          );
      }
    })();

    return (
      <motion.div
        key={activeActivityId}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {activityContent}
      </motion.div>
    );
  };

  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-sm"
          initial={{ 
            top: -20, 
            left: `${Math.random() * 100}vw`,
            backgroundColor: ['#ff4d4d', '#4dff4d', '#4d4dff', '#ffff4d', '#ff4dff'][Math.floor(Math.random() * 5)],
            rotate: 0 
          }}
          animate={{ 
            top: '120vh',
            rotate: 360,
            left: `${(Math.random() * 100) - 10 + (Math.random() * 20)}vw`
          }}
          transition={{ 
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );

  if (activeActivityId) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6 min-h-screen">
        <Button 
          variant="secondary" 
          onClick={() => setActiveActivityId(null)}
          className="font-bold text-slate-500 hover:text-coral-600 gap-2 mb-4"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Course Overview
        </Button>
        <AnimatePresence mode="wait">
          {renderActivity()}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 animate-in fade-in duration-700">
      {progressPercentage === 100 && <Confetti />}
      {progressPercentage === 100 && (
        <Card className="bg-gradient-to-r from-coral-500 to-orange-400 text-white border-none shadow-xl overflow-hidden">
          <CardContent className="p-8 flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-black">Congratulations! 🎉</h2>
              <p className="font-bold opacity-90 text-lg">You've completed all activities for {week.title}.</p>
            </div>
            <div className="hidden md:block">
              <Badge className="bg-white text-coral-600 hover:bg-slate-50 px-6 py-2 text-lg font-black rounded-full">
                WEEK COMPLETED
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

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
              <Progress value={progressPercentage} className="h-2" />
            </CardContent>
          </Card>

          <nav className="flex flex-col gap-2">
            {week.days.map((day: any, idx: number) => {
              const completed = isDayCompleted(day.id);
              return (
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
                    completed ? 'border-green-500 bg-green-500 text-white' : 
                    activeDayId === day.id ? 'border-coral-500 bg-coral-500 text-white' : 'border-slate-200'
                  }`}>
                    {completed ? '✓' : ''}
                  </div>
                </button>
              );
            })}
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
              {currentDay.activities.map((activity: any) => {
                const isCompleted = completedActivities.includes(activity.id);
                return (
                  <Card key={activity.id} className={`border transition-all cursor-pointer group ${
                    isCompleted ? 'border-green-100 bg-green-50/30' : 'border-slate-200 hover:border-coral-300'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            isCompleted ? 'bg-green-100' : 'bg-slate-50 group-hover:bg-orange-50'
                          }`}>
                            {isCompleted ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : getActivityIcon(activity.type)}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                              {activity.type?.replace('_', ' ') || 'Activity'}
                            </div>
                            <h3 className={`font-bold transition-colors ${
                              isCompleted ? 'text-green-700' : 'text-slate-900 group-hover:text-coral-600'
                            }`}>
                              Activity {(activity.id || "").split('-').pop()}
                            </h3>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button 
                            onClick={() => setActiveActivityId(activity.id)}
                            variant={isCompleted ? "secondary" : "outline"} 
                            className={`font-bold rounded-xl ${
                              !isCompleted && 'group-hover:bg-coral-600 group-hover:text-white'
                            }`}
                          >
                            {isCompleted ? 'Review' : 'Start →'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
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
