import {test, expect} from "@playwright/test";

test("Kabir", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    let search = page.locator("#employee-search");
    await search.click();
    await search.fill("kabir");
await expect(
    page.getByRole("cell", { name: "Kabir.Khan", exact: true })
).toBeVisible();

    await page.getByLabel("Select Kabir.Khan").check();
    await expect(page.getByLabel("Select Kabir.Khan")).toBeChecked();

})

