import { test, expect } from '@playwright/test';

test.describe('Misiones Inmersivas', () => {
  test.beforeEach(async ({ page }) => {
    // Nota: Si el entorno requiere sesión, aquí se debería inyectar la cookie de auth
    await page.goto('/misiones');
    await page.waitForLoadState('domcontentloaded');
  });

  test('debe mostrar la selección de misiones y la barra RPG inicial', async ({ page }) => {
    // Verificar título principal
    await expect(page.locator('h1')).toContainText('Elige tu Misión');
    
    // Verificar barra de progreso RPG
    await expect(page.locator('text=Nivel Actual')).toBeVisible();
    await expect(page.locator('text=XP')).toBeVisible();
    await expect(page.locator('text=Racha')).toBeVisible();
    
    // Verificar que las misiones están presentes
    await expect(page.locator('text=Misión: Entrevista en Londres')).toBeVisible();
    await expect(page.locator('text=Misión: Supervivencia en el Aeropuerto')).toBeVisible();
  });

  test('debe poder activar el Modo Blitz', async ({ page }) => {
    const blitzButton = page.locator('button:has-text("MODO BLITZ OFF")');
    await expect(blitzButton).toBeVisible();
    
    await blitzButton.click();
    await expect(page.locator('button:has-text("MODO BLITZ ON")')).toBeVisible();
  });

  test('debe iniciar una misión y mostrar el Mentor IA', async ({ page }) => {
    // Seleccionar la primera misión
    const missionButton = page.locator('text=Misión: Entrevista en Londres');
    await missionButton.click();
    
    // Al hacer click, debería aparecer el wrapper de la misión y el Mentor
    // El Mentor tiene el icono de Sparkles
    await expect(page.locator('.fixed.bottom-8.left-8')).toBeVisible(); // Contenedor del Mentor
    await expect(page.locator('text=Salir de la Misión')).toBeVisible();
  });

  test('debe mostrar la barra de Power-ups dentro de una misión', async ({ page }) => {
    await page.locator('text=Misión: Entrevista en Londres').click();
    
    // La barra de power-ups está en la esquina inferior derecha
    await expect(page.locator('.fixed.bottom-8.right-8')).toBeVisible();
    await expect(page.locator('button >> .lucide-lightbulb')).toBeVisible(); // Power-up de pista
  });
});
