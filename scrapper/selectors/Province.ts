import { ProvinceMapSelector, ProvinceSelector } from "../models/Province";

export const provinceSelectors: ProvinceSelector = {
  name: "//html/body/span[3]/table[1]/tbody/tr/td/h1",
  region:
    "//html/body/span[3]/table[2]/tbody/tr[1]/td[1]/table/tbody/tr[2]/td[2]/b/a",
  country_town:
    "//html/body/span[3]/table[2]/tbody/tr[1]/td[1]/table/tbody/tr[3]/td[2]/b/a",
  municipalities:
    "//html/body/span[3]/table[2]/tbody/tr[1]/td[1]/table/tbody/tr[4]/td[2]",
  initials:
    "//html/body/span[3]/table[2]/tbody/tr[1]/td[1]/table/tbody/tr[5]/td[2]",
  population_density:
    "//html/body/span[3]/table[2]/tbody/tr[1]/td[1]/table/tbody/tr[7]/td/b",
};

export const provinceMapSelectors: ProvinceMapSelector = {
  coordinates:
    "//html/body/span[3]/table[2]/tbody/tr[1]/td/table/tbody/tr/td/iframe",
};
