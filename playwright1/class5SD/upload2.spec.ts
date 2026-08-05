import {test, expect} from "@playwright/test";
import { buffer } from "node:stream/consumers";

test.describe("handling file upload", () => {
const url = "https://the-internet.herokuapp.com/upload";

test.beforeEach(async ({page }) => {
    await page.goto(url);
})

test('upload a file', async ({ page }) => {
//const filePath = path.join(__dirname, '0.png')
//await page.locator("#file-upload").setInputFiles([filePath])
    await page.locator("#file-upload").setInputFiles(
        ["/Users/davidcolonia/VSCODE/PlaywrightClasses/0.png"]
    )
//multi
//await  await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
 //       [{name: 'file.png',
        //     MimeType: 'text/plain',
        //     buffer: Buffer.from('this is test')}, 
        //     {name: 'file.png',
        //     MimeType: 'text/plain',
        //     buffer: Buffer.from('this is test')}
        // ])

//multi button
//await page.locator(".pf-v6-c-button pf-msecondary").click()
    await page.getByRole("button", {name: "Upload"}).click();

    await expect(page.locator("#uploaded-files")).toContainText('0.png');

await page.waitForTimeout(10000);
});
});