import { chromium, Browser, BrowserContext } from "playwright";

async function multiTabTest(){
    let browser: Browser = await chromium.launch({ headless: false});
    let context: BrowserContext = await browser.newContext();

    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
    console.log("Tab 1: Login");

    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com/#dashboard");
    console.log("Tab 2: Dashboard");

    await page1.close();
    console.log("Tab 1 closed");
    await page2.close();
    console.log("Tab 2 closed");
    await context.close();
    console.log("context closed");
    await browser.close();
    console.log("Browser closed");
}
multiTabTest();