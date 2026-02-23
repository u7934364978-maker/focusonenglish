// Google Analytics 4 Event Tracking
// Focus English - España

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Verificar si GA está disponible
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID as string, {
      page_path: url,
    });
  }
};

// Eventos personalizados
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos de Focus English
export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaName} - ${location}`,
  });
};

export const trackCourseView = (goal: string, level: string) => {
  event({
    action: 'course_view',
    category: 'courses',
    label: `${goal}/${level}`,
  });
};

export const trackBlogView = (slug: string) => {
  event({
    action: 'blog_view',
    category: 'content',
    label: slug,
  });
};

export const trackTestStart = (testType: string) => {
  event({
    action: 'test_start',
    category: 'conversion',
    label: testType,
  });
};

export const trackSignupIntent = (source: string) => {
  event({
    action: 'signup_intent',
    category: 'conversion',
    label: source,
  });
};

export const trackScrollDepth = (depth: number, page: string) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: page,
    value: depth,
  });
};

export const trackTimeOnPage = (seconds: number, page: string) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: page,
    value: seconds,
  });
};

// A1 Course Preview Analytics Events
export const trackA1PreviewLanding = () => {
  event({
    action: 'a1_preview_landing_view',
    category: 'course_preview',
    label: 'A1 Course Landing',
  });
};

export const trackUnitCardClick = (unitId: string, unitNumber: number) => {
  event({
    action: 'unit_card_click',
    category: 'course_preview',
    label: `${unitId} (Unit ${unitNumber})`,
    value: unitNumber,
  });
};

export const trackFilterUsage = (filterType: 'topic' | 'difficulty' | 'search', filterValue: string) => {
  event({
    action: 'filter_usage',
    category: 'course_preview',
    label: `${filterType}: ${filterValue}`,
  });
};

export const trackViewModeToggle = (viewMode: 'grid' | 'modules') => {
  event({
    action: 'view_mode_toggle',
    category: 'course_preview',
    label: viewMode,
  });
};

export const trackAudioPlayback = (action: 'play' | 'pause' | 'speed_change' | 'seek', unitId?: string, value?: number) => {
  event({
    action: `audio_${action}`,
    category: 'course_preview',
    label: unitId || 'unknown',
    value: value,
  });
};

export const trackTranslationToggle = (showTranslation: boolean, unitId?: string) => {
  event({
    action: 'translation_toggle',
    category: 'course_preview',
    label: unitId || 'unknown',
    value: showTranslation ? 1 : 0,
  });
};

export const trackUnitTimeSpent = (unitId: string, seconds: number) => {
  event({
    action: 'unit_time_spent',
    category: 'course_preview',
    label: unitId,
    value: seconds,
  });
};

export const trackExerciseCompletion = (unitId: string, exerciseIndex: number, totalExercises: number) => {
  event({
    action: 'exercise_completion',
    category: 'course_preview',
    label: `${unitId} - Exercise ${exerciseIndex + 1}/${totalExercises}`,
    value: exerciseIndex + 1,
  });
};

export const trackUnitCompletion = (unitId: string, totalExercises: number, durationMinutes: number) => {
  event({
    action: 'unit_completion',
    category: 'course_preview',
    label: unitId,
    value: durationMinutes,
  });
};

// TypeScript types
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
