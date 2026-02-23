import { render, screen, fireEvent } from '@testing-library/react';
import { ModuleGroup } from '../ModuleGroup';
import { ModuleMetadata } from '@/types/premium-course';

const mockModule: ModuleMetadata = {
  moduleNumber: 1,
  title: 'Module 1: Basics & Greetings',
  unitCount: 10,
  totalDuration: 300,
  description: 'Learn essential greetings and basic conversational phrases.',
  units: [
    {
      unitId: 'unit-1',
      unitNumber: 1,
      title: 'Unit 1: Hello & Introductions',
      topics: ['Grammar', 'Vocabulary'],
      exerciseCount: 10,
      exerciseBreakdown: {
        multiple_choice: 5,
        fill_in_the_blank: 2,
        matching: 1,
        drag_and_drop: 1,
        categorization: 0,
        short_answer: 1,
        audio_matching: 0,
        listening: 0,
        video_narrative: 0,
        flashcards: 0,
        other: 0,
        total: 10
      },
      difficulty: 1,
      estimatedDuration: 30,
      learningOutcomes: ['Learn basic greetings'],
      masteryTags: ['grammar.present_simple']
    },
    {
      unitId: 'unit-2',
      unitNumber: 2,
      title: 'Unit 2: Numbers & Time',
      topics: ['Vocabulary', 'Listening'],
      exerciseCount: 12,
      exerciseBreakdown: {
        multiple_choice: 6,
        fill_in_the_blank: 3,
        matching: 1,
        drag_and_drop: 1,
        categorization: 0,
        short_answer: 1,
        audio_matching: 0,
        listening: 0,
        video_narrative: 0,
        flashcards: 0,
        other: 0,
        total: 12
      },
      difficulty: 1,
      estimatedDuration: 35,
      learningOutcomes: ['Learn numbers and tell time'],
      masteryTags: ['vocabulary.numbers']
    }
  ]
};

describe('ModuleGroup', () => {
  it('should render module metadata correctly', () => {
    render(<ModuleGroup module={mockModule} />);

    expect(screen.getByText('Module 1: Basics & Greetings')).toBeInTheDocument();
    expect(screen.getByText('Learn essential greetings and basic conversational phrases.')).toBeInTheDocument();
    expect(screen.getByText('10 units')).toBeInTheDocument();
    expect(screen.getByText('300 min total')).toBeInTheDocument();
  });

  it('should start collapsed by default', () => {
    render(<ModuleGroup module={mockModule} />);

    expect(screen.queryByText('Unit 1: Hello & Introductions')).not.toBeInTheDocument();
    expect(screen.queryByText('Unit 2: Numbers & Time')).not.toBeInTheDocument();
  });

  it('should expand when isInitiallyExpanded is true', () => {
    render(<ModuleGroup module={mockModule} isInitiallyExpanded={true} />);

    expect(screen.getByText('Unit 1: Hello & Introductions')).toBeInTheDocument();
    expect(screen.getByText('Unit 2: Numbers & Time')).toBeInTheDocument();
  });

  it('should toggle expansion when clicked', async () => {
    render(<ModuleGroup module={mockModule} />);

    const button = screen.getByRole('button', { name: /expand module 1/i });
    
    expect(screen.queryByText('Unit 1: Hello & Introductions')).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByText('Unit 1: Hello & Introductions')).toBeInTheDocument();
    expect(screen.getByText('Unit 2: Numbers & Time')).toBeInTheDocument();

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should display module number badge', () => {
    render(<ModuleGroup module={mockModule} />);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should handle singular unit count correctly', () => {
    const singleUnitModule: ModuleMetadata = {
      ...mockModule,
      unitCount: 1,
      units: [mockModule.units[0]]
    };

    render(<ModuleGroup module={singleUnitModule} />);

    expect(screen.getByText('1 unit')).toBeInTheDocument();
  });

  it('should render all units when expanded', () => {
    render(<ModuleGroup module={mockModule} isInitiallyExpanded={true} />);

    expect(screen.getByText('Unit 1: Hello & Introductions')).toBeInTheDocument();
    expect(screen.getByText('Unit 2: Numbers & Time')).toBeInTheDocument();
  });
});
