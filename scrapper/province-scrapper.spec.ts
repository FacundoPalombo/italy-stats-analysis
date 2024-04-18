import { test, expect } from "@playwright/test";

import { ProvincePage } from "./pageobjects/Province";

test("can open index", async ({ page }) => {
  const data = [];

  for (let i = 1; i < 5; i++) {
    const pageObject = new ProvincePage(page, `/scrapper/${i}`, data);
    await pageObject.getStarted();
  }

  console.log("tremendo", data);
});
