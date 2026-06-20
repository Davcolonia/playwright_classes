import { test, expect } from "@playwright/test";

test.describe("Basic Playwright Test", () => {
  test("navigate and verify page title", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    await page.locator("#rs-single").click();
    await page.locator("Cypress").click();

    await page.locator("#rs-multi").click();
    await page.getByText("PyTest", {exact: true});
    await page.getByText("Junit",{exact: true});
    await page.keyboard.press("Escape");

    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", {exact: true});
    await page.getByText("security",{exact: true});
    await page.keyboard.press("Escape");

    // await page.locator("#rs-async").click();
    // await page.waitForSelector(".tta-rs__menu-notice");
    // await page.getByText("New Delhi").click();

    await page.locator("rs-async").click();
    await page.getByTestId("rs-async-input").fill("pun");
    await expect(page.getByTestId("rs-async-menu")).toContainText("Pune");
    await page.getByRole("option", {name: "Pune"}).click();

    await page.waitForTimeout(1000);
  });
});