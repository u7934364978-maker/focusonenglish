import { test, expect } from '@playwright/test';

test.describe('Lesson 5 Implementation Verification', () => {
  const unitsToVerify = [
    { unitId: 'unit30', startIndex: 304, label: 'Unit 30 (Module 3 Review)' },
    { unitId: 'unit31', startIndex: 17, label: 'Unit 31' },
    { unitId: 'unit45', startIndex: 15, label: 'Unit 45' },
    { unitId: 'unit60', startIndex: 302, label: 'Unit 60 (Module 6 Review)' },
  ];

  for (const { unitId, startIndex, label } of unitsToVerify) {
    test(`should render Lesson 5 for ${label}`, async ({ page }) => {
      // Navigate to the preview page with the calculated starting index
      await page.goto(`/preview/ingles-a1/${unitId}?index=${startIndex}`);
      
      // Wait for the exercise to be visible
      // The PremiumSession component renders the current item in the queue
      await page.waitForSelector('main', { timeout: 30000 });
      
      // Check if it's a listening or pronunciation exercise
      // Listening exercises have an audio button and usually a transcript/input
      // Pronunciation exercises have a microphone/record button
      
      const audioButton = page.locator('button:has(svg.lucide-volume2)');
      const micButton = page.locator('button:has(svg.lucide-mic)');
      const transcript = page.locator('text=/Escucha|Completa|Pronuncia/i');

      // We expect at least an audio button for listening or a mic button for pronunciation
      const hasInteraction = await audioButton.isVisible() || await micButton.isVisible();
      
      expect(hasInteraction, `Unit ${unitId} should show interaction buttons for Lesson 5`).toBeTruthy();
      
      // Verify no "Not Found" message
      const notFoundMessage = page.locator('text=/Not Found|No se encontró/i');
      await expect(notFoundMessage).not.toBeVisible();
      
      // Verify that we are seeing exercise content
      const exerciseTitle = page.locator('h3, .text-xl, .font-bold').filter({ hasText: /Escucha|Pronuncia|Completa/i }).first();
      await expect(exerciseTitle).toBeVisible();
      
      // Verify that the exercise count is visible and shows we are at the right place
      // For Unit 30, it should be around 305 / 319
      const exerciseCount = page.locator('span:has-text("ejercicios")');
      await expect(exerciseCount).toBeVisible();
      const countText = await exerciseCount.textContent();
      console.log(`${label} exercise count: ${countText}`);
    });
  }
});
