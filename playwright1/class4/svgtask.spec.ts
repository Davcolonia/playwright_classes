import { test, expect, Locator } from "@playwright/test";

test.describe("SVG Element Handling", () => {
const url = "https://flipkart.com/search";

// test.beforeEach( async ({page}) => {
//     await page.goto(url);
// })

test("locate svg and list prices", async ({browser}) => {
    
const context = await browser.newContext({
  recordVideo: {
    dir: "artifacts/videos",
    size: { width: 1280, height: 720 }
  }
});

    const page = await context.newPage();
        await page.goto(url);


        await page.locator("input[name='q']").fill("macmini");
        await page.getByTitle("Search for products, brands and more").fill("macmini");

        const svgElements:Locator = page.locator("svg");
        await svgElements.first().click();
        await page.waitForTimeout(5000);


         const priceAllElements: Locator[] = await page.locator("//div[contains(@class,'hZ3P6w')]").all();
         console.log(`Total prices found: ${priceAllElements.length}`);
         for(const svgElement of priceAllElements){
            const priceText = await svgElement.innerText();
             console.log(priceText);
         }

        await page.screenshot({
        path: "artifacts/screenshots/svg-prices-final.png",
        fullPage: true
        });
    });

});