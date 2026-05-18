import { chromium, Browser, BrowserContext, Page } from "playwright";

async function run() {
    let browser: Browser = await chromium.launch({headless: false});
    console.log('Browser Launched');

    let context: BrowserContext = await browser.newContext();
    console.log("Context created");

    let page: Page = await context.newPage();
    console.log("Page Created");

    await page.goto('https://app.vwo.com');
    console.log("Title of the page is: ", await page.title());

    await page.close();
    console.log("Page closed");
    await context.close();
    console.log("Context closed");
    await browser.close();
    console.log("Browser closed");
}
run();