import { test, expect } from "@playwright/test";

test("Project#2 -Cura Website Automation", async ({ page })=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let appointmentButton = page.locator("#btn-make-appointment")
    let userName = page.locator("#txt-username");
    let passWord = page.locator("#txt-password");
    let loginButton = page.locator("#btn-login");
    let h2 = page.locator("h2");

    await appointmentButton.click();
    await userName.fill("John Doe");
    await passWord.fill("ThisIsNotAPassword");
    await loginButton.click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    await expect(h2).toContainText("Make Appointment");
})