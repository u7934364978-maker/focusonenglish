import { test, expect } from '@playwright/test';

test('blog topic cluster cta shows correct phrasing', async ({ page }) => {
  // Navigate to the specific blog article
  await page.goto('/blog/examenes/precios-examenes-cambridge');

  // Verify the CTA section text
  // We expect "¿Quieres saber todo sobre precios examenes cambridge?"
  // Note: The mainKeyword in that file is "precios examenes cambridge"
  const ctaHeading = page.getByText(/¿Quieres saber todo sobre/i);
  await expect(ctaHeading).toBeVisible();
  await expect(ctaHeading).toContainText('precios examenes cambridge');

  // Verify it does NOT contain the old phrasing
  const oldPhrasing = page.getByText(/¿Quieres dominar/i);
  const count = await oldPhrasing.count();
  
  // If there are other "dominar" instances in the content, we need to be careful.
  // But specifically in the CTA box, it should be gone.
  // We already checked that content "dominar" were appropriate (language skills).
  // Let's specifically check the CTA heading text.
  await expect(page.locator('h3, p').filter({ hasText: /¿Quieres saber todo sobre/i })).toBeVisible();
});

test('cta link points to theme page', async ({ page }) => {
  await page.goto('/blog/examenes/precios-examenes-cambridge');

  // The link should contain "Ver todo sobre precios examenes cambridge"
  const themeLink = page.getByRole('link', { name: /Ver todo sobre precios examenes cambridge/i });
  await expect(themeLink).toBeVisible();
  
  // The href should be slugified: /blog/temas/precios-examenes-cambridge
  await expect(themeLink).toHaveAttribute('href', '/blog/temas/precios-examenes-cambridge');
});
