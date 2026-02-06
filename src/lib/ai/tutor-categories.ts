export interface TutorCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  topics: string[];
}

export const TUTOR_CATEGORIES: TutorCategory[] = [
  {
    id: 'business',
    title: 'Business English',
    icon: '💼',
    description: 'Master professional communication, meetings, and negotiations.',
    topics: ['Job Interviews', 'Email Etiquette', 'Presentations', 'Meetings']
  },
  {
    id: 'travel',
    title: 'Travel & Lifestyle',
    icon: '✈️',
    description: 'Prepare for your next adventure and daily life in English-speaking countries.',
    topics: ['At the Airport', 'Hotel Check-in', 'Dining Out', 'Asking for Directions']
  },
  {
    id: 'social',
    title: 'Social & Small Talk',
    icon: '🤝',
    description: 'Build confidence in social situations and casual conversations.',
    topics: ['Making Friends', 'Hobbies & Interests', 'Current Events', 'Ordering at a Cafe']
  },
  {
    id: 'tech',
    title: 'Technology & Innovation',
    icon: '💻',
    description: 'Discuss latest trends, software development, and digital transformation.',
    topics: ['AI & Future', 'Software Engineering', 'Gadgets', 'Digital Marketing']
  }
];
