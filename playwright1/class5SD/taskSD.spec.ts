import {test, expect } from "@playwright/test";

test.describe("SD practice", () => {
const url = "https://selectorshub.com/xpath-practice-page/";

test.beforeEach(async ({page}) => {
//closed shadow dom work-around
    // await page.addInitScript(() => {
    //   const originalAttachShadow = Element.prototype.attachShadow;

    //   Element.prototype.attachShadow = function (init) {
    //     return originalAttachShadow.call(this, {
    //       ...init,
    //       mode: "open",
    //     });
    //   };
    // });
    await page.goto(url);

})


test("locate sd elements", async ({page}) => {
const userNameField = page.locator("#userName #kils");

await userNameField.fill("student@thetestingacademy.com");
await expect(userNameField).toHaveValue("student@thetestingacademy.com");

const pizzaField = page.locator("#userName input#pizza");

const passwordField = page.locator("#pass");

await passwordField.fill("password");
await expect(passwordField).toHaveValue("password");

//await page.locator("#training").click();

});


});