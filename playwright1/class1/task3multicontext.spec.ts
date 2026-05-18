import { chromium  } from "playwright";

async function multiUserTest() {
    
    let browser = await chromium.launch({ headless: false});

    //admin 
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com");
    console.log("Admin User - Title of the page is: ", await adminPage.title());

    let viewerContext = await browser.newContext();
    let viewPage = await viewerContext.newPage();
    await viewPage.goto("https://app.vwo.com");
    console.log("View User - Title of the page is: ", await viewPage.title());

    await adminPage.close();
    console.log("Admin Page Closed");
    await viewPage.close();
    console.log("Viewer page closed");
    await adminContext.close();
    console.log("Admin context closed");
    await viewerContext.close();
    console.log("Viewer context closed");
    await browser.close();
    console.log("Browser closed");
}

multiUserTest();