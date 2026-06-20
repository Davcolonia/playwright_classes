import {Page, test, expect} from "@playwright/test";

 test("basic test - verify page title", async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

        //single select
        await page.getByTestId("rs-single").click();
        await page.getByTestId("rs-single-input").fill("play");
        await page.getByRole("option", {name:"Playwright"}).click();
        await expect(page.locator("#rs-single .tta-rs__single-value")).toHaveText("Playwright");


        //multi pick three remove one
        const multi = page.getByTestId("rs-multi");
        for( const name of ['Playwright', 'Pytest', 'TestNG']) {
            await multi.click();
            await page.getByRole("option", {name}).click();
        }
        await multi.locator(".tta-rs__multi-value:has-text('Pytest') .tta-rs__multi-value__remove").click();

        //createable
        await page.getByTestId("rs-creatable-input").fill("chaos-engineering");
        await page.getByTestId("rs-creatable-input").press("Enter");
        await expect(page.locator("#rs-creatable .tta-rs__multi-value", {hasText: "chaos-engineering"})).toBeVisible();

        //grouped
        await page.getByTestId("rs-grouped").click();
        await page
                .locator(".tta-rs__group[data-group='Edge']")
                .getByRole("option", {name: "Vercel Edge"})
                .click();

        //async
        const asyncInput = page.getByTestId("rs-async-input");
        await asyncInput.click();
        await asyncInput.fill("pun");
        const asyncMenu = page.getByTestId("rs-async-menu");
        await expect(asyncMenu).toBeVisible();
        await expect(asyncMenu).toContainText("Pune");
        const puneOption = asyncMenu.getByRole("option", { name: "Pune" });
        await expect(puneOption).toBeVisible();
        await puneOption.click();

        // await page.getByTestId("rs-async-input").fill("pun");
        // await expect(page.getByTestId('rs-async-menu')).toContainText("Pune");
        // await page.getByTestId("rs-async-menu").getByText("Pune", {exact: true}).click();
        //await page.getByRole("option", {name: "Pune"}).click();


 })