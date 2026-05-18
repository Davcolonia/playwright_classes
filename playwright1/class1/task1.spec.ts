import { test, expect } from '@playwright/test';

test('Verify our first running test', async ({ page }) =>{
    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle('Login - VWO');
    const img_vwo = page.locator('img[alt="VWO"]');
    await expect(img_vwo).toBeVisible();
})