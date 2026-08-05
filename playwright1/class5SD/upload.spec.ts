import {test, expect} from "@playwright/test";

test.describe("handling file upload", () => {
const url = "https://awesomeqa.com/practice.html";

test.beforeEach(async ({page }) => {
    await page.goto(url);
})

test('upload a file', async ({ page }) => {

    await page.locator("#photo").setInputFiles(
        ["/Users/davidcolonia/VSCODE/PlaywrightClasses/0.png"]
    )
await page.waitForTimeout(1000);
});
});