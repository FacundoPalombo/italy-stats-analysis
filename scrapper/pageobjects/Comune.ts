import { expect, type Locator, type Page } from "@playwright/test";
import { Comune } from "../models/Comune";
import { comuneSelectors as $comune } from "../selectors/Comune.ts";

export class ComunePage {
  readonly page: Page;
  readonly url: string;
  readonly getTitle: Locator;
  accumulator: Comune[];

  constructor(page: Page, url: string, accumulator: Comune[]) {
    this.url = url;
    this.page = page;
    this.accumulator = accumulator;
    this.getTitle = page.locator("h1", { hasText: "Comune di" });
  }

  // Scrapping utilities
  async extractData(xpath) {
    return await this.page.locator(xpath).textContent();
  }

  async scrapData() {
    let scrappedData;

    for (let key of Object.keys($comune)) {
      const scrappedValue = await this.extractData($comune[key]);
      scrappedData = { ...scrappedData, [key]: scrappedValue };
    }

    this.accumulator.push(scrappedData);
  }

  // PageObject Execution an initialization
  async goto() {
    this.page.goto(this.url);
  }

  async getStarted() {
    await this.goto();
    await expect(this.getTitle).toHaveText(/Comune di/i);
  }
}
