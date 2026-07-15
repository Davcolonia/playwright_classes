import { test, expect, FrameLocator, Locator } from "@playwright/test";

test("test keyboard", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    const addOnsMenu = page.getByTestId("nav-add-ons");
    const wifiOption = addOnsMenu.getByTestId("test-id-Wifi");

    await addOnsMenu.hover();
    await expect(wifiOption).toBeVisible();
    await wifiOption.click();
    
    const jsonOutput = page.getByTestId("hover-output");
    await expect(jsonOutput).toBeVisible();
    const jsonText = await jsonOutput.textContent();
    const result = JSON.parse(jsonText!);

    expect(result.clicked).toContain("Wi-Fi");
    expect(result.testId).toBe("test-id-Wifi");
    expect(result.at).toBeTruthy();

})