'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PenTool, Send, AlertCircle, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface EmailTemplate {
  id: string;
  type: string;
  title: string;
  subject: string;
  bodyWithSurname: string;
  bodyNoSurname: string;
}

interface EmailTaskProps {
  template: EmailTemplate;
  onComplete: (data: { response: string }) => void;
}

export default function EmailTaskActivity({ template, onComplete }: EmailTaskProps) {
  const [response, setResponse] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (response.length < 20) return;
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card className="border-2 border-slate-200 rounded-3xl overflow-hidden">
        <CardHeader className="bg-slate-50 border-b border-slate-100 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-100 rounded-lg">
              <PenTool className="w-5 h-5 text-orange-600" />
            </div>
            <CardTitle className="text-xl font-bold">Email Writing Task</CardTitle>
          </div>
          <p className="text-slate-500 text-sm">
            {template.title}: Practice writing a professional email response.
          </p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-2">
              <span className="text-slate-400 font-bold text-xs uppercase w-16">Subject:</span>
              <span className="font-bold text-slate-700">{template.subject}</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-slate-400 font-bold text-xs uppercase w-16 mt-1">From:</span>
              <div className="prose prose-slate text-sm text-slate-600 italic">
                {template.bodyNoSurname.replace('{{surname}}', '______')}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider px-1">
              Your Response
            </label>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Write your email here..."
              disabled={isSubmitted}
              className="w-full min-h-[200px] p-6 rounded-2xl border-2 border-slate-200 focus:border-coral-500 focus:ring-4 focus:ring-coral-500/10 transition-all outline-none resize-none font-medium"
            />
            {response.length > 0 && response.length < 20 && (
              <p className="text-xs text-orange-600 font-bold flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Your response is too short. Try to write a full sentence.
              </p>
            )}
          </div>

          <div className="flex justify-end pt-4 gap-3">
            {!isSubmitted ? (
              <Button
                onClick={handleSubmit}
                disabled={response.length < 20}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-6 rounded-2xl gap-2 min-w-[180px]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={() => onComplete({ response })}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 rounded-2xl gap-2 min-w-[180px] shadow-lg shadow-green-100 animate-in fade-in zoom-in duration-300"
              >
                Next Activity
                <ArrowRight className="w-5 h-5" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      
      {isSubmitted && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-500">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Email Sent!</h2>
          </div>
        </div>
      )}
    </div>
  );
}

function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
