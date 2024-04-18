import { expect, type Locator, type Page } from "@playwright/test";
import { Province } from "../models/Province";
import { provinceSelectors as $province } from "../selectors/Province.ts";

export class ProvincePage {
  readonly page: Page;
  readonly url: string;
  readonly getTitle: Locator;
  accumulator: Province[];

  constructor(page: Page, url: string, accumulator: Province[]) {
    this.url = url;
    this.page = page;
    this.accumulator = accumulator;
    this.getTitle = page.locator("h1", { hasText: "Provincia di" });
  }

  // Scrapping utilities
  async extractData(xpath) {
    return await this.page.locator(xpath).textContent();
  }

  async scrapData() {
    let scrappedData;

    for (let key of Object.keys($province)) {
      const scrappedValue = await this.extractData($province[key]);
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
    await expect(this.getTitle).toHaveText(/Provincia di/i);
  }
}
