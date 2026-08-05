import {test, expect} from "@playwright/test";
import { buffer } from "node:stream/consumers";

test.describe("handling file upload", () => {
const url = "https://www.patternfly.org/components/file-upload/multiple-file-upload/";

test.beforeEach(async ({page }) => {
    await page.goto(url);
})

test('upload a file', async ({ page }) => {

//multi
await  await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
       [{name: '0.png',
            mimeType: 'image/png',
            buffer: Buffer.from('fake png content')}, 
            {name: 'A.png',
            mimeType: 'image/png',
            buffer: Buffer.from('fake png content')}
        ])

//multi button
await page.locator(".pf-v6-c-button.pf-m-secondary").click()


await page.waitForTimeout(10000);
});
});