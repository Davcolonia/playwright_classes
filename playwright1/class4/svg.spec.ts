import { test, expect, Locator } from "@playwright/test";

test.describe("SVG Element Handling", () => {
const url = "https://flipkart.com/search";

test.beforeEach( async ({page}) => {
    await page.goto(url);
})

    test("locate SVG root and assert", async ({ page }) => {
        await page.locator("input[name='q']").fill("macmini");
        await page.getByTitle("Search for products, brands and more").fill("macmini");

        const svgElements:Locator = page.locator("svg");
        await svgElements.first().click();
        await page.waitForTimeout(5000);

        // const svgAllElements: Locator[] = await page.locator("svg").all();
        // console.log(svgAllElements);
        // for(let svgElement in svgAllElements){
        //     console.log(svgElement);
        // }

        const firstResult:Locator = page.locator("//div[contains(@data-id,'CPU')]/div/a[2]");
        await expect(firstResult.first()).toBeVisible({timeout: 8000});

        const titlesResults:Locator = page.locator(
            "//div[contains(@data-id,'CPU') or contains(@data-id,'MP')]/div/a[2]");

        const count: number = await titlesResults.count();
        console.log(`total number found: ${count}`);

        for(let i =0; i<count; i++){
            const title: string | null = await titlesResults.nth(i).textContent();
            console.log(title?.trim());
        }
    });

    test("locate SVG child elements - circle, rect, path, text", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const circles = page.locator("svg circle");
        const rects = page.locator("svg rect");
        const paths = page.locator("svg path");
        const texts = page.locator("svg text");

        console.log(`circles: ${await circles.count()}`);
        console.log(`rects: ${await rects.count()}`);
        console.log(`paths: ${await paths.count()}`);
        console.log(`texts: ${await texts.count()}`);
    });

    test("click an SVG element", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgIcon = page.locator("svg").first();
        await svgIcon.click();
    });

    test("get SVG element attributes", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svg = page.locator("svg").first();
        const width = await svg.getAttribute("width");
        const height = await svg.getAttribute("height");
        const viewBox = await svg.getAttribute("viewBox");
        const xmlns = await svg.getAttribute("xmlns");

        console.log(`width: ${width}, height: ${height}, viewBox: ${viewBox}, xmlns: ${xmlns}`);
    });

    test("locate SVG by CSS class or ID", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgByClass = page.locator("svg.some-class");
        const svgById = page.locator("svg#some-id");

        console.log(`SVG by class count: ${await svgByClass.count()}`);
        console.log(`SVG by id count: ${await svgById.count()}`);
    });

    test("locate SVG elements using XPath", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgByXPath = page.locator("//svg");
        const pathByXPath = page.locator("//svg//path");
        const circleByXPath = page.locator("//svg//circle[@id='some-id']");

        console.log(`SVG via xpath: ${await svgByXPath.count()}`);
        console.log(`SVG path via xpath: ${await pathByXPath.count()}`);
        console.log(`SVG circle via xpath: ${await circleByXPath.count()}`);
    });

    test("locate SVG with role selector", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgByRole = page.locator("role=img");
        console.log(`SVG with role=img: ${await svgByRole.count()}`);
    });

    test("hover over SVG element", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgElement = page.locator("svg").first();
        await svgElement.hover();
    });

    test("assert SVG element visibility", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svg = page.locator("svg").first();
        await expect(svg).toBeVisible();
    });

    test("assert SVG child element count", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svg = page.locator("svg").first();
        const childCount = await svg.locator("*").count();
        console.log(`SVG child element count: ${childCount}`);
        expect(childCount).toBeGreaterThanOrEqual(0);
    });

    test("extract inner text from SVG text elements", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgTexts = page.locator("svg text");
        const count = await svgTexts.count();

        for (let i = 0; i < count; i++) {
            const text = await svgTexts.nth(i).innerText();
            console.log(`SVG text[${i}]: ${text}`);
        }
    });

    test("locate SVG using nth() and first() / last()", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const firstSvg = page.locator("svg").first();
        const lastSvg = page.locator("svg").last();
        const nthSvg = page.locator("svg").nth(1);

        console.log(`First SVG visible: ${await firstSvg.isVisible()}`);
        console.log(`Last SVG visible: ${await lastSvg.isVisible()}`);
        console.log(`2nd SVG visible: ${await nthSvg.isVisible()}`);
    });

    test("locate SVG with has-text filter", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgWithText = page.locator("svg", { hasText: "search" });
        console.log(`SVG with 'search' text: ${await svgWithText.count()}`);
    });

    test("locate SVG using has filter (nested element)", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgWithCircle = page.locator("svg", { has: page.locator("circle") });
        console.log(`SVG containing circles: ${await svgWithCircle.count()}`);
    });

    test("locate SVG within a container element", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const container = page.locator("div.some-container");
        const svgInside = container.locator("svg");
        const pathInside = container.locator("svg path");

        console.log(`SVG inside container: ${await svgInside.count()}`);
        console.log(`Paths inside container: ${await pathInside.count()}`);
    });

    test("assert SVG fill or stroke attributes", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgPath = page.locator("svg path").first();
        const fill = await svgPath.getAttribute("fill");
        const stroke = await svgPath.getAttribute("stroke");
        const d = await svgPath.getAttribute("d");

        console.log(`fill: ${fill}, stroke: ${stroke}, d: ${d}`);
    });

    test("get all SVG element innerTexts at once", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const allTexts: string[] = await page.locator("svg text").allInnerTexts();
        console.log("All SVG text contents:", allTexts);
    });

    test("iterate over multiple SVG paths", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const paths = page.locator("svg path");
        const count = await paths.count();

        for (let i = 0; i < count; i++) {
            const d = await paths.nth(i).getAttribute("d");
            console.log(`Path[${i}] d attribute: ${d}`);
        }
    });

    test("assert SVG element count matches expected", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgCount = await page.locator("svg").count();
        expect(svgCount).toBeGreaterThanOrEqual(0);
    });

    test("locate SVG by data-testId or aria-label", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");

        const svgByTestId = page.locator("svg[data-testid='icon-search']");
        const svgByAria = page.locator("svg[aria-label='search']");

        console.log(`SVG by testId: ${await svgByTestId.count()}`);
        console.log(`SVG by aria-label: ${await svgByAria.count()}`);
    });

});
