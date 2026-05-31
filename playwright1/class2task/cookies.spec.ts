import { test, expect } from "@playwright/test";

test("cookies test", async ({ page, context }) => {

    page.goto("https://app.vwo.com/#login");
    await context.addCookies([
        {
            name: "session_id",
            value: "fake_session_abc",
            domain: "app.com",
            path: "/"
        },
        {
            name: "user_role",
            value: "admin",
            domain: "app.com",
            path: "/"
        }
    ])
    let cookies = await context.cookies();

    console.log("Total cookies:", cookies.length);

    cookies.forEach(function (cookie){
        console.log(" " + cookie.name + " = "+ cookie.value)
    })
    await context.clearCookies();

    await page.waitForTimeout(5000);

});