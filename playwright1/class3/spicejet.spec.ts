import { test, expect, FrameLocator, Locator } from "@playwright/test";

test("test keyboard", async ({ page }) => {
    await page.goto("https://spicejet.com");
    await page.getByText('Add-ons', {exact: true}).hover();
    await page.getByText('FlyEarly', {exact: true}).click();

    await page.waitForTimeout(5000);

})