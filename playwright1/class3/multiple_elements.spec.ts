import {test, expect} from "@playwright/test";

test.describe("multiple elements handling", () => {
    test("basic test - verify page title", async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

        const rightPanel: string [] = await page.locator("a.list-group-item").allInnerTexts();
        console.log(rightPanel.length);

        for(const links of rightPanel){
            if(links == 'My Account'){
                await page.getByText(links).first().click();
                break;
            }
        }

        const rightpanellinks = await page.locator('a.list-group-item').all();
        for(const url of rightpanellinks){
            console.log(await url.getAttribute("href"));
        }
    });
});