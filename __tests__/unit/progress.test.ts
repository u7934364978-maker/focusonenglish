import { calculateUnitProgress } from '@/lib/progress';

describe('Progress Calculation', () => {
  describe('calculateUnitProgress', () => {
    it('should calculate progress with no completed exercises', () => {
      const allIds = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
      const completedIds: string[] = [];
      
      const result = calculateUnitProgress(allIds, completedIds);
      
      expect(result).toEqual({
        total: 5,
        completed: 0,
        percentage: 0
      });
    });

    it('should calculate progress with all exercises completed', () => {
      const allIds = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
      const completedIds = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
      
      const result = calculateUnitProgress(allIds, completedIds);
      
      expect(result).toEqual({
        total: 5,
        completed: 5,
        percentage: 100
      });
    });

    it('should calculate progress with partial completion', () => {
      const allIds = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
      const completedIds = ['ex1', 'ex3'];
      
      const result = calculateUnitProgress(allIds, completedIds);
      
      expect(result).toEqual({
        total: 5,
        completed: 2,
        percentage: 40
      });
    });

    it('should round percentage to nearest integer', () => {
      const allIds = ['ex1', 'ex2', 'ex3'];
      const completedIds = ['ex1'];
      
      const result = calculateUnitProgress(allIds, completedIds);
      
      expect(result).toEqual({
        total: 3,
        completed: 1,
        percentage: 33
      });
    });

    it('should handle empty exercise list', () => {
      const allIds: string[] = [];
      const completedIds: string[] = [];
      
      const result = calculateUnitProgress(allIds, completedIds);
      
      expect(result).toEqual({
        total: 0,
        completed: 0,
        percentage: 0
      });
    });

    it('should ignore completed IDs not in the exercise list', () => {
      const allIds = ['ex1', 'ex2', 'ex3'];
      const completedIds = ['ex1', 'ex2', 'ex999', 'ex_other'];
      
      const result = calculateUnitProgress(allIds, completedIds);
      
      expect(result).toEqual({
        total: 3,
        completed: 2,
        percentage: 67
      });
    });

    it('should handle duplicate completed IDs', () => {
      const allIds = ['ex1', 'ex2', 'ex3'];
      const completedIds = ['ex1', 'ex1', 'ex2', 'ex2'];
      
      const result = calculateUnitProgress(allIds, completedIds);
      
      expect(result).toEqual({
        total: 3,
        completed: 2,
        percentage: 67
      });
    });

    it('should calculate progress for large number of exercises', () => {
      const allIds = Array.from({ length: 50 }, (_, i) => `ex${i + 1}`);
      const completedIds = Array.from({ length: 25 }, (_, i) => `ex${i + 1}`);
      
      const result = calculateUnitProgress(allIds, completedIds);
      
      expect(result).toEqual({
        total: 50,
        completed: 25,
        percentage: 50
      });
    });

    it('should handle single exercise', () => {
      const allIds = ['ex1'];
      const completedIds = ['ex1'];
      
      const result = calculateUnitProgress(allIds, completedIds);
      
      expect(result).toEqual({
        total: 1,
        completed: 1,
        percentage: 100
      });
    });

    describe('Real unit data examples', () => {
      it('should calculate progress for Unit 1 with 15 exercises', () => {
        const unit1Ids = [
          'U1_I1', 'U1_I2', 'U1_I3', 'U1_I4', 'U1_I5',
          'U1_I6', 'U1_I7', 'U1_I8', 'U1_I9', 'U1_I10',
          'U1_I11', 'U1_I12', 'U1_I13', 'U1_I14', 'U1_I15'
        ];
        const completedIds = ['U1_I1', 'U1_I2', 'U1_I3', 'U1_I4', 'U1_I5'];
        
        const result = calculateUnitProgress(unit1Ids, completedIds);
        
        expect(result).toEqual({
          total: 15,
          completed: 5,
          percentage: 33
        });
      });

      it('should handle partially completed unit', () => {
        const allIds = ['U2_I1', 'U2_I2', 'U2_I3', 'U2_I4', 'U2_I5', 'U2_I6', 'U2_I7', 'U2_I8'];
        const completedIds = ['U2_I1', 'U2_I3', 'U2_I5', 'U2_I7'];
        
        const result = calculateUnitProgress(allIds, completedIds);
        
        expect(result).toEqual({
          total: 8,
          completed: 4,
          percentage: 50
        });
      });
    });

    describe('Edge cases', () => {
      it('should handle case-sensitive IDs', () => {
        const allIds = ['EX1', 'EX2', 'EX3'];
        const completedIds = ['ex1', 'EX2'];
        
        const result = calculateUnitProgress(allIds, completedIds);
        
        expect(result).toEqual({
          total: 3,
          completed: 1,
          percentage: 33
        });
      });

      it('should handle IDs with special characters', () => {
        const allIds = ['ex-1', 'ex_2', 'ex.3'];
        const completedIds = ['ex-1', 'ex_2'];
        
        const result = calculateUnitProgress(allIds, completedIds);
        
        expect(result).toEqual({
          total: 3,
          completed: 2,
          percentage: 67
        });
      });
    });
  });
});
