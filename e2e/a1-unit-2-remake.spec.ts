import { test, expect } from '@playwright/test';

test.describe('A1 Unit 2 Remake - Pedagogical Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Unit 2 preview
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-2');
  });

  test('should have exactly 60 exercises', async ({ page }) => {
    const indicator = page.locator('text=/Ejercicio \\d+ de 60/');
    await expect(indicator).toBeVisible();
    await expect(indicator).toContainText('de 60');
  });

  test('should verify Phase 1: Vocabulary (Countries & Professions)', async ({ page }) => {
    // Exercise 1: Madrid/Spain
    await expect(page.locator('h2')).toContainText('Country');
    await expect(page.locator('h2')).toContainText('Spain');
    await page.getByRole('button', { name: /Spain/ }).first().click();
    await page.getByRole('button', { name: 'Verificar Respuesta' }).click();
    await expect(page.locator('text=Respuesta correcta')).toBeVisible();

    // Skip to Exercise 11: Doctor/Hospital
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-2?index=10');
    await expect(page.locator('h2')).toContainText('Job');
    await expect(page.locator('h2')).toContainText('Doctor');
    await page.getByRole('button', { name: /Doctor/ }).first().click();
    await page.getByRole('button', { name: 'Verificar Respuesta' }).click();
    await expect(page.locator('text=Respuesta correcta')).toBeVisible();
  });

  test('should verify Phase 2: Grammar (Verb to be - Plurals)', async ({ page }) => {
    // Skip to Exercise 21: She is a doctor
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-2?index=20');
    await expect(page.locator('h2')).toContainText(/Verb/i);
    await page.locator('button:has-text("is")').first().click();
    await page.getByRole('button', { name: 'Verificar Respuesta' }).click();
    await expect(page.locator('text=Respuesta correcta')).toBeVisible();

    // Skip to Exercise 31: Replacing Names
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-2?index=30');
    await expect(page.locator('h2')).toContainText(/Replac/i);
    await page.locator('button:has-text("We")').first().click();
    await page.getByRole('button', { name: 'Verificar Respuesta' }).click();
    await expect(page.locator('text=Respuesta correcta')).toBeVisible();
  });

  test('should verify Phase 3: Reading & Integration', async ({ page }) => {
    // Skip to Exercise 41: Negative Form
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-2?index=40');
    await expect(page.locator('h2')).toContainText('Negative');
    await page.getByRole('button', { name: /is not/ }).first().click();
    await page.getByRole('button', { name: 'Verificar Respuesta' }).click();
    await expect(page.locator('text=Respuesta correcta')).toBeVisible();

    // Skip to Exercise 51: Carlos Profile
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-2?index=50');
    await expect(page.locator('h2')).toContainText('Profile');
    await expect(page.locator('h2')).toContainText('Carlos');
    await page.getByRole('button', { name: /Mexico/ }).first().click();
    await page.getByRole('button', { name: 'Verificar Respuesta' }).click();
    await expect(page.locator('text=Respuesta correcta')).toBeVisible();
  });
});
