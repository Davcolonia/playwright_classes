import {test, expect} from "@playwright/test";

test.describe("shadow handling", () => {
const url = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";

test.beforeEach(async ({page }) => {
    await page.goto(url);
})

test('locate shadow Dom and assert visible', async ({ page }) => {
const card = page.getByTestId('card-account');
await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
await card.locator('input[name="password"]').fill('pw');
await card.getByTestId('card-account-submit').click();
await expect(card.getByTestId('card-account-status')).toContainText('student@thetestingacademy.com');

const cart = page.getByTestId('counter-cart');
await cart.getByRole('button', {name: 'Increment'}).click();
await cart.getByRole('button', {name: 'Increment'}).click();
await expect(cart.getByTestId('counter-value')).toHaveText('5');

await page.getByTestId('nested-host');
await page.getByTestId('card-inside-email').fill('pramod@thetestingacademy.com');
await page.getByTestId('card-inside-password').fill('pramod@thetestingacademy.com');
await page.waitForTimeout(5000);

});
});