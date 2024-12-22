import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Click Me' }).click();
  await expect(page.locator('h2')).toContainText('Mohamed Bouzri !');
  await page.getByRole('button', { name: 'Click Me' }).click();
  const elements = await page.locator('text=Mohamed Bouzri !');
  await page.getByRole('button', { name: 'Click Me' }).click();
  await expect(page.locator('h2')).toContainText('Mohamed Bouzri !');
  await expect(elements).toHaveCount(1);
});