import { test, expect } from "@playwright/test";

test("Verify page title", async ({page}) => {
await page.goto("https://app.thetestingacademy.com/playwright/frames");
let vehicleFrame = await page.frameLocator("#frame-one");

await vehicleFrame.locator("#RESULT_TextField-1").fill("Hyundai i10");
await vehicleFrame.locator("#RESULT_TextField-2").fill("David C");
await vehicleFrame.locator("#RESULT_TextField-3").fill("2012");
await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption("Hatchback");

await vehicleFrame.locator("#RESULT_TextField-4").fill("2015");
await vehicleFrame.locator("#RESULT_TextArea-1").fill("Great car");
await vehicleFrame.getByRole("button", { name: "Submit Registration" }).click();
//await vehicleFrame.getByText("Submit Registration", {exact: true}).click();







})

