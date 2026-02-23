import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { A1CourseSelector } from '@/components/course/preview/A1CourseSelector';
import { UnitMetadata } from '@/types/premium-course';

jest.mock('../../src/components/course/preview/UnitCard', () => ({
  UnitCard: ({ unit }: { unit: UnitMetadata }) => (
    <div data-testid={`unit-card-${unit.unitId}`}>
      <h3>{unit.title}</h3>
      <span>Unit {unit.unitNumber}</span>
    </div>
  ),
}));

const mockUnits: UnitMetadata[] = [
  {
    unitId: 'unit1',
    unitNumber: 1,
    title: 'Welcome to London',
    topics: ['Vocabulary', 'Grammar'],
    exerciseCount: 15,
    exerciseBreakdown: {
      multiple_choice: 5,
      fill_in_the_blank: 4,
      matching: 3,
      drag_and_drop: 2,
      categorization: 1,
      short_answer: 0,
      audio_matching: 0,
      listening: 0,
      video_narrative: 0,
      flashcards: 0,
      other: 0,
      total: 15,
    },
    difficulty: 1,
    estimatedDuration: 45,
  },
  {
    unitId: 'unit2',
    unitNumber: 2,
    title: 'At the Airport',
    topics: ['Vocabulary', 'Listening'],
    exerciseCount: 12,
    exerciseBreakdown: {
      multiple_choice: 4,
      fill_in_the_blank: 3,
      matching: 2,
      drag_and_drop: 2,
      categorization: 1,
      short_answer: 0,
      audio_matching: 0,
      listening: 0,
      video_narrative: 0,
      flashcards: 0,
      other: 0,
      total: 12,
    },
    difficulty: 1,
    estimatedDuration: 40,
  },
  {
    unitId: 'unit30',
    unitNumber: 30,
    title: 'Shopping and Prices',
    topics: ['Vocabulary', 'Grammar', 'Speaking'],
    exerciseCount: 18,
    exerciseBreakdown: {
      multiple_choice: 6,
      fill_in_the_blank: 5,
      matching: 4,
      drag_and_drop: 2,
      categorization: 1,
      short_answer: 0,
      audio_matching: 0,
      listening: 0,
      video_narrative: 0,
      flashcards: 0,
      other: 0,
      total: 18,
    },
    difficulty: 3,
    estimatedDuration: 55,
  },
];

describe('A1CourseSelector', () => {
  it('should render all units', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    expect(screen.getByTestId('unit-card-unit1')).toBeInTheDocument();
    expect(screen.getByTestId('unit-card-unit2')).toBeInTheDocument();
    expect(screen.getByTestId('unit-card-unit30')).toBeInTheDocument();
  });

  it('should display search input', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('should filter units by title', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i);
    fireEvent.change(searchInput, { target: { value: 'Airport' } });
    
    expect(screen.getByTestId('unit-card-unit2')).toBeInTheDocument();
    expect(screen.queryByTestId('unit-card-unit1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('unit-card-unit30')).not.toBeInTheDocument();
  });

  it('should filter units by number', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i);
    fireEvent.change(searchInput, { target: { value: '30' } });
    
    expect(screen.getByTestId('unit-card-unit30')).toBeInTheDocument();
    expect(screen.queryByTestId('unit-card-unit1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('unit-card-unit2')).not.toBeInTheDocument();
  });

  it('should be case-insensitive in search', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i);
    fireEvent.change(searchInput, { target: { value: 'LONDON' } });
    
    expect(screen.getByTestId('unit-card-unit1')).toBeInTheDocument();
    expect(screen.queryByTestId('unit-card-unit2')).not.toBeInTheDocument();
  });

  it('should show results count when searching', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i);
    fireEvent.change(searchInput, { target: { value: 'unit' } });
    
    expect(screen.getByText(/Found/i)).toBeInTheDocument();
    const results = screen.getAllByText((content, element) => {
      return !!(element?.textContent?.includes('Found') && element?.textContent?.includes('3') && element?.textContent?.includes('units'));
    });
    expect(results.length).toBeGreaterThan(0);
  });

  it('should show clear button when search has value', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i);
    fireEvent.change(searchInput, { target: { value: 'London' } });
    
    const clearButton = screen.getByLabelText(/clear search/i);
    expect(clearButton).toBeInTheDocument();
  });

  it('should clear search when clear button is clicked', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'London' } });
    
    expect(searchInput.value).toBe('London');
    
    const clearButton = screen.getByLabelText(/clear search/i);
    fireEvent.click(clearButton);
    
    expect(searchInput.value).toBe('');
    expect(screen.getByTestId('unit-card-unit1')).toBeInTheDocument();
    expect(screen.getByTestId('unit-card-unit2')).toBeInTheDocument();
    expect(screen.getByTestId('unit-card-unit30')).toBeInTheDocument();
  });

  it('should show "no units found" message when search returns no results', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i);
    fireEvent.change(searchInput, { target: { value: 'nonexistent unit' } });
    
    expect(screen.getByText(/No units found/i)).toBeInTheDocument();
    expect(screen.getByText(/Try adjusting your search query/i)).toBeInTheDocument();
  });

  it('should show clear search button in no results state', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i);
    fireEvent.change(searchInput, { target: { value: 'xyz' } });
    
    const clearButtons = screen.getAllByText(/clear search/i);
    expect(clearButtons.length).toBeGreaterThan(0);
  });

  it('should handle empty units array', () => {
    render(<A1CourseSelector units={[]} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('should filter by partial unit ID match', () => {
    render(<A1CourseSelector units={mockUnits} />);
    
    const searchInput = screen.getByPlaceholderText(/search by unit number or title/i);
    fireEvent.change(searchInput, { target: { value: 'unit1' } });
    
    expect(screen.getByTestId('unit-card-unit1')).toBeInTheDocument();
  });
});
