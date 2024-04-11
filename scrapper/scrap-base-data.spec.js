const { test, expect } = require("@playwright/test");

test("can open index", async ({ page }) => {
  await page.goto("/scrapper/001/001");
  await expect(page).toHaveTitle("Provincia di Torino");
});
