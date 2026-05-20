import { test, expect } from "@playwright/test";

test("Project#3 -App.vwo.com",  async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login");
    let userName = page.getByRole("textbox", { name : "Email address"});
    await userName.fill("invalid@invalid.com");

    let passWord = page.getByRole("textbox", {name: "Password"});
    await passWord.fill("invalid Password");

    await page.getByRole("button", {name: "Sign in", exact: true}).click();
    await expect(page.getByText("Your email, password, IP address or location did not match")).toBeVisible();
});