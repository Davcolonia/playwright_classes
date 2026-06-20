import { test, expect } from "@playwright/test";

test.describe("Basic Playwright Test", () => {
  test("navigate and verify page title", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    await page.locator("//div[@data-testid='dropdown-language']").click();
    await page.getByRole("option", {name: "JavaScript"}).click();
    await page.locator("#experience-shell").click();
    await page.getByText("Mid-level (4-6 years)", {exact: true}).click();
    await page.waitForTimeout(1000);
  });
});
