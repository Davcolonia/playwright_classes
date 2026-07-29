import { test, expect, Locator } from "@playwright/test";

test.describe("SVG Element Handling", () => {
const url = "https://app.thetestingacademy.com/playwright/widgets/svg";

test.beforeEach( async ({page}) => {
    await page.goto(url);
})


  test("locate SVG root and assert", async ({ page }) => {
        const circleShape: Locator = page.locator('#circle-blue');
        await circleShape.click();

        //validate output
        const output = await page.locator('#shapes-output').innerText();
        expect(output).toContain('Blue circle');

        await page.getByRole('button', {name: /Q3 bar/ }).click();
        await page.getByRole('radio', {name: '4 stars' }).click();
        await page.waitForTimeout(5000);

        let allBars = await page.locator('.bar').all();
        for (const bar of allBars){
            const q = await bar.getAttribute('data-quarter');
             if (q === "Q3"){
            await bar.click();
            console.log(q);
            }
        }
    });
});


