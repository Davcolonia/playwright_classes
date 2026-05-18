import { test } from "@playwright/test";

test.describe("Shared context test", () => {
    test.use({
        viewport: { width: 1280, height: 720 },
        locale: "en-US",
    });
    test("test1", async ({ page }) => {
        await page.goto("https://app.vwo.com/#login");
        console.log("Test 1 URL:", page.url());
    });

      test("test2", async ({ page }) => {
        await page.goto("https://app.vwo.com/#dashboard/home");
        console.log("Test 2 URL:", page.url());
    });

});