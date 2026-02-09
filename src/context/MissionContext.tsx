'use client';
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import confetti from 'canvas-confetti';

interface MissionState {
  xp: number;
  level: number;
  streak: number;
  missionId: string | null;
  blitzActive: boolean;
  powerUps: {
    hints: number;
    fiftyFifty: number;
    freeze: number;
  };
  lastResult: 'correct' | 'incorrect' | null;
}

type MissionAction =
  | { type: 'ADD_XP'; amount: number }
  | { type: 'SET_MISSION'; id: string }
  | { type: 'START_BLITZ' }
  | { type: 'STOP_BLITZ' }
  | { type: 'RECORD_RESULT'; success: boolean }
  | { type: 'USE_POWERUP'; kind: keyof MissionState['powerUps'] }
  | { type: 'RESET_SESSION' };

const initialState: MissionState = {
  xp: 0,
  level: 1,
  streak: 0,
  missionId: null,
  blitzActive: false,
  powerUps: {
    hints: 3,
    fiftyFifty: 2,
    freeze: 1
  },
  lastResult: null
};

function missionReducer(state: MissionState, action: MissionAction): MissionState {
  switch (action.type) {
    case 'START_BLITZ':
      return { ...state, blitzActive: true };
    case 'STOP_BLITZ':
      return { ...state, blitzActive: false };
    case 'ADD_XP':
      const newXp = state.xp + action.amount;
      const nextLevelThreshold = state.level * 1000;
      if (newXp >= nextLevelThreshold) {
        return { ...state, xp: newXp - nextLevelThreshold, level: state.level + 1 };
      }
      return { ...state, xp: newXp };
    case 'SET_MISSION':
      return { ...state, missionId: action.id };
    case 'RECORD_RESULT':
      if (action.success) {
        const newStreak = state.streak + 1;
        return { 
          ...state, 
          streak: newStreak, 
          lastResult: 'correct',
          xp: state.xp + (50 * Math.min(newStreak, 5)) // Bonus por racha
        };
      } else {
        return { ...state, streak: 0, lastResult: 'incorrect' };
      }
    case 'USE_POWERUP':
      if (state.powerUps[action.kind] > 0) {
        return {
          ...state,
          powerUps: {
            ...state.powerUps,
            [action.kind]: state.powerUps[action.kind] - 1
          }
        };
      }
      return state;
    case 'RESET_SESSION':
      return initialState;
    default:
      return state;
  }
}

const MissionContext = createContext<{
  state: MissionState;
  dispatch: React.Dispatch<MissionAction>;
} | undefined>(undefined);

export function MissionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(missionReducer, initialState);

  // Efecto para celebraciones de nivel
  useEffect(() => {
    if (state.level > 1) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F43F5E', '#FB923C', '#FACC15']
      });
    }
  }, [state.level]);

  return (
    <MissionContext.Provider value={{ state, dispatch }}>
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  const context = useContext(MissionContext);
  if (!context) {
    throw new Error('useMission must be used within a MissionProvider');
  }
  return context;
}
