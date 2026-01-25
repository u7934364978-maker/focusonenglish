'use client';

import { useState, useEffect, useCallback } from 'react';

const STUDY_INTERVAL = 60 * 60 * 1000; // 60 minutos en milisegundos
const STORAGE_KEY = 'study-timer-last-break';

export function useStudyTimer() {
  const [showBreakModal, setShowBreakModal] = useState(false);
  const [studyTime, setStudyTime] = useState(0);

  useEffect(() => {
    // Verificar si ya pasó el tiempo desde el último break
    const lastBreak = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();
    
    if (lastBreak) {
      const timeSinceLastBreak = now - parseInt(lastBreak);
      if (timeSinceLastBreak >= STUDY_INTERVAL) {
        setShowBreakModal(true);
        localStorage.setItem(STORAGE_KEY, now.toString());
      }
    } else {
      // Primera vez, guardar timestamp actual
      localStorage.setItem(STORAGE_KEY, now.toString());
    }

    // Iniciar contador
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setStudyTime(elapsed);

      // Verificar si han pasado 60 minutos
      const lastBreakTime = localStorage.getItem(STORAGE_KEY);
      if (lastBreakTime) {
        const timeSinceBreak = Date.now() - parseInt(lastBreakTime);
        if (timeSinceBreak >= STUDY_INTERVAL) {
          setShowBreakModal(true);
          localStorage.setItem(STORAGE_KEY, Date.now().toString());
        }
      }
    }, 60000); // Verificar cada minuto

    return () => clearInterval(interval);
  }, []);

  const closeBreakModal = useCallback(() => {
    setShowBreakModal(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }, []);

  const snoozeBreak = useCallback(() => {
    setShowBreakModal(false);
    // Postponer por 15 minutos
    const snoozeTime = Date.now() - (STUDY_INTERVAL - 15 * 60 * 1000);
    localStorage.setItem(STORAGE_KEY, snoozeTime.toString());
  }, []);

  return {
    showBreakModal,
    closeBreakModal,
    snoozeBreak,
    studyTime
  };
}
