import { test, expect } from "@playwright/test";

test("scan states on svg map", async ({ request }) => {
  const svgUrl = "https://simplemaps.com/static/svg/country/in/admin1/in.svg";

  const response = await request.get(svgUrl);

  expect(response.ok()).toBeTruthy();

  const svgText = await response.text();

  const pathTags = [...svgText.matchAll(/<path\b[^>]*>/g)];

  console.log(`Total path tags found: ${pathTags.length}`);

  const states = [];

  for (const match of pathTags) {
    const pathTag = match[0];

    const idMatch = pathTag.match(/\bid=["']([^"']+)["']/);
    const nameMatch = pathTag.match(/\bname=["']([^"']+)["']/);

    const id = idMatch?.[1];
    const name = nameMatch?.[1];

    if (id && name) {
      states.push({ id, name });
    }
  }

  console.log(`Total states found: ${states.length}`);

  expect(states.length).toBeGreaterThan(0);

  for (const state of states) {
    console.log(`${state.id}: ${state.name}`);
  }
});