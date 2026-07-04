import { test, expect, FrameLocator } from "@playwright/test";

test("test iframes single, multiple, embedded", async ({ page }) => {

await page.goto("https://app.thetestingacademy.com/playwright/frames");

let vehicleFrame = page.frameLocator("#frame-one");
const vehicleData = generateVehicleData();
await fillVehicleForm(vehicleFrame, vehicleData);


await vehicleFrame.getByRole("button", { name: "Submit Registration" }).click();
  await page.waitForTimeout(2000);


  //multi-frame page

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
  const allFrames = page.frames();

  console.log("Total number of frames:", allFrames.length);

  for (const frame of allFrames) {
    console.log(`Frame name: ${frame.name()} | URL: ${frame.url()}`);
  }
const sideFrame = page.frame({ name: "side" });
const mainFrame = page.frame({ name: "main" });
const footerFrame = page.frame({ name: "footer" });

if (!sideFrame) throw new Error("Side frame not found");
if (!mainFrame) throw new Error("Main frame not found");
if (!footerFrame) throw new Error("Footer frame not found");
await expect(sideFrame.locator("body")).toBeVisible();
await expect(mainFrame.locator("body")).toBeVisible();
await expect(footerFrame.locator("body")).toBeVisible();
console.log("SIDE FRAME TEXT:");
console.log(await sideFrame.locator("body").innerText());

console.log("MAIN FRAME TEXT:");
console.log(await mainFrame.locator("body").innerText());

console.log("FOOTER FRAME TEXT:");
console.log(await footerFrame.locator("body").innerText());
});

function generateVehicleData() {
  const randomNumber = Math.floor(Math.random() * 10000);

  return {
    vehicle: `Test Vehicle ${randomNumber}`,
    name: `Test User ${randomNumber}`,
    registration: `REG-${randomNumber}`,
    vehicleType: "Two-wheeler",
    price: `${Math.floor(Math.random() * 50000) + 1000}`,
    notes: `Generated test note ${randomNumber}`
  };
}

async function fillVehicleForm(
  vehicleFrame: FrameLocator,
  data: {
    vehicle: string;
    name: string;
    registration: string;
    vehicleType: string;
    price: string;
    notes: string;
  }
) {
  await vehicleFrame.locator("#RESULT_TextField-1").fill(data.vehicle);
  await vehicleFrame.locator("#RESULT_TextField-2").fill(data.name);
  await vehicleFrame.locator("#RESULT_TextField-3").fill(data.registration);
  await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption(data.vehicleType);
  await vehicleFrame.locator("#RESULT_TextField-4").fill(data.price);
  await vehicleFrame.locator("#RESULT_TextArea-1").fill(data.notes);
}