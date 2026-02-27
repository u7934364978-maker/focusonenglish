import { renderHook, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useWeekProgress } from '@/hooks/useWeekProgress';

const mockSelect = jest.fn();
const mockEq = jest.fn();
const mockUpsert = jest.fn();

jest.mock('@/lib/supabase-client', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: mockSelect,
      upsert: mockUpsert,
    })),
  },
}));

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

beforeEach(() => {
  localStorageMock.clear();
  jest.clearAllMocks();

  mockSelect.mockReturnValue({
    eq: mockEq,
  });
  mockEq.mockImplementation(() => ({
    eq: () => Promise.resolve({ data: [], error: null }),
  }));
});

describe('useWeekProgress', () => {
  describe('optimistic localStorage read on mount', () => {
    it('reads existing localStorage data immediately', async () => {
      localStorageMock.setItem(
        'course_progress_week-1',
        JSON.stringify(['activity-1', 'activity-2'])
      );

      const { result } = renderHook(() =>
        useWeekProgress('week-1', null)
      );

      await waitFor(() => {
        expect(result.current.completedActivities).toContain('activity-1');
        expect(result.current.completedActivities).toContain('activity-2');
      });
    });

    it('returns empty array when no localStorage data exists', async () => {
      const { result } = renderHook(() =>
        useWeekProgress('week-1', null)
      );

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.completedActivities).toEqual([]);
    });
  });

  describe('markComplete', () => {
    it('adds activity to completedActivities synchronously', async () => {
      const { result } = renderHook(() =>
        useWeekProgress('week-1', null)
      );

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      await act(async () => {
        await result.current.markComplete('activity-new');
      });

      expect(result.current.completedActivities).toContain('activity-new');
    });

    it('writes to localStorage on markComplete', async () => {
      const { result } = renderHook(() =>
        useWeekProgress('week-1', null)
      );

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      await act(async () => {
        await result.current.markComplete('activity-x');
      });

      const stored = JSON.parse(localStorageMock.getItem('course_progress_week-1') ?? '[]');
      expect(stored).toContain('activity-x');
    });

    it('skips Supabase upsert when userId is null', async () => {
      const { supabase } = require('@/lib/supabase-client');
      const { result } = renderHook(() =>
        useWeekProgress('week-1', null)
      );

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      await act(async () => {
        await result.current.markComplete('activity-y');
      });

      expect(supabase.from).not.toHaveBeenCalledWith(
        expect.stringMatching(/user_interaction_progress/)
      );
    });

    it('calls Supabase upsert when userId is provided', async () => {
      mockEq.mockImplementation(() => ({
        eq: () => Promise.resolve({ data: [], error: null }),
      }));
      mockUpsert.mockResolvedValue({ error: null });

      const { supabase } = require('@/lib/supabase-client');

      const { result } = renderHook(() =>
        useWeekProgress('week-1', 'user-123')
      );

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      await act(async () => {
        await result.current.markComplete('activity-z');
      });

      expect(supabase.from).toHaveBeenCalledWith('user_interaction_progress');
      expect(mockUpsert).toHaveBeenCalledWith(
        expect.objectContaining({
          user_id: 'user-123',
          interaction_id: 'activity-z',
          week_id: 'week-1',
        })
      );
    });

    it('does not add duplicate activity', async () => {
      localStorageMock.setItem(
        'course_progress_week-1',
        JSON.stringify(['activity-dup'])
      );

      const { result } = renderHook(() =>
        useWeekProgress('week-1', null)
      );

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      await act(async () => {
        await result.current.markComplete('activity-dup');
      });

      expect(
        result.current.completedActivities.filter(a => a === 'activity-dup').length
      ).toBe(1);
    });
  });

  describe('Supabase merge on mount', () => {
    it('merges remote activities with local ones', async () => {
      localStorageMock.setItem(
        'course_progress_week-1',
        JSON.stringify(['local-act'])
      );

      mockEq.mockImplementation(() => ({
        eq: () =>
          Promise.resolve({
            data: [{ interaction_id: 'remote-act' }],
            error: null,
          }),
      }));

      const { result } = renderHook(() =>
        useWeekProgress('week-1', 'user-123')
      );

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      expect(result.current.completedActivities).toContain('local-act');
      expect(result.current.completedActivities).toContain('remote-act');
    });
  });
});
