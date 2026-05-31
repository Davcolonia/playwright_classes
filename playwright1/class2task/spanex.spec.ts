import { test, expect } from "@playwright/test";

test("locators", async ({ page }) => {
    await page.goto("https://awesomeqa.com/css/");
    const allSpans = page.locator("div.first > span");
    const count = await allSpans.count();

    console.log(count);

    for (let i = 0; i< count; i++){
        let span_it = await allSpans.nth(i).textContent();
        console.log(span_it);
    }

    
})