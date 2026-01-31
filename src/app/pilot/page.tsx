'use client';

import { useState, useEffect } from 'react';
import { Navigation } from "@/components/sections/Navigation";
import PilotLessonPlayer from "@/components/pilot/PilotLessonPlayer";
import { createClient } from '@/lib/supabase/client';
import { getPilotProgress } from '@/lib/services/pilot-service';
import airportArrivalData from '@/content/pilot/airport-arrival.json';
import { Loader2 } from 'lucide-react';

export default function PilotPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<any>(null);

  useEffect(() => {
    async function checkUser() {
      const supabase = createClient();
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      // Fetch progress if user exists, otherwise use guest defaults
      const userId = user?.id || 'guest-user';
      const pilotProgress = await getPilotProgress(userId, airportArrivalData.unitId);
      setProgress(pilotProgress);
      
      setLoading(false);
    }
    checkUser();
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
        {loading ? (
          <div className="flex items-center justify-center py-40">
            <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
          </div>
        ) : (
          <div className="animate-in fade-in duration-700">
            <PilotLessonPlayer 
              unit={airportArrivalData} 
              userId={user?.id || 'guest-user'} 
              initialProgress={progress} 
            />
          </div>
        )}
      </main>
    </>
  );
}
