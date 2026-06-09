import { test, expect } from "@playwright/test";

test.describe("Web table tests", () => {
    test('verify helen bennet in table', async ({ page }) => {

await page.goto("https://awesomeqa.com/webtable.html");
        
const first = "//table[@id='customers']/tbody/tr["
const seconed = "]/td["
const third = "]"

const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
const columns = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();


  expect(rows).toBeGreaterThan(0);
  expect(columns).toBeGreaterThan(0);

// for (let i = 2; i <= rows; i++){
//     for(let j = 1; j<= columns; j++){
//         const dynamicpath = `${first}${i}${seconed}${j}${third}`;
//         console.log(dynamicpath);
//         const data = await page.locator(dynamicpath).innerText();
//         console.log(data); 

//         if (data.includes("Helen Bennet")){
//             const countrypath = `${dynamicpath}/following-sibling::td`;
//             const countrytext = await page.locator(countrypath).innerText();
//             console.log("--------------");
//             console.log(`Helen Bennet is in - ${countrytext}`);
//         }
//     }

    
// }

const row1 = page.locator("#customers tbody tr", {hasText: "Helen Bennet"});
const column1 = await row1.locator("td").nth(2).innerText();
console.log(`Helen Bennet is in - ${column1}`);


    });

    test('test extract webtable', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/tables');
        const table1 = page.locator('#table1');
    });

    test('Iterate over all rows and verify table data structure', async ({ page })=>{
        await page.goto('https://the-internet.herokuapp.com/tables');

    })
})