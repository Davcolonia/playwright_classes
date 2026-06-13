import { test, expect } from "@playwright/test";
import path from "path"; 

function randomDateString() {
  const year = 2026;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;

  const paddedMonth = String(month).padStart(2, "0");
  const paddedDay = String(day).padStart(2, "0");

  return `${year}-${paddedMonth}-${paddedDay}`;
}
test.describe("Checkbox & form handling tests", () => {
    test("select and verify all fields & checkboxes", async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
//first fields
        const firstName = page.locator('#first-name');
        const lastName = page.locator('#last-name');

        firstName.fill("test");
        lastName.fill("tester");

    let buttonMale = page.getByTestId("gender-male");
    let buttonFemale = page.getByTestId("gender-female");

    await buttonMale.check();

    await expect(buttonMale).toBeChecked();
    await expect(buttonFemale).not.toBeChecked();
    //await page.waitForTimeout(4000);

    console.log("button 1 clicked");

    await buttonFemale.check();
    await expect(buttonFemale).toBeChecked();
    await expect(buttonMale).not.toBeChecked();

    console.log("button 2 clicked");
/////////////
///////second fields

let dropdowns1 = page.getByTestId("years-experience")
const years = ["1", "2", "3", "4", "5", "6"];

for( const year of years){
    await dropdowns1.selectOption(year);
    await expect(dropdowns1).toHaveValue(year);
    console.log(`Verified dropdown value: ${year}`);
    await page.waitForTimeout(1000);

}

const dateInput = page.getByTestId("profile-date");

  const randomDate = randomDateString();

  await dateInput.fill(randomDate);

  await expect(dateInput).toHaveValue(randomDate);

  console.log(`Verified date: ${randomDate}`);







    let buttonManual = page.getByTestId("profession-manual");
    let buttonAuto = page.getByTestId("profession-automation");

    await buttonManual.check();

    await expect(buttonManual).toBeChecked();
    await expect(buttonAuto).not.toBeChecked();
    await page.waitForTimeout(4000);

    console.log("button manual clicked");

    await buttonAuto.check();
    await expect(buttonAuto).toBeChecked();
    await expect(buttonManual).not.toBeChecked();

    console.log("button auto clicked");

/////////
//////checkboxes
    
        const checkboxes = page.locator('input[type="checkbox"]');
        const count = await checkboxes.count();
        console.log(`Total checkboxes found: ${count}`);

        for (let i = 0; i < count; i++) {
            const isChecked = await checkboxes.nth(i).isChecked();
            console.log(`Checkbox ${i + 1} initial state: ${isChecked ? "checked" : "unchecked"}`);
            
        }

        for (let i = 0; i < count; i++) {
            const checkbox = checkboxes.nth(i);
            const isChecked = await checkbox.isChecked();
            if (!isChecked) {
                await checkbox.check();
                console.log(`Checkbox ${i + 1} was unchecked -> now checked`);
            } else {
                console.log(`Checkbox ${i + 1} was already checked`);
            }
        }

        for (let i = 0; i < count; i++) {
            const state = await checkboxes.nth(i).isChecked();
            console.log(`Checkbox ${i + 1} final state: ${state ? "checked" : "unchecked"}`);
            expect(state).toBeTruthy();
        }




/////tabs

  const tabTests = [
    {
      testId: "tab-browser",
      expectedText: "Browser commands — open and close the browser, get titles and URLs, manage windows."
    },
    {
      testId: "tab-navigation",
      expectedText: "Navigation commands — go forward, back, refresh, and load a URL."
    },
    {
      testId: "tab-switch",
      expectedText: "Switch commands — switch between windows, frames, and alerts."
    },
    {
      testId: "tab-wait",
      expectedText: "Wait commands — wait until conditions are met — element visibility, clickability, custom predicates."
    },
    {
      testId: "tab-webelement",
      expectedText: "WebElement commands — interact with elements — click, sendKeys, getText, getAttribute."
    }
  ];

    for (const tab of tabTests) {
   
  await page.getByTestId(tab.testId).click();

  await expect(page.getByText(tab.expectedText)).toBeVisible();

  console.log(`Verified tab text: ${tab.expectedText}`);

    // temporary visual debugging
    await page.waitForTimeout(1000);
  }



 const uploadInput = page.getByTestId("upload-image");

  const filePath = path.join(__dirname, "test-data", "sample-upload.png");

  await uploadInput.setInputFiles(filePath);

  await expect(uploadInput).toHaveValue(/sample-upload\.png/);

  console.log("File uploaded successfully");


    /////////

        await page.waitForTimeout(5000);




    });

    

    // test("toggle all checkboxes", async ({ page }) => {
    //     await page.goto("https://the-internet.herokuapp.com/checkboxes");

    //     const checkboxes = page.locator('input[type="checkbox"]');
    //     const count = await checkboxes.count();
    //     console.log(`Working with ${count} checkboxes`);

    //     for (let i = 0; i < count; i++) {
    //         const checkbox = checkboxes.nth(i);
    //         const before = await checkbox.isChecked();
    //         console.log(`Checkbox ${i + 1} before toggle: ${before}`);

    //         if (before) {
    //             await checkbox.uncheck();
    //         } else {
    //             await checkbox.check();
    //         }

    //         const after = await checkbox.isChecked();
    //         console.log(`Checkbox ${i + 1} after toggle: ${after}`);
    //         expect(after).toBe(!before);
    //     }
    // });
});
