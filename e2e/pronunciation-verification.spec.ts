import { test, expect } from '@playwright/test';

test.describe('Pronunciation Exercise Verification', () => {
  test('should render pronunciation exercise with recording button and target text', async ({ page }) => {
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    
    // Unit 30, Lesson 5, Task 8 is at index 311 (304 + 7)
    const unitId = 'unit30';
    const startIndex = 311;
    
    await page.goto(`/preview/ingles-a1/${unitId}?index=${startIndex}`);
    
    await page.waitForSelector('main', { timeout: 30000 });
    
    // Check for the microphone button (from EnhancedSpeakingExercise)
    const micButton = page.locator('button:has(svg.lucide-mic)');
    await expect(micButton).toBeVisible();
    
    // Check for "Frase a repetir" text (which I added to EnhancedSpeakingExercise)
    const targetTextHeader = page.getByText('Frase a repetir:');
    await expect(targetTextHeader).toBeVisible();
    
    // Check if the expected response is visible
    // For Task 8 it's "The kitchen is very bright."
    const expectedText = page.getByText('The kitchen is very bright.');
    await expect(expectedText).toBeVisible();
    
    // Check for "Escuchar Modelo" button
    const listenModelButton = page.getByText('Escuchar Modelo');
    await expect(listenModelButton).toBeVisible();
  });
});
