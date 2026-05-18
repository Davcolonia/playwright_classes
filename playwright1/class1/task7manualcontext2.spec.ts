import { test, expect } from "@playwright/test";

test("context with options", async ({ browser }) => {
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        locale: 'fr-FR',
        timezoneId: 'Europe/Paris',
        geolocation: { latitude: 48.8566, longitude: 2.3522},
        permissions: ['geolocation'],
    });

    const page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    await context.close();
});

test("mobile context", async ({ browser }) => {
    const iPhone = {
        viewport: { width: 375, height: 667 },
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        deviceScaleFactor: 2,
        isMobile: true, 
        hasTouch: true,
    };

    const context = await browser.newContext(iPhone);
    const page = await context.newPage();

    await page.goto("https://app.vwo.com/#login");
    await context.close();
});

test("context with http auth", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await context.close();
});

test("fresh context like incognito", async ({ browser }) => {
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await context1.close();
    await context2.close();
});

test("context events", async ({ browser }) =>{

    const context = await browser.newContext();

    context.on("page", page => {
        console.log("New page opened:", page.url());
    });
    const page = await context.newPage();
    await page.goto("https://playwright.dev");
    await context.close();
});
