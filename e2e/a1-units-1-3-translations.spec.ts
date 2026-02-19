import { test, expect } from '@playwright/test';

test.describe('A1 Units Word-by-Word Translation Verification', () => {
  const units = [
    { id: 'unit-1', expectedWord: 'Hello', expectedTranslation: 'Hola', index: 55 },
    { id: 'unit-2', expectedWord: 'Meet', expectedTranslation: 'Conoce', index: 55 },
    { id: 'unit-3', expectedWord: 'sick', expectedTranslation: 'enfermo', index: 55 },
    { id: 'unit-4', expectedWord: 'book', expectedTranslation: 'libro', index: 52 },
    { id: 'unit-7', expectedWord: 'cousin', expectedTranslation: 'primo', index: 50 },
    { id: 'unit-8', expectedWord: 'thirty-seven', expectedTranslation: 'treinta y siete', index: 50 },
    { id: 'unit-9', expectedWord: 'officer', expectedTranslation: 'oficial', index: 58 }
  ];

  for (const unit of units) {
    test(`Verify word-by-word translation in ${unit.id}`, async ({ page }) => {
      // Go to the debug preview for the unit
      await page.goto(`/debug/a1-preview/${unit.id}?index=${unit.index}`);
      
      // Wait for the exercises to load
      await page.waitForSelector('main');

      // Confirm we are on a reading exercise by checking for the transcript area
      // ExerciseRenderer uses isReadingExercise which renders a specific block
      const transcript = page.locator('div.italic.relative');
      await expect(transcript).toBeVisible();

      // Check for the specific word with translation
      // TranslatedText renders: <span class="group ..."><span class="...">{word}</span>...</span>
      // The word itself is in a span that has classes like "text-indigo-600"
      const wordElement = transcript.locator('span.group > span').getByText(unit.expectedWord, { exact: true }).first();
      await expect(wordElement).toBeVisible();

      // Check if the translation exists in the DOM
      // The translation is in a separate span within the tooltip
      const translationElement = transcript.locator('span.group span').getByText(unit.expectedTranslation, { exact: true }).first();
      await expect(translationElement).toBeAttached();
    });
  }
});
