import {test, expect} from "@playwright/test";

test("Task 28 APR March | 👋 🧪 Project#3 -App.vwo.com", async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");

    let emailField = page.locator("#page-v1-step1-email");
    let checkBox = page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox");
    let inputBox = page.locator("//button[text()='Create a Free Trial Account']")
    let errormsg = page.getByText("The email address you entered is incorrect.");


    emailField.fill("testuser@gmail.com'");
    checkBox.click();
    inputBox.click();
    await expect(errormsg).toContainText("The email address you entered is incorrect.");

});