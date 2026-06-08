import { test, expect } from '@playwright/test';

// ✅ TEST 1
test('Cargar la página principal de la tienda', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle(/STORE/);
});

// ✅ TEST 2
test('Abrir la ventana de Log in', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('heading', { name: 'Log in' })).toBeVisible();
});

// ✅ TEST 3
test('Mostrar error con credenciales incorrectas', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  // Abrir el modal de login
  await page.getByRole('link', { name: 'Log in' }).click();

  // Escribir usuario y contraseña falsos
  await page.locator('#loginusername').fill('usuariofake');
  await page.locator('#loginpassword').fill('contraseñamala');

  // Esperar el mensaje de alerta ANTES de hacer clic
  const dialogPromise = page.waitForEvent('dialog');
  await page.locator('#logInModal .btn-primary').click();

  // Verificar que el mensaje de error diga "Wrong password"
  const dialog = await dialogPromise;
  expect(dialog.message()).toContain('User does not exist.');
  await dialog.accept();
});