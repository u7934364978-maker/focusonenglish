import { test, expect } from '@playwright/test';

test.describe('A1 Units 9 & 10 - Hover Translations and Audio tooltips', () => {
  
  const testUnits = [
    { id: 'unit-9', index: 50 }, // Dr. Smith reading
    { id: 'unit-10', index: 50 } // Sarah's Routine reading
  ];

  for (const { id, index } of testUnits) {
    test(`${id} - Reading exercise loads with word-level translations`, async ({ page }) => {
      await page.goto(`http://127.0.0.1:3001/debug/a1-preview/${id}?index=${index}`);
      await page.waitForLoadState('networkidle');
      
      // Verify reading container
      const readingContainer = page.locator('div.border-l-8.border-purple-500');
      await expect(readingContainer).toBeVisible();

      // Verify translated spans (dotted underline)
      const translatedSpans = page.locator('span.border-dotted.border-indigo-300');
      const count = await translatedSpans.count();
      expect(count).toBeGreaterThan(0);
    });

    test(`${id} - Hovering over a word shows translation and audio button`, async ({ page }) => {
      await page.goto(`http://127.0.0.1:3001/debug/a1-preview/${id}?index=${index}`);
      await page.waitForLoadState('networkidle');

      // Get first translated word
      const firstWord = page.locator('span.border-dotted.border-indigo-300').first();
      const wordText = await firstWord.textContent();
      
      // Hover to show tooltip
      await firstWord.hover();
      await page.waitForTimeout(500);
      
      // Get the tooltip element (it's the absolute positioned span inside the dotted span)
      const tooltip = firstWord.locator('span.absolute').first();
      
      // Tooltip should be visible
      await expect(tooltip).toBeVisible();
      
      // Tooltip should contain the translation and an audio button
      const tooltipText = await tooltip.textContent();
      expect(tooltipText).toBeTruthy();
      
      // Audio button should be present inside tooltip
      const audioButton = tooltip.locator('button');
      await expect(audioButton).toBeVisible();
    });
  }

  test('Unit 9 - Specific translation check for "Hello"', async ({ page }) => {
    await page.goto('http://127.0.0.1:3001/debug/a1-preview/unit-9?index=50');
    await page.waitForLoadState('networkidle');

    const helloSpan = page.locator('span.border-dotted.border-indigo-300:has-text("Hello")').first();
    await helloSpan.hover();
    await page.waitForTimeout(500);

    const tooltip = helloSpan.locator('span.absolute').first();
    const tooltipText = await tooltip.textContent();
    
    // Should contain "Hola"
    expect(tooltipText?.toLowerCase()).toContain('hola');
  });

  test('Unit 10 - Specific translation check for "Sarah"', async ({ page }) => {
    await page.goto('http://127.0.0.1:3001/debug/a1-preview/unit-10?index=50');
    await page.waitForLoadState('networkidle');

    // "Sarah" is often used in unit 10 reading
    const sarahSpan = page.locator('span.border-dotted.border-indigo-300:has-text("Sarah")').first();
    await sarahSpan.hover();
    await page.waitForTimeout(500);

    const tooltip = sarahSpan.locator('span.absolute').first();
    const tooltipText = await tooltip.textContent();
    
    expect(tooltipText?.toLowerCase()).toContain('sarah');
  });
});
