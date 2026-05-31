import {test, expect } from "@playwright/test";

test("verify that the login works", async ({ page }) => {
    // let balance: number = 0.00;
    // let transferAmount=4500.00;
    // let expectedFinalBalnce: number=0.00;

        
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name : 'Sign Up'}).click();

    await page.getByPlaceholder('John Doe').fill("Meeti");
    await page.getByPlaceholder('you@example.com').fill("meeti@example.com");
    await page.locator("input[type='password']").fill("ThisIsNotAPassword");

    await page.getByRole('button', { name : 'Create Account'}).click();
    console.log("account created");
    await page.waitForTimeout(10000);
    await page.getByRole("button", { name: "Transfer Funds" }).click();
    await page.getByPlaceholder("0.00").click();
    await page.getByPlaceholder("0.00").fill("5000");
    await page.getByPlaceholder("e.g. Rent for October").click();
    await page.getByPlaceholder("e.g. Rent for October").fill("withdraw");
    await page.waitForTimeout(5000);

    await page.getByText("Continue").click();
    await page.getByText("Confirm Transfer", { exact: true }).click();
    console.log("Deposit confirmed");
    await page.locator('button:has-text("Dashboard")').click();
    await expect(page.getByRole("heading", { name: "$45,000.00" })).toBeVisible();
    await expect(page.getByRole("main")).toContainText("$45,000.00");
    await page.waitForTimeout(10000);

    console.log("Test complete");





    
});