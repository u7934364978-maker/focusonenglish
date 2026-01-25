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
